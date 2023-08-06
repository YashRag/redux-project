import './App.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotos } from './GalaryState';

function App() {
   const dispatch = useDispatch();
   const photos = useSelector(state => state.gallery.photos);

   useEffect(()=>{
     dispatch(getPhotos())
   },[]);

  return (
    <>
    <h1>PHOTO GALLERY</h1>
    <p>This is a photo gallery made using redux</p>
    <hr/>
    <div className='gallery'>
        {photos.map(photo => {
          
          return    <img src={photo.download_url} alt={photo.author} key={photo.id} width="300" height="300" />
        })}
    </div>
    </>
  )
}

export default App
