import express from "express";
import { 
    createCliente, 
    deleteCliente, 
    getAllClientes, 
    getCliente, 
    updateCliente, 
} from "../controllers/controllercliente.js";

const appRouterCliente = express.Router();

appRouterCliente.get("/clientes", getAllClientes);
appRouterCliente.get("/:id", getCliente);
appRouterCliente.post("/criarCliente", createCliente);
appRouterCliente.put("/editarCliente/:id", updateCliente);
appRouterCliente.delete("/excluirCliente/:id", deleteCliente);

export default appRouterCliente;
