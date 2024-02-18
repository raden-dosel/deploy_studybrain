const express = require("express");
const Event = require("../models/event_Model");
const {
  create_Event,
  get_AllEvents,
  get_SingleEvent,
  delete_Event,
  update_Event,
} = require("../controllers/event_Controller");

const router = express.Router();

//Get all Events
router.get("/", get_AllEvents);

//Get a single Event
router.get("/:id", get_SingleEvent);

//Post a new Event
router.post("/", create_Event);

//Delete a Event
router.delete("/:id", delete_Event);

//Update a Event
router.patch("/:id", update_Event);

module.exports = router;
