import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducerPortalComponent } from './producer-portal.component';

describe('ProducerPortalComponent', () => {
  let component: ProducerPortalComponent;
  let fixture: ComponentFixture<ProducerPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducerPortalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducerPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
