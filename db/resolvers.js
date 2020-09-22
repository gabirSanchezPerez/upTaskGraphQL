/*const cursos = [
    {
        titulo: "....",
        tec: "+++"
    },
    {
        titulo: "3333",
        tec: "otras"
    }
]*/

const Usuario = require("../models/Usuario")
const Proyecto = require("../models/Proyecto")
const Tarea = require("../models/Tarea")

const bcryttjs = require("bcryptjs")
const jwt = require("jsonwebtoken")

require("dotenv").config({
    path: "variables.env"
})

// CREMOS EL TOKEN PARA EL INICIO DE SESION JWT
const crearToken = (user, secret, expiresIn) => {
    const { id, email, nombre } = user

    return jwt.sign(
        { id, email, nombre },
        secret,
        { expiresIn }
    )
}

//functiones
const resolvers = {
    Query: {
        //obtenerCursos: () => cursos,
        //obtenerTecnologia: () => cursos
        obtenerProyectos: async (_, { }, ctx, info) => {
            console.log(ctx.usuario)
            const proyectos = await Proyecto.find({
                creador: ctx.usuario.id
            })
            return proyectos
        },
        obtenerTareas: async (_, { input  }, ctx, info) => {
            console.log(ctx.usuario)
            const tareas = await Tarea.find({
                creador: ctx.usuario.id
            })
            .where("proyecto").equals(input.proyecto)

            //const proyecto = await Proyecto.findById(tareas)
            return tareas
        }
    },
    Mutation: {
        crearUsuario: async (_, { input }, ctx, info) => {
            // console.log("__",_)
            // console.log("INPUT", input)
            // console.log("CONTEXTO", ctx)
            // console.log("INFORMACION", info)
            const { email, password } = input

            const existeUsuario = await Usuario.findOne({ email })
            // console.log(existeUsuario)
            if (existeUsuario) {
                throw new Error("El usuario ya esta regstrado.")
            }

            try {

                //HASH PASS
                const salt = await bcryttjs.genSalt(10)
                input.password = await bcryttjs.hash(password, salt)

                const newUser = new Usuario(input)
                newUser.save();

                return "Usuario creado, con Exito."
            } catch (error) {
                console.log("ERROR", error)
            }
        },
        autenticarUsuario: async (_, { input }, ctx, info) => {
            const { email, password } = input
            // Existe
            const existeUsuario = await Usuario.findOne({ email })
            //console.log(existeUsuario)
            if (!existeUsuario) {
                throw new Error("El usuario no existe.")
            }
            // Password Correct
            const passwordCorrect = await bcryttjs.compare(password, existeUsuario.password)
            if (!passwordCorrect) {
                throw new Error("Uno de los datos ingresados es incorrecto.")
            }
            // Dar acceso
            return {
                token: crearToken(existeUsuario, process.env.SECRET, '2hr')
            }
        },
        nuevoProyecto: async (_, { input }, context) => {
            try {

                const proyecto = new Proyecto(input)
                // ASociar al creador
                proyecto.creador = context.usuario.id

                const resultado = await proyecto.save()


                return resultado
            } catch (error) {
                console.log(error)
            }
        },
        actualizarProyecto: async (_, { id, input }, context) => {
            // EXISTE
            let proyecto = await Proyecto.findById(id)
            if (!proyecto) {
                throw new Error("El Proyecto indicado no existe.")
            }
            // Validar que lo este editando quien lo creo
            if (proyecto.creador.toString() !== context.usuario.id) {
                throw new Error("No esta autorizado para editar.")
            }

            proyecto = await Proyecto.findOneAndUpdate({ _id: id }, input, { new: true })
            return proyecto;
        },
        eliminarProyecto: async (_, { id }, context) => {
            // EXISTE
            let proyecto = await Proyecto.findById(id)
            if (!proyecto) {
                throw new Error("El Proyecto indicado no existe.")
            }
            // Validar que lo este editando quien lo creo
            if (proyecto.creador.toString() !== context.usuario.id) {
                throw new Error("No esta autorizado para editar.")
            }

            const resultado = await Proyecto.findByIdAndDelete({ _id: id })
            if (resultado) {
                return "El proyecto ha sido eliminado"
            } else {
                return "Se ha presentado un error al tratar de eliminar el proyecto"
            }
        },
        // ---- TAREAS -----------------------
        nuevaTarea: async (_, { input }, context) => {
            try {

                const tarea = new Tarea(input)
                // ASociar al creador
                tarea.creador = context.usuario.id

                const resultado = await tarea.save()


                return resultado
            } catch (error) {
                console.log(error)
            }
        },
        actualizarTarea: async (_, { id, input }, context) => {
            // EXISTE
            let tarea = await Tarea.findById(id)
            if (!tarea) {
                throw new Error("La Tarea indicado no existe.")
            }
            // Validar que lo este editando quien lo creo
            if (tarea.creador.toString() !== context.usuario.id) {
                throw new Error("No esta autorizado para editar.")
            }

            tarea = await Tarea.findOneAndUpdate({ _id: id }, input, { new: true })
            return tarea;
        },
        eliminarTarea: async (_, { id }, context) => {
            // EXISTE
            let tarea = await Tarea.findById(id)
            if (!tarea) {
                throw new Error("Tarea indicado no existe.")
            }
            // Validar que lo este editando quien lo creo
            if (tarea.creador.toString() !== context.usuario.id) {
                throw new Error("No esta autorizado para editar.")
            }

            const resultado = await Tarea.findByIdAndDelete({ _id: id })
            if (resultado) {
                return "Tarea ha sido eliminado"
            } else {
                return "Se ha presentado un error al tratar de eliminar l tarea"
            }
        }
    } // END MUTATION
}

module.exports = resolvers;