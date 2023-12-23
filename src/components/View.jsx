import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { showBlog } from '../app/blog/blogSlice';

const View = () => {
  const { id } = useParams()
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showBlog())
  }, [])

  const { blogs, loading } = useSelector((state) => state.blog)
  const singleBlog = blogs?.record?.filter((ele) => {
    return ele?._id === id
  })

  console.log(`${import.meta.env.VITE_IMG_PATH}/${singleBlog[0]?.blog_image}`)
  if (loading) {
    return <h1>loading................</h1>
  }
  return (
    <>
      <div className='shadow col-6 mx-auto p-5 m-5'>
        <ul>
          <li>
          <img src={`${import.meta.env.VITE_IMG_PATH}/${singleBlog[0]?.blog_image}`} alt="" width="100%" height="350px" /></li>
          <li><b>category : </b>{singleBlog[0]?.blog_category}</li>
          <li><b>title : </b>{singleBlog[0]?.blog_title}</li>
          <li><b>desc : </b>{singleBlog[0]?.blog_desc}</li>
        </ul>
      </div>
    </>
  )
}

export default View