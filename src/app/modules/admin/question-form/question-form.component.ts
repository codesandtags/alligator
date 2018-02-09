import { Component, OnInit } from '@angular/core';
import { QuestionCategoryModel } from '../../../shared/models/question-category.model';
import { QuestionService } from '../../../shared/components/question/question.service';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {

  categories: QuestionCategoryModel[];

  constructor(private questionService: QuestionService) {
  }

  ngOnInit() {
    this.setCategories();
  }

  private setCategories(): void {
    this.categories = this.questionService.getQuestionCategories();
  }

}
