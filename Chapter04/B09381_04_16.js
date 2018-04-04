var messageStream = Rx.Observable.merge(button1Stream, button2Stream, button3Stream, worker);
var intervalStream = Rx.Observable.interval(5000);
messageStream
    .zip(intervalStream, function (x, _) {return x;})
    .subscribe(function (x) {
         toastr.info(x.type + (x.srcElement.id === undefined ? " with " + x.data : " on " + x.srcElement.id));
    },
    function (err) { return toastr.error(err); }
);