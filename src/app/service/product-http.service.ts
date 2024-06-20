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
  update(id: number, changes: UpdateProductDto): Product {
    throw new Error("Method not implemented.");
  }
  create(dto: CreateProductDto): Product {
    throw new Error("Method not implemented.");
  }
  findOne(id: number): Product | undefined {
    throw new Error("Method not implemented.");
  }
}
