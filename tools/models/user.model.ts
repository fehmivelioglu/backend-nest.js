import { auditModel } from "./audit.model";
import { roleModel } from "./role.model";
import { groupModel } from "./group.model";

export class userModel{

  id:string;
  name:string;
  surname:string;
  image:string;
  email:string;
  password:string;
  birthDay:Date;
  // passwordHash:string;
  audit:auditModel;
  roles:roleModel[];
  groups:groupModel[];
}