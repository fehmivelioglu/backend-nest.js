import { auditModel } from "./audit.model";
import { inventoryTypeModel } from "./inventory-type.model";
import { productModel } from "./product.model";

export class inventoryModel{
    id:string;
    barcode:number;
    description:string;
    audit:auditModel;
    type:inventoryTypeModel;
    product:productModel;
}