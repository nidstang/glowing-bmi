import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Menu } from '@material-ui/icons'
import { Button,Toolbar, AppBar, IconButton, Typography, Container } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import YourInfo from '../components/YourInfo';
import YourInfoForm from '../components/forms/YourInfo';
import Macros from '../components/Macros';
import Info from '../entities/info';

const infos = [
  Info({ index: 'BMI', value: '2000' }),
  Info({ index: 'MC', value: '1500' }),
  Info({ index: 'LFC', value: '1000' }),
];

const FullApp = ({ classes }) => (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <Menu />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                News
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Container>
            <Alert className="alert" severity="info">Your personal information</Alert>
            <YourInfoForm classes={classes} />
          </Container>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Alert className="alert" severity="success">Your Body indexes</Alert>
          <YourInfo rows={infos} />
          <Macros fat={10} carbs={40} protein={50} />
        </Grid>
      </Grid>
    </div>
);

export default FullApp;