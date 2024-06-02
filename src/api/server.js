const fs = require('fs');
const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

// Read and parse the database
const db = JSON.parse(fs.readFileSync('src/database/db.json'));
const router = jsonServer.router(db);

server.use(middlewares);

// Custom route handler for multiple query parameters
server.get('/registro_alimentar', (req, res) => {
  const { idUsuario, idRefeicao, dataRegistro } = req.query;

  // Get all records from the database
  let results = db.registro_alimentar;

  // Apply filters based on query parameters
  if (idUsuario) {
    results = results.filter(item => item.idUsuario == idUsuario);
  }
  if (idRefeicao) {
    results = results.filter(item => item.idRefeicao == idRefeicao);
  }
  if (dataRegistro) {
    results = results.filter(item => item.dataRegistro === dataRegistro);
  }

  res.json(results);
});

// Add this before server.use(router)
server.use(jsonServer.rewriter({
    '/api/*': '/$1'
}));

server.use(router);

server.listen(3000, () => {
    console.log('JSON Server is running');
});

// Export the Server API
module.exports = server;
