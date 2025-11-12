# 🌦️ WeatherNow ｜即時天氣小幫手

一個以 **React 19** 開發的即時天氣應用程式，  
透過 **中央氣象局開放資料 API (CWB Open Data API)** 即時顯示台灣各縣市天氣。  
現已升級為使用 **Vercel Serverless API** 部署版本，安全隱藏金鑰，並支援自動化部署。

---

## 🚀 功能特色

- 即時查詢全台各縣市的天氣資訊
- 顯示氣溫、天氣狀況、降雨機率、紫外線指數等資訊
- 下拉選單切換城市即刻更新資料
- RWD 響應式介面，支援手機與桌機瀏覽
- 使用 SVG + CSS 動畫展示各種天氣情境
- 折線圖自動根據季節變化縮放比例（夏冬皆平衡顯示）

---

## 🛠️ 使用技術

- [React 19](https://react.dev/)
- JavaScript (ES6+)
- [Axios](https://axios-http.com/) — 處理 API 請求
- [React Router DOM](https://reactrouter.com/) — 路由切換
- [Day.js](https://day.js.org/) — 處理日期時間
- CSS + SVG Animation
- [Vercel Serverless Functions](https://vercel.com/docs/functions/serverless-functions) — 後端金鑰隱藏

---

## ⚙️ 專案重點與挑戰

### 1️⃣ 改善 API 金鑰安全性

原本使用：
\```js
const apiKey = process.env.REACT_APP_AUTH_KEY;
fetch(`https://opendata.cwa.gov.tw/...&Authorization=${apiKey}`);
\```
這樣在部署後會洩漏金鑰。

✅ 解法：改用 **Vercel Serverless Function** 代理請求。
\```js
// /api/weather.js
import axios from "axios";

export default async function handler(req, res) {
const { location = "臺北市" } = req.query;
const auth = process.env.AUTH_KEY;
const url = `https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=${auth}&LocationName=${location}&format=JSON`;
const result = await axios.get(url);
res.status(200).json(result.data);
}
\```

前端僅呼叫：
\```js
axios.get(`/api/weather?location=${select}`);
\```

---

### 2️⃣ 折線圖動態縮放

夏天溫差大、冬天溫差小時導致顯示不平衡。  
✅ 解法：根據最高與最低溫自動調整縮放比例，並加上平滑係數讓折線更自然。

---

## 📦 安裝與執行

### 1️⃣ Clone 專案

\```bash
git clone https://github.com/doriskuo/weather-app.git
cd weather-app
\```

### 2️⃣ 安裝套件

\```bash
npm install
\```

### 3️⃣ 建立 `.env` 檔案

本地開發使用：
\```bash
REACT_APP_AUTH_KEY=你的氣象署授權碼
\```

---

## 💻 本地開發

\```bash
npm start
\```

本地環境會自動使用 `.env` 的金鑰直連氣象署 API。  
上線部署後會自動改用 `/api/weather`（Serverless Function 代理）。

---

## ☁️ 部署到 Vercel

1️⃣ 推送專案至 GitHub  
2️⃣ 前往 [Vercel](https://vercel.com/) → Import Project  
3️⃣ 在專案設定 → Environment Variables 新增：
\```
AUTH_KEY=你的氣象署金鑰
\```
4️⃣ 按下 **Deploy**，完成自動部署 🎉

---

## 📂 專案結構

\```bash
weather-app/
├── api/
│ └── weather.js # Serverless Function（隱藏 API 金鑰）
├── src/
│ ├── component/
│ │ ├── Weather.jsx
│ │ ├── Weektemperature.jsx
│ │ └── ...
│ ├── pages/
│ │ ├── Homepage.jsx
│ │ ├── About.jsx
│ │ └── Page404.jsx
│ ├── App.js
│ └── index.js
├── .env # 僅本地使用，不上傳 GitHub
├── package.json
└── README.md
\```

---

## 🌈 成果展示

![WeatherNow 頁面預覽](/public/project.jpg)

---

## 🔮 後續優化方向

- 加入即時氣象跑馬燈公告
- 整合颱風即時追蹤資料
- 使用 Redux 或 Context API 優化狀態管理
- 新增 Dark Mode 支援

---

## 📄 授權

本專案僅作為學習用途，無商業使用授權。  
資料來源：[中央氣象局開放資料平台](https://opendata.cwa.gov.tw/)
