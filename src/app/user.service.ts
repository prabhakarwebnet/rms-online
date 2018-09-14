import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { User } from './online/user.model';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  constructor(private http:HttpClient) {}
  private userUrl = 'http://localhost:8080/user-portal/users';
  selectedFile:File = null;
  //private userUrl = '/api';



  onFileSelected(event){

    this.selectedFile = <File>event.target.files[0];
    }


    onUpload()
    {
      const fd = new FormData();
      fd.append('image',this.selectedFile,this.selectedFile.name);
      this.http.post('http://webnetcreatives.com/hollytree/ctcUpload',fd)
      .subscribe(res =>
      {
  console.log(res);
      });
    }



  public getUsers() {
    return this.http.get<User[]>(this.userUrl);
  }

  

  public deleteUser(user) {
    return this.http.delete(this.userUrl + "/"+ user.id);
  }


  public createUser(user) {
     return  this.http.post<User>(this.userUrl, user);
   
  }

  


}
