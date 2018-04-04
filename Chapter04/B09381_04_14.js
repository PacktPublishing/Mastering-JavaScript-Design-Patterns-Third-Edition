var worker = Rx.DOM.fromWorker("worker.js");
button4Stream.subscribe(function (_) {
    worker.onNext({ cmd: "start", number: 35 });
});