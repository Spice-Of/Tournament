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
    title: "エントリー受付を開始しました",
    date: "2026.7.10",
    desc: "Spice Of Tournament 参加登録の受付を開始しました。",
    tweetUrl: "https://x.com/spiceofvrinks/status/2072435797371027600"
  },
  {
    title: "お知らせタイトル②",
    date: "2026.—.—",
    desc: "ここに説明文を入れてください。",
    tweetUrl: ""
  },
  {
    title: "お知らせタイトル③",
    date: "2026.—.—",
    desc: "ここに説明文を入れてください。",
    tweetUrl: ""
  }
];
