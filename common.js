/* 参加者ページと運営ページで共通の道具 */
var WB = (function () {
  var CFG = window.WB_CONFIG || {};
  var clockOff = 0;                         // サーバー時計 − 端末時計（ミリ秒）

  function ls(k, v) {
    try {
      if (v === undefined) return localStorage.getItem(k);
      if (v === null) localStorage.removeItem(k); else localStorage.setItem(k, v);
    } catch (e) { return null; }
    return v;
  }
  function ss(k, v) {
    try {
      if (v === undefined) return sessionStorage.getItem(k);
      if (v === null) sessionStorage.removeItem(k); else sessionStorage.setItem(k, v);
    } catch (e) { return null; }
    return v;
  }

  function esc(s) {
    return String(s === undefined || s === null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function withTimeout(promise, ms, ctrl) {
    var timer = setTimeout(function () { try { ctrl.abort(); } catch (e) {} }, ms);
    return promise.then(function (r) { clearTimeout(timer); return r; },
                        function (e) { clearTimeout(timer); throw e; });
  }

  /** 読み取り。失敗しても例外にせず {ok:false,error:'network'} を返す */
  function get(action, params) {
    var t0 = Date.now();
    var qs = 'action=' + encodeURIComponent(action);
    Object.keys(params || {}).forEach(function (k) { qs += '&' + k + '=' + encodeURIComponent(params[k]); });
    qs += '&_=' + t0;
    var ctrl = typeof AbortController !== 'undefined' ? new AbortController() : { abort: function () {} };
    return withTimeout(fetch(CFG.gas + (CFG.gas.indexOf('?') < 0 ? '?' : '&') + qs, { signal: ctrl.signal }), 20000, ctrl)
      .then(function (r) { return r.json(); })
      .then(function (j) {
        var t1 = Date.now();
        if (j && j.now) clockOff = j.now - (t0 + t1) / 2;   // 往復の真ん中で合わせる
        return j;
      })
      .catch(function () { return { ok: false, error: 'network' }; });
  }

  /** 書き込み。Content-Type を text/plain にして、事前確認の通信を避ける */
  function post(obj) {
    var ctrl = typeof AbortController !== 'undefined' ? new AbortController() : { abort: function () {} };
    return withTimeout(fetch(CFG.gas, {
      method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(obj), signal: ctrl.signal
    }), 40000, ctrl)
      .then(function (r) { return r.json(); })
      .catch(function () { return { ok: false, error: 'network' }; });
  }

  function now() { return Date.now() + clockOff; }

  /** タイマーの残りミリ秒。動いていなければ null（一時停止中は残りを返す） */
  function remaining(tm) {
    if (!tm) return null;
    if (tm.run) return tm.end - now();
    if (tm.left > 0) return tm.left;
    return null;
  }

  function fmt(ms) {
    var s = Math.max(0, Math.ceil(ms / 1000)), h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), x = s % 60;
    var two = function (n) { return (n < 10 ? '0' : '') + n; };
    return h ? h + ':' + two(m) + ':' + two(x) : m + ':' + two(x);
  }

  function t(lang, key, vars) {
    var d = (window.WB_I18N || {});
    var s = (d[lang] && d[lang][key]) || (d.en && d.en[key]) || key;
    if (vars) Object.keys(vars).forEach(function (k) { s = s.replace('{' + k + '}', vars[k]); });
    return s;
  }

  function detectUiLang() {
    var n = String((navigator.language || 'en')).toLowerCase();
    if (n.indexOf('ja') === 0) return 'ja';
    if (n.indexOf('bn') === 0) return 'bn';
    return 'en';
  }

  var GCOL = ['#1E3A6E', '#C4362F', '#2F7D4F', '#9C6B1E', '#6B3FA0', '#0F7C8A', '#B0457A', '#5B6B2A'];
  function gcolor(g) {
    var n = parseInt(g, 10);
    return n > 0 ? GCOL[(n - 1) % GCOL.length] : '#8C8275';
  }

  /** 問いの文を、指定の言語で。空なら他の言語で補う */
  function qText(q, lang) {
    return q[lang] || q.en || q.ja || q.bn || '';
  }

  function langName(code) {
    var l = (window.WB_LANGS || []).filter(function (x) { return x.code === code; })[0];
    return l ? l.name : code;
  }

  function debounce(fn, ms) {
    var h;
    return function () { var a = arguments, c = this; clearTimeout(h); h = setTimeout(function () { fn.apply(c, a); }, ms); };
  }

  /** 並べ替え用：日本語・ベンガル語・英語が混ざっても落ちない比較 */
  function cmp(a, b) { return String(a).localeCompare(String(b)); }

  return { cfg: CFG, ls: ls, ss: ss, esc: esc, get: get, post: post, now: now, remaining: remaining, fmt: fmt,
           t: t, detectUiLang: detectUiLang, gcolor: gcolor, qText: qText, langName: langName,
           debounce: debounce, cmp: cmp };
})();
