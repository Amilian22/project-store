import User from "../models/auth.models.js"
import bcrypt from "bcryptjs";
import createAccesToken from "../libs/jwt.js";

export const register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const passwordHash = await bcrypt.hash(password, 10);
        const newUser = new User({
            username: username,
            email: email,
            password: passwordHash
        });
        const userSaved = await newUser.save();
        const token = await createAccesToken({ id: userSaved._id });
        res.cookie("token", token)
        // res.json({
        //     id: userSaved._id,
        //     username: userSaved.username,
        //     email: userSaved.email,
        //     createdat: userSaved.createdAt,
        //     updatedat: userSaved.updatedAt
        // })
        res.redirect("/login")

    } catch (err) {
        console0.log(err)
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    const userFound = await User.findOne({ email: email });
    if (!userFound) {
        res.status(404).json({ message: "Invalid email" })
    };
    const isMach = await bcrypt.compare(password, userFound.password);
    if (!isMach) {
        return res.redirect("/login")
    }
    const token = await createAccesToken({ id: userFound._id });
    res.cookie("token", token);
    res.redirect("/profile");

}


export const logout = (req, res) => {
    res.cookie("token", "", {
        expires: new Date(0)
    })
    return res.redirect("/login");
}

export const profile = async (req, res) => {
    const userFound = await User.findById(req.user.id);
    if (!userFound) {
        res.redirect("/login")
    };
    const pokeRandom = Math.floor(Math.random() * 280 + 1);
    const pokemon = await ((await fetch("https://pokeapi.co/api/v2/pokemon/" + pokeRandom)).json());
    console.log(pokeRandom)
    return res.render("profile.ejs", { content: userFound.username, img: pokemon.sprites.front_default })
}