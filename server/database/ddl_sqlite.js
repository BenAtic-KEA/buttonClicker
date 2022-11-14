import db from './connection_sqlite.js';

const isInDeleteMode = false;

if(isInDeleteMode){
    db.exec(`
    DROP TABLE IF EXISTS user
    `)
}

db.exec(`CREATE TABLE IF NOT EXISTS animals (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(20),
    password VARCHAR(100)
)`)


export async function saveUser(username, password){
    const result = await db.run(` INSERT INTO user (username, password)
    VALUES (?,?)
    `,[username,password]);
    return result
}