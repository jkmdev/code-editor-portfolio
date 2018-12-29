import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillComponent } from './skill.component';

describe('SkillComponent', () => {
  let component: SkillComponent;
  let fixture: ComponentFixture<SkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display Undefined if title or description is undefined', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Undefined');
    expect(compiled.querySelector('h4').textContent).toContain('Undefined');
  });

  it('should display title and content if not undefined', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    component.title = 'Title';
    component.description = 'Description';
    fixture.detectChanges();
    expect(compiled.querySelector('h3').textContent).toContain('Title');
    expect(compiled.querySelector('h4').textContent).toContain('Description');
  });

});
