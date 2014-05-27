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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t14668 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14668 = (function (f,fn_handler,meta14669){
this.f = f;
this.fn_handler = fn_handler;
this.meta14669 = meta14669;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14668.cljs$lang$type = true;
cljs.core.async.t14668.cljs$lang$ctorStr = "cljs.core.async/t14668";
cljs.core.async.t14668.cljs$lang$ctorPrWriter = (function (this__8441__auto__,writer__8442__auto__,opt__8443__auto__){return cljs.core._write.call(null,writer__8442__auto__,"cljs.core.async/t14668");
});
cljs.core.async.t14668.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14668.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t14668.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t14668.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14670){var self__ = this;
var _14670__$1 = this;return self__.meta14669;
});
cljs.core.async.t14668.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14670,meta14669__$1){var self__ = this;
var _14670__$1 = this;return (new cljs.core.async.t14668(self__.f,self__.fn_handler,meta14669__$1));
});
cljs.core.async.__GT_t14668 = (function __GT_t14668(f__$1,fn_handler__$1,meta14669){return (new cljs.core.async.t14668(f__$1,fn_handler__$1,meta14669));
});
}
return (new cljs.core.async.t14668(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__14672 = buff;if(G__14672)
{var bit__8524__auto__ = null;if(cljs.core.truth_((function (){var or__7874__auto__ = bit__8524__auto__;if(cljs.core.truth_(or__7874__auto__))
{return or__7874__auto__;
} else
{return G__14672.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__14672.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14672);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14672);
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
{var val_14673 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_14673);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_14673,ret){
return (function (){return fn1.call(null,val_14673);
});})(val_14673,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8722__auto___14674 = n;var x_14675 = 0;while(true){
if((x_14675 < n__8722__auto___14674))
{(a[x_14675] = 0);
{
var G__14676 = (x_14675 + 1);
x_14675 = G__14676;
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
var G__14677 = (i + 1);
i = G__14677;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t14681 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14681 = (function (flag,alt_flag,meta14682){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta14682 = meta14682;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14681.cljs$lang$type = true;
cljs.core.async.t14681.cljs$lang$ctorStr = "cljs.core.async/t14681";
cljs.core.async.t14681.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8441__auto__,writer__8442__auto__,opt__8443__auto__){return cljs.core._write.call(null,writer__8442__auto__,"cljs.core.async/t14681");
});})(flag))
;
cljs.core.async.t14681.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14681.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t14681.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t14681.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_14683){var self__ = this;
var _14683__$1 = this;return self__.meta14682;
});})(flag))
;
cljs.core.async.t14681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_14683,meta14682__$1){var self__ = this;
var _14683__$1 = this;return (new cljs.core.async.t14681(self__.flag,self__.alt_flag,meta14682__$1));
});})(flag))
;
cljs.core.async.__GT_t14681 = ((function (flag){
return (function __GT_t14681(flag__$1,alt_flag__$1,meta14682){return (new cljs.core.async.t14681(flag__$1,alt_flag__$1,meta14682));
});})(flag))
;
}
return (new cljs.core.async.t14681(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t14687 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14687 = (function (cb,flag,alt_handler,meta14688){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta14688 = meta14688;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14687.cljs$lang$type = true;
cljs.core.async.t14687.cljs$lang$ctorStr = "cljs.core.async/t14687";
cljs.core.async.t14687.cljs$lang$ctorPrWriter = (function (this__8441__auto__,writer__8442__auto__,opt__8443__auto__){return cljs.core._write.call(null,writer__8442__auto__,"cljs.core.async/t14687");
});
cljs.core.async.t14687.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14687.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t14687.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t14687.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14689){var self__ = this;
var _14689__$1 = this;return self__.meta14688;
});
cljs.core.async.t14687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14689,meta14688__$1){var self__ = this;
var _14689__$1 = this;return (new cljs.core.async.t14687(self__.cb,self__.flag,self__.alt_handler,meta14688__$1));
});
cljs.core.async.__GT_t14687 = (function __GT_t14687(cb__$1,flag__$1,alt_handler__$1,meta14688){return (new cljs.core.async.t14687(cb__$1,flag__$1,alt_handler__$1,meta14688));
});
}
return (new cljs.core.async.t14687(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14690_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14690_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14691_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14691_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__7874__auto__ = wport;if(cljs.core.truth_(or__7874__auto__))
{return or__7874__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__14692 = (i + 1);
i = G__14692;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__7874__auto__ = ret;if(cljs.core.truth_(or__7874__auto__))
{return or__7874__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4126__auto__ = (function (){var and__7862__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__7862__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__7862__auto__;
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
var alts_BANG___delegate = function (ports,p__14693){var map__14695 = p__14693;var map__14695__$1 = ((cljs.core.seq_QMARK_.call(null,map__14695))?cljs.core.apply.call(null,cljs.core.hash_map,map__14695):map__14695);var opts = map__14695__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__14693 = null;if (arguments.length > 1) {
  p__14693 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__14693);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__14696){
var ports = cljs.core.first(arglist__14696);
var p__14693 = cljs.core.rest(arglist__14696);
return alts_BANG___delegate(ports,p__14693);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14704 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14704 = (function (ch,f,map_LT_,meta14705){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14705 = meta14705;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14704.cljs$lang$type = true;
cljs.core.async.t14704.cljs$lang$ctorStr = "cljs.core.async/t14704";
cljs.core.async.t14704.cljs$lang$ctorPrWriter = (function (this__8441__auto__,writer__8442__auto__,opt__8443__auto__){return cljs.core._write.call(null,writer__8442__auto__,"cljs.core.async/t14704");
});
cljs.core.async.t14704.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14704.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t14704.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14704.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14707 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14707 = (function (fn1,_,meta14705,ch,f,map_LT_,meta14708){
this.fn1 = fn1;
this._ = _;
this.meta14705 = meta14705;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14708 = meta14708;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14707.cljs$lang$type = true;
cljs.core.async.t14707.cljs$lang$ctorStr = "cljs.core.async/t14707";
cljs.core.async.t14707.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8441__auto__,writer__8442__auto__,opt__8443__auto__){return cljs.core._write.call(null,writer__8442__auto__,"cljs.core.async/t14707");
});})(___$1))
;
cljs.core.async.t14707.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14707.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14707.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14707.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__14697_SHARP_){return f1.call(null,(((p1__14697_SHARP_ == null))?null:self__.f.call(null,p1__14697_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t14707.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14709){var self__ = this;
var _14709__$1 = this;return self__.meta14708;
});})(___$1))
;
cljs.core.async.t14707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14709,meta14708__$1){var self__ = this;
var _14709__$1 = this;return (new cljs.core.async.t14707(self__.fn1,self__._,self__.meta14705,self__.ch,self__.f,self__.map_LT_,meta14708__$1));
});})(___$1))
;
cljs.core.async.__GT_t14707 = ((function (___$1){
return (function __GT_t14707(fn1__$1,___$2,meta14705__$1,ch__$2,f__$2,map_LT___$2,meta14708){return (new cljs.core.async.t14707(fn1__$1,___$2,meta14705__$1,ch__$2,f__$2,map_LT___$2,meta14708));
});})(___$1))
;
}
return (new cljs.core.async.t14707(fn1,___$1,self__.meta14705,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__7862__auto__ = ret;if(cljs.core.truth_(and__7862__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__7862__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t14704.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14704.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14704.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14704.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14706){var self__ = this;
var _14706__$1 = this;return self__.meta14705;
});
cljs.core.async.t14704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14706,meta14705__$1){var self__ = this;
var _14706__$1 = this;return (new cljs.core.async.t14704(self__.ch,self__.f,self__.map_LT_,meta14705__$1));
});
cljs.core.async.__GT_t14704 = (function __GT_t14704(ch__$1,f__$1,map_LT___$1,meta14705){return (new cljs.core.async.t14704(ch__$1,f__$1,map_LT___$1,meta14705));
});
}
return (new cljs.core.async.t14704(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14713 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14713 = (function (ch,f,map_GT_,meta14714){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14714 = meta14714;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14713.cljs$lang$type = true;
cljs.core.async.t14713.cljs$lang$ctorStr = "cljs.core.async/t14713";
cljs.core.async.t14713.cljs$lang$ctorPrWriter = (function (this__8441__auto__,writer__8442__auto__,opt__8443__auto__){return cljs.core._write.call(null,writer__8442__auto__,"cljs.core.async/t14713");
});
cljs.core.async.t14713.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14713.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t14713.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14713.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14713.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14713.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14713.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14715){var self__ = this;
var _14715__$1 = this;return self__.meta14714;
});
cljs.core.async.t14713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14715,meta14714__$1){var self__ = this;
var _14715__$1 = this;return (new cljs.core.async.t14713(self__.ch,self__.f,self__.map_GT_,meta14714__$1));
});
cljs.core.async.__GT_t14713 = (function __GT_t14713(ch__$1,f__$1,map_GT___$1,meta14714){return (new cljs.core.async.t14713(ch__$1,f__$1,map_GT___$1,meta14714));
});
}
return (new cljs.core.async.t14713(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14719 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14719 = (function (ch,p,filter_GT_,meta14720){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14720 = meta14720;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14719.cljs$lang$type = true;
cljs.core.async.t14719.cljs$lang$ctorStr = "cljs.core.async/t14719";
cljs.core.async.t14719.cljs$lang$ctorPrWriter = (function (this__8441__auto__,writer__8442__auto__,opt__8443__auto__){return cljs.core._write.call(null,writer__8442__auto__,"cljs.core.async/t14719");
});
cljs.core.async.t14719.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14719.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t14719.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14719.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14719.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14719.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14719.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14719.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14721){var self__ = this;
var _14721__$1 = this;return self__.meta14720;
});
cljs.core.async.t14719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14721,meta14720__$1){var self__ = this;
var _14721__$1 = this;return (new cljs.core.async.t14719(self__.ch,self__.p,self__.filter_GT_,meta14720__$1));
});
cljs.core.async.__GT_t14719 = (function __GT_t14719(ch__$1,p__$1,filter_GT___$1,meta14720){return (new cljs.core.async.t14719(ch__$1,p__$1,filter_GT___$1,meta14720));
});
}
return (new cljs.core.async.t14719(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10329__auto___14804 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10329__auto___14804,out){
return (function (){var f__10330__auto__ = (function (){var switch__10314__auto__ = ((function (c__10329__auto___14804,out){
return (function (state_14783){var state_val_14784 = (state_14783[1]);if((state_val_14784 === 7))
{var inst_14779 = (state_14783[2]);var state_14783__$1 = state_14783;var statearr_14785_14805 = state_14783__$1;(statearr_14785_14805[2] = inst_14779);
(statearr_14785_14805[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14784 === 1))
{var state_14783__$1 = state_14783;var statearr_14786_14806 = state_14783__$1;(statearr_14786_14806[2] = null);
(statearr_14786_14806[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14784 === 4))
{var inst_14765 = (state_14783[7]);var inst_14765__$1 = (state_14783[2]);var inst_14766 = (inst_14765__$1 == null);var state_14783__$1 = (function (){var statearr_14787 = state_14783;(statearr_14787[7] = inst_14765__$1);
return statearr_14787;
})();if(cljs.core.truth_(inst_14766))
{var statearr_14788_14807 = state_14783__$1;(statearr_14788_14807[1] = 5);
} else
{var statearr_14789_14808 = state_14783__$1;(statearr_14789_14808[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14784 === 6))
{var inst_14765 = (state_14783[7]);var inst_14770 = p.call(null,inst_14765);var state_14783__$1 = state_14783;if(cljs.core.truth_(inst_14770))
{var statearr_14790_14809 = state_14783__$1;(statearr_14790_14809[1] = 8);
} else
{var statearr_14791_14810 = state_14783__$1;(statearr_14791_14810[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14784 === 3))
{var inst_14781 = (state_14783[2]);var state_14783__$1 = state_14783;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14783__$1,inst_14781);
} else
{if((state_val_14784 === 2))
{var state_14783__$1 = state_14783;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14783__$1,4,ch);
} else
{if((state_val_14784 === 11))
{var inst_14773 = (state_14783[2]);var state_14783__$1 = state_14783;var statearr_14792_14811 = state_14783__$1;(statearr_14792_14811[2] = inst_14773);
(statearr_14792_14811[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14784 === 9))
{var state_14783__$1 = state_14783;var statearr_14793_14812 = state_14783__$1;(statearr_14793_14812[2] = null);
(statearr_14793_14812[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14784 === 5))
{var inst_14768 = cljs.core.async.close_BANG_.call(null,out);var state_14783__$1 = state_14783;var statearr_14794_14813 = state_14783__$1;(statearr_14794_14813[2] = inst_14768);
(statearr_14794_14813[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14784 === 10))
{var inst_14776 = (state_14783[2]);var state_14783__$1 = (function (){var statearr_14795 = state_14783;(statearr_14795[8] = inst_14776);
return statearr_14795;
})();var statearr_14796_14814 = state_14783__$1;(statearr_14796_14814[2] = null);
(statearr_14796_14814[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14784 === 8))
{var inst_14765 = (state_14783[7]);var state_14783__$1 = state_14783;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14783__$1,11,out,inst_14765);
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
});})(c__10329__auto___14804,out))
;return ((function (switch__10314__auto__,c__10329__auto___14804,out){
return (function() {
var state_machine__10315__auto__ = null;
var state_machine__10315__auto____0 = (function (){var statearr_14800 = [null,null,null,null,null,null,null,null,null];(statearr_14800[0] = state_machine__10315__auto__);
(statearr_14800[1] = 1);
return statearr_14800;
});
var state_machine__10315__auto____1 = (function (state_14783){while(true){
var ret_value__10316__auto__ = (function (){try{while(true){
var result__10317__auto__ = switch__10314__auto__.call(null,state_14783);if(cljs.core.keyword_identical_QMARK_.call(null,result__10317__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10317__auto__;
}
break;
}
}catch (e14801){if((e14801 instanceof Object))
{var ex__10318__auto__ = e14801;var statearr_14802_14815 = state_14783;(statearr_14802_14815[5] = ex__10318__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14783);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14801;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10316__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14816 = state_14783;
state_14783 = G__14816;
continue;
}
} else
{return ret_value__10316__auto__;
}
break;
}
});
state_machine__10315__auto__ = function(state_14783){
switch(arguments.length){
case 0:
return state_machine__10315__auto____0.call(this);
case 1:
return state_machine__10315__auto____1.call(this,state_14783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10315__auto____0;
state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10315__auto____1;
return state_machine__10315__auto__;
})()
;})(switch__10314__auto__,c__10329__auto___14804,out))
})();var state__10331__auto__ = (function (){var statearr_14803 = f__10330__auto__.call(null);(statearr_14803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10329__auto___14804);
return statearr_14803;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10331__auto__);
});})(c__10329__auto___14804,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__10329__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10329__auto__){
return (function (){var f__10330__auto__ = (function (){var switch__10314__auto__ = ((function (c__10329__auto__){
return (function (state_14982){var state_val_14983 = (state_14982[1]);if((state_val_14983 === 7))
{var inst_14978 = (state_14982[2]);var state_14982__$1 = state_14982;var statearr_14984_15025 = state_14982__$1;(statearr_14984_15025[2] = inst_14978);
(statearr_14984_15025[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14983 === 20))
{var inst_14948 = (state_14982[7]);var inst_14959 = (state_14982[2]);var inst_14960 = cljs.core.next.call(null,inst_14948);var inst_14934 = inst_14960;var inst_14935 = null;var inst_14936 = 0;var inst_14937 = 0;var state_14982__$1 = (function (){var statearr_14985 = state_14982;(statearr_14985[8] = inst_14937);
(statearr_14985[9] = inst_14935);
(statearr_14985[10] = inst_14936);
(statearr_14985[11] = inst_14934);
(statearr_14985[12] = inst_14959);
return statearr_14985;
})();var statearr_14986_15026 = state_14982__$1;(statearr_14986_15026[2] = null);
(statearr_14986_15026[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14983 === 1))
{var state_14982__$1 = state_14982;var statearr_14987_15027 = state_14982__$1;(statearr_14987_15027[2] = null);
(statearr_14987_15027[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14983 === 4))
{var inst_14923 = (state_14982[13]);var inst_14923__$1 = (state_14982[2]);var inst_14924 = (inst_14923__$1 == null);var state_14982__$1 = (function (){var statearr_14988 = state_14982;(statearr_14988[13] = inst_14923__$1);
return statearr_14988;
})();if(cljs.core.truth_(inst_14924))
{var statearr_14989_15028 = state_14982__$1;(statearr_14989_15028[1] = 5);
} else
{var statearr_14990_15029 = state_14982__$1;(statearr_14990_15029[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14983 === 15))
{var state_14982__$1 = state_14982;var statearr_14994_15030 = state_14982__$1;(statearr_14994_15030[2] = null);
(statearr_14994_15030[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14983 === 21))
{var state_14982__$1 = state_14982;var statearr_14995_15031 = state_14982__$1;(statearr_14995_15031[2] = null);
(statearr_14995_15031[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14983 === 13))
{var inst_14937 = (state_14982[8]);var inst_14935 = (state_14982[9]);var inst_14936 = (state_14982[10]);var inst_14934 = (state_14982[11]);var inst_14944 = (state_14982[2]);var inst_14945 = (inst_14937 + 1);var tmp14991 = inst_14935;var tmp14992 = inst_14936;var tmp14993 = inst_14934;var inst_14934__$1 = tmp14993;var inst_14935__$1 = tmp14991;var inst_14936__$1 = tmp14992;var inst_14937__$1 = inst_14945;var state_14982__$1 = (function (){var statearr_14996 = state_14982;(statearr_14996[8] = inst_14937__$1);
(statearr_14996[9] = inst_14935__$1);
(statearr_14996[10] = inst_14936__$1);
(statearr_14996[14] = inst_14944);
(statearr_14996[11] = inst_14934__$1);
return statearr_14996;
})();var statearr_14997_15032 = state_14982__$1;(statearr_14997_15032[2] = null);
(statearr_14997_15032[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14983 === 22))
{var state_14982__$1 = state_14982;var statearr_14998_15033 = state_14982__$1;(statearr_14998_15033[2] = null);
(statearr_14998_15033[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14983 === 6))
{var inst_14923 = (state_14982[13]);var inst_14932 = f.call(null,inst_14923);var inst_14933 = cljs.core.seq.call(null,inst_14932);var inst_14934 = inst_14933;var inst_14935 = null;var inst_14936 = 0;var inst_14937 = 0;var state_14982__$1 = (function (){var statearr_14999 = state_14982;(statearr_14999[8] = inst_14937);
(statearr_14999[9] = inst_14935);
(statearr_14999[10] = inst_14936);
(statearr_14999[11] = inst_14934);
return statearr_14999;
})();var statearr_15000_15034 = state_14982__$1;(statearr_15000_15034[2] = null);
(statearr_15000_15034[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14983 === 17))
{var inst_14948 = (state_14982[7]);var inst_14952 = cljs.core.chunk_first.call(null,inst_14948);var inst_14953 = cljs.core.chunk_rest.call(null,inst_14948);var inst_14954 = cljs.core.count.call(null,inst_14952);var inst_14934 = inst_14953;var inst_14935 = inst_14952;var inst_14936 = inst_14954;var inst_14937 = 0;var state_14982__$1 = (function (){var statearr_15001 = state_14982;(statearr_15001[8] = inst_14937);
(statearr_15001[9] = inst_14935);
(statearr_15001[10] = inst_14936);
(statearr_15001[11] = inst_14934);
return statearr_15001;
})();var statearr_15002_15035 = state_14982__$1;(statearr_15002_15035[2] = null);
(statearr_15002_15035[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14983 === 3))
{var inst_14980 = (state_14982[2]);var state_14982__$1 = state_14982;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14982__$1,inst_14980);
} else
{if((state_val_14983 === 12))
{var inst_14968 = (state_14982[2]);var state_14982__$1 = state_14982;var statearr_15003_15036 = state_14982__$1;(statearr_15003_15036[2] = inst_14968);
(statearr_15003_15036[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14983 === 2))
{var state_14982__$1 = state_14982;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14982__$1,4,in$);
} else
{if((state_val_14983 === 23))
{var inst_14976 = (state_14982[2]);var state_14982__$1 = state_14982;var statearr_15004_15037 = state_14982__$1;(statearr_15004_15037[2] = inst_14976);
(statearr_15004_15037[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14983 === 19))
{var inst_14963 = (state_14982[2]);var state_14982__$1 = state_14982;var statearr_15005_15038 = state_14982__$1;(statearr_15005_15038[2] = inst_14963);
(statearr_15005_15038[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14983 === 11))
{var inst_14934 = (state_14982[11]);var inst_14948 = (state_14982[7]);var inst_14948__$1 = cljs.core.seq.call(null,inst_14934);var state_14982__$1 = (function (){var statearr_15006 = state_14982;(statearr_15006[7] = inst_14948__$1);
return statearr_15006;
})();if(inst_14948__$1)
{var statearr_15007_15039 = state_14982__$1;(statearr_15007_15039[1] = 14);
} else
{var statearr_15008_15040 = state_14982__$1;(statearr_15008_15040[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14983 === 9))
{var inst_14970 = (state_14982[2]);var inst_14971 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_14982__$1 = (function (){var statearr_15009 = state_14982;(statearr_15009[15] = inst_14970);
return statearr_15009;
})();if(cljs.core.truth_(inst_14971))
{var statearr_15010_15041 = state_14982__$1;(statearr_15010_15041[1] = 21);
} else
{var statearr_15011_15042 = state_14982__$1;(statearr_15011_15042[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14983 === 5))
{var inst_14926 = cljs.core.async.close_BANG_.call(null,out);var state_14982__$1 = state_14982;var statearr_15012_15043 = state_14982__$1;(statearr_15012_15043[2] = inst_14926);
(statearr_15012_15043[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14983 === 14))
{var inst_14948 = (state_14982[7]);var inst_14950 = cljs.core.chunked_seq_QMARK_.call(null,inst_14948);var state_14982__$1 = state_14982;if(inst_14950)
{var statearr_15013_15044 = state_14982__$1;(statearr_15013_15044[1] = 17);
} else
{var statearr_15014_15045 = state_14982__$1;(statearr_15014_15045[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14983 === 16))
{var inst_14966 = (state_14982[2]);var state_14982__$1 = state_14982;var statearr_15015_15046 = state_14982__$1;(statearr_15015_15046[2] = inst_14966);
(statearr_15015_15046[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14983 === 10))
{var inst_14937 = (state_14982[8]);var inst_14935 = (state_14982[9]);var inst_14942 = cljs.core._nth.call(null,inst_14935,inst_14937);var state_14982__$1 = state_14982;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14982__$1,13,out,inst_14942);
} else
{if((state_val_14983 === 18))
{var inst_14948 = (state_14982[7]);var inst_14957 = cljs.core.first.call(null,inst_14948);var state_14982__$1 = state_14982;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14982__$1,20,out,inst_14957);
} else
{if((state_val_14983 === 8))
{var inst_14937 = (state_14982[8]);var inst_14936 = (state_14982[10]);var inst_14939 = (inst_14937 < inst_14936);var inst_14940 = inst_14939;var state_14982__$1 = state_14982;if(cljs.core.truth_(inst_14940))
{var statearr_15016_15047 = state_14982__$1;(statearr_15016_15047[1] = 10);
} else
{var statearr_15017_15048 = state_14982__$1;(statearr_15017_15048[1] = 11);
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
});})(c__10329__auto__))
;return ((function (switch__10314__auto__,c__10329__auto__){
return (function() {
var state_machine__10315__auto__ = null;
var state_machine__10315__auto____0 = (function (){var statearr_15021 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15021[0] = state_machine__10315__auto__);
(statearr_15021[1] = 1);
return statearr_15021;
});
var state_machine__10315__auto____1 = (function (state_14982){while(true){
var ret_value__10316__auto__ = (function (){try{while(true){
var result__10317__auto__ = switch__10314__auto__.call(null,state_14982);if(cljs.core.keyword_identical_QMARK_.call(null,result__10317__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10317__auto__;
}
break;
}
}catch (e15022){if((e15022 instanceof Object))
{var ex__10318__auto__ = e15022;var statearr_15023_15049 = state_14982;(statearr_15023_15049[5] = ex__10318__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14982);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15022;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10316__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15050 = state_14982;
state_14982 = G__15050;
continue;
}
} else
{return ret_value__10316__auto__;
}
break;
}
});
state_machine__10315__auto__ = function(state_14982){
switch(arguments.length){
case 0:
return state_machine__10315__auto____0.call(this);
case 1:
return state_machine__10315__auto____1.call(this,state_14982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10315__auto____0;
state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10315__auto____1;
return state_machine__10315__auto__;
})()
;})(switch__10314__auto__,c__10329__auto__))
})();var state__10331__auto__ = (function (){var statearr_15024 = f__10330__auto__.call(null);(statearr_15024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10329__auto__);
return statearr_15024;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10331__auto__);
});})(c__10329__auto__))
);
return c__10329__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__10329__auto___15145 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10329__auto___15145){
return (function (){var f__10330__auto__ = (function (){var switch__10314__auto__ = ((function (c__10329__auto___15145){
return (function (state_15121){var state_val_15122 = (state_15121[1]);if((state_val_15122 === 7))
{var inst_15117 = (state_15121[2]);var state_15121__$1 = state_15121;var statearr_15123_15146 = state_15121__$1;(statearr_15123_15146[2] = inst_15117);
(statearr_15123_15146[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15122 === 1))
{var state_15121__$1 = state_15121;var statearr_15124_15147 = state_15121__$1;(statearr_15124_15147[2] = null);
(statearr_15124_15147[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15122 === 4))
{var inst_15100 = (state_15121[7]);var inst_15100__$1 = (state_15121[2]);var inst_15101 = (inst_15100__$1 == null);var state_15121__$1 = (function (){var statearr_15125 = state_15121;(statearr_15125[7] = inst_15100__$1);
return statearr_15125;
})();if(cljs.core.truth_(inst_15101))
{var statearr_15126_15148 = state_15121__$1;(statearr_15126_15148[1] = 5);
} else
{var statearr_15127_15149 = state_15121__$1;(statearr_15127_15149[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15122 === 13))
{var state_15121__$1 = state_15121;var statearr_15128_15150 = state_15121__$1;(statearr_15128_15150[2] = null);
(statearr_15128_15150[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15122 === 6))
{var inst_15100 = (state_15121[7]);var state_15121__$1 = state_15121;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15121__$1,11,to,inst_15100);
} else
{if((state_val_15122 === 3))
{var inst_15119 = (state_15121[2]);var state_15121__$1 = state_15121;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15121__$1,inst_15119);
} else
{if((state_val_15122 === 12))
{var state_15121__$1 = state_15121;var statearr_15129_15151 = state_15121__$1;(statearr_15129_15151[2] = null);
(statearr_15129_15151[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15122 === 2))
{var state_15121__$1 = state_15121;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15121__$1,4,from);
} else
{if((state_val_15122 === 11))
{var inst_15110 = (state_15121[2]);var state_15121__$1 = state_15121;if(cljs.core.truth_(inst_15110))
{var statearr_15130_15152 = state_15121__$1;(statearr_15130_15152[1] = 12);
} else
{var statearr_15131_15153 = state_15121__$1;(statearr_15131_15153[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15122 === 9))
{var state_15121__$1 = state_15121;var statearr_15132_15154 = state_15121__$1;(statearr_15132_15154[2] = null);
(statearr_15132_15154[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15122 === 5))
{var state_15121__$1 = state_15121;if(cljs.core.truth_(close_QMARK_))
{var statearr_15133_15155 = state_15121__$1;(statearr_15133_15155[1] = 8);
} else
{var statearr_15134_15156 = state_15121__$1;(statearr_15134_15156[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15122 === 14))
{var inst_15115 = (state_15121[2]);var state_15121__$1 = state_15121;var statearr_15135_15157 = state_15121__$1;(statearr_15135_15157[2] = inst_15115);
(statearr_15135_15157[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15122 === 10))
{var inst_15107 = (state_15121[2]);var state_15121__$1 = state_15121;var statearr_15136_15158 = state_15121__$1;(statearr_15136_15158[2] = inst_15107);
(statearr_15136_15158[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15122 === 8))
{var inst_15104 = cljs.core.async.close_BANG_.call(null,to);var state_15121__$1 = state_15121;var statearr_15137_15159 = state_15121__$1;(statearr_15137_15159[2] = inst_15104);
(statearr_15137_15159[1] = 10);
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
});})(c__10329__auto___15145))
;return ((function (switch__10314__auto__,c__10329__auto___15145){
return (function() {
var state_machine__10315__auto__ = null;
var state_machine__10315__auto____0 = (function (){var statearr_15141 = [null,null,null,null,null,null,null,null];(statearr_15141[0] = state_machine__10315__auto__);
(statearr_15141[1] = 1);
return statearr_15141;
});
var state_machine__10315__auto____1 = (function (state_15121){while(true){
var ret_value__10316__auto__ = (function (){try{while(true){
var result__10317__auto__ = switch__10314__auto__.call(null,state_15121);if(cljs.core.keyword_identical_QMARK_.call(null,result__10317__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10317__auto__;
}
break;
}
}catch (e15142){if((e15142 instanceof Object))
{var ex__10318__auto__ = e15142;var statearr_15143_15160 = state_15121;(statearr_15143_15160[5] = ex__10318__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15121);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15142;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10316__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15161 = state_15121;
state_15121 = G__15161;
continue;
}
} else
{return ret_value__10316__auto__;
}
break;
}
});
state_machine__10315__auto__ = function(state_15121){
switch(arguments.length){
case 0:
return state_machine__10315__auto____0.call(this);
case 1:
return state_machine__10315__auto____1.call(this,state_15121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10315__auto____0;
state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10315__auto____1;
return state_machine__10315__auto__;
})()
;})(switch__10314__auto__,c__10329__auto___15145))
})();var state__10331__auto__ = (function (){var statearr_15144 = f__10330__auto__.call(null);(statearr_15144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10329__auto___15145);
return statearr_15144;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10331__auto__);
});})(c__10329__auto___15145))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__10329__auto___15262 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10329__auto___15262,tc,fc){
return (function (){var f__10330__auto__ = (function (){var switch__10314__auto__ = ((function (c__10329__auto___15262,tc,fc){
return (function (state_15237){var state_val_15238 = (state_15237[1]);if((state_val_15238 === 7))
{var inst_15233 = (state_15237[2]);var state_15237__$1 = state_15237;var statearr_15239_15263 = state_15237__$1;(statearr_15239_15263[2] = inst_15233);
(statearr_15239_15263[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15238 === 1))
{var state_15237__$1 = state_15237;var statearr_15240_15264 = state_15237__$1;(statearr_15240_15264[2] = null);
(statearr_15240_15264[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15238 === 4))
{var inst_15214 = (state_15237[7]);var inst_15214__$1 = (state_15237[2]);var inst_15215 = (inst_15214__$1 == null);var state_15237__$1 = (function (){var statearr_15241 = state_15237;(statearr_15241[7] = inst_15214__$1);
return statearr_15241;
})();if(cljs.core.truth_(inst_15215))
{var statearr_15242_15265 = state_15237__$1;(statearr_15242_15265[1] = 5);
} else
{var statearr_15243_15266 = state_15237__$1;(statearr_15243_15266[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15238 === 13))
{var state_15237__$1 = state_15237;var statearr_15244_15267 = state_15237__$1;(statearr_15244_15267[2] = null);
(statearr_15244_15267[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15238 === 6))
{var inst_15214 = (state_15237[7]);var inst_15220 = p.call(null,inst_15214);var state_15237__$1 = state_15237;if(cljs.core.truth_(inst_15220))
{var statearr_15245_15268 = state_15237__$1;(statearr_15245_15268[1] = 9);
} else
{var statearr_15246_15269 = state_15237__$1;(statearr_15246_15269[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15238 === 3))
{var inst_15235 = (state_15237[2]);var state_15237__$1 = state_15237;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15237__$1,inst_15235);
} else
{if((state_val_15238 === 12))
{var state_15237__$1 = state_15237;var statearr_15247_15270 = state_15237__$1;(statearr_15247_15270[2] = null);
(statearr_15247_15270[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15238 === 2))
{var state_15237__$1 = state_15237;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15237__$1,4,ch);
} else
{if((state_val_15238 === 11))
{var inst_15214 = (state_15237[7]);var inst_15224 = (state_15237[2]);var state_15237__$1 = state_15237;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15237__$1,8,inst_15224,inst_15214);
} else
{if((state_val_15238 === 9))
{var state_15237__$1 = state_15237;var statearr_15248_15271 = state_15237__$1;(statearr_15248_15271[2] = tc);
(statearr_15248_15271[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15238 === 5))
{var inst_15217 = cljs.core.async.close_BANG_.call(null,tc);var inst_15218 = cljs.core.async.close_BANG_.call(null,fc);var state_15237__$1 = (function (){var statearr_15249 = state_15237;(statearr_15249[8] = inst_15217);
return statearr_15249;
})();var statearr_15250_15272 = state_15237__$1;(statearr_15250_15272[2] = inst_15218);
(statearr_15250_15272[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15238 === 14))
{var inst_15231 = (state_15237[2]);var state_15237__$1 = state_15237;var statearr_15251_15273 = state_15237__$1;(statearr_15251_15273[2] = inst_15231);
(statearr_15251_15273[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15238 === 10))
{var state_15237__$1 = state_15237;var statearr_15252_15274 = state_15237__$1;(statearr_15252_15274[2] = fc);
(statearr_15252_15274[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15238 === 8))
{var inst_15226 = (state_15237[2]);var state_15237__$1 = state_15237;if(cljs.core.truth_(inst_15226))
{var statearr_15253_15275 = state_15237__$1;(statearr_15253_15275[1] = 12);
} else
{var statearr_15254_15276 = state_15237__$1;(statearr_15254_15276[1] = 13);
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
});})(c__10329__auto___15262,tc,fc))
;return ((function (switch__10314__auto__,c__10329__auto___15262,tc,fc){
return (function() {
var state_machine__10315__auto__ = null;
var state_machine__10315__auto____0 = (function (){var statearr_15258 = [null,null,null,null,null,null,null,null,null];(statearr_15258[0] = state_machine__10315__auto__);
(statearr_15258[1] = 1);
return statearr_15258;
});
var state_machine__10315__auto____1 = (function (state_15237){while(true){
var ret_value__10316__auto__ = (function (){try{while(true){
var result__10317__auto__ = switch__10314__auto__.call(null,state_15237);if(cljs.core.keyword_identical_QMARK_.call(null,result__10317__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10317__auto__;
}
break;
}
}catch (e15259){if((e15259 instanceof Object))
{var ex__10318__auto__ = e15259;var statearr_15260_15277 = state_15237;(statearr_15260_15277[5] = ex__10318__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15237);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15259;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10316__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15278 = state_15237;
state_15237 = G__15278;
continue;
}
} else
{return ret_value__10316__auto__;
}
break;
}
});
state_machine__10315__auto__ = function(state_15237){
switch(arguments.length){
case 0:
return state_machine__10315__auto____0.call(this);
case 1:
return state_machine__10315__auto____1.call(this,state_15237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10315__auto____0;
state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10315__auto____1;
return state_machine__10315__auto__;
})()
;})(switch__10314__auto__,c__10329__auto___15262,tc,fc))
})();var state__10331__auto__ = (function (){var statearr_15261 = f__10330__auto__.call(null);(statearr_15261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10329__auto___15262);
return statearr_15261;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10331__auto__);
});})(c__10329__auto___15262,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__10329__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10329__auto__){
return (function (){var f__10330__auto__ = (function (){var switch__10314__auto__ = ((function (c__10329__auto__){
return (function (state_15325){var state_val_15326 = (state_15325[1]);if((state_val_15326 === 7))
{var inst_15321 = (state_15325[2]);var state_15325__$1 = state_15325;var statearr_15327_15343 = state_15325__$1;(statearr_15327_15343[2] = inst_15321);
(statearr_15327_15343[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15326 === 6))
{var inst_15311 = (state_15325[7]);var inst_15314 = (state_15325[8]);var inst_15318 = f.call(null,inst_15311,inst_15314);var inst_15311__$1 = inst_15318;var state_15325__$1 = (function (){var statearr_15328 = state_15325;(statearr_15328[7] = inst_15311__$1);
return statearr_15328;
})();var statearr_15329_15344 = state_15325__$1;(statearr_15329_15344[2] = null);
(statearr_15329_15344[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15326 === 5))
{var inst_15311 = (state_15325[7]);var state_15325__$1 = state_15325;var statearr_15330_15345 = state_15325__$1;(statearr_15330_15345[2] = inst_15311);
(statearr_15330_15345[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15326 === 4))
{var inst_15314 = (state_15325[8]);var inst_15314__$1 = (state_15325[2]);var inst_15315 = (inst_15314__$1 == null);var state_15325__$1 = (function (){var statearr_15331 = state_15325;(statearr_15331[8] = inst_15314__$1);
return statearr_15331;
})();if(cljs.core.truth_(inst_15315))
{var statearr_15332_15346 = state_15325__$1;(statearr_15332_15346[1] = 5);
} else
{var statearr_15333_15347 = state_15325__$1;(statearr_15333_15347[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15326 === 3))
{var inst_15323 = (state_15325[2]);var state_15325__$1 = state_15325;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15325__$1,inst_15323);
} else
{if((state_val_15326 === 2))
{var state_15325__$1 = state_15325;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15325__$1,4,ch);
} else
{if((state_val_15326 === 1))
{var inst_15311 = init;var state_15325__$1 = (function (){var statearr_15334 = state_15325;(statearr_15334[7] = inst_15311);
return statearr_15334;
})();var statearr_15335_15348 = state_15325__$1;(statearr_15335_15348[2] = null);
(statearr_15335_15348[1] = 2);
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
});})(c__10329__auto__))
;return ((function (switch__10314__auto__,c__10329__auto__){
return (function() {
var state_machine__10315__auto__ = null;
var state_machine__10315__auto____0 = (function (){var statearr_15339 = [null,null,null,null,null,null,null,null,null];(statearr_15339[0] = state_machine__10315__auto__);
(statearr_15339[1] = 1);
return statearr_15339;
});
var state_machine__10315__auto____1 = (function (state_15325){while(true){
var ret_value__10316__auto__ = (function (){try{while(true){
var result__10317__auto__ = switch__10314__auto__.call(null,state_15325);if(cljs.core.keyword_identical_QMARK_.call(null,result__10317__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10317__auto__;
}
break;
}
}catch (e15340){if((e15340 instanceof Object))
{var ex__10318__auto__ = e15340;var statearr_15341_15349 = state_15325;(statearr_15341_15349[5] = ex__10318__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15325);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15340;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10316__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15350 = state_15325;
state_15325 = G__15350;
continue;
}
} else
{return ret_value__10316__auto__;
}
break;
}
});
state_machine__10315__auto__ = function(state_15325){
switch(arguments.length){
case 0:
return state_machine__10315__auto____0.call(this);
case 1:
return state_machine__10315__auto____1.call(this,state_15325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10315__auto____0;
state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10315__auto____1;
return state_machine__10315__auto__;
})()
;})(switch__10314__auto__,c__10329__auto__))
})();var state__10331__auto__ = (function (){var statearr_15342 = f__10330__auto__.call(null);(statearr_15342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10329__auto__);
return statearr_15342;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10331__auto__);
});})(c__10329__auto__))
);
return c__10329__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__10329__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10329__auto__){
return (function (){var f__10330__auto__ = (function (){var switch__10314__auto__ = ((function (c__10329__auto__){
return (function (state_15424){var state_val_15425 = (state_15424[1]);if((state_val_15425 === 7))
{var inst_15406 = (state_15424[2]);var state_15424__$1 = state_15424;var statearr_15426_15449 = state_15424__$1;(statearr_15426_15449[2] = inst_15406);
(statearr_15426_15449[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15425 === 1))
{var inst_15400 = cljs.core.seq.call(null,coll);var inst_15401 = inst_15400;var state_15424__$1 = (function (){var statearr_15427 = state_15424;(statearr_15427[7] = inst_15401);
return statearr_15427;
})();var statearr_15428_15450 = state_15424__$1;(statearr_15428_15450[2] = null);
(statearr_15428_15450[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15425 === 4))
{var inst_15401 = (state_15424[7]);var inst_15404 = cljs.core.first.call(null,inst_15401);var state_15424__$1 = state_15424;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15424__$1,7,ch,inst_15404);
} else
{if((state_val_15425 === 13))
{var inst_15418 = (state_15424[2]);var state_15424__$1 = state_15424;var statearr_15429_15451 = state_15424__$1;(statearr_15429_15451[2] = inst_15418);
(statearr_15429_15451[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15425 === 6))
{var inst_15409 = (state_15424[2]);var state_15424__$1 = state_15424;if(cljs.core.truth_(inst_15409))
{var statearr_15430_15452 = state_15424__$1;(statearr_15430_15452[1] = 8);
} else
{var statearr_15431_15453 = state_15424__$1;(statearr_15431_15453[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15425 === 3))
{var inst_15422 = (state_15424[2]);var state_15424__$1 = state_15424;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15424__$1,inst_15422);
} else
{if((state_val_15425 === 12))
{var state_15424__$1 = state_15424;var statearr_15432_15454 = state_15424__$1;(statearr_15432_15454[2] = null);
(statearr_15432_15454[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15425 === 2))
{var inst_15401 = (state_15424[7]);var state_15424__$1 = state_15424;if(cljs.core.truth_(inst_15401))
{var statearr_15433_15455 = state_15424__$1;(statearr_15433_15455[1] = 4);
} else
{var statearr_15434_15456 = state_15424__$1;(statearr_15434_15456[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15425 === 11))
{var inst_15415 = cljs.core.async.close_BANG_.call(null,ch);var state_15424__$1 = state_15424;var statearr_15435_15457 = state_15424__$1;(statearr_15435_15457[2] = inst_15415);
(statearr_15435_15457[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15425 === 9))
{var state_15424__$1 = state_15424;if(cljs.core.truth_(close_QMARK_))
{var statearr_15436_15458 = state_15424__$1;(statearr_15436_15458[1] = 11);
} else
{var statearr_15437_15459 = state_15424__$1;(statearr_15437_15459[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15425 === 5))
{var inst_15401 = (state_15424[7]);var state_15424__$1 = state_15424;var statearr_15438_15460 = state_15424__$1;(statearr_15438_15460[2] = inst_15401);
(statearr_15438_15460[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15425 === 10))
{var inst_15420 = (state_15424[2]);var state_15424__$1 = state_15424;var statearr_15439_15461 = state_15424__$1;(statearr_15439_15461[2] = inst_15420);
(statearr_15439_15461[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15425 === 8))
{var inst_15401 = (state_15424[7]);var inst_15411 = cljs.core.next.call(null,inst_15401);var inst_15401__$1 = inst_15411;var state_15424__$1 = (function (){var statearr_15440 = state_15424;(statearr_15440[7] = inst_15401__$1);
return statearr_15440;
})();var statearr_15441_15462 = state_15424__$1;(statearr_15441_15462[2] = null);
(statearr_15441_15462[1] = 2);
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
});})(c__10329__auto__))
;return ((function (switch__10314__auto__,c__10329__auto__){
return (function() {
var state_machine__10315__auto__ = null;
var state_machine__10315__auto____0 = (function (){var statearr_15445 = [null,null,null,null,null,null,null,null];(statearr_15445[0] = state_machine__10315__auto__);
(statearr_15445[1] = 1);
return statearr_15445;
});
var state_machine__10315__auto____1 = (function (state_15424){while(true){
var ret_value__10316__auto__ = (function (){try{while(true){
var result__10317__auto__ = switch__10314__auto__.call(null,state_15424);if(cljs.core.keyword_identical_QMARK_.call(null,result__10317__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10317__auto__;
}
break;
}
}catch (e15446){if((e15446 instanceof Object))
{var ex__10318__auto__ = e15446;var statearr_15447_15463 = state_15424;(statearr_15447_15463[5] = ex__10318__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15424);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15446;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10316__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15464 = state_15424;
state_15424 = G__15464;
continue;
}
} else
{return ret_value__10316__auto__;
}
break;
}
});
state_machine__10315__auto__ = function(state_15424){
switch(arguments.length){
case 0:
return state_machine__10315__auto____0.call(this);
case 1:
return state_machine__10315__auto____1.call(this,state_15424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10315__auto____0;
state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10315__auto____1;
return state_machine__10315__auto__;
})()
;})(switch__10314__auto__,c__10329__auto__))
})();var state__10331__auto__ = (function (){var statearr_15448 = f__10330__auto__.call(null);(statearr_15448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10329__auto__);
return statearr_15448;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10331__auto__);
});})(c__10329__auto__))
);
return c__10329__auto__;
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
cljs.core.async.Mux = (function (){var obj15466 = {};return obj15466;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__7862__auto__ = _;if(and__7862__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__7862__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__8501__auto__ = (((_ == null))?null:_);return (function (){var or__7874__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8501__auto__)]);if(or__7874__auto__)
{return or__7874__auto__;
} else
{var or__7874__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__7874__auto____$1)
{return or__7874__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj15468 = {};return obj15468;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__7862__auto__ = m;if(and__7862__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__7862__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__8501__auto__ = (((m == null))?null:m);return (function (){var or__7874__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8501__auto__)]);if(or__7874__auto__)
{return or__7874__auto__;
} else
{var or__7874__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__7874__auto____$1)
{return or__7874__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__7862__auto__ = m;if(and__7862__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__7862__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__8501__auto__ = (((m == null))?null:m);return (function (){var or__7874__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8501__auto__)]);if(or__7874__auto__)
{return or__7874__auto__;
} else
{var or__7874__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__7874__auto____$1)
{return or__7874__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__7862__auto__ = m;if(and__7862__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__7862__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__8501__auto__ = (((m == null))?null:m);return (function (){var or__7874__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8501__auto__)]);if(or__7874__auto__)
{return or__7874__auto__;
} else
{var or__7874__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__7874__auto____$1)
{return or__7874__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t15690 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15690 = (function (cs,ch,mult,meta15691){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta15691 = meta15691;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15690.cljs$lang$type = true;
cljs.core.async.t15690.cljs$lang$ctorStr = "cljs.core.async/t15690";
cljs.core.async.t15690.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8441__auto__,writer__8442__auto__,opt__8443__auto__){return cljs.core._write.call(null,writer__8442__auto__,"cljs.core.async/t15690");
});})(cs))
;
cljs.core.async.t15690.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t15690.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t15690.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t15690.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t15690.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15690.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t15690.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15692){var self__ = this;
var _15692__$1 = this;return self__.meta15691;
});})(cs))
;
cljs.core.async.t15690.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15692,meta15691__$1){var self__ = this;
var _15692__$1 = this;return (new cljs.core.async.t15690(self__.cs,self__.ch,self__.mult,meta15691__$1));
});})(cs))
;
cljs.core.async.__GT_t15690 = ((function (cs){
return (function __GT_t15690(cs__$1,ch__$1,mult__$1,meta15691){return (new cljs.core.async.t15690(cs__$1,ch__$1,mult__$1,meta15691));
});})(cs))
;
}
return (new cljs.core.async.t15690(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__10329__auto___15911 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10329__auto___15911,cs,m,dchan,dctr,done){
return (function (){var f__10330__auto__ = (function (){var switch__10314__auto__ = ((function (c__10329__auto___15911,cs,m,dchan,dctr,done){
return (function (state_15823){var state_val_15824 = (state_15823[1]);if((state_val_15824 === 7))
{var inst_15819 = (state_15823[2]);var state_15823__$1 = state_15823;var statearr_15825_15912 = state_15823__$1;(statearr_15825_15912[2] = inst_15819);
(statearr_15825_15912[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15824 === 20))
{var inst_15724 = (state_15823[7]);var inst_15734 = cljs.core.first.call(null,inst_15724);var inst_15735 = cljs.core.nth.call(null,inst_15734,0,null);var inst_15736 = cljs.core.nth.call(null,inst_15734,1,null);var state_15823__$1 = (function (){var statearr_15826 = state_15823;(statearr_15826[8] = inst_15735);
return statearr_15826;
})();if(cljs.core.truth_(inst_15736))
{var statearr_15827_15913 = state_15823__$1;(statearr_15827_15913[1] = 22);
} else
{var statearr_15828_15914 = state_15823__$1;(statearr_15828_15914[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15824 === 27))
{var inst_15771 = (state_15823[9]);var inst_15766 = (state_15823[10]);var inst_15695 = (state_15823[11]);var inst_15764 = (state_15823[12]);var inst_15771__$1 = cljs.core._nth.call(null,inst_15764,inst_15766);var inst_15772 = cljs.core.async.put_BANG_.call(null,inst_15771__$1,inst_15695,done);var state_15823__$1 = (function (){var statearr_15829 = state_15823;(statearr_15829[9] = inst_15771__$1);
return statearr_15829;
})();if(cljs.core.truth_(inst_15772))
{var statearr_15830_15915 = state_15823__$1;(statearr_15830_15915[1] = 30);
} else
{var statearr_15831_15916 = state_15823__$1;(statearr_15831_15916[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15824 === 1))
{var state_15823__$1 = state_15823;var statearr_15832_15917 = state_15823__$1;(statearr_15832_15917[2] = null);
(statearr_15832_15917[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15824 === 24))
{var inst_15724 = (state_15823[7]);var inst_15741 = (state_15823[2]);var inst_15742 = cljs.core.next.call(null,inst_15724);var inst_15704 = inst_15742;var inst_15705 = null;var inst_15706 = 0;var inst_15707 = 0;var state_15823__$1 = (function (){var statearr_15833 = state_15823;(statearr_15833[13] = inst_15707);
(statearr_15833[14] = inst_15704);
(statearr_15833[15] = inst_15741);
(statearr_15833[16] = inst_15706);
(statearr_15833[17] = inst_15705);
return statearr_15833;
})();var statearr_15834_15918 = state_15823__$1;(statearr_15834_15918[2] = null);
(statearr_15834_15918[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15824 === 39))
{var state_15823__$1 = state_15823;var statearr_15838_15919 = state_15823__$1;(statearr_15838_15919[2] = null);
(statearr_15838_15919[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15824 === 4))
{var inst_15695 = (state_15823[11]);var inst_15695__$1 = (state_15823[2]);var inst_15696 = (inst_15695__$1 == null);var state_15823__$1 = (function (){var statearr_15839 = state_15823;(statearr_15839[11] = inst_15695__$1);
return statearr_15839;
})();if(cljs.core.truth_(inst_15696))
{var statearr_15840_15920 = state_15823__$1;(statearr_15840_15920[1] = 5);
} else
{var statearr_15841_15921 = state_15823__$1;(statearr_15841_15921[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15824 === 15))
{var inst_15707 = (state_15823[13]);var inst_15704 = (state_15823[14]);var inst_15706 = (state_15823[16]);var inst_15705 = (state_15823[17]);var inst_15720 = (state_15823[2]);var inst_15721 = (inst_15707 + 1);var tmp15835 = inst_15704;var tmp15836 = inst_15706;var tmp15837 = inst_15705;var inst_15704__$1 = tmp15835;var inst_15705__$1 = tmp15837;var inst_15706__$1 = tmp15836;var inst_15707__$1 = inst_15721;var state_15823__$1 = (function (){var statearr_15842 = state_15823;(statearr_15842[13] = inst_15707__$1);
(statearr_15842[14] = inst_15704__$1);
(statearr_15842[16] = inst_15706__$1);
(statearr_15842[18] = inst_15720);
(statearr_15842[17] = inst_15705__$1);
return statearr_15842;
})();var statearr_15843_15922 = state_15823__$1;(statearr_15843_15922[2] = null);
(statearr_15843_15922[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15824 === 21))
{var inst_15745 = (state_15823[2]);var state_15823__$1 = state_15823;var statearr_15847_15923 = state_15823__$1;(statearr_15847_15923[2] = inst_15745);
(statearr_15847_15923[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15824 === 31))
{var inst_15771 = (state_15823[9]);var inst_15775 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15776 = cljs.core.async.untap_STAR_.call(null,m,inst_15771);var state_15823__$1 = (function (){var statearr_15848 = state_15823;(statearr_15848[19] = inst_15775);
return statearr_15848;
})();var statearr_15849_15924 = state_15823__$1;(statearr_15849_15924[2] = inst_15776);
(statearr_15849_15924[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15824 === 32))
{var inst_15765 = (state_15823[20]);var inst_15766 = (state_15823[10]);var inst_15763 = (state_15823[21]);var inst_15764 = (state_15823[12]);var inst_15778 = (state_15823[2]);var inst_15779 = (inst_15766 + 1);var tmp15844 = inst_15765;var tmp15845 = inst_15763;var tmp15846 = inst_15764;var inst_15763__$1 = tmp15845;var inst_15764__$1 = tmp15846;var inst_15765__$1 = tmp15844;var inst_15766__$1 = inst_15779;var state_15823__$1 = (function (){var statearr_15850 = state_15823;(statearr_15850[20] = inst_15765__$1);
(statearr_15850[10] = inst_15766__$1);
(statearr_15850[22] = inst_15778);
(statearr_15850[21] = inst_15763__$1);
(statearr_15850[12] = inst_15764__$1);
return statearr_15850;
})();var statearr_15851_15925 = state_15823__$1;(statearr_15851_15925[2] = null);
(statearr_15851_15925[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15824 === 40))
{var inst_15791 = (state_15823[23]);var inst_15795 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15796 = cljs.core.async.untap_STAR_.call(null,m,inst_15791);var state_15823__$1 = (function (){var statearr_15852 = state_15823;(statearr_15852[24] = inst_15795);
return statearr_15852;
})();var statearr_15853_15926 = state_15823__$1;(statearr_15853_15926[2] = inst_15796);
(statearr_15853_15926[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15824 === 33))
{var inst_15782 = (state_15823[25]);var inst_15784 = cljs.core.chunked_seq_QMARK_.call(null,inst_15782);var state_15823__$1 = state_15823;if(inst_15784)
{var statearr_15854_15927 = state_15823__$1;(statearr_15854_15927[1] = 36);
} else
{var statearr_15855_15928 = state_15823__$1;(statearr_15855_15928[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15824 === 13))
{var inst_15714 = (state_15823[26]);var inst_15717 = cljs.core.async.close_BANG_.call(null,inst_15714);var state_15823__$1 = state_15823;var statearr_15856_15929 = state_15823__$1;(statearr_15856_15929[2] = inst_15717);
(statearr_15856_15929[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15824 === 22))
{var inst_15735 = (state_15823[8]);var inst_15738 = cljs.core.async.close_BANG_.call(null,inst_15735);var state_15823__$1 = state_15823;var statearr_15857_15930 = state_15823__$1;(statearr_15857_15930[2] = inst_15738);
(statearr_15857_15930[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15824 === 36))
{var inst_15782 = (state_15823[25]);var inst_15786 = cljs.core.chunk_first.call(null,inst_15782);var inst_15787 = cljs.core.chunk_rest.call(null,inst_15782);var inst_15788 = cljs.core.count.call(null,inst_15786);var inst_15763 = inst_15787;var inst_15764 = inst_15786;var inst_15765 = inst_15788;var inst_15766 = 0;var state_15823__$1 = (function (){var statearr_15858 = state_15823;(statearr_15858[20] = inst_15765);
(statearr_15858[10] = inst_15766);
(statearr_15858[21] = inst_15763);
(statearr_15858[12] = inst_15764);
return statearr_15858;
})();var statearr_15859_15931 = state_15823__$1;(statearr_15859_15931[2] = null);
(statearr_15859_15931[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15824 === 41))
{var inst_15782 = (state_15823[25]);var inst_15798 = (state_15823[2]);var inst_15799 = cljs.core.next.call(null,inst_15782);var inst_15763 = inst_15799;var inst_15764 = null;var inst_15765 = 0;var inst_15766 = 0;var state_15823__$1 = (function (){var statearr_15860 = state_15823;(statearr_15860[20] = inst_15765);
(statearr_15860[10] = inst_15766);
(statearr_15860[27] = inst_15798);
(statearr_15860[21] = inst_15763);
(statearr_15860[12] = inst_15764);
return statearr_15860;
})();var statearr_15861_15932 = state_15823__$1;(statearr_15861_15932[2] = null);
(statearr_15861_15932[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15824 === 43))
{var state_15823__$1 = state_15823;var statearr_15862_15933 = state_15823__$1;(statearr_15862_15933[2] = null);
(statearr_15862_15933[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15824 === 29))
{var inst_15807 = (state_15823[2]);var state_15823__$1 = state_15823;var statearr_15863_15934 = state_15823__$1;(statearr_15863_15934[2] = inst_15807);
(statearr_15863_15934[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15824 === 44))
{var inst_15816 = (state_15823[2]);var state_15823__$1 = (function (){var statearr_15864 = state_15823;(statearr_15864[28] = inst_15816);
return statearr_15864;
})();var statearr_15865_15935 = state_15823__$1;(statearr_15865_15935[2] = null);
(statearr_15865_15935[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15824 === 6))
{var inst_15755 = (state_15823[29]);var inst_15754 = cljs.core.deref.call(null,cs);var inst_15755__$1 = cljs.core.keys.call(null,inst_15754);var inst_15756 = cljs.core.count.call(null,inst_15755__$1);var inst_15757 = cljs.core.reset_BANG_.call(null,dctr,inst_15756);var inst_15762 = cljs.core.seq.call(null,inst_15755__$1);var inst_15763 = inst_15762;var inst_15764 = null;var inst_15765 = 0;var inst_15766 = 0;var state_15823__$1 = (function (){var statearr_15866 = state_15823;(statearr_15866[20] = inst_15765);
(statearr_15866[10] = inst_15766);
(statearr_15866[30] = inst_15757);
(statearr_15866[21] = inst_15763);
(statearr_15866[29] = inst_15755__$1);
(statearr_15866[12] = inst_15764);
return statearr_15866;
})();var statearr_15867_15936 = state_15823__$1;(statearr_15867_15936[2] = null);
(statearr_15867_15936[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15824 === 28))
{var inst_15782 = (state_15823[25]);var inst_15763 = (state_15823[21]);var inst_15782__$1 = cljs.core.seq.call(null,inst_15763);var state_15823__$1 = (function (){var statearr_15868 = state_15823;(statearr_15868[25] = inst_15782__$1);
return statearr_15868;
})();if(inst_15782__$1)
{var statearr_15869_15937 = state_15823__$1;(statearr_15869_15937[1] = 33);
} else
{var statearr_15870_15938 = state_15823__$1;(statearr_15870_15938[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15824 === 25))
{var inst_15765 = (state_15823[20]);var inst_15766 = (state_15823[10]);var inst_15768 = (inst_15766 < inst_15765);var inst_15769 = inst_15768;var state_15823__$1 = state_15823;if(cljs.core.truth_(inst_15769))
{var statearr_15871_15939 = state_15823__$1;(statearr_15871_15939[1] = 27);
} else
{var statearr_15872_15940 = state_15823__$1;(statearr_15872_15940[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15824 === 34))
{var state_15823__$1 = state_15823;var statearr_15873_15941 = state_15823__$1;(statearr_15873_15941[2] = null);
(statearr_15873_15941[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15824 === 17))
{var state_15823__$1 = state_15823;var statearr_15874_15942 = state_15823__$1;(statearr_15874_15942[2] = null);
(statearr_15874_15942[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15824 === 3))
{var inst_15821 = (state_15823[2]);var state_15823__$1 = state_15823;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15823__$1,inst_15821);
} else
{if((state_val_15824 === 12))
{var inst_15750 = (state_15823[2]);var state_15823__$1 = state_15823;var statearr_15875_15943 = state_15823__$1;(statearr_15875_15943[2] = inst_15750);
(statearr_15875_15943[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15824 === 2))
{var state_15823__$1 = state_15823;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15823__$1,4,ch);
} else
{if((state_val_15824 === 23))
{var state_15823__$1 = state_15823;var statearr_15876_15944 = state_15823__$1;(statearr_15876_15944[2] = null);
(statearr_15876_15944[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15824 === 35))
{var inst_15805 = (state_15823[2]);var state_15823__$1 = state_15823;var statearr_15877_15945 = state_15823__$1;(statearr_15877_15945[2] = inst_15805);
(statearr_15877_15945[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15824 === 19))
{var inst_15724 = (state_15823[7]);var inst_15728 = cljs.core.chunk_first.call(null,inst_15724);var inst_15729 = cljs.core.chunk_rest.call(null,inst_15724);var inst_15730 = cljs.core.count.call(null,inst_15728);var inst_15704 = inst_15729;var inst_15705 = inst_15728;var inst_15706 = inst_15730;var inst_15707 = 0;var state_15823__$1 = (function (){var statearr_15878 = state_15823;(statearr_15878[13] = inst_15707);
(statearr_15878[14] = inst_15704);
(statearr_15878[16] = inst_15706);
(statearr_15878[17] = inst_15705);
return statearr_15878;
})();var statearr_15879_15946 = state_15823__$1;(statearr_15879_15946[2] = null);
(statearr_15879_15946[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15824 === 11))
{var inst_15724 = (state_15823[7]);var inst_15704 = (state_15823[14]);var inst_15724__$1 = cljs.core.seq.call(null,inst_15704);var state_15823__$1 = (function (){var statearr_15880 = state_15823;(statearr_15880[7] = inst_15724__$1);
return statearr_15880;
})();if(inst_15724__$1)
{var statearr_15881_15947 = state_15823__$1;(statearr_15881_15947[1] = 16);
} else
{var statearr_15882_15948 = state_15823__$1;(statearr_15882_15948[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15824 === 9))
{var inst_15752 = (state_15823[2]);var state_15823__$1 = state_15823;var statearr_15883_15949 = state_15823__$1;(statearr_15883_15949[2] = inst_15752);
(statearr_15883_15949[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15824 === 5))
{var inst_15702 = cljs.core.deref.call(null,cs);var inst_15703 = cljs.core.seq.call(null,inst_15702);var inst_15704 = inst_15703;var inst_15705 = null;var inst_15706 = 0;var inst_15707 = 0;var state_15823__$1 = (function (){var statearr_15884 = state_15823;(statearr_15884[13] = inst_15707);
(statearr_15884[14] = inst_15704);
(statearr_15884[16] = inst_15706);
(statearr_15884[17] = inst_15705);
return statearr_15884;
})();var statearr_15885_15950 = state_15823__$1;(statearr_15885_15950[2] = null);
(statearr_15885_15950[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15824 === 14))
{var state_15823__$1 = state_15823;var statearr_15886_15951 = state_15823__$1;(statearr_15886_15951[2] = null);
(statearr_15886_15951[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15824 === 45))
{var inst_15813 = (state_15823[2]);var state_15823__$1 = state_15823;var statearr_15887_15952 = state_15823__$1;(statearr_15887_15952[2] = inst_15813);
(statearr_15887_15952[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15824 === 26))
{var inst_15755 = (state_15823[29]);var inst_15809 = (state_15823[2]);var inst_15810 = cljs.core.seq.call(null,inst_15755);var state_15823__$1 = (function (){var statearr_15888 = state_15823;(statearr_15888[31] = inst_15809);
return statearr_15888;
})();if(inst_15810)
{var statearr_15889_15953 = state_15823__$1;(statearr_15889_15953[1] = 42);
} else
{var statearr_15890_15954 = state_15823__$1;(statearr_15890_15954[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15824 === 16))
{var inst_15724 = (state_15823[7]);var inst_15726 = cljs.core.chunked_seq_QMARK_.call(null,inst_15724);var state_15823__$1 = state_15823;if(inst_15726)
{var statearr_15891_15955 = state_15823__$1;(statearr_15891_15955[1] = 19);
} else
{var statearr_15892_15956 = state_15823__$1;(statearr_15892_15956[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15824 === 38))
{var inst_15802 = (state_15823[2]);var state_15823__$1 = state_15823;var statearr_15893_15957 = state_15823__$1;(statearr_15893_15957[2] = inst_15802);
(statearr_15893_15957[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15824 === 30))
{var state_15823__$1 = state_15823;var statearr_15894_15958 = state_15823__$1;(statearr_15894_15958[2] = null);
(statearr_15894_15958[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15824 === 10))
{var inst_15707 = (state_15823[13]);var inst_15705 = (state_15823[17]);var inst_15713 = cljs.core._nth.call(null,inst_15705,inst_15707);var inst_15714 = cljs.core.nth.call(null,inst_15713,0,null);var inst_15715 = cljs.core.nth.call(null,inst_15713,1,null);var state_15823__$1 = (function (){var statearr_15895 = state_15823;(statearr_15895[26] = inst_15714);
return statearr_15895;
})();if(cljs.core.truth_(inst_15715))
{var statearr_15896_15959 = state_15823__$1;(statearr_15896_15959[1] = 13);
} else
{var statearr_15897_15960 = state_15823__$1;(statearr_15897_15960[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15824 === 18))
{var inst_15748 = (state_15823[2]);var state_15823__$1 = state_15823;var statearr_15898_15961 = state_15823__$1;(statearr_15898_15961[2] = inst_15748);
(statearr_15898_15961[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15824 === 42))
{var state_15823__$1 = state_15823;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15823__$1,45,dchan);
} else
{if((state_val_15824 === 37))
{var inst_15782 = (state_15823[25]);var inst_15791 = (state_15823[23]);var inst_15695 = (state_15823[11]);var inst_15791__$1 = cljs.core.first.call(null,inst_15782);var inst_15792 = cljs.core.async.put_BANG_.call(null,inst_15791__$1,inst_15695,done);var state_15823__$1 = (function (){var statearr_15899 = state_15823;(statearr_15899[23] = inst_15791__$1);
return statearr_15899;
})();if(cljs.core.truth_(inst_15792))
{var statearr_15900_15962 = state_15823__$1;(statearr_15900_15962[1] = 39);
} else
{var statearr_15901_15963 = state_15823__$1;(statearr_15901_15963[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15824 === 8))
{var inst_15707 = (state_15823[13]);var inst_15706 = (state_15823[16]);var inst_15709 = (inst_15707 < inst_15706);var inst_15710 = inst_15709;var state_15823__$1 = state_15823;if(cljs.core.truth_(inst_15710))
{var statearr_15902_15964 = state_15823__$1;(statearr_15902_15964[1] = 10);
} else
{var statearr_15903_15965 = state_15823__$1;(statearr_15903_15965[1] = 11);
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
});})(c__10329__auto___15911,cs,m,dchan,dctr,done))
;return ((function (switch__10314__auto__,c__10329__auto___15911,cs,m,dchan,dctr,done){
return (function() {
var state_machine__10315__auto__ = null;
var state_machine__10315__auto____0 = (function (){var statearr_15907 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15907[0] = state_machine__10315__auto__);
(statearr_15907[1] = 1);
return statearr_15907;
});
var state_machine__10315__auto____1 = (function (state_15823){while(true){
var ret_value__10316__auto__ = (function (){try{while(true){
var result__10317__auto__ = switch__10314__auto__.call(null,state_15823);if(cljs.core.keyword_identical_QMARK_.call(null,result__10317__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10317__auto__;
}
break;
}
}catch (e15908){if((e15908 instanceof Object))
{var ex__10318__auto__ = e15908;var statearr_15909_15966 = state_15823;(statearr_15909_15966[5] = ex__10318__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15823);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15908;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10316__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15967 = state_15823;
state_15823 = G__15967;
continue;
}
} else
{return ret_value__10316__auto__;
}
break;
}
});
state_machine__10315__auto__ = function(state_15823){
switch(arguments.length){
case 0:
return state_machine__10315__auto____0.call(this);
case 1:
return state_machine__10315__auto____1.call(this,state_15823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10315__auto____0;
state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10315__auto____1;
return state_machine__10315__auto__;
})()
;})(switch__10314__auto__,c__10329__auto___15911,cs,m,dchan,dctr,done))
})();var state__10331__auto__ = (function (){var statearr_15910 = f__10330__auto__.call(null);(statearr_15910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10329__auto___15911);
return statearr_15910;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10331__auto__);
});})(c__10329__auto___15911,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj15969 = {};return obj15969;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__7862__auto__ = m;if(and__7862__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__7862__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__8501__auto__ = (((m == null))?null:m);return (function (){var or__7874__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8501__auto__)]);if(or__7874__auto__)
{return or__7874__auto__;
} else
{var or__7874__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__7874__auto____$1)
{return or__7874__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__7862__auto__ = m;if(and__7862__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__7862__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__8501__auto__ = (((m == null))?null:m);return (function (){var or__7874__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8501__auto__)]);if(or__7874__auto__)
{return or__7874__auto__;
} else
{var or__7874__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__7874__auto____$1)
{return or__7874__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__7862__auto__ = m;if(and__7862__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__7862__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__8501__auto__ = (((m == null))?null:m);return (function (){var or__7874__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8501__auto__)]);if(or__7874__auto__)
{return or__7874__auto__;
} else
{var or__7874__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__7874__auto____$1)
{return or__7874__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__7862__auto__ = m;if(and__7862__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__7862__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__8501__auto__ = (((m == null))?null:m);return (function (){var or__7874__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8501__auto__)]);if(or__7874__auto__)
{return or__7874__auto__;
} else
{var or__7874__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__7874__auto____$1)
{return or__7874__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__7862__auto__ = m;if(and__7862__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__7862__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__8501__auto__ = (((m == null))?null:m);return (function (){var or__7874__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8501__auto__)]);if(or__7874__auto__)
{return or__7874__auto__;
} else
{var or__7874__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__7874__auto____$1)
{return or__7874__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t16089 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16089 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16090){
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
this.meta16090 = meta16090;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16089.cljs$lang$type = true;
cljs.core.async.t16089.cljs$lang$ctorStr = "cljs.core.async/t16089";
cljs.core.async.t16089.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8441__auto__,writer__8442__auto__,opt__8443__auto__){return cljs.core._write.call(null,writer__8442__auto__,"cljs.core.async/t16089");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16089.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t16089.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16089.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16089.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16089.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16089.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16089.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16089.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16089.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16091){var self__ = this;
var _16091__$1 = this;return self__.meta16090;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16091,meta16090__$1){var self__ = this;
var _16091__$1 = this;return (new cljs.core.async.t16089(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16090__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t16089 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t16089(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16090){return (new cljs.core.async.t16089(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16090));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t16089(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__10329__auto___16208 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10329__auto___16208,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__10330__auto__ = (function (){var switch__10314__auto__ = ((function (c__10329__auto___16208,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16161){var state_val_16162 = (state_16161[1]);if((state_val_16162 === 7))
{var inst_16105 = (state_16161[7]);var inst_16110 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16105);var state_16161__$1 = state_16161;var statearr_16163_16209 = state_16161__$1;(statearr_16163_16209[2] = inst_16110);
(statearr_16163_16209[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16162 === 20))
{var inst_16120 = (state_16161[8]);var state_16161__$1 = state_16161;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16161__$1,23,out,inst_16120);
} else
{if((state_val_16162 === 1))
{var inst_16095 = (state_16161[9]);var inst_16095__$1 = calc_state.call(null);var inst_16096 = cljs.core.seq_QMARK_.call(null,inst_16095__$1);var state_16161__$1 = (function (){var statearr_16164 = state_16161;(statearr_16164[9] = inst_16095__$1);
return statearr_16164;
})();if(inst_16096)
{var statearr_16165_16210 = state_16161__$1;(statearr_16165_16210[1] = 2);
} else
{var statearr_16166_16211 = state_16161__$1;(statearr_16166_16211[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16162 === 24))
{var inst_16113 = (state_16161[10]);var inst_16105 = inst_16113;var state_16161__$1 = (function (){var statearr_16167 = state_16161;(statearr_16167[7] = inst_16105);
return statearr_16167;
})();var statearr_16168_16212 = state_16161__$1;(statearr_16168_16212[2] = null);
(statearr_16168_16212[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16162 === 4))
{var inst_16095 = (state_16161[9]);var inst_16101 = (state_16161[2]);var inst_16102 = cljs.core.get.call(null,inst_16101,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_16103 = cljs.core.get.call(null,inst_16101,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_16104 = cljs.core.get.call(null,inst_16101,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_16105 = inst_16095;var state_16161__$1 = (function (){var statearr_16169 = state_16161;(statearr_16169[11] = inst_16104);
(statearr_16169[12] = inst_16103);
(statearr_16169[13] = inst_16102);
(statearr_16169[7] = inst_16105);
return statearr_16169;
})();var statearr_16170_16213 = state_16161__$1;(statearr_16170_16213[2] = null);
(statearr_16170_16213[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16162 === 15))
{var state_16161__$1 = state_16161;var statearr_16171_16214 = state_16161__$1;(statearr_16171_16214[2] = null);
(statearr_16171_16214[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16162 === 21))
{var inst_16113 = (state_16161[10]);var inst_16105 = inst_16113;var state_16161__$1 = (function (){var statearr_16172 = state_16161;(statearr_16172[7] = inst_16105);
return statearr_16172;
})();var statearr_16173_16215 = state_16161__$1;(statearr_16173_16215[2] = null);
(statearr_16173_16215[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16162 === 13))
{var inst_16157 = (state_16161[2]);var state_16161__$1 = state_16161;var statearr_16174_16216 = state_16161__$1;(statearr_16174_16216[2] = inst_16157);
(statearr_16174_16216[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16162 === 22))
{var inst_16155 = (state_16161[2]);var state_16161__$1 = state_16161;var statearr_16175_16217 = state_16161__$1;(statearr_16175_16217[2] = inst_16155);
(statearr_16175_16217[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16162 === 6))
{var inst_16159 = (state_16161[2]);var state_16161__$1 = state_16161;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16161__$1,inst_16159);
} else
{if((state_val_16162 === 25))
{var state_16161__$1 = state_16161;var statearr_16176_16218 = state_16161__$1;(statearr_16176_16218[2] = null);
(statearr_16176_16218[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16162 === 17))
{var inst_16135 = (state_16161[14]);var state_16161__$1 = state_16161;var statearr_16177_16219 = state_16161__$1;(statearr_16177_16219[2] = inst_16135);
(statearr_16177_16219[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16162 === 3))
{var inst_16095 = (state_16161[9]);var state_16161__$1 = state_16161;var statearr_16178_16220 = state_16161__$1;(statearr_16178_16220[2] = inst_16095);
(statearr_16178_16220[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16162 === 12))
{var inst_16121 = (state_16161[15]);var inst_16116 = (state_16161[16]);var inst_16135 = (state_16161[14]);var inst_16135__$1 = inst_16116.call(null,inst_16121);var state_16161__$1 = (function (){var statearr_16179 = state_16161;(statearr_16179[14] = inst_16135__$1);
return statearr_16179;
})();if(cljs.core.truth_(inst_16135__$1))
{var statearr_16180_16221 = state_16161__$1;(statearr_16180_16221[1] = 17);
} else
{var statearr_16181_16222 = state_16161__$1;(statearr_16181_16222[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16162 === 2))
{var inst_16095 = (state_16161[9]);var inst_16098 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16095);var state_16161__$1 = state_16161;var statearr_16182_16223 = state_16161__$1;(statearr_16182_16223[2] = inst_16098);
(statearr_16182_16223[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16162 === 23))
{var inst_16146 = (state_16161[2]);var state_16161__$1 = state_16161;if(cljs.core.truth_(inst_16146))
{var statearr_16183_16224 = state_16161__$1;(statearr_16183_16224[1] = 24);
} else
{var statearr_16184_16225 = state_16161__$1;(statearr_16184_16225[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16162 === 19))
{var inst_16143 = (state_16161[2]);var state_16161__$1 = state_16161;if(cljs.core.truth_(inst_16143))
{var statearr_16185_16226 = state_16161__$1;(statearr_16185_16226[1] = 20);
} else
{var statearr_16186_16227 = state_16161__$1;(statearr_16186_16227[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16162 === 11))
{var inst_16120 = (state_16161[8]);var inst_16126 = (inst_16120 == null);var state_16161__$1 = state_16161;if(cljs.core.truth_(inst_16126))
{var statearr_16187_16228 = state_16161__$1;(statearr_16187_16228[1] = 14);
} else
{var statearr_16188_16229 = state_16161__$1;(statearr_16188_16229[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16162 === 9))
{var inst_16113 = (state_16161[10]);var inst_16113__$1 = (state_16161[2]);var inst_16114 = cljs.core.get.call(null,inst_16113__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_16115 = cljs.core.get.call(null,inst_16113__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_16116 = cljs.core.get.call(null,inst_16113__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_16161__$1 = (function (){var statearr_16189 = state_16161;(statearr_16189[17] = inst_16115);
(statearr_16189[10] = inst_16113__$1);
(statearr_16189[16] = inst_16116);
return statearr_16189;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16161__$1,10,inst_16114);
} else
{if((state_val_16162 === 5))
{var inst_16105 = (state_16161[7]);var inst_16108 = cljs.core.seq_QMARK_.call(null,inst_16105);var state_16161__$1 = state_16161;if(inst_16108)
{var statearr_16190_16230 = state_16161__$1;(statearr_16190_16230[1] = 7);
} else
{var statearr_16191_16231 = state_16161__$1;(statearr_16191_16231[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16162 === 14))
{var inst_16121 = (state_16161[15]);var inst_16128 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16121);var state_16161__$1 = state_16161;var statearr_16192_16232 = state_16161__$1;(statearr_16192_16232[2] = inst_16128);
(statearr_16192_16232[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16162 === 26))
{var inst_16151 = (state_16161[2]);var state_16161__$1 = state_16161;var statearr_16193_16233 = state_16161__$1;(statearr_16193_16233[2] = inst_16151);
(statearr_16193_16233[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16162 === 16))
{var inst_16131 = (state_16161[2]);var inst_16132 = calc_state.call(null);var inst_16105 = inst_16132;var state_16161__$1 = (function (){var statearr_16194 = state_16161;(statearr_16194[18] = inst_16131);
(statearr_16194[7] = inst_16105);
return statearr_16194;
})();var statearr_16195_16234 = state_16161__$1;(statearr_16195_16234[2] = null);
(statearr_16195_16234[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16162 === 10))
{var inst_16121 = (state_16161[15]);var inst_16120 = (state_16161[8]);var inst_16119 = (state_16161[2]);var inst_16120__$1 = cljs.core.nth.call(null,inst_16119,0,null);var inst_16121__$1 = cljs.core.nth.call(null,inst_16119,1,null);var inst_16122 = (inst_16120__$1 == null);var inst_16123 = cljs.core._EQ_.call(null,inst_16121__$1,change);var inst_16124 = (inst_16122) || (inst_16123);var state_16161__$1 = (function (){var statearr_16196 = state_16161;(statearr_16196[15] = inst_16121__$1);
(statearr_16196[8] = inst_16120__$1);
return statearr_16196;
})();if(cljs.core.truth_(inst_16124))
{var statearr_16197_16235 = state_16161__$1;(statearr_16197_16235[1] = 11);
} else
{var statearr_16198_16236 = state_16161__$1;(statearr_16198_16236[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16162 === 18))
{var inst_16115 = (state_16161[17]);var inst_16121 = (state_16161[15]);var inst_16116 = (state_16161[16]);var inst_16138 = cljs.core.empty_QMARK_.call(null,inst_16116);var inst_16139 = inst_16115.call(null,inst_16121);var inst_16140 = cljs.core.not.call(null,inst_16139);var inst_16141 = (inst_16138) && (inst_16140);var state_16161__$1 = state_16161;var statearr_16199_16237 = state_16161__$1;(statearr_16199_16237[2] = inst_16141);
(statearr_16199_16237[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16162 === 8))
{var inst_16105 = (state_16161[7]);var state_16161__$1 = state_16161;var statearr_16200_16238 = state_16161__$1;(statearr_16200_16238[2] = inst_16105);
(statearr_16200_16238[1] = 9);
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
});})(c__10329__auto___16208,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__10314__auto__,c__10329__auto___16208,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__10315__auto__ = null;
var state_machine__10315__auto____0 = (function (){var statearr_16204 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16204[0] = state_machine__10315__auto__);
(statearr_16204[1] = 1);
return statearr_16204;
});
var state_machine__10315__auto____1 = (function (state_16161){while(true){
var ret_value__10316__auto__ = (function (){try{while(true){
var result__10317__auto__ = switch__10314__auto__.call(null,state_16161);if(cljs.core.keyword_identical_QMARK_.call(null,result__10317__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10317__auto__;
}
break;
}
}catch (e16205){if((e16205 instanceof Object))
{var ex__10318__auto__ = e16205;var statearr_16206_16239 = state_16161;(statearr_16206_16239[5] = ex__10318__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16161);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16205;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10316__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16240 = state_16161;
state_16161 = G__16240;
continue;
}
} else
{return ret_value__10316__auto__;
}
break;
}
});
state_machine__10315__auto__ = function(state_16161){
switch(arguments.length){
case 0:
return state_machine__10315__auto____0.call(this);
case 1:
return state_machine__10315__auto____1.call(this,state_16161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10315__auto____0;
state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10315__auto____1;
return state_machine__10315__auto__;
})()
;})(switch__10314__auto__,c__10329__auto___16208,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__10331__auto__ = (function (){var statearr_16207 = f__10330__auto__.call(null);(statearr_16207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10329__auto___16208);
return statearr_16207;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10331__auto__);
});})(c__10329__auto___16208,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj16242 = {};return obj16242;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__7862__auto__ = p;if(and__7862__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__7862__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__8501__auto__ = (((p == null))?null:p);return (function (){var or__7874__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8501__auto__)]);if(or__7874__auto__)
{return or__7874__auto__;
} else
{var or__7874__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__7874__auto____$1)
{return or__7874__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__7862__auto__ = p;if(and__7862__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__7862__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__8501__auto__ = (((p == null))?null:p);return (function (){var or__7874__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8501__auto__)]);if(or__7874__auto__)
{return or__7874__auto__;
} else
{var or__7874__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__7874__auto____$1)
{return or__7874__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__7862__auto__ = p;if(and__7862__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__7862__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__8501__auto__ = (((p == null))?null:p);return (function (){var or__7874__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8501__auto__)]);if(or__7874__auto__)
{return or__7874__auto__;
} else
{var or__7874__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7874__auto____$1)
{return or__7874__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__7862__auto__ = p;if(and__7862__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__7862__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__8501__auto__ = (((p == null))?null:p);return (function (){var or__7874__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8501__auto__)]);if(or__7874__auto__)
{return or__7874__auto__;
} else
{var or__7874__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7874__auto____$1)
{return or__7874__auto____$1;
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
return (function (topic){var or__7874__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__7874__auto__))
{return or__7874__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7874__auto__,mults){
return (function (p1__16243_SHARP_){if(cljs.core.truth_(p1__16243_SHARP_.call(null,topic)))
{return p1__16243_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__16243_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7874__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t16358 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16358 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta16359){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta16359 = meta16359;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16358.cljs$lang$type = true;
cljs.core.async.t16358.cljs$lang$ctorStr = "cljs.core.async/t16358";
cljs.core.async.t16358.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8441__auto__,writer__8442__auto__,opt__8443__auto__){return cljs.core._write.call(null,writer__8442__auto__,"cljs.core.async/t16358");
});})(mults,ensure_mult))
;
cljs.core.async.t16358.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t16358.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t16358.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t16358.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t16358.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t16358.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16358.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t16358.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16360){var self__ = this;
var _16360__$1 = this;return self__.meta16359;
});})(mults,ensure_mult))
;
cljs.core.async.t16358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16360,meta16359__$1){var self__ = this;
var _16360__$1 = this;return (new cljs.core.async.t16358(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta16359__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t16358 = ((function (mults,ensure_mult){
return (function __GT_t16358(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16359){return (new cljs.core.async.t16358(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16359));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t16358(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__10329__auto___16472 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10329__auto___16472,mults,ensure_mult,p){
return (function (){var f__10330__auto__ = (function (){var switch__10314__auto__ = ((function (c__10329__auto___16472,mults,ensure_mult,p){
return (function (state_16428){var state_val_16429 = (state_16428[1]);if((state_val_16429 === 7))
{var inst_16424 = (state_16428[2]);var state_16428__$1 = state_16428;var statearr_16430_16473 = state_16428__$1;(statearr_16430_16473[2] = inst_16424);
(statearr_16430_16473[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16429 === 20))
{var state_16428__$1 = state_16428;var statearr_16431_16474 = state_16428__$1;(statearr_16431_16474[2] = null);
(statearr_16431_16474[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16429 === 1))
{var state_16428__$1 = state_16428;var statearr_16432_16475 = state_16428__$1;(statearr_16432_16475[2] = null);
(statearr_16432_16475[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16429 === 4))
{var inst_16363 = (state_16428[7]);var inst_16363__$1 = (state_16428[2]);var inst_16364 = (inst_16363__$1 == null);var state_16428__$1 = (function (){var statearr_16433 = state_16428;(statearr_16433[7] = inst_16363__$1);
return statearr_16433;
})();if(cljs.core.truth_(inst_16364))
{var statearr_16434_16476 = state_16428__$1;(statearr_16434_16476[1] = 5);
} else
{var statearr_16435_16477 = state_16428__$1;(statearr_16435_16477[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16429 === 15))
{var inst_16405 = (state_16428[2]);var state_16428__$1 = state_16428;var statearr_16436_16478 = state_16428__$1;(statearr_16436_16478[2] = inst_16405);
(statearr_16436_16478[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16429 === 21))
{var inst_16411 = (state_16428[8]);var inst_16419 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16411);var state_16428__$1 = state_16428;var statearr_16437_16479 = state_16428__$1;(statearr_16437_16479[2] = inst_16419);
(statearr_16437_16479[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16429 === 13))
{var inst_16387 = (state_16428[9]);var inst_16389 = cljs.core.chunked_seq_QMARK_.call(null,inst_16387);var state_16428__$1 = state_16428;if(inst_16389)
{var statearr_16438_16480 = state_16428__$1;(statearr_16438_16480[1] = 16);
} else
{var statearr_16439_16481 = state_16428__$1;(statearr_16439_16481[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16429 === 22))
{var inst_16421 = (state_16428[2]);var state_16428__$1 = (function (){var statearr_16440 = state_16428;(statearr_16440[10] = inst_16421);
return statearr_16440;
})();var statearr_16441_16482 = state_16428__$1;(statearr_16441_16482[2] = null);
(statearr_16441_16482[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16429 === 6))
{var inst_16363 = (state_16428[7]);var inst_16411 = (state_16428[8]);var inst_16411__$1 = topic_fn.call(null,inst_16363);var inst_16412 = cljs.core.deref.call(null,mults);var inst_16413 = cljs.core.get.call(null,inst_16412,inst_16411__$1);var inst_16414 = cljs.core.async.muxch_STAR_.call(null,inst_16413);var state_16428__$1 = (function (){var statearr_16442 = state_16428;(statearr_16442[8] = inst_16411__$1);
return statearr_16442;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16428__$1,19,inst_16414,inst_16363);
} else
{if((state_val_16429 === 17))
{var inst_16387 = (state_16428[9]);var inst_16396 = cljs.core.first.call(null,inst_16387);var inst_16397 = cljs.core.async.muxch_STAR_.call(null,inst_16396);var inst_16398 = cljs.core.async.close_BANG_.call(null,inst_16397);var inst_16399 = cljs.core.next.call(null,inst_16387);var inst_16373 = inst_16399;var inst_16374 = null;var inst_16375 = 0;var inst_16376 = 0;var state_16428__$1 = (function (){var statearr_16443 = state_16428;(statearr_16443[11] = inst_16376);
(statearr_16443[12] = inst_16375);
(statearr_16443[13] = inst_16374);
(statearr_16443[14] = inst_16398);
(statearr_16443[15] = inst_16373);
return statearr_16443;
})();var statearr_16444_16483 = state_16428__$1;(statearr_16444_16483[2] = null);
(statearr_16444_16483[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16429 === 3))
{var inst_16426 = (state_16428[2]);var state_16428__$1 = state_16428;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16428__$1,inst_16426);
} else
{if((state_val_16429 === 12))
{var inst_16407 = (state_16428[2]);var state_16428__$1 = state_16428;var statearr_16445_16484 = state_16428__$1;(statearr_16445_16484[2] = inst_16407);
(statearr_16445_16484[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16429 === 2))
{var state_16428__$1 = state_16428;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16428__$1,4,ch);
} else
{if((state_val_16429 === 19))
{var inst_16416 = (state_16428[2]);var state_16428__$1 = state_16428;if(cljs.core.truth_(inst_16416))
{var statearr_16446_16485 = state_16428__$1;(statearr_16446_16485[1] = 20);
} else
{var statearr_16447_16486 = state_16428__$1;(statearr_16447_16486[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16429 === 11))
{var inst_16387 = (state_16428[9]);var inst_16373 = (state_16428[15]);var inst_16387__$1 = cljs.core.seq.call(null,inst_16373);var state_16428__$1 = (function (){var statearr_16448 = state_16428;(statearr_16448[9] = inst_16387__$1);
return statearr_16448;
})();if(inst_16387__$1)
{var statearr_16449_16487 = state_16428__$1;(statearr_16449_16487[1] = 13);
} else
{var statearr_16450_16488 = state_16428__$1;(statearr_16450_16488[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16429 === 9))
{var inst_16409 = (state_16428[2]);var state_16428__$1 = state_16428;var statearr_16451_16489 = state_16428__$1;(statearr_16451_16489[2] = inst_16409);
(statearr_16451_16489[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16429 === 5))
{var inst_16370 = cljs.core.deref.call(null,mults);var inst_16371 = cljs.core.vals.call(null,inst_16370);var inst_16372 = cljs.core.seq.call(null,inst_16371);var inst_16373 = inst_16372;var inst_16374 = null;var inst_16375 = 0;var inst_16376 = 0;var state_16428__$1 = (function (){var statearr_16452 = state_16428;(statearr_16452[11] = inst_16376);
(statearr_16452[12] = inst_16375);
(statearr_16452[13] = inst_16374);
(statearr_16452[15] = inst_16373);
return statearr_16452;
})();var statearr_16453_16490 = state_16428__$1;(statearr_16453_16490[2] = null);
(statearr_16453_16490[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16429 === 14))
{var state_16428__$1 = state_16428;var statearr_16457_16491 = state_16428__$1;(statearr_16457_16491[2] = null);
(statearr_16457_16491[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16429 === 16))
{var inst_16387 = (state_16428[9]);var inst_16391 = cljs.core.chunk_first.call(null,inst_16387);var inst_16392 = cljs.core.chunk_rest.call(null,inst_16387);var inst_16393 = cljs.core.count.call(null,inst_16391);var inst_16373 = inst_16392;var inst_16374 = inst_16391;var inst_16375 = inst_16393;var inst_16376 = 0;var state_16428__$1 = (function (){var statearr_16458 = state_16428;(statearr_16458[11] = inst_16376);
(statearr_16458[12] = inst_16375);
(statearr_16458[13] = inst_16374);
(statearr_16458[15] = inst_16373);
return statearr_16458;
})();var statearr_16459_16492 = state_16428__$1;(statearr_16459_16492[2] = null);
(statearr_16459_16492[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16429 === 10))
{var inst_16376 = (state_16428[11]);var inst_16375 = (state_16428[12]);var inst_16374 = (state_16428[13]);var inst_16373 = (state_16428[15]);var inst_16381 = cljs.core._nth.call(null,inst_16374,inst_16376);var inst_16382 = cljs.core.async.muxch_STAR_.call(null,inst_16381);var inst_16383 = cljs.core.async.close_BANG_.call(null,inst_16382);var inst_16384 = (inst_16376 + 1);var tmp16454 = inst_16375;var tmp16455 = inst_16374;var tmp16456 = inst_16373;var inst_16373__$1 = tmp16456;var inst_16374__$1 = tmp16455;var inst_16375__$1 = tmp16454;var inst_16376__$1 = inst_16384;var state_16428__$1 = (function (){var statearr_16460 = state_16428;(statearr_16460[16] = inst_16383);
(statearr_16460[11] = inst_16376__$1);
(statearr_16460[12] = inst_16375__$1);
(statearr_16460[13] = inst_16374__$1);
(statearr_16460[15] = inst_16373__$1);
return statearr_16460;
})();var statearr_16461_16493 = state_16428__$1;(statearr_16461_16493[2] = null);
(statearr_16461_16493[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16429 === 18))
{var inst_16402 = (state_16428[2]);var state_16428__$1 = state_16428;var statearr_16462_16494 = state_16428__$1;(statearr_16462_16494[2] = inst_16402);
(statearr_16462_16494[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16429 === 8))
{var inst_16376 = (state_16428[11]);var inst_16375 = (state_16428[12]);var inst_16378 = (inst_16376 < inst_16375);var inst_16379 = inst_16378;var state_16428__$1 = state_16428;if(cljs.core.truth_(inst_16379))
{var statearr_16463_16495 = state_16428__$1;(statearr_16463_16495[1] = 10);
} else
{var statearr_16464_16496 = state_16428__$1;(statearr_16464_16496[1] = 11);
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
});})(c__10329__auto___16472,mults,ensure_mult,p))
;return ((function (switch__10314__auto__,c__10329__auto___16472,mults,ensure_mult,p){
return (function() {
var state_machine__10315__auto__ = null;
var state_machine__10315__auto____0 = (function (){var statearr_16468 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16468[0] = state_machine__10315__auto__);
(statearr_16468[1] = 1);
return statearr_16468;
});
var state_machine__10315__auto____1 = (function (state_16428){while(true){
var ret_value__10316__auto__ = (function (){try{while(true){
var result__10317__auto__ = switch__10314__auto__.call(null,state_16428);if(cljs.core.keyword_identical_QMARK_.call(null,result__10317__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10317__auto__;
}
break;
}
}catch (e16469){if((e16469 instanceof Object))
{var ex__10318__auto__ = e16469;var statearr_16470_16497 = state_16428;(statearr_16470_16497[5] = ex__10318__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16428);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16469;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10316__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16498 = state_16428;
state_16428 = G__16498;
continue;
}
} else
{return ret_value__10316__auto__;
}
break;
}
});
state_machine__10315__auto__ = function(state_16428){
switch(arguments.length){
case 0:
return state_machine__10315__auto____0.call(this);
case 1:
return state_machine__10315__auto____1.call(this,state_16428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10315__auto____0;
state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10315__auto____1;
return state_machine__10315__auto__;
})()
;})(switch__10314__auto__,c__10329__auto___16472,mults,ensure_mult,p))
})();var state__10331__auto__ = (function (){var statearr_16471 = f__10330__auto__.call(null);(statearr_16471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10329__auto___16472);
return statearr_16471;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10331__auto__);
});})(c__10329__auto___16472,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__10329__auto___16635 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10329__auto___16635,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__10330__auto__ = (function (){var switch__10314__auto__ = ((function (c__10329__auto___16635,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16605){var state_val_16606 = (state_16605[1]);if((state_val_16606 === 7))
{var state_16605__$1 = state_16605;var statearr_16607_16636 = state_16605__$1;(statearr_16607_16636[2] = null);
(statearr_16607_16636[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16606 === 1))
{var state_16605__$1 = state_16605;var statearr_16608_16637 = state_16605__$1;(statearr_16608_16637[2] = null);
(statearr_16608_16637[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16606 === 4))
{var inst_16569 = (state_16605[7]);var inst_16571 = (inst_16569 < cnt);var state_16605__$1 = state_16605;if(cljs.core.truth_(inst_16571))
{var statearr_16609_16638 = state_16605__$1;(statearr_16609_16638[1] = 6);
} else
{var statearr_16610_16639 = state_16605__$1;(statearr_16610_16639[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16606 === 15))
{var inst_16601 = (state_16605[2]);var state_16605__$1 = state_16605;var statearr_16611_16640 = state_16605__$1;(statearr_16611_16640[2] = inst_16601);
(statearr_16611_16640[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16606 === 13))
{var inst_16594 = cljs.core.async.close_BANG_.call(null,out);var state_16605__$1 = state_16605;var statearr_16612_16641 = state_16605__$1;(statearr_16612_16641[2] = inst_16594);
(statearr_16612_16641[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16606 === 6))
{var state_16605__$1 = state_16605;var statearr_16613_16642 = state_16605__$1;(statearr_16613_16642[2] = null);
(statearr_16613_16642[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16606 === 3))
{var inst_16603 = (state_16605[2]);var state_16605__$1 = state_16605;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16605__$1,inst_16603);
} else
{if((state_val_16606 === 12))
{var inst_16591 = (state_16605[8]);var inst_16591__$1 = (state_16605[2]);var inst_16592 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_16591__$1);var state_16605__$1 = (function (){var statearr_16614 = state_16605;(statearr_16614[8] = inst_16591__$1);
return statearr_16614;
})();if(cljs.core.truth_(inst_16592))
{var statearr_16615_16643 = state_16605__$1;(statearr_16615_16643[1] = 13);
} else
{var statearr_16616_16644 = state_16605__$1;(statearr_16616_16644[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16606 === 2))
{var inst_16568 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_16569 = 0;var state_16605__$1 = (function (){var statearr_16617 = state_16605;(statearr_16617[7] = inst_16569);
(statearr_16617[9] = inst_16568);
return statearr_16617;
})();var statearr_16618_16645 = state_16605__$1;(statearr_16618_16645[2] = null);
(statearr_16618_16645[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16606 === 11))
{var inst_16569 = (state_16605[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16605,10,Object,null,9);var inst_16578 = chs__$1.call(null,inst_16569);var inst_16579 = done.call(null,inst_16569);var inst_16580 = cljs.core.async.take_BANG_.call(null,inst_16578,inst_16579);var state_16605__$1 = state_16605;var statearr_16619_16646 = state_16605__$1;(statearr_16619_16646[2] = inst_16580);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16605__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16606 === 9))
{var inst_16569 = (state_16605[7]);var inst_16582 = (state_16605[2]);var inst_16583 = (inst_16569 + 1);var inst_16569__$1 = inst_16583;var state_16605__$1 = (function (){var statearr_16620 = state_16605;(statearr_16620[10] = inst_16582);
(statearr_16620[7] = inst_16569__$1);
return statearr_16620;
})();var statearr_16621_16647 = state_16605__$1;(statearr_16621_16647[2] = null);
(statearr_16621_16647[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16606 === 5))
{var inst_16589 = (state_16605[2]);var state_16605__$1 = (function (){var statearr_16622 = state_16605;(statearr_16622[11] = inst_16589);
return statearr_16622;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16605__$1,12,dchan);
} else
{if((state_val_16606 === 14))
{var inst_16591 = (state_16605[8]);var inst_16596 = cljs.core.apply.call(null,f,inst_16591);var state_16605__$1 = state_16605;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16605__$1,16,out,inst_16596);
} else
{if((state_val_16606 === 16))
{var inst_16598 = (state_16605[2]);var state_16605__$1 = (function (){var statearr_16623 = state_16605;(statearr_16623[12] = inst_16598);
return statearr_16623;
})();var statearr_16624_16648 = state_16605__$1;(statearr_16624_16648[2] = null);
(statearr_16624_16648[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16606 === 10))
{var inst_16573 = (state_16605[2]);var inst_16574 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_16605__$1 = (function (){var statearr_16625 = state_16605;(statearr_16625[13] = inst_16573);
return statearr_16625;
})();var statearr_16626_16649 = state_16605__$1;(statearr_16626_16649[2] = inst_16574);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16605__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16606 === 8))
{var inst_16587 = (state_16605[2]);var state_16605__$1 = state_16605;var statearr_16627_16650 = state_16605__$1;(statearr_16627_16650[2] = inst_16587);
(statearr_16627_16650[1] = 5);
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
});})(c__10329__auto___16635,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__10314__auto__,c__10329__auto___16635,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__10315__auto__ = null;
var state_machine__10315__auto____0 = (function (){var statearr_16631 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16631[0] = state_machine__10315__auto__);
(statearr_16631[1] = 1);
return statearr_16631;
});
var state_machine__10315__auto____1 = (function (state_16605){while(true){
var ret_value__10316__auto__ = (function (){try{while(true){
var result__10317__auto__ = switch__10314__auto__.call(null,state_16605);if(cljs.core.keyword_identical_QMARK_.call(null,result__10317__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10317__auto__;
}
break;
}
}catch (e16632){if((e16632 instanceof Object))
{var ex__10318__auto__ = e16632;var statearr_16633_16651 = state_16605;(statearr_16633_16651[5] = ex__10318__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16605);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16632;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10316__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16652 = state_16605;
state_16605 = G__16652;
continue;
}
} else
{return ret_value__10316__auto__;
}
break;
}
});
state_machine__10315__auto__ = function(state_16605){
switch(arguments.length){
case 0:
return state_machine__10315__auto____0.call(this);
case 1:
return state_machine__10315__auto____1.call(this,state_16605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10315__auto____0;
state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10315__auto____1;
return state_machine__10315__auto__;
})()
;})(switch__10314__auto__,c__10329__auto___16635,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__10331__auto__ = (function (){var statearr_16634 = f__10330__auto__.call(null);(statearr_16634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10329__auto___16635);
return statearr_16634;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10331__auto__);
});})(c__10329__auto___16635,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10329__auto___16760 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10329__auto___16760,out){
return (function (){var f__10330__auto__ = (function (){var switch__10314__auto__ = ((function (c__10329__auto___16760,out){
return (function (state_16736){var state_val_16737 = (state_16736[1]);if((state_val_16737 === 7))
{var inst_16716 = (state_16736[7]);var inst_16715 = (state_16736[8]);var inst_16715__$1 = (state_16736[2]);var inst_16716__$1 = cljs.core.nth.call(null,inst_16715__$1,0,null);var inst_16717 = cljs.core.nth.call(null,inst_16715__$1,1,null);var inst_16718 = (inst_16716__$1 == null);var state_16736__$1 = (function (){var statearr_16738 = state_16736;(statearr_16738[7] = inst_16716__$1);
(statearr_16738[9] = inst_16717);
(statearr_16738[8] = inst_16715__$1);
return statearr_16738;
})();if(cljs.core.truth_(inst_16718))
{var statearr_16739_16761 = state_16736__$1;(statearr_16739_16761[1] = 8);
} else
{var statearr_16740_16762 = state_16736__$1;(statearr_16740_16762[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16737 === 1))
{var inst_16707 = cljs.core.vec.call(null,chs);var inst_16708 = inst_16707;var state_16736__$1 = (function (){var statearr_16741 = state_16736;(statearr_16741[10] = inst_16708);
return statearr_16741;
})();var statearr_16742_16763 = state_16736__$1;(statearr_16742_16763[2] = null);
(statearr_16742_16763[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16737 === 4))
{var inst_16708 = (state_16736[10]);var state_16736__$1 = state_16736;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16736__$1,7,inst_16708);
} else
{if((state_val_16737 === 6))
{var inst_16732 = (state_16736[2]);var state_16736__$1 = state_16736;var statearr_16743_16764 = state_16736__$1;(statearr_16743_16764[2] = inst_16732);
(statearr_16743_16764[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16737 === 3))
{var inst_16734 = (state_16736[2]);var state_16736__$1 = state_16736;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16736__$1,inst_16734);
} else
{if((state_val_16737 === 2))
{var inst_16708 = (state_16736[10]);var inst_16710 = cljs.core.count.call(null,inst_16708);var inst_16711 = (inst_16710 > 0);var state_16736__$1 = state_16736;if(cljs.core.truth_(inst_16711))
{var statearr_16745_16765 = state_16736__$1;(statearr_16745_16765[1] = 4);
} else
{var statearr_16746_16766 = state_16736__$1;(statearr_16746_16766[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16737 === 11))
{var inst_16708 = (state_16736[10]);var inst_16725 = (state_16736[2]);var tmp16744 = inst_16708;var inst_16708__$1 = tmp16744;var state_16736__$1 = (function (){var statearr_16747 = state_16736;(statearr_16747[11] = inst_16725);
(statearr_16747[10] = inst_16708__$1);
return statearr_16747;
})();var statearr_16748_16767 = state_16736__$1;(statearr_16748_16767[2] = null);
(statearr_16748_16767[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16737 === 9))
{var inst_16716 = (state_16736[7]);var state_16736__$1 = state_16736;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16736__$1,11,out,inst_16716);
} else
{if((state_val_16737 === 5))
{var inst_16730 = cljs.core.async.close_BANG_.call(null,out);var state_16736__$1 = state_16736;var statearr_16749_16768 = state_16736__$1;(statearr_16749_16768[2] = inst_16730);
(statearr_16749_16768[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16737 === 10))
{var inst_16728 = (state_16736[2]);var state_16736__$1 = state_16736;var statearr_16750_16769 = state_16736__$1;(statearr_16750_16769[2] = inst_16728);
(statearr_16750_16769[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16737 === 8))
{var inst_16716 = (state_16736[7]);var inst_16717 = (state_16736[9]);var inst_16715 = (state_16736[8]);var inst_16708 = (state_16736[10]);var inst_16720 = (function (){var c = inst_16717;var v = inst_16716;var vec__16713 = inst_16715;var cs = inst_16708;return ((function (c,v,vec__16713,cs,inst_16716,inst_16717,inst_16715,inst_16708,state_val_16737,c__10329__auto___16760,out){
return (function (p1__16653_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__16653_SHARP_);
});
;})(c,v,vec__16713,cs,inst_16716,inst_16717,inst_16715,inst_16708,state_val_16737,c__10329__auto___16760,out))
})();var inst_16721 = cljs.core.filterv.call(null,inst_16720,inst_16708);var inst_16708__$1 = inst_16721;var state_16736__$1 = (function (){var statearr_16751 = state_16736;(statearr_16751[10] = inst_16708__$1);
return statearr_16751;
})();var statearr_16752_16770 = state_16736__$1;(statearr_16752_16770[2] = null);
(statearr_16752_16770[1] = 2);
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
});})(c__10329__auto___16760,out))
;return ((function (switch__10314__auto__,c__10329__auto___16760,out){
return (function() {
var state_machine__10315__auto__ = null;
var state_machine__10315__auto____0 = (function (){var statearr_16756 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16756[0] = state_machine__10315__auto__);
(statearr_16756[1] = 1);
return statearr_16756;
});
var state_machine__10315__auto____1 = (function (state_16736){while(true){
var ret_value__10316__auto__ = (function (){try{while(true){
var result__10317__auto__ = switch__10314__auto__.call(null,state_16736);if(cljs.core.keyword_identical_QMARK_.call(null,result__10317__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10317__auto__;
}
break;
}
}catch (e16757){if((e16757 instanceof Object))
{var ex__10318__auto__ = e16757;var statearr_16758_16771 = state_16736;(statearr_16758_16771[5] = ex__10318__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16736);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16757;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10316__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16772 = state_16736;
state_16736 = G__16772;
continue;
}
} else
{return ret_value__10316__auto__;
}
break;
}
});
state_machine__10315__auto__ = function(state_16736){
switch(arguments.length){
case 0:
return state_machine__10315__auto____0.call(this);
case 1:
return state_machine__10315__auto____1.call(this,state_16736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10315__auto____0;
state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10315__auto____1;
return state_machine__10315__auto__;
})()
;})(switch__10314__auto__,c__10329__auto___16760,out))
})();var state__10331__auto__ = (function (){var statearr_16759 = f__10330__auto__.call(null);(statearr_16759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10329__auto___16760);
return statearr_16759;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10331__auto__);
});})(c__10329__auto___16760,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10329__auto___16865 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10329__auto___16865,out){
return (function (){var f__10330__auto__ = (function (){var switch__10314__auto__ = ((function (c__10329__auto___16865,out){
return (function (state_16842){var state_val_16843 = (state_16842[1]);if((state_val_16843 === 7))
{var inst_16824 = (state_16842[7]);var inst_16824__$1 = (state_16842[2]);var inst_16825 = (inst_16824__$1 == null);var inst_16826 = cljs.core.not.call(null,inst_16825);var state_16842__$1 = (function (){var statearr_16844 = state_16842;(statearr_16844[7] = inst_16824__$1);
return statearr_16844;
})();if(inst_16826)
{var statearr_16845_16866 = state_16842__$1;(statearr_16845_16866[1] = 8);
} else
{var statearr_16846_16867 = state_16842__$1;(statearr_16846_16867[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16843 === 1))
{var inst_16819 = 0;var state_16842__$1 = (function (){var statearr_16847 = state_16842;(statearr_16847[8] = inst_16819);
return statearr_16847;
})();var statearr_16848_16868 = state_16842__$1;(statearr_16848_16868[2] = null);
(statearr_16848_16868[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16843 === 4))
{var state_16842__$1 = state_16842;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16842__$1,7,ch);
} else
{if((state_val_16843 === 6))
{var inst_16837 = (state_16842[2]);var state_16842__$1 = state_16842;var statearr_16849_16869 = state_16842__$1;(statearr_16849_16869[2] = inst_16837);
(statearr_16849_16869[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16843 === 3))
{var inst_16839 = (state_16842[2]);var inst_16840 = cljs.core.async.close_BANG_.call(null,out);var state_16842__$1 = (function (){var statearr_16850 = state_16842;(statearr_16850[9] = inst_16839);
return statearr_16850;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16842__$1,inst_16840);
} else
{if((state_val_16843 === 2))
{var inst_16819 = (state_16842[8]);var inst_16821 = (inst_16819 < n);var state_16842__$1 = state_16842;if(cljs.core.truth_(inst_16821))
{var statearr_16851_16870 = state_16842__$1;(statearr_16851_16870[1] = 4);
} else
{var statearr_16852_16871 = state_16842__$1;(statearr_16852_16871[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16843 === 11))
{var inst_16819 = (state_16842[8]);var inst_16829 = (state_16842[2]);var inst_16830 = (inst_16819 + 1);var inst_16819__$1 = inst_16830;var state_16842__$1 = (function (){var statearr_16853 = state_16842;(statearr_16853[10] = inst_16829);
(statearr_16853[8] = inst_16819__$1);
return statearr_16853;
})();var statearr_16854_16872 = state_16842__$1;(statearr_16854_16872[2] = null);
(statearr_16854_16872[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16843 === 9))
{var state_16842__$1 = state_16842;var statearr_16855_16873 = state_16842__$1;(statearr_16855_16873[2] = null);
(statearr_16855_16873[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16843 === 5))
{var state_16842__$1 = state_16842;var statearr_16856_16874 = state_16842__$1;(statearr_16856_16874[2] = null);
(statearr_16856_16874[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16843 === 10))
{var inst_16834 = (state_16842[2]);var state_16842__$1 = state_16842;var statearr_16857_16875 = state_16842__$1;(statearr_16857_16875[2] = inst_16834);
(statearr_16857_16875[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16843 === 8))
{var inst_16824 = (state_16842[7]);var state_16842__$1 = state_16842;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16842__$1,11,out,inst_16824);
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
});})(c__10329__auto___16865,out))
;return ((function (switch__10314__auto__,c__10329__auto___16865,out){
return (function() {
var state_machine__10315__auto__ = null;
var state_machine__10315__auto____0 = (function (){var statearr_16861 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16861[0] = state_machine__10315__auto__);
(statearr_16861[1] = 1);
return statearr_16861;
});
var state_machine__10315__auto____1 = (function (state_16842){while(true){
var ret_value__10316__auto__ = (function (){try{while(true){
var result__10317__auto__ = switch__10314__auto__.call(null,state_16842);if(cljs.core.keyword_identical_QMARK_.call(null,result__10317__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10317__auto__;
}
break;
}
}catch (e16862){if((e16862 instanceof Object))
{var ex__10318__auto__ = e16862;var statearr_16863_16876 = state_16842;(statearr_16863_16876[5] = ex__10318__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16842);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16862;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10316__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16877 = state_16842;
state_16842 = G__16877;
continue;
}
} else
{return ret_value__10316__auto__;
}
break;
}
});
state_machine__10315__auto__ = function(state_16842){
switch(arguments.length){
case 0:
return state_machine__10315__auto____0.call(this);
case 1:
return state_machine__10315__auto____1.call(this,state_16842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10315__auto____0;
state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10315__auto____1;
return state_machine__10315__auto__;
})()
;})(switch__10314__auto__,c__10329__auto___16865,out))
})();var state__10331__auto__ = (function (){var statearr_16864 = f__10330__auto__.call(null);(statearr_16864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10329__auto___16865);
return statearr_16864;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10331__auto__);
});})(c__10329__auto___16865,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10329__auto___16974 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10329__auto___16974,out){
return (function (){var f__10330__auto__ = (function (){var switch__10314__auto__ = ((function (c__10329__auto___16974,out){
return (function (state_16949){var state_val_16950 = (state_16949[1]);if((state_val_16950 === 7))
{var inst_16944 = (state_16949[2]);var state_16949__$1 = state_16949;var statearr_16951_16975 = state_16949__$1;(statearr_16951_16975[2] = inst_16944);
(statearr_16951_16975[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16950 === 1))
{var inst_16926 = null;var state_16949__$1 = (function (){var statearr_16952 = state_16949;(statearr_16952[7] = inst_16926);
return statearr_16952;
})();var statearr_16953_16976 = state_16949__$1;(statearr_16953_16976[2] = null);
(statearr_16953_16976[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16950 === 4))
{var inst_16929 = (state_16949[8]);var inst_16929__$1 = (state_16949[2]);var inst_16930 = (inst_16929__$1 == null);var inst_16931 = cljs.core.not.call(null,inst_16930);var state_16949__$1 = (function (){var statearr_16954 = state_16949;(statearr_16954[8] = inst_16929__$1);
return statearr_16954;
})();if(inst_16931)
{var statearr_16955_16977 = state_16949__$1;(statearr_16955_16977[1] = 5);
} else
{var statearr_16956_16978 = state_16949__$1;(statearr_16956_16978[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16950 === 6))
{var state_16949__$1 = state_16949;var statearr_16957_16979 = state_16949__$1;(statearr_16957_16979[2] = null);
(statearr_16957_16979[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16950 === 3))
{var inst_16946 = (state_16949[2]);var inst_16947 = cljs.core.async.close_BANG_.call(null,out);var state_16949__$1 = (function (){var statearr_16958 = state_16949;(statearr_16958[9] = inst_16946);
return statearr_16958;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16949__$1,inst_16947);
} else
{if((state_val_16950 === 2))
{var state_16949__$1 = state_16949;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16949__$1,4,ch);
} else
{if((state_val_16950 === 11))
{var inst_16929 = (state_16949[8]);var inst_16938 = (state_16949[2]);var inst_16926 = inst_16929;var state_16949__$1 = (function (){var statearr_16959 = state_16949;(statearr_16959[7] = inst_16926);
(statearr_16959[10] = inst_16938);
return statearr_16959;
})();var statearr_16960_16980 = state_16949__$1;(statearr_16960_16980[2] = null);
(statearr_16960_16980[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16950 === 9))
{var inst_16929 = (state_16949[8]);var state_16949__$1 = state_16949;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16949__$1,11,out,inst_16929);
} else
{if((state_val_16950 === 5))
{var inst_16926 = (state_16949[7]);var inst_16929 = (state_16949[8]);var inst_16933 = cljs.core._EQ_.call(null,inst_16929,inst_16926);var state_16949__$1 = state_16949;if(inst_16933)
{var statearr_16962_16981 = state_16949__$1;(statearr_16962_16981[1] = 8);
} else
{var statearr_16963_16982 = state_16949__$1;(statearr_16963_16982[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16950 === 10))
{var inst_16941 = (state_16949[2]);var state_16949__$1 = state_16949;var statearr_16964_16983 = state_16949__$1;(statearr_16964_16983[2] = inst_16941);
(statearr_16964_16983[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16950 === 8))
{var inst_16926 = (state_16949[7]);var tmp16961 = inst_16926;var inst_16926__$1 = tmp16961;var state_16949__$1 = (function (){var statearr_16965 = state_16949;(statearr_16965[7] = inst_16926__$1);
return statearr_16965;
})();var statearr_16966_16984 = state_16949__$1;(statearr_16966_16984[2] = null);
(statearr_16966_16984[1] = 2);
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
});})(c__10329__auto___16974,out))
;return ((function (switch__10314__auto__,c__10329__auto___16974,out){
return (function() {
var state_machine__10315__auto__ = null;
var state_machine__10315__auto____0 = (function (){var statearr_16970 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16970[0] = state_machine__10315__auto__);
(statearr_16970[1] = 1);
return statearr_16970;
});
var state_machine__10315__auto____1 = (function (state_16949){while(true){
var ret_value__10316__auto__ = (function (){try{while(true){
var result__10317__auto__ = switch__10314__auto__.call(null,state_16949);if(cljs.core.keyword_identical_QMARK_.call(null,result__10317__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10317__auto__;
}
break;
}
}catch (e16971){if((e16971 instanceof Object))
{var ex__10318__auto__ = e16971;var statearr_16972_16985 = state_16949;(statearr_16972_16985[5] = ex__10318__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16949);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16971;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10316__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16986 = state_16949;
state_16949 = G__16986;
continue;
}
} else
{return ret_value__10316__auto__;
}
break;
}
});
state_machine__10315__auto__ = function(state_16949){
switch(arguments.length){
case 0:
return state_machine__10315__auto____0.call(this);
case 1:
return state_machine__10315__auto____1.call(this,state_16949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10315__auto____0;
state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10315__auto____1;
return state_machine__10315__auto__;
})()
;})(switch__10314__auto__,c__10329__auto___16974,out))
})();var state__10331__auto__ = (function (){var statearr_16973 = f__10330__auto__.call(null);(statearr_16973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10329__auto___16974);
return statearr_16973;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10331__auto__);
});})(c__10329__auto___16974,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10329__auto___17121 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10329__auto___17121,out){
return (function (){var f__10330__auto__ = (function (){var switch__10314__auto__ = ((function (c__10329__auto___17121,out){
return (function (state_17091){var state_val_17092 = (state_17091[1]);if((state_val_17092 === 7))
{var inst_17087 = (state_17091[2]);var state_17091__$1 = state_17091;var statearr_17093_17122 = state_17091__$1;(statearr_17093_17122[2] = inst_17087);
(statearr_17093_17122[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17092 === 1))
{var inst_17054 = (new Array(n));var inst_17055 = inst_17054;var inst_17056 = 0;var state_17091__$1 = (function (){var statearr_17094 = state_17091;(statearr_17094[7] = inst_17055);
(statearr_17094[8] = inst_17056);
return statearr_17094;
})();var statearr_17095_17123 = state_17091__$1;(statearr_17095_17123[2] = null);
(statearr_17095_17123[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17092 === 4))
{var inst_17059 = (state_17091[9]);var inst_17059__$1 = (state_17091[2]);var inst_17060 = (inst_17059__$1 == null);var inst_17061 = cljs.core.not.call(null,inst_17060);var state_17091__$1 = (function (){var statearr_17096 = state_17091;(statearr_17096[9] = inst_17059__$1);
return statearr_17096;
})();if(inst_17061)
{var statearr_17097_17124 = state_17091__$1;(statearr_17097_17124[1] = 5);
} else
{var statearr_17098_17125 = state_17091__$1;(statearr_17098_17125[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17092 === 15))
{var inst_17081 = (state_17091[2]);var state_17091__$1 = state_17091;var statearr_17099_17126 = state_17091__$1;(statearr_17099_17126[2] = inst_17081);
(statearr_17099_17126[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17092 === 13))
{var state_17091__$1 = state_17091;var statearr_17100_17127 = state_17091__$1;(statearr_17100_17127[2] = null);
(statearr_17100_17127[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17092 === 6))
{var inst_17056 = (state_17091[8]);var inst_17077 = (inst_17056 > 0);var state_17091__$1 = state_17091;if(cljs.core.truth_(inst_17077))
{var statearr_17101_17128 = state_17091__$1;(statearr_17101_17128[1] = 12);
} else
{var statearr_17102_17129 = state_17091__$1;(statearr_17102_17129[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17092 === 3))
{var inst_17089 = (state_17091[2]);var state_17091__$1 = state_17091;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17091__$1,inst_17089);
} else
{if((state_val_17092 === 12))
{var inst_17055 = (state_17091[7]);var inst_17079 = cljs.core.vec.call(null,inst_17055);var state_17091__$1 = state_17091;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17091__$1,15,out,inst_17079);
} else
{if((state_val_17092 === 2))
{var state_17091__$1 = state_17091;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17091__$1,4,ch);
} else
{if((state_val_17092 === 11))
{var inst_17071 = (state_17091[2]);var inst_17072 = (new Array(n));var inst_17055 = inst_17072;var inst_17056 = 0;var state_17091__$1 = (function (){var statearr_17103 = state_17091;(statearr_17103[7] = inst_17055);
(statearr_17103[8] = inst_17056);
(statearr_17103[10] = inst_17071);
return statearr_17103;
})();var statearr_17104_17130 = state_17091__$1;(statearr_17104_17130[2] = null);
(statearr_17104_17130[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17092 === 9))
{var inst_17055 = (state_17091[7]);var inst_17069 = cljs.core.vec.call(null,inst_17055);var state_17091__$1 = state_17091;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17091__$1,11,out,inst_17069);
} else
{if((state_val_17092 === 5))
{var inst_17064 = (state_17091[11]);var inst_17055 = (state_17091[7]);var inst_17056 = (state_17091[8]);var inst_17059 = (state_17091[9]);var inst_17063 = (inst_17055[inst_17056] = inst_17059);var inst_17064__$1 = (inst_17056 + 1);var inst_17065 = (inst_17064__$1 < n);var state_17091__$1 = (function (){var statearr_17105 = state_17091;(statearr_17105[11] = inst_17064__$1);
(statearr_17105[12] = inst_17063);
return statearr_17105;
})();if(cljs.core.truth_(inst_17065))
{var statearr_17106_17131 = state_17091__$1;(statearr_17106_17131[1] = 8);
} else
{var statearr_17107_17132 = state_17091__$1;(statearr_17107_17132[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17092 === 14))
{var inst_17084 = (state_17091[2]);var inst_17085 = cljs.core.async.close_BANG_.call(null,out);var state_17091__$1 = (function (){var statearr_17109 = state_17091;(statearr_17109[13] = inst_17084);
return statearr_17109;
})();var statearr_17110_17133 = state_17091__$1;(statearr_17110_17133[2] = inst_17085);
(statearr_17110_17133[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17092 === 10))
{var inst_17075 = (state_17091[2]);var state_17091__$1 = state_17091;var statearr_17111_17134 = state_17091__$1;(statearr_17111_17134[2] = inst_17075);
(statearr_17111_17134[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17092 === 8))
{var inst_17064 = (state_17091[11]);var inst_17055 = (state_17091[7]);var tmp17108 = inst_17055;var inst_17055__$1 = tmp17108;var inst_17056 = inst_17064;var state_17091__$1 = (function (){var statearr_17112 = state_17091;(statearr_17112[7] = inst_17055__$1);
(statearr_17112[8] = inst_17056);
return statearr_17112;
})();var statearr_17113_17135 = state_17091__$1;(statearr_17113_17135[2] = null);
(statearr_17113_17135[1] = 2);
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
});})(c__10329__auto___17121,out))
;return ((function (switch__10314__auto__,c__10329__auto___17121,out){
return (function() {
var state_machine__10315__auto__ = null;
var state_machine__10315__auto____0 = (function (){var statearr_17117 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17117[0] = state_machine__10315__auto__);
(statearr_17117[1] = 1);
return statearr_17117;
});
var state_machine__10315__auto____1 = (function (state_17091){while(true){
var ret_value__10316__auto__ = (function (){try{while(true){
var result__10317__auto__ = switch__10314__auto__.call(null,state_17091);if(cljs.core.keyword_identical_QMARK_.call(null,result__10317__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10317__auto__;
}
break;
}
}catch (e17118){if((e17118 instanceof Object))
{var ex__10318__auto__ = e17118;var statearr_17119_17136 = state_17091;(statearr_17119_17136[5] = ex__10318__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17091);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17118;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10316__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17137 = state_17091;
state_17091 = G__17137;
continue;
}
} else
{return ret_value__10316__auto__;
}
break;
}
});
state_machine__10315__auto__ = function(state_17091){
switch(arguments.length){
case 0:
return state_machine__10315__auto____0.call(this);
case 1:
return state_machine__10315__auto____1.call(this,state_17091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10315__auto____0;
state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10315__auto____1;
return state_machine__10315__auto__;
})()
;})(switch__10314__auto__,c__10329__auto___17121,out))
})();var state__10331__auto__ = (function (){var statearr_17120 = f__10330__auto__.call(null);(statearr_17120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10329__auto___17121);
return statearr_17120;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10331__auto__);
});})(c__10329__auto___17121,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10329__auto___17280 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10329__auto___17280,out){
return (function (){var f__10330__auto__ = (function (){var switch__10314__auto__ = ((function (c__10329__auto___17280,out){
return (function (state_17250){var state_val_17251 = (state_17250[1]);if((state_val_17251 === 7))
{var inst_17246 = (state_17250[2]);var state_17250__$1 = state_17250;var statearr_17252_17281 = state_17250__$1;(statearr_17252_17281[2] = inst_17246);
(statearr_17252_17281[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17251 === 1))
{var inst_17209 = [];var inst_17210 = inst_17209;var inst_17211 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_17250__$1 = (function (){var statearr_17253 = state_17250;(statearr_17253[7] = inst_17210);
(statearr_17253[8] = inst_17211);
return statearr_17253;
})();var statearr_17254_17282 = state_17250__$1;(statearr_17254_17282[2] = null);
(statearr_17254_17282[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17251 === 4))
{var inst_17214 = (state_17250[9]);var inst_17214__$1 = (state_17250[2]);var inst_17215 = (inst_17214__$1 == null);var inst_17216 = cljs.core.not.call(null,inst_17215);var state_17250__$1 = (function (){var statearr_17255 = state_17250;(statearr_17255[9] = inst_17214__$1);
return statearr_17255;
})();if(inst_17216)
{var statearr_17256_17283 = state_17250__$1;(statearr_17256_17283[1] = 5);
} else
{var statearr_17257_17284 = state_17250__$1;(statearr_17257_17284[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17251 === 15))
{var inst_17240 = (state_17250[2]);var state_17250__$1 = state_17250;var statearr_17258_17285 = state_17250__$1;(statearr_17258_17285[2] = inst_17240);
(statearr_17258_17285[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17251 === 13))
{var state_17250__$1 = state_17250;var statearr_17259_17286 = state_17250__$1;(statearr_17259_17286[2] = null);
(statearr_17259_17286[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17251 === 6))
{var inst_17210 = (state_17250[7]);var inst_17235 = inst_17210.length;var inst_17236 = (inst_17235 > 0);var state_17250__$1 = state_17250;if(cljs.core.truth_(inst_17236))
{var statearr_17260_17287 = state_17250__$1;(statearr_17260_17287[1] = 12);
} else
{var statearr_17261_17288 = state_17250__$1;(statearr_17261_17288[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17251 === 3))
{var inst_17248 = (state_17250[2]);var state_17250__$1 = state_17250;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17250__$1,inst_17248);
} else
{if((state_val_17251 === 12))
{var inst_17210 = (state_17250[7]);var inst_17238 = cljs.core.vec.call(null,inst_17210);var state_17250__$1 = state_17250;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17250__$1,15,out,inst_17238);
} else
{if((state_val_17251 === 2))
{var state_17250__$1 = state_17250;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17250__$1,4,ch);
} else
{if((state_val_17251 === 11))
{var inst_17218 = (state_17250[10]);var inst_17214 = (state_17250[9]);var inst_17228 = (state_17250[2]);var inst_17229 = [];var inst_17230 = inst_17229.push(inst_17214);var inst_17210 = inst_17229;var inst_17211 = inst_17218;var state_17250__$1 = (function (){var statearr_17262 = state_17250;(statearr_17262[11] = inst_17228);
(statearr_17262[7] = inst_17210);
(statearr_17262[8] = inst_17211);
(statearr_17262[12] = inst_17230);
return statearr_17262;
})();var statearr_17263_17289 = state_17250__$1;(statearr_17263_17289[2] = null);
(statearr_17263_17289[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17251 === 9))
{var inst_17210 = (state_17250[7]);var inst_17226 = cljs.core.vec.call(null,inst_17210);var state_17250__$1 = state_17250;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17250__$1,11,out,inst_17226);
} else
{if((state_val_17251 === 5))
{var inst_17218 = (state_17250[10]);var inst_17214 = (state_17250[9]);var inst_17211 = (state_17250[8]);var inst_17218__$1 = f.call(null,inst_17214);var inst_17219 = cljs.core._EQ_.call(null,inst_17218__$1,inst_17211);var inst_17220 = cljs.core.keyword_identical_QMARK_.call(null,inst_17211,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_17221 = (inst_17219) || (inst_17220);var state_17250__$1 = (function (){var statearr_17264 = state_17250;(statearr_17264[10] = inst_17218__$1);
return statearr_17264;
})();if(cljs.core.truth_(inst_17221))
{var statearr_17265_17290 = state_17250__$1;(statearr_17265_17290[1] = 8);
} else
{var statearr_17266_17291 = state_17250__$1;(statearr_17266_17291[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17251 === 14))
{var inst_17243 = (state_17250[2]);var inst_17244 = cljs.core.async.close_BANG_.call(null,out);var state_17250__$1 = (function (){var statearr_17268 = state_17250;(statearr_17268[13] = inst_17243);
return statearr_17268;
})();var statearr_17269_17292 = state_17250__$1;(statearr_17269_17292[2] = inst_17244);
(statearr_17269_17292[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17251 === 10))
{var inst_17233 = (state_17250[2]);var state_17250__$1 = state_17250;var statearr_17270_17293 = state_17250__$1;(statearr_17270_17293[2] = inst_17233);
(statearr_17270_17293[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17251 === 8))
{var inst_17218 = (state_17250[10]);var inst_17214 = (state_17250[9]);var inst_17210 = (state_17250[7]);var inst_17223 = inst_17210.push(inst_17214);var tmp17267 = inst_17210;var inst_17210__$1 = tmp17267;var inst_17211 = inst_17218;var state_17250__$1 = (function (){var statearr_17271 = state_17250;(statearr_17271[14] = inst_17223);
(statearr_17271[7] = inst_17210__$1);
(statearr_17271[8] = inst_17211);
return statearr_17271;
})();var statearr_17272_17294 = state_17250__$1;(statearr_17272_17294[2] = null);
(statearr_17272_17294[1] = 2);
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
});})(c__10329__auto___17280,out))
;return ((function (switch__10314__auto__,c__10329__auto___17280,out){
return (function() {
var state_machine__10315__auto__ = null;
var state_machine__10315__auto____0 = (function (){var statearr_17276 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17276[0] = state_machine__10315__auto__);
(statearr_17276[1] = 1);
return statearr_17276;
});
var state_machine__10315__auto____1 = (function (state_17250){while(true){
var ret_value__10316__auto__ = (function (){try{while(true){
var result__10317__auto__ = switch__10314__auto__.call(null,state_17250);if(cljs.core.keyword_identical_QMARK_.call(null,result__10317__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10317__auto__;
}
break;
}
}catch (e17277){if((e17277 instanceof Object))
{var ex__10318__auto__ = e17277;var statearr_17278_17295 = state_17250;(statearr_17278_17295[5] = ex__10318__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17250);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17277;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10316__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17296 = state_17250;
state_17250 = G__17296;
continue;
}
} else
{return ret_value__10316__auto__;
}
break;
}
});
state_machine__10315__auto__ = function(state_17250){
switch(arguments.length){
case 0:
return state_machine__10315__auto____0.call(this);
case 1:
return state_machine__10315__auto____1.call(this,state_17250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10315__auto____0;
state_machine__10315__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10315__auto____1;
return state_machine__10315__auto__;
})()
;})(switch__10314__auto__,c__10329__auto___17280,out))
})();var state__10331__auto__ = (function (){var statearr_17279 = f__10330__auto__.call(null);(statearr_17279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10329__auto___17280);
return statearr_17279;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10331__auto__);
});})(c__10329__auto___17280,out))
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