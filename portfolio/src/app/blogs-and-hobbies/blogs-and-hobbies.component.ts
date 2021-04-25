import { Component, OnInit } from '@angular/core';
import{BlOGS} from '../mockData'

@Component({
  selector: 'app-blogs-and-hobbies',
  templateUrl: './blogs-and-hobbies.component.html',
  styleUrls: ['./blogs-and-hobbies.component.css']
})
export class BlogsAndHobbiesComponent implements OnInit {

  constructor() { }
  blogs :any= BlOGS
  blogsNumber:number=BlOGS.length
  ngOnInit(): void {
  }

}
