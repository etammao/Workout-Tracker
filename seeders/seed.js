const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

let workoutSeed = [
  {
    day: new Date().setDate(new Date().getDate() - 10),
    exercises: [
      {
        type: "resistance",
        name: "Push Press",
        duration: 20,
        weight: 50,
        reps: 10,
        sets: 5,
      },
    ],
  },
  {
    day: new Date().setDate(new Date().getDate() - 9),
    exercises: [
      {
        type: "resistance",
        name: "Bicep CurlLateral Pull",
        duration: 20,
        weight: 150,
        reps: 10,
        sets: 5,
      },
    ],
  },
  {
    day: new Date().setDate(new Date().getDate() - 8),
    exercises: [
      {
        type: "resistance",
        name: "Lateral Pull",
        duration: 25,
        weight: 155,
        reps: 10,
        sets: 5,
      },
    ],
  },
  {
    day: new Date().setDate(new Date().getDate() - 7),
    exercises: [
      {
        type: "cardio",
        name: "Running",
        duration: 100,
        distance: 5,
      },
    ],
  },
  {
    day: new Date().setDate(new Date().getDate() - 6),
    exercises: [
      {
        type: "resistance",
        name: "Dead Lift",
        duration: 20,
        weight: 400,
        reps: 10,
        sets: 5,
      },
    ],
  },
  {
    day: new Date().setDate(new Date().getDate() - 5),
    exercises: [
      {
        type: "resistance",
        name: "Bench Press",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 5,
      },
    ],
  },
  {
    day: new Date().setDate(new Date().getDate() - 4),
    exercises: [
      {
        type: "resistance",
        name: "Bench",
        duration: 30,
        weight: 35,
        reps: 10,
        sets: 5,
      },
    ],
  },
  {
    day: new Date().setDate(new Date().getDate() - 3),
    exercises: [
      {
        type: "resistance",
        name: "Bench Press",
        duration: 20,
        weight: 390,
        reps: 10,
        sets: 5,
      },
    ],
  },
  {
    day: new Date().setDate(new Date().getDate() - 2),
    exercises: [
      {
        type: "resistance",
        name: "Bench Press",
        duration: 20,
        weight: 400,
        reps: 10,
        sets: 5,
      },
    ],
  },
  {
    day: new Date().setDate(new Date().getDate() - 1),
    exercises: [
      {
        type: "resistance",
        name: "Quad Press",
        duration: 90,
        distance: 5,
      },
    ],
  },
];

db.Workout.deleteMany({})
  .then(() => db.Workout.collection.insertMany(workoutSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
