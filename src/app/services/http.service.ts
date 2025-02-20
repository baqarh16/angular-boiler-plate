import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  private baseUrl = environment.apiBaseUrl; // Change this to your API URL

  constructor(private http: HttpClient) {}

  /**
   * Generic GET method
   * @param endpoint API endpoint
   * @param params Optional query params
   */
  get<T>(endpoint: string, params?: HttpParams): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${endpoint}`, { params });
  }

  /**
   * Generic POST method
   * @param endpoint API endpoint
   * @param body Request payload
   */
  post<T>(endpoint: string, body: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${endpoint}`, body);
  }

  /**
   * Generic PUT method
   * @param endpoint API endpoint
   * @param body Request payload
   */
  put<T>(endpoint: string, body: any): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${endpoint}`, body);
  }

  /**
   * Generic DELETE method
   * @param endpoint API endpoint
   */
  delete<T>(endpoint: string): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}/${endpoint}`);
  }
}
