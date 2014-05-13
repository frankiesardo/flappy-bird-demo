// Compiled by ClojureScript 0.0-2202
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
figwheel.client.log_style = "color:rgb(0,128,0);";
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__28168,args){var map__28170 = p__28168;var map__28170__$1 = ((cljs.core.seq_QMARK_.call(null,map__28170))?cljs.core.apply.call(null,cljs.core.hash_map,map__28170):map__28170);var debug = cljs.core.get.call(null,map__28170__$1,new cljs.core.Keyword(null,"debug","debug",1109363141));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__28168,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__28168,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__28171){
var p__28168 = cljs.core.first(arglist__28171);
var args = cljs.core.rest(arglist__28171);
return log__delegate(p__28168,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.add_cache_buster = (function add_cache_buster(url){return [cljs.core.str(url),cljs.core.str("?rel="),cljs.core.str((new Date()).getTime())].join('');
});
figwheel.client.js_reload = (function js_reload(p__28172,callback){var map__28174 = p__28172;var map__28174__$1 = ((cljs.core.seq_QMARK_.call(null,map__28174))?cljs.core.apply.call(null,cljs.core.hash_map,map__28174):map__28174);var msg = map__28174__$1;var dependency_file = cljs.core.get.call(null,map__28174__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",2750516784));var namespace = cljs.core.get.call(null,map__28174__$1,new cljs.core.Keyword(null,"namespace","namespace",2266122445));var file = cljs.core.get.call(null,map__28174__$1,new cljs.core.Keyword(null,"file","file",1017047278));if(cljs.core.truth_((function (){var or__7875__auto__ = dependency_file;if(cljs.core.truth_(or__7875__auto__))
{return or__7875__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,file)).addCallback(((function (map__28174,map__28174__$1,msg,dependency_file,namespace,file){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file], null));
});})(map__28174,map__28174__$1,msg,dependency_file,namespace,file))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.reload_js_files = (function reload_js_files(p__28175,callback){var map__28211 = p__28175;var map__28211__$1 = ((cljs.core.seq_QMARK_.call(null,map__28211))?cljs.core.apply.call(null,cljs.core.hash_map,map__28211):map__28211);var files = cljs.core.get.call(null,map__28211__$1,new cljs.core.Keyword(null,"files","files",1111338473));var c__10330__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10330__auto__,map__28211,map__28211__$1,files){
return (function (){var f__10331__auto__ = (function (){var switch__10315__auto__ = ((function (c__10330__auto__,map__28211,map__28211__$1,files){
return (function (state_28230){var state_val_28231 = (state_28230[1]);if((state_val_28231 === 6))
{var inst_28214 = (state_28230[7]);var inst_28222 = (state_28230[2]);var inst_28223 = [inst_28214];var inst_28224 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_28223,null));var inst_28225 = cljs.core.apply.call(null,callback,inst_28224);var state_28230__$1 = (function (){var statearr_28232 = state_28230;(statearr_28232[8] = inst_28222);
return statearr_28232;
})();var statearr_28233_28246 = state_28230__$1;(statearr_28233_28246[2] = inst_28225);
(statearr_28233_28246[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28231 === 5))
{var inst_28228 = (state_28230[2]);var state_28230__$1 = state_28230;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28230__$1,inst_28228);
} else
{if((state_val_28231 === 4))
{var state_28230__$1 = state_28230;var statearr_28234_28247 = state_28230__$1;(statearr_28234_28247[2] = null);
(statearr_28234_28247[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28231 === 3))
{var inst_28214 = (state_28230[7]);var inst_28217 = console.log("%cFigwheel: loading these files",figwheel.client.log_style);var inst_28218 = cljs.core.clj__GT_js.call(null,inst_28214);var inst_28219 = console.log(inst_28218);var inst_28220 = cljs.core.async.timeout.call(null,10);var state_28230__$1 = (function (){var statearr_28235 = state_28230;(statearr_28235[9] = inst_28219);
(statearr_28235[10] = inst_28217);
return statearr_28235;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28230__$1,6,inst_28220);
} else
{if((state_val_28231 === 2))
{var inst_28214 = (state_28230[7]);var inst_28214__$1 = (state_28230[2]);var inst_28215 = cljs.core.not_empty.call(null,inst_28214__$1);var state_28230__$1 = (function (){var statearr_28236 = state_28230;(statearr_28236[7] = inst_28214__$1);
return statearr_28236;
})();if(cljs.core.truth_(inst_28215))
{var statearr_28237_28248 = state_28230__$1;(statearr_28237_28248[1] = 3);
} else
{var statearr_28238_28249 = state_28230__$1;(statearr_28238_28249[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28231 === 1))
{var inst_28212 = figwheel.client.load_all_js_files.call(null,files);var state_28230__$1 = state_28230;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28230__$1,2,inst_28212);
} else
{return null;
}
}
}
}
}
}
});})(c__10330__auto__,map__28211,map__28211__$1,files))
;return ((function (switch__10315__auto__,c__10330__auto__,map__28211,map__28211__$1,files){
return (function() {
var state_machine__10316__auto__ = null;
var state_machine__10316__auto____0 = (function (){var statearr_28242 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_28242[0] = state_machine__10316__auto__);
(statearr_28242[1] = 1);
return statearr_28242;
});
var state_machine__10316__auto____1 = (function (state_28230){while(true){
var ret_value__10317__auto__ = (function (){try{while(true){
var result__10318__auto__ = switch__10315__auto__.call(null,state_28230);if(cljs.core.keyword_identical_QMARK_.call(null,result__10318__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10318__auto__;
}
break;
}
}catch (e28243){if((e28243 instanceof Object))
{var ex__10319__auto__ = e28243;var statearr_28244_28250 = state_28230;(statearr_28244_28250[5] = ex__10319__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28230);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28243;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10317__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28251 = state_28230;
state_28230 = G__28251;
continue;
}
} else
{return ret_value__10317__auto__;
}
break;
}
});
state_machine__10316__auto__ = function(state_28230){
switch(arguments.length){
case 0:
return state_machine__10316__auto____0.call(this);
case 1:
return state_machine__10316__auto____1.call(this,state_28230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10316__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10316__auto____0;
state_machine__10316__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10316__auto____1;
return state_machine__10316__auto__;
})()
;})(switch__10315__auto__,c__10330__auto__,map__28211,map__28211__$1,files))
})();var state__10332__auto__ = (function (){var statearr_28245 = f__10331__auto__.call(null);(statearr_28245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10330__auto__);
return statearr_28245;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10332__auto__);
});})(c__10330__auto__,map__28211,map__28211__$1,files))
);
return c__10330__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(css_path,link_href){return cljs.core._EQ_.call(null,css_path,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,link_href,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),location.host,""));
});
figwheel.client.get_correct_link = (function get_correct_link(css_path){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,css_path,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[0]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__10330__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10330__auto__,parent){
return (function (){var f__10331__auto__ = (function (){var switch__10315__auto__ = ((function (c__10330__auto__,parent){
return (function (state_28272){var state_val_28273 = (state_28272[1]);if((state_val_28273 === 2))
{var inst_28269 = (state_28272[2]);var inst_28270 = parent.removeChild(orig_link);var state_28272__$1 = (function (){var statearr_28274 = state_28272;(statearr_28274[7] = inst_28269);
return statearr_28274;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28272__$1,inst_28270);
} else
{if((state_val_28273 === 1))
{var inst_28267 = cljs.core.async.timeout.call(null,200);var state_28272__$1 = state_28272;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28272__$1,2,inst_28267);
} else
{return null;
}
}
});})(c__10330__auto__,parent))
;return ((function (switch__10315__auto__,c__10330__auto__,parent){
return (function() {
var state_machine__10316__auto__ = null;
var state_machine__10316__auto____0 = (function (){var statearr_28278 = [null,null,null,null,null,null,null,null];(statearr_28278[0] = state_machine__10316__auto__);
(statearr_28278[1] = 1);
return statearr_28278;
});
var state_machine__10316__auto____1 = (function (state_28272){while(true){
var ret_value__10317__auto__ = (function (){try{while(true){
var result__10318__auto__ = switch__10315__auto__.call(null,state_28272);if(cljs.core.keyword_identical_QMARK_.call(null,result__10318__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10318__auto__;
}
break;
}
}catch (e28279){if((e28279 instanceof Object))
{var ex__10319__auto__ = e28279;var statearr_28280_28282 = state_28272;(statearr_28280_28282[5] = ex__10319__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28272);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28279;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10317__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28283 = state_28272;
state_28272 = G__28283;
continue;
}
} else
{return ret_value__10317__auto__;
}
break;
}
});
state_machine__10316__auto__ = function(state_28272){
switch(arguments.length){
case 0:
return state_machine__10316__auto____0.call(this);
case 1:
return state_machine__10316__auto____1.call(this,state_28272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10316__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10316__auto____0;
state_machine__10316__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10316__auto____1;
return state_machine__10316__auto__;
})()
;})(switch__10315__auto__,c__10330__auto__,parent))
})();var state__10332__auto__ = (function (){var statearr_28281 = f__10331__auto__.call(null);(statearr_28281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10330__auto__);
return statearr_28281;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10332__auto__);
});})(c__10330__auto__,parent))
);
return c__10330__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__28284){var map__28286 = p__28284;var map__28286__$1 = ((cljs.core.seq_QMARK_.call(null,map__28286))?cljs.core.apply.call(null,cljs.core.hash_map,map__28286):map__28286);var file = cljs.core.get.call(null,map__28286__$1,new cljs.core.Keyword(null,"file","file",1017047278));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,file);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,file));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,file));
}
});
figwheel.client.reload_css_files = (function reload_css_files(files_msg,jsload_callback){var seq__28291_28295 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(files_msg));var chunk__28292_28296 = null;var count__28293_28297 = 0;var i__28294_28298 = 0;while(true){
if((i__28294_28298 < count__28293_28297))
{var f_28299 = cljs.core._nth.call(null,chunk__28292_28296,i__28294_28298);figwheel.client.reload_css_file.call(null,f_28299);
{
var G__28300 = seq__28291_28295;
var G__28301 = chunk__28292_28296;
var G__28302 = count__28293_28297;
var G__28303 = (i__28294_28298 + 1);
seq__28291_28295 = G__28300;
chunk__28292_28296 = G__28301;
count__28293_28297 = G__28302;
i__28294_28298 = G__28303;
continue;
}
} else
{var temp__4126__auto___28304 = cljs.core.seq.call(null,seq__28291_28295);if(temp__4126__auto___28304)
{var seq__28291_28305__$1 = temp__4126__auto___28304;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28291_28305__$1))
{var c__8623__auto___28306 = cljs.core.chunk_first.call(null,seq__28291_28305__$1);{
var G__28307 = cljs.core.chunk_rest.call(null,seq__28291_28305__$1);
var G__28308 = c__8623__auto___28306;
var G__28309 = cljs.core.count.call(null,c__8623__auto___28306);
var G__28310 = 0;
seq__28291_28295 = G__28307;
chunk__28292_28296 = G__28308;
count__28293_28297 = G__28309;
i__28294_28298 = G__28310;
continue;
}
} else
{var f_28311 = cljs.core.first.call(null,seq__28291_28305__$1);figwheel.client.reload_css_file.call(null,f_28311);
{
var G__28312 = cljs.core.next.call(null,seq__28291_28305__$1);
var G__28313 = null;
var G__28314 = 0;
var G__28315 = 0;
seq__28291_28295 = G__28312;
chunk__28292_28296 = G__28313;
count__28293_28297 = G__28314;
i__28294_28298 = G__28315;
continue;
}
}
} else
{}
}
break;
}
console.log("%cFigwheel: loaded CSS files",figwheel.client.log_style);
return console.log(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",1017047278),new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(files_msg))));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__28316){var map__28321 = p__28316;var map__28321__$1 = ((cljs.core.seq_QMARK_.call(null,map__28321))?cljs.core.apply.call(null,cljs.core.hash_map,map__28321):map__28321);var opts = map__28321__$1;var jsload_callback = cljs.core.get.call(null,map__28321__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989));var websocket_url = cljs.core.get.call(null,map__28321__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131));var retry_count = cljs.core.get.call(null,map__28321__$1,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212));console.log("%cFigwheel: trying to open cljs reload socket",figwheel.client.log_style);
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__28321,map__28321__$1,opts,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__28322 = cljs.core._EQ_;var expr__28323 = new cljs.core.Keyword(null,"msg-name","msg-name",3979112649).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__28322.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",2807270608),expr__28323)))
{return figwheel.client.reload_js_files.call(null,msg,jsload_callback);
} else
{if(cljs.core.truth_(pred__28322.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",1058553478),expr__28323)))
{return figwheel.client.reload_css_files.call(null,msg,jsload_callback);
} else
{return null;
}
}
});})(socket,map__28321,map__28321__$1,opts,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__28321,map__28321__$1,opts,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.log("%cFigwheel: socket connection established",figwheel.client.log_style);
});})(socket,map__28321,map__28321__$1,opts,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__28321,map__28321__$1,opts,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > 0))
{return window.setTimeout(((function (socket,map__28321,map__28321__$1,opts,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212),(retry_count - 1)));
});})(socket,map__28321,map__28321__$1,opts,jsload_callback,websocket_url,retry_count))
,2000);
} else
{return null;
}
});})(socket,map__28321,map__28321__$1,opts,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__28321,map__28321__$1,opts,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__28321,map__28321__$1,opts,jsload_callback,websocket_url,retry_count))
;
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__28325){var map__28329 = p__28325;var map__28329__$1 = ((cljs.core.seq_QMARK_.call(null,map__28329))?cljs.core.apply.call(null,cljs.core.hash_map,map__28329):map__28329);var opts = map__28329__$1;var jsload_callback = cljs.core.get.call(null,map__28329__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989));var websocket_url = cljs.core.get.call(null,map__28329__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131));var retry_count = cljs.core.get.call(null,map__28329__$1,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212));if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"retry-count","retry-count",2949373212),100,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989),((function (map__28329,map__28329__$1,opts,jsload_callback,websocket_url,retry_count){
return (function (url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj28331 = {"detail":url};return obj28331;
})())));
});})(map__28329,map__28329__$1,opts,jsload_callback,websocket_url,retry_count))
,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131),[cljs.core.str("ws:"),cljs.core.str(location.host),cljs.core.str("/figwheel-ws")].join('')], null),opts));
}
};
var watch_and_reload = function (var_args){
var p__28325 = null;if (arguments.length > 0) {
  p__28325 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__28325);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__28332){
var p__28325 = cljs.core.seq(arglist__28332);
return watch_and_reload__delegate(p__28325);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map