import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create header', () => {
    expect(component).toBeTruthy();
  });
  it('should create a menu in the header', () => {
    const nav = fixture.debugElement.query(By.css('nav'));
    expect(nav).toBeTruthy();
  });
  it('should have a nav bar in the header', () => {
    const nav = fixture.debugElement.query(By.css('#navbar'));
    expect(nav).toBeTruthy();
  });
});
