import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarLComponent } from './editar.component';

describe('EditarComponent', () => {
  let component: EditarLComponent;
  let fixture: ComponentFixture<EditarLComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarLComponent]
    });
    fixture = TestBed.createComponent(EditarLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
