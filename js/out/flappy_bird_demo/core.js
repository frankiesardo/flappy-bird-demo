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
flappy_bird_demo.core.in_pillar_QMARK_ = (function in_pillar_QMARK_(p__24110){var map__24112 = p__24110;var map__24112__$1 = ((cljs.core.seq_QMARK_.call(null,map__24112))?cljs.core.apply.call(null,cljs.core.hash_map,map__24112):map__24112);var x = cljs.core.get.call(null,map__24112__$1,new cljs.core.Keyword(null,"x","x",1013904362));return (((flappy_bird_demo.core.bird_x + flappy_bird_demo.core.bird_width) >= x)) && ((flappy_bird_demo.core.bird_x < (x + flappy_bird_demo.core.gap_width)));
});
flappy_bird_demo.core.in_pillar_gap_QMARK_ = (function in_pillar_gap_QMARK_(bird_y,p__24113){var map__24115 = p__24113;var map__24115__$1 = ((cljs.core.seq_QMARK_.call(null,map__24115))?cljs.core.apply.call(null,cljs.core.hash_map,map__24115):map__24115);var y = cljs.core.get.call(null,map__24115__$1,new cljs.core.Keyword(null,"y","y",1013904363));return ((y < bird_y)) && (((y + flappy_bird_demo.core.gap_height) > (bird_y + flappy_bird_demo.core.bird_height)));
});
flappy_bird_demo.core.pillar_collision_QMARK_ = (function pillar_collision_QMARK_(bird_y,pillar){return (flappy_bird_demo.core.in_pillar_QMARK_.call(null,pillar)) && (!(flappy_bird_demo.core.in_pillar_gap_QMARK_.call(null,bird_y,pillar)));
});
flappy_bird_demo.core.bottom_collision_QMARK_ = (function bottom_collision_QMARK_(bird_y){return (bird_y >= (flappy_bird_demo.core.board_bottom - flappy_bird_demo.core.bird_height));
});
flappy_bird_demo.core.collision_sys = (function collision_sys(p__24117){var map__24119 = p__24117;var map__24119__$1 = ((cljs.core.seq_QMARK_.call(null,map__24119))?cljs.core.apply.call(null,cljs.core.hash_map,map__24119):map__24119);var state = map__24119__$1;var gaps = cljs.core.get.call(null,map__24119__$1,new cljs.core.Keyword(null,"gaps","gaps",1017069519));var bird_y = cljs.core.get.call(null,map__24119__$1,new cljs.core.Keyword(null,"bird-y","bird-y",3920024535));var status = cljs.core.get.call(null,map__24119__$1,new cljs.core.Keyword(null,"status","status",4416389988));if(cljs.core.not_EQ_.call(null,status,new cljs.core.Keyword(null,"playing","playing",520340384)))
{return state;
} else
{var collision = (function (){var or__7875__auto__ = flappy_bird_demo.core.bottom_collision_QMARK_.call(null,bird_y);if(or__7875__auto__)
{return or__7875__auto__;
} else
{return cljs.core.some.call(null,((function (or__7875__auto__,map__24119,map__24119__$1,state,gaps,bird_y,status){
return (function (p1__24116_SHARP_){return flappy_bird_demo.core.pillar_collision_QMARK_.call(null,bird_y,p1__24116_SHARP_);
});})(or__7875__auto__,map__24119,map__24119__$1,state,gaps,bird_y,status))
,gaps);
}
})();if(cljs.core.truth_(collision))
{return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"dead","dead",1016983510));
} else
{return state;
}
}
});
flappy_bird_demo.core.scoring_sys = (function scoring_sys(p__24120){var map__24122 = p__24120;var map__24122__$1 = ((cljs.core.seq_QMARK_.call(null,map__24122))?cljs.core.apply.call(null,cljs.core.hash_map,map__24122):map__24122);var state = map__24122__$1;var start_time = cljs.core.get.call(null,map__24122__$1,new cljs.core.Keyword(null,"start-time","start-time",3689550026));var curr_time = cljs.core.get.call(null,map__24122__$1,new cljs.core.Keyword(null,"curr-time","curr-time",1619964154));var score = (flappy_bird_demo.core.abs.call(null,flappy_bird_demo.core.floor.call(null,((((curr_time - start_time) * flappy_bird_demo.core.game_speed) - 544) / flappy_bird_demo.core.gap_spacing))) - 4);return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"score","score",1123168772),(((score < 0))?0:score));
});
flappy_bird_demo.core.action_sys = (function action_sys(p__24123){var map__24125 = p__24123;var map__24125__$1 = ((cljs.core.seq_QMARK_.call(null,map__24125))?cljs.core.apply.call(null,cljs.core.hash_map,map__24125):map__24125);var state = map__24125__$1;var bird_vy = cljs.core.get.call(null,map__24125__$1,new cljs.core.Keyword(null,"bird-vy","bird-vy",909320137));if((bird_vy > 0))
{return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"bird-action","bird-action",4298220860),new cljs.core.Keyword(null,"flapping","flapping",2636952025));
} else
{return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"bird-action","bird-action",4298220860),new cljs.core.Keyword(null,"falling","falling",4225056249));
}
});
flappy_bird_demo.core.tilting_sys = (function tilting_sys(p__24126){var map__24128 = p__24126;var map__24128__$1 = ((cljs.core.seq_QMARK_.call(null,map__24128))?cljs.core.apply.call(null,cljs.core.hash_map,map__24128):map__24128);var state = map__24128__$1;var bird_vy = cljs.core.get.call(null,map__24128__$1,new cljs.core.Keyword(null,"bird-vy","bird-vy",909320137));var angle = flappy_bird_demo.core.clamp.call(null,-30,90,(-2 * bird_vy));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"bird-tilt","bird-tilt",3587722947),angle);
});
flappy_bird_demo.core.creation_sys = (function creation_sys(p__24130){var map__24132 = p__24130;var map__24132__$1 = ((cljs.core.seq_QMARK_.call(null,map__24132))?cljs.core.apply.call(null,cljs.core.hash_map,map__24132):map__24132);var state = map__24132__$1;var gaps = cljs.core.get.call(null,map__24132__$1,new cljs.core.Keyword(null,"gaps","gaps",1017069519));var status = cljs.core.get.call(null,map__24132__$1,new cljs.core.Keyword(null,"status","status",4416389988));if(cljs.core.not_EQ_.call(null,status,new cljs.core.Keyword(null,"playing","playing",520340384)))
{return state;
} else
{if(cljs.core.empty_QMARK_.call(null,gaps))
{return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"gaps","gaps",1017069519),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [flappy_bird_demo.core.make_gap.call(null,flappy_bird_demo.core.first_gap_position)], null));
} else
{var visible_gaps = cljs.core.filterv.call(null,((function (map__24132,map__24132__$1,state,gaps,status){
return (function (p1__24129_SHARP_){return (new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p1__24129_SHARP_) > (- flappy_bird_demo.core.gap_width));
});})(map__24132,map__24132__$1,state,gaps,status))
,gaps);return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"gaps","gaps",1017069519),(((cljs.core.count.call(null,visible_gaps) >= 2))?visible_gaps:cljs.core.conj.call(null,visible_gaps,flappy_bird_demo.core.make_gap.call(null,(flappy_bird_demo.core.gap_spacing + new cljs.core.Keyword(null,"initial-x","initial-x",764907425).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,visible_gaps)))))));
}
}
});
flappy_bird_demo.core.waiting_sys = (function waiting_sys(p__24133){var map__24135 = p__24133;var map__24135__$1 = ((cljs.core.seq_QMARK_.call(null,map__24135))?cljs.core.apply.call(null,cljs.core.hash_map,map__24135):map__24135);var state = map__24135__$1;var curr_time = cljs.core.get.call(null,map__24135__$1,new cljs.core.Keyword(null,"curr-time","curr-time",1619964154));var start_time = cljs.core.get.call(null,map__24135__$1,new cljs.core.Keyword(null,"start-time","start-time",3689550026));var status = cljs.core.get.call(null,map__24135__$1,new cljs.core.Keyword(null,"status","status",4416389988));if(cljs.core.not_EQ_.call(null,status,new cljs.core.Keyword(null,"waiting","waiting",2130217407)))
{return state;
} else
{return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"bird-y","bird-y",3920024535),(flappy_bird_demo.core.bird_initial_y + (30 * Math.sin(((curr_time - start_time) / 300)))),new cljs.core.Keyword(null,"border-x","border-x",3098481289),cljs.core.mod.call(null,flappy_bird_demo.core.translate.call(null,0,flappy_bird_demo.core.game_speed,curr_time),23));
}
});
flappy_bird_demo.core.moving_sys = (function moving_sys(p__24136){var map__24140 = p__24136;var map__24140__$1 = ((cljs.core.seq_QMARK_.call(null,map__24140))?cljs.core.apply.call(null,cljs.core.hash_map,map__24140):map__24140);var state = map__24140__$1;var gaps = cljs.core.get.call(null,map__24140__$1,new cljs.core.Keyword(null,"gaps","gaps",1017069519));var bird_y = cljs.core.get.call(null,map__24140__$1,new cljs.core.Keyword(null,"bird-y","bird-y",3920024535));var bird_vy = cljs.core.get.call(null,map__24140__$1,new cljs.core.Keyword(null,"bird-vy","bird-vy",909320137));var curr_time = cljs.core.get.call(null,map__24140__$1,new cljs.core.Keyword(null,"curr-time","curr-time",1619964154));var start_time = cljs.core.get.call(null,map__24140__$1,new cljs.core.Keyword(null,"start-time","start-time",3689550026));var status = cljs.core.get.call(null,map__24140__$1,new cljs.core.Keyword(null,"status","status",4416389988));if(cljs.core.not_EQ_.call(null,status,new cljs.core.Keyword(null,"playing","playing",520340384)))
{return state;
} else
{return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"bird-y","bird-y",3920024535),(function (){var x__8189__auto__ = (bird_y - bird_vy);var y__8190__auto__ = (flappy_bird_demo.core.board_bottom - flappy_bird_demo.core.bird_height);return ((x__8189__auto__ < y__8190__auto__) ? x__8189__auto__ : y__8190__auto__);
})(),new cljs.core.Keyword(null,"border-x","border-x",3098481289),cljs.core.mod.call(null,flappy_bird_demo.core.translate.call(null,0,flappy_bird_demo.core.game_speed,curr_time),23),new cljs.core.Keyword(null,"gaps","gaps",1017069519),cljs.core.map.call(null,((function (map__24140,map__24140__$1,state,gaps,bird_y,bird_vy,curr_time,start_time,status){
return (function (p__24141){var map__24142 = p__24141;var map__24142__$1 = ((cljs.core.seq_QMARK_.call(null,map__24142))?cljs.core.apply.call(null,cljs.core.hash_map,map__24142):map__24142);var gap = map__24142__$1;var initial_x = cljs.core.get.call(null,map__24142__$1,new cljs.core.Keyword(null,"initial-x","initial-x",764907425));return cljs.core.assoc.call(null,gap,new cljs.core.Keyword(null,"x","x",1013904362),flappy_bird_demo.core.translate.call(null,initial_x,flappy_bird_demo.core.game_speed,(curr_time - start_time)));
});})(map__24140,map__24140__$1,state,gaps,bird_y,bird_vy,curr_time,start_time,status))
,gaps));
}
});
flappy_bird_demo.core.jumping_sys = (function jumping_sys(p__24143){var map__24145 = p__24143;var map__24145__$1 = ((cljs.core.seq_QMARK_.call(null,map__24145))?cljs.core.apply.call(null,cljs.core.hash_map,map__24145):map__24145);var state = map__24145__$1;var curr_time = cljs.core.get.call(null,map__24145__$1,new cljs.core.Keyword(null,"curr-time","curr-time",1619964154));var last_jump = cljs.core.get.call(null,map__24145__$1,new cljs.core.Keyword(null,"last-jump","last-jump",2980750455));if(cljs.core.not_EQ_.call(null,last_jump,curr_time))
{return state;
} else
{return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"bird-vy","bird-vy",909320137),flappy_bird_demo.core.jump_speed);
}
});
flappy_bird_demo.core.gravity_sys = (function gravity_sys(p__24146){var map__24148 = p__24146;var map__24148__$1 = ((cljs.core.seq_QMARK_.call(null,map__24148))?cljs.core.apply.call(null,cljs.core.hash_map,map__24148):map__24148);var state = map__24148__$1;var curr_time = cljs.core.get.call(null,map__24148__$1,new cljs.core.Keyword(null,"curr-time","curr-time",1619964154));var last_jump = cljs.core.get.call(null,map__24148__$1,new cljs.core.Keyword(null,"last-jump","last-jump",2980750455));var bird_vy = cljs.core.get.call(null,map__24148__$1,new cljs.core.Keyword(null,"bird-vy","bird-vy",909320137));var status = cljs.core.get.call(null,map__24148__$1,new cljs.core.Keyword(null,"status","status",4416389988));if(cljs.core.not_EQ_.call(null,status,new cljs.core.Keyword(null,"playing","playing",520340384)))
{return state;
} else
{return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"bird-vy","bird-vy",909320137),(bird_vy - ((curr_time - last_jump) * flappy_bird_demo.core.gravity)));
}
});
flappy_bird_demo.core.input_sys = (function input_sys(input_fn){var game_sys = (function (p1__24149_SHARP_){return flappy_bird_demo.core.creation_sys.call(null,flappy_bird_demo.core.scoring_sys.call(null,flappy_bird_demo.core.collision_sys.call(null,flappy_bird_demo.core.action_sys.call(null,flappy_bird_demo.core.tilting_sys.call(null,flappy_bird_demo.core.moving_sys.call(null,flappy_bird_demo.core.jumping_sys.call(null,flappy_bird_demo.core.gravity_sys.call(null,flappy_bird_demo.core.waiting_sys.call(null,input_fn.call(null,p1__24149_SHARP_))))))))));
});return cljs.core.swap_BANG_.call(null,flappy_bird_demo.core.game_state,game_sys);
});
flappy_bird_demo.core.time_loop = (function time_loop(time){flappy_bird_demo.core.input_sys.call(null,(function (p1__24150_SHARP_){return cljs.core.assoc.call(null,p1__24150_SHARP_,new cljs.core.Keyword(null,"curr-time","curr-time",1619964154),time);
}));
var c__10330__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10330__auto__){
return (function (){var f__10331__auto__ = (function (){var switch__10315__auto__ = ((function (c__10330__auto__){
return (function (state_24171){var state_val_24172 = (state_24171[1]);if((state_val_24172 === 2))
{var inst_24168 = (state_24171[2]);var inst_24169 = window.requestAnimationFrame(time_loop);var state_24171__$1 = (function (){var statearr_24173 = state_24171;(statearr_24173[7] = inst_24168);
return statearr_24173;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24171__$1,inst_24169);
} else
{if((state_val_24172 === 1))
{var inst_24166 = cljs.core.async.timeout.call(null,30);var state_24171__$1 = state_24171;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24171__$1,2,inst_24166);
} else
{return null;
}
}
});})(c__10330__auto__))
;return ((function (switch__10315__auto__,c__10330__auto__){
return (function() {
var state_machine__10316__auto__ = null;
var state_machine__10316__auto____0 = (function (){var statearr_24177 = [null,null,null,null,null,null,null,null];(statearr_24177[0] = state_machine__10316__auto__);
(statearr_24177[1] = 1);
return statearr_24177;
});
var state_machine__10316__auto____1 = (function (state_24171){while(true){
var ret_value__10317__auto__ = (function (){try{while(true){
var result__10318__auto__ = switch__10315__auto__.call(null,state_24171);if(cljs.core.keyword_identical_QMARK_.call(null,result__10318__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10318__auto__;
}
break;
}
}catch (e24178){if((e24178 instanceof Object))
{var ex__10319__auto__ = e24178;var statearr_24179_24181 = state_24171;(statearr_24179_24181[5] = ex__10319__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24171);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24178;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10317__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24182 = state_24171;
state_24171 = G__24182;
continue;
}
} else
{return ret_value__10317__auto__;
}
break;
}
});
state_machine__10316__auto__ = function(state_24171){
switch(arguments.length){
case 0:
return state_machine__10316__auto____0.call(this);
case 1:
return state_machine__10316__auto____1.call(this,state_24171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10316__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10316__auto____0;
state_machine__10316__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10316__auto____1;
return state_machine__10316__auto__;
})()
;})(switch__10315__auto__,c__10330__auto__))
})();var state__10332__auto__ = (function (){var statearr_24180 = f__10331__auto__.call(null);(statearr_24180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10330__auto__);
return statearr_24180;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10332__auto__);
});})(c__10330__auto__))
);
return c__10330__auto__;
});
flappy_bird_demo.core.jump = (function jump(){return flappy_bird_demo.core.input_sys.call(null,(function (p1__24183_SHARP_){var status = new cljs.core.Keyword(null,"status","status",4416389988).cljs$core$IFn$_invoke$arity$1(p1__24183_SHARP_);var time = new cljs.core.Keyword(null,"curr-time","curr-time",1619964154).cljs$core$IFn$_invoke$arity$1(p1__24183_SHARP_);var G__24185 = status;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"playing","playing",520340384),G__24185))
{return cljs.core.assoc.call(null,p1__24183_SHARP_,new cljs.core.Keyword(null,"last-jump","last-jump",2980750455),time);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"waiting","waiting",2130217407),G__24185))
{return cljs.core.assoc.call(null,p1__24183_SHARP_,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"playing","playing",520340384),new cljs.core.Keyword(null,"last-jump","last-jump",2980750455),time,new cljs.core.Keyword(null,"start-time","start-time",3689550026),time);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return p1__24183_SHARP_;
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
flappy_bird_demo.core.render_bird = (function render_bird(p__24186){var map__24189 = p__24186;var map__24189__$1 = ((cljs.core.seq_QMARK_.call(null,map__24189))?cljs.core.apply.call(null,cljs.core.hash_map,map__24189):map__24189);var bird_action = cljs.core.get.call(null,map__24189__$1,new cljs.core.Keyword(null,"bird-action","bird-action",4298220860));var bird_tilt = cljs.core.get.call(null,map__24189__$1,new cljs.core.Keyword(null,"bird-tilt","bird-tilt",3587722947));var bird_y = cljs.core.get.call(null,map__24189__$1,new cljs.core.Keyword(null,"bird-y","bird-y",3920024535));return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"left","left",1017222009),flappy_bird_demo.core.px.call(null,flappy_bird_demo.core.bird_x),new cljs.core.Keyword(null,"top","top",1014019271),flappy_bird_demo.core.px.call(null,bird_y),new cljs.core.Keyword(null,"width","width",1127031096),flappy_bird_demo.core.px.call(null,flappy_bird_demo.core.bird_width),new cljs.core.Keyword(null,"height","height",4087841945),flappy_bird_demo.core.px.call(null,flappy_bird_demo.core.bird_height),new cljs.core.Keyword(null,"background","background",3976677536),(function (){var G__24190 = bird_action;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"flapping","flapping",2636952025),G__24190))
{return "url(./imgs/flappy-flapping.gif)";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"falling","falling",4225056249),G__24190))
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
flappy_bird_demo.core.render_gap = (function render_gap(p__24191){var map__24193 = p__24191;var map__24193__$1 = ((cljs.core.seq_QMARK_.call(null,map__24193))?cljs.core.apply.call(null,cljs.core.hash_map,map__24193):map__24193);var y = cljs.core.get.call(null,map__24193__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__24193__$1,new cljs.core.Keyword(null,"x","x",1013904362));var upper_pillar_y = y;var lower_pillar_y = ((flappy_bird_demo.core.board_bottom - y) - flappy_bird_demo.core.gap_height);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pillars","div.pillars",2012260766),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pillar.pillar-upper","div.pillar.pillar-upper",1676414744),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left","left",1017222009),flappy_bird_demo.core.px.call(null,x),new cljs.core.Keyword(null,"height","height",4087841945),flappy_bird_demo.core.px.call(null,upper_pillar_y),new cljs.core.Keyword(null,"width","width",1127031096),flappy_bird_demo.core.px.call(null,flappy_bird_demo.core.gap_width)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pillar.pillar-lower","div.pillar.pillar-lower",1668079991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left","left",1017222009),flappy_bird_demo.core.px.call(null,x),new cljs.core.Keyword(null,"height","height",4087841945),flappy_bird_demo.core.px.call(null,lower_pillar_y),new cljs.core.Keyword(null,"width","width",1127031096),flappy_bird_demo.core.px.call(null,flappy_bird_demo.core.gap_width)], null)], null)], null)], null);
});
flappy_bird_demo.core.render_border = (function render_border(border_x){return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-position-x","background-position-x",2570033733),flappy_bird_demo.core.px.call(null,border_x)], null)], null);
});
flappy_bird_demo.core.to_html = (function to_html(p__24194){var map__24202 = p__24194;var map__24202__$1 = ((cljs.core.seq_QMARK_.call(null,map__24202))?cljs.core.apply.call(null,cljs.core.hash_map,map__24202):map__24202);var state = map__24202__$1;var border_x = cljs.core.get.call(null,map__24202__$1,new cljs.core.Keyword(null,"border-x","border-x",3098481289));var gaps = cljs.core.get.call(null,map__24202__$1,new cljs.core.Keyword(null,"gaps","gaps",1017069519));var score = cljs.core.get.call(null,map__24202__$1,new cljs.core.Keyword(null,"score","score",1123168772));var status = cljs.core.get.call(null,map__24202__$1,new cljs.core.Keyword(null,"status","status",4416389988));return React.DOM.div({"className": "board", "onMouseDown": ((function (map__24202,map__24202__$1,state,border_x,gaps,score,status){
return (function (e){flappy_bird_demo.core.jump.call(null);
return e.preventDefault();
});})(map__24202,map__24202__$1,state,border_x,gaps,score,status))
},((cljs.core._EQ_.call(null,status,new cljs.core.Keyword(null,"playing","playing",520340384)))?(function (){var attrs24206 = score;if(cljs.core.map_QMARK_.call(null,attrs24206))
{return React.DOM.h1(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["score"], null)], null),attrs24206)),null);
} else
{return React.DOM.h1({"className": "score"},sablono.interpreter.interpret.call(null,attrs24206));
}
})():null),((cljs.core._EQ_.call(null,status,new cljs.core.Keyword(null,"dead","dead",1016983510)))?React.DOM.a({"className": "start-button", "onClick": flappy_bird_demo.core.restart_game},"RESTART"):React.DOM.span(null)),(function (){var attrs24203 = flappy_bird_demo.core.render_bird.call(null,state);if(cljs.core.map_QMARK_.call(null,attrs24203))
{return React.DOM.div(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flappy"], null)], null),attrs24203)),null);
} else
{return React.DOM.div({"className": "flappy"},sablono.interpreter.interpret.call(null,attrs24203));
}
})(),(function (){var attrs24204 = cljs.core.map.call(null,flappy_bird_demo.core.render_gap,gaps);if(cljs.core.map_QMARK_.call(null,attrs24204))
{return React.DOM.div(sablono.interpreter.attributes.call(null,attrs24204),null);
} else
{return React.DOM.div(null,sablono.interpreter.interpret.call(null,attrs24204));
}
})(),(function (){var attrs24205 = flappy_bird_demo.core.render_border.call(null,border_x);if(cljs.core.map_QMARK_.call(null,attrs24205))
{return React.DOM.div(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["scrolling-border"], null)], null),attrs24205)),null);
} else
{return React.DOM.div({"className": "scrolling-border"},sablono.interpreter.interpret.call(null,attrs24205));
}
})());
});
var node_24209 = document.getElementById("board-area");flappy_bird_demo.core.render = ((function (node_24209){
return (function render(game_state){return React.renderComponent(flappy_bird_demo.core.to_html.call(null,game_state),node_24209);
});})(node_24209))
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