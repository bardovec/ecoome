import React, { useEffect, useState } from 'react';
import { Button, Container, Grid, Grow } from "@material-ui/core";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import useStyles from "../../styles";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";


const Home = () => {
    const [currentId, setCurrentId] = useState(0);
    const [show, setShow] = useState(false)
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Grow in>
            <Container>
                <Grid container className={classes.mainContainer} justifyContent="space-between"
                      alignItems='stretch' spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId}/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        {show ?
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                            :
                            <Button onClick={()=>  setShow(!show)} variant='contained' color='primary' size='large'
                                    fullWidth>Добавить Продукт</Button>

                        }
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
};

export default Home;
