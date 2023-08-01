import connectDB from "./src/db.js";

const port = 3000;



import express from "express";
import authRoutes from "./src/routes/auth.routes.js";
import taskRoutes from "./src/routes/task.routes.js";
import cookieParser from "cookie-parser";
const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(cookieParser());
app.use(express.static("public"))

app.use(authRoutes);
app.use(taskRoutes)

app.listen(port, () => {
    console.log(`Server running on port:${port}`);
})


export default app
