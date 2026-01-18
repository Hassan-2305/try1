import React, { useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import "./NewsletterReader.css";

const NewsletterReader = () => {
  const bookRef = useRef();

  return (
    <div className="flipbook-container">
      <HTMLFlipBook
        width={450}
        height={600}
        size="stretch"
        minWidth={300}
        maxWidth={900}
        minHeight={400}
        maxHeight={700}
        maxShadowOpacity={0.5}
        showCover={false}
        mobileScrollSupport={true}
        ref={bookRef}
        className="flipbook"
      >
        <Page img="/1.jpeg" />
        <Page img="/2.jpeg" />
        <Page img="/1.jpeg" />
        <Page img="/2.jpeg" />
      </HTMLFlipBook>

    
    </div>
  );
};

const Page = React.forwardRef(({ img }, ref) => (
  <div className="page" ref={ref}>
    <img src={img} alt="newsletter page" />
  </div>
));

export default NewsletterReader;