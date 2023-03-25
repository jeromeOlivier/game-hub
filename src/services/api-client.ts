import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0195741df0e343dda27b98d92f79420c",
  },
});
