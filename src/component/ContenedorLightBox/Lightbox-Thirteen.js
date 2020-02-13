import React from "react";
import {MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";
import "./Lightbox.css";

const images = [
"https://li0.rightinthebox.com/images/384x500/201909/pmbulh1568888381830.jpg",
"https://li0.rightinthebox.com/images/384x500/201909/vwutgh1568888385304.jpg",
"https://li0.rightinthebox.com/images/384x500/201909/vuiogo1568888400539.jpg",
"https://li0.rightinthebox.com/images/384x500/201909/uswzcu1568888403130.jpg",
];

const smallImages = [
"https://li0.rightinthebox.com/images/384x500/201909/pmbulh1568888381830.jpg",
"https://li0.rightinthebox.com/images/384x500/201909/vwutgh1568888385304.jpg",
"https://li0.rightinthebox.com/images/384x500/201909/vuiogo1568888400539.jpg",
"https://li0.rightinthebox.com/images/384x500/201909/uswzcu1568888403130.jpg",
];

class LightboxPageThirteen extends React.Component {
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

export default LightboxPageThirteen;