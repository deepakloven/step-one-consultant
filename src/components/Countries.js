import React, { useEffect, useRef } from 'react';
import '../style/countries.css'; // You can create a CSS file for styling

const Countries = () => {
  // Sample list of images with captions
  const imagesWithCaptions = [
    {
      imageUrl: "https://th.bing.com/th/id/R.33decda4fa2757a931a2ad30abb4a9f1?rik=FmQOAN%2b1HIMI0w&riu=http%3a%2f%2falittlecampy.com%2fwp-content%2fuploads%2f2019%2f06%2fperth-1368337_960_720.jpg&ehk=kA7cjOJk7IPgXuvJlLQXLF4icZ5H632%2fDM0oyHUoFlw%3d&risl=&pid=ImgRaw&r=0",
      caption: "Perth, Australia"
    },
    {
      imageUrl: "https://2.bp.blogspot.com/-qJvSWvvZfVA/UYDpu74FACI/AAAAAAAAD1w/ETDR7WA_EEI/s1600/Seoul-South-Korea-2013.jpg",
      caption: "Seoul, South Korea"
    },
    {
      imageUrl: "https://th.bing.com/th/id/R.0f17bb96731b033856067ad8d86a37ac?rik=2%2buSKkR9qRnEVQ&pid=ImgRaw&r=0",
      caption: "Paris, France"
    },
    {
      imageUrl: "https://cultureandfaith.files.wordpress.com/2013/05/night-tokyo.jpg",
      caption: "Tokyo, Japan"
    },
    {
      imageUrl: "https://resources.news.e.abb.com/images/2020/6/15/0/chinese.jpg",
      caption: "Beijing, China"
    },
    {
      imageUrl: "https://th.bing.com/th/id/OIP.7ZDuOB9l_dmKn3-N7xuKvAHaEo?pid=ImgDet&rs=1",
      caption: "New York City, USA"
    },
    // Add more image URLs and captions as needed
  ];

  // Create a ref to the image scroll container
  const imageScrollRef = useRef(null);

  // Automatically scroll the images
  useEffect(() => {
    const scrollContainer = imageScrollRef.current;

    const scrollImages = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 1; // Adjust the scroll speed by changing this value
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollContainer.scrollLeft = 0;
        }
      }
    };

    const scrollInterval = setInterval(scrollImages, 20); // Adjust the scroll interval for smoother/faster scrolling

    if (scrollContainer) {
      scrollContainer.addEventListener('mouseenter', () => clearInterval(scrollInterval));
      scrollContainer.addEventListener('mouseleave', () => {
        clearInterval(scrollInterval);
        scrollInterval = setInterval(scrollImages, 20);
      });
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseenter', () => clearInterval(scrollInterval));
        scrollContainer.removeEventListener('mouseleave', () => {
          clearInterval(scrollInterval);
          scrollInterval = setInterval(scrollImages, 20);
        });
      }
      clearInterval(scrollInterval);
    };
  }, []);

  return (
    <div className="countries-container">
      <h2>Your Destination</h2>
      <div className="image-scroll-container">
        <div className="image-scroll">
          {imagesWithCaptions.map((imageData, index) => (
            <div className="image-card" key={index}>
              <div className="image-caption">{imageData.caption}</div>
              <img src={imageData.imageUrl} alt={imageData.caption} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countries;
