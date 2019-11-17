// conexion postgres
const  {Pool} = require('pg');
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password:'figo',
    database: 'miapi',
    // port: '5432'
});
//funciones GET
const getUsers = async (req, res) => {
    const respuesta =  await pool.query('select * from users');
    res.send(respuesta.rows);
}
// funcion crear  POST
const createUsers = async (req, res) => {
    const {name, email, edad} = req.body;
    const respuesta = await 
    pool.query('insert into users (name, email, edad) values ($1,$2,$3)'
    ,[name,email,edad]);
    console.log(respuesta);
    res.json({
        message: 'usuario Creado',
        body: {
            user: {name, email, edad}
        }
    });
}
//funcion buscar  GET
const findUser = async (req, res) => {
const id = req.params.id;
const respuesta = await pool.query('select * from users where id = $1',[id]);
res.json({
    message: 'Usuario',
    body: {
        user: respuesta.rows
    }
});
}
//funcion eliminar DELETE
const deleteUser = async (req, res) => {
    const id = req.params.id;
    const respuesta = await pool.query('delete from users where id = $1',[id]);
    res.send(`usuario con id ${id} fue eliminado`)
    }
// funcion modificar PUT
const updateUsers = async (req, res) => {
    const id = req.params.id;
    const {name, email, edad} = req.body;
    const respuesta = await pool.query('update users set name = $1, email = $2, edad = $3 where id = $4',
                                        [name, email, edad, id]);
                                        console.log(respuesta);
                                        res.send('Usuario Modificado');
}

//Create data links
const createLinks = async (req, res) => {
    const {link, detalle, userid} = req.body;
    const respuesta = await 
    pool.query('insert into links (link, detalle, userid) values ($1,$2,$3)'
    ,[link, detalle, userid]);
    console.log(respuesta);
    res.json({
        message: 'Link Creado',
        body: {
            user: {link, detalle, userid}
        }
    });
}
//funciones GET de links
const getLinks = async (req, res) => {
    const respuesta =  await pool.query('select * from links');
    res.send(respuesta.rows);
}
// funcion buscar por id de usuario
const findIdLink = async (req, res) => {
    const id = req.params.id;
    const respuesta = await pool.query('select * from users,links where  users.id = links.userid and users.id = $1', [id]);
    res.send(respuesta.rows);
}
module.exports = {
    getUsers,
    createUsers,
    findUser,
    deleteUser,
    updateUsers,
    createLinks,
    getLinks,
    findIdLink
}