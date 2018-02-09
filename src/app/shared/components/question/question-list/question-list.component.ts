import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { QuestionService } from '../question.service';
import { QuestionModel } from '../../../models/question.model';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit, AfterViewInit {

  questions: Array<QuestionModel>;
  dataSource = new MatTableDataSource<QuestionModel>(this.questions);
  displayedColumns = ['category', 'question'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private questionService: QuestionService) {
  }

  ngOnInit() {
    this.getQuestions();
  }

  /**
   * Set the sort and paginator after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  private getQuestions() {
    this.questions = this.questionService.getAllQuestions();
    this.dataSource = new MatTableDataSource<QuestionModel>(this.questions);
    // this.questions = this.questionService.getQuestionsByCategory(QuestionCategoryModel.FRONT_END);
  }

}
