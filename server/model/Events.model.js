const mongoose = require("mongoose");

const eventsSchema=mongoose.Schema({
  img: String,
  Bookings_name__1IKPG: String,
  location: String,
  Bookings_price__YVqxb: String,
  description:String
});

const EventsModel=mongoose.model("events",eventsSchema);

module.exports={
    EventsModel
}
