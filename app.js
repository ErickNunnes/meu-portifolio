const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Configurar o diretório público para arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Rota para a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Rota para processar o formulário de contato
app.post('/send-message', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Nome: ${name}, Email: ${email}, Mensagem: ${message}`);
    res.send('Mensagem enviada com sucesso!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
