import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: './modules/home/home.module#HomePageModule',
  },
  {
    path: 'list',
    loadChildren: './modules/list/list.module#ListPageModule',
  },
  {
    path: 'detail/:id',
    loadChildren: './modules/detail-news/detailNews.module#DetailNewsModule',
  },
  {
    path: 'creation-tool/:id',
    loadChildren: './modules/creation-tool/creation-tool.module#CreationToolModule',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
