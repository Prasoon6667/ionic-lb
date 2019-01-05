import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/service/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private httpService: HttpService
  ) { }

  getAllCategories () {
    return this.httpService.postHttp('categories', {});
  }
}
