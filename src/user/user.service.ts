import { Injectable } from '@nestjs/common';
import { userModel } from 'tools/models/user.model';
import { userCreateDto } from 'tools/dtos/user.dto';

const result: userModel[] = [];

@Injectable()
export class UserService {


  getAllUsers(): userModel[] {
    if (result.length == 0) {
      this.creatingMockUser({
        birthDay: new Date(),
        email: 'fehmi_ali@hotmail.com',
        name: 'fehmi',
        surname: 'velioglu',
        password: '12313',
      });
    }
    return result;
  }

getUserById(id):any{
const user=result.find(data=>data.id==id);
if(!user){
  return "user does not exist";
}
else{
  return user;
}
}

  createUser(body: userCreateDto) {
    const isExist = result.find(res => {
      res.email == body.email;
    });
    if (isExist) {
      return isExist;
    } else {
      this.creatingMockUser(body);
      return result.slice(result.length - 1, result.length);
    }
  }


  private creatingMockUser(data: any) {
    const user: userModel = new userModel();
    user.birthDay = data.birthDay;
    user.email = data.email;
    user.name = data.name;
    user.surname = data.surname;
    user.password = data.password;
    user.id=(Math.floor(Math.random()*60)+1).toString();
    result.push(user);
  }
}
