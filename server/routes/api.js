const express = require('express')
const router = express.Router()

const bcrypt = require('bcrypt')

const con = require('../init-db.js')

/* --- TEST CONNECTION BD */
router.get('/', (req, res) => res.send('Hello World!'))

router.get('/elections', async(req, res) => {
    const result = await con.query('SELECT * FROM election', function(error, results, fields) {
        res.json(results)
    })
})

router.get('/getElection/:id', async(req, res) => {
        const id = parseInt(req.params.id)
        const result = await con.query("SELECT * FROM Choix WHERE idElection=?", [id], function(error, results, fields) {
            res.json(results)
        })
    })
    /* --- FIN TEST */

/**
 * Cette route permet de se connecter.
 */
router.post('/login', async(req, res) => {
    const username = req.body.username.toLowerCase();
    const password = req.body.password

    await con.query('SELECT * FROM utilisateur WHERE emailPerso="' + username + '" OR emailPro ="' + username + '"', async function(error, results, fields) {
        if (results[0] == null) {
            res.status(400).json({ message: 'user doesn\'t exists' });
            return
        }

        if (await bcrypt.compare(password, results[0].mdp)) {
            req.session.userId = results.rows[0].id
                // on envoie l'id du user au client.
            return res.json(req.session.userId)
        } else {
            return res.status(401).json({ message: 'wrong password' })
        }
    })
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