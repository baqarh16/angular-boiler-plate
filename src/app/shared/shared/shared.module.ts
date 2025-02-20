import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from 'src/app/core/pipes/search.pipe';

const everySharedThing = [
  ReactiveFormsModule,
]

@NgModule({
  declarations: [
    SearchPipe
  ],
  imports: everySharedThing,
  exports: everySharedThing
})
export class SharedModule { }
