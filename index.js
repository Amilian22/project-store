import app from "./src/app.js";
import connectDB from "./src/db.js";


const port = 3000;
const api = app
connectDB();


api.listen(port, () => {
    console.log(`Server running on port:${port}`);
})


export default api;
