const express = require("express");
// const pathWrapper = require("./pathWrapper");
// const fileWrapper = require("./fileWrapper");
// const osWrapper = require("./osWrapper");
// const urlWrapper = require("./urlWrapper");
// const eventWrapper = require("./eventWrapper");
const httpWrapper = require("./httpWrapper");
const COURSES = require("./constants");

const app = express();

const port = process.env.PORT || 4000;

app.use(express.json());

app.get(
  "/",
  async (req, res, next) => {
    // console.log(req);
    console.log("in middleware");
    next();
  },
  async (req, res) => {
    console.log("final function");
    res.send("hello");
  }
);

app.get("/api/courses", async (req, res) => {
  res.status(200).json(COURSES);
});

app.post("/api/courses", async (req, res) => {
  const { name } = req.body;

  if (!name || name.length < 3)
    return res
      .status(400)
      .send("Name is required and should be minimum 3 characters");

  const course = { id: COURSES.length + 1, name };
  COURSES.push(course);

  return res.status(200).json(course);
});

app.get("/api/courses/:id", async (req, res) => {
  const resultCourse = COURSES.find(
    (course) => course.id === parseInt(req.params.id)
  );
  if (!resultCourse)
    res.status(400).send("The course with given ID was not found!!!");
  res.status(200).json(resultCourse);
});

app.listen(port, () => {
  // console.log(process);
  console.log(`Listening on port ${port}`);
});
