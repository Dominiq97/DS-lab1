"usestrict";
constexpress=require('express');
constbodyParser=require('body-parser');
constcors=require('cors');
constsqlite3=require('sqlite3').verbose(); 
constjwt=require('jsonwebtoken');
constbcrypt=require('bcryptjs'); 
const SECRET_KEY = "secretkey23456"; 
constapp=express();
constrouter=express.Router(); 
app.use(cors());
router.use(bodyParser.urlencoded({ extended:false})); 
router.use(bodyParser.json());
constdatabase= newsqlite3.Database("./my.db");
constcreateUsersTable= () => { 
    const sqlQuery=`
    CREATE TABLE IF NOT EXISTS users(
    id integer PRIMARY KEY, 
    name text,
    email text UNIQUE,
    password text)`;
    returndatabase.run(sqlQuery);
}
const findUserByEmail=(email,cb)=>
{
    return database.get(`SELECT * FROM users WHERE email=?`,[email],(err,row)=>{ 
        cb(err,row)});
}
    
const createUser=(user,cb)=>
{
    returndatabase.run('INSERT INTO users(name, email,password) VALUES (?,?,?)',user,(err)=>{cb(err)});
}
    
createUsersTable(); 
router.get('/',(req,res)=>
{
    res.status(200).send('Thisisanauthenticationserver');
});

router.post('/register',(req,res) =>
{ 
    constname=req.body.name; 
    constemail=req.body.email; 
    console.log(req.body);
    constpassword=bcrypt.hashSync(req.body.password); 
    createUser([name,email,password],(err)=>
    {
        if(err)returnres.status(500).send("Server error!");
        findUserByEmail(email,(err,user)=>
        {
            if(err)returnres.status(500).send('Servererror!'); 
            constexpiresIn=24*60*60;
            constaccessToken=jwt.sign({
                id:user.id
            }, 
            SECRET_KEY,{expiresIn:expiresIn});
            res.status(200).send(
                {
                    "user":  user,"access_token":accessToken,"expires_in":expiresIn
                });
            });
        });
    });

router.post('/login', (req,res)=>
{ 
    constemail  =req.body.email;
    constpassword=req.body.password; 
    findUserByEmail(email,(err,user)=>
    {
        if(err)returnres.status(500).send('Servererror!');
        if(!user)returnres.status(404).send('Usernotfound!');
        constresult=bcrypt.compareSync(password,user.password);
        if(!result)returnres.status(401).send('Passwordnot valid!');
        constexpiresIn=24*60*60;constaccessToken=jwt.sign(
        {
            id:user.id
        }, 
        SECRET_KEY,{ 
            expiresIn:expiresIn
        });
        res.status(200).send(
        {
            "user":user,"access_token":accessToken,"expires_in":expiresIn
        });
    });
});

app.use(router);
constport=process.env.PORT||3000; 
constserver=app.listen(port,()=>
{
    console.log('Serverlisteningathttp://localhost:'+port);
});
