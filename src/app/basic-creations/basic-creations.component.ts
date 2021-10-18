import { Component, OnInit } from '@angular/core';
import { from, interval, Observable, Observer, of, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-basic-creations',
  templateUrl: './basic-creations.component.html',
  styleUrls: ['./basic-creations.component.css']
})
export class BasicCreationsComponent implements OnInit {
  subscription: Subscription = new Subscription();
  constructor() { }

  ngOnInit(): void {
  }

  observableCreate(){
    const hello = Observable.create((observer:Observer<string>) =>{
      observer.next('hello');
      observer.next('from');
      observer.next('observable');
      observer.complete();
    });
    hello.subscribe((val:string) =>  console.log(val));
  }
  fromClick(){
    from([1,2,3,4,5,{x:10,y:20}])
    .subscribe((v) => console.log(v));
    const source = from([1,2,3,{x:10,y:20}]);
    source.subscribe((v) => console.error(v));
    source.subscribe((v) => console.warn(v));
  }
  ofClick(){
    of([1,2,3,4,5,{x:10,y:20}])
    .subscribe((v) => console.log(v));
  }
  intervalClick(){
    const source = interval(1000);
    const subscription = source.subscribe((v) => console.log(v));
   this.subscription.add (subscription);
  }
  timerClick(){
    const source = timer(3000,1000);
    const subscription = source.subscribe((v) => console.log(v))
    this.subscription.add (subscription);
  }

  unSubScribeClick(){
    this.subscription.unsubscribe();
    this.subscription = new Subscription();
  }

}
