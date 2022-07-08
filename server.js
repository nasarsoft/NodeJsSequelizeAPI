  const express = require('express');
  const cors =require('cors');

  const app = express();
 
  var corOptions={
    origin:'https://localhost:8081'
  };



  // middleware
  app.use(cors(corOptions));
  app.use(express.json());
  app.use(express.urlencoded({extended:true}));


  const router = require('./routes/productRouter');
  app.use('/api/product',router);


  //testing api

  // app.get('/',(req,res)=>{
  //    res.json({message:"hello API test "});
  // });


  //port

  const PORT =process.env.PORT || 8080;
  app.listen(PORT,()=>{
      console.log(`server is running port ${PORT}`);
  });
