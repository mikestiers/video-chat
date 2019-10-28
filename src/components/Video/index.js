import React , {Fragment} from 'react';
import ReactDOM from 'react-dom';
import '../../index.css';
import * as serviceWorker from '../../serviceWorker';
import YouTube from 'react-youtube';

class Video extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
        this.updateCount = this.updateCount.bind(this)
    }

    updateCount() {
        this.setState({count: this.state.count + 1});
    }

    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
                controls: 0
            }
        };

        return (
            <Fragment>
            <div class="transparentBox">
            <h1>{this.state.count}</h1>
            </div>
            <div class="videoBox">
            <YouTube
                videoId="NXgOR0p3_wQ"
                opts={opts}
                onReady={this._onReady}
                onStateChange={this._updateTime}
            />
            </div>
            <button onClick={this.updateCount}>+</button>
            {/* <button onClick={      }>Sync</button> */}
            {this.state.count}
            </Fragment>
        )
    }

    _updateTime(event) {
        event.target.seekTo(30);
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}

class Hello extends React.Component {

    constructor() {
        super();
        this.state = {
            message: "my friend (from state)!"
        };
        this.updateMessage = this.updateMessage.bind(this);
    }

    updateMessage() {
        this.setState({
            message: "my friend (from changed state)!"
        });
    }

    render() {
        return (
            <div>
                <h1>Hello {this.state.message}!</h1>
                <button onClick={this.updateMessage}>Click me!</button>
            </div>
        )
    }
}

ReactDOM.render(
    <Video message="my friend" />,
    document.getElementById("root")
);

export default Video;
