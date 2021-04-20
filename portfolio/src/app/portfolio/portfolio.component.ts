import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }
  backup: any = [];
  buttons: any = [{
    skill: "all",
  },
  {skill: "React",
}, {
    skill: "Angular",
  },
  {
    skill: "Vue",
  }, {
    skill: "MySql",
  }]
  projects: any = [{
    image: "https://storyxag.com/wp-content/uploads/2020/06/shutterstock_1652904175_300-librarians_magnesio-min-1024x483.png",
   skills: ["React", "MySql", "NodeJs"] ,
   title: "MVP Project:Shoppinettes" ,
   description: "This project is a shopping site where I used React, NodJs and mySql. i implemented all CRUD operations" ,
   demo : "" , 
   code :"https://github.com/YassmineRomdhane/rbktnX-mvp-starter"
},
{
  image: "https://www.dealsshutter.com/blog/wp-content/uploads/2020/03/homeservice.jpg",
 skills: ["#Angular", "#mongoDB", "NodeJs"] ,
 title: "Thesis Project: GaryWork" ,
description: "This project is a platform meant to provide users with different services related to house needs. It also helps service providers to gain clients" ,
 demo : "" , 
 code :"https://github.com/The-Garys"
},
{
  image: "https://image.shutterstock.com/image-illustration/beautiful-aurora-universe-milky-way-260nw-1787056478.jpg",
 skills: ["#React","NodeJs"] ,
 title: "FrontEndCapstone" ,
description: "This projects was about mimicking a single page details of Amazon and I interacted with a provided API" ,
 demo : "demo" , 
 code :"https://github.com/Explosion2k21"
},
  ]

  ngOnInit(): void {
  // this.projects=this
  }
filterByTags(val){
  var newArr = []
  this.projects.map((e)=>{
      if(e.skills.includes(val)){
        newArr.push(e)
      }
    })
    this.projects = newArr
    this.ngOnInit()
 
}

}
