import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarLComponent } from './listar.component';

describe('ListarComponent', () => {
  let component: ListarLComponent;
  let fixture: ComponentFixture<ListarLComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarLComponent]
    });
    fixture = TestBed.createComponent(ListarLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
