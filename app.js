const express = require("express");
const connectDB = require("./db/connect");

const app = express();
app.use(express.json());

const user_routes = require("./routes/users");

const PORT = process.env.PORT || 3000;

app.get("/status", (request, response) => {
    const status = {
        "Status": "Running"
    };
    response.send(status);
});

app.use("/users", user_routes); 

app.listen(PORT, async () => {
    await connectDB();
    console.log("Server Listening on PORT:", PORT);
});
