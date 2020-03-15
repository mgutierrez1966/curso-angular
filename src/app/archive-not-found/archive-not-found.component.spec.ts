import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveNotFoundComponent } from './archive-not-found.component';

describe('ArchiveNotFoundComponent', () => {
  let component: ArchiveNotFoundComponent;
  let fixture: ComponentFixture<ArchiveNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
