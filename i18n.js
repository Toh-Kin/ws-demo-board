/* ═══════════════ 参加者ページの言語辞書 ═══════════════
   言語を足すときは、下の WB_LANGS に1行足し、WB_I18N に同じキーの一式を足す。
   ※ ベンガル語（bn）の文言は機械的な下訳に近いので、本番前に現地の方に確認してもらうこと。
   問いの文は運営ページで入力する（ここではない）。 */

var WB_LANGS = [
  { code: "ja", name: "日本語" },
  { code: "en", name: "English" },
  { code: "bn", name: "বাংলা" }
];

var WB_I18N = {
  ja: {
    boardNote: "ほかの言語で書かれた回答は自動翻訳して表示します。原文は下に小さく出ます。",
    nameLabel: "あなたの名前", namePh: "名前を入力", affilLabel: "所属・チーム（任意）", affilPh: "例：学校名、部署名",
    start: "はじめる", lang: "言語",
    rejoin: "同じ名前でもう一度入ると、続きから使えます。",
    welcome: "ようこそ", errName: "名前を入力してください", errNet: "つながりません。もう一度お試しください",
    gone: "登録が見つかりませんでした。もう一度名前を入力してください",
    tabQ: "問い", tabBoard: "ボード", tabQA: "Q&A", tabGroup: "グループ",
    noQuestions: "問いはまだ登録されていません",
    showOther: "他の言語も表示",
    write: "ここに書いてください…", send: "送信", sendChanges: "修正を送信", sentOk: "送信済み",
    unsent: "未送信", sentMsg: "送信しました", nochange: "内容が変わっていません",
    emptyErr: "先に回答を書いてください", fail: "送信できませんでした。もう一度お試しください",
    autoSaved: "下書きは自動で保存されます", translateNote: "書いた言語は自動で見分け、ほかの言語に翻訳されます",
    sortBy: "並び順", byQ: "問い順", byG: "グループ順", allQ: "すべての問い", allG: "すべてのグループ",
    noAnswers: "まだ回答がありません", original: "原文", autoTr: "自動翻訳", mine: "あなた", noGroup: "グループ未定",
    qaIntro: "気になった質問や言葉を、いつでも書いてください。みんなに見えます。運営が回答したらお知らせします。",
    kindQ: "質問", kindW: "言葉・用語", qaPh: "質問や、わからなかった言葉を書く…", post: "投稿",
    posted: "投稿しました", all: "すべて", open: "未回答", answered: "回答済み", fAnswer: "運営の回答",
    noQA: "まだ投稿がありません",
    groupWait: "グループの発表をお待ちください", groupWaitSub: "運営が配置を確認してから、ここに表示されます。",
    groupYours: "あなたのグループ", members: "メンバー", you: "あなた", groupN: "グループ {n}", qN: "問い {n}",
    notYou: "別の名前で入り直す", notYouAsk: "名前を変えて入り直しますか？（回答はそのまま残ります）",
    timerNone: "タイマーなし", timeUp: "時間です", paused: "一時停止中",
    offline: "接続が不安定です。再接続を試しています…", registeredAs: "登録名"
  },
  en: {
    boardNote: "Answers written in other languages are auto-translated. The original is shown below.",
    nameLabel: "Your name", namePh: "Type your name", affilLabel: "Organization / team (optional)", affilPh: "e.g. school or department",
    start: "Start", lang: "Language",
    rejoin: "Enter the same name again to continue where you left off.",
    welcome: "Welcome", errName: "Please enter your name", errNet: "Could not connect. Please try again.",
    gone: "Your registration was not found. Please enter your name again.",
    tabQ: "Questions", tabBoard: "Board", tabQA: "Q&A", tabGroup: "Group",
    noQuestions: "No questions have been set up yet",
    showOther: "Show other languages",
    write: "Write here…", send: "Send", sendChanges: "Send changes", sentOk: "Sent",
    unsent: "Not sent yet", sentMsg: "Sent", nochange: "Nothing has changed",
    emptyErr: "Please write your answer first", fail: "Could not send. Please try again.",
    autoSaved: "Drafts are saved automatically", translateNote: "Your language is detected and your text is translated for others",
    sortBy: "Sort", byQ: "By question", byG: "By group", allQ: "All questions", allG: "All groups",
    noAnswers: "No answers yet", original: "Original", autoTr: "Auto-translated", mine: "You", noGroup: "No group yet",
    qaIntro: "Post any question or word you wonder about, any time. Everyone can see it. You will see when the facilitator has answered.",
    kindQ: "Question", kindW: "Word / term", qaPh: "Write a question, or a word you did not understand…", post: "Post",
    posted: "Posted", all: "All", open: "Open", answered: "Answered", fAnswer: "Facilitator's answer",
    noQA: "No posts yet",
    groupWait: "Please wait for the group announcement", groupWaitSub: "It will appear here once the facilitator has confirmed the groups.",
    groupYours: "Your group", members: "Members", you: "You", groupN: "Group {n}", qN: "Q{n}",
    notYou: "Not you? Enter a different name", notYouAsk: "Enter a different name? (Your answers stay where they are.)",
    timerNone: "No timer", timeUp: "Time's up", paused: "Paused",
    offline: "Connection is unstable. Retrying…", registeredAs: "Signed in as"
  },
  bn: {
    boardNote: "অন্য ভাষায় লেখা উত্তর স্বয়ংক্রিয়ভাবে অনুবাদ করে দেখানো হয়। মূল লেখা নিচে ছোট করে দেওয়া থাকে।",
    nameLabel: "আপনার নাম", namePh: "আপনার নাম লিখুন", affilLabel: "প্রতিষ্ঠান / দল (ঐচ্ছিক)", affilPh: "যেমন: স্কুল বা বিভাগের নাম",
    start: "শুরু করুন", lang: "ভাষা",
    rejoin: "একই নাম আবার লিখলে আগের জায়গা থেকেই চালিয়ে যেতে পারবেন।",
    welcome: "স্বাগতম", errName: "অনুগ্রহ করে আপনার নাম লিখুন", errNet: "সংযোগ করা যায়নি। আবার চেষ্টা করুন।",
    gone: "আপনার নিবন্ধন পাওয়া যায়নি। অনুগ্রহ করে আবার নাম লিখুন।",
    tabQ: "প্রশ্ন", tabBoard: "বোর্ড", tabQA: "প্রশ্নোত্তর", tabGroup: "গ্রুপ",
    noQuestions: "এখনও কোনো প্রশ্ন দেওয়া হয়নি",
    showOther: "অন্যান্য ভাষাও দেখান",
    write: "এখানে লিখুন…", send: "পাঠান", sendChanges: "পরিবর্তন পাঠান", sentOk: "পাঠানো হয়েছে",
    unsent: "এখনও পাঠানো হয়নি", sentMsg: "পাঠানো হয়েছে", nochange: "কিছু পরিবর্তন হয়নি",
    emptyErr: "আগে আপনার উত্তর লিখুন", fail: "পাঠানো যায়নি। আবার চেষ্টা করুন।",
    autoSaved: "খসড়া নিজে থেকেই সংরক্ষিত হয়", translateNote: "আপনি যে ভাষায় লিখবেন তা শনাক্ত হবে এবং অন্যদের জন্য অনুবাদ হবে",
    sortBy: "সাজান", byQ: "প্রশ্ন অনুযায়ী", byG: "গ্রুপ অনুযায়ী", allQ: "সব প্রশ্ন", allG: "সব গ্রুপ",
    noAnswers: "এখনও কোনো উত্তর নেই", original: "মূল লেখা", autoTr: "স্বয়ংক্রিয় অনুবাদ", mine: "আপনি", noGroup: "এখনও গ্রুপ নেই",
    qaIntro: "যেকোনো সময় আপনার প্রশ্ন বা অজানা শব্দ লিখুন। সবাই দেখতে পারবে। সঞ্চালক উত্তর দিলে এখানে দেখা যাবে।",
    kindQ: "প্রশ্ন", kindW: "শব্দ", qaPh: "একটি প্রশ্ন বা না বোঝা শব্দ লিখুন…", post: "পোস্ট করুন",
    posted: "পোস্ট করা হয়েছে", all: "সব", open: "উত্তর বাকি", answered: "উত্তর দেওয়া হয়েছে", fAnswer: "সঞ্চালকের উত্তর",
    noQA: "এখনও কোনো পোস্ট নেই",
    groupWait: "গ্রুপ ঘোষণার জন্য অপেক্ষা করুন", groupWaitSub: "সঞ্চালক গ্রুপ নিশ্চিত করলে এখানে দেখা যাবে।",
    groupYours: "আপনার গ্রুপ", members: "সদস্য", you: "আপনি", groupN: "গ্রুপ {n}", qN: "প্রশ্ন {n}",
    notYou: "অন্য নামে ঢুকুন", notYouAsk: "অন্য নামে ঢুকবেন? (আপনার উত্তর যেমন আছে তেমনই থাকবে।)",
    timerNone: "টাইমার নেই", timeUp: "সময় শেষ", paused: "বিরতি",
    offline: "সংযোগ অস্থির। আবার চেষ্টা করা হচ্ছে…", registeredAs: "প্রবেশ করেছেন"
  }
};
