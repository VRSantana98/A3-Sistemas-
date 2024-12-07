import { pool } from "./index.js";

export const findCliente = async () => {
    const QUERY = "SELECT * FROM clientes";
    try {
        const cliente = await pool.getConnection();
        const result = await cliente.query(QUERY);
        return result;
    } catch (error) {
        console.log("Erro", error);
        throw error;
    }
};

export const findByIdCliente = async (id) => {
    const QUERY = "SELECT * FROM clientes WHERE id = ?";
    try {
        const cliente = await pool.getConnection();
        const result = await cliente.query(QUERY, [id]);
        return result[0];
    } catch (error) {
        console.log("Erro", error);
        throw error;
    }
};

export const createQueriesCliente = async (nome, email, telefone) => {
    const QUERY = `INSERT INTO clientes 
    (nome, email, telefone
    VALUES (?,?,?)`;
    try {
        const cliente = await pool.getConnection();
        const result = await cliente.query(QUERY, [nome, email, telefone]);
        return result;
    } catch (error) {
        console.log("Erro", error);
        throw error;
    }
};

export const updateQueriesCliente = async (nome, email, telefone, id) => {
    const QUERY = `UPDATE clientes 
    SET nome=?, email=?, telefone=?
    WHERE id=?`;
    try {
        const cliente = await pool.getConnection();
        const result = await cliente.query(QUERY, [nome, email, telefone, id]);
        return result[0];
    } catch (error) {
        console.log("Erro", error);
        throw error;
    }
};

export const deleteRecordCliente = async (id) => {
    const QUERY = `DELETE FROM clientes 
    WHERE id=?`;
    try {
        const cliente = await pool.getConnection();
        const result = await cliente.query(QUERY, [id]);
        return result[0];
    } catch (error) {
        console.log("Erro", error);
        throw error;
    }
};





export const findVendedor = async () => {
    const QUERY = "SELECT * FROM vendedores";
    try {
        const vendedor = await pool.getConnection();
        const result = await vendedor.query(QUERY);
        return result;
    } catch (error) {
        console.log("Erro", error);
        throw error;
    }
};

export const findByIdVendedor = async (id) => {
    const QUERY = "SELECT * FROM vendedores WHERE id = ?";
    try {
        const vendedor = await pool.getConnection();
        const result = await vendedor.query(QUERY, [id]);
        return result[0];
    } catch (error) {
        console.log("Erro", error);
        throw error;
    }
};

export const createQueriesVendedor = async (nome, cargo) => {
    const QUERY = `INSERT INTO vendedores
    (nome, cargo
    VALUES (?,?)`;
    try {
        const vendedor = await pool.getConnection();
        const result = await vendedor.query(QUERY, [nome, email, telefone]);
        return result;
    } catch (error) {
        console.log("Erro", error);
        throw error;
    }
};

export const updateQueriesVendedor = async (nome, cargo, id) => {
    const QUERY = `UPDATE vendedores
    SET nome=?, cargo=?,
    WHERE id=?`;
    try {
        const vendedor = await pool.getConnection();
        const result = await vendedor.query(QUERY, [nome, cargo, id]);
        return result[0];
    } catch (error) {
        console.log("Erro", error);
        throw error;
    }
};

export const deleteRecordVendedor = async (id) => {
    const QUERY = `DELETE FROM vendedores 
    WHERE id=?`;
    try {
        const vendedor = await pool.getConnection();
        const result = await vendedor.query(QUERY, [id]);
        return result[0];
    } catch (error) {
        console.log("Erro", error);
        throw error;
    }
};



export const findProduto = async () => {
    const QUERY = `SELECT * FROM produtos`;
    try {
        const produto = await pool.getConnection();
        const result = await produto.query(QUERY);
        return result;
    } catch (error) {
        console.log("Erro", error);
        throw error;
    }
};

export const findByIdProduto = async (id) => {
    const QUERY = "SELECT * FROM produtos WHERE id = ?";
    try {
        const produto = await pool.getConnection();
        const result = await produto.query(QUERY, [id]);
        return result[0];
    } catch (error) {
        console.log("Erro", error);
        throw error;
    }
};

export const createQueriesProduto = async (tipo, cor, valor) => {
    const QUERY = `INSERT INTO produtos 
    (tipo, cor, valor
    VALUES (?,?,?)`;
    try {
        const produto = await pool.getConnection();
        const result = await produto.query(QUERY, [tipo, cor, valor]);
        return result;
    } catch (error) {
        console.log("Erro", error);
        throw error;
    }
};

export const updateQueriesProduto = async (tipo, cor, valor, id) => {
    const QUERY = `UPDATE produtos 
    SET tipo=?, cor=?, produto=?
    WHERE id=?`;
    try {
        const produto = await pool.getConnection();
        const result = await produto.query(QUERY, [tipo, cor, valor, id]);
        return result[0];
    } catch (error) {
        console.log("Erro", error);
        throw error;
    }
};

export const deleteRecordProduto = async (id) => {
    const QUERY = `DELETE FROM produtos 
    WHERE id=?`;
    try {
        const produto = await pool.getConnection();
        const result = await produto.query(QUERY, [id]);
        return result[0];
    } catch (error) {
        console.log("Erro", error);
        throw error;
    }
};