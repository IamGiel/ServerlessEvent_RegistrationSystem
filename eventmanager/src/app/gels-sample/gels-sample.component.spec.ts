import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GelsSampleComponent } from './gels-sample.component';

describe('GelsSampleComponent', () => {
  let component: GelsSampleComponent;
  let fixture: ComponentFixture<GelsSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GelsSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GelsSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
