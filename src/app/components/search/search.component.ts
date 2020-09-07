import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params }  from '@angular/router';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ArticleService]
})
export class SearchComponent implements OnInit {
  public articles: Article[];
  public searchString: string;
  constructor(
    public _articleService: ArticleService,
    public _route: ActivatedRoute,
    public _router: Router
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.searchString = params['search'];
      
      this._articleService.search(this.searchString).subscribe(
        response => {
          if (response.articles){
            this.articles = response.articles
            console.log(this.articles)
          }else{
            this.articles = [];
          }
        },
        error=> {
          this.articles = [];
        }
      )
    })
  }

}
