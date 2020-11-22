import React from "react";
import SearchBar from "./SearchBar";
import Youtube from "../apis/Youtube";
import VideoList from "./VideoList";

class App extends React.Component {
  state = { videos: [] };

  onEnterSubmit = async (searchText) => {
    const resp = await Youtube.get("/search", {
      params: {
        q: searchText
      }
    });
    this.setState({ videos: resp.data.items });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onEnterSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
