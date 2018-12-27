import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LineNumbersComponent } from './line-numbers.component';

describe('LineNumbersComponent', () => {
  let component: LineNumbersComponent;
  let fixture: ComponentFixture<LineNumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineNumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should line numbers to a specified height', () => {
    fixture.detectChanges();
    var debugTaskTitle = fixture.debugElement.queryAll(By.css('.line-numbers'));
    expect(debugTaskTitle.length).toEqual(component.lineHeight + 1);
  });

});
