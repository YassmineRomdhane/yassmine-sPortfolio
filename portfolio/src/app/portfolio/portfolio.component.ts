import { Component, OnInit } from '@angular/core';
import {BUTTONS,PROJECTS} from './mockData'

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

  ngOnInit(): void {
    // this.projects=this
  }
  filterByTags(val) {
    var newArr = []
    // if (val === 'all') {
      // this.projects=this.array}
    this.projects.map((e) => {
      console.log('hello',e.skills)
      // val=val.toUpperCase()
      if (e.skills.includes(val)) {
        console.log('hel',e.skills)
        newArr.push(e)
        console.log('HII',e)
      }
      this.ngOnInit()
    })
    this.projects = newArr
    
   
  // }
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

}
