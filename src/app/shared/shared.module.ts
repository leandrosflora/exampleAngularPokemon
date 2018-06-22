import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingComponent } from './rating/rating.component';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { PaginacaoComponent } from './paginacao/paginacao.component';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  declarations: [ RatingComponent, PaginacaoComponent, LoadingComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule ],
  exports: [RatingComponent, PaginacaoComponent, LoadingComponent, CommonModule, FormsModule, ReactiveFormsModule]
})


export class SharedModule {}
