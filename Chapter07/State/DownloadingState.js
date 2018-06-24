import State from './State';

const privateDownload = new WeakMap();

class DownloadingState extends State {
    constructor(download) {
        super();
        privateDownload.set(this, download);
    }
    get _download() {
        return privateDownload.get(this);
    }
    download() {
        throw new Error('You cannot download a file while it is being downloaded!');
    }
    pause() {
        this._download.setState(this._download.getDownloadPausedState());
        console.log('Download has been paused!');
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

export default DownloadingState;