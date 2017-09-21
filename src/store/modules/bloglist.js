import * as types from '../mutation-types';
import * as api from '@/api';

let state = {
    list: [],
    which: 'all'
};

let actions = {
    getAllBlogs ({ commit }) {
        api.getAllBlogs()
        .then((list) => {
            console.log('list', list);
            commit({
                type: types.UPDATE_BLOGLIST,
                list: list,
                which: 'all',
            })
        })
    },
    getSomeBlogs ({ commit, state }, payload) {
        api.getSomeBlogs(payload.which)
        .then((list) => {
            console.log('list ', payload.which, list);
            commit({
                type: types.UPDATE_BLOGLIST,
                list: list,
                which: payload.which,
            });
        })
    }
};

let mutations = {
    [types.UPDATE_BLOGLIST] (state, payload) {
        
        state.list = payload.list;
        state.which = payload.which; 
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
}