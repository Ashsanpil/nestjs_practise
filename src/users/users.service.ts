import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
private users = [
    {
        id:1,
        name:'John',
        age:20
    },
    {
        id:2,
        name:'Jane',
        age:21
    },
    {
        id:3,
        name:'Jack',
        age:22
    }
];

findAll(role?: 'intern' | 'eng' | 'doc'){
    return this.users;
}

}
