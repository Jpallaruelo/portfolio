const express = require("express");
const Authcontroller = require("../controllers/authController");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());

const port = 3001;

//midddleare

app.use(express.json());
app.post("/login", Authcontroller.Login);

app.post("/register", Authcontroller.Register);

app.get("/", (req, res) => {
  res.send("¡Hola Mundo con Express!");
  console.log("Solicitud recibida en /");
});

mongoose
  .connect("mongodb://127.0.0.1:27017/users")
  .then(() => {
    console.log("Conexión a MongoDB exitosa");

    // Iniciar servidor Express solo después de conectar a MongoDB
    app.listen(port, () => {
      console.log(`Servidor escuchando en http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Error al conectar a MongoDB:", error);
  });
