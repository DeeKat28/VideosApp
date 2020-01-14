import React from 'react';
import SearchBar from './SearchBar';
import youtube, {API_DEFAULT_PARAMS} from '../apis/Youtube';

class App extends React.Component {

    onTermSubmit = async (term) => {
        
        const response =  await youtube.get('/search', {
            params: {
                ...API_DEFAULT_PARAMS,
                q: term
            }
        });

        console.log(response.data.items);

    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit} />
            </div>
        );
    }
}

export default App;