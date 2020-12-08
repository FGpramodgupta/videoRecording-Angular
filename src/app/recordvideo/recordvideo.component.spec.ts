import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordvideoComponent } from './recordvideo.component';

describe('RecordvideoComponent', () => {
  let component: RecordvideoComponent;
  let fixture: ComponentFixture<RecordvideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordvideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
