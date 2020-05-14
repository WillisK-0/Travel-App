const express = require('express')
const router = express()


function authenticate(req,res, next) {

    console.log("AUTHENTICATE")

    if(req.session) {
        if(req.session.isAuthenticated) {
            next() // go to the original request 
        } else {
            res.redirect('/login')
        }
    } else {
        res.redirect('/login')
    }
}


router.get('/',(req,res) => {
    res.render('login')
    console.log(users)
})

router.post('/',(req,res) => {
    const userName = req.body.userName
    const passWord = req.body.passWord

    let user = users.find(u => u.username == userName && u.password == passWord)

    if(user){
        if(req.session) {
            req.session.isAuthenticated = true
            req.session.username = user.username
            res.redirect('/travel')
        } else{
            res.redirect('log-in')
        } 
        
    
    }else{
        res.redirect('log-in')
    }

})

router.get('/register-user',(req,res) =>{
    res.render('register')
})

router.post('/register-user',(req,res) =>{
    const userName = req.body.userName
    const passWord = req.body.passWord


    let user = {username: userName, password: passWord}
    users.push(user)
    res.redirect('/log-in')
    
    
})



module.exports = router