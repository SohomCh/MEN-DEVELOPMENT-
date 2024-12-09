// // const http = require('http');
// // const server = http.createServer((req,res)=>{
// //     if(req.url=='/about'){
// //         res.end('this is about page')
// //     }
// //     if(req.url=='/profile'){
// //         res.end('this is profile page')
// //     }
// //     if(req.url=='/'){
// //         res.end('home page')
// //     }
// // })
// // server.listen(3000);



// const express = require('express');
// const morgan = require('morgan') //Third party middleware morgan
// const app = express();
// const usermodel = require('./models/user') // implementing mongodb (Schema)
// const connect = require('./config/db') // connection of mongodb
// connect();
// const path = require('path');
// app.use(morgan('dev'))

// app.set('view engine', 'ejs');

// // Set the views directory path (Ensure views are in the 'views' folder)
// app.set('views', path.join(__dirname, 'views'));



// // Ensure views are in the 'views' folder

// // Serve static files like CSS, images, etc.
// app.use(express.static('public'));

// // built-in middleware to read data that is showing undefined before using it .
// app.use(express.json())
// app.use(express.urlencoded({extended : true}))


// //middleware(built-in) to use static pages.s
// app.use(express.static("public"));

// //coustom middleawre:

// // app.use((req,res,next)=>{
// //     const a=13;
// //     const b =14;
// //     console.log("hey this a middleware",a+b)
// //     next()
// // })


// // custom to only mainpage
// // app.get('/',(req,res,next)=>{

// //     console.log(2+3)
// // next()
// // } ,(req,res) =>{
// //     // res.send("hi from express")
    
// //     res.render('index')
// // })


// //data receiving put the route to form action
// // app.get('/form', (req,res)=>{
// //     res.render('index.ejs')
// //     console.log(req.query)
// //     res.send("data recieved")
// // })

// //AS data  was showing in frontend(look up at title bar) we will use post route 
// app.get('/form', (req, res) => {
//     res.render('index.ejs'); // Ensure index.ejs contains the form
// });
// app.post('/form', (req,res)=>{
  
//     console.log(req.body)
//     res.send("data recieved")
// })


// app.get('/about',(req,res)=>{
//     res.send("this is about page")

// })

// app.get('/contact ',(req,res)=>{
//     app.send("hey this is contact page")
// })

// app.get('/register',(req,res)=>{
//     app.render('/register')
// })


// was just copying form github as the regiater page is no rendering 


const express = require('express');
const morgan = require('morgan')
const app = express()
const usermodel = require('./models/user') // implementing mongodb (Schema)
 const connect = require('./config/db') // connection of mongodb
 connect();

app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))


app.set("view engine", 'ejs')


app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.send('About Page')
})

app.get('/profile', (req, res) => {
    res.send('Profile Page')
})

app.get('/register', (req, res) => {
    res.render('register')
})
app.post('/register', async(req,res)=>{
    const {username , email , passowrd} =req.body;

 const newUser= await usermodel.create({
        username : username,
        email : email,
        password :passowrd

    })

    res.send( newUser)
})
//READ operation

app.get('/get-users',(req,res)=>{

    usermodel.find({
        username:"Sohom"

    }).then((user)=>{
        res.send(user)
    })
})
//UPDATE OPERATION

app.get('/update-user',async(req,res)=>{
  await  usermodel.findOneAndUpdate({
        username : "Sohom"
    },{
        email:"sohom404@gmail.com"
    })
    res.send("updated check mongodb compass")
})
 //DELETE

 app.get('/delete-user',async (req,res)=>{
    await usermodel.findOneAndDelete({
        usernmae: "Sohom"
    })
    res.send("deleted")
 })

app.listen(8000);