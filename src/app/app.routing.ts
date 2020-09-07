//importar modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

//importar componentes a los cuales quiero hacer una pagina exclusiva
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TestComponent } from './components/test/test.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { Route } from '@angular/compiler/src/core';
import { ErrorComponent } from './components/error/error.component';
import { ArticleComponent } from './components/article/article.component';
import { SearchComponent } from './components/search/search.component';
import { ArticleNewComponent } from  './components/article-new/article-new.component';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';
 
//Array de rutas
const appRoutes: Routes =[
    { path: '',  component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'blog/articulo/:id', component: ArticleComponent },
    { path: 'blog/crear', component: ArticleNewComponent },
    { path: 'blog/editar/:id', component: ArticleEditComponent },
    { path: 'buscar/:search', component: SearchComponent },
    { path: 'formulario', component: FormularioComponent },
    { path: 'test', component: TestComponent },
    { path: 'pagina-de-prueba/:nombre', component: PaginaComponent },
    { path: 'pagina-de-prueba', component: PaginaComponent },
    { path: '**', component: ErrorComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);

