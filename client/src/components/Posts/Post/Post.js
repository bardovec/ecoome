import React from 'react';
import useStyles from './styles'
import { Box, Button, Card, CardActions, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import ConfirmModal from "../../ConfirmModal";
import {deletePost} from "../../../actions/posts";



const Post = ({post, setCurrentId}) => {
    const classes = useStyles()
    const dispatch = useDispatch()
const handleDelete = () => {
    dispatch(deletePost(post._id))
}
    return (
        <Card className={classes.card}>
            <img className={classes.media} src={post.imageUrl} alt=""/>
            <Box className={classes.cardInfo} >
            <Typography variant='h6'> Название Продукта: {post.name}</Typography>
            <Typography variant='h6'>Количество: {post.count}</Typography>
            <Typography variant='h6'>Вес: {post.weight}</Typography>
            <Typography variant='h6'>Комментарии: {post.comments}</Typography>
            <Typography variant='h6'>Высота: {post.size.height}</Typography>
            <Typography variant='h6'>Ширина: {post.size.width}</Typography>
            </Box>
            <CardActions className={classes.cardActions}>
                <Button size='small' color='primary'
                >Edit
                </Button>
                <ConfirmModal className='btn-remove' onClick={handleDelete} text='Удалить товар' />

            </CardActions>

        </Card>
    );
};

export default Post;
