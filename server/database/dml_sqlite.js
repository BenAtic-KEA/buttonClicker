import db from './connection_sqlite.js';

export async function saveUser(username, password, email) {
    const result = await db.run(` INSERT INTO user (username, password, email, click_score)
    VALUES (?,?,?,?)
    `, [username, password, email, 0]);
    return result
}

export async function userExist(username, email) {
    const userResult = await db.all(`
    SELECT COUNT(*) as count FROM user
        WHERE username = ?
        `, [username]);
    const emailResult = await db.all(`
    SELECT COUNT(*) as count FROM user
        WHERE email = ?
        `, [email]);
    if (userResult[0].count > 0 || emailResult[0].count > 0) {
        return true
    } else {
        return false
    }
}

export async function usernameOk(username) {
    const result = await db.all(`
    SELECT * FROM user
        WHERE username = ?
        `, [username]);
    if (result) {
        return result
    }

    return result
}

export async function getTop10() {

    const result = await db.all(`
    SELECT username, click_score FROM user
        ORDER BY click_score desc
        LIMIT 10;`)
    return result
}