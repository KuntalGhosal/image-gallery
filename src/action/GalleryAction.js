import axios from 'axios';

export const GET_GALLERY_LIST = 'GET_GALLERY_LIST';


export const getGalleryList = () => async(
      dispatch
) => {
      axios
      .get('https://ms.ustaadmechanics.com/offerings/categories/all')
      .then ((res) => {
            console.log(res);
            dispatch({type: GET_GALLERY_LIST, payload:res.data.objects});

      })
      .catch((err) => {
            console.log(err);
      })
};