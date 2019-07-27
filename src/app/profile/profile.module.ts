import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MyEventComponent } from './my-event/my-event.component';

@NgModule({
  declarations: [EditProfileComponent, MyEventComponent],
  imports: [
    CommonModule
  ]
})
export class ProfileModule { }
