import React from "react";
import styles from "./MyPosts.module.css";
import PostedCard from "./PostedCard/PostedCard";
import {reset} from "redux-form";
import {useDispatch} from "react-redux";
import AddPostForm, { AddPostFormValuesType } from './AddPostForm/AddPostForm';
import {PostType} from '../../types/reduxTypes';


export type MapPropsType = {
    postData: PostType[]
}
export type DispatchPropsType = {
    addPost: (newPostText: string) => void
}

const MyPosts: React.FC<MapPropsType & DispatchPropsType> = (props) => {
    const dispatch = useDispatch();

    let postsElements = props.postData.map( el => <PostedCard key={el.id} message={el.message} likesCount={el.likesCount}/>);

    let onAddPost = (values: AddPostFormValuesType) => {
        props.addPost(values.newPostText);
        dispatch(reset('ProfileAddNewPostForm'));
    };

    return (

        <div className="PublishPost block">
            <div className={styles._container}>
                <div className={styles._box}>
                    <h6 className={styles._header}>Опубликовать пост</h6>
                    <AddPostForm onSubmit={onAddPost} />
                </div>
                {postsElements}
            </div>
        </div>
    );
}

const MyPostsMemoized = React.memo(MyPosts);

export default MyPostsMemoized;