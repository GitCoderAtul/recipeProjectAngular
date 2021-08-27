import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitAppsComponent } from './split-apps.component';

describe('SplitAppsComponent', () => {
  let component: SplitAppsComponent;
  let fixture: ComponentFixture<SplitAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitAppsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
