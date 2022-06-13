import  express  from "express";
import app from "../app.js";
import livros from "./livrosroutes.js"

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Api Node"})
    })

    app.use(
        express.json(),
        livros
    )
}

export default routes