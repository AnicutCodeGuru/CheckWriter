import { FormsModule } from '@angular/forms';
import { CheckWriter }  from './app.CheckWriter';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('CheckWriter', function () {
  let de: DebugElement;
  let comp: CheckWriter;
  let fixture: ComponentFixture<CheckWriter>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule],
      declarations: [ CheckWriter]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckWriter);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  }); 



  it('should create component', () => expect(comp).toBeDefined() );

  it('It should check for 99 integer number', () => {
        comp.currency=99;
        comp.convertToWords();
        expect(comp.inWords).toEqual("ninety nine   ");
  });  
  
  it('It should check for 99.0 float number', () => {
        comp.currency=99.0;
        comp.convertToWords();
        expect(comp.inWords).toEqual("ninety nine   ");
  });  
  
  it('It should check for 99.1234 float number', () => {
        comp.currency=99.1234;
        comp.convertToWords();
        expect(comp.inWords).toEqual("ninety nine   1234/10000");
  });  

});
