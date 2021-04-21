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
  blogs :any= BlOGS
  projectsNumber:number=PROJECTS.length
  page:number
  blogsNumber:number=BlOGS.length

  ngOnInit(): void {
  
//     var items = $(".pro .project");
//     var numItems = this.projects.length;
//  var perPage = 3;

//   this.projects.slice(perPage).hide();

//   $('.pagination').pagination({
//         items: numItems,
//       itemsOnPage: perPage,
//          prevText: "&laquo;",
//         nextText: "&raquo;",
//       onPageClick: function (pageNumber) {
//            var showFrom = perPage * (pageNumber - 1);
//            var showTo = showFrom + perPage;
//             items.hide().slice(showFrom, showTo).show();
//         }
//     });
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




// var items = $(".list-wrapper .list-item");
//     var numItems = items.length;
//     var perPage = 4;

//     items.slice(perPage).hide();

//     $('#pagination-container').pagination({
//         items: numItems,
//         itemsOnPage: perPage,
//         prevText: "&laquo;",
//         nextText: "&raquo;",
//         onPageClick: function (pageNumber) {
//             var showFrom = perPage * (pageNumber - 1);
//             var showTo = showFrom + perPage;
//             items.hide().slice(showFrom, showTo).show();
//         }
//     });