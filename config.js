/* ═══════════════ 設定 ═══════════════
   書き換えるのは gas の1行だけ。
   Apps Script の「デプロイ」で出てきたウェブアプリ URL（…/exec で終わるもの）を貼る。
   合言葉はここには書かない（Code.gs の ADMIN_PASS にだけ書く）。 */
window.WB_CONFIG = {
  gas: "https://script.google.com/macros/s/AKfycbxZJA7SzkRCSZeCM5jNSmOxV_mGEsCvt7fU9usYcn0Rbyq5kRUyuoylVNrY1teQbBSCIg/exec",
  pollSec: 6          /* 参加者の端末が状態を取りに行く間隔（秒） */
};
