import React from 'react';
import Card from 'react-bootstrap/Card';
const Cards = ({title,desc,avatar,category,UpdateTime}) => {
    var avatarImg;
    if(avatar){
        avatarImg = `${import.meta.env.VITE_IMG_PATH}/${avatar}`
    }else{
        avatarImg = `avatar.png`;
    }
    return (
        <>
            <Card>
                <Card.Img variant="top" src={avatarImg} className='cardImg' />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <p>{desc}</p>
                        <h5>{category}</h5>
                        <b>Updated Date :</b> {new Date(UpdateTime).toLocaleDateString()}

                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Cards