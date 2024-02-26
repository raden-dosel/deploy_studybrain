require("dotenv").config();

const colors = require("colors");
const express = require("express");
const cors = require("cors");
const todoRoutes = require("./routes/todo_Routes");
const eventRoutes = require("./routes/event_Routes");
const noteRoutes = require("./routes/note_Routes");
const searchNoteRoutes = require("./routes/search_Routes");
const categoryRoutes = require("./routes/category_Routes");
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorHandler");

const allowedOrigin = "https://deploy-studybrain.vercel.app";

const corsOptions = {
  origin: allowedOrigin,
  methods: ["GET", "POST", "PATCH", "DELETE"],
  credentials: true,
};

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
//app.use(cors(corsOptions));

//routes
app.use("/api/todos", todoRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/notes", noteRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/searchNotes", searchNoteRoutes);

//listen for request
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

app.get("/", (req, res) => res.send("Hello World!"));
