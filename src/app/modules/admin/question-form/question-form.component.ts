import { Component, OnInit } from '@angular/core';
import { QuestionCategory } from '../../../shared/enums/question-category';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {

  categories: [QuestionCategory];

  constructor() {
  }

  ngOnInit() {
    this.setCategories();
  }

  private setCategories(): void {
    this.categories = [
      QuestionCategory.BACK_END,
      QuestionCategory.FRONT_END,
      QuestionCategory.MOBILE_IOS,
      QuestionCategory.MOBILE_ANDROID,
      QuestionCategory.GENERAL
    ];
  }

}
