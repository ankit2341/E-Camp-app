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

module.exports = {
  campRouter,
};
