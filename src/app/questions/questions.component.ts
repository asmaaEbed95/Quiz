import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  questions: any;

  ngOnInit(): void {
    var quizId = this.route.snapshot.paramMap.get('quizId');
    this.api.getQuestions(Number(quizId)).subscribe(res => {
      this.questions = res;
    });
  }

}
