import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'question-page', loadChildren: './question-page/question-page.module#QuestionPagePageModule' },
  { path: 'category', loadChildren: './question-page/category/category.module#CategoryPageModule' },
  { path: 'category/:subId', loadChildren: './question-page/category/sub-category/sub-category.module#SubCategoryPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
