const mongoose = require("mongoose");

const campSchema=mongoose.Schema({
  url: String,
  img: String,
  Bookings_name__1IKPG: String,
  discover:String,
  location: String,
  state:String,
  Bookings_price__YVqxb: String,
  Bookings_person__3ao1H: String
});

const CampModel=mongoose.model("camps",campSchema);

module.exports={
    CampModel
}


