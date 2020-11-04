import React from "react";
import styles from "./PublishPost.module.css";
import PostedCard from "./PostedCard/PostedCard";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../common/FormsControls/FormsControls";

const PublishPost = React.memo((props) => {

    let posts = props.postData.map( el => <PostedCard key={el.id} message={el.message} likesCount={el.likesCount}/>);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (

        <div className="PublishPost block">
            <div className={styles._container}>
                <div className={styles._box}>
                    <h6 className={styles._header}>Опубликовать пост</h6>
                    <AddNewPostFormRedux onSubmit={onAddPost} />
                </div>
                {posts}
            </div>
        </div>
    );
});
const maxLength = max => value => {
    debugger
    return value && value.length > max ? `Must be ${max} characters or less` : undefined
}

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {

    return (
        <form className={styles._containerGrid} onSubmit={props.handleSubmit}>
            <Field name="newPostText" component={Textarea} className={styles._textareaCell} validate={[required, maxLength10]} placeholder={'Post message'}/>
            <button type="submit" className={styles._buttonPub} >Написать</button>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'}) (AddNewPostForm);

export default PublishPost;