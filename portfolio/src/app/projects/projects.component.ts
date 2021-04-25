import { Component, OnInit } from '@angular/core';
import { BUTTONS, PROJECTS } from '../mockData'
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }
  buttons: any = BUTTONS
  projects: any = PROJECTS
  filteredProjects: any = []
  projectsNumber: number = PROJECTS.length
  page: number

  ngOnInit(): void {
    this.projects = PROJECTS
  }
  filterByTags(val) {
    console.log("vaaaal", val)
    this.ngOnInit()
    var newArr = []
    const tag = "#" + val
    console.log("hashtag", tag)

    if (val !== 'All Projects') {
      this.projects.map((e) => {
        if (e.skills.includes(tag)) {
          newArr.push(e)
        }
      })
      this.projects = newArr
    }
  }



}
