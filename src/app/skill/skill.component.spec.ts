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

  it('should display title and content', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Title');
    expect(compiled.querySelector('h3').textContent).toContain('Description');
  });
});
