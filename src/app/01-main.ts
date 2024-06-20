import axios from 'axios';

import { Product } from './models/product.model';

(async()=>{

  //cualquier metodo que contenga el async va a devolver una promesa
  //La responsabilidad de devolver la data se la asigno a la funcion

//tipar el metodo axios con <Product[]> o casteando la data as Product[]
  async function getProducts(){
    const { data }= await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
    //code
    // const data = rta.data as Product[];
    return data;
  }


  const products = await getProducts();
  console.log(products.map(item => `${item.id} - ${item.title}`));


})();
