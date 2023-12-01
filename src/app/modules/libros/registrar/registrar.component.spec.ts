import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarLComponent } from './registrar.component';

describe('RegistrarComponent', () => {
  let component: RegistrarLComponent;
  let fixture: ComponentFixture<RegistrarLComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarLComponent]
    });
    fixture = TestBed.createComponent(RegistrarLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
