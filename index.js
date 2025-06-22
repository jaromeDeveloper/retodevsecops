const http = require('http');                                    // Importa el módulo http de Node.js

const PORT = process.env.PORT || 3000;                           // Define el puerto en el que el servidor escuchará, por defecto 3000

const server = http.createServer((req, res) => {                 // Crea un servidor HTTP
  res.statusCode = 200;                                          // Establece el código de estado de la respuesta a 200 (OK)
  res.setHeader('Content-Type', 'text/plain');                   // Establece el tipo de contenido de la respuesta a texto plano
  res.end('Hola desde Node.js con DevSecOps - Master impartido por Jorge Fragoso\n');                 // Envía la respuesta al cliente
});

server.listen(PORT, () => {                                      // Inicia el servidor y escucha en el puerto definido
  console.log(`Servidor corriendo en http://localhost:${PORT}`); // Imprime un mensaje en la consola indicando que el servidor está corriendo
}); 