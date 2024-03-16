import { Injectable, SimpleChange } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import * as cryptoJS from 'crypto-js'



@Injectable()
export class NetworkInterceptor implements HttpInterceptor {
  private secretKey: string = environment.SECRET_KEY;

  constructor() { }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.method === 'POST') {
      const randomString = this.generateRandomString(88);
      // set random string on body
      request.body.random = randomString;
      const signature = this.generateSignature(request.body);

      // The signature and a random string will be sent to the backend server
      // to validate that the data has not been modified in transit.
      // The server validates the data using the same secret key (symmetric algorithm).
      const authReq = request.clone({
        body: { ...request.body, signature }
      });

      return next.handle(authReq);

    } else {

      return next.handle(request);
    }

  }

  protected generateRandomString(length: number) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';
    // generate random string
    for (let i = 0; i < length; i++) {
      randomString += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return randomString;

  };

  protected generateSignature(data: any): string {
    // Generate an HMAC-SHA512 hash of the request body using the secret key
    const hmac = cryptoJS.HmacSHA512(JSON.stringify(data), this.secretKey);

    // Convert the hash to a Base64-encoded string
    return hmac.toString(cryptoJS.enc.Base64);
  }

}
