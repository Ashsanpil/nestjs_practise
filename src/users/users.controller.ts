import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get() //get /users
    findAll(@Query('role')role?: 'intern' | 'eng' | 'doc') {
        return []
    }

    @Get(':id') //get /users/:id
    findOne(@Param('id') id: string) {
        return {id}
    }

    @Post() //post /users
    create(@Body() user: {}){
        return user
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() userUpdate: {}){
        return {id, userUpdate}
    }   

    @Delete(':id')
    remove(@Param('id') id: string){
        return {id}
    }
   
}
