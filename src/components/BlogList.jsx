import React, { useEffect } from 'react';
import Cards from './Cards';
import { useDispatch, useSelector } from 'react-redux';
import { showBlog } from '../app/blog/blogSlice'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const BlogList = () => {
  const dispatch = useDispatch();
  const { blogs, loading } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(showBlog())
  }, []);
  if (loading) {
    return <h1>loading................</h1>
  }
  return (
    <>
      <Container className='my-5'>
        <h2>Total Blogs({`${blogs?.record?.length}`})</h2>
        <Row className='py-5'>
          {
            blogs?.record?.map((data, index) => {
              return (
                <>
                  <Col xl={3} lg={4} md={6} key={index} className='mt-4'>
                    <NavLink className="text-decoration-none" to={`singleBlog/${data._id}`}>

                      <Cards title={data.blog_title} desc={data.blog_desc} avatar={data?.blog_image} category={data.blog_category} createTime={data.createdAt} UpdateTime={data.updatedAt} />
                    </NavLink >
                  </Col>
                </>
              )
            })
          }
        </Row>
      </Container >
    </>
  )
}

export default BlogList