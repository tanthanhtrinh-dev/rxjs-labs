// Create a new Subject
// @ts-ignore
import {concatMap, delay, observeOn, of, queueScheduler, Subject} from "rxjs";

export const queueSubject = new Subject();

// Create a queue with queueScheduler, observeOn, and add a 1-second delay between processing values
const queue = queueSubject.pipe(
    observeOn(queueScheduler),
    concatMap((value:any) => of(value).pipe(delay(1000)))
);

// Subscribe to the queue
queue.subscribe((value:any) => {
    console.log(`Processed: ${value}`);
});