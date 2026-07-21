// 関連情報データ
// ここに情報を追加・編集するだけで、トップページ（最新3件）と news.html（全件）両方に反映されます。
//
// 【追加方法】配列の先頭に新しいオブジェクトを追加してください（新しいものを上に）。
// tweetUrl : X（旧Twitter）の投稿URL。無い場合は空文字 "" にしてください。
// title    : 見出し（お知らせのタイトル）
// date     : 表示用の日付（例："2026.7.10"）
// desc     : 一言説明（省略可、空文字でもOK）

const newsData = [
  {
    title: "協力応援団体発表",
    date: "2026.7.21",
    desc: "",
    tweetUrl: "https://x.com/SpiceOfVRinks/status/2079325479987716465?s=20"
  },

  {
    title: "アンバサダー配信あります！",
    date: "2026.7.20",
    desc: "",
    tweetUrl: "https://x.com/SpiceOfVRinks/status/2078967943669715394?s=20"
  },
  {
    title: "いななほさんのASMR怪談動画",
    date: "2026.7.20",
    desc: "",
    tweetUrl: "https://x.com/NoControl1999/status/2078858002669711411?s=20"
  },
  {
    title: "エントリー受付を開始しました",
    date: "2026.7.10",
    desc: "Spice Of Tournament 参加登録の受付を開始しました。",
    tweetUrl: "https://x.com/spiceofvrinks/status/2072435797371027600"
  }
];
