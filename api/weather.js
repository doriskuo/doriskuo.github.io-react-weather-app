import axios from "axios";

export default async function handler(req, res) {
  const { location = "臺北市" } = req.query; // 前端傳入地點
  const auth = process.env.AUTH_KEY; // 🔐 這裡從 Vercel 讀取環境變數

  const url = `https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=${auth}&LocationName=${location}&format=JSON`;

  try {
    const response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Weather API Error:", error.message);
    res.status(500).json({ error: "無法取得天氣資料" });
  }
}
