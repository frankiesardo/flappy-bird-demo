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
var log__delegate = function (p__17576,args){var map__17578 = p__17576;var map__17578__$1 = ((cljs.core.seq_QMARK_.call(null,map__17578))?cljs.core.apply.call(null,cljs.core.hash_map,map__17578):map__17578);var debug = cljs.core.get.call(null,map__17578__$1,new cljs.core.Keyword(null,"debug","debug",1109363141));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__17576,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__17576,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__17579){
var p__17576 = cljs.core.first(arglist__17579);
var args = cljs.core.rest(arglist__17579);
return log__delegate(p__17576,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.add_cache_buster = (function add_cache_buster(url){return [cljs.core.str(url),cljs.core.str("?rel="),cljs.core.str((new Date()).getTime())].join('');
});
figwheel.client.js_reload = (function js_reload(p__17580,callback){var map__17582 = p__17580;var map__17582__$1 = ((cljs.core.seq_QMARK_.call(null,map__17582))?cljs.core.apply.call(null,cljs.core.hash_map,map__17582):map__17582);var msg = map__17582__$1;var dependency_file = cljs.core.get.call(null,map__17582__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",2750516784));var namespace = cljs.core.get.call(null,map__17582__$1,new cljs.core.Keyword(null,"namespace","namespace",2266122445));var file = cljs.core.get.call(null,map__17582__$1,new cljs.core.Keyword(null,"file","file",1017047278));if(cljs.core.truth_((function (){var or__7874__auto__ = dependency_file;if(cljs.core.truth_(or__7874__auto__))
{return or__7874__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,file)).addCallback(((function (map__17582,map__17582__$1,msg,dependency_file,namespace,file){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file], null));
});})(map__17582,map__17582__$1,msg,dependency_file,namespace,file))
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
figwheel.client.reload_js_files = (function reload_js_files(p__17583,callback){var map__17619 = p__17583;var map__17619__$1 = ((cljs.core.seq_QMARK_.call(null,map__17619))?cljs.core.apply.call(null,cljs.core.hash_map,map__17619):map__17619);var files = cljs.core.get.call(null,map__17619__$1,new cljs.core.Keyword(null,"files","files",1111338473));var c__10329__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10329__auto__,map__17619,map__17619__$1,files){
return (function (){var f__10330__auto__ = (function (){var switch__10314__auto__ = ((function (c__10329__auto__,map__17619,map__17619__$1,files){
return (function (state_17638){var state_val_17639 = (state_17638[1]);if((state_val_17639 === 6))
{var inst_17622 = (state_17638[7]);var inst_17630 = (state_17638[2]);var inst_17631 = [inst_17622];var inst_17632 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_17631,null));var inst_17633 = cljs.core.apply.call(null,callback,inst_17632);var state_17638__$1 = (function (){var statearr_17640 = state_17638;(statearr_17640[8] = inst_17630);
return statearr_17640;
})();var statearr_17641_17654 = state_17638__$1;(statearr_17641_17654[2] = inst_17633);
(statearr_17641_17654[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17639 === 5))
{var inst_17636 = (state_17638[2]);var state_17638__$1 = state_17638;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17638__$1,inst_17636);
} else
{if((state_val_17639 === 4))
{var state_17638__$1 = state_17638;var statearr_17642_17655 = state_17638__$1;(statearr_17642_17655[2] = null);
(statearr_17642_17655[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17639 === 3))
{var inst_17622 = (state_17638[7]);var inst_17625 = console.log("%cFigwheel: loading these files",figwheel.client.log_style);var inst_17626 = cljs.core.clj__GT_js.call(null,inst_17622);var inst_17627 = console.log(inst_17626);var inst_17628 = cljs.core.async.timeout.call(null,10);var state_17638__$1 = (function (){var statearr_17643 = state_17638;(statearr_17643[9] = inst_17625);
(statearr_17643[10] = inst_17627);
return statearr_17643;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17638__$1,6,inst_17628);
} else
{if((state_val_17639 === 2))
{var inst_17622 = (state_17638[7]);var inst_17622__$1 = (state_17638[2]);var inst_17623 = cljs.core.not_empty.call(null,inst_17622__$1);var state_17638__$1 = (function (){var statearr_17644 = state_17638;(statearr_17644[7] = inst_17622__$1);
return statearr_17644;
})();if(cljs.core.truth_(inst_17623))
{var statearr_17645_17656 = state_17638__$1;(statearr_17645_17656[1] = 3);
} else
{var statearr_17646_17657 = state_17638__$1;(statearr_17646_17657[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17639 === 1))
{var inst_17620 = figwheel.client.load_all_js_files.call(null,files);var state_17638__$1 = state_17638;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17638__$1,2,inst_17620);
} else
{return null;
}
}
}
}
}
}
});})(c__10329__auto__,map__17619,map__17619__$1,files))
;return ((function (switch__10314__auto__,c__10329__auto__,map__17619,map__17619__$1,files){
return (function() {
var state_machine__10315__auto__ = null;
var state_machine__10315__auto____0 = (function (){var statearr_17650 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17650[0] = state_machine__10315__auto__);
(statearr_17650[1] = 1);
return statearr_17650;
});
var state_machine__10315__auto____1 = (function (state_17638){while(true){
var ret_value__10316__auto__ = (function (){try{while(true){
var result__10317__auto__ = switch__10314__auto__.call(null,state_17638);if(cljs.core.keyword_identical_QMARK_.call(null,result__10317__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10317__auto__;
}
break;
}
}catch (e17651){if((e17651 instanceof Object))
{var ex__10318__auto__ = e17651;var statearr_17652_17658 = state_17638;(statearr_17652_17658[5] = ex__10318__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17638);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17651;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10316__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17659 = state_17638;
state_17638 = G__17659;
continue;
}
} else
{return ret_value__10316__auto__;
}
break;
}
});
state_machine__10315__auto__ = function(state_17638){
switch(arguments.length){
case 0:
return state_machine__10315__auto____0.call(this);
case 1:
return state_machine__10315__auto____1.call(this,state_17638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10315__auto____0;
state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10315__auto____1;
return state_machine__10315__auto__;
})()
;})(switch__10314__auto__,c__10329__auto__,map__17619,map__17619__$1,files))
})();var state__10331__auto__ = (function (){var statearr_17653 = f__10330__auto__.call(null);(statearr_17653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10329__auto__);
return statearr_17653;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10331__auto__);
});})(c__10329__auto__,map__17619,map__17619__$1,files))
);
return c__10329__auto__;
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
var c__10329__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10329__auto__,parent){
return (function (){var f__10330__auto__ = (function (){var switch__10314__auto__ = ((function (c__10329__auto__,parent){
return (function (state_17680){var state_val_17681 = (state_17680[1]);if((state_val_17681 === 2))
{var inst_17677 = (state_17680[2]);var inst_17678 = parent.removeChild(orig_link);var state_17680__$1 = (function (){var statearr_17682 = state_17680;(statearr_17682[7] = inst_17677);
return statearr_17682;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17680__$1,inst_17678);
} else
{if((state_val_17681 === 1))
{var inst_17675 = cljs.core.async.timeout.call(null,200);var state_17680__$1 = state_17680;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17680__$1,2,inst_17675);
} else
{return null;
}
}
});})(c__10329__auto__,parent))
;return ((function (switch__10314__auto__,c__10329__auto__,parent){
return (function() {
var state_machine__10315__auto__ = null;
var state_machine__10315__auto____0 = (function (){var statearr_17686 = [null,null,null,null,null,null,null,null];(statearr_17686[0] = state_machine__10315__auto__);
(statearr_17686[1] = 1);
return statearr_17686;
});
var state_machine__10315__auto____1 = (function (state_17680){while(true){
var ret_value__10316__auto__ = (function (){try{while(true){
var result__10317__auto__ = switch__10314__auto__.call(null,state_17680);if(cljs.core.keyword_identical_QMARK_.call(null,result__10317__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10317__auto__;
}
break;
}
}catch (e17687){if((e17687 instanceof Object))
{var ex__10318__auto__ = e17687;var statearr_17688_17690 = state_17680;(statearr_17688_17690[5] = ex__10318__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17680);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17687;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10316__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17691 = state_17680;
state_17680 = G__17691;
continue;
}
} else
{return ret_value__10316__auto__;
}
break;
}
});
state_machine__10315__auto__ = function(state_17680){
switch(arguments.length){
case 0:
return state_machine__10315__auto____0.call(this);
case 1:
return state_machine__10315__auto____1.call(this,state_17680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10315__auto____0;
state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10315__auto____1;
return state_machine__10315__auto__;
})()
;})(switch__10314__auto__,c__10329__auto__,parent))
})();var state__10331__auto__ = (function (){var statearr_17689 = f__10330__auto__.call(null);(statearr_17689[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10329__auto__);
return statearr_17689;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10331__auto__);
});})(c__10329__auto__,parent))
);
return c__10329__auto__;
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
figwheel.client.reload_css_file = (function reload_css_file(p__17692){var map__17694 = p__17692;var map__17694__$1 = ((cljs.core.seq_QMARK_.call(null,map__17694))?cljs.core.apply.call(null,cljs.core.hash_map,map__17694):map__17694);var file = cljs.core.get.call(null,map__17694__$1,new cljs.core.Keyword(null,"file","file",1017047278));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,file);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,file));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,file));
}
});
figwheel.client.reload_css_files = (function reload_css_files(files_msg,jsload_callback){var seq__17699_17703 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(files_msg));var chunk__17700_17704 = null;var count__17701_17705 = 0;var i__17702_17706 = 0;while(true){
if((i__17702_17706 < count__17701_17705))
{var f_17707 = cljs.core._nth.call(null,chunk__17700_17704,i__17702_17706);figwheel.client.reload_css_file.call(null,f_17707);
{
var G__17708 = seq__17699_17703;
var G__17709 = chunk__17700_17704;
var G__17710 = count__17701_17705;
var G__17711 = (i__17702_17706 + 1);
seq__17699_17703 = G__17708;
chunk__17700_17704 = G__17709;
count__17701_17705 = G__17710;
i__17702_17706 = G__17711;
continue;
}
} else
{var temp__4126__auto___17712 = cljs.core.seq.call(null,seq__17699_17703);if(temp__4126__auto___17712)
{var seq__17699_17713__$1 = temp__4126__auto___17712;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17699_17713__$1))
{var c__8622__auto___17714 = cljs.core.chunk_first.call(null,seq__17699_17713__$1);{
var G__17715 = cljs.core.chunk_rest.call(null,seq__17699_17713__$1);
var G__17716 = c__8622__auto___17714;
var G__17717 = cljs.core.count.call(null,c__8622__auto___17714);
var G__17718 = 0;
seq__17699_17703 = G__17715;
chunk__17700_17704 = G__17716;
count__17701_17705 = G__17717;
i__17702_17706 = G__17718;
continue;
}
} else
{var f_17719 = cljs.core.first.call(null,seq__17699_17713__$1);figwheel.client.reload_css_file.call(null,f_17719);
{
var G__17720 = cljs.core.next.call(null,seq__17699_17713__$1);
var G__17721 = null;
var G__17722 = 0;
var G__17723 = 0;
seq__17699_17703 = G__17720;
chunk__17700_17704 = G__17721;
count__17701_17705 = G__17722;
i__17702_17706 = G__17723;
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__17724){var map__17729 = p__17724;var map__17729__$1 = ((cljs.core.seq_QMARK_.call(null,map__17729))?cljs.core.apply.call(null,cljs.core.hash_map,map__17729):map__17729);var opts = map__17729__$1;var jsload_callback = cljs.core.get.call(null,map__17729__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989));var websocket_url = cljs.core.get.call(null,map__17729__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131));var retry_count = cljs.core.get.call(null,map__17729__$1,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212));console.log("%cFigwheel: trying to open cljs reload socket",figwheel.client.log_style);
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__17729,map__17729__$1,opts,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__17730 = cljs.core._EQ_;var expr__17731 = new cljs.core.Keyword(null,"msg-name","msg-name",3979112649).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__17730.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",2807270608),expr__17731)))
{return figwheel.client.reload_js_files.call(null,msg,jsload_callback);
} else
{if(cljs.core.truth_(pred__17730.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",1058553478),expr__17731)))
{return figwheel.client.reload_css_files.call(null,msg,jsload_callback);
} else
{return null;
}
}
});})(socket,map__17729,map__17729__$1,opts,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__17729,map__17729__$1,opts,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.log("%cFigwheel: socket connection established",figwheel.client.log_style);
});})(socket,map__17729,map__17729__$1,opts,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__17729,map__17729__$1,opts,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > 0))
{return window.setTimeout(((function (socket,map__17729,map__17729__$1,opts,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212),(retry_count - 1)));
});})(socket,map__17729,map__17729__$1,opts,jsload_callback,websocket_url,retry_count))
,2000);
} else
{return null;
}
});})(socket,map__17729,map__17729__$1,opts,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__17729,map__17729__$1,opts,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__17729,map__17729__$1,opts,jsload_callback,websocket_url,retry_count))
;
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__17733){var map__17737 = p__17733;var map__17737__$1 = ((cljs.core.seq_QMARK_.call(null,map__17737))?cljs.core.apply.call(null,cljs.core.hash_map,map__17737):map__17737);var opts = map__17737__$1;var jsload_callback = cljs.core.get.call(null,map__17737__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989));var websocket_url = cljs.core.get.call(null,map__17737__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131));var retry_count = cljs.core.get.call(null,map__17737__$1,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212));if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"retry-count","retry-count",2949373212),100,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989),((function (map__17737,map__17737__$1,opts,jsload_callback,websocket_url,retry_count){
return (function (url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj17739 = {"detail":url};return obj17739;
})())));
});})(map__17737,map__17737__$1,opts,jsload_callback,websocket_url,retry_count))
,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131),[cljs.core.str("ws:"),cljs.core.str(location.host),cljs.core.str("/figwheel-ws")].join('')], null),opts));
}
};
var watch_and_reload = function (var_args){
var p__17733 = null;if (arguments.length > 0) {
  p__17733 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__17733);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__17740){
var p__17733 = cljs.core.seq(arglist__17740);
return watch_and_reload__delegate(p__17733);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map