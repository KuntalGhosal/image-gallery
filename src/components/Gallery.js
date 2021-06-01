import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getGalleryList } from '../action/GalleryAction';


export default function Gallery1() {
      const store = useSelector((state) => state);
      const dispatch = useDispatch()

      useEffect(() => {
            dispatch(getGalleryList());
            
      }, [])

      console.log("Store",store.user.galleryList);

      return (
            <div>
                <h1>Gallery</h1>
            </div>
      )
}
