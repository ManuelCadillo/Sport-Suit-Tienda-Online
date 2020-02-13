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
marginTop:theme.spacing(3),
width: theme.spacing(30),
height: theme.spacing(50),
marginBottom:theme.spacing(5)
},
}
}));


function PaperOne() {
const classes = useStyles();
return (
<div className={classes.root}>
<Card>
<CardActionArea>
<CardMedia
component="img"
alt="Contemplative Reptile"
height="240"
image="https://ic4-a.wowma.net/mi/gr/114/otokoto2017.noor.jp/201805/AW-9607-4.jpg"
title="Hombre Diario / Festivos Vintage Primavera / Otoño Tallas Grandes Regular Chaleco, A Cuadros Cuello Camisero Sin Mangas Poliéster Marrón / Gris Oscuro / Gris Claro / Delgado"/>
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
<Button onClick={event=> window.location.href='/#/Pagina-One'} size="small" color="primary" >
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
image="https://www.dhresource.com/600x600/f2/albu/g9/M01/F2/D5/rBVaVVw_SXeADbaTAAVBvozyuPA131.jpg"
title="Hombre Fiesta / Trabajo Básico Primavera & Otoño Corto Chaleco, A Lunares Bestias fantasticas Escote en Pico Manga Corta Poliéster Negro / Gris / Caqui / Informal de negocios / Delgado"/>
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
<Button onClick={event=> window.location.href='/#/Pagina-Two'} size="small" color="primary">
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
image="https://ae01.alicdn.com/kf/H4c9186351d74426d8236ad62e953bc35j/Riinr-hombres-traje-chaleco-solo-pecho-hombres-vestido-chalecos-2019-nuevo-cuello-en-V-Gilet-Homme.jpg_640x640.jpg" 
title="Hombre Chaleco, Houndstooth Solapa de Pico Poliéster Negro / Marrón"/>
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
<Button onClick={event=> window.location.href='/#/Pagina-Three'} size="small" color="primary">
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
image="https://www.cdiscount.com/pdt2/4/4/1/1/700x700/mp10268441/rw/gilet-homme-gilet-de-costume-gilet-a-patte-de-bout.jpg"
title="Hombre Talla EU / US Chaleco, Un Color Escote en Pico Algodón Negro / Blanco / Gris Oscuro"/>
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
<Button onClick={event=> window.location.href='/#/Pagina-Four'} size="small" color="primary">
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
image="https://www.dhresource.com/0x0/f2/albu/g8/M01/D5/41/rBVaVF1vSUSANdF0AAJZg-agtSY604.jpg"
title="Hombre Diario Básico Otoño / Invierno Regular Chaleco, Cuadros / A Cuadros Escote en Pico Sin Mangas Licra Marrón / Gris"/>
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
<Button onClick={event=> window.location.href='/#/Pagina-Five'} size="small" color="primary">
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


export default PaperOne;


