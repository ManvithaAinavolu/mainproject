var express=require('express');
const path = require('path');
var app=express();
var bodyparser=require('body-parser');
app.use(express());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res){

  
    res.sendFile(path.join(__dirname, 'views/pages/index.html'));
    

   // res.setHeader('Content-Security-Policy', "default-src 'self' http://localhost:4000/");

   

});
app.get('/index.html',function(req,res){

  
  res.sendFile(path.join(__dirname, 'views/pages/index.html'));
  

 // res.setHeader('Content-Security-Policy', "default-src 'self' http://localhost:4000/");

 

});
app.get('/about.html', function(req, res) {
  res.sendFile(path.join(__dirname, 'views/pages/about.html'));
});

app.get('/cart.html', function(req, res) {
  res.sendFile(path.join(__dirname, 'views/pages/cart.html'));
});

app.get('/checkout.html', function(req, res) {
  res.sendFile(path.join(__dirname, 'views/pages/checkout.html'));
});
app.get('/products.html',function(req,res){
  res.sendFile(path.join(__dirname,'views/pages/products.html'));
});
app.get('/single_products.html',function(req,res){
  res.sendFile(path.join(__dirname,'views/pages/single_products.html'));
});

app.listen(4000, () => {
    console.log(`http://localhost:4000`);
  });
  