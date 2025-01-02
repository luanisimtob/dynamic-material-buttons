import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonExempleComponent } from './button-exemple.component';

describe('ButtonExempleComponent', () => {
  let component: ButtonExempleComponent;
  let fixture: ComponentFixture<ButtonExempleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonExempleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonExempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
