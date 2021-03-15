import { ApiService } from './../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quiz = {};

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.quizSelected.subscribe(quiz => this.quiz = quiz)

  }

}
