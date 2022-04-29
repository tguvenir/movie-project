import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';

class SearchBar extends React.Component {
  preventSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div class="pt-2 relative mx-auto text-gray-600 pb-3">
        <input
          onSubmit={this.preventSubmit}
          onChange={this.props.searchTvProp}
          class="border-2 border-gray-300 bg-white focus:border-blue-600 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full"
          type="search"
          name="search"
          placeholder="Search a Tv Shows"
        />
      </div>
    );
  }
}

export default SearchBar;
