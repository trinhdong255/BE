import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Product extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  productCode: string;

  @Prop({ required: true })
  branch: string;

  @Prop({ required: true })
  productColor: string;

  @Prop({ required: true })
  quantity: number;

  @Prop({ required: true })
  productSize: string;

  @Prop()
  description: string;

  @Prop()
  imageUrl: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
