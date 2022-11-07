import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleHolaComponent } from './module-hola.component';

describe('ModuleHolaComponent', () => {
  let component: ModuleHolaComponent;
  let fixture: ComponentFixture<ModuleHolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleHolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleHolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
