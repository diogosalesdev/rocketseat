import { Request, Response } from 'express';
import createUser from './service/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'diogosalesdev@gmail.com',
    password: '123456',
    techs: ,['Node.js', 'ReactJS', 'React Native', {title: 'Javascript', expreience: 100}]
  });
  return response.json({message: 'Hello World!'});
}