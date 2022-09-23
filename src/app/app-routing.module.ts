import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';

const routes: Routes =[{
  path:'', /* MODIFICAR ESTA CONSTANTE, DEIXANDO A PATH ASSIM PARA SETAR O CAMINHO DEFAULT E ADICIONAR O HOME COMPONENTE  */
  component: HomeComponent

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
