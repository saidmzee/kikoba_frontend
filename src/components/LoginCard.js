import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { makeStyles } from "@mui/styles";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import CardHeader from '@mui/material/CardHeader';
import { Grid } from '@mui/material';
const useStyles = makeStyles({
    loginCard: {
        margin: "20rem"
    }
})
const LoginCard = () => {
    const classes = useStyles()
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setemailError] = useState(false)
    const [passwordError, setpasswordError] = useState(false)
    const handleSumbit = (e) => {
        e.preventDefault()
        setEmail(false)
        setPassword(false)
        if (email == '') {
            setemailError(true)
        }
        if (password == '') {
            setpasswordError(true)
        }
        if (email && password) {
            console.log("email", email)
            console.log("passw", password)
            history.push('/landingPage')
        } else {
            history.push('/')
        }

    }
    return (

        <Card style={{ backgroundColor: '#F5F9FB' }}>
            
            <CardHeader
               title={
                <Typography gutterBottom variant="h5" component="h2">
                   Kikoba Login
                </Typography>
             }
            />
              <hr style={{ width: '22rem' }}/>
            <CardContent>
            
                <form noValidate autoComplete='off' onSubmit={handleSumbit}>

                    <Grid container direction={"column"} spacing={3}>
                        <Grid item style={{ width: '25rem' }}>
                            <TextField
                                onChange={(e) => { setEmail(e.target.value) }}
                                color='secondary'
                                label="email"
                                variant="outlined"
                                fullWidth
                                required
                                error={emailError}
                                type='email'
                            />

                        </Grid>
                        <Grid item style={{ width: '25rem' }}>

                            <TextField
                                type='password'
                                onChange={(e) => { setPassword(e.target.value) }}
                                color='secondary'
                                label="password"
                                variant="outlined"
                                fullWidth
                                required
                                error={passwordError}

                            />
                        </Grid>

                        <Grid item>

                            <Button
                                type="submit"
                               
                                variant='contained'
                                endIcon={<KeyboardArrowRightIcon />}
                            >
                                Log in
                            </Button>
                        </Grid>
                    </Grid>
                </form>

            </CardContent>
            <CardActions>
            </CardActions>
        </Card>
    );
}

export default LoginCard;