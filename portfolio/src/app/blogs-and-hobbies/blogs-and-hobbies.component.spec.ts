import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsAndHobbiesComponent } from './blogs-and-hobbies.component';

describe('BlogsAndHobbiesComponent', () => {
  let component: BlogsAndHobbiesComponent;
  let fixture: ComponentFixture<BlogsAndHobbiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogsAndHobbiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogsAndHobbiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
