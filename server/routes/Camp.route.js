const express = require("express");
const { auth } = require("../middleware/auth");

const { CampModel } = require("../model/Camps.model");
const campRouter = express.Router();

campRouter.get("/", async (req, res) => {
  const {page}=req.query;
  try {
    if(page!=undefined){
      if(page==1){
        const camps = await CampModel.find().skip(0).limit(8);
    res.status(200).send(camps);
      }
      else{
        const camps = await CampModel.find().skip((page-1)*8).limit(8);
        res.status(200).send(camps);
      }
  } 
  else{
    res.status(200).send({"msg":"page mising"})
  }
  } catch (err) {
    res.status(404).send({ msg: "error connecting to api" });
  }
});

campRouter.get("/:state", async (req, res) => {
  const { page } = req.query;
  try {
    if (page != undefined) {
      const state = req.params.state;

      if (page == 1) {
        const camps = await CampModel.find({ state: state }).skip(0).limit(8);
        res.status(200).send(camps);
      } else if (page > 1) {
        const camps = await CampModel.find({ state: state })
          .skip((page-1) * 8)
          .limit(8);
        res.status(200).send(camps);
      }
    } else {
      res.status(200).send({ msg: "page mising" });
    }
  } catch (err) {
    res.status(404).send({ msg: "error connecting to api" });
  }
});

campRouter.get("/type/:discover", async (req, res) => {
  const { page } = req.query;
  try {
    if (page != undefined) {
      const discover = req.params.discover;
      if (page == 1) {
        const camps = await CampModel.find({ discover: discover })
          .skip(0)
          .limit(8);
        res.status(200).send(camps);
      } else if (page > 1) {
        const camps = await CampModel.find({ discover: discover })
          .skip((page-1) * 8)
          .limit(8);
        res.status(200).send(camps);
      }
    } else {
      res.status(200).send({ msg: "page mising" });
    }
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

    const camps = await CampModel.distinct("state");

    res.status(200).send(camps);
  } catch (err) {
    res.status(404).send({ msg: "error connecting to api" });
  }
});

campRouter.get("/prod/:id",async(req,res)=>{
  const id=req.params.id
  try{
     const camp=await CampModel.find({_id:id});
     res.status(200).send(camp)
  }
  catch(err){
    res.status(404).send({"msg":"404 error"})
  }
});


campRouter.post("/", async (req, res) => {
  try {
    const data = req.body;

    const camp = new CampModel(data);
    await camp.save();

    res.send({ msg: "added" });
  } catch (err) {
    res.send({ msg: "failed" });
  }
});

campRouter.delete("/:id",async(req,res)=>{
  const id=req.params.id;
  try{
      await CampModel.findByIdAndDelete({_id:id});
      res.status(200).send({"msg":"deleted"})
  }
  catch(err){
    res.status(404).send({"msg":"404 eror"})
  }
});

campRouter.patch("/:id",async(req,res)=>{
  const id=req.params.id;
  const payload=req.body;

  try{
      await CampModel.findByIdAndUpdate({_id:id},payload);
      res.status(200).send({"msg":"updated"})
  }
  catch(err){
    res.status(404).send({"msg":"404 eror"})
  }
})


module.exports = {
  campRouter,
};
