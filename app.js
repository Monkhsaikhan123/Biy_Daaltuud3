const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const { requireAuth } = require('./middleware/authMiddleware');

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

app.set('view engine' , 'ejs');
app.set('views' , 'views');

//database

mongoose.connect("mongodb+srv://dbUser:dbUser@cluster0.n2wxvcz.mongodb.net/node-auth", {
  useNewUrlParser: true,
  useUnifiedTopology: true

})
.then((result) => app.listen(5000))
.catch((err)=> console.log(err));

app.get('/', (req,res) => res.render('home'));
app.get('/smoothies', requireAuth,(req,res)=> res.render('smoothies'));

app.use(authRoutes);


//cookie

/* app.get('/set-cookies', (req,res)=>{ */
    /* res.setHeader('Set-Cookie', 'newUser=true') */
/*     res.cookie('newUser' , false);
    res.cookie('isEmployee', true, {maxAge:1000, secure:1000});

    res.send('you got the cookies!');
})

app.get('/read-cookies', (req,res)=>{
    const cookie = req.cookies;
    console.log(cookies);

    res.json(cookies);
}) */
