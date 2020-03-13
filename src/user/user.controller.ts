import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { userCreateDto } from 'tools/dtos/user.dto';
import { userModel } from 'tools/models/user.model';

@Controller('user')
export class UserController {
    constructor(private userService:UserService){}

    @Post()
    createUser(@Body() body:userCreateDto){
        return this.userService.createUser(body);
    }

@Get()
getAllUsers():userModel[] {
 return this.userService.getAllUsers();
}

@Get(":id")
getUser(@Param() params):userModel{
    return this.userService.getUserById(params.id);
}

}
