import "./image.css";
import ImageMap from "./imagemap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const imgarr=[{im:"super.jpg"},{im:"x.jpg"},{im:"MadMa.jpg"},{im:"sa.jpg"},{im:"wo.jpg"}]

const SampleNext=(props)=>{
  const {onClick}=props
  return(
<div className="control-bin" onClick={onclick}>
  <button className="next">
<i className="fa fa-cheveron-right"></i>
  </button>
</div>

  )
}

const SamplePrev=(props)=>{
  const {onClick}=props
  return(
<div className="control-bin" onClick={onclick}>
  <button className="pre">
<i className="fa fa-cheveron-left"></i>
  </button>
</div>

  )
}


function Image() {

  var settings = {
    dots:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:<SampleNext/>,
    prevArrow:<SamplePrev/>
  };

  return (
    <div className="slideimg">
      {
        imgarr.map((va,i)=>
          <ImageMap key={i} val={va}/>
        )
      }
    </div>
  )
}

export default Image