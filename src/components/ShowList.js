import React from 'react';

const ShowList = props => {
  // function delClick(event) {
  //   // console.log('Button Clicked');
  //   console.log(event);
  // }

  return (
    <>
      {props.tvshows.map(tvshow => (
        <div
          className="max-w-xs rounded overflow-hidden shadow-2xl"
          key={tvshow.id}
        >
          <img className="w-full" src={tvshow.imageURL} alt="BreakingBad" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{tvshow.name}</div>
            <p className="text-gray-500 text-base">{tvshow.overview}</p>
            <div className="flex justify-between align-middle">
              <button
                onClick={event => props.deleteTvShowProp(tvshow)}
                class="bg-white hover:bg-red-700 text-red-500 hover:text-white border-2 border-red-600 font-semibold py-2 px-4 my-3 rounded"
              >
                Delete
              </button>
              <h2 className="my-5">
                <span className="bg-sky-500 rounded text-white py-2 px-2 font-bold">
                  {tvshow.score}
                </span>
              </h2>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default ShowList;
