import React from "react";
import SearchBar from "./SearchBar";
import Youtube from "../apis/Youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onEnterSubmit = async (searchText) => {
    const resp = await Youtube.get("/search", {
      params: {
        q: searchText
      }
    });
    this.setState({ videos: resp.data.items });
  };

  selectedVideo = (video) => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onEnterSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onSelectVideo={this.selectedVideo}
        />
      </div>
    );
  }
}

export default App;
