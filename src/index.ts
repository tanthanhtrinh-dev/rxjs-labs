// @ts-ignore
import { Observable } from "rxjs";

console.log("Hello World! 123");
const observable = new Observable((subscriber:any) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
    }, 5000);
});

observable.subscribe(console.log);




