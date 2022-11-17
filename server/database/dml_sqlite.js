import db from './connection_sqlite.js';

export async function saveUser(username, password, email){
    const result = await db.run(` INSERT INTO user (username, password, email, click_score)
    VALUES (?,?,?,?)
    `,[username,password,email,0]);
    return result
}

export async function getTop10(){
    
        const result = await db.run(`
        SELECT top(10) username, click_score from user
        order by click_score dsc
        `)
        return result
}