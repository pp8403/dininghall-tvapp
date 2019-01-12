import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  主要用于业务上的timeout处理，统一管理
*/
@Injectable()
export class SettimeoutProvider {

  private setTimeoutValue = null;

  constructor(public http: HttpClient) {
    
  }
  regAction(action:any,timeout){
    clearTimeout(this.setTimeoutValue);
    this.setTimeoutValue=setTimeout(action, timeout);
  }
  clear(){
    clearTimeout(this.setTimeoutValue);
  }
}
