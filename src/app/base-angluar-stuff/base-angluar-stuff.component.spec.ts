import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseAngluarStuffComponent } from './base-angluar-stuff.component';

describe('BaseAngluarStuffComponent', () => {
  let component: BaseAngluarStuffComponent;
  let fixture: ComponentFixture<BaseAngluarStuffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseAngluarStuffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseAngluarStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
