import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpService {

  baseUrl: string;
  constructor(
    private http: HttpClient,
  ) {
    this.baseUrl = 'http://localhost:8069/';
  }

  createAuthorizationHeader(): HttpHeaders {
    return new HttpHeaders(
      {
        'Content-Type': 'application/json'
      }
    );
  }

  getHttp(url) {
    return this.http.get(this.baseUrl + url, {
      headers: this.createAuthorizationHeader(),
    });
  }

  postHttp(url, data) {
    return this.http.post(this.baseUrl + url, data, {
      headers: this.createAuthorizationHeader()
    });
  }

  deleteHttp(url) {
    return this.http.delete(this.baseUrl + url, {
      headers: this.createAuthorizationHeader()
    });
  }

  putHttp(url, data) {
    return this.http.put(this.baseUrl + url, data, {
      headers: this.createAuthorizationHeader()
    });
  }
}
