function generateDeathsStream(deaths) {
    return Rx.Observable.from(deaths).zip(Rx.Observable.interval(500), (death,_)=>death);
}