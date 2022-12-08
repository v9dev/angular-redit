import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Article } from './article.model'; //imported Article class model to use

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  // bind a class attribute to host element
  //In Angular, a component host is the element this component is attached to. We
  //can set properties on the host element by using the @HostBinding() decorator.

  @Input() article!: Article;
  //article is now of type Article Class
  //used input decorator to get value from parent component and stored in article property

  constructor() {}

  voteUp(): boolean {
    //call articles voteUp method
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

  ngOnInit(): void {}
}