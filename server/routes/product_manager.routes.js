const ProductController = require("../controllers/product_manager.controller");

module.exports = (app) => {
  app.get("/api/allProducts", ProductController.findAllProduct);
  app.post("/api/newProduct", ProductController.createNewProduct );
  app.get("/api/product/:id", ProductController.findOneProduct);
  app.put("/api/edit/:id", ProductController.updateProduct);
  app.delete("/api/deleteProduct/:id", ProductController.deleteProduct);
};

