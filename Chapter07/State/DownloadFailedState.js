import State from './State';

const privateDownload = new WeakMap();

class DownloadFailedState extends State {
    constructor(download) {
        super();
        privateDownload.set(this, download);
    }
    get _download() {
        return privateDownload.get(this);
    }
    download() {
        this._download.setState(this._download.getDownloadingState());
        console.log('Try to Download again!');
    }
    pause() {
        throw new Error('You cannot pause a download if it failed!');
    }
    fail() {
        throw new Error('A failed download cannot fail because it already failed!');
    }
    finish() {
        throw new Error('A failed download cannot be finished!');
    }
}

export default DownloadFailedState;