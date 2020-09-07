import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from '../../services/global';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-article-edit',
  templateUrl: '../article-new/article-new.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers: [ArticleService]
})
export class ArticleEditComponent implements OnInit {
  public article: Article;
  public status: string;
  public page_title: string;
  public is_edit: boolean;
  public url: string;
  
  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png,.gif,.jpeg",
    maxSize: "50",
    uploadAPI: {
      url: Global.url + 'uploadimage'
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    fileNameIndex: true,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube tu imagen para el articulo',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }
  };

  constructor(
    private _articleService: ArticleService,
    public _route: Router,
    public _router: ActivatedRoute
  ) {
    this.article = new Article('', '', '', null, null);
    this.page_title = "Editar articulo";
    this.is_edit = true;
    this.url = Global.url;
  }
  
  onSubmit() {
    this.article.date = new Date(2020, 8, 13);
    this._articleService.update(this.article._id,this.article).subscribe(
      response => {
        if (response.status == "success") {
          this.status = "success";
          this.article = response.article;

          Swal.fire({
            title: 'Exito!',
            text: 'El artículo se ha actualizado correctamente.',
            icon: 'success',
            confirmButtonText: 'Ok'
          })

          this._route.navigate(['/blog/articulo/'+this.article._id]);
        } else {

          Swal.fire({
            title: 'Error',
            text: 'Hubo un error inesperado al actualizar el articulo',
            icon: 'error',
            confirmButtonText: 'Ok'
          })


          this.status = "error";
        }
      },
      error => {
        console.log(error)
        this.status = "error";
      }
    )

  }

  DocUpload(data){
    this.article.image = data.body.image

  }


  ngOnInit(): void {
    this.getArticle();
  }

  getArticle(){
    this._router.params.subscribe(params => {
      let id = params['id'];

      this._articleService.getArticle(id).subscribe(
        response => {
          if (response.article) {
            this.article = response.article;
            console.log(this.article)
          }else{
            this._route.navigate(['/home']);
          }
        }, error => {
          console.log(error);
          this._route.navigate(['/home']);
        }

      )

    })
  }

}
