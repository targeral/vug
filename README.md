# vug

> a blog based on vue

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## vug-Database API

* host: `https://api.github.com`
* owner: `targeral`
* repo: `vug-Database`

### 获取所有文章

参考github api，[get contents部分](https://developer.github.com/v3/repos/contents/)：`GET /repos/:owner/:repo/contents/:path`

* `GET /all` =>  `GET https://api.github.com/repos/targeral/vug-Database/contents/all`

*return* : 

``` json
[
    {
        "name": "20170918_vue.md",
        "path": "all/20170918_vue.md",
        "sha": "af3a7e9fc1c6b717b484d3eb3cdaa8897c729caf",
        "size": 11,
        "url": "https://api.github.com/repos/targeral/vug-Database/contents/all/20170918_vue.md?ref=master",
        "html_url": "https://github.com/targeral/vug-Database/blob/master/all/20170918_vue.md",
        "git_url": "https://api.github.com/repos/targeral/vug-Database/git/blobs/af3a7e9fc1c6b717b484d3eb3cdaa8897c729caf",
        "download_url": "https://raw.githubusercontent.com/targeral/vug-Database/master/all/20170918_vue.md",
        "type": "file",
        "_links": {
            "self": "https://api.github.com/repos/targeral/vug-Database/contents/all/20170918_vue.md?ref=master",
            "git": "https://api.github.com/repos/targeral/vug-Database/git/blobs/af3a7e9fc1c6b717b484d3eb3cdaa8897c729caf",
            "html": "https://github.com/targeral/vug-Database/blob/master/all/20170918_vue.md"
        }
    },
    {
        "name": "20170919_react.md",
        "path": "all/20170919_react.md",
        "sha": "637564d6dafd54eb94517a9fe1f2f947057b0489",
        "size": 13,
        "url": "https://api.github.com/repos/targeral/vug-Database/contents/all/20170919_react.md?ref=master",
        "html_url": "https://github.com/targeral/vug-Database/blob/master/all/20170919_react.md",
        "git_url": "https://api.github.com/repos/targeral/vug-Database/git/blobs/637564d6dafd54eb94517a9fe1f2f947057b0489",
        "download_url": "https://raw.githubusercontent.com/targeral/vug-Database/master/all/20170919_react.md",
        "type": "file",
        "_links": {
            "self": "https://api.github.com/repos/targeral/vug-Database/contents/all/20170919_react.md?ref=master",
            "git": "https://api.github.com/repos/targeral/vug-Database/git/blobs/637564d6dafd54eb94517a9fe1f2f947057b0489",
            "html": "https://github.com/targeral/vug-Database/blob/master/all/20170919_react.md"
        }
    },
    {
        "name": "20170920_js.md",
        "path": "all/20170920_js.md",
        "sha": "842dff3b97d8946272ea8bf020b47b8911daf126",
        "size": 18,
        "url": "https://api.github.com/repos/targeral/vug-Database/contents/all/20170920_js.md?ref=master",
        "html_url": "https://github.com/targeral/vug-Database/blob/master/all/20170920_js.md",
        "git_url": "https://api.github.com/repos/targeral/vug-Database/git/blobs/842dff3b97d8946272ea8bf020b47b8911daf126",
        "download_url": "https://raw.githubusercontent.com/targeral/vug-Database/master/all/20170920_js.md",
        "type": "file",
        "_links": {
            "self": "https://api.github.com/repos/targeral/vug-Database/contents/all/20170920_js.md?ref=master",
            "git": "https://api.github.com/repos/targeral/vug-Database/git/blobs/842dff3b97d8946272ea8bf020b47b8911daf126",
            "html": "https://github.com/targeral/vug-Database/blob/master/all/20170920_js.md"
        }
    },
    {
        "name": "20170921_css.md",
        "path": "all/20170921_css.md",
        "sha": "5ec90cb098a87e76f1a9c81c73dd3465dbe348af",
        "size": 13,
        "url": "https://api.github.com/repos/targeral/vug-Database/contents/all/20170921_css.md?ref=master",
        "html_url": "https://github.com/targeral/vug-Database/blob/master/all/20170921_css.md",
        "git_url": "https://api.github.com/repos/targeral/vug-Database/git/blobs/5ec90cb098a87e76f1a9c81c73dd3465dbe348af",
        "download_url": "https://raw.githubusercontent.com/targeral/vug-Database/master/all/20170921_css.md",
        "type": "file",
        "_links": {
            "self": "https://api.github.com/repos/targeral/vug-Database/contents/all/20170921_css.md?ref=master",
            "git": "https://api.github.com/repos/targeral/vug-Database/git/blobs/5ec90cb098a87e76f1a9c81c73dd3465dbe348af",
            "html": "https://github.com/targeral/vug-Database/blob/master/all/20170921_css.md"
        }
    },
    {
        "name": "20170921_node.md",
        "path": "all/20170921_node.md",
        "sha": "bd5e048bdc5b538e569cb454f88869a1f5a384a2",
        "size": 12,
        "url": "https://api.github.com/repos/targeral/vug-Database/contents/all/20170921_node.md?ref=master",
        "html_url": "https://github.com/targeral/vug-Database/blob/master/all/20170921_node.md",
        "git_url": "https://api.github.com/repos/targeral/vug-Database/git/blobs/bd5e048bdc5b538e569cb454f88869a1f5a384a2",
        "download_url": "https://raw.githubusercontent.com/targeral/vug-Database/master/all/20170921_node.md",
        "type": "file",
        "_links": {
            "self": "https://api.github.com/repos/targeral/vug-Database/contents/all/20170921_node.md?ref=master",
            "git": "https://api.github.com/repos/targeral/vug-Database/git/blobs/bd5e048bdc5b538e569cb454f88869a1f5a384a2",
            "html": "https://github.com/targeral/vug-Database/blob/master/all/20170921_node.md"
        }
    }
]
```

### 获得某一个类文章

参考github api，[get contents部分](https://developer.github.com/v3/repos/contents/)：`GET /repos/:owner/:repo/contents/:path`

* `GET /classify/:which` => `GET https://api.github.com/repos/targeral/vug-Database/contents/classify/:which`

*eg* : `https://api.github.com/repos/targeral/vug-Database/contents/classify/CSS`

*return* :

``` json
[
    {
        "name": "20170921_css.md",
        "path": "classify/CSS/20170921_css.md",
        "sha": "5ec90cb098a87e76f1a9c81c73dd3465dbe348af",
        "size": 13,
        "url": "https://api.github.com/repos/targeral/vug-Database/contents/classify/CSS/20170921_css.md?ref=master",
        "html_url": "https://github.com/targeral/vug-Database/blob/master/classify/CSS/20170921_css.md",
        "git_url": "https://api.github.com/repos/targeral/vug-Database/git/blobs/5ec90cb098a87e76f1a9c81c73dd3465dbe348af",
        "download_url": "https://raw.githubusercontent.com/targeral/vug-Database/master/classify/CSS/20170921_css.md",
        "type": "file",
        "_links": {
            "self": "https://api.github.com/repos/targeral/vug-Database/contents/classify/CSS/20170921_css.md?ref=master",
            "git": "https://api.github.com/repos/targeral/vug-Database/git/blobs/5ec90cb098a87e76f1a9c81c73dd3465dbe348af",
            "html": "https://github.com/targeral/vug-Database/blob/master/classify/CSS/20170921_css.md"
        }
    }
]
``` 

目前有的分类有（which的值有）:
* CSS
* Javascript
* Node
* React
* Vue

**注意大小写**

### 获得某一篇文章

参考github api，[get contents部分](https://developer.github.com/v3/repos/contents/)：`GET /repos/:owner/:repo/contents/:path`

* `GET /blogs/:blogname` => `GET https://api.github.com/repos/targeral/vug-Database/contents/all/:blogname`

eg: `https://api.github.com/repos/targeral/vug-Database/contents/all/20170918_vue.md`

*return* :

``` json
{
    "name": "20170918_vue.md",
    "path": "all/20170918_vue.md",
    "sha": "af3a7e9fc1c6b717b484d3eb3cdaa8897c729caf",
    "size": 11,
    "url": "https://api.github.com/repos/targeral/vug-Database/contents/all/20170918_vue.md?ref=master",
    "html_url": "https://github.com/targeral/vug-Database/blob/master/all/20170918_vue.md",
    "git_url": "https://api.github.com/repos/targeral/vug-Database/git/blobs/af3a7e9fc1c6b717b484d3eb3cdaa8897c729caf",
    "download_url": "https://raw.githubusercontent.com/targeral/vug-Database/master/all/20170918_vue.md",
    "type": "file",
    "content": "IyBIZWxsbyBWdWU=\n",
    "encoding": "base64",
    "_links": {
        "self": "https://api.github.com/repos/targeral/vug-Database/contents/all/20170918_vue.md?ref=master",
        "git": "https://api.github.com/repos/targeral/vug-Database/git/blobs/af3a7e9fc1c6b717b484d3eb3cdaa8897c729caf",
        "html": "https://github.com/targeral/vug-Database/blob/master/all/20170918_vue.md"
    }
}
```

## 确定缓存的数据

1. 首次打开页面，获取blog列表并缓存。
2. 缓存blog列表页后，缓存列表项的每一个具体的内容。
3. 开始缓存一周内的所有blog内容。

## api文件夹

参考[Blog](http://blog.csdn.net/zhaohaixin0418/article/details/68488136)