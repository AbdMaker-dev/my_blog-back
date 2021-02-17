import { Body, Controller, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';


@Controller('users')
export class UsersController {

    constructor(private userSrv: UsersService, private authService: AuthService ){}

    @Post('registre')
    async registre(
        @Body('name') name: string,
        @Body('login') login: string,
        @Body('password') password: string

    ){
        const new_user = await this.userSrv.registre(
            {
                name,
                login,
                password
            }       
        );
        return {
            statusCode: HttpStatus.OK,
            message: 'successfull',
            data: new_user,
        };
    }


    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
      return this.authService.login(req.user);
    }
}

