
1. 安装并引用
```
$ npm install rxjs

import {fromEvent, of, from, scan, throtteTime, debounceTime} from 'rxjs'
```

2. throtteTime && debounceTime的区别

3. 
  + Observables
  + Observer
  + Operators
    - Pipeable operators
    - Creation operators
  + Subscription
  + Subjects
    - new Subject() -> subscribe() -> next()
    - multicast(subject) -> subscribe() -> connect()
    - ConnectableObservable -> refCount -> counted.sbuscribe() == no need method: connect()
    - BehaviorSubject -> new BehaviorSubject()
    - ReplaySubject -> new ReplaySubject(times, windowTime)
      - buffer 'times' values for new subscribers
      - windowTimes - 过期的时间
    - AsyncSubject
    - Void subject
  + Scheduler


4. common operators
  + forkJoin - 可传入多个Array或Object，返回每个参数最后一次提交的值
  + scan - 每一个值以及之前的和
