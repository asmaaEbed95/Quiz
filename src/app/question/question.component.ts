import { ApiService } from '../service/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  question = {};
  quizId: any;
  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
     this.quizId = this.route.snapshot.paramMap.get('quizId');
    this.api.questionSelected.subscribe(question => this.question = question);
  }

  post(question: any) {
    question.quizId = this.quizId
    this.api.postQuestion(question)
    }
}
