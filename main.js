// 1. Importando el modulo de Node
// http
import http from 'http';
//biblioteca
import path from 'path';
//recreabdi built-in variables
global["__dirname"]= path.dirname(new URL(import.meta.url).pathname);
global["__filename"]= path.join(__dirname, path.basename(new URL(import.meta.url).pathname));
// 2. Crear el servidor
 //
const server = http.createServer( (req, res)=>{
    // Toda la logica del server
    // 1. Respondiendo al cliente
  //  res.write(`__dirname: {__$dirname}
    //__filename: {__$filename}`);
    res.write("Revisar consola del server....");
    //creando logger de peticiones 
    console.log(`📣CLIENT-REQUEST: ${req.method} ${req.url}`);
    // 1. Respondiendo al cliente
    console.log(req);
    // 2. Cerrar la conexion]

    rest.end();
} );

// 3. Arrancamos el servidor
server.listen(3000,"0.0.0.0",()=>{
    console.log("💘 Servidor escuchando en http://localhost:3000");
});