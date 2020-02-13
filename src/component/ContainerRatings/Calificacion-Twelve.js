import React, { useState } from 'react';
import { MDBRating ,MDBContainer} from 'mdbreact';

const RatingPageTwelve = () => {
const [basic] = useState([
{
tooltip: 'Muy mal'
},
{
tooltip: 'Pobre'
},
{
tooltip: 'Ok',
choosed: true
},
{
tooltip: 'Bueno'
},
{
tooltip: 'Excelente'
}
]);

return (
<MDBContainer style={{position:'relative',top:-37,right:17}}>
<MDBRating data={basic} />
</MDBContainer> 
);
};

export default RatingPageTwelve;