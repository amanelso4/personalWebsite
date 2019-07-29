import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusInvolvementComponent } from './campus-involvement.component';

describe('CampusInvolvementComponent', () => {
  let component: CampusInvolvementComponent;
  let fixture: ComponentFixture<CampusInvolvementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampusInvolvementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampusInvolvementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
