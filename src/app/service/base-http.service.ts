import axios from 'axios';
import { UpdateProductDto } from '../dtos/product.dto';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';


export class BaseHttpService<TypeClass> {
  // data: TypeClass[] = [];
  constructor (protected url: string) {}

  async getAll(): Promise<TypeClass[]> {
    const { data } = await axios.get<TypeClass[]>(this.url);
    return data;

  }

  async update<ID, DTO>(id:ID, changes: DTO){
    const{data}= await axios.put(`${this.url}/${id}`, changes);
    return data;
  }

}

(async () => {
  const URL_PRODUCTS = 'https://api.escuelajs.co/api/v1/products'
  const URL_CATEGORIES = 'https://api.escuelajs.co/api/v1/categories'

  const productService = new BaseHttpService<Product>(URL_PRODUCTS);
  const categoryService = new BaseHttpService<Category>(URL_CATEGORIES);

  const products = await productService.getAll()
  const categories = await categoryService.getAll()

  console.log('products: >>>> ', products.length);
  productService.update<Product['id'], UpdateProductDto>(1,{
    title:'hola',
  });

  console.log('categories: >>>> ', categories.length);


})();
