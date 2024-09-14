const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5001
;

app.use(cors());

// Endpoint to get employee data
app.get('/api/employees', (req, res) => {
  const filePath = path.join(__dirname, 'employees.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Error reading file' });
    } else {
      const employees = JSON.parse(data);
      res.json(employees);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
