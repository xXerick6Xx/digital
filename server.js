const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'dist/digital_waiter/browser')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/digital_waiter/browser/index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
