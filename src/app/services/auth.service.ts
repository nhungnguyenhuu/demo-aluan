import { Injectable } from '@angular/core';
import { IUser } from './IUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users2 : IUser[] = [

    {
      id: 1,
      email: 'admin@gmail.com',
      password: '123',
      name:'admin'
    },

    {
      id: 2,
      email: 'user@gmail.com',
      password: '123',
      name:'user'
    },

    {
      id: 3,
      email: 'nhun@gmail.com',
      password: '123',
      name:'nhun'
    }
  ]

  users : IUser[] = window.localStorage.hasOwnProperty('users') ? JSON.parse(localStorage.getItem('users')):this.users2;


  constructor() { }

  checkAccount(data){
    
    for(let user of this.users){
      if(user.email==data.email && user.password==data.password){
        return user;
      }
    }
    return null;
  }

  findUserById(id){
    return this.users.filter((user, index )=>{
      return user.id ==id;
    })
  }

  update(id, data){
    let index = this.findIndexUser(id);
    if(index!=-1){
      this.users[index].name = data.name;
    }

  }

  findIndexUser(id){
    for(let i=0; i<this.users.length; i++){
      if(this.users[i].id==id){
        return i;
      }
    }
    return -1;
  }
  addUser(data){
   let user = this.users.push(data);
  localStorage.setItem('users', JSON.stringify(this.users));
   return user;
  }
}
