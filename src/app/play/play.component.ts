import { ApiService } from './../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  quizzes: any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getAllQuiz().subscribe(res => {
      this.quizzes = res;
    });
  }

}
