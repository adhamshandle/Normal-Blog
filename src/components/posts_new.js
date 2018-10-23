import React , { Component  } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component{
	static contextTypes = { //context will search the whole components to find a piece of code called router
		router: PropTypes.object
	};

	onSubmit(props){
		//this is a promise
		this.props.createPost(props)
			.then(() => {
				//blog post has been created, navigate the user to the index
				//we navigate by calling this.context.router.push with the
				//new path to navigate to.
				this.context.router.push('/');
			});
	}
	render(){

		const { fields: {title, categories, content}, handleSubmit } = this.props; //this syntax is just ES6
		//it's equilivant to just writing const handleSubmit = this.props.handleSubmit
		//just few characters
		//also title,categ..equilivant to const title=this.props.fields.title etctra.
		
		return(
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
			<h2>Create A New Post</h2>


			<div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
			<label>Title</label>
			<input type='text' className='form-control' {...title}/>
			<div className='text-help'>
			{title.touched ? title.error : ''}
			</div>
			</div>


			<div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
			<label>Categories</label>
			<input type='text' className='form-control' {...categories}/>
			<div className='text-help'>
			{categories.touched ? categories.error : ''}
			</div>
			</div>

			<div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
			<label>Content</label>
			<textarea className='form-control' {...content}/>
			<div className='text-help'>
			{content.touched ? content.error : ''}
			</div>
			</div>

			<button type='submit' className='btn btn-primary'>Submit</button>
			<Link to='/' className='btn btn-danger'>Cancel</Link>
			</form>
			);
	}
}

//connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
//reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
function validate(values) {
	const errors = {};

	if(!values.title){
		errors.title = 'Enter a username';
	}
	if(!values.categories){
		errors.categories = 'please enter your category';
	}
	if(!values.content){
		errors.content = 'you didnt fill the content';
	}

	return errors;
}
export default reduxForm({
	form: 'PostsNewForm',
	fields: ['title' , 'categories' , 'content'],
	validate
}, null , { createPost })(PostsNew);


