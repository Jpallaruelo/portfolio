
const User = require('../models/User');
const bcrypt = require('bcrypt');




const Authcontroller = {

    //Metodo login 

    async Login(req, res) {
        const { email, password } = req.body;
        console.log('Recibida solicitud POST a /login');

        // Encuentra al usuario por email
        const user = await User.findOne({ email: email });

        if (!user) {
            return res.status(401).json("Usuario no encontrado");
        }

        // Compara la contraseña ingresada con el hash almacenado
        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            res.status(200).json({
                message: "Autenticación correcta",
                username: user.username // Asegúrate de cambiar 'username' por el campo correcto según tu esquema de User
            });
        } else {
            res.status(401).json("Credenciales incorrectas");
        }
    },

    //metodo register 

    async Register(req, res) {
        try {
            const { username, email, password } = req.body;
            console.log('Datos recibidos:', req.body); // Ver
            // Verificar si el usuario ya existe
            const userExists = await User.findOne({ email: email });
            if (userExists) {
                return res.status(400).json({ message: 'El usuario ya existe.' });
            }
            const hashedPassword = await bcrypt.hash(password, 10); // 10 es el costo de hashing
            // Crear un nuevo usuario
            console.log("Contraseña encriptada:", hashedPassword);
            const newUser = new User({ username, email, password: hashedPassword });

            await newUser.save();

            res.status(201).json({ message: 'Usuario registrado exitosamente.' });
        } catch (error) {
            console.error('Error en el registro:', error);
            res.status(500).json({ message: 'Error al registrar el usuario.', error: error.message });
        }

    }

}









module.exports = Authcontroller
