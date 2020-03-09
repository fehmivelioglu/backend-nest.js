import { productTypeModel } from "./product-type.model";
import { auditModel } from "./audit.model";

export class productModel{
    id:string;
    name:string;
    audit:auditModel;
    type:productTypeModel
}