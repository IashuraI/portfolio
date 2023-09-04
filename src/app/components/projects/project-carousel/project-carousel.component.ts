import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Project } from 'src/app/model/project';

@Component({
  selector: 'app-project-carousel',
  templateUrl: './project-carousel.component.html',
  styleUrls: ['./project-carousel.component.css']
})
export class ProjectCarouselComponent implements OnInit {
  @ViewChild('carousel') carousel: ElementRef;

  projectList: Project[] = [
    { id: 1, title: "Dotnet scheduling service with Quartz", img: "https://www.upwork.com/att/download/portfolio/persons/uid/1451992081407647744/profile/projects/files/d28344ce-a408-430b-be45-11fa6fcd3882", role: ".Net Software Enginee", 
    goal: "Client had project which uses Quartz.NET for reccuring tasks. He wanted to be sure that if app is down for 24 hours his task which is ment to be run every hour will be fired 24 times after starting app.", 
    skills: ["SQLQuartz Scheduling ASP.NET Web API API PostgreSQL Server ASP.NET Core"], solution:"I've created service which uses last fire time from Quartz.NET + Postgresql integration and calculates properly the amount of fires left.", 
    solutionImg: "https://www.upwork.com/att/download/portfolio/persons/uid/1451992081407647744/profile/projects/files/df3554b4-d0d7-42d7-abe0-1718c669631c",
    solutionUrl: "https://github.com/IashuraI/QuartzScheduler"},
  ];

  carouselCommand: string = "carousel";


  newProjectList: Project[][];

  ngOnInit(): void {
    this.newProjectList = this.splitArray(this.projectList, 3)
  }

  splitArray(array: Project[], size: number) {
    let newArr = [];
    for(let i = 0; i< array.length; i += size) {
      newArr.push(array.slice(i, i+size));
    }
    return newArr;
 }
}
