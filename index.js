import cors from "cors";
import express from "express";
import { usuariosRoutes } from "./src/routes/usuariosRoutes.js";
import { imoveisRoutes } from "./src/routes/imoveisRoutes.js";
const app = express();
const port = 8000;


app.use(cors());
app.use(express.json());


app.use("/usuarios", usuariosRoutes)

app.use("/imoveis", imoveisRoutes)

app.use((req, res) => {
    res.status(404).send("Rota não encontrada")
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta: http://localhost:${port}`)
})