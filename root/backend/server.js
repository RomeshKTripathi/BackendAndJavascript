import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A joke",
      content: "This is a joke",
    },
    {
      id: 2,
      title: "Another joke",
      content: "This is another joke",
    },
    {
      id: 3,
      title: "A third joke",
      content: "This is third joke",
    },
    {
      id: 4,
      title: "Fourth joke",
      content: "This is Fourth joke",
    },
    {
      id: 5,
      title: "Last joke",
      content: "This is Last joke",
    },
  ];
  res.json(jokes);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
