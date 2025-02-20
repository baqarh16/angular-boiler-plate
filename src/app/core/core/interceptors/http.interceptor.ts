import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Notiflix from 'notiflix';
import { StatusCode } from '../../enums';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // ✅ Clone and modify the request (e.g., add Authorization header)
    const modifiedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem('token') || ''}`
      }
    });

    return next.handle(modifiedReq).pipe(
      catchError((error: HttpErrorResponse) => {
        // ✅ Handle errors globally
        if (error.status === StatusCode.Unauthorized) {
          Notiflix.Notify.failure('Unauthorized! Please log in again.');
          // Handle token expiration, redirect to login, etc.
        } else if (error.status === StatusCode.InternalServerError) {
          Notiflix.Notify.failure('Internal Server Error! Try again later.');
        } else {
          Notiflix.Notify.failure(error.message || 'An error occurred');
        }

        return throwError(() => error);
      })
    );
  }
}
