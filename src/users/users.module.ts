import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserSchema } from './entities/user.schema';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from 'src/auth/auth.module';

//* O forwardRef é necessário para que o AuthModule possa importar o UsersModule e se torna uma dependência cíclica podendo ser retirada do AppModule
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    forwardRef(() => AuthModule),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
