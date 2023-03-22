const express = require("express");

const { CampModel } = require("../model/Camps.model");
const campRouter = express.Router();

campRouter.get("/", async (req, res) => {
  try {
    const camps = await CampModel.find();
    res.status(200).send(camps);
  } catch (err) {
    res.status(404).send({ msg: "error connecting to api" });
  }
});

campRouter.get("/:state", async (req, res) => {
  try {
    const state = req.params.state;

    const camps = await CampModel.find({ state: state });
    res.status(200).send(camps);
  } catch (err) {
    res.status(404).send({ msg: "error connecting to api" });
  }
});

campRouter.post("/camps", async (req, res) => {
  try {
    const data = req.body;

    const camp = new CampModel(data);
    await camp.save();

    res.send({ msg: "added" });
  } catch (err) {
    res.send({ msg: "failsed" });
  }
});

campRouter.get("/type/:discover", async (req, res) => {
  try {
    const discover = req.params.discover;

    const camps = await CampModel.find({ discover: discover });
    res.status(200).send(camps);
  } catch (err) {
    res.status(404).send({ msg: "error connecting to api" });
  }
});

campRouter.get("/state/nods", async (req, res) => {
  try {
    let alldata = [];

    let state = [
      "Andhra Pradesh",
      "Arunachal Pradesh",
      "Assam",
      "Bihar",
      "Chhattisgarh",
      "Goa",
      "Gujarat",
      "Haryana",
      "Himachal Pradesh",
      "Jammu and Kashmir",
      "Jharkhand",
      "Karnataka",
      "Kerala",
      "Madhya Pradesh",
      "Maharashtra",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Odisha",
      "Punjab",
      "Rajasthan",
      "Sikkim",
      "Tamil Nadu",
      "Telangana",
      "Tripura",
      "Uttarakhand",
      "Uttar Pradesh",
      "West Bengal",
      "Andaman and Nicobar Islands",
      "Chandigarh",
      "Dadra and Nagar Haveli",
      "Daman and Diu",
      "Delhi",
      "Lakshadweep",
      "Puducherry",
    ];

    const camps = await CampModel.find();

    for (let i = 0; i < camps.length; i++) {
      if (state.includes(camps[i].state)) {
        if (alldata.includes(camps[i].state)) {
          continue;
        } else {
          alldata.push(camps[i].state);
        }
      }
    }

    res.status(200).send(alldata);
  } catch (err) {
    res.status(404).send({ msg: "error connecting to api" });
  }
});

module.exports = {
  campRouter,
};
