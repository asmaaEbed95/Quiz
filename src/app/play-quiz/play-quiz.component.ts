import { ApiService } from '../service/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FinishedComponent } from '../finished/finished.component';

@Component({
  templateUrl: './play-quiz.component.html',
  styleUrls: ['./play-quiz.component.css']
})
export class PlayQuizComponent implements OnInit {

  questions: any;
  quizId: any;
  step = 0;


  constructor(private api: ApiService, private route: ActivatedRoute, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.quizId = this.route.snapshot.paramMap.get('quizId');
    this.api.getQuestions(Number(this.quizId)).subscribe(res => {
      this.questions = res;

      this.questions.forEach((q: { answers: any[]; correctAnswer: any; answer1: any; answer2: any; answer3: any; }) => {
        q.answers = [q.correctAnswer, q.answer1, q.answer2, q.answer3]
        shuffle(q.answers)
      });
    });
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  finish () {
    var correct = 0;
    this.questions.forEach((q: { correctAnswer: any; selectedAnswer: any; }) => {
      if (q.correctAnswer == q.selectedAnswer) {
        correct++;
      }
      const dialogRef = this.dialog.open(FinishedComponent, {
        data: {correct, total: this.questions.length}
      });

      console.log(correct);
    });
  }
}

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
 function shuffle(a: any) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}