/*---------------about-------------
code by yingyunhui, 201907
a useful tool for your application.
----------------------------------*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

//define response format
interface httpResponse{
  code:string,
  msg:string,
  data:any
}
@Injectable()
export class YYh implements CanActivate{
  
  constructor(private http: HttpClient,private router: Router) {}
  
  //define root route
  login=['login'];

  //define token name
  token="token";

  //encode post params
  Urlencode(params) {
    return new HttpParams({fromObject: params});
  }

  httpHandler(r:httpResponse){
    if(r.code == '104') {
      this.router.navigate(this.login);
    }
  }

  httpOptions(t:boolean){
    if(t) {
      return {
        headers: new HttpHeaders({
          'Content-Type':'application/x-www-form-urlencoded',
          'token':localStorage.getItem('token')
        })
      }
    }else{
      return {
        headers: new HttpHeaders({
          'Content-Type':'application/x-www-form-urlencoded'
        })
      }
    }
  }
  //request type: get
  get(url,token=true){
    return new Promise<httpResponse>((resolve,rejects)=>{
      this.http.get<httpResponse>(url,this.httpOptions(token)).subscribe(r=>{
        if(token) this.httpHandler(r);
        resolve(r);
      },e=>{
        rejects(e);
      })
    });
  }

  //request type: post
  post(url,options,token=true){
    return new Promise<httpResponse>((resolve,rejects)=>{
      this.http.post<httpResponse>(url,this.Urlencode(options),this.httpOptions(token)).subscribe(r=>{
        if(token) this.httpHandler(r);
        resolve(r);
      },e=>{
        rejects(e);
      })
    });
  }
  
  //get token
  getToken(){
    //return this.helper.decodeToken(localStorage.getItem(this.token));
  }

  handleNull(data) {
    for (let x in data) {
      if (data[x] === null) {
        data[x] = '';
      } else {
        if (Array.isArray(data[x])) {
          data[x] = data[x].map(z => {
            return this.handleNull(z);
          });
        }
        if(typeof(data[x]) === 'object'){
          data[x] = this.handleNull(data[x]);
        }
      }
    }
    return data;
  }

  //set the page activate according to the token
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem(this.token)) {
      return true;
    }

    this.router.navigate(this.login);
    return false;
  }
}
