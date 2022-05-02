import React, {useEffect, useState} from 'react';
import useStyles from './styles'
import {TextField, Button, Typography, Paper, Box} from "@material-ui/core";
import FileBase from 'react-file-base64'
import {useDispatch, useSelector} from "react-redux";
import {createPost, updatePost} from "../../actions/posts";


const Form = ({currentId, setCurrentId}) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const post = useSelector((state) => currentId ? state.find((p) => p?.posts._id === currentId) : null)

    useEffect(() => {
        if (post) setPostData(post)

    }, [post])
    const [postData, setPostData] = useState({
        name: '',
        count: '',
        weight: '',
        comments: '',
        imageUrl: '',
        size: {
            width: '',
            height: '',
        }
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        if (currentId) {
            dispatch(updatePost(currentId, postData))
        } else {
            dispatch(createPost(postData))

        }
        clear()
    }
    const clear = () => {
        setCurrentId(null)
        setPostData({
            name: '',
            count: '',
            weight: '',
            comments: '',
            imageUrl: '',
            size: {
                width: '',
                height: ''
            }
        })

    }
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant='h6'>Добавление продукта</Typography>
                <TextField
                    required
                    name='Название продукта'
                    variant='outlined'
                    label='Название продукта'
                    fullWidth
                    value={postData.name}
                    onChange={(e) =>
                        setPostData({...postData, name: e.target.value})}

                />
                <TextField
                    required
                    name='Количество на складе'
                    variant='outlined'
                    label='Количество на складе'
                    fullWidth
                    value={postData.count}
                    onChange={(e) =>
                        setPostData({...postData, count: e.target.value})}

                />
                <TextField
                    required
                    name='Вес'
                    variant='outlined'
                    label='Вес'
                    fullWidth
                    value={postData.weight}
                    onChange={(e) =>
                        setPostData({...postData, weight: e.target.value})}

                />
                <Typography variant='h6'>Размеры</Typography>
                <Box className={classes.sizes} >
                <TextField
                    required
                    name='Высота '
                    variant='outlined'
                    label='Высота '
                    value={postData.size.height}
                    onChange={(e) =>
                        setPostData({...postData, size:{...postData.size,  height:e.target.value }})}

                /> <TextField
                required
                name='Ширина'
                variant='outlined'
                label='Ширина'
                value={postData.size.width}
                onChange={(e) =>
                    setPostData({...postData, size:{...postData.size, width:e.target.value } })}

            />
                </Box>
                <TextField
                    required
                    name='Комментарий к продукту'
                    variant='outlined'
                    label='Комментарий'
                    fullWidth
                    value={postData.comments}
                    onChange={(e) =>
                        setPostData({...postData, comments: e.target.value})}

                />
                <div className={classes.fileInput}><FileBase type='file' multiply={false}
                                                             onDone={({base64}) => setPostData({
                                                                 ...postData,
                                                                 imageUrl: base64
                                                             })}/></div>
                <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit'
                        fullWidth>Подтвердить</Button>
                <Button variant='contained' color='secondary' size='small' onClick={clear} fullWidth>Очистить</Button>

            </form>
        </Paper>
    );
};

export default Form;
