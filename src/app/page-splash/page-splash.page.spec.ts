import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageSplashPage } from './page-splash.page';

describe('PageSplashPage', () => {
  let component: PageSplashPage;
  let fixture: ComponentFixture<PageSplashPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSplashPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageSplashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
