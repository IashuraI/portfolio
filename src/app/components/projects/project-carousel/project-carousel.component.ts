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
    { id: 1, title: "Shit", description: "ok"},
    { id: 2, title: "Shit2", description: "ok2"},
    { id: 3, title: "Shit3", description: "ok3"},
    { id: 4, title: "Shit4", description: "ok3"},
    { id: 5, title: "Shit5", description: "ok4"},
    { id: 6, title: "Shit6", description: "ok5"},
    { id: 7, title: "Shit7", description: "ok6"},
    { id: 8, title: "Shit8", description: "ok7"},
    { id: 9, title: "Shit9", description: "ok8"}
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
