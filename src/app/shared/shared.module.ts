import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationComponentComponent} from './navigation-component/navigation-component.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavigationComponentComponent],
  exports: [NavigationComponentComponent]
})
export class SharedModule {
}
