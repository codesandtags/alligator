import { Injectable } from '@angular/core';
import { QuestionModel } from '../../models/question.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { FirebaseConstants } from '../../constants/firebase-constants';
import * as firebase from 'firebase/app';
import { Subject } from 'rxjs/Subject';
import { QuestionCategoryModel } from '../../models/question-category.model';
import DocumentReference = firebase.firestore.DocumentReference;

@Injectable()
export class QuestionService {

  questionsChanged = new Subject<QuestionModel[]>();
  questionChanged = new Subject<QuestionModel>();

  constructor(private db: AngularFirestore) {
  }

  public fetchAllQuestions(): void {
    // First retrieve the categories
    this.db
      .collection(FirebaseConstants.COLLECTIONS.QUESTION_CATEGORIES)
      .valueChanges()
      .subscribe((categories: QuestionCategoryModel[]) => {
        // Then retrieve the questions
        this.db
          .collection(FirebaseConstants.COLLECTIONS.QUESTIONS)
          .snapshotChanges()
          .map(dataArray => {
            return dataArray.map(data => {
              const category = categories.find(c => c.id === data.payload.doc.data().category);
              return {
                id: data.payload.doc.id,
                question: data.payload.doc.data().question,
                category: category.id,
                categoryName: category.name,
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
      });
  }

  public fetchQuestionById(id: string): void {
    const document = `${FirebaseConstants.COLLECTIONS.QUESTIONS}/${id}`;
    this.db
      .doc(document)
      .valueChanges()
      .subscribe((question: QuestionModel) => {
        this.questionChanged.next({
          id: id,
          ...question
        });
      });
  }

  public addQuestion(question: QuestionModel): Promise<DocumentReference> {
    return this.db
      .collection(FirebaseConstants.COLLECTIONS.QUESTIONS)
      .add(question);
  }

  public updateQuestion(question: QuestionModel): void {
    const document = `${FirebaseConstants.COLLECTIONS.QUESTIONS}/${question.id}`;
    this.db
      .doc(document)
      .update(question);
  }

  public getQuestionCategories(): Observable<any> {
    return this.db
      .collection(FirebaseConstants.COLLECTIONS.QUESTION_CATEGORIES)
      .valueChanges();
  }

}
