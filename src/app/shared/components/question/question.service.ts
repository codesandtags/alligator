import { Injectable } from '@angular/core';
import { QuestionModel } from '../../models/question.model';
import { QuestionsMock } from '../../../../mocks/questions-mock';
import { QuestionCategoryModel } from '../../models/question-category.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { FirebaseConstants } from '../../constants/firebase-constants';
import * as firebase from 'firebase/app';
import { Subject } from 'rxjs/Subject';
import DocumentReference = firebase.firestore.DocumentReference;

@Injectable()
export class QuestionService {

  questionsChanged = new Subject<QuestionModel[]>();

  constructor(private db: AngularFirestore) {
  }

  public fetchAllQuestions() {
    this.db
      .collection(FirebaseConstants.COLLECTIONS.QUESTIONS)
      .snapshotChanges()
      .map(dataArray => {
        return dataArray.map(data => {
          return {
            id: data.payload.doc.id,
            question: data.payload.doc.data().question,
            category: data.payload.doc.data().category,
            goal: data.payload.doc.data().goal,
            expectedAnswer: data.payload.doc.data().expectedAnswer,
            level: data.payload.doc.data().level,
            weighted: data.payload.doc.data().weighted,
            isFavorite: data.payload.doc.data().isFavorite
          };
        });
      })
      .subscribe((questions: QuestionModel[]) => {
        this.questionsChanged.next([...questions]);
      });
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
