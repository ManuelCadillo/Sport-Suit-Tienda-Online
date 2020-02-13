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
marginBottom:theme.spacing(5)
},
}
}));


function PaperTwo() {
const classes = useStyles();
return (
<div className={classes.root}>
<Card>
<CardActionArea>
<CardMedia
component="img"
alt="Contemplative Reptile"
height="240"
image="https://www.dhresource.com/600x600/f2/albu/g8/M01/32/5B/rBVaV1yvD1uAYtGVAAHvjX52bAU295.jpg"
title="Hombre Trabajo Negocios Otoño / Invierno Regular Chaleco, Un Color Escote en Pico Sin Mangas Acrílico / Poliéster Blanco / Negro / Wine / Delgado"
/>
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
<Button onClick={event=> window.location.href='/#/Pagina-Six'} size="small" color="primary" >
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
image="https://cdn.shopify.com/s/files/1/2022/9471/products/product-image-682460206_345x@2x.jpg?v=1571610887"
title="Hombre Trabajo Primavera / Otoño Regular Chaleco, Un Color / Estampado Floral Escote en Pico Sin Mangas Algodón / Poliéster Negro / Rojo / Gris Claro / Informal de negocios"/>
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
<Button onClick={event=> window.location.href='/#/Pagina-Seven'} size="small" color="primary">
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
image="https://ae01.alicdn.com/kf/H4904e1baf3634d98b3d558cc76ce8504o.jpg_640x640q90.jpg"
title="Hombre Chaleco, Un Color Escote en Pico / Escote Chino Rayón / Nailon / Licra Negro / Azul Piscina / Caqui"/>
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
<Button onClick={event=> window.location.href='/#/Pagina-Eight'} size="small" color="primary">
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
image="https://statics-global-qiniu.kikuu.com/upload-productImg-1564647861875_320_234.jpeg?"
title="Hombre Chaleco, Cuadrícula Escote en Pico Poliéster Negro / Gris Oscuro / Azul Marino "/>
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
<Button onClick={event=> window.location.href='/#/Pagina-Nine'}  size="small" color="primary">
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
image="https://ae01.alicdn.com/kf/HTB1LxaDKeuSBuNjSsziq6zq8pXaD/Chalecos-s-lidos-para-hombre-caballero-Premium-de-negocios-para-hombre-traje-ajustado-sin-mangas-chaleco.jpg_640x640.jpg"
title="Hombre Festivos / Noche Activo / Básico Primavera & Otoño Corto Chaleco, A Lunares Escote en Pico Sin Mangas Algodón / Lino Negro / Gris / Caqui / Delgado"/>
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
<Button onClick={event=> window.location.href='/#/Pagina-Ten'}  size="small" color="primary">
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


export default PaperTwo;


