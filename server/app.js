const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const sqllite = require('sqlite3').verbose();

const db = new sqllite.Database('./db/productly.db', sqllite.OPEN_READWRITE, (error) => {
  if (error) {
    return console.error(error);
  }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  origin: ['http://127.0.0.1:5500']
}))

app.get('/articles', (req, res) => {
  const sqlQuery = `
      SELECT * FROM article
    `;

  try {
    db.all(sqlQuery, [], (error, rows) => {
      if (error) {
        return res.status(404).json({
          error: error,
        })
      }
  
      if (rows.length < 1) {
        return res.status(404).json({
          error: 'Table is empty',
        })
      }
  
      return res.status(200).json(rows);
    });
  } catch(error) {
    return res.status(500).json({
      error: "Internal server error",
    });
  }
});

app.get('/experts', (req, res) => {
  const sqlQuery = `
      SELECT * FROM expert
    `;

  try {
    db.all(sqlQuery, [], (error, rows) => {
      if (error) {
        return res.status(404).json({
          error: error,
        })
      }
  
      if (rows.length < 1) {
        return res.status(404).json({
          error: 'Table is empty',
        })
      }
  
      return res.status(200).json(rows);
    });
  } catch(error) {
    return res.status(500).json({
      error: "Internal server error",
    });
  }
});

app.listen(3000).addListener('listening', () => {
  console.log('Listen on port 3000');
});