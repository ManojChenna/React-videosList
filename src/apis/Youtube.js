import axios from "axios";
const KEY = "AIzaSyDQ-QZ8ozFdaKB6eTEz38C6Vak7PQfamWo";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: 'video'
    key: KEY
  }
});
