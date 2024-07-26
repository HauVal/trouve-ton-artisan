import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftsmanSheetComponent } from './craftsman-sheet.component';

describe('CraftsmanSheetComponent', () => {
  let component: CraftsmanSheetComponent;
  let fixture: ComponentFixture<CraftsmanSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CraftsmanSheetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CraftsmanSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
