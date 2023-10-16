import { Body, Controller, Post, Get, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { loginDto } from './dto/login.dto';
import { AuthGuard } from './auth.guard';
import { Request } from 'express';
import { Roles } from './rolesPerson.decorator';

interface RequestDataUser extends Request{
    user: {
        email : string,
        rol:string
    }
}

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authservice: AuthService,
    ){}

    @Post('register')
    register(
    @Body()
    registerDto: RegisterDto, ){
        console.log(registerDto)
        return this.authservice.register(registerDto)
    }

    @Post('login')
    login(
        @Body()
        loginDto: loginDto,
    ) {
        return this.authservice.login(loginDto);
    }
    @Get('profile')
    @Roles('admin')
    @UseGuards(AuthGuard)
    profile(
        @Req() req: RequestDataUser ) {
        return this.authservice.profile(req.user);
        // return this.authservice.profile({email: req.user.email,
        // rol: req.user.role  });

      }
}

