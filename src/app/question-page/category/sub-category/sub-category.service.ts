import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/service/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  constructor(
    private httpService: HttpService
  ) { }

  getAllSubcategory () {
    return this.httpService.postHttp('products', {});
  }

  submitSuggestion (id, isSelected, subcategoryId) {
    return this.httpService.postHttp('suggestions', {id: id, isSelected: isSelected, subcategoryId: subcategoryId});
  }
}
