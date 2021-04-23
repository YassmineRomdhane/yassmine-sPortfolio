import { Component, OnInit } from '@angular/core';
import {BUTTONS,PROJECTS,BlOGS} from './mockData'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }
  array: any = [];
  buttons: any = BUTTONS
  projects: any = PROJECTS
  filteredProjects:any=[]
  blogs :any= BlOGS
  projectsNumber:number=PROJECTS.length
  page:number
  blogsNumber:number=BlOGS.length

  ngOnInit(): void {
    this.projects=PROJECTS
  }
  filterByTags(val) {
    console.log("vaaaal",val)
    this.ngOnInit()
    var newArr = []
    const tag="#"+val
    console.log("hashtag",tag)
    
    if (val !== 'All Projects') {
    this.projects.map((e) => {
    // val=val.toUpperCase()
      if (e.skills.includes(tag)) {
      newArr.push(e)
      }
     })
    this.projects = newArr
  }  
    }

}

