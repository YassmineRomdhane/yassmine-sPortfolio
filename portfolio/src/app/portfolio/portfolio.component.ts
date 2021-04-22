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
    console.log("ssss",val)
    var newArr = []
    const hashtag="#"+val
    if (val === 'all') {
      this.projects=this.array}
    this.projects.map((e) => {
    // val=val.toUpperCase()
      if (e.skills.includes(hashtag)) {
      newArr.push(e)
      }
     
      // console.log(this.projects)
    
    })
    this.ngOnInit()
    this.projects = newArr
    newArr=this.projects
    
    
    
   
 
  }
  // filterByTags(val) {
  //   var newArr = []
  //   let reg = new RegExp(val,'g');
  // let reg = new RegExp(val,'g');
  //   this.projects.map((e) => {
  //     val=val.toUpperCase()
  //     var skill=e.skills.toUpperCase()
  //     if (skill.matchAll(reg)) {

  //       newArr.push(e)
      
  //     }
  //   })
  //   this.projects = newArr
  //   this.ngOnInit()

  // }

//   filterByTags(val) {
//     console.log("ssss",val)
//     var newArr = []
//     this.projects.filter((event) => {

//       if(event.skills.includes(val)) {
//         newArr.push(event)
//         console.log("gggg",newArr)
//       }
//     });
//     this.projects = newArr
//     this.ngOnInit()
// } 
}

