import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IeltsProjectComponent } from './ielts-project.component';

describe('IeltsProjectComponent', () => {
  let component: IeltsProjectComponent;
  let fixture: ComponentFixture<IeltsProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IeltsProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IeltsProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
