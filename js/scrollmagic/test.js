/* ScrollMagic v1.0.7 | (c) Jan Paepke, @janpaepke | license & info: http://janpaepke.github.io/ScrollMagic */
!function($) {
    ScrollMagic = function(e) {
        "use strict";
        var t = "ScrollMagic", n = {
            container: window,
            vertical: !0,
            globalSceneOptions: {},
            loglevel: 2
        }, i = this, o = $.extend({}, n, e), s = [], a=!1, l = 0, c = "PAUSED", g=!0, u = 0, d=!1, f=!0, h = function() {
            if ($.each(o, function(e) {
                n.hasOwnProperty(e) || (m(2, 'WARNING: Unknown option "' + e + '"'), delete o[e])
            }), o.container = $(o.container).first()
                , 0 === o.container.length)return void m(1, "ERROR creating object ScrollMagic: No valid scroll container supplied");
            g=!$.contains(document, o.container.get(0)), u = o.vertical ? o.container.height() : o.container.width(), o.container.on("scroll resize", w);
            try {
                TweenLite.ticker.addEventListener("tick", v), d=!0
            } catch (e) {
                o.container.on("scroll resize", v), d=!1
            }
            m(3, "added new " + t + " controller")
        }, p = function() {
            return o.vertical ? o.container.scrollTop() : o.container.scrollLeft()
        }, v = function() {
            if (a && f) {
                var e = $.isArray(a) ? a: s, t = l;
                l = i.scrollPos();
                var r = l - t;
                c = 0 === r ? "PAUSED" : r > 0 ? "FORWARD" : "REVERSE", i.updateScene(e, !0), 0 === e.length && o.loglevel >= 3 && m(3, "updating 0 Scenes (nothing added to controller)"), a=!1
            }
        }, w = function(e) {
            "resize" == e.type && (u = o.vertical ? o.container.height() : o.container.width()), a=!0
        }, m = function(e) {
            if (o.loglevel >= e) {
                var n = "(" + t + ") ->", i = Array.prototype.splice.call(arguments, 1), s = Function.prototype.bind.call(r, window);
                i.unshift(e, n), s.apply(window, i)
            }
        };
        return this.addScene = function(e) {
            return $.isArray(e) ? $.each(e, function(e, t) {
                i.addScene(t)
            }) : e.parent() != i ? e.addTo(i) : -1 == $.inArray(s, e) && (s.push(e), $.each(o.globalSceneOptions, function(t, r) {
                e[t] && e[t].call(e, r)
            }), m(3, "added Scene (" + s.length + " total)")), i
        }, this.removeScene = function(e) {
            if ($.isArray(e))
                $.each(e, function(e, t) {
                    i.removeScene(t)
                });
            else {
                var t = $.inArray(e, s);
                t>-1 && (s.splice(t, 1), e.remove(), m(3, "removed Scene (" + s.length + " total)"))
            }
            return i
        }, this.updateScene = function(e, t) {
            return $.isArray(e) ? $.each(e, function(r, n) {
                m(3, "updating Scene " + (r + 1) + "/" + e.length + " (" + s.length + " total)"), i.updateScene(n, t)
            }) : t ? e.update(!0) : ($.isArray(a) || (a = []), -1 == $.inArray(e, a) && a.push(e)), i
        }, this.update = function(e) {
            return w({
                type: "resize"
            }), e && v(), i
        }, this.scrollPos = function(e) {
            return arguments.length ? ($.isFunction(e) || (e = function() {
                return e
            }), p = e, i) : p.call(i)
        }, this.info = function(e) {
            var t = {
                size: u,
                vertical: o.vertical,
                scrollPos: l,
                scrollDirection: c,
                container: o.container,
                isDocument: g
            };
            return arguments.length ? void 0 !== t[e] ? t[e] : void m(1, 'ERROR: option "' + e + '" is not available') : t
        }, this.loglevel = function(e) {
            return arguments.length ? (o.loglevel != e && (o.loglevel = e), i) : o.loglevel
        }, this.enabled = function(e) {
            return arguments.length ? (f != e && (f=!!e, i.updateScene(s, !0)), i) : f
        }, this.destroy = function(e) {
            for (; s.length > 0;) {
                var r = s[s.length-1];
                r.destroy(e)
            }
            return o.container.off("scroll resize", w), d ? TweenLite.ticker.removeEventListener("tick", v) : o.container.off("scroll resize", v), m(3, "destroyed " + t + " (reset: " + (e ? "true" : "false") + ")"), null
        }, h(), i
    }, ScrollScene = function(e) {
        "use strict";
        var t, i, o, s, a = ["onCenter", "onEnter", "onLeave"], l = "ScrollScene", c = {
            duration: 0,
            offset: 0,
            triggerElement: null,
            triggerHook: a[0],
            reverse: !0,
            tweenChanges: !1,
            loglevel: 2
        }, g = this, u = $.extend({}, c, e), d = "BEFORE", f = 0, h = {
            start: 0,
            end: 0
        }, p=!0, v = function() {
            m(), g.on("change.internal", function(e) {
                m(), "loglevel" != e.what && "tweenChanges" != e.what && ("reverse" != e.what && null === u.triggerElement && R(), g.update(), ("DURING" !== d && "duration" == e.what || "AFTER" === d && 0 === u.duration) && y())
            }), g.on("progress.internal", function() {
                E(), y()
            })
        }, w = function(e) {
            if (u.loglevel >= e) {
                var t = "(" + l + ") ->", n = Array.prototype.splice.call(arguments, 1), i = Function.prototype.bind.call(r, window);
                n.unshift(e, t), i.apply(window, n)
            }
        }, m = function() {
            if ($.each(u, function(e) {
                c.hasOwnProperty(e) || (w(2, 'WARNING: Unknown option "' + e + '"'), delete u[e])
            }), u.duration = parseFloat(u.duration)
                , (!$.isNumeric(u.duration) || u.duration < 0) && (w(1, 'ERROR: Invalid value for option "duration":', u.duration), u.duration = c.duration), u.offset = parseFloat(u.offset), $.isNumeric(u.offset) || (w(1, 'ERROR: Invalid value for option "offset":', u.offset), u.offset = c.offset), null !== u.triggerElement && 0 === $(u.triggerElement).length && (w(1, 'ERROR: Element defined in option "triggerElement" was not found:', u.triggerElement), u.triggerElement = c.triggerElement), $.isNumeric(u.triggerHook)||-1 != $.inArray(u.triggerHook, a) || (w(1, 'ERROR: Invalid value for option "triggerHook": ', u.triggerHook), u.triggerHook = c.triggerHook), !$.isNumeric(u.loglevel) || u.loglevel < 0 || u.loglevel > 3) {
                var e = u.loglevel;
                u.loglevel = c.loglevel, w(1, 'ERROR: Invalid value for option "loglevel":', e)
            }
            if (i && t && u.triggerElement && u.loglevel >= 2) {
                var r = i.getTweensOf($(u.triggerElement)), n = t.info("vertical");
                $.each(r, function(e, t) {
                    var r = t.vars.css || t.vars, i = n ? void 0 !== r.top || void 0 !== r.bottom: void 0 !== r.left || void 0 !== r.right;
                    return i ? (w(2, "WARNING: Tweening the position of the trigger element affects the scene timing and should be avoided!"), !1) : void 0
                })
            }
        }, R = function() {
            h = {
                start: g.triggerOffset()
            }, t && (h.start -= t.info("size") * g.triggerHook()), h.end = h.start + u.duration
        }, E = function(e) {
            var t = e >= 0 && 1 >= e ? e: f;
            if (i) {
                if (-1 === i.repeat())
                    if (("DURING" === d || "AFTER" === d && 0 === u.duration) && i.paused())
                        i.play();
                    else {
                        if ("DURING" === d || i.paused())
                            return !1;
                        i.pause()
                    } else {
                    if (t == i.progress())
                        return !1;
                    0 === u.duration ? "AFTER" == d ? i.play() : i.reverse() : u.tweenChanges ? i.tweenTo(t * i.duration()) : i.progress(t).pause()
                }
                return !0
            }
            return !1
        }, y = function(e) {
            if (o && t) {
                var r = t.info();
                if (e || "DURING" !== d && ("AFTER" !== d || 0 !== u.duration)) {
                    var i = {
                        position: s.inFlow ? "relative": "absolute",
                        top: 0,
                        left: 0
                    }, a = o.css("position") != i.position;
                    s.pushFollowers ? "AFTER" === d && 0 === parseFloat(s.spacer.css("padding-top")) ? a=!0 : "BEFORE" === d && 0 === parseFloat(s.spacer.css("padding-bottom")) && (a=!0) : i[r.vertical ? "top": "left"] = u.duration * f, o.css(i), a && S()
                } else {
                    "fixed" != o.css("position") && (o.css("position", "fixed"), S());
                    var l = n(s.spacer, !0), c = u.reverse || 0 === u.duration ? r.scrollPos - h.start: Math.round(f * u.duration * 10) / 10;
                    l.top -= parseFloat(s.spacer.css("margin-top")), l[r.vertical ? "top": "left"] += c, o.css({
                        top: l.top,
                        left: l.left
                    })
                }
            }
        }, S = function() {
            if (o && t && s.inFlow) {
                var e = "AFTER" === d, r = "BEFORE" === d, n = "DURING" === d, i = "fixed" == o.css("position"), a = t.info("vertical"), l = s.spacer.children().first(), c = $.inArray(s.spacer.css("display"), ["block", "flex", "list-item", "table", "-webkit-box"])>-1, g = {};
                c ? (g["margin-top"] = r || n && i ? o.css("margin-top") : "auto", g["margin-bottom"] = e || n && i ? o.css("margin-bottom") : "auto") : g["margin-top"] = g["margin-bottom"] = "auto", s.relSize.width ? i ? $(window).width() == s.spacer.parent().width() ? o.css("width", "inherit") : o.css("width", s.spacer.width()) : o.css("width", "100%") : (g["min-width"] = l.outerWidth(!0), g.width = i ? g["min-width"] : "auto"), s.relSize.height ? i ? $(window).height() == s.spacer.parent().height() ? o.css("height", "inherit") : o.css("height", s.spacer.height()) : o.css("height", "100%") : (g["min-height"] = l.outerHeight(!c), g.height = i ? g["min-height"] : "auto"), s.pushFollowers && (g["padding" + (a ? "Top" : "Left")] = u.duration * f, g["padding" + (a ? "Bottom" : "Right")] = u.duration * (1 - f)), s.spacer.css(g)
            }
        }, b = function() {
            t && o && "DURING" === d && (t.info("isDocument") || y())
        }, F = function() {
            t && o && ("DURING" === d || "AFTER" === d && 0 === u.duration) && (s.relSize.width && $(window).width() != s.spacer.parent().width() || s.relSize.height && $(window).height() != s.spacer.parent().height()) && S()
        };
        return this.parent = function() {
            return t
        }, this.duration = function(e) {
            return arguments.length ? (u.duration != e && (u.duration = e, g.trigger("change", {
                what : "duration", newval : e
            })), g) : u.duration
        }, this.offset = function(e) {
            return arguments.length ? (u.offset != e && (u.offset = e, g.trigger("change", {
                what : "offset", newval : e
            })), g) : u.offset
        }, this.triggerElement = function(e) {
            return arguments.length ? (u.triggerElement != e && (u.triggerElement = e, g.trigger("change", {
                what : "triggerElement", newval : e
            })), g) : u.triggerElement
        }, this.triggerHook = function(e) {
            if (!arguments.length) {
                var t;
                if ($.isNumeric(u.triggerHook))
                    t = u.triggerHook;
                else
                    switch (u.triggerHook) {
                        case"onCenter":
                            t = .5;
                            break;
                        case"onLeave":
                            t = 0;
                            break;
                        case"onEnter":
                        default:
                            t = 1
                    }
                return t
            }
            return u.triggerHook != e && (u.triggerHook = e, g.trigger("change", {
                what : "triggerHook", newval : e
            })), g
        }, this.reverse = function(e) {
            return arguments.length ? (u.reverse != e && (u.reverse = e, g.trigger("change", {
                what : "reverse", newval : e
            })), g) : u.reverse
        }, this.tweenChanges = function(e) {
            return arguments.length ? (u.tweenChanges != e && (u.tweenChanges = e, g.trigger("change", {
                what : "tweenChanges", newval : e
            })), g) : u.tweenChanges
        }, this.loglevel = function(e) {
            return arguments.length ? (u.loglevel != e && (u.loglevel = e, g.trigger("change", {
                what : "loglevel", newval : e
            })), g) : u.loglevel
        }, this.state = function() {
            return d
        }, this.startPosition = function() {
            return this.triggerOffset()
        }, this.triggerOffset = function() {
            var e = u.offset;
            if (t) {
                var r = t.info();
                if (null === u.triggerElement)
                    e += r.size * g.triggerHook();
                else {
                    for (var i = $(u.triggerElement).first(), o = n(t.info("container")); i.parent().data("ScrollMagicPinSpacer");)
                        i = i.parent();
                    var s = n(i);
                    r.isDocument || (o.top -= r.scrollPos, o.left -= r.scrollPos), e += r.vertical ? s.top - o.top : s.left - o.left
                }
            }
            return e
        }, this.scrollOffset = function() {
            return h.start
        }, this.update = function(e) {
            if (t)
                if (e)
                    if (t.enabled() && p) {
                        var r, n = t.info("scrollPos");
                        null !== u.triggerElement && R(), r = u.duration > 0 ? (n - h.start) / (h.end - h.start) : n >= h.start ? 1 : 0, g.trigger("update", {
                            startPos: h.start,
                            endPos: h.end,
                            scrollPos: n
                        }), g.progress(r)
                    } else
                        o && "fixed" == o.css("position") && y(!0);
                else
                    t.updateScene(g, !1);
            return g
        }, this.progress = function(e) {
            if (arguments.length) {
                var r=!1, n = d, i = t ? t.info("scrollDirection") : "PAUSED";
                if (0 >= e && "BEFORE" !== d && (e >= f || u.reverse) ? (f = 0, d = "BEFORE", r=!0) : e > 0 && 1 > e && (e >= f || u.reverse) ? (f = e, d = "DURING", r=!0) : e >= 1 && "AFTER" !== d ? (f = 1, d = "AFTER", r=!0) : "DURING" !== d || u.reverse || y(), r) {
                    var o = {
                        progress: f,
                        state: d,
                        scrollDirection: i
                    }, s = d != n, a = "BEFORE" === d && 0 === u.duration;
                    s && (("DURING" === d || 0 === u.duration) && g.trigger("enter", o), ("BEFORE" === d || "BEFORE" === n) && g.trigger(a ? "end" : "start", o)), g.trigger("progress", o), s && (("AFTER" === d || "AFTER" === n) && g.trigger(a ? "start" : "end", o), ("DURING" !== d || 0 === u.duration) && g.trigger("leave", o))
                }
                return g
            }
            return f
        }, this.setTween = function(e) {
            i && g.removeTween();
            try {
                i = new TimelineMax({
                    smoothChildTiming: !0
                }).add(e).pause()
            } catch (e) {
                w(1, "ERROR calling method 'setTween()': Supplied argument is not a valid TweenMaxObject")
            } finally {
                return e.repeat&&-1 === e.repeat() && (i.repeat(-1), i.yoyo(e.yoyo())), m(), w(3, "added tween"), E(), g
            }
        }, this.removeTween = function(e) {
            return i && (e && E(0), i.kill(), i = void 0, w(3, "removed tween (reset: " + (e ? "true" : "false") + ")")), g
        }, this.setPin = function(e, t) {
            var r = {
                pushFollowers: !0,
                spacerClass: "scrollmagic-pin-spacer"
            };
            if (t = $.extend({}, r, t), e = $(e).first()
                , 0 === e.length)return w(1, "ERROR calling method 'setPin()': Invalid pin element supplied."), g;
            if ("fixed" == e.css("position"))
                return w(1, "ERROR: Pin does not work with elements that are positioned 'fixed'."), g;
            if (o) {
                if (o === e)
                    return g;
                g.removePin()
            }
            o = e, o.parent().hide();
            var n = "absolute" != o.css("position"), i = o.css(["display", "top", "left", "bottom", "right"]), a = o.css(["width", "height"]);
            o.parent().show();
            var l = $("<div></div>").addClass(t.spacerClass).css(i).data("ScrollMagicPinSpacer", !0).css({
                position: n ? "relative": "absolute",
                "margin-left": "auto",
                "margin-right": "auto",
                "box-sizing": "content-box",
                "-moz-box-sizing": "content-box",
                "-webkit-box-sizing": "content-box"
            });
            return !n && t.pushFollowers && (w(2, "WARNING: If the pinned element is positioned absolutely pushFollowers is disabled."), t.pushFollowers=!1), s = {
                spacer: l,
                relSize: {
                    width: "%" === a.width.slice(-1),
                    height: "%" === a.height.slice(-1)
                },
                pushFollowers: t.pushFollowers,
                inFlow: n,
                origStyle: o.attr("style")
            }, s.relSize.width && l.css("width", a.width), s.relSize.height && l.css("height", a.height), o.before(l).appendTo(l).css({
                position: n ? "relative": "absolute",
                top: "auto",
                left: "auto",
                bottom: "auto",
                right: "auto"
            }), $(window).on("scroll resize", b), w(3, "added pin"), y(), g
        }, this.removePin = function(e) {
            return o && (e ||!t ? (o.insertBefore(s.spacer).attr("style", s.origStyle), s.spacer.remove()) : "DURING" === d && y(!0), $(window).off("scroll resize", b), o = void 0, w(3, "removed pin (reset: " + (e ? "true" : "false") + ")")), g
        }, this.addTo = function(e) {
            return t != e ? (t && t.removeScene(g), t = e, m(), R(), S(), t.info("container").on("resize", F), w(3, "added " + l + " to controller"), e.addScene(g), g.update(), g) : void 0
        }, this.enabled = function(e) {
            return arguments.length ? (p != e && (p=!!e, g.update(!0)), g) : p
        }, this.remove = function() {
            if (t) {
                t.info("container").off("resize", F);
                var e = t;
                t = void 0, w(3, "removed " + l + " from controller"), e.removeScene(g)
            }
            return g
        }, this.destroy = function(e) {
            return this.removeTween(e), this.removePin(e), this.remove(), this.off("start end enter leave progress change update change.internal progress.internal"), w(3, "destroyed " + l + " (reset: " + (e ? "true" : "false") + ")"), null
        }, this.on = function(e, t) {
            if ($.isFunction(t)) {
                var r = $.trim(e).toLowerCase().replace(/(\w+)\.(\w+)/g, "$1." + l + "_$2").replace(/( |^)(\w+)( |$)/g, "$1$2." + l + "$3");
                $(g).on(r, t)
            } else
                w(1, "ERROR calling method 'on()': Supplied argument is not a valid callback!");
            return g
        }, this.off = function(e, t) {
            var r = $.trim(e).toLowerCase().replace(/(\w+)\.(\w+)/g, "$1." + l + "_$2").replace(/( |^)(\w+)( |$)/g, "$1$2." + l + "$3");
            return $(g).off(r, t), g
        }, this.trigger = function(e, t) {
            w(3, "event fired:", e, "->", t);
            var r = {
                type: $.trim(e).toLowerCase(),
                target: g
            };
            return $.isPlainObject(t) && (r = $.extend({}, t, r)), $(g).trigger(r), g
        }, v(), g
    };
    var e = window.console = window.console || {}, t = ["error", "warn", "log"];
    e.log || (e.log = $.noop), $.each(t, function(t, r) {
        e[r] || (e[r] = e.log)
    });
    var r = function(r) {
        (r > t.length || 0 >= r) && (r = t.length);
        var n = new Date, i = ("0" + n.getHours()).slice(-2) + ":" + ("0" + n.getMinutes()).slice(-2) + ":" + ("0" + n.getSeconds()).slice(-2) + ":" + ("00" + n.getMilliseconds()).slice(-3), o = t[r-1], s = Array.prototype.splice.call(arguments, 1), a = Function.prototype.bind.call(e[o], e);
        s.unshift(i), a.apply(e, s)
    }, n = function(e, t) {
        var r = {
            top: 0,
            left: 0
        }, n = e[0];
        if (n)
            if (n.getBoundingClientRect) {
                var i = n.getBoundingClientRect();
                r.top = i.top, r.left = i.left, t || (r.top += $(document).scrollTop(), r.left += $(document).scrollLeft())
            } else
                r = e.offset() || r, t && (r.top -= $(document).scrollTop(), r.left -= $(document).scrollLeft());
        return r
    }
}(jQuery);
