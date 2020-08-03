import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UkrDatePipe } from './ukr-date.pipe';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [UkrDatePipe, TopBarComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [UkrDatePipe, TopBarComponent]
})
export class SharedModule { }
