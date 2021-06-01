import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getGalleryList } from "../action/GalleryAction";
import { Gallery } from "@kurpachsv/react-gallery";

export default function Gallery1() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const imageArray = store.user.galleryList.map((data) => {
    return data.image;
  });

  function generateSequence(imagesCount) {
    return Array.apply(null, { length: imagesCount }).map(Number.call, Number);
  }

  function getImages(
    width = 85,
    height = 100,
    color = "",
    imagesCount = imageArray.length
  ) {
    return generateSequence(imagesCount).map((idx) => {
      const newHeight = height;
      const newWidth = width;
      const newColor = color;
      return {
        src: imageArray[idx],
        height: newHeight,
        width: newWidth,
        alt: `${newWidth}x${newHeight}`,
        
      };
    });
  }

  useEffect(() => {
    dispatch(getGalleryList());
  }, []);

  console.log("Store", store.user.galleryList);

  return (
    <div>
      <Gallery
            gutterInPercent={3}
            enableDetailView={true}
            columnsMaxCount={7}
            className="img-div"
            
       images={getImages()} />
    </div>
  );
}
