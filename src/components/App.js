import React from 'react';
import SearchBar from './SearchBar';
import youtube, {API_DEFAULT_PARAMS} from '../apis/Youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

    state = { videos: [], selectedVideo: null };

    componentDidMount() {
        this.onTermSubmit('marques brownlee');
    }

    onTermSubmit = async (term) => {
        
        const response =  await youtube.get('/search', {
            params: {
                ...API_DEFAULT_PARAMS,
                q: term
            }
        });

        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });

    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="row">
                        <div className="eleven wide column">
                            <VideoDetail 
                                video={this.state.selectedVideo} 
                            />
                        </div>
                        <div className="five wide column">
                            <VideoList 
                                videos={this.state.videos} 
                                onVideoSelect={this.onVideoSelect} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;