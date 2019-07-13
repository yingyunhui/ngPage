/*---------------about-------------
code by yingyunhui, 201907
a useful tool for your application.
----------------------------------*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

//define response format
interface httpResponse{
  code:string,
  msg:string,
  data:any
}
@Injectable()
export class YYh implements CanActivate{
  
  constructor(private http: HttpClient,private router: Router,private helper: JwtHelperService) {}
  
  //define request headers
  httpOptions={
    headers: new HttpHeaders({
      //'Content-Type':'application/json'
      'Content-Type':'application/x-www-form-urlencoded'
    })
  }
  
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

  //request type: get
  get(url,handler=false){
    return new Promise<httpResponse>((resolve,rejects)=>{
      this.http.get<httpResponse>(url,this.httpOptions).subscribe(r=>{
        if(handler) this.httpHandler(r);
        resolve(r);
      },e=>{
        rejects(e);
      })
    });
  }

  //request type: post
  post(url,options,handler=false){
    console.log(handler)
    return new Promise<httpResponse>((resolve,rejects)=>{
      this.http.post<httpResponse>(url,this.Urlencode(options),this.httpOptions).subscribe(r=>{
        if(handler) this.httpHandler(r);
        resolve(r);
      },e=>{
        rejects(e);
      })
    });
  }
  
  //get token
  getToken(){
    return this.helper.decodeToken(localStorage.getItem(this.token));
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
