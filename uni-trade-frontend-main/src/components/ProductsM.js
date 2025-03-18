import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import RecipeReviewCard from './RecipeReviewCard'
import axios from 'axios';




const ProductsM = () => {

  const [posts, setposts] = useState([]);
  useEffect(() => {
    const fetchposts = async () => {
      try {
        let response = await axios.get('http://localhost:5005/posts/getallposts');
        setposts(response.data);

      } catch (e) {
        console.log(e);
      }
    }
    fetchposts();
  }, [])
  return (
    <div style={{ height: '100vh', overflowY: 'auto', overflow: 'hidden' }} >
      <div className='row' style={{ height: '100vh', overflowY: 'auto' }}>
        <div className='col-3'>
          <SideBar />
        </div>
        <div className='col-8 d-flex justify-content-center mt-2 p-3'>
          <RecipeReviewCard posts={posts} />
        </div>

      </div>




    </div>
  )
}

export default ProductsM
