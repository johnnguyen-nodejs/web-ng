const express = require('express');
const router = express.Router();
var initRouter = (app)=> {
    router.get('/', (req,res)=>{
        res.render('index', { title: "DIGIGO | Home " });
    })


    router.get('/*', (req,res)=>{
        res.redirect('/');
    })
    app.use("/", router);
}

module.exports = initRouter;