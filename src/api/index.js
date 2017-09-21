import { fetch } from './fetch'
const OWNER = 'targeral'; // 所有者
const REPO  = 'vug-Database'; // 所有者的仓库
const ALLDIRNAME   = 'all'; // 存放所有文章的目录名
const CLASSIFYNAME = 'classify'; // 存放各类文章的目录名

export {
    getAllBlogs,
    getSomeBlogs,
    getBlogContent,
}

function getAllBlogs () {
    return fetch(`repos/${ OWNER }/${ REPO }/contents/${ ALLDIRNAME }`);
}

function getSomeBlogs (which) {
    return fetch(`repos/${ OWNER }/${ REPO }/contents/${ CLASSIFYNAME }/${ which }`);
}

function getBlogContent (blogName) {
    return fetch(`repos/${ OWNER }/${ REPO }/contents/${ ALLDIRNAME }/${ blogName }`);
}
