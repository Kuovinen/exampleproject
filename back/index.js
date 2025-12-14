const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// GET endpoint
app.get("/data", (req, res) => {
  console.log("hit");
  res.json({ data: "value" });
});

// POST endpoint
app.post("/data/", (req, res) => {
  console.log(`POST request received with body: ${JSON.stringify(req.body)}`);
});

// DELETE endpoint
app.delete("/data/:id", (req, res) => {
  res.json(`DELETE request received for id: ${req.params.id}`);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
