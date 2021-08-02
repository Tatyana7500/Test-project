import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'repository', loadChildren: () => import('src/app/modules/repository/repository.module').then(m => m.RepositoryModule) },
  { path: '', loadChildren: () => import('src/app/modules/main/main.module').then(m => m.MainModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
