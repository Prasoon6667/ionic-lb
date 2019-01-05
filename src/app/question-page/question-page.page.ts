import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.page.html',
  styleUrls: ['./question-page.page.scss'],
})
export class QuestionPagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToCategory () {
    this.router.navigate(['/category']);
  }

}
