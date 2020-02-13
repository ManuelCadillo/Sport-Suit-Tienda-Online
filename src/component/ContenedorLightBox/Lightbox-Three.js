import React from "react";
import {MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";
import "./Lightbox.css";

const images = [
"https://li0.rightinthebox.com/images/384x500/201912/vvbpal1576032217274.jpg",
"https://li0.rightinthebox.com/images/384x500/201912/yklbzj1576032217777.jpg",
"https://li0.rightinthebox.com/images/384x500/201912/ognple1576032217514.jpg",
"https://li0.rightinthebox.com/images/384x500/201912/qusmwb1576032218047.jpg",
];

const smallImages = [
"https://li0.rightinthebox.com/images/384x500/201912/vvbpal1576032217274.jpg",
"https://li0.rightinthebox.com/images/384x500/201912/yklbzj1576032217777.jpg",
"https://li0.rightinthebox.com/images/384x500/201912/ognple1576032217514.jpg",
"https://li0.rightinthebox.com/images/384x500/201912/qusmwb1576032218047.jpg",
];

class LightboxPageThree extends React.Component {
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

export default LightboxPageThree;