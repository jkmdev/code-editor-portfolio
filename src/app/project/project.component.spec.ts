import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectComponent } from './project.component';

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create ProjectComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should display title of project', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    component.title = 'Title';
    fixture.detectChanges();
    expect(compiled.querySelector('h3').textContent).toContain('Title');

  });

  it('should display at least one link to the project', () => {

    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    var link = compiled.querySelector('a').getAttribute('href');
    expect(link).not.toBeNull();

  });

  it('should display an image of the project', () => {

    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    var img = compiled.querySelector('img').getAttribute('src');
    expect(img).toBe('');

    component.imageUrl = "../assets/test.png";
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
    var img = compiled.querySelector('img').getAttribute('src');
    expect(img).toBe(component.imageUrl);

  });


});
