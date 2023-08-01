import { Router } from "express";
import authRequired from "../middlewares/validateToken.js";
import { createTask, getTasks, deleteTask } from "../controller/task.controller.js"


const router = Router();

router.get("/", (req, res) => {
    res.render("homepage.ejs")
})

router.get("/profile", (req, res) => {
    res.render("profile.ejs")
})

router.get("/tasks", authRequired, getTasks)

router.get("/task", (req, res) => {
    res.render("task.ejs")
})

router.post("/task", authRequired, createTask);

router.post("/delete", authRequired, deleteTask)

export default router;