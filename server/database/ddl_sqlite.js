import db from './connection_sqlite.js';

const isInDeleteMode = true;

if(isInDeleteMode){
    db.exec(`
    DROP TABLE IF EXISTS user
    `)
}

db.exec(`CREATE TABLE IF NOT EXISTS user (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(20) UNIQUE,
    password VARCHAR(100),
    email VARCHAR(65) UNIQUE,
    click_score INTEGER
    )`);
