import { Injectable, Injector } from '@angular/core';
import {
  HttpInterceptor,
  HttpErrorResponse,
  HttpEvent,
  HttpResponse,
  HttpHandler,
  HttpRequest
} from '../../../../node_modules/@angular/common/http';
import { Router } from '../../../../node_modules/@angular/router';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(
    private injector: Injector,
    private router: Router,
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    /*
    * Not Required at the momet
    */
    // const token: string = localStorage.getItem('token');

    // if (token) {
    //   request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
    // }

    // if (!request.headers.has('Content-Type')) {
    //   request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    // }

    // request = request.clone({ headers: request.headers.set('Accept', 'application/json') });


    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event--->>>', event);
        }
        return event;
      }));
  }
}
