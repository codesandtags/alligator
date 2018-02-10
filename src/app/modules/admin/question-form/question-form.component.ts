import { Component, OnInit } from '@angular/core';
import { QuestionCategoryModel } from '../../../shared/models/question-category.model';
import { QuestionService } from '../../../shared/components/question/question.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {

  categories: QuestionCategoryModel[];
  questionForm: FormGroup;
  sucessMessage = false;

  constructor(private questionService: QuestionService,
              private fb: FormBuilder,
              public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.initializeForm();
    this.setCategories();
  }

  public onSubmit() {
    if (this.questionForm.valid) {
      this.questionService.addQuestion({
        question: this.questionForm.value.question,
        category: this.questionForm.value.category,
        goal: this.questionForm.value.goal,
        expectedAnswer: this.questionForm.value.expectedAnswer,
        weighted: parseInt(this.questionForm.value.weighted, 10),
        level: parseInt(this.questionForm.value.level, 10),
        isFavorite: this.questionForm.value.isFavorite
      }).then(data => {
        if (data.id) {
          this.questionForm.reset();
          this.openSnackBar('The question was added successfully', ':)');
        }
      }).catch(error => {
        console.error('Upppss there was an error adding the question ', error);
      });
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
      isFavorite: [false, []]
    });
  }

  private setCategories(): void {
    this.questionService
      .getQuestionCategories()
      .subscribe((data: QuestionCategoryModel[]) => {
        this.categories = data;
      });
  }
}
