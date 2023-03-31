const mongoose=require("mongoose");

const bookingsSchema=mongoose.Schema({
    username:String,
    user_id:String,
    booking_name:String,  
    booking_location:String,
    payment_status:Boolean,
    booking_members:[
        {
            name:String,
            age:Number
        }
    ]
});

const BookingsModel=mongoose.model("bookings",bookingsSchema);

module.exports={
    BookingsModel
}