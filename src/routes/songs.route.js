const express = require("express")
const uploadFile = require("../service/imageKit.service")
const multer = require("multer")
const upload = multer({storage:multer.memoryStorage()})
const route = express.Router()
const songModel = require("../models/song.model")
const { message } = require("prompt-async")


route.post("/songs",upload.single("audio"),async(req,res)=>{
        console.log(req.body)
        console.log(req.file)

        const fileURL = await uploadFile(req.file)
        const songStatus = await songModel.create({
            title:req.body.title,
            artist:req.body.artist,
            audio:fileURL.url,
            mood:req.body.mood
        })
        res.status(201).json({
            message:"new song added",
            song:songStatus
        })
        
})

route.get("/songs",async(req,res)=>{
    const {mood} = req.query
    const song = await songModel.find({
        mood:mood
    })

    res.status(200).json({
        message:"Song Fetched succesfully",
        songs:song
    })
})

module.exports = route