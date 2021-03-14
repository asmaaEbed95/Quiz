import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor(private api: ApiService) { }

  questions: any;

  ngOnInit(): void {
    this.api.getQuestions().subscribe(res => {
      this.questions = res;
    });
  }

}
