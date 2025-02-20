import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

const everySharedThing = [
  ReactiveFormsModule
]

@NgModule({
  declarations: [],
  imports: everySharedThing,
  exports: everySharedThing
})
export class SharedModule { }
