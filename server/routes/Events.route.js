const express = require("express");
const { auth } = require("../middleware/auth");

const { EventsModel } = require("../model/Events.model");
const eventsRouter = express.Router();

eventsRouter.get("/", async (req, res) => {
  try {
    const events = await EventsModel.find();
    res.status(200).send(events);
  } catch (err) {
    res.status(404).send({ msg: "404 error" });
  }
});

eventsRouter.get("/:event_id", async (req, res) => {
  const id = req.params.event_id;
  try {
    const events = await EventsModel.find({ _id: id });
    res.status(200).send(events);
  } catch (err) {
    res.status(404).send({ msg: "404 error" });
  }
});

eventsRouter.use(auth);

eventsRouter.post("/", async (req, res) => {
  const body = req.body;
  try {
    const events = new EventsModel(body);
    await events.save();
    res.status(200).send({ msg: "event added" });
  } catch (err) {
    res.status(404).send({ msg: "404 error" });
  }
});

eventsRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await EventsModel.findByIdAndDelete({ _id: id });
    res.status(200).send({ msg: "deleted" });
  } catch (err) {
    res.status(404).send({ msg: "404 eror" });
  }
});

eventsRouter.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const payload = req.body;

  try {
    await EventsModel.findByIdAndUpdate({ _id: id }, payload);
    res.status(200).send({ msg: "updated" });
  } catch (err) {
    res.status(404).send({ msg: "404 eror" });
  }
});


module.exports = {
  eventsRouter,
};
