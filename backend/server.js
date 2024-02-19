require("dotenv").config();

const colors = require("colors");
const express = require("express");
const cors = require("cors");
const todoRoutes = require("./routes/todo_Routes");
const eventRoutes = require("./routes/event_Routes");
const noteRoutes = require("./routes/note_Routes");
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorHandler");

//connect to database
connectDB();

//express app
const app = express();
const port = process.env.PORT || 4000; //Port number

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use(errorHandler);
app.use(
  cors({
    origin: ["https://deploy-studybrain-frontend.vercel.app"],
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
  })
);

//routes
app.use("/api/todos", todoRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/notes", noteRoutes);

//listen for request
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

app.get("/", (req, res) => res.send("Hello World!"));
