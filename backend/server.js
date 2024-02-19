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
app.use(cors());

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use(errorHandler);
app.use(
  cors({
    origin: [
      "https://deploy-studybrain-frontend-7vcmvt0x8-raden-dosels-projects.vercel.app",
    ],
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://deploy-studybrain-frontend-7vcmvt0x8-raden-dosels-projects.vercel.app"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//routes
app.use("https://studybrain-backend.onrender.com/todos", todoRoutes);
app.use("https://studybrain-backend.onrender.com/events", eventRoutes);
app.use("https://studybrain-backend.onrender.com/notes", noteRoutes);

//listen for request
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

app.get("/", (req, res) => res.send("Hello World!"));
