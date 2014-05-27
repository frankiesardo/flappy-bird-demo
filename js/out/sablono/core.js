// Compiled by ClojureScript 0.0-2202
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__17402__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__17401 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__17401,0,null);var body = cljs.core.nthnext.call(null,vec__17401,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__17402 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__17402__delegate.call(this,args);};
G__17402.cljs$lang$maxFixedArity = 0;
G__17402.cljs$lang$applyTo = (function (arglist__17403){
var args = cljs.core.seq(arglist__17403);
return G__17402__delegate(args);
});
G__17402.cljs$core$IFn$_invoke$arity$variadic = G__17402__delegate;
return G__17402;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__8591__auto__ = (function iter__17408(s__17409){return (new cljs.core.LazySeq(null,(function (){var s__17409__$1 = s__17409;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17409__$1);if(temp__4126__auto__)
{var s__17409__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17409__$2))
{var c__8589__auto__ = cljs.core.chunk_first.call(null,s__17409__$2);var size__8590__auto__ = cljs.core.count.call(null,c__8589__auto__);var b__17411 = cljs.core.chunk_buffer.call(null,size__8590__auto__);if((function (){var i__17410 = 0;while(true){
if((i__17410 < size__8590__auto__))
{var args = cljs.core._nth.call(null,c__8589__auto__,i__17410);cljs.core.chunk_append.call(null,b__17411,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__17412 = (i__17410 + 1);
i__17410 = G__17412;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17411),iter__17408.call(null,cljs.core.chunk_rest.call(null,s__17409__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17411),null);
}
} else
{var args = cljs.core.first.call(null,s__17409__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__17408.call(null,cljs.core.rest.call(null,s__17409__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8591__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__8591__auto__ = (function iter__17417(s__17418){return (new cljs.core.LazySeq(null,(function (){var s__17418__$1 = s__17418;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17418__$1);if(temp__4126__auto__)
{var s__17418__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17418__$2))
{var c__8589__auto__ = cljs.core.chunk_first.call(null,s__17418__$2);var size__8590__auto__ = cljs.core.count.call(null,c__8589__auto__);var b__17420 = cljs.core.chunk_buffer.call(null,size__8590__auto__);if((function (){var i__17419 = 0;while(true){
if((i__17419 < size__8590__auto__))
{var style = cljs.core._nth.call(null,c__8589__auto__,i__17419);cljs.core.chunk_append.call(null,b__17420,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__17421 = (i__17419 + 1);
i__17419 = G__17421;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17420),iter__17417.call(null,cljs.core.chunk_rest.call(null,s__17418__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17420),null);
}
} else
{var style = cljs.core.first.call(null,s__17418__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__17417.call(null,cljs.core.rest.call(null,s__17418__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8591__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__17422){
var styles = cljs.core.seq(arglist__17422);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to17423 = (function() { 
var link_to17423__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to17423 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to17423__delegate.call(this,url,content);};
link_to17423.cljs$lang$maxFixedArity = 1;
link_to17423.cljs$lang$applyTo = (function (arglist__17424){
var url = cljs.core.first(arglist__17424);
var content = cljs.core.rest(arglist__17424);
return link_to17423__delegate(url,content);
});
link_to17423.cljs$core$IFn$_invoke$arity$variadic = link_to17423__delegate;
return link_to17423;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to17423);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to17425 = (function() { 
var mail_to17425__delegate = function (e_mail,p__17426){var vec__17428 = p__17426;var content = cljs.core.nth.call(null,vec__17428,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__7874__auto__ = content;if(cljs.core.truth_(or__7874__auto__))
{return or__7874__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to17425 = function (e_mail,var_args){
var p__17426 = null;if (arguments.length > 1) {
  p__17426 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to17425__delegate.call(this,e_mail,p__17426);};
mail_to17425.cljs$lang$maxFixedArity = 1;
mail_to17425.cljs$lang$applyTo = (function (arglist__17429){
var e_mail = cljs.core.first(arglist__17429);
var p__17426 = cljs.core.rest(arglist__17429);
return mail_to17425__delegate(e_mail,p__17426);
});
mail_to17425.cljs$core$IFn$_invoke$arity$variadic = mail_to17425__delegate;
return mail_to17425;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to17425);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list17430 = (function unordered_list17430(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__8591__auto__ = (function iter__17435(s__17436){return (new cljs.core.LazySeq(null,(function (){var s__17436__$1 = s__17436;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17436__$1);if(temp__4126__auto__)
{var s__17436__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17436__$2))
{var c__8589__auto__ = cljs.core.chunk_first.call(null,s__17436__$2);var size__8590__auto__ = cljs.core.count.call(null,c__8589__auto__);var b__17438 = cljs.core.chunk_buffer.call(null,size__8590__auto__);if((function (){var i__17437 = 0;while(true){
if((i__17437 < size__8590__auto__))
{var x = cljs.core._nth.call(null,c__8589__auto__,i__17437);cljs.core.chunk_append.call(null,b__17438,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__17439 = (i__17437 + 1);
i__17437 = G__17439;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17438),iter__17435.call(null,cljs.core.chunk_rest.call(null,s__17436__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17438),null);
}
} else
{var x = cljs.core.first.call(null,s__17436__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__17435.call(null,cljs.core.rest.call(null,s__17436__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8591__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list17430);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list17440 = (function ordered_list17440(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__8591__auto__ = (function iter__17445(s__17446){return (new cljs.core.LazySeq(null,(function (){var s__17446__$1 = s__17446;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17446__$1);if(temp__4126__auto__)
{var s__17446__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17446__$2))
{var c__8589__auto__ = cljs.core.chunk_first.call(null,s__17446__$2);var size__8590__auto__ = cljs.core.count.call(null,c__8589__auto__);var b__17448 = cljs.core.chunk_buffer.call(null,size__8590__auto__);if((function (){var i__17447 = 0;while(true){
if((i__17447 < size__8590__auto__))
{var x = cljs.core._nth.call(null,c__8589__auto__,i__17447);cljs.core.chunk_append.call(null,b__17448,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__17449 = (i__17447 + 1);
i__17447 = G__17449;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17448),iter__17445.call(null,cljs.core.chunk_rest.call(null,s__17446__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17448),null);
}
} else
{var x = cljs.core.first.call(null,s__17446__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__17445.call(null,cljs.core.rest.call(null,s__17446__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8591__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list17440);
/**
* Create an image element.
*/
sablono.core.image17450 = (function() {
var image17450 = null;
var image17450__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image17450__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image17450 = function(src,alt){
switch(arguments.length){
case 1:
return image17450__1.call(this,src);
case 2:
return image17450__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image17450.cljs$core$IFn$_invoke$arity$1 = image17450__1;
image17450.cljs$core$IFn$_invoke$arity$2 = image17450__2;
return image17450;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image17450);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__17451_SHARP_,p2__17452_SHARP_){return [cljs.core.str(p1__17451_SHARP_),cljs.core.str("["),cljs.core.str(p2__17452_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__17453_SHARP_,p2__17454_SHARP_){return [cljs.core.str(p1__17453_SHARP_),cljs.core.str("-"),cljs.core.str(p2__17454_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field17455 = (function() {
var color_field17455 = null;
var color_field17455__1 = (function (name__9334__auto__){return color_field17455.call(null,name__9334__auto__,null);
});
var color_field17455__2 = (function (name__9334__auto__,value__9335__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1545688804,null))].join(''),name__9334__auto__,value__9335__auto__);
});
color_field17455 = function(name__9334__auto__,value__9335__auto__){
switch(arguments.length){
case 1:
return color_field17455__1.call(this,name__9334__auto__);
case 2:
return color_field17455__2.call(this,name__9334__auto__,value__9335__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field17455.cljs$core$IFn$_invoke$arity$1 = color_field17455__1;
color_field17455.cljs$core$IFn$_invoke$arity$2 = color_field17455__2;
return color_field17455;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field17455);
/**
* Creates a date input field.
*/
sablono.core.date_field17456 = (function() {
var date_field17456 = null;
var date_field17456__1 = (function (name__9334__auto__){return date_field17456.call(null,name__9334__auto__,null);
});
var date_field17456__2 = (function (name__9334__auto__,value__9335__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",-1637455513,null))].join(''),name__9334__auto__,value__9335__auto__);
});
date_field17456 = function(name__9334__auto__,value__9335__auto__){
switch(arguments.length){
case 1:
return date_field17456__1.call(this,name__9334__auto__);
case 2:
return date_field17456__2.call(this,name__9334__auto__,value__9335__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field17456.cljs$core$IFn$_invoke$arity$1 = date_field17456__1;
date_field17456.cljs$core$IFn$_invoke$arity$2 = date_field17456__2;
return date_field17456;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field17456);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field17457 = (function() {
var datetime_field17457 = null;
var datetime_field17457__1 = (function (name__9334__auto__){return datetime_field17457.call(null,name__9334__auto__,null);
});
var datetime_field17457__2 = (function (name__9334__auto__,value__9335__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",153171252,null))].join(''),name__9334__auto__,value__9335__auto__);
});
datetime_field17457 = function(name__9334__auto__,value__9335__auto__){
switch(arguments.length){
case 1:
return datetime_field17457__1.call(this,name__9334__auto__);
case 2:
return datetime_field17457__2.call(this,name__9334__auto__,value__9335__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field17457.cljs$core$IFn$_invoke$arity$1 = datetime_field17457__1;
datetime_field17457.cljs$core$IFn$_invoke$arity$2 = datetime_field17457__2;
return datetime_field17457;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field17457);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field17458 = (function() {
var datetime_local_field17458 = null;
var datetime_local_field17458__1 = (function (name__9334__auto__){return datetime_local_field17458.call(null,name__9334__auto__,null);
});
var datetime_local_field17458__2 = (function (name__9334__auto__,value__9335__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",1631019090,null))].join(''),name__9334__auto__,value__9335__auto__);
});
datetime_local_field17458 = function(name__9334__auto__,value__9335__auto__){
switch(arguments.length){
case 1:
return datetime_local_field17458__1.call(this,name__9334__auto__);
case 2:
return datetime_local_field17458__2.call(this,name__9334__auto__,value__9335__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field17458.cljs$core$IFn$_invoke$arity$1 = datetime_local_field17458__1;
datetime_local_field17458.cljs$core$IFn$_invoke$arity$2 = datetime_local_field17458__2;
return datetime_local_field17458;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field17458);
/**
* Creates a email input field.
*/
sablono.core.email_field17459 = (function() {
var email_field17459 = null;
var email_field17459__1 = (function (name__9334__auto__){return email_field17459.call(null,name__9334__auto__,null);
});
var email_field17459__2 = (function (name__9334__auto__,value__9335__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1543912107,null))].join(''),name__9334__auto__,value__9335__auto__);
});
email_field17459 = function(name__9334__auto__,value__9335__auto__){
switch(arguments.length){
case 1:
return email_field17459__1.call(this,name__9334__auto__);
case 2:
return email_field17459__2.call(this,name__9334__auto__,value__9335__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field17459.cljs$core$IFn$_invoke$arity$1 = email_field17459__1;
email_field17459.cljs$core$IFn$_invoke$arity$2 = email_field17459__2;
return email_field17459;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field17459);
/**
* Creates a file input field.
*/
sablono.core.file_field17460 = (function() {
var file_field17460 = null;
var file_field17460__1 = (function (name__9334__auto__){return file_field17460.call(null,name__9334__auto__,null);
});
var file_field17460__2 = (function (name__9334__auto__,value__9335__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",-1637388491,null))].join(''),name__9334__auto__,value__9335__auto__);
});
file_field17460 = function(name__9334__auto__,value__9335__auto__){
switch(arguments.length){
case 1:
return file_field17460__1.call(this,name__9334__auto__);
case 2:
return file_field17460__2.call(this,name__9334__auto__,value__9335__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field17460.cljs$core$IFn$_invoke$arity$1 = file_field17460__1;
file_field17460.cljs$core$IFn$_invoke$arity$2 = file_field17460__2;
return file_field17460;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field17460);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field17461 = (function() {
var hidden_field17461 = null;
var hidden_field17461__1 = (function (name__9334__auto__){return hidden_field17461.call(null,name__9334__auto__,null);
});
var hidden_field17461__2 = (function (name__9334__auto__,value__9335__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1436948323,null))].join(''),name__9334__auto__,value__9335__auto__);
});
hidden_field17461 = function(name__9334__auto__,value__9335__auto__){
switch(arguments.length){
case 1:
return hidden_field17461__1.call(this,name__9334__auto__);
case 2:
return hidden_field17461__2.call(this,name__9334__auto__,value__9335__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field17461.cljs$core$IFn$_invoke$arity$1 = hidden_field17461__1;
hidden_field17461.cljs$core$IFn$_invoke$arity$2 = hidden_field17461__2;
return hidden_field17461;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field17461);
/**
* Creates a month input field.
*/
sablono.core.month_field17462 = (function() {
var month_field17462 = null;
var month_field17462__1 = (function (name__9334__auto__){return month_field17462.call(null,name__9334__auto__,null);
});
var month_field17462__2 = (function (name__9334__auto__,value__9335__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-1536451527,null))].join(''),name__9334__auto__,value__9335__auto__);
});
month_field17462 = function(name__9334__auto__,value__9335__auto__){
switch(arguments.length){
case 1:
return month_field17462__1.call(this,name__9334__auto__);
case 2:
return month_field17462__2.call(this,name__9334__auto__,value__9335__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field17462.cljs$core$IFn$_invoke$arity$1 = month_field17462__1;
month_field17462.cljs$core$IFn$_invoke$arity$2 = month_field17462__2;
return month_field17462;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field17462);
/**
* Creates a number input field.
*/
sablono.core.number_field17463 = (function() {
var number_field17463 = null;
var number_field17463__1 = (function (name__9334__auto__){return number_field17463.call(null,name__9334__auto__,null);
});
var number_field17463__2 = (function (name__9334__auto__,value__9335__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",1620071682,null))].join(''),name__9334__auto__,value__9335__auto__);
});
number_field17463 = function(name__9334__auto__,value__9335__auto__){
switch(arguments.length){
case 1:
return number_field17463__1.call(this,name__9334__auto__);
case 2:
return number_field17463__2.call(this,name__9334__auto__,value__9335__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field17463.cljs$core$IFn$_invoke$arity$1 = number_field17463__1;
number_field17463.cljs$core$IFn$_invoke$arity$2 = number_field17463__2;
return number_field17463;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field17463);
/**
* Creates a password input field.
*/
sablono.core.password_field17464 = (function() {
var password_field17464 = null;
var password_field17464__1 = (function (name__9334__auto__){return password_field17464.call(null,name__9334__auto__,null);
});
var password_field17464__2 = (function (name__9334__auto__,value__9335__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",-423545772,null))].join(''),name__9334__auto__,value__9335__auto__);
});
password_field17464 = function(name__9334__auto__,value__9335__auto__){
switch(arguments.length){
case 1:
return password_field17464__1.call(this,name__9334__auto__);
case 2:
return password_field17464__2.call(this,name__9334__auto__,value__9335__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field17464.cljs$core$IFn$_invoke$arity$1 = password_field17464__1;
password_field17464.cljs$core$IFn$_invoke$arity$2 = password_field17464__2;
return password_field17464;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field17464);
/**
* Creates a range input field.
*/
sablono.core.range_field17465 = (function() {
var range_field17465 = null;
var range_field17465__1 = (function (name__9334__auto__){return range_field17465.call(null,name__9334__auto__,null);
});
var range_field17465__2 = (function (name__9334__auto__,value__9335__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1532251402,null))].join(''),name__9334__auto__,value__9335__auto__);
});
range_field17465 = function(name__9334__auto__,value__9335__auto__){
switch(arguments.length){
case 1:
return range_field17465__1.call(this,name__9334__auto__);
case 2:
return range_field17465__2.call(this,name__9334__auto__,value__9335__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field17465.cljs$core$IFn$_invoke$arity$1 = range_field17465__1;
range_field17465.cljs$core$IFn$_invoke$arity$2 = range_field17465__2;
return range_field17465;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field17465);
/**
* Creates a search input field.
*/
sablono.core.search_field17466 = (function() {
var search_field17466 = null;
var search_field17466__1 = (function (name__9334__auto__){return search_field17466.call(null,name__9334__auto__,null);
});
var search_field17466__2 = (function (name__9334__auto__,value__9335__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",1748098913,null))].join(''),name__9334__auto__,value__9335__auto__);
});
search_field17466 = function(name__9334__auto__,value__9335__auto__){
switch(arguments.length){
case 1:
return search_field17466__1.call(this,name__9334__auto__);
case 2:
return search_field17466__2.call(this,name__9334__auto__,value__9335__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field17466.cljs$core$IFn$_invoke$arity$1 = search_field17466__1;
search_field17466.cljs$core$IFn$_invoke$arity$2 = search_field17466__2;
return search_field17466;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field17466);
/**
* Creates a tel input field.
*/
sablono.core.tel_field17467 = (function() {
var tel_field17467 = null;
var tel_field17467__1 = (function (name__9334__auto__){return tel_field17467.call(null,name__9334__auto__,null);
});
var tel_field17467__2 = (function (name__9334__auto__,value__9335__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",-1640416812,null))].join(''),name__9334__auto__,value__9335__auto__);
});
tel_field17467 = function(name__9334__auto__,value__9335__auto__){
switch(arguments.length){
case 1:
return tel_field17467__1.call(this,name__9334__auto__);
case 2:
return tel_field17467__2.call(this,name__9334__auto__,value__9335__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field17467.cljs$core$IFn$_invoke$arity$1 = tel_field17467__1;
tel_field17467.cljs$core$IFn$_invoke$arity$2 = tel_field17467__2;
return tel_field17467;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field17467);
/**
* Creates a text input field.
*/
sablono.core.text_field17468 = (function() {
var text_field17468 = null;
var text_field17468__1 = (function (name__9334__auto__){return text_field17468.call(null,name__9334__auto__,null);
});
var text_field17468__2 = (function (name__9334__auto__,value__9335__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-1636974874,null))].join(''),name__9334__auto__,value__9335__auto__);
});
text_field17468 = function(name__9334__auto__,value__9335__auto__){
switch(arguments.length){
case 1:
return text_field17468__1.call(this,name__9334__auto__);
case 2:
return text_field17468__2.call(this,name__9334__auto__,value__9335__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field17468.cljs$core$IFn$_invoke$arity$1 = text_field17468__1;
text_field17468.cljs$core$IFn$_invoke$arity$2 = text_field17468__2;
return text_field17468;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field17468);
/**
* Creates a time input field.
*/
sablono.core.time_field17469 = (function() {
var time_field17469 = null;
var time_field17469__1 = (function (name__9334__auto__){return time_field17469.call(null,name__9334__auto__,null);
});
var time_field17469__2 = (function (name__9334__auto__,value__9335__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1636971386,null))].join(''),name__9334__auto__,value__9335__auto__);
});
time_field17469 = function(name__9334__auto__,value__9335__auto__){
switch(arguments.length){
case 1:
return time_field17469__1.call(this,name__9334__auto__);
case 2:
return time_field17469__2.call(this,name__9334__auto__,value__9335__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field17469.cljs$core$IFn$_invoke$arity$1 = time_field17469__1;
time_field17469.cljs$core$IFn$_invoke$arity$2 = time_field17469__2;
return time_field17469;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field17469);
/**
* Creates a url input field.
*/
sablono.core.url_field17470 = (function() {
var url_field17470 = null;
var url_field17470__1 = (function (name__9334__auto__){return url_field17470.call(null,name__9334__auto__,null);
});
var url_field17470__2 = (function (name__9334__auto__,value__9335__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",-1640415448,null))].join(''),name__9334__auto__,value__9335__auto__);
});
url_field17470 = function(name__9334__auto__,value__9335__auto__){
switch(arguments.length){
case 1:
return url_field17470__1.call(this,name__9334__auto__);
case 2:
return url_field17470__2.call(this,name__9334__auto__,value__9335__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field17470.cljs$core$IFn$_invoke$arity$1 = url_field17470__1;
url_field17470.cljs$core$IFn$_invoke$arity$2 = url_field17470__2;
return url_field17470;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field17470);
/**
* Creates a week input field.
*/
sablono.core.week_field17471 = (function() {
var week_field17471 = null;
var week_field17471__1 = (function (name__9334__auto__){return week_field17471.call(null,name__9334__auto__,null);
});
var week_field17471__2 = (function (name__9334__auto__,value__9335__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",-1636886099,null))].join(''),name__9334__auto__,value__9335__auto__);
});
week_field17471 = function(name__9334__auto__,value__9335__auto__){
switch(arguments.length){
case 1:
return week_field17471__1.call(this,name__9334__auto__);
case 2:
return week_field17471__2.call(this,name__9334__auto__,value__9335__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field17471.cljs$core$IFn$_invoke$arity$1 = week_field17471__1;
week_field17471.cljs$core$IFn$_invoke$arity$2 = week_field17471__2;
return week_field17471;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field17471);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box17472 = (function() {
var check_box17472 = null;
var check_box17472__1 = (function (name){return check_box17472.call(null,name,null);
});
var check_box17472__2 = (function (name,checked_QMARK_){return check_box17472.call(null,name,checked_QMARK_,"true");
});
var check_box17472__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box17472 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box17472__1.call(this,name);
case 2:
return check_box17472__2.call(this,name,checked_QMARK_);
case 3:
return check_box17472__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box17472.cljs$core$IFn$_invoke$arity$1 = check_box17472__1;
check_box17472.cljs$core$IFn$_invoke$arity$2 = check_box17472__2;
check_box17472.cljs$core$IFn$_invoke$arity$3 = check_box17472__3;
return check_box17472;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box17472);
/**
* Creates a radio button.
*/
sablono.core.radio_button17473 = (function() {
var radio_button17473 = null;
var radio_button17473__1 = (function (group){return radio_button17473.call(null,group,null);
});
var radio_button17473__2 = (function (group,checked_QMARK_){return radio_button17473.call(null,group,checked_QMARK_,"true");
});
var radio_button17473__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button17473 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button17473__1.call(this,group);
case 2:
return radio_button17473__2.call(this,group,checked_QMARK_);
case 3:
return radio_button17473__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button17473.cljs$core$IFn$_invoke$arity$1 = radio_button17473__1;
radio_button17473.cljs$core$IFn$_invoke$arity$2 = radio_button17473__2;
radio_button17473.cljs$core$IFn$_invoke$arity$3 = radio_button17473__3;
return radio_button17473;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button17473);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options17474 = (function() {
var select_options17474 = null;
var select_options17474__1 = (function (coll){return select_options17474.call(null,coll,null);
});
var select_options17474__2 = (function (coll,selected){var iter__8591__auto__ = (function iter__17483(s__17484){return (new cljs.core.LazySeq(null,(function (){var s__17484__$1 = s__17484;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17484__$1);if(temp__4126__auto__)
{var s__17484__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17484__$2))
{var c__8589__auto__ = cljs.core.chunk_first.call(null,s__17484__$2);var size__8590__auto__ = cljs.core.count.call(null,c__8589__auto__);var b__17486 = cljs.core.chunk_buffer.call(null,size__8590__auto__);if((function (){var i__17485 = 0;while(true){
if((i__17485 < size__8590__auto__))
{var x = cljs.core._nth.call(null,c__8589__auto__,i__17485);cljs.core.chunk_append.call(null,b__17486,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17489 = x;var text = cljs.core.nth.call(null,vec__17489,0,null);var val = cljs.core.nth.call(null,vec__17489,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__17489,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options17474.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__17491 = (i__17485 + 1);
i__17485 = G__17491;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17486),iter__17483.call(null,cljs.core.chunk_rest.call(null,s__17484__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17486),null);
}
} else
{var x = cljs.core.first.call(null,s__17484__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17490 = x;var text = cljs.core.nth.call(null,vec__17490,0,null);var val = cljs.core.nth.call(null,vec__17490,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__17490,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options17474.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__17483.call(null,cljs.core.rest.call(null,s__17484__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8591__auto__.call(null,coll);
});
select_options17474 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options17474__1.call(this,coll);
case 2:
return select_options17474__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options17474.cljs$core$IFn$_invoke$arity$1 = select_options17474__1;
select_options17474.cljs$core$IFn$_invoke$arity$2 = select_options17474__2;
return select_options17474;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options17474);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down17492 = (function() {
var drop_down17492 = null;
var drop_down17492__2 = (function (name,options){return drop_down17492.call(null,name,options,null);
});
var drop_down17492__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down17492 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down17492__2.call(this,name,options);
case 3:
return drop_down17492__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down17492.cljs$core$IFn$_invoke$arity$2 = drop_down17492__2;
drop_down17492.cljs$core$IFn$_invoke$arity$3 = drop_down17492__3;
return drop_down17492;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down17492);
/**
* Creates a text area element.
*/
sablono.core.text_area17493 = (function() {
var text_area17493 = null;
var text_area17493__1 = (function (name){return text_area17493.call(null,name,null);
});
var text_area17493__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area17493 = function(name,value){
switch(arguments.length){
case 1:
return text_area17493__1.call(this,name);
case 2:
return text_area17493__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area17493.cljs$core$IFn$_invoke$arity$1 = text_area17493__1;
text_area17493.cljs$core$IFn$_invoke$arity$2 = text_area17493__2;
return text_area17493;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area17493);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label17494 = (function label17494(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label17494);
/**
* Creates a submit button.
*/
sablono.core.submit_button17495 = (function submit_button17495(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button17495);
/**
* Creates a form reset button.
*/
sablono.core.reset_button17496 = (function reset_button17496(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button17496);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to17497 = (function() { 
var form_to17497__delegate = function (p__17498,body){var vec__17500 = p__17498;var method = cljs.core.nth.call(null,vec__17500,0,null);var action = cljs.core.nth.call(null,vec__17500,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to17497 = function (p__17498,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to17497__delegate.call(this,p__17498,body);};
form_to17497.cljs$lang$maxFixedArity = 1;
form_to17497.cljs$lang$applyTo = (function (arglist__17501){
var p__17498 = cljs.core.first(arglist__17501);
var body = cljs.core.rest(arglist__17501);
return form_to17497__delegate(p__17498,body);
});
form_to17497.cljs$core$IFn$_invoke$arity$variadic = form_to17497__delegate;
return form_to17497;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to17497);

//# sourceMappingURL=core.js.map