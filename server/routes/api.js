const express = require('express')
const router = express.Router()

const bcrypt = require('bcrypt')

const con = require('../init-db.js')

class User {
    constructor() {
        this.createdAt = new Date()
        this.updatedAt = new Date()
        this.user;
    }
}

/* --- TEST CONNECTION BD */
router.get('/', (req, res) => res.send('Hello World!'))

router.get('/inscriptions', async(req, res) => {
    console.log(req.session.userId)
    if (req.session.userId) {
        const result = await con.query('SELECT * FROM inscriptionDispo', function(error, results, fields) {
            res.json(results)
        })
    } else {
        res.json(null)
    }

})

router.get('/elections', async(req, res) => {
    console.log(req.session.userId)
    if (req.session.userId) {
        const result = await con.query('SELECT * FROM electiondispoutilisateur WHERE Participant =?', [req.session.userId], function(error, results, fields) {
            res.json(results)
        })
    } else {
        res.json(null)
    }

})

router.get('/getCandidat/:id', async(req, res) => {
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
        console.log(results[0])
        if (await bcrypt.compare(password, results[0].mdp)) {
            req.session.userId = results[0].idUtilisateur
            console.log(req.session.userId)
            req.session.user = new User()
            const user = {
                email: results[0].emailPerso,
                emailPro: results[0].emailPro,
                lastname: results[0].nom,
                firstname: results[0].prenom,
                electorId: results[0].numElecteur
            }
            req.session.user.user = user;
            // on envoie le user au client.

            return res.json(req.session.user.user)
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

router.post('/register', async(req, res) => {
    const email = req.body.username.toLowerCase();
    const password = req.body.password
    var emailPro = req.body.workmail
    const lastname = req.body.lastname
    const firstname = req.body.firstname

    await con.query('SELECT * FROM Utilisateur WHERE emailPerso=? OR emailPro =?', [email, email], async function(error, results, fields) {
        if (results[0] != null) {
            res.status(401).json({
                message: 'user already exists'
            })
        }
        // si on a pas trouvé l'utilisateur
        // alors on le crée
        else {
            const hash = await bcrypt.hash(password, 10)

            if (emailPro === "")
                emailPro = null

            await con.query("INSERT INTO `utilisateur`(`emailPerso`, `emailPro`, `mdp`, `nom`, `prenom`, `numElecteur`, `typeUtilisateur`) VALUES (?,?,?,?,?,NULL,0)", [email, emailPro, hash, lastname, firstname], async function(error, results, fields) {
                res.send('ok')
            })
        }
    })
})

router.post('/voter', async (req, res) => {
    if(req.session.userId) {
        const voteCandidat= req.body.id
        const idElection =req.body.idElection

        await con.query('SELECT * FROM electiondispoutilisateur WHERE Participant =? AND idElection =?', [req.session.userId,idElection], async function(error, results, fields) {
            if (results[0] != null) {

              await con.query("UPDATE choix SET nbVotant = nbvotant+1 WHERE idChoix= ?",[voteCandidat],async function(error, results, fields){
              })

              await con.query("UPDATE participant SET aVote = TRUE WHERE idUtilisateur= ? AND idElection=?",[req.session.userId, idElection],async function(error, results, fields){
                  res.send('ok')
              })
            }
            else{
              res.status(401).json({
                  message: 'user already voted for this election or election the election already end'
              })
            }
        })
    }

})

/**
 * Cette route permet de modifier un mot de passe.
 */
router.put('/editPassword', async(req, res) => {
    const oldPassword = req.body.oldPassword
    const newPassword = req.body.newPassword
    const confirmPassword = req.body.confirmPassword
    console.log(req.session.userId)

    if (newPassword != confirmPassword) {
        return res.status(401).json({ message: 'confirm password not accurate' })
    }

    await con.query('SELECT * FROM Utilisateur WHERE idUtilisateur=?', [req.session.userId], async function(error, results, fields) {
        if (await bcrypt.compare(oldPassword, results[0].mdp)) {
            const newHashedPassword = await bcrypt.hash(newPassword, 10)
            await con.query('UPDATE utilisateur SET mdp=? WHERE idUtilisateur=?', [newHashedPassword, req.session.userId], async function(error, results, fields) {
                    res.send('ok')
                })
                // on envoie le user au client.

            return res.json({ message: 'password modified successfully' })
        } else {
            return res.status(400).json({ message: 'wrong old password' })
        }
    })
})
/*
router.post('/addCandidat', async (req, res) => {
    const idElection = req.body.idElection
    const nomCandidat = req.body.nomCandidat
    const descCandidat = req.body.descriptionCandidat
    const urlImage = req.body.imageCandidat
    const urlSite = req.body.siteCandidat

    //Vérifie que l'élection existe bien avant d'ajouter un candidat
    await con.query('SELECT * FROM Election WHERE idElection=?', [idElection], async function(error, results, fields) {
        if (results[0] != null) {
          await con.query("INSERT INTO `choix`(`libelle`, `urlImage`, `description`, `nbVotant`, `lienInfo`,`ìdElection`) VALUES (?,?,?,0,?,?)",[nomElection,urlImage,descriptionElection,urlSite,idElection],async function(error, results, fields){
              res.send('Candidat has been inserted')
          })
        }
        else{
          res.status(401).json({
              message: 'election no longer exist'
          })
        }
    })

})

router.post('/FormulaireElection', async (req, res) => {

    const idUtilisateur = req.session.userId

    const nomElection = req.body.nom_election
    const descriptionElection = req.body.description_election
    const dateDebut = req.body.date_debut
    const dateFin = req.body.date_fin
    const imageElection = req.body.image_election
    const typeElection = req.body.type_election

    var numElection

    if(req.session.userId) {
        await con.query("INSERT INTO `election`(`titre`, `description`, `dateDebut`, `dateFin`, `urlImage`,`idUtilisateur`,`idTypeElection`) VALUES (?,?,?,?,?,?,?)",[nomElection,descriptionElection,dateDebut,dateFin,imageElection,idUtilisateur,typeElection],async function(error, results, fields){
            numElection = results.insertId
        })
        await con.query("INSERT INTO `choix`(`libelle`, `urlImage`, `description`, `nbVotant`, `lienInfo`,`ìdElection`) VALUES ('','','',0,'','')",[nomElection,urlImage,descriptionElection,urlSite,numElection],async function(error, results, fields){
            res.send('ok')
        })
    }
})
*/

router.post('/creerElection', async (req, res) => {
    //console.log("Creation election")

    const idUtilisateur = req.session.userId

    const nomElection = req.body.data.titreElection
    const descriptionElection = req.body.data.descriptionElection
    const dateDebut = req.body.data.dateDebut
    const dateFin = req.body.data.dateFin
    const imageElection = req.body.data.imageElection
    const typeElection = req.body.data.typeElection
    const numCandidat = req.body.data.participants

    console.log(nomElection+" "+descriptionElection+" "+dateDebut+" "+dateFin+" "+imageElection+" "+typeElection+" "+numCandidat)
    var numElection

    if(req.session.userId) {
        await con.query("INSERT INTO `election`(`titre`, `description`, `dateDebut`, `dateFin`, `urlImage`,`idUtilisateur`,`idTypeElection`) VALUES (?,?,?,?,?,?,?)",[nomElection,descriptionElection,dateDebut,dateFin,imageElection,idUtilisateur,typeElection],async function(error, results, fields){
            //console.log(results)
            numElection = results.insertId
            //console.log(numElection)
            for (var i = 0; i < numCandidat; i++) {
                await con.query("INSERT INTO `choix`(`libelle`, `urlImage`, `description`, `nbVotant`, `lienInfo`,`idElection`) VALUES ('','','',0,'',?)",[numElection],async function(error, results, fields){
                })
            }
            res.json(numElection)
        })
    }
})

router.put('/updateCandidats', async (req, res) => {
    if(req.session.userId) {
        console.log(req.body)
        candidats = req.body
        console.log("UPDATE candidats "+candidats.length)
        for(var i=0;i<candidats.length;i++){
          const idChoix = candidats[i].idChoix
          const libelle = candidats[i].libelle
          const description = candidats[i].description
          const lienInfo = candidats[i].lienInfo
          const urlImage = candidats[i].urlImage
          await con.query("UPDATE `choix` SET `libelle`=?,`urlImage`=?,`description`=?,`lienInfo`=? WHERE idChoix=?",[libelle,urlImage,description,lienInfo,idChoix],async function(error, results, fields){
          })
        }


    }
})

module.exports = router
