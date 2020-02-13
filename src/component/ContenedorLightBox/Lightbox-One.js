import React from "react";
import {MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";
import "./Lightbox.css";

const images = [
"https://i.pinimg.com/originals/c3/71/f2/c371f25667f00479dc2b8d88b62719bd.jpg",
"https://li0.rightinthebox.com/images/384x500/201803/ajgllq1522392414110.jpg",
"https://li0.rightinthebox.com/images/384x500/201803/slvkin1522392400987.jpg",
"https://li0.rightinthebox.com/images/384x500/201803/tprfiy1522392412372.jpg",

];

const smallImages = [
"https://i.pinimg.com/originals/c3/71/f2/c371f25667f00479dc2b8d88b62719bd.jpg",
"https://li0.rightinthebox.com/images/384x500/201803/ajgllq1522392414110.jpg",
"https://li0.rightinthebox.com/images/384x500/201803/slvkin1522392400987.jpg",
"https://li0.rightinthebox.com/images/384x500/201803/tprfiy1522392412372.jpg",
];

class LightboxPageOne extends React.Component {
constructor(props) {
super(props);

this.state = {
photoIndex: 0,
isOpen: false
};
}

render() {
const { photoIndex, isOpen } = this.state;
return (
<div className="mdb-lightbox no-margin">
<MDBRow >
<MDBCol md="5">
<figure>
<img
src={smallImages[0]}
alt="Gallery"
className="img-fluid"
onClick={() =>
this.setState({ photoIndex: 0, isOpen: true })
}
/>
</figure>
</MDBCol>
<MDBCol md="5">
<figure>
<img
src={smallImages[1]}
alt="Gallery"
className="img-fluid"
onClick={() =>
this.setState({ photoIndex: 1, isOpen: true })
}
/>
</figure>
</MDBCol>
<MDBCol md="5">
<figure>
<img
src={smallImages[2]}
alt="Gallery"
className="img-fluid"
onClick={() =>
this.setState({ photoIndex: 2, isOpen: true })
}
/>
</figure>
</MDBCol>
<MDBCol md="5">
<figure>
<img
src={smallImages[3]}
alt="Gallery"
className="img-fluid"
onClick={() =>
this.setState({ photoIndex: 3, isOpen: true })
}
/>
</figure>
</MDBCol>


</MDBRow>
{isOpen && (
<Lightbox
mainSrc={images[photoIndex]}
nextSrc={images[(photoIndex + 1) % images.length]}
prevSrc={images[(photoIndex + images.length - 1) % images.length]}
imageTitle={photoIndex + 1 + "/" + images.length}
onCloseRequest={() => this.setState({ isOpen: false })}
onMovePrevRequest={() =>
this.setState({
photoIndex: (photoIndex + images.length - 1) % images.length
})
}
onMoveNextRequest={() =>
this.setState({
photoIndex: (photoIndex + 1) % images.length
})
}
/>
)}
</div>
);
}
}

export default LightboxPageOne;