import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  forwardRef,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UsersService } from 'src/users/users.service';
import { Token } from './entities/token.entity';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class TokenService {
  constructor(
    @InjectModel('Token') private readonly tokenModel: Model<Token>,
    private readonly userService: UsersService,
    //! Circular dependency detected need to use forwardRef like module imports to avoid errors while compiling:
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  async saveToken(hash: string, username: string): Promise<void> {
    const foundToken = await this.tokenModel.findOne({ email: username });

    if (foundToken) {
      await this.tokenModel
        .updateOne()
        .where({ email: username })
        .set({ hash })
        .exec();
    } else {
      this.tokenModel.create({ hash, email: username });
    }
  }

  async refreshToken(oldToken: string) {
    const foundToken = await this.tokenModel.findOne({ hash: oldToken });

    if (foundToken) {
      const user = await this.userService.findOneLogin(foundToken.email);

      return this.authService.login(user);
    } else {
      return new HttpException('Token inválido', HttpStatus.UNAUTHORIZED);
    }
  }
}
