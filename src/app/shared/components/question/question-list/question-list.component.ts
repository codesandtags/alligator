import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { QuestionModel } from '../../../models/question.model';
import { QuestionCategory } from '../../../enums/question-category';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  questions: Array<QuestionModel>;

  constructor(private questionService: QuestionService) {
  }

  ngOnInit() {
    this.getQuestions();
  }

  private getQuestions() {
    this.questions = this.questionService.getAllQuestions();
    // this.questions = this.questionService.getQuestionsByCategory(QuestionCategory.FRONT_END);
  }

}
