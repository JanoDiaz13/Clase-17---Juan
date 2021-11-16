import methodOverride from "method-override";
import cors from "cors";
import express from "express";
//
const app = express();
const log = console.log;

let port = process.env.PORT || 3000;

let users = ["bart", "lisa", "homero", "marge"]; 

app.use(cors());
app.use(methodOverride());

app.get("/users", (req, res)=>{
    res.send(users);
    
});

//borrar elemento array
app.delete("/users/delete/:nombre", (req,res)=>{
    users.find(e => e !== req.params.nombre);
    res.send("Usuario borrado");
});


//reemplazar elemento array
app.put("/user/nombre:/nuevo:", (req,res)=>{
    let index = users.indexOf(req.params.nombre);
    users[index] = req.params.nuevo;
    res.send("Usuario Actualizado");
});
//


app.post("/user/create/:nombre", (req, res)=>{
    users.push(req.params.nombre);
    res.send("usuario creado");
});

app.listen(port, ()=>{
    log("start server");
});





//en json
/* "scripts":{
    "dev":"nodemon -r esm app.js"
},  */


//npm run dev  (para correr en json)