import express from "express";
import {
    createProduto, 
    deleteProduto, 
    getAllProdutos, 
    getProduto, 
    updateProduto, 
} from "../controllers/controllerproduto.js";

const appRouterProduto = express.Router();

appRouterProduto.get("/", getAllProdutos);
appRouterProduto.get("/:id", getProduto);
appRouterProduto.post("/criarProduto", createProduto);
appRouterProduto.put("/editarProduto/:id", updateProduto);
appRouterProduto.delete("/excluirProduto/:id", deleteProduto);

export default appRouterProduto;