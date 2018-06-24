import State from './State';

const privateDownload = new WeakMap();

class DownloadedState extends State {
    constructor(download) {
        super();
        privateDownload.set(this, download);
    }
    get _download() {
        return privateDownload.get(this);
    }
    download() {
        this._download.setState(this._download.getDownloadingState());
        console.log('Download again!');
    }
    pause() {
        throw new Error('You cannot pause a file if it is not being downloaded!');
    }
    fail() {
        throw new Error('A downloaded file cannot fail!');
    }
    finish() {
        throw new Error('A downloaded file cannot finish because it is already finished!');
    }
}

export default DownloadedState;