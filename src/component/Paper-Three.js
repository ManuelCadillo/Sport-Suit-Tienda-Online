import React from 'react';


//Material-UI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
root: {
display: 'flex',
flexWrap: 'wrap',
'& > *': {
margin: theme.spacing(1),
marginLeft:theme.spacing(2),
width: theme.spacing(30),
height: theme.spacing(50),
},
}
}));




function PaperThree() {
const classes = useStyles();
return (
<div className={classes.root}>
<Card>
<CardActionArea>
<CardMedia
component="img"
alt="Contemplative Reptile"
height="240"
image="https://ae01.alicdn.com/kf/H053f70299000452599e5ddf30682abc5D/Chalecos-negros-de-un-solo-pecho-para-hombres-2019-nuevo-Caballero-Formal-de-negocios-de-Paisley.jpg"
title="Hombre Talla EU / US Chaleco, Floral Escote en Pico Poliéster Negro / Caqui / Delgado"/>
<CardContent>
<Typography gutterBottom variant="h5" component="h2">
Ofertas Limitadas
</Typography>
<Typography variant="body2" color="textSecondary" component="p">
Tiempo de Envío: Exprés Acelerado 3-5 días laborables 
</Typography>
</CardContent>
</CardActionArea>
<CardActions>
<Button onClick={event=> window.location.href='/#/Pagina-Eleven'} size="small" color="primary" >
Comprar
</Button>
<Button size="small" color="primary" onClick={info}>
Agregar Carrito
</Button>
</CardActions>
</Card>

<Card>
<CardActionArea>
<CardMedia
component="img"
alt="Contemplative Reptile"
height="240"
image="https://ae01.alicdn.com/kf/H30ebcc6eb23b40958cecf9afe7b8bcdcp.jpg"
title="Hombre Talla EU / US Chaleco Escote en Pico Poliéster Wine / Azul claro / Caqui / Delgado"/>
<CardContent>
<Typography gutterBottom variant="h5" component="h2">
Ofertas Limitadas
</Typography>
<Typography variant="body2" color="textSecondary" component="p">
Tiempo de Envío: Exprés Acelerado 3-5 días laborables 
</Typography>
</CardContent>
</CardActionArea>
<CardActions>
<Button onClick={event=> window.location.href='/#/Pagina-Twelve'} size="small" color="primary">
Comprar
</Button>
<Button size="small" color="primary" onClick={info}>
Agregar Carrito
</Button>
</CardActions>
</Card>


<Card>
<CardActionArea>
<CardMedia
component="img"
alt="Contemplative Reptile"
height="240"
image="https://www.dhresource.com/0x0/f2/albu/g8/M01/CC/B5/rBVaVF2tJRmAdTVPAAO-oPR5g2E947.jpg"
title="Hombre Chaleco, Un Color Escote en Pico Rayón / Nailon / Licra Negro / Blanco / Gris Oscuro"/>
<CardContent>
<Typography gutterBottom variant="h5" component="h2">
Ofertas Limitadas
</Typography>
<Typography variant="body2" color="textSecondary" component="p">
Tiempo de Envío: Exprés Acelerado 3-5 días laborables
</Typography>
</CardContent>
</CardActionArea>
<CardActions>
<Button onClick={event=> window.location.href='/#/Pagina-Thirteen'} size="small" color="primary">
Comprar
</Button>
<Button size="small" color="primary" onClick={info}>
Agregar Carrito
</Button>
</CardActions>
</Card>


<Card>
<CardActionArea>
<CardMedia
component="img"
alt="Contemplative Reptile"
height="240"
image="https://cf.shopee.sg/file/2259acb57c2fdefdf294de289c2c16e2"
title="Hombre Fiesta / Diario Negocios / Básico Otoño / Invierno Regular Chaleco, Un Color Bestias fantasticas Escote en Pico Sin Mangas Algodón / Poliéster Negro / Azul Marino / Caqui / Delgado"/>
<CardContent>
<Typography gutterBottom variant="h5" component="h2">
Ofertas Limitadas
</Typography>
<Typography variant="body2" color="textSecondary" component="p">
Tiempo de Envío: Exprés Acelerado 3-5 días laborables
</Typography>
</CardContent>
</CardActionArea>
<CardActions>
<Button onClick={event=> window.location.href='/#/Pagina-Fourteen'} size="small" color="primary">
Comprar
</Button>
<Button  size="small" color="primary" onClick={info}>
Agregar Carrito
</Button>
</CardActions>
</Card>

<Card>
<CardActionArea>
<CardMedia
component="img"
alt="Contemplative Reptile"
height="240"
image="https://ae01.alicdn.com/kf/HTB1f7U8Xc_vK1Rjy0Foq6xIxVXaJ.jpg"
title="Hombre Chaleco, A Lunares Escote en Pico Poliéster Negro / Blanco / Azul Marino"/>
<CardContent>
<Typography gutterBottom variant="h5" component="h2">
Ofertas Limitadas
</Typography>
<Typography variant="body2" color="textSecondary" component="p">
Tiempo de Envío: Exprés Acelerado 3-5 días laborables
</Typography>
</CardContent>
</CardActionArea>
<CardActions>
<Button onClick={event=> window.location.href='/#/Pagina-Fifteen'} size="small" color="primary">
Comprar
</Button>
<Button size="small" color="primary" onClick={info}>
Agregar Carrito
</Button>
</CardActions>
</Card>


</div>
);
}


function info(){
alert('Actualmente Fuera de Servicio');    
}


export default PaperThree;


