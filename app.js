require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger-output.json')

const app = express();

const { autenticaRotas,usuariosRotas,compraRotas,install} = require('./rotas')


app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(bodyParser.json());
app.use('/install',install);
app.use(autenticaRotas);
app.use('/usuarios' ,usuariosRotas);
app.use("/comercio",compraRotas);


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Servidor rodando no endereço localhost:${PORT}`)
})
