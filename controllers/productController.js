const db = require ('../models');

//create main Model 

const Product=db.products;
const Review=db.reviews;

//main work 

//1. Crete product 


const addProduct=async(req,res)=>{
    let info={
        title:req.body.title,
        price:req.body.price,
        description:req.body.description,
        published:req.body.published?req.body.published:false
    };

    const product =await Product.create(info);
    res.status(200).send(product);
    console.log(product);   
}


const getAllProducts= async(req,res)=>{
 let products=await Product.findAll({});
 
 res.status(200).send(products);
};



module.exports={
    addProduct,
    getAllProducts
};