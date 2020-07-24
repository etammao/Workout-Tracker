const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const db = require("./models");

const PORT = process.env.PORT || 3000;

const app = express();

//logging all the route calls
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true,  useUnifiedTopology: true, useCreateIndex: true  });

// [GET] fetch workout data from database
app.get("/api/workouts", async ( req, res ) => {
    //send back an array of workouts
    const workouts = await db.Workout.find({})

    res.send( workouts )
})

//[GET] excercise page
app.get("/exercise", ( req, res ) => {
    res.sendFile('public/exercise.html' , { root : __dirname})
})

// [GET] dashboard page
app.get("/stats", ( req, res ) => {
    res.sendFile('public/stats.html' , { root : __dirname})
})

// [PUT] addExercise to workout
app.put("/api/workouts/:id", async ( req, res ) => {
    await db.Workout.updateOne( 
        { _id: req.params.id }, 
        { $push: { exercises: req.body }, $inc: {totalDuration: req.body.duration} }
    )
    const cur_workout = await db.Workout.find( { _id: req.params.id } )
    res.send({})
})

// [POST] createWorkout
app.post("/api/workouts", async ( req, res ) => {
    await db.Workout.create({
        day: new Date().setDate(new Date().getDate()),
        exercises: []
      })
    const workoutList = await db.Workout.find({})
    res.send( workoutList[workoutList.length-1] )
})

// [GET] workout range
app.get("/api/workouts/range", async ( req, res ) => {
    const workouts = await db.Workout.find({})

    res.send( workouts )
})

//Listen to PORT
app.listen( PORT, function(){
    console.log( `Server listening on port:${PORT}...` )
})