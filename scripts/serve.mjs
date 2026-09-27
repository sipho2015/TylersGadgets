import http from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import path from 'node:path';
const root=process.cwd(),port=Number(process.env.PORT||3000);
const types={'.html':'text/html','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.jpeg':'image/jpeg','.jpg':'image/jpeg','.png':'image/png','.webp':'image/webp','.ico':'image/x-icon'};
http.createServer(async(req,res)=>{
 try{
  const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
  let file=path.resolve(root,'.'+pathname);
  if(file!==root&&!file.startsWith(root+path.sep)){res.writeHead(403);return res.end();}
  if((await stat(file)).isDirectory())file=path.join(file,'index.html');
  const content=await readFile(file);res.writeHead(200,{'Content-Type':(types[path.extname(file)]||'application/octet-stream'),'Cache-Control':'no-cache'});res.end(content);
 }catch{res.writeHead(404);res.end('Not found');}
}).listen(port,'127.0.0.1',()=>console.log('Tyler?s Gadgets: http://localhost:'+port));
