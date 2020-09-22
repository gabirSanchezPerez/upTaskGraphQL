const { ApolloServer } = require("apollo-server")
const typeDefs = require("./db/schema")
const resolvers = require("./db/resolvers")
const jwt = require("jsonwebtoken")
require("dotenv").config({
    path: "variables.env"
})

const conectarDB = require("./config/db")

conectarDB()

const context = ({req}) => {
    //console.log(req.headers['authorization'])
    const token = req.headers['authorization'] || ""
    //console.log("TOKEN", token)
    if (token) {
        try {
            const usuario = jwt.verify(token.replace("Bearer ", ""), process.env.SECRET)
            console.log(usuario)
            return { usuario }
        } catch (error) {
            console.log(error)
            console.log("DEBES LOGEARTE DE NUEVO " + Date())
        }
    }
}

const server = new ApolloServer({ typeDefs, resolvers, context })

server.listen({ port: process.env.PORT || 4000})
    .then(({ url }) => {
        console.log(`Servidor listo en ${url}`)
    })