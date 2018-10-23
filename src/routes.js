import React from 'react';
import { Route /*here where you will match between
	URL and component*/
	, IndexRoute } from 'react-router';
import App from './components/app';
import PostIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/PostsShow';

export default (
<Route path='/' component={App}>
<IndexRoute component={PostIndex} />//it doesn't need a path it's the default path for the parent
<Route path='posts/new' component={PostsNew}/>
<Route path='posts/:id' component={PostsShow}/>
</Route>
);

//www.facebook.com/ --> renders App

//msgd abo bakr el shar3 elle f wsho 3la nsyto el ahwa