const express = require("express");

const app = express();

app.use(express.json());

const courses = [
  { id: 1, name: "Javascript" },
  { id: 2, name: "ReactJS" },
  { id: 3, name: "NodeJS" },
  { id: 4, name: "MySQL" },
  { id: 5, name: "MongoDB" },
];

app.get("/", async (req, res) => {
  // console.log(req);
  res.send("hello");
});

app.get("/api/courses", async (req, res) => {
  res.status(200).json(courses);
});

app.post("/api/courses", async (req, res) => {
  const { name } = req.body;

  if (!name || name.length < 3)
    return res
      .status(400)
      .send("Name is required and should be minimum 3 characters");

  const course = { id: courses.length + 1, name };
  courses.push(course);

  return res.status(200).json(course);
});

app.get("/api/courses/:id", async (req, res) => {
  const resultCourse = courses.find((c) => c.id === parseInt(req.params.id));
  if (!resultCourse)
    res.status(404).send("The course with given ID was not found!!!");
  res.status(200).json(resultCourse);
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
