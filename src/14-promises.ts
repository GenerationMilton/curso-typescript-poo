import axios from 'axios';

(async()=>{

  function delay(time:number){
    const promise = new Promise<string>((resolve)=> {
      setTimeout(()=>{
        resolve('string');
      }, time);
    });
    return promise;
  }

  //funcion consumir mediante get el api desde axios
  function getProducts(){
    const promise = axios.get('https://api.escuelajs.co/api/v1/products');
    return promise;
  }

  //cualquier metodo que contenga el async va a devolver una promesa
  //La responsabilidad de devolver la data se la asigno a la funcion
  async function getProductsAsync(){
    const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
    return rta.data;
  }

  console.log('.....'.repeat(10));
  const rta = await delay(3000);
  console.log(rta);

  //vienen de axios
  const products = await getProducts();
  console.log(products.data);

   //vienen de la async func
   const productsV2 = await getProductsAsync();
   console.log(productsV2);

})();
