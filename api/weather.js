import axios from "axios";

export default async function handler(req, res) {
  try {
    const { location = "臺北市" } = req.query;
    const auth = process.env.AUTH_KEY;

    if (!auth) {
      return res.status(500).json({
        error: "AUTH_KEY not found",
      });
    }

    const url = `https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=${auth}&LocationName=${location}&format=JSON`;

    const response = await axios.get(url, {
      headers: { "User-Agent": "Mozilla/5.0" }, // 模擬瀏覽器
    });

    return res.status(200).json(response.data);
  } catch (error) {
    console.error(
      "❌ Weather API error:",
      error.response?.status,
      error.response?.data || error.message
    );
    res.status(500).json({
      error: "Server error",
      status: error.response?.status || null,
      details: error.response?.data || error.message,
    });
  }
}
