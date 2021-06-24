const express = require('express')
const router = express.Router()

const bcrypt = require('bcrypt')

const con = require('../init-db.js')

router.get('/', (req, res) => res.send('Hello World!'))

router.get('/user', async (req, res) => {
  const result = await con.query('SELECT * FROM utilisateur', function (error, results, fields) {
    res.json(results)
  })
})

/**
 * Cette route permet de se connecter.
 */
router.post('/login', async(req, res) => {
    const username = req.body.username.toLowerCase();
    const password = req.body.password

    const sqlUser = "SELECT * FROM users WHERE email=$1 OR username =$1"
    const checkExists = await client.query({ // notez le "await" car la fonction est asynchrone
        text: sqlUser,
        values: [username]
    })

    if (checkExists.rowCount === 0) {
        res.status(400).json({ message: 'user doesn\'t exists' });
        return
    }

    if (await bcrypt.compare(password, checkExists.rows[0].password)) {
        req.session.userId = checkExists.rows[0].id
            // on envoie l'id du user au client.
        return res.json(req.session.userId)
    } else {
        return res.status(401).json({ message: 'wrong password' })

    }
})


/**
 * Cette route permet de se déconnecter.
 */
router.post('/logout', (req, res) => {
    if (typeof req.session.userId === 'undefined' || req.session.userId === -1) {
        res.status(401).json({ message: 'user not connected' })
        return (res.json(req.session.userId))
    } else {
        req.session.destroy();
        return res.status(200).json({ message: 'user disconnected' })
    }


})

module.exports = router
