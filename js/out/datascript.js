// Compiled by ClojureScript 0.0-2202
goog.provide('datascript');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('clojure.walk');
goog.require('clojure.walk');
goog.require('clojure.set');
goog.require('clojure.set');

/**
* @constructor
* @param {*} e
* @param {*} a
* @param {*} v
* @param {*} tx
* @param {*} added
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
datascript.Datom = (function (e,a,v,tx,added,__meta,__extmap){
this.e = e;
this.a = a;
this.v = v;
this.tx = tx;
this.added = added;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
datascript.Datom.prototype.toString = (function (){var self__ = this;
var this$ = this;return cljs.core.pr_str.call(null,this$);
});
datascript.Datom.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8460__auto__,k__8461__auto__){var self__ = this;
var this__8460__auto____$1 = this;return cljs.core._lookup.call(null,this__8460__auto____$1,k__8461__auto__,null);
});
datascript.Datom.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8462__auto__,k14568,else__8463__auto__){var self__ = this;
var this__8462__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k14568,new cljs.core.Keyword(null,"e","e",1013904343)))
{return self__.e;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k14568,new cljs.core.Keyword(null,"a","a",1013904339)))
{return self__.a;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k14568,new cljs.core.Keyword(null,"v","v",1013904360)))
{return self__.v;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k14568,new cljs.core.Keyword(null,"tx","tx",1013907958)))
{return self__.tx;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k14568,new cljs.core.Keyword(null,"added","added",1106564210)))
{return self__.added;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k14568,else__8463__auto__);
} else
{return null;
}
}
}
}
}
}
});
datascript.Datom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8474__auto__,writer__8475__auto__,opts__8476__auto__){var self__ = this;
var this__8474__auto____$1 = this;var pr_pair__8477__auto__ = ((function (this__8474__auto____$1){
return (function (keyval__8478__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8475__auto__,cljs.core.pr_writer,""," ","",opts__8476__auto__,keyval__8478__auto__);
});})(this__8474__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__8475__auto__,pr_pair__8477__auto__,"#datascript.Datom{",", ","}",opts__8476__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"e","e",1013904343),self__.e],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",1013904339),self__.a],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",1013904360),self__.v],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx","tx",1013907958),self__.tx],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"added","added",1106564210),self__.added],null))], null),self__.__extmap));
});
datascript.Datom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8458__auto__){var self__ = this;
var this__8458__auto____$1 = this;return self__.__meta;
});
datascript.Datom.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8454__auto__){var self__ = this;
var this__8454__auto____$1 = this;return (new datascript.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,self__.__meta,self__.__extmap,self__.__hash));
});
datascript.Datom.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8464__auto__){var self__ = this;
var this__8464__auto____$1 = this;return (5 + cljs.core.count.call(null,self__.__extmap));
});
datascript.Datom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8455__auto__){var self__ = this;
var this__8455__auto____$1 = this;var h__8285__auto__ = self__.__hash;if(!((h__8285__auto__ == null)))
{return h__8285__auto__;
} else
{var h__8285__auto____$1 = cljs.core.hash_imap.call(null,this__8455__auto____$1);self__.__hash = h__8285__auto____$1;
return h__8285__auto____$1;
}
});
datascript.Datom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8456__auto__,other__8457__auto__){var self__ = this;
var this__8456__auto____$1 = this;if(cljs.core.truth_((function (){var and__7862__auto__ = other__8457__auto__;if(cljs.core.truth_(and__7862__auto__))
{return ((this__8456__auto____$1.constructor === other__8457__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8456__auto____$1,other__8457__auto__));
} else
{return and__7862__auto__;
}
})()))
{return true;
} else
{return false;
}
});
datascript.Datom.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8469__auto__,k__8470__auto__){var self__ = this;
var this__8469__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"v","v",1013904360),null,new cljs.core.Keyword(null,"added","added",1106564210),null,new cljs.core.Keyword(null,"e","e",1013904343),null,new cljs.core.Keyword(null,"tx","tx",1013907958),null,new cljs.core.Keyword(null,"a","a",1013904339),null], null), null),k__8470__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8469__auto____$1),self__.__meta),k__8470__auto__);
} else
{return (new datascript.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8470__auto__)),null));
}
});
datascript.Datom.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8467__auto__,k__8468__auto__,G__14567){var self__ = this;
var this__8467__auto____$1 = this;var pred__14570 = cljs.core.keyword_identical_QMARK_;var expr__14571 = k__8468__auto__;if(cljs.core.truth_(pred__14570.call(null,new cljs.core.Keyword(null,"e","e",1013904343),expr__14571)))
{return (new datascript.Datom(G__14567,self__.a,self__.v,self__.tx,self__.added,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__14570.call(null,new cljs.core.Keyword(null,"a","a",1013904339),expr__14571)))
{return (new datascript.Datom(self__.e,G__14567,self__.v,self__.tx,self__.added,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__14570.call(null,new cljs.core.Keyword(null,"v","v",1013904360),expr__14571)))
{return (new datascript.Datom(self__.e,self__.a,G__14567,self__.tx,self__.added,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__14570.call(null,new cljs.core.Keyword(null,"tx","tx",1013907958),expr__14571)))
{return (new datascript.Datom(self__.e,self__.a,self__.v,G__14567,self__.added,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__14570.call(null,new cljs.core.Keyword(null,"added","added",1106564210),expr__14571)))
{return (new datascript.Datom(self__.e,self__.a,self__.v,self__.tx,G__14567,self__.__meta,self__.__extmap,null));
} else
{return (new datascript.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8468__auto__,G__14567),null));
}
}
}
}
}
});
datascript.Datom.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8472__auto__){var self__ = this;
var this__8472__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"e","e",1013904343),self__.e],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",1013904339),self__.a],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",1013904360),self__.v],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx","tx",1013907958),self__.tx],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"added","added",1106564210),self__.added],null))], null),self__.__extmap));
});
datascript.Datom.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8459__auto__,G__14567){var self__ = this;
var this__8459__auto____$1 = this;return (new datascript.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,G__14567,self__.__extmap,self__.__hash));
});
datascript.Datom.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8465__auto__,entry__8466__auto__){var self__ = this;
var this__8465__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8466__auto__))
{return cljs.core._assoc.call(null,this__8465__auto____$1,cljs.core._nth.call(null,entry__8466__auto__,0),cljs.core._nth.call(null,entry__8466__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8465__auto____$1,entry__8466__auto__);
}
});
datascript.Datom.cljs$lang$type = true;
datascript.Datom.cljs$lang$ctorPrSeq = (function (this__8494__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript/Datom");
});
datascript.Datom.cljs$lang$ctorPrWriter = (function (this__8494__auto__,writer__8495__auto__){return cljs.core._write.call(null,writer__8495__auto__,"datascript/Datom");
});
datascript.__GT_Datom = (function __GT_Datom(e,a,v,tx,added){return (new datascript.Datom(e,a,v,tx,added));
});
datascript.map__GT_Datom = (function map__GT_Datom(G__14569){return (new datascript.Datom(new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(G__14569),new cljs.core.Keyword(null,"a","a",1013904339).cljs$core$IFn$_invoke$arity$1(G__14569),new cljs.core.Keyword(null,"v","v",1013904360).cljs$core$IFn$_invoke$arity$1(G__14569),new cljs.core.Keyword(null,"tx","tx",1013907958).cljs$core$IFn$_invoke$arity$1(G__14569),new cljs.core.Keyword(null,"added","added",1106564210).cljs$core$IFn$_invoke$arity$1(G__14569),null,cljs.core.dissoc.call(null,G__14569,new cljs.core.Keyword(null,"e","e",1013904343),new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.Keyword(null,"v","v",1013904360),new cljs.core.Keyword(null,"tx","tx",1013907958),new cljs.core.Keyword(null,"added","added",1106564210))));
});
datascript.Datom.prototype.cljs$core$ISeqable$ = true;
datascript.Datom.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (d){var d__$1 = this;return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,d__$1.added),d__$1.tx),d__$1.v),d__$1.a),d__$1.e);
});
datascript.Datom.prototype.cljs$core$IEquiv$ = true;
datascript.Datom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (d,o){var d__$1 = this;return (cljs.core._EQ_.call(null,d__$1.e,o.e)) && (cljs.core._EQ_.call(null,d__$1.a,o.a)) && (cljs.core._EQ_.call(null,d__$1.v,o.v));
});
datascript.Datom.prototype.cljs$core$IHash$ = true;
datascript.Datom.prototype.cljs$core$IHash$_hash$arity$1 = (function (d){var d__$1 = this;var or__7874__auto__ = d__$1.__hash;if(cljs.core.truth_(or__7874__auto__))
{return or__7874__auto__;
} else
{return d__$1.__hash = cljs.core.hash_coll.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [d__$1.e,d__$1.a,d__$1.v], null));
}
});
datascript.ISearch = (function (){var obj14574 = {};return obj14574;
})();
datascript._search = (function _search(data,pattern){if((function (){var and__7862__auto__ = data;if(and__7862__auto__)
{return data.datascript$ISearch$_search$arity$2;
} else
{return and__7862__auto__;
}
})())
{return data.datascript$ISearch$_search$arity$2(data,pattern);
} else
{var x__8501__auto__ = (((data == null))?null:data);return (function (){var or__7874__auto__ = (datascript._search[goog.typeOf(x__8501__auto__)]);if(or__7874__auto__)
{return or__7874__auto__;
} else
{var or__7874__auto____$1 = (datascript._search["_"]);if(or__7874__auto____$1)
{return or__7874__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISearch.-search",data);
}
}
})().call(null,data,pattern);
}
});

/**
* @constructor
* @param {*} schema
* @param {*} ea
* @param {*} av
* @param {*} max_eid
* @param {*} max_tx
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
datascript.DB = (function (schema,ea,av,max_eid,max_tx,__meta,__extmap){
this.schema = schema;
this.ea = ea;
this.av = av;
this.max_eid = max_eid;
this.max_tx = max_tx;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
datascript.DB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8460__auto__,k__8461__auto__){var self__ = this;
var this__8460__auto____$1 = this;return cljs.core._lookup.call(null,this__8460__auto____$1,k__8461__auto__,null);
});
datascript.DB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8462__auto__,k14579,else__8463__auto__){var self__ = this;
var this__8462__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k14579,new cljs.core.Keyword(null,"schema","schema",4400883987)))
{return self__.schema;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k14579,new cljs.core.Keyword(null,"ea","ea",1013907470)))
{return self__.ea;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k14579,new cljs.core.Keyword(null,"av","av",1013907367)))
{return self__.av;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k14579,new cljs.core.Keyword(null,"max-eid","max-eid",1856848841)))
{return self__.max_eid;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k14579,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119)))
{return self__.max_tx;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k14579,else__8463__auto__);
} else
{return null;
}
}
}
}
}
}
});
datascript.DB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8474__auto__,writer__8475__auto__,opts__8476__auto__){var self__ = this;
var this__8474__auto____$1 = this;var pr_pair__8477__auto__ = ((function (this__8474__auto____$1){
return (function (keyval__8478__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8475__auto__,cljs.core.pr_writer,""," ","",opts__8476__auto__,keyval__8478__auto__);
});})(this__8474__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__8475__auto__,pr_pair__8477__auto__,"#datascript.DB{",", ","}",opts__8476__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",4400883987),self__.schema],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ea","ea",1013907470),self__.ea],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"av","av",1013907367),self__.av],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-eid","max-eid",1856848841),self__.max_eid],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-tx","max-tx",4227685119),self__.max_tx],null))], null),self__.__extmap));
});
datascript.DB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8458__auto__){var self__ = this;
var this__8458__auto____$1 = this;return self__.__meta;
});
datascript.DB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8454__auto__){var self__ = this;
var this__8454__auto____$1 = this;return (new datascript.DB(self__.schema,self__.ea,self__.av,self__.max_eid,self__.max_tx,self__.__meta,self__.__extmap,self__.__hash));
});
datascript.DB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8464__auto__){var self__ = this;
var this__8464__auto____$1 = this;return (5 + cljs.core.count.call(null,self__.__extmap));
});
datascript.DB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8455__auto__){var self__ = this;
var this__8455__auto____$1 = this;var h__8285__auto__ = self__.__hash;if(!((h__8285__auto__ == null)))
{return h__8285__auto__;
} else
{var h__8285__auto____$1 = cljs.core.hash_imap.call(null,this__8455__auto____$1);self__.__hash = h__8285__auto____$1;
return h__8285__auto____$1;
}
});
datascript.DB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8456__auto__,other__8457__auto__){var self__ = this;
var this__8456__auto____$1 = this;if(cljs.core.truth_((function (){var and__7862__auto__ = other__8457__auto__;if(cljs.core.truth_(and__7862__auto__))
{return ((this__8456__auto____$1.constructor === other__8457__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8456__auto____$1,other__8457__auto__));
} else
{return and__7862__auto__;
}
})()))
{return true;
} else
{return false;
}
});
datascript.DB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8469__auto__,k__8470__auto__){var self__ = this;
var this__8469__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"schema","schema",4400883987),null,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119),null,new cljs.core.Keyword(null,"av","av",1013907367),null,new cljs.core.Keyword(null,"max-eid","max-eid",1856848841),null,new cljs.core.Keyword(null,"ea","ea",1013907470),null], null), null),k__8470__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8469__auto____$1),self__.__meta),k__8470__auto__);
} else
{return (new datascript.DB(self__.schema,self__.ea,self__.av,self__.max_eid,self__.max_tx,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8470__auto__)),null));
}
});
datascript.DB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8467__auto__,k__8468__auto__,G__14578){var self__ = this;
var this__8467__auto____$1 = this;var pred__14581 = cljs.core.keyword_identical_QMARK_;var expr__14582 = k__8468__auto__;if(cljs.core.truth_(pred__14581.call(null,new cljs.core.Keyword(null,"schema","schema",4400883987),expr__14582)))
{return (new datascript.DB(G__14578,self__.ea,self__.av,self__.max_eid,self__.max_tx,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__14581.call(null,new cljs.core.Keyword(null,"ea","ea",1013907470),expr__14582)))
{return (new datascript.DB(self__.schema,G__14578,self__.av,self__.max_eid,self__.max_tx,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__14581.call(null,new cljs.core.Keyword(null,"av","av",1013907367),expr__14582)))
{return (new datascript.DB(self__.schema,self__.ea,G__14578,self__.max_eid,self__.max_tx,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__14581.call(null,new cljs.core.Keyword(null,"max-eid","max-eid",1856848841),expr__14582)))
{return (new datascript.DB(self__.schema,self__.ea,self__.av,G__14578,self__.max_tx,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__14581.call(null,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119),expr__14582)))
{return (new datascript.DB(self__.schema,self__.ea,self__.av,self__.max_eid,G__14578,self__.__meta,self__.__extmap,null));
} else
{return (new datascript.DB(self__.schema,self__.ea,self__.av,self__.max_eid,self__.max_tx,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8468__auto__,G__14578),null));
}
}
}
}
}
});
datascript.DB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8472__auto__){var self__ = this;
var this__8472__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",4400883987),self__.schema],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ea","ea",1013907470),self__.ea],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"av","av",1013907367),self__.av],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-eid","max-eid",1856848841),self__.max_eid],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-tx","max-tx",4227685119),self__.max_tx],null))], null),self__.__extmap));
});
datascript.DB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8459__auto__,G__14578){var self__ = this;
var this__8459__auto____$1 = this;return (new datascript.DB(self__.schema,self__.ea,self__.av,self__.max_eid,self__.max_tx,G__14578,self__.__extmap,self__.__hash));
});
datascript.DB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8465__auto__,entry__8466__auto__){var self__ = this;
var this__8465__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8466__auto__))
{return cljs.core._assoc.call(null,this__8465__auto____$1,cljs.core._nth.call(null,entry__8466__auto__,0),cljs.core._nth.call(null,entry__8466__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8465__auto____$1,entry__8466__auto__);
}
});
datascript.DB.prototype.datascript$ISearch$ = true;
datascript.DB.prototype.datascript$ISearch$_search$arity$2 = (function (db,p__14584){var self__ = this;
var vec__14585 = p__14584;var e = cljs.core.nth.call(null,vec__14585,0,null);var a = cljs.core.nth.call(null,vec__14585,1,null);var v = cljs.core.nth.call(null,vec__14585,2,null);var tx = cljs.core.nth.call(null,vec__14585,3,null);var added = cljs.core.nth.call(null,vec__14585,4,null);var pattern = vec__14585;var db__$1 = this;var G__14586 = (function (){var G__14587 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(e)?new cljs.core.Keyword(null,"+","+",1013904285):null),(cljs.core.truth_(a)?new cljs.core.Keyword(null,"+","+",1013904285):null),(cljs.core.truth_(v)?new cljs.core.Keyword(null,"+","+",1013904285):null)], null);if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"+","+",1013904285),new cljs.core.Keyword(null,"+","+",1013904285),new cljs.core.Keyword(null,"+","+",1013904285)], null),G__14587))
{return cljs.core.filter.call(null,((function (G__14587,db__$1,vec__14585,e,a,v,tx,added,pattern){
return (function (p1__14575_SHARP_){return cljs.core._EQ_.call(null,v,p1__14575_SHARP_.v);
});})(G__14587,db__$1,vec__14585,e,a,v,tx,added,pattern))
,cljs.core.get_in.call(null,db__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ea","ea",1013907470),e,a], null)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.Keyword(null,"+","+",1013904285),new cljs.core.Keyword(null,"+","+",1013904285)], null),G__14587))
{return cljs.core.get_in.call(null,db__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"av","av",1013907367),a,v], null));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"+","+",1013904285),new cljs.core.Keyword(null,"+","+",1013904285),null], null),G__14587))
{return cljs.core.get_in.call(null,db__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ea","ea",1013907470),e,a], null));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.Keyword(null,"+","+",1013904285),null], null),G__14587))
{return cljs.core.apply.call(null,cljs.core.concat,cljs.core.vals.call(null,cljs.core.get_in.call(null,db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"av","av",1013907367),a], null))));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"+","+",1013904285),null,null], null),G__14587))
{return cljs.core.apply.call(null,cljs.core.concat,cljs.core.vals.call(null,cljs.core.get_in.call(null,db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ea","ea",1013907470),e], null))));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(e)?new cljs.core.Keyword(null,"+","+",1013904285):null),(cljs.core.truth_(a)?new cljs.core.Keyword(null,"+","+",1013904285):null),(cljs.core.truth_(v)?new cljs.core.Keyword(null,"+","+",1013904285):null)], null))].join('')));
} else
{return null;
}
}
}
}
}
}
})();var G__14586__$1 = (cljs.core.truth_(tx)?cljs.core.filter.call(null,((function (G__14586,db__$1,vec__14585,e,a,v,tx,added,pattern){
return (function (p1__14576_SHARP_){return cljs.core._EQ_.call(null,tx,p1__14576_SHARP_.tx);
});})(G__14586,db__$1,vec__14585,e,a,v,tx,added,pattern))
,G__14586):G__14586);var G__14586__$2 = (cljs.core.truth_(added)?cljs.core.filter.call(null,((function (G__14586,G__14586__$1,db__$1,vec__14585,e,a,v,tx,added,pattern){
return (function (p1__14577_SHARP_){return cljs.core._EQ_.call(null,added,p1__14577_SHARP_.added);
});})(G__14586,G__14586__$1,db__$1,vec__14585,e,a,v,tx,added,pattern))
,G__14586__$1):G__14586__$1);return G__14586__$2;
});
datascript.DB.cljs$lang$type = true;
datascript.DB.cljs$lang$ctorPrSeq = (function (this__8494__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript/DB");
});
datascript.DB.cljs$lang$ctorPrWriter = (function (this__8494__auto__,writer__8495__auto__){return cljs.core._write.call(null,writer__8495__auto__,"datascript/DB");
});
datascript.__GT_DB = (function __GT_DB(schema,ea,av,max_eid,max_tx){return (new datascript.DB(schema,ea,av,max_eid,max_tx));
});
datascript.map__GT_DB = (function map__GT_DB(G__14580){return (new datascript.DB(new cljs.core.Keyword(null,"schema","schema",4400883987).cljs$core$IFn$_invoke$arity$1(G__14580),new cljs.core.Keyword(null,"ea","ea",1013907470).cljs$core$IFn$_invoke$arity$1(G__14580),new cljs.core.Keyword(null,"av","av",1013907367).cljs$core$IFn$_invoke$arity$1(G__14580),new cljs.core.Keyword(null,"max-eid","max-eid",1856848841).cljs$core$IFn$_invoke$arity$1(G__14580),new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(G__14580),null,cljs.core.dissoc.call(null,G__14580,new cljs.core.Keyword(null,"schema","schema",4400883987),new cljs.core.Keyword(null,"ea","ea",1013907470),new cljs.core.Keyword(null,"av","av",1013907367),new cljs.core.Keyword(null,"max-eid","max-eid",1856848841),new cljs.core.Keyword(null,"max-tx","max-tx",4227685119))));
});

/**
* @constructor
* @param {*} db_before
* @param {*} db_after
* @param {*} tx_data
* @param {*} tempids
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
datascript.TxReport = (function (db_before,db_after,tx_data,tempids,__meta,__extmap){
this.db_before = db_before;
this.db_after = db_after;
this.tx_data = tx_data;
this.tempids = tempids;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>4){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
datascript.TxReport.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8460__auto__,k__8461__auto__){var self__ = this;
var this__8460__auto____$1 = this;return cljs.core._lookup.call(null,this__8460__auto____$1,k__8461__auto__,null);
});
datascript.TxReport.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8462__auto__,k14589,else__8463__auto__){var self__ = this;
var this__8462__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k14589,new cljs.core.Keyword(null,"db-before","db-before",3838846752)))
{return self__.db_before;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k14589,new cljs.core.Keyword(null,"db-after","db-after",1658340159)))
{return self__.db_after;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k14589,new cljs.core.Keyword(null,"tx-data","tx-data",4365248709)))
{return self__.tx_data;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k14589,new cljs.core.Keyword(null,"tempids","tempids",3880764886)))
{return self__.tempids;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k14589,else__8463__auto__);
} else
{return null;
}
}
}
}
}
});
datascript.TxReport.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8474__auto__,writer__8475__auto__,opts__8476__auto__){var self__ = this;
var this__8474__auto____$1 = this;var pr_pair__8477__auto__ = ((function (this__8474__auto____$1){
return (function (keyval__8478__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8475__auto__,cljs.core.pr_writer,""," ","",opts__8476__auto__,keyval__8478__auto__);
});})(this__8474__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__8475__auto__,pr_pair__8477__auto__,"#datascript.TxReport{",", ","}",opts__8476__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-before","db-before",3838846752),self__.db_before],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-after","db-after",1658340159),self__.db_after],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-data","tx-data",4365248709),self__.tx_data],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tempids","tempids",3880764886),self__.tempids],null))], null),self__.__extmap));
});
datascript.TxReport.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8458__auto__){var self__ = this;
var this__8458__auto____$1 = this;return self__.__meta;
});
datascript.TxReport.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8454__auto__){var self__ = this;
var this__8454__auto____$1 = this;return (new datascript.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.__meta,self__.__extmap,self__.__hash));
});
datascript.TxReport.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8464__auto__){var self__ = this;
var this__8464__auto____$1 = this;return (4 + cljs.core.count.call(null,self__.__extmap));
});
datascript.TxReport.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8455__auto__){var self__ = this;
var this__8455__auto____$1 = this;var h__8285__auto__ = self__.__hash;if(!((h__8285__auto__ == null)))
{return h__8285__auto__;
} else
{var h__8285__auto____$1 = cljs.core.hash_imap.call(null,this__8455__auto____$1);self__.__hash = h__8285__auto____$1;
return h__8285__auto____$1;
}
});
datascript.TxReport.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8456__auto__,other__8457__auto__){var self__ = this;
var this__8456__auto____$1 = this;if(cljs.core.truth_((function (){var and__7862__auto__ = other__8457__auto__;if(cljs.core.truth_(and__7862__auto__))
{return ((this__8456__auto____$1.constructor === other__8457__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8456__auto____$1,other__8457__auto__));
} else
{return and__7862__auto__;
}
})()))
{return true;
} else
{return false;
}
});
datascript.TxReport.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8469__auto__,k__8470__auto__){var self__ = this;
var this__8469__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tempids","tempids",3880764886),null,new cljs.core.Keyword(null,"db-after","db-after",1658340159),null,new cljs.core.Keyword(null,"db-before","db-before",3838846752),null,new cljs.core.Keyword(null,"tx-data","tx-data",4365248709),null], null), null),k__8470__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8469__auto____$1),self__.__meta),k__8470__auto__);
} else
{return (new datascript.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8470__auto__)),null));
}
});
datascript.TxReport.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8467__auto__,k__8468__auto__,G__14588){var self__ = this;
var this__8467__auto____$1 = this;var pred__14591 = cljs.core.keyword_identical_QMARK_;var expr__14592 = k__8468__auto__;if(cljs.core.truth_(pred__14591.call(null,new cljs.core.Keyword(null,"db-before","db-before",3838846752),expr__14592)))
{return (new datascript.TxReport(G__14588,self__.db_after,self__.tx_data,self__.tempids,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__14591.call(null,new cljs.core.Keyword(null,"db-after","db-after",1658340159),expr__14592)))
{return (new datascript.TxReport(self__.db_before,G__14588,self__.tx_data,self__.tempids,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__14591.call(null,new cljs.core.Keyword(null,"tx-data","tx-data",4365248709),expr__14592)))
{return (new datascript.TxReport(self__.db_before,self__.db_after,G__14588,self__.tempids,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__14591.call(null,new cljs.core.Keyword(null,"tempids","tempids",3880764886),expr__14592)))
{return (new datascript.TxReport(self__.db_before,self__.db_after,self__.tx_data,G__14588,self__.__meta,self__.__extmap,null));
} else
{return (new datascript.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8468__auto__,G__14588),null));
}
}
}
}
});
datascript.TxReport.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8472__auto__){var self__ = this;
var this__8472__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-before","db-before",3838846752),self__.db_before],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-after","db-after",1658340159),self__.db_after],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-data","tx-data",4365248709),self__.tx_data],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tempids","tempids",3880764886),self__.tempids],null))], null),self__.__extmap));
});
datascript.TxReport.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8459__auto__,G__14588){var self__ = this;
var this__8459__auto____$1 = this;return (new datascript.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,G__14588,self__.__extmap,self__.__hash));
});
datascript.TxReport.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8465__auto__,entry__8466__auto__){var self__ = this;
var this__8465__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8466__auto__))
{return cljs.core._assoc.call(null,this__8465__auto____$1,cljs.core._nth.call(null,entry__8466__auto__,0),cljs.core._nth.call(null,entry__8466__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8465__auto____$1,entry__8466__auto__);
}
});
datascript.TxReport.cljs$lang$type = true;
datascript.TxReport.cljs$lang$ctorPrSeq = (function (this__8494__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript/TxReport");
});
datascript.TxReport.cljs$lang$ctorPrWriter = (function (this__8494__auto__,writer__8495__auto__){return cljs.core._write.call(null,writer__8495__auto__,"datascript/TxReport");
});
datascript.__GT_TxReport = (function __GT_TxReport(db_before,db_after,tx_data,tempids){return (new datascript.TxReport(db_before,db_after,tx_data,tempids));
});
datascript.map__GT_TxReport = (function map__GT_TxReport(G__14590){return (new datascript.TxReport(new cljs.core.Keyword(null,"db-before","db-before",3838846752).cljs$core$IFn$_invoke$arity$1(G__14590),new cljs.core.Keyword(null,"db-after","db-after",1658340159).cljs$core$IFn$_invoke$arity$1(G__14590),new cljs.core.Keyword(null,"tx-data","tx-data",4365248709).cljs$core$IFn$_invoke$arity$1(G__14590),new cljs.core.Keyword(null,"tempids","tempids",3880764886).cljs$core$IFn$_invoke$arity$1(G__14590),null,cljs.core.dissoc.call(null,G__14590,new cljs.core.Keyword(null,"db-before","db-before",3838846752),new cljs.core.Keyword(null,"db-after","db-after",1658340159),new cljs.core.Keyword(null,"tx-data","tx-data",4365248709),new cljs.core.Keyword(null,"tempids","tempids",3880764886))));
});
datascript.multival_QMARK_ = (function multival_QMARK_(db,attr){return cljs.core._EQ_.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",4400883987),attr,new cljs.core.Keyword("db","cardinality","db/cardinality",1859321681)], null)),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",2499141178));
});
datascript.match_tuple = (function match_tuple(tuple,pattern){return cljs.core.every_QMARK_.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__14595_SHARP_,p2__14594_SHARP_){return ((p2__14594_SHARP_ == null)) || (cljs.core._EQ_.call(null,p1__14595_SHARP_,p2__14594_SHARP_));
}),tuple,pattern));
});
datascript.search = (function search(data,pattern){if((function (){var G__14600 = data;if(G__14600)
{var bit__8524__auto__ = null;if(cljs.core.truth_((function (){var or__7874__auto__ = bit__8524__auto__;if(cljs.core.truth_(or__7874__auto__))
{return or__7874__auto__;
} else
{return G__14600.datascript$ISearch$;
}
})()))
{return true;
} else
{if((!G__14600.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,datascript.ISearch,G__14600);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,datascript.ISearch,G__14600);
}
})())
{return datascript._search.call(null,data,pattern);
} else
{if((function (){var or__7874__auto__ = (function (){var G__14602 = data;if(G__14602)
{var bit__8524__auto__ = (G__14602.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__8524__auto__) || (G__14602.cljs$core$ISeqable$))
{return true;
} else
{if((!G__14602.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__14602);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__14602);
}
})();if(or__7874__auto__)
{return or__7874__auto__;
} else
{return data instanceof Array;
}
})())
{return cljs.core.filter.call(null,(function (p1__14596_SHARP_){return datascript.match_tuple.call(null,p1__14596_SHARP_,pattern);
}),data);
} else
{return null;
}
}
});
datascript.transact_datom = (function transact_datom(db,datom){if(cljs.core.truth_(datom.added))
{return cljs.core.update_in.call(null,cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ea","ea",1013907470),datom.e,datom.a], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),datom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"av","av",1013907367),datom.a,datom.v], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),datom);
} else
{return cljs.core.update_in.call(null,cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ea","ea",1013907470),datom.e,datom.a], null),cljs.core.disj,datom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"av","av",1013907367),datom.a,datom.v], null),cljs.core.disj,datom);
}
});
datascript._resolve_eid = (function _resolve_eid(eid,db){return (db.max_eid - eid);
});
datascript.resolve_eid = (function resolve_eid(db,d){if((d.e < 0))
{return cljs.core.update_in.call(null,d,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1013904343)], null),datascript._resolve_eid,db);
} else
{return d;
}
});
datascript.entity__GT_ops = (function entity__GT_ops(db,entity){if(cljs.core.map_QMARK_.call(null,entity))
{var eid = new cljs.core.Keyword("db","id","db/id",1014111942).cljs$core$IFn$_invoke$arity$1(entity);var iter__8591__auto__ = ((function (eid){
return (function iter__14613(s__14614){return (new cljs.core.LazySeq(null,((function (eid){
return (function (){var s__14614__$1 = s__14614;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14614__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var vec__14620 = cljs.core.first.call(null,xs__4624__auto__);var a = cljs.core.nth.call(null,vec__14620,0,null);var vs = cljs.core.nth.call(null,vec__14620,1,null);var iterys__8587__auto__ = ((function (s__14614__$1,vec__14620,a,vs,xs__4624__auto__,temp__4126__auto__,eid){
return (function iter__14615(s__14616){return (new cljs.core.LazySeq(null,((function (s__14614__$1,vec__14620,a,vs,xs__4624__auto__,temp__4126__auto__,eid){
return (function (){var s__14616__$1 = s__14616;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__14616__$1);if(temp__4126__auto____$1)
{var s__14616__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__14616__$2))
{var c__8589__auto__ = cljs.core.chunk_first.call(null,s__14616__$2);var size__8590__auto__ = cljs.core.count.call(null,c__8589__auto__);var b__14618 = cljs.core.chunk_buffer.call(null,size__8590__auto__);if((function (){var i__14617 = 0;while(true){
if((i__14617 < size__8590__auto__))
{var v = cljs.core._nth.call(null,c__8589__auto__,i__14617);cljs.core.chunk_append.call(null,b__14618,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",1014207040),eid,a,v], null));
{
var G__14622 = (i__14617 + 1);
i__14617 = G__14622;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14618),iter__14615.call(null,cljs.core.chunk_rest.call(null,s__14616__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14618),null);
}
} else
{var v = cljs.core.first.call(null,s__14616__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",1014207040),eid,a,v], null),iter__14615.call(null,cljs.core.rest.call(null,s__14616__$2)));
}
} else
{return null;
}
break;
}
});})(s__14614__$1,vec__14620,a,vs,xs__4624__auto__,temp__4126__auto__,eid))
,null,null));
});})(s__14614__$1,vec__14620,a,vs,xs__4624__auto__,temp__4126__auto__,eid))
;var fs__8588__auto__ = cljs.core.seq.call(null,iterys__8587__auto__.call(null,(((cljs.core.sequential_QMARK_.call(null,vs)) && (datascript.multival_QMARK_.call(null,db,a)))?vs:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vs], null))));if(fs__8588__auto__)
{return cljs.core.concat.call(null,fs__8588__auto__,iter__14613.call(null,cljs.core.rest.call(null,s__14614__$1)));
} else
{{
var G__14623 = cljs.core.rest.call(null,s__14614__$1);
s__14614__$1 = G__14623;
continue;
}
}
} else
{return null;
}
break;
}
});})(eid))
,null,null));
});})(eid))
;return iter__8591__auto__.call(null,cljs.core.dissoc.call(null,entity,new cljs.core.Keyword("db","id","db/id",1014111942)));
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,entity),new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894)))
{var vec__14621 = entity;var _ = cljs.core.nth.call(null,vec__14621,0,null);var f = cljs.core.nth.call(null,vec__14621,1,null);var args = cljs.core.nthnext.call(null,vec__14621,2);return cljs.core.mapcat.call(null,((function (vec__14621,_,f,args){
return (function (p1__14603_SHARP_){return entity__GT_ops.call(null,db,p1__14603_SHARP_);
});})(vec__14621,_,f,args))
,cljs.core.apply.call(null,f,db,args));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity], null);
} else
{return null;
}
}
}
});
datascript.op__GT_tx_data = (function op__GT_tx_data(db,p__14626){var vec__14629 = p__14626;var op = cljs.core.nth.call(null,vec__14629,0,null);var e = cljs.core.nth.call(null,vec__14629,1,null);var a = cljs.core.nth.call(null,vec__14629,2,null);var v = cljs.core.nth.call(null,vec__14629,3,null);var tx = (db.max_tx + 1);var G__14630 = op;if(cljs.core._EQ_.call(null,new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",4213852396),G__14630))
{var datoms = datascript._search.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null));return cljs.core.map.call(null,((function (datoms,G__14630,tx,vec__14629,op,e,a,v){
return (function (p1__14625_SHARP_){return cljs.core.assoc.call(null,p1__14625_SHARP_,new cljs.core.Keyword(null,"tx","tx",1013907958),tx,new cljs.core.Keyword(null,"added","added",1106564210),false);
});})(datoms,G__14630,tx,vec__14629,op,e,a,v))
,datoms);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword("db.fn","retractAttribute","db.fn/retractAttribute",3416849171),G__14630))
{var datoms = datascript._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null));return cljs.core.map.call(null,((function (datoms,G__14630,tx,vec__14629,op,e,a,v){
return (function (p1__14624_SHARP_){return cljs.core.assoc.call(null,p1__14624_SHARP_,new cljs.core.Keyword(null,"tx","tx",1013907958),tx,new cljs.core.Keyword(null,"added","added",1106564210),false);
});})(datoms,G__14630,tx,vec__14629,op,e,a,v))
,datoms);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword("db","retract","db/retract",2112480480),G__14630))
{var temp__4126__auto__ = cljs.core.first.call(null,datascript._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)));if(cljs.core.truth_(temp__4126__auto__))
{var old_datom = temp__4126__auto__;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.__GT_Datom.call(null,e,a,v,tx,false)], null);
} else
{return null;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword("db","add","db/add",1014207040),G__14630))
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",2499141178),cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",4400883987),a,new cljs.core.Keyword("db","cardinality","db/cardinality",1859321681)], null))))
{if(cljs.core.empty_QMARK_.call(null,datascript._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null))))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.__GT_Datom.call(null,e,a,v,tx,true)], null);
} else
{return null;
}
} else
{var temp__4124__auto__ = cljs.core.first.call(null,datascript._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));if(cljs.core.truth_(temp__4124__auto__))
{var old_datom = temp__4124__auto__;if(cljs.core.not_EQ_.call(null,old_datom.v,v))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.__GT_Datom.call(null,e,a,old_datom.v,tx,false),datascript.__GT_Datom.call(null,e,a,v,tx,true)], null);
} else
{return null;
}
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.__GT_Datom.call(null,e,a,v,tx,true)], null);
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));
} else
{return null;
}
}
}
}
}
});
datascript.entity__GT_tx_data = (function entity__GT_tx_data(db,entity){return cljs.core.mapcat.call(null,(function (p1__14631_SHARP_){return datascript.op__GT_tx_data.call(null,db,p1__14631_SHARP_);
}),datascript.entity__GT_ops.call(null,db,entity));
});
datascript._with = (function _with(db,tx_data){return cljs.core.assoc.call(null,cljs.core.update_in.call(null,cljs.core.reduce.call(null,datascript.transact_datom,db,tx_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"max-tx","max-tx",4227685119)], null),cljs.core.inc),new cljs.core.Keyword(null,"max-eid","max-eid",1856848841),cljs.core.reduce.call(null,cljs.core.max,db.max_eid,cljs.core.map.call(null,new cljs.core.Keyword(null,"e","e",1013904343),tx_data)));
});
datascript.parse_where = (function parse_where(where){var source = cljs.core.first.call(null,where);if(((source instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,"$",cljs.core.first.call(null,cljs.core.name.call(null,source)))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,where),cljs.core.next.call(null,where)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),where], null);
}
});
datascript.bind_symbol = (function bind_symbol(sym,scope){if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1640531432,null),sym))
{return null;
} else
{if((sym instanceof cljs.core.Symbol))
{return cljs.core.get.call(null,scope,sym,null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return sym;
} else
{return null;
}
}
}
});
datascript.bind_symbols = (function bind_symbols(form,scope){return cljs.core.map.call(null,(function (p1__14632_SHARP_){return datascript.bind_symbol.call(null,p1__14632_SHARP_,scope);
}),form);
});
datascript.search_datoms = (function search_datoms(source,where,scope){return datascript.search.call(null,datascript.bind_symbol.call(null,source,scope),datascript.bind_symbols.call(null,where,scope));
});
datascript.populate_scope = (function populate_scope(scope,where,datom){return cljs.core.into.call(null,scope,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__14633_SHARP_,p2__14634_SHARP_){if(((p1__14633_SHARP_ instanceof cljs.core.Symbol)) && (!(cljs.core.contains_QMARK_.call(null,scope,p1__14633_SHARP_))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14633_SHARP_,p2__14634_SHARP_], null);
} else
{return null;
}
}),where,datom)));
});
/**
* @param {...*} var_args
*/
datascript._differ_QMARK_ = (function() { 
var _differ_QMARK___delegate = function (xs){var l = cljs.core.count.call(null,xs);return cljs.core.not_EQ_.call(null,cljs.core.take.call(null,(l / 2),xs),cljs.core.drop.call(null,(l / 2),xs));
};
var _differ_QMARK_ = function (var_args){
var xs = null;if (arguments.length > 0) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return _differ_QMARK___delegate.call(this,xs);};
_differ_QMARK_.cljs$lang$maxFixedArity = 0;
_differ_QMARK_.cljs$lang$applyTo = (function (arglist__14635){
var xs = cljs.core.seq(arglist__14635);
return _differ_QMARK___delegate(xs);
});
_differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic = _differ_QMARK___delegate;
return _differ_QMARK_;
})()
;
datascript.built_ins = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"true?","true?",-1529891286,null),new cljs.core.Symbol(null,"odd?","odd?",-1637125463,null),new cljs.core.Symbol(null,">=",">=",-1640529544,null),new cljs.core.Symbol(null,">",">",-1640531465,null),new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"inc","inc",-1640427113,null),new cljs.core.Symbol(null,"/","/",-1640531480,null),new cljs.core.Symbol(null,"quot","quot",-1637049150,null),new cljs.core.Symbol(null,"false?","false?",1372554549,null),new cljs.core.Symbol(null,"-differ?","-differ?",1135976441,null),new cljs.core.Symbol(null,"<=","<=",-1640529606,null),new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"min","min",-1640423413,null),new cljs.core.Symbol(null,"+","+",-1640531484,null),new cljs.core.Symbol(null,"==","==",-1640529575,null),new cljs.core.Symbol(null,"max","max",-1640423651,null),new cljs.core.Symbol(null,"*","*",-1640531485,null),new cljs.core.Symbol(null,"zero?","zero?",-1524740016,null),new cljs.core.Symbol(null,"!=","!=",-1640530443,null),new cljs.core.Symbol(null,"dec","dec",-1640432197,null),new cljs.core.Symbol(null,"not=","not=",-1637144189,null),new cljs.core.Symbol(null,"<","<",-1640531467,null),new cljs.core.Symbol(null,"-","-",-1640531482,null),new cljs.core.Symbol(null,"pos?","pos?",-1637084636,null),new cljs.core.Symbol(null,"mod","mod",-1640423237,null),new cljs.core.Symbol(null,"rem","rem",-1640418733,null),new cljs.core.Symbol(null,"even?","even?",-1543640034,null),new cljs.core.Symbol(null,"neg?","neg?",-1637154200,null)],[cljs.core.true_QMARK_,cljs.core.odd_QMARK_,cljs.core._GT__EQ_,cljs.core._GT_,cljs.core.nil_QMARK_,cljs.core.inc,cljs.core._SLASH_,cljs.core.quot,cljs.core.false_QMARK_,datascript._differ_QMARK_,cljs.core._LT__EQ_,cljs.core._EQ_,cljs.core.min,cljs.core._PLUS_,cljs.core._EQ__EQ_,cljs.core.max,cljs.core._STAR_,cljs.core.zero_QMARK_,cljs.core.not_EQ_,cljs.core.dec,cljs.core.not_EQ_,cljs.core._LT_,cljs.core._,cljs.core.pos_QMARK_,cljs.core.mod,cljs.core.rem,cljs.core.even_QMARK_,cljs.core.neg_QMARK_]);
datascript.call = (function call(p__14636,scope){var vec__14638 = p__14636;var f = cljs.core.nth.call(null,vec__14638,0,null);var args = cljs.core.nthnext.call(null,vec__14638,1);var bound_args = datascript.bind_symbols.call(null,args,scope);var f__$1 = (function (){var or__7874__auto__ = datascript.built_ins.call(null,f);if(cljs.core.truth_(or__7874__auto__))
{return or__7874__auto__;
} else
{return scope.call(null,f);
}
})();return cljs.core.apply.call(null,f__$1,bound_args);
});
datascript.looks_like_QMARK_ = (function looks_like_QMARK_(pattern,form){if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1640531432,null),pattern))
{return true;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",-1640531485,null)], null),pattern))
{return cljs.core.sequential_QMARK_.call(null,form);
} else
{if(cljs.core.sequential_QMARK_.call(null,pattern))
{return (cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),cljs.core.count.call(null,pattern))) && (cljs.core.every_QMARK_.call(null,(function (p__14645){var vec__14646 = p__14645;var pattern_el = cljs.core.nth.call(null,vec__14646,0,null);var form_el = cljs.core.nth.call(null,vec__14646,1,null);return looks_like_QMARK_.call(null,pattern_el,form_el);
}),cljs.core.map.call(null,cljs.core.vector,pattern,form)));
} else
{if((pattern instanceof cljs.core.Symbol))
{return cljs.core._EQ_.call(null,form,pattern);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return pattern.call(null,form);
} else
{return null;
}
}
}
}
}
});
datascript.collect = (function collect(f,coll){return cljs.core.reduce.call(null,(function (p1__14647_SHARP_,p2__14648_SHARP_){return clojure.set.union.call(null,p1__14647_SHARP_,f.call(null,p2__14648_SHARP_));
}),cljs.core.PersistentHashSet.EMPTY,coll);
});
datascript.bind_rule_branch = (function bind_rule_branch(branch,call_args,context){var vec__14656 = branch;var vec__14657 = cljs.core.nth.call(null,vec__14656,0,null);var rule = cljs.core.nth.call(null,vec__14657,0,null);var local_args = cljs.core.nthnext.call(null,vec__14657,1);var body = cljs.core.nthnext.call(null,vec__14656,1);var replacements = cljs.core.zipmap.call(null,local_args,call_args);var seqid = new cljs.core.Keyword(null,"__depth","__depth",2242649685).cljs$core$IFn$_invoke$arity$2(context,0);var bound_body = clojure.walk.postwalk.call(null,((function (vec__14656,vec__14657,rule,local_args,body,replacements,seqid){
return (function (p1__14649_SHARP_){if(((p1__14649_SHARP_ instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,"?",cljs.core.first.call(null,cljs.core.name.call(null,p1__14649_SHARP_)))))
{var or__7874__auto__ = replacements.call(null,p1__14649_SHARP_);if(cljs.core.truth_(or__7874__auto__))
{return or__7874__auto__;
} else
{return cljs.core.symbol.call(null,[cljs.core.str(cljs.core.name.call(null,p1__14649_SHARP_)),cljs.core.str("__auto__"),cljs.core.str(seqid)].join(''));
}
} else
{return p1__14649_SHARP_;
}
});})(vec__14656,vec__14657,rule,local_args,body,replacements,seqid))
,body);return cljs.core.concat.call(null,(function (){var iter__8591__auto__ = ((function (vec__14656,vec__14657,rule,local_args,body,replacements,seqid,bound_body){
return (function iter__14658(s__14659){return (new cljs.core.LazySeq(null,((function (vec__14656,vec__14657,rule,local_args,body,replacements,seqid,bound_body){
return (function (){var s__14659__$1 = s__14659;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14659__$1);if(temp__4126__auto__)
{var s__14659__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14659__$2))
{var c__8589__auto__ = cljs.core.chunk_first.call(null,s__14659__$2);var size__8590__auto__ = cljs.core.count.call(null,c__8589__auto__);var b__14661 = cljs.core.chunk_buffer.call(null,size__8590__auto__);if((function (){var i__14660 = 0;while(true){
if((i__14660 < size__8590__auto__))
{var prev_call_args = cljs.core._nth.call(null,c__8589__auto__,i__14660);cljs.core.chunk_append.call(null,b__14661,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1135976441,null)], null),call_args,prev_call_args)], null));
{
var G__14662 = (i__14660 + 1);
i__14660 = G__14662;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14661),iter__14658.call(null,cljs.core.chunk_rest.call(null,s__14659__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14661),null);
}
} else
{var prev_call_args = cljs.core.first.call(null,s__14659__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1135976441,null)], null),call_args,prev_call_args)], null),iter__14658.call(null,cljs.core.rest.call(null,s__14659__$2)));
}
} else
{return null;
}
break;
}
});})(vec__14656,vec__14657,rule,local_args,body,replacements,seqid,bound_body))
,null,null));
});})(vec__14656,vec__14657,rule,local_args,body,replacements,seqid,bound_body))
;return iter__8591__auto__.call(null,cljs.core.get.call(null,context,rule));
})(),bound_body);
});
datascript._q = (function _q(in_PLUS_sources,wheres,scope){while(true){
if(cljs.core.truth_(cljs.core.not_empty.call(null,in_PLUS_sources)))
{var vec__14676 = cljs.core.first.call(null,in_PLUS_sources);var in$ = cljs.core.nth.call(null,vec__14676,0,null);var source = cljs.core.nth.call(null,vec__14676,1,null);var pred__14677 = datascript.looks_like_QMARK_;var expr__14678 = in$;if(cljs.core.truth_(pred__14677.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1640531432,null),new cljs.core.Symbol(null,"...","...",-1640485849,null)], null),expr__14678)))
{return datascript.collect.call(null,((function (in_PLUS_sources,wheres,scope,pred__14677,expr__14678,vec__14676,in$,source){
return (function (p1__14663_SHARP_){return _q.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,in$),p1__14663_SHARP_], null)], null),cljs.core.next.call(null,in_PLUS_sources)),wheres,scope);
});})(in_PLUS_sources,wheres,scope,pred__14677,expr__14678,vec__14676,in$,source))
,source);
} else
{if(cljs.core.truth_(pred__14677.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",-1640531485,null)], null)], null),expr__14678)))
{return datascript.collect.call(null,((function (in_PLUS_sources,wheres,scope,pred__14677,expr__14678,vec__14676,in$,source){
return (function (p1__14664_SHARP_){return _q.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,in$),p1__14664_SHARP_], null)], null),cljs.core.next.call(null,in_PLUS_sources)),wheres,scope);
});})(in_PLUS_sources,wheres,scope,pred__14677,expr__14678,vec__14676,in$,source))
,source);
} else
{if(cljs.core.truth_(pred__14677.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",-1640531485,null)], null),expr__14678)))
{{
var G__14685 = cljs.core.concat.call(null,cljs.core.zipmap.call(null,in$,source),cljs.core.next.call(null,in_PLUS_sources));
var G__14686 = wheres;
var G__14687 = scope;
in_PLUS_sources = G__14685;
wheres = G__14686;
scope = G__14687;
continue;
}
} else
{if(cljs.core.truth_(pred__14677.call(null,new cljs.core.Symbol(null,"%","%",-1640531490,null),expr__14678)))
{var rules = ((typeof source === 'string')?cljs.reader.read_string.call(null,source):source);{
var G__14688 = cljs.core.next.call(null,in_PLUS_sources);
var G__14689 = wheres;
var G__14690 = cljs.core.assoc.call(null,scope,new cljs.core.Keyword(null,"__rules","__rules",2256051337),cljs.core.group_by.call(null,cljs.core.ffirst,rules));
in_PLUS_sources = G__14688;
wheres = G__14689;
scope = G__14690;
continue;
}
} else
{if(cljs.core.truth_(pred__14677.call(null,new cljs.core.Symbol(null,"_","_",-1640531432,null),expr__14678)))
{{
var G__14691 = cljs.core.next.call(null,in_PLUS_sources);
var G__14692 = wheres;
var G__14693 = cljs.core.assoc.call(null,scope,in$,source);
in_PLUS_sources = G__14691;
wheres = G__14692;
scope = G__14693;
continue;
}
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__14678)].join('')));
}
}
}
}
}
} else
{if(cljs.core.truth_(cljs.core.not_empty.call(null,wheres)))
{var where = cljs.core.first.call(null,wheres);var temp__4124__auto__ = cljs.core.get.call(null,new cljs.core.Keyword(null,"__rules","__rules",2256051337).cljs$core$IFn$_invoke$arity$1(scope),cljs.core.first.call(null,where));if(cljs.core.truth_(temp__4124__auto__))
{var rule_branches = temp__4124__auto__;var vec__14680 = where;var rule = cljs.core.nth.call(null,vec__14680,0,null);var call_args = cljs.core.nthnext.call(null,vec__14680,1);var next_scope = cljs.core.update_in.call(null,cljs.core.update_in.call(null,scope,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"__rules_ctx","__rules_ctx",2834098801),rule], null),cljs.core.conj,call_args),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"__rules_ctx","__rules_ctx",2834098801),new cljs.core.Keyword(null,"__depth","__depth",2242649685)], null),cljs.core.inc);var next_wheres = cljs.core.next.call(null,wheres);return datascript.collect.call(null,((function (in_PLUS_sources,wheres,scope,vec__14680,rule,call_args,next_scope,next_wheres,rule_branches,temp__4124__auto__,where){
return (function (p1__14665_SHARP_){return _q.call(null,null,cljs.core.concat.call(null,datascript.bind_rule_branch.call(null,p1__14665_SHARP_,call_args,new cljs.core.Keyword(null,"__rules_ctx","__rules_ctx",2834098801).cljs$core$IFn$_invoke$arity$1(scope)),next_wheres),next_scope);
});})(in_PLUS_sources,wheres,scope,vec__14680,rule,call_args,next_scope,next_wheres,rule_branches,temp__4124__auto__,where))
,rule_branches);
} else
{var pred__14681 = datascript.looks_like_QMARK_;var expr__14682 = where;if(cljs.core.truth_(pred__14681.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",-1640531485,null)], null)], null),expr__14682)))
{if(cljs.core.truth_(datascript.call.call(null,cljs.core.first.call(null,where),scope)))
{{
var G__14694 = null;
var G__14695 = cljs.core.next.call(null,wheres);
var G__14696 = scope;
in_PLUS_sources = G__14694;
wheres = G__14695;
scope = G__14696;
continue;
}
} else
{return null;
}
} else
{if(cljs.core.truth_(pred__14681.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",-1640531485,null)], null),new cljs.core.Symbol(null,"_","_",-1640531432,null)], null),expr__14682)))
{var res = datascript.call.call(null,cljs.core.first.call(null,where),scope);{
var G__14697 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,where),res], null)], null);
var G__14698 = cljs.core.next.call(null,wheres);
var G__14699 = scope;
in_PLUS_sources = G__14697;
wheres = G__14698;
scope = G__14699;
continue;
}
} else
{if(cljs.core.truth_(pred__14681.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",-1640531485,null)], null),expr__14682)))
{var vec__14684 = datascript.parse_where.call(null,where);var source = cljs.core.nth.call(null,vec__14684,0,null);var where__$1 = cljs.core.nth.call(null,vec__14684,1,null);var found = datascript.search_datoms.call(null,source,where__$1,scope);return datascript.collect.call(null,((function (in_PLUS_sources,wheres,scope,vec__14684,source,where__$1,found,pred__14681,expr__14682,temp__4124__auto__,where){
return (function (p1__14666_SHARP_){return _q.call(null,null,cljs.core.next.call(null,wheres),datascript.populate_scope.call(null,scope,where__$1,p1__14666_SHARP_));
});})(in_PLUS_sources,wheres,scope,vec__14684,source,where__$1,found,pred__14681,expr__14682,temp__4124__auto__,where))
,found);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__14682)].join('')));
}
}
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.PersistentHashSet.fromArray([cljs.core.mapv.call(null,scope,new cljs.core.Keyword(null,"__find","__find",3824551179).cljs$core$IFn$_invoke$arity$1(scope))], true);
} else
{return null;
}
}
}
break;
}
});
datascript.built_in_aggregates = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol(null,"distinct","distinct",-1351833419,null),cljs.core.comp.call(null,cljs.core.vec,cljs.core.distinct),new cljs.core.Symbol(null,"min","min",-1640423413,null),(function() {
var G__14701 = null;
var G__14701__1 = (function (coll){return cljs.core.reduce.call(null,cljs.core.min,coll);
});
var G__14701__2 = (function (n,coll){return cljs.core.vec.call(null,cljs.core.reduce.call(null,(function (acc,x){if((cljs.core.count.call(null,acc) < n))
{return cljs.core.sort.call(null,cljs.core.conj.call(null,acc,x));
} else
{if((x < cljs.core.last.call(null,acc)))
{return cljs.core.sort.call(null,cljs.core.conj.call(null,cljs.core.butlast.call(null,acc),x));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return acc;
} else
{return null;
}
}
}
}),cljs.core.PersistentVector.EMPTY,coll));
});
G__14701 = function(n,coll){
switch(arguments.length){
case 1:
return G__14701__1.call(this,n);
case 2:
return G__14701__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__14701;
})()
,new cljs.core.Symbol(null,"max","max",-1640423651,null),(function() {
var G__14702 = null;
var G__14702__1 = (function (coll){return cljs.core.reduce.call(null,cljs.core.max,coll);
});
var G__14702__2 = (function (n,coll){return cljs.core.vec.call(null,cljs.core.reduce.call(null,(function (acc,x){if((cljs.core.count.call(null,acc) < n))
{return cljs.core.sort.call(null,cljs.core.conj.call(null,acc,x));
} else
{if((x > cljs.core.first.call(null,acc)))
{return cljs.core.sort.call(null,cljs.core.conj.call(null,cljs.core.next.call(null,acc),x));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return acc;
} else
{return null;
}
}
}
}),cljs.core.PersistentVector.EMPTY,coll));
});
G__14702 = function(n,coll){
switch(arguments.length){
case 1:
return G__14702__1.call(this,n);
case 2:
return G__14702__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__14702;
})()
,new cljs.core.Symbol(null,"sum","sum",-1640417276,null),(function (p1__14700_SHARP_){return cljs.core.reduce.call(null,cljs.core._PLUS_,0,p1__14700_SHARP_);
}),new cljs.core.Symbol(null,"rand","rand",-1637038626,null),(function() {
var G__14703 = null;
var G__14703__1 = (function (coll){return cljs.core.rand_nth.call(null,coll);
});
var G__14703__2 = (function (n,coll){return cljs.core.vec.call(null,cljs.core.repeatedly.call(null,n,(function (){return cljs.core.rand_nth.call(null,coll);
})));
});
G__14703 = function(n,coll){
switch(arguments.length){
case 1:
return G__14703__1.call(this,n);
case 2:
return G__14703__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__14703;
})()
,new cljs.core.Symbol(null,"sample","sample",1744760675,null),(function (n,coll){return cljs.core.vec.call(null,cljs.core.take.call(null,n,cljs.core.shuffle.call(null,coll)));
}),new cljs.core.Symbol(null,"count","count",-1545680184,null),cljs.core.count], null);
datascript.aggr_group_key = (function aggr_group_key(find,result){return cljs.core.mapv.call(null,(function (val,sym){if(cljs.core.sequential_QMARK_.call(null,sym))
{return null;
} else
{return val;
}
}),result,find);
});
datascript._aggregate = (function _aggregate(find,scope,results){return cljs.core.mapv.call(null,(function (sym,val,i){if(cljs.core.sequential_QMARK_.call(null,sym))
{var vec__14706 = sym;var f = cljs.core.nth.call(null,vec__14706,0,null);var args = cljs.core.nthnext.call(null,vec__14706,1);var vals = cljs.core.map.call(null,((function (vec__14706,f,args){
return (function (p1__14704_SHARP_){return cljs.core.get.call(null,p1__14704_SHARP_,i);
});})(vec__14706,f,args))
,results);var args__$1 = cljs.core.concat.call(null,datascript.bind_symbols.call(null,cljs.core.butlast.call(null,args),scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vals], null));var f__$1 = (function (){var or__7874__auto__ = datascript.built_in_aggregates.call(null,f);if(cljs.core.truth_(or__7874__auto__))
{return or__7874__auto__;
} else
{return scope.call(null,f);
}
})();return cljs.core.apply.call(null,f__$1,args__$1);
} else
{return val;
}
}),find,cljs.core.first.call(null,results),cljs.core.range.call(null));
});
datascript.aggregate = (function aggregate(query,scope,results){var find = cljs.core.concat.call(null,new cljs.core.Keyword(null,"find","find",1017047339).cljs$core$IFn$_invoke$arity$1(query),new cljs.core.Keyword(null,"with","with",1017553976).cljs$core$IFn$_invoke$arity$1(query));return cljs.core.mapv.call(null,((function (find){
return (function (p__14710){var vec__14711 = p__14710;var _ = cljs.core.nth.call(null,vec__14711,0,null);var results__$1 = cljs.core.nth.call(null,vec__14711,1,null);return datascript._aggregate.call(null,new cljs.core.Keyword(null,"find","find",1017047339).cljs$core$IFn$_invoke$arity$1(query),scope,results__$1);
});})(find))
,cljs.core.group_by.call(null,((function (find){
return (function (p1__14707_SHARP_){return datascript.aggr_group_key.call(null,find,p1__14707_SHARP_);
});})(find))
,results));
});
datascript.parse_query = (function parse_query(query){var parsed = cljs.core.PersistentArrayMap.EMPTY;var key = null;var qs = query;while(true){
var temp__4124__auto__ = cljs.core.first.call(null,qs);if(cljs.core.truth_(temp__4124__auto__))
{var q = temp__4124__auto__;if((q instanceof cljs.core.Keyword))
{{
var G__14712 = parsed;
var G__14713 = q;
var G__14714 = cljs.core.next.call(null,qs);
parsed = G__14712;
key = G__14713;
qs = G__14714;
continue;
}
} else
{{
var G__14715 = cljs.core.update_in.call(null,parsed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),q);
var G__14716 = key;
var G__14717 = cljs.core.next.call(null,qs);
parsed = G__14715;
key = G__14716;
qs = G__14717;
continue;
}
}
} else
{return parsed;
}
break;
}
});
/**
* @param {...*} var_args
*/
datascript.q = (function() { 
var q__delegate = function (query,sources){var query__$1 = ((cljs.core.sequential_QMARK_.call(null,query))?datascript.parse_query.call(null,query):query);var ins__GT_sources = cljs.core.zipmap.call(null,new cljs.core.Keyword(null,"in","in",1013907607).cljs$core$IFn$_invoke$arity$2(query__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null)], null)),sources);var find = cljs.core.concat.call(null,cljs.core.map.call(null,((function (query__$1,ins__GT_sources){
return (function (p1__14718_SHARP_){if(cljs.core.sequential_QMARK_.call(null,p1__14718_SHARP_))
{return cljs.core.last.call(null,p1__14718_SHARP_);
} else
{return p1__14718_SHARP_;
}
});})(query__$1,ins__GT_sources))
,new cljs.core.Keyword(null,"find","find",1017047339).cljs$core$IFn$_invoke$arity$1(query__$1)),new cljs.core.Keyword(null,"with","with",1017553976).cljs$core$IFn$_invoke$arity$1(query__$1));var results = datascript._q.call(null,ins__GT_sources,new cljs.core.Keyword(null,"where","where",1127002201).cljs$core$IFn$_invoke$arity$1(query__$1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__find","__find",3824551179),find], null));var G__14721 = results;var G__14721__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"with","with",1017553976).cljs$core$IFn$_invoke$arity$1(query__$1))?cljs.core.mapv.call(null,((function (G__14721,query__$1,ins__GT_sources,find,results){
return (function (p1__14719_SHARP_){return cljs.core.subvec.call(null,p1__14719_SHARP_,0,cljs.core.count.call(null,new cljs.core.Keyword(null,"find","find",1017047339).cljs$core$IFn$_invoke$arity$1(query__$1)));
});})(G__14721,query__$1,ins__GT_sources,find,results))
,G__14721):G__14721);var G__14721__$2 = (cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,cljs.core.sequential_QMARK_,new cljs.core.Keyword(null,"find","find",1017047339).cljs$core$IFn$_invoke$arity$1(query__$1))))?datascript.aggregate.call(null,query__$1,ins__GT_sources,G__14721__$1):G__14721__$1);return G__14721__$2;
};
var q = function (query,var_args){
var sources = null;if (arguments.length > 1) {
  sources = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return q__delegate.call(this,query,sources);};
q.cljs$lang$maxFixedArity = 1;
q.cljs$lang$applyTo = (function (arglist__14722){
var query = cljs.core.first(arglist__14722);
var sources = cljs.core.rest(arglist__14722);
return q__delegate(query,sources);
});
q.cljs$core$IFn$_invoke$arity$variadic = q__delegate;
return q;
})()
;
datascript.entity = (function entity(db,eid){var temp__4126__auto__ = cljs.core.not_empty.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ea","ea",1013907470),eid], null)));if(cljs.core.truth_(temp__4126__auto__))
{var attrs = temp__4126__auto__;return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",1014111942),eid], null),(function (){var iter__8591__auto__ = ((function (attrs,temp__4126__auto__){
return (function iter__14731(s__14732){return (new cljs.core.LazySeq(null,((function (attrs,temp__4126__auto__){
return (function (){var s__14732__$1 = s__14732;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__14732__$1);if(temp__4126__auto____$1)
{var s__14732__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__14732__$2))
{var c__8589__auto__ = cljs.core.chunk_first.call(null,s__14732__$2);var size__8590__auto__ = cljs.core.count.call(null,c__8589__auto__);var b__14734 = cljs.core.chunk_buffer.call(null,size__8590__auto__);if((function (){var i__14733 = 0;while(true){
if((i__14733 < size__8590__auto__))
{var vec__14737 = cljs.core._nth.call(null,c__8589__auto__,i__14733);var attr = cljs.core.nth.call(null,vec__14737,0,null);var datoms = cljs.core.nth.call(null,vec__14737,1,null);cljs.core.chunk_append.call(null,b__14734,((datascript.multival_QMARK_.call(null,db,attr))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,cljs.core.map.call(null,new cljs.core.Keyword(null,"v","v",1013904360),datoms)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,cljs.core.first.call(null,datoms).v], null)));
{
var G__14739 = (i__14733 + 1);
i__14733 = G__14739;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14734),iter__14731.call(null,cljs.core.chunk_rest.call(null,s__14732__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14734),null);
}
} else
{var vec__14738 = cljs.core.first.call(null,s__14732__$2);var attr = cljs.core.nth.call(null,vec__14738,0,null);var datoms = cljs.core.nth.call(null,vec__14738,1,null);return cljs.core.cons.call(null,((datascript.multival_QMARK_.call(null,db,attr))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,cljs.core.map.call(null,new cljs.core.Keyword(null,"v","v",1013904360),datoms)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,cljs.core.first.call(null,datoms).v], null)),iter__14731.call(null,cljs.core.rest.call(null,s__14732__$2)));
}
} else
{return null;
}
break;
}
});})(attrs,temp__4126__auto__))
,null,null));
});})(attrs,temp__4126__auto__))
;return iter__8591__auto__.call(null,attrs);
})());
} else
{return null;
}
});
datascript.tx0 = 536870912;
/**
* @param {...*} var_args
*/
datascript.empty_db = (function() { 
var empty_db__delegate = function (p__14740){var vec__14742 = p__14740;var schema = cljs.core.nth.call(null,vec__14742,0,null);return (new datascript.DB(schema,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,0,datascript.tx0));
};
var empty_db = function (var_args){
var p__14740 = null;if (arguments.length > 0) {
  p__14740 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return empty_db__delegate.call(this,p__14740);};
empty_db.cljs$lang$maxFixedArity = 0;
empty_db.cljs$lang$applyTo = (function (arglist__14743){
var p__14740 = cljs.core.seq(arglist__14743);
return empty_db__delegate(p__14740);
});
empty_db.cljs$core$IFn$_invoke$arity$variadic = empty_db__delegate;
return empty_db;
})()
;
/**
* @param {...*} var_args
*/
datascript.create_conn = (function() { 
var create_conn__delegate = function (p__14744){var vec__14746 = p__14744;var schema = cljs.core.nth.call(null,vec__14746,0,null);return cljs.core.atom.call(null,datascript.empty_db.call(null,schema),new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listeners","listeners",4090152369),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null));
};
var create_conn = function (var_args){
var p__14744 = null;if (arguments.length > 0) {
  p__14744 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return create_conn__delegate.call(this,p__14744);};
create_conn.cljs$lang$maxFixedArity = 0;
create_conn.cljs$lang$applyTo = (function (arglist__14747){
var p__14744 = cljs.core.seq(arglist__14747);
return create_conn__delegate(p__14744);
});
create_conn.cljs$core$IFn$_invoke$arity$variadic = create_conn__delegate;
return create_conn;
})()
;
datascript.transact = (function transact(db,entities){var raw_datoms = cljs.core.mapcat.call(null,(function (p1__14748_SHARP_){return datascript.entity__GT_tx_data.call(null,db,p1__14748_SHARP_);
}),entities);var datoms = cljs.core.map.call(null,((function (raw_datoms){
return (function (p1__14749_SHARP_){return datascript.resolve_eid.call(null,db,p1__14749_SHARP_);
});})(raw_datoms))
,raw_datoms);var tempids = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (raw_datoms,datoms){
return (function (p1__14751_SHARP_){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[p1__14751_SHARP_.e,datascript._resolve_eid.call(null,p1__14751_SHARP_.e,db)],null));
});})(raw_datoms,datoms))
,cljs.core.filter.call(null,((function (raw_datoms,datoms){
return (function (p1__14750_SHARP_){return (p1__14750_SHARP_.e < 0);
});})(raw_datoms,datoms))
,raw_datoms)));return (new datascript.TxReport(db,datascript._with.call(null,db,datoms),datoms,tempids));
});
datascript.with$ = (function with$(db,entities){return new cljs.core.Keyword(null,"db-after","db-after",1658340159).cljs$core$IFn$_invoke$arity$1(datascript.transact.call(null,db,entities));
});
datascript._transact_BANG_ = (function _transact_BANG_(conn,entities){var report = cljs.core.atom.call(null,null);cljs.core.swap_BANG_.call(null,conn,((function (report){
return (function (db){var r = datascript.transact.call(null,db,entities);cljs.core.reset_BANG_.call(null,report,r);
return new cljs.core.Keyword(null,"db-after","db-after",1658340159).cljs$core$IFn$_invoke$arity$1(r);
});})(report))
);
return cljs.core.deref.call(null,report);
});
datascript.transact_BANG_ = (function transact_BANG_(conn,entities){var report = datascript._transact_BANG_.call(null,conn,entities);var seq__14758_14764 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",4090152369).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn))));var chunk__14759_14765 = null;var count__14760_14766 = 0;var i__14761_14767 = 0;while(true){
if((i__14761_14767 < count__14760_14766))
{var vec__14762_14768 = cljs.core._nth.call(null,chunk__14759_14765,i__14761_14767);var __14769 = cljs.core.nth.call(null,vec__14762_14768,0,null);var callback_14770 = cljs.core.nth.call(null,vec__14762_14768,1,null);callback_14770.call(null,report);
{
var G__14771 = seq__14758_14764;
var G__14772 = chunk__14759_14765;
var G__14773 = count__14760_14766;
var G__14774 = (i__14761_14767 + 1);
seq__14758_14764 = G__14771;
chunk__14759_14765 = G__14772;
count__14760_14766 = G__14773;
i__14761_14767 = G__14774;
continue;
}
} else
{var temp__4126__auto___14775 = cljs.core.seq.call(null,seq__14758_14764);if(temp__4126__auto___14775)
{var seq__14758_14776__$1 = temp__4126__auto___14775;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14758_14776__$1))
{var c__8622__auto___14777 = cljs.core.chunk_first.call(null,seq__14758_14776__$1);{
var G__14778 = cljs.core.chunk_rest.call(null,seq__14758_14776__$1);
var G__14779 = c__8622__auto___14777;
var G__14780 = cljs.core.count.call(null,c__8622__auto___14777);
var G__14781 = 0;
seq__14758_14764 = G__14778;
chunk__14759_14765 = G__14779;
count__14760_14766 = G__14780;
i__14761_14767 = G__14781;
continue;
}
} else
{var vec__14763_14782 = cljs.core.first.call(null,seq__14758_14776__$1);var __14783 = cljs.core.nth.call(null,vec__14763_14782,0,null);var callback_14784 = cljs.core.nth.call(null,vec__14763_14782,1,null);callback_14784.call(null,report);
{
var G__14785 = cljs.core.next.call(null,seq__14758_14776__$1);
var G__14786 = null;
var G__14787 = 0;
var G__14788 = 0;
seq__14758_14764 = G__14785;
chunk__14759_14765 = G__14786;
count__14760_14766 = G__14787;
i__14761_14767 = G__14788;
continue;
}
}
} else
{}
}
break;
}
return report;
});
datascript.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (conn,callback){return listen_BANG_.call(null,conn,cljs.core.rand.call(null),callback);
});
var listen_BANG___3 = (function (conn,key,callback){cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"listeners","listeners",4090152369).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn)),cljs.core.assoc,key,callback);
return key;
});
listen_BANG_ = function(conn,key,callback){
switch(arguments.length){
case 2:
return listen_BANG___2.call(this,conn,key);
case 3:
return listen_BANG___3.call(this,conn,key,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_BANG___2;
listen_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_BANG___3;
return listen_BANG_;
})()
;
datascript.unlisten_BANG_ = (function unlisten_BANG_(conn,key){return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"listeners","listeners",4090152369).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn)),cljs.core.dissoc,key);
});

//# sourceMappingURL=datascript.js.map