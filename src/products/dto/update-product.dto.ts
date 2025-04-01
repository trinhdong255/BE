import { IsString, IsOptional, IsNumber } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsNumber()
  @IsOptional()
  price?: number;

  @IsString()
  @IsOptional()
  productCode?: string;

  @IsString()
  @IsOptional()
  branch?: string;

  @IsString()
  @IsOptional()
  productColor?: string;

  @IsNumber()
  @IsOptional()
  quantity?: number;

  @IsString()
  @IsOptional()
  productSize?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  imageUrl?: string;
}
