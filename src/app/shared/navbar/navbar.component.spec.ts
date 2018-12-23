import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title and subtitle in navbar', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Julia McGeoghan');
    expect(compiled.querySelector('h4').textContent).toContain('Full Stack Developer');
  });

  it('should trigger click event when contact button is clicked', () => {

    spyOn(component, 'onContactButtonClick');

    let button = fixture.debugElement.query(By.css('.contact'));

    button.triggerEventHandler('click', null);
  
    fixture.whenStable().then(() => {
      expect(component.onContactButtonClick).toHaveBeenCalled();
    });

  });

});
