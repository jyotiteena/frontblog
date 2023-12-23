import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBlog, showBlog } from '../app/blog/blogSlice'
import { Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const BlogHistory = () => {
    const dispatch = useDispatch();
    const history = useNavigate();
    const { blogs, loading } = useSelector((state) => state.blog);

    useEffect(() => {
        dispatch(showBlog())
    }, []);

    const deleteItem = (id) => {
        dispatch(deleteBlog(id));
    }
    if (loading) {
        return <h1>loading................</h1>
    }
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Category</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Avatar</th>
                        <th>Update Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        blogs?.record?.map((data, index) => {
                            var avatarImg;
                            if (data?.blog_image) {
                                avatarImg = `${import.meta.env.VITE_IMG_PATH}/${data.blog_image}`
                            } else {
                                avatarImg = `avatar.png`;
                            }
                            return (
                                <>
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{data.blog_category}</td>
                                        <td>{data?.blog_title}</td>
                                        <td>{data?.blog_desc}</td>
                                        <td><img src={avatarImg} alt="" width={150} /></td>
                                        <td>{new Date(data?.updatedAt).toLocaleDateString()}</td>
                                        <td><Link className='btn btn-danger' onClick={() => deleteItem(data._id)}>Delete</Link></td>
                                    </tr>
                                </>)

                        })}
                </tbody>
            </Table>
        </>
    )
}

export default BlogHistory