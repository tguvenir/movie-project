import React from 'react';
import ShowList from './ShowList';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = {
    tvshows: [
      {
        id: 1,
        name: 'The Walking Dead',
        score: 81,
        overview:
          'Sheriffs deputy Rick Grimes awakens from a coma to find a post-apocalyptic world dominated by flesh-eating zombies.',
        imageURL:
          'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xf9wuDcqlUPWABZNeDKPbZUjWx0.jpg'
      },
      {
        id: 2,
        name: 'Game of Thrones',
        score: 84,
        overview:
          'Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war.',
        imageURL:
          'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg'
      },
      {
        id: 3,
        name: 'Breaking Bad',
        score: 88,
        overview:
          'When Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live.',
        imageURL:
          'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ggFHVNu6YYI5L9pCfOacjizRGt.jpg'
      },
      {
        id: 4,
        name: 'Better Call Saul',
        score: 84,
        overview:
          'Six years before Saul Goodman meets Walter White. We meet him when the man who will become Saul Goodman is known as Jimmy McGill, a small-time lawyer searching for his destiny, and, more immediately, hustling to make ends meet.',
        imageURL:
          'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fC2HDm5t0kHl7mTm7jxMR31b7by.jpg'
      },
      {
        id: 5,
        name: 'Ozark',
        score: 82,
        overview:
          'A financial adviser drags his family from Chicago to the Missouri Ozarks, where he must launder $500 million in five years to appease a drug boss.',
        imageURL:
          'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/m73bD8VjibSKuTWg597GQVyVhSb.jpg'
      },
      {
        id: 6,
        name: 'Love, Death & Robots',
        score: 82,
        overview:
          'Terrifying creatures, wicked surprises and dark comedy converge in this NSFW anthology of animated stories presented by Tim Miller and David Fincher.',
        imageURL:
          'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/asDqvkE66EegtKJJXIRhBJPxscr.jpg'
      }
    ],
    searchQuery: ''
  };

  deleteTvShows = tvshow => {
    const newTvShowList = this.state.tvshows.filter(t => t.id !== tvshow.id);

    // this.setState({
    //   tvshows: newTvShowList
    // });
    this.setState(state => ({
      tvshows: newTvShowList
    }));
  };

  searchTv = event => {
    this.setState({ searchQuery: event.target.value });
  };

  render() {
    let filteredTvShows = this.state.tvshows.filter(tvshow => {
      return (
        tvshow.name
          .toLowerCase()
          .indexOf(this.state.searchQuery.toLowerCase()) !== -1
      );
    });

    return (
      <div className="container mx-auto px-12">
        <SearchBar searchTvProp={this.searchTv} />
        <div className="grid grid-cols-3 col-auto gap-y-3">
          <ShowList
            tvshows={filteredTvShows}
            deleteTvShowProp={this.deleteTvShows}
          />
        </div>
      </div>
    );
  }
}

export default App;
