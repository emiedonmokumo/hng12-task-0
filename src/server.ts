import app from "./app";
import cors from 'cors';

app.use(cors()) // configure when FE is connected

app.get('/', (req, res) => {
  res.status(200).json({
      email: "boro2dev@gmail.com",
      current_datetime: new Date().toISOString(),
      github_url: "https://github.com/emiedonmokumo"
  });
});

app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});