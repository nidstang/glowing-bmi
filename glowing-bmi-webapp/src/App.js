import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import FullApp from './apps/full';
// import CounterApp from './apps/counter';
import HookCounterApp from './apps/hookCounter';
import './App.scss';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    // <FullApp classes={classes} />
    // <CounterApp maxWeight={65} classes={classes} />
    <HookCounterApp maxWeight={5} classes={classes} />
  )
}