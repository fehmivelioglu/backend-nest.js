import { auditModel } from "./audit.model";
import { roleModel } from "./role.model";

export class groupModel{
    _id:string;
    name:string;
    description:string;
    audit:auditModel;
    roles:roleModel[];
}