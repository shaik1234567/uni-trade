import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import axios from 'axios';
import Swal from 'sweetalert2';
import '../App.css'

const Additems = () => {
  const [desc, setDesc] = useState('');
  const [image, setImage] = useState(null);
  let [userData, setuserData] = useState([]);

  const rest = () => {
    setDesc('');
    setImage(null);
    
  }






  useEffect(() => {
    const fetchusers = async () => {
      let token = localStorage.getItem('token');
      if (!token) {
        return
      }

      try {
        let response = await axios.get('http://localhost:5005/api/userinfo', {
          headers: {
            'x-access-token': token
          }
        });

        setuserData(response.data)

      } catch (e) {
        console.log(e)
      }
    }
    fetchusers();

  }, [])
  console.log(userData._id)


  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setImage(selectedFile); // Save the selected image
      const reader = new FileReader();
      reader.onload = (event) => {
        Swal.fire({
          title: 'Your uploaded picture',
          imageUrl: event.target.result,
          imageAlt: 'The uploaded picture'
        });
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('desc', desc);
    formData.append('image', image);
    formData.append('userid', userData._id); // Replace with the actual user ID
  
    try {
      // Show confirmation dialog
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Post it!"
      });
  
      // If confirmed, post the data
      if (result.isConfirmed) {
          await axios.post('http://localhost:5005/posts/createpost', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
  
        // Show success message after posting
        await Swal.fire({
          title: "Posted!",
          text: "Your file has been posted.",
          icon: "success"
        });
  
        
      }
    } catch (error) {
      console.error(error);
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "error",
        title: "Failed to post"
      });
    }
  
    // Optionally call rest() here if you need to reset form or states
    rest();
  };
  return (
    <div style={{ height: '100vh', overflowY: 'auto', overflow: 'hidden' }}>
      <div className='row' style={{ height: '100vh', overflowY: 'auto' }}>
        <div className='col-3'>
          <SideBar />
        </div>
        <div className='col-7'>
          <div className="create-post-form p-3">
            <div className="d-flex align-items-center p-3 my-3 text-white bg-purple rounded shadow-sm">
              {/* <img
                className="me-3"
                src="/docs/5.3/assets/brand/bootstrap-logo-white.svg"
                alt=""
                width="48"
                height="38"
              /> */}
              <div className="lh-2  ">
                <h1 className="h5 mb-0 text-dark lh-2 ">Start Selling Today!</h1>
                <small className='text-dark'>Share what you love; sell what you don't!</small>
              </div>
            </div>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div>
                <label className='form-label'>Description:</label>
                <textarea
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  required
                  className='form-control'
                />
              </div>
              <div className='p-3'>
                <label className='form-label'>Upload Image:</label>
                <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  class="form-control"

                />
                
                
                </div>
                
              </div>
              <div className='d-flex justify-content-center'>
              <button type="submit" className='btn btn-outline-primary'>Create Post</button>
              </div>

              
            </form>
            
          </div>

        </div>

      </div>


    </div>
  )
}

export default Additems
