# Weather App 🌤️


![Screenshot / スクリーンショット](public/screenshot.png)

*※ サンプル表示です。 / Sample screen.*

現在地の天気に合わせて、画面の世界そのものが変わる React 製の天気アプリ。
天気ごとにアニメーション動画・BGM・イラストが切り替わり、雰囲気ごと体験できる。

A React weather app where the whole screen changes with your local weather.
More than just a forecast — the background animation, BGM, and illustrations
all switch depending on the weather, so you can *feel* it, not just read it.



---

## ✨ 特徴 / Features

| 日本語 | English |
|---|---|
| 現在地を自動取得して天気を表示 | Auto-detects your location and shows local weather |
| 天気で背景アニメ動画を出し分け（快晴・晴れ〜曇り・曇り・雨） | Switches background animation video by weather (clear / partly cloudy / cloudy / rain) |
| ピアノBGMをボタンでオン／オフ | Toggle piano BGM on/off with a button |
| パステル調のオリジナルロゴ・イラスト | Original pastel-style logo and illustrations |

## 🛠 使用技術 / Tech Stack

- **React** (Vite)
- **useState / useEffect** — 状態管理と初回データ取得 / state & initial data fetch
- **Geolocation API** — 現在地の緯度・経度を取得 / get current latitude & longitude
- **Open-Meteo API** — 天気コード・気温を取得（登録不要・無料）/ fetch weather code & temperature (free, no key)
- 天気コードによる条件分岐で動画・テキストを出し分け / conditional rendering by weather code

## 📡 データの流れ / Data Flow

```
Geolocation (get location)
   ↓ latitude / longitude
Open-Meteo API
   ↓ weather code / temperature
Judge by weather code
   ↓
Show matching video / weather name / temperature
```

## 🚀 起動方法 / Getting Started

```bash
npm install
npm run dev
```

表示された `localhost` の URL をブラウザで開き、位置情報を「許可」してください。
Open the `localhost` URL shown, and allow location access.

## 🔒 セキュリティ / Security

- **CSP** — `index.html` でスクリプト・通信・画像の読み込み元を自サイトと Open-Meteo API に限定（XSS・クリックジャッキング対策）。
  Limits script / connection / image sources to this site and the Open-Meteo API (XSS & clickjacking).
- 位置情報は天気APIへの問い合わせにのみ使用し、外部送信・保存はしない。
  Location is used only to query the weather API — not sent or stored elsewhere.
- 依存パッケージは `npm audit` で確認（現状 0 件）。
  Dependencies checked with `npm audit` (currently 0 issues).

## 📝 今後の拡張予定 / Roadmap

- タイトルに地名を自動表示（逆ジオコーディング）/ Show place name (reverse geocoding)
- 数日先までの予報 / Multi-day forecast
- お気に入りの地点を保存 / Save favorite locations
