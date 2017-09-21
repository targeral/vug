import * as types from '../mutation-types';
import appBlogList from './bloglist';
import appOneBlog from './someblog';

let state = {};

let actions = {};

let mutations = {};

export default {
    namespaced: true,
    actions,
    mutations,
    state,
    modules: {
        appBlogList,
        appOneBlog,
    }
}