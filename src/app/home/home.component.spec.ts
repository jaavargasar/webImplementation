import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Album: Should find the pictures', () => {
    expect(component.getFindPicture()).toBeTruthy();
  });

  it('should multiple 2 numbers', () => {
    let number1=4, number2=9;
    let result = component.multiplication(number1,number2);
    expect(result).toEqual(127);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
