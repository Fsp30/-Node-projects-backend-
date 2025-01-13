import express from 'express'
import passport from 'passport'
import dotenv from 'dotenv'
import session from 'express-session'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'

dotenv.config()
const app = express()

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())

passport.use(
    new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: 'http://localhost:3000/auth/google/callback',
    }, (accessToken, refreshToken, profile, done) => {
        return done(null, profile)
    })
)

passport.serializeUser((user, done) => done(null, user))
passport.deserializeUser((user, done) => done(null, user))

app.get('/', (req, res) => {
    res.send('<a href="/auth/google">Clica aqui e loga por favor!</a>')
})

app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
)

app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        res.redirect('/profile')
    }
)

app.get('/profile', (req, res) => {
    res.send(`Seja bem vindo ${req.user.displayName}`)
})

app.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})
