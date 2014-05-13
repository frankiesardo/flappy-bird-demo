// Compiled by ClojureScript 0.0-2202
goog.provide('flappy_bird_demo.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('figwheel.client');
goog.require('figwheel.client');
goog.require('sablono.core');
goog.require('sablono.core');
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
flappy_bird_demo.core.in_pillar_QMARK_ = (function in_pillar_QMARK_(p__16005){var map__16007 = p__16005;var map__16007__$1 = ((cljs.core.seq_QMARK_.call(null,map__16007))?cljs.core.apply.call(null,cljs.core.hash_map,map__16007):map__16007);var x = cljs.core.get.call(null,map__16007__$1,new cljs.core.Keyword(null,"x","x",1013904362));return (((flappy_bird_demo.core.bird_x + flappy_bird_demo.core.bird_width) >= x)) && ((flappy_bird_demo.core.bird_x < (x + flappy_bird_demo.core.gap_width)));
});
flappy_bird_demo.core.in_pillar_gap_QMARK_ = (function in_pillar_gap_QMARK_(bird_y,p__16008){var map__16010 = p__16008;var map__16010__$1 = ((cljs.core.seq_QMARK_.call(null,map__16010))?cljs.core.apply.call(null,cljs.core.hash_map,map__16010):map__16010);var y = cljs.core.get.call(null,map__16010__$1,new cljs.core.Keyword(null,"y","y",1013904363));return ((y < bird_y)) && (((y + flappy_bird_demo.core.gap_height) > (bird_y + flappy_bird_demo.core.bird_height)));
});
flappy_bird_demo.core.pillar_collision_QMARK_ = (function pillar_collision_QMARK_(bird_y,pillar){return (flappy_bird_demo.core.in_pillar_QMARK_.call(null,pillar)) && (!(flappy_bird_demo.core.in_pillar_gap_QMARK_.call(null,bird_y,pillar)));
});
flappy_bird_demo.core.bottom_collision_QMARK_ = (function bottom_collision_QMARK_(bird_y){return (bird_y >= (flappy_bird_demo.core.board_bottom - flappy_bird_demo.core.bird_height));
});
flappy_bird_demo.core.collision_sys = (function collision_sys(p__16012){var map__16014 = p__16012;var map__16014__$1 = ((cljs.core.seq_QMARK_.call(null,map__16014))?cljs.core.apply.call(null,cljs.core.hash_map,map__16014):map__16014);var state = map__16014__$1;var gaps = cljs.core.get.call(null,map__16014__$1,new cljs.core.Keyword(null,"gaps","gaps",1017069519));var bird_y = cljs.core.get.call(null,map__16014__$1,new cljs.core.Keyword(null,"bird-y","bird-y",3920024535));var status = cljs.core.get.call(null,map__16014__$1,new cljs.core.Keyword(null,"status","status",4416389988));if(cljs.core.not_EQ_.call(null,status,new cljs.core.Keyword(null,"playing","playing",520340384)))
{return state;
} else
{var collision = (function (){var or__7875__auto__ = flappy_bird_demo.core.bottom_collision_QMARK_.call(null,bird_y);if(or__7875__auto__)
{return or__7875__auto__;
} else
{return cljs.core.some.call(null,((function (or__7875__auto__,map__16014,map__16014__$1,state,gaps,bird_y,status){
return (function (p1__16011_SHARP_){return flappy_bird_demo.core.pillar_collision_QMARK_.call(null,bird_y,p1__16011_SHARP_);
});})(or__7875__auto__,map__16014,map__16014__$1,state,gaps,bird_y,status))
,gaps);
}
})();if(cljs.core.truth_(collision))
{return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"dead","dead",1016983510));
} else
{return state;
}
}
});
flappy_bird_demo.core.scoring_sys = (function scoring_sys(p__16015){var map__16017 = p__16015;var map__16017__$1 = ((cljs.core.seq_QMARK_.call(null,map__16017))?cljs.core.apply.call(null,cljs.core.hash_map,map__16017):map__16017);var state = map__16017__$1;var start_time = cljs.core.get.call(null,map__16017__$1,new cljs.core.Keyword(null,"start-time","start-time",3689550026));var curr_time = cljs.core.get.call(null,map__16017__$1,new cljs.core.Keyword(null,"curr-time","curr-time",1619964154));var score = (flappy_bird_demo.core.abs.call(null,flappy_bird_demo.core.floor.call(null,((((curr_time - start_time) * flappy_bird_demo.core.game_speed) - 544) / flappy_bird_demo.core.gap_spacing))) - 4);return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"score","score",1123168772),(((score < 0))?0:score));
});
flappy_bird_demo.core.action_sys = (function action_sys(p__16018){var map__16020 = p__16018;var map__16020__$1 = ((cljs.core.seq_QMARK_.call(null,map__16020))?cljs.core.apply.call(null,cljs.core.hash_map,map__16020):map__16020);var state = map__16020__$1;var bird_vy = cljs.core.get.call(null,map__16020__$1,new cljs.core.Keyword(null,"bird-vy","bird-vy",909320137));if((bird_vy > 0))
{return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"bird-action","bird-action",4298220860),new cljs.core.Keyword(null,"flapping","flapping",2636952025));
} else
{return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"bird-action","bird-action",4298220860),new cljs.core.Keyword(null,"falling","falling",4225056249));
}
});
flappy_bird_demo.core.tilting_sys = (function tilting_sys(p__16021){var map__16023 = p__16021;var map__16023__$1 = ((cljs.core.seq_QMARK_.call(null,map__16023))?cljs.core.apply.call(null,cljs.core.hash_map,map__16023):map__16023);var state = map__16023__$1;var bird_vy = cljs.core.get.call(null,map__16023__$1,new cljs.core.Keyword(null,"bird-vy","bird-vy",909320137));var angle = flappy_bird_demo.core.clamp.call(null,-30,90,(-2 * bird_vy));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"bird-tilt","bird-tilt",3587722947),angle);
});
flappy_bird_demo.core.creation_sys = (function creation_sys(p__16025){var map__16027 = p__16025;var map__16027__$1 = ((cljs.core.seq_QMARK_.call(null,map__16027))?cljs.core.apply.call(null,cljs.core.hash_map,map__16027):map__16027);var state = map__16027__$1;var gaps = cljs.core.get.call(null,map__16027__$1,new cljs.core.Keyword(null,"gaps","gaps",1017069519));var status = cljs.core.get.call(null,map__16027__$1,new cljs.core.Keyword(null,"status","status",4416389988));if(cljs.core.not_EQ_.call(null,status,new cljs.core.Keyword(null,"playing","playing",520340384)))
{return state;
} else
{if(cljs.core.empty_QMARK_.call(null,gaps))
{return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"gaps","gaps",1017069519),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [flappy_bird_demo.core.make_gap.call(null,flappy_bird_demo.core.first_gap_position)], null));
} else
{var visible_gaps = cljs.core.filterv.call(null,((function (map__16027,map__16027__$1,state,gaps,status){
return (function (p1__16024_SHARP_){return (new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p1__16024_SHARP_) > (- flappy_bird_demo.core.gap_width));
});})(map__16027,map__16027__$1,state,gaps,status))
,gaps);return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"gaps","gaps",1017069519),(((cljs.core.count.call(null,visible_gaps) >= 2))?visible_gaps:cljs.core.conj.call(null,visible_gaps,flappy_bird_demo.core.make_gap.call(null,(flappy_bird_demo.core.gap_spacing + new cljs.core.Keyword(null,"initial-x","initial-x",764907425).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,visible_gaps)))))));
}
}
});
flappy_bird_demo.core.waiting_sys = (function waiting_sys(p__16028){var map__16030 = p__16028;var map__16030__$1 = ((cljs.core.seq_QMARK_.call(null,map__16030))?cljs.core.apply.call(null,cljs.core.hash_map,map__16030):map__16030);var state = map__16030__$1;var curr_time = cljs.core.get.call(null,map__16030__$1,new cljs.core.Keyword(null,"curr-time","curr-time",1619964154));var start_time = cljs.core.get.call(null,map__16030__$1,new cljs.core.Keyword(null,"start-time","start-time",3689550026));var status = cljs.core.get.call(null,map__16030__$1,new cljs.core.Keyword(null,"status","status",4416389988));if(cljs.core.not_EQ_.call(null,status,new cljs.core.Keyword(null,"waiting","waiting",2130217407)))
{return state;
} else
{return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"bird-y","bird-y",3920024535),(flappy_bird_demo.core.bird_initial_y + (30 * Math.sin(((curr_time - start_time) / 300)))),new cljs.core.Keyword(null,"border-x","border-x",3098481289),cljs.core.mod.call(null,flappy_bird_demo.core.translate.call(null,0,flappy_bird_demo.core.game_speed,curr_time),23));
}
});
flappy_bird_demo.core.moving_sys = (function moving_sys(p__16031){var map__16035 = p__16031;var map__16035__$1 = ((cljs.core.seq_QMARK_.call(null,map__16035))?cljs.core.apply.call(null,cljs.core.hash_map,map__16035):map__16035);var state = map__16035__$1;var gaps = cljs.core.get.call(null,map__16035__$1,new cljs.core.Keyword(null,"gaps","gaps",1017069519));var bird_y = cljs.core.get.call(null,map__16035__$1,new cljs.core.Keyword(null,"bird-y","bird-y",3920024535));var bird_vy = cljs.core.get.call(null,map__16035__$1,new cljs.core.Keyword(null,"bird-vy","bird-vy",909320137));var curr_time = cljs.core.get.call(null,map__16035__$1,new cljs.core.Keyword(null,"curr-time","curr-time",1619964154));var start_time = cljs.core.get.call(null,map__16035__$1,new cljs.core.Keyword(null,"start-time","start-time",3689550026));var status = cljs.core.get.call(null,map__16035__$1,new cljs.core.Keyword(null,"status","status",4416389988));if(cljs.core.not_EQ_.call(null,status,new cljs.core.Keyword(null,"playing","playing",520340384)))
{return state;
} else
{return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"bird-y","bird-y",3920024535),(function (){var x__8189__auto__ = (bird_y - bird_vy);var y__8190__auto__ = (flappy_bird_demo.core.board_bottom - flappy_bird_demo.core.bird_height);return ((x__8189__auto__ < y__8190__auto__) ? x__8189__auto__ : y__8190__auto__);
})(),new cljs.core.Keyword(null,"border-x","border-x",3098481289),cljs.core.mod.call(null,flappy_bird_demo.core.translate.call(null,0,flappy_bird_demo.core.game_speed,curr_time),23),new cljs.core.Keyword(null,"gaps","gaps",1017069519),cljs.core.map.call(null,((function (map__16035,map__16035__$1,state,gaps,bird_y,bird_vy,curr_time,start_time,status){
return (function (p__16036){var map__16037 = p__16036;var map__16037__$1 = ((cljs.core.seq_QMARK_.call(null,map__16037))?cljs.core.apply.call(null,cljs.core.hash_map,map__16037):map__16037);var gap = map__16037__$1;var initial_x = cljs.core.get.call(null,map__16037__$1,new cljs.core.Keyword(null,"initial-x","initial-x",764907425));return cljs.core.assoc.call(null,gap,new cljs.core.Keyword(null,"x","x",1013904362),flappy_bird_demo.core.translate.call(null,initial_x,flappy_bird_demo.core.game_speed,(curr_time - start_time)));
});})(map__16035,map__16035__$1,state,gaps,bird_y,bird_vy,curr_time,start_time,status))
,gaps));
}
});
flappy_bird_demo.core.jumping_sys = (function jumping_sys(p__16038){var map__16040 = p__16038;var map__16040__$1 = ((cljs.core.seq_QMARK_.call(null,map__16040))?cljs.core.apply.call(null,cljs.core.hash_map,map__16040):map__16040);var state = map__16040__$1;var curr_time = cljs.core.get.call(null,map__16040__$1,new cljs.core.Keyword(null,"curr-time","curr-time",1619964154));var last_jump = cljs.core.get.call(null,map__16040__$1,new cljs.core.Keyword(null,"last-jump","last-jump",2980750455));if(cljs.core.not_EQ_.call(null,last_jump,curr_time))
{return state;
} else
{return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"bird-vy","bird-vy",909320137),flappy_bird_demo.core.jump_speed);
}
});
flappy_bird_demo.core.gravity_sys = (function gravity_sys(p__16041){var map__16043 = p__16041;var map__16043__$1 = ((cljs.core.seq_QMARK_.call(null,map__16043))?cljs.core.apply.call(null,cljs.core.hash_map,map__16043):map__16043);var state = map__16043__$1;var curr_time = cljs.core.get.call(null,map__16043__$1,new cljs.core.Keyword(null,"curr-time","curr-time",1619964154));var last_jump = cljs.core.get.call(null,map__16043__$1,new cljs.core.Keyword(null,"last-jump","last-jump",2980750455));var bird_vy = cljs.core.get.call(null,map__16043__$1,new cljs.core.Keyword(null,"bird-vy","bird-vy",909320137));var status = cljs.core.get.call(null,map__16043__$1,new cljs.core.Keyword(null,"status","status",4416389988));if(cljs.core.not_EQ_.call(null,status,new cljs.core.Keyword(null,"playing","playing",520340384)))
{return state;
} else
{return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"bird-vy","bird-vy",909320137),(bird_vy - ((curr_time - last_jump) * flappy_bird_demo.core.gravity)));
}
});
flappy_bird_demo.core.input_sys = (function input_sys(input_fn){var game_sys = (function (p1__16044_SHARP_){return flappy_bird_demo.core.creation_sys.call(null,flappy_bird_demo.core.scoring_sys.call(null,flappy_bird_demo.core.collision_sys.call(null,flappy_bird_demo.core.action_sys.call(null,flappy_bird_demo.core.tilting_sys.call(null,flappy_bird_demo.core.moving_sys.call(null,flappy_bird_demo.core.jumping_sys.call(null,flappy_bird_demo.core.gravity_sys.call(null,flappy_bird_demo.core.waiting_sys.call(null,input_fn.call(null,p1__16044_SHARP_))))))))));
});return cljs.core.swap_BANG_.call(null,flappy_bird_demo.core.game_state,game_sys);
});
flappy_bird_demo.core.time_loop = (function time_loop(time){flappy_bird_demo.core.input_sys.call(null,(function (p1__16045_SHARP_){return cljs.core.assoc.call(null,p1__16045_SHARP_,new cljs.core.Keyword(null,"curr-time","curr-time",1619964154),time);
}));
var c__10330__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10330__auto__){
return (function (){var f__10331__auto__ = (function (){var switch__10315__auto__ = ((function (c__10330__auto__){
return (function (state_16066){var state_val_16067 = (state_16066[1]);if((state_val_16067 === 2))
{var inst_16063 = (state_16066[2]);var inst_16064 = window.requestAnimationFrame(time_loop);var state_16066__$1 = (function (){var statearr_16068 = state_16066;(statearr_16068[7] = inst_16063);
return statearr_16068;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16066__$1,inst_16064);
} else
{if((state_val_16067 === 1))
{var inst_16061 = cljs.core.async.timeout.call(null,30);var state_16066__$1 = state_16066;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16066__$1,2,inst_16061);
} else
{return null;
}
}
});})(c__10330__auto__))
;return ((function (switch__10315__auto__,c__10330__auto__){
return (function() {
var state_machine__10316__auto__ = null;
var state_machine__10316__auto____0 = (function (){var statearr_16072 = [null,null,null,null,null,null,null,null];(statearr_16072[0] = state_machine__10316__auto__);
(statearr_16072[1] = 1);
return statearr_16072;
});
var state_machine__10316__auto____1 = (function (state_16066){while(true){
var ret_value__10317__auto__ = (function (){try{while(true){
var result__10318__auto__ = switch__10315__auto__.call(null,state_16066);if(cljs.core.keyword_identical_QMARK_.call(null,result__10318__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10318__auto__;
}
break;
}
}catch (e16073){if((e16073 instanceof Object))
{var ex__10319__auto__ = e16073;var statearr_16074_16076 = state_16066;(statearr_16074_16076[5] = ex__10319__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16066);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16073;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10317__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16077 = state_16066;
state_16066 = G__16077;
continue;
}
} else
{return ret_value__10317__auto__;
}
break;
}
});
state_machine__10316__auto__ = function(state_16066){
switch(arguments.length){
case 0:
return state_machine__10316__auto____0.call(this);
case 1:
return state_machine__10316__auto____1.call(this,state_16066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10316__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10316__auto____0;
state_machine__10316__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10316__auto____1;
return state_machine__10316__auto__;
})()
;})(switch__10315__auto__,c__10330__auto__))
})();var state__10332__auto__ = (function (){var statearr_16075 = f__10331__auto__.call(null);(statearr_16075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10330__auto__);
return statearr_16075;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10332__auto__);
});})(c__10330__auto__))
);
return c__10330__auto__;
});
flappy_bird_demo.core.jump = (function jump(){return flappy_bird_demo.core.input_sys.call(null,(function (p1__16078_SHARP_){var status = new cljs.core.Keyword(null,"status","status",4416389988).cljs$core$IFn$_invoke$arity$1(p1__16078_SHARP_);var time = new cljs.core.Keyword(null,"curr-time","curr-time",1619964154).cljs$core$IFn$_invoke$arity$1(p1__16078_SHARP_);var G__16080 = status;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"playing","playing",520340384),G__16080))
{return cljs.core.assoc.call(null,p1__16078_SHARP_,new cljs.core.Keyword(null,"last-jump","last-jump",2980750455),time);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"waiting","waiting",2130217407),G__16080))
{return cljs.core.assoc.call(null,p1__16078_SHARP_,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"playing","playing",520340384),new cljs.core.Keyword(null,"last-jump","last-jump",2980750455),time,new cljs.core.Keyword(null,"start-time","start-time",3689550026),time);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return p1__16078_SHARP_;
} else
{return null;
}
}
}
}));
});
flappy_bird_demo.core.restart_game = (function restart_game(){return cljs.core.reset_BANG_.call(null,flappy_bird_demo.core.game_state,flappy_bird_demo.core.initial_state);
});
flappy_bird_demo.core.px = (function px(n){return [cljs.core.str(n),cljs.core.str("px")].join('');
});
flappy_bird_demo.core.render_bird = (function render_bird(p__16081){var map__16084 = p__16081;var map__16084__$1 = ((cljs.core.seq_QMARK_.call(null,map__16084))?cljs.core.apply.call(null,cljs.core.hash_map,map__16084):map__16084);var bird_action = cljs.core.get.call(null,map__16084__$1,new cljs.core.Keyword(null,"bird-action","bird-action",4298220860));var bird_tilt = cljs.core.get.call(null,map__16084__$1,new cljs.core.Keyword(null,"bird-tilt","bird-tilt",3587722947));var bird_y = cljs.core.get.call(null,map__16084__$1,new cljs.core.Keyword(null,"bird-y","bird-y",3920024535));return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"left","left",1017222009),flappy_bird_demo.core.px.call(null,flappy_bird_demo.core.bird_x),new cljs.core.Keyword(null,"top","top",1014019271),flappy_bird_demo.core.px.call(null,bird_y),new cljs.core.Keyword(null,"width","width",1127031096),flappy_bird_demo.core.px.call(null,flappy_bird_demo.core.bird_width),new cljs.core.Keyword(null,"height","height",4087841945),flappy_bird_demo.core.px.call(null,flappy_bird_demo.core.bird_height),new cljs.core.Keyword(null,"background","background",3976677536),(function (){var G__16085 = bird_action;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"flapping","flapping",2636952025),G__16085))
{return "url(./imgs/flappy-flapping.gif)";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"falling","falling",4225056249),G__16085))
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
flappy_bird_demo.core.render_gap = (function render_gap(p__16086){var map__16088 = p__16086;var map__16088__$1 = ((cljs.core.seq_QMARK_.call(null,map__16088))?cljs.core.apply.call(null,cljs.core.hash_map,map__16088):map__16088);var y = cljs.core.get.call(null,map__16088__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__16088__$1,new cljs.core.Keyword(null,"x","x",1013904362));var upper_pillar_y = y;var lower_pillar_y = ((flappy_bird_demo.core.board_bottom - y) - flappy_bird_demo.core.gap_height);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pillars","div.pillars",2012260766),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pillar.pillar-upper","div.pillar.pillar-upper",1676414744),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left","left",1017222009),flappy_bird_demo.core.px.call(null,x),new cljs.core.Keyword(null,"height","height",4087841945),flappy_bird_demo.core.px.call(null,upper_pillar_y),new cljs.core.Keyword(null,"width","width",1127031096),flappy_bird_demo.core.px.call(null,flappy_bird_demo.core.gap_width)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pillar.pillar-lower","div.pillar.pillar-lower",1668079991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left","left",1017222009),flappy_bird_demo.core.px.call(null,x),new cljs.core.Keyword(null,"height","height",4087841945),flappy_bird_demo.core.px.call(null,lower_pillar_y),new cljs.core.Keyword(null,"width","width",1127031096),flappy_bird_demo.core.px.call(null,flappy_bird_demo.core.gap_width)], null)], null)], null)], null);
});
flappy_bird_demo.core.render_border = (function render_border(border_x){return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-position-x","background-position-x",2570033733),flappy_bird_demo.core.px.call(null,border_x)], null)], null);
});
flappy_bird_demo.core.to_html = (function to_html(p__16089){var map__16097 = p__16089;var map__16097__$1 = ((cljs.core.seq_QMARK_.call(null,map__16097))?cljs.core.apply.call(null,cljs.core.hash_map,map__16097):map__16097);var state = map__16097__$1;var border_x = cljs.core.get.call(null,map__16097__$1,new cljs.core.Keyword(null,"border-x","border-x",3098481289));var gaps = cljs.core.get.call(null,map__16097__$1,new cljs.core.Keyword(null,"gaps","gaps",1017069519));var score = cljs.core.get.call(null,map__16097__$1,new cljs.core.Keyword(null,"score","score",1123168772));var status = cljs.core.get.call(null,map__16097__$1,new cljs.core.Keyword(null,"status","status",4416389988));return React.DOM.div({"className": "board", "onMouseDown": ((function (map__16097,map__16097__$1,state,border_x,gaps,score,status){
return (function (e){flappy_bird_demo.core.jump.call(null);
return e.preventDefault();
});})(map__16097,map__16097__$1,state,border_x,gaps,score,status))
},((cljs.core._EQ_.call(null,status,new cljs.core.Keyword(null,"playing","playing",520340384)))?(function (){var attrs16101 = score;if(cljs.core.map_QMARK_.call(null,attrs16101))
{return React.DOM.h1(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["score"], null)], null),attrs16101)),null);
} else
{return React.DOM.h1({"className": "score"},sablono.interpreter.interpret.call(null,attrs16101));
}
})():null),((cljs.core._EQ_.call(null,status,new cljs.core.Keyword(null,"dead","dead",1016983510)))?React.DOM.a({"className": "start-button", "onClick": flappy_bird_demo.core.restart_game},"RESTART"):React.DOM.span(null)),(function (){var attrs16098 = flappy_bird_demo.core.render_bird.call(null,state);if(cljs.core.map_QMARK_.call(null,attrs16098))
{return React.DOM.div(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flappy"], null)], null),attrs16098)),null);
} else
{return React.DOM.div({"className": "flappy"},sablono.interpreter.interpret.call(null,attrs16098));
}
})(),(function (){var attrs16099 = cljs.core.map.call(null,flappy_bird_demo.core.render_gap,gaps);if(cljs.core.map_QMARK_.call(null,attrs16099))
{return React.DOM.div(sablono.interpreter.attributes.call(null,attrs16099),null);
} else
{return React.DOM.div(null,sablono.interpreter.interpret.call(null,attrs16099));
}
})(),(function (){var attrs16100 = flappy_bird_demo.core.render_border.call(null,border_x);if(cljs.core.map_QMARK_.call(null,attrs16100))
{return React.DOM.div(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["scrolling-border"], null)], null),attrs16100)),null);
} else
{return React.DOM.div({"className": "scrolling-border"},sablono.interpreter.interpret.call(null,attrs16100));
}
})());
});
var node_16104 = document.getElementById("board-area");flappy_bird_demo.core.render = ((function (node_16104){
return (function render(game_state){return React.renderComponent(flappy_bird_demo.core.to_html.call(null,game_state),node_16104);
});})(node_16104))
;
cljs.core.add_watch.call(null,flappy_bird_demo.core.game_state,new cljs.core.Keyword(null,"renderer","renderer",519058485),(function (_,___$1,___$2,new_state){return flappy_bird_demo.core.render.call(null,new_state);
}));
flappy_bird_demo.core.start_game = (function start_game(){return window.requestAnimationFrame((function (time){cljs.core.reset_BANG_.call(null,flappy_bird_demo.core.game_state,cljs.core.assoc.call(null,flappy_bird_demo.core.initial_state,new cljs.core.Keyword(null,"start-time","start-time",3689550026),time));
return flappy_bird_demo.core.time_loop.call(null,time);
}));
});
flappy_bird_demo.core.start_game.call(null);
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989),(function (){return null;
}));

//# sourceMappingURL=core.js.map