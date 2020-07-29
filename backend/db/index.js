const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'musictracker',
    password: 'galvaniseradapa',
    database: 'musictracker',
})

//Testfunktion
async function listCourses(){
    await client.connect();
    client.query('SELECT * from course', (err, res) => {
        if (err) {
            console.log(err.stack)
        } else {
            console.log(res.rows[2])
        }
    })
}

module.exports.listCourses = listCourses;
