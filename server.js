require("dotenv").config();
const express = require("express");
const cors = require("cors");

const siswaRoutes = require("./src/routes/siswa.routes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/siswa", siswaRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    success: false,
    status: err.status || 500,
    error: err.message || "Internal Server Error",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
