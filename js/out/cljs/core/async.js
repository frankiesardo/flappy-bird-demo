// Compiled by ClojureScript 0.0-2202
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t25260 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25260 = (function (f,fn_handler,meta25261){
this.f = f;
this.fn_handler = fn_handler;
this.meta25261 = meta25261;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25260.cljs$lang$type = true;
cljs.core.async.t25260.cljs$lang$ctorStr = "cljs.core.async/t25260";
cljs.core.async.t25260.cljs$lang$ctorPrWriter = (function (this__8442__auto__,writer__8443__auto__,opt__8444__auto__){return cljs.core._write.call(null,writer__8443__auto__,"cljs.core.async/t25260");
});
cljs.core.async.t25260.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25260.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t25260.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t25260.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25262){var self__ = this;
var _25262__$1 = this;return self__.meta25261;
});
cljs.core.async.t25260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25262,meta25261__$1){var self__ = this;
var _25262__$1 = this;return (new cljs.core.async.t25260(self__.f,self__.fn_handler,meta25261__$1));
});
cljs.core.async.__GT_t25260 = (function __GT_t25260(f__$1,fn_handler__$1,meta25261){return (new cljs.core.async.t25260(f__$1,fn_handler__$1,meta25261));
});
}
return (new cljs.core.async.t25260(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__25264 = buff;if(G__25264)
{var bit__8525__auto__ = null;if(cljs.core.truth_((function (){var or__7875__auto__ = bit__8525__auto__;if(cljs.core.truth_(or__7875__auto__))
{return or__7875__auto__;
} else
{return G__25264.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__25264.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25264);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25264);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_25265 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_25265);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_25265,ret){
return (function (){return fn1.call(null,val_25265);
});})(val_25265,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8723__auto___25266 = n;var x_25267 = 0;while(true){
if((x_25267 < n__8723__auto___25266))
{(a[x_25267] = 0);
{
var G__25268 = (x_25267 + 1);
x_25267 = G__25268;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__25269 = (i + 1);
i = G__25269;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t25273 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25273 = (function (flag,alt_flag,meta25274){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta25274 = meta25274;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25273.cljs$lang$type = true;
cljs.core.async.t25273.cljs$lang$ctorStr = "cljs.core.async/t25273";
cljs.core.async.t25273.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8442__auto__,writer__8443__auto__,opt__8444__auto__){return cljs.core._write.call(null,writer__8443__auto__,"cljs.core.async/t25273");
});})(flag))
;
cljs.core.async.t25273.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25273.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t25273.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t25273.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25275){var self__ = this;
var _25275__$1 = this;return self__.meta25274;
});})(flag))
;
cljs.core.async.t25273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25275,meta25274__$1){var self__ = this;
var _25275__$1 = this;return (new cljs.core.async.t25273(self__.flag,self__.alt_flag,meta25274__$1));
});})(flag))
;
cljs.core.async.__GT_t25273 = ((function (flag){
return (function __GT_t25273(flag__$1,alt_flag__$1,meta25274){return (new cljs.core.async.t25273(flag__$1,alt_flag__$1,meta25274));
});})(flag))
;
}
return (new cljs.core.async.t25273(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t25279 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25279 = (function (cb,flag,alt_handler,meta25280){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta25280 = meta25280;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25279.cljs$lang$type = true;
cljs.core.async.t25279.cljs$lang$ctorStr = "cljs.core.async/t25279";
cljs.core.async.t25279.cljs$lang$ctorPrWriter = (function (this__8442__auto__,writer__8443__auto__,opt__8444__auto__){return cljs.core._write.call(null,writer__8443__auto__,"cljs.core.async/t25279");
});
cljs.core.async.t25279.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25279.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t25279.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t25279.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25281){var self__ = this;
var _25281__$1 = this;return self__.meta25280;
});
cljs.core.async.t25279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25281,meta25280__$1){var self__ = this;
var _25281__$1 = this;return (new cljs.core.async.t25279(self__.cb,self__.flag,self__.alt_handler,meta25280__$1));
});
cljs.core.async.__GT_t25279 = (function __GT_t25279(cb__$1,flag__$1,alt_handler__$1,meta25280){return (new cljs.core.async.t25279(cb__$1,flag__$1,alt_handler__$1,meta25280));
});
}
return (new cljs.core.async.t25279(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25282_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25282_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25283_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25283_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__7875__auto__ = wport;if(cljs.core.truth_(or__7875__auto__))
{return or__7875__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__25284 = (i + 1);
i = G__25284;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__7875__auto__ = ret;if(cljs.core.truth_(or__7875__auto__))
{return or__7875__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4126__auto__ = (function (){var and__7863__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__7863__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__7863__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__25285){var map__25287 = p__25285;var map__25287__$1 = ((cljs.core.seq_QMARK_.call(null,map__25287))?cljs.core.apply.call(null,cljs.core.hash_map,map__25287):map__25287);var opts = map__25287__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__25285 = null;if (arguments.length > 1) {
  p__25285 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__25285);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__25288){
var ports = cljs.core.first(arglist__25288);
var p__25285 = cljs.core.rest(arglist__25288);
return alts_BANG___delegate(ports,p__25285);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t25296 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25296 = (function (ch,f,map_LT_,meta25297){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25297 = meta25297;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25296.cljs$lang$type = true;
cljs.core.async.t25296.cljs$lang$ctorStr = "cljs.core.async/t25296";
cljs.core.async.t25296.cljs$lang$ctorPrWriter = (function (this__8442__auto__,writer__8443__auto__,opt__8444__auto__){return cljs.core._write.call(null,writer__8443__auto__,"cljs.core.async/t25296");
});
cljs.core.async.t25296.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25296.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t25296.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25296.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t25299 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25299 = (function (fn1,_,meta25297,ch,f,map_LT_,meta25300){
this.fn1 = fn1;
this._ = _;
this.meta25297 = meta25297;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25300 = meta25300;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25299.cljs$lang$type = true;
cljs.core.async.t25299.cljs$lang$ctorStr = "cljs.core.async/t25299";
cljs.core.async.t25299.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8442__auto__,writer__8443__auto__,opt__8444__auto__){return cljs.core._write.call(null,writer__8443__auto__,"cljs.core.async/t25299");
});})(___$1))
;
cljs.core.async.t25299.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25299.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t25299.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t25299.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__25289_SHARP_){return f1.call(null,(((p1__25289_SHARP_ == null))?null:self__.f.call(null,p1__25289_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t25299.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25301){var self__ = this;
var _25301__$1 = this;return self__.meta25300;
});})(___$1))
;
cljs.core.async.t25299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25301,meta25300__$1){var self__ = this;
var _25301__$1 = this;return (new cljs.core.async.t25299(self__.fn1,self__._,self__.meta25297,self__.ch,self__.f,self__.map_LT_,meta25300__$1));
});})(___$1))
;
cljs.core.async.__GT_t25299 = ((function (___$1){
return (function __GT_t25299(fn1__$1,___$2,meta25297__$1,ch__$2,f__$2,map_LT___$2,meta25300){return (new cljs.core.async.t25299(fn1__$1,___$2,meta25297__$1,ch__$2,f__$2,map_LT___$2,meta25300));
});})(___$1))
;
}
return (new cljs.core.async.t25299(fn1,___$1,self__.meta25297,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__7863__auto__ = ret;if(cljs.core.truth_(and__7863__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__7863__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t25296.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25296.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25296.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t25296.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25298){var self__ = this;
var _25298__$1 = this;return self__.meta25297;
});
cljs.core.async.t25296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25298,meta25297__$1){var self__ = this;
var _25298__$1 = this;return (new cljs.core.async.t25296(self__.ch,self__.f,self__.map_LT_,meta25297__$1));
});
cljs.core.async.__GT_t25296 = (function __GT_t25296(ch__$1,f__$1,map_LT___$1,meta25297){return (new cljs.core.async.t25296(ch__$1,f__$1,map_LT___$1,meta25297));
});
}
return (new cljs.core.async.t25296(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t25305 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25305 = (function (ch,f,map_GT_,meta25306){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta25306 = meta25306;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25305.cljs$lang$type = true;
cljs.core.async.t25305.cljs$lang$ctorStr = "cljs.core.async/t25305";
cljs.core.async.t25305.cljs$lang$ctorPrWriter = (function (this__8442__auto__,writer__8443__auto__,opt__8444__auto__){return cljs.core._write.call(null,writer__8443__auto__,"cljs.core.async/t25305");
});
cljs.core.async.t25305.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25305.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t25305.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25305.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25305.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25305.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25305.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25307){var self__ = this;
var _25307__$1 = this;return self__.meta25306;
});
cljs.core.async.t25305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25307,meta25306__$1){var self__ = this;
var _25307__$1 = this;return (new cljs.core.async.t25305(self__.ch,self__.f,self__.map_GT_,meta25306__$1));
});
cljs.core.async.__GT_t25305 = (function __GT_t25305(ch__$1,f__$1,map_GT___$1,meta25306){return (new cljs.core.async.t25305(ch__$1,f__$1,map_GT___$1,meta25306));
});
}
return (new cljs.core.async.t25305(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t25311 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25311 = (function (ch,p,filter_GT_,meta25312){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25312 = meta25312;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25311.cljs$lang$type = true;
cljs.core.async.t25311.cljs$lang$ctorStr = "cljs.core.async/t25311";
cljs.core.async.t25311.cljs$lang$ctorPrWriter = (function (this__8442__auto__,writer__8443__auto__,opt__8444__auto__){return cljs.core._write.call(null,writer__8443__auto__,"cljs.core.async/t25311");
});
cljs.core.async.t25311.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25311.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t25311.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25311.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25311.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25311.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25311.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t25311.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25313){var self__ = this;
var _25313__$1 = this;return self__.meta25312;
});
cljs.core.async.t25311.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25313,meta25312__$1){var self__ = this;
var _25313__$1 = this;return (new cljs.core.async.t25311(self__.ch,self__.p,self__.filter_GT_,meta25312__$1));
});
cljs.core.async.__GT_t25311 = (function __GT_t25311(ch__$1,p__$1,filter_GT___$1,meta25312){return (new cljs.core.async.t25311(ch__$1,p__$1,filter_GT___$1,meta25312));
});
}
return (new cljs.core.async.t25311(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10330__auto___25396 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10330__auto___25396,out){
return (function (){var f__10331__auto__ = (function (){var switch__10315__auto__ = ((function (c__10330__auto___25396,out){
return (function (state_25375){var state_val_25376 = (state_25375[1]);if((state_val_25376 === 7))
{var inst_25371 = (state_25375[2]);var state_25375__$1 = state_25375;var statearr_25377_25397 = state_25375__$1;(statearr_25377_25397[2] = inst_25371);
(statearr_25377_25397[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25376 === 1))
{var state_25375__$1 = state_25375;var statearr_25378_25398 = state_25375__$1;(statearr_25378_25398[2] = null);
(statearr_25378_25398[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25376 === 4))
{var inst_25357 = (state_25375[7]);var inst_25357__$1 = (state_25375[2]);var inst_25358 = (inst_25357__$1 == null);var state_25375__$1 = (function (){var statearr_25379 = state_25375;(statearr_25379[7] = inst_25357__$1);
return statearr_25379;
})();if(cljs.core.truth_(inst_25358))
{var statearr_25380_25399 = state_25375__$1;(statearr_25380_25399[1] = 5);
} else
{var statearr_25381_25400 = state_25375__$1;(statearr_25381_25400[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25376 === 6))
{var inst_25357 = (state_25375[7]);var inst_25362 = p.call(null,inst_25357);var state_25375__$1 = state_25375;if(cljs.core.truth_(inst_25362))
{var statearr_25382_25401 = state_25375__$1;(statearr_25382_25401[1] = 8);
} else
{var statearr_25383_25402 = state_25375__$1;(statearr_25383_25402[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25376 === 3))
{var inst_25373 = (state_25375[2]);var state_25375__$1 = state_25375;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25375__$1,inst_25373);
} else
{if((state_val_25376 === 2))
{var state_25375__$1 = state_25375;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25375__$1,4,ch);
} else
{if((state_val_25376 === 11))
{var inst_25365 = (state_25375[2]);var state_25375__$1 = state_25375;var statearr_25384_25403 = state_25375__$1;(statearr_25384_25403[2] = inst_25365);
(statearr_25384_25403[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25376 === 9))
{var state_25375__$1 = state_25375;var statearr_25385_25404 = state_25375__$1;(statearr_25385_25404[2] = null);
(statearr_25385_25404[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25376 === 5))
{var inst_25360 = cljs.core.async.close_BANG_.call(null,out);var state_25375__$1 = state_25375;var statearr_25386_25405 = state_25375__$1;(statearr_25386_25405[2] = inst_25360);
(statearr_25386_25405[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25376 === 10))
{var inst_25368 = (state_25375[2]);var state_25375__$1 = (function (){var statearr_25387 = state_25375;(statearr_25387[8] = inst_25368);
return statearr_25387;
})();var statearr_25388_25406 = state_25375__$1;(statearr_25388_25406[2] = null);
(statearr_25388_25406[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25376 === 8))
{var inst_25357 = (state_25375[7]);var state_25375__$1 = state_25375;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25375__$1,11,out,inst_25357);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10330__auto___25396,out))
;return ((function (switch__10315__auto__,c__10330__auto___25396,out){
return (function() {
var state_machine__10316__auto__ = null;
var state_machine__10316__auto____0 = (function (){var statearr_25392 = [null,null,null,null,null,null,null,null,null];(statearr_25392[0] = state_machine__10316__auto__);
(statearr_25392[1] = 1);
return statearr_25392;
});
var state_machine__10316__auto____1 = (function (state_25375){while(true){
var ret_value__10317__auto__ = (function (){try{while(true){
var result__10318__auto__ = switch__10315__auto__.call(null,state_25375);if(cljs.core.keyword_identical_QMARK_.call(null,result__10318__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10318__auto__;
}
break;
}
}catch (e25393){if((e25393 instanceof Object))
{var ex__10319__auto__ = e25393;var statearr_25394_25407 = state_25375;(statearr_25394_25407[5] = ex__10319__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25375);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25393;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10317__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25408 = state_25375;
state_25375 = G__25408;
continue;
}
} else
{return ret_value__10317__auto__;
}
break;
}
});
state_machine__10316__auto__ = function(state_25375){
switch(arguments.length){
case 0:
return state_machine__10316__auto____0.call(this);
case 1:
return state_machine__10316__auto____1.call(this,state_25375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10316__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10316__auto____0;
state_machine__10316__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10316__auto____1;
return state_machine__10316__auto__;
})()
;})(switch__10315__auto__,c__10330__auto___25396,out))
})();var state__10332__auto__ = (function (){var statearr_25395 = f__10331__auto__.call(null);(statearr_25395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10330__auto___25396);
return statearr_25395;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10332__auto__);
});})(c__10330__auto___25396,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__10330__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10330__auto__){
return (function (){var f__10331__auto__ = (function (){var switch__10315__auto__ = ((function (c__10330__auto__){
return (function (state_25574){var state_val_25575 = (state_25574[1]);if((state_val_25575 === 7))
{var inst_25570 = (state_25574[2]);var state_25574__$1 = state_25574;var statearr_25576_25617 = state_25574__$1;(statearr_25576_25617[2] = inst_25570);
(statearr_25576_25617[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25575 === 20))
{var inst_25540 = (state_25574[7]);var inst_25551 = (state_25574[2]);var inst_25552 = cljs.core.next.call(null,inst_25540);var inst_25526 = inst_25552;var inst_25527 = null;var inst_25528 = 0;var inst_25529 = 0;var state_25574__$1 = (function (){var statearr_25577 = state_25574;(statearr_25577[8] = inst_25551);
(statearr_25577[9] = inst_25526);
(statearr_25577[10] = inst_25528);
(statearr_25577[11] = inst_25529);
(statearr_25577[12] = inst_25527);
return statearr_25577;
})();var statearr_25578_25618 = state_25574__$1;(statearr_25578_25618[2] = null);
(statearr_25578_25618[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25575 === 1))
{var state_25574__$1 = state_25574;var statearr_25579_25619 = state_25574__$1;(statearr_25579_25619[2] = null);
(statearr_25579_25619[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25575 === 4))
{var inst_25515 = (state_25574[13]);var inst_25515__$1 = (state_25574[2]);var inst_25516 = (inst_25515__$1 == null);var state_25574__$1 = (function (){var statearr_25580 = state_25574;(statearr_25580[13] = inst_25515__$1);
return statearr_25580;
})();if(cljs.core.truth_(inst_25516))
{var statearr_25581_25620 = state_25574__$1;(statearr_25581_25620[1] = 5);
} else
{var statearr_25582_25621 = state_25574__$1;(statearr_25582_25621[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25575 === 15))
{var state_25574__$1 = state_25574;var statearr_25586_25622 = state_25574__$1;(statearr_25586_25622[2] = null);
(statearr_25586_25622[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25575 === 21))
{var state_25574__$1 = state_25574;var statearr_25587_25623 = state_25574__$1;(statearr_25587_25623[2] = null);
(statearr_25587_25623[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25575 === 13))
{var inst_25526 = (state_25574[9]);var inst_25528 = (state_25574[10]);var inst_25529 = (state_25574[11]);var inst_25527 = (state_25574[12]);var inst_25536 = (state_25574[2]);var inst_25537 = (inst_25529 + 1);var tmp25583 = inst_25526;var tmp25584 = inst_25528;var tmp25585 = inst_25527;var inst_25526__$1 = tmp25583;var inst_25527__$1 = tmp25585;var inst_25528__$1 = tmp25584;var inst_25529__$1 = inst_25537;var state_25574__$1 = (function (){var statearr_25588 = state_25574;(statearr_25588[9] = inst_25526__$1);
(statearr_25588[14] = inst_25536);
(statearr_25588[10] = inst_25528__$1);
(statearr_25588[11] = inst_25529__$1);
(statearr_25588[12] = inst_25527__$1);
return statearr_25588;
})();var statearr_25589_25624 = state_25574__$1;(statearr_25589_25624[2] = null);
(statearr_25589_25624[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25575 === 22))
{var state_25574__$1 = state_25574;var statearr_25590_25625 = state_25574__$1;(statearr_25590_25625[2] = null);
(statearr_25590_25625[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25575 === 6))
{var inst_25515 = (state_25574[13]);var inst_25524 = f.call(null,inst_25515);var inst_25525 = cljs.core.seq.call(null,inst_25524);var inst_25526 = inst_25525;var inst_25527 = null;var inst_25528 = 0;var inst_25529 = 0;var state_25574__$1 = (function (){var statearr_25591 = state_25574;(statearr_25591[9] = inst_25526);
(statearr_25591[10] = inst_25528);
(statearr_25591[11] = inst_25529);
(statearr_25591[12] = inst_25527);
return statearr_25591;
})();var statearr_25592_25626 = state_25574__$1;(statearr_25592_25626[2] = null);
(statearr_25592_25626[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25575 === 17))
{var inst_25540 = (state_25574[7]);var inst_25544 = cljs.core.chunk_first.call(null,inst_25540);var inst_25545 = cljs.core.chunk_rest.call(null,inst_25540);var inst_25546 = cljs.core.count.call(null,inst_25544);var inst_25526 = inst_25545;var inst_25527 = inst_25544;var inst_25528 = inst_25546;var inst_25529 = 0;var state_25574__$1 = (function (){var statearr_25593 = state_25574;(statearr_25593[9] = inst_25526);
(statearr_25593[10] = inst_25528);
(statearr_25593[11] = inst_25529);
(statearr_25593[12] = inst_25527);
return statearr_25593;
})();var statearr_25594_25627 = state_25574__$1;(statearr_25594_25627[2] = null);
(statearr_25594_25627[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25575 === 3))
{var inst_25572 = (state_25574[2]);var state_25574__$1 = state_25574;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25574__$1,inst_25572);
} else
{if((state_val_25575 === 12))
{var inst_25560 = (state_25574[2]);var state_25574__$1 = state_25574;var statearr_25595_25628 = state_25574__$1;(statearr_25595_25628[2] = inst_25560);
(statearr_25595_25628[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25575 === 2))
{var state_25574__$1 = state_25574;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25574__$1,4,in$);
} else
{if((state_val_25575 === 23))
{var inst_25568 = (state_25574[2]);var state_25574__$1 = state_25574;var statearr_25596_25629 = state_25574__$1;(statearr_25596_25629[2] = inst_25568);
(statearr_25596_25629[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25575 === 19))
{var inst_25555 = (state_25574[2]);var state_25574__$1 = state_25574;var statearr_25597_25630 = state_25574__$1;(statearr_25597_25630[2] = inst_25555);
(statearr_25597_25630[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25575 === 11))
{var inst_25540 = (state_25574[7]);var inst_25526 = (state_25574[9]);var inst_25540__$1 = cljs.core.seq.call(null,inst_25526);var state_25574__$1 = (function (){var statearr_25598 = state_25574;(statearr_25598[7] = inst_25540__$1);
return statearr_25598;
})();if(inst_25540__$1)
{var statearr_25599_25631 = state_25574__$1;(statearr_25599_25631[1] = 14);
} else
{var statearr_25600_25632 = state_25574__$1;(statearr_25600_25632[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25575 === 9))
{var inst_25562 = (state_25574[2]);var inst_25563 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_25574__$1 = (function (){var statearr_25601 = state_25574;(statearr_25601[15] = inst_25562);
return statearr_25601;
})();if(cljs.core.truth_(inst_25563))
{var statearr_25602_25633 = state_25574__$1;(statearr_25602_25633[1] = 21);
} else
{var statearr_25603_25634 = state_25574__$1;(statearr_25603_25634[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25575 === 5))
{var inst_25518 = cljs.core.async.close_BANG_.call(null,out);var state_25574__$1 = state_25574;var statearr_25604_25635 = state_25574__$1;(statearr_25604_25635[2] = inst_25518);
(statearr_25604_25635[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25575 === 14))
{var inst_25540 = (state_25574[7]);var inst_25542 = cljs.core.chunked_seq_QMARK_.call(null,inst_25540);var state_25574__$1 = state_25574;if(inst_25542)
{var statearr_25605_25636 = state_25574__$1;(statearr_25605_25636[1] = 17);
} else
{var statearr_25606_25637 = state_25574__$1;(statearr_25606_25637[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25575 === 16))
{var inst_25558 = (state_25574[2]);var state_25574__$1 = state_25574;var statearr_25607_25638 = state_25574__$1;(statearr_25607_25638[2] = inst_25558);
(statearr_25607_25638[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25575 === 10))
{var inst_25529 = (state_25574[11]);var inst_25527 = (state_25574[12]);var inst_25534 = cljs.core._nth.call(null,inst_25527,inst_25529);var state_25574__$1 = state_25574;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25574__$1,13,out,inst_25534);
} else
{if((state_val_25575 === 18))
{var inst_25540 = (state_25574[7]);var inst_25549 = cljs.core.first.call(null,inst_25540);var state_25574__$1 = state_25574;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25574__$1,20,out,inst_25549);
} else
{if((state_val_25575 === 8))
{var inst_25528 = (state_25574[10]);var inst_25529 = (state_25574[11]);var inst_25531 = (inst_25529 < inst_25528);var inst_25532 = inst_25531;var state_25574__$1 = state_25574;if(cljs.core.truth_(inst_25532))
{var statearr_25608_25639 = state_25574__$1;(statearr_25608_25639[1] = 10);
} else
{var statearr_25609_25640 = state_25574__$1;(statearr_25609_25640[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10330__auto__))
;return ((function (switch__10315__auto__,c__10330__auto__){
return (function() {
var state_machine__10316__auto__ = null;
var state_machine__10316__auto____0 = (function (){var statearr_25613 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25613[0] = state_machine__10316__auto__);
(statearr_25613[1] = 1);
return statearr_25613;
});
var state_machine__10316__auto____1 = (function (state_25574){while(true){
var ret_value__10317__auto__ = (function (){try{while(true){
var result__10318__auto__ = switch__10315__auto__.call(null,state_25574);if(cljs.core.keyword_identical_QMARK_.call(null,result__10318__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10318__auto__;
}
break;
}
}catch (e25614){if((e25614 instanceof Object))
{var ex__10319__auto__ = e25614;var statearr_25615_25641 = state_25574;(statearr_25615_25641[5] = ex__10319__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25574);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25614;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10317__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25642 = state_25574;
state_25574 = G__25642;
continue;
}
} else
{return ret_value__10317__auto__;
}
break;
}
});
state_machine__10316__auto__ = function(state_25574){
switch(arguments.length){
case 0:
return state_machine__10316__auto____0.call(this);
case 1:
return state_machine__10316__auto____1.call(this,state_25574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10316__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10316__auto____0;
state_machine__10316__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10316__auto____1;
return state_machine__10316__auto__;
})()
;})(switch__10315__auto__,c__10330__auto__))
})();var state__10332__auto__ = (function (){var statearr_25616 = f__10331__auto__.call(null);(statearr_25616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10330__auto__);
return statearr_25616;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10332__auto__);
});})(c__10330__auto__))
);
return c__10330__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__10330__auto___25737 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10330__auto___25737){
return (function (){var f__10331__auto__ = (function (){var switch__10315__auto__ = ((function (c__10330__auto___25737){
return (function (state_25713){var state_val_25714 = (state_25713[1]);if((state_val_25714 === 7))
{var inst_25709 = (state_25713[2]);var state_25713__$1 = state_25713;var statearr_25715_25738 = state_25713__$1;(statearr_25715_25738[2] = inst_25709);
(statearr_25715_25738[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25714 === 1))
{var state_25713__$1 = state_25713;var statearr_25716_25739 = state_25713__$1;(statearr_25716_25739[2] = null);
(statearr_25716_25739[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25714 === 4))
{var inst_25692 = (state_25713[7]);var inst_25692__$1 = (state_25713[2]);var inst_25693 = (inst_25692__$1 == null);var state_25713__$1 = (function (){var statearr_25717 = state_25713;(statearr_25717[7] = inst_25692__$1);
return statearr_25717;
})();if(cljs.core.truth_(inst_25693))
{var statearr_25718_25740 = state_25713__$1;(statearr_25718_25740[1] = 5);
} else
{var statearr_25719_25741 = state_25713__$1;(statearr_25719_25741[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25714 === 13))
{var state_25713__$1 = state_25713;var statearr_25720_25742 = state_25713__$1;(statearr_25720_25742[2] = null);
(statearr_25720_25742[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25714 === 6))
{var inst_25692 = (state_25713[7]);var state_25713__$1 = state_25713;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25713__$1,11,to,inst_25692);
} else
{if((state_val_25714 === 3))
{var inst_25711 = (state_25713[2]);var state_25713__$1 = state_25713;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25713__$1,inst_25711);
} else
{if((state_val_25714 === 12))
{var state_25713__$1 = state_25713;var statearr_25721_25743 = state_25713__$1;(statearr_25721_25743[2] = null);
(statearr_25721_25743[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25714 === 2))
{var state_25713__$1 = state_25713;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25713__$1,4,from);
} else
{if((state_val_25714 === 11))
{var inst_25702 = (state_25713[2]);var state_25713__$1 = state_25713;if(cljs.core.truth_(inst_25702))
{var statearr_25722_25744 = state_25713__$1;(statearr_25722_25744[1] = 12);
} else
{var statearr_25723_25745 = state_25713__$1;(statearr_25723_25745[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25714 === 9))
{var state_25713__$1 = state_25713;var statearr_25724_25746 = state_25713__$1;(statearr_25724_25746[2] = null);
(statearr_25724_25746[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25714 === 5))
{var state_25713__$1 = state_25713;if(cljs.core.truth_(close_QMARK_))
{var statearr_25725_25747 = state_25713__$1;(statearr_25725_25747[1] = 8);
} else
{var statearr_25726_25748 = state_25713__$1;(statearr_25726_25748[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25714 === 14))
{var inst_25707 = (state_25713[2]);var state_25713__$1 = state_25713;var statearr_25727_25749 = state_25713__$1;(statearr_25727_25749[2] = inst_25707);
(statearr_25727_25749[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25714 === 10))
{var inst_25699 = (state_25713[2]);var state_25713__$1 = state_25713;var statearr_25728_25750 = state_25713__$1;(statearr_25728_25750[2] = inst_25699);
(statearr_25728_25750[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25714 === 8))
{var inst_25696 = cljs.core.async.close_BANG_.call(null,to);var state_25713__$1 = state_25713;var statearr_25729_25751 = state_25713__$1;(statearr_25729_25751[2] = inst_25696);
(statearr_25729_25751[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10330__auto___25737))
;return ((function (switch__10315__auto__,c__10330__auto___25737){
return (function() {
var state_machine__10316__auto__ = null;
var state_machine__10316__auto____0 = (function (){var statearr_25733 = [null,null,null,null,null,null,null,null];(statearr_25733[0] = state_machine__10316__auto__);
(statearr_25733[1] = 1);
return statearr_25733;
});
var state_machine__10316__auto____1 = (function (state_25713){while(true){
var ret_value__10317__auto__ = (function (){try{while(true){
var result__10318__auto__ = switch__10315__auto__.call(null,state_25713);if(cljs.core.keyword_identical_QMARK_.call(null,result__10318__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10318__auto__;
}
break;
}
}catch (e25734){if((e25734 instanceof Object))
{var ex__10319__auto__ = e25734;var statearr_25735_25752 = state_25713;(statearr_25735_25752[5] = ex__10319__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25713);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25734;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10317__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25753 = state_25713;
state_25713 = G__25753;
continue;
}
} else
{return ret_value__10317__auto__;
}
break;
}
});
state_machine__10316__auto__ = function(state_25713){
switch(arguments.length){
case 0:
return state_machine__10316__auto____0.call(this);
case 1:
return state_machine__10316__auto____1.call(this,state_25713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10316__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10316__auto____0;
state_machine__10316__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10316__auto____1;
return state_machine__10316__auto__;
})()
;})(switch__10315__auto__,c__10330__auto___25737))
})();var state__10332__auto__ = (function (){var statearr_25736 = f__10331__auto__.call(null);(statearr_25736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10330__auto___25737);
return statearr_25736;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10332__auto__);
});})(c__10330__auto___25737))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__10330__auto___25854 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10330__auto___25854,tc,fc){
return (function (){var f__10331__auto__ = (function (){var switch__10315__auto__ = ((function (c__10330__auto___25854,tc,fc){
return (function (state_25829){var state_val_25830 = (state_25829[1]);if((state_val_25830 === 7))
{var inst_25825 = (state_25829[2]);var state_25829__$1 = state_25829;var statearr_25831_25855 = state_25829__$1;(statearr_25831_25855[2] = inst_25825);
(statearr_25831_25855[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25830 === 1))
{var state_25829__$1 = state_25829;var statearr_25832_25856 = state_25829__$1;(statearr_25832_25856[2] = null);
(statearr_25832_25856[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25830 === 4))
{var inst_25806 = (state_25829[7]);var inst_25806__$1 = (state_25829[2]);var inst_25807 = (inst_25806__$1 == null);var state_25829__$1 = (function (){var statearr_25833 = state_25829;(statearr_25833[7] = inst_25806__$1);
return statearr_25833;
})();if(cljs.core.truth_(inst_25807))
{var statearr_25834_25857 = state_25829__$1;(statearr_25834_25857[1] = 5);
} else
{var statearr_25835_25858 = state_25829__$1;(statearr_25835_25858[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25830 === 13))
{var state_25829__$1 = state_25829;var statearr_25836_25859 = state_25829__$1;(statearr_25836_25859[2] = null);
(statearr_25836_25859[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25830 === 6))
{var inst_25806 = (state_25829[7]);var inst_25812 = p.call(null,inst_25806);var state_25829__$1 = state_25829;if(cljs.core.truth_(inst_25812))
{var statearr_25837_25860 = state_25829__$1;(statearr_25837_25860[1] = 9);
} else
{var statearr_25838_25861 = state_25829__$1;(statearr_25838_25861[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25830 === 3))
{var inst_25827 = (state_25829[2]);var state_25829__$1 = state_25829;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25829__$1,inst_25827);
} else
{if((state_val_25830 === 12))
{var state_25829__$1 = state_25829;var statearr_25839_25862 = state_25829__$1;(statearr_25839_25862[2] = null);
(statearr_25839_25862[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25830 === 2))
{var state_25829__$1 = state_25829;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25829__$1,4,ch);
} else
{if((state_val_25830 === 11))
{var inst_25806 = (state_25829[7]);var inst_25816 = (state_25829[2]);var state_25829__$1 = state_25829;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25829__$1,8,inst_25816,inst_25806);
} else
{if((state_val_25830 === 9))
{var state_25829__$1 = state_25829;var statearr_25840_25863 = state_25829__$1;(statearr_25840_25863[2] = tc);
(statearr_25840_25863[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25830 === 5))
{var inst_25809 = cljs.core.async.close_BANG_.call(null,tc);var inst_25810 = cljs.core.async.close_BANG_.call(null,fc);var state_25829__$1 = (function (){var statearr_25841 = state_25829;(statearr_25841[8] = inst_25809);
return statearr_25841;
})();var statearr_25842_25864 = state_25829__$1;(statearr_25842_25864[2] = inst_25810);
(statearr_25842_25864[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25830 === 14))
{var inst_25823 = (state_25829[2]);var state_25829__$1 = state_25829;var statearr_25843_25865 = state_25829__$1;(statearr_25843_25865[2] = inst_25823);
(statearr_25843_25865[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25830 === 10))
{var state_25829__$1 = state_25829;var statearr_25844_25866 = state_25829__$1;(statearr_25844_25866[2] = fc);
(statearr_25844_25866[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25830 === 8))
{var inst_25818 = (state_25829[2]);var state_25829__$1 = state_25829;if(cljs.core.truth_(inst_25818))
{var statearr_25845_25867 = state_25829__$1;(statearr_25845_25867[1] = 12);
} else
{var statearr_25846_25868 = state_25829__$1;(statearr_25846_25868[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10330__auto___25854,tc,fc))
;return ((function (switch__10315__auto__,c__10330__auto___25854,tc,fc){
return (function() {
var state_machine__10316__auto__ = null;
var state_machine__10316__auto____0 = (function (){var statearr_25850 = [null,null,null,null,null,null,null,null,null];(statearr_25850[0] = state_machine__10316__auto__);
(statearr_25850[1] = 1);
return statearr_25850;
});
var state_machine__10316__auto____1 = (function (state_25829){while(true){
var ret_value__10317__auto__ = (function (){try{while(true){
var result__10318__auto__ = switch__10315__auto__.call(null,state_25829);if(cljs.core.keyword_identical_QMARK_.call(null,result__10318__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10318__auto__;
}
break;
}
}catch (e25851){if((e25851 instanceof Object))
{var ex__10319__auto__ = e25851;var statearr_25852_25869 = state_25829;(statearr_25852_25869[5] = ex__10319__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25829);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25851;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10317__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25870 = state_25829;
state_25829 = G__25870;
continue;
}
} else
{return ret_value__10317__auto__;
}
break;
}
});
state_machine__10316__auto__ = function(state_25829){
switch(arguments.length){
case 0:
return state_machine__10316__auto____0.call(this);
case 1:
return state_machine__10316__auto____1.call(this,state_25829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10316__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10316__auto____0;
state_machine__10316__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10316__auto____1;
return state_machine__10316__auto__;
})()
;})(switch__10315__auto__,c__10330__auto___25854,tc,fc))
})();var state__10332__auto__ = (function (){var statearr_25853 = f__10331__auto__.call(null);(statearr_25853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10330__auto___25854);
return statearr_25853;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10332__auto__);
});})(c__10330__auto___25854,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__10330__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10330__auto__){
return (function (){var f__10331__auto__ = (function (){var switch__10315__auto__ = ((function (c__10330__auto__){
return (function (state_25917){var state_val_25918 = (state_25917[1]);if((state_val_25918 === 7))
{var inst_25913 = (state_25917[2]);var state_25917__$1 = state_25917;var statearr_25919_25935 = state_25917__$1;(statearr_25919_25935[2] = inst_25913);
(statearr_25919_25935[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25918 === 6))
{var inst_25906 = (state_25917[7]);var inst_25903 = (state_25917[8]);var inst_25910 = f.call(null,inst_25903,inst_25906);var inst_25903__$1 = inst_25910;var state_25917__$1 = (function (){var statearr_25920 = state_25917;(statearr_25920[8] = inst_25903__$1);
return statearr_25920;
})();var statearr_25921_25936 = state_25917__$1;(statearr_25921_25936[2] = null);
(statearr_25921_25936[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25918 === 5))
{var inst_25903 = (state_25917[8]);var state_25917__$1 = state_25917;var statearr_25922_25937 = state_25917__$1;(statearr_25922_25937[2] = inst_25903);
(statearr_25922_25937[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25918 === 4))
{var inst_25906 = (state_25917[7]);var inst_25906__$1 = (state_25917[2]);var inst_25907 = (inst_25906__$1 == null);var state_25917__$1 = (function (){var statearr_25923 = state_25917;(statearr_25923[7] = inst_25906__$1);
return statearr_25923;
})();if(cljs.core.truth_(inst_25907))
{var statearr_25924_25938 = state_25917__$1;(statearr_25924_25938[1] = 5);
} else
{var statearr_25925_25939 = state_25917__$1;(statearr_25925_25939[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25918 === 3))
{var inst_25915 = (state_25917[2]);var state_25917__$1 = state_25917;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25917__$1,inst_25915);
} else
{if((state_val_25918 === 2))
{var state_25917__$1 = state_25917;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25917__$1,4,ch);
} else
{if((state_val_25918 === 1))
{var inst_25903 = init;var state_25917__$1 = (function (){var statearr_25926 = state_25917;(statearr_25926[8] = inst_25903);
return statearr_25926;
})();var statearr_25927_25940 = state_25917__$1;(statearr_25927_25940[2] = null);
(statearr_25927_25940[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(c__10330__auto__))
;return ((function (switch__10315__auto__,c__10330__auto__){
return (function() {
var state_machine__10316__auto__ = null;
var state_machine__10316__auto____0 = (function (){var statearr_25931 = [null,null,null,null,null,null,null,null,null];(statearr_25931[0] = state_machine__10316__auto__);
(statearr_25931[1] = 1);
return statearr_25931;
});
var state_machine__10316__auto____1 = (function (state_25917){while(true){
var ret_value__10317__auto__ = (function (){try{while(true){
var result__10318__auto__ = switch__10315__auto__.call(null,state_25917);if(cljs.core.keyword_identical_QMARK_.call(null,result__10318__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10318__auto__;
}
break;
}
}catch (e25932){if((e25932 instanceof Object))
{var ex__10319__auto__ = e25932;var statearr_25933_25941 = state_25917;(statearr_25933_25941[5] = ex__10319__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25917);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25932;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10317__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25942 = state_25917;
state_25917 = G__25942;
continue;
}
} else
{return ret_value__10317__auto__;
}
break;
}
});
state_machine__10316__auto__ = function(state_25917){
switch(arguments.length){
case 0:
return state_machine__10316__auto____0.call(this);
case 1:
return state_machine__10316__auto____1.call(this,state_25917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10316__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10316__auto____0;
state_machine__10316__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10316__auto____1;
return state_machine__10316__auto__;
})()
;})(switch__10315__auto__,c__10330__auto__))
})();var state__10332__auto__ = (function (){var statearr_25934 = f__10331__auto__.call(null);(statearr_25934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10330__auto__);
return statearr_25934;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10332__auto__);
});})(c__10330__auto__))
);
return c__10330__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__10330__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10330__auto__){
return (function (){var f__10331__auto__ = (function (){var switch__10315__auto__ = ((function (c__10330__auto__){
return (function (state_26016){var state_val_26017 = (state_26016[1]);if((state_val_26017 === 7))
{var inst_25998 = (state_26016[2]);var state_26016__$1 = state_26016;var statearr_26018_26041 = state_26016__$1;(statearr_26018_26041[2] = inst_25998);
(statearr_26018_26041[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26017 === 1))
{var inst_25992 = cljs.core.seq.call(null,coll);var inst_25993 = inst_25992;var state_26016__$1 = (function (){var statearr_26019 = state_26016;(statearr_26019[7] = inst_25993);
return statearr_26019;
})();var statearr_26020_26042 = state_26016__$1;(statearr_26020_26042[2] = null);
(statearr_26020_26042[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26017 === 4))
{var inst_25993 = (state_26016[7]);var inst_25996 = cljs.core.first.call(null,inst_25993);var state_26016__$1 = state_26016;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26016__$1,7,ch,inst_25996);
} else
{if((state_val_26017 === 13))
{var inst_26010 = (state_26016[2]);var state_26016__$1 = state_26016;var statearr_26021_26043 = state_26016__$1;(statearr_26021_26043[2] = inst_26010);
(statearr_26021_26043[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26017 === 6))
{var inst_26001 = (state_26016[2]);var state_26016__$1 = state_26016;if(cljs.core.truth_(inst_26001))
{var statearr_26022_26044 = state_26016__$1;(statearr_26022_26044[1] = 8);
} else
{var statearr_26023_26045 = state_26016__$1;(statearr_26023_26045[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26017 === 3))
{var inst_26014 = (state_26016[2]);var state_26016__$1 = state_26016;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26016__$1,inst_26014);
} else
{if((state_val_26017 === 12))
{var state_26016__$1 = state_26016;var statearr_26024_26046 = state_26016__$1;(statearr_26024_26046[2] = null);
(statearr_26024_26046[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26017 === 2))
{var inst_25993 = (state_26016[7]);var state_26016__$1 = state_26016;if(cljs.core.truth_(inst_25993))
{var statearr_26025_26047 = state_26016__$1;(statearr_26025_26047[1] = 4);
} else
{var statearr_26026_26048 = state_26016__$1;(statearr_26026_26048[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26017 === 11))
{var inst_26007 = cljs.core.async.close_BANG_.call(null,ch);var state_26016__$1 = state_26016;var statearr_26027_26049 = state_26016__$1;(statearr_26027_26049[2] = inst_26007);
(statearr_26027_26049[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26017 === 9))
{var state_26016__$1 = state_26016;if(cljs.core.truth_(close_QMARK_))
{var statearr_26028_26050 = state_26016__$1;(statearr_26028_26050[1] = 11);
} else
{var statearr_26029_26051 = state_26016__$1;(statearr_26029_26051[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26017 === 5))
{var inst_25993 = (state_26016[7]);var state_26016__$1 = state_26016;var statearr_26030_26052 = state_26016__$1;(statearr_26030_26052[2] = inst_25993);
(statearr_26030_26052[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26017 === 10))
{var inst_26012 = (state_26016[2]);var state_26016__$1 = state_26016;var statearr_26031_26053 = state_26016__$1;(statearr_26031_26053[2] = inst_26012);
(statearr_26031_26053[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26017 === 8))
{var inst_25993 = (state_26016[7]);var inst_26003 = cljs.core.next.call(null,inst_25993);var inst_25993__$1 = inst_26003;var state_26016__$1 = (function (){var statearr_26032 = state_26016;(statearr_26032[7] = inst_25993__$1);
return statearr_26032;
})();var statearr_26033_26054 = state_26016__$1;(statearr_26033_26054[2] = null);
(statearr_26033_26054[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10330__auto__))
;return ((function (switch__10315__auto__,c__10330__auto__){
return (function() {
var state_machine__10316__auto__ = null;
var state_machine__10316__auto____0 = (function (){var statearr_26037 = [null,null,null,null,null,null,null,null];(statearr_26037[0] = state_machine__10316__auto__);
(statearr_26037[1] = 1);
return statearr_26037;
});
var state_machine__10316__auto____1 = (function (state_26016){while(true){
var ret_value__10317__auto__ = (function (){try{while(true){
var result__10318__auto__ = switch__10315__auto__.call(null,state_26016);if(cljs.core.keyword_identical_QMARK_.call(null,result__10318__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10318__auto__;
}
break;
}
}catch (e26038){if((e26038 instanceof Object))
{var ex__10319__auto__ = e26038;var statearr_26039_26055 = state_26016;(statearr_26039_26055[5] = ex__10319__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26016);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26038;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10317__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26056 = state_26016;
state_26016 = G__26056;
continue;
}
} else
{return ret_value__10317__auto__;
}
break;
}
});
state_machine__10316__auto__ = function(state_26016){
switch(arguments.length){
case 0:
return state_machine__10316__auto____0.call(this);
case 1:
return state_machine__10316__auto____1.call(this,state_26016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10316__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10316__auto____0;
state_machine__10316__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10316__auto____1;
return state_machine__10316__auto__;
})()
;})(switch__10315__auto__,c__10330__auto__))
})();var state__10332__auto__ = (function (){var statearr_26040 = f__10331__auto__.call(null);(statearr_26040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10330__auto__);
return statearr_26040;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10332__auto__);
});})(c__10330__auto__))
);
return c__10330__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj26058 = {};return obj26058;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__7863__auto__ = _;if(and__7863__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__7863__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__8502__auto__ = (((_ == null))?null:_);return (function (){var or__7875__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8502__auto__)]);if(or__7875__auto__)
{return or__7875__auto__;
} else
{var or__7875__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__7875__auto____$1)
{return or__7875__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj26060 = {};return obj26060;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__7863__auto__ = m;if(and__7863__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__7863__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__8502__auto__ = (((m == null))?null:m);return (function (){var or__7875__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8502__auto__)]);if(or__7875__auto__)
{return or__7875__auto__;
} else
{var or__7875__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__7875__auto____$1)
{return or__7875__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__7863__auto__ = m;if(and__7863__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__7863__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__8502__auto__ = (((m == null))?null:m);return (function (){var or__7875__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8502__auto__)]);if(or__7875__auto__)
{return or__7875__auto__;
} else
{var or__7875__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__7875__auto____$1)
{return or__7875__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__7863__auto__ = m;if(and__7863__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__7863__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__8502__auto__ = (((m == null))?null:m);return (function (){var or__7875__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8502__auto__)]);if(or__7875__auto__)
{return or__7875__auto__;
} else
{var or__7875__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__7875__auto____$1)
{return or__7875__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t26282 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26282 = (function (cs,ch,mult,meta26283){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta26283 = meta26283;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26282.cljs$lang$type = true;
cljs.core.async.t26282.cljs$lang$ctorStr = "cljs.core.async/t26282";
cljs.core.async.t26282.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8442__auto__,writer__8443__auto__,opt__8444__auto__){return cljs.core._write.call(null,writer__8443__auto__,"cljs.core.async/t26282");
});})(cs))
;
cljs.core.async.t26282.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t26282.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t26282.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t26282.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t26282.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26282.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t26282.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26284){var self__ = this;
var _26284__$1 = this;return self__.meta26283;
});})(cs))
;
cljs.core.async.t26282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26284,meta26283__$1){var self__ = this;
var _26284__$1 = this;return (new cljs.core.async.t26282(self__.cs,self__.ch,self__.mult,meta26283__$1));
});})(cs))
;
cljs.core.async.__GT_t26282 = ((function (cs){
return (function __GT_t26282(cs__$1,ch__$1,mult__$1,meta26283){return (new cljs.core.async.t26282(cs__$1,ch__$1,mult__$1,meta26283));
});})(cs))
;
}
return (new cljs.core.async.t26282(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__10330__auto___26503 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10330__auto___26503,cs,m,dchan,dctr,done){
return (function (){var f__10331__auto__ = (function (){var switch__10315__auto__ = ((function (c__10330__auto___26503,cs,m,dchan,dctr,done){
return (function (state_26415){var state_val_26416 = (state_26415[1]);if((state_val_26416 === 7))
{var inst_26411 = (state_26415[2]);var state_26415__$1 = state_26415;var statearr_26417_26504 = state_26415__$1;(statearr_26417_26504[2] = inst_26411);
(statearr_26417_26504[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26416 === 20))
{var inst_26316 = (state_26415[7]);var inst_26326 = cljs.core.first.call(null,inst_26316);var inst_26327 = cljs.core.nth.call(null,inst_26326,0,null);var inst_26328 = cljs.core.nth.call(null,inst_26326,1,null);var state_26415__$1 = (function (){var statearr_26418 = state_26415;(statearr_26418[8] = inst_26327);
return statearr_26418;
})();if(cljs.core.truth_(inst_26328))
{var statearr_26419_26505 = state_26415__$1;(statearr_26419_26505[1] = 22);
} else
{var statearr_26420_26506 = state_26415__$1;(statearr_26420_26506[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26416 === 27))
{var inst_26358 = (state_26415[9]);var inst_26287 = (state_26415[10]);var inst_26356 = (state_26415[11]);var inst_26363 = (state_26415[12]);var inst_26363__$1 = cljs.core._nth.call(null,inst_26356,inst_26358);var inst_26364 = cljs.core.async.put_BANG_.call(null,inst_26363__$1,inst_26287,done);var state_26415__$1 = (function (){var statearr_26421 = state_26415;(statearr_26421[12] = inst_26363__$1);
return statearr_26421;
})();if(cljs.core.truth_(inst_26364))
{var statearr_26422_26507 = state_26415__$1;(statearr_26422_26507[1] = 30);
} else
{var statearr_26423_26508 = state_26415__$1;(statearr_26423_26508[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26416 === 1))
{var state_26415__$1 = state_26415;var statearr_26424_26509 = state_26415__$1;(statearr_26424_26509[2] = null);
(statearr_26424_26509[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26416 === 24))
{var inst_26316 = (state_26415[7]);var inst_26333 = (state_26415[2]);var inst_26334 = cljs.core.next.call(null,inst_26316);var inst_26296 = inst_26334;var inst_26297 = null;var inst_26298 = 0;var inst_26299 = 0;var state_26415__$1 = (function (){var statearr_26425 = state_26415;(statearr_26425[13] = inst_26333);
(statearr_26425[14] = inst_26296);
(statearr_26425[15] = inst_26299);
(statearr_26425[16] = inst_26298);
(statearr_26425[17] = inst_26297);
return statearr_26425;
})();var statearr_26426_26510 = state_26415__$1;(statearr_26426_26510[2] = null);
(statearr_26426_26510[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26416 === 39))
{var state_26415__$1 = state_26415;var statearr_26430_26511 = state_26415__$1;(statearr_26430_26511[2] = null);
(statearr_26430_26511[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26416 === 4))
{var inst_26287 = (state_26415[10]);var inst_26287__$1 = (state_26415[2]);var inst_26288 = (inst_26287__$1 == null);var state_26415__$1 = (function (){var statearr_26431 = state_26415;(statearr_26431[10] = inst_26287__$1);
return statearr_26431;
})();if(cljs.core.truth_(inst_26288))
{var statearr_26432_26512 = state_26415__$1;(statearr_26432_26512[1] = 5);
} else
{var statearr_26433_26513 = state_26415__$1;(statearr_26433_26513[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26416 === 15))
{var inst_26296 = (state_26415[14]);var inst_26299 = (state_26415[15]);var inst_26298 = (state_26415[16]);var inst_26297 = (state_26415[17]);var inst_26312 = (state_26415[2]);var inst_26313 = (inst_26299 + 1);var tmp26427 = inst_26296;var tmp26428 = inst_26298;var tmp26429 = inst_26297;var inst_26296__$1 = tmp26427;var inst_26297__$1 = tmp26429;var inst_26298__$1 = tmp26428;var inst_26299__$1 = inst_26313;var state_26415__$1 = (function (){var statearr_26434 = state_26415;(statearr_26434[14] = inst_26296__$1);
(statearr_26434[18] = inst_26312);
(statearr_26434[15] = inst_26299__$1);
(statearr_26434[16] = inst_26298__$1);
(statearr_26434[17] = inst_26297__$1);
return statearr_26434;
})();var statearr_26435_26514 = state_26415__$1;(statearr_26435_26514[2] = null);
(statearr_26435_26514[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26416 === 21))
{var inst_26337 = (state_26415[2]);var state_26415__$1 = state_26415;var statearr_26439_26515 = state_26415__$1;(statearr_26439_26515[2] = inst_26337);
(statearr_26439_26515[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26416 === 31))
{var inst_26363 = (state_26415[12]);var inst_26367 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_26368 = cljs.core.async.untap_STAR_.call(null,m,inst_26363);var state_26415__$1 = (function (){var statearr_26440 = state_26415;(statearr_26440[19] = inst_26367);
return statearr_26440;
})();var statearr_26441_26516 = state_26415__$1;(statearr_26441_26516[2] = inst_26368);
(statearr_26441_26516[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26416 === 32))
{var inst_26358 = (state_26415[9]);var inst_26357 = (state_26415[20]);var inst_26356 = (state_26415[11]);var inst_26355 = (state_26415[21]);var inst_26370 = (state_26415[2]);var inst_26371 = (inst_26358 + 1);var tmp26436 = inst_26357;var tmp26437 = inst_26356;var tmp26438 = inst_26355;var inst_26355__$1 = tmp26438;var inst_26356__$1 = tmp26437;var inst_26357__$1 = tmp26436;var inst_26358__$1 = inst_26371;var state_26415__$1 = (function (){var statearr_26442 = state_26415;(statearr_26442[9] = inst_26358__$1);
(statearr_26442[20] = inst_26357__$1);
(statearr_26442[22] = inst_26370);
(statearr_26442[11] = inst_26356__$1);
(statearr_26442[21] = inst_26355__$1);
return statearr_26442;
})();var statearr_26443_26517 = state_26415__$1;(statearr_26443_26517[2] = null);
(statearr_26443_26517[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26416 === 40))
{var inst_26383 = (state_26415[23]);var inst_26387 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_26388 = cljs.core.async.untap_STAR_.call(null,m,inst_26383);var state_26415__$1 = (function (){var statearr_26444 = state_26415;(statearr_26444[24] = inst_26387);
return statearr_26444;
})();var statearr_26445_26518 = state_26415__$1;(statearr_26445_26518[2] = inst_26388);
(statearr_26445_26518[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26416 === 33))
{var inst_26374 = (state_26415[25]);var inst_26376 = cljs.core.chunked_seq_QMARK_.call(null,inst_26374);var state_26415__$1 = state_26415;if(inst_26376)
{var statearr_26446_26519 = state_26415__$1;(statearr_26446_26519[1] = 36);
} else
{var statearr_26447_26520 = state_26415__$1;(statearr_26447_26520[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26416 === 13))
{var inst_26306 = (state_26415[26]);var inst_26309 = cljs.core.async.close_BANG_.call(null,inst_26306);var state_26415__$1 = state_26415;var statearr_26448_26521 = state_26415__$1;(statearr_26448_26521[2] = inst_26309);
(statearr_26448_26521[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26416 === 22))
{var inst_26327 = (state_26415[8]);var inst_26330 = cljs.core.async.close_BANG_.call(null,inst_26327);var state_26415__$1 = state_26415;var statearr_26449_26522 = state_26415__$1;(statearr_26449_26522[2] = inst_26330);
(statearr_26449_26522[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26416 === 36))
{var inst_26374 = (state_26415[25]);var inst_26378 = cljs.core.chunk_first.call(null,inst_26374);var inst_26379 = cljs.core.chunk_rest.call(null,inst_26374);var inst_26380 = cljs.core.count.call(null,inst_26378);var inst_26355 = inst_26379;var inst_26356 = inst_26378;var inst_26357 = inst_26380;var inst_26358 = 0;var state_26415__$1 = (function (){var statearr_26450 = state_26415;(statearr_26450[9] = inst_26358);
(statearr_26450[20] = inst_26357);
(statearr_26450[11] = inst_26356);
(statearr_26450[21] = inst_26355);
return statearr_26450;
})();var statearr_26451_26523 = state_26415__$1;(statearr_26451_26523[2] = null);
(statearr_26451_26523[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26416 === 41))
{var inst_26374 = (state_26415[25]);var inst_26390 = (state_26415[2]);var inst_26391 = cljs.core.next.call(null,inst_26374);var inst_26355 = inst_26391;var inst_26356 = null;var inst_26357 = 0;var inst_26358 = 0;var state_26415__$1 = (function (){var statearr_26452 = state_26415;(statearr_26452[27] = inst_26390);
(statearr_26452[9] = inst_26358);
(statearr_26452[20] = inst_26357);
(statearr_26452[11] = inst_26356);
(statearr_26452[21] = inst_26355);
return statearr_26452;
})();var statearr_26453_26524 = state_26415__$1;(statearr_26453_26524[2] = null);
(statearr_26453_26524[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26416 === 43))
{var state_26415__$1 = state_26415;var statearr_26454_26525 = state_26415__$1;(statearr_26454_26525[2] = null);
(statearr_26454_26525[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26416 === 29))
{var inst_26399 = (state_26415[2]);var state_26415__$1 = state_26415;var statearr_26455_26526 = state_26415__$1;(statearr_26455_26526[2] = inst_26399);
(statearr_26455_26526[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26416 === 44))
{var inst_26408 = (state_26415[2]);var state_26415__$1 = (function (){var statearr_26456 = state_26415;(statearr_26456[28] = inst_26408);
return statearr_26456;
})();var statearr_26457_26527 = state_26415__$1;(statearr_26457_26527[2] = null);
(statearr_26457_26527[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26416 === 6))
{var inst_26347 = (state_26415[29]);var inst_26346 = cljs.core.deref.call(null,cs);var inst_26347__$1 = cljs.core.keys.call(null,inst_26346);var inst_26348 = cljs.core.count.call(null,inst_26347__$1);var inst_26349 = cljs.core.reset_BANG_.call(null,dctr,inst_26348);var inst_26354 = cljs.core.seq.call(null,inst_26347__$1);var inst_26355 = inst_26354;var inst_26356 = null;var inst_26357 = 0;var inst_26358 = 0;var state_26415__$1 = (function (){var statearr_26458 = state_26415;(statearr_26458[30] = inst_26349);
(statearr_26458[9] = inst_26358);
(statearr_26458[20] = inst_26357);
(statearr_26458[11] = inst_26356);
(statearr_26458[29] = inst_26347__$1);
(statearr_26458[21] = inst_26355);
return statearr_26458;
})();var statearr_26459_26528 = state_26415__$1;(statearr_26459_26528[2] = null);
(statearr_26459_26528[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26416 === 28))
{var inst_26374 = (state_26415[25]);var inst_26355 = (state_26415[21]);var inst_26374__$1 = cljs.core.seq.call(null,inst_26355);var state_26415__$1 = (function (){var statearr_26460 = state_26415;(statearr_26460[25] = inst_26374__$1);
return statearr_26460;
})();if(inst_26374__$1)
{var statearr_26461_26529 = state_26415__$1;(statearr_26461_26529[1] = 33);
} else
{var statearr_26462_26530 = state_26415__$1;(statearr_26462_26530[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26416 === 25))
{var inst_26358 = (state_26415[9]);var inst_26357 = (state_26415[20]);var inst_26360 = (inst_26358 < inst_26357);var inst_26361 = inst_26360;var state_26415__$1 = state_26415;if(cljs.core.truth_(inst_26361))
{var statearr_26463_26531 = state_26415__$1;(statearr_26463_26531[1] = 27);
} else
{var statearr_26464_26532 = state_26415__$1;(statearr_26464_26532[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26416 === 34))
{var state_26415__$1 = state_26415;var statearr_26465_26533 = state_26415__$1;(statearr_26465_26533[2] = null);
(statearr_26465_26533[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26416 === 17))
{var state_26415__$1 = state_26415;var statearr_26466_26534 = state_26415__$1;(statearr_26466_26534[2] = null);
(statearr_26466_26534[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26416 === 3))
{var inst_26413 = (state_26415[2]);var state_26415__$1 = state_26415;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26415__$1,inst_26413);
} else
{if((state_val_26416 === 12))
{var inst_26342 = (state_26415[2]);var state_26415__$1 = state_26415;var statearr_26467_26535 = state_26415__$1;(statearr_26467_26535[2] = inst_26342);
(statearr_26467_26535[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26416 === 2))
{var state_26415__$1 = state_26415;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26415__$1,4,ch);
} else
{if((state_val_26416 === 23))
{var state_26415__$1 = state_26415;var statearr_26468_26536 = state_26415__$1;(statearr_26468_26536[2] = null);
(statearr_26468_26536[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26416 === 35))
{var inst_26397 = (state_26415[2]);var state_26415__$1 = state_26415;var statearr_26469_26537 = state_26415__$1;(statearr_26469_26537[2] = inst_26397);
(statearr_26469_26537[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26416 === 19))
{var inst_26316 = (state_26415[7]);var inst_26320 = cljs.core.chunk_first.call(null,inst_26316);var inst_26321 = cljs.core.chunk_rest.call(null,inst_26316);var inst_26322 = cljs.core.count.call(null,inst_26320);var inst_26296 = inst_26321;var inst_26297 = inst_26320;var inst_26298 = inst_26322;var inst_26299 = 0;var state_26415__$1 = (function (){var statearr_26470 = state_26415;(statearr_26470[14] = inst_26296);
(statearr_26470[15] = inst_26299);
(statearr_26470[16] = inst_26298);
(statearr_26470[17] = inst_26297);
return statearr_26470;
})();var statearr_26471_26538 = state_26415__$1;(statearr_26471_26538[2] = null);
(statearr_26471_26538[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26416 === 11))
{var inst_26296 = (state_26415[14]);var inst_26316 = (state_26415[7]);var inst_26316__$1 = cljs.core.seq.call(null,inst_26296);var state_26415__$1 = (function (){var statearr_26472 = state_26415;(statearr_26472[7] = inst_26316__$1);
return statearr_26472;
})();if(inst_26316__$1)
{var statearr_26473_26539 = state_26415__$1;(statearr_26473_26539[1] = 16);
} else
{var statearr_26474_26540 = state_26415__$1;(statearr_26474_26540[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26416 === 9))
{var inst_26344 = (state_26415[2]);var state_26415__$1 = state_26415;var statearr_26475_26541 = state_26415__$1;(statearr_26475_26541[2] = inst_26344);
(statearr_26475_26541[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26416 === 5))
{var inst_26294 = cljs.core.deref.call(null,cs);var inst_26295 = cljs.core.seq.call(null,inst_26294);var inst_26296 = inst_26295;var inst_26297 = null;var inst_26298 = 0;var inst_26299 = 0;var state_26415__$1 = (function (){var statearr_26476 = state_26415;(statearr_26476[14] = inst_26296);
(statearr_26476[15] = inst_26299);
(statearr_26476[16] = inst_26298);
(statearr_26476[17] = inst_26297);
return statearr_26476;
})();var statearr_26477_26542 = state_26415__$1;(statearr_26477_26542[2] = null);
(statearr_26477_26542[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26416 === 14))
{var state_26415__$1 = state_26415;var statearr_26478_26543 = state_26415__$1;(statearr_26478_26543[2] = null);
(statearr_26478_26543[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26416 === 45))
{var inst_26405 = (state_26415[2]);var state_26415__$1 = state_26415;var statearr_26479_26544 = state_26415__$1;(statearr_26479_26544[2] = inst_26405);
(statearr_26479_26544[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26416 === 26))
{var inst_26347 = (state_26415[29]);var inst_26401 = (state_26415[2]);var inst_26402 = cljs.core.seq.call(null,inst_26347);var state_26415__$1 = (function (){var statearr_26480 = state_26415;(statearr_26480[31] = inst_26401);
return statearr_26480;
})();if(inst_26402)
{var statearr_26481_26545 = state_26415__$1;(statearr_26481_26545[1] = 42);
} else
{var statearr_26482_26546 = state_26415__$1;(statearr_26482_26546[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26416 === 16))
{var inst_26316 = (state_26415[7]);var inst_26318 = cljs.core.chunked_seq_QMARK_.call(null,inst_26316);var state_26415__$1 = state_26415;if(inst_26318)
{var statearr_26483_26547 = state_26415__$1;(statearr_26483_26547[1] = 19);
} else
{var statearr_26484_26548 = state_26415__$1;(statearr_26484_26548[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26416 === 38))
{var inst_26394 = (state_26415[2]);var state_26415__$1 = state_26415;var statearr_26485_26549 = state_26415__$1;(statearr_26485_26549[2] = inst_26394);
(statearr_26485_26549[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26416 === 30))
{var state_26415__$1 = state_26415;var statearr_26486_26550 = state_26415__$1;(statearr_26486_26550[2] = null);
(statearr_26486_26550[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26416 === 10))
{var inst_26299 = (state_26415[15]);var inst_26297 = (state_26415[17]);var inst_26305 = cljs.core._nth.call(null,inst_26297,inst_26299);var inst_26306 = cljs.core.nth.call(null,inst_26305,0,null);var inst_26307 = cljs.core.nth.call(null,inst_26305,1,null);var state_26415__$1 = (function (){var statearr_26487 = state_26415;(statearr_26487[26] = inst_26306);
return statearr_26487;
})();if(cljs.core.truth_(inst_26307))
{var statearr_26488_26551 = state_26415__$1;(statearr_26488_26551[1] = 13);
} else
{var statearr_26489_26552 = state_26415__$1;(statearr_26489_26552[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26416 === 18))
{var inst_26340 = (state_26415[2]);var state_26415__$1 = state_26415;var statearr_26490_26553 = state_26415__$1;(statearr_26490_26553[2] = inst_26340);
(statearr_26490_26553[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26416 === 42))
{var state_26415__$1 = state_26415;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26415__$1,45,dchan);
} else
{if((state_val_26416 === 37))
{var inst_26287 = (state_26415[10]);var inst_26374 = (state_26415[25]);var inst_26383 = (state_26415[23]);var inst_26383__$1 = cljs.core.first.call(null,inst_26374);var inst_26384 = cljs.core.async.put_BANG_.call(null,inst_26383__$1,inst_26287,done);var state_26415__$1 = (function (){var statearr_26491 = state_26415;(statearr_26491[23] = inst_26383__$1);
return statearr_26491;
})();if(cljs.core.truth_(inst_26384))
{var statearr_26492_26554 = state_26415__$1;(statearr_26492_26554[1] = 39);
} else
{var statearr_26493_26555 = state_26415__$1;(statearr_26493_26555[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26416 === 8))
{var inst_26299 = (state_26415[15]);var inst_26298 = (state_26415[16]);var inst_26301 = (inst_26299 < inst_26298);var inst_26302 = inst_26301;var state_26415__$1 = state_26415;if(cljs.core.truth_(inst_26302))
{var statearr_26494_26556 = state_26415__$1;(statearr_26494_26556[1] = 10);
} else
{var statearr_26495_26557 = state_26415__$1;(statearr_26495_26557[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10330__auto___26503,cs,m,dchan,dctr,done))
;return ((function (switch__10315__auto__,c__10330__auto___26503,cs,m,dchan,dctr,done){
return (function() {
var state_machine__10316__auto__ = null;
var state_machine__10316__auto____0 = (function (){var statearr_26499 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26499[0] = state_machine__10316__auto__);
(statearr_26499[1] = 1);
return statearr_26499;
});
var state_machine__10316__auto____1 = (function (state_26415){while(true){
var ret_value__10317__auto__ = (function (){try{while(true){
var result__10318__auto__ = switch__10315__auto__.call(null,state_26415);if(cljs.core.keyword_identical_QMARK_.call(null,result__10318__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10318__auto__;
}
break;
}
}catch (e26500){if((e26500 instanceof Object))
{var ex__10319__auto__ = e26500;var statearr_26501_26558 = state_26415;(statearr_26501_26558[5] = ex__10319__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26415);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26500;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10317__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26559 = state_26415;
state_26415 = G__26559;
continue;
}
} else
{return ret_value__10317__auto__;
}
break;
}
});
state_machine__10316__auto__ = function(state_26415){
switch(arguments.length){
case 0:
return state_machine__10316__auto____0.call(this);
case 1:
return state_machine__10316__auto____1.call(this,state_26415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10316__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10316__auto____0;
state_machine__10316__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10316__auto____1;
return state_machine__10316__auto__;
})()
;})(switch__10315__auto__,c__10330__auto___26503,cs,m,dchan,dctr,done))
})();var state__10332__auto__ = (function (){var statearr_26502 = f__10331__auto__.call(null);(statearr_26502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10330__auto___26503);
return statearr_26502;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10332__auto__);
});})(c__10330__auto___26503,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj26561 = {};return obj26561;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__7863__auto__ = m;if(and__7863__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__7863__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__8502__auto__ = (((m == null))?null:m);return (function (){var or__7875__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8502__auto__)]);if(or__7875__auto__)
{return or__7875__auto__;
} else
{var or__7875__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__7875__auto____$1)
{return or__7875__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__7863__auto__ = m;if(and__7863__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__7863__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__8502__auto__ = (((m == null))?null:m);return (function (){var or__7875__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8502__auto__)]);if(or__7875__auto__)
{return or__7875__auto__;
} else
{var or__7875__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__7875__auto____$1)
{return or__7875__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__7863__auto__ = m;if(and__7863__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__7863__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__8502__auto__ = (((m == null))?null:m);return (function (){var or__7875__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8502__auto__)]);if(or__7875__auto__)
{return or__7875__auto__;
} else
{var or__7875__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__7875__auto____$1)
{return or__7875__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__7863__auto__ = m;if(and__7863__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__7863__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__8502__auto__ = (((m == null))?null:m);return (function (){var or__7875__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8502__auto__)]);if(or__7875__auto__)
{return or__7875__auto__;
} else
{var or__7875__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__7875__auto____$1)
{return or__7875__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__7863__auto__ = m;if(and__7863__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__7863__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__8502__auto__ = (((m == null))?null:m);return (function (){var or__7875__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8502__auto__)]);if(or__7875__auto__)
{return or__7875__auto__;
} else
{var or__7875__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__7875__auto____$1)
{return or__7875__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t26681 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26681 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26682){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta26682 = meta26682;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26681.cljs$lang$type = true;
cljs.core.async.t26681.cljs$lang$ctorStr = "cljs.core.async/t26681";
cljs.core.async.t26681.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8442__auto__,writer__8443__auto__,opt__8444__auto__){return cljs.core._write.call(null,writer__8443__auto__,"cljs.core.async/t26681");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26681.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t26681.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26681.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26681.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26681.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26681.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26681.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26681.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26681.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26683){var self__ = this;
var _26683__$1 = this;return self__.meta26682;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26683,meta26682__$1){var self__ = this;
var _26683__$1 = this;return (new cljs.core.async.t26681(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26682__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t26681 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t26681(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26682){return (new cljs.core.async.t26681(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26682));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t26681(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__10330__auto___26800 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10330__auto___26800,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__10331__auto__ = (function (){var switch__10315__auto__ = ((function (c__10330__auto___26800,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26753){var state_val_26754 = (state_26753[1]);if((state_val_26754 === 7))
{var inst_26697 = (state_26753[7]);var inst_26702 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26697);var state_26753__$1 = state_26753;var statearr_26755_26801 = state_26753__$1;(statearr_26755_26801[2] = inst_26702);
(statearr_26755_26801[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26754 === 20))
{var inst_26712 = (state_26753[8]);var state_26753__$1 = state_26753;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26753__$1,23,out,inst_26712);
} else
{if((state_val_26754 === 1))
{var inst_26687 = (state_26753[9]);var inst_26687__$1 = calc_state.call(null);var inst_26688 = cljs.core.seq_QMARK_.call(null,inst_26687__$1);var state_26753__$1 = (function (){var statearr_26756 = state_26753;(statearr_26756[9] = inst_26687__$1);
return statearr_26756;
})();if(inst_26688)
{var statearr_26757_26802 = state_26753__$1;(statearr_26757_26802[1] = 2);
} else
{var statearr_26758_26803 = state_26753__$1;(statearr_26758_26803[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26754 === 24))
{var inst_26705 = (state_26753[10]);var inst_26697 = inst_26705;var state_26753__$1 = (function (){var statearr_26759 = state_26753;(statearr_26759[7] = inst_26697);
return statearr_26759;
})();var statearr_26760_26804 = state_26753__$1;(statearr_26760_26804[2] = null);
(statearr_26760_26804[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26754 === 4))
{var inst_26687 = (state_26753[9]);var inst_26693 = (state_26753[2]);var inst_26694 = cljs.core.get.call(null,inst_26693,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_26695 = cljs.core.get.call(null,inst_26693,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_26696 = cljs.core.get.call(null,inst_26693,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_26697 = inst_26687;var state_26753__$1 = (function (){var statearr_26761 = state_26753;(statearr_26761[11] = inst_26695);
(statearr_26761[12] = inst_26696);
(statearr_26761[13] = inst_26694);
(statearr_26761[7] = inst_26697);
return statearr_26761;
})();var statearr_26762_26805 = state_26753__$1;(statearr_26762_26805[2] = null);
(statearr_26762_26805[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26754 === 15))
{var state_26753__$1 = state_26753;var statearr_26763_26806 = state_26753__$1;(statearr_26763_26806[2] = null);
(statearr_26763_26806[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26754 === 21))
{var inst_26705 = (state_26753[10]);var inst_26697 = inst_26705;var state_26753__$1 = (function (){var statearr_26764 = state_26753;(statearr_26764[7] = inst_26697);
return statearr_26764;
})();var statearr_26765_26807 = state_26753__$1;(statearr_26765_26807[2] = null);
(statearr_26765_26807[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26754 === 13))
{var inst_26749 = (state_26753[2]);var state_26753__$1 = state_26753;var statearr_26766_26808 = state_26753__$1;(statearr_26766_26808[2] = inst_26749);
(statearr_26766_26808[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26754 === 22))
{var inst_26747 = (state_26753[2]);var state_26753__$1 = state_26753;var statearr_26767_26809 = state_26753__$1;(statearr_26767_26809[2] = inst_26747);
(statearr_26767_26809[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26754 === 6))
{var inst_26751 = (state_26753[2]);var state_26753__$1 = state_26753;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26753__$1,inst_26751);
} else
{if((state_val_26754 === 25))
{var state_26753__$1 = state_26753;var statearr_26768_26810 = state_26753__$1;(statearr_26768_26810[2] = null);
(statearr_26768_26810[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26754 === 17))
{var inst_26727 = (state_26753[14]);var state_26753__$1 = state_26753;var statearr_26769_26811 = state_26753__$1;(statearr_26769_26811[2] = inst_26727);
(statearr_26769_26811[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26754 === 3))
{var inst_26687 = (state_26753[9]);var state_26753__$1 = state_26753;var statearr_26770_26812 = state_26753__$1;(statearr_26770_26812[2] = inst_26687);
(statearr_26770_26812[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26754 === 12))
{var inst_26708 = (state_26753[15]);var inst_26727 = (state_26753[14]);var inst_26713 = (state_26753[16]);var inst_26727__$1 = inst_26708.call(null,inst_26713);var state_26753__$1 = (function (){var statearr_26771 = state_26753;(statearr_26771[14] = inst_26727__$1);
return statearr_26771;
})();if(cljs.core.truth_(inst_26727__$1))
{var statearr_26772_26813 = state_26753__$1;(statearr_26772_26813[1] = 17);
} else
{var statearr_26773_26814 = state_26753__$1;(statearr_26773_26814[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26754 === 2))
{var inst_26687 = (state_26753[9]);var inst_26690 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26687);var state_26753__$1 = state_26753;var statearr_26774_26815 = state_26753__$1;(statearr_26774_26815[2] = inst_26690);
(statearr_26774_26815[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26754 === 23))
{var inst_26738 = (state_26753[2]);var state_26753__$1 = state_26753;if(cljs.core.truth_(inst_26738))
{var statearr_26775_26816 = state_26753__$1;(statearr_26775_26816[1] = 24);
} else
{var statearr_26776_26817 = state_26753__$1;(statearr_26776_26817[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26754 === 19))
{var inst_26735 = (state_26753[2]);var state_26753__$1 = state_26753;if(cljs.core.truth_(inst_26735))
{var statearr_26777_26818 = state_26753__$1;(statearr_26777_26818[1] = 20);
} else
{var statearr_26778_26819 = state_26753__$1;(statearr_26778_26819[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26754 === 11))
{var inst_26712 = (state_26753[8]);var inst_26718 = (inst_26712 == null);var state_26753__$1 = state_26753;if(cljs.core.truth_(inst_26718))
{var statearr_26779_26820 = state_26753__$1;(statearr_26779_26820[1] = 14);
} else
{var statearr_26780_26821 = state_26753__$1;(statearr_26780_26821[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26754 === 9))
{var inst_26705 = (state_26753[10]);var inst_26705__$1 = (state_26753[2]);var inst_26706 = cljs.core.get.call(null,inst_26705__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_26707 = cljs.core.get.call(null,inst_26705__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_26708 = cljs.core.get.call(null,inst_26705__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_26753__$1 = (function (){var statearr_26781 = state_26753;(statearr_26781[15] = inst_26708);
(statearr_26781[17] = inst_26707);
(statearr_26781[10] = inst_26705__$1);
return statearr_26781;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_26753__$1,10,inst_26706);
} else
{if((state_val_26754 === 5))
{var inst_26697 = (state_26753[7]);var inst_26700 = cljs.core.seq_QMARK_.call(null,inst_26697);var state_26753__$1 = state_26753;if(inst_26700)
{var statearr_26782_26822 = state_26753__$1;(statearr_26782_26822[1] = 7);
} else
{var statearr_26783_26823 = state_26753__$1;(statearr_26783_26823[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26754 === 14))
{var inst_26713 = (state_26753[16]);var inst_26720 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26713);var state_26753__$1 = state_26753;var statearr_26784_26824 = state_26753__$1;(statearr_26784_26824[2] = inst_26720);
(statearr_26784_26824[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26754 === 26))
{var inst_26743 = (state_26753[2]);var state_26753__$1 = state_26753;var statearr_26785_26825 = state_26753__$1;(statearr_26785_26825[2] = inst_26743);
(statearr_26785_26825[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26754 === 16))
{var inst_26723 = (state_26753[2]);var inst_26724 = calc_state.call(null);var inst_26697 = inst_26724;var state_26753__$1 = (function (){var statearr_26786 = state_26753;(statearr_26786[18] = inst_26723);
(statearr_26786[7] = inst_26697);
return statearr_26786;
})();var statearr_26787_26826 = state_26753__$1;(statearr_26787_26826[2] = null);
(statearr_26787_26826[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26754 === 10))
{var inst_26712 = (state_26753[8]);var inst_26713 = (state_26753[16]);var inst_26711 = (state_26753[2]);var inst_26712__$1 = cljs.core.nth.call(null,inst_26711,0,null);var inst_26713__$1 = cljs.core.nth.call(null,inst_26711,1,null);var inst_26714 = (inst_26712__$1 == null);var inst_26715 = cljs.core._EQ_.call(null,inst_26713__$1,change);var inst_26716 = (inst_26714) || (inst_26715);var state_26753__$1 = (function (){var statearr_26788 = state_26753;(statearr_26788[8] = inst_26712__$1);
(statearr_26788[16] = inst_26713__$1);
return statearr_26788;
})();if(cljs.core.truth_(inst_26716))
{var statearr_26789_26827 = state_26753__$1;(statearr_26789_26827[1] = 11);
} else
{var statearr_26790_26828 = state_26753__$1;(statearr_26790_26828[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26754 === 18))
{var inst_26708 = (state_26753[15]);var inst_26713 = (state_26753[16]);var inst_26707 = (state_26753[17]);var inst_26730 = cljs.core.empty_QMARK_.call(null,inst_26708);var inst_26731 = inst_26707.call(null,inst_26713);var inst_26732 = cljs.core.not.call(null,inst_26731);var inst_26733 = (inst_26730) && (inst_26732);var state_26753__$1 = state_26753;var statearr_26791_26829 = state_26753__$1;(statearr_26791_26829[2] = inst_26733);
(statearr_26791_26829[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26754 === 8))
{var inst_26697 = (state_26753[7]);var state_26753__$1 = state_26753;var statearr_26792_26830 = state_26753__$1;(statearr_26792_26830[2] = inst_26697);
(statearr_26792_26830[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10330__auto___26800,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__10315__auto__,c__10330__auto___26800,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__10316__auto__ = null;
var state_machine__10316__auto____0 = (function (){var statearr_26796 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26796[0] = state_machine__10316__auto__);
(statearr_26796[1] = 1);
return statearr_26796;
});
var state_machine__10316__auto____1 = (function (state_26753){while(true){
var ret_value__10317__auto__ = (function (){try{while(true){
var result__10318__auto__ = switch__10315__auto__.call(null,state_26753);if(cljs.core.keyword_identical_QMARK_.call(null,result__10318__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10318__auto__;
}
break;
}
}catch (e26797){if((e26797 instanceof Object))
{var ex__10319__auto__ = e26797;var statearr_26798_26831 = state_26753;(statearr_26798_26831[5] = ex__10319__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26753);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26797;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10317__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26832 = state_26753;
state_26753 = G__26832;
continue;
}
} else
{return ret_value__10317__auto__;
}
break;
}
});
state_machine__10316__auto__ = function(state_26753){
switch(arguments.length){
case 0:
return state_machine__10316__auto____0.call(this);
case 1:
return state_machine__10316__auto____1.call(this,state_26753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10316__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10316__auto____0;
state_machine__10316__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10316__auto____1;
return state_machine__10316__auto__;
})()
;})(switch__10315__auto__,c__10330__auto___26800,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__10332__auto__ = (function (){var statearr_26799 = f__10331__auto__.call(null);(statearr_26799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10330__auto___26800);
return statearr_26799;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10332__auto__);
});})(c__10330__auto___26800,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj26834 = {};return obj26834;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__7863__auto__ = p;if(and__7863__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__7863__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__8502__auto__ = (((p == null))?null:p);return (function (){var or__7875__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8502__auto__)]);if(or__7875__auto__)
{return or__7875__auto__;
} else
{var or__7875__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__7875__auto____$1)
{return or__7875__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__7863__auto__ = p;if(and__7863__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__7863__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__8502__auto__ = (((p == null))?null:p);return (function (){var or__7875__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8502__auto__)]);if(or__7875__auto__)
{return or__7875__auto__;
} else
{var or__7875__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__7875__auto____$1)
{return or__7875__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__7863__auto__ = p;if(and__7863__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__7863__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__8502__auto__ = (((p == null))?null:p);return (function (){var or__7875__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8502__auto__)]);if(or__7875__auto__)
{return or__7875__auto__;
} else
{var or__7875__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7875__auto____$1)
{return or__7875__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__7863__auto__ = p;if(and__7863__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__7863__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__8502__auto__ = (((p == null))?null:p);return (function (){var or__7875__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8502__auto__)]);if(or__7875__auto__)
{return or__7875__auto__;
} else
{var or__7875__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7875__auto____$1)
{return or__7875__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__7875__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__7875__auto__))
{return or__7875__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7875__auto__,mults){
return (function (p1__26835_SHARP_){if(cljs.core.truth_(p1__26835_SHARP_.call(null,topic)))
{return p1__26835_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__26835_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7875__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t26950 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26950 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta26951){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta26951 = meta26951;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26950.cljs$lang$type = true;
cljs.core.async.t26950.cljs$lang$ctorStr = "cljs.core.async/t26950";
cljs.core.async.t26950.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8442__auto__,writer__8443__auto__,opt__8444__auto__){return cljs.core._write.call(null,writer__8443__auto__,"cljs.core.async/t26950");
});})(mults,ensure_mult))
;
cljs.core.async.t26950.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t26950.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t26950.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t26950.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t26950.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t26950.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26950.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t26950.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26952){var self__ = this;
var _26952__$1 = this;return self__.meta26951;
});})(mults,ensure_mult))
;
cljs.core.async.t26950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26952,meta26951__$1){var self__ = this;
var _26952__$1 = this;return (new cljs.core.async.t26950(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta26951__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t26950 = ((function (mults,ensure_mult){
return (function __GT_t26950(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26951){return (new cljs.core.async.t26950(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26951));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t26950(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__10330__auto___27064 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10330__auto___27064,mults,ensure_mult,p){
return (function (){var f__10331__auto__ = (function (){var switch__10315__auto__ = ((function (c__10330__auto___27064,mults,ensure_mult,p){
return (function (state_27020){var state_val_27021 = (state_27020[1]);if((state_val_27021 === 7))
{var inst_27016 = (state_27020[2]);var state_27020__$1 = state_27020;var statearr_27022_27065 = state_27020__$1;(statearr_27022_27065[2] = inst_27016);
(statearr_27022_27065[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27021 === 20))
{var state_27020__$1 = state_27020;var statearr_27023_27066 = state_27020__$1;(statearr_27023_27066[2] = null);
(statearr_27023_27066[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27021 === 1))
{var state_27020__$1 = state_27020;var statearr_27024_27067 = state_27020__$1;(statearr_27024_27067[2] = null);
(statearr_27024_27067[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27021 === 4))
{var inst_26955 = (state_27020[7]);var inst_26955__$1 = (state_27020[2]);var inst_26956 = (inst_26955__$1 == null);var state_27020__$1 = (function (){var statearr_27025 = state_27020;(statearr_27025[7] = inst_26955__$1);
return statearr_27025;
})();if(cljs.core.truth_(inst_26956))
{var statearr_27026_27068 = state_27020__$1;(statearr_27026_27068[1] = 5);
} else
{var statearr_27027_27069 = state_27020__$1;(statearr_27027_27069[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27021 === 15))
{var inst_26997 = (state_27020[2]);var state_27020__$1 = state_27020;var statearr_27028_27070 = state_27020__$1;(statearr_27028_27070[2] = inst_26997);
(statearr_27028_27070[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27021 === 21))
{var inst_27003 = (state_27020[8]);var inst_27011 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27003);var state_27020__$1 = state_27020;var statearr_27029_27071 = state_27020__$1;(statearr_27029_27071[2] = inst_27011);
(statearr_27029_27071[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27021 === 13))
{var inst_26979 = (state_27020[9]);var inst_26981 = cljs.core.chunked_seq_QMARK_.call(null,inst_26979);var state_27020__$1 = state_27020;if(inst_26981)
{var statearr_27030_27072 = state_27020__$1;(statearr_27030_27072[1] = 16);
} else
{var statearr_27031_27073 = state_27020__$1;(statearr_27031_27073[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27021 === 22))
{var inst_27013 = (state_27020[2]);var state_27020__$1 = (function (){var statearr_27032 = state_27020;(statearr_27032[10] = inst_27013);
return statearr_27032;
})();var statearr_27033_27074 = state_27020__$1;(statearr_27033_27074[2] = null);
(statearr_27033_27074[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27021 === 6))
{var inst_26955 = (state_27020[7]);var inst_27003 = (state_27020[8]);var inst_27003__$1 = topic_fn.call(null,inst_26955);var inst_27004 = cljs.core.deref.call(null,mults);var inst_27005 = cljs.core.get.call(null,inst_27004,inst_27003__$1);var inst_27006 = cljs.core.async.muxch_STAR_.call(null,inst_27005);var state_27020__$1 = (function (){var statearr_27034 = state_27020;(statearr_27034[8] = inst_27003__$1);
return statearr_27034;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27020__$1,19,inst_27006,inst_26955);
} else
{if((state_val_27021 === 17))
{var inst_26979 = (state_27020[9]);var inst_26988 = cljs.core.first.call(null,inst_26979);var inst_26989 = cljs.core.async.muxch_STAR_.call(null,inst_26988);var inst_26990 = cljs.core.async.close_BANG_.call(null,inst_26989);var inst_26991 = cljs.core.next.call(null,inst_26979);var inst_26965 = inst_26991;var inst_26966 = null;var inst_26967 = 0;var inst_26968 = 0;var state_27020__$1 = (function (){var statearr_27035 = state_27020;(statearr_27035[11] = inst_26968);
(statearr_27035[12] = inst_26965);
(statearr_27035[13] = inst_26990);
(statearr_27035[14] = inst_26966);
(statearr_27035[15] = inst_26967);
return statearr_27035;
})();var statearr_27036_27075 = state_27020__$1;(statearr_27036_27075[2] = null);
(statearr_27036_27075[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27021 === 3))
{var inst_27018 = (state_27020[2]);var state_27020__$1 = state_27020;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27020__$1,inst_27018);
} else
{if((state_val_27021 === 12))
{var inst_26999 = (state_27020[2]);var state_27020__$1 = state_27020;var statearr_27037_27076 = state_27020__$1;(statearr_27037_27076[2] = inst_26999);
(statearr_27037_27076[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27021 === 2))
{var state_27020__$1 = state_27020;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27020__$1,4,ch);
} else
{if((state_val_27021 === 19))
{var inst_27008 = (state_27020[2]);var state_27020__$1 = state_27020;if(cljs.core.truth_(inst_27008))
{var statearr_27038_27077 = state_27020__$1;(statearr_27038_27077[1] = 20);
} else
{var statearr_27039_27078 = state_27020__$1;(statearr_27039_27078[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27021 === 11))
{var inst_26979 = (state_27020[9]);var inst_26965 = (state_27020[12]);var inst_26979__$1 = cljs.core.seq.call(null,inst_26965);var state_27020__$1 = (function (){var statearr_27040 = state_27020;(statearr_27040[9] = inst_26979__$1);
return statearr_27040;
})();if(inst_26979__$1)
{var statearr_27041_27079 = state_27020__$1;(statearr_27041_27079[1] = 13);
} else
{var statearr_27042_27080 = state_27020__$1;(statearr_27042_27080[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27021 === 9))
{var inst_27001 = (state_27020[2]);var state_27020__$1 = state_27020;var statearr_27043_27081 = state_27020__$1;(statearr_27043_27081[2] = inst_27001);
(statearr_27043_27081[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27021 === 5))
{var inst_26962 = cljs.core.deref.call(null,mults);var inst_26963 = cljs.core.vals.call(null,inst_26962);var inst_26964 = cljs.core.seq.call(null,inst_26963);var inst_26965 = inst_26964;var inst_26966 = null;var inst_26967 = 0;var inst_26968 = 0;var state_27020__$1 = (function (){var statearr_27044 = state_27020;(statearr_27044[11] = inst_26968);
(statearr_27044[12] = inst_26965);
(statearr_27044[14] = inst_26966);
(statearr_27044[15] = inst_26967);
return statearr_27044;
})();var statearr_27045_27082 = state_27020__$1;(statearr_27045_27082[2] = null);
(statearr_27045_27082[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27021 === 14))
{var state_27020__$1 = state_27020;var statearr_27049_27083 = state_27020__$1;(statearr_27049_27083[2] = null);
(statearr_27049_27083[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27021 === 16))
{var inst_26979 = (state_27020[9]);var inst_26983 = cljs.core.chunk_first.call(null,inst_26979);var inst_26984 = cljs.core.chunk_rest.call(null,inst_26979);var inst_26985 = cljs.core.count.call(null,inst_26983);var inst_26965 = inst_26984;var inst_26966 = inst_26983;var inst_26967 = inst_26985;var inst_26968 = 0;var state_27020__$1 = (function (){var statearr_27050 = state_27020;(statearr_27050[11] = inst_26968);
(statearr_27050[12] = inst_26965);
(statearr_27050[14] = inst_26966);
(statearr_27050[15] = inst_26967);
return statearr_27050;
})();var statearr_27051_27084 = state_27020__$1;(statearr_27051_27084[2] = null);
(statearr_27051_27084[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27021 === 10))
{var inst_26968 = (state_27020[11]);var inst_26965 = (state_27020[12]);var inst_26966 = (state_27020[14]);var inst_26967 = (state_27020[15]);var inst_26973 = cljs.core._nth.call(null,inst_26966,inst_26968);var inst_26974 = cljs.core.async.muxch_STAR_.call(null,inst_26973);var inst_26975 = cljs.core.async.close_BANG_.call(null,inst_26974);var inst_26976 = (inst_26968 + 1);var tmp27046 = inst_26965;var tmp27047 = inst_26966;var tmp27048 = inst_26967;var inst_26965__$1 = tmp27046;var inst_26966__$1 = tmp27047;var inst_26967__$1 = tmp27048;var inst_26968__$1 = inst_26976;var state_27020__$1 = (function (){var statearr_27052 = state_27020;(statearr_27052[11] = inst_26968__$1);
(statearr_27052[16] = inst_26975);
(statearr_27052[12] = inst_26965__$1);
(statearr_27052[14] = inst_26966__$1);
(statearr_27052[15] = inst_26967__$1);
return statearr_27052;
})();var statearr_27053_27085 = state_27020__$1;(statearr_27053_27085[2] = null);
(statearr_27053_27085[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27021 === 18))
{var inst_26994 = (state_27020[2]);var state_27020__$1 = state_27020;var statearr_27054_27086 = state_27020__$1;(statearr_27054_27086[2] = inst_26994);
(statearr_27054_27086[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27021 === 8))
{var inst_26968 = (state_27020[11]);var inst_26967 = (state_27020[15]);var inst_26970 = (inst_26968 < inst_26967);var inst_26971 = inst_26970;var state_27020__$1 = state_27020;if(cljs.core.truth_(inst_26971))
{var statearr_27055_27087 = state_27020__$1;(statearr_27055_27087[1] = 10);
} else
{var statearr_27056_27088 = state_27020__$1;(statearr_27056_27088[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10330__auto___27064,mults,ensure_mult,p))
;return ((function (switch__10315__auto__,c__10330__auto___27064,mults,ensure_mult,p){
return (function() {
var state_machine__10316__auto__ = null;
var state_machine__10316__auto____0 = (function (){var statearr_27060 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27060[0] = state_machine__10316__auto__);
(statearr_27060[1] = 1);
return statearr_27060;
});
var state_machine__10316__auto____1 = (function (state_27020){while(true){
var ret_value__10317__auto__ = (function (){try{while(true){
var result__10318__auto__ = switch__10315__auto__.call(null,state_27020);if(cljs.core.keyword_identical_QMARK_.call(null,result__10318__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10318__auto__;
}
break;
}
}catch (e27061){if((e27061 instanceof Object))
{var ex__10319__auto__ = e27061;var statearr_27062_27089 = state_27020;(statearr_27062_27089[5] = ex__10319__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27020);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27061;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10317__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27090 = state_27020;
state_27020 = G__27090;
continue;
}
} else
{return ret_value__10317__auto__;
}
break;
}
});
state_machine__10316__auto__ = function(state_27020){
switch(arguments.length){
case 0:
return state_machine__10316__auto____0.call(this);
case 1:
return state_machine__10316__auto____1.call(this,state_27020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10316__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10316__auto____0;
state_machine__10316__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10316__auto____1;
return state_machine__10316__auto__;
})()
;})(switch__10315__auto__,c__10330__auto___27064,mults,ensure_mult,p))
})();var state__10332__auto__ = (function (){var statearr_27063 = f__10331__auto__.call(null);(statearr_27063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10330__auto___27064);
return statearr_27063;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10332__auto__);
});})(c__10330__auto___27064,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__10330__auto___27227 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10330__auto___27227,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__10331__auto__ = (function (){var switch__10315__auto__ = ((function (c__10330__auto___27227,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27197){var state_val_27198 = (state_27197[1]);if((state_val_27198 === 7))
{var state_27197__$1 = state_27197;var statearr_27199_27228 = state_27197__$1;(statearr_27199_27228[2] = null);
(statearr_27199_27228[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27198 === 1))
{var state_27197__$1 = state_27197;var statearr_27200_27229 = state_27197__$1;(statearr_27200_27229[2] = null);
(statearr_27200_27229[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27198 === 4))
{var inst_27161 = (state_27197[7]);var inst_27163 = (inst_27161 < cnt);var state_27197__$1 = state_27197;if(cljs.core.truth_(inst_27163))
{var statearr_27201_27230 = state_27197__$1;(statearr_27201_27230[1] = 6);
} else
{var statearr_27202_27231 = state_27197__$1;(statearr_27202_27231[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27198 === 15))
{var inst_27193 = (state_27197[2]);var state_27197__$1 = state_27197;var statearr_27203_27232 = state_27197__$1;(statearr_27203_27232[2] = inst_27193);
(statearr_27203_27232[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27198 === 13))
{var inst_27186 = cljs.core.async.close_BANG_.call(null,out);var state_27197__$1 = state_27197;var statearr_27204_27233 = state_27197__$1;(statearr_27204_27233[2] = inst_27186);
(statearr_27204_27233[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27198 === 6))
{var state_27197__$1 = state_27197;var statearr_27205_27234 = state_27197__$1;(statearr_27205_27234[2] = null);
(statearr_27205_27234[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27198 === 3))
{var inst_27195 = (state_27197[2]);var state_27197__$1 = state_27197;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27197__$1,inst_27195);
} else
{if((state_val_27198 === 12))
{var inst_27183 = (state_27197[8]);var inst_27183__$1 = (state_27197[2]);var inst_27184 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27183__$1);var state_27197__$1 = (function (){var statearr_27206 = state_27197;(statearr_27206[8] = inst_27183__$1);
return statearr_27206;
})();if(cljs.core.truth_(inst_27184))
{var statearr_27207_27235 = state_27197__$1;(statearr_27207_27235[1] = 13);
} else
{var statearr_27208_27236 = state_27197__$1;(statearr_27208_27236[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27198 === 2))
{var inst_27160 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_27161 = 0;var state_27197__$1 = (function (){var statearr_27209 = state_27197;(statearr_27209[9] = inst_27160);
(statearr_27209[7] = inst_27161);
return statearr_27209;
})();var statearr_27210_27237 = state_27197__$1;(statearr_27210_27237[2] = null);
(statearr_27210_27237[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27198 === 11))
{var inst_27161 = (state_27197[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27197,10,Object,null,9);var inst_27170 = chs__$1.call(null,inst_27161);var inst_27171 = done.call(null,inst_27161);var inst_27172 = cljs.core.async.take_BANG_.call(null,inst_27170,inst_27171);var state_27197__$1 = state_27197;var statearr_27211_27238 = state_27197__$1;(statearr_27211_27238[2] = inst_27172);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27197__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27198 === 9))
{var inst_27161 = (state_27197[7]);var inst_27174 = (state_27197[2]);var inst_27175 = (inst_27161 + 1);var inst_27161__$1 = inst_27175;var state_27197__$1 = (function (){var statearr_27212 = state_27197;(statearr_27212[10] = inst_27174);
(statearr_27212[7] = inst_27161__$1);
return statearr_27212;
})();var statearr_27213_27239 = state_27197__$1;(statearr_27213_27239[2] = null);
(statearr_27213_27239[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27198 === 5))
{var inst_27181 = (state_27197[2]);var state_27197__$1 = (function (){var statearr_27214 = state_27197;(statearr_27214[11] = inst_27181);
return statearr_27214;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27197__$1,12,dchan);
} else
{if((state_val_27198 === 14))
{var inst_27183 = (state_27197[8]);var inst_27188 = cljs.core.apply.call(null,f,inst_27183);var state_27197__$1 = state_27197;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27197__$1,16,out,inst_27188);
} else
{if((state_val_27198 === 16))
{var inst_27190 = (state_27197[2]);var state_27197__$1 = (function (){var statearr_27215 = state_27197;(statearr_27215[12] = inst_27190);
return statearr_27215;
})();var statearr_27216_27240 = state_27197__$1;(statearr_27216_27240[2] = null);
(statearr_27216_27240[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27198 === 10))
{var inst_27165 = (state_27197[2]);var inst_27166 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_27197__$1 = (function (){var statearr_27217 = state_27197;(statearr_27217[13] = inst_27165);
return statearr_27217;
})();var statearr_27218_27241 = state_27197__$1;(statearr_27218_27241[2] = inst_27166);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27197__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27198 === 8))
{var inst_27179 = (state_27197[2]);var state_27197__$1 = state_27197;var statearr_27219_27242 = state_27197__$1;(statearr_27219_27242[2] = inst_27179);
(statearr_27219_27242[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10330__auto___27227,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__10315__auto__,c__10330__auto___27227,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__10316__auto__ = null;
var state_machine__10316__auto____0 = (function (){var statearr_27223 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27223[0] = state_machine__10316__auto__);
(statearr_27223[1] = 1);
return statearr_27223;
});
var state_machine__10316__auto____1 = (function (state_27197){while(true){
var ret_value__10317__auto__ = (function (){try{while(true){
var result__10318__auto__ = switch__10315__auto__.call(null,state_27197);if(cljs.core.keyword_identical_QMARK_.call(null,result__10318__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10318__auto__;
}
break;
}
}catch (e27224){if((e27224 instanceof Object))
{var ex__10319__auto__ = e27224;var statearr_27225_27243 = state_27197;(statearr_27225_27243[5] = ex__10319__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27197);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27224;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10317__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27244 = state_27197;
state_27197 = G__27244;
continue;
}
} else
{return ret_value__10317__auto__;
}
break;
}
});
state_machine__10316__auto__ = function(state_27197){
switch(arguments.length){
case 0:
return state_machine__10316__auto____0.call(this);
case 1:
return state_machine__10316__auto____1.call(this,state_27197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10316__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10316__auto____0;
state_machine__10316__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10316__auto____1;
return state_machine__10316__auto__;
})()
;})(switch__10315__auto__,c__10330__auto___27227,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__10332__auto__ = (function (){var statearr_27226 = f__10331__auto__.call(null);(statearr_27226[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10330__auto___27227);
return statearr_27226;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10332__auto__);
});})(c__10330__auto___27227,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10330__auto___27352 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10330__auto___27352,out){
return (function (){var f__10331__auto__ = (function (){var switch__10315__auto__ = ((function (c__10330__auto___27352,out){
return (function (state_27328){var state_val_27329 = (state_27328[1]);if((state_val_27329 === 7))
{var inst_27308 = (state_27328[7]);var inst_27307 = (state_27328[8]);var inst_27307__$1 = (state_27328[2]);var inst_27308__$1 = cljs.core.nth.call(null,inst_27307__$1,0,null);var inst_27309 = cljs.core.nth.call(null,inst_27307__$1,1,null);var inst_27310 = (inst_27308__$1 == null);var state_27328__$1 = (function (){var statearr_27330 = state_27328;(statearr_27330[7] = inst_27308__$1);
(statearr_27330[8] = inst_27307__$1);
(statearr_27330[9] = inst_27309);
return statearr_27330;
})();if(cljs.core.truth_(inst_27310))
{var statearr_27331_27353 = state_27328__$1;(statearr_27331_27353[1] = 8);
} else
{var statearr_27332_27354 = state_27328__$1;(statearr_27332_27354[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27329 === 1))
{var inst_27299 = cljs.core.vec.call(null,chs);var inst_27300 = inst_27299;var state_27328__$1 = (function (){var statearr_27333 = state_27328;(statearr_27333[10] = inst_27300);
return statearr_27333;
})();var statearr_27334_27355 = state_27328__$1;(statearr_27334_27355[2] = null);
(statearr_27334_27355[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27329 === 4))
{var inst_27300 = (state_27328[10]);var state_27328__$1 = state_27328;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_27328__$1,7,inst_27300);
} else
{if((state_val_27329 === 6))
{var inst_27324 = (state_27328[2]);var state_27328__$1 = state_27328;var statearr_27335_27356 = state_27328__$1;(statearr_27335_27356[2] = inst_27324);
(statearr_27335_27356[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27329 === 3))
{var inst_27326 = (state_27328[2]);var state_27328__$1 = state_27328;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27328__$1,inst_27326);
} else
{if((state_val_27329 === 2))
{var inst_27300 = (state_27328[10]);var inst_27302 = cljs.core.count.call(null,inst_27300);var inst_27303 = (inst_27302 > 0);var state_27328__$1 = state_27328;if(cljs.core.truth_(inst_27303))
{var statearr_27337_27357 = state_27328__$1;(statearr_27337_27357[1] = 4);
} else
{var statearr_27338_27358 = state_27328__$1;(statearr_27338_27358[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27329 === 11))
{var inst_27300 = (state_27328[10]);var inst_27317 = (state_27328[2]);var tmp27336 = inst_27300;var inst_27300__$1 = tmp27336;var state_27328__$1 = (function (){var statearr_27339 = state_27328;(statearr_27339[10] = inst_27300__$1);
(statearr_27339[11] = inst_27317);
return statearr_27339;
})();var statearr_27340_27359 = state_27328__$1;(statearr_27340_27359[2] = null);
(statearr_27340_27359[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27329 === 9))
{var inst_27308 = (state_27328[7]);var state_27328__$1 = state_27328;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27328__$1,11,out,inst_27308);
} else
{if((state_val_27329 === 5))
{var inst_27322 = cljs.core.async.close_BANG_.call(null,out);var state_27328__$1 = state_27328;var statearr_27341_27360 = state_27328__$1;(statearr_27341_27360[2] = inst_27322);
(statearr_27341_27360[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27329 === 10))
{var inst_27320 = (state_27328[2]);var state_27328__$1 = state_27328;var statearr_27342_27361 = state_27328__$1;(statearr_27342_27361[2] = inst_27320);
(statearr_27342_27361[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27329 === 8))
{var inst_27308 = (state_27328[7]);var inst_27307 = (state_27328[8]);var inst_27300 = (state_27328[10]);var inst_27309 = (state_27328[9]);var inst_27312 = (function (){var c = inst_27309;var v = inst_27308;var vec__27305 = inst_27307;var cs = inst_27300;return ((function (c,v,vec__27305,cs,inst_27308,inst_27307,inst_27300,inst_27309,state_val_27329,c__10330__auto___27352,out){
return (function (p1__27245_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__27245_SHARP_);
});
;})(c,v,vec__27305,cs,inst_27308,inst_27307,inst_27300,inst_27309,state_val_27329,c__10330__auto___27352,out))
})();var inst_27313 = cljs.core.filterv.call(null,inst_27312,inst_27300);var inst_27300__$1 = inst_27313;var state_27328__$1 = (function (){var statearr_27343 = state_27328;(statearr_27343[10] = inst_27300__$1);
return statearr_27343;
})();var statearr_27344_27362 = state_27328__$1;(statearr_27344_27362[2] = null);
(statearr_27344_27362[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10330__auto___27352,out))
;return ((function (switch__10315__auto__,c__10330__auto___27352,out){
return (function() {
var state_machine__10316__auto__ = null;
var state_machine__10316__auto____0 = (function (){var statearr_27348 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27348[0] = state_machine__10316__auto__);
(statearr_27348[1] = 1);
return statearr_27348;
});
var state_machine__10316__auto____1 = (function (state_27328){while(true){
var ret_value__10317__auto__ = (function (){try{while(true){
var result__10318__auto__ = switch__10315__auto__.call(null,state_27328);if(cljs.core.keyword_identical_QMARK_.call(null,result__10318__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10318__auto__;
}
break;
}
}catch (e27349){if((e27349 instanceof Object))
{var ex__10319__auto__ = e27349;var statearr_27350_27363 = state_27328;(statearr_27350_27363[5] = ex__10319__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27328);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27349;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10317__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27364 = state_27328;
state_27328 = G__27364;
continue;
}
} else
{return ret_value__10317__auto__;
}
break;
}
});
state_machine__10316__auto__ = function(state_27328){
switch(arguments.length){
case 0:
return state_machine__10316__auto____0.call(this);
case 1:
return state_machine__10316__auto____1.call(this,state_27328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10316__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10316__auto____0;
state_machine__10316__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10316__auto____1;
return state_machine__10316__auto__;
})()
;})(switch__10315__auto__,c__10330__auto___27352,out))
})();var state__10332__auto__ = (function (){var statearr_27351 = f__10331__auto__.call(null);(statearr_27351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10330__auto___27352);
return statearr_27351;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10332__auto__);
});})(c__10330__auto___27352,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10330__auto___27457 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10330__auto___27457,out){
return (function (){var f__10331__auto__ = (function (){var switch__10315__auto__ = ((function (c__10330__auto___27457,out){
return (function (state_27434){var state_val_27435 = (state_27434[1]);if((state_val_27435 === 7))
{var inst_27416 = (state_27434[7]);var inst_27416__$1 = (state_27434[2]);var inst_27417 = (inst_27416__$1 == null);var inst_27418 = cljs.core.not.call(null,inst_27417);var state_27434__$1 = (function (){var statearr_27436 = state_27434;(statearr_27436[7] = inst_27416__$1);
return statearr_27436;
})();if(inst_27418)
{var statearr_27437_27458 = state_27434__$1;(statearr_27437_27458[1] = 8);
} else
{var statearr_27438_27459 = state_27434__$1;(statearr_27438_27459[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27435 === 1))
{var inst_27411 = 0;var state_27434__$1 = (function (){var statearr_27439 = state_27434;(statearr_27439[8] = inst_27411);
return statearr_27439;
})();var statearr_27440_27460 = state_27434__$1;(statearr_27440_27460[2] = null);
(statearr_27440_27460[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27435 === 4))
{var state_27434__$1 = state_27434;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27434__$1,7,ch);
} else
{if((state_val_27435 === 6))
{var inst_27429 = (state_27434[2]);var state_27434__$1 = state_27434;var statearr_27441_27461 = state_27434__$1;(statearr_27441_27461[2] = inst_27429);
(statearr_27441_27461[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27435 === 3))
{var inst_27431 = (state_27434[2]);var inst_27432 = cljs.core.async.close_BANG_.call(null,out);var state_27434__$1 = (function (){var statearr_27442 = state_27434;(statearr_27442[9] = inst_27431);
return statearr_27442;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27434__$1,inst_27432);
} else
{if((state_val_27435 === 2))
{var inst_27411 = (state_27434[8]);var inst_27413 = (inst_27411 < n);var state_27434__$1 = state_27434;if(cljs.core.truth_(inst_27413))
{var statearr_27443_27462 = state_27434__$1;(statearr_27443_27462[1] = 4);
} else
{var statearr_27444_27463 = state_27434__$1;(statearr_27444_27463[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27435 === 11))
{var inst_27411 = (state_27434[8]);var inst_27421 = (state_27434[2]);var inst_27422 = (inst_27411 + 1);var inst_27411__$1 = inst_27422;var state_27434__$1 = (function (){var statearr_27445 = state_27434;(statearr_27445[8] = inst_27411__$1);
(statearr_27445[10] = inst_27421);
return statearr_27445;
})();var statearr_27446_27464 = state_27434__$1;(statearr_27446_27464[2] = null);
(statearr_27446_27464[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27435 === 9))
{var state_27434__$1 = state_27434;var statearr_27447_27465 = state_27434__$1;(statearr_27447_27465[2] = null);
(statearr_27447_27465[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27435 === 5))
{var state_27434__$1 = state_27434;var statearr_27448_27466 = state_27434__$1;(statearr_27448_27466[2] = null);
(statearr_27448_27466[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27435 === 10))
{var inst_27426 = (state_27434[2]);var state_27434__$1 = state_27434;var statearr_27449_27467 = state_27434__$1;(statearr_27449_27467[2] = inst_27426);
(statearr_27449_27467[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27435 === 8))
{var inst_27416 = (state_27434[7]);var state_27434__$1 = state_27434;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27434__$1,11,out,inst_27416);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10330__auto___27457,out))
;return ((function (switch__10315__auto__,c__10330__auto___27457,out){
return (function() {
var state_machine__10316__auto__ = null;
var state_machine__10316__auto____0 = (function (){var statearr_27453 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27453[0] = state_machine__10316__auto__);
(statearr_27453[1] = 1);
return statearr_27453;
});
var state_machine__10316__auto____1 = (function (state_27434){while(true){
var ret_value__10317__auto__ = (function (){try{while(true){
var result__10318__auto__ = switch__10315__auto__.call(null,state_27434);if(cljs.core.keyword_identical_QMARK_.call(null,result__10318__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10318__auto__;
}
break;
}
}catch (e27454){if((e27454 instanceof Object))
{var ex__10319__auto__ = e27454;var statearr_27455_27468 = state_27434;(statearr_27455_27468[5] = ex__10319__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27434);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27454;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10317__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27469 = state_27434;
state_27434 = G__27469;
continue;
}
} else
{return ret_value__10317__auto__;
}
break;
}
});
state_machine__10316__auto__ = function(state_27434){
switch(arguments.length){
case 0:
return state_machine__10316__auto____0.call(this);
case 1:
return state_machine__10316__auto____1.call(this,state_27434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10316__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10316__auto____0;
state_machine__10316__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10316__auto____1;
return state_machine__10316__auto__;
})()
;})(switch__10315__auto__,c__10330__auto___27457,out))
})();var state__10332__auto__ = (function (){var statearr_27456 = f__10331__auto__.call(null);(statearr_27456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10330__auto___27457);
return statearr_27456;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10332__auto__);
});})(c__10330__auto___27457,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10330__auto___27566 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10330__auto___27566,out){
return (function (){var f__10331__auto__ = (function (){var switch__10315__auto__ = ((function (c__10330__auto___27566,out){
return (function (state_27541){var state_val_27542 = (state_27541[1]);if((state_val_27542 === 7))
{var inst_27536 = (state_27541[2]);var state_27541__$1 = state_27541;var statearr_27543_27567 = state_27541__$1;(statearr_27543_27567[2] = inst_27536);
(statearr_27543_27567[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27542 === 1))
{var inst_27518 = null;var state_27541__$1 = (function (){var statearr_27544 = state_27541;(statearr_27544[7] = inst_27518);
return statearr_27544;
})();var statearr_27545_27568 = state_27541__$1;(statearr_27545_27568[2] = null);
(statearr_27545_27568[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27542 === 4))
{var inst_27521 = (state_27541[8]);var inst_27521__$1 = (state_27541[2]);var inst_27522 = (inst_27521__$1 == null);var inst_27523 = cljs.core.not.call(null,inst_27522);var state_27541__$1 = (function (){var statearr_27546 = state_27541;(statearr_27546[8] = inst_27521__$1);
return statearr_27546;
})();if(inst_27523)
{var statearr_27547_27569 = state_27541__$1;(statearr_27547_27569[1] = 5);
} else
{var statearr_27548_27570 = state_27541__$1;(statearr_27548_27570[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27542 === 6))
{var state_27541__$1 = state_27541;var statearr_27549_27571 = state_27541__$1;(statearr_27549_27571[2] = null);
(statearr_27549_27571[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27542 === 3))
{var inst_27538 = (state_27541[2]);var inst_27539 = cljs.core.async.close_BANG_.call(null,out);var state_27541__$1 = (function (){var statearr_27550 = state_27541;(statearr_27550[9] = inst_27538);
return statearr_27550;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27541__$1,inst_27539);
} else
{if((state_val_27542 === 2))
{var state_27541__$1 = state_27541;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27541__$1,4,ch);
} else
{if((state_val_27542 === 11))
{var inst_27521 = (state_27541[8]);var inst_27530 = (state_27541[2]);var inst_27518 = inst_27521;var state_27541__$1 = (function (){var statearr_27551 = state_27541;(statearr_27551[7] = inst_27518);
(statearr_27551[10] = inst_27530);
return statearr_27551;
})();var statearr_27552_27572 = state_27541__$1;(statearr_27552_27572[2] = null);
(statearr_27552_27572[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27542 === 9))
{var inst_27521 = (state_27541[8]);var state_27541__$1 = state_27541;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27541__$1,11,out,inst_27521);
} else
{if((state_val_27542 === 5))
{var inst_27521 = (state_27541[8]);var inst_27518 = (state_27541[7]);var inst_27525 = cljs.core._EQ_.call(null,inst_27521,inst_27518);var state_27541__$1 = state_27541;if(inst_27525)
{var statearr_27554_27573 = state_27541__$1;(statearr_27554_27573[1] = 8);
} else
{var statearr_27555_27574 = state_27541__$1;(statearr_27555_27574[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27542 === 10))
{var inst_27533 = (state_27541[2]);var state_27541__$1 = state_27541;var statearr_27556_27575 = state_27541__$1;(statearr_27556_27575[2] = inst_27533);
(statearr_27556_27575[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27542 === 8))
{var inst_27518 = (state_27541[7]);var tmp27553 = inst_27518;var inst_27518__$1 = tmp27553;var state_27541__$1 = (function (){var statearr_27557 = state_27541;(statearr_27557[7] = inst_27518__$1);
return statearr_27557;
})();var statearr_27558_27576 = state_27541__$1;(statearr_27558_27576[2] = null);
(statearr_27558_27576[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10330__auto___27566,out))
;return ((function (switch__10315__auto__,c__10330__auto___27566,out){
return (function() {
var state_machine__10316__auto__ = null;
var state_machine__10316__auto____0 = (function (){var statearr_27562 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27562[0] = state_machine__10316__auto__);
(statearr_27562[1] = 1);
return statearr_27562;
});
var state_machine__10316__auto____1 = (function (state_27541){while(true){
var ret_value__10317__auto__ = (function (){try{while(true){
var result__10318__auto__ = switch__10315__auto__.call(null,state_27541);if(cljs.core.keyword_identical_QMARK_.call(null,result__10318__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10318__auto__;
}
break;
}
}catch (e27563){if((e27563 instanceof Object))
{var ex__10319__auto__ = e27563;var statearr_27564_27577 = state_27541;(statearr_27564_27577[5] = ex__10319__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27541);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27563;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10317__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27578 = state_27541;
state_27541 = G__27578;
continue;
}
} else
{return ret_value__10317__auto__;
}
break;
}
});
state_machine__10316__auto__ = function(state_27541){
switch(arguments.length){
case 0:
return state_machine__10316__auto____0.call(this);
case 1:
return state_machine__10316__auto____1.call(this,state_27541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10316__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10316__auto____0;
state_machine__10316__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10316__auto____1;
return state_machine__10316__auto__;
})()
;})(switch__10315__auto__,c__10330__auto___27566,out))
})();var state__10332__auto__ = (function (){var statearr_27565 = f__10331__auto__.call(null);(statearr_27565[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10330__auto___27566);
return statearr_27565;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10332__auto__);
});})(c__10330__auto___27566,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10330__auto___27713 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10330__auto___27713,out){
return (function (){var f__10331__auto__ = (function (){var switch__10315__auto__ = ((function (c__10330__auto___27713,out){
return (function (state_27683){var state_val_27684 = (state_27683[1]);if((state_val_27684 === 7))
{var inst_27679 = (state_27683[2]);var state_27683__$1 = state_27683;var statearr_27685_27714 = state_27683__$1;(statearr_27685_27714[2] = inst_27679);
(statearr_27685_27714[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27684 === 1))
{var inst_27646 = (new Array(n));var inst_27647 = inst_27646;var inst_27648 = 0;var state_27683__$1 = (function (){var statearr_27686 = state_27683;(statearr_27686[7] = inst_27648);
(statearr_27686[8] = inst_27647);
return statearr_27686;
})();var statearr_27687_27715 = state_27683__$1;(statearr_27687_27715[2] = null);
(statearr_27687_27715[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27684 === 4))
{var inst_27651 = (state_27683[9]);var inst_27651__$1 = (state_27683[2]);var inst_27652 = (inst_27651__$1 == null);var inst_27653 = cljs.core.not.call(null,inst_27652);var state_27683__$1 = (function (){var statearr_27688 = state_27683;(statearr_27688[9] = inst_27651__$1);
return statearr_27688;
})();if(inst_27653)
{var statearr_27689_27716 = state_27683__$1;(statearr_27689_27716[1] = 5);
} else
{var statearr_27690_27717 = state_27683__$1;(statearr_27690_27717[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27684 === 15))
{var inst_27673 = (state_27683[2]);var state_27683__$1 = state_27683;var statearr_27691_27718 = state_27683__$1;(statearr_27691_27718[2] = inst_27673);
(statearr_27691_27718[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27684 === 13))
{var state_27683__$1 = state_27683;var statearr_27692_27719 = state_27683__$1;(statearr_27692_27719[2] = null);
(statearr_27692_27719[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27684 === 6))
{var inst_27648 = (state_27683[7]);var inst_27669 = (inst_27648 > 0);var state_27683__$1 = state_27683;if(cljs.core.truth_(inst_27669))
{var statearr_27693_27720 = state_27683__$1;(statearr_27693_27720[1] = 12);
} else
{var statearr_27694_27721 = state_27683__$1;(statearr_27694_27721[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27684 === 3))
{var inst_27681 = (state_27683[2]);var state_27683__$1 = state_27683;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27683__$1,inst_27681);
} else
{if((state_val_27684 === 12))
{var inst_27647 = (state_27683[8]);var inst_27671 = cljs.core.vec.call(null,inst_27647);var state_27683__$1 = state_27683;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27683__$1,15,out,inst_27671);
} else
{if((state_val_27684 === 2))
{var state_27683__$1 = state_27683;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27683__$1,4,ch);
} else
{if((state_val_27684 === 11))
{var inst_27663 = (state_27683[2]);var inst_27664 = (new Array(n));var inst_27647 = inst_27664;var inst_27648 = 0;var state_27683__$1 = (function (){var statearr_27695 = state_27683;(statearr_27695[10] = inst_27663);
(statearr_27695[7] = inst_27648);
(statearr_27695[8] = inst_27647);
return statearr_27695;
})();var statearr_27696_27722 = state_27683__$1;(statearr_27696_27722[2] = null);
(statearr_27696_27722[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27684 === 9))
{var inst_27647 = (state_27683[8]);var inst_27661 = cljs.core.vec.call(null,inst_27647);var state_27683__$1 = state_27683;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27683__$1,11,out,inst_27661);
} else
{if((state_val_27684 === 5))
{var inst_27651 = (state_27683[9]);var inst_27648 = (state_27683[7]);var inst_27656 = (state_27683[11]);var inst_27647 = (state_27683[8]);var inst_27655 = (inst_27647[inst_27648] = inst_27651);var inst_27656__$1 = (inst_27648 + 1);var inst_27657 = (inst_27656__$1 < n);var state_27683__$1 = (function (){var statearr_27697 = state_27683;(statearr_27697[11] = inst_27656__$1);
(statearr_27697[12] = inst_27655);
return statearr_27697;
})();if(cljs.core.truth_(inst_27657))
{var statearr_27698_27723 = state_27683__$1;(statearr_27698_27723[1] = 8);
} else
{var statearr_27699_27724 = state_27683__$1;(statearr_27699_27724[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27684 === 14))
{var inst_27676 = (state_27683[2]);var inst_27677 = cljs.core.async.close_BANG_.call(null,out);var state_27683__$1 = (function (){var statearr_27701 = state_27683;(statearr_27701[13] = inst_27676);
return statearr_27701;
})();var statearr_27702_27725 = state_27683__$1;(statearr_27702_27725[2] = inst_27677);
(statearr_27702_27725[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27684 === 10))
{var inst_27667 = (state_27683[2]);var state_27683__$1 = state_27683;var statearr_27703_27726 = state_27683__$1;(statearr_27703_27726[2] = inst_27667);
(statearr_27703_27726[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27684 === 8))
{var inst_27656 = (state_27683[11]);var inst_27647 = (state_27683[8]);var tmp27700 = inst_27647;var inst_27647__$1 = tmp27700;var inst_27648 = inst_27656;var state_27683__$1 = (function (){var statearr_27704 = state_27683;(statearr_27704[7] = inst_27648);
(statearr_27704[8] = inst_27647__$1);
return statearr_27704;
})();var statearr_27705_27727 = state_27683__$1;(statearr_27705_27727[2] = null);
(statearr_27705_27727[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10330__auto___27713,out))
;return ((function (switch__10315__auto__,c__10330__auto___27713,out){
return (function() {
var state_machine__10316__auto__ = null;
var state_machine__10316__auto____0 = (function (){var statearr_27709 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27709[0] = state_machine__10316__auto__);
(statearr_27709[1] = 1);
return statearr_27709;
});
var state_machine__10316__auto____1 = (function (state_27683){while(true){
var ret_value__10317__auto__ = (function (){try{while(true){
var result__10318__auto__ = switch__10315__auto__.call(null,state_27683);if(cljs.core.keyword_identical_QMARK_.call(null,result__10318__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10318__auto__;
}
break;
}
}catch (e27710){if((e27710 instanceof Object))
{var ex__10319__auto__ = e27710;var statearr_27711_27728 = state_27683;(statearr_27711_27728[5] = ex__10319__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27683);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27710;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10317__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27729 = state_27683;
state_27683 = G__27729;
continue;
}
} else
{return ret_value__10317__auto__;
}
break;
}
});
state_machine__10316__auto__ = function(state_27683){
switch(arguments.length){
case 0:
return state_machine__10316__auto____0.call(this);
case 1:
return state_machine__10316__auto____1.call(this,state_27683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10316__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10316__auto____0;
state_machine__10316__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10316__auto____1;
return state_machine__10316__auto__;
})()
;})(switch__10315__auto__,c__10330__auto___27713,out))
})();var state__10332__auto__ = (function (){var statearr_27712 = f__10331__auto__.call(null);(statearr_27712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10330__auto___27713);
return statearr_27712;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10332__auto__);
});})(c__10330__auto___27713,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10330__auto___27872 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10330__auto___27872,out){
return (function (){var f__10331__auto__ = (function (){var switch__10315__auto__ = ((function (c__10330__auto___27872,out){
return (function (state_27842){var state_val_27843 = (state_27842[1]);if((state_val_27843 === 7))
{var inst_27838 = (state_27842[2]);var state_27842__$1 = state_27842;var statearr_27844_27873 = state_27842__$1;(statearr_27844_27873[2] = inst_27838);
(statearr_27844_27873[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27843 === 1))
{var inst_27801 = [];var inst_27802 = inst_27801;var inst_27803 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_27842__$1 = (function (){var statearr_27845 = state_27842;(statearr_27845[7] = inst_27802);
(statearr_27845[8] = inst_27803);
return statearr_27845;
})();var statearr_27846_27874 = state_27842__$1;(statearr_27846_27874[2] = null);
(statearr_27846_27874[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27843 === 4))
{var inst_27806 = (state_27842[9]);var inst_27806__$1 = (state_27842[2]);var inst_27807 = (inst_27806__$1 == null);var inst_27808 = cljs.core.not.call(null,inst_27807);var state_27842__$1 = (function (){var statearr_27847 = state_27842;(statearr_27847[9] = inst_27806__$1);
return statearr_27847;
})();if(inst_27808)
{var statearr_27848_27875 = state_27842__$1;(statearr_27848_27875[1] = 5);
} else
{var statearr_27849_27876 = state_27842__$1;(statearr_27849_27876[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27843 === 15))
{var inst_27832 = (state_27842[2]);var state_27842__$1 = state_27842;var statearr_27850_27877 = state_27842__$1;(statearr_27850_27877[2] = inst_27832);
(statearr_27850_27877[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27843 === 13))
{var state_27842__$1 = state_27842;var statearr_27851_27878 = state_27842__$1;(statearr_27851_27878[2] = null);
(statearr_27851_27878[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27843 === 6))
{var inst_27802 = (state_27842[7]);var inst_27827 = inst_27802.length;var inst_27828 = (inst_27827 > 0);var state_27842__$1 = state_27842;if(cljs.core.truth_(inst_27828))
{var statearr_27852_27879 = state_27842__$1;(statearr_27852_27879[1] = 12);
} else
{var statearr_27853_27880 = state_27842__$1;(statearr_27853_27880[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27843 === 3))
{var inst_27840 = (state_27842[2]);var state_27842__$1 = state_27842;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27842__$1,inst_27840);
} else
{if((state_val_27843 === 12))
{var inst_27802 = (state_27842[7]);var inst_27830 = cljs.core.vec.call(null,inst_27802);var state_27842__$1 = state_27842;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27842__$1,15,out,inst_27830);
} else
{if((state_val_27843 === 2))
{var state_27842__$1 = state_27842;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27842__$1,4,ch);
} else
{if((state_val_27843 === 11))
{var inst_27806 = (state_27842[9]);var inst_27810 = (state_27842[10]);var inst_27820 = (state_27842[2]);var inst_27821 = [];var inst_27822 = inst_27821.push(inst_27806);var inst_27802 = inst_27821;var inst_27803 = inst_27810;var state_27842__$1 = (function (){var statearr_27854 = state_27842;(statearr_27854[7] = inst_27802);
(statearr_27854[11] = inst_27820);
(statearr_27854[8] = inst_27803);
(statearr_27854[12] = inst_27822);
return statearr_27854;
})();var statearr_27855_27881 = state_27842__$1;(statearr_27855_27881[2] = null);
(statearr_27855_27881[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27843 === 9))
{var inst_27802 = (state_27842[7]);var inst_27818 = cljs.core.vec.call(null,inst_27802);var state_27842__$1 = state_27842;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27842__$1,11,out,inst_27818);
} else
{if((state_val_27843 === 5))
{var inst_27806 = (state_27842[9]);var inst_27803 = (state_27842[8]);var inst_27810 = (state_27842[10]);var inst_27810__$1 = f.call(null,inst_27806);var inst_27811 = cljs.core._EQ_.call(null,inst_27810__$1,inst_27803);var inst_27812 = cljs.core.keyword_identical_QMARK_.call(null,inst_27803,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_27813 = (inst_27811) || (inst_27812);var state_27842__$1 = (function (){var statearr_27856 = state_27842;(statearr_27856[10] = inst_27810__$1);
return statearr_27856;
})();if(cljs.core.truth_(inst_27813))
{var statearr_27857_27882 = state_27842__$1;(statearr_27857_27882[1] = 8);
} else
{var statearr_27858_27883 = state_27842__$1;(statearr_27858_27883[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27843 === 14))
{var inst_27835 = (state_27842[2]);var inst_27836 = cljs.core.async.close_BANG_.call(null,out);var state_27842__$1 = (function (){var statearr_27860 = state_27842;(statearr_27860[13] = inst_27835);
return statearr_27860;
})();var statearr_27861_27884 = state_27842__$1;(statearr_27861_27884[2] = inst_27836);
(statearr_27861_27884[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27843 === 10))
{var inst_27825 = (state_27842[2]);var state_27842__$1 = state_27842;var statearr_27862_27885 = state_27842__$1;(statearr_27862_27885[2] = inst_27825);
(statearr_27862_27885[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27843 === 8))
{var inst_27802 = (state_27842[7]);var inst_27806 = (state_27842[9]);var inst_27810 = (state_27842[10]);var inst_27815 = inst_27802.push(inst_27806);var tmp27859 = inst_27802;var inst_27802__$1 = tmp27859;var inst_27803 = inst_27810;var state_27842__$1 = (function (){var statearr_27863 = state_27842;(statearr_27863[7] = inst_27802__$1);
(statearr_27863[8] = inst_27803);
(statearr_27863[14] = inst_27815);
return statearr_27863;
})();var statearr_27864_27886 = state_27842__$1;(statearr_27864_27886[2] = null);
(statearr_27864_27886[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10330__auto___27872,out))
;return ((function (switch__10315__auto__,c__10330__auto___27872,out){
return (function() {
var state_machine__10316__auto__ = null;
var state_machine__10316__auto____0 = (function (){var statearr_27868 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27868[0] = state_machine__10316__auto__);
(statearr_27868[1] = 1);
return statearr_27868;
});
var state_machine__10316__auto____1 = (function (state_27842){while(true){
var ret_value__10317__auto__ = (function (){try{while(true){
var result__10318__auto__ = switch__10315__auto__.call(null,state_27842);if(cljs.core.keyword_identical_QMARK_.call(null,result__10318__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10318__auto__;
}
break;
}
}catch (e27869){if((e27869 instanceof Object))
{var ex__10319__auto__ = e27869;var statearr_27870_27887 = state_27842;(statearr_27870_27887[5] = ex__10319__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27842);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27869;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10317__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27888 = state_27842;
state_27842 = G__27888;
continue;
}
} else
{return ret_value__10317__auto__;
}
break;
}
});
state_machine__10316__auto__ = function(state_27842){
switch(arguments.length){
case 0:
return state_machine__10316__auto____0.call(this);
case 1:
return state_machine__10316__auto____1.call(this,state_27842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10316__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10316__auto____0;
state_machine__10316__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10316__auto____1;
return state_machine__10316__auto__;
})()
;})(switch__10315__auto__,c__10330__auto___27872,out))
})();var state__10332__auto__ = (function (){var statearr_27871 = f__10331__auto__.call(null);(statearr_27871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10330__auto___27872);
return statearr_27871;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10332__auto__);
});})(c__10330__auto___27872,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map