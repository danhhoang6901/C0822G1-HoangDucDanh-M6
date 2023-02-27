import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CreateCommodityComponent} from "./component/commodity/create-commodity/create-commodity.component";


const routes: Routes = [{
  path: "commodity/create", component: CreateCommodityComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
