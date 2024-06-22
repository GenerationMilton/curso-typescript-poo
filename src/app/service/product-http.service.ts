import axios from "axios";
import { CreateProductDto, UpdateProductDto } from "../dtos/product.dto";
import { ProductService } from "../models/product-service.model";
import { Product } from "../models/product.model";
export class ProductHttpService implements ProductService{

  private URL = "https://api.escuelajs.co/api/v1/products";


  async getAll() {
    const { data } = await axios.get<Product[]>(this.URL);
    return data;
  }
  async update(id: Product['id'], changes: UpdateProductDto) {
    const { data } = await axios.put(`${URL}/${id}`, changes);
    return data;
  }
  async create(dto: CreateProductDto) {
    const { data } = await axios.post(`${URL}/${dto}`);
    return data;
  }
  async findOne(id: Product['id']) {
    const { data } = await axios.get(`${URL}/${id}`);
    return data;
  }
  async add(product: Product) {
    const { data } = await axios.post(`${URL}/${product}`);
    return data;
  }

  async delete(id: Product['id']) {
    const { data } = await axios.delete(`${URL}/${id}`);
    return data;
  }
}
