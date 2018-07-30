import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'add-course-page',
  templateUrl: './add-course-page.component.html',
})
export class AddCoursePageComponent {
  public activatedRoute: ActivatedRoute;
  public currentId: string;

  constructor(
    activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute = activatedRoute;
    this.activatedRoute.paramMap.subscribe(data => {
      this.currentId = data.get('id');
    })
  }
}
