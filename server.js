const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

// 🔗 MongoDB connection (we’ll use local first)
mongoose.connect("mongodb://127.0.0.1:27017/crypto_insider");

const LeadSchema = new mongoose.Schema({
    value: String,
    time: { type: Date, default: Date.now }
});

const Lead = mongoose.model("Lead", LeadSchema);

// Save lead
app.post("/lead", async (req, res) => {
    await Lead.create({ value: req.body.value });
    res.json({ success: true });
});

// Get leads
app.get("/leads", async (req, res) => {
    const leads = await Lead.find().sort({ time: -1 });
    res.json(leads);
});

// Click tracking
app.post("/click", (req, res) => {
    console.log("Click:", req.body);
    res.json({ success: true });
});

app.listen(3000, () => {
    console.log("Crypto system running with MongoDB on port 3000");
});
