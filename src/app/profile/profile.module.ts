import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MyEventComponent } from './my-event/my-event.component';
import { ProfileService } from './profile.service';

@NgModule({
  declarations: [EditProfileComponent, MyEventComponent],
  providers: [ProfileService],
  imports: [CommonModule]
})
export class ProfileModule { }
