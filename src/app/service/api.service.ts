import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //we use the subject to mark the selected question and the observable to make use of it
  private selectedQuestion = new Subject<any>();
  questionSelected = this.selectedQuestion.asObservable();

  //we use the subject to mark the selected quiz and the observable to make use of it
  private selectedQuiz = new Subject<any>();
  quizSelected = this.selectedQuiz.asObservable();

  constructor(private http: HttpClient) { }

  getQuestions() {
    return this.http.get('https://localhost:44329/api/questions');
  }

  postQuestion(question: any) {
    this.http.post('https://localhost:44329/api/questions', question).subscribe(res => {
      console.log(res);
    });
  }

  putQuestion(question: any) {
    this.http.put(`https://localhost:44329/api/questions/${question.id}`, question).subscribe(res => {
      console.log(res);
    });
  }

  getQuiz() {
    return this.http.get('https://localhost:44329/api/quizzes');
  }

  postQuiz(quiz: any) {
    this.http.post('https://localhost:44329/api/quizzes', quiz).subscribe(res => {
      console.log(res);
    });
  }

  putQuiz(quiz: any) {
    this.http.put(`https://localhost:44329/api/quizzes/${quiz.id}`, quiz).subscribe(res => {
      console.log(res);
    });
  }

  selectQuestion (question: any) {
    //to trigger the quesiton
    this.selectedQuestion.next(question);
  }

  selectQuiz (quiz: any) {
    //to trigger the quiz
    this.selectedQuiz.next(quiz);
  }
}
