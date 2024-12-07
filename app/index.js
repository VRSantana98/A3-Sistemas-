import express from "express";
import "./db/index.js";
import { connectToDatabase } from "./db/index.js";
import appRouterCliente from "./routes/routercliente.js";
import appRouterVendedor from "./routes/routerVendedor.js";
import appRouterProduto from "./routes/routerProduto.js";
const app = express();


app.use(express.json());

// Mensagem personalizada ao acessar a rota raiz
app.get("/", (req, res) => {
    res.send("Bem-vindo a Loja de Roupas! Acesse as rotas: /clientes, /vendedores ou /produtos")
}); 

// Mensagens de tela ao acessar rotas específicas
app.get("/clientes", (req, res) => {
    res.send("Bem-vindo à rota de Clientes!"); 
});

app.get("/vendedores", (req, res) => {
    res.send("Bem-vindo à rota de Vendedores!");
});

app.get("/produtos", (req, res) => {
    res.send("Bem-vindo à rota de Produtos!");
});

// Usando os roteadores definidos para as rotas
app.use("/clientes", appRouterCliente);

app.use("/vendedores", appRouterVendedor);

app.use("/produtos", appRouterProduto);

const PORT = process.env.PORT || 3000;

connectToDatabase().then(() => {
    app.listen(PORT, () => console.log("Servidor rodando na porta:", PORT));
})
.catch(err => {
    console.log("Erro ao conectar o banco de dados. Error =", err);
    process.exit(0);
});

