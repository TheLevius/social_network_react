import {Field, Form, Formik} from 'formik';
import React from 'react';
import {FilterType} from '../../redux/usersReducer';
import {useSelector} from 'react-redux';
import {getUsersFilter} from '../../redux/usersSelectors';


const usersSearchFormValidate = (values: any) => {
    const errors = {};
    return errors;
}

type FriendFormType = 'true' | 'false' | 'null';
type FormType = {
    term: string
    friend: FriendFormType
}

type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}

export const UsersSearchForm: React.FC<PropsType> = React.memo((props) => {

    const filter = useSelector(getUsersFilter)

    const submit = (values: FormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        const filter: FilterType = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'true'
        }
        props.onFilterChanged(filter);
        setTimeout(() => {
            //alert(JSON.stringify(values));
            setSubmitting(false);
        }, 400);
    };

    // formik notes: component = as
    return (
        <div className={'searchFormBlock'}>
            <Formik
                enableReinitialize
                initialValues={{term: filter.term, friend: String(filter.friend) as FriendFormType}}
                validate={usersSearchFormValidate}
                onSubmit={submit}
            >
                {({isSubmitting}) => (
                    <Form>

                        <Field type={'text'} name={'term'}/>

                        <Field name={'friend'} component={'select'}>
                            <option value={'null'}>All</option>
                            <option value={'true'}>Only followed</option>
                            <option value={'false'}>Only unfollowed</option>
                        </Field>
                        <button type='submit' disabled={isSubmitting}>
                            Find
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
})