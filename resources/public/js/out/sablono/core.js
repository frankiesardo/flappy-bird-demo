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
var G__27994__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__27993 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__27993,0,null);var body = cljs.core.nthnext.call(null,vec__27993,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__27994 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__27994__delegate.call(this,args);};
G__27994.cljs$lang$maxFixedArity = 0;
G__27994.cljs$lang$applyTo = (function (arglist__27995){
var args = cljs.core.seq(arglist__27995);
return G__27994__delegate(args);
});
G__27994.cljs$core$IFn$_invoke$arity$variadic = G__27994__delegate;
return G__27994;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__8592__auto__ = (function iter__28000(s__28001){return (new cljs.core.LazySeq(null,(function (){var s__28001__$1 = s__28001;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28001__$1);if(temp__4126__auto__)
{var s__28001__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28001__$2))
{var c__8590__auto__ = cljs.core.chunk_first.call(null,s__28001__$2);var size__8591__auto__ = cljs.core.count.call(null,c__8590__auto__);var b__28003 = cljs.core.chunk_buffer.call(null,size__8591__auto__);if((function (){var i__28002 = 0;while(true){
if((i__28002 < size__8591__auto__))
{var args = cljs.core._nth.call(null,c__8590__auto__,i__28002);cljs.core.chunk_append.call(null,b__28003,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__28004 = (i__28002 + 1);
i__28002 = G__28004;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28003),iter__28000.call(null,cljs.core.chunk_rest.call(null,s__28001__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28003),null);
}
} else
{var args = cljs.core.first.call(null,s__28001__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__28000.call(null,cljs.core.rest.call(null,s__28001__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8592__auto__.call(null,arglists);
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
var include_css__delegate = function (styles){var iter__8592__auto__ = (function iter__28009(s__28010){return (new cljs.core.LazySeq(null,(function (){var s__28010__$1 = s__28010;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28010__$1);if(temp__4126__auto__)
{var s__28010__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28010__$2))
{var c__8590__auto__ = cljs.core.chunk_first.call(null,s__28010__$2);var size__8591__auto__ = cljs.core.count.call(null,c__8590__auto__);var b__28012 = cljs.core.chunk_buffer.call(null,size__8591__auto__);if((function (){var i__28011 = 0;while(true){
if((i__28011 < size__8591__auto__))
{var style = cljs.core._nth.call(null,c__8590__auto__,i__28011);cljs.core.chunk_append.call(null,b__28012,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__28013 = (i__28011 + 1);
i__28011 = G__28013;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28012),iter__28009.call(null,cljs.core.chunk_rest.call(null,s__28010__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28012),null);
}
} else
{var style = cljs.core.first.call(null,s__28010__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__28009.call(null,cljs.core.rest.call(null,s__28010__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8592__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__28014){
var styles = cljs.core.seq(arglist__28014);
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
sablono.core.link_to28015 = (function() { 
var link_to28015__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to28015 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to28015__delegate.call(this,url,content);};
link_to28015.cljs$lang$maxFixedArity = 1;
link_to28015.cljs$lang$applyTo = (function (arglist__28016){
var url = cljs.core.first(arglist__28016);
var content = cljs.core.rest(arglist__28016);
return link_to28015__delegate(url,content);
});
link_to28015.cljs$core$IFn$_invoke$arity$variadic = link_to28015__delegate;
return link_to28015;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to28015);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to28017 = (function() { 
var mail_to28017__delegate = function (e_mail,p__28018){var vec__28020 = p__28018;var content = cljs.core.nth.call(null,vec__28020,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__7875__auto__ = content;if(cljs.core.truth_(or__7875__auto__))
{return or__7875__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to28017 = function (e_mail,var_args){
var p__28018 = null;if (arguments.length > 1) {
  p__28018 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to28017__delegate.call(this,e_mail,p__28018);};
mail_to28017.cljs$lang$maxFixedArity = 1;
mail_to28017.cljs$lang$applyTo = (function (arglist__28021){
var e_mail = cljs.core.first(arglist__28021);
var p__28018 = cljs.core.rest(arglist__28021);
return mail_to28017__delegate(e_mail,p__28018);
});
mail_to28017.cljs$core$IFn$_invoke$arity$variadic = mail_to28017__delegate;
return mail_to28017;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to28017);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list28022 = (function unordered_list28022(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__8592__auto__ = (function iter__28027(s__28028){return (new cljs.core.LazySeq(null,(function (){var s__28028__$1 = s__28028;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28028__$1);if(temp__4126__auto__)
{var s__28028__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28028__$2))
{var c__8590__auto__ = cljs.core.chunk_first.call(null,s__28028__$2);var size__8591__auto__ = cljs.core.count.call(null,c__8590__auto__);var b__28030 = cljs.core.chunk_buffer.call(null,size__8591__auto__);if((function (){var i__28029 = 0;while(true){
if((i__28029 < size__8591__auto__))
{var x = cljs.core._nth.call(null,c__8590__auto__,i__28029);cljs.core.chunk_append.call(null,b__28030,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__28031 = (i__28029 + 1);
i__28029 = G__28031;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28030),iter__28027.call(null,cljs.core.chunk_rest.call(null,s__28028__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28030),null);
}
} else
{var x = cljs.core.first.call(null,s__28028__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__28027.call(null,cljs.core.rest.call(null,s__28028__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8592__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list28022);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list28032 = (function ordered_list28032(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__8592__auto__ = (function iter__28037(s__28038){return (new cljs.core.LazySeq(null,(function (){var s__28038__$1 = s__28038;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28038__$1);if(temp__4126__auto__)
{var s__28038__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28038__$2))
{var c__8590__auto__ = cljs.core.chunk_first.call(null,s__28038__$2);var size__8591__auto__ = cljs.core.count.call(null,c__8590__auto__);var b__28040 = cljs.core.chunk_buffer.call(null,size__8591__auto__);if((function (){var i__28039 = 0;while(true){
if((i__28039 < size__8591__auto__))
{var x = cljs.core._nth.call(null,c__8590__auto__,i__28039);cljs.core.chunk_append.call(null,b__28040,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__28041 = (i__28039 + 1);
i__28039 = G__28041;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28040),iter__28037.call(null,cljs.core.chunk_rest.call(null,s__28038__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28040),null);
}
} else
{var x = cljs.core.first.call(null,s__28038__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__28037.call(null,cljs.core.rest.call(null,s__28038__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8592__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list28032);
/**
* Create an image element.
*/
sablono.core.image28042 = (function() {
var image28042 = null;
var image28042__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image28042__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image28042 = function(src,alt){
switch(arguments.length){
case 1:
return image28042__1.call(this,src);
case 2:
return image28042__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image28042.cljs$core$IFn$_invoke$arity$1 = image28042__1;
image28042.cljs$core$IFn$_invoke$arity$2 = image28042__2;
return image28042;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image28042);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__28043_SHARP_,p2__28044_SHARP_){return [cljs.core.str(p1__28043_SHARP_),cljs.core.str("["),cljs.core.str(p2__28044_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__28045_SHARP_,p2__28046_SHARP_){return [cljs.core.str(p1__28045_SHARP_),cljs.core.str("-"),cljs.core.str(p2__28046_SHARP_)].join('');
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
sablono.core.color_field28047 = (function() {
var color_field28047 = null;
var color_field28047__1 = (function (name__9335__auto__){return color_field28047.call(null,name__9335__auto__,null);
});
var color_field28047__2 = (function (name__9335__auto__,value__9336__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1545688804,null))].join(''),name__9335__auto__,value__9336__auto__);
});
color_field28047 = function(name__9335__auto__,value__9336__auto__){
switch(arguments.length){
case 1:
return color_field28047__1.call(this,name__9335__auto__);
case 2:
return color_field28047__2.call(this,name__9335__auto__,value__9336__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field28047.cljs$core$IFn$_invoke$arity$1 = color_field28047__1;
color_field28047.cljs$core$IFn$_invoke$arity$2 = color_field28047__2;
return color_field28047;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field28047);
/**
* Creates a date input field.
*/
sablono.core.date_field28048 = (function() {
var date_field28048 = null;
var date_field28048__1 = (function (name__9335__auto__){return date_field28048.call(null,name__9335__auto__,null);
});
var date_field28048__2 = (function (name__9335__auto__,value__9336__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",-1637455513,null))].join(''),name__9335__auto__,value__9336__auto__);
});
date_field28048 = function(name__9335__auto__,value__9336__auto__){
switch(arguments.length){
case 1:
return date_field28048__1.call(this,name__9335__auto__);
case 2:
return date_field28048__2.call(this,name__9335__auto__,value__9336__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field28048.cljs$core$IFn$_invoke$arity$1 = date_field28048__1;
date_field28048.cljs$core$IFn$_invoke$arity$2 = date_field28048__2;
return date_field28048;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field28048);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field28049 = (function() {
var datetime_field28049 = null;
var datetime_field28049__1 = (function (name__9335__auto__){return datetime_field28049.call(null,name__9335__auto__,null);
});
var datetime_field28049__2 = (function (name__9335__auto__,value__9336__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",153171252,null))].join(''),name__9335__auto__,value__9336__auto__);
});
datetime_field28049 = function(name__9335__auto__,value__9336__auto__){
switch(arguments.length){
case 1:
return datetime_field28049__1.call(this,name__9335__auto__);
case 2:
return datetime_field28049__2.call(this,name__9335__auto__,value__9336__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field28049.cljs$core$IFn$_invoke$arity$1 = datetime_field28049__1;
datetime_field28049.cljs$core$IFn$_invoke$arity$2 = datetime_field28049__2;
return datetime_field28049;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field28049);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field28050 = (function() {
var datetime_local_field28050 = null;
var datetime_local_field28050__1 = (function (name__9335__auto__){return datetime_local_field28050.call(null,name__9335__auto__,null);
});
var datetime_local_field28050__2 = (function (name__9335__auto__,value__9336__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",1631019090,null))].join(''),name__9335__auto__,value__9336__auto__);
});
datetime_local_field28050 = function(name__9335__auto__,value__9336__auto__){
switch(arguments.length){
case 1:
return datetime_local_field28050__1.call(this,name__9335__auto__);
case 2:
return datetime_local_field28050__2.call(this,name__9335__auto__,value__9336__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field28050.cljs$core$IFn$_invoke$arity$1 = datetime_local_field28050__1;
datetime_local_field28050.cljs$core$IFn$_invoke$arity$2 = datetime_local_field28050__2;
return datetime_local_field28050;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field28050);
/**
* Creates a email input field.
*/
sablono.core.email_field28051 = (function() {
var email_field28051 = null;
var email_field28051__1 = (function (name__9335__auto__){return email_field28051.call(null,name__9335__auto__,null);
});
var email_field28051__2 = (function (name__9335__auto__,value__9336__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1543912107,null))].join(''),name__9335__auto__,value__9336__auto__);
});
email_field28051 = function(name__9335__auto__,value__9336__auto__){
switch(arguments.length){
case 1:
return email_field28051__1.call(this,name__9335__auto__);
case 2:
return email_field28051__2.call(this,name__9335__auto__,value__9336__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field28051.cljs$core$IFn$_invoke$arity$1 = email_field28051__1;
email_field28051.cljs$core$IFn$_invoke$arity$2 = email_field28051__2;
return email_field28051;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field28051);
/**
* Creates a file input field.
*/
sablono.core.file_field28052 = (function() {
var file_field28052 = null;
var file_field28052__1 = (function (name__9335__auto__){return file_field28052.call(null,name__9335__auto__,null);
});
var file_field28052__2 = (function (name__9335__auto__,value__9336__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",-1637388491,null))].join(''),name__9335__auto__,value__9336__auto__);
});
file_field28052 = function(name__9335__auto__,value__9336__auto__){
switch(arguments.length){
case 1:
return file_field28052__1.call(this,name__9335__auto__);
case 2:
return file_field28052__2.call(this,name__9335__auto__,value__9336__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field28052.cljs$core$IFn$_invoke$arity$1 = file_field28052__1;
file_field28052.cljs$core$IFn$_invoke$arity$2 = file_field28052__2;
return file_field28052;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field28052);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field28053 = (function() {
var hidden_field28053 = null;
var hidden_field28053__1 = (function (name__9335__auto__){return hidden_field28053.call(null,name__9335__auto__,null);
});
var hidden_field28053__2 = (function (name__9335__auto__,value__9336__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1436948323,null))].join(''),name__9335__auto__,value__9336__auto__);
});
hidden_field28053 = function(name__9335__auto__,value__9336__auto__){
switch(arguments.length){
case 1:
return hidden_field28053__1.call(this,name__9335__auto__);
case 2:
return hidden_field28053__2.call(this,name__9335__auto__,value__9336__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field28053.cljs$core$IFn$_invoke$arity$1 = hidden_field28053__1;
hidden_field28053.cljs$core$IFn$_invoke$arity$2 = hidden_field28053__2;
return hidden_field28053;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field28053);
/**
* Creates a month input field.
*/
sablono.core.month_field28054 = (function() {
var month_field28054 = null;
var month_field28054__1 = (function (name__9335__auto__){return month_field28054.call(null,name__9335__auto__,null);
});
var month_field28054__2 = (function (name__9335__auto__,value__9336__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-1536451527,null))].join(''),name__9335__auto__,value__9336__auto__);
});
month_field28054 = function(name__9335__auto__,value__9336__auto__){
switch(arguments.length){
case 1:
return month_field28054__1.call(this,name__9335__auto__);
case 2:
return month_field28054__2.call(this,name__9335__auto__,value__9336__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field28054.cljs$core$IFn$_invoke$arity$1 = month_field28054__1;
month_field28054.cljs$core$IFn$_invoke$arity$2 = month_field28054__2;
return month_field28054;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field28054);
/**
* Creates a number input field.
*/
sablono.core.number_field28055 = (function() {
var number_field28055 = null;
var number_field28055__1 = (function (name__9335__auto__){return number_field28055.call(null,name__9335__auto__,null);
});
var number_field28055__2 = (function (name__9335__auto__,value__9336__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",1620071682,null))].join(''),name__9335__auto__,value__9336__auto__);
});
number_field28055 = function(name__9335__auto__,value__9336__auto__){
switch(arguments.length){
case 1:
return number_field28055__1.call(this,name__9335__auto__);
case 2:
return number_field28055__2.call(this,name__9335__auto__,value__9336__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field28055.cljs$core$IFn$_invoke$arity$1 = number_field28055__1;
number_field28055.cljs$core$IFn$_invoke$arity$2 = number_field28055__2;
return number_field28055;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field28055);
/**
* Creates a password input field.
*/
sablono.core.password_field28056 = (function() {
var password_field28056 = null;
var password_field28056__1 = (function (name__9335__auto__){return password_field28056.call(null,name__9335__auto__,null);
});
var password_field28056__2 = (function (name__9335__auto__,value__9336__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",-423545772,null))].join(''),name__9335__auto__,value__9336__auto__);
});
password_field28056 = function(name__9335__auto__,value__9336__auto__){
switch(arguments.length){
case 1:
return password_field28056__1.call(this,name__9335__auto__);
case 2:
return password_field28056__2.call(this,name__9335__auto__,value__9336__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field28056.cljs$core$IFn$_invoke$arity$1 = password_field28056__1;
password_field28056.cljs$core$IFn$_invoke$arity$2 = password_field28056__2;
return password_field28056;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field28056);
/**
* Creates a range input field.
*/
sablono.core.range_field28057 = (function() {
var range_field28057 = null;
var range_field28057__1 = (function (name__9335__auto__){return range_field28057.call(null,name__9335__auto__,null);
});
var range_field28057__2 = (function (name__9335__auto__,value__9336__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1532251402,null))].join(''),name__9335__auto__,value__9336__auto__);
});
range_field28057 = function(name__9335__auto__,value__9336__auto__){
switch(arguments.length){
case 1:
return range_field28057__1.call(this,name__9335__auto__);
case 2:
return range_field28057__2.call(this,name__9335__auto__,value__9336__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field28057.cljs$core$IFn$_invoke$arity$1 = range_field28057__1;
range_field28057.cljs$core$IFn$_invoke$arity$2 = range_field28057__2;
return range_field28057;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field28057);
/**
* Creates a search input field.
*/
sablono.core.search_field28058 = (function() {
var search_field28058 = null;
var search_field28058__1 = (function (name__9335__auto__){return search_field28058.call(null,name__9335__auto__,null);
});
var search_field28058__2 = (function (name__9335__auto__,value__9336__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",1748098913,null))].join(''),name__9335__auto__,value__9336__auto__);
});
search_field28058 = function(name__9335__auto__,value__9336__auto__){
switch(arguments.length){
case 1:
return search_field28058__1.call(this,name__9335__auto__);
case 2:
return search_field28058__2.call(this,name__9335__auto__,value__9336__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field28058.cljs$core$IFn$_invoke$arity$1 = search_field28058__1;
search_field28058.cljs$core$IFn$_invoke$arity$2 = search_field28058__2;
return search_field28058;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field28058);
/**
* Creates a tel input field.
*/
sablono.core.tel_field28059 = (function() {
var tel_field28059 = null;
var tel_field28059__1 = (function (name__9335__auto__){return tel_field28059.call(null,name__9335__auto__,null);
});
var tel_field28059__2 = (function (name__9335__auto__,value__9336__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",-1640416812,null))].join(''),name__9335__auto__,value__9336__auto__);
});
tel_field28059 = function(name__9335__auto__,value__9336__auto__){
switch(arguments.length){
case 1:
return tel_field28059__1.call(this,name__9335__auto__);
case 2:
return tel_field28059__2.call(this,name__9335__auto__,value__9336__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field28059.cljs$core$IFn$_invoke$arity$1 = tel_field28059__1;
tel_field28059.cljs$core$IFn$_invoke$arity$2 = tel_field28059__2;
return tel_field28059;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field28059);
/**
* Creates a text input field.
*/
sablono.core.text_field28060 = (function() {
var text_field28060 = null;
var text_field28060__1 = (function (name__9335__auto__){return text_field28060.call(null,name__9335__auto__,null);
});
var text_field28060__2 = (function (name__9335__auto__,value__9336__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-1636974874,null))].join(''),name__9335__auto__,value__9336__auto__);
});
text_field28060 = function(name__9335__auto__,value__9336__auto__){
switch(arguments.length){
case 1:
return text_field28060__1.call(this,name__9335__auto__);
case 2:
return text_field28060__2.call(this,name__9335__auto__,value__9336__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field28060.cljs$core$IFn$_invoke$arity$1 = text_field28060__1;
text_field28060.cljs$core$IFn$_invoke$arity$2 = text_field28060__2;
return text_field28060;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field28060);
/**
* Creates a time input field.
*/
sablono.core.time_field28061 = (function() {
var time_field28061 = null;
var time_field28061__1 = (function (name__9335__auto__){return time_field28061.call(null,name__9335__auto__,null);
});
var time_field28061__2 = (function (name__9335__auto__,value__9336__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1636971386,null))].join(''),name__9335__auto__,value__9336__auto__);
});
time_field28061 = function(name__9335__auto__,value__9336__auto__){
switch(arguments.length){
case 1:
return time_field28061__1.call(this,name__9335__auto__);
case 2:
return time_field28061__2.call(this,name__9335__auto__,value__9336__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field28061.cljs$core$IFn$_invoke$arity$1 = time_field28061__1;
time_field28061.cljs$core$IFn$_invoke$arity$2 = time_field28061__2;
return time_field28061;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field28061);
/**
* Creates a url input field.
*/
sablono.core.url_field28062 = (function() {
var url_field28062 = null;
var url_field28062__1 = (function (name__9335__auto__){return url_field28062.call(null,name__9335__auto__,null);
});
var url_field28062__2 = (function (name__9335__auto__,value__9336__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",-1640415448,null))].join(''),name__9335__auto__,value__9336__auto__);
});
url_field28062 = function(name__9335__auto__,value__9336__auto__){
switch(arguments.length){
case 1:
return url_field28062__1.call(this,name__9335__auto__);
case 2:
return url_field28062__2.call(this,name__9335__auto__,value__9336__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field28062.cljs$core$IFn$_invoke$arity$1 = url_field28062__1;
url_field28062.cljs$core$IFn$_invoke$arity$2 = url_field28062__2;
return url_field28062;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field28062);
/**
* Creates a week input field.
*/
sablono.core.week_field28063 = (function() {
var week_field28063 = null;
var week_field28063__1 = (function (name__9335__auto__){return week_field28063.call(null,name__9335__auto__,null);
});
var week_field28063__2 = (function (name__9335__auto__,value__9336__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",-1636886099,null))].join(''),name__9335__auto__,value__9336__auto__);
});
week_field28063 = function(name__9335__auto__,value__9336__auto__){
switch(arguments.length){
case 1:
return week_field28063__1.call(this,name__9335__auto__);
case 2:
return week_field28063__2.call(this,name__9335__auto__,value__9336__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field28063.cljs$core$IFn$_invoke$arity$1 = week_field28063__1;
week_field28063.cljs$core$IFn$_invoke$arity$2 = week_field28063__2;
return week_field28063;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field28063);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box28064 = (function() {
var check_box28064 = null;
var check_box28064__1 = (function (name){return check_box28064.call(null,name,null);
});
var check_box28064__2 = (function (name,checked_QMARK_){return check_box28064.call(null,name,checked_QMARK_,"true");
});
var check_box28064__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box28064 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box28064__1.call(this,name);
case 2:
return check_box28064__2.call(this,name,checked_QMARK_);
case 3:
return check_box28064__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box28064.cljs$core$IFn$_invoke$arity$1 = check_box28064__1;
check_box28064.cljs$core$IFn$_invoke$arity$2 = check_box28064__2;
check_box28064.cljs$core$IFn$_invoke$arity$3 = check_box28064__3;
return check_box28064;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box28064);
/**
* Creates a radio button.
*/
sablono.core.radio_button28065 = (function() {
var radio_button28065 = null;
var radio_button28065__1 = (function (group){return radio_button28065.call(null,group,null);
});
var radio_button28065__2 = (function (group,checked_QMARK_){return radio_button28065.call(null,group,checked_QMARK_,"true");
});
var radio_button28065__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button28065 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button28065__1.call(this,group);
case 2:
return radio_button28065__2.call(this,group,checked_QMARK_);
case 3:
return radio_button28065__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button28065.cljs$core$IFn$_invoke$arity$1 = radio_button28065__1;
radio_button28065.cljs$core$IFn$_invoke$arity$2 = radio_button28065__2;
radio_button28065.cljs$core$IFn$_invoke$arity$3 = radio_button28065__3;
return radio_button28065;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button28065);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options28066 = (function() {
var select_options28066 = null;
var select_options28066__1 = (function (coll){return select_options28066.call(null,coll,null);
});
var select_options28066__2 = (function (coll,selected){var iter__8592__auto__ = (function iter__28075(s__28076){return (new cljs.core.LazySeq(null,(function (){var s__28076__$1 = s__28076;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28076__$1);if(temp__4126__auto__)
{var s__28076__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28076__$2))
{var c__8590__auto__ = cljs.core.chunk_first.call(null,s__28076__$2);var size__8591__auto__ = cljs.core.count.call(null,c__8590__auto__);var b__28078 = cljs.core.chunk_buffer.call(null,size__8591__auto__);if((function (){var i__28077 = 0;while(true){
if((i__28077 < size__8591__auto__))
{var x = cljs.core._nth.call(null,c__8590__auto__,i__28077);cljs.core.chunk_append.call(null,b__28078,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__28081 = x;var text = cljs.core.nth.call(null,vec__28081,0,null);var val = cljs.core.nth.call(null,vec__28081,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__28081,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options28066.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__28083 = (i__28077 + 1);
i__28077 = G__28083;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28078),iter__28075.call(null,cljs.core.chunk_rest.call(null,s__28076__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28078),null);
}
} else
{var x = cljs.core.first.call(null,s__28076__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__28082 = x;var text = cljs.core.nth.call(null,vec__28082,0,null);var val = cljs.core.nth.call(null,vec__28082,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__28082,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options28066.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__28075.call(null,cljs.core.rest.call(null,s__28076__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8592__auto__.call(null,coll);
});
select_options28066 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options28066__1.call(this,coll);
case 2:
return select_options28066__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options28066.cljs$core$IFn$_invoke$arity$1 = select_options28066__1;
select_options28066.cljs$core$IFn$_invoke$arity$2 = select_options28066__2;
return select_options28066;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options28066);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down28084 = (function() {
var drop_down28084 = null;
var drop_down28084__2 = (function (name,options){return drop_down28084.call(null,name,options,null);
});
var drop_down28084__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down28084 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down28084__2.call(this,name,options);
case 3:
return drop_down28084__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down28084.cljs$core$IFn$_invoke$arity$2 = drop_down28084__2;
drop_down28084.cljs$core$IFn$_invoke$arity$3 = drop_down28084__3;
return drop_down28084;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down28084);
/**
* Creates a text area element.
*/
sablono.core.text_area28085 = (function() {
var text_area28085 = null;
var text_area28085__1 = (function (name){return text_area28085.call(null,name,null);
});
var text_area28085__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area28085 = function(name,value){
switch(arguments.length){
case 1:
return text_area28085__1.call(this,name);
case 2:
return text_area28085__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area28085.cljs$core$IFn$_invoke$arity$1 = text_area28085__1;
text_area28085.cljs$core$IFn$_invoke$arity$2 = text_area28085__2;
return text_area28085;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area28085);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label28086 = (function label28086(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label28086);
/**
* Creates a submit button.
*/
sablono.core.submit_button28087 = (function submit_button28087(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button28087);
/**
* Creates a form reset button.
*/
sablono.core.reset_button28088 = (function reset_button28088(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button28088);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to28089 = (function() { 
var form_to28089__delegate = function (p__28090,body){var vec__28092 = p__28090;var method = cljs.core.nth.call(null,vec__28092,0,null);var action = cljs.core.nth.call(null,vec__28092,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to28089 = function (p__28090,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to28089__delegate.call(this,p__28090,body);};
form_to28089.cljs$lang$maxFixedArity = 1;
form_to28089.cljs$lang$applyTo = (function (arglist__28093){
var p__28090 = cljs.core.first(arglist__28093);
var body = cljs.core.rest(arglist__28093);
return form_to28089__delegate(p__28090,body);
});
form_to28089.cljs$core$IFn$_invoke$arity$variadic = form_to28089__delegate;
return form_to28089;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to28089);

//# sourceMappingURL=core.js.map