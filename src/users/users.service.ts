
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users, UsersDoc } from './users';
import * as bcrypt from 'bcrypt';


// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {

  constructor(@InjectModel(Users.name) private readonly modelUsers: Model<UsersDoc>){}

  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }

  async login(username: string, password: string): Promise<User> {

    if (username != "abd2020") {
      return null;
    }
    const user = await this.modelUsers.findOne({'login': username}).exec();

    console.log(user);
    
    if (!user) {
        return this.registre({"name": "Alioune", "login": "abd2020", "password": password});
    }
    
    return user;
}

    async registre(data: User): Promise<User> {
      data.password = await bcrypt.hash(data.password, 10);
      const sujet = new this.modelUsers(data);
      return sujet.save();
    }

    async findAll(): Promise<User[]> {
      return this.modelUsers.find().exec();
    }

}
