import { createQueriesVendedor, deleteRecordVendedor, updateQueriesVendedor, findByIdVendedor , findVendedor,  } from "../db/queries.js";

export const getAllVendedores = async (req, res) => {
    try {
        const vendedores = await findVendedor();
        return res.status(200).json({ vendedores});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Erro"});
    }
};
export const getVendedor = async (req, res) => {
    const id = req.params.id;
    try {
        const vendedor = await findByIdVendedor(id);
        return res.status(200).json({ vendedor })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Erro"});
    }
};
export const createVendedor = async (req, res) => {
    const {nome, cargo} = req.body;
    if(!nome || !email || !cargo){
    } try {
    const vendedor = await createQueriesVendedor(nome, cargo);
    return res.status(200).json({ vendedor });
    } catch (error) {
        console.log(error);
        res.status(403).json({ message: "Erro"});
    };
};
export const updateVendedor = async (req, res) => {
    const {nome, cargo} = req.body;
    const id = req.params.id;
    if(!nome || !cargo){
    } try {
    const vendedor = await updateQueriesVendedor(nome, cargo, id);
    return res.status(200).json({ vendedor });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Erro"});
    };
};
export const deleteVendedor = async (req, res) => {
    const id = req.params.id;
    try {
    const vendedor = await deleteRecordVendedor(id);
    return res.status(200).json({ vendedor });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Erro"});
    }   
};