// @ts-ignore
import { Observable } from "rxjs";
import {queueSubject} from "./queueSubject";

console.log("Hello World! 123");
// const observable = new Observable((subscriber:any) => {
//     subscriber.next(1);
//     subscriber.next(2);
//     subscriber.next(3);
//     setTimeout(() => {
//         subscriber.next(4);
//         subscriber.complete();
//     }, 5000);
// });
//
// observable.subscribe(console.log);
let step = 0;
do {
    queueSubject.next(`Value ${step}`);
    step ++;
}while (step<10)
// queueSubject.next('Value 1');
// queueSubject.next('Value 2');
// queueSubject.next('Value 3');
// queueSubject.next('Value 4');


