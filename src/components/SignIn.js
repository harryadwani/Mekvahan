//sign in screen
import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import {Link as Linky } from '@reach/router';
import { navigate } from "@reach/router";
//var numValue=' ';
const Background=require('./car.png');
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Mekvahan
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage:  `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  const [numValue,setNum] = useState('');
  


  const numValueChange =  e => {
   setNum(e.target.value);
  };

  const [pwdValue,setPwd] = useState('');


  const pwdValueChange =  e => {
   setPwd(e.target.value);
  };
    
 var obj = {
   mobile : numValue,
   password : pwdValue
 }

 //var json = JSON.stringify(obj);
//  console.log(json);

  return (
 

    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
        <img src={require('./asset/1x/Asset 3mdpi.png')}/>
          <Typography component="h1" variant="h5" style={{color:'PINK'}} >
           <b> MEKVAHAN </b>
          </Typography>
          <form className={classes.form} noValidate>
            <TextField onChange={numValueChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="number"
              label="10 Digit Mobile Number "
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField onChange={pwdValueChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            {/* <Linky to ='/temp'> */}
            <Button
            //   type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              onClick={() => {console.log('hi')
              // axios.post('https://mekvahan.com/api/android_intern_task', {
              //   obj
              // })
              axios({
                method: 'post',
                url: 'https://mekvahan.com/api/android_intern_task',
                data: obj,
                })
              
              .then(function (response) {
                console.log(response.data.status);
                //console.log(this.state.numValue);
                if(response.data.status ==  false)
                  {
                    alert(response+'invalid credentials');
                    console.log(obj);
                  }
                if(response.data.status ==  true)
                {
                 // alert(numValue+'ok'+pwdValue+'fine');
                  console.log(obj);
                  navigate('/temp');
                }  
              })
              }}
              //className={classes.submit}
            >
              Login 
            </Button>
            {/* hi</Linky> */}
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                <br></br>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                <br></br>
                  {"Don't have an account? Sign Up"}
                </Link>
                <br></br>
               
              </Grid>
              
            </Grid>
            <br></br>
            or continue with
            <br></br>
            <img src={require('./asset/1x/Asset 6mdpi.png')}/>
            {" "}
            <img src={require('./asset/1x/Asset 5mdpi.png')}/>


            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
    
    
  );
}