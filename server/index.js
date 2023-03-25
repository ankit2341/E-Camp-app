const {connection}=require("./config/database");
const {campRouter}=require("./routes/Camp.route");
const {userRouter}=require("./routes/User.route");
const cors=require("cors");
const express=require("express");
const { bookingRouter } = require("./routes/Bookings.route");
const { eventsRouter } = require("./routes/Events.route");
const app=express();
app.use(express.json());
app.use(cors({origin:"*"}));
app.use("/camps",campRouter);
app.use("/users",userRouter);
app.use("/bookings",bookingRouter);
app.use("/events",eventsRouter);

app.get("/",async(req,res)=>{
    try{
       res.status(200).send("welocme to ecamp database");
    }
    catch(err){
        res.status(404).send({"msg":"error connecting to api"})
    }
})

app.listen(4500,async(req,res)=>{
    try{
        await connection;
        console.log("connected to db")
    }
    catch(err){
        console.log(err)
    }
    console.log("running server")
})