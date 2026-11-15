// Local-only development server. No packages or internet connection required.
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, 'public');
const port = Number(process.env.PORT || 4173);
const files = {'/':'index.html','/index.html':'index.html','/app.js':'app.js','/style.css':'style.css','/sw.js':'sw.js'};
const mime = {'.html':'text/html; charset=utf-8','.js':'application/javascript; charset=utf-8','.css':'text/css; charset=utf-8'};
const server = http.createServer((req,res)=>{
  if (!['GET','HEAD'].includes(req.method)) {res.writeHead(405);return res.end('Method not allowed');}
  let pathname;
  try {pathname = new URL(req.url, 'http://localhost').pathname;} catch {res.writeHead(400);return res.end('Bad request');}
  const filename = Object.hasOwn(files, pathname) ? files[pathname] : null;
  if (!filename) {res.writeHead(404);return res.end('Not found');}
  fs.readFile(path.join(root,filename),(err,data)=>{
    if(err){res.writeHead(500);return res.end('Unable to read application file');}
    res.writeHead(200,{'Content-Type':mime[path.extname(filename)],'Cache-Control':'no-cache','X-Content-Type-Options':'nosniff'});
    res.end(req.method === 'HEAD' ? undefined : data);
  });
});
server.on('error',e=>{console.error(e.code === 'EADDRINUSE' ? `Port ${port} is in use. Close the other server or set PORT to another number.` : e.message);process.exit(1);});
server.listen(port,'127.0.0.1',()=>console.log(`IlmiSpark is ready: http://127.0.0.1:${port}\nKeep this terminal open. Press Ctrl+C to stop.`));
