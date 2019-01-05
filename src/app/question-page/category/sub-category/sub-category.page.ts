import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubCategoryService } from './sub-category.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.page.html',
  styleUrls: ['./sub-category.page.scss'],
})
export class SubCategoryPage implements OnInit {
  pageId: number;
  categoryName: string;
  subcategoryCount: number;
  categoryDetail: any;

  //this is a sample suggestion. Like this each sub category should have the suggestions. this needs to be removed
  sampleSuggestion = [
      {
        id: 1,
        displayName: 'i didn\'t have',
        isSelected: false,
        
      },
      {
        id: 2,
        displayName: 'Very necessary',
        isSelected: false,
        
      },
      {
        id: 3,
        displayName: 'Necessary',
        isSelected: false,
        
      },
      {
        id: 4,
        displayName: 'Bought a new one',
        isSelected: false,
        
      },
      {
        id: 5,
        displayName: 'New gift',
        isSelected: false,
        
      },
      {
        id: 6,
        displayName: 'Optional',
        isSelected: false,
        
      },
      {
        id: 7,
        displayName: '2" hand gift',
        isSelected: false,
        
      },
      {
        id: 8,
        displayName: 'Not necessary',
        isSelected: false,
        
      },
      {
        id: 9,
        displayName: 'Bought a used one',
        isSelected: false,
        
      },
      {
        id: 10,
        displayName: 'Not necessary at all',
        isSelected: false,
        
      }
  ];
  // categoryDetail = {
  //   img: '../assets/categoryInfo.png',
  //   description: 'Valora por favor los productos para un viage segura y agrado para un bebe',
  //   totalSubItems: 5,
  //   categoryName: 'Category Name',
  //   subCategories: [
  //     {
  //       id: 1,
  //       img: '../assets/subcategory.png',
  //       name: 'productos 1',
  //       suggestions: [
  //         'i didn\'t have',
  //         'Very necessary',
  //         'New gift',
  //         'Necessary',
  //         'Bought a new one',
  //         'Optional',
  //         '2" hand gift',
  //         'Not necessary',
  //         'Bought a used one',
  //         'Not necessary at all'
  //       ],
  //     },
  //     {
  //       id: 2,
  //       img: '../assets/subcategory.png',
  //       name: 'productos 2',
  //       suggestions: [
  //         'i didn\'t have',
  //         'Very necessary',
  //         'New gift',
  //         'Necessary',
  //         'Bought a new one',
  //         'Optional',
  //         '2" hand gift',
  //         'Not necessary',
  //         'Bought a used one',
  //         'Not necessary at all'
  //       ],
  //     },
  //     {
  //       id: 3,
  //       img: '../assets/subcategory.png',
  //       name: 'productos 3',
  //       suggestions: [
  //         'i didn\'t have',
  //         'Very necessary',
  //         'New gift',
  //         'Necessary',
  //         'Bought a new one',
  //         'Optional',
  //         '2" hand gift',
  //         'Not necessary',
  //         'Bought a used one',
  //         'Not necessary at all'
  //       ],
  //     },
  //     {
  //       id: 4,
  //       img: '../assets/subcategory.png',
  //       name: 'productos 1',
  //       suggestions: [
  //         'i didn\'t have',
  //         'Very necessary',
  //         'New gift',
  //         'Necessary',
  //         'Bought a new one',
  //         'Optional',
  //         '2" hand gift',
  //         'Not necessary',
  //         'Bought a used one',
  //         'Not necessary at all'
  //       ],
  //     },
  //     {
  //       id: 5,
  //       img: '../assets/subcategory.png',
  //       name: 'productos 1',
  //       suggestions: [
  //         'i didn\'t have',
  //         'Very necessary',
  //         'New gift',
  //         'Necessary',
  //         'Bought a new one',
  //         'Optional',
  //         '2" hand gift',
  //         'Not necessary',
  //         'Bought a used one',
  //         'Not necessary at all'
  //       ],
  //     },
  //   ]
  // };
  pageData: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private subCategory: SubCategoryService
  ) { }

  ngOnInit() {
    this.subCategory.getAllSubcategory().subscribe(
      (res:any) => {
        console.log(res);
        this.categoryDetail = res.result;       
        this.pageId = 0;
        // this.pageId = +this.activatedRoute.snapshot.params['subId'];
        this.categoryName = this.categoryDetail.categoryName;
        this.subcategoryCount = this.categoryDetail.subCategories.length;
        // this.pageData = this.subcategoryDetail[this.pageId];
        this.showCategoryDetail();
      }
    );
  }

  navigateToSubCategory(id: number, prevPageId: number) {
    this.pageId = id;
    
    if (prevPageId != 0) {
      this.categoryDetail.subCategories[prevPageId - 1].suggestions = this.pageData.suggestions;
    }

    if (id === 0) {
      this.showCategoryDetail();
    } else {
      this.pageData = this.categoryDetail.subCategories[id - 1];
      this.handleSuggestionArray(this.pageData.suggestions);
    }
  }

  showCategoryDetail () {
    this.pageData = {
      img: this.categoryDetail.img,
      description: this.categoryDetail.description,
    };
  }

  submitSuggestion(suggestionindex) {
     this.subCategory.submitSuggestion(this.sampleSuggestion[suggestionindex].id, !this.sampleSuggestion[suggestionindex].isSelected, this.pageData.id).subscribe (
       (res: any) => {
        this.sampleSuggestion[suggestionindex].isSelected = !this.sampleSuggestion[suggestionindex].isSelected;
        let index = this.pageData.suggestions.indexOf(this.sampleSuggestion[suggestionindex].id); 
        if (index === -1) {
          this.pageData.suggestions.push(this.sampleSuggestion[suggestionindex].id);
        } else {
          this.pageData.suggestions.splice(index, 1);
        }
      }
    );
  }

  handleSuggestionArray (suggestionArray) {
    this.sampleSuggestion.forEach(suggestion => {
      if(suggestionArray.indexOf(suggestion.id) === -1 ) {
        suggestion.isSelected = false;
      } else {
        suggestion.isSelected = true;
      }
    });
  }

}
