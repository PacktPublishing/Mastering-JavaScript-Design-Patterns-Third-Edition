var messageStream = Rx.Observable.merge(button1Stream, button2Stream, button3Stream, worker);
messageStream.subscribe(
    function (x) {
        appendToOutput(x.type + (x.srcElement.id === undefined ? " with " + x.data : " on " + x.srcElement.id));
    },
    function (err) { return appendToOutput(err, true); }
);