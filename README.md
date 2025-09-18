# 🌦️ WeatherNow ｜即時天氣小幫手

一個使用 **React 19** 開發的即時天氣應用程式，透過 **中央氣象局開放資料 API (CWB Open Data API)** 取得台灣各縣市的天氣資訊。  
介面設計簡潔，支援即時更新，並結合 CSS 動畫與 Tailwind CSS 呈現動態效果。

---

## 🚀 功能特色

- 查詢特定城市/地區的天氣資訊
- 顯示當前氣溫、天氣狀況、降雨機率等資料
- 下拉選單切換城市，立即更新對應天氣
- 結合 CSS Animation 與 SVG，生動展示各種天氣狀況
- RWD 響應式設計，支援手機與桌機瀏覽

---

## 🛠️ 使用技術

- [React 19](https://react.dev/)
- JavaScript (ES6+)
- Fetch API 串接中央氣象局 API
- [React Router DOM](https://reactrouter.com/)
- CSS SVG Animation

---

## ⚙️ 開發過程與挑戰

1. **API 串接困難**

   - 一開始將 API key 寫在 header 導致無法正確取回資料。
   - 解法：調整為放在 URL query string 中，成功獲取 JSON 資料。

2. **資料結構複雜**

   - 中央氣象局 API 回傳的資料冗長龐大。
   - 解法：改成使用下拉選單，讓使用者選擇縣市以顯示所需資訊，避免渲染全部資料。

3. **useState 延遲問題**
   - 切換縣市時會先出現上一次的資料。
   - 解法：在 `useEffect` 中監聽 city 變化，確保即時正確更新。

---

## 🔍 程式碼亮點

```jsx
const [city, setCity] = useState("Taipei");
const [weather, setWeather] = useState(null);

useEffect(() => {
  fetch(`https://opendata.cwb.gov.tw/api/v1/rest/datastore/...&locationName=${city}&Authorization=${API_KEY}`)
    .then(res => res.json())
    .then(data => setWeather(data.records.location[0]));
}, [city]);
✅ 亮點：利用 useEffect 監聽城市變化，確保資料與使用者選擇保持同步。

📦 安裝與使用
Clone 專案

bash
複製程式碼
git clone https://github.com/doriskuo/weather-app.git
cd weather-app
安裝套件

bash
複製程式碼
npm install
建立 .env 檔案，新增 API 金鑰

bash
複製程式碼
REACT_APP_CWB_API_KEY=你的_API_金鑰
啟動開發伺服器

bash
複製程式碼
npm start
開啟瀏覽器，訪問 http://localhost:3000

🔑 取得 API 金鑰
前往 中央氣象局開放資料平台 申請會員，並取得 API Key。

📂 專案結構
pgsql
複製程式碼
weather-app/
├── public/
│   └── index.html
├── src/
│   ├── components/   # React 元件
│   ├── pages/        # Router 分頁
│   ├── App.js
│   ├── Layout.js
│   └── index.js
├── .env
├── package.json
└── README.md

📸 成果展示

！[網頁圖片](https://github.com/doriskuo/doriskuo.github.io-react-weather-app/blob/master/public/project.jpg?raw=true)


🚀 後續優化方向

加入即時氣象跑馬燈公告

增加颱風動態追蹤功能

改用 Redux / Context API 進行狀態管理

📄 授權
本專案僅作為學習用途，無商業使用授權。

```
