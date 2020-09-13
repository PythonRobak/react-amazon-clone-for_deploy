import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-1337.cloudfunctions.net/api",
  // http://localhost:5001/clone-1337/us-central1/api - localhost development API
  // https://us-central1-clone-1337.cloudfunctions.net/api - cloud running app
});

export default instance;
