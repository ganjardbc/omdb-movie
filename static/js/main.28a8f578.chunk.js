(this["webpackJsonpomdb-movie"]=this["webpackJsonpomdb-movie"]||[]).push([[0],{42:function(e,t,s){},43:function(e,t,s){},65:function(e,t,s){"use strict";s.r(t);var a=s(1),i=s(18),c=s.n(i),n=s(21),l=s(15),r=s(34),o=s(13),d={search:"",offset:1,datas:[]},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0,s=t.type,a=t.payload;switch(s){case"ADD":return Object(o.a)(Object(o.a)({},e),{},{datas:a});case"OFFSET":return Object(o.a)(Object(o.a)({},e),{},{offset:a});case"SEARCH":return Object(o.a)(Object(o.a)({},e),{},{search:a});default:return Object(o.a)({},e)}},b=Object(l.combineReducers)({movie:j}),m=Object(l.createStore)(b,Object(r.composeWithDevTools)()),h=(s(42),s(43),s(8)),v=s(9),f=s(11),p=s(10),x=s(17),u=s(3),O=s(20),y=s.n(O),g=s(0),N=function(e){Object(f.a)(s,e);var t=Object(p.a)(s);function s(){var e;return Object(h.a)(this,s),(e=t.call(this)).state={},e}return Object(v.a)(s,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"display-flex align-center center",style:{paddingTop:15,paddingBottom:15},children:[Object(g.jsx)("i",{className:"fa fa-lw fa-spin fa-spinner"}),Object(g.jsx)("div",{className:"fonts fonts-11 semibold black",style:{marginLeft:10},children:"Please Wait .."})]})}}]),s}(a.Component),w=function(e){Object(f.a)(s,e);var t=Object(p.a)(s);function s(){var e;return Object(h.a)(this,s),(e=t.call(this)).state={},e}return Object(v.a)(s,[{key:"render",value:function(){var e=this,t=this.props.cover;return Object(g.jsx)("div",{className:"display-popup",children:Object(g.jsx)("div",{className:"post-middle-absolute",children:Object(g.jsxs)("div",{style:{maxWidth:"calc(100% - 100px)",maxHeight:"calc(100vh - 50px)"},children:[Object(g.jsx)("div",{style:{position:"absolute",top:-10,right:-10},children:Object(g.jsx)("button",{className:"btn btn-small-icon btn-black btn-small-radius",onClick:function(){return e.props.onClickClose()},children:Object(g.jsx)("i",{className:"fa f-lg fa-times"})})}),Object(g.jsx)("img",{src:t,alt:t})]})})})}}]),s}(a.Component),k=function(e){Object(f.a)(s,e);var t=Object(p.a)(s);function s(){var e;return Object(h.a)(this,s),(e=t.call(this)).state={selectedData:"",visiblePopup:!1},e}return Object(v.a)(s,[{key:"render",value:function(){var e=this,t=this.props.data,s=this.state,a=s.visiblePopup,i=s.selectedData;return Object(g.jsxs)("div",{className:"card box-shadow bg-white",children:[Object(g.jsxs)("div",{className:"width width-full",children:[Object(g.jsx)("div",{style:{width:"100%",marginBottom:10},children:Object(g.jsx)("div",{className:"image image-padding bg-grey",style:{cursor:"pointer"},onClick:function(){return e.setState({selectedData:t.cover?t.cover:"",visiblePopup:!0})},children:t.cover?Object(g.jsx)("img",{src:t.cover,alt:t.title}):Object(g.jsx)("i",{className:"post-middle-absolute icn fa fa-2x fa-vr-cardboard"})})}),Object(g.jsxs)("div",{style:{width:"100%",marginBottom:15},children:[Object(g.jsx)("h2",{className:"fonts fonts-12 semibold black",style:{marginBottom:5},children:t.title}),Object(g.jsxs)("div",{className:"display-flex wrap fonts fonts-10 grey word-break",children:[Object(g.jsx)("div",{style:{width:70},children:"Type"}),Object(g.jsxs)("div",{style:{width:"calc(100% - 70px)"},children:[": ",t.type]})]}),Object(g.jsxs)("div",{className:"display-flex wrap fonts fonts-10 grey word-break",children:[Object(g.jsx)("div",{style:{width:70},children:"Year"}),Object(g.jsxs)("div",{style:{width:"calc(100% - 70px)"},children:[": ",t.year]})]})]}),Object(g.jsx)("div",{style:{width:"100%",height:40},children:Object(g.jsx)(x.c,{to:"/detail/"+t.title,children:Object(g.jsxs)("button",{className:"btn btn-sekunder btn-full",children:["Detail ",Object(g.jsx)("i",{className:"icn icn-right fa fa-lw fa-arrow-right"})]})})})]}),a&&Object(g.jsx)(w,{cover:i,onClickClose:function(){return e.setState({visiblePopup:!1})}})]})}}]),s}(a.Component),B=function(e){Object(f.a)(s,e);var t=Object(p.a)(s);function s(e){var a;Object(h.a)(this,s),a=t.call(this,e);var i=e.search;return a.state={visibleLoader:!1,visibleLoaderMore:!1,search:i||""},a}return Object(v.a)(s,[{key:"componentDidUpdate",value:function(e){this.props.movies!==e.movies&&console.log("movies",this.props)}},{key:"componentDidMount",value:function(){this.props.movies.length>0&&this.setState({visibleLoaderMore:!0})}},{key:"getData",value:function(e,t){var s=this;this.setState({visibleLoader:!0,visibleLoaderMore:!1});var a=[];a=t>1?Object.assign([],this.props.movies):[],y.a.get("http://www.omdbapi.com/?apikey=5bbce687&s=".concat(e,"&page=").concat(t),{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.data})).then((function(e){var i=e.Search;if(i&&i.map((function(e){return a.push({id:e.imdbID,cover:e.Poster,title:e.Title,type:e.Type,year:e.Year})})),a.length>0){var c=t+1;console.log("data",a),s.props.addMovie(a),s.props.offsetMovie(c),s.setState({visibleLoader:!1,visibleLoaderMore:!0})}else s.setState({visibleLoaderMore:!1,visibleLoader:!1})})).catch((function(){s.setState({visibleLoader:!1,visibleLoaderMore:!0})}))}},{key:"loadMore",value:function(){var e=this.props,t=e.offset,s=e.search;this.getData(s,t)}},{key:"onSearch",value:function(e){this.props.searchMovie(e),this.setState({datas:[]},this.getData(e,1))}},{key:"onReset",value:function(){this.props.addMovie([]),this.props.offsetMovie(1),this.props.searchMovie(""),this.setState({datas:[],search:"",visibleLoader:!1,visibleLoaderMore:!1})}},{key:"render",value:function(){var e=this,t=this.state,s=t.visibleLoader,a=t.visibleLoaderMore,i=this.props,c=i.movies,n=i.search,l=c;return Object(g.jsxs)("div",{style:{paddingTop:15,paddingBottom:15},children:[Object(g.jsx)("div",{id:"header",className:"box-shadow",children:Object(g.jsx)("div",{id:"header-container",children:Object(g.jsx)("div",{style:{paddingTop:3,width:"100%"},children:Object(g.jsxs)("form",{onSubmit:function(){return e.onSearch(n)},className:"display-flex space-between align-center",children:[Object(g.jsx)("div",{style:{width:"calc(100% - 102px)"},children:Object(g.jsx)("input",{type:"text",className:"field field-sekunder",placeholder:"Search move by title ..",required:!0,onChange:function(t){return e.props.searchMovie(t.target.value)},value:n})}),Object(g.jsx)("button",{type:"submit",className:"btn btn-icon btn-main",children:Object(g.jsx)("i",{className:"fa fa-lw fa-search"})}),Object(g.jsx)("button",{type:"reset",className:"btn btn-icon btn-grey",onClick:function(){return e.onReset()},children:Object(g.jsx)("i",{className:"fa fa-lw fa-times"})})]})})})}),Object(g.jsx)("div",{className:"display-flex wrap",children:l&&l.map((function(e,t){return Object(g.jsx)("div",{className:"width width-row-3",children:Object(g.jsx)("div",{style:{margin:10},children:Object(g.jsx)(k,{data:e})})},t)}))}),s&&Object(g.jsx)(N,{}),a&&Object(g.jsx)("div",{className:"display-flex center",style:{paddingTop:10},children:Object(g.jsx)("button",{className:"btn btn-sekunder",onClick:function(){return e.loadMore()},children:"Load More"})})]})}}]),s}(a.Component),C={addMovie:function(e){return{type:"ADD",payload:e}},offsetMovie:function(e){return{type:"OFFSET",payload:e}},searchMovie:function(e){return{type:"SEARCH",payload:e}}},L=Object(n.b)((function(e,t){return{movies:e.movie.datas,offset:e.movie.offset,search:e.movie.search}}),C)(B),S=function(e){Object(f.a)(s,e);var t=Object(p.a)(s);function s(){var e;return Object(h.a)(this,s),(e=t.call(this)).state={data:null,visibleLoader:!1,selectedData:"",visiblePopup:!1},e}return Object(v.a)(s,[{key:"componentDidMount",value:function(){var e=this.props.match.params.url;this.getData(e)}},{key:"getData",value:function(e){var t=this;this.setState({visibleLoader:!0}),y.a.get("http://www.omdbapi.com/?apikey=5bbce687&t=".concat(e),{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.data})).then((function(e){console.log("res",e),t.setState({visibleLoader:!1,data:e})})).finally((function(){t.setState({visibleLoader:!1})}))}},{key:"render",value:function(){var e=this,t=this.state,s=t.visibleLoader,a=t.visiblePopup,i=t.selectedData,c=t.data,n=this.props.match.params.url;return Object(g.jsxs)("div",{style:{paddingTop:20,paddingBottom:15},children:[Object(g.jsx)("div",{id:"navbar",className:"box-shadow",children:Object(g.jsxs)("div",{id:"navbar-container",className:"display-flex left align-center",children:[Object(g.jsx)("div",{children:Object(g.jsx)("button",{className:"btn btn-icon btn-white",onClick:function(){return e.props.history.goBack()},children:Object(g.jsx)("i",{className:"fa fa-lg fa-arrow-left"})})}),Object(g.jsx)("div",{className:"fonts fonts-12 semibold black",style:{marginLeft:10},children:n})]})}),s?Object(g.jsx)(N,{}):Object(g.jsxs)("div",{className:"main-detail",style:{paddingTop:15,paddingBottom:15},children:[Object(g.jsx)("div",{className:"left",children:Object(g.jsx)("div",{className:"image image-230px",style:{height:"290px",cursor:"pointer"},onClick:function(){return e.setState({selectedData:c&&c.Poster?c.Poster:"",visiblePopup:!0})},children:c&&c.Poster?Object(g.jsx)("img",{src:c.Poster,alt:c.Title}):Object(g.jsx)("i",{className:"post-center icn fa fa-lw fa-vr-cardboard"})})}),Object(g.jsxs)("div",{className:"right",children:[Object(g.jsxs)("div",{className:"card box-shadow",style:{marginBottom:15},children:[Object(g.jsx)("div",{style:{marginBottom:10},className:"display-flex",children:Object(g.jsx)("div",{className:"fonts fonts-12 semibold black",children:c&&c.Title})}),Object(g.jsxs)("div",{style:{marginBottom:10},className:"display-flex wrap",children:[Object(g.jsx)("div",{className:"card-value main",style:{margin:"2px 2px"},children:c&&c.Runtime}),Object(g.jsxs)("div",{className:"card-value main",style:{margin:"2px 2px"},children:["Imdb Ratings (",c&&c.imdbRating,")"]}),Object(g.jsxs)("div",{className:"card-value main",style:{margin:"2px 2px"},children:["Imdb Votes (",c&&c.imdbVotes,")"]})]}),Object(g.jsx)("div",{style:{marginBottom:10},children:Object(g.jsx)("div",{className:"fonts fonts-11 black",children:c&&c.Plot})}),Object(g.jsxs)("div",{className:"main-info",style:{marginBottom:5},children:[Object(g.jsx)("div",{className:"mi-left fonts fonts-11 grey",children:"Rated"}),Object(g.jsx)("div",{className:"mi-right fonts fonts-11 black",children:c&&c.Rated})]}),Object(g.jsxs)("div",{className:"main-info",style:{marginBottom:5},children:[Object(g.jsx)("div",{className:"mi-left fonts fonts-11 grey",children:"Released"}),Object(g.jsx)("div",{className:"mi-right fonts fonts-11 black",children:c&&c.Released})]}),Object(g.jsxs)("div",{className:"main-info",style:{marginBottom:5},children:[Object(g.jsx)("div",{className:"mi-left fonts fonts-11 grey",children:"Awards"}),Object(g.jsx)("div",{className:"mi-right fonts fonts-11 black",children:c&&c.Awards})]}),Object(g.jsxs)("div",{className:"main-info",style:{marginBottom:5},children:[Object(g.jsx)("div",{className:"mi-left fonts fonts-11 grey",children:"BoxOffice"}),Object(g.jsx)("div",{className:"mi-right fonts fonts-11 black",children:c&&c.BoxOffice})]}),Object(g.jsxs)("div",{className:"main-info",style:{marginBottom:5},children:[Object(g.jsx)("div",{className:"mi-left fonts fonts-11 grey",children:"Director"}),Object(g.jsx)("div",{className:"mi-right fonts fonts-11 black",children:c&&c.Director})]}),Object(g.jsxs)("div",{className:"main-info",style:{marginBottom:5},children:[Object(g.jsx)("div",{className:"mi-left fonts fonts-11 grey",children:"Language"}),Object(g.jsx)("div",{className:"mi-right fonts fonts-11 black",children:c&&c.Language})]}),Object(g.jsxs)("div",{className:"main-info",style:{marginBottom:5},children:[Object(g.jsx)("div",{className:"mi-left fonts fonts-11 grey",children:"Type"}),Object(g.jsx)("div",{className:"mi-right fonts fonts-11 black",children:c&&c.Type})]}),Object(g.jsxs)("div",{className:"main-info",style:{marginBottom:5},children:[Object(g.jsx)("div",{className:"mi-left fonts fonts-11 grey",children:"Year"}),Object(g.jsx)("div",{className:"mi-right fonts fonts-11 black",children:c&&c.Year})]}),Object(g.jsxs)("div",{className:"main-info",style:{marginBottom:5},children:[Object(g.jsx)("div",{className:"mi-left fonts fonts-11 grey",children:"Country"}),Object(g.jsx)("div",{className:"mi-right fonts fonts-11 black",children:c&&c.Country})]})]}),c&&c.Genre&&Object(g.jsxs)("div",{className:"card box-shadow",style:{marginBottom:15},children:[Object(g.jsx)("div",{style:{marginBottom:10},children:Object(g.jsx)("div",{className:"fonts fonts-12 semibold black",children:"Genres"})}),Object(g.jsx)("div",{className:"display-flex wrap",children:c&&c.Genre.split(",").map((function(e,t){return Object(g.jsx)("div",{className:"display-flex",style:{margin:"2px 2px"},children:Object(g.jsx)("div",{className:"card-value main",children:e})},t)}))})]}),c&&c.Actors&&Object(g.jsxs)("div",{className:"card box-shadow",style:{marginBottom:15},children:[Object(g.jsx)("div",{style:{marginBottom:10},children:Object(g.jsx)("div",{className:"fonts fonts-12 semibold black",children:"Actors"})}),Object(g.jsx)("div",{className:"display-flex wrap",children:c&&c.Actors.split(",").map((function(e,t){return Object(g.jsx)("div",{className:"display-flex",style:{margin:"2px 2px"},children:Object(g.jsx)("div",{className:"card-value main",children:e})},t)}))})]}),c&&c.Writer&&Object(g.jsxs)("div",{className:"card box-shadow",style:{marginBottom:15},children:[Object(g.jsx)("div",{style:{marginBottom:10},children:Object(g.jsx)("div",{className:"fonts fonts-12 semibold black",children:"Writers"})}),Object(g.jsx)("div",{className:"display-flex wrap",children:c&&c.Writer.split(",").map((function(e,t){return Object(g.jsx)("div",{className:"display-flex",style:{margin:"2px 2px"},children:Object(g.jsx)("div",{className:"card-value main",children:e})},t)}))})]}),c&&c.Production&&Object(g.jsxs)("div",{className:"card box-shadow",style:{marginBottom:15},children:[Object(g.jsx)("div",{style:{marginBottom:10},children:Object(g.jsx)("div",{className:"fonts fonts-12 semibold black",children:"Production"})}),Object(g.jsx)("div",{className:"display-flex wrap",children:c&&c.Production.split(",").map((function(e,t){return Object(g.jsx)("div",{className:"display-flex",style:{margin:"2px 2px"},children:Object(g.jsx)("div",{className:"card-value main",children:e})},t)}))})]}),Object(g.jsxs)("div",{className:"card box-shadow",style:{marginBottom:15},children:[Object(g.jsx)("div",{style:{marginBottom:10},children:Object(g.jsx)("div",{className:"fonts fonts-12 semibold black",children:"Ratings"})}),Object(g.jsx)("div",{className:"display-flex wrap",children:c&&c.Ratings.map((function(e,t){return Object(g.jsx)("div",{className:"display-flex",style:{margin:"2px 2px"},children:Object(g.jsxs)("div",{className:"card-value main",children:[e.Source," (",e.Value,")"]})},t)}))})]})]})]}),a&&Object(g.jsx)(w,{cover:i,onClickClose:function(){return e.setState({visiblePopup:!1})}})]})}}]),s}(a.Component),D=function(e){Object(f.a)(s,e);var t=Object(p.a)(s);function s(){var e;return Object(h.a)(this,s),(e=t.call(this)).state={},e}return Object(v.a)(s,[{key:"render",value:function(){return Object(g.jsx)(x.b,{history:x.a.browserHistory,children:Object(g.jsx)("div",{id:"app",children:Object(g.jsxs)("div",{id:"body",className:"main-screen",children:[Object(g.jsx)(u.a,{exact:!0,path:"/",component:L}),Object(g.jsx)(u.a,{exact:!0,path:"/detail/:url",component:S})]})})})}}]),s}(a.Component),M=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,66)).then((function(t){var s=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,n=t.getTTFB;s(e),a(e),i(e),c(e),n(e)}))};c.a.render(Object(g.jsx)(n.a,{store:m,children:Object(g.jsx)(D,{})}),document.getElementById("root")),M()}},[[65,1,2]]]);
//# sourceMappingURL=main.28a8f578.chunk.js.map