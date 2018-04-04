Rx.Observable
    .FromEvent(button, "click")
    .debounce(1000).subscribe((x)=>doSomething());