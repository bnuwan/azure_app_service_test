const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Hello CBL!');
  });
  
  app.get('/api/data', (req, res) => {
    // Logic to fetch and send data
    res.json({ message: 'Data fetched successfully' });
  });
  
  app.use(express.json());

  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
  