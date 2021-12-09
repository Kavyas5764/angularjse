import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedDataServiceComponent } from './need-data-service.component';

describe('NeedDataServiceComponent', () => {
  let component: NeedDataServiceComponent;
  let fixture: ComponentFixture<NeedDataServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeedDataServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedDataServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
