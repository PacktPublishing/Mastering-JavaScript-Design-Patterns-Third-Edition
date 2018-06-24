import State from './State';

const privateDownload = new WeakMap();

class DownloadPausedState extends State {
    constructor(download) {
        super();
        privateDownload.set(this, download);
    }
    get _download() {
        return privateDownload.get(this);
    }
    download() {
        this._download.setState(this._download.getDownloadingState());
        console.log('Resume Download!');
    }
    pause() {
        throw new Error('You cannot pause a download that is already paused!');
    }
    fail() {
        this._download.setState(this._download.getDownloadedFailedState());
        console.log('Download has failed!');
    }
    finish() {
        this._download.setState(this._download.getDownloadedState());
        console.log('Download has finished!');
    }
}

export default DownloadPausedState;