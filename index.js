const express = require("express");
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())

const categories = require('./Data/categories.json')
const news = require('./Data/news.json')

app.get('/', (req, res) =>{
    res.send("News API Running")
})
app.get('/news-categories', (req, res)=>{
    res.send(categories)
})
app.get('/category/:id',(req, res)=>{
    const id = req.params.id;
    if(id === "08"){
        res.send(news)
    }
    else{
        const categoryIems = news.filter(n => n.category_id === id)
        res.send(categoryIems);
    }
})
app.get('/news',(req, res)=>{
    res.send(news)
})
app.get('/news/:id',(req, res)=>{
const id = req.params.id;
const selectNews = news.find(n => n._id === id)
    res.send(selectNews)
})
app.listen(port, ()=>{
    console.log("Dragon News Server running:", port)
})