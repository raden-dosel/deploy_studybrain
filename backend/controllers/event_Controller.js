const Event = require("../models/event_Model");
const mongoose = require("mongoose");

//Get all events
const get_AllEvents = async (req, res) => {
  try {
    const events = await Event.find({}).sort({ createdAt: -1 });
    res.status(200).json({ events });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

//Get a single Event
const get_SingleEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(404).json({ error: "Event not found" });
    }

    if (!event) {
      // If event is not found, send a 404 response
      return res.status(404).json({ error: "Event not found" });
    }

    // If event is found, send a 200 response with the event
    res.status(200).json({ event });
  } catch (err) {
    // If an error occurs, send a 400 response with the error message
    res.status(400).json({ error: err.message });
  }
};

//Post a new Event
const create_Event = async (req, res) => {
  const { title, description, startDate, endDate, isDone } = req.body;

  //add doc to db
  try {
    const event = await Event.create({
      title,
      description,
      startDate,
      endDate,
      isDone,
    });
    res.status(200).json({ event });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

//Delete a Event
const delete_Event = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(404).json({ error: "Event not found" });
    }

    const event = await Event.findByIdAndDelete(req.params.id);

    if (!event) {
      // If event is not found, send a 404 response
      return res.status(404).json({ error: "Event not found" });
    }

    // If event is deleted successfully, send a 200 response
    res.status(200).json({ message: "Event deleted successfully" });
  } catch (err) {
    // If an error occurs, send a 400 response with the error message
    res.status(400).json({ error: err.message });
  }
};

//Update a Event
const update_Event = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(404).json({ error: "Event not found" });
    }

    const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!event) {
      // If event is not found, send a 404 response
      return res.status(404).json({ error: "Event not found" });
    }
    // If event is updated successfully, send a 200 response
    res.status(200).json({ event });
  } catch (err) {
    // If an error occurs, send a 400 response with the error message
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  create_Event,
  get_AllEvents,
  get_SingleEvent,
  delete_Event,
  update_Event,
};
