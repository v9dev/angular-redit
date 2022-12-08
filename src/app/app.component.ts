import { Component } from '@angular/core';
import { Article } from './article/article.model';

//The idea with import is a lot like import in Java or require in Ruby: we’re pulling
//in these dependencies from another module and making these dependencies
//available for use in this file.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  articles: Article[]; //article property wich is an array type

  constructor() {
    this.articles = [
      //hard code some articles to add using constructor
      new Article('Angular', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1),
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement) {
    if (title.value == '' && link.value === '') {
      //check if the inputs are empty
      window.alert('Please fill the inputs currectly.');
      return false;
    }
    //
    console.log(
      // log into console
      `Addding article Title: ${title.value} and link: ${link.value}`
    );
    //
    this.articles.push(new Article(title.value, link.value, 0)); //push the new article to articles array
    title.value = ''; //make inputs empty again
    link.value = '';
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes); //sorted using arrow functions
  }
}