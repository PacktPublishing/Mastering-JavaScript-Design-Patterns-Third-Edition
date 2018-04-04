var incrementSubscription = source.subscribe(() => counter++);
var subscription = source.filter(x=>counter%2==0).subscribe(function (e) {
    output.innerHTML = "Clicked " + counter + " time" +(counter > 1 ? "s" : "");
});