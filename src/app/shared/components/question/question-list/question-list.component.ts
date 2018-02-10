import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { QuestionService } from '../question.service';
import { QuestionModel } from '../../../models/question.model';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit, OnDestroy {


  questions: QuestionModel[];
  dataSource = new MatTableDataSource<QuestionModel>(this.questions);
  questionSubscription: Subscription;
  displayedColumns = ['level', 'category', 'question', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private questionService: QuestionService) {
  }

  ngOnInit() {
    this.getQuestions();
  }

  ngOnDestroy(): void {
    this.questionSubscription.unsubscribe();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    this.dataSource.filterPredicate = this.customFilter;
  }

  private customFilter(data: QuestionModel, filter: string): boolean {
    const textToFilter = [data.category.name, data.question].join().toLowerCase();
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

}
