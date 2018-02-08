import { Injectable } from '@angular/core';
import { QuestionModel } from '../../models/question.model';
import { QuestionsMock } from '../../../../mocks/questions-mock';
import { QuestionCategory } from '../../enums/question-category';

@Injectable()
export class QuestionService {

  constructor() {
  }

  public getAllQuestions(): Array<QuestionModel> {
    return QuestionsMock.questions;
  }

  public getQuestionsByCategory(category: QuestionCategory): Array<QuestionModel> {
    return QuestionsMock.questions
      .filter(question => question.category === category);
  }

}
