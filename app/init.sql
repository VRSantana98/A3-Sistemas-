CREATE TABLE clientes (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(255),
  email VARCHAR(255),
  telefone VARCHAR(20)
);

CREATE TABLE vendedores (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(255),
  matricula VARCHAR(20)
);

CREATE TABLE produtos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  tipo VARCHAR(255),
  cor VARCHAR(255),
  preco DECIMAL(10, 2)
);

INSERT INTO clientes (nome, email, telefone) VALUES
('João', 'joao@example.com', '11912345678'),
('Maria', 'maria@example.com', '11998765432'),
('Pedro', 'pedro@example.com', '11911111111'),
('Ana', 'ana@example.com', '11922222222'),
('Luiz', 'luiz@example.com', '11933333333');

INSERT INTO vendedores (nome, matricula) VALUES
('Antonio', '1194'),
('Neide', '1195');

INSERT INTO produtos (tipo, cor, preco) VALUES
('Camisa', 'Branca', 49.99),
('Calça', 'Jeans', 79.99),
('Vestido', 'Preto', 99.99),
('Terno', 'Preto', 999.99),
('Bermuda', 'Marrom', 49.99),
('Camiseta', 'Cinza', 199.99),
('Casaco', 'Vermelho', 99.99),
('Cinto', 'Cinto preto', 89.99),
('Meia', 'Meia branca', 49.99),
('Calça', 'Preta', 139.99);