import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentreJeuxComponent } from './centre-jeux.component';

describe('CentreJeuxComponent', () => {
  let component: CentreJeuxComponent;
  let fixture: ComponentFixture<CentreJeuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentreJeuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentreJeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
