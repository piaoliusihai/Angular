import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SparkJobLogComponent } from './spark-job-log.component';

describe('SparkJobLogComponent', () => {
  let component: SparkJobLogComponent;
  let fixture: ComponentFixture<SparkJobLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SparkJobLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkJobLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
