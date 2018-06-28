import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroRoutingModule } from './hero-routing.module';
import { HeroService } from '../services/hero.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroRoutingModule
  ],
  declarations: [HeroListComponent, HeroDetailComponent],
  providers: [
    HeroService
  ]
})
export class HeroModule { }
