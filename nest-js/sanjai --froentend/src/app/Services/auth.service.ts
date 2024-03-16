import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string = environment.url
  headers = new Headers();

  constructor(
    private http: HttpClient
  ) {
   }

  async login(data: any) {
    try {
      const resp: any = await this.post("login", data);
      console.log(resp)
    } catch (error) {
      console.error(error)
    }
  }

 async register(data: any) {
    try {
      const resp: any = await this.post("signup", data);
      console.log(resp) 
    } catch (error) {
      console.error(error)
    }
  }


  async post(routes: string, data: any) { 
    const url = this.url + routes;
    return await new Promise((resolve, reject) => {
      this.http.post(url, data).subscribe(
        (response) => resolve(response),
        (error) => reject(error)
      );
    });
  }
}
