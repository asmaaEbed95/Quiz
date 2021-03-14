import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  constructor(private api: ApiService) { }

  quizzes: any;

  ngOnInit(): void {
    this.api.getQuiz().subscribe(res => {
      this.quizzes = res;
    });
  }

}
