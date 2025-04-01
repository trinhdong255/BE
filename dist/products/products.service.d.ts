import { Model } from 'mongoose';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsService {
    private productModel;
    constructor(productModel: Model<Product>);
    findAll(): Promise<Product[]>;
    findOne(id: string): Promise<Product>;
    create(createProductDto: CreateProductDto): Promise<Product>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<Product>;
    remove(id: string): Promise<void>;
}
