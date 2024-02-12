require("dotenv").config();
const express = require("express"); // common js import style
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const data = {
  login: "RomeshKTripathi",
  id: 69947588,
  node_id: "MDQ6VXNlcjY5OTQ3NTg4",
  avatar_url: "https://avatars.githubusercontent.com/u/69947588?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/RomeshKTripathi",
  html_url: "https://github.com/RomeshKTripathi",
  followers_url: "https://api.github.com/users/RomeshKTripathi/followers",
  following_url:
    "https://api.github.com/users/RomeshKTripathi/following{/other_user}",
  gists_url: "https://api.github.com/users/RomeshKTripathi/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/RomeshKTripathi/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/RomeshKTripathi/subscriptions",
  organizations_url: "https://api.github.com/users/RomeshKTripathi/orgs",
  repos_url: "https://api.github.com/users/RomeshKTripathi/repos",
  events_url: "https://api.github.com/users/RomeshKTripathi/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/RomeshKTripathi/received_events",
  type: "User",
  site_admin: false,
  name: "Romesh Kumar Tripathi",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: "Romesh Kumar Tripathi\r\n",
  twitter_username: null,
  public_repos: 18,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2020-08-20T02:36:51Z",
  updated_at: "2023-12-27T03:35:11Z",
};
app.get("/github", (req, res) => {
  res.json(data);
});

app.get("/chai", (req, res) => {
  res.send("Hello from chai");
});

app.get("/login", (req, res) => {
  res.send("<h1>Hello from Login</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
