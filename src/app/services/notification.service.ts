import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  public static notifySuccess(){

  }

  public static notifyFailure(){
    
  }

  public static notifyModal(title:string,message:string,firstMessage:string,secondMessage:string,functionOne:any,functionTwo:any){

  }

}
