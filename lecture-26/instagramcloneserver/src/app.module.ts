import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FirebaseModule } from './firebase/firebase.module';
import { AuthModule } from './auth/auth.module';
import { ImagesModule } from './images/images.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://anuj:anuj@cluster0.x36ik.mongodb.net/instaDatabase?retryWrites=true&w=majority'), UsersModule, FirebaseModule, AuthModule, ImagesModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
