const { gql }  = require("apollo-server")

// Similar consultas BD y tal y como esta en los types defs deben estar en los resolver, 
// QUERY debe estar siempre y es parecido a un SELECT
// PARA UPDATE E INSERT AND DELETE usamos Mutation
// Para retornar mas cursos debe ser : [Curso]
const typeDefs = gql`

    type Curso {
        titulo: String
    }
    type Tecnologia {
        tec: String
    }
    type Token {
        token: String
    }
    type Proyecto {
        nombre: String,
        id: ID
    }
    type Tarea {
        nombre: String,
        id: ID,
        proyecto: String
        estado: Boolean
    }

    type Query {
        obtenerProyectos: [Proyecto]
        obtenerTareas(input: ProyectoIdInput): [Tarea]

        obtenerCursos: [Curso]
        obtenerTecnologia: [Tecnologia]
    }

    input UsuarioInput {
        nombre: String!,
        email: String!,
        password: String
    }
    input AutenticarInput {
        email: String!,
        password: String!
    }
    input ProyectoInput {
        nombre: String!,
    }
    input TareaInput {
        nombre: String!,
        proyecto: String
        estado: Boolean
    }
    input ProyectoIdInput {
        proyecto: ID!
    }
    
    type Mutation {
        crearUsuario(input: UsuarioInput): String
        autenticarUsuario(input: AutenticarInput): Token

        # Proyectos
        nuevoProyecto(input: ProyectoInput): Proyecto
        actualizarProyecto(id: ID!, input: ProyectoInput): Proyecto
        eliminarProyecto(id: ID!): String

        # Tareas
        nuevaTarea(input: TareaInput): Tarea
        actualizarTarea(id: ID!, input: TareaInput): Tarea
        eliminarTarea(id: ID!): String
    }
`;

module.exports = typeDefs;