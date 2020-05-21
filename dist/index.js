!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["react-openidconnect"]=n():e["react-openidconnect"]=n()}("undefined"!=typeof self?self:this,function(){return webpackJsonpreact_openidconnect([1],{19:function(e,n){},24:function(e,n){},3:function(e,n,t){"use strict";function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function r(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var s=t(4),a=t.n(s),c=t(7),u=t.n(c),d=t(10),l=(t.n(d),t(11)),p=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}(),f=function(e){function n(e){i(this,n);var t=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.signin=t.signin.bind(t),t.onUserLoaded=t.onUserLoaded.bind(t),t.state={isAuthenticated:!1,isLoading:!1},t}return r(n,e),p(n,[{key:"UNSAFE_componentWillMount",value:function(){var e=this;this.userManager=new d.UserManager(this.props.OidcSettings),this.userManager.events.addUserLoaded(this.onUserLoaded),this.userManager.events.addUserUnloaded(this.onUserUnloaded),this.userManager.events.addAccessTokenExpired(this.onAccessTokenExpired),this.userManager.getUser().then(function(n){null!==n&&void 0!==n?e.onUserLoaded(n):e.isSuccessfullyAuthenticated()&&(e.setState({isLoading:!0}),e.userManager.signinRedirectCallback().then(function(){window.history.replaceState({},"","/")}).catch(function(e){console.log("Error signinRedirectCallback: ",e)}))})}},{key:"isSuccessfullyAuthenticated",value:function(){return void 0!==this.props.checkAuthentication?this.props.checkAuthentication():window.location.href.includes("#id_token")}},{key:"onUserLoaded",value:function(e){this.setState({isAuthenticated:!0}),void 0!==this.props.userLoaded&&this.props.userLoaded(e)}},{key:"onUserUnloaded",value:function(){this.setState({isAuthenticated:!1}),void 0!==this.props.userUnLoaded&&this.props.userUnLoaded()}},{key:"onAccessTokenExpired",value:function(){new l.a("auth").postMessage("accessTokenExpired")}},{key:"signin",value:function(){this.userManager.signinRedirect().then(function(){console.log("signinRedirect ok")}).catch(function(e){console.log("signinRedirect error:",e)})}},{key:"render",value:function(){return this.state.isAuthenticated?this.props.children:this.state.isLoading?a.a.createElement("div",null,this.props.renderLoading()):a.a.createElement("div",null,this.props.renderNotAuthenticated({onSignIn:this.signin}))}}]),n}(s.Component);f.defaultProps={OidcSettings:{},userUnLoaded:null,userLoaded:null,renderLoading:null,renderNotAuthenticated:null,checkAuthentication:null},f.propTypes={OidcSettings:u.a.shape({authority:u.a.string.isRequired,client_id:u.a.string.isRequired,redirect_uri:u.a.string.isRequired,post_logout_redirect_uri:u.a.string.isRequired,response_type:u.a.string.isRequired,scope:u.a.string.isRequired}).isRequired,userLoaded:u.a.func,userUnLoaded:u.a.func,renderLoading:u.a.func.isRequired,renderNotAuthenticated:u.a.func.isRequired,checkAuthentication:u.a.func,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]).isRequired},n.default=f}},[3])});