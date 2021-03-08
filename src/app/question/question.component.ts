import { ApiService } from './../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  question = {};

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  post(question: any) {
    this.api.postQuestion(question)
  }
}
