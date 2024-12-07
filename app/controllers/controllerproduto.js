import { createQueriesProduto, deleteRecordProduto, updateQueriesProduto, findByIdProduto, findProduto,  } from "../db/queries.js";

export const getAllProdutos = async (req, res) => {
    try {
        const produtos = await findProduto();
        return res.status(200).json({ produtos });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Erro"});
    }
};
export const getProduto = async (req, res) => {
    const id = req.params.id;
    try {
        const produto = await findByIdProduto(id);
        return res.status(200).json({ produto })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Erro"});
    }
};
export const createProduto = async (req, res) => {
    const {tipo, cor, valor} = req.body;
    if(!tipo || !cor || !valor){
    } try {
    const produto = await createQueriesProduto(tipo, cor, email);
    return res.status(200).json({ produto });
    } catch (error) {
        console.log(error);
        res.status(403).json({ message: "Erro"});
    };
};
export const updateProduto = async (req, res) => {
    const {tipo, cor, valor} = req.body;
    const id = req.params.id;
    if(!tipo || !cor || !valor){
    } try {
    const produto = await updateQueriesProduto(tipo, cor, valor, id);
    return res.status(200).json({ produto });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Erro"});
    };
};
export const deleteProduto = async (req, res) => {
    const id = req.params.id;
    try {
    const produto = await deleteRecordProduto(id);
    return res.status(200).json({ produto });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Erro"});
    }   
};