import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCarouselComponent } from './project-carousel.component';

describe('ProjectCarouselComponent', () => {
  let component: ProjectCarouselComponent;
  let fixture: ComponentFixture<ProjectCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectCarouselComponent]
    });
    fixture = TestBed.createComponent(ProjectCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
