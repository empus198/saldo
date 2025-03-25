require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.static("public"));

app.get("/api/saldo", async (req, res) => {
  try {
    const response = await axios.get(process.env.API_URL, {
      auth: {
        username: process.env.EMAIL,
        password: process.env.PASSWORD,
      },
    });
    res.json(response.data);
  } catch (error) {
    res
      .status(500)
      .json({
        status: false,
        message: "Gagal mengambil saldo",
        error: error.response.data,
      });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server berjalan di http://localhost:${process.env.PORT}`);
});
