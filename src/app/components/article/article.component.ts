import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from '../../services/global';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {
  public article: any;
  public url: string;

  constructor(
    public _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 

    this.url = Global.url;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id'];

      this._articleService.getArticle(id).subscribe(
        response => {
          if (response.article) {
            this.article = response.article;
            console.log(this.article)
          }else{
            this._router.navigate(['/home']);
          }
        }, error => {
          console.log(error);
          this._router.navigate(['/home']);
        }

      )

    })


  }

  delete(id){

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      
      if (result.value) {

        this._articleService.delete(id).subscribe(response => {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )

          this._router.navigate(['/blog']);
        },error => {
          console.log(error);
        })


      }
    })


  }

}
