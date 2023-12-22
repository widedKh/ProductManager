const Product=require("../models/product_manger.model")

module.exports.findAllProduct=(req, res)=>{
    Product.find()
    .then(allProduct=>{
        console.log(allProduct)
        res.json(allProduct)
    })
    .catch(err=>{res.json({message:"error"})})
}

module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
      .then(newProduct => {
        console.log(newProduct);
        res.json(newProduct);
      })
      .catch(err => {
        console.log(err);
        res.status(404).json({ error: "Failed to create a new product." });
      });
  };
  
  module.exports.findOneProduct=(req, res) => {
     Product.findOne({ _id: req.params.id })
     .then(oneProduct => {
      console.log(oneProduct);
      res.json(oneProduct);
     })
     .catch(err => {
      console.log(err);
      res.status(404).json({ error: "Failed to find the product." });
    });
  };

  module.exports.updateProduct= (req, res) => {
      Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then((editProduct) => {
          console.log(editProduct);
          res.json(editProduct);
        })
        .catch((err) => {
          console.log(err);
          res.status(404).json({ error: "Failed to update the product." });
        });
    };
  
    module.exports.deleteProduct= (req, res) => {
      Product.deleteOne({ _id: req.params.id })
        .then((deleteConfirmation) => {
          console.log(deleteConfirmation);
          res.json(deleteConfirmation);
        })
        .catch((err) => {
          console.log(err);
          res.status(404).json({ error: "The product cannot be deleted" });
        });
      };