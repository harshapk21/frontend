import { useEffect, useRef, useState } from "react";
import "./index.css";

const ImageCarousal = () => {
  const [images, setImages] = useState([]);
  const carousalRef = useRef<Element | null>(null);
  // const [showLeftArrow, setShowLeftArrow] = useState(false);
  // const [showRightArrow, setShowRightArrow] = useState(true);
  
  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://dummyjson.com/products?limit=10&skip=0&select=thumbnail"
      );
      const data = await res.json();
      setImages(data.products);
    } catch (e) {
      console.log(e, "err");
    }
  };

  const handleNav = (direction: string) => {
    if (direction === "right") {
      carousalRef.current!.scrollBy(200, 0);
    } else {
      carousalRef.current!.scrollBy(-200, 0);
    }
    // Below 3 logs are working , only offset width/height is not showing up on ref
    console.log(
      carousalRef.current!.scrollLeft,
      carousalRef.current!.scrollWidth,
      carousalRef.current?.clientWidth
    );
  };

  // const handleNav = (direction: string) => {
  //   const { scrollBy, scrollWidth, scrollLeft, clientWidth } =
  //     carousalRef.current!;
  //   if (direction === "right") {
  //     scrollBy(200, 0);
  //   } else {
  //     scrollBy(-200, 0);
  //   }
  //   setShowLeftArrow(scrollLeft > 0);
  //   setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
  // };


  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    carousalRef.current =
      document.getElementsByClassName("carousal-container")[0];
  }, [images]);

  return (
    <>
      <div className="container">
        {images?.length ? (
          <div className="carousal-container">
            {images.map((image) => {
              return (
                <div className="image">
                  <img src={image.thumbnail} />
                </div>
              );
            })}
          </div>
        ) : (
          "loading"
        )}
        {/* <p className="nav left" onClick={()=>handleNav('left')}>&lt;</p>
      <p className="nav right" onClick={()=>handleNav('right')}>&gt;</p> */}
        <button
          className="nav left"
          onClick={() => handleNav("left")}
          //disabled={carousalRef.current?.scrollLeft < 10}
        >
          &lt;
        </button>
        <button
          className="nav right"
          onClick={() => handleNav("right")}
          // disabled={}
        >
          &gt;
        </button>
      </div>
    </>
  );
};

export default ImageCarousal;
