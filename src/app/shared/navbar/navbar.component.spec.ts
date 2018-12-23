import { async, ComponentFixture, TestBed } from '@angular/core/testing';

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
    expect(compiled.querySelector('h3').textContent).toContain('Full Stack Developer');
  });

  it('should generate contact form when contact button is clicked', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    spyOn(compiled, 'onContactButtonClick');

    let button = fixture.debugElement.nativeElement.querySelector('contact');
    button.click();
  
    fixture.whenStable().then(() => {
      expect(compiled.onContactButtonClick).toHaveBeenCalled();
    });
  });

});
