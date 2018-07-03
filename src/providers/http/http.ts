import { HttpClient ,Headers } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {

  url: string = 'http://ideb.nsbd.net/public/api/';

  constructor(public http: HttpClient) {
    console.log('Hello HttpProvider Provider');
  }

  get(path: string) {
    return this.http.get(this.url + path);
  }
  post(path: string) {
	  let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('X-Requested-With', 'XMLHttpRequest');
    return this.http.post(this.url + path, {headers: headers});
  }

}
