import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls:['app.component.css'],
 
})
export class AppComponent {
  cvs = ['Angular', 'NodeJS', 'Javascript'];
  addCV(newCV: string) {
    if (newCV) {
      this.cvs.push(newCV);
    }
  }
  displayedColumns = ['Công việc','Đồng ý'];
}