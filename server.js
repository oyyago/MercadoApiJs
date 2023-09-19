const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors());
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(require('./routes/routesUse'))



app.listen(port, () => {
  console.log('Servidor rodando na porta', port);
});