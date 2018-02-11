import { Component, OnDestroy, OnInit } from '@angular/core';
import { QuestionCategoryModel } from '../../../shared/models/question-category.model';
import { QuestionService } from '../../../shared/components/question/question.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { QuestionModel } from '../../../shared/models/question.model';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit, OnDestroy {

  categories: QuestionCategoryModel[];
  questionForm: FormGroup;
  questionSubscription: Subscription;
  routeSubscription: Subscription;
  isEditingMode = false;
  formModeText = 'Add';

  constructor(private questionService: QuestionService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.identifyEditMode();
    this.initializeForm();
    this.setCategories();
  }

  ngOnDestroy(): void {
    if (this.isEditingMode) {
      this.routeSubscription.unsubscribe();
    }
  }

  public onSubmit() {
    if (this.questionForm.valid) {
      const question: QuestionModel = {
        question: this.questionForm.value.question,
        category: this.questionForm.value.category,
        goal: this.questionForm.value.goal,
        expectedAnswer: this.questionForm.value.expectedAnswer,
        weighted: parseInt(this.questionForm.value.weighted, 10),
        level: parseInt(this.questionForm.value.level, 10),
        isFavorite: this.questionForm.value.isFavorite
      };

      if (this.isEditingMode) {
        question.id = this.questionForm.value.id;
        this.questionService.updateQuestion(question);
        this.openSnackBar('The question was updated successfully', '🤩');
      } else {
        this.questionService.addQuestion(question).then(data => {
          if (data.id) {
            this.questionForm.reset();
            this.openSnackBar('The question was added successfully', '😃');
          }
        }).catch(error => {
          console.error('Upppss there was an error adding the question ', error);
        });
      }
    }
  }

  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
      verticalPosition: 'top'
    });
  }

  private initializeForm(): void {
    this.questionForm = this.fb.group({
      question: ['', [Validators.required]],
      category: [null, [Validators.required]],
      weighted: [null, [Validators.required]],
      level: [null, [Validators.required]],
      goal: ['', []],
      expectedAnswer: ['', []],
      isFavorite: [false, []],
      id: null
    });
  }

  private setCategories(): void {
    this.questionService
      .getQuestionCategories()
      .subscribe((data: QuestionCategoryModel[]) => {
        this.categories = data;
      });
  }

  private identifyEditMode() {
    this.isEditingMode = this.router.url.includes('edit');

    if (this.isEditingMode) {
      this.formModeText = 'Edit';
      this.fetchQuestion();
    }
  }

  private fetchQuestion() {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.questionSubscription = this.questionService
        .questionChanged
        .subscribe(questionDocument => {
          this.questionForm.get('question').setValue(questionDocument.question);
          this.questionForm.get('goal').setValue(questionDocument.goal);
          this.questionForm.get('expectedAnswer').setValue(questionDocument.expectedAnswer);
          this.questionForm.get('weighted').setValue(questionDocument.weighted.toString());
          this.questionForm.get('level').setValue(questionDocument.level.toString());
          this.questionForm.get('category').setValue(questionDocument.category);
          this.questionForm.get('isFavorite').setValue(questionDocument.isFavorite);
          this.questionForm.get('id').setValue(questionDocument.id);
          this.questionSubscription.unsubscribe();
        });
      this.questionService.fetchQuestionById(params.id);
    });
  }
}
