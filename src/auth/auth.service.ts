/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { TokenService } from 'src/token/token.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private readonly tokenService: TokenService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneLogin(email);

    if (user && bcrypt.compareSync(pass, user.password)) {
      const { password, ...result } = user.toJSON();

      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = {
      name: user.name,
      email: user.email,
      sub: user.id,
      role: user.role,
      door: user.door,
      tower: user.tower,
    };

    const token = this.jwtService.sign(payload);
    this.tokenService.saveToken(token, user.email);

    return {
      access_token: token,
    };
  }
}
