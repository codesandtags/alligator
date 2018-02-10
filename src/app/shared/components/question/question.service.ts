import { Injectable } from '@angular/core';
import { QuestionModel } from '../../models/question.model';
import { QuestionsMock } from '../../../../mocks/questions-mock';
import { QuestionCategoryModel } from '../../models/question-category.model';
import { Subject } from 'rxjs/Subject';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { FirebaseConstants } from '../../constants/firebase-constants';
import * as firebase from 'firebase/app';
import DocumentReference = firebase.firestore.DocumentReference;

@Injectable()
export class QuestionService {

  questionChange = new Subject<boolean>();

  constructor(private db: AngularFirestore) {
  }

  public getAllQuestions(): Array<QuestionModel> {
    return QuestionsMock.questions;
  }

  public getQuestionsByCategory(category: QuestionCategoryModel): Array<QuestionModel> {
    return QuestionsMock.questions
      .filter(question => question.category === category);
  }

  public addQuestion(question: QuestionModel): Promise<DocumentReference> {
    return this.db
      .collection(FirebaseConstants.COLLECTIONS.QUESTIONS)
      .add(question);
  }

  public updateQuestion(question: QuestionModel): void {
  }

  public getQuestionCategories(): Observable<any> {
    return this.db
      .collection(FirebaseConstants.COLLECTIONS.QUESTION_CATEGORIES)
      .valueChanges();
  }

}
