import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSubtitleComponent } from './menu-subtitle.component';

describe('MenuSubtitleComponent', () => {
  let component: MenuSubtitleComponent;
  let fixture: ComponentFixture<MenuSubtitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuSubtitleComponent]
    });
    fixture = TestBed.createComponent(MenuSubtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
