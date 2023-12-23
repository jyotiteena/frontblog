import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { createBlog } from '../app/blog/blogSlice';
import { useNavigate } from 'react-router-dom';
const BlogForm = () => {
  const dispatch = useDispatch();
    
    const history = useNavigate();
  const [Image, setPicture] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onTouch" });

  const handleImage = e => {
    setPicture({ blog_image: e.target.files[0] })
    setSelectedImage(e.target.files[0])
  }



  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  const submitData = async (data) => {
    const formData = new FormData();
    formData.append('blog_image', Image.blog_image);
    formData.append('blog_title', data.blog_title);
    formData.append('blog_desc', data.blog_desc);
    formData.append('blog_category', data.blog_category);
    dispatch(createBlog(formData))
    history("/");
  };
  return (
    <>
      <form className='mx-auto col-6 shadow p-5 my-5' encType="multipart/form-data" onSubmit={handleSubmit(submitData)}>
        <div>
          <label htmlFor="">Choose Category</label>
          <select name="" id="" className='form-control'
            {...register("blog_category", {
              required: "Blog category Is Required",
            })}
          >
            <option value="" disabled selected>-- choose category --</option>
            <option>Food</option>
            <option>Animal</option>
          </select>
          <span className="text-danger float-end">{errors?.blog_category?.message}</span>

        </div>
        <div className='mt-3'>
          <label htmlFor="">blog title</label>
          <input type="text" placeholder='enter title' className='form-control'
            {...register("blog_title", {
              required: "Blog Title Is Required",
              minLength: { value: 3, message: "Miniumum 3 character" },
            })} />
          <span className="text-danger float-end">{errors?.blog_title?.message}</span>
        </div>
        <div className='mt-3'>
          <label htmlFor="">blog description</label>
          <textarea name="" id="" className='form-control' placeholder='Enter Description'
            {...register("blog_desc", {
              required: "Blog Description Is Required",
              minLength: { value: 3, message: "Miniumum 3 character" },
            })}
          ></textarea>
          <span className="text-danger float-end">{errors?.blog_desc?.message}</span>
        </div>
        <div className="mt-3">
          <label htmlFor="">blog image</label>
          <input className="form-control" type="file" id="formFile" required
            onChange={handleImage}
            name="blog_image"
          />
          <span className="text-danger float-end">{errors?.blog_image?.message}</span>
        </div>
        <div className='d-grid mt-4'>
          <button className='btn btn-success'>Submit</button>
        </div>
        <div className="mt-4">
          {imageUrl && selectedImage && (
            <img src={imageUrl} alt={selectedImage.name} className="bg-danger w-50 h-50" />
          )}
        </div>
      </form>
    </>
  )
}

export default BlogForm