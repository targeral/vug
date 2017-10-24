import * as types from '../mutation-types';
import * as api from '@/api';

let state = {
    content: '',
};

let actions = {
    getBlogContent ({ commit }, payload) {
        api.getBlogContent(payload.blogName)
        .then((data) => {
            commit({
                type: types.OPEN_SOME_BLOG,
                content: data.content,
            })
        })
    }
};

let mutations = {
    [types.OPEN_SOME_BLOG] (state, payload) {
        state.content = payload.content;
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
}