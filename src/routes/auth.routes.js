import { Router } from "express";
import { register, login, logout, profile } from "../controller/auth.controller.js";
import authRequired from "../middlewares/validateToken.js";

const router = Router();


router.get("/", (req, res) => {
    res.render("homepage.ejs")
})

router.get("/register", (req, res) => {
    res.render("register.ejs")
});
router.post("/register", register);
router.get("/login", (req, res) => {
    res.render("login.ejs")
})

router.post("/login", login)


router.post("/logout", logout)

router.get("/profile", authRequired, profile)


export default router