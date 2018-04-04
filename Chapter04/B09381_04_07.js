source.buffer(() => source.debounce(250))
    .map((list) => list.length)
    .filter((x) => x >= 2)
    .subscribe((x)=> {
         counter++;
         output.innerHTML = "Clicked " + counter + " time" + (counter > 1 ? "s" : "");
    });