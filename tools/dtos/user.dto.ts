import { roleModel } from "tools/models/role.model";
import { groupModel } from "tools/models/group.model";

export class userCreateDto{
    name:string;
    surname:string;
    password:string;
    email:string;
    birthdate:Date;
}

export class userLoginDto{
    email:string;
    password:string;
}

export class UserUpdateDto {
    name: string;
    surname: string;  
    image: string;  
    password: string; 
    email: string;
    birthDay: Date;
    roles: roleModel[];
    groups: groupModel[];
  }