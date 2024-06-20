import { ProductMemoryService } from "./service/product-memory.service";

const productService = new ProductMemoryService();

productService.create({
  title:'Producto 1',
  price: 100,
  description:'bla bla bla',
  categoryId: 12,
  images:[],
  creationAt: new Date,
  updatedAt:new Date

});

const products = productService.getAll();
const productId= products[0].id;

productService.updateProduct(productId,{
  title: 'cambiar nombre'
});

const rta = productService.findOne(productId);
console.log(rta);


