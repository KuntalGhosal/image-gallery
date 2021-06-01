import {GET_GALLERY_LIST} from '../action/GalleryAction';


const initialState = {
      galleryList : [],
}


export default (state=initialState,action) =>{
      switch(action.type) {
            case GET_GALLERY_LIST:
                  return Object.assign ({},state,{
                        galleryList:[...action.payload],
                  })
            default:
                  return state;
      }
};
