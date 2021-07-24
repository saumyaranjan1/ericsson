import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });


  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`click of parent node, should display child nodes(For country)`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const param= app.countries[0].values[0].values[0];
    app.clickOnCountry([param])
    expect(app.zoneList.length).toEqual(2);
  });



  it(`Default state is all are collapsed`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.upOrDown).toEqual(false);
  });


  it(`details panel should contain population in human readable format (crores", "lakhs" etc.)`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const param= app.countries[0].values[0].values[0];
    app.numDifferentiation("1000000")
    expect(app.population).toEqual("10.00 Lac");
  });

  
});
