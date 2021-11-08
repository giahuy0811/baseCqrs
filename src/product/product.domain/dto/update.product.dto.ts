import { ApiProperty, } from "@nestjs/swagger";
import { ProductDocument } from "src/product/shared/eventStream/model/product.interface";




export class UpdateProductDto extends ProductDocument{

  @ApiProperty()
  id: string
  @ApiProperty()
  name: string;
  @ApiProperty()
  des: string;
  @ApiProperty()
  qty: number;
}