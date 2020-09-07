import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { Global } from '../../services/global';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleService]
})
export class HomeComponent implements OnInit {
  public titulo: string;
  public articles: Article[];

  constructor(private _articleService: ArticleService) {
    this.titulo = "Ultimos artículos";
   }

  ngOnInit(): void {
    this._articleService.getArticles(true).subscribe(
      response => {
        if (response.articles){
          this.articles = response.articles;
          console.log(this.articles);
        }
      },
      error => {
        console.log(error);
      }

    )
  }

}
