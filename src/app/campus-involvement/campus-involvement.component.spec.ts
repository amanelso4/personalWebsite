import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CampusInvolvementComponent } from './campus-involvement.component';

describe('CampusInvolvementComponent', () => {
  let component: CampusInvolvementComponent;
  let fixture: ComponentFixture<CampusInvolvementComponent>;

  beforeEach(waitForAsync(() => {
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
