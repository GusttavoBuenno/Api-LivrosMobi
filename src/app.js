import express from "express";
import db from "./dbConnect.js"
import livros from "./models/livros.js"
import routes from "./routes/index.js"

db.on("error,", console.log.bind(console, 'Erro ao conectar'))
db.once("open", () => {
    console.log('conexao com o banco feita com sucesso')
})
const app = express();

app.use(express.json())

routes(app);


                                                                   // npm run dev
                                                                     


export default app