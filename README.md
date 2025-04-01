# API Service Proxy CORS

![NodeJs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)

## 💡 Introdução
Esta API foi desenvolvida utilizando Express e NodeJs como serviço Proxy para lidar com o bloqueio de CORS nas requisições de APIs.

## 🔗 Link de Acesso
<ul>
    <li><span style="background-color: #F1F1F1; padding: 0 2px; border-radius: 4px;">Backend</span>- <a href="#" target="_blank">clique aqui!</a></li>
</ul>

## 👥 Equipe
| [<img src="https://avatars.githubusercontent.com/u/111311678?v=4" width=115><br><sub>Daniel Emidio</sub>](https://github.com/DanielEmidio1988) |
| :---: |

## 🧭 Status do Projeto

<ul>
    <li>⏳Concluído</li>
</ul>


## ⚙️ Configurações
Para instalação do projeto em ambiente local, os comandos abaixo devem ser executados.

### Instalação do projeto
No terminal, clone  o projeto:

<ul>
    <li style="list-style: none;">git clone https://github.com/DanielEmidio1988/proxy-cors.git</li>
</ul>

Após a conclusão, execute o comando <b>npm install</b> no terminal. Para executar o projeto, utilize o comando <b>npm start</b>.

## 🪄 Concepção do Projeto

### 📄 Endpoints
<ul>
    <li><span style="background-color: #F1F1F1; padding: 0 2px; border-radius: 4px;">Get proxy:</span> para requisições de APIs externas</li>
</ul>

### 📖 Exemplo de uso:

```
    const url = 'URL_DEPLOY'; // link de onde foi feito o deploy da API
    const response = await axios.get(`${url}/proxy/?url=${encodeURIComponent(URL_API_EXTERNA)}`);
```


### 🖼️ Bibliotecas e dependências

<ul>
    <li><span style="background-color: #F1F1F1; padding: 0 2px; border-radius: 4px;">express</span></li>
    <li><span style="background-color: #F1F1F1; padding: 0 2px; border-radius: 4px;">cors</span></li>
    <li><span style="background-color: #F1F1F1; padding: 0 2px; border-radius: 4px;">nodemon</span></li>
</ul>


## 📫 Contato

E-mail: emidio.daniel@hotmail.com

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/danielemidio1988/)