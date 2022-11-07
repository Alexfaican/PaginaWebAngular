import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleChaoComponent } from './module-chao.component';

describe('ModuleChaoComponent', () => {
  let component: ModuleChaoComponent;
  let fixture: ComponentFixture<ModuleChaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleChaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleChaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
