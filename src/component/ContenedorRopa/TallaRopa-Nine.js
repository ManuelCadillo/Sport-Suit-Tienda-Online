import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
root: {
flexGrow: 1
},
}));

function AutoGridNine() {
const classes = useStyles();

return (
<div className={classes.root}>
<Grid container spacing={1}>
<Grid item xs>
<p class="ridge-one" style={TextStyle}>M</p>
</Grid>
<Grid item xs>
<p class="ridge-two" style={TextStyle}>L</p>
</Grid>
<Grid item xs>
<p class="ridge-three" style={TextStyle}>XL</p>
</Grid>
</Grid>
</div>
);
}


export default AutoGridNine;

const TextStyle ={
fontFamily: 'font-weight-bold', 
position:'relative',
bottom:20   
}