import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';

import * as bcryptjs from 'bcryptjs'
import { JwtService } from '@nestjs/jwt';

import { loginDto } from './dto/login.dto';


@Injectable()
export class AuthService {

    constructor(
        private readonly usersService: UsersService, private readonly jwtService: JwtService
    ) { }

    async register({ name, email, userName, password }: RegisterDto) {
        const user = await this.usersService.findOneEmail(email);

        if (user) {
            throw new BadRequestException('user not valid this is user already exists');
        }

        //return
        await this.usersService.create({
            name, userName, email,
            password: await bcryptjs.hash(password, 10)
        });

        //return para validacion de credenciales
        return{
            name, email
        }
    }

    async login({ email, password }: loginDto) {
        const user = await this.usersService.findOneEmail(email);
        if (!user) {
            throw new UnauthorizedException('This is the credentials not is valid');
        }

        const isPasswordValid = await bcryptjs.compare(password, user.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException('Password not is valid ')
        }

        const payload = { email: user.email, sub: user.id, rol: user.rol };
 
        const token = await this.jwtService.signAsync(payload);

        // return user;

        return {
            token, email
        };
    }


    async profile({email, rol}: {email:string, rol: string}){
      
        
            return await this.usersService.findOneEmail(email);
        

    }
}
