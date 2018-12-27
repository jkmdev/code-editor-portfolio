import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create sidebar component', () => {
    expect(component).toBeTruthy();
  });

  it('should display all anchor links', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.title').textContent).toContain("Julia's Portfolio");

  });    

  it('should trigger function when link is clicked', () => {
    
    spyOn(component, 'onOptionClick');

    let li = fixture.debugElement.query(By.css('.option'));

    li.triggerEventHandler('click', null);
  
    fixture.whenStable().then(() => {
      expect(component.onOptionClick).toHaveBeenCalled();
    });

  });

});
