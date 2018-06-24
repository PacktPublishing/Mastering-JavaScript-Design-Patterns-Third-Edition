import State from './State';

const privateDownload = new WeakMap();

class ReadyState extends State {
    constructor(download) {
        super();
        privateDownload.set(this, download);
    }
    get _download() {
        return privateDownload.get(this);
    }
    download() {
        this._download.setState(this._download.getDownloadingState());
        console.log('Start Download!');
    }
    pause() {
        throw new Error('You cannot pause a download when it has not started yet!');
    }
    fail() {
        throw new Error('A download cannot fail if it has not started!');
    }
    finish() {
        throw new Error('A download cannot finish if it has not started!');
    }
}

export default ReadyState;