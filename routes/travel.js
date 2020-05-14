const express = require('express')
const router = express()

let myDestination= ''

function authenticate(req,res,next){
    if(req.session){
        if(req.session.isAuthenticated){
            next()
        }else{
            res.redirect('/log-in')
        }
    }else{
        res.redirect('/log-in')
    }
}

router.get('/',authenticate,(req,res) =>{
    res.render('travel',{trips: trips})
})

router.get('/add-trip',authenticate,(req,res) =>{
    res.render('add-trip')
})

router.get('/success',authenticate,(req,res)=>{
    res.render('success',{dest: myDestination})
})

router.post('/add-trip',authenticate,(req,res)=>{
    let destination = req.body.destination
    let departDate = req.body.departDate
    let returnDate = req.body.returnDate
    console.log(destination)
    myDestination = destination
    let trip = {destination: destination, departDate: departDate, returnDate: returnDate}
    trips.push(trip)
    console.log(trips)
    res.redirect('/travel/success')

})







module.exports = router


