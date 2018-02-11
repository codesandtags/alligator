import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { QuestionService } from '../question.service';
import { QuestionModel } from '../../../models/question.model';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';
import { UrlConstants } from '../../../constants/url-constants';
import { UiService } from '../../../services/ui.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit, OnDestroy {

  questions: QuestionModel[];
  dataSource = new MatTableDataSource<QuestionModel>(this.questions);
  displayedColumns = ['level', 'categoryName', 'question', 'actions'];
  isLoading = false;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  EDIT_QUESTION = UrlConstants.ROUTES.ADMIN_EDIT_QUESTION;
  private questionSubscription: Subscription;
  private loadingSubscription: Subscription;

  constructor(private questionService: QuestionService,
              private uiService: UiService) {
  }

  ngOnInit() {
    this.listenLoading();
    this.getQuestions();
  }

  ngOnDestroy(): void {
    this.questionSubscription.unsubscribe();
    if (this.loadingSubscription) {
      this.loadingSubscription.unsubscribe();
    }
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    this.dataSource.filterPredicate = this.customFilter;
  }

  private customFilter(data: QuestionModel, filter: string): boolean {
    const textToFilter = [data.categoryName, data.question].join().toLowerCase();
    return textToFilter.includes(filter);
  }

  private getQuestions() {
    this.questionSubscription = this.questionService
      .questionsChanged
      .subscribe(questions => {
        this.questions = questions;
        this.dataSource = new MatTableDataSource<QuestionModel>(this.questions);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
    this.questionService.fetchAllQuestions();
  }

  private listenLoading() {
    this.loadingSubscription = this.uiService.loadingStateChange
      .subscribe(isLoading => {
        this.isLoading = isLoading;
      });
  }
}
