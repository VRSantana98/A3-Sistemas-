import { createQueriesCliente, deleteRecordCliente, updateQueriesCliente, findByIdCliente, findCliente, } from "../db/queries.js";

export const getAllClientes = async (req, res) => {
    try {
        const clientes = await findCliente();
        return res.status(200).json({ clientes});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Erro"});
    }
};
export const getCliente = async (req, res) => {
    const id = req.params.id;
    try {
        const cliente = await findByIdCliente(id);
        return res.status(200).json({ cliente })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Erro"});
    }
};
export const createCliente = async (req, res) => {
    const {nome, email, telefone} = req.body;
    if(!nome || !email || !telefone){
    } try {
    const cliente = await createQueriesCliente(nome, email, telefone);
    return res.status(200).json({ cliente });
    } catch (error) {
        console.log(error);
        res.status(403).json({ message: "Erro"});
    };
};
export const updateCliente = async (req, res) => {
    const {nome, email, telefone} = req.body;
    const id = req.params.id;
    if(!nome || !email || !telefone){
    } try {
    const cliente = await updateQueriesCliente(nome, email, telefone, id);
    return res.status(200).json({ cliente });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Erro"});
    };
};
export const deleteCliente = async (req, res) => {
    const id = req.params.id;
    try {
    const cliente = await deleteRecordCliente(id);
    return res.status(200).json({ cliente });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Erro"});
    }   
};