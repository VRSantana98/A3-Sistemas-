import express from "express";
import {
    createVendedor, 
    deleteVendedor, 
    getAllVendedores, 
    getVendedor, 
    updateVendedor, 
} from "../controllers/controllervendedor.js";

const appRouterVendedor = express.Router();

appRouterVendedor.get("/", getAllVendedores);
appRouterVendedor.get("/:id", getVendedor);
appRouterVendedor.post("/criarVendedor", createVendedor);
appRouterVendedor.put("/editarVendedor/:id", updateVendedor);
appRouterVendedor.delete("/excluirVendedor/:id", deleteVendedor);

export default appRouterVendedor;