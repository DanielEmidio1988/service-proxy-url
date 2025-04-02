const express = require('express');
const cors = require('cors');
const request = require('request');
const app = express();

const corsOptions = {
    origin: '*',
    methods: 'GET, OPTIONS, PATCH, POST, DELETE, PUT',
    allowedHeaders: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization',
    credentials: true,
}

app.use(cors(corsOptions));

app.all("/proxy", (req, res) => {
    const url = req.query.url;
    const authorizationHeader = req.headers.authorization;

    if (!url) {
        return res.status(400).json({ error: "A URL é obrigatória" });
    }

    console.log(`Requisitando: ${url}`);
    console.log(`Authorization: ${authorizationHeader}`);

    const options = {
        url: url,
        method: req.method,
        headers: {
            Authorization: authorizationHeader,
            "Content-Type": req.headers["content-type"] || "application/json",
        },
        body: JSON.stringify(req.body),
    };

    request(options, (error, response, body) => {
        if (error) {
            console.error("Erro no proxy:", error);
            return res.status(500).json({ error: "Erro interno do servidor" });
        }
        res.status(response.statusCode).send(body);
    });
});
const PORT = process.env.PORT || 8888;
app.listen(PORT, ()=> {
    console.log(`Servidor online na porta ${PORT}`)
})
