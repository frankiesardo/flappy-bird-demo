// Compiled by ClojureScript 0.0-2202
goog.provide('flappy_bird_demo.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
flappy_bird_demo.core.board_width = 480;
flappy_bird_demo.core.board_height = 640;
flappy_bird_demo.core.board_bottom = 561;
flappy_bird_demo.core.border_height = 10;
flappy_bird_demo.core.border_width = flappy_bird_demo.core.board_width;
flappy_bird_demo.core.border_y = 567;
flappy_bird_demo.core.bird_x = 212;
flappy_bird_demo.core.bird_initial_y = 312;
flappy_bird_demo.core.bird_width = 57;
flappy_bird_demo.core.bird_height = 41;
flappy_bird_demo.core.gravity = 0.01;
flappy_bird_demo.core.jump_speed = 15;
flappy_bird_demo.core.game_speed = -0.15;
flappy_bird_demo.core.gap_width = 86;
flappy_bird_demo.core.gap_height = 158;
flappy_bird_demo.core.gap_spacing = 324;
flappy_bird_demo.core.first_gap_position = (2 * flappy_bird_demo.core.board_width);
flappy_bird_demo.core.min_pillar_height = 60;
flappy_bird_demo.core.rand_gap_y = (function rand_gap_y(){return (flappy_bird_demo.core.min_pillar_height + cljs.core.rand_int.call(null,((flappy_bird_demo.core.board_bottom - flappy_bird_demo.core.gap_height) - (2 * flappy_bird_demo.core.min_pillar_height))));
});
flappy_bird_demo.core.make_gap = (function make_gap(x){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-x","initial-x",764907425),x,new cljs.core.Keyword(null,"x","x",1013904362),x,new cljs.core.Keyword(null,"y","y",1013904363),flappy_bird_demo.core.rand_gap_y.call(null)], null);
});
flappy_bird_demo.core.initial_state = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"bird-vy","bird-vy",909320137),new cljs.core.Keyword(null,"bird-y","bird-y",3920024535),new cljs.core.Keyword(null,"start-time","start-time",3689550026),new cljs.core.Keyword(null,"gaps","gaps",1017069519),new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"score","score",1123168772),new cljs.core.Keyword(null,"border-x","border-x",3098481289),new cljs.core.Keyword(null,"last-jump","last-jump",2980750455),new cljs.core.Keyword(null,"bird-action","bird-action",4298220860),new cljs.core.Keyword(null,"curr-time","curr-time",1619964154),new cljs.core.Keyword(null,"bird-tilt","bird-tilt",3587722947)],[0,flappy_bird_demo.core.bird_initial_y,0,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"waiting","waiting",2130217407),0,0,0,new cljs.core.Keyword(null,"flapping","flapping",2636952025),0,0]);
if(typeof flappy_bird_demo.core.game_state !== 'undefined')
{} else
{flappy_bird_demo.core.game_state = cljs.core.atom.call(null,flappy_bird_demo.core.initial_state);
}
flappy_bird_demo.core.floor = (function floor(x){return Math.floor(x);
});
flappy_bird_demo.core.abs = (function abs(x){return Math.abs(x);
});
flappy_bird_demo.core.translate = (function translate(start_pos,vel,time){return flappy_bird_demo.core.floor.call(null,(start_pos + (time * vel)));
});
flappy_bird_demo.core.clamp = (function clamp(min,max,v){if((v < min))
{return min;
} else
{if((v > max))
{return max;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return v;
} else
{return null;
}
}
}
});
flappy_bird_demo.core.in_pillar_QMARK_ = (function in_pillar_QMARK_(p__10134){var map__10136 = p__10134;var map__10136__$1 = ((cljs.core.seq_QMARK_.call(null,map__10136))?cljs.core.apply.call(null,cljs.core.hash_map,map__10136):map__10136);var x = cljs.core.get.call(null,map__10136__$1,new cljs.core.Keyword(null,"x","x",1013904362));return (((flappy_bird_demo.core.bird_x + flappy_bird_demo.core.bird_width) >= x)) && ((flappy_bird_demo.core.bird_x < (x + flappy_bird_demo.core.gap_width)));
});
flappy_bird_demo.core.in_pillar_gap_QMARK_ = (function in_pillar_gap_QMARK_(bird_y,p__10137){var map__10139 = p__10137;var map__10139__$1 = ((cljs.core.seq_QMARK_.call(null,map__10139))?cljs.core.apply.call(null,cljs.core.hash_map,map__10139):map__10139);var y = cljs.core.get.call(null,map__10139__$1,new cljs.core.Keyword(null,"y","y",1013904363));return ((y < bird_y)) && (((y + flappy_bird_demo.core.gap_height) > (bird_y + flappy_bird_demo.core.bird_height)));
});
flappy_bird_demo.core.pillar_collision_QMARK_ = (function pillar_collision_QMARK_(bird_y,pillar){return (flappy_bird_demo.core.in_pillar_QMARK_.call(null,pillar)) && (!(flappy_bird_demo.core.in_pillar_gap_QMARK_.call(null,bird_y,pillar)));
});
flappy_bird_demo.core.bottom_collision_QMARK_ = (function bottom_collision_QMARK_(bird_y){return (bird_y >= (flappy_bird_demo.core.board_bottom - flappy_bird_demo.core.bird_height));
});
flappy_bird_demo.core.collision_sys = (function collision_sys(p__10141){var map__10143 = p__10141;var map__10143__$1 = ((cljs.core.seq_QMARK_.call(null,map__10143))?cljs.core.apply.call(null,cljs.core.hash_map,map__10143):map__10143);var state = map__10143__$1;var gaps = cljs.core.get.call(null,map__10143__$1,new cljs.core.Keyword(null,"gaps","gaps",1017069519));var bird_y = cljs.core.get.call(null,map__10143__$1,new cljs.core.Keyword(null,"bird-y","bird-y",3920024535));var status = cljs.core.get.call(null,map__10143__$1,new cljs.core.Keyword(null,"status","status",4416389988));if(cljs.core.not_EQ_.call(null,status,new cljs.core.Keyword(null,"playing","playing",520340384)))
{return state;
} else
{var collision = (function (){var or__3481__auto__ = flappy_bird_demo.core.bottom_collision_QMARK_.call(null,bird_y);if(or__3481__auto__)
{return or__3481__auto__;
} else
{return cljs.core.some.call(null,((function (or__3481__auto__,map__10143,map__10143__$1,state,gaps,bird_y,status){
return (function (p1__10140_SHARP_){return flappy_bird_demo.core.pillar_collision_QMARK_.call(null,bird_y,p1__10140_SHARP_);
});})(or__3481__auto__,map__10143,map__10143__$1,state,gaps,bird_y,status))
,gaps);
}
})();if(cljs.core.truth_(collision))
{return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"dead","dead",1016983510));
} else
{return state;
}
}
});
flappy_bird_demo.core.scoring_sys = (function scoring_sys(p__10144){var map__10146 = p__10144;var map__10146__$1 = ((cljs.core.seq_QMARK_.call(null,map__10146))?cljs.core.apply.call(null,cljs.core.hash_map,map__10146):map__10146);var state = map__10146__$1;var start_time = cljs.core.get.call(null,map__10146__$1,new cljs.core.Keyword(null,"start-time","start-time",3689550026));var curr_time = cljs.core.get.call(null,map__10146__$1,new cljs.core.Keyword(null,"curr-time","curr-time",1619964154));var score = (flappy_bird_demo.core.abs.call(null,flappy_bird_demo.core.floor.call(null,((((curr_time - start_time) * flappy_bird_demo.core.game_speed) - 544) / flappy_bird_demo.core.gap_spacing))) - 4);return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"score","score",1123168772),(((score < 0))?0:score));
});
flappy_bird_demo.core.action_sys = (function action_sys(p__10147){var map__10150 = p__10147;var map__10150__$1 = ((cljs.core.seq_QMARK_.call(null,map__10150))?cljs.core.apply.call(null,cljs.core.hash_map,map__10150):map__10150);var state = map__10150__$1;var bird_action = cljs.core.get.call(null,map__10150__$1,new cljs.core.Keyword(null,"bird-action","bird-action",4298220860));var status = cljs.core.get.call(null,map__10150__$1,new cljs.core.Keyword(null,"status","status",4416389988));var bird_vy = cljs.core.get.call(null,map__10150__$1,new cljs.core.Keyword(null,"bird-vy","bird-vy",909320137));var G__10151 = state;var G__10151__$1 = (((bird_vy > 0))?cljs.core.assoc.call(null,G__10151,new cljs.core.Keyword(null,"bird-action","bird-action",4298220860),new cljs.core.Keyword(null,"flapping","flapping",2636952025)):G__10151);var G__10151__$2 = (((bird_vy < 0))?cljs.core.assoc.call(null,G__10151__$1,new cljs.core.Keyword(null,"bird-action","bird-action",4298220860),new cljs.core.Keyword(null,"falling","falling",4225056249)):G__10151__$1);var G__10151__$3 = ((cljs.core._EQ_.call(null,status,new cljs.core.Keyword(null,"waiting","waiting",2130217407)))?cljs.core.assoc.call(null,G__10151__$2,new cljs.core.Keyword(null,"bird-action","bird-action",4298220860),new cljs.core.Keyword(null,"flapping","flapping",2636952025)):G__10151__$2);var G__10151__$4 = ((cljs.core._EQ_.call(null,status,new cljs.core.Keyword(null,"dead","dead",1016983510)))?cljs.core.assoc.call(null,G__10151__$3,new cljs.core.Keyword(null,"bird-action","bird-action",4298220860),new cljs.core.Keyword(null,"falling","falling",4225056249)):G__10151__$3);return G__10151__$4;
});
flappy_bird_demo.core.tilting_sys = (function tilting_sys(p__10152){var map__10154 = p__10152;var map__10154__$1 = ((cljs.core.seq_QMARK_.call(null,map__10154))?cljs.core.apply.call(null,cljs.core.hash_map,map__10154):map__10154);var state = map__10154__$1;var bird_vy = cljs.core.get.call(null,map__10154__$1,new cljs.core.Keyword(null,"bird-vy","bird-vy",909320137));var angle = flappy_bird_demo.core.clamp.call(null,-30,90,(-2 * bird_vy));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"bird-tilt","bird-tilt",3587722947),angle);
});
flappy_bird_demo.core.creation_sys = (function creation_sys(p__10156){var map__10158 = p__10156;var map__10158__$1 = ((cljs.core.seq_QMARK_.call(null,map__10158))?cljs.core.apply.call(null,cljs.core.hash_map,map__10158):map__10158);var state = map__10158__$1;var gaps = cljs.core.get.call(null,map__10158__$1,new cljs.core.Keyword(null,"gaps","gaps",1017069519));var status = cljs.core.get.call(null,map__10158__$1,new cljs.core.Keyword(null,"status","status",4416389988));if(cljs.core.not_EQ_.call(null,status,new cljs.core.Keyword(null,"playing","playing",520340384)))
{return state;
} else
{if(cljs.core.empty_QMARK_.call(null,gaps))
{return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"gaps","gaps",1017069519),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [flappy_bird_demo.core.make_gap.call(null,flappy_bird_demo.core.first_gap_position)], null));
} else
{var visible_gaps = cljs.core.filterv.call(null,((function (map__10158,map__10158__$1,state,gaps,status){
return (function (p1__10155_SHARP_){return (new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p1__10155_SHARP_) > (- flappy_bird_demo.core.gap_width));
});})(map__10158,map__10158__$1,state,gaps,status))
,gaps);return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"gaps","gaps",1017069519),(((cljs.core.count.call(null,visible_gaps) >= 2))?visible_gaps:cljs.core.conj.call(null,visible_gaps,flappy_bird_demo.core.make_gap.call(null,(flappy_bird_demo.core.gap_spacing + new cljs.core.Keyword(null,"initial-x","initial-x",764907425).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,visible_gaps)))))));
}
}
});
flappy_bird_demo.core.waiting_sys = (function waiting_sys(p__10159){var map__10161 = p__10159;var map__10161__$1 = ((cljs.core.seq_QMARK_.call(null,map__10161))?cljs.core.apply.call(null,cljs.core.hash_map,map__10161):map__10161);var state = map__10161__$1;var curr_time = cljs.core.get.call(null,map__10161__$1,new cljs.core.Keyword(null,"curr-time","curr-time",1619964154));var start_time = cljs.core.get.call(null,map__10161__$1,new cljs.core.Keyword(null,"start-time","start-time",3689550026));var status = cljs.core.get.call(null,map__10161__$1,new cljs.core.Keyword(null,"status","status",4416389988));if(cljs.core.not_EQ_.call(null,status,new cljs.core.Keyword(null,"waiting","waiting",2130217407)))
{return state;
} else
{return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"bird-y","bird-y",3920024535),(flappy_bird_demo.core.bird_initial_y + (30 * Math.sin(((curr_time - start_time) / 300)))),new cljs.core.Keyword(null,"border-x","border-x",3098481289),cljs.core.mod.call(null,flappy_bird_demo.core.translate.call(null,0,flappy_bird_demo.core.game_speed,curr_time),23));
}
});
flappy_bird_demo.core.moving_sys = (function moving_sys(p__10162){var map__10166 = p__10162;var map__10166__$1 = ((cljs.core.seq_QMARK_.call(null,map__10166))?cljs.core.apply.call(null,cljs.core.hash_map,map__10166):map__10166);var state = map__10166__$1;var gaps = cljs.core.get.call(null,map__10166__$1,new cljs.core.Keyword(null,"gaps","gaps",1017069519));var bird_y = cljs.core.get.call(null,map__10166__$1,new cljs.core.Keyword(null,"bird-y","bird-y",3920024535));var bird_vy = cljs.core.get.call(null,map__10166__$1,new cljs.core.Keyword(null,"bird-vy","bird-vy",909320137));var curr_time = cljs.core.get.call(null,map__10166__$1,new cljs.core.Keyword(null,"curr-time","curr-time",1619964154));var start_time = cljs.core.get.call(null,map__10166__$1,new cljs.core.Keyword(null,"start-time","start-time",3689550026));var status = cljs.core.get.call(null,map__10166__$1,new cljs.core.Keyword(null,"status","status",4416389988));if(cljs.core.not_EQ_.call(null,status,new cljs.core.Keyword(null,"playing","playing",520340384)))
{return state;
} else
{return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"bird-y","bird-y",3920024535),(function (){var x__3795__auto__ = (bird_y - bird_vy);var y__3796__auto__ = (flappy_bird_demo.core.board_bottom - flappy_bird_demo.core.bird_height);return ((x__3795__auto__ < y__3796__auto__) ? x__3795__auto__ : y__3796__auto__);
})(),new cljs.core.Keyword(null,"border-x","border-x",3098481289),cljs.core.mod.call(null,flappy_bird_demo.core.translate.call(null,0,flappy_bird_demo.core.game_speed,curr_time),23),new cljs.core.Keyword(null,"gaps","gaps",1017069519),cljs.core.map.call(null,((function (map__10166,map__10166__$1,state,gaps,bird_y,bird_vy,curr_time,start_time,status){
return (function (p__10167){var map__10168 = p__10167;var map__10168__$1 = ((cljs.core.seq_QMARK_.call(null,map__10168))?cljs.core.apply.call(null,cljs.core.hash_map,map__10168):map__10168);var gap = map__10168__$1;var initial_x = cljs.core.get.call(null,map__10168__$1,new cljs.core.Keyword(null,"initial-x","initial-x",764907425));return cljs.core.assoc.call(null,gap,new cljs.core.Keyword(null,"x","x",1013904362),flappy_bird_demo.core.translate.call(null,initial_x,flappy_bird_demo.core.game_speed,(curr_time - start_time)));
});})(map__10166,map__10166__$1,state,gaps,bird_y,bird_vy,curr_time,start_time,status))
,gaps));
}
});
flappy_bird_demo.core.jumping_sys = (function jumping_sys(p__10169){var map__10171 = p__10169;var map__10171__$1 = ((cljs.core.seq_QMARK_.call(null,map__10171))?cljs.core.apply.call(null,cljs.core.hash_map,map__10171):map__10171);var state = map__10171__$1;var curr_time = cljs.core.get.call(null,map__10171__$1,new cljs.core.Keyword(null,"curr-time","curr-time",1619964154));var last_jump = cljs.core.get.call(null,map__10171__$1,new cljs.core.Keyword(null,"last-jump","last-jump",2980750455));if(cljs.core.not_EQ_.call(null,last_jump,curr_time))
{return state;
} else
{return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"bird-vy","bird-vy",909320137),flappy_bird_demo.core.jump_speed);
}
});
flappy_bird_demo.core.gravity_sys = (function gravity_sys(p__10172){var map__10174 = p__10172;var map__10174__$1 = ((cljs.core.seq_QMARK_.call(null,map__10174))?cljs.core.apply.call(null,cljs.core.hash_map,map__10174):map__10174);var state = map__10174__$1;var curr_time = cljs.core.get.call(null,map__10174__$1,new cljs.core.Keyword(null,"curr-time","curr-time",1619964154));var last_jump = cljs.core.get.call(null,map__10174__$1,new cljs.core.Keyword(null,"last-jump","last-jump",2980750455));var bird_vy = cljs.core.get.call(null,map__10174__$1,new cljs.core.Keyword(null,"bird-vy","bird-vy",909320137));var status = cljs.core.get.call(null,map__10174__$1,new cljs.core.Keyword(null,"status","status",4416389988));if(cljs.core.not_EQ_.call(null,status,new cljs.core.Keyword(null,"playing","playing",520340384)))
{return state;
} else
{return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"bird-vy","bird-vy",909320137),(bird_vy - ((curr_time - last_jump) * flappy_bird_demo.core.gravity)));
}
});
flappy_bird_demo.core.input_sys = (function input_sys(input_fn){return (function (state){return flappy_bird_demo.core.creation_sys.call(null,flappy_bird_demo.core.scoring_sys.call(null,flappy_bird_demo.core.collision_sys.call(null,flappy_bird_demo.core.action_sys.call(null,flappy_bird_demo.core.tilting_sys.call(null,flappy_bird_demo.core.moving_sys.call(null,flappy_bird_demo.core.jumping_sys.call(null,flappy_bird_demo.core.gravity_sys.call(null,flappy_bird_demo.core.waiting_sys.call(null,input_fn.call(null,state))))))))));
});
});
flappy_bird_demo.core.input_restart = (function input_restart(app){return om.core.update_BANG_.call(null,app,flappy_bird_demo.core.initial_state);
});
flappy_bird_demo.core.input_jump = (function input_jump(app){var jump_fn = (function (p__10178){var map__10179 = p__10178;var map__10179__$1 = ((cljs.core.seq_QMARK_.call(null,map__10179))?cljs.core.apply.call(null,cljs.core.hash_map,map__10179):map__10179);var state = map__10179__$1;var curr_time = cljs.core.get.call(null,map__10179__$1,new cljs.core.Keyword(null,"curr-time","curr-time",1619964154));var status = cljs.core.get.call(null,map__10179__$1,new cljs.core.Keyword(null,"status","status",4416389988));var G__10180 = state;var G__10180__$1 = ((cljs.core._EQ_.call(null,status,new cljs.core.Keyword(null,"waiting","waiting",2130217407)))?cljs.core.assoc.call(null,G__10180,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"playing","playing",520340384),new cljs.core.Keyword(null,"last-jump","last-jump",2980750455),curr_time,new cljs.core.Keyword(null,"start-time","start-time",3689550026),curr_time):G__10180);var G__10180__$2 = ((cljs.core._EQ_.call(null,status,new cljs.core.Keyword(null,"playing","playing",520340384)))?cljs.core.assoc.call(null,G__10180__$1,new cljs.core.Keyword(null,"last-jump","last-jump",2980750455),curr_time):G__10180__$1);return G__10180__$2;
});var game_sys = flappy_bird_demo.core.input_sys.call(null,jump_fn);return om.core.transact_BANG_.call(null,app,game_sys);
});
flappy_bird_demo.core.input_time = (function input_time(app,time){var game_sys = flappy_bird_demo.core.input_sys.call(null,(function (p1__10181_SHARP_){return cljs.core.assoc.call(null,p1__10181_SHARP_,new cljs.core.Keyword(null,"curr-time","curr-time",1619964154),time);
}));return om.core.transact_BANG_.call(null,app,game_sys);
});
flappy_bird_demo.core.time_loop = (function time_loop(){var out = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,1));var c__6274__auto___10227 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6274__auto___10227,out){
return (function (){var f__6275__auto__ = (function (){var switch__6259__auto__ = ((function (c__6274__auto___10227,out){
return (function (state_10215){var state_val_10216 = (state_10215[1]);if((state_val_10216 === 4))
{var inst_10208 = (state_10215[2]);var inst_10209 = (function (){return ((function (inst_10208,state_val_10216,c__6274__auto___10227,out){
return (function (p1__10182_SHARP_){return cljs.core.async.put_BANG_.call(null,out,p1__10182_SHARP_);
});
;})(inst_10208,state_val_10216,c__6274__auto___10227,out))
})();var inst_10210 = window.requestAnimationFrame(inst_10209);var state_10215__$1 = (function (){var statearr_10217 = state_10215;(statearr_10217[7] = inst_10210);
(statearr_10217[8] = inst_10208);
return statearr_10217;
})();var statearr_10218_10228 = state_10215__$1;(statearr_10218_10228[2] = null);
(statearr_10218_10228[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10216 === 3))
{var inst_10213 = (state_10215[2]);var state_10215__$1 = state_10215;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10215__$1,inst_10213);
} else
{if((state_val_10216 === 2))
{var inst_10206 = cljs.core.async.timeout.call(null,30);var state_10215__$1 = state_10215;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10215__$1,4,inst_10206);
} else
{if((state_val_10216 === 1))
{var state_10215__$1 = state_10215;var statearr_10219_10229 = state_10215__$1;(statearr_10219_10229[2] = null);
(statearr_10219_10229[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});})(c__6274__auto___10227,out))
;return ((function (switch__6259__auto__,c__6274__auto___10227,out){
return (function() {
var state_machine__6260__auto__ = null;
var state_machine__6260__auto____0 = (function (){var statearr_10223 = [null,null,null,null,null,null,null,null,null];(statearr_10223[0] = state_machine__6260__auto__);
(statearr_10223[1] = 1);
return statearr_10223;
});
var state_machine__6260__auto____1 = (function (state_10215){while(true){
var ret_value__6261__auto__ = (function (){try{while(true){
var result__6262__auto__ = switch__6259__auto__.call(null,state_10215);if(cljs.core.keyword_identical_QMARK_.call(null,result__6262__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6262__auto__;
}
break;
}
}catch (e10224){if((e10224 instanceof Object))
{var ex__6263__auto__ = e10224;var statearr_10225_10230 = state_10215;(statearr_10225_10230[5] = ex__6263__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10215);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10224;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6261__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10231 = state_10215;
state_10215 = G__10231;
continue;
}
} else
{return ret_value__6261__auto__;
}
break;
}
});
state_machine__6260__auto__ = function(state_10215){
switch(arguments.length){
case 0:
return state_machine__6260__auto____0.call(this);
case 1:
return state_machine__6260__auto____1.call(this,state_10215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6260__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6260__auto____0;
state_machine__6260__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6260__auto____1;
return state_machine__6260__auto__;
})()
;})(switch__6259__auto__,c__6274__auto___10227,out))
})();var state__6276__auto__ = (function (){var statearr_10226 = f__6275__auto__.call(null);(statearr_10226[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6274__auto___10227);
return statearr_10226;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6276__auto__);
});})(c__6274__auto___10227,out))
);
return out;
});
flappy_bird_demo.core.px = (function px(n){return [cljs.core.str(n),cljs.core.str("px")].join('');
});
flappy_bird_demo.core.render_border = (function render_border(border_x){return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-position-x","background-position-x",2570033733),flappy_bird_demo.core.px.call(null,border_x)], null)], null);
});
flappy_bird_demo.core.render_bird = (function render_bird(p__10232){var map__10235 = p__10232;var map__10235__$1 = ((cljs.core.seq_QMARK_.call(null,map__10235))?cljs.core.apply.call(null,cljs.core.hash_map,map__10235):map__10235);var state = map__10235__$1;var bird_action = cljs.core.get.call(null,map__10235__$1,new cljs.core.Keyword(null,"bird-action","bird-action",4298220860));var bird_tilt = cljs.core.get.call(null,map__10235__$1,new cljs.core.Keyword(null,"bird-tilt","bird-tilt",3587722947));var bird_y = cljs.core.get.call(null,map__10235__$1,new cljs.core.Keyword(null,"bird-y","bird-y",3920024535));return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"left","left",1017222009),flappy_bird_demo.core.px.call(null,flappy_bird_demo.core.bird_x),new cljs.core.Keyword(null,"top","top",1014019271),flappy_bird_demo.core.px.call(null,bird_y),new cljs.core.Keyword(null,"width","width",1127031096),flappy_bird_demo.core.px.call(null,flappy_bird_demo.core.bird_width),new cljs.core.Keyword(null,"height","height",4087841945),flappy_bird_demo.core.px.call(null,flappy_bird_demo.core.bird_height),new cljs.core.Keyword(null,"background","background",3976677536),(function (){var G__10236 = bird_action;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"flapping","flapping",2636952025),G__10236))
{return "url(./imgs/flappy-flapping.gif)";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"falling","falling",4225056249),G__10236))
{return "url(./imgs/flappy-base.png)";
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(bird_action)].join('')));
} else
{return null;
}
}
}
})(),new cljs.core.Keyword(null,"-webkit-transform","-webkit-transform",2944012288),[cljs.core.str("rotate("),cljs.core.str(bird_tilt),cljs.core.str("deg)")].join('')], null)], null);
});
flappy_bird_demo.core.render_gap = (function render_gap(p__10237){var map__10239 = p__10237;var map__10239__$1 = ((cljs.core.seq_QMARK_.call(null,map__10239))?cljs.core.apply.call(null,cljs.core.hash_map,map__10239):map__10239);var y = cljs.core.get.call(null,map__10239__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__10239__$1,new cljs.core.Keyword(null,"x","x",1013904362));var upper_pillar_y = y;var lower_pillar_y = ((flappy_bird_demo.core.board_bottom - y) - flappy_bird_demo.core.gap_height);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pillars","div.pillars",2012260766),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pillar.pillar-upper","div.pillar.pillar-upper",1676414744),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left","left",1017222009),flappy_bird_demo.core.px.call(null,x),new cljs.core.Keyword(null,"height","height",4087841945),flappy_bird_demo.core.px.call(null,upper_pillar_y),new cljs.core.Keyword(null,"width","width",1127031096),flappy_bird_demo.core.px.call(null,flappy_bird_demo.core.gap_width)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pillar.pillar-lower","div.pillar.pillar-lower",1668079991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left","left",1017222009),flappy_bird_demo.core.px.call(null,x),new cljs.core.Keyword(null,"height","height",4087841945),flappy_bird_demo.core.px.call(null,lower_pillar_y),new cljs.core.Keyword(null,"width","width",1127031096),flappy_bird_demo.core.px.call(null,flappy_bird_demo.core.gap_width)], null)], null)], null)], null);
});
flappy_bird_demo.core.game_view = (function game_view(app,owner){if(typeof flappy_bird_demo.core.t10270 !== 'undefined')
{} else
{
/**
* @constructor
*/
flappy_bird_demo.core.t10270 = (function (owner,app,game_view,meta10271){
this.owner = owner;
this.app = app;
this.game_view = game_view;
this.meta10271 = meta10271;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
flappy_bird_demo.core.t10270.cljs$lang$type = true;
flappy_bird_demo.core.t10270.cljs$lang$ctorStr = "flappy-bird-demo.core/t10270";
flappy_bird_demo.core.t10270.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"flappy-bird-demo.core/t10270");
});
flappy_bird_demo.core.t10270.prototype.om$core$IRender$ = true;
flappy_bird_demo.core.t10270.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var map__10273 = self__.app;var map__10273__$1 = ((cljs.core.seq_QMARK_.call(null,map__10273))?cljs.core.apply.call(null,cljs.core.hash_map,map__10273):map__10273);var border_x = cljs.core.get.call(null,map__10273__$1,new cljs.core.Keyword(null,"border-x","border-x",3098481289));var gaps = cljs.core.get.call(null,map__10273__$1,new cljs.core.Keyword(null,"gaps","gaps",1017069519));var score = cljs.core.get.call(null,map__10273__$1,new cljs.core.Keyword(null,"score","score",1123168772));var status = cljs.core.get.call(null,map__10273__$1,new cljs.core.Keyword(null,"status","status",4416389988));return React.DOM.div({"className": "board", "onMouseDown": ((function (map__10273,map__10273__$1,border_x,gaps,score,status,___$1){
return (function (e){flappy_bird_demo.core.input_jump.call(null,self__.app);
return e.preventDefault();
});})(map__10273,map__10273__$1,border_x,gaps,score,status,___$1))
},((cljs.core._EQ_.call(null,status,new cljs.core.Keyword(null,"playing","playing",520340384)))?(function (){var attrs10277 = score;if(cljs.core.map_QMARK_.call(null,attrs10277))
{return React.DOM.h1(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["score"], null)], null),attrs10277)),null);
} else
{return React.DOM.h1({"className": "score"},sablono.interpreter.interpret.call(null,attrs10277));
}
})():null),((cljs.core._EQ_.call(null,status,new cljs.core.Keyword(null,"dead","dead",1016983510)))?React.DOM.a({"className": "start-button", "onClick": ((function (map__10273,map__10273__$1,border_x,gaps,score,status,___$1){
return (function (){return flappy_bird_demo.core.input_restart.call(null,self__.app);
});})(map__10273,map__10273__$1,border_x,gaps,score,status,___$1))
},"RESTART"):React.DOM.span(null)),(function (){var attrs10274 = flappy_bird_demo.core.render_bird.call(null,self__.app);if(cljs.core.map_QMARK_.call(null,attrs10274))
{return React.DOM.div(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flappy"], null)], null),attrs10274)),null);
} else
{return React.DOM.div({"className": "flappy"},sablono.interpreter.interpret.call(null,attrs10274));
}
})(),(function (){var attrs10275 = cljs.core.map.call(null,flappy_bird_demo.core.render_gap,gaps);if(cljs.core.map_QMARK_.call(null,attrs10275))
{return React.DOM.div(sablono.interpreter.attributes.call(null,attrs10275),null);
} else
{return React.DOM.div(null,sablono.interpreter.interpret.call(null,attrs10275));
}
})(),(function (){var attrs10276 = flappy_bird_demo.core.render_border.call(null,border_x);if(cljs.core.map_QMARK_.call(null,attrs10276))
{return React.DOM.div(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["scrolling-border"], null)], null),attrs10276)),null);
} else
{return React.DOM.div({"className": "scrolling-border"},sablono.interpreter.interpret.call(null,attrs10276));
}
})());
});
flappy_bird_demo.core.t10270.prototype.om$core$IDidMount$ = true;
flappy_bird_demo.core.t10270.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var time_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"time-chan","time-chan",1003883972));var c__6274__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6274__auto__,time_chan,___$1){
return (function (){var f__6275__auto__ = (function (){var switch__6259__auto__ = ((function (c__6274__auto__,time_chan,___$1){
return (function (state_10288){var state_val_10289 = (state_10288[1]);if((state_val_10289 === 4))
{var inst_10282 = (state_10288[2]);var inst_10283 = flappy_bird_demo.core.input_time.call(null,self__.app,inst_10282);var state_10288__$1 = (function (){var statearr_10290 = state_10288;(statearr_10290[7] = inst_10283);
return statearr_10290;
})();var statearr_10291_10300 = state_10288__$1;(statearr_10291_10300[2] = null);
(statearr_10291_10300[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10289 === 3))
{var inst_10286 = (state_10288[2]);var state_10288__$1 = state_10288;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10288__$1,inst_10286);
} else
{if((state_val_10289 === 2))
{var state_10288__$1 = state_10288;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10288__$1,4,time_chan);
} else
{if((state_val_10289 === 1))
{var state_10288__$1 = state_10288;var statearr_10292_10301 = state_10288__$1;(statearr_10292_10301[2] = null);
(statearr_10292_10301[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});})(c__6274__auto__,time_chan,___$1))
;return ((function (switch__6259__auto__,c__6274__auto__,time_chan,___$1){
return (function() {
var state_machine__6260__auto__ = null;
var state_machine__6260__auto____0 = (function (){var statearr_10296 = [null,null,null,null,null,null,null,null];(statearr_10296[0] = state_machine__6260__auto__);
(statearr_10296[1] = 1);
return statearr_10296;
});
var state_machine__6260__auto____1 = (function (state_10288){while(true){
var ret_value__6261__auto__ = (function (){try{while(true){
var result__6262__auto__ = switch__6259__auto__.call(null,state_10288);if(cljs.core.keyword_identical_QMARK_.call(null,result__6262__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6262__auto__;
}
break;
}
}catch (e10297){if((e10297 instanceof Object))
{var ex__6263__auto__ = e10297;var statearr_10298_10302 = state_10288;(statearr_10298_10302[5] = ex__6263__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10288);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10297;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6261__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10303 = state_10288;
state_10288 = G__10303;
continue;
}
} else
{return ret_value__6261__auto__;
}
break;
}
});
state_machine__6260__auto__ = function(state_10288){
switch(arguments.length){
case 0:
return state_machine__6260__auto____0.call(this);
case 1:
return state_machine__6260__auto____1.call(this,state_10288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6260__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6260__auto____0;
state_machine__6260__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6260__auto____1;
return state_machine__6260__auto__;
})()
;})(switch__6259__auto__,c__6274__auto__,time_chan,___$1))
})();var state__6276__auto__ = (function (){var statearr_10299 = f__6275__auto__.call(null);(statearr_10299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6274__auto__);
return statearr_10299;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6276__auto__);
});})(c__6274__auto__,time_chan,___$1))
);
return c__6274__auto__;
});
flappy_bird_demo.core.t10270.prototype.om$core$IInitState$ = true;
flappy_bird_demo.core.t10270.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"time-chan","time-chan",1003883972),flappy_bird_demo.core.time_loop.call(null)], null);
});
flappy_bird_demo.core.t10270.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10272){var self__ = this;
var _10272__$1 = this;return self__.meta10271;
});
flappy_bird_demo.core.t10270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10272,meta10271__$1){var self__ = this;
var _10272__$1 = this;return (new flappy_bird_demo.core.t10270(self__.owner,self__.app,self__.game_view,meta10271__$1));
});
flappy_bird_demo.core.__GT_t10270 = (function __GT_t10270(owner__$1,app__$1,game_view__$1,meta10271){return (new flappy_bird_demo.core.t10270(owner__$1,app__$1,game_view__$1,meta10271));
});
}
return (new flappy_bird_demo.core.t10270(owner,app,game_view,null));
});
om.core.root.call(null,flappy_bird_demo.core.game_view,flappy_bird_demo.core.game_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("board-area")], null));

//# sourceMappingURL=core.js.map