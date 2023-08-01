import Task from "../models/task.models.js";




export const createTask = async (req, res) => {
    const { title, description } = req.body;
    const newTask = new Task({
        title: title,
        description: description,
        user: req.user.id
    });
    const saveTask = await newTask.save();
    res.redirect("/tasks")
}

export const getTasks = async (req, res) => {
    const tasks = await Task.find({
        user: req.user.id
    });
    res.render("allTask.ejs", { content: tasks })
}

export const deleteTask = async (req, res) => {

    await Task.findByIdAndDelete(req.body.boton);
    res.redirect("/tasks")
}