import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavParamsService {

  navData:any;
  constructor() { }

  setNavData(navObj){
    this.navData=navObj;
  }

  getNavData(){
    if(this.navData == null || this.navData == undefined)
      return 0;
    return this.navData;
  }
}
