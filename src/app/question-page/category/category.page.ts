import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  progress: number;
  surveyData: any

  // surveyData = {
  //   description: 'Please, tell us what products are really necessary to take care of a baby in his first 3 months',
  //   totalCategories: 7,
  //   answeredCategories: 1,
  //   categories: [
  //     {
  //       id: 1,
  //       name: 'Category Name',
  //       subCategoriesCount: 18,
  //       answered: true,
  //     },
  //     {
  //       id: 2,
  //       name: 'Comer',
  //       subCategoriesCount: 9,
  //       answered: false,
  //     },
  //     {
  //       id: 3,
  //       name: 'Pasear',
  //       subCategoriesCount: 15,
  //       answered: false,
  //     },
  //     {
  //       id: 4,
  //       name: 'Mama',
  //       subCategoriesCount: 8,
  //       answered: false,
  //     },
  //     {
  //       id: 5,
  //       name: 'Jugar',
  //       subCategoriesCount: 2,
  //       answered: false,
  //     },
  //     {
  //       id: 6,
  //       name: 'Dormir',
  //       subCategoriesCount: 2,
  //       answered: false,
  //     },
  //     {
  //       id: 7,
  //       name: 'Mamas',
  //       subCategoriesCount: 8,
  //       answered: false,
  //     },
  //   ]
  // };

  constructor(
    private router: Router,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.progress = 50;
    this.categoryService.getAllCategories().subscribe(
      (res: any) => {
        console.log(res);
        this.surveyData = res.result
      }
    );
  }

  navigateToSubCategory (id) {
    this.router.navigate(['category', id]);
  }

  getprogress (answeredQuestion, totalQuestion) {
    return ((answeredQuestion / totalQuestion) * 100);
  }

}
