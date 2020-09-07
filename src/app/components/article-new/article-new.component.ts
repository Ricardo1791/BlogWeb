import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from '../../services/global';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService]
})
export class ArticleNewComponent implements OnInit {
  public article: Article;
  public status: string;
  public page_title: string;
  public is_edit: boolean;

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
    this.page_title = "Crear artículo";
    this.is_edit = false;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.article.date = new Date(2020, 8, 13);
    this._articleService.create(this.article).subscribe(
      response => {
        if (response.status == "success") {
          this.status = "success";
          this.article = response.article;

          Swal.fire({
            title: 'Exito!',
            text: 'El artículo se ha guardado correctamente.',
            icon: 'success',
            confirmButtonText: 'Ok'
          })

          this._route.navigate(['/blog']);
        } else {
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

}
