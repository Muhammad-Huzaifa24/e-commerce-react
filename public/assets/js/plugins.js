/*!
 * jQuery meanMenu v2.0.8
 * @Copyright (C) Chris Wharton @ MeanThemes (https://github.com/meanthemes/meanMenu)
 *
 */
!(function ($) {
  "use strict";
  $.fn.meanmenu = function (e) {
    var n = {
      meanMenuTarget: jQuery(this),
      meanMenuContainer: "body",
      meanMenuClose: "X",
      meanMenuCloseSize: "18px",
      meanMenuOpen: "<span /><span /><span />",
      meanRevealPosition: "right",
      meanRevealPositionDistance: "0",
      meanRevealColour: "",
      meanScreenWidth: "480",
      meanNavPush: "",
      meanShowChildren: !0,
      meanExpandableChildren: !0,
      meanExpand: "+",
      meanContract: "-",
      meanRemoveAttrs: !1,
      onePage: !1,
      meanDisplay: "block",
      removeElements: "",
    };
    e = $.extend(n, e);
    var a = window.innerWidth || document.documentElement.clientWidth;
    return this.each(function () {
      var n = e.meanMenuTarget,
        t = e.meanMenuContainer,
        r = e.meanMenuClose,
        i = e.meanMenuCloseSize,
        s = e.meanMenuOpen,
        u = e.meanRevealPosition,
        m = e.meanRevealPositionDistance,
        l = e.meanRevealColour,
        o = e.meanScreenWidth,
        c = e.meanNavPush,
        v = ".meanmenu-reveal",
        h = e.meanShowChildren,
        d = e.meanExpandableChildren,
        y = e.meanExpand,
        j = e.meanContract,
        Q = e.meanRemoveAttrs,
        f = e.onePage,
        g = e.meanDisplay,
        p = e.removeElements,
        C = !1;
      (navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/Blackberry/i) ||
        navigator.userAgent.match(/Windows Phone/i)) &&
        (C = !0),
        (navigator.userAgent.match(/MSIE 8/i) ||
          navigator.userAgent.match(/MSIE 7/i)) &&
          jQuery("html").css("overflow-y", "scroll");
      var w = "",
        x = function () {
          if ("center" === u) {
            var e = window.innerWidth || document.documentElement.clientWidth,
              n = e / 2 - 22 + "px";
            (w = "left:" + n + ";right:auto;"),
              C
                ? jQuery(".meanmenu-reveal").animate({ left: n })
                : jQuery(".meanmenu-reveal").css("left", n);
          }
        },
        A = !1,
        E = !1;
      "right" === u && (w = "right:" + m + ";left:auto;"),
        "left" === u && (w = "left:" + m + ";right:auto;"),
        x();
      var M = "",
        P = function () {
          M.html(jQuery(M).is(".meanmenu-reveal.meanclose") ? r : s);
        },
        W = function () {
          jQuery(".mean-bar,.mean-push").remove(),
            jQuery(t).removeClass("mean-container"),
            jQuery(n).css("display", g),
            (A = !1),
            (E = !1),
            jQuery(p).removeClass("mean-remove");
        },
        b = function () {
          var e = "background:" + l + ";color:" + l + ";" + w;
          if (o >= a) {
            jQuery(p).addClass("mean-remove"),
              (E = !0),
              jQuery(t).addClass("mean-container"),
              jQuery(".mean-container").prepend(
                '<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="' +
                  e +
                  '">Show Navigation</a><nav class="mean-nav"></nav></div>'
              );
            var r = jQuery(n).html();
            jQuery(".mean-nav").html(r),
              Q &&
                jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function () {
                  jQuery(this).is(".mean-remove")
                    ? jQuery(this).attr("class", "mean-remove")
                    : jQuery(this).removeAttr("class"),
                    jQuery(this).removeAttr("id");
                }),
              jQuery(n).before('<div class="mean-push" />'),
              jQuery(".mean-push").css("margin-top", c),
              jQuery(n).hide(),
              jQuery(".meanmenu-reveal").show(),
              jQuery(v).html(s),
              (M = jQuery(v)),
              jQuery(".mean-nav ul").hide(),
              h
                ? d
                  ? (jQuery(".mean-nav ul ul").each(function () {
                      jQuery(this).children().length &&
                        jQuery(this, "li:first")
                          .parent()
                          .append(
                            '<a class="mean-expand" href="#" style="font-size: ' +
                              i +
                              '">' +
                              y +
                              "</a>"
                          );
                    }),
                    jQuery(".mean-expand").on("click", function (e) {
                      e.preventDefault(),
                        jQuery(this).hasClass("mean-clicked")
                          ? (jQuery(this).text(y),
                            jQuery(this)
                              .prev("ul")
                              .slideUp(300, function () {}))
                          : (jQuery(this).text(j),
                            jQuery(this)
                              .prev("ul")
                              .slideDown(300, function () {})),
                        jQuery(this).toggleClass("mean-clicked");
                    }))
                  : jQuery(".mean-nav ul ul").show()
                : jQuery(".mean-nav ul ul").hide(),
              jQuery(".mean-nav ul li").last().addClass("mean-last"),
              M.removeClass("meanclose"),
              jQuery(M).click(function (e) {
                e.preventDefault(),
                  A === !1
                    ? (M.css("text-align", "center"),
                      M.css("text-indent", "0"),
                      M.css("font-size", i),
                      jQuery(".mean-nav ul:first").slideDown(),
                      (A = !0))
                    : (jQuery(".mean-nav ul:first").slideUp(), (A = !1)),
                  M.toggleClass("meanclose"),
                  P(),
                  jQuery(p).addClass("mean-remove");
              }),
              f &&
                jQuery(".mean-nav ul > li > a:first-child").on(
                  "click",
                  function () {
                    jQuery(".mean-nav ul:first").slideUp(),
                      (A = !1),
                      jQuery(M).toggleClass("meanclose").html(s);
                  }
                );
          } else W();
        };
      C ||
        jQuery(window).resize(function () {
          (a = window.innerWidth || document.documentElement.clientWidth),
            a > o,
            W(),
            o >= a ? (b(), x()) : W();
        }),
        jQuery(window).resize(function () {
          (a = window.innerWidth || document.documentElement.clientWidth),
            C
              ? (x(), o >= a ? E === !1 && b() : W())
              : (W(), o >= a && (b(), x()));
        }),
        b();
    });
  };
})(jQuery);

/*! Magnific Popup - v1.1.0 - 2016-02-20
 * https://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
!(function (a) {
  "function" == typeof define && define.amd
    ? define(["jquery"], a)
    : a(
        "object" == typeof exports
          ? require("jquery")
          : window.jQuery || window.Zepto
      );
})(function (a) {
  var b,
    c,
    d,
    e,
    f,
    g,
    h = "Close",
    i = "BeforeClose",
    j = "AfterClose",
    k = "BeforeAppend",
    l = "MarkupParse",
    m = "Open",
    n = "Change",
    o = "mfp",
    p = "." + o,
    q = "mfp-ready",
    r = "mfp-removing",
    s = "mfp-prevent-close",
    t = function () {},
    u = !!window.jQuery,
    v = a(window),
    w = function (a, c) {
      b.ev.on(o + a + p, c);
    },
    x = function (b, c, d, e) {
      var f = document.createElement("div");
      return (
        (f.className = "mfp-" + b),
        d && (f.innerHTML = d),
        e ? c && c.appendChild(f) : ((f = a(f)), c && f.appendTo(c)),
        f
      );
    },
    y = function (c, d) {
      b.ev.triggerHandler(o + c, d),
        b.st.callbacks &&
          ((c = c.charAt(0).toLowerCase() + c.slice(1)),
          b.st.callbacks[c] &&
            b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]));
    },
    z = function (c) {
      return (
        (c === g && b.currTemplate.closeBtn) ||
          ((b.currTemplate.closeBtn = a(
            b.st.closeMarkup.replace("%title%", b.st.tClose)
          )),
          (g = c)),
        b.currTemplate.closeBtn
      );
    },
    A = function () {
      a.magnificPopup.instance ||
        ((b = new t()), b.init(), (a.magnificPopup.instance = b));
    },
    B = function () {
      var a = document.createElement("p").style,
        b = ["ms", "O", "Moz", "Webkit"];
      if (void 0 !== a.transition) return !0;
      for (; b.length; ) if (b.pop() + "Transition" in a) return !0;
      return !1;
    };
  (t.prototype = {
    constructor: t,
    init: function () {
      var c = navigator.appVersion;
      (b.isLowIE = b.isIE8 = document.all && !document.addEventListener),
        (b.isAndroid = /android/gi.test(c)),
        (b.isIOS = /iphone|ipad|ipod/gi.test(c)),
        (b.supportsTransition = B()),
        (b.probablyMobile =
          b.isAndroid ||
          b.isIOS ||
          /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
            navigator.userAgent
          )),
        (d = a(document)),
        (b.popupsCache = {});
    },
    open: function (c) {
      var e;
      if (c.isObj === !1) {
        (b.items = c.items.toArray()), (b.index = 0);
        var g,
          h = c.items;
        for (e = 0; e < h.length; e++)
          if (((g = h[e]), g.parsed && (g = g.el[0]), g === c.el[0])) {
            b.index = e;
            break;
          }
      } else
        (b.items = a.isArray(c.items) ? c.items : [c.items]),
          (b.index = c.index || 0);
      if (b.isOpen) return void b.updateItemHTML();
      (b.types = []),
        (f = ""),
        c.mainEl && c.mainEl.length ? (b.ev = c.mainEl.eq(0)) : (b.ev = d),
        c.key
          ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}),
            (b.currTemplate = b.popupsCache[c.key]))
          : (b.currTemplate = {}),
        (b.st = a.extend(!0, {}, a.magnificPopup.defaults, c)),
        (b.fixedContentPos =
          "auto" === b.st.fixedContentPos
            ? !b.probablyMobile
            : b.st.fixedContentPos),
        b.st.modal &&
          ((b.st.closeOnContentClick = !1),
          (b.st.closeOnBgClick = !1),
          (b.st.showCloseBtn = !1),
          (b.st.enableEscapeKey = !1)),
        b.bgOverlay ||
          ((b.bgOverlay = x("bg").on("click" + p, function () {
            b.close();
          })),
          (b.wrap = x("wrap")
            .attr("tabindex", -1)
            .on("click" + p, function (a) {
              b._checkIfClose(a.target) && b.close();
            })),
          (b.container = x("container", b.wrap))),
        (b.contentContainer = x("content")),
        b.st.preloader &&
          (b.preloader = x("preloader", b.container, b.st.tLoading));
      var i = a.magnificPopup.modules;
      for (e = 0; e < i.length; e++) {
        var j = i[e];
        (j = j.charAt(0).toUpperCase() + j.slice(1)), b["init" + j].call(b);
      }
      y("BeforeOpen"),
        b.st.showCloseBtn &&
          (b.st.closeBtnInside
            ? (w(l, function (a, b, c, d) {
                c.close_replaceWith = z(d.type);
              }),
              (f += " mfp-close-btn-in"))
            : b.wrap.append(z())),
        b.st.alignTop && (f += " mfp-align-top"),
        b.fixedContentPos
          ? b.wrap.css({
              overflow: b.st.overflowY,
              overflowX: "hidden",
              overflowY: b.st.overflowY,
            })
          : b.wrap.css({ top: v.scrollTop(), position: "absolute" }),
        (b.st.fixedBgPos === !1 ||
          ("auto" === b.st.fixedBgPos && !b.fixedContentPos)) &&
          b.bgOverlay.css({ height: d.height(), position: "absolute" }),
        b.st.enableEscapeKey &&
          d.on("keyup" + p, function (a) {
            27 === a.keyCode && b.close();
          }),
        v.on("resize" + p, function () {
          b.updateSize();
        }),
        b.st.closeOnContentClick || (f += " mfp-auto-cursor"),
        f && b.wrap.addClass(f);
      var k = (b.wH = v.height()),
        n = {};
      if (b.fixedContentPos && b._hasScrollBar(k)) {
        var o = b._getScrollbarSize();
        o && (n.marginRight = o);
      }
      b.fixedContentPos &&
        (b.isIE7
          ? a("body, html").css("overflow", "hidden")
          : (n.overflow = "hidden"));
      var r = b.st.mainClass;
      return (
        b.isIE7 && (r += " mfp-ie7"),
        r && b._addClassToMFP(r),
        b.updateItemHTML(),
        y("BuildControls"),
        a("html").css(n),
        b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)),
        (b._lastFocusedEl = document.activeElement),
        setTimeout(function () {
          b.content
            ? (b._addClassToMFP(q), b._setFocus())
            : b.bgOverlay.addClass(q),
            d.on("focusin" + p, b._onFocusIn);
        }, 16),
        (b.isOpen = !0),
        b.updateSize(k),
        y(m),
        c
      );
    },
    close: function () {
      b.isOpen &&
        (y(i),
        (b.isOpen = !1),
        b.st.removalDelay && !b.isLowIE && b.supportsTransition
          ? (b._addClassToMFP(r),
            setTimeout(function () {
              b._close();
            }, b.st.removalDelay))
          : b._close());
    },
    _close: function () {
      y(h);
      var c = r + " " + q + " ";
      if (
        (b.bgOverlay.detach(),
        b.wrap.detach(),
        b.container.empty(),
        b.st.mainClass && (c += b.st.mainClass + " "),
        b._removeClassFromMFP(c),
        b.fixedContentPos)
      ) {
        var e = { marginRight: "" };
        b.isIE7 ? a("body, html").css("overflow", "") : (e.overflow = ""),
          a("html").css(e);
      }
      d.off("keyup" + p + " focusin" + p),
        b.ev.off(p),
        b.wrap.attr("class", "mfp-wrap").removeAttr("style"),
        b.bgOverlay.attr("class", "mfp-bg"),
        b.container.attr("class", "mfp-container"),
        !b.st.showCloseBtn ||
          (b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0) ||
          (b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach()),
        b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(),
        (b.currItem = null),
        (b.content = null),
        (b.currTemplate = null),
        (b.prevHeight = 0),
        y(j);
    },
    updateSize: function (a) {
      if (b.isIOS) {
        var c = document.documentElement.clientWidth / window.innerWidth,
          d = window.innerHeight * c;
        b.wrap.css("height", d), (b.wH = d);
      } else b.wH = a || v.height();
      b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize");
    },
    updateItemHTML: function () {
      var c = b.items[b.index];
      b.contentContainer.detach(),
        b.content && b.content.detach(),
        c.parsed || (c = b.parseEl(b.index));
      var d = c.type;
      if (
        (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]),
        (b.currItem = c),
        !b.currTemplate[d])
      ) {
        var f = b.st[d] ? b.st[d].markup : !1;
        y("FirstMarkupParse", f),
          f ? (b.currTemplate[d] = a(f)) : (b.currTemplate[d] = !0);
      }
      e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
      var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](
        c,
        b.currTemplate[d]
      );
      b.appendContent(g, d),
        (c.preloaded = !0),
        y(n, c),
        (e = c.type),
        b.container.prepend(b.contentContainer),
        y("AfterChange");
    },
    appendContent: function (a, c) {
      (b.content = a),
        a
          ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0
            ? b.content.find(".mfp-close").length || b.content.append(z())
            : (b.content = a)
          : (b.content = ""),
        y(k),
        b.container.addClass("mfp-" + c + "-holder"),
        b.contentContainer.append(b.content);
    },
    parseEl: function (c) {
      var d,
        e = b.items[c];
      if (
        (e.tagName
          ? (e = { el: a(e) })
          : ((d = e.type), (e = { data: e, src: e.src })),
        e.el)
      ) {
        for (var f = b.types, g = 0; g < f.length; g++)
          if (e.el.hasClass("mfp-" + f[g])) {
            d = f[g];
            break;
          }
        (e.src = e.el.attr("data-mfp-src")),
          e.src || (e.src = e.el.attr("href"));
      }
      return (
        (e.type = d || b.st.type || "inline"),
        (e.index = c),
        (e.parsed = !0),
        (b.items[c] = e),
        y("ElementParse", e),
        b.items[c]
      );
    },
    addGroup: function (a, c) {
      var d = function (d) {
        (d.mfpEl = this), b._openClick(d, a, c);
      };
      c || (c = {});
      var e = "click.magnificPopup";
      (c.mainEl = a),
        c.items
          ? ((c.isObj = !0), a.off(e).on(e, d))
          : ((c.isObj = !1),
            c.delegate
              ? a.off(e).on(e, c.delegate, d)
              : ((c.items = a), a.off(e).on(e, d)));
    },
    _openClick: function (c, d, e) {
      var f =
        void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
      if (
        f ||
        !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)
      ) {
        var g =
          void 0 !== e.disableOn
            ? e.disableOn
            : a.magnificPopup.defaults.disableOn;
        if (g)
          if (a.isFunction(g)) {
            if (!g.call(b)) return !0;
          } else if (v.width() < g) return !0;
        c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()),
          (e.el = a(c.mfpEl)),
          e.delegate && (e.items = d.find(e.delegate)),
          b.open(e);
      }
    },
    updateStatus: function (a, d) {
      if (b.preloader) {
        c !== a && b.container.removeClass("mfp-s-" + c),
          d || "loading" !== a || (d = b.st.tLoading);
        var e = { status: a, text: d };
        y("UpdateStatus", e),
          (a = e.status),
          (d = e.text),
          b.preloader.html(d),
          b.preloader.find("a").on("click", function (a) {
            a.stopImmediatePropagation();
          }),
          b.container.addClass("mfp-s-" + a),
          (c = a);
      }
    },
    _checkIfClose: function (c) {
      if (!a(c).hasClass(s)) {
        var d = b.st.closeOnContentClick,
          e = b.st.closeOnBgClick;
        if (d && e) return !0;
        if (
          !b.content ||
          a(c).hasClass("mfp-close") ||
          (b.preloader && c === b.preloader[0])
        )
          return !0;
        if (c === b.content[0] || a.contains(b.content[0], c)) {
          if (d) return !0;
        } else if (e && a.contains(document, c)) return !0;
        return !1;
      }
    },
    _addClassToMFP: function (a) {
      b.bgOverlay.addClass(a), b.wrap.addClass(a);
    },
    _removeClassFromMFP: function (a) {
      this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
    },
    _hasScrollBar: function (a) {
      return (
        (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
      );
    },
    _setFocus: function () {
      (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
    },
    _onFocusIn: function (c) {
      return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target)
        ? void 0
        : (b._setFocus(), !1);
    },
    _parseMarkup: function (b, c, d) {
      var e;
      d.data && (c = a.extend(d.data, c)),
        y(l, [b, c, d]),
        a.each(c, function (c, d) {
          if (void 0 === d || d === !1) return !0;
          if (((e = c.split("_")), e.length > 1)) {
            var f = b.find(p + "-" + e[0]);
            if (f.length > 0) {
              var g = e[1];
              "replaceWith" === g
                ? f[0] !== d[0] && f.replaceWith(d)
                : "img" === g
                ? f.is("img")
                  ? f.attr("src", d)
                  : f.replaceWith(
                      a("<img>").attr("src", d).attr("class", f.attr("class"))
                    )
                : f.attr(e[1], d);
            }
          } else b.find(p + "-" + c).html(d);
        });
    },
    _getScrollbarSize: function () {
      if (void 0 === b.scrollbarSize) {
        var a = document.createElement("div");
        (a.style.cssText =
          "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
          document.body.appendChild(a),
          (b.scrollbarSize = a.offsetWidth - a.clientWidth),
          document.body.removeChild(a);
      }
      return b.scrollbarSize;
    },
  }),
    (a.magnificPopup = {
      instance: null,
      proto: t.prototype,
      modules: [],
      open: function (b, c) {
        return (
          A(),
          (b = b ? a.extend(!0, {}, b) : {}),
          (b.isObj = !0),
          (b.index = c || 0),
          this.instance.open(b)
        );
      },
      close: function () {
        return a.magnificPopup.instance && a.magnificPopup.instance.close();
      },
      registerModule: function (b, c) {
        c.options && (a.magnificPopup.defaults[b] = c.options),
          a.extend(this.proto, c.proto),
          this.modules.push(b);
      },
      defaults: {
        disableOn: 0,
        key: null,
        midClick: !1,
        mainClass: "",
        preloader: !0,
        focus: "",
        closeOnContentClick: !1,
        closeOnBgClick: !0,
        closeBtnInside: !0,
        showCloseBtn: !0,
        enableEscapeKey: !0,
        modal: !1,
        alignTop: !1,
        removalDelay: 0,
        prependTo: null,
        fixedContentPos: "auto",
        fixedBgPos: "auto",
        overflowY: "auto",
        closeMarkup:
          '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
        tClose: "Close (Esc)",
        tLoading: "Loading...",
        autoFocusLast: !0,
      },
    }),
    (a.fn.magnificPopup = function (c) {
      A();
      var d = a(this);
      if ("string" == typeof c)
        if ("open" === c) {
          var e,
            f = u ? d.data("magnificPopup") : d[0].magnificPopup,
            g = parseInt(arguments[1], 10) || 0;
          f.items
            ? (e = f.items[g])
            : ((e = d), f.delegate && (e = e.find(f.delegate)), (e = e.eq(g))),
            b._openClick({ mfpEl: e }, d, f);
        } else
          b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
      else
        (c = a.extend(!0, {}, c)),
          u ? d.data("magnificPopup", c) : (d[0].magnificPopup = c),
          b.addGroup(d, c);
      return d;
    });
  var C,
    D,
    E,
    F = "inline",
    G = function () {
      E && (D.after(E.addClass(C)).detach(), (E = null));
    };
  a.magnificPopup.registerModule(F, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found",
    },
    proto: {
      initInline: function () {
        b.types.push(F),
          w(h + "." + F, function () {
            G();
          });
      },
      getInline: function (c, d) {
        if ((G(), c.src)) {
          var e = b.st.inline,
            f = a(c.src);
          if (f.length) {
            var g = f[0].parentNode;
            g &&
              g.tagName &&
              (D || ((C = e.hiddenClass), (D = x(C)), (C = "mfp-" + C)),
              (E = f.after(D).detach().removeClass(C))),
              b.updateStatus("ready");
          } else b.updateStatus("error", e.tNotFound), (f = a("<div>"));
          return (c.inlineElement = f), f;
        }
        return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d;
      },
    },
  });
  var H,
    I = "ajax",
    J = function () {
      H && a(document.body).removeClass(H);
    },
    K = function () {
      J(), b.req && b.req.abort();
    };
  a.magnificPopup.registerModule(I, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.',
    },
    proto: {
      initAjax: function () {
        b.types.push(I),
          (H = b.st.ajax.cursor),
          w(h + "." + I, K),
          w("BeforeChange." + I, K);
      },
      getAjax: function (c) {
        H && a(document.body).addClass(H), b.updateStatus("loading");
        var d = a.extend(
          {
            url: c.src,
            success: function (d, e, f) {
              var g = { data: d, xhr: f };
              y("ParseAjax", g),
                b.appendContent(a(g.data), I),
                (c.finished = !0),
                J(),
                b._setFocus(),
                setTimeout(function () {
                  b.wrap.addClass(q);
                }, 16),
                b.updateStatus("ready"),
                y("AjaxContentAdded");
            },
            error: function () {
              J(),
                (c.finished = c.loadError = !0),
                b.updateStatus(
                  "error",
                  b.st.ajax.tError.replace("%url%", c.src)
                );
            },
          },
          b.st.ajax.settings
        );
        return (b.req = a.ajax(d)), "";
      },
    },
  });
  var L,
    M = function (c) {
      if (c.data && void 0 !== c.data.title) return c.data.title;
      var d = b.st.image.titleSrc;
      if (d) {
        if (a.isFunction(d)) return d.call(b, c);
        if (c.el) return c.el.attr(d) || "";
      }
      return "";
    };
  a.magnificPopup.registerModule("image", {
    options: {
      markup:
        '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.',
    },
    proto: {
      initImage: function () {
        var c = b.st.image,
          d = ".image";
        b.types.push("image"),
          w(m + d, function () {
            "image" === b.currItem.type &&
              c.cursor &&
              a(document.body).addClass(c.cursor);
          }),
          w(h + d, function () {
            c.cursor && a(document.body).removeClass(c.cursor),
              v.off("resize" + p);
          }),
          w("Resize" + d, b.resizeImage),
          b.isLowIE && w("AfterChange", b.resizeImage);
      },
      resizeImage: function () {
        var a = b.currItem;
        if (a && a.img && b.st.image.verticalFit) {
          var c = 0;
          b.isLowIE &&
            (c =
              parseInt(a.img.css("padding-top"), 10) +
              parseInt(a.img.css("padding-bottom"), 10)),
            a.img.css("max-height", b.wH - c);
        }
      },
      _onImageHasSize: function (a) {
        a.img &&
          ((a.hasSize = !0),
          L && clearInterval(L),
          (a.isCheckingImgSize = !1),
          y("ImageHasSize", a),
          a.imgHidden &&
            (b.content && b.content.removeClass("mfp-loading"),
            (a.imgHidden = !1)));
      },
      findImageSize: function (a) {
        var c = 0,
          d = a.img[0],
          e = function (f) {
            L && clearInterval(L),
              (L = setInterval(function () {
                return d.naturalWidth > 0
                  ? void b._onImageHasSize(a)
                  : (c > 200 && clearInterval(L),
                    c++,
                    void (3 === c
                      ? e(10)
                      : 40 === c
                      ? e(50)
                      : 100 === c && e(500)));
              }, f));
          };
        e(1);
      },
      getImage: function (c, d) {
        var e = 0,
          f = function () {
            c &&
              (c.img[0].complete
                ? (c.img.off(".mfploader"),
                  c === b.currItem &&
                    (b._onImageHasSize(c), b.updateStatus("ready")),
                  (c.hasSize = !0),
                  (c.loaded = !0),
                  y("ImageLoadComplete"))
                : (e++, 200 > e ? setTimeout(f, 100) : g()));
          },
          g = function () {
            c &&
              (c.img.off(".mfploader"),
              c === b.currItem &&
                (b._onImageHasSize(c),
                b.updateStatus("error", h.tError.replace("%url%", c.src))),
              (c.hasSize = !0),
              (c.loaded = !0),
              (c.loadError = !0));
          },
          h = b.st.image,
          i = d.find(".mfp-img");
        if (i.length) {
          var j = document.createElement("img");
          (j.className = "mfp-img"),
            c.el &&
              c.el.find("img").length &&
              (j.alt = c.el.find("img").attr("alt")),
            (c.img = a(j).on("load.mfploader", f).on("error.mfploader", g)),
            (j.src = c.src),
            i.is("img") && (c.img = c.img.clone()),
            (j = c.img[0]),
            j.naturalWidth > 0 ? (c.hasSize = !0) : j.width || (c.hasSize = !1);
        }
        return (
          b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c),
          b.resizeImage(),
          c.hasSize
            ? (L && clearInterval(L),
              c.loadError
                ? (d.addClass("mfp-loading"),
                  b.updateStatus("error", h.tError.replace("%url%", c.src)))
                : (d.removeClass("mfp-loading"), b.updateStatus("ready")),
              d)
            : (b.updateStatus("loading"),
              (c.loading = !0),
              c.hasSize ||
                ((c.imgHidden = !0),
                d.addClass("mfp-loading"),
                b.findImageSize(c)),
              d)
        );
      },
    },
  });
  var N,
    O = function () {
      return (
        void 0 === N &&
          (N = void 0 !== document.createElement("p").style.MozTransform),
        N
      );
    };
  a.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function (a) {
        return a.is("img") ? a : a.find("img");
      },
    },
    proto: {
      initZoom: function () {
        var a,
          c = b.st.zoom,
          d = ".zoom";
        if (c.enabled && b.supportsTransition) {
          var e,
            f,
            g = c.duration,
            j = function (a) {
              var b = a
                  .clone()
                  .removeAttr("style")
                  .removeAttr("class")
                  .addClass("mfp-animated-image"),
                d = "all " + c.duration / 1e3 + "s " + c.easing,
                e = {
                  position: "fixed",
                  zIndex: 9999,
                  left: 0,
                  top: 0,
                  "-webkit-backface-visibility": "hidden",
                },
                f = "transition";
              return (
                (e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d),
                b.css(e),
                b
              );
            },
            k = function () {
              b.content.css("visibility", "visible");
            };
          w("BuildControls" + d, function () {
            if (b._allowZoom()) {
              if (
                (clearTimeout(e),
                b.content.css("visibility", "hidden"),
                (a = b._getItemToZoom()),
                !a)
              )
                return void k();
              (f = j(a)),
                f.css(b._getOffset()),
                b.wrap.append(f),
                (e = setTimeout(function () {
                  f.css(b._getOffset(!0)),
                    (e = setTimeout(function () {
                      k(),
                        setTimeout(function () {
                          f.remove(), (a = f = null), y("ZoomAnimationEnded");
                        }, 16);
                    }, g));
                }, 16));
            }
          }),
            w(i + d, function () {
              if (b._allowZoom()) {
                if ((clearTimeout(e), (b.st.removalDelay = g), !a)) {
                  if (((a = b._getItemToZoom()), !a)) return;
                  f = j(a);
                }
                f.css(b._getOffset(!0)),
                  b.wrap.append(f),
                  b.content.css("visibility", "hidden"),
                  setTimeout(function () {
                    f.css(b._getOffset());
                  }, 16);
              }
            }),
            w(h + d, function () {
              b._allowZoom() && (k(), f && f.remove(), (a = null));
            });
        }
      },
      _allowZoom: function () {
        return "image" === b.currItem.type;
      },
      _getItemToZoom: function () {
        return b.currItem.hasSize ? b.currItem.img : !1;
      },
      _getOffset: function (c) {
        var d;
        d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
        var e = d.offset(),
          f = parseInt(d.css("padding-top"), 10),
          g = parseInt(d.css("padding-bottom"), 10);
        e.top -= a(window).scrollTop() - f;
        var h = {
          width: d.width(),
          height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f,
        };
        return (
          O()
            ? (h["-moz-transform"] = h.transform =
                "translate(" + e.left + "px," + e.top + "px)")
            : ((h.left = e.left), (h.top = e.top)),
          h
        );
      },
    },
  });
  var P = "iframe",
    Q = "//about:blank",
    R = function (a) {
      if (b.currTemplate[P]) {
        var c = b.currTemplate[P].find("iframe");
        c.length &&
          (a || (c[0].src = Q),
          b.isIE8 && c.css("display", a ? "block" : "none"));
      }
    };
  a.magnificPopup.registerModule(P, {
    options: {
      markup:
        '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1",
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1",
        },
        gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
      },
    },
    proto: {
      initIframe: function () {
        b.types.push(P),
          w("BeforeChange", function (a, b, c) {
            b !== c && (b === P ? R() : c === P && R(!0));
          }),
          w(h + "." + P, function () {
            R();
          });
      },
      getIframe: function (c, d) {
        var e = c.src,
          f = b.st.iframe;
        a.each(f.patterns, function () {
          return e.indexOf(this.index) > -1
            ? (this.id &&
                (e =
                  "string" == typeof this.id
                    ? e.substr(
                        e.lastIndexOf(this.id) + this.id.length,
                        e.length
                      )
                    : this.id.call(this, e)),
              (e = this.src.replace("%id%", e)),
              !1)
            : void 0;
        });
        var g = {};
        return (
          f.srcAction && (g[f.srcAction] = e),
          b._parseMarkup(d, g, c),
          b.updateStatus("ready"),
          d
        );
      },
    },
  });
  var S = function (a) {
      var c = b.items.length;
      return a > c - 1 ? a - c : 0 > a ? c + a : a;
    },
    T = function (a, b, c) {
      return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
    };
  a.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup:
        '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%",
    },
    proto: {
      initGallery: function () {
        var c = b.st.gallery,
          e = ".mfp-gallery";
        return (
          (b.direction = !0),
          c && c.enabled
            ? ((f += " mfp-gallery"),
              w(m + e, function () {
                c.navigateByImgClick &&
                  b.wrap.on("click" + e, ".mfp-img", function () {
                    return b.items.length > 1 ? (b.next(), !1) : void 0;
                  }),
                  d.on("keydown" + e, function (a) {
                    37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next();
                  });
              }),
              w("UpdateStatus" + e, function (a, c) {
                c.text &&
                  (c.text = T(c.text, b.currItem.index, b.items.length));
              }),
              w(l + e, function (a, d, e, f) {
                var g = b.items.length;
                e.counter = g > 1 ? T(c.tCounter, f.index, g) : "";
              }),
              w("BuildControls" + e, function () {
                if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                  var d = c.arrowMarkup,
                    e = (b.arrowLeft = a(
                      d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")
                    ).addClass(s)),
                    f = (b.arrowRight = a(
                      d
                        .replace(/%title%/gi, c.tNext)
                        .replace(/%dir%/gi, "right")
                    ).addClass(s));
                  e.click(function () {
                    b.prev();
                  }),
                    f.click(function () {
                      b.next();
                    }),
                    b.container.append(e.add(f));
                }
              }),
              w(n + e, function () {
                b._preloadTimeout && clearTimeout(b._preloadTimeout),
                  (b._preloadTimeout = setTimeout(function () {
                    b.preloadNearbyImages(), (b._preloadTimeout = null);
                  }, 16));
              }),
              void w(h + e, function () {
                d.off(e),
                  b.wrap.off("click" + e),
                  (b.arrowRight = b.arrowLeft = null);
              }))
            : !1
        );
      },
      next: function () {
        (b.direction = !0), (b.index = S(b.index + 1)), b.updateItemHTML();
      },
      prev: function () {
        (b.direction = !1), (b.index = S(b.index - 1)), b.updateItemHTML();
      },
      goTo: function (a) {
        (b.direction = a >= b.index), (b.index = a), b.updateItemHTML();
      },
      preloadNearbyImages: function () {
        var a,
          c = b.st.gallery.preload,
          d = Math.min(c[0], b.items.length),
          e = Math.min(c[1], b.items.length);
        for (a = 1; a <= (b.direction ? e : d); a++)
          b._preloadItem(b.index + a);
        for (a = 1; a <= (b.direction ? d : e); a++)
          b._preloadItem(b.index - a);
      },
      _preloadItem: function (c) {
        if (((c = S(c)), !b.items[c].preloaded)) {
          var d = b.items[c];
          d.parsed || (d = b.parseEl(c)),
            y("LazyLoad", d),
            "image" === d.type &&
              (d.img = a('<img class="mfp-img" />')
                .on("load.mfploader", function () {
                  d.hasSize = !0;
                })
                .on("error.mfploader", function () {
                  (d.hasSize = !0), (d.loadError = !0), y("LazyLoadError", d);
                })
                .attr("src", d.src)),
            (d.preloaded = !0);
        }
      },
    },
  });
  var U = "retina";
  a.magnificPopup.registerModule(U, {
    options: {
      replaceSrc: function (a) {
        return a.src.replace(/\.\w+$/, function (a) {
          return "@2x" + a;
        });
      },
      ratio: 1,
    },
    proto: {
      initRetina: function () {
        if (window.devicePixelRatio > 1) {
          var a = b.st.retina,
            c = a.ratio;
          (c = isNaN(c) ? c() : c),
            c > 1 &&
              (w("ImageHasSize." + U, function (a, b) {
                b.img.css({
                  "max-width": b.img[0].naturalWidth / c,
                  width: "100%",
                });
              }),
              w("ElementParse." + U, function (b, d) {
                d.src = a.replaceSrc(d, c);
              }));
        }
      },
    },
  }),
    A();
});

/*!
 * The Final Countdown for jQuery v2.2.0 (https://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2016 Edson Hilios
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
!(function (a) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery);
})(function (a) {
  "use strict";
  function b(a) {
    if (a instanceof Date) return a;
    if (String(a).match(g))
      return (
        String(a).match(/^[0-9]*$/) && (a = Number(a)),
        String(a).match(/\-/) && (a = String(a).replace(/\-/g, "/")),
        new Date(a)
      );
    throw new Error("Couldn't cast `" + a + "` to a date object.");
  }
  function c(a) {
    var b = a.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
    return new RegExp(b);
  }
  function d(a) {
    return function (b) {
      var d = b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
      if (d)
        for (var f = 0, g = d.length; f < g; ++f) {
          var h = d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
            j = c(h[0]),
            k = h[1] || "",
            l = h[3] || "",
            m = null;
          (h = h[2]),
            i.hasOwnProperty(h) && ((m = i[h]), (m = Number(a[m]))),
            null !== m &&
              ("!" === k && (m = e(l, m)),
              "" === k && m < 10 && (m = "0" + m.toString()),
              (b = b.replace(j, m.toString())));
        }
      return (b = b.replace(/%%/, "%"));
    };
  }
  function e(a, b) {
    var c = "s",
      d = "";
    return (
      a &&
        ((a = a.replace(/(:|;|\s)/gi, "").split(/\,/)),
        1 === a.length ? (c = a[0]) : ((d = a[0]), (c = a[1]))),
      Math.abs(b) > 1 ? c : d
    );
  }
  var f = [],
    g = [],
    h = { precision: 100, elapse: !1, defer: !1 };
  g.push(/^[0-9]*$/.source),
    g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),
    g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),
    (g = new RegExp(g.join("|")));
  var i = {
      Y: "years",
      m: "months",
      n: "daysToMonth",
      d: "daysToWeek",
      w: "weeks",
      W: "weeksToMonth",
      H: "hours",
      M: "minutes",
      S: "seconds",
      D: "totalDays",
      I: "totalHours",
      N: "totalMinutes",
      T: "totalSeconds",
    },
    j = function (b, c, d) {
      (this.el = b),
        (this.$el = a(b)),
        (this.interval = null),
        (this.offset = {}),
        (this.options = a.extend({}, h)),
        (this.firstTick = !0),
        (this.instanceNumber = f.length),
        f.push(this),
        this.$el.data("countdown-instance", this.instanceNumber),
        d &&
          ("function" == typeof d
            ? (this.$el.on("update.countdown", d),
              this.$el.on("stoped.countdown", d),
              this.$el.on("finish.countdown", d))
            : (this.options = a.extend({}, h, d))),
        this.setFinalDate(c),
        this.options.defer === !1 && this.start();
    };
  a.extend(j.prototype, {
    start: function () {
      null !== this.interval && clearInterval(this.interval);
      var a = this;
      this.update(),
        (this.interval = setInterval(function () {
          a.update.call(a);
        }, this.options.precision));
    },
    stop: function () {
      clearInterval(this.interval),
        (this.interval = null),
        this.dispatchEvent("stoped");
    },
    toggle: function () {
      this.interval ? this.stop() : this.start();
    },
    pause: function () {
      this.stop();
    },
    resume: function () {
      this.start();
    },
    remove: function () {
      this.stop.call(this),
        (f[this.instanceNumber] = null),
        delete this.$el.data().countdownInstance;
    },
    setFinalDate: function (a) {
      this.finalDate = b(a);
    },
    update: function () {
      if (0 === this.$el.closest("html").length) return void this.remove();
      var a,
        b = new Date();
      return (
        (a = this.finalDate.getTime() - b.getTime()),
        (a = Math.ceil(a / 1e3)),
        (a = !this.options.elapse && a < 0 ? 0 : Math.abs(a)),
        this.totalSecsLeft === a || this.firstTick
          ? void (this.firstTick = !1)
          : ((this.totalSecsLeft = a),
            (this.elapsed = b >= this.finalDate),
            (this.offset = {
              seconds: this.totalSecsLeft % 60,
              minutes: Math.floor(this.totalSecsLeft / 60) % 60,
              hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
              days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
              daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
              daysToMonth: Math.floor(
                (this.totalSecsLeft / 60 / 60 / 24) % 30.4368
              ),
              weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
              weeksToMonth:
                Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4,
              months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
              years: Math.abs(this.finalDate.getFullYear() - b.getFullYear()),
              totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
              totalHours: Math.floor(this.totalSecsLeft / 60 / 60),
              totalMinutes: Math.floor(this.totalSecsLeft / 60),
              totalSeconds: this.totalSecsLeft,
            }),
            void (this.options.elapse || 0 !== this.totalSecsLeft
              ? this.dispatchEvent("update")
              : (this.stop(), this.dispatchEvent("finish"))))
      );
    },
    dispatchEvent: function (b) {
      var c = a.Event(b + ".countdown");
      (c.finalDate = this.finalDate),
        (c.elapsed = this.elapsed),
        (c.offset = a.extend({}, this.offset)),
        (c.strftime = d(this.offset)),
        this.$el.trigger(c);
    },
  }),
    (a.fn.countdown = function () {
      var b = Array.prototype.slice.call(arguments, 0);
      return this.each(function () {
        var c = a(this).data("countdown-instance");
        if (void 0 !== c) {
          var d = f[c],
            e = b[0];
          j.prototype.hasOwnProperty(e)
            ? d[e].apply(d, b.slice(1))
            : null === String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i)
            ? (d.setFinalDate.call(d, e), d.start())
            : a.error(
                "Method %s does not exist on jQuery.countdown".replace(
                  /\%s/gi,
                  e
                )
              );
        } else new j(this, b[0], b[1]);
      });
    });
});

/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!(function () {
  "use strict";
  function t(o) {
    if (!o) throw new Error("No options passed to Waypoint constructor");
    if (!o.element)
      throw new Error("No element option passed to Waypoint constructor");
    if (!o.handler)
      throw new Error("No handler option passed to Waypoint constructor");
    (this.key = "waypoint-" + e),
      (this.options = t.Adapter.extend({}, t.defaults, o)),
      (this.element = this.options.element),
      (this.adapter = new t.Adapter(this.element)),
      (this.callback = o.handler),
      (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
      (this.enabled = this.options.enabled),
      (this.triggerPoint = null),
      (this.group = t.Group.findOrCreate({
        name: this.options.group,
        axis: this.axis,
      })),
      (this.context = t.Context.findOrCreateByElement(this.options.context)),
      t.offsetAliases[this.options.offset] &&
        (this.options.offset = t.offsetAliases[this.options.offset]),
      this.group.add(this),
      this.context.add(this),
      (i[this.key] = this),
      (e += 1);
  }
  var e = 0,
    i = {};
  (t.prototype.queueTrigger = function (t) {
    this.group.queueTrigger(this, t);
  }),
    (t.prototype.trigger = function (t) {
      this.enabled && this.callback && this.callback.apply(this, t);
    }),
    (t.prototype.destroy = function () {
      this.context.remove(this), this.group.remove(this), delete i[this.key];
    }),
    (t.prototype.disable = function () {
      return (this.enabled = !1), this;
    }),
    (t.prototype.enable = function () {
      return this.context.refresh(), (this.enabled = !0), this;
    }),
    (t.prototype.next = function () {
      return this.group.next(this);
    }),
    (t.prototype.previous = function () {
      return this.group.previous(this);
    }),
    (t.invokeAll = function (t) {
      var e = [];
      for (var o in i) e.push(i[o]);
      for (var n = 0, r = e.length; r > n; n++) e[n][t]();
    }),
    (t.destroyAll = function () {
      t.invokeAll("destroy");
    }),
    (t.disableAll = function () {
      t.invokeAll("disable");
    }),
    (t.enableAll = function () {
      t.Context.refreshAll();
      for (var e in i) i[e].enabled = !0;
      return this;
    }),
    (t.refreshAll = function () {
      t.Context.refreshAll();
    }),
    (t.viewportHeight = function () {
      return window.innerHeight || document.documentElement.clientHeight;
    }),
    (t.viewportWidth = function () {
      return document.documentElement.clientWidth;
    }),
    (t.adapters = []),
    (t.defaults = {
      context: window,
      continuous: !0,
      enabled: !0,
      group: "default",
      horizontal: !1,
      offset: 0,
    }),
    (t.offsetAliases = {
      "bottom-in-view": function () {
        return this.context.innerHeight() - this.adapter.outerHeight();
      },
      "right-in-view": function () {
        return this.context.innerWidth() - this.adapter.outerWidth();
      },
    }),
    (window.Waypoint = t);
})(),
  (function () {
    "use strict";
    function t(t) {
      window.setTimeout(t, 1e3 / 60);
    }
    function e(t) {
      (this.element = t),
        (this.Adapter = n.Adapter),
        (this.adapter = new this.Adapter(t)),
        (this.key = "waypoint-context-" + i),
        (this.didScroll = !1),
        (this.didResize = !1),
        (this.oldScroll = {
          x: this.adapter.scrollLeft(),
          y: this.adapter.scrollTop(),
        }),
        (this.waypoints = { vertical: {}, horizontal: {} }),
        (t.waypointContextKey = this.key),
        (o[t.waypointContextKey] = this),
        (i += 1),
        n.windowContext ||
          ((n.windowContext = !0), (n.windowContext = new e(window))),
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler();
    }
    var i = 0,
      o = {},
      n = window.Waypoint,
      r = window.onload;
    (e.prototype.add = function (t) {
      var e = t.options.horizontal ? "horizontal" : "vertical";
      (this.waypoints[e][t.key] = t), this.refresh();
    }),
      (e.prototype.checkEmpty = function () {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
          e = this.Adapter.isEmptyObject(this.waypoints.vertical),
          i = this.element == this.element.window;
        t && e && !i && (this.adapter.off(".waypoints"), delete o[this.key]);
      }),
      (e.prototype.createThrottledResizeHandler = function () {
        function t() {
          e.handleResize(), (e.didResize = !1);
        }
        var e = this;
        this.adapter.on("resize.waypoints", function () {
          e.didResize || ((e.didResize = !0), n.requestAnimationFrame(t));
        });
      }),
      (e.prototype.createThrottledScrollHandler = function () {
        function t() {
          e.handleScroll(), (e.didScroll = !1);
        }
        var e = this;
        this.adapter.on("scroll.waypoints", function () {
          (!e.didScroll || n.isTouch) &&
            ((e.didScroll = !0), n.requestAnimationFrame(t));
        });
      }),
      (e.prototype.handleResize = function () {
        n.Context.refreshAll();
      }),
      (e.prototype.handleScroll = function () {
        var t = {},
          e = {
            horizontal: {
              newScroll: this.adapter.scrollLeft(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
            },
            vertical: {
              newScroll: this.adapter.scrollTop(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
            },
          };
        for (var i in e) {
          var o = e[i],
            n = o.newScroll > o.oldScroll,
            r = n ? o.forward : o.backward;
          for (var s in this.waypoints[i]) {
            var a = this.waypoints[i][s];
            if (null !== a.triggerPoint) {
              var l = o.oldScroll < a.triggerPoint,
                h = o.newScroll >= a.triggerPoint,
                p = l && h,
                u = !l && !h;
              (p || u) && (a.queueTrigger(r), (t[a.group.id] = a.group));
            }
          }
        }
        for (var c in t) t[c].flushTriggers();
        this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll };
      }),
      (e.prototype.innerHeight = function () {
        return this.element == this.element.window
          ? n.viewportHeight()
          : this.adapter.innerHeight();
      }),
      (e.prototype.remove = function (t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty();
      }),
      (e.prototype.innerWidth = function () {
        return this.element == this.element.window
          ? n.viewportWidth()
          : this.adapter.innerWidth();
      }),
      (e.prototype.destroy = function () {
        var t = [];
        for (var e in this.waypoints)
          for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var o = 0, n = t.length; n > o; o++) t[o].destroy();
      }),
      (e.prototype.refresh = function () {
        var t,
          e = this.element == this.element.window,
          i = e ? void 0 : this.adapter.offset(),
          o = {};
        this.handleScroll(),
          (t = {
            horizontal: {
              contextOffset: e ? 0 : i.left,
              contextScroll: e ? 0 : this.oldScroll.x,
              contextDimension: this.innerWidth(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
              offsetProp: "left",
            },
            vertical: {
              contextOffset: e ? 0 : i.top,
              contextScroll: e ? 0 : this.oldScroll.y,
              contextDimension: this.innerHeight(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
              offsetProp: "top",
            },
          });
        for (var r in t) {
          var s = t[r];
          for (var a in this.waypoints[r]) {
            var l,
              h,
              p,
              u,
              c,
              d = this.waypoints[r][a],
              f = d.options.offset,
              w = d.triggerPoint,
              y = 0,
              g = null == w;
            d.element !== d.element.window &&
              (y = d.adapter.offset()[s.offsetProp]),
              "function" == typeof f
                ? (f = f.apply(d))
                : "string" == typeof f &&
                  ((f = parseFloat(f)),
                  d.options.offset.indexOf("%") > -1 &&
                    (f = Math.ceil((s.contextDimension * f) / 100))),
              (l = s.contextScroll - s.contextOffset),
              (d.triggerPoint = Math.floor(y + l - f)),
              (h = w < s.oldScroll),
              (p = d.triggerPoint >= s.oldScroll),
              (u = h && p),
              (c = !h && !p),
              !g && u
                ? (d.queueTrigger(s.backward), (o[d.group.id] = d.group))
                : !g && c
                ? (d.queueTrigger(s.forward), (o[d.group.id] = d.group))
                : g &&
                  s.oldScroll >= d.triggerPoint &&
                  (d.queueTrigger(s.forward), (o[d.group.id] = d.group));
          }
        }
        return (
          n.requestAnimationFrame(function () {
            for (var t in o) o[t].flushTriggers();
          }),
          this
        );
      }),
      (e.findOrCreateByElement = function (t) {
        return e.findByElement(t) || new e(t);
      }),
      (e.refreshAll = function () {
        for (var t in o) o[t].refresh();
      }),
      (e.findByElement = function (t) {
        return o[t.waypointContextKey];
      }),
      (window.onload = function () {
        r && r(), e.refreshAll();
      }),
      (n.requestAnimationFrame = function (e) {
        var i =
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          t;
        i.call(window, e);
      }),
      (n.Context = e);
  })(),
  (function () {
    "use strict";
    function t(t, e) {
      return t.triggerPoint - e.triggerPoint;
    }
    function e(t, e) {
      return e.triggerPoint - t.triggerPoint;
    }
    function i(t) {
      (this.name = t.name),
        (this.axis = t.axis),
        (this.id = this.name + "-" + this.axis),
        (this.waypoints = []),
        this.clearTriggerQueues(),
        (o[this.axis][this.name] = this);
    }
    var o = { vertical: {}, horizontal: {} },
      n = window.Waypoint;
    (i.prototype.add = function (t) {
      this.waypoints.push(t);
    }),
      (i.prototype.clearTriggerQueues = function () {
        this.triggerQueues = { up: [], down: [], left: [], right: [] };
      }),
      (i.prototype.flushTriggers = function () {
        for (var i in this.triggerQueues) {
          var o = this.triggerQueues[i],
            n = "up" === i || "left" === i;
          o.sort(n ? e : t);
          for (var r = 0, s = o.length; s > r; r += 1) {
            var a = o[r];
            (a.options.continuous || r === o.length - 1) && a.trigger([i]);
          }
        }
        this.clearTriggerQueues();
      }),
      (i.prototype.next = function (e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints),
          o = i === this.waypoints.length - 1;
        return o ? null : this.waypoints[i + 1];
      }),
      (i.prototype.previous = function (e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null;
      }),
      (i.prototype.queueTrigger = function (t, e) {
        this.triggerQueues[e].push(t);
      }),
      (i.prototype.remove = function (t) {
        var e = n.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1);
      }),
      (i.prototype.first = function () {
        return this.waypoints[0];
      }),
      (i.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1];
      }),
      (i.findOrCreate = function (t) {
        return o[t.axis][t.name] || new i(t);
      }),
      (n.Group = i);
  })(),
  (function () {
    "use strict";
    function t(t) {
      this.$element = e(t);
    }
    var e = window.jQuery,
      i = window.Waypoint;
    e.each(
      [
        "innerHeight",
        "innerWidth",
        "off",
        "offset",
        "on",
        "outerHeight",
        "outerWidth",
        "scrollLeft",
        "scrollTop",
      ],
      function (e, i) {
        t.prototype[i] = function () {
          var t = Array.prototype.slice.call(arguments);
          return this.$element[i].apply(this.$element, t);
        };
      }
    ),
      e.each(["extend", "inArray", "isEmptyObject"], function (i, o) {
        t[o] = e[o];
      }),
      i.adapters.push({ name: "jquery", Adapter: t }),
      (i.Adapter = t);
  })(),
  (function () {
    "use strict";
    function t(t) {
      return function () {
        var i = [],
          o = arguments[0];
        return (
          t.isFunction(arguments[0]) &&
            ((o = t.extend({}, arguments[1])), (o.handler = arguments[0])),
          this.each(function () {
            var n = t.extend({}, o, { element: this });
            "string" == typeof n.context &&
              (n.context = t(this).closest(n.context)[0]),
              i.push(new e(n));
          }),
          i
        );
      };
    }
    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)),
      window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto));
  })();

/*!
 * jquery.counterup.js 1.0
 *
 * Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
 * Released under the GPL v2 License
 *
 * Date: Nov 26, 2013
 */ (function (e) {
  "use strict";
  e.fn.counterUp = function (t) {
    var n = e.extend({ time: 400, delay: 10 }, t);
    return this.each(function () {
      var t = e(this),
        r = n,
        i = function () {
          var e = [],
            n = r.time / r.delay,
            i = t.text(),
            s = /[0-9]+,[0-9]+/.test(i);
          i = i.replace(/,/g, "");
          var o = /^[0-9]+$/.test(i),
            u = /^[0-9]+\.[0-9]+$/.test(i),
            a = u ? (i.split(".")[1] || []).length : 0;
          for (var f = n; f >= 1; f--) {
            var l = parseInt((i / n) * f);
            u && (l = parseFloat((i / n) * f).toFixed(a));
            if (s)
              while (/(\d+)(\d{3})/.test(l.toString()))
                l = l.toString().replace(/(\d+)(\d{3})/, "$1,$2");
            e.unshift(l);
          }
          t.data("counterup-nums", e);
          t.text("0");
          var c = function () {
            t.text(t.data("counterup-nums").shift());
            if (t.data("counterup-nums").length)
              setTimeout(t.data("counterup-func"), r.delay);
            else {
              delete t.data("counterup-nums");
              t.data("counterup-nums", null);
              t.data("counterup-func", null);
            }
          };
          t.data("counterup-func", c);
          setTimeout(t.data("counterup-func"), r.delay);
        };
      t.waypoint(i, { offset: "100%", triggerOnce: !0 });
    });
  };
})(jQuery);

/*!
 * scrollup v2.4.1
 * Url: http://markgoodyear.com/labs/scrollup/
 * Copyright (c) Mark Goodyear — @markgdyr — http://markgoodyear.com
 * License: MIT
 */
!(function (l, o, e) {
  "use strict";
  (l.fn.scrollUp = function (o) {
    l.data(e.body, "scrollUp") ||
      (l.data(e.body, "scrollUp", !0), l.fn.scrollUp.init(o));
  }),
    (l.fn.scrollUp.init = function (r) {
      var s,
        t,
        c,
        i,
        n,
        a,
        d,
        p = (l.fn.scrollUp.settings = l.extend({}, l.fn.scrollUp.defaults, r)),
        f = !1;
      switch (
        ((d = p.scrollTrigger
          ? l(p.scrollTrigger)
          : l("<a/>", { id: p.scrollName, href: "#top" })),
        p.scrollTitle && d.attr("title", p.scrollTitle),
        d.appendTo("body"),
        p.scrollImg || p.scrollTrigger || d.html(p.scrollText),
        d.css({ display: "none", position: "fixed", zIndex: p.zIndex }),
        p.activeOverlay &&
          l("<div/>", { id: p.scrollName + "-active" })
            .css({
              position: "absolute",
              top: p.scrollDistance + "px",
              width: "100%",
              borderTop: "1px dotted" + p.activeOverlay,
              zIndex: p.zIndex,
            })
            .appendTo("body"),
        p.animation)
      ) {
        case "fade":
          (s = "fadeIn"), (t = "fadeOut"), (c = p.animationSpeed);
          break;
        case "slide":
          (s = "slideDown"), (t = "slideUp"), (c = p.animationSpeed);
          break;
        default:
          (s = "show"), (t = "hide"), (c = 0);
      }
      (i =
        "top" === p.scrollFrom
          ? p.scrollDistance
          : l(e).height() - l(o).height() - p.scrollDistance),
        (n = l(o).scroll(function () {
          l(o).scrollTop() > i
            ? f || (d[s](c), (f = !0))
            : f && (d[t](c), (f = !1));
        })),
        p.scrollTarget
          ? "number" == typeof p.scrollTarget
            ? (a = p.scrollTarget)
            : "string" == typeof p.scrollTarget &&
              (a = Math.floor(l(p.scrollTarget).offset().top))
          : (a = 0),
        d.click(function (o) {
          o.preventDefault(),
            l("html, body").animate(
              { scrollTop: a },
              p.scrollSpeed,
              p.easingType
            );
        });
    }),
    (l.fn.scrollUp.defaults = {
      scrollName: "scrollUp",
      scrollDistance: 300,
      scrollFrom: "top",
      scrollSpeed: 300,
      easingType: "linear",
      animation: "fade",
      animationSpeed: 200,
      scrollTrigger: !1,
      scrollTarget: !1,
      scrollText: "Scroll to top",
      scrollTitle: !1,
      scrollImg: !1,
      activeOverlay: !1,
      zIndex: 2147483647,
    }),
    (l.fn.scrollUp.destroy = function (r) {
      l.removeData(e.body, "scrollUp"),
        l("#" + l.fn.scrollUp.settings.scrollName).remove(),
        l("#" + l.fn.scrollUp.settings.scrollName + "-active").remove(),
        l.fn.jquery.split(".")[1] >= 7
          ? l(o).off("scroll", r)
          : l(o).unbind("scroll", r);
    }),
    (l.scrollUp = l.fn.scrollUp);
})(jQuery, window, document);

/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
!(function (a, b, c, d) {
  function e(b, c) {
    (this.settings = null),
      (this.options = a.extend({}, e.Defaults, c)),
      (this.$element = a(b)),
      (this._handlers = {}),
      (this._plugins = {}),
      (this._supress = {}),
      (this._current = null),
      (this._speed = null),
      (this._coordinates = []),
      (this._breakpoint = null),
      (this._width = null),
      (this._items = []),
      (this._clones = []),
      (this._mergers = []),
      (this._widths = []),
      (this._invalidated = {}),
      (this._pipe = []),
      (this._drag = {
        time: null,
        target: null,
        pointer: null,
        stage: { start: null, current: null },
        direction: null,
      }),
      (this._states = {
        current: {},
        tags: {
          initializing: ["busy"],
          animating: ["busy"],
          dragging: ["interacting"],
        },
      }),
      a.each(
        ["onResize", "onThrottledResize"],
        a.proxy(function (b, c) {
          this._handlers[c] = a.proxy(this[c], this);
        }, this)
      ),
      a.each(
        e.Plugins,
        a.proxy(function (a, b) {
          this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this);
        }, this)
      ),
      a.each(
        e.Workers,
        a.proxy(function (b, c) {
          this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) });
        }, this)
      ),
      this.setup(),
      this.initialize();
  }
  (e.Defaults = {
    items: 3,
    loop: !1,
    center: !1,
    rewind: !1,
    checkVisibility: !0,
    mouseDrag: !0,
    touchDrag: !0,
    pullDrag: !0,
    freeDrag: !1,
    margin: 0,
    stagePadding: 0,
    merge: !1,
    mergeFit: !0,
    autoWidth: !1,
    startPosition: 0,
    rtl: !1,
    smartSpeed: 250,
    fluidSpeed: !1,
    dragEndSpeed: !1,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: b,
    fallbackEasing: "swing",
    slideTransition: "",
    info: !1,
    nestedItemSelector: !1,
    itemElement: "div",
    stageElement: "div",
    refreshClass: "owl-refresh",
    loadedClass: "owl-loaded",
    loadingClass: "owl-loading",
    rtlClass: "owl-rtl",
    responsiveClass: "owl-responsive",
    dragClass: "owl-drag",
    itemClass: "owl-item",
    stageClass: "owl-stage",
    stageOuterClass: "owl-stage-outer",
    grabClass: "owl-grab",
  }),
    (e.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
    (e.Type = { Event: "event", State: "state" }),
    (e.Plugins = {}),
    (e.Workers = [
      {
        filter: ["width", "settings"],
        run: function () {
          this._width = this.$element.width();
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          a.current = this._items && this._items[this.relative(this._current)];
        },
      },
      {
        filter: ["items", "settings"],
        run: function () {
          this.$stage.children(".cloned").remove();
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          var b = this.settings.margin || "",
            c = !this.settings.autoWidth,
            d = this.settings.rtl,
            e = {
              width: "auto",
              "margin-left": d ? b : "",
              "margin-right": d ? "" : b,
            };
          !c && this.$stage.children().css(e), (a.css = e);
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          var b =
              (this.width() / this.settings.items).toFixed(3) -
              this.settings.margin,
            c = null,
            d = this._items.length,
            e = !this.settings.autoWidth,
            f = [];
          for (a.items = { merge: !1, width: b }; d--; )
            (c = this._mergers[d]),
              (c =
                (this.settings.mergeFit && Math.min(c, this.settings.items)) ||
                c),
              (a.items.merge = c > 1 || a.items.merge),
              (f[d] = e ? b * c : this._items[d].width());
          this._widths = f;
        },
      },
      {
        filter: ["items", "settings"],
        run: function () {
          var b = [],
            c = this._items,
            d = this.settings,
            e = Math.max(2 * d.items, 4),
            f = 2 * Math.ceil(c.length / 2),
            g = d.loop && c.length ? (d.rewind ? e : Math.max(e, f)) : 0,
            h = "",
            i = "";
          for (g /= 2; g > 0; )
            b.push(this.normalize(b.length / 2, !0)),
              (h += c[b[b.length - 1]][0].outerHTML),
              b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)),
              (i = c[b[b.length - 1]][0].outerHTML + i),
              (g -= 1);
          (this._clones = b),
            a(h).addClass("cloned").appendTo(this.$stage),
            a(i).addClass("cloned").prependTo(this.$stage);
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function () {
          for (
            var a = this.settings.rtl ? 1 : -1,
              b = this._clones.length + this._items.length,
              c = -1,
              d = 0,
              e = 0,
              f = [];
            ++c < b;

          )
            (d = f[c - 1] || 0),
              (e = this._widths[this.relative(c)] + this.settings.margin),
              f.push(d + e * a);
          this._coordinates = f;
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function () {
          var a = this.settings.stagePadding,
            b = this._coordinates,
            c = {
              width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
              "padding-left": a || "",
              "padding-right": a || "",
            };
          this.$stage.css(c);
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          var b = this._coordinates.length,
            c = !this.settings.autoWidth,
            d = this.$stage.children();
          if (c && a.items.merge)
            for (; b--; )
              (a.css.width = this._widths[this.relative(b)]),
                d.eq(b).css(a.css);
          else c && ((a.css.width = a.items.width), d.css(a.css));
        },
      },
      {
        filter: ["items"],
        run: function () {
          this._coordinates.length < 1 && this.$stage.removeAttr("style");
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          (a.current = a.current ? this.$stage.children().index(a.current) : 0),
            (a.current = Math.max(
              this.minimum(),
              Math.min(this.maximum(), a.current)
            )),
            this.reset(a.current);
        },
      },
      {
        filter: ["position"],
        run: function () {
          this.animate(this.coordinates(this._current));
        },
      },
      {
        filter: ["width", "position", "items", "settings"],
        run: function () {
          var a,
            b,
            c,
            d,
            e = this.settings.rtl ? 1 : -1,
            f = 2 * this.settings.stagePadding,
            g = this.coordinates(this.current()) + f,
            h = g + this.width() * e,
            i = [];
          for (c = 0, d = this._coordinates.length; c < d; c++)
            (a = this._coordinates[c - 1] || 0),
              (b = Math.abs(this._coordinates[c]) + f * e),
              ((this.op(a, "<=", g) && this.op(a, ">", h)) ||
                (this.op(b, "<", g) && this.op(b, ">", h))) &&
                i.push(c);
          this.$stage.children(".active").removeClass("active"),
            this.$stage
              .children(":eq(" + i.join("), :eq(") + ")")
              .addClass("active"),
            this.$stage.children(".center").removeClass("center"),
            this.settings.center &&
              this.$stage.children().eq(this.current()).addClass("center");
        },
      },
    ]),
    (e.prototype.initializeStage = function () {
      (this.$stage = this.$element.find("." + this.settings.stageClass)),
        this.$stage.length ||
          (this.$element.addClass(this.options.loadingClass),
          (this.$stage = a("<" + this.settings.stageElement + ">", {
            class: this.settings.stageClass,
          }).wrap(a("<div/>", { class: this.settings.stageOuterClass }))),
          this.$element.append(this.$stage.parent()));
    }),
    (e.prototype.initializeItems = function () {
      var b = this.$element.find(".owl-item");
      if (b.length)
        return (
          (this._items = b.get().map(function (b) {
            return a(b);
          })),
          (this._mergers = this._items.map(function () {
            return 1;
          })),
          void this.refresh()
        );
      this.replace(this.$element.children().not(this.$stage.parent())),
        this.isVisible() ? this.refresh() : this.invalidate("width"),
        this.$element
          .removeClass(this.options.loadingClass)
          .addClass(this.options.loadedClass);
    }),
    (e.prototype.initialize = function () {
      if (
        (this.enter("initializing"),
        this.trigger("initialize"),
        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
        this.settings.autoWidth && !this.is("pre-loading"))
      ) {
        var a, b, c;
        (a = this.$element.find("img")),
          (b = this.settings.nestedItemSelector
            ? "." + this.settings.nestedItemSelector
            : d),
          (c = this.$element.children(b).width()),
          a.length && c <= 0 && this.preloadAutoWidthImages(a);
      }
      this.initializeStage(),
        this.initializeItems(),
        this.registerEventHandlers(),
        this.leave("initializing"),
        this.trigger("initialized");
    }),
    (e.prototype.isVisible = function () {
      return !this.settings.checkVisibility || this.$element.is(":visible");
    }),
    (e.prototype.setup = function () {
      var b = this.viewport(),
        c = this.options.responsive,
        d = -1,
        e = null;
      c
        ? (a.each(c, function (a) {
            a <= b && a > d && (d = Number(a));
          }),
          (e = a.extend({}, this.options, c[d])),
          "function" == typeof e.stagePadding &&
            (e.stagePadding = e.stagePadding()),
          delete e.responsive,
          e.responsiveClass &&
            this.$element.attr(
              "class",
              this.$element
                .attr("class")
                .replace(
                  new RegExp(
                    "(" + this.options.responsiveClass + "-)\\S+\\s",
                    "g"
                  ),
                  "$1" + d
                )
            ))
        : (e = a.extend({}, this.options)),
        this.trigger("change", { property: { name: "settings", value: e } }),
        (this._breakpoint = d),
        (this.settings = e),
        this.invalidate("settings"),
        this.trigger("changed", {
          property: { name: "settings", value: this.settings },
        });
    }),
    (e.prototype.optionsLogic = function () {
      this.settings.autoWidth &&
        ((this.settings.stagePadding = !1), (this.settings.merge = !1));
    }),
    (e.prototype.prepare = function (b) {
      var c = this.trigger("prepare", { content: b });
      return (
        c.data ||
          (c.data = a("<" + this.settings.itemElement + "/>")
            .addClass(this.options.itemClass)
            .append(b)),
        this.trigger("prepared", { content: c.data }),
        c.data
      );
    }),
    (e.prototype.update = function () {
      for (
        var b = 0,
          c = this._pipe.length,
          d = a.proxy(function (a) {
            return this[a];
          }, this._invalidated),
          e = {};
        b < c;

      )
        (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) &&
          this._pipe[b].run(e),
          b++;
      (this._invalidated = {}), !this.is("valid") && this.enter("valid");
    }),
    (e.prototype.width = function (a) {
      switch ((a = a || e.Width.Default)) {
        case e.Width.Inner:
        case e.Width.Outer:
          return this._width;
        default:
          return (
            this._width - 2 * this.settings.stagePadding + this.settings.margin
          );
      }
    }),
    (e.prototype.refresh = function () {
      this.enter("refreshing"),
        this.trigger("refresh"),
        this.setup(),
        this.optionsLogic(),
        this.$element.addClass(this.options.refreshClass),
        this.update(),
        this.$element.removeClass(this.options.refreshClass),
        this.leave("refreshing"),
        this.trigger("refreshed");
    }),
    (e.prototype.onThrottledResize = function () {
      b.clearTimeout(this.resizeTimer),
        (this.resizeTimer = b.setTimeout(
          this._handlers.onResize,
          this.settings.responsiveRefreshRate
        ));
    }),
    (e.prototype.onResize = function () {
      return (
        !!this._items.length &&
        this._width !== this.$element.width() &&
        !!this.isVisible() &&
        (this.enter("resizing"),
        this.trigger("resize").isDefaultPrevented()
          ? (this.leave("resizing"), !1)
          : (this.invalidate("width"),
            this.refresh(),
            this.leave("resizing"),
            void this.trigger("resized")))
      );
    }),
    (e.prototype.registerEventHandlers = function () {
      a.support.transition &&
        this.$stage.on(
          a.support.transition.end + ".owl.core",
          a.proxy(this.onTransitionEnd, this)
        ),
        !1 !== this.settings.responsive &&
          this.on(b, "resize", this._handlers.onThrottledResize),
        this.settings.mouseDrag &&
          (this.$element.addClass(this.options.dragClass),
          this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)),
          this.$stage.on(
            "dragstart.owl.core selectstart.owl.core",
            function () {
              return !1;
            }
          )),
        this.settings.touchDrag &&
          (this.$stage.on(
            "touchstart.owl.core",
            a.proxy(this.onDragStart, this)
          ),
          this.$stage.on(
            "touchcancel.owl.core",
            a.proxy(this.onDragEnd, this)
          ));
    }),
    (e.prototype.onDragStart = function (b) {
      var d = null;
      3 !== b.which &&
        (a.support.transform
          ? ((d = this.$stage
              .css("transform")
              .replace(/.*\(|\)| /g, "")
              .split(",")),
            (d = {
              x: d[16 === d.length ? 12 : 4],
              y: d[16 === d.length ? 13 : 5],
            }))
          : ((d = this.$stage.position()),
            (d = {
              x: this.settings.rtl
                ? d.left +
                  this.$stage.width() -
                  this.width() +
                  this.settings.margin
                : d.left,
              y: d.top,
            })),
        this.is("animating") &&
          (a.support.transform ? this.animate(d.x) : this.$stage.stop(),
          this.invalidate("position")),
        this.$element.toggleClass(
          this.options.grabClass,
          "mousedown" === b.type
        ),
        this.speed(0),
        (this._drag.time = new Date().getTime()),
        (this._drag.target = a(b.target)),
        (this._drag.stage.start = d),
        (this._drag.stage.current = d),
        (this._drag.pointer = this.pointer(b)),
        a(c).on(
          "mouseup.owl.core touchend.owl.core",
          a.proxy(this.onDragEnd, this)
        ),
        a(c).one(
          "mousemove.owl.core touchmove.owl.core",
          a.proxy(function (b) {
            var d = this.difference(this._drag.pointer, this.pointer(b));
            a(c).on(
              "mousemove.owl.core touchmove.owl.core",
              a.proxy(this.onDragMove, this)
            ),
              (Math.abs(d.x) < Math.abs(d.y) && this.is("valid")) ||
                (b.preventDefault(),
                this.enter("dragging"),
                this.trigger("drag"));
          }, this)
        ));
    }),
    (e.prototype.onDragMove = function (a) {
      var b = null,
        c = null,
        d = null,
        e = this.difference(this._drag.pointer, this.pointer(a)),
        f = this.difference(this._drag.stage.start, e);
      this.is("dragging") &&
        (a.preventDefault(),
        this.settings.loop
          ? ((b = this.coordinates(this.minimum())),
            (c = this.coordinates(this.maximum() + 1) - b),
            (f.x = ((((f.x - b) % c) + c) % c) + b))
          : ((b = this.settings.rtl
              ? this.coordinates(this.maximum())
              : this.coordinates(this.minimum())),
            (c = this.settings.rtl
              ? this.coordinates(this.minimum())
              : this.coordinates(this.maximum())),
            (d = this.settings.pullDrag ? (-1 * e.x) / 5 : 0),
            (f.x = Math.max(Math.min(f.x, b + d), c + d))),
        (this._drag.stage.current = f),
        this.animate(f.x));
    }),
    (e.prototype.onDragEnd = function (b) {
      var d = this.difference(this._drag.pointer, this.pointer(b)),
        e = this._drag.stage.current,
        f = (d.x > 0) ^ this.settings.rtl ? "left" : "right";
      a(c).off(".owl.core"),
        this.$element.removeClass(this.options.grabClass),
        ((0 !== d.x && this.is("dragging")) || !this.is("valid")) &&
          (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
          this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)),
          this.invalidate("position"),
          this.update(),
          (this._drag.direction = f),
          (Math.abs(d.x) > 3 || new Date().getTime() - this._drag.time > 300) &&
            this._drag.target.one("click.owl.core", function () {
              return !1;
            })),
        this.is("dragging") &&
          (this.leave("dragging"), this.trigger("dragged"));
    }),
    (e.prototype.closest = function (b, c) {
      var e = -1,
        f = 30,
        g = this.width(),
        h = this.coordinates();
      return (
        this.settings.freeDrag ||
          a.each(
            h,
            a.proxy(function (a, i) {
              return (
                "left" === c && b > i - f && b < i + f
                  ? (e = a)
                  : "right" === c && b > i - g - f && b < i - g + f
                  ? (e = a + 1)
                  : this.op(b, "<", i) &&
                    this.op(b, ">", h[a + 1] !== d ? h[a + 1] : i - g) &&
                    (e = "left" === c ? a + 1 : a),
                -1 === e
              );
            }, this)
          ),
        this.settings.loop ||
          (this.op(b, ">", h[this.minimum()])
            ? (e = b = this.minimum())
            : this.op(b, "<", h[this.maximum()]) && (e = b = this.maximum())),
        e
      );
    }),
    (e.prototype.animate = function (b) {
      var c = this.speed() > 0;
      this.is("animating") && this.onTransitionEnd(),
        c && (this.enter("animating"), this.trigger("translate")),
        a.support.transform3d && a.support.transition
          ? this.$stage.css({
              transform: "translate3d(" + b + "px,0px,0px)",
              transition:
                this.speed() / 1e3 +
                "s" +
                (this.settings.slideTransition
                  ? " " + this.settings.slideTransition
                  : ""),
            })
          : c
          ? this.$stage.animate(
              { left: b + "px" },
              this.speed(),
              this.settings.fallbackEasing,
              a.proxy(this.onTransitionEnd, this)
            )
          : this.$stage.css({ left: b + "px" });
    }),
    (e.prototype.is = function (a) {
      return this._states.current[a] && this._states.current[a] > 0;
    }),
    (e.prototype.current = function (a) {
      if (a === d) return this._current;
      if (0 === this._items.length) return d;
      if (((a = this.normalize(a)), this._current !== a)) {
        var b = this.trigger("change", {
          property: { name: "position", value: a },
        });
        b.data !== d && (a = this.normalize(b.data)),
          (this._current = a),
          this.invalidate("position"),
          this.trigger("changed", {
            property: { name: "position", value: this._current },
          });
      }
      return this._current;
    }),
    (e.prototype.invalidate = function (b) {
      return (
        "string" === a.type(b) &&
          ((this._invalidated[b] = !0),
          this.is("valid") && this.leave("valid")),
        a.map(this._invalidated, function (a, b) {
          return b;
        })
      );
    }),
    (e.prototype.reset = function (a) {
      (a = this.normalize(a)) !== d &&
        ((this._speed = 0),
        (this._current = a),
        this.suppress(["translate", "translated"]),
        this.animate(this.coordinates(a)),
        this.release(["translate", "translated"]));
    }),
    (e.prototype.normalize = function (a, b) {
      var c = this._items.length,
        e = b ? 0 : this._clones.length;
      return (
        !this.isNumeric(a) || c < 1
          ? (a = d)
          : (a < 0 || a >= c + e) &&
            (a = ((((a - e / 2) % c) + c) % c) + e / 2),
        a
      );
    }),
    (e.prototype.relative = function (a) {
      return (a -= this._clones.length / 2), this.normalize(a, !0);
    }),
    (e.prototype.maximum = function (a) {
      var b,
        c,
        d,
        e = this.settings,
        f = this._coordinates.length;
      if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
      else if (e.autoWidth || e.merge) {
        if ((b = this._items.length))
          for (
            c = this._items[--b].width(), d = this.$element.width();
            b-- && !((c += this._items[b].width() + this.settings.margin) > d);

          );
        f = b + 1;
      } else
        f = e.center ? this._items.length - 1 : this._items.length - e.items;
      return a && (f -= this._clones.length / 2), Math.max(f, 0);
    }),
    (e.prototype.minimum = function (a) {
      return a ? 0 : this._clones.length / 2;
    }),
    (e.prototype.items = function (a) {
      return a === d
        ? this._items.slice()
        : ((a = this.normalize(a, !0)), this._items[a]);
    }),
    (e.prototype.mergers = function (a) {
      return a === d
        ? this._mergers.slice()
        : ((a = this.normalize(a, !0)), this._mergers[a]);
    }),
    (e.prototype.clones = function (b) {
      var c = this._clones.length / 2,
        e = c + this._items.length,
        f = function (a) {
          return a % 2 == 0 ? e + a / 2 : c - (a + 1) / 2;
        };
      return b === d
        ? a.map(this._clones, function (a, b) {
            return f(b);
          })
        : a.map(this._clones, function (a, c) {
            return a === b ? f(c) : null;
          });
    }),
    (e.prototype.speed = function (a) {
      return a !== d && (this._speed = a), this._speed;
    }),
    (e.prototype.coordinates = function (b) {
      var c,
        e = 1,
        f = b - 1;
      return b === d
        ? a.map(
            this._coordinates,
            a.proxy(function (a, b) {
              return this.coordinates(b);
            }, this)
          )
        : (this.settings.center
            ? (this.settings.rtl && ((e = -1), (f = b + 1)),
              (c = this._coordinates[b]),
              (c += ((this.width() - c + (this._coordinates[f] || 0)) / 2) * e))
            : (c = this._coordinates[f] || 0),
          (c = Math.ceil(c)));
    }),
    (e.prototype.duration = function (a, b, c) {
      return 0 === c
        ? 0
        : Math.min(Math.max(Math.abs(b - a), 1), 6) *
            Math.abs(c || this.settings.smartSpeed);
    }),
    (e.prototype.to = function (a, b) {
      var c = this.current(),
        d = null,
        e = a - this.relative(c),
        f = (e > 0) - (e < 0),
        g = this._items.length,
        h = this.minimum(),
        i = this.maximum();
      this.settings.loop
        ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g),
          (a = c + e),
          (d = ((((a - h) % g) + g) % g) + h) !== a &&
            d - e <= i &&
            d - e > 0 &&
            ((c = d - e), (a = d), this.reset(c)))
        : this.settings.rewind
        ? ((i += 1), (a = ((a % i) + i) % i))
        : (a = Math.max(h, Math.min(i, a))),
        this.speed(this.duration(c, a, b)),
        this.current(a),
        this.isVisible() && this.update();
    }),
    (e.prototype.next = function (a) {
      (a = a || !1), this.to(this.relative(this.current()) + 1, a);
    }),
    (e.prototype.prev = function (a) {
      (a = a || !1), this.to(this.relative(this.current()) - 1, a);
    }),
    (e.prototype.onTransitionEnd = function (a) {
      if (
        a !== d &&
        (a.stopPropagation(),
        (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))
      )
        return !1;
      this.leave("animating"), this.trigger("translated");
    }),
    (e.prototype.viewport = function () {
      var d;
      return (
        this.options.responsiveBaseElement !== b
          ? (d = a(this.options.responsiveBaseElement).width())
          : b.innerWidth
          ? (d = b.innerWidth)
          : c.documentElement && c.documentElement.clientWidth
          ? (d = c.documentElement.clientWidth)
          : console.warn("Can not detect viewport width."),
        d
      );
    }),
    (e.prototype.replace = function (b) {
      this.$stage.empty(),
        (this._items = []),
        b && (b = b instanceof jQuery ? b : a(b)),
        this.settings.nestedItemSelector &&
          (b = b.find("." + this.settings.nestedItemSelector)),
        b
          .filter(function () {
            return 1 === this.nodeType;
          })
          .each(
            a.proxy(function (a, b) {
              (b = this.prepare(b)),
                this.$stage.append(b),
                this._items.push(b),
                this._mergers.push(
                  1 *
                    b
                      .find("[data-merge]")
                      .addBack("[data-merge]")
                      .attr("data-merge") || 1
                );
            }, this)
          ),
        this.reset(
          this.isNumeric(this.settings.startPosition)
            ? this.settings.startPosition
            : 0
        ),
        this.invalidate("items");
    }),
    (e.prototype.add = function (b, c) {
      var e = this.relative(this._current);
      (c = c === d ? this._items.length : this.normalize(c, !0)),
        (b = b instanceof jQuery ? b : a(b)),
        this.trigger("add", { content: b, position: c }),
        (b = this.prepare(b)),
        0 === this._items.length || c === this._items.length
          ? (0 === this._items.length && this.$stage.append(b),
            0 !== this._items.length && this._items[c - 1].after(b),
            this._items.push(b),
            this._mergers.push(
              1 *
                b
                  .find("[data-merge]")
                  .addBack("[data-merge]")
                  .attr("data-merge") || 1
            ))
          : (this._items[c].before(b),
            this._items.splice(c, 0, b),
            this._mergers.splice(
              c,
              0,
              1 *
                b
                  .find("[data-merge]")
                  .addBack("[data-merge]")
                  .attr("data-merge") || 1
            )),
        this._items[e] && this.reset(this._items[e].index()),
        this.invalidate("items"),
        this.trigger("added", { content: b, position: c });
    }),
    (e.prototype.remove = function (a) {
      (a = this.normalize(a, !0)) !== d &&
        (this.trigger("remove", { content: this._items[a], position: a }),
        this._items[a].remove(),
        this._items.splice(a, 1),
        this._mergers.splice(a, 1),
        this.invalidate("items"),
        this.trigger("removed", { content: null, position: a }));
    }),
    (e.prototype.preloadAutoWidthImages = function (b) {
      b.each(
        a.proxy(function (b, c) {
          this.enter("pre-loading"),
            (c = a(c)),
            a(new Image())
              .one(
                "load",
                a.proxy(function (a) {
                  c.attr("src", a.target.src),
                    c.css("opacity", 1),
                    this.leave("pre-loading"),
                    !this.is("pre-loading") &&
                      !this.is("initializing") &&
                      this.refresh();
                }, this)
              )
              .attr(
                "src",
                c.attr("src") || c.attr("data-src") || c.attr("data-src-retina")
              );
        }, this)
      );
    }),
    (e.prototype.destroy = function () {
      this.$element.off(".owl.core"),
        this.$stage.off(".owl.core"),
        a(c).off(".owl.core"),
        !1 !== this.settings.responsive &&
          (b.clearTimeout(this.resizeTimer),
          this.off(b, "resize", this._handlers.onThrottledResize));
      for (var d in this._plugins) this._plugins[d].destroy();
      this.$stage.children(".cloned").remove(),
        this.$stage.unwrap(),
        this.$stage.children().contents().unwrap(),
        this.$stage.children().unwrap(),
        this.$stage.remove(),
        this.$element
          .removeClass(this.options.refreshClass)
          .removeClass(this.options.loadingClass)
          .removeClass(this.options.loadedClass)
          .removeClass(this.options.rtlClass)
          .removeClass(this.options.dragClass)
          .removeClass(this.options.grabClass)
          .attr(
            "class",
            this.$element
              .attr("class")
              .replace(
                new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"),
                ""
              )
          )
          .removeData("owl.carousel");
    }),
    (e.prototype.op = function (a, b, c) {
      var d = this.settings.rtl;
      switch (b) {
        case "<":
          return d ? a > c : a < c;
        case ">":
          return d ? a < c : a > c;
        case ">=":
          return d ? a <= c : a >= c;
        case "<=":
          return d ? a >= c : a <= c;
      }
    }),
    (e.prototype.on = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    }),
    (e.prototype.off = function (a, b, c, d) {
      a.removeEventListener
        ? a.removeEventListener(b, c, d)
        : a.detachEvent && a.detachEvent("on" + b, c);
    }),
    (e.prototype.trigger = function (b, c, d, f, g) {
      var h = { item: { count: this._items.length, index: this.current() } },
        i = a.camelCase(
          a
            .grep(["on", b, d], function (a) {
              return a;
            })
            .join("-")
            .toLowerCase()
        ),
        j = a.Event(
          [b, "owl", d || "carousel"].join(".").toLowerCase(),
          a.extend({ relatedTarget: this }, h, c)
        );
      return (
        this._supress[b] ||
          (a.each(this._plugins, function (a, b) {
            b.onTrigger && b.onTrigger(j);
          }),
          this.register({ type: e.Type.Event, name: b }),
          this.$element.trigger(j),
          this.settings &&
            "function" == typeof this.settings[i] &&
            this.settings[i].call(this, j)),
        j
      );
    }),
    (e.prototype.enter = function (b) {
      a.each(
        [b].concat(this._states.tags[b] || []),
        a.proxy(function (a, b) {
          this._states.current[b] === d && (this._states.current[b] = 0),
            this._states.current[b]++;
        }, this)
      );
    }),
    (e.prototype.leave = function (b) {
      a.each(
        [b].concat(this._states.tags[b] || []),
        a.proxy(function (a, b) {
          this._states.current[b]--;
        }, this)
      );
    }),
    (e.prototype.register = function (b) {
      if (b.type === e.Type.Event) {
        if (
          (a.event.special[b.name] || (a.event.special[b.name] = {}),
          !a.event.special[b.name].owl)
        ) {
          var c = a.event.special[b.name]._default;
          (a.event.special[b.name]._default = function (a) {
            return !c ||
              !c.apply ||
              (a.namespace && -1 !== a.namespace.indexOf("owl"))
              ? a.namespace && a.namespace.indexOf("owl") > -1
              : c.apply(this, arguments);
          }),
            (a.event.special[b.name].owl = !0);
        }
      } else
        b.type === e.Type.State &&
          (this._states.tags[b.name]
            ? (this._states.tags[b.name] = this._states.tags[b.name].concat(
                b.tags
              ))
            : (this._states.tags[b.name] = b.tags),
          (this._states.tags[b.name] = a.grep(
            this._states.tags[b.name],
            a.proxy(function (c, d) {
              return a.inArray(c, this._states.tags[b.name]) === d;
            }, this)
          )));
    }),
    (e.prototype.suppress = function (b) {
      a.each(
        b,
        a.proxy(function (a, b) {
          this._supress[b] = !0;
        }, this)
      );
    }),
    (e.prototype.release = function (b) {
      a.each(
        b,
        a.proxy(function (a, b) {
          delete this._supress[b];
        }, this)
      );
    }),
    (e.prototype.pointer = function (a) {
      var c = { x: null, y: null };
      return (
        (a = a.originalEvent || a || b.event),
        (a =
          a.touches && a.touches.length
            ? a.touches[0]
            : a.changedTouches && a.changedTouches.length
            ? a.changedTouches[0]
            : a),
        a.pageX
          ? ((c.x = a.pageX), (c.y = a.pageY))
          : ((c.x = a.clientX), (c.y = a.clientY)),
        c
      );
    }),
    (e.prototype.isNumeric = function (a) {
      return !isNaN(parseFloat(a));
    }),
    (e.prototype.difference = function (a, b) {
      return { x: a.x - b.x, y: a.y - b.y };
    }),
    (a.fn.owlCarousel = function (b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return this.each(function () {
        var d = a(this),
          f = d.data("owl.carousel");
        f ||
          ((f = new e(this, "object" == typeof b && b)),
          d.data("owl.carousel", f),
          a.each(
            [
              "next",
              "prev",
              "to",
              "destroy",
              "refresh",
              "replace",
              "add",
              "remove",
            ],
            function (b, c) {
              f.register({ type: e.Type.Event, name: c }),
                f.$element.on(
                  c + ".owl.carousel.core",
                  a.proxy(function (a) {
                    a.namespace &&
                      a.relatedTarget !== this &&
                      (this.suppress([c]),
                      f[c].apply(this, [].slice.call(arguments, 1)),
                      this.release([c]));
                  }, f)
                );
            }
          )),
          "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c);
      });
    }),
    (a.fn.owlCarousel.Constructor = e);
})(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._interval = null),
        (this._visible = null),
        (this._handlers = {
          "initialized.owl.carousel": a.proxy(function (a) {
            a.namespace && this._core.settings.autoRefresh && this.watch();
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (e.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
      (e.prototype.watch = function () {
        this._interval ||
          ((this._visible = this._core.isVisible()),
          (this._interval = b.setInterval(
            a.proxy(this.refresh, this),
            this._core.settings.autoRefreshInterval
          )));
      }),
      (e.prototype.refresh = function () {
        this._core.isVisible() !== this._visible &&
          ((this._visible = !this._visible),
          this._core.$element.toggleClass("owl-hidden", !this._visible),
          this._visible &&
            this._core.invalidate("width") &&
            this._core.refresh());
      }),
      (e.prototype.destroy = function () {
        var a, c;
        b.clearInterval(this._interval);
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (c in Object.getOwnPropertyNames(this))
          "function" != typeof this[c] && (this[c] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._loaded = []),
        (this._handlers = {
          "initialized.owl.carousel change.owl.carousel resized.owl.carousel":
            a.proxy(function (b) {
              if (
                b.namespace &&
                this._core.settings &&
                this._core.settings.lazyLoad &&
                ((b.property && "position" == b.property.name) ||
                  "initialized" == b.type)
              ) {
                var c = this._core.settings,
                  e = (c.center && Math.ceil(c.items / 2)) || c.items,
                  f = (c.center && -1 * e) || 0,
                  g =
                    (b.property && b.property.value !== d
                      ? b.property.value
                      : this._core.current()) + f,
                  h = this._core.clones().length,
                  i = a.proxy(function (a, b) {
                    this.load(b);
                  }, this);
                for (
                  c.lazyLoadEager > 0 &&
                  ((e += c.lazyLoadEager),
                  c.loop && ((g -= c.lazyLoadEager), e++));
                  f++ < e;

                )
                  this.load(h / 2 + this._core.relative(g)),
                    h && a.each(this._core.clones(this._core.relative(g)), i),
                    g++;
              }
            }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (e.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }),
      (e.prototype.load = function (c) {
        var d = this._core.$stage.children().eq(c),
          e = d && d.find(".owl-lazy");
        !e ||
          a.inArray(d.get(0), this._loaded) > -1 ||
          (e.each(
            a.proxy(function (c, d) {
              var e,
                f = a(d),
                g =
                  (b.devicePixelRatio > 1 && f.attr("data-src-retina")) ||
                  f.attr("data-src") ||
                  f.attr("data-srcset");
              this._core.trigger("load", { element: f, url: g }, "lazy"),
                f.is("img")
                  ? f
                      .one(
                        "load.owl.lazy",
                        a.proxy(function () {
                          f.css("opacity", 1),
                            this._core.trigger(
                              "loaded",
                              { element: f, url: g },
                              "lazy"
                            );
                        }, this)
                      )
                      .attr("src", g)
                  : f.is("source")
                  ? f
                      .one(
                        "load.owl.lazy",
                        a.proxy(function () {
                          this._core.trigger(
                            "loaded",
                            { element: f, url: g },
                            "lazy"
                          );
                        }, this)
                      )
                      .attr("srcset", g)
                  : ((e = new Image()),
                    (e.onload = a.proxy(function () {
                      f.css({
                        "background-image": 'url("' + g + '")',
                        opacity: "1",
                      }),
                        this._core.trigger(
                          "loaded",
                          { element: f, url: g },
                          "lazy"
                        );
                    }, this)),
                    (e.src = g));
            }, this)
          ),
          this._loaded.push(d.get(0)));
      }),
      (e.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Lazy = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (c) {
      (this._core = c),
        (this._previousHeight = null),
        (this._handlers = {
          "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (
            a
          ) {
            a.namespace && this._core.settings.autoHeight && this.update();
          },
          this),
          "changed.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.autoHeight &&
              "position" === a.property.name &&
              this.update();
          }, this),
          "loaded.owl.lazy": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.autoHeight &&
              a.element.closest("." + this._core.settings.itemClass).index() ===
                this._core.current() &&
              this.update();
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        (this._intervalId = null);
      var d = this;
      a(b).on("load", function () {
        d._core.settings.autoHeight && d.update();
      }),
        a(b).resize(function () {
          d._core.settings.autoHeight &&
            (null != d._intervalId && clearTimeout(d._intervalId),
            (d._intervalId = setTimeout(function () {
              d.update();
            }, 250)));
        });
    };
    (e.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
      (e.prototype.update = function () {
        var b = this._core._current,
          c = b + this._core.settings.items,
          d = this._core.settings.lazyLoad,
          e = this._core.$stage.children().toArray().slice(b, c),
          f = [],
          g = 0;
        a.each(e, function (b, c) {
          f.push(a(c).height());
        }),
          (g = Math.max.apply(null, f)),
          g <= 1 && d && this._previousHeight && (g = this._previousHeight),
          (this._previousHeight = g),
          this._core.$stage
            .parent()
            .height(g)
            .addClass(this._core.settings.autoHeightClass);
      }),
      (e.prototype.destroy = function () {
        var a, b;
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._videos = {}),
        (this._playing = null),
        (this._handlers = {
          "initialized.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.register({
                type: "state",
                name: "playing",
                tags: ["interacting"],
              });
          }, this),
          "resize.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.video &&
              this.isInFullScreen() &&
              a.preventDefault();
          }, this),
          "refreshed.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.is("resizing") &&
              this._core.$stage.find(".cloned .owl-video-frame").remove();
          }, this),
          "changed.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              "position" === a.property.name &&
              this._playing &&
              this.stop();
          }, this),
          "prepared.owl.carousel": a.proxy(function (b) {
            if (b.namespace) {
              var c = a(b.content).find(".owl-video");
              c.length &&
                (c.css("display", "none"), this.fetch(c, a(b.content)));
            }
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        this._core.$element.on(
          "click.owl.video",
          ".owl-video-play-icon",
          a.proxy(function (a) {
            this.play(a);
          }, this)
        );
    };
    (e.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
      (e.prototype.fetch = function (a, b) {
        var c = (function () {
            return a.attr("data-vimeo-id")
              ? "vimeo"
              : a.attr("data-vzaar-id")
              ? "vzaar"
              : "youtube";
          })(),
          d =
            a.attr("data-vimeo-id") ||
            a.attr("data-youtube-id") ||
            a.attr("data-vzaar-id"),
          e = a.attr("data-width") || this._core.settings.videoWidth,
          f = a.attr("data-height") || this._core.settings.videoHeight,
          g = a.attr("href");
        if (!g) throw new Error("Missing video URL.");
        if (
          ((d = g.match(
            /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
          )),
          d[3].indexOf("youtu") > -1)
        )
          c = "youtube";
        else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
        else {
          if (!(d[3].indexOf("vzaar") > -1))
            throw new Error("Video URL not supported.");
          c = "vzaar";
        }
        (d = d[6]),
          (this._videos[g] = { type: c, id: d, width: e, height: f }),
          b.attr("data-video", g),
          this.thumbnail(a, this._videos[g]);
      }),
      (e.prototype.thumbnail = function (b, c) {
        var d,
          e,
          f,
          g =
            c.width && c.height
              ? "width:" + c.width + "px;height:" + c.height + "px;"
              : "",
          h = b.find("img"),
          i = "src",
          j = "",
          k = this._core.settings,
          l = function (c) {
            (e = '<div class="owl-video-play-icon"></div>'),
              (d = k.lazyLoad
                ? a("<div/>", { class: "owl-video-tn " + j, srcType: c })
                : a("<div/>", {
                    class: "owl-video-tn",
                    style: "opacity:1;background-image:url(" + c + ")",
                  })),
              b.after(d),
              b.after(e);
          };
        if (
          (b.wrap(a("<div/>", { class: "owl-video-wrapper", style: g })),
          this._core.settings.lazyLoad && ((i = "data-src"), (j = "owl-lazy")),
          h.length)
        )
          return l(h.attr(i)), h.remove(), !1;
        "youtube" === c.type
          ? ((f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg"), l(f))
          : "vimeo" === c.type
          ? a.ajax({
              type: "GET",
              url: "//vimeo.com/api/v2/video/" + c.id + ".json",
              jsonp: "callback",
              dataType: "jsonp",
              success: function (a) {
                (f = a[0].thumbnail_large), l(f);
              },
            })
          : "vzaar" === c.type &&
            a.ajax({
              type: "GET",
              url: "//vzaar.com/api/videos/" + c.id + ".json",
              jsonp: "callback",
              dataType: "jsonp",
              success: function (a) {
                (f = a.framegrab_url), l(f);
              },
            });
      }),
      (e.prototype.stop = function () {
        this._core.trigger("stop", null, "video"),
          this._playing.find(".owl-video-frame").remove(),
          this._playing.removeClass("owl-video-playing"),
          (this._playing = null),
          this._core.leave("playing"),
          this._core.trigger("stopped", null, "video");
      }),
      (e.prototype.play = function (b) {
        var c,
          d = a(b.target),
          e = d.closest("." + this._core.settings.itemClass),
          f = this._videos[e.attr("data-video")],
          g = f.width || "100%",
          h = f.height || this._core.$stage.height();
        this._playing ||
          (this._core.enter("playing"),
          this._core.trigger("play", null, "video"),
          (e = this._core.items(this._core.relative(e.index()))),
          this._core.reset(e.index()),
          (c = a(
            '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'
          )),
          c.attr("height", h),
          c.attr("width", g),
          "youtube" === f.type
            ? c.attr(
                "src",
                "//www.youtube.com/embed/" +
                  f.id +
                  "?autoplay=1&rel=0&v=" +
                  f.id
              )
            : "vimeo" === f.type
            ? c.attr("src", "//player.vimeo.com/video/" + f.id + "?autoplay=1")
            : "vzaar" === f.type &&
              c.attr(
                "src",
                "//view.vzaar.com/" + f.id + "/player?autoplay=true"
              ),
          a(c)
            .wrap('<div class="owl-video-frame" />')
            .insertAfter(e.find(".owl-video")),
          (this._playing = e.addClass("owl-video-playing")));
      }),
      (e.prototype.isInFullScreen = function () {
        var b =
          c.fullscreenElement ||
          c.mozFullScreenElement ||
          c.webkitFullscreenElement;
        return b && a(b).parent().hasClass("owl-video-frame");
      }),
      (e.prototype.destroy = function () {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Video = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this.core = b),
        (this.core.options = a.extend({}, e.Defaults, this.core.options)),
        (this.swapping = !0),
        (this.previous = d),
        (this.next = d),
        (this.handlers = {
          "change.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              "position" == a.property.name &&
              ((this.previous = this.core.current()),
              (this.next = a.property.value));
          }, this),
          "drag.owl.carousel dragged.owl.carousel translated.owl.carousel":
            a.proxy(function (a) {
              a.namespace && (this.swapping = "translated" == a.type);
            }, this),
          "translate.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this.swapping &&
              (this.core.options.animateOut || this.core.options.animateIn) &&
              this.swap();
          }, this),
        }),
        this.core.$element.on(this.handlers);
    };
    (e.Defaults = { animateOut: !1, animateIn: !1 }),
      (e.prototype.swap = function () {
        if (
          1 === this.core.settings.items &&
          a.support.animation &&
          a.support.transition
        ) {
          this.core.speed(0);
          var b,
            c = a.proxy(this.clear, this),
            d = this.core.$stage.children().eq(this.previous),
            e = this.core.$stage.children().eq(this.next),
            f = this.core.settings.animateIn,
            g = this.core.settings.animateOut;
          this.core.current() !== this.previous &&
            (g &&
              ((b =
                this.core.coordinates(this.previous) -
                this.core.coordinates(this.next)),
              d
                .one(a.support.animation.end, c)
                .css({ left: b + "px" })
                .addClass("animated owl-animated-out")
                .addClass(g)),
            f &&
              e
                .one(a.support.animation.end, c)
                .addClass("animated owl-animated-in")
                .addClass(f));
        }
      }),
      (e.prototype.clear = function (b) {
        a(b.target)
          .css({ left: "" })
          .removeClass("animated owl-animated-out owl-animated-in")
          .removeClass(this.core.settings.animateIn)
          .removeClass(this.core.settings.animateOut),
          this.core.onTransitionEnd();
      }),
      (e.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Animate = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._call = null),
        (this._time = 0),
        (this._timeout = 0),
        (this._paused = !0),
        (this._handlers = {
          "changed.owl.carousel": a.proxy(function (a) {
            a.namespace && "settings" === a.property.name
              ? this._core.settings.autoplay
                ? this.play()
                : this.stop()
              : a.namespace &&
                "position" === a.property.name &&
                this._paused &&
                (this._time = 0);
          }, this),
          "initialized.owl.carousel": a.proxy(function (a) {
            a.namespace && this._core.settings.autoplay && this.play();
          }, this),
          "play.owl.autoplay": a.proxy(function (a, b, c) {
            a.namespace && this.play(b, c);
          }, this),
          "stop.owl.autoplay": a.proxy(function (a) {
            a.namespace && this.stop();
          }, this),
          "mouseover.owl.autoplay": a.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "mouseleave.owl.autoplay": a.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.play();
          }, this),
          "touchstart.owl.core": a.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "touchend.owl.core": a.proxy(function () {
            this._core.settings.autoplayHoverPause && this.play();
          }, this),
        }),
        this._core.$element.on(this._handlers),
        (this._core.options = a.extend({}, e.Defaults, this._core.options));
    };
    (e.Defaults = {
      autoplay: !1,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !1,
      autoplaySpeed: !1,
    }),
      (e.prototype._next = function (d) {
        (this._call = b.setTimeout(
          a.proxy(this._next, this, d),
          this._timeout * (Math.round(this.read() / this._timeout) + 1) -
            this.read()
        )),
          this._core.is("interacting") ||
            c.hidden ||
            this._core.next(d || this._core.settings.autoplaySpeed);
      }),
      (e.prototype.read = function () {
        return new Date().getTime() - this._time;
      }),
      (e.prototype.play = function (c, d) {
        var e;
        this._core.is("rotating") || this._core.enter("rotating"),
          (c = c || this._core.settings.autoplayTimeout),
          (e = Math.min(this._time % (this._timeout || c), c)),
          this._paused
            ? ((this._time = this.read()), (this._paused = !1))
            : b.clearTimeout(this._call),
          (this._time += (this.read() % c) - e),
          (this._timeout = c),
          (this._call = b.setTimeout(a.proxy(this._next, this, d), c - e));
      }),
      (e.prototype.stop = function () {
        this._core.is("rotating") &&
          ((this._time = 0),
          (this._paused = !0),
          b.clearTimeout(this._call),
          this._core.leave("rotating"));
      }),
      (e.prototype.pause = function () {
        this._core.is("rotating") &&
          !this._paused &&
          ((this._time = this.read()),
          (this._paused = !0),
          b.clearTimeout(this._call));
      }),
      (e.prototype.destroy = function () {
        var a, b;
        this.stop();
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.autoplay = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    "use strict";
    var e = function (b) {
      (this._core = b),
        (this._initialized = !1),
        (this._pages = []),
        (this._controls = {}),
        (this._templates = []),
        (this.$element = this._core.$element),
        (this._overrides = {
          next: this._core.next,
          prev: this._core.prev,
          to: this._core.to,
        }),
        (this._handlers = {
          "prepared.owl.carousel": a.proxy(function (b) {
            b.namespace &&
              this._core.settings.dotsData &&
              this._templates.push(
                '<div class="' +
                  this._core.settings.dotClass +
                  '">' +
                  a(b.content)
                    .find("[data-dot]")
                    .addBack("[data-dot]")
                    .attr("data-dot") +
                  "</div>"
              );
          }, this),
          "added.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(a.position, 0, this._templates.pop());
          }, this),
          "remove.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(a.position, 1);
          }, this),
          "changed.owl.carousel": a.proxy(function (a) {
            a.namespace && "position" == a.property.name && this.draw();
          }, this),
          "initialized.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              !this._initialized &&
              (this._core.trigger("initialize", null, "navigation"),
              this.initialize(),
              this.update(),
              this.draw(),
              (this._initialized = !0),
              this._core.trigger("initialized", null, "navigation"));
          }, this),
          "refreshed.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._initialized &&
              (this._core.trigger("refresh", null, "navigation"),
              this.update(),
              this.draw(),
              this._core.trigger("refreshed", null, "navigation"));
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this.$element.on(this._handlers);
    };
    (e.Defaults = {
      nav: !1,
      navText: [
        '<span aria-label="Previous">&#x2039;</span>',
        '<span aria-label="Next">&#x203a;</span>',
      ],
      navSpeed: !1,
      navElement: 'button type="button" role="presentation"',
      navContainer: !1,
      navContainerClass: "owl-nav",
      navClass: ["owl-prev", "owl-next"],
      slideBy: 1,
      dotClass: "owl-dot",
      dotsClass: "owl-dots",
      dots: !0,
      dotsEach: !1,
      dotsData: !1,
      dotsSpeed: !1,
      dotsContainer: !1,
    }),
      (e.prototype.initialize = function () {
        var b,
          c = this._core.settings;
        (this._controls.$relative = (
          c.navContainer
            ? a(c.navContainer)
            : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)
        ).addClass("disabled")),
          (this._controls.$previous = a("<" + c.navElement + ">")
            .addClass(c.navClass[0])
            .html(c.navText[0])
            .prependTo(this._controls.$relative)
            .on(
              "click",
              a.proxy(function (a) {
                this.prev(c.navSpeed);
              }, this)
            )),
          (this._controls.$next = a("<" + c.navElement + ">")
            .addClass(c.navClass[1])
            .html(c.navText[1])
            .appendTo(this._controls.$relative)
            .on(
              "click",
              a.proxy(function (a) {
                this.next(c.navSpeed);
              }, this)
            )),
          c.dotsData ||
            (this._templates = [
              a('<button role="button">')
                .addClass(c.dotClass)
                .append(a("<span>"))
                .prop("outerHTML"),
            ]),
          (this._controls.$absolute = (
            c.dotsContainer
              ? a(c.dotsContainer)
              : a("<div>").addClass(c.dotsClass).appendTo(this.$element)
          ).addClass("disabled")),
          this._controls.$absolute.on(
            "click",
            "button",
            a.proxy(function (b) {
              var d = a(b.target).parent().is(this._controls.$absolute)
                ? a(b.target).index()
                : a(b.target).parent().index();
              b.preventDefault(), this.to(d, c.dotsSpeed);
            }, this)
          );
        for (b in this._overrides) this._core[b] = a.proxy(this[b], this);
      }),
      (e.prototype.destroy = function () {
        var a, b, c, d, e;
        e = this._core.settings;
        for (a in this._handlers) this.$element.off(a, this._handlers[a]);
        for (b in this._controls)
          "$relative" === b && e.navContainer
            ? this._controls[b].html("")
            : this._controls[b].remove();
        for (d in this.overides) this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this))
          "function" != typeof this[c] && (this[c] = null);
      }),
      (e.prototype.update = function () {
        var a,
          b,
          c,
          d = this._core.clones().length / 2,
          e = d + this._core.items().length,
          f = this._core.maximum(!0),
          g = this._core.settings,
          h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
        if (
          ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)),
          g.dots || "page" == g.slideBy)
        )
          for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
            if (b >= h || 0 === b) {
              if (
                (this._pages.push({
                  start: Math.min(f, a - d),
                  end: a - d + h - 1,
                }),
                Math.min(f, a - d) === f)
              )
                break;
              (b = 0), ++c;
            }
            b += this._core.mergers(this._core.relative(a));
          }
      }),
      (e.prototype.draw = function () {
        var b,
          c = this._core.settings,
          d = this._core.items().length <= c.items,
          e = this._core.relative(this._core.current()),
          f = c.loop || c.rewind;
        this._controls.$relative.toggleClass("disabled", !c.nav || d),
          c.nav &&
            (this._controls.$previous.toggleClass(
              "disabled",
              !f && e <= this._core.minimum(!0)
            ),
            this._controls.$next.toggleClass(
              "disabled",
              !f && e >= this._core.maximum(!0)
            )),
          this._controls.$absolute.toggleClass("disabled", !c.dots || d),
          c.dots &&
            ((b =
              this._pages.length - this._controls.$absolute.children().length),
            c.dotsData && 0 !== b
              ? this._controls.$absolute.html(this._templates.join(""))
              : b > 0
              ? this._controls.$absolute.append(
                  new Array(b + 1).join(this._templates[0])
                )
              : b < 0 && this._controls.$absolute.children().slice(b).remove(),
            this._controls.$absolute.find(".active").removeClass("active"),
            this._controls.$absolute
              .children()
              .eq(a.inArray(this.current(), this._pages))
              .addClass("active"));
      }),
      (e.prototype.onTrigger = function (b) {
        var c = this._core.settings;
        b.page = {
          index: a.inArray(this.current(), this._pages),
          count: this._pages.length,
          size:
            c &&
            (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items),
        };
      }),
      (e.prototype.current = function () {
        var b = this._core.relative(this._core.current());
        return a
          .grep(
            this._pages,
            a.proxy(function (a, c) {
              return a.start <= b && a.end >= b;
            }, this)
          )
          .pop();
      }),
      (e.prototype.getPosition = function (b) {
        var c,
          d,
          e = this._core.settings;
        return (
          "page" == e.slideBy
            ? ((c = a.inArray(this.current(), this._pages)),
              (d = this._pages.length),
              b ? ++c : --c,
              (c = this._pages[((c % d) + d) % d].start))
            : ((c = this._core.relative(this._core.current())),
              (d = this._core.items().length),
              b ? (c += e.slideBy) : (c -= e.slideBy)),
          c
        );
      }),
      (e.prototype.next = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b);
      }),
      (e.prototype.prev = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b);
      }),
      (e.prototype.to = function (b, c, d) {
        var e;
        !d && this._pages.length
          ? ((e = this._pages.length),
            a.proxy(this._overrides.to, this._core)(
              this._pages[((b % e) + e) % e].start,
              c
            ))
          : a.proxy(this._overrides.to, this._core)(b, c);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Navigation = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    "use strict";
    var e = function (c) {
      (this._core = c),
        (this._hashes = {}),
        (this.$element = this._core.$element),
        (this._handlers = {
          "initialized.owl.carousel": a.proxy(function (c) {
            c.namespace &&
              "URLHash" === this._core.settings.startPosition &&
              a(b).trigger("hashchange.owl.navigation");
          }, this),
          "prepared.owl.carousel": a.proxy(function (b) {
            if (b.namespace) {
              var c = a(b.content)
                .find("[data-hash]")
                .addBack("[data-hash]")
                .attr("data-hash");
              if (!c) return;
              this._hashes[c] = b.content;
            }
          }, this),
          "changed.owl.carousel": a.proxy(function (c) {
            if (c.namespace && "position" === c.property.name) {
              var d = this._core.items(
                  this._core.relative(this._core.current())
                ),
                e = a
                  .map(this._hashes, function (a, b) {
                    return a === d ? b : null;
                  })
                  .join();
              if (!e || b.location.hash.slice(1) === e) return;
              b.location.hash = e;
            }
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this.$element.on(this._handlers),
        a(b).on(
          "hashchange.owl.navigation",
          a.proxy(function (a) {
            var c = b.location.hash.substring(1),
              e = this._core.$stage.children(),
              f = this._hashes[c] && e.index(this._hashes[c]);
            f !== d &&
              f !== this._core.current() &&
              this._core.to(this._core.relative(f), !1, !0);
          }, this)
        );
    };
    (e.Defaults = { URLhashListener: !1 }),
      (e.prototype.destroy = function () {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this))
          "function" != typeof this[d] && (this[d] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Hash = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    function e(b, c) {
      var e = !1,
        f = b.charAt(0).toUpperCase() + b.slice(1);
      return (
        a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
          if (g[b] !== d) return (e = !c || b), !1;
        }),
        e
      );
    }
    function f(a) {
      return e(a, !0);
    }
    var g = a("<support>").get(0).style,
      h = "Webkit Moz O ms".split(" "),
      i = {
        transition: {
          end: {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            transition: "transitionend",
          },
        },
        animation: {
          end: {
            WebkitAnimation: "webkitAnimationEnd",
            MozAnimation: "animationend",
            OAnimation: "oAnimationEnd",
            animation: "animationend",
          },
        },
      },
      j = {
        csstransforms: function () {
          return !!e("transform");
        },
        csstransforms3d: function () {
          return !!e("perspective");
        },
        csstransitions: function () {
          return !!e("transition");
        },
        cssanimations: function () {
          return !!e("animation");
        },
      };
    j.csstransitions() &&
      ((a.support.transition = new String(f("transition"))),
      (a.support.transition.end = i.transition.end[a.support.transition])),
      j.cssanimations() &&
        ((a.support.animation = new String(f("animation"))),
        (a.support.animation.end = i.animation.end[a.support.animation])),
      j.csstransforms() &&
        ((a.support.transform = new String(f("transform"))),
        (a.support.transform3d = j.csstransforms3d()));
  })(window.Zepto || window.jQuery, window, document);

/* jQuery elevateZoom 3.0.8 - Demo's and documentation: - www.elevateweb.co.uk/image-zoom - Copyright (c) 2013 Andrew Eades - www.elevateweb.co.uk - Dual licensed under the LGPL licenses. - http://en.wikipedia.org/wiki/MIT_License - http://en.wikipedia.org/wiki/GNU_General_Public_License */
"function" !== typeof Object.create &&
  (Object.create = function (d) {
    function h() {}
    h.prototype = d;
    return new h();
  });
(function (d, h, l, m) {
  var k = {
    init: function (b, a) {
      var c = this;
      c.elem = a;
      c.$elem = d(a);
      c.imageSrc = c.$elem.data("zoom-image")
        ? c.$elem.data("zoom-image")
        : c.$elem.attr("src");
      c.options = d.extend({}, d.fn.elevateZoom.options, b);
      c.options.tint &&
        ((c.options.lensColour = "none"), (c.options.lensOpacity = "1"));
      "inner" == c.options.zoomType && (c.options.showLens = !1);
      c.$elem.parent().removeAttr("title").removeAttr("alt");
      c.zoomImage = c.imageSrc;
      c.refresh(1);
      d("#" + c.options.gallery + " a").click(function (a) {
        c.options.galleryActiveClass &&
          (d("#" + c.options.gallery + " a").removeClass(
            c.options.galleryActiveClass
          ),
          d(this).addClass(c.options.galleryActiveClass));
        a.preventDefault();
        d(this).data("zoom-image")
          ? (c.zoomImagePre = d(this).data("zoom-image"))
          : (c.zoomImagePre = d(this).data("image"));
        c.swaptheimage(d(this).data("image"), c.zoomImagePre);
        return !1;
      });
    },
    refresh: function (b) {
      var a = this;
      setTimeout(function () {
        a.fetch(a.imageSrc);
      }, b || a.options.refresh);
    },
    fetch: function (b) {
      var a = this,
        c = new Image();
      c.onload = function () {
        a.largeWidth = c.width;
        a.largeHeight = c.height;
        a.startZoom();
        a.currentImage = a.imageSrc;
        a.options.onZoomedImageLoaded(a.$elem);
      };
      c.src = b;
    },
    startZoom: function () {
      var b = this;
      b.nzWidth = b.$elem.width();
      b.nzHeight = b.$elem.height();
      b.isWindowActive = !1;
      b.isLensActive = !1;
      b.isTintActive = !1;
      b.overWindow = !1;
      b.options.imageCrossfade &&
        ((b.zoomWrap = b.$elem.wrap(
          '<div style="height:' +
            b.nzHeight +
            "px;width:" +
            b.nzWidth +
            'px;" class="zoomWrapper" />'
        )),
        b.$elem.css("position", "absolute"));
      b.zoomLock = 1;
      b.scrollingLock = !1;
      b.changeBgSize = !1;
      b.currentZoomLevel = b.options.zoomLevel;
      b.nzOffset = b.$elem.offset();
      b.widthRatio = b.largeWidth / b.currentZoomLevel / b.nzWidth;
      b.heightRatio = b.largeHeight / b.currentZoomLevel / b.nzHeight;
      "window" == b.options.zoomType &&
        (b.zoomWindowStyle =
          "overflow: hidden;background-position: 0px 0px;text-align:center;background-color: " +
          String(b.options.zoomWindowBgColour) +
          ";width: " +
          String(b.options.zoomWindowWidth) +
          "px;height: " +
          String(b.options.zoomWindowHeight) +
          "px;float: left;background-size: " +
          b.largeWidth / b.currentZoomLevel +
          "px " +
          b.largeHeight / b.currentZoomLevel +
          "px;display: none;z-index:100;border: " +
          String(b.options.borderSize) +
          "px solid " +
          b.options.borderColour +
          ";background-repeat: no-repeat;position: absolute;");
      if ("inner" == b.options.zoomType) {
        var a = b.$elem.css("border-left-width");
        b.zoomWindowStyle =
          "overflow: hidden;margin-left: " +
          String(a) +
          ";margin-top: " +
          String(a) +
          ";background-position: 0px 0px;width: " +
          String(b.nzWidth) +
          "px;height: " +
          String(b.nzHeight) +
          "px;float: left;display: none;cursor:" +
          b.options.cursor +
          ";px solid " +
          b.options.borderColour +
          ";background-repeat: no-repeat;position: absolute;";
      }
      "window" == b.options.zoomType &&
        ((lensHeight =
          b.nzHeight < b.options.zoomWindowWidth / b.widthRatio
            ? b.nzHeight
            : String(b.options.zoomWindowHeight / b.heightRatio)),
        (lensWidth =
          b.largeWidth < b.options.zoomWindowWidth
            ? b.nzWidth
            : b.options.zoomWindowWidth / b.widthRatio),
        (b.lensStyle =
          "background-position: 0px 0px;width: " +
          String(b.options.zoomWindowWidth / b.widthRatio) +
          "px;height: " +
          String(b.options.zoomWindowHeight / b.heightRatio) +
          "px;float: right;display: none;overflow: hidden;z-index: 999;-webkit-transform: translateZ(0);opacity:" +
          b.options.lensOpacity +
          ";filter: alpha(opacity = " +
          100 * b.options.lensOpacity +
          "); zoom:1;width:" +
          lensWidth +
          "px;height:" +
          lensHeight +
          "px;background-color:" +
          b.options.lensColour +
          ";cursor:" +
          b.options.cursor +
          ";border: " +
          b.options.lensBorderSize +
          "px solid " +
          b.options.lensBorderColour +
          ";background-repeat: no-repeat;position: absolute;"));
      b.tintStyle =
        "display: block;position: absolute;background-color: " +
        b.options.tintColour +
        ";filter:alpha(opacity=0);opacity: 0;width: " +
        b.nzWidth +
        "px;height: " +
        b.nzHeight +
        "px;";
      b.lensRound = "";
      "lens" == b.options.zoomType &&
        (b.lensStyle =
          "background-position: 0px 0px;float: left;display: none;border: " +
          String(b.options.borderSize) +
          "px solid " +
          b.options.borderColour +
          ";width:" +
          String(b.options.lensSize) +
          "px;height:" +
          String(b.options.lensSize) +
          "px;background-repeat: no-repeat;position: absolute;");
      "round" == b.options.lensShape &&
        (b.lensRound =
          "border-top-left-radius: " +
          String(b.options.lensSize / 2 + b.options.borderSize) +
          "px;border-top-right-radius: " +
          String(b.options.lensSize / 2 + b.options.borderSize) +
          "px;border-bottom-left-radius: " +
          String(b.options.lensSize / 2 + b.options.borderSize) +
          "px;border-bottom-right-radius: " +
          String(b.options.lensSize / 2 + b.options.borderSize) +
          "px;");
      b.zoomContainer = d(
        '<div class="zoomContainer" style="-webkit-transform: translateZ(0);position:absolute;left:' +
          b.nzOffset.left +
          "px;top:" +
          b.nzOffset.top +
          "px;height:" +
          b.nzHeight +
          "px;width:" +
          b.nzWidth +
          'px;"></div>'
      );
      d("body").append(b.zoomContainer);
      b.options.containLensZoom &&
        "lens" == b.options.zoomType &&
        b.zoomContainer.css("overflow", "hidden");
      "inner" != b.options.zoomType &&
        ((b.zoomLens = d(
          "<div class='zoomLens' style='" +
            b.lensStyle +
            b.lensRound +
            "'>&nbsp;</div>"
        )
          .appendTo(b.zoomContainer)
          .click(function () {
            b.$elem.trigger("click");
          })),
        b.options.tint &&
          ((b.tintContainer = d("<div/>").addClass("tintContainer")),
          (b.zoomTint = d(
            "<div class='zoomTint' style='" + b.tintStyle + "'></div>"
          )),
          b.zoomLens.wrap(b.tintContainer),
          (b.zoomTintcss = b.zoomLens.after(b.zoomTint)),
          (b.zoomTintImage = d(
            '<img style="position: absolute; left: 0px; top: 0px; max-width: none; width: ' +
              b.nzWidth +
              "px; height: " +
              b.nzHeight +
              'px;" src="' +
              b.imageSrc +
              '">'
          )
            .appendTo(b.zoomLens)
            .click(function () {
              b.$elem.trigger("click");
            }))));
      isNaN(b.options.zoomWindowPosition)
        ? (b.zoomWindow = d(
            "<div style='z-index:999;left:" +
              b.windowOffsetLeft +
              "px;top:" +
              b.windowOffsetTop +
              "px;" +
              b.zoomWindowStyle +
              "' class='zoomWindow'>&nbsp;</div>"
          )
            .appendTo("body")
            .click(function () {
              b.$elem.trigger("click");
            }))
        : (b.zoomWindow = d(
            "<div style='z-index:999;left:" +
              b.windowOffsetLeft +
              "px;top:" +
              b.windowOffsetTop +
              "px;" +
              b.zoomWindowStyle +
              "' class='zoomWindow'>&nbsp;</div>"
          )
            .appendTo(b.zoomContainer)
            .click(function () {
              b.$elem.trigger("click");
            }));
      b.zoomWindowContainer = d("<div/>")
        .addClass("zoomWindowContainer")
        .css("width", b.options.zoomWindowWidth);
      b.zoomWindow.wrap(b.zoomWindowContainer);
      "lens" == b.options.zoomType &&
        b.zoomLens.css({ backgroundImage: "url('" + b.imageSrc + "')" });
      "window" == b.options.zoomType &&
        b.zoomWindow.css({ backgroundImage: "url('" + b.imageSrc + "')" });
      "inner" == b.options.zoomType &&
        b.zoomWindow.css({ backgroundImage: "url('" + b.imageSrc + "')" });
      b.$elem.bind("touchmove", function (a) {
        a.preventDefault();
        b.setPosition(
          a.originalEvent.touches[0] || a.originalEvent.changedTouches[0]
        );
      });
      b.zoomContainer.bind("touchmove", function (a) {
        "inner" == b.options.zoomType && b.showHideWindow("show");
        a.preventDefault();
        b.setPosition(
          a.originalEvent.touches[0] || a.originalEvent.changedTouches[0]
        );
      });
      b.zoomContainer.bind("touchend", function (a) {
        b.showHideWindow("hide");
        b.options.showLens && b.showHideLens("hide");
        b.options.tint &&
          "inner" != b.options.zoomType &&
          b.showHideTint("hide");
      });
      b.$elem.bind("touchend", function (a) {
        b.showHideWindow("hide");
        b.options.showLens && b.showHideLens("hide");
        b.options.tint &&
          "inner" != b.options.zoomType &&
          b.showHideTint("hide");
      });
      b.options.showLens &&
        (b.zoomLens.bind("touchmove", function (a) {
          a.preventDefault();
          b.setPosition(
            a.originalEvent.touches[0] || a.originalEvent.changedTouches[0]
          );
        }),
        b.zoomLens.bind("touchend", function (a) {
          b.showHideWindow("hide");
          b.options.showLens && b.showHideLens("hide");
          b.options.tint &&
            "inner" != b.options.zoomType &&
            b.showHideTint("hide");
        }));
      b.$elem.bind("mousemove", function (a) {
        !1 == b.overWindow && b.setElements("show");
        if (b.lastX !== a.clientX || b.lastY !== a.clientY)
          b.setPosition(a), (b.currentLoc = a);
        b.lastX = a.clientX;
        b.lastY = a.clientY;
      });
      b.zoomContainer.bind("mousemove", function (a) {
        !1 == b.overWindow && b.setElements("show");
        if (b.lastX !== a.clientX || b.lastY !== a.clientY)
          b.setPosition(a), (b.currentLoc = a);
        b.lastX = a.clientX;
        b.lastY = a.clientY;
      });
      "inner" != b.options.zoomType &&
        b.zoomLens.bind("mousemove", function (a) {
          if (b.lastX !== a.clientX || b.lastY !== a.clientY)
            b.setPosition(a), (b.currentLoc = a);
          b.lastX = a.clientX;
          b.lastY = a.clientY;
        });
      b.options.tint &&
        "inner" != b.options.zoomType &&
        b.zoomTint.bind("mousemove", function (a) {
          if (b.lastX !== a.clientX || b.lastY !== a.clientY)
            b.setPosition(a), (b.currentLoc = a);
          b.lastX = a.clientX;
          b.lastY = a.clientY;
        });
      "inner" == b.options.zoomType &&
        b.zoomWindow.bind("mousemove", function (a) {
          if (b.lastX !== a.clientX || b.lastY !== a.clientY)
            b.setPosition(a), (b.currentLoc = a);
          b.lastX = a.clientX;
          b.lastY = a.clientY;
        });
      b.zoomContainer
        .add(b.$elem)
        .mouseenter(function () {
          !1 == b.overWindow && b.setElements("show");
        })
        .mouseleave(function () {
          b.scrollLock || b.setElements("hide");
        });
      "inner" != b.options.zoomType &&
        b.zoomWindow
          .mouseenter(function () {
            b.overWindow = !0;
            b.setElements("hide");
          })
          .mouseleave(function () {
            b.overWindow = !1;
          });
      b.minZoomLevel = b.options.minZoomLevel
        ? b.options.minZoomLevel
        : 2 * b.options.scrollZoomIncrement;
      b.options.scrollZoom &&
        b.zoomContainer
          .add(b.$elem)
          .bind("mousewheel DOMMouseScroll MozMousePixelScroll", function (a) {
            b.scrollLock = !0;
            clearTimeout(d.data(this, "timer"));
            d.data(
              this,
              "timer",
              setTimeout(function () {
                b.scrollLock = !1;
              }, 250)
            );
            var e = a.originalEvent.wheelDelta || -1 * a.originalEvent.detail;
            a.stopImmediatePropagation();
            a.stopPropagation();
            a.preventDefault();
            0 < e / 120
              ? b.currentZoomLevel >= b.minZoomLevel &&
                b.changeZoomLevel(
                  b.currentZoomLevel - b.options.scrollZoomIncrement
                )
              : b.options.maxZoomLevel
              ? b.currentZoomLevel <= b.options.maxZoomLevel &&
                b.changeZoomLevel(
                  parseFloat(b.currentZoomLevel) + b.options.scrollZoomIncrement
                )
              : b.changeZoomLevel(
                  parseFloat(b.currentZoomLevel) + b.options.scrollZoomIncrement
                );
            return !1;
          });
    },
    setElements: function (b) {
      if (!this.options.zoomEnabled) return !1;
      "show" == b &&
        this.isWindowSet &&
        ("inner" == this.options.zoomType && this.showHideWindow("show"),
        "window" == this.options.zoomType && this.showHideWindow("show"),
        this.options.showLens && this.showHideLens("show"),
        this.options.tint &&
          "inner" != this.options.zoomType &&
          this.showHideTint("show"));
      "hide" == b &&
        ("window" == this.options.zoomType && this.showHideWindow("hide"),
        this.options.tint || this.showHideWindow("hide"),
        this.options.showLens && this.showHideLens("hide"),
        this.options.tint && this.showHideTint("hide"));
    },
    setPosition: function (b) {
      if (!this.options.zoomEnabled) return !1;
      this.nzHeight = this.$elem.height();
      this.nzWidth = this.$elem.width();
      this.nzOffset = this.$elem.offset();
      this.options.tint &&
        "inner" != this.options.zoomType &&
        (this.zoomTint.css({ top: 0 }), this.zoomTint.css({ left: 0 }));
      this.options.responsive &&
        !this.options.scrollZoom &&
        this.options.showLens &&
        ((lensHeight =
          this.nzHeight < this.options.zoomWindowWidth / this.widthRatio
            ? this.nzHeight
            : String(this.options.zoomWindowHeight / this.heightRatio)),
        (lensWidth =
          this.largeWidth < this.options.zoomWindowWidth
            ? this.nzWidth
            : this.options.zoomWindowWidth / this.widthRatio),
        (this.widthRatio = this.largeWidth / this.nzWidth),
        (this.heightRatio = this.largeHeight / this.nzHeight),
        "lens" != this.options.zoomType &&
          ((lensHeight =
            this.nzHeight < this.options.zoomWindowWidth / this.widthRatio
              ? this.nzHeight
              : String(this.options.zoomWindowHeight / this.heightRatio)),
          (lensWidth =
            this.options.zoomWindowWidth < this.options.zoomWindowWidth
              ? this.nzWidth
              : this.options.zoomWindowWidth / this.widthRatio),
          this.zoomLens.css("width", lensWidth),
          this.zoomLens.css("height", lensHeight),
          this.options.tint &&
            (this.zoomTintImage.css("width", this.nzWidth),
            this.zoomTintImage.css("height", this.nzHeight))),
        "lens" == this.options.zoomType &&
          this.zoomLens.css({
            width: String(this.options.lensSize) + "px",
            height: String(this.options.lensSize) + "px",
          }));
      this.zoomContainer.css({ top: this.nzOffset.top });
      this.zoomContainer.css({ left: this.nzOffset.left });
      this.mouseLeft = parseInt(b.pageX - this.nzOffset.left);
      this.mouseTop = parseInt(b.pageY - this.nzOffset.top);
      "window" == this.options.zoomType &&
        ((this.Etoppos = this.mouseTop < this.zoomLens.height() / 2),
        (this.Eboppos =
          this.mouseTop >
          this.nzHeight -
            this.zoomLens.height() / 2 -
            2 * this.options.lensBorderSize),
        (this.Eloppos = this.mouseLeft < 0 + this.zoomLens.width() / 2),
        (this.Eroppos =
          this.mouseLeft >
          this.nzWidth -
            this.zoomLens.width() / 2 -
            2 * this.options.lensBorderSize));
      "inner" == this.options.zoomType &&
        ((this.Etoppos = this.mouseTop < this.nzHeight / 2 / this.heightRatio),
        (this.Eboppos =
          this.mouseTop > this.nzHeight - this.nzHeight / 2 / this.heightRatio),
        (this.Eloppos =
          this.mouseLeft < 0 + this.nzWidth / 2 / this.widthRatio),
        (this.Eroppos =
          this.mouseLeft >
          this.nzWidth -
            this.nzWidth / 2 / this.widthRatio -
            2 * this.options.lensBorderSize));
      0 >= this.mouseLeft ||
      0 > this.mouseTop ||
      this.mouseLeft > this.nzWidth ||
      this.mouseTop > this.nzHeight
        ? this.setElements("hide")
        : (this.options.showLens &&
            ((this.lensLeftPos = String(
              this.mouseLeft - this.zoomLens.width() / 2
            )),
            (this.lensTopPos = String(
              this.mouseTop - this.zoomLens.height() / 2
            ))),
          this.Etoppos && (this.lensTopPos = 0),
          this.Eloppos &&
            (this.tintpos = this.lensLeftPos = this.windowLeftPos = 0),
          "window" == this.options.zoomType &&
            (this.Eboppos &&
              (this.lensTopPos = Math.max(
                this.nzHeight -
                  this.zoomLens.height() -
                  2 * this.options.lensBorderSize,
                0
              )),
            this.Eroppos &&
              (this.lensLeftPos =
                this.nzWidth -
                this.zoomLens.width() -
                2 * this.options.lensBorderSize)),
          "inner" == this.options.zoomType &&
            (this.Eboppos &&
              (this.lensTopPos = Math.max(
                this.nzHeight - 2 * this.options.lensBorderSize,
                0
              )),
            this.Eroppos &&
              (this.lensLeftPos =
                this.nzWidth - this.nzWidth - 2 * this.options.lensBorderSize)),
          "lens" == this.options.zoomType &&
            ((this.windowLeftPos = String(
              -1 *
                ((b.pageX - this.nzOffset.left) * this.widthRatio -
                  this.zoomLens.width() / 2)
            )),
            (this.windowTopPos = String(
              -1 *
                ((b.pageY - this.nzOffset.top) * this.heightRatio -
                  this.zoomLens.height() / 2)
            )),
            this.zoomLens.css({
              backgroundPosition:
                this.windowLeftPos + "px " + this.windowTopPos + "px",
            }),
            this.changeBgSize &&
              (this.nzHeight > this.nzWidth
                ? ("lens" == this.options.zoomType &&
                    this.zoomLens.css({
                      "background-size":
                        this.largeWidth / this.newvalueheight +
                        "px " +
                        this.largeHeight / this.newvalueheight +
                        "px",
                    }),
                  this.zoomWindow.css({
                    "background-size":
                      this.largeWidth / this.newvalueheight +
                      "px " +
                      this.largeHeight / this.newvalueheight +
                      "px",
                  }))
                : ("lens" == this.options.zoomType &&
                    this.zoomLens.css({
                      "background-size":
                        this.largeWidth / this.newvaluewidth +
                        "px " +
                        this.largeHeight / this.newvaluewidth +
                        "px",
                    }),
                  this.zoomWindow.css({
                    "background-size":
                      this.largeWidth / this.newvaluewidth +
                      "px " +
                      this.largeHeight / this.newvaluewidth +
                      "px",
                  })),
              (this.changeBgSize = !1)),
            this.setWindowPostition(b)),
          this.options.tint &&
            "inner" != this.options.zoomType &&
            this.setTintPosition(b),
          "window" == this.options.zoomType && this.setWindowPostition(b),
          "inner" == this.options.zoomType && this.setWindowPostition(b),
          this.options.showLens &&
            (this.fullwidth &&
              "lens" != this.options.zoomType &&
              (this.lensLeftPos = 0),
            this.zoomLens.css({
              left: this.lensLeftPos + "px",
              top: this.lensTopPos + "px",
            })));
    },
    showHideWindow: function (b) {
      "show" != b ||
        this.isWindowActive ||
        (this.options.zoomWindowFadeIn
          ? this.zoomWindow
              .stop(!0, !0, !1)
              .fadeIn(this.options.zoomWindowFadeIn)
          : this.zoomWindow.show(),
        (this.isWindowActive = !0));
      "hide" == b &&
        this.isWindowActive &&
        (this.options.zoomWindowFadeOut
          ? this.zoomWindow.stop(!0, !0).fadeOut(this.options.zoomWindowFadeOut)
          : this.zoomWindow.hide(),
        (this.isWindowActive = !1));
    },
    showHideLens: function (b) {
      "show" != b ||
        this.isLensActive ||
        (this.options.lensFadeIn
          ? this.zoomLens.stop(!0, !0, !1).fadeIn(this.options.lensFadeIn)
          : this.zoomLens.show(),
        (this.isLensActive = !0));
      "hide" == b &&
        this.isLensActive &&
        (this.options.lensFadeOut
          ? this.zoomLens.stop(!0, !0).fadeOut(this.options.lensFadeOut)
          : this.zoomLens.hide(),
        (this.isLensActive = !1));
    },
    showHideTint: function (b) {
      "show" != b ||
        this.isTintActive ||
        (this.options.zoomTintFadeIn
          ? this.zoomTint
              .css({ opacity: this.options.tintOpacity })
              .animate()
              .stop(!0, !0)
              .fadeIn("slow")
          : (this.zoomTint.css({ opacity: this.options.tintOpacity }).animate(),
            this.zoomTint.show()),
        (this.isTintActive = !0));
      "hide" == b &&
        this.isTintActive &&
        (this.options.zoomTintFadeOut
          ? this.zoomTint.stop(!0, !0).fadeOut(this.options.zoomTintFadeOut)
          : this.zoomTint.hide(),
        (this.isTintActive = !1));
    },
    setLensPostition: function (b) {},
    setWindowPostition: function (b) {
      var a = this;
      if (isNaN(a.options.zoomWindowPosition))
        (a.externalContainer = d("#" + a.options.zoomWindowPosition)),
          (a.externalContainerWidth = a.externalContainer.width()),
          (a.externalContainerHeight = a.externalContainer.height()),
          (a.externalContainerOffset = a.externalContainer.offset()),
          (a.windowOffsetTop = a.externalContainerOffset.top),
          (a.windowOffsetLeft = a.externalContainerOffset.left);
      else
        switch (a.options.zoomWindowPosition) {
          case 1:
            a.windowOffsetTop = a.options.zoomWindowOffety;
            a.windowOffsetLeft = +a.nzWidth;
            break;
          case 2:
            a.options.zoomWindowHeight > a.nzHeight &&
              ((a.windowOffsetTop =
                -1 * (a.options.zoomWindowHeight / 2 - a.nzHeight / 2)),
              (a.windowOffsetLeft = a.nzWidth));
            break;
          case 3:
            a.windowOffsetTop =
              a.nzHeight - a.zoomWindow.height() - 2 * a.options.borderSize;
            a.windowOffsetLeft = a.nzWidth;
            break;
          case 4:
            a.windowOffsetTop = a.nzHeight;
            a.windowOffsetLeft = a.nzWidth;
            break;
          case 5:
            a.windowOffsetTop = a.nzHeight;
            a.windowOffsetLeft =
              a.nzWidth - a.zoomWindow.width() - 2 * a.options.borderSize;
            break;
          case 6:
            a.options.zoomWindowHeight > a.nzHeight &&
              ((a.windowOffsetTop = a.nzHeight),
              (a.windowOffsetLeft =
                -1 *
                (a.options.zoomWindowWidth / 2 -
                  a.nzWidth / 2 +
                  2 * a.options.borderSize)));
            break;
          case 7:
            a.windowOffsetTop = a.nzHeight;
            a.windowOffsetLeft = 0;
            break;
          case 8:
            a.windowOffsetTop = a.nzHeight;
            a.windowOffsetLeft =
              -1 * (a.zoomWindow.width() + 2 * a.options.borderSize);
            break;
          case 9:
            a.windowOffsetTop =
              a.nzHeight - a.zoomWindow.height() - 2 * a.options.borderSize;
            a.windowOffsetLeft =
              -1 * (a.zoomWindow.width() + 2 * a.options.borderSize);
            break;
          case 10:
            a.options.zoomWindowHeight > a.nzHeight &&
              ((a.windowOffsetTop =
                -1 * (a.options.zoomWindowHeight / 2 - a.nzHeight / 2)),
              (a.windowOffsetLeft =
                -1 * (a.zoomWindow.width() + 2 * a.options.borderSize)));
            break;
          case 11:
            a.windowOffsetTop = a.options.zoomWindowOffety;
            a.windowOffsetLeft =
              -1 * (a.zoomWindow.width() + 2 * a.options.borderSize);
            break;
          case 12:
            a.windowOffsetTop =
              -1 * (a.zoomWindow.height() + 2 * a.options.borderSize);
            a.windowOffsetLeft =
              -1 * (a.zoomWindow.width() + 2 * a.options.borderSize);
            break;
          case 13:
            a.windowOffsetTop =
              -1 * (a.zoomWindow.height() + 2 * a.options.borderSize);
            a.windowOffsetLeft = 0;
            break;
          case 14:
            a.options.zoomWindowHeight > a.nzHeight &&
              ((a.windowOffsetTop =
                -1 * (a.zoomWindow.height() + 2 * a.options.borderSize)),
              (a.windowOffsetLeft =
                -1 *
                (a.options.zoomWindowWidth / 2 -
                  a.nzWidth / 2 +
                  2 * a.options.borderSize)));
            break;
          case 15:
            a.windowOffsetTop =
              -1 * (a.zoomWindow.height() + 2 * a.options.borderSize);
            a.windowOffsetLeft =
              a.nzWidth - a.zoomWindow.width() - 2 * a.options.borderSize;
            break;
          case 16:
            a.windowOffsetTop =
              -1 * (a.zoomWindow.height() + 2 * a.options.borderSize);
            a.windowOffsetLeft = a.nzWidth;
            break;
          default:
            (a.windowOffsetTop = a.options.zoomWindowOffety),
              (a.windowOffsetLeft = a.nzWidth);
        }
      a.isWindowSet = !0;
      a.windowOffsetTop += a.options.zoomWindowOffety;
      a.windowOffsetLeft += a.options.zoomWindowOffetx;
      a.zoomWindow.css({ top: a.windowOffsetTop });
      a.zoomWindow.css({ left: a.windowOffsetLeft });
      "inner" == a.options.zoomType &&
        (a.zoomWindow.css({ top: 0 }), a.zoomWindow.css({ left: 0 }));
      a.windowLeftPos = String(
        -1 *
          ((b.pageX - a.nzOffset.left) * a.widthRatio -
            a.zoomWindow.width() / 2)
      );
      a.windowTopPos = String(
        -1 *
          ((b.pageY - a.nzOffset.top) * a.heightRatio -
            a.zoomWindow.height() / 2)
      );
      a.Etoppos && (a.windowTopPos = 0);
      a.Eloppos && (a.windowLeftPos = 0);
      a.Eboppos &&
        (a.windowTopPos =
          -1 * (a.largeHeight / a.currentZoomLevel - a.zoomWindow.height()));
      a.Eroppos &&
        (a.windowLeftPos =
          -1 * (a.largeWidth / a.currentZoomLevel - a.zoomWindow.width()));
      a.fullheight && (a.windowTopPos = 0);
      a.fullwidth && (a.windowLeftPos = 0);
      if ("window" == a.options.zoomType || "inner" == a.options.zoomType)
        1 == a.zoomLock &&
          (1 >= a.widthRatio && (a.windowLeftPos = 0),
          1 >= a.heightRatio && (a.windowTopPos = 0)),
          a.largeHeight < a.options.zoomWindowHeight && (a.windowTopPos = 0),
          a.largeWidth < a.options.zoomWindowWidth && (a.windowLeftPos = 0),
          a.options.easing
            ? (a.xp || (a.xp = 0),
              a.yp || (a.yp = 0),
              a.loop ||
                (a.loop = setInterval(function () {
                  a.xp += (a.windowLeftPos - a.xp) / a.options.easingAmount;
                  a.yp += (a.windowTopPos - a.yp) / a.options.easingAmount;
                  a.scrollingLock
                    ? (clearInterval(a.loop),
                      (a.xp = a.windowLeftPos),
                      (a.yp = a.windowTopPos),
                      (a.xp =
                        -1 *
                        ((b.pageX - a.nzOffset.left) * a.widthRatio -
                          a.zoomWindow.width() / 2)),
                      (a.yp =
                        -1 *
                        ((b.pageY - a.nzOffset.top) * a.heightRatio -
                          a.zoomWindow.height() / 2)),
                      a.changeBgSize &&
                        (a.nzHeight > a.nzWidth
                          ? ("lens" == a.options.zoomType &&
                              a.zoomLens.css({
                                "background-size":
                                  a.largeWidth / a.newvalueheight +
                                  "px " +
                                  a.largeHeight / a.newvalueheight +
                                  "px",
                              }),
                            a.zoomWindow.css({
                              "background-size":
                                a.largeWidth / a.newvalueheight +
                                "px " +
                                a.largeHeight / a.newvalueheight +
                                "px",
                            }))
                          : ("lens" != a.options.zoomType &&
                              a.zoomLens.css({
                                "background-size":
                                  a.largeWidth / a.newvaluewidth +
                                  "px " +
                                  a.largeHeight / a.newvalueheight +
                                  "px",
                              }),
                            a.zoomWindow.css({
                              "background-size":
                                a.largeWidth / a.newvaluewidth +
                                "px " +
                                a.largeHeight / a.newvaluewidth +
                                "px",
                            })),
                        (a.changeBgSize = !1)),
                      a.zoomWindow.css({
                        backgroundPosition:
                          a.windowLeftPos + "px " + a.windowTopPos + "px",
                      }),
                      (a.scrollingLock = !1),
                      (a.loop = !1))
                    : (a.changeBgSize &&
                        (a.nzHeight > a.nzWidth
                          ? ("lens" == a.options.zoomType &&
                              a.zoomLens.css({
                                "background-size":
                                  a.largeWidth / a.newvalueheight +
                                  "px " +
                                  a.largeHeight / a.newvalueheight +
                                  "px",
                              }),
                            a.zoomWindow.css({
                              "background-size":
                                a.largeWidth / a.newvalueheight +
                                "px " +
                                a.largeHeight / a.newvalueheight +
                                "px",
                            }))
                          : ("lens" != a.options.zoomType &&
                              a.zoomLens.css({
                                "background-size":
                                  a.largeWidth / a.newvaluewidth +
                                  "px " +
                                  a.largeHeight / a.newvaluewidth +
                                  "px",
                              }),
                            a.zoomWindow.css({
                              "background-size":
                                a.largeWidth / a.newvaluewidth +
                                "px " +
                                a.largeHeight / a.newvaluewidth +
                                "px",
                            })),
                        (a.changeBgSize = !1)),
                      a.zoomWindow.css({
                        backgroundPosition: a.xp + "px " + a.yp + "px",
                      }));
                }, 16)))
            : (a.changeBgSize &&
                (a.nzHeight > a.nzWidth
                  ? ("lens" == a.options.zoomType &&
                      a.zoomLens.css({
                        "background-size":
                          a.largeWidth / a.newvalueheight +
                          "px " +
                          a.largeHeight / a.newvalueheight +
                          "px",
                      }),
                    a.zoomWindow.css({
                      "background-size":
                        a.largeWidth / a.newvalueheight +
                        "px " +
                        a.largeHeight / a.newvalueheight +
                        "px",
                    }))
                  : ("lens" == a.options.zoomType &&
                      a.zoomLens.css({
                        "background-size":
                          a.largeWidth / a.newvaluewidth +
                          "px " +
                          a.largeHeight / a.newvaluewidth +
                          "px",
                      }),
                    a.largeHeight / a.newvaluewidth < a.options.zoomWindowHeight
                      ? a.zoomWindow.css({
                          "background-size":
                            a.largeWidth / a.newvaluewidth +
                            "px " +
                            a.largeHeight / a.newvaluewidth +
                            "px",
                        })
                      : a.zoomWindow.css({
                          "background-size":
                            a.largeWidth / a.newvalueheight +
                            "px " +
                            a.largeHeight / a.newvalueheight +
                            "px",
                        })),
                (a.changeBgSize = !1)),
              a.zoomWindow.css({
                backgroundPosition:
                  a.windowLeftPos + "px " + a.windowTopPos + "px",
              }));
    },
    setTintPosition: function (b) {
      this.nzOffset = this.$elem.offset();
      this.tintpos = String(
        -1 * (b.pageX - this.nzOffset.left - this.zoomLens.width() / 2)
      );
      this.tintposy = String(
        -1 * (b.pageY - this.nzOffset.top - this.zoomLens.height() / 2)
      );
      this.Etoppos && (this.tintposy = 0);
      this.Eloppos && (this.tintpos = 0);
      this.Eboppos &&
        (this.tintposy =
          -1 *
          (this.nzHeight -
            this.zoomLens.height() -
            2 * this.options.lensBorderSize));
      this.Eroppos &&
        (this.tintpos =
          -1 *
          (this.nzWidth -
            this.zoomLens.width() -
            2 * this.options.lensBorderSize));
      this.options.tint &&
        (this.fullheight && (this.tintposy = 0),
        this.fullwidth && (this.tintpos = 0),
        this.zoomTintImage.css({ left: this.tintpos + "px" }),
        this.zoomTintImage.css({ top: this.tintposy + "px" }));
    },
    swaptheimage: function (b, a) {
      var c = this,
        e = new Image();
      c.options.loadingIcon &&
        ((c.spinner = d(
          "<div style=\"background: url('" +
            c.options.loadingIcon +
            "') no-repeat center;height:" +
            c.nzHeight +
            "px;width:" +
            c.nzWidth +
            'px;z-index: 2000;position: absolute; background-position: center center;"></div>'
        )),
        c.$elem.after(c.spinner));
      c.options.onImageSwap(c.$elem);
      e.onload = function () {
        c.largeWidth = e.width;
        c.largeHeight = e.height;
        c.zoomImage = a;
        c.zoomWindow.css({
          "background-size": c.largeWidth + "px " + c.largeHeight + "px",
        });
        c.zoomWindow.css({
          "background-size": c.largeWidth + "px " + c.largeHeight + "px",
        });
        c.swapAction(b, a);
      };
      e.src = a;
    },
    swapAction: function (b, a) {
      var c = this,
        e = new Image();
      e.onload = function () {
        c.nzHeight = e.height;
        c.nzWidth = e.width;
        c.options.onImageSwapComplete(c.$elem);
        c.doneCallback();
      };
      e.src = b;
      c.currentZoomLevel = c.options.zoomLevel;
      c.options.maxZoomLevel = !1;
      "lens" == c.options.zoomType &&
        c.zoomLens.css({ backgroundImage: "url('" + a + "')" });
      "window" == c.options.zoomType &&
        c.zoomWindow.css({ backgroundImage: "url('" + a + "')" });
      "inner" == c.options.zoomType &&
        c.zoomWindow.css({ backgroundImage: "url('" + a + "')" });
      c.currentImage = a;
      if (c.options.imageCrossfade) {
        var f = c.$elem,
          g = f.clone();
        c.$elem.attr("src", b);
        c.$elem.after(g);
        g.stop(!0).fadeOut(c.options.imageCrossfade, function () {
          d(this).remove();
        });
        c.$elem.width("auto").removeAttr("width");
        c.$elem.height("auto").removeAttr("height");
        f.fadeIn(c.options.imageCrossfade);
        c.options.tint &&
          "inner" != c.options.zoomType &&
          ((f = c.zoomTintImage),
          (g = f.clone()),
          c.zoomTintImage.attr("src", a),
          c.zoomTintImage.after(g),
          g.stop(!0).fadeOut(c.options.imageCrossfade, function () {
            d(this).remove();
          }),
          f.fadeIn(c.options.imageCrossfade),
          c.zoomTint.css({ height: c.$elem.height() }),
          c.zoomTint.css({ width: c.$elem.width() }));
        c.zoomContainer.css("height", c.$elem.height());
        c.zoomContainer.css("width", c.$elem.width());
        "inner" != c.options.zoomType ||
          c.options.constrainType ||
          (c.zoomWrap.parent().css("height", c.$elem.height()),
          c.zoomWrap.parent().css("width", c.$elem.width()),
          c.zoomWindow.css("height", c.$elem.height()),
          c.zoomWindow.css("width", c.$elem.width()));
      } else
        c.$elem.attr("src", b),
          c.options.tint &&
            (c.zoomTintImage.attr("src", a),
            c.zoomTintImage.attr("height", c.$elem.height()),
            c.zoomTintImage.css({ height: c.$elem.height() }),
            c.zoomTint.css({ height: c.$elem.height() })),
          c.zoomContainer.css("height", c.$elem.height()),
          c.zoomContainer.css("width", c.$elem.width());
      c.options.imageCrossfade &&
        (c.zoomWrap.css("height", c.$elem.height()),
        c.zoomWrap.css("width", c.$elem.width()));
      c.options.constrainType &&
        ("height" == c.options.constrainType &&
          (c.zoomContainer.css("height", c.options.constrainSize),
          c.zoomContainer.css("width", "auto"),
          c.options.imageCrossfade
            ? (c.zoomWrap.css("height", c.options.constrainSize),
              c.zoomWrap.css("width", "auto"),
              (c.constwidth = c.zoomWrap.width()))
            : (c.$elem.css("height", c.options.constrainSize),
              c.$elem.css("width", "auto"),
              (c.constwidth = c.$elem.width())),
          "inner" == c.options.zoomType &&
            (c.zoomWrap.parent().css("height", c.options.constrainSize),
            c.zoomWrap.parent().css("width", c.constwidth),
            c.zoomWindow.css("height", c.options.constrainSize),
            c.zoomWindow.css("width", c.constwidth)),
          c.options.tint &&
            (c.tintContainer.css("height", c.options.constrainSize),
            c.tintContainer.css("width", c.constwidth),
            c.zoomTint.css("height", c.options.constrainSize),
            c.zoomTint.css("width", c.constwidth),
            c.zoomTintImage.css("height", c.options.constrainSize),
            c.zoomTintImage.css("width", c.constwidth))),
        "width" == c.options.constrainType &&
          (c.zoomContainer.css("height", "auto"),
          c.zoomContainer.css("width", c.options.constrainSize),
          c.options.imageCrossfade
            ? (c.zoomWrap.css("height", "auto"),
              c.zoomWrap.css("width", c.options.constrainSize),
              (c.constheight = c.zoomWrap.height()))
            : (c.$elem.css("height", "auto"),
              c.$elem.css("width", c.options.constrainSize),
              (c.constheight = c.$elem.height())),
          "inner" == c.options.zoomType &&
            (c.zoomWrap.parent().css("height", c.constheight),
            c.zoomWrap.parent().css("width", c.options.constrainSize),
            c.zoomWindow.css("height", c.constheight),
            c.zoomWindow.css("width", c.options.constrainSize)),
          c.options.tint &&
            (c.tintContainer.css("height", c.constheight),
            c.tintContainer.css("width", c.options.constrainSize),
            c.zoomTint.css("height", c.constheight),
            c.zoomTint.css("width", c.options.constrainSize),
            c.zoomTintImage.css("height", c.constheight),
            c.zoomTintImage.css("width", c.options.constrainSize))));
    },
    doneCallback: function () {
      this.options.loadingIcon && this.spinner.hide();
      this.nzOffset = this.$elem.offset();
      this.nzWidth = this.$elem.width();
      this.nzHeight = this.$elem.height();
      this.currentZoomLevel = this.options.zoomLevel;
      this.widthRatio = this.largeWidth / this.nzWidth;
      this.heightRatio = this.largeHeight / this.nzHeight;
      "window" == this.options.zoomType &&
        ((lensHeight =
          this.nzHeight < this.options.zoomWindowWidth / this.widthRatio
            ? this.nzHeight
            : String(this.options.zoomWindowHeight / this.heightRatio)),
        (lensWidth =
          this.options.zoomWindowWidth < this.options.zoomWindowWidth
            ? this.nzWidth
            : this.options.zoomWindowWidth / this.widthRatio),
        this.zoomLens &&
          (this.zoomLens.css("width", lensWidth),
          this.zoomLens.css("height", lensHeight)));
    },
    getCurrentImage: function () {
      return this.zoomImage;
    },
    getGalleryList: function () {
      var b = this;
      b.gallerylist = [];
      b.options.gallery
        ? d("#" + b.options.gallery + " a").each(function () {
            var a = "";
            d(this).data("zoom-image")
              ? (a = d(this).data("zoom-image"))
              : d(this).data("image") && (a = d(this).data("image"));
            a == b.zoomImage
              ? b.gallerylist.unshift({
                  href: "" + a + "",
                  title: d(this).find("img").attr("title"),
                })
              : b.gallerylist.push({
                  href: "" + a + "",
                  title: d(this).find("img").attr("title"),
                });
          })
        : b.gallerylist.push({
            href: "" + b.zoomImage + "",
            title: d(this).find("img").attr("title"),
          });
      return b.gallerylist;
    },
    changeZoomLevel: function (b) {
      this.scrollingLock = !0;
      this.newvalue = parseFloat(b).toFixed(2);
      newvalue = parseFloat(b).toFixed(2);
      maxheightnewvalue =
        this.largeHeight /
        ((this.options.zoomWindowHeight / this.nzHeight) * this.nzHeight);
      maxwidthtnewvalue =
        this.largeWidth /
        ((this.options.zoomWindowWidth / this.nzWidth) * this.nzWidth);
      "inner" != this.options.zoomType &&
        (maxheightnewvalue <= newvalue
          ? ((this.heightRatio =
              this.largeHeight / maxheightnewvalue / this.nzHeight),
            (this.newvalueheight = maxheightnewvalue),
            (this.fullheight = !0))
          : ((this.heightRatio = this.largeHeight / newvalue / this.nzHeight),
            (this.newvalueheight = newvalue),
            (this.fullheight = !1)),
        maxwidthtnewvalue <= newvalue
          ? ((this.widthRatio =
              this.largeWidth / maxwidthtnewvalue / this.nzWidth),
            (this.newvaluewidth = maxwidthtnewvalue),
            (this.fullwidth = !0))
          : ((this.widthRatio = this.largeWidth / newvalue / this.nzWidth),
            (this.newvaluewidth = newvalue),
            (this.fullwidth = !1)),
        "lens" == this.options.zoomType &&
          (maxheightnewvalue <= newvalue
            ? ((this.fullwidth = !0), (this.newvaluewidth = maxheightnewvalue))
            : ((this.widthRatio = this.largeWidth / newvalue / this.nzWidth),
              (this.newvaluewidth = newvalue),
              (this.fullwidth = !1))));
      "inner" == this.options.zoomType &&
        ((maxheightnewvalue = parseFloat(
          this.largeHeight / this.nzHeight
        ).toFixed(2)),
        (maxwidthtnewvalue = parseFloat(this.largeWidth / this.nzWidth).toFixed(
          2
        )),
        newvalue > maxheightnewvalue && (newvalue = maxheightnewvalue),
        newvalue > maxwidthtnewvalue && (newvalue = maxwidthtnewvalue),
        maxheightnewvalue <= newvalue
          ? ((this.heightRatio = this.largeHeight / newvalue / this.nzHeight),
            (this.newvalueheight =
              newvalue > maxheightnewvalue ? maxheightnewvalue : newvalue),
            (this.fullheight = !0))
          : ((this.heightRatio = this.largeHeight / newvalue / this.nzHeight),
            (this.newvalueheight =
              newvalue > maxheightnewvalue ? maxheightnewvalue : newvalue),
            (this.fullheight = !1)),
        maxwidthtnewvalue <= newvalue
          ? ((this.widthRatio = this.largeWidth / newvalue / this.nzWidth),
            (this.newvaluewidth =
              newvalue > maxwidthtnewvalue ? maxwidthtnewvalue : newvalue),
            (this.fullwidth = !0))
          : ((this.widthRatio = this.largeWidth / newvalue / this.nzWidth),
            (this.newvaluewidth = newvalue),
            (this.fullwidth = !1)));
      scrcontinue = !1;
      "inner" == this.options.zoomType &&
        (this.nzWidth > this.nzHeight &&
          (this.newvaluewidth <= maxwidthtnewvalue
            ? (scrcontinue = !0)
            : ((scrcontinue = !1), (this.fullwidth = this.fullheight = !0))),
        this.nzHeight > this.nzWidth &&
          (this.newvaluewidth <= maxwidthtnewvalue
            ? (scrcontinue = !0)
            : ((scrcontinue = !1), (this.fullwidth = this.fullheight = !0))));
      "inner" != this.options.zoomType && (scrcontinue = !0);
      scrcontinue &&
        ((this.zoomLock = 0),
        (this.changeZoom = !0),
        this.options.zoomWindowHeight / this.heightRatio <= this.nzHeight &&
          ((this.currentZoomLevel = this.newvalueheight),
          "lens" != this.options.zoomType &&
            "inner" != this.options.zoomType &&
            ((this.changeBgSize = !0),
            this.zoomLens.css({
              height:
                String(this.options.zoomWindowHeight / this.heightRatio) + "px",
            })),
          "lens" == this.options.zoomType ||
            "inner" == this.options.zoomType) &&
          (this.changeBgSize = !0),
        this.options.zoomWindowWidth / this.widthRatio <= this.nzWidth &&
          ("inner" != this.options.zoomType &&
            this.newvaluewidth > this.newvalueheight &&
            (this.currentZoomLevel = this.newvaluewidth),
          "lens" != this.options.zoomType &&
            "inner" != this.options.zoomType &&
            ((this.changeBgSize = !0),
            this.zoomLens.css({
              width:
                String(this.options.zoomWindowWidth / this.widthRatio) + "px",
            })),
          "lens" == this.options.zoomType ||
            "inner" == this.options.zoomType) &&
          (this.changeBgSize = !0),
        "inner" == this.options.zoomType &&
          ((this.changeBgSize = !0),
          this.nzWidth > this.nzHeight &&
            (this.currentZoomLevel = this.newvaluewidth),
          this.nzHeight > this.nzWidth &&
            (this.currentZoomLevel = this.newvaluewidth)));
      this.setPosition(this.currentLoc);
    },
    closeAll: function () {
      self.zoomWindow && self.zoomWindow.hide();
      self.zoomLens && self.zoomLens.hide();
      self.zoomTint && self.zoomTint.hide();
    },
    changeState: function (b) {
      "enable" == b && (this.options.zoomEnabled = !0);
      "disable" == b && (this.options.zoomEnabled = !1);
    },
  };
  d.fn.elevateZoom = function (b) {
    return this.each(function () {
      var a = Object.create(k);
      a.init(b, this);
      d.data(this, "elevateZoom", a);
    });
  };
  d.fn.elevateZoom.options = {
    zoomActivation: "hover",
    zoomEnabled: !0,
    preloading: 1,
    zoomLevel: 1,
    scrollZoom: !1,
    scrollZoomIncrement: 0.1,
    minZoomLevel: !1,
    maxZoomLevel: !1,
    easing: !1,
    easingAmount: 12,
    lensSize: 200,
    zoomWindowWidth: 400,
    zoomWindowHeight: 400,
    zoomWindowOffetx: 0,
    zoomWindowOffety: 0,
    zoomWindowPosition: 1,
    zoomWindowBgColour: "#fff",
    lensFadeIn: !1,
    lensFadeOut: !1,
    debug: !1,
    zoomWindowFadeIn: !1,
    zoomWindowFadeOut: !1,
    zoomWindowAlwaysShow: !1,
    zoomTintFadeIn: !1,
    zoomTintFadeOut: !1,
    borderSize: 4,
    showLens: !0,
    borderColour: "#888",
    lensBorderSize: 1,
    lensBorderColour: "#000",
    lensShape: "square",
    zoomType: "window",
    containLensZoom: !1,
    lensColour: "white",
    lensOpacity: 0.4,
    lenszoom: !1,
    tint: !1,
    tintColour: "#333",
    tintOpacity: 0.4,
    gallery: !1,
    galleryActiveClass: "zoomGalleryActive",
    imageCrossfade: !1,
    constrainType: !1,
    constrainSize: !1,
    loadingIcon: !1,
    cursor: "default",
    responsive: !0,
    onComplete: d.noop,
    onZoomedImageLoaded: function () {},
    onImageSwap: d.noop,
    onImageSwapComplete: d.noop,
  };
})(jQuery, window, document);

/*-----------------------------
  08. Scrollreveal.min.js
-------------------------------*/
!(function () {
  "use strict";
  function e(n) {
    return "undefined" == typeof this ||
      Object.getPrototypeOf(this) !== e.prototype
      ? new e(n)
      : ((O = this),
        (O.version = "3.3.2"),
        (O.tools = new E()),
        O.isSupported()
          ? (O.tools.extend(O.defaults, n || {}),
            (O.defaults.container = t(O.defaults)),
            (O.store = { elements: {}, containers: [] }),
            (O.sequences = {}),
            (O.history = []),
            (O.uid = 0),
            (O.initialized = !1))
          : "undefined" != typeof console && null !== console,
        O);
  }
  function t(e) {
    if (e && e.container) {
      if ("string" == typeof e.container)
        return window.document.documentElement.querySelector(e.container);
      if (O.tools.isNode(e.container)) return e.container;
    }
    return O.defaults.container;
  }
  function n(e, t) {
    return "string" == typeof e
      ? Array.prototype.slice.call(t.querySelectorAll(e))
      : O.tools.isNode(e)
      ? [e]
      : O.tools.isNodeList(e)
      ? Array.prototype.slice.call(e)
      : [];
  }
  function i() {
    return ++O.uid;
  }
  function o(e, t, n) {
    t.container && (t.container = n),
      e.config
        ? (e.config = O.tools.extendClone(e.config, t))
        : (e.config = O.tools.extendClone(O.defaults, t)),
      "top" === e.config.origin || "bottom" === e.config.origin
        ? (e.config.axis = "Y")
        : (e.config.axis = "X");
  }
  function r(e) {
    var t = window.getComputedStyle(e.domEl);
    e.styles ||
      ((e.styles = { transition: {}, transform: {}, computed: {} }),
      (e.styles.inline = e.domEl.getAttribute("style") || ""),
      (e.styles.inline += "; visibility: visible; "),
      (e.styles.computed.opacity = t.opacity),
      t.transition && "all 0s ease 0s" !== t.transition
        ? (e.styles.computed.transition = t.transition + ", ")
        : (e.styles.computed.transition = "")),
      (e.styles.transition.instant = s(e, 0)),
      (e.styles.transition.delayed = s(e, e.config.delay)),
      (e.styles.transform.initial = " -webkit-transform:"),
      (e.styles.transform.target = " -webkit-transform:"),
      a(e),
      (e.styles.transform.initial += "transform:"),
      (e.styles.transform.target += "transform:"),
      a(e);
  }
  function s(e, t) {
    var n = e.config;
    return (
      "-webkit-transition: " +
      e.styles.computed.transition +
      "-webkit-transform " +
      n.duration / 1e3 +
      "s " +
      n.easing +
      " " +
      t / 1e3 +
      "s, opacity " +
      n.duration / 1e3 +
      "s " +
      n.easing +
      " " +
      t / 1e3 +
      "s; transition: " +
      e.styles.computed.transition +
      "transform " +
      n.duration / 1e3 +
      "s " +
      n.easing +
      " " +
      t / 1e3 +
      "s, opacity " +
      n.duration / 1e3 +
      "s " +
      n.easing +
      " " +
      t / 1e3 +
      "s; "
    );
  }
  function a(e) {
    var t,
      n = e.config,
      i = e.styles.transform;
    (t =
      "top" === n.origin || "left" === n.origin
        ? /^-/.test(n.distance)
          ? n.distance.substr(1)
          : "-" + n.distance
        : n.distance),
      parseInt(n.distance) &&
        ((i.initial += " translate" + n.axis + "(" + t + ")"),
        (i.target += " translate" + n.axis + "(0)")),
      n.scale &&
        ((i.initial += " scale(" + n.scale + ")"), (i.target += " scale(1)")),
      n.rotate.x &&
        ((i.initial += " rotateX(" + n.rotate.x + "deg)"),
        (i.target += " rotateX(0)")),
      n.rotate.y &&
        ((i.initial += " rotateY(" + n.rotate.y + "deg)"),
        (i.target += " rotateY(0)")),
      n.rotate.z &&
        ((i.initial += " rotateZ(" + n.rotate.z + "deg)"),
        (i.target += " rotateZ(0)")),
      (i.initial += "; opacity: " + n.opacity + ";"),
      (i.target += "; opacity: " + e.styles.computed.opacity + ";");
  }
  function l(e) {
    var t = e.config.container;
    t &&
      O.store.containers.indexOf(t) === -1 &&
      O.store.containers.push(e.config.container),
      (O.store.elements[e.id] = e);
  }
  function c(e, t, n) {
    var i = { target: e, config: t, interval: n };
    O.history.push(i);
  }
  function f() {
    if (O.isSupported()) {
      y();
      for (var e = 0; e < O.store.containers.length; e++)
        O.store.containers[e].addEventListener("scroll", d),
          O.store.containers[e].addEventListener("resize", d);
      O.initialized ||
        (window.addEventListener("scroll", d),
        window.addEventListener("resize", d),
        (O.initialized = !0));
    }
    return O;
  }
  function d() {
    T(y);
  }
  function u() {
    var e, t, n, i;
    O.tools.forOwn(O.sequences, function (o) {
      (i = O.sequences[o]), (e = !1);
      for (var r = 0; r < i.elemIds.length; r++)
        (n = i.elemIds[r]), (t = O.store.elements[n]), q(t) && !e && (e = !0);
      i.active = e;
    });
  }
  function y() {
    var e, t;
    u(),
      O.tools.forOwn(O.store.elements, function (n) {
        (t = O.store.elements[n]),
          (e = w(t)),
          g(t)
            ? (t.config.beforeReveal(t.domEl),
              e
                ? t.domEl.setAttribute(
                    "style",
                    t.styles.inline +
                      t.styles.transform.target +
                      t.styles.transition.delayed
                  )
                : t.domEl.setAttribute(
                    "style",
                    t.styles.inline +
                      t.styles.transform.target +
                      t.styles.transition.instant
                  ),
              p("reveal", t, e),
              (t.revealing = !0),
              (t.seen = !0),
              t.sequence && m(t, e))
            : v(t) &&
              (t.config.beforeReset(t.domEl),
              t.domEl.setAttribute(
                "style",
                t.styles.inline +
                  t.styles.transform.initial +
                  t.styles.transition.instant
              ),
              p("reset", t),
              (t.revealing = !1));
      });
  }
  function m(e, t) {
    var n = 0,
      i = 0,
      o = O.sequences[e.sequence.id];
    (o.blocked = !0),
      t && "onload" === e.config.useDelay && (i = e.config.delay),
      e.sequence.timer &&
        ((n = Math.abs(e.sequence.timer.started - new Date())),
        window.clearTimeout(e.sequence.timer)),
      (e.sequence.timer = { started: new Date() }),
      (e.sequence.timer.clock = window.setTimeout(function () {
        (o.blocked = !1), (e.sequence.timer = null), d();
      }, Math.abs(o.interval) + i - n));
  }
  function p(e, t, n) {
    var i = 0,
      o = 0,
      r = "after";
    switch (e) {
      case "reveal":
        (o = t.config.duration), n && (o += t.config.delay), (r += "Reveal");
        break;
      case "reset":
        (o = t.config.duration), (r += "Reset");
    }
    t.timer &&
      ((i = Math.abs(t.timer.started - new Date())),
      window.clearTimeout(t.timer.clock)),
      (t.timer = { started: new Date() }),
      (t.timer.clock = window.setTimeout(function () {
        t.config[r](t.domEl), (t.timer = null);
      }, o - i));
  }
  function g(e) {
    if (e.sequence) {
      var t = O.sequences[e.sequence.id];
      return t.active && !t.blocked && !e.revealing && !e.disabled;
    }
    return q(e) && !e.revealing && !e.disabled;
  }
  function w(e) {
    var t = e.config.useDelay;
    return (
      "always" === t ||
      ("onload" === t && !O.initialized) ||
      ("once" === t && !e.seen)
    );
  }
  function v(e) {
    if (e.sequence) {
      var t = O.sequences[e.sequence.id];
      return !t.active && e.config.reset && e.revealing && !e.disabled;
    }
    return !q(e) && e.config.reset && e.revealing && !e.disabled;
  }
  function b(e) {
    return { width: e.clientWidth, height: e.clientHeight };
  }
  function h(e) {
    if (e && e !== window.document.documentElement) {
      var t = x(e);
      return { x: e.scrollLeft + t.left, y: e.scrollTop + t.top };
    }
    return { x: window.pageXOffset, y: window.pageYOffset };
  }
  function x(e) {
    var t = 0,
      n = 0,
      i = e.offsetHeight,
      o = e.offsetWidth;
    do
      isNaN(e.offsetTop) || (t += e.offsetTop),
        isNaN(e.offsetLeft) || (n += e.offsetLeft),
        (e = e.offsetParent);
    while (e);
    return { top: t, left: n, height: i, width: o };
  }
  function q(e) {
    function t() {
      var t = c + a * s,
        n = f + l * s,
        i = d - a * s,
        y = u - l * s,
        m = r.y + e.config.viewOffset.top,
        p = r.x + e.config.viewOffset.left,
        g = r.y - e.config.viewOffset.bottom + o.height,
        w = r.x - e.config.viewOffset.right + o.width;
      return t < g && i > m && n > p && y < w;
    }
    function n() {
      return "fixed" === window.getComputedStyle(e.domEl).position;
    }
    var i = x(e.domEl),
      o = b(e.config.container),
      r = h(e.config.container),
      s = e.config.viewFactor,
      a = i.height,
      l = i.width,
      c = i.top,
      f = i.left,
      d = c + a,
      u = f + l;
    return t() || n();
  }
  function E() {}
  var O, T;
  (e.prototype.defaults = {
    origin: "bottom",
    distance: "20px",
    duration: 500,
    delay: 0,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 0.9,
    easing: "cubic-bezier(0.6, 0.2, 0.1, 1)",
    container: window.document.documentElement,
    mobile: !0,
    reset: !1,
    useDelay: "always",
    viewFactor: 0.2,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    beforeReveal: function (e) {},
    beforeReset: function (e) {},
    afterReveal: function (e) {},
    afterReset: function (e) {},
  }),
    (e.prototype.isSupported = function () {
      var e = document.documentElement.style;
      return (
        ("WebkitTransition" in e && "WebkitTransform" in e) ||
        ("transition" in e && "transform" in e)
      );
    }),
    (e.prototype.reveal = function (e, s, a, d) {
      var u, y, m, p, g, w;
      if (
        (void 0 !== s && "number" == typeof s
          ? ((a = s), (s = {}))
          : (void 0 !== s && null !== s) || (s = {}),
        (u = t(s)),
        (y = n(e, u)),
        !y.length)
      )
        return O;
      a &&
        "number" == typeof a &&
        ((w = i()),
        (g = O.sequences[w] = { id: w, interval: a, elemIds: [], active: !1 }));
      for (var v = 0; v < y.length; v++)
        (p = y[v].getAttribute("data-sr-id")),
          p
            ? (m = O.store.elements[p])
            : ((m = { id: i(), domEl: y[v], seen: !1, revealing: !1 }),
              m.domEl.setAttribute("data-sr-id", m.id)),
          g &&
            ((m.sequence = { id: g.id, index: g.elemIds.length }),
            g.elemIds.push(m.id)),
          o(m, s, u),
          r(m),
          l(m),
          (O.tools.isMobile() && !m.config.mobile) || !O.isSupported()
            ? (m.domEl.setAttribute("style", m.styles.inline),
              (m.disabled = !0))
            : m.revealing ||
              m.domEl.setAttribute(
                "style",
                m.styles.inline + m.styles.transform.initial
              );
      return (
        !d &&
          O.isSupported() &&
          (c(e, s, a),
          O.initTimeout && window.clearTimeout(O.initTimeout),
          (O.initTimeout = window.setTimeout(f, 0))),
        O
      );
    }),
    (e.prototype.sync = function () {
      if (O.history.length && O.isSupported()) {
        for (var e = 0; e < O.history.length; e++) {
          var t = O.history[e];
          O.reveal(t.target, t.config, t.interval, !0);
        }
        f();
      }
      return O;
    }),
    (E.prototype.isObject = function (e) {
      return null !== e && "object" == typeof e && e.constructor === Object;
    }),
    (E.prototype.isNode = function (e) {
      return "object" == typeof window.Node
        ? e instanceof window.Node
        : e &&
            "object" == typeof e &&
            "number" == typeof e.nodeType &&
            "string" == typeof e.nodeName;
    }),
    (E.prototype.isNodeList = function (e) {
      var t = Object.prototype.toString.call(e),
        n = /^\[object (HTMLCollection|NodeList|Object)\]$/;
      return "object" == typeof window.NodeList
        ? e instanceof window.NodeList
        : e &&
            "object" == typeof e &&
            n.test(t) &&
            "number" == typeof e.length &&
            (0 === e.length || this.isNode(e[0]));
    }),
    (E.prototype.forOwn = function (e, t) {
      if (!this.isObject(e))
        throw new TypeError(
          'Expected "object", but received "' + typeof e + '".'
        );
      for (var n in e) e.hasOwnProperty(n) && t(n);
    }),
    (E.prototype.extend = function (e, t) {
      return (
        this.forOwn(
          t,
          function (n) {
            this.isObject(t[n])
              ? ((e[n] && this.isObject(e[n])) || (e[n] = {}),
                this.extend(e[n], t[n]))
              : (e[n] = t[n]);
          }.bind(this)
        ),
        e
      );
    }),
    (E.prototype.extendClone = function (e, t) {
      return this.extend(this.extend({}, e), t);
    }),
    (E.prototype.isMobile = function () {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    }),
    (T =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function (e) {
        window.setTimeout(e, 1e3 / 60);
      }),
    "function" == typeof define && "object" == typeof define.amd && define.amd
      ? define(function () {
          return e;
        })
      : "undefined" != typeof module && module.exports
      ? (module.exports = e)
      : (window.ScrollReveal = e);
})();

/*! jQuery UI - v1.13.2 - 2022-07-14
 * http://jqueryui.com
 * Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-patch.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */

!(function (t) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery);
})(function (V) {
  "use strict";
  V.ui = V.ui || {};
  V.ui.version = "1.13.2";
  var n,
    i = 0,
    a = Array.prototype.hasOwnProperty,
    r = Array.prototype.slice;
  (V.cleanData =
    ((n = V.cleanData),
    function (t) {
      for (var e, i, s = 0; null != (i = t[s]); s++)
        (e = V._data(i, "events")) && e.remove && V(i).triggerHandler("remove");
      n(t);
    })),
    (V.widget = function (t, i, e) {
      var s,
        n,
        o,
        a = {},
        r = t.split(".")[0],
        l = r + "-" + (t = t.split(".")[1]);
      return (
        e || ((e = i), (i = V.Widget)),
        Array.isArray(e) && (e = V.extend.apply(null, [{}].concat(e))),
        (V.expr.pseudos[l.toLowerCase()] = function (t) {
          return !!V.data(t, l);
        }),
        (V[r] = V[r] || {}),
        (s = V[r][t]),
        (n = V[r][t] =
          function (t, e) {
            if (!this || !this._createWidget) return new n(t, e);
            arguments.length && this._createWidget(t, e);
          }),
        V.extend(n, s, {
          version: e.version,
          _proto: V.extend({}, e),
          _childConstructors: [],
        }),
        ((o = new i()).options = V.widget.extend({}, o.options)),
        V.each(e, function (e, s) {
          function n() {
            return i.prototype[e].apply(this, arguments);
          }
          function o(t) {
            return i.prototype[e].apply(this, t);
          }
          a[e] =
            "function" == typeof s
              ? function () {
                  var t,
                    e = this._super,
                    i = this._superApply;
                  return (
                    (this._super = n),
                    (this._superApply = o),
                    (t = s.apply(this, arguments)),
                    (this._super = e),
                    (this._superApply = i),
                    t
                  );
                }
              : s;
        }),
        (n.prototype = V.widget.extend(
          o,
          { widgetEventPrefix: (s && o.widgetEventPrefix) || t },
          a,
          { constructor: n, namespace: r, widgetName: t, widgetFullName: l }
        )),
        s
          ? (V.each(s._childConstructors, function (t, e) {
              var i = e.prototype;
              V.widget(i.namespace + "." + i.widgetName, n, e._proto);
            }),
            delete s._childConstructors)
          : i._childConstructors.push(n),
        V.widget.bridge(t, n),
        n
      );
    }),
    (V.widget.extend = function (t) {
      for (var e, i, s = r.call(arguments, 1), n = 0, o = s.length; n < o; n++)
        for (e in s[n])
          (i = s[n][e]),
            a.call(s[n], e) &&
              void 0 !== i &&
              (V.isPlainObject(i)
                ? (t[e] = V.isPlainObject(t[e])
                    ? V.widget.extend({}, t[e], i)
                    : V.widget.extend({}, i))
                : (t[e] = i));
      return t;
    }),
    (V.widget.bridge = function (o, e) {
      var a = e.prototype.widgetFullName || o;
      V.fn[o] = function (i) {
        var t = "string" == typeof i,
          s = r.call(arguments, 1),
          n = this;
        return (
          t
            ? this.length || "instance" !== i
              ? this.each(function () {
                  var t,
                    e = V.data(this, a);
                  return "instance" === i
                    ? ((n = e), !1)
                    : e
                    ? "function" != typeof e[i] || "_" === i.charAt(0)
                      ? V.error(
                          "no such method '" +
                            i +
                            "' for " +
                            o +
                            " widget instance"
                        )
                      : (t = e[i].apply(e, s)) !== e && void 0 !== t
                      ? ((n = t && t.jquery ? n.pushStack(t.get()) : t), !1)
                      : void 0
                    : V.error(
                        "cannot call methods on " +
                          o +
                          " prior to initialization; attempted to call method '" +
                          i +
                          "'"
                      );
                })
              : (n = void 0)
            : (s.length && (i = V.widget.extend.apply(null, [i].concat(s))),
              this.each(function () {
                var t = V.data(this, a);
                t
                  ? (t.option(i || {}), t._init && t._init())
                  : V.data(this, a, new e(i, this));
              })),
          n
        );
      };
    }),
    (V.Widget = function () {}),
    (V.Widget._childConstructors = []),
    (V.Widget.prototype = {
      widgetName: "widget",
      widgetEventPrefix: "",
      defaultElement: "<div>",
      options: { classes: {}, disabled: !1, create: null },
      _createWidget: function (t, e) {
        (e = V(e || this.defaultElement || this)[0]),
          (this.element = V(e)),
          (this.uuid = i++),
          (this.eventNamespace = "." + this.widgetName + this.uuid),
          (this.bindings = V()),
          (this.hoverable = V()),
          (this.focusable = V()),
          (this.classesElementLookup = {}),
          e !== this &&
            (V.data(e, this.widgetFullName, this),
            this._on(!0, this.element, {
              remove: function (t) {
                t.target === e && this.destroy();
              },
            }),
            (this.document = V(e.style ? e.ownerDocument : e.document || e)),
            (this.window = V(
              this.document[0].defaultView || this.document[0].parentWindow
            ))),
          (this.options = V.widget.extend(
            {},
            this.options,
            this._getCreateOptions(),
            t
          )),
          this._create(),
          this.options.disabled &&
            this._setOptionDisabled(this.options.disabled),
          this._trigger("create", null, this._getCreateEventData()),
          this._init();
      },
      _getCreateOptions: function () {
        return {};
      },
      _getCreateEventData: V.noop,
      _create: V.noop,
      _init: V.noop,
      destroy: function () {
        var i = this;
        this._destroy(),
          V.each(this.classesElementLookup, function (t, e) {
            i._removeClass(e, t);
          }),
          this.element.off(this.eventNamespace).removeData(this.widgetFullName),
          this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),
          this.bindings.off(this.eventNamespace);
      },
      _destroy: V.noop,
      widget: function () {
        return this.element;
      },
      option: function (t, e) {
        var i,
          s,
          n,
          o = t;
        if (0 === arguments.length) return V.widget.extend({}, this.options);
        if ("string" == typeof t)
          if (((o = {}), (t = (i = t.split(".")).shift()), i.length)) {
            for (
              s = o[t] = V.widget.extend({}, this.options[t]), n = 0;
              n < i.length - 1;
              n++
            )
              (s[i[n]] = s[i[n]] || {}), (s = s[i[n]]);
            if (((t = i.pop()), 1 === arguments.length))
              return void 0 === s[t] ? null : s[t];
            s[t] = e;
          } else {
            if (1 === arguments.length)
              return void 0 === this.options[t] ? null : this.options[t];
            o[t] = e;
          }
        return this._setOptions(o), this;
      },
      _setOptions: function (t) {
        for (var e in t) this._setOption(e, t[e]);
        return this;
      },
      _setOption: function (t, e) {
        return (
          "classes" === t && this._setOptionClasses(e),
          (this.options[t] = e),
          "disabled" === t && this._setOptionDisabled(e),
          this
        );
      },
      _setOptionClasses: function (t) {
        var e, i, s;
        for (e in t)
          (s = this.classesElementLookup[e]),
            t[e] !== this.options.classes[e] &&
              s &&
              s.length &&
              ((i = V(s.get())),
              this._removeClass(s, e),
              i.addClass(
                this._classes({ element: i, keys: e, classes: t, add: !0 })
              ));
      },
      _setOptionDisabled: function (t) {
        this._toggleClass(
          this.widget(),
          this.widgetFullName + "-disabled",
          null,
          !!t
        ),
          t &&
            (this._removeClass(this.hoverable, null, "ui-state-hover"),
            this._removeClass(this.focusable, null, "ui-state-focus"));
      },
      enable: function () {
        return this._setOptions({ disabled: !1 });
      },
      disable: function () {
        return this._setOptions({ disabled: !0 });
      },
      _classes: function (n) {
        var o = [],
          a = this;
        function t(t, e) {
          for (var i, s = 0; s < t.length; s++)
            (i = a.classesElementLookup[t[s]] || V()),
              (i = n.add
                ? ((function () {
                    var i = [];
                    n.element.each(function (t, e) {
                      V.map(a.classesElementLookup, function (t) {
                        return t;
                      }).some(function (t) {
                        return t.is(e);
                      }) || i.push(e);
                    }),
                      a._on(V(i), { remove: "_untrackClassesElement" });
                  })(),
                  V(V.uniqueSort(i.get().concat(n.element.get()))))
                : V(i.not(n.element).get())),
              (a.classesElementLookup[t[s]] = i),
              o.push(t[s]),
              e && n.classes[t[s]] && o.push(n.classes[t[s]]);
        }
        return (
          (n = V.extend(
            { element: this.element, classes: this.options.classes || {} },
            n
          )).keys && t(n.keys.match(/\S+/g) || [], !0),
          n.extra && t(n.extra.match(/\S+/g) || []),
          o.join(" ")
        );
      },
      _untrackClassesElement: function (i) {
        var s = this;
        V.each(s.classesElementLookup, function (t, e) {
          -1 !== V.inArray(i.target, e) &&
            (s.classesElementLookup[t] = V(e.not(i.target).get()));
        }),
          this._off(V(i.target));
      },
      _removeClass: function (t, e, i) {
        return this._toggleClass(t, e, i, !1);
      },
      _addClass: function (t, e, i) {
        return this._toggleClass(t, e, i, !0);
      },
      _toggleClass: function (t, e, i, s) {
        var n = "string" == typeof t || null === t,
          i = {
            extra: n ? e : i,
            keys: n ? t : e,
            element: n ? this.element : t,
            add: (s = "boolean" == typeof s ? s : i),
          };
        return i.element.toggleClass(this._classes(i), s), this;
      },
      _on: function (n, o, t) {
        var a,
          r = this;
        "boolean" != typeof n && ((t = o), (o = n), (n = !1)),
          t
            ? ((o = a = V(o)), (this.bindings = this.bindings.add(o)))
            : ((t = o), (o = this.element), (a = this.widget())),
          V.each(t, function (t, e) {
            function i() {
              if (
                n ||
                (!0 !== r.options.disabled &&
                  !V(this).hasClass("ui-state-disabled"))
              )
                return ("string" == typeof e ? r[e] : e).apply(r, arguments);
            }
            "string" != typeof e &&
              (i.guid = e.guid = e.guid || i.guid || V.guid++);
            var s = t.match(/^([\w:-]*)\s*(.*)$/),
              t = s[1] + r.eventNamespace,
              s = s[2];
            s ? a.on(t, s, i) : o.on(t, i);
          });
      },
      _off: function (t, e) {
        (e =
          (e || "").split(" ").join(this.eventNamespace + " ") +
          this.eventNamespace),
          t.off(e),
          (this.bindings = V(this.bindings.not(t).get())),
          (this.focusable = V(this.focusable.not(t).get())),
          (this.hoverable = V(this.hoverable.not(t).get()));
      },
      _delay: function (t, e) {
        var i = this;
        return setTimeout(function () {
          return ("string" == typeof t ? i[t] : t).apply(i, arguments);
        }, e || 0);
      },
      _hoverable: function (t) {
        (this.hoverable = this.hoverable.add(t)),
          this._on(t, {
            mouseenter: function (t) {
              this._addClass(V(t.currentTarget), null, "ui-state-hover");
            },
            mouseleave: function (t) {
              this._removeClass(V(t.currentTarget), null, "ui-state-hover");
            },
          });
      },
      _focusable: function (t) {
        (this.focusable = this.focusable.add(t)),
          this._on(t, {
            focusin: function (t) {
              this._addClass(V(t.currentTarget), null, "ui-state-focus");
            },
            focusout: function (t) {
              this._removeClass(V(t.currentTarget), null, "ui-state-focus");
            },
          });
      },
      _trigger: function (t, e, i) {
        var s,
          n,
          o = this.options[t];
        if (
          ((i = i || {}),
          ((e = V.Event(e)).type = (
            t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t
          ).toLowerCase()),
          (e.target = this.element[0]),
          (n = e.originalEvent))
        )
          for (s in n) s in e || (e[s] = n[s]);
        return (
          this.element.trigger(e, i),
          !(
            ("function" == typeof o &&
              !1 === o.apply(this.element[0], [e].concat(i))) ||
            e.isDefaultPrevented()
          )
        );
      },
    }),
    V.each({ show: "fadeIn", hide: "fadeOut" }, function (o, a) {
      V.Widget.prototype["_" + o] = function (e, t, i) {
        var s,
          n = (t = "string" == typeof t ? { effect: t } : t)
            ? (!0 !== t && "number" != typeof t && t.effect) || a
            : o;
        "number" == typeof (t = t || {})
          ? (t = { duration: t })
          : !0 === t && (t = {}),
          (s = !V.isEmptyObject(t)),
          (t.complete = i),
          t.delay && e.delay(t.delay),
          s && V.effects && V.effects.effect[n]
            ? e[o](t)
            : n !== o && e[n]
            ? e[n](t.duration, t.easing, i)
            : e.queue(function (t) {
                V(this)[o](), i && i.call(e[0]), t();
              });
      };
    });
  var s, x, k, o, l, h, c, u, C;
  V.widget;
  function D(t, e, i) {
    return [
      parseFloat(t[0]) * (u.test(t[0]) ? e / 100 : 1),
      parseFloat(t[1]) * (u.test(t[1]) ? i / 100 : 1),
    ];
  }
  function I(t, e) {
    return parseInt(V.css(t, e), 10) || 0;
  }
  function T(t) {
    return null != t && t === t.window;
  }
  (x = Math.max),
    (k = Math.abs),
    (o = /left|center|right/),
    (l = /top|center|bottom/),
    (h = /[\+\-]\d+(\.[\d]+)?%?/),
    (c = /^\w+/),
    (u = /%$/),
    (C = V.fn.position),
    (V.position = {
      scrollbarWidth: function () {
        if (void 0 !== s) return s;
        var t,
          e = V(
            "<div style='display:block;position:absolute;width:200px;height:200px;overflow:hidden;'><div style='height:300px;width:auto;'></div></div>"
          ),
          i = e.children()[0];
        return (
          V("body").append(e),
          (t = i.offsetWidth),
          e.css("overflow", "scroll"),
          t === (i = i.offsetWidth) && (i = e[0].clientWidth),
          e.remove(),
          (s = t - i)
        );
      },
      getScrollInfo: function (t) {
        var e = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
          i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
          e =
            "scroll" === e ||
            ("auto" === e && t.width < t.element[0].scrollWidth);
        return {
          width:
            "scroll" === i ||
            ("auto" === i && t.height < t.element[0].scrollHeight)
              ? V.position.scrollbarWidth()
              : 0,
          height: e ? V.position.scrollbarWidth() : 0,
        };
      },
      getWithinInfo: function (t) {
        var e = V(t || window),
          i = T(e[0]),
          s = !!e[0] && 9 === e[0].nodeType;
        return {
          element: e,
          isWindow: i,
          isDocument: s,
          offset: !i && !s ? V(t).offset() : { left: 0, top: 0 },
          scrollLeft: e.scrollLeft(),
          scrollTop: e.scrollTop(),
          width: e.outerWidth(),
          height: e.outerHeight(),
        };
      },
    }),
    (V.fn.position = function (u) {
      if (!u || !u.of) return C.apply(this, arguments);
      var d,
        p,
        f,
        g,
        m,
        t,
        _ =
          "string" == typeof (u = V.extend({}, u)).of
            ? V(document).find(u.of)
            : V(u.of),
        v = V.position.getWithinInfo(u.within),
        b = V.position.getScrollInfo(v),
        y = (u.collision || "flip").split(" "),
        w = {},
        e =
          9 === (t = (e = _)[0]).nodeType
            ? {
                width: e.width(),
                height: e.height(),
                offset: { top: 0, left: 0 },
              }
            : T(t)
            ? {
                width: e.width(),
                height: e.height(),
                offset: { top: e.scrollTop(), left: e.scrollLeft() },
              }
            : t.preventDefault
            ? { width: 0, height: 0, offset: { top: t.pageY, left: t.pageX } }
            : {
                width: e.outerWidth(),
                height: e.outerHeight(),
                offset: e.offset(),
              };
      return (
        _[0].preventDefault && (u.at = "left top"),
        (p = e.width),
        (f = e.height),
        (m = V.extend({}, (g = e.offset))),
        V.each(["my", "at"], function () {
          var t,
            e,
            i = (u[this] || "").split(" ");
          ((i =
            1 === i.length
              ? o.test(i[0])
                ? i.concat(["center"])
                : l.test(i[0])
                ? ["center"].concat(i)
                : ["center", "center"]
              : i)[0] = o.test(i[0]) ? i[0] : "center"),
            (i[1] = l.test(i[1]) ? i[1] : "center"),
            (t = h.exec(i[0])),
            (e = h.exec(i[1])),
            (w[this] = [t ? t[0] : 0, e ? e[0] : 0]),
            (u[this] = [c.exec(i[0])[0], c.exec(i[1])[0]]);
        }),
        1 === y.length && (y[1] = y[0]),
        "right" === u.at[0]
          ? (m.left += p)
          : "center" === u.at[0] && (m.left += p / 2),
        "bottom" === u.at[1]
          ? (m.top += f)
          : "center" === u.at[1] && (m.top += f / 2),
        (d = D(w.at, p, f)),
        (m.left += d[0]),
        (m.top += d[1]),
        this.each(function () {
          var i,
            t,
            a = V(this),
            r = a.outerWidth(),
            l = a.outerHeight(),
            e = I(this, "marginLeft"),
            s = I(this, "marginTop"),
            n = r + e + I(this, "marginRight") + b.width,
            o = l + s + I(this, "marginBottom") + b.height,
            h = V.extend({}, m),
            c = D(w.my, a.outerWidth(), a.outerHeight());
          "right" === u.my[0]
            ? (h.left -= r)
            : "center" === u.my[0] && (h.left -= r / 2),
            "bottom" === u.my[1]
              ? (h.top -= l)
              : "center" === u.my[1] && (h.top -= l / 2),
            (h.left += c[0]),
            (h.top += c[1]),
            (i = { marginLeft: e, marginTop: s }),
            V.each(["left", "top"], function (t, e) {
              V.ui.position[y[t]] &&
                V.ui.position[y[t]][e](h, {
                  targetWidth: p,
                  targetHeight: f,
                  elemWidth: r,
                  elemHeight: l,
                  collisionPosition: i,
                  collisionWidth: n,
                  collisionHeight: o,
                  offset: [d[0] + c[0], d[1] + c[1]],
                  my: u.my,
                  at: u.at,
                  within: v,
                  elem: a,
                });
            }),
            u.using &&
              (t = function (t) {
                var e = g.left - h.left,
                  i = e + p - r,
                  s = g.top - h.top,
                  n = s + f - l,
                  o = {
                    target: {
                      element: _,
                      left: g.left,
                      top: g.top,
                      width: p,
                      height: f,
                    },
                    element: {
                      element: a,
                      left: h.left,
                      top: h.top,
                      width: r,
                      height: l,
                    },
                    horizontal: i < 0 ? "left" : 0 < e ? "right" : "center",
                    vertical: n < 0 ? "top" : 0 < s ? "bottom" : "middle",
                  };
                p < r && k(e + i) < p && (o.horizontal = "center"),
                  f < l && k(s + n) < f && (o.vertical = "middle"),
                  x(k(e), k(i)) > x(k(s), k(n))
                    ? (o.important = "horizontal")
                    : (o.important = "vertical"),
                  u.using.call(this, t, o);
              }),
            a.offset(V.extend(h, { using: t }));
        })
      );
    }),
    (V.ui.position = {
      fit: {
        left: function (t, e) {
          var i = e.within,
            s = i.isWindow ? i.scrollLeft : i.offset.left,
            n = i.width,
            o = t.left - e.collisionPosition.marginLeft,
            a = s - o,
            r = o + e.collisionWidth - n - s;
          e.collisionWidth > n
            ? 0 < a && r <= 0
              ? ((i = t.left + a + e.collisionWidth - n - s), (t.left += a - i))
              : (t.left =
                  !(0 < r && a <= 0) && r < a ? s + n - e.collisionWidth : s)
            : 0 < a
            ? (t.left += a)
            : 0 < r
            ? (t.left -= r)
            : (t.left = x(t.left - o, t.left));
        },
        top: function (t, e) {
          var i = e.within,
            s = i.isWindow ? i.scrollTop : i.offset.top,
            n = e.within.height,
            o = t.top - e.collisionPosition.marginTop,
            a = s - o,
            r = o + e.collisionHeight - n - s;
          e.collisionHeight > n
            ? 0 < a && r <= 0
              ? ((i = t.top + a + e.collisionHeight - n - s), (t.top += a - i))
              : (t.top =
                  !(0 < r && a <= 0) && r < a ? s + n - e.collisionHeight : s)
            : 0 < a
            ? (t.top += a)
            : 0 < r
            ? (t.top -= r)
            : (t.top = x(t.top - o, t.top));
        },
      },
      flip: {
        left: function (t, e) {
          var i = e.within,
            s = i.offset.left + i.scrollLeft,
            n = i.width,
            o = i.isWindow ? i.scrollLeft : i.offset.left,
            a = t.left - e.collisionPosition.marginLeft,
            r = a - o,
            l = a + e.collisionWidth - n - o,
            h =
              "left" === e.my[0]
                ? -e.elemWidth
                : "right" === e.my[0]
                ? e.elemWidth
                : 0,
            i =
              "left" === e.at[0]
                ? e.targetWidth
                : "right" === e.at[0]
                ? -e.targetWidth
                : 0,
            a = -2 * e.offset[0];
          r < 0
            ? ((s = t.left + h + i + a + e.collisionWidth - n - s) < 0 ||
                s < k(r)) &&
              (t.left += h + i + a)
            : 0 < l &&
              (0 <
                (o = t.left - e.collisionPosition.marginLeft + h + i + a - o) ||
                k(o) < l) &&
              (t.left += h + i + a);
        },
        top: function (t, e) {
          var i = e.within,
            s = i.offset.top + i.scrollTop,
            n = i.height,
            o = i.isWindow ? i.scrollTop : i.offset.top,
            a = t.top - e.collisionPosition.marginTop,
            r = a - o,
            l = a + e.collisionHeight - n - o,
            h =
              "top" === e.my[1]
                ? -e.elemHeight
                : "bottom" === e.my[1]
                ? e.elemHeight
                : 0,
            i =
              "top" === e.at[1]
                ? e.targetHeight
                : "bottom" === e.at[1]
                ? -e.targetHeight
                : 0,
            a = -2 * e.offset[1];
          r < 0
            ? ((s = t.top + h + i + a + e.collisionHeight - n - s) < 0 ||
                s < k(r)) &&
              (t.top += h + i + a)
            : 0 < l &&
              (0 <
                (o = t.top - e.collisionPosition.marginTop + h + i + a - o) ||
                k(o) < l) &&
              (t.top += h + i + a);
        },
      },
      flipfit: {
        left: function () {
          V.ui.position.flip.left.apply(this, arguments),
            V.ui.position.fit.left.apply(this, arguments);
        },
        top: function () {
          V.ui.position.flip.top.apply(this, arguments),
            V.ui.position.fit.top.apply(this, arguments);
        },
      },
    });
  V.ui.position,
    V.extend(V.expr.pseudos, {
      data: V.expr.createPseudo
        ? V.expr.createPseudo(function (e) {
            return function (t) {
              return !!V.data(t, e);
            };
          })
        : function (t, e, i) {
            return !!V.data(t, i[3]);
          },
    }),
    V.fn.extend({
      disableSelection:
        ((t =
          "onselectstart" in document.createElement("div")
            ? "selectstart"
            : "mousedown"),
        function () {
          return this.on(t + ".ui-disableSelection", function (t) {
            t.preventDefault();
          });
        }),
      enableSelection: function () {
        return this.off(".ui-disableSelection");
      },
    });
  var t,
    d = V,
    p = {},
    e = p.toString,
    f = /^([\-+])=\s*(\d+\.?\d*)/,
    g = [
      {
        re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
        parse: function (t) {
          return [t[1], t[2], t[3], t[4]];
        },
      },
      {
        re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
        parse: function (t) {
          return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]];
        },
      },
      {
        re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})?/,
        parse: function (t) {
          return [
            parseInt(t[1], 16),
            parseInt(t[2], 16),
            parseInt(t[3], 16),
            t[4] ? (parseInt(t[4], 16) / 255).toFixed(2) : 1,
          ];
        },
      },
      {
        re: /#([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])?/,
        parse: function (t) {
          return [
            parseInt(t[1] + t[1], 16),
            parseInt(t[2] + t[2], 16),
            parseInt(t[3] + t[3], 16),
            t[4] ? (parseInt(t[4] + t[4], 16) / 255).toFixed(2) : 1,
          ];
        },
      },
      {
        re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
        space: "hsla",
        parse: function (t) {
          return [t[1], t[2] / 100, t[3] / 100, t[4]];
        },
      },
    ],
    m = (d.Color = function (t, e, i, s) {
      return new d.Color.fn.parse(t, e, i, s);
    }),
    _ = {
      rgba: {
        props: {
          red: { idx: 0, type: "byte" },
          green: { idx: 1, type: "byte" },
          blue: { idx: 2, type: "byte" },
        },
      },
      hsla: {
        props: {
          hue: { idx: 0, type: "degrees" },
          saturation: { idx: 1, type: "percent" },
          lightness: { idx: 2, type: "percent" },
        },
      },
    },
    v = {
      byte: { floor: !0, max: 255 },
      percent: { max: 1 },
      degrees: { mod: 360, floor: !0 },
    },
    b = (m.support = {}),
    y = d("<p>")[0],
    w = d.each;
  function P(t) {
    return null == t
      ? t + ""
      : "object" == typeof t
      ? p[e.call(t)] || "object"
      : typeof t;
  }
  function M(t, e, i) {
    var s = v[e.type] || {};
    return null == t
      ? i || !e.def
        ? null
        : e.def
      : ((t = s.floor ? ~~t : parseFloat(t)),
        isNaN(t)
          ? e.def
          : s.mod
          ? (t + s.mod) % s.mod
          : Math.min(s.max, Math.max(0, t)));
  }
  function S(s) {
    var n = m(),
      o = (n._rgba = []);
    return (
      (s = s.toLowerCase()),
      w(g, function (t, e) {
        var i = e.re.exec(s),
          i = i && e.parse(i),
          e = e.space || "rgba";
        if (i)
          return (
            (i = n[e](i)),
            (n[_[e].cache] = i[_[e].cache]),
            (o = n._rgba = i._rgba),
            !1
          );
      }),
      o.length
        ? ("0,0,0,0" === o.join() && d.extend(o, B.transparent), n)
        : B[s]
    );
  }
  function H(t, e, i) {
    return 6 * (i = (i + 1) % 1) < 1
      ? t + (e - t) * i * 6
      : 2 * i < 1
      ? e
      : 3 * i < 2
      ? t + (e - t) * (2 / 3 - i) * 6
      : t;
  }
  (y.style.cssText = "background-color:rgba(1,1,1,.5)"),
    (b.rgba = -1 < y.style.backgroundColor.indexOf("rgba")),
    w(_, function (t, e) {
      (e.cache = "_" + t),
        (e.props.alpha = { idx: 3, type: "percent", def: 1 });
    }),
    d.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (t, e) {
        p["[object " + e + "]"] = e.toLowerCase();
      }
    ),
    ((m.fn = d.extend(m.prototype, {
      parse: function (n, t, e, i) {
        if (void 0 === n) return (this._rgba = [null, null, null, null]), this;
        (n.jquery || n.nodeType) && ((n = d(n).css(t)), (t = void 0));
        var o = this,
          s = P(n),
          a = (this._rgba = []);
        return (
          void 0 !== t && ((n = [n, t, e, i]), (s = "array")),
          "string" === s
            ? this.parse(S(n) || B._default)
            : "array" === s
            ? (w(_.rgba.props, function (t, e) {
                a[e.idx] = M(n[e.idx], e);
              }),
              this)
            : "object" === s
            ? (w(
                _,
                n instanceof m
                  ? function (t, e) {
                      n[e.cache] && (o[e.cache] = n[e.cache].slice());
                    }
                  : function (t, i) {
                      var s = i.cache;
                      w(i.props, function (t, e) {
                        if (!o[s] && i.to) {
                          if ("alpha" === t || null == n[t]) return;
                          o[s] = i.to(o._rgba);
                        }
                        o[s][e.idx] = M(n[t], e, !0);
                      }),
                        o[s] &&
                          d.inArray(null, o[s].slice(0, 3)) < 0 &&
                          (null == o[s][3] && (o[s][3] = 1),
                          i.from && (o._rgba = i.from(o[s])));
                    }
              ),
              this)
            : void 0
        );
      },
      is: function (t) {
        var n = m(t),
          o = !0,
          a = this;
        return (
          w(_, function (t, e) {
            var i,
              s = n[e.cache];
            return (
              s &&
                ((i = a[e.cache] || (e.to && e.to(a._rgba)) || []),
                w(e.props, function (t, e) {
                  if (null != s[e.idx]) return (o = s[e.idx] === i[e.idx]);
                })),
              o
            );
          }),
          o
        );
      },
      _space: function () {
        var i = [],
          s = this;
        return (
          w(_, function (t, e) {
            s[e.cache] && i.push(t);
          }),
          i.pop()
        );
      },
      transition: function (t, a) {
        var e = (h = m(t))._space(),
          i = _[e],
          t = 0 === this.alpha() ? m("transparent") : this,
          r = t[i.cache] || i.to(t._rgba),
          l = r.slice(),
          h = h[i.cache];
        return (
          w(i.props, function (t, e) {
            var i = e.idx,
              s = r[i],
              n = h[i],
              o = v[e.type] || {};
            null !== n &&
              (null === s
                ? (l[i] = n)
                : (o.mod &&
                    (n - s > o.mod / 2
                      ? (s += o.mod)
                      : s - n > o.mod / 2 && (s -= o.mod)),
                  (l[i] = M((n - s) * a + s, e))));
          }),
          this[e](l)
        );
      },
      blend: function (t) {
        if (1 === this._rgba[3]) return this;
        var e = this._rgba.slice(),
          i = e.pop(),
          s = m(t)._rgba;
        return m(
          d.map(e, function (t, e) {
            return (1 - i) * s[e] + i * t;
          })
        );
      },
      toRgbaString: function () {
        var t = "rgba(",
          e = d.map(this._rgba, function (t, e) {
            return null != t ? t : 2 < e ? 1 : 0;
          });
        return 1 === e[3] && (e.pop(), (t = "rgb(")), t + e.join() + ")";
      },
      toHslaString: function () {
        var t = "hsla(",
          e = d.map(this.hsla(), function (t, e) {
            return (
              null == t && (t = 2 < e ? 1 : 0),
              (t = e && e < 3 ? Math.round(100 * t) + "%" : t)
            );
          });
        return 1 === e[3] && (e.pop(), (t = "hsl(")), t + e.join() + ")";
      },
      toHexString: function (t) {
        var e = this._rgba.slice(),
          i = e.pop();
        return (
          t && e.push(~~(255 * i)),
          "#" +
            d
              .map(e, function (t) {
                return 1 === (t = (t || 0).toString(16)).length ? "0" + t : t;
              })
              .join("")
        );
      },
      toString: function () {
        return 0 === this._rgba[3] ? "transparent" : this.toRgbaString();
      },
    })).parse.prototype = m.fn),
    (_.hsla.to = function (t) {
      if (null == t[0] || null == t[1] || null == t[2])
        return [null, null, null, t[3]];
      var e = t[0] / 255,
        i = t[1] / 255,
        s = t[2] / 255,
        n = t[3],
        o = Math.max(e, i, s),
        a = Math.min(e, i, s),
        r = o - a,
        l = o + a,
        t = 0.5 * l,
        i =
          a === o
            ? 0
            : e === o
            ? (60 * (i - s)) / r + 360
            : i === o
            ? (60 * (s - e)) / r + 120
            : (60 * (e - i)) / r + 240,
        l = 0 == r ? 0 : t <= 0.5 ? r / l : r / (2 - l);
      return [Math.round(i) % 360, l, t, null == n ? 1 : n];
    }),
    (_.hsla.from = function (t) {
      if (null == t[0] || null == t[1] || null == t[2])
        return [null, null, null, t[3]];
      var e = t[0] / 360,
        i = t[1],
        s = t[2],
        t = t[3],
        i = s <= 0.5 ? s * (1 + i) : s + i - s * i,
        s = 2 * s - i;
      return [
        Math.round(255 * H(s, i, e + 1 / 3)),
        Math.round(255 * H(s, i, e)),
        Math.round(255 * H(s, i, e - 1 / 3)),
        t,
      ];
    }),
    w(_, function (l, t) {
      var e = t.props,
        o = t.cache,
        a = t.to,
        r = t.from;
      (m.fn[l] = function (t) {
        if ((a && !this[o] && (this[o] = a(this._rgba)), void 0 === t))
          return this[o].slice();
        var i = P(t),
          s = "array" === i || "object" === i ? t : arguments,
          n = this[o].slice();
        return (
          w(e, function (t, e) {
            t = s["object" === i ? t : e.idx];
            null == t && (t = n[e.idx]), (n[e.idx] = M(t, e));
          }),
          r ? (((t = m(r(n)))[o] = n), t) : m(n)
        );
      }),
        w(e, function (a, r) {
          m.fn[a] ||
            (m.fn[a] = function (t) {
              var e,
                i = P(t),
                s = "alpha" === a ? (this._hsla ? "hsla" : "rgba") : l,
                n = this[s](),
                o = n[r.idx];
              return "undefined" === i
                ? o
                : ("function" === i && (i = P((t = t.call(this, o)))),
                  null == t && r.empty
                    ? this
                    : ("string" === i &&
                        (e = f.exec(t)) &&
                        (t = o + parseFloat(e[2]) * ("+" === e[1] ? 1 : -1)),
                      (n[r.idx] = t),
                      this[s](n)));
            });
        });
    }),
    (m.hook = function (t) {
      t = t.split(" ");
      w(t, function (t, o) {
        (d.cssHooks[o] = {
          set: function (t, e) {
            var i,
              s,
              n = "";
            if ("transparent" !== e && ("string" !== P(e) || (i = S(e)))) {
              if (((e = m(i || e)), !b.rgba && 1 !== e._rgba[3])) {
                for (
                  s = "backgroundColor" === o ? t.parentNode : t;
                  ("" === n || "transparent" === n) && s && s.style;

                )
                  try {
                    (n = d.css(s, "backgroundColor")), (s = s.parentNode);
                  } catch (t) {}
                e = e.blend(n && "transparent" !== n ? n : "_default");
              }
              e = e.toRgbaString();
            }
            try {
              t.style[o] = e;
            } catch (t) {}
          },
        }),
          (d.fx.step[o] = function (t) {
            t.colorInit ||
              ((t.start = m(t.elem, o)),
              (t.end = m(t.end)),
              (t.colorInit = !0)),
              d.cssHooks[o].set(t.elem, t.start.transition(t.end, t.pos));
          });
      });
    })(
      "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"
    ),
    (d.cssHooks.borderColor = {
      expand: function (i) {
        var s = {};
        return (
          w(["Top", "Right", "Bottom", "Left"], function (t, e) {
            s["border" + e + "Color"] = i;
          }),
          s
        );
      },
    });
  var z,
    A,
    O,
    N,
    E,
    W,
    F,
    L,
    R,
    Y,
    B = (d.Color.names = {
      aqua: "#00ffff",
      black: "#000000",
      blue: "#0000ff",
      fuchsia: "#ff00ff",
      gray: "#808080",
      green: "#008000",
      lime: "#00ff00",
      maroon: "#800000",
      navy: "#000080",
      olive: "#808000",
      purple: "#800080",
      red: "#ff0000",
      silver: "#c0c0c0",
      teal: "#008080",
      white: "#ffffff",
      yellow: "#ffff00",
      transparent: [null, null, null, 0],
      _default: "#ffffff",
    }),
    j = "ui-effects-",
    q = "ui-effects-style",
    K = "ui-effects-animated";
  function U(t) {
    var e,
      i,
      s = t.ownerDocument.defaultView
        ? t.ownerDocument.defaultView.getComputedStyle(t, null)
        : t.currentStyle,
      n = {};
    if (s && s.length && s[0] && s[s[0]])
      for (i = s.length; i--; )
        "string" == typeof s[(e = s[i])] &&
          (n[
            e.replace(/-([\da-z])/gi, function (t, e) {
              return e.toUpperCase();
            })
          ] = s[e]);
    else for (e in s) "string" == typeof s[e] && (n[e] = s[e]);
    return n;
  }
  function X(t, e, i, s) {
    return (
      (t = { effect: (t = V.isPlainObject(t) ? (e = t).effect : t) }),
      "function" == typeof (e = null == e ? {} : e) &&
        ((s = e), (i = null), (e = {})),
      ("number" != typeof e && !V.fx.speeds[e]) || ((s = i), (i = e), (e = {})),
      "function" == typeof i && ((s = i), (i = null)),
      e && V.extend(t, e),
      (i = i || e.duration),
      (t.duration = V.fx.off
        ? 0
        : "number" == typeof i
        ? i
        : i in V.fx.speeds
        ? V.fx.speeds[i]
        : V.fx.speeds._default),
      (t.complete = s || e.complete),
      t
    );
  }
  function $(t) {
    return (
      !t ||
      "number" == typeof t ||
      V.fx.speeds[t] ||
      ("string" == typeof t && !V.effects.effect[t]) ||
      "function" == typeof t ||
      ("object" == typeof t && !t.effect)
    );
  }
  function G(t, e) {
    var i = e.outerWidth(),
      e = e.outerHeight(),
      t =
        /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(
          t
        ) || ["", 0, i, e, 0];
    return {
      top: parseFloat(t[1]) || 0,
      right: "auto" === t[2] ? i : parseFloat(t[2]),
      bottom: "auto" === t[3] ? e : parseFloat(t[3]),
      left: parseFloat(t[4]) || 0,
    };
  }
  (V.effects = { effect: {} }),
    (N = ["add", "remove", "toggle"]),
    (E = {
      border: 1,
      borderBottom: 1,
      borderColor: 1,
      borderLeft: 1,
      borderRight: 1,
      borderTop: 1,
      borderWidth: 1,
      margin: 1,
      padding: 1,
    }),
    V.each(
      [
        "borderLeftStyle",
        "borderRightStyle",
        "borderBottomStyle",
        "borderTopStyle",
      ],
      function (t, e) {
        V.fx.step[e] = function (t) {
          (("none" !== t.end && !t.setAttr) || (1 === t.pos && !t.setAttr)) &&
            (d.style(t.elem, e, t.end), (t.setAttr = !0));
        };
      }
    ),
    V.fn.addBack ||
      (V.fn.addBack = function (t) {
        return this.add(
          null == t ? this.prevObject : this.prevObject.filter(t)
        );
      }),
    (V.effects.animateClass = function (n, t, e, i) {
      var o = V.speed(t, e, i);
      return this.queue(function () {
        var i = V(this),
          t = i.attr("class") || "",
          e = (e = o.children ? i.find("*").addBack() : i).map(function () {
            return { el: V(this), start: U(this) };
          }),
          s = function () {
            V.each(N, function (t, e) {
              n[e] && i[e + "Class"](n[e]);
            });
          };
        s(),
          (e = e.map(function () {
            return (
              (this.end = U(this.el[0])),
              (this.diff = (function (t, e) {
                var i,
                  s,
                  n = {};
                for (i in e)
                  (s = e[i]),
                    t[i] !== s &&
                      (E[i] ||
                        (!V.fx.step[i] && isNaN(parseFloat(s))) ||
                        (n[i] = s));
                return n;
              })(this.start, this.end)),
              this
            );
          })),
          i.attr("class", t),
          (e = e.map(function () {
            var t = this,
              e = V.Deferred(),
              i = V.extend({}, o, {
                queue: !1,
                complete: function () {
                  e.resolve(t);
                },
              });
            return this.el.animate(this.diff, i), e.promise();
          })),
          V.when.apply(V, e.get()).done(function () {
            s(),
              V.each(arguments, function () {
                var e = this.el;
                V.each(this.diff, function (t) {
                  e.css(t, "");
                });
              }),
              o.complete.call(i[0]);
          });
      });
    }),
    V.fn.extend({
      addClass:
        ((O = V.fn.addClass),
        function (t, e, i, s) {
          return e
            ? V.effects.animateClass.call(this, { add: t }, e, i, s)
            : O.apply(this, arguments);
        }),
      removeClass:
        ((A = V.fn.removeClass),
        function (t, e, i, s) {
          return 1 < arguments.length
            ? V.effects.animateClass.call(this, { remove: t }, e, i, s)
            : A.apply(this, arguments);
        }),
      toggleClass:
        ((z = V.fn.toggleClass),
        function (t, e, i, s, n) {
          return "boolean" == typeof e || void 0 === e
            ? i
              ? V.effects.animateClass.call(
                  this,
                  e ? { add: t } : { remove: t },
                  i,
                  s,
                  n
                )
              : z.apply(this, arguments)
            : V.effects.animateClass.call(this, { toggle: t }, e, i, s);
        }),
      switchClass: function (t, e, i, s, n) {
        return V.effects.animateClass.call(
          this,
          { add: e, remove: t },
          i,
          s,
          n
        );
      },
    }),
    V.expr &&
      V.expr.pseudos &&
      V.expr.pseudos.animated &&
      (V.expr.pseudos.animated =
        ((W = V.expr.pseudos.animated),
        function (t) {
          return !!V(t).data(K) || W(t);
        })),
    !1 !== V.uiBackCompat &&
      V.extend(V.effects, {
        save: function (t, e) {
          for (var i = 0, s = e.length; i < s; i++)
            null !== e[i] && t.data(j + e[i], t[0].style[e[i]]);
        },
        restore: function (t, e) {
          for (var i, s = 0, n = e.length; s < n; s++)
            null !== e[s] && ((i = t.data(j + e[s])), t.css(e[s], i));
        },
        setMode: function (t, e) {
          return (e = "toggle" === e ? (t.is(":hidden") ? "show" : "hide") : e);
        },
        createWrapper: function (i) {
          if (i.parent().is(".ui-effects-wrapper")) return i.parent();
          var s = {
              width: i.outerWidth(!0),
              height: i.outerHeight(!0),
              float: i.css("float"),
            },
            t = V("<div></div>")
              .addClass("ui-effects-wrapper")
              .css({
                fontSize: "100%",
                background: "transparent",
                border: "none",
                margin: 0,
                padding: 0,
              }),
            e = { width: i.width(), height: i.height() },
            n = document.activeElement;
          try {
            n.id;
          } catch (t) {
            n = document.body;
          }
          return (
            i.wrap(t),
            (i[0] !== n && !V.contains(i[0], n)) || V(n).trigger("focus"),
            (t = i.parent()),
            "static" === i.css("position")
              ? (t.css({ position: "relative" }),
                i.css({ position: "relative" }))
              : (V.extend(s, {
                  position: i.css("position"),
                  zIndex: i.css("z-index"),
                }),
                V.each(["top", "left", "bottom", "right"], function (t, e) {
                  (s[e] = i.css(e)),
                    isNaN(parseInt(s[e], 10)) && (s[e] = "auto");
                }),
                i.css({
                  position: "relative",
                  top: 0,
                  left: 0,
                  right: "auto",
                  bottom: "auto",
                })),
            i.css(e),
            t.css(s).show()
          );
        },
        removeWrapper: function (t) {
          var e = document.activeElement;
          return (
            t.parent().is(".ui-effects-wrapper") &&
              (t.parent().replaceWith(t),
              (t[0] !== e && !V.contains(t[0], e)) || V(e).trigger("focus")),
            t
          );
        },
      }),
    V.extend(V.effects, {
      version: "1.13.2",
      define: function (t, e, i) {
        return (
          i || ((i = e), (e = "effect")),
          (V.effects.effect[t] = i),
          (V.effects.effect[t].mode = e),
          i
        );
      },
      scaledDimensions: function (t, e, i) {
        if (0 === e)
          return { height: 0, width: 0, outerHeight: 0, outerWidth: 0 };
        var s = "horizontal" !== i ? (e || 100) / 100 : 1,
          e = "vertical" !== i ? (e || 100) / 100 : 1;
        return {
          height: t.height() * e,
          width: t.width() * s,
          outerHeight: t.outerHeight() * e,
          outerWidth: t.outerWidth() * s,
        };
      },
      clipToBox: function (t) {
        return {
          width: t.clip.right - t.clip.left,
          height: t.clip.bottom - t.clip.top,
          left: t.clip.left,
          top: t.clip.top,
        };
      },
      unshift: function (t, e, i) {
        var s = t.queue();
        1 < e && s.splice.apply(s, [1, 0].concat(s.splice(e, i))), t.dequeue();
      },
      saveStyle: function (t) {
        t.data(q, t[0].style.cssText);
      },
      restoreStyle: function (t) {
        (t[0].style.cssText = t.data(q) || ""), t.removeData(q);
      },
      mode: function (t, e) {
        t = t.is(":hidden");
        return (
          "toggle" === e && (e = t ? "show" : "hide"),
          (e = (t ? "hide" === e : "show" === e) ? "none" : e)
        );
      },
      getBaseline: function (t, e) {
        var i, s;
        switch (t[0]) {
          case "top":
            i = 0;
            break;
          case "middle":
            i = 0.5;
            break;
          case "bottom":
            i = 1;
            break;
          default:
            i = t[0] / e.height;
        }
        switch (t[1]) {
          case "left":
            s = 0;
            break;
          case "center":
            s = 0.5;
            break;
          case "right":
            s = 1;
            break;
          default:
            s = t[1] / e.width;
        }
        return { x: s, y: i };
      },
      createPlaceholder: function (t) {
        var e,
          i = t.css("position"),
          s = t.position();
        return (
          t
            .css({
              marginTop: t.css("marginTop"),
              marginBottom: t.css("marginBottom"),
              marginLeft: t.css("marginLeft"),
              marginRight: t.css("marginRight"),
            })
            .outerWidth(t.outerWidth())
            .outerHeight(t.outerHeight()),
          /^(static|relative)/.test(i) &&
            ((i = "absolute"),
            (e = V("<" + t[0].nodeName + ">")
              .insertAfter(t)
              .css({
                display: /^(inline|ruby)/.test(t.css("display"))
                  ? "inline-block"
                  : "block",
                visibility: "hidden",
                marginTop: t.css("marginTop"),
                marginBottom: t.css("marginBottom"),
                marginLeft: t.css("marginLeft"),
                marginRight: t.css("marginRight"),
                float: t.css("float"),
              })
              .outerWidth(t.outerWidth())
              .outerHeight(t.outerHeight())
              .addClass("ui-effects-placeholder")),
            t.data(j + "placeholder", e)),
          t.css({ position: i, left: s.left, top: s.top }),
          e
        );
      },
      removePlaceholder: function (t) {
        var e = j + "placeholder",
          i = t.data(e);
        i && (i.remove(), t.removeData(e));
      },
      cleanUp: function (t) {
        V.effects.restoreStyle(t), V.effects.removePlaceholder(t);
      },
      setTransition: function (s, t, n, o) {
        return (
          (o = o || {}),
          V.each(t, function (t, e) {
            var i = s.cssUnit(e);
            0 < i[0] && (o[e] = i[0] * n + i[1]);
          }),
          o
        );
      },
    }),
    V.fn.extend({
      effect: function () {
        function t(t) {
          var e = V(this),
            i = V.effects.mode(e, r) || o;
          e.data(K, !0),
            l.push(i),
            o && ("show" === i || (i === o && "hide" === i)) && e.show(),
            (o && "none" === i) || V.effects.saveStyle(e),
            "function" == typeof t && t();
        }
        var s = X.apply(this, arguments),
          n = V.effects.effect[s.effect],
          o = n.mode,
          e = s.queue,
          i = e || "fx",
          a = s.complete,
          r = s.mode,
          l = [];
        return V.fx.off || !n
          ? r
            ? this[r](s.duration, a)
            : this.each(function () {
                a && a.call(this);
              })
          : !1 === e
          ? this.each(t).each(h)
          : this.queue(i, t).queue(i, h);
        function h(t) {
          var e = V(this);
          function i() {
            "function" == typeof a && a.call(e[0]),
              "function" == typeof t && t();
          }
          (s.mode = l.shift()),
            !1 === V.uiBackCompat || o
              ? "none" === s.mode
                ? (e[r](), i())
                : n.call(e[0], s, function () {
                    e.removeData(K),
                      V.effects.cleanUp(e),
                      "hide" === s.mode && e.hide(),
                      i();
                  })
              : (e.is(":hidden") ? "hide" === r : "show" === r)
              ? (e[r](), i())
              : n.call(e[0], s, i);
        }
      },
      show:
        ((R = V.fn.show),
        function (t) {
          if ($(t)) return R.apply(this, arguments);
          t = X.apply(this, arguments);
          return (t.mode = "show"), this.effect.call(this, t);
        }),
      hide:
        ((L = V.fn.hide),
        function (t) {
          if ($(t)) return L.apply(this, arguments);
          t = X.apply(this, arguments);
          return (t.mode = "hide"), this.effect.call(this, t);
        }),
      toggle:
        ((F = V.fn.toggle),
        function (t) {
          if ($(t) || "boolean" == typeof t) return F.apply(this, arguments);
          t = X.apply(this, arguments);
          return (t.mode = "toggle"), this.effect.call(this, t);
        }),
      cssUnit: function (t) {
        var i = this.css(t),
          s = [];
        return (
          V.each(["em", "px", "%", "pt"], function (t, e) {
            0 < i.indexOf(e) && (s = [parseFloat(i), e]);
          }),
          s
        );
      },
      cssClip: function (t) {
        return t
          ? this.css(
              "clip",
              "rect(" +
                t.top +
                "px " +
                t.right +
                "px " +
                t.bottom +
                "px " +
                t.left +
                "px)"
            )
          : G(this.css("clip"), this);
      },
      transfer: function (t, e) {
        var i = V(this),
          s = V(t.to),
          n = "fixed" === s.css("position"),
          o = V("body"),
          a = n ? o.scrollTop() : 0,
          r = n ? o.scrollLeft() : 0,
          o = s.offset(),
          o = {
            top: o.top - a,
            left: o.left - r,
            height: s.innerHeight(),
            width: s.innerWidth(),
          },
          s = i.offset(),
          l = V("<div class='ui-effects-transfer'></div>");
        l.appendTo("body")
          .addClass(t.className)
          .css({
            top: s.top - a,
            left: s.left - r,
            height: i.innerHeight(),
            width: i.innerWidth(),
            position: n ? "fixed" : "absolute",
          })
          .animate(o, t.duration, t.easing, function () {
            l.remove(), "function" == typeof e && e();
          });
      },
    }),
    (V.fx.step.clip = function (t) {
      t.clipInit ||
        ((t.start = V(t.elem).cssClip()),
        "string" == typeof t.end && (t.end = G(t.end, t.elem)),
        (t.clipInit = !0)),
        V(t.elem).cssClip({
          top: t.pos * (t.end.top - t.start.top) + t.start.top,
          right: t.pos * (t.end.right - t.start.right) + t.start.right,
          bottom: t.pos * (t.end.bottom - t.start.bottom) + t.start.bottom,
          left: t.pos * (t.end.left - t.start.left) + t.start.left,
        });
    }),
    (Y = {}),
    V.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (e, t) {
      Y[t] = function (t) {
        return Math.pow(t, e + 2);
      };
    }),
    V.extend(Y, {
      Sine: function (t) {
        return 1 - Math.cos((t * Math.PI) / 2);
      },
      Circ: function (t) {
        return 1 - Math.sqrt(1 - t * t);
      },
      Elastic: function (t) {
        return 0 === t || 1 === t
          ? t
          : -Math.pow(2, 8 * (t - 1)) *
              Math.sin(((80 * (t - 1) - 7.5) * Math.PI) / 15);
      },
      Back: function (t) {
        return t * t * (3 * t - 2);
      },
      Bounce: function (t) {
        for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11; );
        return (
          1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
        );
      },
    }),
    V.each(Y, function (t, e) {
      (V.easing["easeIn" + t] = e),
        (V.easing["easeOut" + t] = function (t) {
          return 1 - e(1 - t);
        }),
        (V.easing["easeInOut" + t] = function (t) {
          return t < 0.5 ? e(2 * t) / 2 : 1 - e(-2 * t + 2) / 2;
        });
    });
  (y = V.effects),
    V.effects.define("blind", "hide", function (t, e) {
      var i = {
          up: ["bottom", "top"],
          vertical: ["bottom", "top"],
          down: ["top", "bottom"],
          left: ["right", "left"],
          horizontal: ["right", "left"],
          right: ["left", "right"],
        },
        s = V(this),
        n = t.direction || "up",
        o = s.cssClip(),
        a = { clip: V.extend({}, o) },
        r = V.effects.createPlaceholder(s);
      (a.clip[i[n][0]] = a.clip[i[n][1]]),
        "show" === t.mode &&
          (s.cssClip(a.clip), r && r.css(V.effects.clipToBox(a)), (a.clip = o)),
        r && r.animate(V.effects.clipToBox(a), t.duration, t.easing),
        s.animate(a, {
          queue: !1,
          duration: t.duration,
          easing: t.easing,
          complete: e,
        });
    }),
    V.effects.define("bounce", function (t, e) {
      var i,
        s,
        n = V(this),
        o = t.mode,
        a = "hide" === o,
        r = "show" === o,
        l = t.direction || "up",
        h = t.distance,
        c = t.times || 5,
        o = 2 * c + (r || a ? 1 : 0),
        u = t.duration / o,
        d = t.easing,
        p = "up" === l || "down" === l ? "top" : "left",
        f = "up" === l || "left" === l,
        g = 0,
        t = n.queue().length;
      for (
        V.effects.createPlaceholder(n),
          l = n.css(p),
          h = h || n["top" == p ? "outerHeight" : "outerWidth"]() / 3,
          r &&
            (((s = { opacity: 1 })[p] = l),
            n
              .css("opacity", 0)
              .css(p, f ? 2 * -h : 2 * h)
              .animate(s, u, d)),
          a && (h /= Math.pow(2, c - 1)),
          (s = {})[p] = l;
        g < c;
        g++
      )
        ((i = {})[p] = (f ? "-=" : "+=") + h),
          n.animate(i, u, d).animate(s, u, d),
          (h = a ? 2 * h : h / 2);
      a &&
        (((i = { opacity: 0 })[p] = (f ? "-=" : "+=") + h), n.animate(i, u, d)),
        n.queue(e),
        V.effects.unshift(n, t, 1 + o);
    }),
    V.effects.define("clip", "hide", function (t, e) {
      var i = {},
        s = V(this),
        n = t.direction || "vertical",
        o = "both" === n,
        a = o || "horizontal" === n,
        o = o || "vertical" === n,
        n = s.cssClip();
      (i.clip = {
        top: o ? (n.bottom - n.top) / 2 : n.top,
        right: a ? (n.right - n.left) / 2 : n.right,
        bottom: o ? (n.bottom - n.top) / 2 : n.bottom,
        left: a ? (n.right - n.left) / 2 : n.left,
      }),
        V.effects.createPlaceholder(s),
        "show" === t.mode && (s.cssClip(i.clip), (i.clip = n)),
        s.animate(i, {
          queue: !1,
          duration: t.duration,
          easing: t.easing,
          complete: e,
        });
    }),
    V.effects.define("drop", "hide", function (t, e) {
      var i = V(this),
        s = "show" === t.mode,
        n = t.direction || "left",
        o = "up" === n || "down" === n ? "top" : "left",
        a = "up" === n || "left" === n ? "-=" : "+=",
        r = "+=" == a ? "-=" : "+=",
        l = { opacity: 0 };
      V.effects.createPlaceholder(i),
        (n =
          t.distance || i["top" == o ? "outerHeight" : "outerWidth"](!0) / 2),
        (l[o] = a + n),
        s && (i.css(l), (l[o] = r + n), (l.opacity = 1)),
        i.animate(l, {
          queue: !1,
          duration: t.duration,
          easing: t.easing,
          complete: e,
        });
    }),
    V.effects.define("explode", "hide", function (t, e) {
      var i,
        s,
        n,
        o,
        a,
        r,
        l = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3,
        h = l,
        c = V(this),
        u = "show" === t.mode,
        d = c.show().css("visibility", "hidden").offset(),
        p = Math.ceil(c.outerWidth() / h),
        f = Math.ceil(c.outerHeight() / l),
        g = [];
      function m() {
        g.push(this),
          g.length === l * h &&
            (c.css({ visibility: "visible" }), V(g).remove(), e());
      }
      for (i = 0; i < l; i++)
        for (o = d.top + i * f, r = i - (l - 1) / 2, s = 0; s < h; s++)
          (n = d.left + s * p),
            (a = s - (h - 1) / 2),
            c
              .clone()
              .appendTo("body")
              .wrap("<div></div>")
              .css({
                position: "absolute",
                visibility: "visible",
                left: -s * p,
                top: -i * f,
              })
              .parent()
              .addClass("ui-effects-explode")
              .css({
                position: "absolute",
                overflow: "hidden",
                width: p,
                height: f,
                left: n + (u ? a * p : 0),
                top: o + (u ? r * f : 0),
                opacity: u ? 0 : 1,
              })
              .animate(
                {
                  left: n + (u ? 0 : a * p),
                  top: o + (u ? 0 : r * f),
                  opacity: u ? 1 : 0,
                },
                t.duration || 500,
                t.easing,
                m
              );
    }),
    V.effects.define("fade", "toggle", function (t, e) {
      var i = "show" === t.mode;
      V(this)
        .css("opacity", i ? 0 : 1)
        .animate(
          { opacity: i ? 1 : 0 },
          { queue: !1, duration: t.duration, easing: t.easing, complete: e }
        );
    }),
    V.effects.define("fold", "hide", function (e, t) {
      var i = V(this),
        s = e.mode,
        n = "show" === s,
        o = "hide" === s,
        a = e.size || 15,
        r = /([0-9]+)%/.exec(a),
        l = !!e.horizFirst ? ["right", "bottom"] : ["bottom", "right"],
        h = e.duration / 2,
        c = V.effects.createPlaceholder(i),
        u = i.cssClip(),
        d = { clip: V.extend({}, u) },
        p = { clip: V.extend({}, u) },
        f = [u[l[0]], u[l[1]]],
        s = i.queue().length;
      r && (a = (parseInt(r[1], 10) / 100) * f[o ? 0 : 1]),
        (d.clip[l[0]] = a),
        (p.clip[l[0]] = a),
        (p.clip[l[1]] = 0),
        n &&
          (i.cssClip(p.clip), c && c.css(V.effects.clipToBox(p)), (p.clip = u)),
        i
          .queue(function (t) {
            c &&
              c
                .animate(V.effects.clipToBox(d), h, e.easing)
                .animate(V.effects.clipToBox(p), h, e.easing),
              t();
          })
          .animate(d, h, e.easing)
          .animate(p, h, e.easing)
          .queue(t),
        V.effects.unshift(i, s, 4);
    }),
    V.effects.define("highlight", "show", function (t, e) {
      var i = V(this),
        s = { backgroundColor: i.css("backgroundColor") };
      "hide" === t.mode && (s.opacity = 0),
        V.effects.saveStyle(i),
        i
          .css({
            backgroundImage: "none",
            backgroundColor: t.color || "#ffff99",
          })
          .animate(s, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: e,
          });
    }),
    V.effects.define("size", function (s, e) {
      var n,
        i = V(this),
        t = ["fontSize"],
        o = [
          "borderTopWidth",
          "borderBottomWidth",
          "paddingTop",
          "paddingBottom",
        ],
        a = [
          "borderLeftWidth",
          "borderRightWidth",
          "paddingLeft",
          "paddingRight",
        ],
        r = s.mode,
        l = "effect" !== r,
        h = s.scale || "both",
        c = s.origin || ["middle", "center"],
        u = i.css("position"),
        d = i.position(),
        p = V.effects.scaledDimensions(i),
        f = s.from || p,
        g = s.to || V.effects.scaledDimensions(i, 0);
      V.effects.createPlaceholder(i),
        "show" === r && ((r = f), (f = g), (g = r)),
        (n = {
          from: { y: f.height / p.height, x: f.width / p.width },
          to: { y: g.height / p.height, x: g.width / p.width },
        }),
        ("box" !== h && "both" !== h) ||
          (n.from.y !== n.to.y &&
            ((f = V.effects.setTransition(i, o, n.from.y, f)),
            (g = V.effects.setTransition(i, o, n.to.y, g))),
          n.from.x !== n.to.x &&
            ((f = V.effects.setTransition(i, a, n.from.x, f)),
            (g = V.effects.setTransition(i, a, n.to.x, g)))),
        ("content" !== h && "both" !== h) ||
          (n.from.y !== n.to.y &&
            ((f = V.effects.setTransition(i, t, n.from.y, f)),
            (g = V.effects.setTransition(i, t, n.to.y, g)))),
        c &&
          ((c = V.effects.getBaseline(c, p)),
          (f.top = (p.outerHeight - f.outerHeight) * c.y + d.top),
          (f.left = (p.outerWidth - f.outerWidth) * c.x + d.left),
          (g.top = (p.outerHeight - g.outerHeight) * c.y + d.top),
          (g.left = (p.outerWidth - g.outerWidth) * c.x + d.left)),
        delete f.outerHeight,
        delete f.outerWidth,
        i.css(f),
        ("content" !== h && "both" !== h) ||
          ((o = o.concat(["marginTop", "marginBottom"]).concat(t)),
          (a = a.concat(["marginLeft", "marginRight"])),
          i.find("*[width]").each(function () {
            var t = V(this),
              e = V.effects.scaledDimensions(t),
              i = {
                height: e.height * n.from.y,
                width: e.width * n.from.x,
                outerHeight: e.outerHeight * n.from.y,
                outerWidth: e.outerWidth * n.from.x,
              },
              e = {
                height: e.height * n.to.y,
                width: e.width * n.to.x,
                outerHeight: e.height * n.to.y,
                outerWidth: e.width * n.to.x,
              };
            n.from.y !== n.to.y &&
              ((i = V.effects.setTransition(t, o, n.from.y, i)),
              (e = V.effects.setTransition(t, o, n.to.y, e))),
              n.from.x !== n.to.x &&
                ((i = V.effects.setTransition(t, a, n.from.x, i)),
                (e = V.effects.setTransition(t, a, n.to.x, e))),
              l && V.effects.saveStyle(t),
              t.css(i),
              t.animate(e, s.duration, s.easing, function () {
                l && V.effects.restoreStyle(t);
              });
          })),
        i.animate(g, {
          queue: !1,
          duration: s.duration,
          easing: s.easing,
          complete: function () {
            var t = i.offset();
            0 === g.opacity && i.css("opacity", f.opacity),
              l ||
                (i.css("position", "static" === u ? "relative" : u).offset(t),
                V.effects.saveStyle(i)),
              e();
          },
        });
    }),
    V.effects.define("scale", function (t, e) {
      var i = V(this),
        s = t.mode,
        s =
          parseInt(t.percent, 10) ||
          (0 === parseInt(t.percent, 10) || "effect" !== s ? 0 : 100),
        s = V.extend(
          !0,
          {
            from: V.effects.scaledDimensions(i),
            to: V.effects.scaledDimensions(i, s, t.direction || "both"),
            origin: t.origin || ["middle", "center"],
          },
          t
        );
      t.fade && ((s.from.opacity = 1), (s.to.opacity = 0)),
        V.effects.effect.size.call(this, s, e);
    }),
    V.effects.define("puff", "hide", function (t, e) {
      t = V.extend(!0, {}, t, {
        fade: !0,
        percent: parseInt(t.percent, 10) || 150,
      });
      V.effects.effect.scale.call(this, t, e);
    }),
    V.effects.define("pulsate", "show", function (t, e) {
      var i = V(this),
        s = t.mode,
        n = "show" === s,
        o = 2 * (t.times || 5) + (n || "hide" === s ? 1 : 0),
        a = t.duration / o,
        r = 0,
        l = 1,
        s = i.queue().length;
      for (
        (!n && i.is(":visible")) || (i.css("opacity", 0).show(), (r = 1));
        l < o;
        l++
      )
        i.animate({ opacity: r }, a, t.easing), (r = 1 - r);
      i.animate({ opacity: r }, a, t.easing),
        i.queue(e),
        V.effects.unshift(i, s, 1 + o);
    }),
    V.effects.define("shake", function (t, e) {
      var i = 1,
        s = V(this),
        n = t.direction || "left",
        o = t.distance || 20,
        a = t.times || 3,
        r = 2 * a + 1,
        l = Math.round(t.duration / r),
        h = "up" === n || "down" === n ? "top" : "left",
        c = "up" === n || "left" === n,
        u = {},
        d = {},
        p = {},
        n = s.queue().length;
      for (
        V.effects.createPlaceholder(s),
          u[h] = (c ? "-=" : "+=") + o,
          d[h] = (c ? "+=" : "-=") + 2 * o,
          p[h] = (c ? "-=" : "+=") + 2 * o,
          s.animate(u, l, t.easing);
        i < a;
        i++
      )
        s.animate(d, l, t.easing).animate(p, l, t.easing);
      s
        .animate(d, l, t.easing)
        .animate(u, l / 2, t.easing)
        .queue(e),
        V.effects.unshift(s, n, 1 + r);
    }),
    V.effects.define("slide", "show", function (t, e) {
      var i,
        s,
        n = V(this),
        o = {
          up: ["bottom", "top"],
          down: ["top", "bottom"],
          left: ["right", "left"],
          right: ["left", "right"],
        },
        a = t.mode,
        r = t.direction || "left",
        l = "up" === r || "down" === r ? "top" : "left",
        h = "up" === r || "left" === r,
        c = t.distance || n["top" == l ? "outerHeight" : "outerWidth"](!0),
        u = {};
      V.effects.createPlaceholder(n),
        (i = n.cssClip()),
        (s = n.position()[l]),
        (u[l] = (h ? -1 : 1) * c + s),
        (u.clip = n.cssClip()),
        (u.clip[o[r][1]] = u.clip[o[r][0]]),
        "show" === a &&
          (n.cssClip(u.clip), n.css(l, u[l]), (u.clip = i), (u[l] = s)),
        n.animate(u, {
          queue: !1,
          duration: t.duration,
          easing: t.easing,
          complete: e,
        });
    }),
    (y =
      !1 !== V.uiBackCompat
        ? V.effects.define("transfer", function (t, e) {
            V(this).transfer(t, e);
          })
        : y);
  (V.ui.focusable = function (t, e) {
    var i,
      s,
      n,
      o,
      a = t.nodeName.toLowerCase();
    return "area" === a
      ? ((s = (i = t.parentNode).name),
        !(!t.href || !s || "map" !== i.nodeName.toLowerCase()) &&
          0 < (s = V("img[usemap='#" + s + "']")).length &&
          s.is(":visible"))
      : (/^(input|select|textarea|button|object)$/.test(a)
          ? (n = !t.disabled) &&
            (o = V(t).closest("fieldset")[0]) &&
            (n = !o.disabled)
          : (n = ("a" === a && t.href) || e),
        n &&
          V(t).is(":visible") &&
          (function (t) {
            var e = t.css("visibility");
            for (; "inherit" === e; )
              (t = t.parent()), (e = t.css("visibility"));
            return "visible" === e;
          })(V(t)));
  }),
    V.extend(V.expr.pseudos, {
      focusable: function (t) {
        return V.ui.focusable(t, null != V.attr(t, "tabindex"));
      },
    });
  var Q, J;
  V.ui.focusable,
    (V.fn._form = function () {
      return "string" == typeof this[0].form
        ? this.closest("form")
        : V(this[0].form);
    }),
    (V.ui.formResetMixin = {
      _formResetHandler: function () {
        var e = V(this);
        setTimeout(function () {
          var t = e.data("ui-form-reset-instances");
          V.each(t, function () {
            this.refresh();
          });
        });
      },
      _bindFormResetHandler: function () {
        var t;
        (this.form = this.element._form()),
          this.form.length &&
            ((t = this.form.data("ui-form-reset-instances") || []).length ||
              this.form.on("reset.ui-form-reset", this._formResetHandler),
            t.push(this),
            this.form.data("ui-form-reset-instances", t));
      },
      _unbindFormResetHandler: function () {
        var t;
        this.form.length &&
          ((t = this.form.data("ui-form-reset-instances")).splice(
            V.inArray(this, t),
            1
          ),
          t.length
            ? this.form.data("ui-form-reset-instances", t)
            : this.form
                .removeData("ui-form-reset-instances")
                .off("reset.ui-form-reset"));
      },
    });
  V.expr.pseudos || (V.expr.pseudos = V.expr[":"]),
    V.uniqueSort || (V.uniqueSort = V.unique),
    V.escapeSelector ||
      ((Q = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g),
      (J = function (t, e) {
        return e
          ? "\0" === t
            ? "�"
            : t.slice(0, -1) +
              "\\" +
              t.charCodeAt(t.length - 1).toString(16) +
              " "
          : "\\" + t;
      }),
      (V.escapeSelector = function (t) {
        return (t + "").replace(Q, J);
      })),
    (V.fn.even && V.fn.odd) ||
      V.fn.extend({
        even: function () {
          return this.filter(function (t) {
            return t % 2 == 0;
          });
        },
        odd: function () {
          return this.filter(function (t) {
            return t % 2 == 1;
          });
        },
      });
  var Z;
  (V.ui.keyCode = {
    BACKSPACE: 8,
    COMMA: 188,
    DELETE: 46,
    DOWN: 40,
    END: 35,
    ENTER: 13,
    ESCAPE: 27,
    HOME: 36,
    LEFT: 37,
    PAGE_DOWN: 34,
    PAGE_UP: 33,
    PERIOD: 190,
    RIGHT: 39,
    SPACE: 32,
    TAB: 9,
    UP: 38,
  }),
    (V.fn.labels = function () {
      var t, e, i;
      return this.length
        ? this[0].labels && this[0].labels.length
          ? this.pushStack(this[0].labels)
          : ((e = this.eq(0).parents("label")),
            (t = this.attr("id")) &&
              ((i = (i = this.eq(0).parents().last()).add(
                (i.length ? i : this).siblings()
              )),
              (t = "label[for='" + V.escapeSelector(t) + "']"),
              (e = e.add(i.find(t).addBack(t)))),
            this.pushStack(e))
        : this.pushStack([]);
    }),
    (V.fn.scrollParent = function (t) {
      var e = this.css("position"),
        i = "absolute" === e,
        s = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
        t = this.parents()
          .filter(function () {
            var t = V(this);
            return (
              (!i || "static" !== t.css("position")) &&
              s.test(
                t.css("overflow") + t.css("overflow-y") + t.css("overflow-x")
              )
            );
          })
          .eq(0);
      return "fixed" !== e && t.length
        ? t
        : V(this[0].ownerDocument || document);
    }),
    V.extend(V.expr.pseudos, {
      tabbable: function (t) {
        var e = V.attr(t, "tabindex"),
          i = null != e;
        return (!i || 0 <= e) && V.ui.focusable(t, i);
      },
    }),
    V.fn.extend({
      uniqueId:
        ((Z = 0),
        function () {
          return this.each(function () {
            this.id || (this.id = "ui-id-" + ++Z);
          });
        }),
      removeUniqueId: function () {
        return this.each(function () {
          /^ui-id-\d+$/.test(this.id) && V(this).removeAttr("id");
        });
      },
    }),
    V.widget("ui.accordion", {
      version: "1.13.2",
      options: {
        active: 0,
        animate: {},
        classes: {
          "ui-accordion-header": "ui-corner-top",
          "ui-accordion-header-collapsed": "ui-corner-all",
          "ui-accordion-content": "ui-corner-bottom",
        },
        collapsible: !1,
        event: "click",
        header: function (t) {
          return t.find("> li > :first-child").add(t.find("> :not(li)").even());
        },
        heightStyle: "auto",
        icons: {
          activeHeader: "ui-icon-triangle-1-s",
          header: "ui-icon-triangle-1-e",
        },
        activate: null,
        beforeActivate: null,
      },
      hideProps: {
        borderTopWidth: "hide",
        borderBottomWidth: "hide",
        paddingTop: "hide",
        paddingBottom: "hide",
        height: "hide",
      },
      showProps: {
        borderTopWidth: "show",
        borderBottomWidth: "show",
        paddingTop: "show",
        paddingBottom: "show",
        height: "show",
      },
      _create: function () {
        var t = this.options;
        (this.prevShow = this.prevHide = V()),
          this._addClass("ui-accordion", "ui-widget ui-helper-reset"),
          this.element.attr("role", "tablist"),
          t.collapsible ||
            (!1 !== t.active && null != t.active) ||
            (t.active = 0),
          this._processPanels(),
          t.active < 0 && (t.active += this.headers.length),
          this._refresh();
      },
      _getCreateEventData: function () {
        return {
          header: this.active,
          panel: this.active.length ? this.active.next() : V(),
        };
      },
      _createIcons: function () {
        var t,
          e = this.options.icons;
        e &&
          ((t = V("<span>")),
          this._addClass(t, "ui-accordion-header-icon", "ui-icon " + e.header),
          t.prependTo(this.headers),
          (t = this.active.children(".ui-accordion-header-icon")),
          this._removeClass(t, e.header)
            ._addClass(t, null, e.activeHeader)
            ._addClass(this.headers, "ui-accordion-icons"));
      },
      _destroyIcons: function () {
        this._removeClass(this.headers, "ui-accordion-icons"),
          this.headers.children(".ui-accordion-header-icon").remove();
      },
      _destroy: function () {
        var t;
        this.element.removeAttr("role"),
          this.headers
            .removeAttr(
              "role aria-expanded aria-selected aria-controls tabIndex"
            )
            .removeUniqueId(),
          this._destroyIcons(),
          (t = this.headers
            .next()
            .css("display", "")
            .removeAttr("role aria-hidden aria-labelledby")
            .removeUniqueId()),
          "content" !== this.options.heightStyle && t.css("height", "");
      },
      _setOption: function (t, e) {
        "active" !== t
          ? ("event" === t &&
              (this.options.event &&
                this._off(this.headers, this.options.event),
              this._setupEvents(e)),
            this._super(t, e),
            "collapsible" !== t ||
              e ||
              !1 !== this.options.active ||
              this._activate(0),
            "icons" === t && (this._destroyIcons(), e && this._createIcons()))
          : this._activate(e);
      },
      _setOptionDisabled: function (t) {
        this._super(t),
          this.element.attr("aria-disabled", t),
          this._toggleClass(null, "ui-state-disabled", !!t),
          this._toggleClass(
            this.headers.add(this.headers.next()),
            null,
            "ui-state-disabled",
            !!t
          );
      },
      _keydown: function (t) {
        if (!t.altKey && !t.ctrlKey) {
          var e = V.ui.keyCode,
            i = this.headers.length,
            s = this.headers.index(t.target),
            n = !1;
          switch (t.keyCode) {
            case e.RIGHT:
            case e.DOWN:
              n = this.headers[(s + 1) % i];
              break;
            case e.LEFT:
            case e.UP:
              n = this.headers[(s - 1 + i) % i];
              break;
            case e.SPACE:
            case e.ENTER:
              this._eventHandler(t);
              break;
            case e.HOME:
              n = this.headers[0];
              break;
            case e.END:
              n = this.headers[i - 1];
          }
          n &&
            (V(t.target).attr("tabIndex", -1),
            V(n).attr("tabIndex", 0),
            V(n).trigger("focus"),
            t.preventDefault());
        }
      },
      _panelKeyDown: function (t) {
        t.keyCode === V.ui.keyCode.UP &&
          t.ctrlKey &&
          V(t.currentTarget).prev().trigger("focus");
      },
      refresh: function () {
        var t = this.options;
        this._processPanels(),
          (!1 === t.active && !0 === t.collapsible) || !this.headers.length
            ? ((t.active = !1), (this.active = V()))
            : !1 === t.active
            ? this._activate(0)
            : this.active.length && !V.contains(this.element[0], this.active[0])
            ? this.headers.length ===
              this.headers.find(".ui-state-disabled").length
              ? ((t.active = !1), (this.active = V()))
              : this._activate(Math.max(0, t.active - 1))
            : (t.active = this.headers.index(this.active)),
          this._destroyIcons(),
          this._refresh();
      },
      _processPanels: function () {
        var t = this.headers,
          e = this.panels;
        "function" == typeof this.options.header
          ? (this.headers = this.options.header(this.element))
          : (this.headers = this.element.find(this.options.header)),
          this._addClass(
            this.headers,
            "ui-accordion-header ui-accordion-header-collapsed",
            "ui-state-default"
          ),
          (this.panels = this.headers
            .next()
            .filter(":not(.ui-accordion-content-active)")
            .hide()),
          this._addClass(
            this.panels,
            "ui-accordion-content",
            "ui-helper-reset ui-widget-content"
          ),
          e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)));
      },
      _refresh: function () {
        var i,
          t = this.options,
          e = t.heightStyle,
          s = this.element.parent();
        (this.active = this._findActive(t.active)),
          this._addClass(
            this.active,
            "ui-accordion-header-active",
            "ui-state-active"
          )._removeClass(this.active, "ui-accordion-header-collapsed"),
          this._addClass(this.active.next(), "ui-accordion-content-active"),
          this.active.next().show(),
          this.headers
            .attr("role", "tab")
            .each(function () {
              var t = V(this),
                e = t.uniqueId().attr("id"),
                i = t.next(),
                s = i.uniqueId().attr("id");
              t.attr("aria-controls", s), i.attr("aria-labelledby", e);
            })
            .next()
            .attr("role", "tabpanel"),
          this.headers
            .not(this.active)
            .attr({
              "aria-selected": "false",
              "aria-expanded": "false",
              tabIndex: -1,
            })
            .next()
            .attr({ "aria-hidden": "true" })
            .hide(),
          this.active.length
            ? this.active
                .attr({
                  "aria-selected": "true",
                  "aria-expanded": "true",
                  tabIndex: 0,
                })
                .next()
                .attr({ "aria-hidden": "false" })
            : this.headers.eq(0).attr("tabIndex", 0),
          this._createIcons(),
          this._setupEvents(t.event),
          "fill" === e
            ? ((i = s.height()),
              this.element.siblings(":visible").each(function () {
                var t = V(this),
                  e = t.css("position");
                "absolute" !== e && "fixed" !== e && (i -= t.outerHeight(!0));
              }),
              this.headers.each(function () {
                i -= V(this).outerHeight(!0);
              }),
              this.headers
                .next()
                .each(function () {
                  V(this).height(
                    Math.max(0, i - V(this).innerHeight() + V(this).height())
                  );
                })
                .css("overflow", "auto"))
            : "auto" === e &&
              ((i = 0),
              this.headers
                .next()
                .each(function () {
                  var t = V(this).is(":visible");
                  t || V(this).show(),
                    (i = Math.max(i, V(this).css("height", "").height())),
                    t || V(this).hide();
                })
                .height(i));
      },
      _activate: function (t) {
        t = this._findActive(t)[0];
        t !== this.active[0] &&
          ((t = t || this.active[0]),
          this._eventHandler({
            target: t,
            currentTarget: t,
            preventDefault: V.noop,
          }));
      },
      _findActive: function (t) {
        return "number" == typeof t ? this.headers.eq(t) : V();
      },
      _setupEvents: function (t) {
        var i = { keydown: "_keydown" };
        t &&
          V.each(t.split(" "), function (t, e) {
            i[e] = "_eventHandler";
          }),
          this._off(this.headers.add(this.headers.next())),
          this._on(this.headers, i),
          this._on(this.headers.next(), { keydown: "_panelKeyDown" }),
          this._hoverable(this.headers),
          this._focusable(this.headers);
      },
      _eventHandler: function (t) {
        var e = this.options,
          i = this.active,
          s = V(t.currentTarget),
          n = s[0] === i[0],
          o = n && e.collapsible,
          a = o ? V() : s.next(),
          r = i.next(),
          a = {
            oldHeader: i,
            oldPanel: r,
            newHeader: o ? V() : s,
            newPanel: a,
          };
        t.preventDefault(),
          (n && !e.collapsible) ||
            !1 === this._trigger("beforeActivate", t, a) ||
            ((e.active = !o && this.headers.index(s)),
            (this.active = n ? V() : s),
            this._toggle(a),
            this._removeClass(
              i,
              "ui-accordion-header-active",
              "ui-state-active"
            ),
            e.icons &&
              ((i = i.children(".ui-accordion-header-icon")),
              this._removeClass(i, null, e.icons.activeHeader)._addClass(
                i,
                null,
                e.icons.header
              )),
            n ||
              (this._removeClass(s, "ui-accordion-header-collapsed")._addClass(
                s,
                "ui-accordion-header-active",
                "ui-state-active"
              ),
              e.icons &&
                ((n = s.children(".ui-accordion-header-icon")),
                this._removeClass(n, null, e.icons.header)._addClass(
                  n,
                  null,
                  e.icons.activeHeader
                )),
              this._addClass(s.next(), "ui-accordion-content-active")));
      },
      _toggle: function (t) {
        var e = t.newPanel,
          i = this.prevShow.length ? this.prevShow : t.oldPanel;
        this.prevShow.add(this.prevHide).stop(!0, !0),
          (this.prevShow = e),
          (this.prevHide = i),
          this.options.animate
            ? this._animate(e, i, t)
            : (i.hide(), e.show(), this._toggleComplete(t)),
          i.attr({ "aria-hidden": "true" }),
          i.prev().attr({ "aria-selected": "false", "aria-expanded": "false" }),
          e.length && i.length
            ? i.prev().attr({ tabIndex: -1, "aria-expanded": "false" })
            : e.length &&
              this.headers
                .filter(function () {
                  return 0 === parseInt(V(this).attr("tabIndex"), 10);
                })
                .attr("tabIndex", -1),
          e
            .attr("aria-hidden", "false")
            .prev()
            .attr({
              "aria-selected": "true",
              "aria-expanded": "true",
              tabIndex: 0,
            });
      },
      _animate: function (t, i, e) {
        var s,
          n,
          o,
          a = this,
          r = 0,
          l = t.css("box-sizing"),
          h = t.length && (!i.length || t.index() < i.index()),
          c = this.options.animate || {},
          u = (h && c.down) || c,
          h = function () {
            a._toggleComplete(e);
          };
        return (
          (n = (n = "string" == typeof u ? u : n) || u.easing || c.easing),
          (o = (o = "number" == typeof u ? u : o) || u.duration || c.duration),
          i.length
            ? t.length
              ? ((s = t.show().outerHeight()),
                i.animate(this.hideProps, {
                  duration: o,
                  easing: n,
                  step: function (t, e) {
                    e.now = Math.round(t);
                  },
                }),
                void t.hide().animate(this.showProps, {
                  duration: o,
                  easing: n,
                  complete: h,
                  step: function (t, e) {
                    (e.now = Math.round(t)),
                      "height" !== e.prop
                        ? "content-box" === l && (r += e.now)
                        : "content" !== a.options.heightStyle &&
                          ((e.now = Math.round(s - i.outerHeight() - r)),
                          (r = 0));
                  },
                }))
              : i.animate(this.hideProps, o, n, h)
            : t.animate(this.showProps, o, n, h)
        );
      },
      _toggleComplete: function (t) {
        var e = t.oldPanel,
          i = e.prev();
        this._removeClass(e, "ui-accordion-content-active"),
          this._removeClass(i, "ui-accordion-header-active")._addClass(
            i,
            "ui-accordion-header-collapsed"
          ),
          e.length && (e.parent()[0].className = e.parent()[0].className),
          this._trigger("activate", null, t);
      },
    }),
    (V.ui.safeActiveElement = function (e) {
      var i;
      try {
        i = e.activeElement;
      } catch (t) {
        i = e.body;
      }
      return (i = !(i = i || e.body).nodeName ? e.body : i);
    }),
    V.widget("ui.menu", {
      version: "1.13.2",
      defaultElement: "<ul>",
      delay: 300,
      options: {
        icons: { submenu: "ui-icon-caret-1-e" },
        items: "> *",
        menus: "ul",
        position: { my: "left top", at: "right top" },
        role: "menu",
        blur: null,
        focus: null,
        select: null,
      },
      _create: function () {
        (this.activeMenu = this.element),
          (this.mouseHandled = !1),
          (this.lastMousePosition = { x: null, y: null }),
          this.element
            .uniqueId()
            .attr({ role: this.options.role, tabIndex: 0 }),
          this._addClass("ui-menu", "ui-widget ui-widget-content"),
          this._on({
            "mousedown .ui-menu-item": function (t) {
              t.preventDefault(), this._activateItem(t);
            },
            "click .ui-menu-item": function (t) {
              var e = V(t.target),
                i = V(V.ui.safeActiveElement(this.document[0]));
              !this.mouseHandled &&
                e.not(".ui-state-disabled").length &&
                (this.select(t),
                t.isPropagationStopped() || (this.mouseHandled = !0),
                e.has(".ui-menu").length
                  ? this.expand(t)
                  : !this.element.is(":focus") &&
                    i.closest(".ui-menu").length &&
                    (this.element.trigger("focus", [!0]),
                    this.active &&
                      1 === this.active.parents(".ui-menu").length &&
                      clearTimeout(this.timer)));
            },
            "mouseenter .ui-menu-item": "_activateItem",
            "mousemove .ui-menu-item": "_activateItem",
            mouseleave: "collapseAll",
            "mouseleave .ui-menu": "collapseAll",
            focus: function (t, e) {
              var i = this.active || this._menuItems().first();
              e || this.focus(t, i);
            },
            blur: function (t) {
              this._delay(function () {
                V.contains(
                  this.element[0],
                  V.ui.safeActiveElement(this.document[0])
                ) || this.collapseAll(t);
              });
            },
            keydown: "_keydown",
          }),
          this.refresh(),
          this._on(this.document, {
            click: function (t) {
              this._closeOnDocumentClick(t) && this.collapseAll(t, !0),
                (this.mouseHandled = !1);
            },
          });
      },
      _activateItem: function (t) {
        var e, i;
        this.previousFilter ||
          (t.clientX === this.lastMousePosition.x &&
            t.clientY === this.lastMousePosition.y) ||
          ((this.lastMousePosition = { x: t.clientX, y: t.clientY }),
          (e = V(t.target).closest(".ui-menu-item")),
          (i = V(t.currentTarget)),
          e[0] === i[0] &&
            (i.is(".ui-state-active") ||
              (this._removeClass(
                i.siblings().children(".ui-state-active"),
                null,
                "ui-state-active"
              ),
              this.focus(t, i))));
      },
      _destroy: function () {
        var t = this.element
          .find(".ui-menu-item")
          .removeAttr("role aria-disabled")
          .children(".ui-menu-item-wrapper")
          .removeUniqueId()
          .removeAttr("tabIndex role aria-haspopup");
        this.element
          .removeAttr("aria-activedescendant")
          .find(".ui-menu")
          .addBack()
          .removeAttr(
            "role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex"
          )
          .removeUniqueId()
          .show(),
          t.children().each(function () {
            var t = V(this);
            t.data("ui-menu-submenu-caret") && t.remove();
          });
      },
      _keydown: function (t) {
        var e,
          i,
          s,
          n = !0;
        switch (t.keyCode) {
          case V.ui.keyCode.PAGE_UP:
            this.previousPage(t);
            break;
          case V.ui.keyCode.PAGE_DOWN:
            this.nextPage(t);
            break;
          case V.ui.keyCode.HOME:
            this._move("first", "first", t);
            break;
          case V.ui.keyCode.END:
            this._move("last", "last", t);
            break;
          case V.ui.keyCode.UP:
            this.previous(t);
            break;
          case V.ui.keyCode.DOWN:
            this.next(t);
            break;
          case V.ui.keyCode.LEFT:
            this.collapse(t);
            break;
          case V.ui.keyCode.RIGHT:
            this.active &&
              !this.active.is(".ui-state-disabled") &&
              this.expand(t);
            break;
          case V.ui.keyCode.ENTER:
          case V.ui.keyCode.SPACE:
            this._activate(t);
            break;
          case V.ui.keyCode.ESCAPE:
            this.collapse(t);
            break;
          default:
            (e = this.previousFilter || ""),
              (s = n = !1),
              (i =
                96 <= t.keyCode && t.keyCode <= 105
                  ? (t.keyCode - 96).toString()
                  : String.fromCharCode(t.keyCode)),
              clearTimeout(this.filterTimer),
              i === e ? (s = !0) : (i = e + i),
              (e = this._filterMenuItems(i)),
              (e =
                s && -1 !== e.index(this.active.next())
                  ? this.active.nextAll(".ui-menu-item")
                  : e).length ||
                ((i = String.fromCharCode(t.keyCode)),
                (e = this._filterMenuItems(i))),
              e.length
                ? (this.focus(t, e),
                  (this.previousFilter = i),
                  (this.filterTimer = this._delay(function () {
                    delete this.previousFilter;
                  }, 1e3)))
                : delete this.previousFilter;
        }
        n && t.preventDefault();
      },
      _activate: function (t) {
        this.active &&
          !this.active.is(".ui-state-disabled") &&
          (this.active.children("[aria-haspopup='true']").length
            ? this.expand(t)
            : this.select(t));
      },
      refresh: function () {
        var t,
          e,
          s = this,
          n = this.options.icons.submenu,
          i = this.element.find(this.options.menus);
        this._toggleClass(
          "ui-menu-icons",
          null,
          !!this.element.find(".ui-icon").length
        ),
          (e = i
            .filter(":not(.ui-menu)")
            .hide()
            .attr({
              role: this.options.role,
              "aria-hidden": "true",
              "aria-expanded": "false",
            })
            .each(function () {
              var t = V(this),
                e = t.prev(),
                i = V("<span>").data("ui-menu-submenu-caret", !0);
              s._addClass(i, "ui-menu-icon", "ui-icon " + n),
                e.attr("aria-haspopup", "true").prepend(i),
                t.attr("aria-labelledby", e.attr("id"));
            })),
          this._addClass(e, "ui-menu", "ui-widget ui-widget-content ui-front"),
          (t = i.add(this.element).find(this.options.items))
            .not(".ui-menu-item")
            .each(function () {
              var t = V(this);
              s._isDivider(t) &&
                s._addClass(t, "ui-menu-divider", "ui-widget-content");
            }),
          (i = (e = t.not(".ui-menu-item, .ui-menu-divider"))
            .children()
            .not(".ui-menu")
            .uniqueId()
            .attr({ tabIndex: -1, role: this._itemRole() })),
          this._addClass(e, "ui-menu-item")._addClass(
            i,
            "ui-menu-item-wrapper"
          ),
          t.filter(".ui-state-disabled").attr("aria-disabled", "true"),
          this.active &&
            !V.contains(this.element[0], this.active[0]) &&
            this.blur();
      },
      _itemRole: function () {
        return { menu: "menuitem", listbox: "option" }[this.options.role];
      },
      _setOption: function (t, e) {
        var i;
        "icons" === t &&
          ((i = this.element.find(".ui-menu-icon")),
          this._removeClass(i, null, this.options.icons.submenu)._addClass(
            i,
            null,
            e.submenu
          )),
          this._super(t, e);
      },
      _setOptionDisabled: function (t) {
        this._super(t),
          this.element.attr("aria-disabled", String(t)),
          this._toggleClass(null, "ui-state-disabled", !!t);
      },
      focus: function (t, e) {
        var i;
        this.blur(t, t && "focus" === t.type),
          this._scrollIntoView(e),
          (this.active = e.first()),
          (i = this.active.children(".ui-menu-item-wrapper")),
          this._addClass(i, null, "ui-state-active"),
          this.options.role &&
            this.element.attr("aria-activedescendant", i.attr("id")),
          (i = this.active
            .parent()
            .closest(".ui-menu-item")
            .children(".ui-menu-item-wrapper")),
          this._addClass(i, null, "ui-state-active"),
          t && "keydown" === t.type
            ? this._close()
            : (this.timer = this._delay(function () {
                this._close();
              }, this.delay)),
          (i = e.children(".ui-menu")).length &&
            t &&
            /^mouse/.test(t.type) &&
            this._startOpening(i),
          (this.activeMenu = e.parent()),
          this._trigger("focus", t, { item: e });
      },
      _scrollIntoView: function (t) {
        var e, i, s;
        this._hasScroll() &&
          ((i = parseFloat(V.css(this.activeMenu[0], "borderTopWidth")) || 0),
          (s = parseFloat(V.css(this.activeMenu[0], "paddingTop")) || 0),
          (e = t.offset().top - this.activeMenu.offset().top - i - s),
          (i = this.activeMenu.scrollTop()),
          (s = this.activeMenu.height()),
          (t = t.outerHeight()),
          e < 0
            ? this.activeMenu.scrollTop(i + e)
            : s < e + t && this.activeMenu.scrollTop(i + e - s + t));
      },
      blur: function (t, e) {
        e || clearTimeout(this.timer),
          this.active &&
            (this._removeClass(
              this.active.children(".ui-menu-item-wrapper"),
              null,
              "ui-state-active"
            ),
            this._trigger("blur", t, { item: this.active }),
            (this.active = null));
      },
      _startOpening: function (t) {
        clearTimeout(this.timer),
          "true" === t.attr("aria-hidden") &&
            (this.timer = this._delay(function () {
              this._close(), this._open(t);
            }, this.delay));
      },
      _open: function (t) {
        var e = V.extend({ of: this.active }, this.options.position);
        clearTimeout(this.timer),
          this.element
            .find(".ui-menu")
            .not(t.parents(".ui-menu"))
            .hide()
            .attr("aria-hidden", "true"),
          t
            .show()
            .removeAttr("aria-hidden")
            .attr("aria-expanded", "true")
            .position(e);
      },
      collapseAll: function (e, i) {
        clearTimeout(this.timer),
          (this.timer = this._delay(
            function () {
              var t = i
                ? this.element
                : V(e && e.target).closest(this.element.find(".ui-menu"));
              t.length || (t = this.element),
                this._close(t),
                this.blur(e),
                this._removeClass(
                  t.find(".ui-state-active"),
                  null,
                  "ui-state-active"
                ),
                (this.activeMenu = t);
            },
            i ? 0 : this.delay
          ));
      },
      _close: function (t) {
        (t = t || (this.active ? this.active.parent() : this.element))
          .find(".ui-menu")
          .hide()
          .attr("aria-hidden", "true")
          .attr("aria-expanded", "false");
      },
      _closeOnDocumentClick: function (t) {
        return !V(t.target).closest(".ui-menu").length;
      },
      _isDivider: function (t) {
        return !/[^\-\u2014\u2013\s]/.test(t.text());
      },
      collapse: function (t) {
        var e =
          this.active &&
          this.active.parent().closest(".ui-menu-item", this.element);
        e && e.length && (this._close(), this.focus(t, e));
      },
      expand: function (t) {
        var e =
          this.active &&
          this._menuItems(this.active.children(".ui-menu")).first();
        e &&
          e.length &&
          (this._open(e.parent()),
          this._delay(function () {
            this.focus(t, e);
          }));
      },
      next: function (t) {
        this._move("next", "first", t);
      },
      previous: function (t) {
        this._move("prev", "last", t);
      },
      isFirstItem: function () {
        return this.active && !this.active.prevAll(".ui-menu-item").length;
      },
      isLastItem: function () {
        return this.active && !this.active.nextAll(".ui-menu-item").length;
      },
      _menuItems: function (t) {
        return (t || this.element)
          .find(this.options.items)
          .filter(".ui-menu-item");
      },
      _move: function (t, e, i) {
        var s;
        ((s = this.active
          ? "first" === t || "last" === t
            ? this.active["first" === t ? "prevAll" : "nextAll"](
                ".ui-menu-item"
              ).last()
            : this.active[t + "All"](".ui-menu-item").first()
          : s) &&
          s.length &&
          this.active) ||
          (s = this._menuItems(this.activeMenu)[e]()),
          this.focus(i, s);
      },
      nextPage: function (t) {
        var e, i, s;
        this.active
          ? this.isLastItem() ||
            (this._hasScroll()
              ? ((i = this.active.offset().top),
                (s = this.element.innerHeight()),
                0 === V.fn.jquery.indexOf("3.2.") &&
                  (s +=
                    this.element[0].offsetHeight - this.element.outerHeight()),
                this.active.nextAll(".ui-menu-item").each(function () {
                  return (e = V(this)).offset().top - i - s < 0;
                }),
                this.focus(t, e))
              : this.focus(
                  t,
                  this._menuItems(this.activeMenu)[
                    this.active ? "last" : "first"
                  ]()
                ))
          : this.next(t);
      },
      previousPage: function (t) {
        var e, i, s;
        this.active
          ? this.isFirstItem() ||
            (this._hasScroll()
              ? ((i = this.active.offset().top),
                (s = this.element.innerHeight()),
                0 === V.fn.jquery.indexOf("3.2.") &&
                  (s +=
                    this.element[0].offsetHeight - this.element.outerHeight()),
                this.active.prevAll(".ui-menu-item").each(function () {
                  return 0 < (e = V(this)).offset().top - i + s;
                }),
                this.focus(t, e))
              : this.focus(t, this._menuItems(this.activeMenu).first()))
          : this.next(t);
      },
      _hasScroll: function () {
        return this.element.outerHeight() < this.element.prop("scrollHeight");
      },
      select: function (t) {
        this.active = this.active || V(t.target).closest(".ui-menu-item");
        var e = { item: this.active };
        this.active.has(".ui-menu").length || this.collapseAll(t, !0),
          this._trigger("select", t, e);
      },
      _filterMenuItems: function (t) {
        var t = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
          e = new RegExp("^" + t, "i");
        return this.activeMenu
          .find(this.options.items)
          .filter(".ui-menu-item")
          .filter(function () {
            return e.test(
              String.prototype.trim.call(
                V(this).children(".ui-menu-item-wrapper").text()
              )
            );
          });
      },
    });
  V.widget("ui.autocomplete", {
    version: "1.13.2",
    defaultElement: "<input>",
    options: {
      appendTo: null,
      autoFocus: !1,
      delay: 300,
      minLength: 1,
      position: { my: "left top", at: "left bottom", collision: "none" },
      source: null,
      change: null,
      close: null,
      focus: null,
      open: null,
      response: null,
      search: null,
      select: null,
    },
    requestIndex: 0,
    pending: 0,
    liveRegionTimer: null,
    _create: function () {
      var i,
        s,
        n,
        t = this.element[0].nodeName.toLowerCase(),
        e = "textarea" === t,
        t = "input" === t;
      (this.isMultiLine = e || (!t && this._isContentEditable(this.element))),
        (this.valueMethod = this.element[e || t ? "val" : "text"]),
        (this.isNewMenu = !0),
        this._addClass("ui-autocomplete-input"),
        this.element.attr("autocomplete", "off"),
        this._on(this.element, {
          keydown: function (t) {
            if (this.element.prop("readOnly")) s = n = i = !0;
            else {
              s = n = i = !1;
              var e = V.ui.keyCode;
              switch (t.keyCode) {
                case e.PAGE_UP:
                  (i = !0), this._move("previousPage", t);
                  break;
                case e.PAGE_DOWN:
                  (i = !0), this._move("nextPage", t);
                  break;
                case e.UP:
                  (i = !0), this._keyEvent("previous", t);
                  break;
                case e.DOWN:
                  (i = !0), this._keyEvent("next", t);
                  break;
                case e.ENTER:
                  this.menu.active &&
                    ((i = !0), t.preventDefault(), this.menu.select(t));
                  break;
                case e.TAB:
                  this.menu.active && this.menu.select(t);
                  break;
                case e.ESCAPE:
                  this.menu.element.is(":visible") &&
                    (this.isMultiLine || this._value(this.term),
                    this.close(t),
                    t.preventDefault());
                  break;
                default:
                  (s = !0), this._searchTimeout(t);
              }
            }
          },
          keypress: function (t) {
            if (i)
              return (
                (i = !1),
                void (
                  (this.isMultiLine && !this.menu.element.is(":visible")) ||
                  t.preventDefault()
                )
              );
            if (!s) {
              var e = V.ui.keyCode;
              switch (t.keyCode) {
                case e.PAGE_UP:
                  this._move("previousPage", t);
                  break;
                case e.PAGE_DOWN:
                  this._move("nextPage", t);
                  break;
                case e.UP:
                  this._keyEvent("previous", t);
                  break;
                case e.DOWN:
                  this._keyEvent("next", t);
              }
            }
          },
          input: function (t) {
            if (n) return (n = !1), void t.preventDefault();
            this._searchTimeout(t);
          },
          focus: function () {
            (this.selectedItem = null), (this.previous = this._value());
          },
          blur: function (t) {
            clearTimeout(this.searching), this.close(t), this._change(t);
          },
        }),
        this._initSource(),
        (this.menu = V("<ul>")
          .appendTo(this._appendTo())
          .menu({ role: null })
          .hide()
          .attr({ unselectable: "on" })
          .menu("instance")),
        this._addClass(this.menu.element, "ui-autocomplete", "ui-front"),
        this._on(this.menu.element, {
          mousedown: function (t) {
            t.preventDefault();
          },
          menufocus: function (t, e) {
            var i, s;
            if (
              this.isNewMenu &&
              ((this.isNewMenu = !1),
              t.originalEvent && /^mouse/.test(t.originalEvent.type))
            )
              return (
                this.menu.blur(),
                void this.document.one("mousemove", function () {
                  V(t.target).trigger(t.originalEvent);
                })
              );
            (s = e.item.data("ui-autocomplete-item")),
              !1 !== this._trigger("focus", t, { item: s }) &&
                t.originalEvent &&
                /^key/.test(t.originalEvent.type) &&
                this._value(s.value),
              (i = e.item.attr("aria-label") || s.value) &&
                String.prototype.trim.call(i).length &&
                (clearTimeout(this.liveRegionTimer),
                (this.liveRegionTimer = this._delay(function () {
                  this.liveRegion.html(V("<div>").text(i));
                }, 100)));
          },
          menuselect: function (t, e) {
            var i = e.item.data("ui-autocomplete-item"),
              s = this.previous;
            this.element[0] !== V.ui.safeActiveElement(this.document[0]) &&
              (this.element.trigger("focus"),
              (this.previous = s),
              this._delay(function () {
                (this.previous = s), (this.selectedItem = i);
              })),
              !1 !== this._trigger("select", t, { item: i }) &&
                this._value(i.value),
              (this.term = this._value()),
              this.close(t),
              (this.selectedItem = i);
          },
        }),
        (this.liveRegion = V("<div>", {
          role: "status",
          "aria-live": "assertive",
          "aria-relevant": "additions",
        }).appendTo(this.document[0].body)),
        this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"),
        this._on(this.window, {
          beforeunload: function () {
            this.element.removeAttr("autocomplete");
          },
        });
    },
    _destroy: function () {
      clearTimeout(this.searching),
        this.element.removeAttr("autocomplete"),
        this.menu.element.remove(),
        this.liveRegion.remove();
    },
    _setOption: function (t, e) {
      this._super(t, e),
        "source" === t && this._initSource(),
        "appendTo" === t && this.menu.element.appendTo(this._appendTo()),
        "disabled" === t && e && this.xhr && this.xhr.abort();
    },
    _isEventTargetInWidget: function (t) {
      var e = this.menu.element[0];
      return (
        t.target === this.element[0] ||
        t.target === e ||
        V.contains(e, t.target)
      );
    },
    _closeOnClickOutside: function (t) {
      this._isEventTargetInWidget(t) || this.close();
    },
    _appendTo: function () {
      var t = this.options.appendTo;
      return (t = !(t =
        !(t =
          t && (t.jquery || t.nodeType ? V(t) : this.document.find(t).eq(0))) ||
        !t[0]
          ? this.element.closest(".ui-front, dialog")
          : t).length
        ? this.document[0].body
        : t);
    },
    _initSource: function () {
      var i,
        s,
        n = this;
      Array.isArray(this.options.source)
        ? ((i = this.options.source),
          (this.source = function (t, e) {
            e(V.ui.autocomplete.filter(i, t.term));
          }))
        : "string" == typeof this.options.source
        ? ((s = this.options.source),
          (this.source = function (t, e) {
            n.xhr && n.xhr.abort(),
              (n.xhr = V.ajax({
                url: s,
                data: t,
                dataType: "json",
                success: function (t) {
                  e(t);
                },
                error: function () {
                  e([]);
                },
              }));
          }))
        : (this.source = this.options.source);
    },
    _searchTimeout: function (s) {
      clearTimeout(this.searching),
        (this.searching = this._delay(function () {
          var t = this.term === this._value(),
            e = this.menu.element.is(":visible"),
            i = s.altKey || s.ctrlKey || s.metaKey || s.shiftKey;
          (t && (e || i)) || ((this.selectedItem = null), this.search(null, s));
        }, this.options.delay));
    },
    search: function (t, e) {
      return (
        (t = null != t ? t : this._value()),
        (this.term = this._value()),
        t.length < this.options.minLength
          ? this.close(e)
          : !1 !== this._trigger("search", e)
          ? this._search(t)
          : void 0
      );
    },
    _search: function (t) {
      this.pending++,
        this._addClass("ui-autocomplete-loading"),
        (this.cancelSearch = !1),
        this.source({ term: t }, this._response());
    },
    _response: function () {
      var e = ++this.requestIndex;
      return function (t) {
        e === this.requestIndex && this.__response(t),
          this.pending--,
          this.pending || this._removeClass("ui-autocomplete-loading");
      }.bind(this);
    },
    __response: function (t) {
      (t = t && this._normalize(t)),
        this._trigger("response", null, { content: t }),
        !this.options.disabled && t && t.length && !this.cancelSearch
          ? (this._suggest(t), this._trigger("open"))
          : this._close();
    },
    close: function (t) {
      (this.cancelSearch = !0), this._close(t);
    },
    _close: function (t) {
      this._off(this.document, "mousedown"),
        this.menu.element.is(":visible") &&
          (this.menu.element.hide(),
          this.menu.blur(),
          (this.isNewMenu = !0),
          this._trigger("close", t));
    },
    _change: function (t) {
      this.previous !== this._value() &&
        this._trigger("change", t, { item: this.selectedItem });
    },
    _normalize: function (t) {
      return t.length && t[0].label && t[0].value
        ? t
        : V.map(t, function (t) {
            return "string" == typeof t
              ? { label: t, value: t }
              : V.extend({}, t, {
                  label: t.label || t.value,
                  value: t.value || t.label,
                });
          });
    },
    _suggest: function (t) {
      var e = this.menu.element.empty();
      this._renderMenu(e, t),
        (this.isNewMenu = !0),
        this.menu.refresh(),
        e.show(),
        this._resizeMenu(),
        e.position(V.extend({ of: this.element }, this.options.position)),
        this.options.autoFocus && this.menu.next(),
        this._on(this.document, { mousedown: "_closeOnClickOutside" });
    },
    _resizeMenu: function () {
      var t = this.menu.element;
      t.outerWidth(
        Math.max(t.width("").outerWidth() + 1, this.element.outerWidth())
      );
    },
    _renderMenu: function (i, t) {
      var s = this;
      V.each(t, function (t, e) {
        s._renderItemData(i, e);
      });
    },
    _renderItemData: function (t, e) {
      return this._renderItem(t, e).data("ui-autocomplete-item", e);
    },
    _renderItem: function (t, e) {
      return V("<li>").append(V("<div>").text(e.label)).appendTo(t);
    },
    _move: function (t, e) {
      if (this.menu.element.is(":visible"))
        return (this.menu.isFirstItem() && /^previous/.test(t)) ||
          (this.menu.isLastItem() && /^next/.test(t))
          ? (this.isMultiLine || this._value(this.term), void this.menu.blur())
          : void this.menu[t](e);
      this.search(null, e);
    },
    widget: function () {
      return this.menu.element;
    },
    _value: function () {
      return this.valueMethod.apply(this.element, arguments);
    },
    _keyEvent: function (t, e) {
      (this.isMultiLine && !this.menu.element.is(":visible")) ||
        (this._move(t, e), e.preventDefault());
    },
    _isContentEditable: function (t) {
      if (!t.length) return !1;
      var e = t.prop("contentEditable");
      return "inherit" === e
        ? this._isContentEditable(t.parent())
        : "true" === e;
    },
  }),
    V.extend(V.ui.autocomplete, {
      escapeRegex: function (t) {
        return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
      },
      filter: function (t, e) {
        var i = new RegExp(V.ui.autocomplete.escapeRegex(e), "i");
        return V.grep(t, function (t) {
          return i.test(t.label || t.value || t);
        });
      },
    }),
    V.widget("ui.autocomplete", V.ui.autocomplete, {
      options: {
        messages: {
          noResults: "No search results.",
          results: function (t) {
            return (
              t +
              (1 < t ? " results are" : " result is") +
              " available, use up and down arrow keys to navigate."
            );
          },
        },
      },
      __response: function (t) {
        var e;
        this._superApply(arguments),
          this.options.disabled ||
            this.cancelSearch ||
            ((e =
              t && t.length
                ? this.options.messages.results(t.length)
                : this.options.messages.noResults),
            clearTimeout(this.liveRegionTimer),
            (this.liveRegionTimer = this._delay(function () {
              this.liveRegion.html(V("<div>").text(e));
            }, 100)));
      },
    });
  V.ui.autocomplete;
  var tt = /ui-corner-([a-z]){2,6}/g;
  V.widget("ui.controlgroup", {
    version: "1.13.2",
    defaultElement: "<div>",
    options: {
      direction: "horizontal",
      disabled: null,
      onlyVisible: !0,
      items: {
        button:
          "input[type=button], input[type=submit], input[type=reset], button, a",
        controlgroupLabel: ".ui-controlgroup-label",
        checkboxradio: "input[type='checkbox'], input[type='radio']",
        selectmenu: "select",
        spinner: ".ui-spinner-input",
      },
    },
    _create: function () {
      this._enhance();
    },
    _enhance: function () {
      this.element.attr("role", "toolbar"), this.refresh();
    },
    _destroy: function () {
      this._callChildMethod("destroy"),
        this.childWidgets.removeData("ui-controlgroup-data"),
        this.element.removeAttr("role"),
        this.options.items.controlgroupLabel &&
          this.element
            .find(this.options.items.controlgroupLabel)
            .find(".ui-controlgroup-label-contents")
            .contents()
            .unwrap();
    },
    _initWidgets: function () {
      var o = this,
        a = [];
      V.each(this.options.items, function (s, t) {
        var e,
          n = {};
        if (t)
          return "controlgroupLabel" === s
            ? ((e = o.element.find(t)).each(function () {
                var t = V(this);
                t.children(".ui-controlgroup-label-contents").length ||
                  t
                    .contents()
                    .wrapAll(
                      "<span class='ui-controlgroup-label-contents'></span>"
                    );
              }),
              o._addClass(
                e,
                null,
                "ui-widget ui-widget-content ui-state-default"
              ),
              void (a = a.concat(e.get())))
            : void (
                V.fn[s] &&
                ((n = o["_" + s + "Options"]
                  ? o["_" + s + "Options"]("middle")
                  : { classes: {} }),
                o.element.find(t).each(function () {
                  var t = V(this),
                    e = t[s]("instance"),
                    i = V.widget.extend({}, n);
                  ("button" === s && t.parent(".ui-spinner").length) ||
                    ((e = e || t[s]()[s]("instance")) &&
                      (i.classes = o._resolveClassesValues(i.classes, e)),
                    t[s](i),
                    (i = t[s]("widget")),
                    V.data(i[0], "ui-controlgroup-data", e || t[s]("instance")),
                    a.push(i[0]));
                }))
              );
      }),
        (this.childWidgets = V(V.uniqueSort(a))),
        this._addClass(this.childWidgets, "ui-controlgroup-item");
    },
    _callChildMethod: function (e) {
      this.childWidgets.each(function () {
        var t = V(this).data("ui-controlgroup-data");
        t && t[e] && t[e]();
      });
    },
    _updateCornerClass: function (t, e) {
      e = this._buildSimpleOptions(e, "label").classes.label;
      this._removeClass(
        t,
        null,
        "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"
      ),
        this._addClass(t, null, e);
    },
    _buildSimpleOptions: function (t, e) {
      var i = "vertical" === this.options.direction,
        s = { classes: {} };
      return (
        (s.classes[e] = {
          middle: "",
          first: "ui-corner-" + (i ? "top" : "left"),
          last: "ui-corner-" + (i ? "bottom" : "right"),
          only: "ui-corner-all",
        }[t]),
        s
      );
    },
    _spinnerOptions: function (t) {
      t = this._buildSimpleOptions(t, "ui-spinner");
      return (
        (t.classes["ui-spinner-up"] = ""),
        (t.classes["ui-spinner-down"] = ""),
        t
      );
    },
    _buttonOptions: function (t) {
      return this._buildSimpleOptions(t, "ui-button");
    },
    _checkboxradioOptions: function (t) {
      return this._buildSimpleOptions(t, "ui-checkboxradio-label");
    },
    _selectmenuOptions: function (t) {
      var e = "vertical" === this.options.direction;
      return {
        width: e && "auto",
        classes: {
          middle: {
            "ui-selectmenu-button-open": "",
            "ui-selectmenu-button-closed": "",
          },
          first: {
            "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"),
            "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left"),
          },
          last: {
            "ui-selectmenu-button-open": e ? "" : "ui-corner-tr",
            "ui-selectmenu-button-closed":
              "ui-corner-" + (e ? "bottom" : "right"),
          },
          only: {
            "ui-selectmenu-button-open": "ui-corner-top",
            "ui-selectmenu-button-closed": "ui-corner-all",
          },
        }[t],
      };
    },
    _resolveClassesValues: function (i, s) {
      var n = {};
      return (
        V.each(i, function (t) {
          var e = s.options.classes[t] || "",
            e = String.prototype.trim.call(e.replace(tt, ""));
          n[t] = (e + " " + i[t]).replace(/\s+/g, " ");
        }),
        n
      );
    },
    _setOption: function (t, e) {
      "direction" === t &&
        this._removeClass("ui-controlgroup-" + this.options.direction),
        this._super(t, e),
        "disabled" !== t
          ? this.refresh()
          : this._callChildMethod(e ? "disable" : "enable");
    },
    refresh: function () {
      var n,
        o = this;
      this._addClass(
        "ui-controlgroup ui-controlgroup-" + this.options.direction
      ),
        "horizontal" === this.options.direction &&
          this._addClass(null, "ui-helper-clearfix"),
        this._initWidgets(),
        (n = this.childWidgets),
        (n = this.options.onlyVisible ? n.filter(":visible") : n).length &&
          (V.each(["first", "last"], function (t, e) {
            var i,
              s = n[e]().data("ui-controlgroup-data");
            s && o["_" + s.widgetName + "Options"]
              ? (((i = o["_" + s.widgetName + "Options"](
                  1 === n.length ? "only" : e
                )).classes = o._resolveClassesValues(i.classes, s)),
                s.element[s.widgetName](i))
              : o._updateCornerClass(n[e](), e);
          }),
          this._callChildMethod("refresh"));
    },
  });
  V.widget("ui.checkboxradio", [
    V.ui.formResetMixin,
    {
      version: "1.13.2",
      options: {
        disabled: null,
        label: null,
        icon: !0,
        classes: {
          "ui-checkboxradio-label": "ui-corner-all",
          "ui-checkboxradio-icon": "ui-corner-all",
        },
      },
      _getCreateOptions: function () {
        var t,
          e = this._super() || {};
        return (
          this._readType(),
          (t = this.element.labels()),
          (this.label = V(t[t.length - 1])),
          this.label.length ||
            V.error("No label found for checkboxradio widget"),
          (this.originalLabel = ""),
          (t = this.label.contents().not(this.element[0])).length &&
            (this.originalLabel += t
              .clone()
              .wrapAll("<div></div>")
              .parent()
              .html()),
          this.originalLabel && (e.label = this.originalLabel),
          null != (t = this.element[0].disabled) && (e.disabled = t),
          e
        );
      },
      _create: function () {
        var t = this.element[0].checked;
        this._bindFormResetHandler(),
          null == this.options.disabled &&
            (this.options.disabled = this.element[0].disabled),
          this._setOption("disabled", this.options.disabled),
          this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"),
          this._addClass(
            this.label,
            "ui-checkboxradio-label",
            "ui-button ui-widget"
          ),
          "radio" === this.type &&
            this._addClass(this.label, "ui-checkboxradio-radio-label"),
          this.options.label && this.options.label !== this.originalLabel
            ? this._updateLabel()
            : this.originalLabel && (this.options.label = this.originalLabel),
          this._enhance(),
          t &&
            this._addClass(
              this.label,
              "ui-checkboxradio-checked",
              "ui-state-active"
            ),
          this._on({
            change: "_toggleClasses",
            focus: function () {
              this._addClass(
                this.label,
                null,
                "ui-state-focus ui-visual-focus"
              );
            },
            blur: function () {
              this._removeClass(
                this.label,
                null,
                "ui-state-focus ui-visual-focus"
              );
            },
          });
      },
      _readType: function () {
        var t = this.element[0].nodeName.toLowerCase();
        (this.type = this.element[0].type),
          ("input" === t && /radio|checkbox/.test(this.type)) ||
            V.error(
              "Can't create checkboxradio on element.nodeName=" +
                t +
                " and element.type=" +
                this.type
            );
      },
      _enhance: function () {
        this._updateIcon(this.element[0].checked);
      },
      widget: function () {
        return this.label;
      },
      _getRadioGroup: function () {
        var t = this.element[0].name,
          e = "input[name='" + V.escapeSelector(t) + "']";
        return t
          ? (this.form.length
              ? V(this.form[0].elements).filter(e)
              : V(e).filter(function () {
                  return 0 === V(this)._form().length;
                })
            ).not(this.element)
          : V([]);
      },
      _toggleClasses: function () {
        var t = this.element[0].checked;
        this._toggleClass(
          this.label,
          "ui-checkboxradio-checked",
          "ui-state-active",
          t
        ),
          this.options.icon &&
            "checkbox" === this.type &&
            this._toggleClass(
              this.icon,
              null,
              "ui-icon-check ui-state-checked",
              t
            )._toggleClass(this.icon, null, "ui-icon-blank", !t),
          "radio" === this.type &&
            this._getRadioGroup().each(function () {
              var t = V(this).checkboxradio("instance");
              t &&
                t._removeClass(
                  t.label,
                  "ui-checkboxradio-checked",
                  "ui-state-active"
                );
            });
      },
      _destroy: function () {
        this._unbindFormResetHandler(),
          this.icon && (this.icon.remove(), this.iconSpace.remove());
      },
      _setOption: function (t, e) {
        if ("label" !== t || e) {
          if ((this._super(t, e), "disabled" === t))
            return (
              this._toggleClass(this.label, null, "ui-state-disabled", e),
              void (this.element[0].disabled = e)
            );
          this.refresh();
        }
      },
      _updateIcon: function (t) {
        var e = "ui-icon ui-icon-background ";
        this.options.icon
          ? (this.icon ||
              ((this.icon = V("<span>")),
              (this.iconSpace = V("<span> </span>")),
              this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")),
            "checkbox" === this.type
              ? ((e += t ? "ui-icon-check ui-state-checked" : "ui-icon-blank"),
                this._removeClass(
                  this.icon,
                  null,
                  t ? "ui-icon-blank" : "ui-icon-check"
                ))
              : (e += "ui-icon-blank"),
            this._addClass(this.icon, "ui-checkboxradio-icon", e),
            t ||
              this._removeClass(
                this.icon,
                null,
                "ui-icon-check ui-state-checked"
              ),
            this.icon.prependTo(this.label).after(this.iconSpace))
          : void 0 !== this.icon &&
            (this.icon.remove(), this.iconSpace.remove(), delete this.icon);
      },
      _updateLabel: function () {
        var t = this.label.contents().not(this.element[0]);
        this.icon && (t = t.not(this.icon[0])),
          (t = this.iconSpace ? t.not(this.iconSpace[0]) : t).remove(),
          this.label.append(this.options.label);
      },
      refresh: function () {
        var t = this.element[0].checked,
          e = this.element[0].disabled;
        this._updateIcon(t),
          this._toggleClass(
            this.label,
            "ui-checkboxradio-checked",
            "ui-state-active",
            t
          ),
          null !== this.options.label && this._updateLabel(),
          e !== this.options.disabled && this._setOptions({ disabled: e });
      },
    },
  ]);
  var et;
  V.ui.checkboxradio;
  V.widget("ui.button", {
    version: "1.13.2",
    defaultElement: "<button>",
    options: {
      classes: { "ui-button": "ui-corner-all" },
      disabled: null,
      icon: null,
      iconPosition: "beginning",
      label: null,
      showLabel: !0,
    },
    _getCreateOptions: function () {
      var t,
        e = this._super() || {};
      return (
        (this.isInput = this.element.is("input")),
        null != (t = this.element[0].disabled) && (e.disabled = t),
        (this.originalLabel = this.isInput
          ? this.element.val()
          : this.element.html()),
        this.originalLabel && (e.label = this.originalLabel),
        e
      );
    },
    _create: function () {
      !this.option.showLabel & !this.options.icon &&
        (this.options.showLabel = !0),
        null == this.options.disabled &&
          (this.options.disabled = this.element[0].disabled || !1),
        (this.hasTitle = !!this.element.attr("title")),
        this.options.label &&
          this.options.label !== this.originalLabel &&
          (this.isInput
            ? this.element.val(this.options.label)
            : this.element.html(this.options.label)),
        this._addClass("ui-button", "ui-widget"),
        this._setOption("disabled", this.options.disabled),
        this._enhance(),
        this.element.is("a") &&
          this._on({
            keyup: function (t) {
              t.keyCode === V.ui.keyCode.SPACE &&
                (t.preventDefault(),
                this.element[0].click
                  ? this.element[0].click()
                  : this.element.trigger("click"));
            },
          });
    },
    _enhance: function () {
      this.element.is("button") || this.element.attr("role", "button"),
        this.options.icon &&
          (this._updateIcon("icon", this.options.icon), this._updateTooltip());
    },
    _updateTooltip: function () {
      (this.title = this.element.attr("title")),
        this.options.showLabel ||
          this.title ||
          this.element.attr("title", this.options.label);
    },
    _updateIcon: function (t, e) {
      var i = "iconPosition" !== t,
        s = i ? this.options.iconPosition : e,
        t = "top" === s || "bottom" === s;
      this.icon
        ? i && this._removeClass(this.icon, null, this.options.icon)
        : ((this.icon = V("<span>")),
          this._addClass(this.icon, "ui-button-icon", "ui-icon"),
          this.options.showLabel || this._addClass("ui-button-icon-only")),
        i && this._addClass(this.icon, null, e),
        this._attachIcon(s),
        t
          ? (this._addClass(this.icon, null, "ui-widget-icon-block"),
            this.iconSpace && this.iconSpace.remove())
          : (this.iconSpace ||
              ((this.iconSpace = V("<span> </span>")),
              this._addClass(this.iconSpace, "ui-button-icon-space")),
            this._removeClass(this.icon, null, "ui-wiget-icon-block"),
            this._attachIconSpace(s));
    },
    _destroy: function () {
      this.element.removeAttr("role"),
        this.icon && this.icon.remove(),
        this.iconSpace && this.iconSpace.remove(),
        this.hasTitle || this.element.removeAttr("title");
    },
    _attachIconSpace: function (t) {
      this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace);
    },
    _attachIcon: function (t) {
      this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon);
    },
    _setOptions: function (t) {
      var e = (void 0 === t.showLabel ? this.options : t).showLabel,
        i = (void 0 === t.icon ? this.options : t).icon;
      e || i || (t.showLabel = !0), this._super(t);
    },
    _setOption: function (t, e) {
      "icon" === t &&
        (e
          ? this._updateIcon(t, e)
          : this.icon &&
            (this.icon.remove(), this.iconSpace && this.iconSpace.remove())),
        "iconPosition" === t && this._updateIcon(t, e),
        "showLabel" === t &&
          (this._toggleClass("ui-button-icon-only", null, !e),
          this._updateTooltip()),
        "label" === t &&
          (this.isInput
            ? this.element.val(e)
            : (this.element.html(e),
              this.icon &&
                (this._attachIcon(this.options.iconPosition),
                this._attachIconSpace(this.options.iconPosition)))),
        this._super(t, e),
        "disabled" === t &&
          (this._toggleClass(null, "ui-state-disabled", e),
          (this.element[0].disabled = e) && this.element.trigger("blur"));
    },
    refresh: function () {
      var t = this.element.is("input, button")
        ? this.element[0].disabled
        : this.element.hasClass("ui-button-disabled");
      t !== this.options.disabled && this._setOptions({ disabled: t }),
        this._updateTooltip();
    },
  }),
    !1 !== V.uiBackCompat &&
      (V.widget("ui.button", V.ui.button, {
        options: { text: !0, icons: { primary: null, secondary: null } },
        _create: function () {
          this.options.showLabel &&
            !this.options.text &&
            (this.options.showLabel = this.options.text),
            !this.options.showLabel &&
              this.options.text &&
              (this.options.text = this.options.showLabel),
            this.options.icon ||
            (!this.options.icons.primary && !this.options.icons.secondary)
              ? this.options.icon &&
                (this.options.icons.primary = this.options.icon)
              : this.options.icons.primary
              ? (this.options.icon = this.options.icons.primary)
              : ((this.options.icon = this.options.icons.secondary),
                (this.options.iconPosition = "end")),
            this._super();
        },
        _setOption: function (t, e) {
          "text" !== t
            ? ("showLabel" === t && (this.options.text = e),
              "icon" === t && (this.options.icons.primary = e),
              "icons" === t &&
                (e.primary
                  ? (this._super("icon", e.primary),
                    this._super("iconPosition", "beginning"))
                  : e.secondary &&
                    (this._super("icon", e.secondary),
                    this._super("iconPosition", "end"))),
              this._superApply(arguments))
            : this._super("showLabel", e);
        },
      }),
      (V.fn.button =
        ((et = V.fn.button),
        function (i) {
          var t = "string" == typeof i,
            s = Array.prototype.slice.call(arguments, 1),
            n = this;
          return (
            t
              ? this.length || "instance" !== i
                ? this.each(function () {
                    var t = V(this).attr("type"),
                      e = V.data(
                        this,
                        "ui-" +
                          ("checkbox" !== t && "radio" !== t
                            ? "button"
                            : "checkboxradio")
                      );
                    return "instance" === i
                      ? ((n = e), !1)
                      : e
                      ? "function" != typeof e[i] || "_" === i.charAt(0)
                        ? V.error(
                            "no such method '" +
                              i +
                              "' for button widget instance"
                          )
                        : (t = e[i].apply(e, s)) !== e && void 0 !== t
                        ? ((n = t && t.jquery ? n.pushStack(t.get()) : t), !1)
                        : void 0
                      : V.error(
                          "cannot call methods on button prior to initialization; attempted to call method '" +
                            i +
                            "'"
                        );
                  })
                : (n = void 0)
              : (s.length && (i = V.widget.extend.apply(null, [i].concat(s))),
                this.each(function () {
                  var t = V(this).attr("type"),
                    e =
                      "checkbox" !== t && "radio" !== t
                        ? "button"
                        : "checkboxradio",
                    t = V.data(this, "ui-" + e);
                  t
                    ? (t.option(i || {}), t._init && t._init())
                    : "button" != e
                    ? V(this).checkboxradio(V.extend({ icon: !1 }, i))
                    : et.call(V(this), i);
                })),
            n
          );
        })),
      (V.fn.buttonset = function () {
        return (
          V.ui.controlgroup || V.error("Controlgroup widget missing"),
          "option" === arguments[0] && "items" === arguments[1] && arguments[2]
            ? this.controlgroup.apply(this, [
                arguments[0],
                "items.button",
                arguments[2],
              ])
            : "option" === arguments[0] && "items" === arguments[1]
            ? this.controlgroup.apply(this, [arguments[0], "items.button"])
            : ("object" == typeof arguments[0] &&
                arguments[0].items &&
                (arguments[0].items = { button: arguments[0].items }),
              this.controlgroup.apply(this, arguments))
        );
      }));
  var it;
  V.ui.button;
  function st() {
    (this._curInst = null),
      (this._keyEvent = !1),
      (this._disabledInputs = []),
      (this._datepickerShowing = !1),
      (this._inDialog = !1),
      (this._mainDivId = "ui-datepicker-div"),
      (this._inlineClass = "ui-datepicker-inline"),
      (this._appendClass = "ui-datepicker-append"),
      (this._triggerClass = "ui-datepicker-trigger"),
      (this._dialogClass = "ui-datepicker-dialog"),
      (this._disableClass = "ui-datepicker-disabled"),
      (this._unselectableClass = "ui-datepicker-unselectable"),
      (this._currentClass = "ui-datepicker-current-day"),
      (this._dayOverClass = "ui-datepicker-days-cell-over"),
      (this.regional = []),
      (this.regional[""] = {
        closeText: "Done",
        prevText: "Prev",
        nextText: "Next",
        currentText: "Today",
        monthNames: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        monthNamesShort: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        dayNames: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        weekHeader: "Wk",
        dateFormat: "mm/dd/yy",
        firstDay: 0,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: "",
        selectMonthLabel: "Select month",
        selectYearLabel: "Select year",
      }),
      (this._defaults = {
        showOn: "focus",
        showAnim: "fadeIn",
        showOptions: {},
        defaultDate: null,
        appendText: "",
        buttonText: "...",
        buttonImage: "",
        buttonImageOnly: !1,
        hideIfNoPrevNext: !1,
        navigationAsDateFormat: !1,
        gotoCurrent: !1,
        changeMonth: !1,
        changeYear: !1,
        yearRange: "c-10:c+10",
        showOtherMonths: !1,
        selectOtherMonths: !1,
        showWeek: !1,
        calculateWeek: this.iso8601Week,
        shortYearCutoff: "+10",
        minDate: null,
        maxDate: null,
        duration: "fast",
        beforeShowDay: null,
        beforeShow: null,
        onSelect: null,
        onChangeMonthYear: null,
        onClose: null,
        onUpdateDatepicker: null,
        numberOfMonths: 1,
        showCurrentAtPos: 0,
        stepMonths: 1,
        stepBigMonths: 12,
        altField: "",
        altFormat: "",
        constrainInput: !0,
        showButtonPanel: !1,
        autoSize: !1,
        disabled: !1,
      }),
      V.extend(this._defaults, this.regional[""]),
      (this.regional.en = V.extend(!0, {}, this.regional[""])),
      (this.regional["en-US"] = V.extend(!0, {}, this.regional.en)),
      (this.dpDiv = nt(
        V(
          "<div id='" +
            this._mainDivId +
            "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
        )
      ));
  }
  function nt(t) {
    var e =
      "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
    return t
      .on("mouseout", e, function () {
        V(this).removeClass("ui-state-hover"),
          -1 !== this.className.indexOf("ui-datepicker-prev") &&
            V(this).removeClass("ui-datepicker-prev-hover"),
          -1 !== this.className.indexOf("ui-datepicker-next") &&
            V(this).removeClass("ui-datepicker-next-hover");
      })
      .on("mouseover", e, ot);
  }
  function ot() {
    V.datepicker._isDisabledDatepicker(
      (it.inline ? it.dpDiv.parent() : it.input)[0]
    ) ||
      (V(this)
        .parents(".ui-datepicker-calendar")
        .find("a")
        .removeClass("ui-state-hover"),
      V(this).addClass("ui-state-hover"),
      -1 !== this.className.indexOf("ui-datepicker-prev") &&
        V(this).addClass("ui-datepicker-prev-hover"),
      -1 !== this.className.indexOf("ui-datepicker-next") &&
        V(this).addClass("ui-datepicker-next-hover"));
  }
  function at(t, e) {
    for (var i in (V.extend(t, e), e)) null == e[i] && (t[i] = e[i]);
    return t;
  }
  V.extend(V.ui, { datepicker: { version: "1.13.2" } }),
    V.extend(st.prototype, {
      markerClassName: "hasDatepicker",
      maxRows: 4,
      _widgetDatepicker: function () {
        return this.dpDiv;
      },
      setDefaults: function (t) {
        return at(this._defaults, t || {}), this;
      },
      _attachDatepicker: function (t, e) {
        var i,
          s = t.nodeName.toLowerCase(),
          n = "div" === s || "span" === s;
        t.id || ((this.uuid += 1), (t.id = "dp" + this.uuid)),
          ((i = this._newInst(V(t), n)).settings = V.extend({}, e || {})),
          "input" === s
            ? this._connectDatepicker(t, i)
            : n && this._inlineDatepicker(t, i);
      },
      _newInst: function (t, e) {
        return {
          id: t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
          input: t,
          selectedDay: 0,
          selectedMonth: 0,
          selectedYear: 0,
          drawMonth: 0,
          drawYear: 0,
          inline: e,
          dpDiv: e
            ? nt(
                V(
                  "<div class='" +
                    this._inlineClass +
                    " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
                )
              )
            : this.dpDiv,
        };
      },
      _connectDatepicker: function (t, e) {
        var i = V(t);
        (e.append = V([])),
          (e.trigger = V([])),
          i.hasClass(this.markerClassName) ||
            (this._attachments(i, e),
            i
              .addClass(this.markerClassName)
              .on("keydown", this._doKeyDown)
              .on("keypress", this._doKeyPress)
              .on("keyup", this._doKeyUp),
            this._autoSize(e),
            V.data(t, "datepicker", e),
            e.settings.disabled && this._disableDatepicker(t));
      },
      _attachments: function (t, e) {
        var i,
          s = this._get(e, "appendText"),
          n = this._get(e, "isRTL");
        e.append && e.append.remove(),
          s &&
            ((e.append = V("<span>").addClass(this._appendClass).text(s)),
            t[n ? "before" : "after"](e.append)),
          t.off("focus", this._showDatepicker),
          e.trigger && e.trigger.remove(),
          ("focus" !== (i = this._get(e, "showOn")) && "both" !== i) ||
            t.on("focus", this._showDatepicker),
          ("button" !== i && "both" !== i) ||
            ((s = this._get(e, "buttonText")),
            (i = this._get(e, "buttonImage")),
            this._get(e, "buttonImageOnly")
              ? (e.trigger = V("<img>")
                  .addClass(this._triggerClass)
                  .attr({ src: i, alt: s, title: s }))
              : ((e.trigger = V("<button type='button'>").addClass(
                  this._triggerClass
                )),
                i
                  ? e.trigger.html(
                      V("<img>").attr({ src: i, alt: s, title: s })
                    )
                  : e.trigger.text(s)),
            t[n ? "before" : "after"](e.trigger),
            e.trigger.on("click", function () {
              return (
                V.datepicker._datepickerShowing &&
                V.datepicker._lastInput === t[0]
                  ? V.datepicker._hideDatepicker()
                  : (V.datepicker._datepickerShowing &&
                      V.datepicker._lastInput !== t[0] &&
                      V.datepicker._hideDatepicker(),
                    V.datepicker._showDatepicker(t[0])),
                !1
              );
            }));
      },
      _autoSize: function (t) {
        var e, i, s, n, o, a;
        this._get(t, "autoSize") &&
          !t.inline &&
          ((o = new Date(2009, 11, 20)),
          (a = this._get(t, "dateFormat")).match(/[DM]/) &&
            ((e = function (t) {
              for (n = s = i = 0; n < t.length; n++)
                t[n].length > i && ((i = t[n].length), (s = n));
              return s;
            }),
            o.setMonth(
              e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))
            ),
            o.setDate(
              e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) +
                20 -
                o.getDay()
            )),
          t.input.attr("size", this._formatDate(t, o).length));
      },
      _inlineDatepicker: function (t, e) {
        var i = V(t);
        i.hasClass(this.markerClassName) ||
          (i.addClass(this.markerClassName).append(e.dpDiv),
          V.data(t, "datepicker", e),
          this._setDate(e, this._getDefaultDate(e), !0),
          this._updateDatepicker(e),
          this._updateAlternate(e),
          e.settings.disabled && this._disableDatepicker(t),
          e.dpDiv.css("display", "block"));
      },
      _dialogDatepicker: function (t, e, i, s, n) {
        var o,
          a = this._dialogInst;
        return (
          a ||
            ((this.uuid += 1),
            (o = "dp" + this.uuid),
            (this._dialogInput = V(
              "<input type='text' id='" +
                o +
                "' style='position: absolute; top: -100px; width: 0px;'/>"
            )),
            this._dialogInput.on("keydown", this._doKeyDown),
            V("body").append(this._dialogInput),
            ((a = this._dialogInst =
              this._newInst(this._dialogInput, !1)).settings = {}),
            V.data(this._dialogInput[0], "datepicker", a)),
          at(a.settings, s || {}),
          (e = e && e.constructor === Date ? this._formatDate(a, e) : e),
          this._dialogInput.val(e),
          (this._pos = n ? (n.length ? n : [n.pageX, n.pageY]) : null),
          this._pos ||
            ((o = document.documentElement.clientWidth),
            (s = document.documentElement.clientHeight),
            (e =
              document.documentElement.scrollLeft || document.body.scrollLeft),
            (n = document.documentElement.scrollTop || document.body.scrollTop),
            (this._pos = [o / 2 - 100 + e, s / 2 - 150 + n])),
          this._dialogInput
            .css("left", this._pos[0] + 20 + "px")
            .css("top", this._pos[1] + "px"),
          (a.settings.onSelect = i),
          (this._inDialog = !0),
          this.dpDiv.addClass(this._dialogClass),
          this._showDatepicker(this._dialogInput[0]),
          V.blockUI && V.blockUI(this.dpDiv),
          V.data(this._dialogInput[0], "datepicker", a),
          this
        );
      },
      _destroyDatepicker: function (t) {
        var e,
          i = V(t),
          s = V.data(t, "datepicker");
        i.hasClass(this.markerClassName) &&
          ((e = t.nodeName.toLowerCase()),
          V.removeData(t, "datepicker"),
          "input" === e
            ? (s.append.remove(),
              s.trigger.remove(),
              i
                .removeClass(this.markerClassName)
                .off("focus", this._showDatepicker)
                .off("keydown", this._doKeyDown)
                .off("keypress", this._doKeyPress)
                .off("keyup", this._doKeyUp))
            : ("div" !== e && "span" !== e) ||
              i.removeClass(this.markerClassName).empty(),
          it === s && ((it = null), (this._curInst = null)));
      },
      _enableDatepicker: function (e) {
        var t,
          i = V(e),
          s = V.data(e, "datepicker");
        i.hasClass(this.markerClassName) &&
          ("input" === (t = e.nodeName.toLowerCase())
            ? ((e.disabled = !1),
              s.trigger
                .filter("button")
                .each(function () {
                  this.disabled = !1;
                })
                .end()
                .filter("img")
                .css({ opacity: "1.0", cursor: "" }))
            : ("div" !== t && "span" !== t) ||
              ((i = i.children("." + this._inlineClass))
                .children()
                .removeClass("ui-state-disabled"),
              i
                .find("select.ui-datepicker-month, select.ui-datepicker-year")
                .prop("disabled", !1)),
          (this._disabledInputs = V.map(this._disabledInputs, function (t) {
            return t === e ? null : t;
          })));
      },
      _disableDatepicker: function (e) {
        var t,
          i = V(e),
          s = V.data(e, "datepicker");
        i.hasClass(this.markerClassName) &&
          ("input" === (t = e.nodeName.toLowerCase())
            ? ((e.disabled = !0),
              s.trigger
                .filter("button")
                .each(function () {
                  this.disabled = !0;
                })
                .end()
                .filter("img")
                .css({ opacity: "0.5", cursor: "default" }))
            : ("div" !== t && "span" !== t) ||
              ((i = i.children("." + this._inlineClass))
                .children()
                .addClass("ui-state-disabled"),
              i
                .find("select.ui-datepicker-month, select.ui-datepicker-year")
                .prop("disabled", !0)),
          (this._disabledInputs = V.map(this._disabledInputs, function (t) {
            return t === e ? null : t;
          })),
          (this._disabledInputs[this._disabledInputs.length] = e));
      },
      _isDisabledDatepicker: function (t) {
        if (!t) return !1;
        for (var e = 0; e < this._disabledInputs.length; e++)
          if (this._disabledInputs[e] === t) return !0;
        return !1;
      },
      _getInst: function (t) {
        try {
          return V.data(t, "datepicker");
        } catch (t) {
          throw "Missing instance data for this datepicker";
        }
      },
      _optionDatepicker: function (t, e, i) {
        var s,
          n,
          o = this._getInst(t);
        if (2 === arguments.length && "string" == typeof e)
          return "defaults" === e
            ? V.extend({}, V.datepicker._defaults)
            : o
            ? "all" === e
              ? V.extend({}, o.settings)
              : this._get(o, e)
            : null;
        (s = e || {}),
          "string" == typeof e && ((s = {})[e] = i),
          o &&
            (this._curInst === o && this._hideDatepicker(),
            (n = this._getDateDatepicker(t, !0)),
            (e = this._getMinMaxDate(o, "min")),
            (i = this._getMinMaxDate(o, "max")),
            at(o.settings, s),
            null !== e &&
              void 0 !== s.dateFormat &&
              void 0 === s.minDate &&
              (o.settings.minDate = this._formatDate(o, e)),
            null !== i &&
              void 0 !== s.dateFormat &&
              void 0 === s.maxDate &&
              (o.settings.maxDate = this._formatDate(o, i)),
            "disabled" in s &&
              (s.disabled
                ? this._disableDatepicker(t)
                : this._enableDatepicker(t)),
            this._attachments(V(t), o),
            this._autoSize(o),
            this._setDate(o, n),
            this._updateAlternate(o),
            this._updateDatepicker(o));
      },
      _changeDatepicker: function (t, e, i) {
        this._optionDatepicker(t, e, i);
      },
      _refreshDatepicker: function (t) {
        t = this._getInst(t);
        t && this._updateDatepicker(t);
      },
      _setDateDatepicker: function (t, e) {
        t = this._getInst(t);
        t &&
          (this._setDate(t, e),
          this._updateDatepicker(t),
          this._updateAlternate(t));
      },
      _getDateDatepicker: function (t, e) {
        t = this._getInst(t);
        return (
          t && !t.inline && this._setDateFromField(t, e),
          t ? this._getDate(t) : null
        );
      },
      _doKeyDown: function (t) {
        var e,
          i,
          s = V.datepicker._getInst(t.target),
          n = !0,
          o = s.dpDiv.is(".ui-datepicker-rtl");
        if (((s._keyEvent = !0), V.datepicker._datepickerShowing))
          switch (t.keyCode) {
            case 9:
              V.datepicker._hideDatepicker(), (n = !1);
              break;
            case 13:
              return (
                (i = V(
                  "td." +
                    V.datepicker._dayOverClass +
                    ":not(." +
                    V.datepicker._currentClass +
                    ")",
                  s.dpDiv
                ))[0] &&
                  V.datepicker._selectDay(
                    t.target,
                    s.selectedMonth,
                    s.selectedYear,
                    i[0]
                  ),
                (e = V.datepicker._get(s, "onSelect"))
                  ? ((i = V.datepicker._formatDate(s)),
                    e.apply(s.input ? s.input[0] : null, [i, s]))
                  : V.datepicker._hideDatepicker(),
                !1
              );
            case 27:
              V.datepicker._hideDatepicker();
              break;
            case 33:
              V.datepicker._adjustDate(
                t.target,
                t.ctrlKey
                  ? -V.datepicker._get(s, "stepBigMonths")
                  : -V.datepicker._get(s, "stepMonths"),
                "M"
              );
              break;
            case 34:
              V.datepicker._adjustDate(
                t.target,
                t.ctrlKey
                  ? +V.datepicker._get(s, "stepBigMonths")
                  : +V.datepicker._get(s, "stepMonths"),
                "M"
              );
              break;
            case 35:
              (t.ctrlKey || t.metaKey) && V.datepicker._clearDate(t.target),
                (n = t.ctrlKey || t.metaKey);
              break;
            case 36:
              (t.ctrlKey || t.metaKey) && V.datepicker._gotoToday(t.target),
                (n = t.ctrlKey || t.metaKey);
              break;
            case 37:
              (t.ctrlKey || t.metaKey) &&
                V.datepicker._adjustDate(t.target, o ? 1 : -1, "D"),
                (n = t.ctrlKey || t.metaKey),
                t.originalEvent.altKey &&
                  V.datepicker._adjustDate(
                    t.target,
                    t.ctrlKey
                      ? -V.datepicker._get(s, "stepBigMonths")
                      : -V.datepicker._get(s, "stepMonths"),
                    "M"
                  );
              break;
            case 38:
              (t.ctrlKey || t.metaKey) &&
                V.datepicker._adjustDate(t.target, -7, "D"),
                (n = t.ctrlKey || t.metaKey);
              break;
            case 39:
              (t.ctrlKey || t.metaKey) &&
                V.datepicker._adjustDate(t.target, o ? -1 : 1, "D"),
                (n = t.ctrlKey || t.metaKey),
                t.originalEvent.altKey &&
                  V.datepicker._adjustDate(
                    t.target,
                    t.ctrlKey
                      ? +V.datepicker._get(s, "stepBigMonths")
                      : +V.datepicker._get(s, "stepMonths"),
                    "M"
                  );
              break;
            case 40:
              (t.ctrlKey || t.metaKey) &&
                V.datepicker._adjustDate(t.target, 7, "D"),
                (n = t.ctrlKey || t.metaKey);
              break;
            default:
              n = !1;
          }
        else
          36 === t.keyCode && t.ctrlKey
            ? V.datepicker._showDatepicker(this)
            : (n = !1);
        n && (t.preventDefault(), t.stopPropagation());
      },
      _doKeyPress: function (t) {
        var e,
          i = V.datepicker._getInst(t.target);
        if (V.datepicker._get(i, "constrainInput"))
          return (
            (e = V.datepicker._possibleChars(
              V.datepicker._get(i, "dateFormat")
            )),
            (i = String.fromCharCode(
              null == t.charCode ? t.keyCode : t.charCode
            )),
            t.ctrlKey || t.metaKey || i < " " || !e || -1 < e.indexOf(i)
          );
      },
      _doKeyUp: function (t) {
        t = V.datepicker._getInst(t.target);
        if (t.input.val() !== t.lastVal)
          try {
            V.datepicker.parseDate(
              V.datepicker._get(t, "dateFormat"),
              t.input ? t.input.val() : null,
              V.datepicker._getFormatConfig(t)
            ) &&
              (V.datepicker._setDateFromField(t),
              V.datepicker._updateAlternate(t),
              V.datepicker._updateDatepicker(t));
          } catch (t) {}
        return !0;
      },
      _showDatepicker: function (t) {
        var e, i, s, n;
        "input" !== (t = t.target || t).nodeName.toLowerCase() &&
          (t = V("input", t.parentNode)[0]),
          V.datepicker._isDisabledDatepicker(t) ||
            V.datepicker._lastInput === t ||
            ((n = V.datepicker._getInst(t)),
            V.datepicker._curInst &&
              V.datepicker._curInst !== n &&
              (V.datepicker._curInst.dpDiv.stop(!0, !0),
              n &&
                V.datepicker._datepickerShowing &&
                V.datepicker._hideDatepicker(V.datepicker._curInst.input[0])),
            !1 !==
              (i = (s = V.datepicker._get(n, "beforeShow"))
                ? s.apply(t, [t, n])
                : {}) &&
              (at(n.settings, i),
              (n.lastVal = null),
              (V.datepicker._lastInput = t),
              V.datepicker._setDateFromField(n),
              V.datepicker._inDialog && (t.value = ""),
              V.datepicker._pos ||
                ((V.datepicker._pos = V.datepicker._findPos(t)),
                (V.datepicker._pos[1] += t.offsetHeight)),
              (e = !1),
              V(t)
                .parents()
                .each(function () {
                  return !(e |= "fixed" === V(this).css("position"));
                }),
              (s = { left: V.datepicker._pos[0], top: V.datepicker._pos[1] }),
              (V.datepicker._pos = null),
              n.dpDiv.empty(),
              n.dpDiv.css({
                position: "absolute",
                display: "block",
                top: "-1000px",
              }),
              V.datepicker._updateDatepicker(n),
              (s = V.datepicker._checkOffset(n, s, e)),
              n.dpDiv.css({
                position:
                  V.datepicker._inDialog && V.blockUI
                    ? "static"
                    : e
                    ? "fixed"
                    : "absolute",
                display: "none",
                left: s.left + "px",
                top: s.top + "px",
              }),
              n.inline ||
                ((i = V.datepicker._get(n, "showAnim")),
                (s = V.datepicker._get(n, "duration")),
                n.dpDiv.css(
                  "z-index",
                  (function (t) {
                    for (var e, i; t.length && t[0] !== document; ) {
                      if (
                        ("absolute" === (e = t.css("position")) ||
                          "relative" === e ||
                          "fixed" === e) &&
                        ((i = parseInt(t.css("zIndex"), 10)),
                        !isNaN(i) && 0 !== i)
                      )
                        return i;
                      t = t.parent();
                    }
                    return 0;
                  })(V(t)) + 1
                ),
                (V.datepicker._datepickerShowing = !0),
                V.effects && V.effects.effect[i]
                  ? n.dpDiv.show(i, V.datepicker._get(n, "showOptions"), s)
                  : n.dpDiv[i || "show"](i ? s : null),
                V.datepicker._shouldFocusInput(n) && n.input.trigger("focus"),
                (V.datepicker._curInst = n))));
      },
      _updateDatepicker: function (t) {
        (this.maxRows = 4),
          (it = t).dpDiv.empty().append(this._generateHTML(t)),
          this._attachHandlers(t);
        var e,
          i = this._getNumberOfMonths(t),
          s = i[1],
          n = t.dpDiv.find("." + this._dayOverClass + " a"),
          o = V.datepicker._get(t, "onUpdateDatepicker");
        0 < n.length && ot.apply(n.get(0)),
          t.dpDiv
            .removeClass(
              "ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4"
            )
            .width(""),
          1 < s &&
            t.dpDiv
              .addClass("ui-datepicker-multi-" + s)
              .css("width", 17 * s + "em"),
          t.dpDiv[(1 !== i[0] || 1 !== i[1] ? "add" : "remove") + "Class"](
            "ui-datepicker-multi"
          ),
          t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"](
            "ui-datepicker-rtl"
          ),
          t === V.datepicker._curInst &&
            V.datepicker._datepickerShowing &&
            V.datepicker._shouldFocusInput(t) &&
            t.input.trigger("focus"),
          t.yearshtml &&
            ((e = t.yearshtml),
            setTimeout(function () {
              e === t.yearshtml &&
                t.yearshtml &&
                t.dpDiv
                  .find("select.ui-datepicker-year")
                  .first()
                  .replaceWith(t.yearshtml),
                (e = t.yearshtml = null);
            }, 0)),
          o && o.apply(t.input ? t.input[0] : null, [t]);
      },
      _shouldFocusInput: function (t) {
        return (
          t.input &&
          t.input.is(":visible") &&
          !t.input.is(":disabled") &&
          !t.input.is(":focus")
        );
      },
      _checkOffset: function (t, e, i) {
        var s = t.dpDiv.outerWidth(),
          n = t.dpDiv.outerHeight(),
          o = t.input ? t.input.outerWidth() : 0,
          a = t.input ? t.input.outerHeight() : 0,
          r =
            document.documentElement.clientWidth +
            (i ? 0 : V(document).scrollLeft()),
          l =
            document.documentElement.clientHeight +
            (i ? 0 : V(document).scrollTop());
        return (
          (e.left -= this._get(t, "isRTL") ? s - o : 0),
          (e.left -=
            i && e.left === t.input.offset().left
              ? V(document).scrollLeft()
              : 0),
          (e.top -=
            i && e.top === t.input.offset().top + a
              ? V(document).scrollTop()
              : 0),
          (e.left -= Math.min(
            e.left,
            e.left + s > r && s < r ? Math.abs(e.left + s - r) : 0
          )),
          (e.top -= Math.min(
            e.top,
            e.top + n > l && n < l ? Math.abs(n + a) : 0
          )),
          e
        );
      },
      _findPos: function (t) {
        for (
          var e = this._getInst(t), i = this._get(e, "isRTL");
          t &&
          ("hidden" === t.type || 1 !== t.nodeType || V.expr.pseudos.hidden(t));

        )
          t = t[i ? "previousSibling" : "nextSibling"];
        return [(e = V(t).offset()).left, e.top];
      },
      _hideDatepicker: function (t) {
        var e,
          i,
          s = this._curInst;
        !s ||
          (t && s !== V.data(t, "datepicker")) ||
          (this._datepickerShowing &&
            ((e = this._get(s, "showAnim")),
            (i = this._get(s, "duration")),
            (t = function () {
              V.datepicker._tidyDialog(s);
            }),
            V.effects && (V.effects.effect[e] || V.effects[e])
              ? s.dpDiv.hide(e, V.datepicker._get(s, "showOptions"), i, t)
              : s.dpDiv[
                  "slideDown" === e
                    ? "slideUp"
                    : "fadeIn" === e
                    ? "fadeOut"
                    : "hide"
                ](e ? i : null, t),
            e || t(),
            (this._datepickerShowing = !1),
            (t = this._get(s, "onClose")) &&
              t.apply(s.input ? s.input[0] : null, [
                s.input ? s.input.val() : "",
                s,
              ]),
            (this._lastInput = null),
            this._inDialog &&
              (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px",
              }),
              V.blockUI && (V.unblockUI(), V("body").append(this.dpDiv))),
            (this._inDialog = !1)));
      },
      _tidyDialog: function (t) {
        t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar");
      },
      _checkExternalClick: function (t) {
        var e;
        V.datepicker._curInst &&
          ((e = V(t.target)),
          (t = V.datepicker._getInst(e[0])),
          ((e[0].id === V.datepicker._mainDivId ||
            0 !== e.parents("#" + V.datepicker._mainDivId).length ||
            e.hasClass(V.datepicker.markerClassName) ||
            e.closest("." + V.datepicker._triggerClass).length ||
            !V.datepicker._datepickerShowing ||
            (V.datepicker._inDialog && V.blockUI)) &&
            (!e.hasClass(V.datepicker.markerClassName) ||
              V.datepicker._curInst === t)) ||
            V.datepicker._hideDatepicker());
      },
      _adjustDate: function (t, e, i) {
        var s = V(t),
          t = this._getInst(s[0]);
        this._isDisabledDatepicker(s[0]) ||
          (this._adjustInstDate(t, e, i), this._updateDatepicker(t));
      },
      _gotoToday: function (t) {
        var e = V(t),
          i = this._getInst(e[0]);
        this._get(i, "gotoCurrent") && i.currentDay
          ? ((i.selectedDay = i.currentDay),
            (i.drawMonth = i.selectedMonth = i.currentMonth),
            (i.drawYear = i.selectedYear = i.currentYear))
          : ((t = new Date()),
            (i.selectedDay = t.getDate()),
            (i.drawMonth = i.selectedMonth = t.getMonth()),
            (i.drawYear = i.selectedYear = t.getFullYear())),
          this._notifyChange(i),
          this._adjustDate(e);
      },
      _selectMonthYear: function (t, e, i) {
        var s = V(t),
          t = this._getInst(s[0]);
        (t["selected" + ("M" === i ? "Month" : "Year")] = t[
          "draw" + ("M" === i ? "Month" : "Year")
        ] =
          parseInt(e.options[e.selectedIndex].value, 10)),
          this._notifyChange(t),
          this._adjustDate(s);
      },
      _selectDay: function (t, e, i, s) {
        var n = V(t);
        V(s).hasClass(this._unselectableClass) ||
          this._isDisabledDatepicker(n[0]) ||
          (((n = this._getInst(n[0])).selectedDay = n.currentDay =
            parseInt(V("a", s).attr("data-date"))),
          (n.selectedMonth = n.currentMonth = e),
          (n.selectedYear = n.currentYear = i),
          this._selectDate(
            t,
            this._formatDate(n, n.currentDay, n.currentMonth, n.currentYear)
          ));
      },
      _clearDate: function (t) {
        t = V(t);
        this._selectDate(t, "");
      },
      _selectDate: function (t, e) {
        var i = V(t),
          t = this._getInst(i[0]);
        (e = null != e ? e : this._formatDate(t)),
          t.input && t.input.val(e),
          this._updateAlternate(t),
          (i = this._get(t, "onSelect"))
            ? i.apply(t.input ? t.input[0] : null, [e, t])
            : t.input && t.input.trigger("change"),
          t.inline
            ? this._updateDatepicker(t)
            : (this._hideDatepicker(),
              (this._lastInput = t.input[0]),
              "object" != typeof t.input[0] && t.input.trigger("focus"),
              (this._lastInput = null));
      },
      _updateAlternate: function (t) {
        var e,
          i,
          s = this._get(t, "altField");
        s &&
          ((e = this._get(t, "altFormat") || this._get(t, "dateFormat")),
          (i = this._getDate(t)),
          (t = this.formatDate(e, i, this._getFormatConfig(t))),
          V(document).find(s).val(t));
      },
      noWeekends: function (t) {
        t = t.getDay();
        return [0 < t && t < 6, ""];
      },
      iso8601Week: function (t) {
        var e = new Date(t.getTime());
        return (
          e.setDate(e.getDate() + 4 - (e.getDay() || 7)),
          (t = e.getTime()),
          e.setMonth(0),
          e.setDate(1),
          Math.floor(Math.round((t - e) / 864e5) / 7) + 1
        );
      },
      parseDate: function (e, n, t) {
        if (null == e || null == n) throw "Invalid arguments";
        if ("" === (n = "object" == typeof n ? n.toString() : n + ""))
          return null;
        for (
          var i,
            s,
            o,
            a = 0,
            r =
              (t ? t.shortYearCutoff : null) || this._defaults.shortYearCutoff,
            r =
              "string" != typeof r
                ? r
                : (new Date().getFullYear() % 100) + parseInt(r, 10),
            l = (t ? t.dayNamesShort : null) || this._defaults.dayNamesShort,
            h = (t ? t.dayNames : null) || this._defaults.dayNames,
            c =
              (t ? t.monthNamesShort : null) || this._defaults.monthNamesShort,
            u = (t ? t.monthNames : null) || this._defaults.monthNames,
            d = -1,
            p = -1,
            f = -1,
            g = -1,
            m = !1,
            _ = function (t) {
              t = w + 1 < e.length && e.charAt(w + 1) === t;
              return t && w++, t;
            },
            v = function (t) {
              var e = _(t),
                e =
                  "@" === t
                    ? 14
                    : "!" === t
                    ? 20
                    : "y" === t && e
                    ? 4
                    : "o" === t
                    ? 3
                    : 2,
                e = new RegExp("^\\d{" + ("y" === t ? e : 1) + "," + e + "}"),
                e = n.substring(a).match(e);
              if (!e) throw "Missing number at position " + a;
              return (a += e[0].length), parseInt(e[0], 10);
            },
            b = function (t, e, i) {
              var s = -1,
                e = V.map(_(t) ? i : e, function (t, e) {
                  return [[e, t]];
                }).sort(function (t, e) {
                  return -(t[1].length - e[1].length);
                });
              if (
                (V.each(e, function (t, e) {
                  var i = e[1];
                  if (n.substr(a, i.length).toLowerCase() === i.toLowerCase())
                    return (s = e[0]), (a += i.length), !1;
                }),
                -1 !== s)
              )
                return s + 1;
              throw "Unknown name at position " + a;
            },
            y = function () {
              if (n.charAt(a) !== e.charAt(w))
                throw "Unexpected literal at position " + a;
              a++;
            },
            w = 0;
          w < e.length;
          w++
        )
          if (m) "'" !== e.charAt(w) || _("'") ? y() : (m = !1);
          else
            switch (e.charAt(w)) {
              case "d":
                f = v("d");
                break;
              case "D":
                b("D", l, h);
                break;
              case "o":
                g = v("o");
                break;
              case "m":
                p = v("m");
                break;
              case "M":
                p = b("M", c, u);
                break;
              case "y":
                d = v("y");
                break;
              case "@":
                (d = (o = new Date(v("@"))).getFullYear()),
                  (p = o.getMonth() + 1),
                  (f = o.getDate());
                break;
              case "!":
                (d = (o = new Date(
                  (v("!") - this._ticksTo1970) / 1e4
                )).getFullYear()),
                  (p = o.getMonth() + 1),
                  (f = o.getDate());
                break;
              case "'":
                _("'") ? y() : (m = !0);
                break;
              default:
                y();
            }
        if (a < n.length && ((s = n.substr(a)), !/^\s+/.test(s)))
          throw "Extra/unparsed characters found in date: " + s;
        if (
          (-1 === d
            ? (d = new Date().getFullYear())
            : d < 100 &&
              (d +=
                new Date().getFullYear() -
                (new Date().getFullYear() % 100) +
                (d <= r ? 0 : -100)),
          -1 < g)
        )
          for (p = 1, f = g; ; ) {
            if (f <= (i = this._getDaysInMonth(d, p - 1))) break;
            p++, (f -= i);
          }
        if (
          (o = this._daylightSavingAdjust(
            new Date(d, p - 1, f)
          )).getFullYear() !== d ||
          o.getMonth() + 1 !== p ||
          o.getDate() !== f
        )
          throw "Invalid date";
        return o;
      },
      ATOM: "yy-mm-dd",
      COOKIE: "D, dd M yy",
      ISO_8601: "yy-mm-dd",
      RFC_822: "D, d M y",
      RFC_850: "DD, dd-M-y",
      RFC_1036: "D, d M y",
      RFC_1123: "D, d M yy",
      RFC_2822: "D, d M yy",
      RSS: "D, d M y",
      TICKS: "!",
      TIMESTAMP: "@",
      W3C: "yy-mm-dd",
      _ticksTo1970:
        24 *
        (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) *
        60 *
        60 *
        1e7,
      formatDate: function (e, t, i) {
        if (!t) return "";
        function s(t, e, i) {
          var s = "" + e;
          if (c(t)) for (; s.length < i; ) s = "0" + s;
          return s;
        }
        function n(t, e, i, s) {
          return (c(t) ? s : i)[e];
        }
        var o,
          a = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
          r = (i ? i.dayNames : null) || this._defaults.dayNames,
          l = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
          h = (i ? i.monthNames : null) || this._defaults.monthNames,
          c = function (t) {
            t = o + 1 < e.length && e.charAt(o + 1) === t;
            return t && o++, t;
          },
          u = "",
          d = !1;
        if (t)
          for (o = 0; o < e.length; o++)
            if (d)
              "'" !== e.charAt(o) || c("'") ? (u += e.charAt(o)) : (d = !1);
            else
              switch (e.charAt(o)) {
                case "d":
                  u += s("d", t.getDate(), 2);
                  break;
                case "D":
                  u += n("D", t.getDay(), a, r);
                  break;
                case "o":
                  u += s(
                    "o",
                    Math.round(
                      (new Date(
                        t.getFullYear(),
                        t.getMonth(),
                        t.getDate()
                      ).getTime() -
                        new Date(t.getFullYear(), 0, 0).getTime()) /
                        864e5
                    ),
                    3
                  );
                  break;
                case "m":
                  u += s("m", t.getMonth() + 1, 2);
                  break;
                case "M":
                  u += n("M", t.getMonth(), l, h);
                  break;
                case "y":
                  u += c("y")
                    ? t.getFullYear()
                    : (t.getFullYear() % 100 < 10 ? "0" : "") +
                      (t.getFullYear() % 100);
                  break;
                case "@":
                  u += t.getTime();
                  break;
                case "!":
                  u += 1e4 * t.getTime() + this._ticksTo1970;
                  break;
                case "'":
                  c("'") ? (u += "'") : (d = !0);
                  break;
                default:
                  u += e.charAt(o);
              }
        return u;
      },
      _possibleChars: function (e) {
        for (
          var t = "",
            i = !1,
            s = function (t) {
              t = n + 1 < e.length && e.charAt(n + 1) === t;
              return t && n++, t;
            },
            n = 0;
          n < e.length;
          n++
        )
          if (i) "'" !== e.charAt(n) || s("'") ? (t += e.charAt(n)) : (i = !1);
          else
            switch (e.charAt(n)) {
              case "d":
              case "m":
              case "y":
              case "@":
                t += "0123456789";
                break;
              case "D":
              case "M":
                return null;
              case "'":
                s("'") ? (t += "'") : (i = !0);
                break;
              default:
                t += e.charAt(n);
            }
        return t;
      },
      _get: function (t, e) {
        return (void 0 !== t.settings[e] ? t.settings : this._defaults)[e];
      },
      _setDateFromField: function (t, e) {
        if (t.input.val() !== t.lastVal) {
          var i = this._get(t, "dateFormat"),
            s = (t.lastVal = t.input ? t.input.val() : null),
            n = this._getDefaultDate(t),
            o = n,
            a = this._getFormatConfig(t);
          try {
            o = this.parseDate(i, s, a) || n;
          } catch (t) {
            s = e ? "" : s;
          }
          (t.selectedDay = o.getDate()),
            (t.drawMonth = t.selectedMonth = o.getMonth()),
            (t.drawYear = t.selectedYear = o.getFullYear()),
            (t.currentDay = s ? o.getDate() : 0),
            (t.currentMonth = s ? o.getMonth() : 0),
            (t.currentYear = s ? o.getFullYear() : 0),
            this._adjustInstDate(t);
        }
      },
      _getDefaultDate: function (t) {
        return this._restrictMinMax(
          t,
          this._determineDate(t, this._get(t, "defaultDate"), new Date())
        );
      },
      _determineDate: function (r, t, e) {
        var i,
          s,
          t =
            null == t || "" === t
              ? e
              : "string" == typeof t
              ? (function (t) {
                  try {
                    return V.datepicker.parseDate(
                      V.datepicker._get(r, "dateFormat"),
                      t,
                      V.datepicker._getFormatConfig(r)
                    );
                  } catch (t) {}
                  for (
                    var e =
                        (t.toLowerCase().match(/^c/)
                          ? V.datepicker._getDate(r)
                          : null) || new Date(),
                      i = e.getFullYear(),
                      s = e.getMonth(),
                      n = e.getDate(),
                      o = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
                      a = o.exec(t);
                    a;

                  ) {
                    switch (a[2] || "d") {
                      case "d":
                      case "D":
                        n += parseInt(a[1], 10);
                        break;
                      case "w":
                      case "W":
                        n += 7 * parseInt(a[1], 10);
                        break;
                      case "m":
                      case "M":
                        (s += parseInt(a[1], 10)),
                          (n = Math.min(n, V.datepicker._getDaysInMonth(i, s)));
                        break;
                      case "y":
                      case "Y":
                        (i += parseInt(a[1], 10)),
                          (n = Math.min(n, V.datepicker._getDaysInMonth(i, s)));
                    }
                    a = o.exec(t);
                  }
                  return new Date(i, s, n);
                })(t)
              : "number" == typeof t
              ? isNaN(t)
                ? e
                : ((i = t), (s = new Date()).setDate(s.getDate() + i), s)
              : new Date(t.getTime());
        return (
          (t = t && "Invalid Date" === t.toString() ? e : t) &&
            (t.setHours(0),
            t.setMinutes(0),
            t.setSeconds(0),
            t.setMilliseconds(0)),
          this._daylightSavingAdjust(t)
        );
      },
      _daylightSavingAdjust: function (t) {
        return t
          ? (t.setHours(12 < t.getHours() ? t.getHours() + 2 : 0), t)
          : null;
      },
      _setDate: function (t, e, i) {
        var s = !e,
          n = t.selectedMonth,
          o = t.selectedYear,
          e = this._restrictMinMax(t, this._determineDate(t, e, new Date()));
        (t.selectedDay = t.currentDay = e.getDate()),
          (t.drawMonth = t.selectedMonth = t.currentMonth = e.getMonth()),
          (t.drawYear = t.selectedYear = t.currentYear = e.getFullYear()),
          (n === t.selectedMonth && o === t.selectedYear) ||
            i ||
            this._notifyChange(t),
          this._adjustInstDate(t),
          t.input && t.input.val(s ? "" : this._formatDate(t));
      },
      _getDate: function (t) {
        return !t.currentYear || (t.input && "" === t.input.val())
          ? null
          : this._daylightSavingAdjust(
              new Date(t.currentYear, t.currentMonth, t.currentDay)
            );
      },
      _attachHandlers: function (t) {
        var e = this._get(t, "stepMonths"),
          i = "#" + t.id.replace(/\\\\/g, "\\");
        t.dpDiv.find("[data-handler]").map(function () {
          var t = {
            prev: function () {
              V.datepicker._adjustDate(i, -e, "M");
            },
            next: function () {
              V.datepicker._adjustDate(i, +e, "M");
            },
            hide: function () {
              V.datepicker._hideDatepicker();
            },
            today: function () {
              V.datepicker._gotoToday(i);
            },
            selectDay: function () {
              return (
                V.datepicker._selectDay(
                  i,
                  +this.getAttribute("data-month"),
                  +this.getAttribute("data-year"),
                  this
                ),
                !1
              );
            },
            selectMonth: function () {
              return V.datepicker._selectMonthYear(i, this, "M"), !1;
            },
            selectYear: function () {
              return V.datepicker._selectMonthYear(i, this, "Y"), !1;
            },
          };
          V(this).on(
            this.getAttribute("data-event"),
            t[this.getAttribute("data-handler")]
          );
        });
      },
      _generateHTML: function (t) {
        var e,
          i,
          s,
          n,
          o,
          a,
          r,
          l,
          h,
          c,
          u,
          d,
          p,
          f,
          g,
          m,
          _,
          v,
          b,
          y,
          w,
          x,
          k,
          C,
          D,
          I,
          T,
          P,
          M,
          S,
          H,
          z,
          A = new Date(),
          O = this._daylightSavingAdjust(
            new Date(A.getFullYear(), A.getMonth(), A.getDate())
          ),
          N = this._get(t, "isRTL"),
          E = this._get(t, "showButtonPanel"),
          W = this._get(t, "hideIfNoPrevNext"),
          F = this._get(t, "navigationAsDateFormat"),
          L = this._getNumberOfMonths(t),
          R = this._get(t, "showCurrentAtPos"),
          A = this._get(t, "stepMonths"),
          Y = 1 !== L[0] || 1 !== L[1],
          B = this._daylightSavingAdjust(
            t.currentDay
              ? new Date(t.currentYear, t.currentMonth, t.currentDay)
              : new Date(9999, 9, 9)
          ),
          j = this._getMinMaxDate(t, "min"),
          q = this._getMinMaxDate(t, "max"),
          K = t.drawMonth - R,
          U = t.drawYear;
        if ((K < 0 && ((K += 12), U--), q))
          for (
            e = this._daylightSavingAdjust(
              new Date(
                q.getFullYear(),
                q.getMonth() - L[0] * L[1] + 1,
                q.getDate()
              )
            ),
              e = j && e < j ? j : e;
            this._daylightSavingAdjust(new Date(U, K, 1)) > e;

          )
            --K < 0 && ((K = 11), U--);
        for (
          t.drawMonth = K,
            t.drawYear = U,
            R = this._get(t, "prevText"),
            R = F
              ? this.formatDate(
                  R,
                  this._daylightSavingAdjust(new Date(U, K - A, 1)),
                  this._getFormatConfig(t)
                )
              : R,
            i = this._canAdjustMonth(t, -1, U, K)
              ? V("<a>")
                  .attr({
                    class: "ui-datepicker-prev ui-corner-all",
                    "data-handler": "prev",
                    "data-event": "click",
                    title: R,
                  })
                  .append(
                    V("<span>")
                      .addClass(
                        "ui-icon ui-icon-circle-triangle-" + (N ? "e" : "w")
                      )
                      .text(R)
                  )[0].outerHTML
              : W
              ? ""
              : V("<a>")
                  .attr({
                    class: "ui-datepicker-prev ui-corner-all ui-state-disabled",
                    title: R,
                  })
                  .append(
                    V("<span>")
                      .addClass(
                        "ui-icon ui-icon-circle-triangle-" + (N ? "e" : "w")
                      )
                      .text(R)
                  )[0].outerHTML,
            R = this._get(t, "nextText"),
            R = F
              ? this.formatDate(
                  R,
                  this._daylightSavingAdjust(new Date(U, K + A, 1)),
                  this._getFormatConfig(t)
                )
              : R,
            s = this._canAdjustMonth(t, 1, U, K)
              ? V("<a>")
                  .attr({
                    class: "ui-datepicker-next ui-corner-all",
                    "data-handler": "next",
                    "data-event": "click",
                    title: R,
                  })
                  .append(
                    V("<span>")
                      .addClass(
                        "ui-icon ui-icon-circle-triangle-" + (N ? "w" : "e")
                      )
                      .text(R)
                  )[0].outerHTML
              : W
              ? ""
              : V("<a>")
                  .attr({
                    class: "ui-datepicker-next ui-corner-all ui-state-disabled",
                    title: R,
                  })
                  .append(
                    V("<span>")
                      .attr(
                        "class",
                        "ui-icon ui-icon-circle-triangle-" + (N ? "w" : "e")
                      )
                      .text(R)
                  )[0].outerHTML,
            A = this._get(t, "currentText"),
            W = this._get(t, "gotoCurrent") && t.currentDay ? B : O,
            A = F ? this.formatDate(A, W, this._getFormatConfig(t)) : A,
            R = "",
            t.inline ||
              (R = V("<button>")
                .attr({
                  type: "button",
                  class:
                    "ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all",
                  "data-handler": "hide",
                  "data-event": "click",
                })
                .text(this._get(t, "closeText"))[0].outerHTML),
            F = "",
            E &&
              (F = V("<div class='ui-datepicker-buttonpane ui-widget-content'>")
                .append(N ? R : "")
                .append(
                  this._isInRange(t, W)
                    ? V("<button>")
                        .attr({
                          type: "button",
                          class:
                            "ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all",
                          "data-handler": "today",
                          "data-event": "click",
                        })
                        .text(A)
                    : ""
                )
                .append(N ? "" : R)[0].outerHTML),
            n = parseInt(this._get(t, "firstDay"), 10),
            n = isNaN(n) ? 0 : n,
            o = this._get(t, "showWeek"),
            a = this._get(t, "dayNames"),
            r = this._get(t, "dayNamesMin"),
            l = this._get(t, "monthNames"),
            h = this._get(t, "monthNamesShort"),
            c = this._get(t, "beforeShowDay"),
            u = this._get(t, "showOtherMonths"),
            d = this._get(t, "selectOtherMonths"),
            p = this._getDefaultDate(t),
            f = "",
            m = 0;
          m < L[0];
          m++
        ) {
          for (_ = "", this.maxRows = 4, v = 0; v < L[1]; v++) {
            if (
              ((b = this._daylightSavingAdjust(new Date(U, K, t.selectedDay))),
              (y = " ui-corner-all"),
              (w = ""),
              Y)
            ) {
              if (((w += "<div class='ui-datepicker-group"), 1 < L[1]))
                switch (v) {
                  case 0:
                    (w += " ui-datepicker-group-first"),
                      (y = " ui-corner-" + (N ? "right" : "left"));
                    break;
                  case L[1] - 1:
                    (w += " ui-datepicker-group-last"),
                      (y = " ui-corner-" + (N ? "left" : "right"));
                    break;
                  default:
                    (w += " ui-datepicker-group-middle"), (y = "");
                }
              w += "'>";
            }
            for (
              w +=
                "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" +
                y +
                "'>" +
                (/all|left/.test(y) && 0 === m ? (N ? s : i) : "") +
                (/all|right/.test(y) && 0 === m ? (N ? i : s) : "") +
                this._generateMonthYearHeader(
                  t,
                  K,
                  U,
                  j,
                  q,
                  0 < m || 0 < v,
                  l,
                  h
                ) +
                "</div><table class='ui-datepicker-calendar'><thead><tr>",
                x = o
                  ? "<th class='ui-datepicker-week-col'>" +
                    this._get(t, "weekHeader") +
                    "</th>"
                  : "",
                g = 0;
              g < 7;
              g++
            )
              x +=
                "<th scope='col'" +
                (5 <= (g + n + 6) % 7
                  ? " class='ui-datepicker-week-end'"
                  : "") +
                "><span title='" +
                a[(k = (g + n) % 7)] +
                "'>" +
                r[k] +
                "</span></th>";
            for (
              w += x + "</tr></thead><tbody>",
                D = this._getDaysInMonth(U, K),
                U === t.selectedYear &&
                  K === t.selectedMonth &&
                  (t.selectedDay = Math.min(t.selectedDay, D)),
                C = (this._getFirstDayOfMonth(U, K) - n + 7) % 7,
                D = Math.ceil((C + D) / 7),
                I = Y && this.maxRows > D ? this.maxRows : D,
                this.maxRows = I,
                T = this._daylightSavingAdjust(new Date(U, K, 1 - C)),
                P = 0;
              P < I;
              P++
            ) {
              for (
                w += "<tr>",
                  M = o
                    ? "<td class='ui-datepicker-week-col'>" +
                      this._get(t, "calculateWeek")(T) +
                      "</td>"
                    : "",
                  g = 0;
                g < 7;
                g++
              )
                (S = c ? c.apply(t.input ? t.input[0] : null, [T]) : [!0, ""]),
                  (z =
                    ((H = T.getMonth() !== K) && !d) ||
                    !S[0] ||
                    (j && T < j) ||
                    (q && q < T)),
                  (M +=
                    "<td class='" +
                    (5 <= (g + n + 6) % 7 ? " ui-datepicker-week-end" : "") +
                    (H ? " ui-datepicker-other-month" : "") +
                    ((T.getTime() === b.getTime() &&
                      K === t.selectedMonth &&
                      t._keyEvent) ||
                    (p.getTime() === T.getTime() && p.getTime() === b.getTime())
                      ? " " + this._dayOverClass
                      : "") +
                    (z
                      ? " " + this._unselectableClass + " ui-state-disabled"
                      : "") +
                    (H && !u
                      ? ""
                      : " " +
                        S[1] +
                        (T.getTime() === B.getTime()
                          ? " " + this._currentClass
                          : "") +
                        (T.getTime() === O.getTime()
                          ? " ui-datepicker-today"
                          : "")) +
                    "'" +
                    ((H && !u) || !S[2]
                      ? ""
                      : " title='" + S[2].replace(/'/g, "&#39;") + "'") +
                    (z
                      ? ""
                      : " data-handler='selectDay' data-event='click' data-month='" +
                        T.getMonth() +
                        "' data-year='" +
                        T.getFullYear() +
                        "'") +
                    ">" +
                    (H && !u
                      ? "&#xa0;"
                      : z
                      ? "<span class='ui-state-default'>" +
                        T.getDate() +
                        "</span>"
                      : "<a class='ui-state-default" +
                        (T.getTime() === O.getTime()
                          ? " ui-state-highlight"
                          : "") +
                        (T.getTime() === B.getTime()
                          ? " ui-state-active"
                          : "") +
                        (H ? " ui-priority-secondary" : "") +
                        "' href='#' aria-current='" +
                        (T.getTime() === B.getTime() ? "true" : "false") +
                        "' data-date='" +
                        T.getDate() +
                        "'>" +
                        T.getDate() +
                        "</a>") +
                    "</td>"),
                  T.setDate(T.getDate() + 1),
                  (T = this._daylightSavingAdjust(T));
              w += M + "</tr>";
            }
            11 < ++K && ((K = 0), U++),
              (_ += w +=
                "</tbody></table>" +
                (Y
                  ? "</div>" +
                    (0 < L[0] && v === L[1] - 1
                      ? "<div class='ui-datepicker-row-break'></div>"
                      : "")
                  : ""));
          }
          f += _;
        }
        return (f += F), (t._keyEvent = !1), f;
      },
      _generateMonthYearHeader: function (t, e, i, s, n, o, a, r) {
        var l,
          h,
          c,
          u,
          d,
          p,
          f = this._get(t, "changeMonth"),
          g = this._get(t, "changeYear"),
          m = this._get(t, "showMonthAfterYear"),
          _ = this._get(t, "selectMonthLabel"),
          v = this._get(t, "selectYearLabel"),
          b = "<div class='ui-datepicker-title'>",
          y = "";
        if (o || !f)
          y += "<span class='ui-datepicker-month'>" + a[e] + "</span>";
        else {
          for (
            l = s && s.getFullYear() === i,
              h = n && n.getFullYear() === i,
              y +=
                "<select class='ui-datepicker-month' aria-label='" +
                _ +
                "' data-handler='selectMonth' data-event='change'>",
              c = 0;
            c < 12;
            c++
          )
            (!l || c >= s.getMonth()) &&
              (!h || c <= n.getMonth()) &&
              (y +=
                "<option value='" +
                c +
                "'" +
                (c === e ? " selected='selected'" : "") +
                ">" +
                r[c] +
                "</option>");
          y += "</select>";
        }
        if ((m || (b += y + (!o && f && g ? "" : "&#xa0;")), !t.yearshtml))
          if (((t.yearshtml = ""), o || !g))
            b += "<span class='ui-datepicker-year'>" + i + "</span>";
          else {
            for (
              a = this._get(t, "yearRange").split(":"),
                u = new Date().getFullYear(),
                d = (_ = function (t) {
                  t = t.match(/c[+\-].*/)
                    ? i + parseInt(t.substring(1), 10)
                    : t.match(/[+\-].*/)
                    ? u + parseInt(t, 10)
                    : parseInt(t, 10);
                  return isNaN(t) ? u : t;
                })(a[0]),
                p = Math.max(d, _(a[1] || "")),
                d = s ? Math.max(d, s.getFullYear()) : d,
                p = n ? Math.min(p, n.getFullYear()) : p,
                t.yearshtml +=
                  "<select class='ui-datepicker-year' aria-label='" +
                  v +
                  "' data-handler='selectYear' data-event='change'>";
              d <= p;
              d++
            )
              t.yearshtml +=
                "<option value='" +
                d +
                "'" +
                (d === i ? " selected='selected'" : "") +
                ">" +
                d +
                "</option>";
            (t.yearshtml += "</select>"),
              (b += t.yearshtml),
              (t.yearshtml = null);
          }
        return (
          (b += this._get(t, "yearSuffix")),
          m && (b += (!o && f && g ? "" : "&#xa0;") + y),
          (b += "</div>")
        );
      },
      _adjustInstDate: function (t, e, i) {
        var s = t.selectedYear + ("Y" === i ? e : 0),
          n = t.selectedMonth + ("M" === i ? e : 0),
          e =
            Math.min(t.selectedDay, this._getDaysInMonth(s, n)) +
            ("D" === i ? e : 0),
          e = this._restrictMinMax(
            t,
            this._daylightSavingAdjust(new Date(s, n, e))
          );
        (t.selectedDay = e.getDate()),
          (t.drawMonth = t.selectedMonth = e.getMonth()),
          (t.drawYear = t.selectedYear = e.getFullYear()),
          ("M" !== i && "Y" !== i) || this._notifyChange(t);
      },
      _restrictMinMax: function (t, e) {
        var i = this._getMinMaxDate(t, "min"),
          t = this._getMinMaxDate(t, "max"),
          e = i && e < i ? i : e;
        return t && t < e ? t : e;
      },
      _notifyChange: function (t) {
        var e = this._get(t, "onChangeMonthYear");
        e &&
          e.apply(t.input ? t.input[0] : null, [
            t.selectedYear,
            t.selectedMonth + 1,
            t,
          ]);
      },
      _getNumberOfMonths: function (t) {
        t = this._get(t, "numberOfMonths");
        return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t;
      },
      _getMinMaxDate: function (t, e) {
        return this._determineDate(t, this._get(t, e + "Date"), null);
      },
      _getDaysInMonth: function (t, e) {
        return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate();
      },
      _getFirstDayOfMonth: function (t, e) {
        return new Date(t, e, 1).getDay();
      },
      _canAdjustMonth: function (t, e, i, s) {
        var n = this._getNumberOfMonths(t),
          n = this._daylightSavingAdjust(
            new Date(i, s + (e < 0 ? e : n[0] * n[1]), 1)
          );
        return (
          e < 0 &&
            n.setDate(this._getDaysInMonth(n.getFullYear(), n.getMonth())),
          this._isInRange(t, n)
        );
      },
      _isInRange: function (t, e) {
        var i = this._getMinMaxDate(t, "min"),
          s = this._getMinMaxDate(t, "max"),
          n = null,
          o = null,
          a = this._get(t, "yearRange");
        return (
          a &&
            ((t = a.split(":")),
            (a = new Date().getFullYear()),
            (n = parseInt(t[0], 10)),
            (o = parseInt(t[1], 10)),
            t[0].match(/[+\-].*/) && (n += a),
            t[1].match(/[+\-].*/) && (o += a)),
          (!i || e.getTime() >= i.getTime()) &&
            (!s || e.getTime() <= s.getTime()) &&
            (!n || e.getFullYear() >= n) &&
            (!o || e.getFullYear() <= o)
        );
      },
      _getFormatConfig: function (t) {
        var e = this._get(t, "shortYearCutoff");
        return {
          shortYearCutoff: (e =
            "string" != typeof e
              ? e
              : (new Date().getFullYear() % 100) + parseInt(e, 10)),
          dayNamesShort: this._get(t, "dayNamesShort"),
          dayNames: this._get(t, "dayNames"),
          monthNamesShort: this._get(t, "monthNamesShort"),
          monthNames: this._get(t, "monthNames"),
        };
      },
      _formatDate: function (t, e, i, s) {
        e ||
          ((t.currentDay = t.selectedDay),
          (t.currentMonth = t.selectedMonth),
          (t.currentYear = t.selectedYear));
        e = e
          ? "object" == typeof e
            ? e
            : this._daylightSavingAdjust(new Date(s, i, e))
          : this._daylightSavingAdjust(
              new Date(t.currentYear, t.currentMonth, t.currentDay)
            );
        return this.formatDate(
          this._get(t, "dateFormat"),
          e,
          this._getFormatConfig(t)
        );
      },
    }),
    (V.fn.datepicker = function (t) {
      if (!this.length) return this;
      V.datepicker.initialized ||
        (V(document).on("mousedown", V.datepicker._checkExternalClick),
        (V.datepicker.initialized = !0)),
        0 === V("#" + V.datepicker._mainDivId).length &&
          V("body").append(V.datepicker.dpDiv);
      var e = Array.prototype.slice.call(arguments, 1);
      return ("string" == typeof t &&
        ("isDisabled" === t || "getDate" === t || "widget" === t)) ||
        ("option" === t &&
          2 === arguments.length &&
          "string" == typeof arguments[1])
        ? V.datepicker["_" + t + "Datepicker"].apply(
            V.datepicker,
            [this[0]].concat(e)
          )
        : this.each(function () {
            "string" == typeof t
              ? V.datepicker["_" + t + "Datepicker"].apply(
                  V.datepicker,
                  [this].concat(e)
                )
              : V.datepicker._attachDatepicker(this, t);
          });
    }),
    (V.datepicker = new st()),
    (V.datepicker.initialized = !1),
    (V.datepicker.uuid = new Date().getTime()),
    (V.datepicker.version = "1.13.2");
  V.datepicker,
    (V.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()));
  var rt = !1;
  V(document).on("mouseup", function () {
    rt = !1;
  });
  V.widget("ui.mouse", {
    version: "1.13.2",
    options: {
      cancel: "input, textarea, button, select, option",
      distance: 1,
      delay: 0,
    },
    _mouseInit: function () {
      var e = this;
      this.element
        .on("mousedown." + this.widgetName, function (t) {
          return e._mouseDown(t);
        })
        .on("click." + this.widgetName, function (t) {
          if (!0 === V.data(t.target, e.widgetName + ".preventClickEvent"))
            return (
              V.removeData(t.target, e.widgetName + ".preventClickEvent"),
              t.stopImmediatePropagation(),
              !1
            );
        }),
        (this.started = !1);
    },
    _mouseDestroy: function () {
      this.element.off("." + this.widgetName),
        this._mouseMoveDelegate &&
          this.document
            .off("mousemove." + this.widgetName, this._mouseMoveDelegate)
            .off("mouseup." + this.widgetName, this._mouseUpDelegate);
    },
    _mouseDown: function (t) {
      if (!rt) {
        (this._mouseMoved = !1),
          this._mouseStarted && this._mouseUp(t),
          (this._mouseDownEvent = t);
        var e = this,
          i = 1 === t.which,
          s =
            !("string" != typeof this.options.cancel || !t.target.nodeName) &&
            V(t.target).closest(this.options.cancel).length;
        return i && !s && this._mouseCapture(t)
          ? ((this.mouseDelayMet = !this.options.delay),
            this.mouseDelayMet ||
              (this._mouseDelayTimer = setTimeout(function () {
                e.mouseDelayMet = !0;
              }, this.options.delay)),
            this._mouseDistanceMet(t) &&
            this._mouseDelayMet(t) &&
            ((this._mouseStarted = !1 !== this._mouseStart(t)),
            !this._mouseStarted)
              ? (t.preventDefault(), !0)
              : (!0 ===
                  V.data(t.target, this.widgetName + ".preventClickEvent") &&
                  V.removeData(
                    t.target,
                    this.widgetName + ".preventClickEvent"
                  ),
                (this._mouseMoveDelegate = function (t) {
                  return e._mouseMove(t);
                }),
                (this._mouseUpDelegate = function (t) {
                  return e._mouseUp(t);
                }),
                this.document
                  .on("mousemove." + this.widgetName, this._mouseMoveDelegate)
                  .on("mouseup." + this.widgetName, this._mouseUpDelegate),
                t.preventDefault(),
                (rt = !0)))
          : !0;
      }
    },
    _mouseMove: function (t) {
      if (this._mouseMoved) {
        if (
          V.ui.ie &&
          (!document.documentMode || document.documentMode < 9) &&
          !t.button
        )
          return this._mouseUp(t);
        if (!t.which)
          if (
            t.originalEvent.altKey ||
            t.originalEvent.ctrlKey ||
            t.originalEvent.metaKey ||
            t.originalEvent.shiftKey
          )
            this.ignoreMissingWhich = !0;
          else if (!this.ignoreMissingWhich) return this._mouseUp(t);
      }
      return (
        (t.which || t.button) && (this._mouseMoved = !0),
        this._mouseStarted
          ? (this._mouseDrag(t), t.preventDefault())
          : (this._mouseDistanceMet(t) &&
              this._mouseDelayMet(t) &&
              ((this._mouseStarted =
                !1 !== this._mouseStart(this._mouseDownEvent, t)),
              this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)),
            !this._mouseStarted)
      );
    },
    _mouseUp: function (t) {
      this.document
        .off("mousemove." + this.widgetName, this._mouseMoveDelegate)
        .off("mouseup." + this.widgetName, this._mouseUpDelegate),
        this._mouseStarted &&
          ((this._mouseStarted = !1),
          t.target === this._mouseDownEvent.target &&
            V.data(t.target, this.widgetName + ".preventClickEvent", !0),
          this._mouseStop(t)),
        this._mouseDelayTimer &&
          (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer),
        (this.ignoreMissingWhich = !1),
        (rt = !1),
        t.preventDefault();
    },
    _mouseDistanceMet: function (t) {
      return (
        Math.max(
          Math.abs(this._mouseDownEvent.pageX - t.pageX),
          Math.abs(this._mouseDownEvent.pageY - t.pageY)
        ) >= this.options.distance
      );
    },
    _mouseDelayMet: function () {
      return this.mouseDelayMet;
    },
    _mouseStart: function () {},
    _mouseDrag: function () {},
    _mouseStop: function () {},
    _mouseCapture: function () {
      return !0;
    },
  }),
    (V.ui.plugin = {
      add: function (t, e, i) {
        var s,
          n = V.ui[t].prototype;
        for (s in i)
          (n.plugins[s] = n.plugins[s] || []), n.plugins[s].push([e, i[s]]);
      },
      call: function (t, e, i, s) {
        var n,
          o = t.plugins[e];
        if (
          o &&
          (s ||
            (t.element[0].parentNode &&
              11 !== t.element[0].parentNode.nodeType))
        )
          for (n = 0; n < o.length; n++)
            t.options[o[n][0]] && o[n][1].apply(t.element, i);
      },
    }),
    (V.ui.safeBlur = function (t) {
      t && "body" !== t.nodeName.toLowerCase() && V(t).trigger("blur");
    });
  V.widget("ui.draggable", V.ui.mouse, {
    version: "1.13.2",
    widgetEventPrefix: "drag",
    options: {
      addClasses: !0,
      appendTo: "parent",
      axis: !1,
      connectToSortable: !1,
      containment: !1,
      cursor: "auto",
      cursorAt: !1,
      grid: !1,
      handle: !1,
      helper: "original",
      iframeFix: !1,
      opacity: !1,
      refreshPositions: !1,
      revert: !1,
      revertDuration: 500,
      scope: "default",
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      snap: !1,
      snapMode: "both",
      snapTolerance: 20,
      stack: !1,
      zIndex: !1,
      drag: null,
      start: null,
      stop: null,
    },
    _create: function () {
      "original" === this.options.helper && this._setPositionRelative(),
        this.options.addClasses && this._addClass("ui-draggable"),
        this._setHandleClassName(),
        this._mouseInit();
    },
    _setOption: function (t, e) {
      this._super(t, e),
        "handle" === t &&
          (this._removeHandleClassName(), this._setHandleClassName());
    },
    _destroy: function () {
      (this.helper || this.element).is(".ui-draggable-dragging")
        ? (this.destroyOnClear = !0)
        : (this._removeHandleClassName(), this._mouseDestroy());
    },
    _mouseCapture: function (t) {
      var e = this.options;
      return (
        !(
          this.helper ||
          e.disabled ||
          0 < V(t.target).closest(".ui-resizable-handle").length
        ) &&
        ((this.handle = this._getHandle(t)),
        !!this.handle &&
          (this._blurActiveElement(t),
          this._blockFrames(!0 === e.iframeFix ? "iframe" : e.iframeFix),
          !0))
      );
    },
    _blockFrames: function (t) {
      this.iframeBlocks = this.document.find(t).map(function () {
        var t = V(this);
        return V("<div>")
          .css("position", "absolute")
          .appendTo(t.parent())
          .outerWidth(t.outerWidth())
          .outerHeight(t.outerHeight())
          .offset(t.offset())[0];
      });
    },
    _unblockFrames: function () {
      this.iframeBlocks &&
        (this.iframeBlocks.remove(), delete this.iframeBlocks);
    },
    _blurActiveElement: function (t) {
      var e = V.ui.safeActiveElement(this.document[0]);
      V(t.target).closest(e).length || V.ui.safeBlur(e);
    },
    _mouseStart: function (t) {
      var e = this.options;
      return (
        (this.helper = this._createHelper(t)),
        this._addClass(this.helper, "ui-draggable-dragging"),
        this._cacheHelperProportions(),
        V.ui.ddmanager && (V.ui.ddmanager.current = this),
        this._cacheMargins(),
        (this.cssPosition = this.helper.css("position")),
        (this.scrollParent = this.helper.scrollParent(!0)),
        (this.offsetParent = this.helper.offsetParent()),
        (this.hasFixedAncestor =
          0 <
          this.helper.parents().filter(function () {
            return "fixed" === V(this).css("position");
          }).length),
        (this.positionAbs = this.element.offset()),
        this._refreshOffsets(t),
        (this.originalPosition = this.position = this._generatePosition(t, !1)),
        (this.originalPageX = t.pageX),
        (this.originalPageY = t.pageY),
        e.cursorAt && this._adjustOffsetFromHelper(e.cursorAt),
        this._setContainment(),
        !1 === this._trigger("start", t)
          ? (this._clear(), !1)
          : (this._cacheHelperProportions(),
            V.ui.ddmanager &&
              !e.dropBehaviour &&
              V.ui.ddmanager.prepareOffsets(this, t),
            this._mouseDrag(t, !0),
            V.ui.ddmanager && V.ui.ddmanager.dragStart(this, t),
            !0)
      );
    },
    _refreshOffsets: function (t) {
      (this.offset = {
        top: this.positionAbs.top - this.margins.top,
        left: this.positionAbs.left - this.margins.left,
        scroll: !1,
        parent: this._getParentOffset(),
        relative: this._getRelativeOffset(),
      }),
        (this.offset.click = {
          left: t.pageX - this.offset.left,
          top: t.pageY - this.offset.top,
        });
    },
    _mouseDrag: function (t, e) {
      if (
        (this.hasFixedAncestor &&
          (this.offset.parent = this._getParentOffset()),
        (this.position = this._generatePosition(t, !0)),
        (this.positionAbs = this._convertPositionTo("absolute")),
        !e)
      ) {
        e = this._uiHash();
        if (!1 === this._trigger("drag", t, e))
          return this._mouseUp(new V.Event("mouseup", t)), !1;
        this.position = e.position;
      }
      return (
        (this.helper[0].style.left = this.position.left + "px"),
        (this.helper[0].style.top = this.position.top + "px"),
        V.ui.ddmanager && V.ui.ddmanager.drag(this, t),
        !1
      );
    },
    _mouseStop: function (t) {
      var e = this,
        i = !1;
      return (
        V.ui.ddmanager &&
          !this.options.dropBehaviour &&
          (i = V.ui.ddmanager.drop(this, t)),
        this.dropped && ((i = this.dropped), (this.dropped = !1)),
        ("invalid" === this.options.revert && !i) ||
        ("valid" === this.options.revert && i) ||
        !0 === this.options.revert ||
        ("function" == typeof this.options.revert &&
          this.options.revert.call(this.element, i))
          ? V(this.helper).animate(
              this.originalPosition,
              parseInt(this.options.revertDuration, 10),
              function () {
                !1 !== e._trigger("stop", t) && e._clear();
              }
            )
          : !1 !== this._trigger("stop", t) && this._clear(),
        !1
      );
    },
    _mouseUp: function (t) {
      return (
        this._unblockFrames(),
        V.ui.ddmanager && V.ui.ddmanager.dragStop(this, t),
        this.handleElement.is(t.target) && this.element.trigger("focus"),
        V.ui.mouse.prototype._mouseUp.call(this, t)
      );
    },
    cancel: function () {
      return (
        this.helper.is(".ui-draggable-dragging")
          ? this._mouseUp(new V.Event("mouseup", { target: this.element[0] }))
          : this._clear(),
        this
      );
    },
    _getHandle: function (t) {
      return (
        !this.options.handle ||
        !!V(t.target).closest(this.element.find(this.options.handle)).length
      );
    },
    _setHandleClassName: function () {
      (this.handleElement = this.options.handle
        ? this.element.find(this.options.handle)
        : this.element),
        this._addClass(this.handleElement, "ui-draggable-handle");
    },
    _removeHandleClassName: function () {
      this._removeClass(this.handleElement, "ui-draggable-handle");
    },
    _createHelper: function (t) {
      var e = this.options,
        i = "function" == typeof e.helper,
        t = i
          ? V(e.helper.apply(this.element[0], [t]))
          : "clone" === e.helper
          ? this.element.clone().removeAttr("id")
          : this.element;
      return (
        t.parents("body").length ||
          t.appendTo(
            "parent" === e.appendTo ? this.element[0].parentNode : e.appendTo
          ),
        i && t[0] === this.element[0] && this._setPositionRelative(),
        t[0] === this.element[0] ||
          /(fixed|absolute)/.test(t.css("position")) ||
          t.css("position", "absolute"),
        t
      );
    },
    _setPositionRelative: function () {
      /^(?:r|a|f)/.test(this.element.css("position")) ||
        (this.element[0].style.position = "relative");
    },
    _adjustOffsetFromHelper: function (t) {
      "string" == typeof t && (t = t.split(" ")),
        "left" in
          (t = Array.isArray(t) ? { left: +t[0], top: +t[1] || 0 } : t) &&
          (this.offset.click.left = t.left + this.margins.left),
        "right" in t &&
          (this.offset.click.left =
            this.helperProportions.width - t.right + this.margins.left),
        "top" in t && (this.offset.click.top = t.top + this.margins.top),
        "bottom" in t &&
          (this.offset.click.top =
            this.helperProportions.height - t.bottom + this.margins.top);
    },
    _isRootNode: function (t) {
      return /(html|body)/i.test(t.tagName) || t === this.document[0];
    },
    _getParentOffset: function () {
      var t = this.offsetParent.offset(),
        e = this.document[0];
      return (
        "absolute" === this.cssPosition &&
          this.scrollParent[0] !== e &&
          V.contains(this.scrollParent[0], this.offsetParent[0]) &&
          ((t.left += this.scrollParent.scrollLeft()),
          (t.top += this.scrollParent.scrollTop())),
        {
          top:
            (t = this._isRootNode(this.offsetParent[0])
              ? { top: 0, left: 0 }
              : t).top +
            (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
          left:
            t.left +
            (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0),
        }
      );
    },
    _getRelativeOffset: function () {
      if ("relative" !== this.cssPosition) return { top: 0, left: 0 };
      var t = this.element.position(),
        e = this._isRootNode(this.scrollParent[0]);
      return {
        top:
          t.top -
          (parseInt(this.helper.css("top"), 10) || 0) +
          (e ? 0 : this.scrollParent.scrollTop()),
        left:
          t.left -
          (parseInt(this.helper.css("left"), 10) || 0) +
          (e ? 0 : this.scrollParent.scrollLeft()),
      };
    },
    _cacheMargins: function () {
      this.margins = {
        left: parseInt(this.element.css("marginLeft"), 10) || 0,
        top: parseInt(this.element.css("marginTop"), 10) || 0,
        right: parseInt(this.element.css("marginRight"), 10) || 0,
        bottom: parseInt(this.element.css("marginBottom"), 10) || 0,
      };
    },
    _cacheHelperProportions: function () {
      this.helperProportions = {
        width: this.helper.outerWidth(),
        height: this.helper.outerHeight(),
      };
    },
    _setContainment: function () {
      var t,
        e,
        i,
        s = this.options,
        n = this.document[0];
      (this.relativeContainer = null),
        s.containment
          ? "window" !== s.containment
            ? "document" !== s.containment
              ? s.containment.constructor !== Array
                ? ("parent" === s.containment &&
                    (s.containment = this.helper[0].parentNode),
                  (i = (e = V(s.containment))[0]) &&
                    ((t = /(scroll|auto)/.test(e.css("overflow"))),
                    (this.containment = [
                      (parseInt(e.css("borderLeftWidth"), 10) || 0) +
                        (parseInt(e.css("paddingLeft"), 10) || 0),
                      (parseInt(e.css("borderTopWidth"), 10) || 0) +
                        (parseInt(e.css("paddingTop"), 10) || 0),
                      (t
                        ? Math.max(i.scrollWidth, i.offsetWidth)
                        : i.offsetWidth) -
                        (parseInt(e.css("borderRightWidth"), 10) || 0) -
                        (parseInt(e.css("paddingRight"), 10) || 0) -
                        this.helperProportions.width -
                        this.margins.left -
                        this.margins.right,
                      (t
                        ? Math.max(i.scrollHeight, i.offsetHeight)
                        : i.offsetHeight) -
                        (parseInt(e.css("borderBottomWidth"), 10) || 0) -
                        (parseInt(e.css("paddingBottom"), 10) || 0) -
                        this.helperProportions.height -
                        this.margins.top -
                        this.margins.bottom,
                    ]),
                    (this.relativeContainer = e)))
                : (this.containment = s.containment)
              : (this.containment = [
                  0,
                  0,
                  V(n).width() -
                    this.helperProportions.width -
                    this.margins.left,
                  (V(n).height() || n.body.parentNode.scrollHeight) -
                    this.helperProportions.height -
                    this.margins.top,
                ])
            : (this.containment = [
                V(window).scrollLeft() -
                  this.offset.relative.left -
                  this.offset.parent.left,
                V(window).scrollTop() -
                  this.offset.relative.top -
                  this.offset.parent.top,
                V(window).scrollLeft() +
                  V(window).width() -
                  this.helperProportions.width -
                  this.margins.left,
                V(window).scrollTop() +
                  (V(window).height() || n.body.parentNode.scrollHeight) -
                  this.helperProportions.height -
                  this.margins.top,
              ])
          : (this.containment = null);
    },
    _convertPositionTo: function (t, e) {
      e = e || this.position;
      var i = "absolute" === t ? 1 : -1,
        t = this._isRootNode(this.scrollParent[0]);
      return {
        top:
          e.top +
          this.offset.relative.top * i +
          this.offset.parent.top * i -
          ("fixed" === this.cssPosition
            ? -this.offset.scroll.top
            : t
            ? 0
            : this.offset.scroll.top) *
            i,
        left:
          e.left +
          this.offset.relative.left * i +
          this.offset.parent.left * i -
          ("fixed" === this.cssPosition
            ? -this.offset.scroll.left
            : t
            ? 0
            : this.offset.scroll.left) *
            i,
      };
    },
    _generatePosition: function (t, e) {
      var i,
        s = this.options,
        n = this._isRootNode(this.scrollParent[0]),
        o = t.pageX,
        a = t.pageY;
      return (
        (n && this.offset.scroll) ||
          (this.offset.scroll = {
            top: this.scrollParent.scrollTop(),
            left: this.scrollParent.scrollLeft(),
          }),
        e &&
          (this.containment &&
            ((i = this.relativeContainer
              ? ((i = this.relativeContainer.offset()),
                [
                  this.containment[0] + i.left,
                  this.containment[1] + i.top,
                  this.containment[2] + i.left,
                  this.containment[3] + i.top,
                ])
              : this.containment),
            t.pageX - this.offset.click.left < i[0] &&
              (o = i[0] + this.offset.click.left),
            t.pageY - this.offset.click.top < i[1] &&
              (a = i[1] + this.offset.click.top),
            t.pageX - this.offset.click.left > i[2] &&
              (o = i[2] + this.offset.click.left),
            t.pageY - this.offset.click.top > i[3] &&
              (a = i[3] + this.offset.click.top)),
          s.grid &&
            ((t = s.grid[1]
              ? this.originalPageY +
                Math.round((a - this.originalPageY) / s.grid[1]) * s.grid[1]
              : this.originalPageY),
            (a =
              !i ||
              t - this.offset.click.top >= i[1] ||
              t - this.offset.click.top > i[3]
                ? t
                : t - this.offset.click.top >= i[1]
                ? t - s.grid[1]
                : t + s.grid[1]),
            (t = s.grid[0]
              ? this.originalPageX +
                Math.round((o - this.originalPageX) / s.grid[0]) * s.grid[0]
              : this.originalPageX),
            (o =
              !i ||
              t - this.offset.click.left >= i[0] ||
              t - this.offset.click.left > i[2]
                ? t
                : t - this.offset.click.left >= i[0]
                ? t - s.grid[0]
                : t + s.grid[0])),
          "y" === s.axis && (o = this.originalPageX),
          "x" === s.axis && (a = this.originalPageY)),
        {
          top:
            a -
            this.offset.click.top -
            this.offset.relative.top -
            this.offset.parent.top +
            ("fixed" === this.cssPosition
              ? -this.offset.scroll.top
              : n
              ? 0
              : this.offset.scroll.top),
          left:
            o -
            this.offset.click.left -
            this.offset.relative.left -
            this.offset.parent.left +
            ("fixed" === this.cssPosition
              ? -this.offset.scroll.left
              : n
              ? 0
              : this.offset.scroll.left),
        }
      );
    },
    _clear: function () {
      this._removeClass(this.helper, "ui-draggable-dragging"),
        this.helper[0] === this.element[0] ||
          this.cancelHelperRemoval ||
          this.helper.remove(),
        (this.helper = null),
        (this.cancelHelperRemoval = !1),
        this.destroyOnClear && this.destroy();
    },
    _trigger: function (t, e, i) {
      return (
        (i = i || this._uiHash()),
        V.ui.plugin.call(this, t, [e, i, this], !0),
        /^(drag|start|stop)/.test(t) &&
          ((this.positionAbs = this._convertPositionTo("absolute")),
          (i.offset = this.positionAbs)),
        V.Widget.prototype._trigger.call(this, t, e, i)
      );
    },
    plugins: {},
    _uiHash: function () {
      return {
        helper: this.helper,
        position: this.position,
        originalPosition: this.originalPosition,
        offset: this.positionAbs,
      };
    },
  }),
    V.ui.plugin.add("draggable", "connectToSortable", {
      start: function (e, t, i) {
        var s = V.extend({}, t, { item: i.element });
        (i.sortables = []),
          V(i.options.connectToSortable).each(function () {
            var t = V(this).sortable("instance");
            t &&
              !t.options.disabled &&
              (i.sortables.push(t),
              t.refreshPositions(),
              t._trigger("activate", e, s));
          });
      },
      stop: function (e, t, i) {
        var s = V.extend({}, t, { item: i.element });
        (i.cancelHelperRemoval = !1),
          V.each(i.sortables, function () {
            var t = this;
            t.isOver
              ? ((t.isOver = 0),
                (i.cancelHelperRemoval = !0),
                (t.cancelHelperRemoval = !1),
                (t._storedCSS = {
                  position: t.placeholder.css("position"),
                  top: t.placeholder.css("top"),
                  left: t.placeholder.css("left"),
                }),
                t._mouseStop(e),
                (t.options.helper = t.options._helper))
              : ((t.cancelHelperRemoval = !0), t._trigger("deactivate", e, s));
          });
      },
      drag: function (i, s, n) {
        V.each(n.sortables, function () {
          var t = !1,
            e = this;
          (e.positionAbs = n.positionAbs),
            (e.helperProportions = n.helperProportions),
            (e.offset.click = n.offset.click),
            e._intersectsWith(e.containerCache) &&
              ((t = !0),
              V.each(n.sortables, function () {
                return (
                  (this.positionAbs = n.positionAbs),
                  (this.helperProportions = n.helperProportions),
                  (this.offset.click = n.offset.click),
                  (t =
                    this !== e &&
                    this._intersectsWith(this.containerCache) &&
                    V.contains(e.element[0], this.element[0])
                      ? !1
                      : t)
                );
              })),
            t
              ? (e.isOver ||
                  ((e.isOver = 1),
                  (n._parent = s.helper.parent()),
                  (e.currentItem = s.helper
                    .appendTo(e.element)
                    .data("ui-sortable-item", !0)),
                  (e.options._helper = e.options.helper),
                  (e.options.helper = function () {
                    return s.helper[0];
                  }),
                  (i.target = e.currentItem[0]),
                  e._mouseCapture(i, !0),
                  e._mouseStart(i, !0, !0),
                  (e.offset.click.top = n.offset.click.top),
                  (e.offset.click.left = n.offset.click.left),
                  (e.offset.parent.left -=
                    n.offset.parent.left - e.offset.parent.left),
                  (e.offset.parent.top -=
                    n.offset.parent.top - e.offset.parent.top),
                  n._trigger("toSortable", i),
                  (n.dropped = e.element),
                  V.each(n.sortables, function () {
                    this.refreshPositions();
                  }),
                  (n.currentItem = n.element),
                  (e.fromOutside = n)),
                e.currentItem && (e._mouseDrag(i), (s.position = e.position)))
              : e.isOver &&
                ((e.isOver = 0),
                (e.cancelHelperRemoval = !0),
                (e.options._revert = e.options.revert),
                (e.options.revert = !1),
                e._trigger("out", i, e._uiHash(e)),
                e._mouseStop(i, !0),
                (e.options.revert = e.options._revert),
                (e.options.helper = e.options._helper),
                e.placeholder && e.placeholder.remove(),
                s.helper.appendTo(n._parent),
                n._refreshOffsets(i),
                (s.position = n._generatePosition(i, !0)),
                n._trigger("fromSortable", i),
                (n.dropped = !1),
                V.each(n.sortables, function () {
                  this.refreshPositions();
                }));
        });
      },
    }),
    V.ui.plugin.add("draggable", "cursor", {
      start: function (t, e, i) {
        var s = V("body"),
          i = i.options;
        s.css("cursor") && (i._cursor = s.css("cursor")),
          s.css("cursor", i.cursor);
      },
      stop: function (t, e, i) {
        i = i.options;
        i._cursor && V("body").css("cursor", i._cursor);
      },
    }),
    V.ui.plugin.add("draggable", "opacity", {
      start: function (t, e, i) {
        (e = V(e.helper)), (i = i.options);
        e.css("opacity") && (i._opacity = e.css("opacity")),
          e.css("opacity", i.opacity);
      },
      stop: function (t, e, i) {
        i = i.options;
        i._opacity && V(e.helper).css("opacity", i._opacity);
      },
    }),
    V.ui.plugin.add("draggable", "scroll", {
      start: function (t, e, i) {
        i.scrollParentNotHidden ||
          (i.scrollParentNotHidden = i.helper.scrollParent(!1)),
          i.scrollParentNotHidden[0] !== i.document[0] &&
            "HTML" !== i.scrollParentNotHidden[0].tagName &&
            (i.overflowOffset = i.scrollParentNotHidden.offset());
      },
      drag: function (t, e, i) {
        var s = i.options,
          n = !1,
          o = i.scrollParentNotHidden[0],
          a = i.document[0];
        o !== a && "HTML" !== o.tagName
          ? ((s.axis && "x" === s.axis) ||
              (i.overflowOffset.top + o.offsetHeight - t.pageY <
              s.scrollSensitivity
                ? (o.scrollTop = n = o.scrollTop + s.scrollSpeed)
                : t.pageY - i.overflowOffset.top < s.scrollSensitivity &&
                  (o.scrollTop = n = o.scrollTop - s.scrollSpeed)),
            (s.axis && "y" === s.axis) ||
              (i.overflowOffset.left + o.offsetWidth - t.pageX <
              s.scrollSensitivity
                ? (o.scrollLeft = n = o.scrollLeft + s.scrollSpeed)
                : t.pageX - i.overflowOffset.left < s.scrollSensitivity &&
                  (o.scrollLeft = n = o.scrollLeft - s.scrollSpeed)))
          : ((s.axis && "x" === s.axis) ||
              (t.pageY - V(a).scrollTop() < s.scrollSensitivity
                ? (n = V(a).scrollTop(V(a).scrollTop() - s.scrollSpeed))
                : V(window).height() - (t.pageY - V(a).scrollTop()) <
                    s.scrollSensitivity &&
                  (n = V(a).scrollTop(V(a).scrollTop() + s.scrollSpeed))),
            (s.axis && "y" === s.axis) ||
              (t.pageX - V(a).scrollLeft() < s.scrollSensitivity
                ? (n = V(a).scrollLeft(V(a).scrollLeft() - s.scrollSpeed))
                : V(window).width() - (t.pageX - V(a).scrollLeft()) <
                    s.scrollSensitivity &&
                  (n = V(a).scrollLeft(V(a).scrollLeft() + s.scrollSpeed)))),
          !1 !== n &&
            V.ui.ddmanager &&
            !s.dropBehaviour &&
            V.ui.ddmanager.prepareOffsets(i, t);
      },
    }),
    V.ui.plugin.add("draggable", "snap", {
      start: function (t, e, i) {
        var s = i.options;
        (i.snapElements = []),
          V(
            s.snap.constructor !== String
              ? s.snap.items || ":data(ui-draggable)"
              : s.snap
          ).each(function () {
            var t = V(this),
              e = t.offset();
            this !== i.element[0] &&
              i.snapElements.push({
                item: this,
                width: t.outerWidth(),
                height: t.outerHeight(),
                top: e.top,
                left: e.left,
              });
          });
      },
      drag: function (t, e, i) {
        for (
          var s,
            n,
            o,
            a,
            r,
            l,
            h,
            c,
            u,
            d = i.options,
            p = d.snapTolerance,
            f = e.offset.left,
            g = f + i.helperProportions.width,
            m = e.offset.top,
            _ = m + i.helperProportions.height,
            v = i.snapElements.length - 1;
          0 <= v;
          v--
        )
          (l =
            (r = i.snapElements[v].left - i.margins.left) +
            i.snapElements[v].width),
            (c =
              (h = i.snapElements[v].top - i.margins.top) +
              i.snapElements[v].height),
            g < r - p ||
            l + p < f ||
            _ < h - p ||
            c + p < m ||
            !V.contains(
              i.snapElements[v].item.ownerDocument,
              i.snapElements[v].item
            )
              ? (i.snapElements[v].snapping &&
                  i.options.snap.release &&
                  i.options.snap.release.call(
                    i.element,
                    t,
                    V.extend(i._uiHash(), { snapItem: i.snapElements[v].item })
                  ),
                (i.snapElements[v].snapping = !1))
              : ("inner" !== d.snapMode &&
                  ((s = Math.abs(h - _) <= p),
                  (n = Math.abs(c - m) <= p),
                  (o = Math.abs(r - g) <= p),
                  (a = Math.abs(l - f) <= p),
                  s &&
                    (e.position.top = i._convertPositionTo("relative", {
                      top: h - i.helperProportions.height,
                      left: 0,
                    }).top),
                  n &&
                    (e.position.top = i._convertPositionTo("relative", {
                      top: c,
                      left: 0,
                    }).top),
                  o &&
                    (e.position.left = i._convertPositionTo("relative", {
                      top: 0,
                      left: r - i.helperProportions.width,
                    }).left),
                  a &&
                    (e.position.left = i._convertPositionTo("relative", {
                      top: 0,
                      left: l,
                    }).left)),
                (u = s || n || o || a),
                "outer" !== d.snapMode &&
                  ((s = Math.abs(h - m) <= p),
                  (n = Math.abs(c - _) <= p),
                  (o = Math.abs(r - f) <= p),
                  (a = Math.abs(l - g) <= p),
                  s &&
                    (e.position.top = i._convertPositionTo("relative", {
                      top: h,
                      left: 0,
                    }).top),
                  n &&
                    (e.position.top = i._convertPositionTo("relative", {
                      top: c - i.helperProportions.height,
                      left: 0,
                    }).top),
                  o &&
                    (e.position.left = i._convertPositionTo("relative", {
                      top: 0,
                      left: r,
                    }).left),
                  a &&
                    (e.position.left = i._convertPositionTo("relative", {
                      top: 0,
                      left: l - i.helperProportions.width,
                    }).left)),
                !i.snapElements[v].snapping &&
                  (s || n || o || a || u) &&
                  i.options.snap.snap &&
                  i.options.snap.snap.call(
                    i.element,
                    t,
                    V.extend(i._uiHash(), { snapItem: i.snapElements[v].item })
                  ),
                (i.snapElements[v].snapping = s || n || o || a || u));
      },
    }),
    V.ui.plugin.add("draggable", "stack", {
      start: function (t, e, i) {
        var s,
          i = i.options,
          i = V.makeArray(V(i.stack)).sort(function (t, e) {
            return (
              (parseInt(V(t).css("zIndex"), 10) || 0) -
              (parseInt(V(e).css("zIndex"), 10) || 0)
            );
          });
        i.length &&
          ((s = parseInt(V(i[0]).css("zIndex"), 10) || 0),
          V(i).each(function (t) {
            V(this).css("zIndex", s + t);
          }),
          this.css("zIndex", s + i.length));
      },
    }),
    V.ui.plugin.add("draggable", "zIndex", {
      start: function (t, e, i) {
        (e = V(e.helper)), (i = i.options);
        e.css("zIndex") && (i._zIndex = e.css("zIndex")),
          e.css("zIndex", i.zIndex);
      },
      stop: function (t, e, i) {
        i = i.options;
        i._zIndex && V(e.helper).css("zIndex", i._zIndex);
      },
    });
  V.ui.draggable;
  V.widget("ui.resizable", V.ui.mouse, {
    version: "1.13.2",
    widgetEventPrefix: "resize",
    options: {
      alsoResize: !1,
      animate: !1,
      animateDuration: "slow",
      animateEasing: "swing",
      aspectRatio: !1,
      autoHide: !1,
      classes: { "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se" },
      containment: !1,
      ghost: !1,
      grid: !1,
      handles: "e,s,se",
      helper: !1,
      maxHeight: null,
      maxWidth: null,
      minHeight: 10,
      minWidth: 10,
      zIndex: 90,
      resize: null,
      start: null,
      stop: null,
    },
    _num: function (t) {
      return parseFloat(t) || 0;
    },
    _isNumber: function (t) {
      return !isNaN(parseFloat(t));
    },
    _hasScroll: function (t, e) {
      if ("hidden" === V(t).css("overflow")) return !1;
      var i = e && "left" === e ? "scrollLeft" : "scrollTop",
        e = !1;
      if (0 < t[i]) return !0;
      try {
        (t[i] = 1), (e = 0 < t[i]), (t[i] = 0);
      } catch (t) {}
      return e;
    },
    _create: function () {
      var t,
        e = this.options,
        i = this;
      this._addClass("ui-resizable"),
        V.extend(this, {
          _aspectRatio: !!e.aspectRatio,
          aspectRatio: e.aspectRatio,
          originalElement: this.element,
          _proportionallyResizeElements: [],
          _helper:
            e.helper || e.ghost || e.animate
              ? e.helper || "ui-resizable-helper"
              : null,
        }),
        this.element[0].nodeName.match(
          /^(canvas|textarea|input|select|button|img)$/i
        ) &&
          (this.element.wrap(
            V("<div class='ui-wrapper'></div>").css({
              overflow: "hidden",
              position: this.element.css("position"),
              width: this.element.outerWidth(),
              height: this.element.outerHeight(),
              top: this.element.css("top"),
              left: this.element.css("left"),
            })
          ),
          (this.element = this.element
            .parent()
            .data("ui-resizable", this.element.resizable("instance"))),
          (this.elementIsWrapper = !0),
          (t = {
            marginTop: this.originalElement.css("marginTop"),
            marginRight: this.originalElement.css("marginRight"),
            marginBottom: this.originalElement.css("marginBottom"),
            marginLeft: this.originalElement.css("marginLeft"),
          }),
          this.element.css(t),
          this.originalElement.css("margin", 0),
          (this.originalResizeStyle = this.originalElement.css("resize")),
          this.originalElement.css("resize", "none"),
          this._proportionallyResizeElements.push(
            this.originalElement.css({
              position: "static",
              zoom: 1,
              display: "block",
            })
          ),
          this.originalElement.css(t),
          this._proportionallyResize()),
        this._setupHandles(),
        e.autoHide &&
          V(this.element)
            .on("mouseenter", function () {
              e.disabled ||
                (i._removeClass("ui-resizable-autohide"), i._handles.show());
            })
            .on("mouseleave", function () {
              e.disabled ||
                i.resizing ||
                (i._addClass("ui-resizable-autohide"), i._handles.hide());
            }),
        this._mouseInit();
    },
    _destroy: function () {
      this._mouseDestroy(), this._addedHandles.remove();
      function t(t) {
        V(t)
          .removeData("resizable")
          .removeData("ui-resizable")
          .off(".resizable");
      }
      var e;
      return (
        this.elementIsWrapper &&
          (t(this.element),
          (e = this.element),
          this.originalElement
            .css({
              position: e.css("position"),
              width: e.outerWidth(),
              height: e.outerHeight(),
              top: e.css("top"),
              left: e.css("left"),
            })
            .insertAfter(e),
          e.remove()),
        this.originalElement.css("resize", this.originalResizeStyle),
        t(this.originalElement),
        this
      );
    },
    _setOption: function (t, e) {
      switch ((this._super(t, e), t)) {
        case "handles":
          this._removeHandles(), this._setupHandles();
          break;
        case "aspectRatio":
          this._aspectRatio = !!e;
      }
    },
    _setupHandles: function () {
      var t,
        e,
        i,
        s,
        n,
        o = this.options,
        a = this;
      if (
        ((this.handles =
          o.handles ||
          (V(".ui-resizable-handle", this.element).length
            ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw",
              }
            : "e,s,se")),
        (this._handles = V()),
        (this._addedHandles = V()),
        this.handles.constructor === String)
      )
        for (
          "all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"),
            i = this.handles.split(","),
            this.handles = {},
            e = 0;
          e < i.length;
          e++
        )
          (s = "ui-resizable-" + (t = String.prototype.trim.call(i[e]))),
            (n = V("<div>")),
            this._addClass(n, "ui-resizable-handle " + s),
            n.css({ zIndex: o.zIndex }),
            (this.handles[t] = ".ui-resizable-" + t),
            this.element.children(this.handles[t]).length ||
              (this.element.append(n),
              (this._addedHandles = this._addedHandles.add(n)));
      (this._renderAxis = function (t) {
        var e, i, s;
        for (e in ((t = t || this.element), this.handles))
          this.handles[e].constructor === String
            ? (this.handles[e] = this.element
                .children(this.handles[e])
                .first()
                .show())
            : (this.handles[e].jquery || this.handles[e].nodeType) &&
              ((this.handles[e] = V(this.handles[e])),
              this._on(this.handles[e], { mousedown: a._mouseDown })),
            this.elementIsWrapper &&
              this.originalElement[0].nodeName.match(
                /^(textarea|input|select|button)$/i
              ) &&
              ((i = V(this.handles[e], this.element)),
              (s = /sw|ne|nw|se|n|s/.test(e)
                ? i.outerHeight()
                : i.outerWidth()),
              (i = [
                "padding",
                /ne|nw|n/.test(e)
                  ? "Top"
                  : /se|sw|s/.test(e)
                  ? "Bottom"
                  : /^e$/.test(e)
                  ? "Right"
                  : "Left",
              ].join("")),
              t.css(i, s),
              this._proportionallyResize()),
            (this._handles = this._handles.add(this.handles[e]));
      }),
        this._renderAxis(this.element),
        (this._handles = this._handles.add(
          this.element.find(".ui-resizable-handle")
        )),
        this._handles.disableSelection(),
        this._handles.on("mouseover", function () {
          a.resizing ||
            (this.className &&
              (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),
            (a.axis = n && n[1] ? n[1] : "se"));
        }),
        o.autoHide &&
          (this._handles.hide(), this._addClass("ui-resizable-autohide"));
    },
    _removeHandles: function () {
      this._addedHandles.remove();
    },
    _mouseCapture: function (t) {
      var e,
        i,
        s = !1;
      for (e in this.handles)
        ((i = V(this.handles[e])[0]) !== t.target &&
          !V.contains(i, t.target)) ||
          (s = !0);
      return !this.options.disabled && s;
    },
    _mouseStart: function (t) {
      var e,
        i,
        s = this.options,
        n = this.element;
      return (
        (this.resizing = !0),
        this._renderProxy(),
        (e = this._num(this.helper.css("left"))),
        (i = this._num(this.helper.css("top"))),
        s.containment &&
          ((e += V(s.containment).scrollLeft() || 0),
          (i += V(s.containment).scrollTop() || 0)),
        (this.offset = this.helper.offset()),
        (this.position = { left: e, top: i }),
        (this.size = this._helper
          ? { width: this.helper.width(), height: this.helper.height() }
          : { width: n.width(), height: n.height() }),
        (this.originalSize = this._helper
          ? { width: n.outerWidth(), height: n.outerHeight() }
          : { width: n.width(), height: n.height() }),
        (this.sizeDiff = {
          width: n.outerWidth() - n.width(),
          height: n.outerHeight() - n.height(),
        }),
        (this.originalPosition = { left: e, top: i }),
        (this.originalMousePosition = { left: t.pageX, top: t.pageY }),
        (this.aspectRatio =
          "number" == typeof s.aspectRatio
            ? s.aspectRatio
            : this.originalSize.width / this.originalSize.height || 1),
        (s = V(".ui-resizable-" + this.axis).css("cursor")),
        V("body").css("cursor", "auto" === s ? this.axis + "-resize" : s),
        this._addClass("ui-resizable-resizing"),
        this._propagate("start", t),
        !0
      );
    },
    _mouseDrag: function (t) {
      var e = this.originalMousePosition,
        i = this.axis,
        s = t.pageX - e.left || 0,
        e = t.pageY - e.top || 0,
        i = this._change[i];
      return (
        this._updatePrevProperties(),
        i &&
          ((e = i.apply(this, [t, s, e])),
          this._updateVirtualBoundaries(t.shiftKey),
          (this._aspectRatio || t.shiftKey) && (e = this._updateRatio(e, t)),
          (e = this._respectSize(e, t)),
          this._updateCache(e),
          this._propagate("resize", t),
          (e = this._applyChanges()),
          !this._helper &&
            this._proportionallyResizeElements.length &&
            this._proportionallyResize(),
          V.isEmptyObject(e) ||
            (this._updatePrevProperties(),
            this._trigger("resize", t, this.ui()),
            this._applyChanges())),
        !1
      );
    },
    _mouseStop: function (t) {
      this.resizing = !1;
      var e,
        i,
        s,
        n = this.options,
        o = this;
      return (
        this._helper &&
          ((s =
            (e =
              (i = this._proportionallyResizeElements).length &&
              /textarea/i.test(i[0].nodeName)) && this._hasScroll(i[0], "left")
              ? 0
              : o.sizeDiff.height),
          (i = e ? 0 : o.sizeDiff.width),
          (e = { width: o.helper.width() - i, height: o.helper.height() - s }),
          (i =
            parseFloat(o.element.css("left")) +
              (o.position.left - o.originalPosition.left) || null),
          (s =
            parseFloat(o.element.css("top")) +
              (o.position.top - o.originalPosition.top) || null),
          n.animate || this.element.css(V.extend(e, { top: s, left: i })),
          o.helper.height(o.size.height),
          o.helper.width(o.size.width),
          this._helper && !n.animate && this._proportionallyResize()),
        V("body").css("cursor", "auto"),
        this._removeClass("ui-resizable-resizing"),
        this._propagate("stop", t),
        this._helper && this.helper.remove(),
        !1
      );
    },
    _updatePrevProperties: function () {
      (this.prevPosition = {
        top: this.position.top,
        left: this.position.left,
      }),
        (this.prevSize = { width: this.size.width, height: this.size.height });
    },
    _applyChanges: function () {
      var t = {};
      return (
        this.position.top !== this.prevPosition.top &&
          (t.top = this.position.top + "px"),
        this.position.left !== this.prevPosition.left &&
          (t.left = this.position.left + "px"),
        this.size.width !== this.prevSize.width &&
          (t.width = this.size.width + "px"),
        this.size.height !== this.prevSize.height &&
          (t.height = this.size.height + "px"),
        this.helper.css(t),
        t
      );
    },
    _updateVirtualBoundaries: function (t) {
      var e,
        i,
        s = this.options,
        n = {
          minWidth: this._isNumber(s.minWidth) ? s.minWidth : 0,
          maxWidth: this._isNumber(s.maxWidth) ? s.maxWidth : 1 / 0,
          minHeight: this._isNumber(s.minHeight) ? s.minHeight : 0,
          maxHeight: this._isNumber(s.maxHeight) ? s.maxHeight : 1 / 0,
        };
      (this._aspectRatio || t) &&
        ((e = n.minHeight * this.aspectRatio),
        (i = n.minWidth / this.aspectRatio),
        (s = n.maxHeight * this.aspectRatio),
        (t = n.maxWidth / this.aspectRatio),
        e > n.minWidth && (n.minWidth = e),
        i > n.minHeight && (n.minHeight = i),
        s < n.maxWidth && (n.maxWidth = s),
        t < n.maxHeight && (n.maxHeight = t)),
        (this._vBoundaries = n);
    },
    _updateCache: function (t) {
      (this.offset = this.helper.offset()),
        this._isNumber(t.left) && (this.position.left = t.left),
        this._isNumber(t.top) && (this.position.top = t.top),
        this._isNumber(t.height) && (this.size.height = t.height),
        this._isNumber(t.width) && (this.size.width = t.width);
    },
    _updateRatio: function (t) {
      var e = this.position,
        i = this.size,
        s = this.axis;
      return (
        this._isNumber(t.height)
          ? (t.width = t.height * this.aspectRatio)
          : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio),
        "sw" === s && ((t.left = e.left + (i.width - t.width)), (t.top = null)),
        "nw" === s &&
          ((t.top = e.top + (i.height - t.height)),
          (t.left = e.left + (i.width - t.width))),
        t
      );
    },
    _respectSize: function (t) {
      var e = this._vBoundaries,
        i = this.axis,
        s = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
        n = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
        o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
        a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
        r = this.originalPosition.left + this.originalSize.width,
        l = this.originalPosition.top + this.originalSize.height,
        h = /sw|nw|w/.test(i),
        i = /nw|ne|n/.test(i);
      return (
        o && (t.width = e.minWidth),
        a && (t.height = e.minHeight),
        s && (t.width = e.maxWidth),
        n && (t.height = e.maxHeight),
        o && h && (t.left = r - e.minWidth),
        s && h && (t.left = r - e.maxWidth),
        a && i && (t.top = l - e.minHeight),
        n && i && (t.top = l - e.maxHeight),
        t.width || t.height || t.left || !t.top
          ? t.width || t.height || t.top || !t.left || (t.left = null)
          : (t.top = null),
        t
      );
    },
    _getPaddingPlusBorderDimensions: function (t) {
      for (
        var e = 0,
          i = [],
          s = [
            t.css("borderTopWidth"),
            t.css("borderRightWidth"),
            t.css("borderBottomWidth"),
            t.css("borderLeftWidth"),
          ],
          n = [
            t.css("paddingTop"),
            t.css("paddingRight"),
            t.css("paddingBottom"),
            t.css("paddingLeft"),
          ];
        e < 4;
        e++
      )
        (i[e] = parseFloat(s[e]) || 0), (i[e] += parseFloat(n[e]) || 0);
      return { height: i[0] + i[2], width: i[1] + i[3] };
    },
    _proportionallyResize: function () {
      if (this._proportionallyResizeElements.length)
        for (
          var t, e = 0, i = this.helper || this.element;
          e < this._proportionallyResizeElements.length;
          e++
        )
          (t = this._proportionallyResizeElements[e]),
            this.outerDimensions ||
              (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)),
            t.css({
              height: i.height() - this.outerDimensions.height || 0,
              width: i.width() - this.outerDimensions.width || 0,
            });
    },
    _renderProxy: function () {
      var t = this.element,
        e = this.options;
      (this.elementOffset = t.offset()),
        this._helper
          ? ((this.helper =
              this.helper || V("<div></div>").css({ overflow: "hidden" })),
            this._addClass(this.helper, this._helper),
            this.helper.css({
              width: this.element.outerWidth(),
              height: this.element.outerHeight(),
              position: "absolute",
              left: this.elementOffset.left + "px",
              top: this.elementOffset.top + "px",
              zIndex: ++e.zIndex,
            }),
            this.helper.appendTo("body").disableSelection())
          : (this.helper = this.element);
    },
    _change: {
      e: function (t, e) {
        return { width: this.originalSize.width + e };
      },
      w: function (t, e) {
        var i = this.originalSize;
        return { left: this.originalPosition.left + e, width: i.width - e };
      },
      n: function (t, e, i) {
        var s = this.originalSize;
        return { top: this.originalPosition.top + i, height: s.height - i };
      },
      s: function (t, e, i) {
        return { height: this.originalSize.height + i };
      },
      se: function (t, e, i) {
        return V.extend(
          this._change.s.apply(this, arguments),
          this._change.e.apply(this, [t, e, i])
        );
      },
      sw: function (t, e, i) {
        return V.extend(
          this._change.s.apply(this, arguments),
          this._change.w.apply(this, [t, e, i])
        );
      },
      ne: function (t, e, i) {
        return V.extend(
          this._change.n.apply(this, arguments),
          this._change.e.apply(this, [t, e, i])
        );
      },
      nw: function (t, e, i) {
        return V.extend(
          this._change.n.apply(this, arguments),
          this._change.w.apply(this, [t, e, i])
        );
      },
    },
    _propagate: function (t, e) {
      V.ui.plugin.call(this, t, [e, this.ui()]),
        "resize" !== t && this._trigger(t, e, this.ui());
    },
    plugins: {},
    ui: function () {
      return {
        originalElement: this.originalElement,
        element: this.element,
        helper: this.helper,
        position: this.position,
        size: this.size,
        originalSize: this.originalSize,
        originalPosition: this.originalPosition,
      };
    },
  }),
    V.ui.plugin.add("resizable", "animate", {
      stop: function (e) {
        var i = V(this).resizable("instance"),
          t = i.options,
          s = i._proportionallyResizeElements,
          n = s.length && /textarea/i.test(s[0].nodeName),
          o = n && i._hasScroll(s[0], "left") ? 0 : i.sizeDiff.height,
          a = n ? 0 : i.sizeDiff.width,
          n = { width: i.size.width - a, height: i.size.height - o },
          a =
            parseFloat(i.element.css("left")) +
              (i.position.left - i.originalPosition.left) || null,
          o =
            parseFloat(i.element.css("top")) +
              (i.position.top - i.originalPosition.top) || null;
        i.element.animate(V.extend(n, o && a ? { top: o, left: a } : {}), {
          duration: t.animateDuration,
          easing: t.animateEasing,
          step: function () {
            var t = {
              width: parseFloat(i.element.css("width")),
              height: parseFloat(i.element.css("height")),
              top: parseFloat(i.element.css("top")),
              left: parseFloat(i.element.css("left")),
            };
            s && s.length && V(s[0]).css({ width: t.width, height: t.height }),
              i._updateCache(t),
              i._propagate("resize", e);
          },
        });
      },
    }),
    V.ui.plugin.add("resizable", "containment", {
      start: function () {
        var i,
          s,
          n = V(this).resizable("instance"),
          t = n.options,
          e = n.element,
          o = t.containment,
          a =
            o instanceof V
              ? o.get(0)
              : /parent/.test(o)
              ? e.parent().get(0)
              : o;
        a &&
          ((n.containerElement = V(a)),
          /document/.test(o) || o === document
            ? ((n.containerOffset = { left: 0, top: 0 }),
              (n.containerPosition = { left: 0, top: 0 }),
              (n.parentData = {
                element: V(document),
                left: 0,
                top: 0,
                width: V(document).width(),
                height:
                  V(document).height() || document.body.parentNode.scrollHeight,
              }))
            : ((i = V(a)),
              (s = []),
              V(["Top", "Right", "Left", "Bottom"]).each(function (t, e) {
                s[t] = n._num(i.css("padding" + e));
              }),
              (n.containerOffset = i.offset()),
              (n.containerPosition = i.position()),
              (n.containerSize = {
                height: i.innerHeight() - s[3],
                width: i.innerWidth() - s[1],
              }),
              (t = n.containerOffset),
              (e = n.containerSize.height),
              (o = n.containerSize.width),
              (o = n._hasScroll(a, "left") ? a.scrollWidth : o),
              (e = n._hasScroll(a) ? a.scrollHeight : e),
              (n.parentData = {
                element: a,
                left: t.left,
                top: t.top,
                width: o,
                height: e,
              })));
      },
      resize: function (t) {
        var e = V(this).resizable("instance"),
          i = e.options,
          s = e.containerOffset,
          n = e.position,
          o = e._aspectRatio || t.shiftKey,
          a = { top: 0, left: 0 },
          r = e.containerElement,
          t = !0;
        r[0] !== document && /static/.test(r.css("position")) && (a = s),
          n.left < (e._helper ? s.left : 0) &&
            ((e.size.width =
              e.size.width +
              (e._helper
                ? e.position.left - s.left
                : e.position.left - a.left)),
            o && ((e.size.height = e.size.width / e.aspectRatio), (t = !1)),
            (e.position.left = i.helper ? s.left : 0)),
          n.top < (e._helper ? s.top : 0) &&
            ((e.size.height =
              e.size.height +
              (e._helper ? e.position.top - s.top : e.position.top)),
            o && ((e.size.width = e.size.height * e.aspectRatio), (t = !1)),
            (e.position.top = e._helper ? s.top : 0)),
          (i = e.containerElement.get(0) === e.element.parent().get(0)),
          (n = /relative|absolute/.test(e.containerElement.css("position"))),
          i && n
            ? ((e.offset.left = e.parentData.left + e.position.left),
              (e.offset.top = e.parentData.top + e.position.top))
            : ((e.offset.left = e.element.offset().left),
              (e.offset.top = e.element.offset().top)),
          (n = Math.abs(
            e.sizeDiff.width +
              (e._helper ? e.offset.left - a.left : e.offset.left - s.left)
          )),
          (s = Math.abs(
            e.sizeDiff.height +
              (e._helper ? e.offset.top - a.top : e.offset.top - s.top)
          )),
          n + e.size.width >= e.parentData.width &&
            ((e.size.width = e.parentData.width - n),
            o && ((e.size.height = e.size.width / e.aspectRatio), (t = !1))),
          s + e.size.height >= e.parentData.height &&
            ((e.size.height = e.parentData.height - s),
            o && ((e.size.width = e.size.height * e.aspectRatio), (t = !1))),
          t ||
            ((e.position.left = e.prevPosition.left),
            (e.position.top = e.prevPosition.top),
            (e.size.width = e.prevSize.width),
            (e.size.height = e.prevSize.height));
      },
      stop: function () {
        var t = V(this).resizable("instance"),
          e = t.options,
          i = t.containerOffset,
          s = t.containerPosition,
          n = t.containerElement,
          o = V(t.helper),
          a = o.offset(),
          r = o.outerWidth() - t.sizeDiff.width,
          o = o.outerHeight() - t.sizeDiff.height;
        t._helper &&
          !e.animate &&
          /relative/.test(n.css("position")) &&
          V(this).css({ left: a.left - s.left - i.left, width: r, height: o }),
          t._helper &&
            !e.animate &&
            /static/.test(n.css("position")) &&
            V(this).css({
              left: a.left - s.left - i.left,
              width: r,
              height: o,
            });
      },
    }),
    V.ui.plugin.add("resizable", "alsoResize", {
      start: function () {
        var t = V(this).resizable("instance").options;
        V(t.alsoResize).each(function () {
          var t = V(this);
          t.data("ui-resizable-alsoresize", {
            width: parseFloat(t.width()),
            height: parseFloat(t.height()),
            left: parseFloat(t.css("left")),
            top: parseFloat(t.css("top")),
          });
        });
      },
      resize: function (t, i) {
        var e = V(this).resizable("instance"),
          s = e.options,
          n = e.originalSize,
          o = e.originalPosition,
          a = {
            height: e.size.height - n.height || 0,
            width: e.size.width - n.width || 0,
            top: e.position.top - o.top || 0,
            left: e.position.left - o.left || 0,
          };
        V(s.alsoResize).each(function () {
          var t = V(this),
            s = V(this).data("ui-resizable-alsoresize"),
            n = {},
            e = t.parents(i.originalElement[0]).length
              ? ["width", "height"]
              : ["width", "height", "top", "left"];
          V.each(e, function (t, e) {
            var i = (s[e] || 0) + (a[e] || 0);
            i && 0 <= i && (n[e] = i || null);
          }),
            t.css(n);
        });
      },
      stop: function () {
        V(this).removeData("ui-resizable-alsoresize");
      },
    }),
    V.ui.plugin.add("resizable", "ghost", {
      start: function () {
        var t = V(this).resizable("instance"),
          e = t.size;
        (t.ghost = t.originalElement.clone()),
          t.ghost.css({
            opacity: 0.25,
            display: "block",
            position: "relative",
            height: e.height,
            width: e.width,
            margin: 0,
            left: 0,
            top: 0,
          }),
          t._addClass(t.ghost, "ui-resizable-ghost"),
          !1 !== V.uiBackCompat &&
            "string" == typeof t.options.ghost &&
            t.ghost.addClass(this.options.ghost),
          t.ghost.appendTo(t.helper);
      },
      resize: function () {
        var t = V(this).resizable("instance");
        t.ghost &&
          t.ghost.css({
            position: "relative",
            height: t.size.height,
            width: t.size.width,
          });
      },
      stop: function () {
        var t = V(this).resizable("instance");
        t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0));
      },
    }),
    V.ui.plugin.add("resizable", "grid", {
      resize: function () {
        var t,
          e = V(this).resizable("instance"),
          i = e.options,
          s = e.size,
          n = e.originalSize,
          o = e.originalPosition,
          a = e.axis,
          r = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid,
          l = r[0] || 1,
          h = r[1] || 1,
          c = Math.round((s.width - n.width) / l) * l,
          u = Math.round((s.height - n.height) / h) * h,
          d = n.width + c,
          p = n.height + u,
          f = i.maxWidth && i.maxWidth < d,
          g = i.maxHeight && i.maxHeight < p,
          m = i.minWidth && i.minWidth > d,
          s = i.minHeight && i.minHeight > p;
        (i.grid = r),
          m && (d += l),
          s && (p += h),
          f && (d -= l),
          g && (p -= h),
          /^(se|s|e)$/.test(a)
            ? ((e.size.width = d), (e.size.height = p))
            : /^(ne)$/.test(a)
            ? ((e.size.width = d),
              (e.size.height = p),
              (e.position.top = o.top - u))
            : /^(sw)$/.test(a)
            ? ((e.size.width = d),
              (e.size.height = p),
              (e.position.left = o.left - c))
            : ((p - h <= 0 || d - l <= 0) &&
                (t = e._getPaddingPlusBorderDimensions(this)),
              0 < p - h
                ? ((e.size.height = p), (e.position.top = o.top - u))
                : ((p = h - t.height),
                  (e.size.height = p),
                  (e.position.top = o.top + n.height - p)),
              0 < d - l
                ? ((e.size.width = d), (e.position.left = o.left - c))
                : ((d = l - t.width),
                  (e.size.width = d),
                  (e.position.left = o.left + n.width - d)));
      },
    });
  V.ui.resizable;
  V.widget("ui.dialog", {
    version: "1.13.2",
    options: {
      appendTo: "body",
      autoOpen: !0,
      buttons: [],
      classes: {
        "ui-dialog": "ui-corner-all",
        "ui-dialog-titlebar": "ui-corner-all",
      },
      closeOnEscape: !0,
      closeText: "Close",
      draggable: !0,
      hide: null,
      height: "auto",
      maxHeight: null,
      maxWidth: null,
      minHeight: 150,
      minWidth: 150,
      modal: !1,
      position: {
        my: "center",
        at: "center",
        of: window,
        collision: "fit",
        using: function (t) {
          var e = V(this).css(t).offset().top;
          e < 0 && V(this).css("top", t.top - e);
        },
      },
      resizable: !0,
      show: null,
      title: null,
      width: 300,
      beforeClose: null,
      close: null,
      drag: null,
      dragStart: null,
      dragStop: null,
      focus: null,
      open: null,
      resize: null,
      resizeStart: null,
      resizeStop: null,
    },
    sizeRelatedOptions: {
      buttons: !0,
      height: !0,
      maxHeight: !0,
      maxWidth: !0,
      minHeight: !0,
      minWidth: !0,
      width: !0,
    },
    resizableRelatedOptions: {
      maxHeight: !0,
      maxWidth: !0,
      minHeight: !0,
      minWidth: !0,
    },
    _create: function () {
      (this.originalCss = {
        display: this.element[0].style.display,
        width: this.element[0].style.width,
        minHeight: this.element[0].style.minHeight,
        maxHeight: this.element[0].style.maxHeight,
        height: this.element[0].style.height,
      }),
        (this.originalPosition = {
          parent: this.element.parent(),
          index: this.element.parent().children().index(this.element),
        }),
        (this.originalTitle = this.element.attr("title")),
        null == this.options.title &&
          null != this.originalTitle &&
          (this.options.title = this.originalTitle),
        this.options.disabled && (this.options.disabled = !1),
        this._createWrapper(),
        this.element.show().removeAttr("title").appendTo(this.uiDialog),
        this._addClass("ui-dialog-content", "ui-widget-content"),
        this._createTitlebar(),
        this._createButtonPane(),
        this.options.draggable && V.fn.draggable && this._makeDraggable(),
        this.options.resizable && V.fn.resizable && this._makeResizable(),
        (this._isOpen = !1),
        this._trackFocus();
    },
    _init: function () {
      this.options.autoOpen && this.open();
    },
    _appendTo: function () {
      var t = this.options.appendTo;
      return t && (t.jquery || t.nodeType)
        ? V(t)
        : this.document.find(t || "body").eq(0);
    },
    _destroy: function () {
      var t,
        e = this.originalPosition;
      this._untrackInstance(),
        this._destroyOverlay(),
        this.element.removeUniqueId().css(this.originalCss).detach(),
        this.uiDialog.remove(),
        this.originalTitle && this.element.attr("title", this.originalTitle),
        (t = e.parent.children().eq(e.index)).length && t[0] !== this.element[0]
          ? t.before(this.element)
          : e.parent.append(this.element);
    },
    widget: function () {
      return this.uiDialog;
    },
    disable: V.noop,
    enable: V.noop,
    close: function (t) {
      var e = this;
      this._isOpen &&
        !1 !== this._trigger("beforeClose", t) &&
        ((this._isOpen = !1),
        (this._focusedElement = null),
        this._destroyOverlay(),
        this._untrackInstance(),
        this.opener.filter(":focusable").trigger("focus").length ||
          V.ui.safeBlur(V.ui.safeActiveElement(this.document[0])),
        this._hide(this.uiDialog, this.options.hide, function () {
          e._trigger("close", t);
        }));
    },
    isOpen: function () {
      return this._isOpen;
    },
    moveToTop: function () {
      this._moveToTop();
    },
    _moveToTop: function (t, e) {
      var i = !1,
        s = this.uiDialog
          .siblings(".ui-front:visible")
          .map(function () {
            return +V(this).css("z-index");
          })
          .get(),
        s = Math.max.apply(null, s);
      return (
        s >= +this.uiDialog.css("z-index") &&
          (this.uiDialog.css("z-index", s + 1), (i = !0)),
        i && !e && this._trigger("focus", t),
        i
      );
    },
    open: function () {
      var t = this;
      this._isOpen
        ? this._moveToTop() && this._focusTabbable()
        : ((this._isOpen = !0),
          (this.opener = V(V.ui.safeActiveElement(this.document[0]))),
          this._size(),
          this._position(),
          this._createOverlay(),
          this._moveToTop(null, !0),
          this.overlay &&
            this.overlay.css("z-index", this.uiDialog.css("z-index") - 1),
          this._show(this.uiDialog, this.options.show, function () {
            t._focusTabbable(), t._trigger("focus");
          }),
          this._makeFocusTarget(),
          this._trigger("open"));
    },
    _focusTabbable: function () {
      var t = this._focusedElement;
      (t = !(t = !(t = !(t = !(t = t || this.element.find("[autofocus]")).length
        ? this.element.find(":tabbable")
        : t).length
        ? this.uiDialogButtonPane.find(":tabbable")
        : t).length
        ? this.uiDialogTitlebarClose.filter(":tabbable")
        : t).length
        ? this.uiDialog
        : t)
        .eq(0)
        .trigger("focus");
    },
    _restoreTabbableFocus: function () {
      var t = V.ui.safeActiveElement(this.document[0]);
      this.uiDialog[0] === t ||
        V.contains(this.uiDialog[0], t) ||
        this._focusTabbable();
    },
    _keepFocus: function (t) {
      t.preventDefault(),
        this._restoreTabbableFocus(),
        this._delay(this._restoreTabbableFocus);
    },
    _createWrapper: function () {
      (this.uiDialog = V("<div>")
        .hide()
        .attr({ tabIndex: -1, role: "dialog" })
        .appendTo(this._appendTo())),
        this._addClass(
          this.uiDialog,
          "ui-dialog",
          "ui-widget ui-widget-content ui-front"
        ),
        this._on(this.uiDialog, {
          keydown: function (t) {
            if (
              this.options.closeOnEscape &&
              !t.isDefaultPrevented() &&
              t.keyCode &&
              t.keyCode === V.ui.keyCode.ESCAPE
            )
              return t.preventDefault(), void this.close(t);
            var e, i, s;
            t.keyCode !== V.ui.keyCode.TAB ||
              t.isDefaultPrevented() ||
              ((e = this.uiDialog.find(":tabbable")),
              (i = e.first()),
              (s = e.last()),
              (t.target !== s[0] && t.target !== this.uiDialog[0]) || t.shiftKey
                ? (t.target !== i[0] && t.target !== this.uiDialog[0]) ||
                  !t.shiftKey ||
                  (this._delay(function () {
                    s.trigger("focus");
                  }),
                  t.preventDefault())
                : (this._delay(function () {
                    i.trigger("focus");
                  }),
                  t.preventDefault()));
          },
          mousedown: function (t) {
            this._moveToTop(t) && this._focusTabbable();
          },
        }),
        this.element.find("[aria-describedby]").length ||
          this.uiDialog.attr({
            "aria-describedby": this.element.uniqueId().attr("id"),
          });
    },
    _createTitlebar: function () {
      var t;
      (this.uiDialogTitlebar = V("<div>")),
        this._addClass(
          this.uiDialogTitlebar,
          "ui-dialog-titlebar",
          "ui-widget-header ui-helper-clearfix"
        ),
        this._on(this.uiDialogTitlebar, {
          mousedown: function (t) {
            V(t.target).closest(".ui-dialog-titlebar-close") ||
              this.uiDialog.trigger("focus");
          },
        }),
        (this.uiDialogTitlebarClose = V("<button type='button'></button>")
          .button({
            label: V("<a>").text(this.options.closeText).html(),
            icon: "ui-icon-closethick",
            showLabel: !1,
          })
          .appendTo(this.uiDialogTitlebar)),
        this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"),
        this._on(this.uiDialogTitlebarClose, {
          click: function (t) {
            t.preventDefault(), this.close(t);
          },
        }),
        (t = V("<span>").uniqueId().prependTo(this.uiDialogTitlebar)),
        this._addClass(t, "ui-dialog-title"),
        this._title(t),
        this.uiDialogTitlebar.prependTo(this.uiDialog),
        this.uiDialog.attr({ "aria-labelledby": t.attr("id") });
    },
    _title: function (t) {
      this.options.title ? t.text(this.options.title) : t.html("&#160;");
    },
    _createButtonPane: function () {
      (this.uiDialogButtonPane = V("<div>")),
        this._addClass(
          this.uiDialogButtonPane,
          "ui-dialog-buttonpane",
          "ui-widget-content ui-helper-clearfix"
        ),
        (this.uiButtonSet = V("<div>").appendTo(this.uiDialogButtonPane)),
        this._addClass(this.uiButtonSet, "ui-dialog-buttonset"),
        this._createButtons();
    },
    _createButtons: function () {
      var s = this,
        t = this.options.buttons;
      this.uiDialogButtonPane.remove(),
        this.uiButtonSet.empty(),
        V.isEmptyObject(t) || (Array.isArray(t) && !t.length)
          ? this._removeClass(this.uiDialog, "ui-dialog-buttons")
          : (V.each(t, function (t, e) {
              var i;
              (e = V.extend(
                { type: "button" },
                (e = "function" == typeof e ? { click: e, text: t } : e)
              )),
                (i = e.click),
                (t = {
                  icon: e.icon,
                  iconPosition: e.iconPosition,
                  showLabel: e.showLabel,
                  icons: e.icons,
                  text: e.text,
                }),
                delete e.click,
                delete e.icon,
                delete e.iconPosition,
                delete e.showLabel,
                delete e.icons,
                "boolean" == typeof e.text && delete e.text,
                V("<button></button>", e)
                  .button(t)
                  .appendTo(s.uiButtonSet)
                  .on("click", function () {
                    i.apply(s.element[0], arguments);
                  });
            }),
            this._addClass(this.uiDialog, "ui-dialog-buttons"),
            this.uiDialogButtonPane.appendTo(this.uiDialog));
    },
    _makeDraggable: function () {
      var n = this,
        o = this.options;
      function a(t) {
        return { position: t.position, offset: t.offset };
      }
      this.uiDialog.draggable({
        cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
        handle: ".ui-dialog-titlebar",
        containment: "document",
        start: function (t, e) {
          n._addClass(V(this), "ui-dialog-dragging"),
            n._blockFrames(),
            n._trigger("dragStart", t, a(e));
        },
        drag: function (t, e) {
          n._trigger("drag", t, a(e));
        },
        stop: function (t, e) {
          var i = e.offset.left - n.document.scrollLeft(),
            s = e.offset.top - n.document.scrollTop();
          (o.position = {
            my: "left top",
            at:
              "left" +
              (0 <= i ? "+" : "") +
              i +
              " top" +
              (0 <= s ? "+" : "") +
              s,
            of: n.window,
          }),
            n._removeClass(V(this), "ui-dialog-dragging"),
            n._unblockFrames(),
            n._trigger("dragStop", t, a(e));
        },
      });
    },
    _makeResizable: function () {
      var n = this,
        o = this.options,
        t = o.resizable,
        e = this.uiDialog.css("position"),
        t = "string" == typeof t ? t : "n,e,s,w,se,sw,ne,nw";
      function a(t) {
        return {
          originalPosition: t.originalPosition,
          originalSize: t.originalSize,
          position: t.position,
          size: t.size,
        };
      }
      this.uiDialog
        .resizable({
          cancel: ".ui-dialog-content",
          containment: "document",
          alsoResize: this.element,
          maxWidth: o.maxWidth,
          maxHeight: o.maxHeight,
          minWidth: o.minWidth,
          minHeight: this._minHeight(),
          handles: t,
          start: function (t, e) {
            n._addClass(V(this), "ui-dialog-resizing"),
              n._blockFrames(),
              n._trigger("resizeStart", t, a(e));
          },
          resize: function (t, e) {
            n._trigger("resize", t, a(e));
          },
          stop: function (t, e) {
            var i = n.uiDialog.offset(),
              s = i.left - n.document.scrollLeft(),
              i = i.top - n.document.scrollTop();
            (o.height = n.uiDialog.height()),
              (o.width = n.uiDialog.width()),
              (o.position = {
                my: "left top",
                at:
                  "left" +
                  (0 <= s ? "+" : "") +
                  s +
                  " top" +
                  (0 <= i ? "+" : "") +
                  i,
                of: n.window,
              }),
              n._removeClass(V(this), "ui-dialog-resizing"),
              n._unblockFrames(),
              n._trigger("resizeStop", t, a(e));
          },
        })
        .css("position", e);
    },
    _trackFocus: function () {
      this._on(this.widget(), {
        focusin: function (t) {
          this._makeFocusTarget(), (this._focusedElement = V(t.target));
        },
      });
    },
    _makeFocusTarget: function () {
      this._untrackInstance(), this._trackingInstances().unshift(this);
    },
    _untrackInstance: function () {
      var t = this._trackingInstances(),
        e = V.inArray(this, t);
      -1 !== e && t.splice(e, 1);
    },
    _trackingInstances: function () {
      var t = this.document.data("ui-dialog-instances");
      return t || this.document.data("ui-dialog-instances", (t = [])), t;
    },
    _minHeight: function () {
      var t = this.options;
      return "auto" === t.height
        ? t.minHeight
        : Math.min(t.minHeight, t.height);
    },
    _position: function () {
      var t = this.uiDialog.is(":visible");
      t || this.uiDialog.show(),
        this.uiDialog.position(this.options.position),
        t || this.uiDialog.hide();
    },
    _setOptions: function (t) {
      var i = this,
        s = !1,
        n = {};
      V.each(t, function (t, e) {
        i._setOption(t, e),
          t in i.sizeRelatedOptions && (s = !0),
          t in i.resizableRelatedOptions && (n[t] = e);
      }),
        s && (this._size(), this._position()),
        this.uiDialog.is(":data(ui-resizable)") &&
          this.uiDialog.resizable("option", n);
    },
    _setOption: function (t, e) {
      var i,
        s = this.uiDialog;
      "disabled" !== t &&
        (this._super(t, e),
        "appendTo" === t && this.uiDialog.appendTo(this._appendTo()),
        "buttons" === t && this._createButtons(),
        "closeText" === t &&
          this.uiDialogTitlebarClose.button({
            label: V("<a>")
              .text("" + this.options.closeText)
              .html(),
          }),
        "draggable" === t &&
          ((i = s.is(":data(ui-draggable)")) && !e && s.draggable("destroy"),
          !i && e && this._makeDraggable()),
        "position" === t && this._position(),
        "resizable" === t &&
          ((i = s.is(":data(ui-resizable)")) && !e && s.resizable("destroy"),
          i && "string" == typeof e && s.resizable("option", "handles", e),
          i || !1 === e || this._makeResizable()),
        "title" === t &&
          this._title(this.uiDialogTitlebar.find(".ui-dialog-title")));
    },
    _size: function () {
      var t,
        e,
        i,
        s = this.options;
      this.element
        .show()
        .css({ width: "auto", minHeight: 0, maxHeight: "none", height: 0 }),
        s.minWidth > s.width && (s.width = s.minWidth),
        (t = this.uiDialog
          .css({ height: "auto", width: s.width })
          .outerHeight()),
        (e = Math.max(0, s.minHeight - t)),
        (i =
          "number" == typeof s.maxHeight
            ? Math.max(0, s.maxHeight - t)
            : "none"),
        "auto" === s.height
          ? this.element.css({ minHeight: e, maxHeight: i, height: "auto" })
          : this.element.height(Math.max(0, s.height - t)),
        this.uiDialog.is(":data(ui-resizable)") &&
          this.uiDialog.resizable("option", "minHeight", this._minHeight());
    },
    _blockFrames: function () {
      this.iframeBlocks = this.document.find("iframe").map(function () {
        var t = V(this);
        return V("<div>")
          .css({
            position: "absolute",
            width: t.outerWidth(),
            height: t.outerHeight(),
          })
          .appendTo(t.parent())
          .offset(t.offset())[0];
      });
    },
    _unblockFrames: function () {
      this.iframeBlocks &&
        (this.iframeBlocks.remove(), delete this.iframeBlocks);
    },
    _allowInteraction: function (t) {
      return (
        !!V(t.target).closest(".ui-dialog").length ||
        !!V(t.target).closest(".ui-datepicker").length
      );
    },
    _createOverlay: function () {
      var i, s;
      this.options.modal &&
        ((i = V.fn.jquery.substring(0, 4)),
        (s = !0),
        this._delay(function () {
          s = !1;
        }),
        this.document.data("ui-dialog-overlays") ||
          this.document.on(
            "focusin.ui-dialog",
            function (t) {
              var e;
              s ||
                (e = this._trackingInstances()[0])._allowInteraction(t) ||
                (t.preventDefault(),
                e._focusTabbable(),
                ("3.4." !== i && "3.5." !== i) ||
                  e._delay(e._restoreTabbableFocus));
            }.bind(this)
          ),
        (this.overlay = V("<div>").appendTo(this._appendTo())),
        this._addClass(this.overlay, null, "ui-widget-overlay ui-front"),
        this._on(this.overlay, { mousedown: "_keepFocus" }),
        this.document.data(
          "ui-dialog-overlays",
          (this.document.data("ui-dialog-overlays") || 0) + 1
        ));
    },
    _destroyOverlay: function () {
      var t;
      this.options.modal &&
        this.overlay &&
        ((t = this.document.data("ui-dialog-overlays") - 1)
          ? this.document.data("ui-dialog-overlays", t)
          : (this.document.off("focusin.ui-dialog"),
            this.document.removeData("ui-dialog-overlays")),
        this.overlay.remove(),
        (this.overlay = null));
    },
  }),
    !1 !== V.uiBackCompat &&
      V.widget("ui.dialog", V.ui.dialog, {
        options: { dialogClass: "" },
        _createWrapper: function () {
          this._super(), this.uiDialog.addClass(this.options.dialogClass);
        },
        _setOption: function (t, e) {
          "dialogClass" === t &&
            this.uiDialog.removeClass(this.options.dialogClass).addClass(e),
            this._superApply(arguments);
        },
      });
  V.ui.dialog;
  function lt(t, e, i) {
    return e <= t && t < e + i;
  }
  V.widget("ui.droppable", {
    version: "1.13.2",
    widgetEventPrefix: "drop",
    options: {
      accept: "*",
      addClasses: !0,
      greedy: !1,
      scope: "default",
      tolerance: "intersect",
      activate: null,
      deactivate: null,
      drop: null,
      out: null,
      over: null,
    },
    _create: function () {
      var t,
        e = this.options,
        i = e.accept;
      (this.isover = !1),
        (this.isout = !0),
        (this.accept =
          "function" == typeof i
            ? i
            : function (t) {
                return t.is(i);
              }),
        (this.proportions = function () {
          if (!arguments.length)
            return (t = t || {
              width: this.element[0].offsetWidth,
              height: this.element[0].offsetHeight,
            });
          t = arguments[0];
        }),
        this._addToManager(e.scope),
        e.addClasses && this._addClass("ui-droppable");
    },
    _addToManager: function (t) {
      (V.ui.ddmanager.droppables[t] = V.ui.ddmanager.droppables[t] || []),
        V.ui.ddmanager.droppables[t].push(this);
    },
    _splice: function (t) {
      for (var e = 0; e < t.length; e++) t[e] === this && t.splice(e, 1);
    },
    _destroy: function () {
      var t = V.ui.ddmanager.droppables[this.options.scope];
      this._splice(t);
    },
    _setOption: function (t, e) {
      var i;
      "accept" === t
        ? (this.accept =
            "function" == typeof e
              ? e
              : function (t) {
                  return t.is(e);
                })
        : "scope" === t &&
          ((i = V.ui.ddmanager.droppables[this.options.scope]),
          this._splice(i),
          this._addToManager(e)),
        this._super(t, e);
    },
    _activate: function (t) {
      var e = V.ui.ddmanager.current;
      this._addActiveClass(), e && this._trigger("activate", t, this.ui(e));
    },
    _deactivate: function (t) {
      var e = V.ui.ddmanager.current;
      this._removeActiveClass(),
        e && this._trigger("deactivate", t, this.ui(e));
    },
    _over: function (t) {
      var e = V.ui.ddmanager.current;
      e &&
        (e.currentItem || e.element)[0] !== this.element[0] &&
        this.accept.call(this.element[0], e.currentItem || e.element) &&
        (this._addHoverClass(), this._trigger("over", t, this.ui(e)));
    },
    _out: function (t) {
      var e = V.ui.ddmanager.current;
      e &&
        (e.currentItem || e.element)[0] !== this.element[0] &&
        this.accept.call(this.element[0], e.currentItem || e.element) &&
        (this._removeHoverClass(), this._trigger("out", t, this.ui(e)));
    },
    _drop: function (e, t) {
      var i = t || V.ui.ddmanager.current,
        s = !1;
      return (
        !(!i || (i.currentItem || i.element)[0] === this.element[0]) &&
        (this.element
          .find(":data(ui-droppable)")
          .not(".ui-draggable-dragging")
          .each(function () {
            var t = V(this).droppable("instance");
            if (
              t.options.greedy &&
              !t.options.disabled &&
              t.options.scope === i.options.scope &&
              t.accept.call(t.element[0], i.currentItem || i.element) &&
              V.ui.intersect(
                i,
                V.extend(t, { offset: t.element.offset() }),
                t.options.tolerance,
                e
              )
            )
              return !(s = !0);
          }),
        !s &&
          !!this.accept.call(this.element[0], i.currentItem || i.element) &&
          (this._removeActiveClass(),
          this._removeHoverClass(),
          this._trigger("drop", e, this.ui(i)),
          this.element))
      );
    },
    ui: function (t) {
      return {
        draggable: t.currentItem || t.element,
        helper: t.helper,
        position: t.position,
        offset: t.positionAbs,
      };
    },
    _addHoverClass: function () {
      this._addClass("ui-droppable-hover");
    },
    _removeHoverClass: function () {
      this._removeClass("ui-droppable-hover");
    },
    _addActiveClass: function () {
      this._addClass("ui-droppable-active");
    },
    _removeActiveClass: function () {
      this._removeClass("ui-droppable-active");
    },
  }),
    (V.ui.intersect = function (t, e, i, s) {
      if (!e.offset) return !1;
      var n = (t.positionAbs || t.position.absolute).left + t.margins.left,
        o = (t.positionAbs || t.position.absolute).top + t.margins.top,
        a = n + t.helperProportions.width,
        r = o + t.helperProportions.height,
        l = e.offset.left,
        h = e.offset.top,
        c = l + e.proportions().width,
        u = h + e.proportions().height;
      switch (i) {
        case "fit":
          return l <= n && a <= c && h <= o && r <= u;
        case "intersect":
          return (
            l < n + t.helperProportions.width / 2 &&
            a - t.helperProportions.width / 2 < c &&
            h < o + t.helperProportions.height / 2 &&
            r - t.helperProportions.height / 2 < u
          );
        case "pointer":
          return (
            lt(s.pageY, h, e.proportions().height) &&
            lt(s.pageX, l, e.proportions().width)
          );
        case "touch":
          return (
            ((h <= o && o <= u) || (h <= r && r <= u) || (o < h && u < r)) &&
            ((l <= n && n <= c) || (l <= a && a <= c) || (n < l && c < a))
          );
        default:
          return !1;
      }
    }),
    !(V.ui.ddmanager = {
      current: null,
      droppables: { default: [] },
      prepareOffsets: function (t, e) {
        var i,
          s,
          n = V.ui.ddmanager.droppables[t.options.scope] || [],
          o = e ? e.type : null,
          a = (t.currentItem || t.element)
            .find(":data(ui-droppable)")
            .addBack();
        t: for (i = 0; i < n.length; i++)
          if (
            !(
              n[i].options.disabled ||
              (t &&
                !n[i].accept.call(n[i].element[0], t.currentItem || t.element))
            )
          ) {
            for (s = 0; s < a.length; s++)
              if (a[s] === n[i].element[0]) {
                n[i].proportions().height = 0;
                continue t;
              }
            (n[i].visible = "none" !== n[i].element.css("display")),
              n[i].visible &&
                ("mousedown" === o && n[i]._activate.call(n[i], e),
                (n[i].offset = n[i].element.offset()),
                n[i].proportions({
                  width: n[i].element[0].offsetWidth,
                  height: n[i].element[0].offsetHeight,
                }));
          }
      },
      drop: function (t, e) {
        var i = !1;
        return (
          V.each(
            (V.ui.ddmanager.droppables[t.options.scope] || []).slice(),
            function () {
              this.options &&
                (!this.options.disabled &&
                  this.visible &&
                  V.ui.intersect(t, this, this.options.tolerance, e) &&
                  (i = this._drop.call(this, e) || i),
                !this.options.disabled &&
                  this.visible &&
                  this.accept.call(
                    this.element[0],
                    t.currentItem || t.element
                  ) &&
                  ((this.isout = !0),
                  (this.isover = !1),
                  this._deactivate.call(this, e)));
            }
          ),
          i
        );
      },
      dragStart: function (t, e) {
        t.element.parentsUntil("body").on("scroll.droppable", function () {
          t.options.refreshPositions || V.ui.ddmanager.prepareOffsets(t, e);
        });
      },
      drag: function (n, o) {
        n.options.refreshPositions && V.ui.ddmanager.prepareOffsets(n, o),
          V.each(V.ui.ddmanager.droppables[n.options.scope] || [], function () {
            var t, e, i, s;
            this.options.disabled ||
              this.greedyChild ||
              !this.visible ||
              ((s =
                !(i = V.ui.intersect(n, this, this.options.tolerance, o)) &&
                this.isover
                  ? "isout"
                  : i && !this.isover
                  ? "isover"
                  : null) &&
                (this.options.greedy &&
                  ((e = this.options.scope),
                  (i = this.element
                    .parents(":data(ui-droppable)")
                    .filter(function () {
                      return V(this).droppable("instance").options.scope === e;
                    })).length &&
                    ((t = V(i[0]).droppable("instance")).greedyChild =
                      "isover" === s)),
                t &&
                  "isover" === s &&
                  ((t.isover = !1), (t.isout = !0), t._out.call(t, o)),
                (this[s] = !0),
                (this["isout" === s ? "isover" : "isout"] = !1),
                this["isover" === s ? "_over" : "_out"].call(this, o),
                t &&
                  "isout" === s &&
                  ((t.isout = !1), (t.isover = !0), t._over.call(t, o))));
          });
      },
      dragStop: function (t, e) {
        t.element.parentsUntil("body").off("scroll.droppable"),
          t.options.refreshPositions || V.ui.ddmanager.prepareOffsets(t, e);
      },
    }) !== V.uiBackCompat &&
      V.widget("ui.droppable", V.ui.droppable, {
        options: { hoverClass: !1, activeClass: !1 },
        _addActiveClass: function () {
          this._super(),
            this.options.activeClass &&
              this.element.addClass(this.options.activeClass);
        },
        _removeActiveClass: function () {
          this._super(),
            this.options.activeClass &&
              this.element.removeClass(this.options.activeClass);
        },
        _addHoverClass: function () {
          this._super(),
            this.options.hoverClass &&
              this.element.addClass(this.options.hoverClass);
        },
        _removeHoverClass: function () {
          this._super(),
            this.options.hoverClass &&
              this.element.removeClass(this.options.hoverClass);
        },
      });
  V.ui.droppable,
    V.widget("ui.progressbar", {
      version: "1.13.2",
      options: {
        classes: {
          "ui-progressbar": "ui-corner-all",
          "ui-progressbar-value": "ui-corner-left",
          "ui-progressbar-complete": "ui-corner-right",
        },
        max: 100,
        value: 0,
        change: null,
        complete: null,
      },
      min: 0,
      _create: function () {
        (this.oldValue = this.options.value = this._constrainedValue()),
          this.element.attr({ role: "progressbar", "aria-valuemin": this.min }),
          this._addClass("ui-progressbar", "ui-widget ui-widget-content"),
          (this.valueDiv = V("<div>").appendTo(this.element)),
          this._addClass(
            this.valueDiv,
            "ui-progressbar-value",
            "ui-widget-header"
          ),
          this._refreshValue();
      },
      _destroy: function () {
        this.element.removeAttr(
          "role aria-valuemin aria-valuemax aria-valuenow"
        ),
          this.valueDiv.remove();
      },
      value: function (t) {
        if (void 0 === t) return this.options.value;
        (this.options.value = this._constrainedValue(t)), this._refreshValue();
      },
      _constrainedValue: function (t) {
        return (
          void 0 === t && (t = this.options.value),
          (this.indeterminate = !1 === t),
          "number" != typeof t && (t = 0),
          !this.indeterminate &&
            Math.min(this.options.max, Math.max(this.min, t))
        );
      },
      _setOptions: function (t) {
        var e = t.value;
        delete t.value,
          this._super(t),
          (this.options.value = this._constrainedValue(e)),
          this._refreshValue();
      },
      _setOption: function (t, e) {
        "max" === t && (e = Math.max(this.min, e)), this._super(t, e);
      },
      _setOptionDisabled: function (t) {
        this._super(t),
          this.element.attr("aria-disabled", t),
          this._toggleClass(null, "ui-state-disabled", !!t);
      },
      _percentage: function () {
        return this.indeterminate
          ? 100
          : (100 * (this.options.value - this.min)) /
              (this.options.max - this.min);
      },
      _refreshValue: function () {
        var t = this.options.value,
          e = this._percentage();
        this.valueDiv
          .toggle(this.indeterminate || t > this.min)
          .width(e.toFixed(0) + "%"),
          this._toggleClass(
            this.valueDiv,
            "ui-progressbar-complete",
            null,
            t === this.options.max
          )._toggleClass(
            "ui-progressbar-indeterminate",
            null,
            this.indeterminate
          ),
          this.indeterminate
            ? (this.element.removeAttr("aria-valuenow"),
              this.overlayDiv ||
                ((this.overlayDiv = V("<div>").appendTo(this.valueDiv)),
                this._addClass(this.overlayDiv, "ui-progressbar-overlay")))
            : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": t,
              }),
              this.overlayDiv &&
                (this.overlayDiv.remove(), (this.overlayDiv = null))),
          this.oldValue !== t && ((this.oldValue = t), this._trigger("change")),
          t === this.options.max && this._trigger("complete");
      },
    }),
    V.widget("ui.selectable", V.ui.mouse, {
      version: "1.13.2",
      options: {
        appendTo: "body",
        autoRefresh: !0,
        distance: 0,
        filter: "*",
        tolerance: "touch",
        selected: null,
        selecting: null,
        start: null,
        stop: null,
        unselected: null,
        unselecting: null,
      },
      _create: function () {
        var i = this;
        this._addClass("ui-selectable"),
          (this.dragged = !1),
          (this.refresh = function () {
            (i.elementPos = V(i.element[0]).offset()),
              (i.selectees = V(i.options.filter, i.element[0])),
              i._addClass(i.selectees, "ui-selectee"),
              i.selectees.each(function () {
                var t = V(this),
                  e = t.offset(),
                  e = {
                    left: e.left - i.elementPos.left,
                    top: e.top - i.elementPos.top,
                  };
                V.data(this, "selectable-item", {
                  element: this,
                  $element: t,
                  left: e.left,
                  top: e.top,
                  right: e.left + t.outerWidth(),
                  bottom: e.top + t.outerHeight(),
                  startselected: !1,
                  selected: t.hasClass("ui-selected"),
                  selecting: t.hasClass("ui-selecting"),
                  unselecting: t.hasClass("ui-unselecting"),
                });
              });
          }),
          this.refresh(),
          this._mouseInit(),
          (this.helper = V("<div>")),
          this._addClass(this.helper, "ui-selectable-helper");
      },
      _destroy: function () {
        this.selectees.removeData("selectable-item"), this._mouseDestroy();
      },
      _mouseStart: function (i) {
        var s = this,
          t = this.options;
        (this.opos = [i.pageX, i.pageY]),
          (this.elementPos = V(this.element[0]).offset()),
          this.options.disabled ||
            ((this.selectees = V(t.filter, this.element[0])),
            this._trigger("start", i),
            V(t.appendTo).append(this.helper),
            this.helper.css({
              left: i.pageX,
              top: i.pageY,
              width: 0,
              height: 0,
            }),
            t.autoRefresh && this.refresh(),
            this.selectees.filter(".ui-selected").each(function () {
              var t = V.data(this, "selectable-item");
              (t.startselected = !0),
                i.metaKey ||
                  i.ctrlKey ||
                  (s._removeClass(t.$element, "ui-selected"),
                  (t.selected = !1),
                  s._addClass(t.$element, "ui-unselecting"),
                  (t.unselecting = !0),
                  s._trigger("unselecting", i, { unselecting: t.element }));
            }),
            V(i.target)
              .parents()
              .addBack()
              .each(function () {
                var t,
                  e = V.data(this, "selectable-item");
                if (e)
                  return (
                    (t =
                      (!i.metaKey && !i.ctrlKey) ||
                      !e.$element.hasClass("ui-selected")),
                    s
                      ._removeClass(
                        e.$element,
                        t ? "ui-unselecting" : "ui-selected"
                      )
                      ._addClass(
                        e.$element,
                        t ? "ui-selecting" : "ui-unselecting"
                      ),
                    (e.unselecting = !t),
                    (e.selecting = t),
                    (e.selected = t)
                      ? s._trigger("selecting", i, { selecting: e.element })
                      : s._trigger("unselecting", i, {
                          unselecting: e.element,
                        }),
                    !1
                  );
              }));
      },
      _mouseDrag: function (s) {
        if (((this.dragged = !0), !this.options.disabled)) {
          var t,
            n = this,
            o = this.options,
            a = this.opos[0],
            r = this.opos[1],
            l = s.pageX,
            h = s.pageY;
          return (
            l < a && ((t = l), (l = a), (a = t)),
            h < r && ((t = h), (h = r), (r = t)),
            this.helper.css({ left: a, top: r, width: l - a, height: h - r }),
            this.selectees.each(function () {
              var t = V.data(this, "selectable-item"),
                e = !1,
                i = {};
              t &&
                t.element !== n.element[0] &&
                ((i.left = t.left + n.elementPos.left),
                (i.right = t.right + n.elementPos.left),
                (i.top = t.top + n.elementPos.top),
                (i.bottom = t.bottom + n.elementPos.top),
                "touch" === o.tolerance
                  ? (e = !(
                      i.left > l ||
                      i.right < a ||
                      i.top > h ||
                      i.bottom < r
                    ))
                  : "fit" === o.tolerance &&
                    (e =
                      i.left > a && i.right < l && i.top > r && i.bottom < h),
                e
                  ? (t.selected &&
                      (n._removeClass(t.$element, "ui-selected"),
                      (t.selected = !1)),
                    t.unselecting &&
                      (n._removeClass(t.$element, "ui-unselecting"),
                      (t.unselecting = !1)),
                    t.selecting ||
                      (n._addClass(t.$element, "ui-selecting"),
                      (t.selecting = !0),
                      n._trigger("selecting", s, { selecting: t.element })))
                  : (t.selecting &&
                      ((s.metaKey || s.ctrlKey) && t.startselected
                        ? (n._removeClass(t.$element, "ui-selecting"),
                          (t.selecting = !1),
                          n._addClass(t.$element, "ui-selected"),
                          (t.selected = !0))
                        : (n._removeClass(t.$element, "ui-selecting"),
                          (t.selecting = !1),
                          t.startselected &&
                            (n._addClass(t.$element, "ui-unselecting"),
                            (t.unselecting = !0)),
                          n._trigger("unselecting", s, {
                            unselecting: t.element,
                          }))),
                    t.selected &&
                      (s.metaKey ||
                        s.ctrlKey ||
                        t.startselected ||
                        (n._removeClass(t.$element, "ui-selected"),
                        (t.selected = !1),
                        n._addClass(t.$element, "ui-unselecting"),
                        (t.unselecting = !0),
                        n._trigger("unselecting", s, {
                          unselecting: t.element,
                        })))));
            }),
            !1
          );
        }
      },
      _mouseStop: function (e) {
        var i = this;
        return (
          (this.dragged = !1),
          V(".ui-unselecting", this.element[0]).each(function () {
            var t = V.data(this, "selectable-item");
            i._removeClass(t.$element, "ui-unselecting"),
              (t.unselecting = !1),
              (t.startselected = !1),
              i._trigger("unselected", e, { unselected: t.element });
          }),
          V(".ui-selecting", this.element[0]).each(function () {
            var t = V.data(this, "selectable-item");
            i
              ._removeClass(t.$element, "ui-selecting")
              ._addClass(t.$element, "ui-selected"),
              (t.selecting = !1),
              (t.selected = !0),
              (t.startselected = !0),
              i._trigger("selected", e, { selected: t.element });
          }),
          this._trigger("stop", e),
          this.helper.remove(),
          !1
        );
      },
    }),
    V.widget("ui.selectmenu", [
      V.ui.formResetMixin,
      {
        version: "1.13.2",
        defaultElement: "<select>",
        options: {
          appendTo: null,
          classes: {
            "ui-selectmenu-button-open": "ui-corner-top",
            "ui-selectmenu-button-closed": "ui-corner-all",
          },
          disabled: null,
          icons: { button: "ui-icon-triangle-1-s" },
          position: { my: "left top", at: "left bottom", collision: "none" },
          width: !1,
          change: null,
          close: null,
          focus: null,
          open: null,
          select: null,
        },
        _create: function () {
          var t = this.element.uniqueId().attr("id");
          (this.ids = { element: t, button: t + "-button", menu: t + "-menu" }),
            this._drawButton(),
            this._drawMenu(),
            this._bindFormResetHandler(),
            (this._rendered = !1),
            (this.menuItems = V());
        },
        _drawButton: function () {
          var t,
            e = this,
            i = this._parseOption(
              this.element.find("option:selected"),
              this.element[0].selectedIndex
            );
          (this.labels = this.element.labels().attr("for", this.ids.button)),
            this._on(this.labels, {
              click: function (t) {
                this.button.trigger("focus"), t.preventDefault();
              },
            }),
            this.element.hide(),
            (this.button = V("<span>", {
              tabindex: this.options.disabled ? -1 : 0,
              id: this.ids.button,
              role: "combobox",
              "aria-expanded": "false",
              "aria-autocomplete": "list",
              "aria-owns": this.ids.menu,
              "aria-haspopup": "true",
              title: this.element.attr("title"),
            }).insertAfter(this.element)),
            this._addClass(
              this.button,
              "ui-selectmenu-button ui-selectmenu-button-closed",
              "ui-button ui-widget"
            ),
            (t = V("<span>").appendTo(this.button)),
            this._addClass(
              t,
              "ui-selectmenu-icon",
              "ui-icon " + this.options.icons.button
            ),
            (this.buttonItem = this._renderButtonItem(i).appendTo(this.button)),
            !1 !== this.options.width && this._resizeButton(),
            this._on(this.button, this._buttonEvents),
            this.button.one("focusin", function () {
              e._rendered || e._refreshMenu();
            });
        },
        _drawMenu: function () {
          var i = this;
          (this.menu = V("<ul>", {
            "aria-hidden": "true",
            "aria-labelledby": this.ids.button,
            id: this.ids.menu,
          })),
            (this.menuWrap = V("<div>").append(this.menu)),
            this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"),
            this.menuWrap.appendTo(this._appendTo()),
            (this.menuInstance = this.menu
              .menu({
                classes: { "ui-menu": "ui-corner-bottom" },
                role: "listbox",
                select: function (t, e) {
                  t.preventDefault(),
                    i._setSelection(),
                    i._select(e.item.data("ui-selectmenu-item"), t);
                },
                focus: function (t, e) {
                  e = e.item.data("ui-selectmenu-item");
                  null != i.focusIndex &&
                    e.index !== i.focusIndex &&
                    (i._trigger("focus", t, { item: e }),
                    i.isOpen || i._select(e, t)),
                    (i.focusIndex = e.index),
                    i.button.attr(
                      "aria-activedescendant",
                      i.menuItems.eq(e.index).attr("id")
                    );
                },
              })
              .menu("instance")),
            this.menuInstance._off(this.menu, "mouseleave"),
            (this.menuInstance._closeOnDocumentClick = function () {
              return !1;
            }),
            (this.menuInstance._isDivider = function () {
              return !1;
            });
        },
        refresh: function () {
          this._refreshMenu(),
            this.buttonItem.replaceWith(
              (this.buttonItem = this._renderButtonItem(
                this._getSelectedItem().data("ui-selectmenu-item") || {}
              ))
            ),
            null === this.options.width && this._resizeButton();
        },
        _refreshMenu: function () {
          var t = this.element.find("option");
          this.menu.empty(),
            this._parseOptions(t),
            this._renderMenu(this.menu, this.items),
            this.menuInstance.refresh(),
            (this.menuItems = this.menu
              .find("li")
              .not(".ui-selectmenu-optgroup")
              .find(".ui-menu-item-wrapper")),
            (this._rendered = !0),
            t.length &&
              ((t = this._getSelectedItem()),
              this.menuInstance.focus(null, t),
              this._setAria(t.data("ui-selectmenu-item")),
              this._setOption("disabled", this.element.prop("disabled")));
        },
        open: function (t) {
          this.options.disabled ||
            (this._rendered
              ? (this._removeClass(
                  this.menu.find(".ui-state-active"),
                  null,
                  "ui-state-active"
                ),
                this.menuInstance.focus(null, this._getSelectedItem()))
              : this._refreshMenu(),
            this.menuItems.length &&
              ((this.isOpen = !0),
              this._toggleAttr(),
              this._resizeMenu(),
              this._position(),
              this._on(this.document, this._documentClick),
              this._trigger("open", t)));
        },
        _position: function () {
          this.menuWrap.position(
            V.extend({ of: this.button }, this.options.position)
          );
        },
        close: function (t) {
          this.isOpen &&
            ((this.isOpen = !1),
            this._toggleAttr(),
            (this.range = null),
            this._off(this.document),
            this._trigger("close", t));
        },
        widget: function () {
          return this.button;
        },
        menuWidget: function () {
          return this.menu;
        },
        _renderButtonItem: function (t) {
          var e = V("<span>");
          return (
            this._setText(e, t.label),
            this._addClass(e, "ui-selectmenu-text"),
            e
          );
        },
        _renderMenu: function (s, t) {
          var n = this,
            o = "";
          V.each(t, function (t, e) {
            var i;
            e.optgroup !== o &&
              ((i = V("<li>", { text: e.optgroup })),
              n._addClass(
                i,
                "ui-selectmenu-optgroup",
                "ui-menu-divider" +
                  (e.element.parent("optgroup").prop("disabled")
                    ? " ui-state-disabled"
                    : "")
              ),
              i.appendTo(s),
              (o = e.optgroup)),
              n._renderItemData(s, e);
          });
        },
        _renderItemData: function (t, e) {
          return this._renderItem(t, e).data("ui-selectmenu-item", e);
        },
        _renderItem: function (t, e) {
          var i = V("<li>"),
            s = V("<div>", { title: e.element.attr("title") });
          return (
            e.disabled && this._addClass(i, null, "ui-state-disabled"),
            this._setText(s, e.label),
            i.append(s).appendTo(t)
          );
        },
        _setText: function (t, e) {
          e ? t.text(e) : t.html("&#160;");
        },
        _move: function (t, e) {
          var i,
            s = ".ui-menu-item";
          this.isOpen
            ? (i = this.menuItems.eq(this.focusIndex).parent("li"))
            : ((i = this.menuItems
                .eq(this.element[0].selectedIndex)
                .parent("li")),
              (s += ":not(.ui-state-disabled)")),
            (s =
              "first" === t || "last" === t
                ? i["first" === t ? "prevAll" : "nextAll"](s).eq(-1)
                : i[t + "All"](s).eq(0)).length &&
              this.menuInstance.focus(e, s);
        },
        _getSelectedItem: function () {
          return this.menuItems.eq(this.element[0].selectedIndex).parent("li");
        },
        _toggle: function (t) {
          this[this.isOpen ? "close" : "open"](t);
        },
        _setSelection: function () {
          var t;
          this.range &&
            (window.getSelection
              ? ((t = window.getSelection()).removeAllRanges(),
                t.addRange(this.range))
              : this.range.select(),
            this.button.trigger("focus"));
        },
        _documentClick: {
          mousedown: function (t) {
            this.isOpen &&
              (V(t.target).closest(
                ".ui-selectmenu-menu, #" + V.escapeSelector(this.ids.button)
              ).length ||
                this.close(t));
          },
        },
        _buttonEvents: {
          mousedown: function () {
            var t;
            window.getSelection
              ? (t = window.getSelection()).rangeCount &&
                (this.range = t.getRangeAt(0))
              : (this.range = document.selection.createRange());
          },
          click: function (t) {
            this._setSelection(), this._toggle(t);
          },
          keydown: function (t) {
            var e = !0;
            switch (t.keyCode) {
              case V.ui.keyCode.TAB:
              case V.ui.keyCode.ESCAPE:
                this.close(t), (e = !1);
                break;
              case V.ui.keyCode.ENTER:
                this.isOpen && this._selectFocusedItem(t);
                break;
              case V.ui.keyCode.UP:
                t.altKey ? this._toggle(t) : this._move("prev", t);
                break;
              case V.ui.keyCode.DOWN:
                t.altKey ? this._toggle(t) : this._move("next", t);
                break;
              case V.ui.keyCode.SPACE:
                this.isOpen ? this._selectFocusedItem(t) : this._toggle(t);
                break;
              case V.ui.keyCode.LEFT:
                this._move("prev", t);
                break;
              case V.ui.keyCode.RIGHT:
                this._move("next", t);
                break;
              case V.ui.keyCode.HOME:
              case V.ui.keyCode.PAGE_UP:
                this._move("first", t);
                break;
              case V.ui.keyCode.END:
              case V.ui.keyCode.PAGE_DOWN:
                this._move("last", t);
                break;
              default:
                this.menu.trigger(t), (e = !1);
            }
            e && t.preventDefault();
          },
        },
        _selectFocusedItem: function (t) {
          var e = this.menuItems.eq(this.focusIndex).parent("li");
          e.hasClass("ui-state-disabled") ||
            this._select(e.data("ui-selectmenu-item"), t);
        },
        _select: function (t, e) {
          var i = this.element[0].selectedIndex;
          (this.element[0].selectedIndex = t.index),
            this.buttonItem.replaceWith(
              (this.buttonItem = this._renderButtonItem(t))
            ),
            this._setAria(t),
            this._trigger("select", e, { item: t }),
            t.index !== i && this._trigger("change", e, { item: t }),
            this.close(e);
        },
        _setAria: function (t) {
          t = this.menuItems.eq(t.index).attr("id");
          this.button.attr({
            "aria-labelledby": t,
            "aria-activedescendant": t,
          }),
            this.menu.attr("aria-activedescendant", t);
        },
        _setOption: function (t, e) {
          var i;
          "icons" === t &&
            ((i = this.button.find("span.ui-icon")),
            this._removeClass(i, null, this.options.icons.button)._addClass(
              i,
              null,
              e.button
            )),
            this._super(t, e),
            "appendTo" === t && this.menuWrap.appendTo(this._appendTo()),
            "width" === t && this._resizeButton();
        },
        _setOptionDisabled: function (t) {
          this._super(t),
            this.menuInstance.option("disabled", t),
            this.button.attr("aria-disabled", t),
            this._toggleClass(this.button, null, "ui-state-disabled", t),
            this.element.prop("disabled", t),
            t
              ? (this.button.attr("tabindex", -1), this.close())
              : this.button.attr("tabindex", 0);
        },
        _appendTo: function () {
          var t = this.options.appendTo;
          return (t = !(t =
            !(t =
              t &&
              (t.jquery || t.nodeType ? V(t) : this.document.find(t).eq(0))) ||
            !t[0]
              ? this.element.closest(".ui-front, dialog")
              : t).length
            ? this.document[0].body
            : t);
        },
        _toggleAttr: function () {
          this.button.attr("aria-expanded", this.isOpen),
            this._removeClass(
              this.button,
              "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open")
            )
              ._addClass(
                this.button,
                "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed")
              )
              ._toggleClass(
                this.menuWrap,
                "ui-selectmenu-open",
                null,
                this.isOpen
              ),
            this.menu.attr("aria-hidden", !this.isOpen);
        },
        _resizeButton: function () {
          var t = this.options.width;
          !1 !== t
            ? (null === t &&
                ((t = this.element.show().outerWidth()), this.element.hide()),
              this.button.outerWidth(t))
            : this.button.css("width", "");
        },
        _resizeMenu: function () {
          this.menu.outerWidth(
            Math.max(
              this.button.outerWidth(),
              this.menu.width("").outerWidth() + 1
            )
          );
        },
        _getCreateOptions: function () {
          var t = this._super();
          return (t.disabled = this.element.prop("disabled")), t;
        },
        _parseOptions: function (t) {
          var i = this,
            s = [];
          t.each(function (t, e) {
            e.hidden || s.push(i._parseOption(V(e), t));
          }),
            (this.items = s);
        },
        _parseOption: function (t, e) {
          var i = t.parent("optgroup");
          return {
            element: t,
            index: e,
            value: t.val(),
            label: t.text(),
            optgroup: i.attr("label") || "",
            disabled: i.prop("disabled") || t.prop("disabled"),
          };
        },
        _destroy: function () {
          this._unbindFormResetHandler(),
            this.menuWrap.remove(),
            this.button.remove(),
            this.element.show(),
            this.element.removeUniqueId(),
            this.labels.attr("for", this.ids.element);
        },
      },
    ]),
    V.widget("ui.slider", V.ui.mouse, {
      version: "1.13.2",
      widgetEventPrefix: "slide",
      options: {
        animate: !1,
        classes: {
          "ui-slider": "ui-corner-all",
          "ui-slider-handle": "ui-corner-all",
          "ui-slider-range": "ui-corner-all ui-widget-header",
        },
        distance: 0,
        max: 100,
        min: 0,
        orientation: "horizontal",
        range: !1,
        step: 1,
        value: 0,
        values: null,
        change: null,
        slide: null,
        start: null,
        stop: null,
      },
      numPages: 5,
      _create: function () {
        (this._keySliding = !1),
          (this._mouseSliding = !1),
          (this._animateOff = !0),
          (this._handleIndex = null),
          this._detectOrientation(),
          this._mouseInit(),
          this._calculateNewMax(),
          this._addClass(
            "ui-slider ui-slider-" + this.orientation,
            "ui-widget ui-widget-content"
          ),
          this._refresh(),
          (this._animateOff = !1);
      },
      _refresh: function () {
        this._createRange(),
          this._createHandles(),
          this._setupEvents(),
          this._refreshValue();
      },
      _createHandles: function () {
        var t,
          e = this.options,
          i = this.element.find(".ui-slider-handle"),
          s = [],
          n = (e.values && e.values.length) || 1;
        for (
          i.length > n && (i.slice(n).remove(), (i = i.slice(0, n))),
            t = i.length;
          t < n;
          t++
        )
          s.push("<span tabindex='0'></span>");
        (this.handles = i.add(V(s.join("")).appendTo(this.element))),
          this._addClass(this.handles, "ui-slider-handle", "ui-state-default"),
          (this.handle = this.handles.eq(0)),
          this.handles.each(function (t) {
            V(this).data("ui-slider-handle-index", t).attr("tabIndex", 0);
          });
      },
      _createRange: function () {
        var t = this.options;
        t.range
          ? (!0 === t.range &&
              (t.values
                ? t.values.length && 2 !== t.values.length
                  ? (t.values = [t.values[0], t.values[0]])
                  : Array.isArray(t.values) && (t.values = t.values.slice(0))
                : (t.values = [this._valueMin(), this._valueMin()])),
            this.range && this.range.length
              ? (this._removeClass(
                  this.range,
                  "ui-slider-range-min ui-slider-range-max"
                ),
                this.range.css({ left: "", bottom: "" }))
              : ((this.range = V("<div>").appendTo(this.element)),
                this._addClass(this.range, "ui-slider-range")),
            ("min" !== t.range && "max" !== t.range) ||
              this._addClass(this.range, "ui-slider-range-" + t.range))
          : (this.range && this.range.remove(), (this.range = null));
      },
      _setupEvents: function () {
        this._off(this.handles),
          this._on(this.handles, this._handleEvents),
          this._hoverable(this.handles),
          this._focusable(this.handles);
      },
      _destroy: function () {
        this.handles.remove(),
          this.range && this.range.remove(),
          this._mouseDestroy();
      },
      _mouseCapture: function (t) {
        var i,
          s,
          n,
          o,
          e,
          a,
          r = this,
          l = this.options;
        return (
          !l.disabled &&
          ((this.elementSize = {
            width: this.element.outerWidth(),
            height: this.element.outerHeight(),
          }),
          (this.elementOffset = this.element.offset()),
          (a = { x: t.pageX, y: t.pageY }),
          (i = this._normValueFromMouse(a)),
          (s = this._valueMax() - this._valueMin() + 1),
          this.handles.each(function (t) {
            var e = Math.abs(i - r.values(t));
            (e < s ||
              (s === e &&
                (t === r._lastChangedValue || r.values(t) === l.min))) &&
              ((s = e), (n = V(this)), (o = t));
          }),
          !1 !== this._start(t, o) &&
            ((this._mouseSliding = !0),
            (this._handleIndex = o),
            this._addClass(n, null, "ui-state-active"),
            n.trigger("focus"),
            (e = n.offset()),
            (a = !V(t.target).parents().addBack().is(".ui-slider-handle")),
            (this._clickOffset = a
              ? { left: 0, top: 0 }
              : {
                  left: t.pageX - e.left - n.width() / 2,
                  top:
                    t.pageY -
                    e.top -
                    n.height() / 2 -
                    (parseInt(n.css("borderTopWidth"), 10) || 0) -
                    (parseInt(n.css("borderBottomWidth"), 10) || 0) +
                    (parseInt(n.css("marginTop"), 10) || 0),
                }),
            this.handles.hasClass("ui-state-hover") || this._slide(t, o, i),
            (this._animateOff = !0)))
        );
      },
      _mouseStart: function () {
        return !0;
      },
      _mouseDrag: function (t) {
        var e = { x: t.pageX, y: t.pageY },
          e = this._normValueFromMouse(e);
        return this._slide(t, this._handleIndex, e), !1;
      },
      _mouseStop: function (t) {
        return (
          this._removeClass(this.handles, null, "ui-state-active"),
          (this._mouseSliding = !1),
          this._stop(t, this._handleIndex),
          this._change(t, this._handleIndex),
          (this._handleIndex = null),
          (this._clickOffset = null),
          (this._animateOff = !1)
        );
      },
      _detectOrientation: function () {
        this.orientation =
          "vertical" === this.options.orientation ? "vertical" : "horizontal";
      },
      _normValueFromMouse: function (t) {
        var e,
          t =
            "horizontal" === this.orientation
              ? ((e = this.elementSize.width),
                t.x -
                  this.elementOffset.left -
                  (this._clickOffset ? this._clickOffset.left : 0))
              : ((e = this.elementSize.height),
                t.y -
                  this.elementOffset.top -
                  (this._clickOffset ? this._clickOffset.top : 0)),
          t = t / e;
        return (
          (t = 1 < t ? 1 : t) < 0 && (t = 0),
          "vertical" === this.orientation && (t = 1 - t),
          (e = this._valueMax() - this._valueMin()),
          (e = this._valueMin() + t * e),
          this._trimAlignValue(e)
        );
      },
      _uiHash: function (t, e, i) {
        var s = {
          handle: this.handles[t],
          handleIndex: t,
          value: void 0 !== e ? e : this.value(),
        };
        return (
          this._hasMultipleValues() &&
            ((s.value = void 0 !== e ? e : this.values(t)),
            (s.values = i || this.values())),
          s
        );
      },
      _hasMultipleValues: function () {
        return this.options.values && this.options.values.length;
      },
      _start: function (t, e) {
        return this._trigger("start", t, this._uiHash(e));
      },
      _slide: function (t, e, i) {
        var s,
          n = this.value(),
          o = this.values();
        this._hasMultipleValues() &&
          ((s = this.values(e ? 0 : 1)),
          (n = this.values(e)),
          2 === this.options.values.length &&
            !0 === this.options.range &&
            (i = 0 === e ? Math.min(s, i) : Math.max(s, i)),
          (o[e] = i)),
          i !== n &&
            !1 !== this._trigger("slide", t, this._uiHash(e, i, o)) &&
            (this._hasMultipleValues() ? this.values(e, i) : this.value(i));
      },
      _stop: function (t, e) {
        this._trigger("stop", t, this._uiHash(e));
      },
      _change: function (t, e) {
        this._keySliding ||
          this._mouseSliding ||
          ((this._lastChangedValue = e),
          this._trigger("change", t, this._uiHash(e)));
      },
      value: function (t) {
        return arguments.length
          ? ((this.options.value = this._trimAlignValue(t)),
            this._refreshValue(),
            void this._change(null, 0))
          : this._value();
      },
      values: function (t, e) {
        var i, s, n;
        if (1 < arguments.length)
          return (
            (this.options.values[t] = this._trimAlignValue(e)),
            this._refreshValue(),
            void this._change(null, t)
          );
        if (!arguments.length) return this._values();
        if (!Array.isArray(t))
          return this._hasMultipleValues() ? this._values(t) : this.value();
        for (i = this.options.values, s = t, n = 0; n < i.length; n += 1)
          (i[n] = this._trimAlignValue(s[n])), this._change(null, n);
        this._refreshValue();
      },
      _setOption: function (t, e) {
        var i,
          s = 0;
        switch (
          ("range" === t &&
            !0 === this.options.range &&
            ("min" === e
              ? ((this.options.value = this._values(0)),
                (this.options.values = null))
              : "max" === e &&
                ((this.options.value = this._values(
                  this.options.values.length - 1
                )),
                (this.options.values = null))),
          Array.isArray(this.options.values) &&
            (s = this.options.values.length),
          this._super(t, e),
          t)
        ) {
          case "orientation":
            this._detectOrientation(),
              this._removeClass(
                "ui-slider-horizontal ui-slider-vertical"
              )._addClass("ui-slider-" + this.orientation),
              this._refreshValue(),
              this.options.range && this._refreshRange(e),
              this.handles.css("horizontal" === e ? "bottom" : "left", "");
            break;
          case "value":
            (this._animateOff = !0),
              this._refreshValue(),
              this._change(null, 0),
              (this._animateOff = !1);
            break;
          case "values":
            for (
              this._animateOff = !0, this._refreshValue(), i = s - 1;
              0 <= i;
              i--
            )
              this._change(null, i);
            this._animateOff = !1;
            break;
          case "step":
          case "min":
          case "max":
            (this._animateOff = !0),
              this._calculateNewMax(),
              this._refreshValue(),
              (this._animateOff = !1);
            break;
          case "range":
            (this._animateOff = !0), this._refresh(), (this._animateOff = !1);
        }
      },
      _setOptionDisabled: function (t) {
        this._super(t), this._toggleClass(null, "ui-state-disabled", !!t);
      },
      _value: function () {
        var t = this.options.value;
        return (t = this._trimAlignValue(t));
      },
      _values: function (t) {
        var e, i;
        if (arguments.length)
          return (t = this.options.values[t]), (t = this._trimAlignValue(t));
        if (this._hasMultipleValues()) {
          for (e = this.options.values.slice(), i = 0; i < e.length; i += 1)
            e[i] = this._trimAlignValue(e[i]);
          return e;
        }
        return [];
      },
      _trimAlignValue: function (t) {
        if (t <= this._valueMin()) return this._valueMin();
        if (t >= this._valueMax()) return this._valueMax();
        var e = 0 < this.options.step ? this.options.step : 1,
          i = (t - this._valueMin()) % e,
          t = t - i;
        return (
          2 * Math.abs(i) >= e && (t += 0 < i ? e : -e),
          parseFloat(t.toFixed(5))
        );
      },
      _calculateNewMax: function () {
        var t = this.options.max,
          e = this._valueMin(),
          i = this.options.step;
        (t = Math.round((t - e) / i) * i + e) > this.options.max && (t -= i),
          (this.max = parseFloat(t.toFixed(this._precision())));
      },
      _precision: function () {
        var t = this._precisionOf(this.options.step);
        return (t =
          null !== this.options.min
            ? Math.max(t, this._precisionOf(this.options.min))
            : t);
      },
      _precisionOf: function (t) {
        var e = t.toString(),
          t = e.indexOf(".");
        return -1 === t ? 0 : e.length - t - 1;
      },
      _valueMin: function () {
        return this.options.min;
      },
      _valueMax: function () {
        return this.max;
      },
      _refreshRange: function (t) {
        "vertical" === t && this.range.css({ width: "", left: "" }),
          "horizontal" === t && this.range.css({ height: "", bottom: "" });
      },
      _refreshValue: function () {
        var e,
          i,
          t,
          s,
          n,
          o = this.options.range,
          a = this.options,
          r = this,
          l = !this._animateOff && a.animate,
          h = {};
        this._hasMultipleValues()
          ? this.handles.each(function (t) {
              (i =
                ((r.values(t) - r._valueMin()) /
                  (r._valueMax() - r._valueMin())) *
                100),
                (h["horizontal" === r.orientation ? "left" : "bottom"] =
                  i + "%"),
                V(this).stop(1, 1)[l ? "animate" : "css"](h, a.animate),
                !0 === r.options.range &&
                  ("horizontal" === r.orientation
                    ? (0 === t &&
                        r.range
                          .stop(1, 1)
                          [l ? "animate" : "css"]({ left: i + "%" }, a.animate),
                      1 === t &&
                        r.range[l ? "animate" : "css"](
                          { width: i - e + "%" },
                          { queue: !1, duration: a.animate }
                        ))
                    : (0 === t &&
                        r.range
                          .stop(1, 1)
                          [l ? "animate" : "css"](
                            { bottom: i + "%" },
                            a.animate
                          ),
                      1 === t &&
                        r.range[l ? "animate" : "css"](
                          { height: i - e + "%" },
                          { queue: !1, duration: a.animate }
                        ))),
                (e = i);
            })
          : ((t = this.value()),
            (s = this._valueMin()),
            (n = this._valueMax()),
            (i = n !== s ? ((t - s) / (n - s)) * 100 : 0),
            (h["horizontal" === this.orientation ? "left" : "bottom"] =
              i + "%"),
            this.handle.stop(1, 1)[l ? "animate" : "css"](h, a.animate),
            "min" === o &&
              "horizontal" === this.orientation &&
              this.range
                .stop(1, 1)
                [l ? "animate" : "css"]({ width: i + "%" }, a.animate),
            "max" === o &&
              "horizontal" === this.orientation &&
              this.range
                .stop(1, 1)
                [l ? "animate" : "css"]({ width: 100 - i + "%" }, a.animate),
            "min" === o &&
              "vertical" === this.orientation &&
              this.range
                .stop(1, 1)
                [l ? "animate" : "css"]({ height: i + "%" }, a.animate),
            "max" === o &&
              "vertical" === this.orientation &&
              this.range
                .stop(1, 1)
                [l ? "animate" : "css"]({ height: 100 - i + "%" }, a.animate));
      },
      _handleEvents: {
        keydown: function (t) {
          var e,
            i,
            s,
            n = V(t.target).data("ui-slider-handle-index");
          switch (t.keyCode) {
            case V.ui.keyCode.HOME:
            case V.ui.keyCode.END:
            case V.ui.keyCode.PAGE_UP:
            case V.ui.keyCode.PAGE_DOWN:
            case V.ui.keyCode.UP:
            case V.ui.keyCode.RIGHT:
            case V.ui.keyCode.DOWN:
            case V.ui.keyCode.LEFT:
              if (
                (t.preventDefault(),
                !this._keySliding &&
                  ((this._keySliding = !0),
                  this._addClass(V(t.target), null, "ui-state-active"),
                  !1 === this._start(t, n)))
              )
                return;
          }
          switch (
            ((s = this.options.step),
            (e = i = this._hasMultipleValues() ? this.values(n) : this.value()),
            t.keyCode)
          ) {
            case V.ui.keyCode.HOME:
              i = this._valueMin();
              break;
            case V.ui.keyCode.END:
              i = this._valueMax();
              break;
            case V.ui.keyCode.PAGE_UP:
              i = this._trimAlignValue(
                e + (this._valueMax() - this._valueMin()) / this.numPages
              );
              break;
            case V.ui.keyCode.PAGE_DOWN:
              i = this._trimAlignValue(
                e - (this._valueMax() - this._valueMin()) / this.numPages
              );
              break;
            case V.ui.keyCode.UP:
            case V.ui.keyCode.RIGHT:
              if (e === this._valueMax()) return;
              i = this._trimAlignValue(e + s);
              break;
            case V.ui.keyCode.DOWN:
            case V.ui.keyCode.LEFT:
              if (e === this._valueMin()) return;
              i = this._trimAlignValue(e - s);
          }
          this._slide(t, n, i);
        },
        keyup: function (t) {
          var e = V(t.target).data("ui-slider-handle-index");
          this._keySliding &&
            ((this._keySliding = !1),
            this._stop(t, e),
            this._change(t, e),
            this._removeClass(V(t.target), null, "ui-state-active"));
        },
      },
    }),
    V.widget("ui.sortable", V.ui.mouse, {
      version: "1.13.2",
      widgetEventPrefix: "sort",
      ready: !1,
      options: {
        appendTo: "parent",
        axis: !1,
        connectWith: !1,
        containment: !1,
        cursor: "auto",
        cursorAt: !1,
        dropOnEmpty: !0,
        forcePlaceholderSize: !1,
        forceHelperSize: !1,
        grid: !1,
        handle: !1,
        helper: "original",
        items: "> *",
        opacity: !1,
        placeholder: !1,
        revert: !1,
        scroll: !0,
        scrollSensitivity: 20,
        scrollSpeed: 20,
        scope: "default",
        tolerance: "intersect",
        zIndex: 1e3,
        activate: null,
        beforeStop: null,
        change: null,
        deactivate: null,
        out: null,
        over: null,
        receive: null,
        remove: null,
        sort: null,
        start: null,
        stop: null,
        update: null,
      },
      _isOverAxis: function (t, e, i) {
        return e <= t && t < e + i;
      },
      _isFloating: function (t) {
        return (
          /left|right/.test(t.css("float")) ||
          /inline|table-cell/.test(t.css("display"))
        );
      },
      _create: function () {
        (this.containerCache = {}),
          this._addClass("ui-sortable"),
          this.refresh(),
          (this.offset = this.element.offset()),
          this._mouseInit(),
          this._setHandleClassName(),
          (this.ready = !0);
      },
      _setOption: function (t, e) {
        this._super(t, e), "handle" === t && this._setHandleClassName();
      },
      _setHandleClassName: function () {
        var t = this;
        this._removeClass(
          this.element.find(".ui-sortable-handle"),
          "ui-sortable-handle"
        ),
          V.each(this.items, function () {
            t._addClass(
              this.instance.options.handle
                ? this.item.find(this.instance.options.handle)
                : this.item,
              "ui-sortable-handle"
            );
          });
      },
      _destroy: function () {
        this._mouseDestroy();
        for (var t = this.items.length - 1; 0 <= t; t--)
          this.items[t].item.removeData(this.widgetName + "-item");
        return this;
      },
      _mouseCapture: function (t, e) {
        var i = null,
          s = !1,
          n = this;
        return (
          !this.reverting &&
          !this.options.disabled &&
          "static" !== this.options.type &&
          (this._refreshItems(t),
          V(t.target)
            .parents()
            .each(function () {
              if (V.data(this, n.widgetName + "-item") === n)
                return (i = V(this)), !1;
            }),
          !!(i =
            V.data(t.target, n.widgetName + "-item") === n ? V(t.target) : i) &&
            !(
              this.options.handle &&
              !e &&
              (V(this.options.handle, i)
                .find("*")
                .addBack()
                .each(function () {
                  this === t.target && (s = !0);
                }),
              !s)
            ) &&
            ((this.currentItem = i), this._removeCurrentsFromItems(), !0))
        );
      },
      _mouseStart: function (t, e, i) {
        var s,
          n,
          o = this.options;
        if (
          ((this.currentContainer = this).refreshPositions(),
          (this.appendTo = V(
            "parent" !== o.appendTo ? o.appendTo : this.currentItem.parent()
          )),
          (this.helper = this._createHelper(t)),
          this._cacheHelperProportions(),
          this._cacheMargins(),
          (this.offset = this.currentItem.offset()),
          (this.offset = {
            top: this.offset.top - this.margins.top,
            left: this.offset.left - this.margins.left,
          }),
          V.extend(this.offset, {
            click: {
              left: t.pageX - this.offset.left,
              top: t.pageY - this.offset.top,
            },
            relative: this._getRelativeOffset(),
          }),
          this.helper.css("position", "absolute"),
          (this.cssPosition = this.helper.css("position")),
          o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt),
          (this.domPosition = {
            prev: this.currentItem.prev()[0],
            parent: this.currentItem.parent()[0],
          }),
          this.helper[0] !== this.currentItem[0] && this.currentItem.hide(),
          this._createPlaceholder(),
          (this.scrollParent = this.placeholder.scrollParent()),
          V.extend(this.offset, { parent: this._getParentOffset() }),
          o.containment && this._setContainment(),
          o.cursor &&
            "auto" !== o.cursor &&
            ((n = this.document.find("body")),
            (this.storedCursor = n.css("cursor")),
            n.css("cursor", o.cursor),
            (this.storedStylesheet = V(
              "<style>*{ cursor: " + o.cursor + " !important; }</style>"
            ).appendTo(n))),
          o.zIndex &&
            (this.helper.css("zIndex") &&
              (this._storedZIndex = this.helper.css("zIndex")),
            this.helper.css("zIndex", o.zIndex)),
          o.opacity &&
            (this.helper.css("opacity") &&
              (this._storedOpacity = this.helper.css("opacity")),
            this.helper.css("opacity", o.opacity)),
          this.scrollParent[0] !== this.document[0] &&
            "HTML" !== this.scrollParent[0].tagName &&
            (this.overflowOffset = this.scrollParent.offset()),
          this._trigger("start", t, this._uiHash()),
          this._preserveHelperProportions || this._cacheHelperProportions(),
          !i)
        )
          for (s = this.containers.length - 1; 0 <= s; s--)
            this.containers[s]._trigger("activate", t, this._uiHash(this));
        return (
          V.ui.ddmanager && (V.ui.ddmanager.current = this),
          V.ui.ddmanager &&
            !o.dropBehaviour &&
            V.ui.ddmanager.prepareOffsets(this, t),
          (this.dragging = !0),
          this._addClass(this.helper, "ui-sortable-helper"),
          this.helper.parent().is(this.appendTo) ||
            (this.helper.detach().appendTo(this.appendTo),
            (this.offset.parent = this._getParentOffset())),
          (this.position = this.originalPosition = this._generatePosition(t)),
          (this.originalPageX = t.pageX),
          (this.originalPageY = t.pageY),
          (this.lastPositionAbs = this.positionAbs =
            this._convertPositionTo("absolute")),
          this._mouseDrag(t),
          !0
        );
      },
      _scroll: function (t) {
        var e = this.options,
          i = !1;
        return (
          this.scrollParent[0] !== this.document[0] &&
          "HTML" !== this.scrollParent[0].tagName
            ? (this.overflowOffset.top +
                this.scrollParent[0].offsetHeight -
                t.pageY <
              e.scrollSensitivity
                ? (this.scrollParent[0].scrollTop = i =
                    this.scrollParent[0].scrollTop + e.scrollSpeed)
                : t.pageY - this.overflowOffset.top < e.scrollSensitivity &&
                  (this.scrollParent[0].scrollTop = i =
                    this.scrollParent[0].scrollTop - e.scrollSpeed),
              this.overflowOffset.left +
                this.scrollParent[0].offsetWidth -
                t.pageX <
              e.scrollSensitivity
                ? (this.scrollParent[0].scrollLeft = i =
                    this.scrollParent[0].scrollLeft + e.scrollSpeed)
                : t.pageX - this.overflowOffset.left < e.scrollSensitivity &&
                  (this.scrollParent[0].scrollLeft = i =
                    this.scrollParent[0].scrollLeft - e.scrollSpeed))
            : (t.pageY - this.document.scrollTop() < e.scrollSensitivity
                ? (i = this.document.scrollTop(
                    this.document.scrollTop() - e.scrollSpeed
                  ))
                : this.window.height() - (t.pageY - this.document.scrollTop()) <
                    e.scrollSensitivity &&
                  (i = this.document.scrollTop(
                    this.document.scrollTop() + e.scrollSpeed
                  )),
              t.pageX - this.document.scrollLeft() < e.scrollSensitivity
                ? (i = this.document.scrollLeft(
                    this.document.scrollLeft() - e.scrollSpeed
                  ))
                : this.window.width() - (t.pageX - this.document.scrollLeft()) <
                    e.scrollSensitivity &&
                  (i = this.document.scrollLeft(
                    this.document.scrollLeft() + e.scrollSpeed
                  ))),
          i
        );
      },
      _mouseDrag: function (t) {
        var e,
          i,
          s,
          n,
          o = this.options;
        for (
          this.position = this._generatePosition(t),
            this.positionAbs = this._convertPositionTo("absolute"),
            (this.options.axis && "y" === this.options.axis) ||
              (this.helper[0].style.left = this.position.left + "px"),
            (this.options.axis && "x" === this.options.axis) ||
              (this.helper[0].style.top = this.position.top + "px"),
            o.scroll &&
              !1 !== this._scroll(t) &&
              (this._refreshItemPositions(!0),
              V.ui.ddmanager &&
                !o.dropBehaviour &&
                V.ui.ddmanager.prepareOffsets(this, t)),
            this.dragDirection = {
              vertical: this._getDragVerticalDirection(),
              horizontal: this._getDragHorizontalDirection(),
            },
            e = this.items.length - 1;
          0 <= e;
          e--
        )
          if (
            ((s = (i = this.items[e]).item[0]),
            (n = this._intersectsWithPointer(i)) &&
              i.instance === this.currentContainer &&
              !(
                s === this.currentItem[0] ||
                this.placeholder[1 === n ? "next" : "prev"]()[0] === s ||
                V.contains(this.placeholder[0], s) ||
                ("semi-dynamic" === this.options.type &&
                  V.contains(this.element[0], s))
              ))
          ) {
            if (
              ((this.direction = 1 === n ? "down" : "up"),
              "pointer" !== this.options.tolerance &&
                !this._intersectsWithSides(i))
            )
              break;
            this._rearrange(t, i), this._trigger("change", t, this._uiHash());
            break;
          }
        return (
          this._contactContainers(t),
          V.ui.ddmanager && V.ui.ddmanager.drag(this, t),
          this._trigger("sort", t, this._uiHash()),
          (this.lastPositionAbs = this.positionAbs),
          !1
        );
      },
      _mouseStop: function (t, e) {
        var i, s, n, o;
        if (t)
          return (
            V.ui.ddmanager &&
              !this.options.dropBehaviour &&
              V.ui.ddmanager.drop(this, t),
            this.options.revert
              ? ((s = (i = this).placeholder.offset()),
                (o = {}),
                ((n = this.options.axis) && "x" !== n) ||
                  (o.left =
                    s.left -
                    this.offset.parent.left -
                    this.margins.left +
                    (this.offsetParent[0] === this.document[0].body
                      ? 0
                      : this.offsetParent[0].scrollLeft)),
                (n && "y" !== n) ||
                  (o.top =
                    s.top -
                    this.offset.parent.top -
                    this.margins.top +
                    (this.offsetParent[0] === this.document[0].body
                      ? 0
                      : this.offsetParent[0].scrollTop)),
                (this.reverting = !0),
                V(this.helper).animate(
                  o,
                  parseInt(this.options.revert, 10) || 500,
                  function () {
                    i._clear(t);
                  }
                ))
              : this._clear(t, e),
            !1
          );
      },
      cancel: function () {
        if (this.dragging) {
          this._mouseUp(new V.Event("mouseup", { target: null })),
            "original" === this.options.helper
              ? (this.currentItem.css(this._storedCSS),
                this._removeClass(this.currentItem, "ui-sortable-helper"))
              : this.currentItem.show();
          for (var t = this.containers.length - 1; 0 <= t; t--)
            this.containers[t]._trigger("deactivate", null, this._uiHash(this)),
              this.containers[t].containerCache.over &&
                (this.containers[t]._trigger("out", null, this._uiHash(this)),
                (this.containers[t].containerCache.over = 0));
        }
        return (
          this.placeholder &&
            (this.placeholder[0].parentNode &&
              this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
            "original" !== this.options.helper &&
              this.helper &&
              this.helper[0].parentNode &&
              this.helper.remove(),
            V.extend(this, {
              helper: null,
              dragging: !1,
              reverting: !1,
              _noFinalSort: null,
            }),
            this.domPosition.prev
              ? V(this.domPosition.prev).after(this.currentItem)
              : V(this.domPosition.parent).prepend(this.currentItem)),
          this
        );
      },
      serialize: function (e) {
        var t = this._getItemsAsjQuery(e && e.connected),
          i = [];
        return (
          (e = e || {}),
          V(t).each(function () {
            var t = (V(e.item || this).attr(e.attribute || "id") || "").match(
              e.expression || /(.+)[\-=_](.+)/
            );
            t &&
              i.push(
                (e.key || t[1] + "[]") +
                  "=" +
                  (e.key && e.expression ? t[1] : t[2])
              );
          }),
          !i.length && e.key && i.push(e.key + "="),
          i.join("&")
        );
      },
      toArray: function (t) {
        var e = this._getItemsAsjQuery(t && t.connected),
          i = [];
        return (
          (t = t || {}),
          e.each(function () {
            i.push(V(t.item || this).attr(t.attribute || "id") || "");
          }),
          i
        );
      },
      _intersectsWith: function (t) {
        var e = this.positionAbs.left,
          i = e + this.helperProportions.width,
          s = this.positionAbs.top,
          n = s + this.helperProportions.height,
          o = t.left,
          a = o + t.width,
          r = t.top,
          l = r + t.height,
          h = this.offset.click.top,
          c = this.offset.click.left,
          h = "x" === this.options.axis || (r < s + h && s + h < l),
          c = "y" === this.options.axis || (o < e + c && e + c < a);
        return "pointer" === this.options.tolerance ||
          this.options.forcePointerForContainers ||
          ("pointer" !== this.options.tolerance &&
            this.helperProportions[this.floating ? "width" : "height"] >
              t[this.floating ? "width" : "height"])
          ? h && c
          : o < e + this.helperProportions.width / 2 &&
              i - this.helperProportions.width / 2 < a &&
              r < s + this.helperProportions.height / 2 &&
              n - this.helperProportions.height / 2 < l;
      },
      _intersectsWithPointer: function (t) {
        var e =
            "x" === this.options.axis ||
            this._isOverAxis(
              this.positionAbs.top + this.offset.click.top,
              t.top,
              t.height
            ),
          t =
            "y" === this.options.axis ||
            this._isOverAxis(
              this.positionAbs.left + this.offset.click.left,
              t.left,
              t.width
            );
        return (
          !(!e || !t) &&
          ((e = this.dragDirection.vertical),
          (t = this.dragDirection.horizontal),
          this.floating
            ? "right" === t || "down" === e
              ? 2
              : 1
            : e && ("down" === e ? 2 : 1))
        );
      },
      _intersectsWithSides: function (t) {
        var e = this._isOverAxis(
            this.positionAbs.top + this.offset.click.top,
            t.top + t.height / 2,
            t.height
          ),
          i = this._isOverAxis(
            this.positionAbs.left + this.offset.click.left,
            t.left + t.width / 2,
            t.width
          ),
          s = this.dragDirection.vertical,
          t = this.dragDirection.horizontal;
        return this.floating && t
          ? ("right" === t && i) || ("left" === t && !i)
          : s && (("down" === s && e) || ("up" === s && !e));
      },
      _getDragVerticalDirection: function () {
        var t = this.positionAbs.top - this.lastPositionAbs.top;
        return 0 != t && (0 < t ? "down" : "up");
      },
      _getDragHorizontalDirection: function () {
        var t = this.positionAbs.left - this.lastPositionAbs.left;
        return 0 != t && (0 < t ? "right" : "left");
      },
      refresh: function (t) {
        return (
          this._refreshItems(t),
          this._setHandleClassName(),
          this.refreshPositions(),
          this
        );
      },
      _connectWith: function () {
        var t = this.options;
        return t.connectWith.constructor === String
          ? [t.connectWith]
          : t.connectWith;
      },
      _getItemsAsjQuery: function (t) {
        var e,
          i,
          s,
          n,
          o = [],
          a = [],
          r = this._connectWith();
        if (r && t)
          for (e = r.length - 1; 0 <= e; e--)
            for (i = (s = V(r[e], this.document[0])).length - 1; 0 <= i; i--)
              (n = V.data(s[i], this.widgetFullName)) &&
                n !== this &&
                !n.options.disabled &&
                a.push([
                  "function" == typeof n.options.items
                    ? n.options.items.call(n.element)
                    : V(n.options.items, n.element)
                        .not(".ui-sortable-helper")
                        .not(".ui-sortable-placeholder"),
                  n,
                ]);
        function l() {
          o.push(this);
        }
        for (
          a.push([
            "function" == typeof this.options.items
              ? this.options.items.call(this.element, null, {
                  options: this.options,
                  item: this.currentItem,
                })
              : V(this.options.items, this.element)
                  .not(".ui-sortable-helper")
                  .not(".ui-sortable-placeholder"),
            this,
          ]),
            e = a.length - 1;
          0 <= e;
          e--
        )
          a[e][0].each(l);
        return V(o);
      },
      _removeCurrentsFromItems: function () {
        var i = this.currentItem.find(":data(" + this.widgetName + "-item)");
        this.items = V.grep(this.items, function (t) {
          for (var e = 0; e < i.length; e++) if (i[e] === t.item[0]) return !1;
          return !0;
        });
      },
      _refreshItems: function (t) {
        (this.items = []), (this.containers = [this]);
        var e,
          i,
          s,
          n,
          o,
          a,
          r,
          l,
          h = this.items,
          c = [
            [
              "function" == typeof this.options.items
                ? this.options.items.call(this.element[0], t, {
                    item: this.currentItem,
                  })
                : V(this.options.items, this.element),
              this,
            ],
          ],
          u = this._connectWith();
        if (u && this.ready)
          for (e = u.length - 1; 0 <= e; e--)
            for (i = (s = V(u[e], this.document[0])).length - 1; 0 <= i; i--)
              (n = V.data(s[i], this.widgetFullName)) &&
                n !== this &&
                !n.options.disabled &&
                (c.push([
                  "function" == typeof n.options.items
                    ? n.options.items.call(n.element[0], t, {
                        item: this.currentItem,
                      })
                    : V(n.options.items, n.element),
                  n,
                ]),
                this.containers.push(n));
        for (e = c.length - 1; 0 <= e; e--)
          for (o = c[e][1], l = (a = c[e][(i = 0)]).length; i < l; i++)
            (r = V(a[i])).data(this.widgetName + "-item", o),
              h.push({
                item: r,
                instance: o,
                width: 0,
                height: 0,
                left: 0,
                top: 0,
              });
      },
      _refreshItemPositions: function (t) {
        for (var e, i, s = this.items.length - 1; 0 <= s; s--)
          (e = this.items[s]),
            (this.currentContainer &&
              e.instance !== this.currentContainer &&
              e.item[0] !== this.currentItem[0]) ||
              ((i = this.options.toleranceElement
                ? V(this.options.toleranceElement, e.item)
                : e.item),
              t || ((e.width = i.outerWidth()), (e.height = i.outerHeight())),
              (i = i.offset()),
              (e.left = i.left),
              (e.top = i.top));
      },
      refreshPositions: function (t) {
        var e, i;
        if (
          ((this.floating =
            !!this.items.length &&
            ("x" === this.options.axis ||
              this._isFloating(this.items[0].item))),
          this.offsetParent &&
            this.helper &&
            (this.offset.parent = this._getParentOffset()),
          this._refreshItemPositions(t),
          this.options.custom && this.options.custom.refreshContainers)
        )
          this.options.custom.refreshContainers.call(this);
        else
          for (e = this.containers.length - 1; 0 <= e; e--)
            (i = this.containers[e].element.offset()),
              (this.containers[e].containerCache.left = i.left),
              (this.containers[e].containerCache.top = i.top),
              (this.containers[e].containerCache.width =
                this.containers[e].element.outerWidth()),
              (this.containers[e].containerCache.height =
                this.containers[e].element.outerHeight());
        return this;
      },
      _createPlaceholder: function (i) {
        var s,
          n,
          o = (i = i || this).options;
        (o.placeholder && o.placeholder.constructor !== String) ||
          ((s = o.placeholder),
          (n = i.currentItem[0].nodeName.toLowerCase()),
          (o.placeholder = {
            element: function () {
              var t = V("<" + n + ">", i.document[0]);
              return (
                i
                  ._addClass(
                    t,
                    "ui-sortable-placeholder",
                    s || i.currentItem[0].className
                  )
                  ._removeClass(t, "ui-sortable-helper"),
                "tbody" === n
                  ? i._createTrPlaceholder(
                      i.currentItem.find("tr").eq(0),
                      V("<tr>", i.document[0]).appendTo(t)
                    )
                  : "tr" === n
                  ? i._createTrPlaceholder(i.currentItem, t)
                  : "img" === n && t.attr("src", i.currentItem.attr("src")),
                s || t.css("visibility", "hidden"),
                t
              );
            },
            update: function (t, e) {
              (s && !o.forcePlaceholderSize) ||
                ((e.height() &&
                  (!o.forcePlaceholderSize || ("tbody" !== n && "tr" !== n))) ||
                  e.height(
                    i.currentItem.innerHeight() -
                      parseInt(i.currentItem.css("paddingTop") || 0, 10) -
                      parseInt(i.currentItem.css("paddingBottom") || 0, 10)
                  ),
                e.width() ||
                  e.width(
                    i.currentItem.innerWidth() -
                      parseInt(i.currentItem.css("paddingLeft") || 0, 10) -
                      parseInt(i.currentItem.css("paddingRight") || 0, 10)
                  ));
            },
          })),
          (i.placeholder = V(
            o.placeholder.element.call(i.element, i.currentItem)
          )),
          i.currentItem.after(i.placeholder),
          o.placeholder.update(i, i.placeholder);
      },
      _createTrPlaceholder: function (t, e) {
        var i = this;
        t.children().each(function () {
          V("<td>&#160;</td>", i.document[0])
            .attr("colspan", V(this).attr("colspan") || 1)
            .appendTo(e);
        });
      },
      _contactContainers: function (t) {
        for (
          var e,
            i,
            s,
            n,
            o,
            a,
            r,
            l,
            h,
            c = null,
            u = null,
            d = this.containers.length - 1;
          0 <= d;
          d--
        )
          V.contains(this.currentItem[0], this.containers[d].element[0]) ||
            (this._intersectsWith(this.containers[d].containerCache)
              ? (c &&
                  V.contains(this.containers[d].element[0], c.element[0])) ||
                ((c = this.containers[d]), (u = d))
              : this.containers[d].containerCache.over &&
                (this.containers[d]._trigger("out", t, this._uiHash(this)),
                (this.containers[d].containerCache.over = 0)));
        if (c)
          if (1 === this.containers.length)
            this.containers[u].containerCache.over ||
              (this.containers[u]._trigger("over", t, this._uiHash(this)),
              (this.containers[u].containerCache.over = 1));
          else {
            for (
              i = 1e4,
                s = null,
                n = (l = c.floating || this._isFloating(this.currentItem))
                  ? "left"
                  : "top",
                o = l ? "width" : "height",
                h = l ? "pageX" : "pageY",
                e = this.items.length - 1;
              0 <= e;
              e--
            )
              V.contains(
                this.containers[u].element[0],
                this.items[e].item[0]
              ) &&
                this.items[e].item[0] !== this.currentItem[0] &&
                ((a = this.items[e].item.offset()[n]),
                (r = !1),
                t[h] - a > this.items[e][o] / 2 && (r = !0),
                Math.abs(t[h] - a) < i &&
                  ((i = Math.abs(t[h] - a)),
                  (s = this.items[e]),
                  (this.direction = r ? "up" : "down")));
            (s || this.options.dropOnEmpty) &&
              (this.currentContainer !== this.containers[u]
                ? (s
                    ? this._rearrange(t, s, null, !0)
                    : this._rearrange(t, null, this.containers[u].element, !0),
                  this._trigger("change", t, this._uiHash()),
                  this.containers[u]._trigger("change", t, this._uiHash(this)),
                  (this.currentContainer = this.containers[u]),
                  this.options.placeholder.update(
                    this.currentContainer,
                    this.placeholder
                  ),
                  (this.scrollParent = this.placeholder.scrollParent()),
                  this.scrollParent[0] !== this.document[0] &&
                    "HTML" !== this.scrollParent[0].tagName &&
                    (this.overflowOffset = this.scrollParent.offset()),
                  this.containers[u]._trigger("over", t, this._uiHash(this)),
                  (this.containers[u].containerCache.over = 1))
                : this.currentContainer.containerCache.over ||
                  (this.containers[u]._trigger("over", t, this._uiHash()),
                  (this.currentContainer.containerCache.over = 1)));
          }
      },
      _createHelper: function (t) {
        var e = this.options,
          t =
            "function" == typeof e.helper
              ? V(e.helper.apply(this.element[0], [t, this.currentItem]))
              : "clone" === e.helper
              ? this.currentItem.clone()
              : this.currentItem;
        return (
          t.parents("body").length || this.appendTo[0].appendChild(t[0]),
          t[0] === this.currentItem[0] &&
            (this._storedCSS = {
              width: this.currentItem[0].style.width,
              height: this.currentItem[0].style.height,
              position: this.currentItem.css("position"),
              top: this.currentItem.css("top"),
              left: this.currentItem.css("left"),
            }),
          (t[0].style.width && !e.forceHelperSize) ||
            t.width(this.currentItem.width()),
          (t[0].style.height && !e.forceHelperSize) ||
            t.height(this.currentItem.height()),
          t
        );
      },
      _adjustOffsetFromHelper: function (t) {
        "string" == typeof t && (t = t.split(" ")),
          "left" in
            (t = Array.isArray(t) ? { left: +t[0], top: +t[1] || 0 } : t) &&
            (this.offset.click.left = t.left + this.margins.left),
          "right" in t &&
            (this.offset.click.left =
              this.helperProportions.width - t.right + this.margins.left),
          "top" in t && (this.offset.click.top = t.top + this.margins.top),
          "bottom" in t &&
            (this.offset.click.top =
              this.helperProportions.height - t.bottom + this.margins.top);
      },
      _getParentOffset: function () {
        this.offsetParent = this.helper.offsetParent();
        var t = this.offsetParent.offset();
        return (
          "absolute" === this.cssPosition &&
            this.scrollParent[0] !== this.document[0] &&
            V.contains(this.scrollParent[0], this.offsetParent[0]) &&
            ((t.left += this.scrollParent.scrollLeft()),
            (t.top += this.scrollParent.scrollTop())),
          {
            top:
              (t =
                this.offsetParent[0] === this.document[0].body ||
                (this.offsetParent[0].tagName &&
                  "html" === this.offsetParent[0].tagName.toLowerCase() &&
                  V.ui.ie)
                  ? { top: 0, left: 0 }
                  : t).top +
              (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
            left:
              t.left +
              (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0),
          }
        );
      },
      _getRelativeOffset: function () {
        if ("relative" !== this.cssPosition) return { top: 0, left: 0 };
        var t = this.currentItem.position();
        return {
          top:
            t.top -
            (parseInt(this.helper.css("top"), 10) || 0) +
            this.scrollParent.scrollTop(),
          left:
            t.left -
            (parseInt(this.helper.css("left"), 10) || 0) +
            this.scrollParent.scrollLeft(),
        };
      },
      _cacheMargins: function () {
        this.margins = {
          left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
          top: parseInt(this.currentItem.css("marginTop"), 10) || 0,
        };
      },
      _cacheHelperProportions: function () {
        this.helperProportions = {
          width: this.helper.outerWidth(),
          height: this.helper.outerHeight(),
        };
      },
      _setContainment: function () {
        var t,
          e,
          i = this.options;
        "parent" === i.containment &&
          (i.containment = this.helper[0].parentNode),
          ("document" !== i.containment && "window" !== i.containment) ||
            (this.containment = [
              0 - this.offset.relative.left - this.offset.parent.left,
              0 - this.offset.relative.top - this.offset.parent.top,
              "document" === i.containment
                ? this.document.width()
                : this.window.width() -
                  this.helperProportions.width -
                  this.margins.left,
              ("document" === i.containment
                ? this.document.height() ||
                  document.body.parentNode.scrollHeight
                : this.window.height() ||
                  this.document[0].body.parentNode.scrollHeight) -
                this.helperProportions.height -
                this.margins.top,
            ]),
          /^(document|window|parent)$/.test(i.containment) ||
            ((t = V(i.containment)[0]),
            (e = V(i.containment).offset()),
            (i = "hidden" !== V(t).css("overflow")),
            (this.containment = [
              e.left +
                (parseInt(V(t).css("borderLeftWidth"), 10) || 0) +
                (parseInt(V(t).css("paddingLeft"), 10) || 0) -
                this.margins.left,
              e.top +
                (parseInt(V(t).css("borderTopWidth"), 10) || 0) +
                (parseInt(V(t).css("paddingTop"), 10) || 0) -
                this.margins.top,
              e.left +
                (i ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) -
                (parseInt(V(t).css("borderLeftWidth"), 10) || 0) -
                (parseInt(V(t).css("paddingRight"), 10) || 0) -
                this.helperProportions.width -
                this.margins.left,
              e.top +
                (i
                  ? Math.max(t.scrollHeight, t.offsetHeight)
                  : t.offsetHeight) -
                (parseInt(V(t).css("borderTopWidth"), 10) || 0) -
                (parseInt(V(t).css("paddingBottom"), 10) || 0) -
                this.helperProportions.height -
                this.margins.top,
            ]));
      },
      _convertPositionTo: function (t, e) {
        e = e || this.position;
        var i = "absolute" === t ? 1 : -1,
          s =
            "absolute" !== this.cssPosition ||
            (this.scrollParent[0] !== this.document[0] &&
              V.contains(this.scrollParent[0], this.offsetParent[0]))
              ? this.scrollParent
              : this.offsetParent,
          t = /(html|body)/i.test(s[0].tagName);
        return {
          top:
            e.top +
            this.offset.relative.top * i +
            this.offset.parent.top * i -
            ("fixed" === this.cssPosition
              ? -this.scrollParent.scrollTop()
              : t
              ? 0
              : s.scrollTop()) *
              i,
          left:
            e.left +
            this.offset.relative.left * i +
            this.offset.parent.left * i -
            ("fixed" === this.cssPosition
              ? -this.scrollParent.scrollLeft()
              : t
              ? 0
              : s.scrollLeft()) *
              i,
        };
      },
      _generatePosition: function (t) {
        var e = this.options,
          i = t.pageX,
          s = t.pageY,
          n =
            "absolute" !== this.cssPosition ||
            (this.scrollParent[0] !== this.document[0] &&
              V.contains(this.scrollParent[0], this.offsetParent[0]))
              ? this.scrollParent
              : this.offsetParent,
          o = /(html|body)/i.test(n[0].tagName);
        return (
          "relative" !== this.cssPosition ||
            (this.scrollParent[0] !== this.document[0] &&
              this.scrollParent[0] !== this.offsetParent[0]) ||
            (this.offset.relative = this._getRelativeOffset()),
          this.originalPosition &&
            (this.containment &&
              (t.pageX - this.offset.click.left < this.containment[0] &&
                (i = this.containment[0] + this.offset.click.left),
              t.pageY - this.offset.click.top < this.containment[1] &&
                (s = this.containment[1] + this.offset.click.top),
              t.pageX - this.offset.click.left > this.containment[2] &&
                (i = this.containment[2] + this.offset.click.left),
              t.pageY - this.offset.click.top > this.containment[3] &&
                (s = this.containment[3] + this.offset.click.top)),
            e.grid &&
              ((t =
                this.originalPageY +
                Math.round((s - this.originalPageY) / e.grid[1]) * e.grid[1]),
              (s =
                !this.containment ||
                (t - this.offset.click.top >= this.containment[1] &&
                  t - this.offset.click.top <= this.containment[3])
                  ? t
                  : t - this.offset.click.top >= this.containment[1]
                  ? t - e.grid[1]
                  : t + e.grid[1]),
              (t =
                this.originalPageX +
                Math.round((i - this.originalPageX) / e.grid[0]) * e.grid[0]),
              (i =
                !this.containment ||
                (t - this.offset.click.left >= this.containment[0] &&
                  t - this.offset.click.left <= this.containment[2])
                  ? t
                  : t - this.offset.click.left >= this.containment[0]
                  ? t - e.grid[0]
                  : t + e.grid[0]))),
          {
            top:
              s -
              this.offset.click.top -
              this.offset.relative.top -
              this.offset.parent.top +
              ("fixed" === this.cssPosition
                ? -this.scrollParent.scrollTop()
                : o
                ? 0
                : n.scrollTop()),
            left:
              i -
              this.offset.click.left -
              this.offset.relative.left -
              this.offset.parent.left +
              ("fixed" === this.cssPosition
                ? -this.scrollParent.scrollLeft()
                : o
                ? 0
                : n.scrollLeft()),
          }
        );
      },
      _rearrange: function (t, e, i, s) {
        i
          ? i[0].appendChild(this.placeholder[0])
          : e.item[0].parentNode.insertBefore(
              this.placeholder[0],
              "down" === this.direction ? e.item[0] : e.item[0].nextSibling
            ),
          (this.counter = this.counter ? ++this.counter : 1);
        var n = this.counter;
        this._delay(function () {
          n === this.counter && this.refreshPositions(!s);
        });
      },
      _clear: function (t, e) {
        this.reverting = !1;
        var i,
          s = [];
        if (
          (!this._noFinalSort &&
            this.currentItem.parent().length &&
            this.placeholder.before(this.currentItem),
          (this._noFinalSort = null),
          this.helper[0] === this.currentItem[0])
        ) {
          for (i in this._storedCSS)
            ("auto" !== this._storedCSS[i] &&
              "static" !== this._storedCSS[i]) ||
              (this._storedCSS[i] = "");
          this.currentItem.css(this._storedCSS),
            this._removeClass(this.currentItem, "ui-sortable-helper");
        } else this.currentItem.show();
        function n(e, i, s) {
          return function (t) {
            s._trigger(e, t, i._uiHash(i));
          };
        }
        for (
          this.fromOutside &&
            !e &&
            s.push(function (t) {
              this._trigger("receive", t, this._uiHash(this.fromOutside));
            }),
            (!this.fromOutside &&
              this.domPosition.prev ===
                this.currentItem.prev().not(".ui-sortable-helper")[0] &&
              this.domPosition.parent === this.currentItem.parent()[0]) ||
              e ||
              s.push(function (t) {
                this._trigger("update", t, this._uiHash());
              }),
            this !== this.currentContainer &&
              (e ||
                (s.push(function (t) {
                  this._trigger("remove", t, this._uiHash());
                }),
                s.push(
                  function (e) {
                    return function (t) {
                      e._trigger("receive", t, this._uiHash(this));
                    };
                  }.call(this, this.currentContainer)
                ),
                s.push(
                  function (e) {
                    return function (t) {
                      e._trigger("update", t, this._uiHash(this));
                    };
                  }.call(this, this.currentContainer)
                ))),
            i = this.containers.length - 1;
          0 <= i;
          i--
        )
          e || s.push(n("deactivate", this, this.containers[i])),
            this.containers[i].containerCache.over &&
              (s.push(n("out", this, this.containers[i])),
              (this.containers[i].containerCache.over = 0));
        if (
          (this.storedCursor &&
            (this.document.find("body").css("cursor", this.storedCursor),
            this.storedStylesheet.remove()),
          this._storedOpacity &&
            this.helper.css("opacity", this._storedOpacity),
          this._storedZIndex &&
            this.helper.css(
              "zIndex",
              "auto" === this._storedZIndex ? "" : this._storedZIndex
            ),
          (this.dragging = !1),
          e || this._trigger("beforeStop", t, this._uiHash()),
          this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
          this.cancelHelperRemoval ||
            (this.helper[0] !== this.currentItem[0] && this.helper.remove(),
            (this.helper = null)),
          !e)
        ) {
          for (i = 0; i < s.length; i++) s[i].call(this, t);
          this._trigger("stop", t, this._uiHash());
        }
        return (this.fromOutside = !1), !this.cancelHelperRemoval;
      },
      _trigger: function () {
        !1 === V.Widget.prototype._trigger.apply(this, arguments) &&
          this.cancel();
      },
      _uiHash: function (t) {
        var e = t || this;
        return {
          helper: e.helper,
          placeholder: e.placeholder || V([]),
          position: e.position,
          originalPosition: e.originalPosition,
          offset: e.positionAbs,
          item: e.currentItem,
          sender: t ? t.element : null,
        };
      },
    });
  function ht(e) {
    return function () {
      var t = this.element.val();
      e.apply(this, arguments),
        this._refresh(),
        t !== this.element.val() && this._trigger("change");
    };
  }
  V.widget("ui.spinner", {
    version: "1.13.2",
    defaultElement: "<input>",
    widgetEventPrefix: "spin",
    options: {
      classes: {
        "ui-spinner": "ui-corner-all",
        "ui-spinner-down": "ui-corner-br",
        "ui-spinner-up": "ui-corner-tr",
      },
      culture: null,
      icons: { down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n" },
      incremental: !0,
      max: null,
      min: null,
      numberFormat: null,
      page: 10,
      step: 1,
      change: null,
      spin: null,
      start: null,
      stop: null,
    },
    _create: function () {
      this._setOption("max", this.options.max),
        this._setOption("min", this.options.min),
        this._setOption("step", this.options.step),
        "" !== this.value() && this._value(this.element.val(), !0),
        this._draw(),
        this._on(this._events),
        this._refresh(),
        this._on(this.window, {
          beforeunload: function () {
            this.element.removeAttr("autocomplete");
          },
        });
    },
    _getCreateOptions: function () {
      var s = this._super(),
        n = this.element;
      return (
        V.each(["min", "max", "step"], function (t, e) {
          var i = n.attr(e);
          null != i && i.length && (s[e] = i);
        }),
        s
      );
    },
    _events: {
      keydown: function (t) {
        this._start(t) && this._keydown(t) && t.preventDefault();
      },
      keyup: "_stop",
      focus: function () {
        this.previous = this.element.val();
      },
      blur: function (t) {
        this.cancelBlur
          ? delete this.cancelBlur
          : (this._stop(),
            this._refresh(),
            this.previous !== this.element.val() && this._trigger("change", t));
      },
      mousewheel: function (t, e) {
        var i = V.ui.safeActiveElement(this.document[0]);
        if (this.element[0] === i && e) {
          if (!this.spinning && !this._start(t)) return !1;
          this._spin((0 < e ? 1 : -1) * this.options.step, t),
            clearTimeout(this.mousewheelTimer),
            (this.mousewheelTimer = this._delay(function () {
              this.spinning && this._stop(t);
            }, 100)),
            t.preventDefault();
        }
      },
      "mousedown .ui-spinner-button": function (t) {
        var e;
        function i() {
          this.element[0] === V.ui.safeActiveElement(this.document[0]) ||
            (this.element.trigger("focus"),
            (this.previous = e),
            this._delay(function () {
              this.previous = e;
            }));
        }
        (e =
          this.element[0] === V.ui.safeActiveElement(this.document[0])
            ? this.previous
            : this.element.val()),
          t.preventDefault(),
          i.call(this),
          (this.cancelBlur = !0),
          this._delay(function () {
            delete this.cancelBlur, i.call(this);
          }),
          !1 !== this._start(t) &&
            this._repeat(
              null,
              V(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1,
              t
            );
      },
      "mouseup .ui-spinner-button": "_stop",
      "mouseenter .ui-spinner-button": function (t) {
        if (V(t.currentTarget).hasClass("ui-state-active"))
          return (
            !1 !== this._start(t) &&
            void this._repeat(
              null,
              V(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1,
              t
            )
          );
      },
      "mouseleave .ui-spinner-button": "_stop",
    },
    _enhance: function () {
      this.uiSpinner = this.element
        .attr("autocomplete", "off")
        .wrap("<span>")
        .parent()
        .append("<a></a><a></a>");
    },
    _draw: function () {
      this._enhance(),
        this._addClass(
          this.uiSpinner,
          "ui-spinner",
          "ui-widget ui-widget-content"
        ),
        this._addClass("ui-spinner-input"),
        this.element.attr("role", "spinbutton"),
        (this.buttons = this.uiSpinner
          .children("a")
          .attr("tabIndex", -1)
          .attr("aria-hidden", !0)
          .button({ classes: { "ui-button": "" } })),
        this._removeClass(this.buttons, "ui-corner-all"),
        this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"),
        this._addClass(
          this.buttons.last(),
          "ui-spinner-button ui-spinner-down"
        ),
        this.buttons
          .first()
          .button({ icon: this.options.icons.up, showLabel: !1 }),
        this.buttons
          .last()
          .button({ icon: this.options.icons.down, showLabel: !1 }),
        this.buttons.height() > Math.ceil(0.5 * this.uiSpinner.height()) &&
          0 < this.uiSpinner.height() &&
          this.uiSpinner.height(this.uiSpinner.height());
    },
    _keydown: function (t) {
      var e = this.options,
        i = V.ui.keyCode;
      switch (t.keyCode) {
        case i.UP:
          return this._repeat(null, 1, t), !0;
        case i.DOWN:
          return this._repeat(null, -1, t), !0;
        case i.PAGE_UP:
          return this._repeat(null, e.page, t), !0;
        case i.PAGE_DOWN:
          return this._repeat(null, -e.page, t), !0;
      }
      return !1;
    },
    _start: function (t) {
      return (
        !(!this.spinning && !1 === this._trigger("start", t)) &&
        (this.counter || (this.counter = 1), (this.spinning = !0))
      );
    },
    _repeat: function (t, e, i) {
      (t = t || 500),
        clearTimeout(this.timer),
        (this.timer = this._delay(function () {
          this._repeat(40, e, i);
        }, t)),
        this._spin(e * this.options.step, i);
    },
    _spin: function (t, e) {
      var i = this.value() || 0;
      this.counter || (this.counter = 1),
        (i = this._adjustValue(i + t * this._increment(this.counter))),
        (this.spinning && !1 === this._trigger("spin", e, { value: i })) ||
          (this._value(i), this.counter++);
    },
    _increment: function (t) {
      var e = this.options.incremental;
      return e
        ? "function" == typeof e
          ? e(t)
          : Math.floor((t * t * t) / 5e4 - (t * t) / 500 + (17 * t) / 200 + 1)
        : 1;
    },
    _precision: function () {
      var t = this._precisionOf(this.options.step);
      return (t =
        null !== this.options.min
          ? Math.max(t, this._precisionOf(this.options.min))
          : t);
    },
    _precisionOf: function (t) {
      var e = t.toString(),
        t = e.indexOf(".");
      return -1 === t ? 0 : e.length - t - 1;
    },
    _adjustValue: function (t) {
      var e = this.options,
        i = null !== e.min ? e.min : 0,
        s = t - i;
      return (
        (t = i + Math.round(s / e.step) * e.step),
        (t = parseFloat(t.toFixed(this._precision()))),
        null !== e.max && t > e.max
          ? e.max
          : null !== e.min && t < e.min
          ? e.min
          : t
      );
    },
    _stop: function (t) {
      this.spinning &&
        (clearTimeout(this.timer),
        clearTimeout(this.mousewheelTimer),
        (this.counter = 0),
        (this.spinning = !1),
        this._trigger("stop", t));
    },
    _setOption: function (t, e) {
      var i;
      if ("culture" === t || "numberFormat" === t)
        return (
          (i = this._parse(this.element.val())),
          (this.options[t] = e),
          void this.element.val(this._format(i))
        );
      ("max" !== t && "min" !== t && "step" !== t) ||
        ("string" == typeof e && (e = this._parse(e))),
        "icons" === t &&
          ((i = this.buttons.first().find(".ui-icon")),
          this._removeClass(i, null, this.options.icons.up),
          this._addClass(i, null, e.up),
          (i = this.buttons.last().find(".ui-icon")),
          this._removeClass(i, null, this.options.icons.down),
          this._addClass(i, null, e.down)),
        this._super(t, e);
    },
    _setOptionDisabled: function (t) {
      this._super(t),
        this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t),
        this.element.prop("disabled", !!t),
        this.buttons.button(t ? "disable" : "enable");
    },
    _setOptions: ht(function (t) {
      this._super(t);
    }),
    _parse: function (t) {
      return "" ===
        (t =
          "string" == typeof t && "" !== t
            ? window.Globalize && this.options.numberFormat
              ? Globalize.parseFloat(t, 10, this.options.culture)
              : +t
            : t) || isNaN(t)
        ? null
        : t;
    },
    _format: function (t) {
      return "" === t
        ? ""
        : window.Globalize && this.options.numberFormat
        ? Globalize.format(t, this.options.numberFormat, this.options.culture)
        : t;
    },
    _refresh: function () {
      this.element.attr({
        "aria-valuemin": this.options.min,
        "aria-valuemax": this.options.max,
        "aria-valuenow": this._parse(this.element.val()),
      });
    },
    isValid: function () {
      var t = this.value();
      return null !== t && t === this._adjustValue(t);
    },
    _value: function (t, e) {
      var i;
      "" !== t &&
        null !== (i = this._parse(t)) &&
        (e || (i = this._adjustValue(i)), (t = this._format(i))),
        this.element.val(t),
        this._refresh();
    },
    _destroy: function () {
      this.element
        .prop("disabled", !1)
        .removeAttr(
          "autocomplete role aria-valuemin aria-valuemax aria-valuenow"
        ),
        this.uiSpinner.replaceWith(this.element);
    },
    stepUp: ht(function (t) {
      this._stepUp(t);
    }),
    _stepUp: function (t) {
      this._start() && (this._spin((t || 1) * this.options.step), this._stop());
    },
    stepDown: ht(function (t) {
      this._stepDown(t);
    }),
    _stepDown: function (t) {
      this._start() &&
        (this._spin((t || 1) * -this.options.step), this._stop());
    },
    pageUp: ht(function (t) {
      this._stepUp((t || 1) * this.options.page);
    }),
    pageDown: ht(function (t) {
      this._stepDown((t || 1) * this.options.page);
    }),
    value: function (t) {
      if (!arguments.length) return this._parse(this.element.val());
      ht(this._value).call(this, t);
    },
    widget: function () {
      return this.uiSpinner;
    },
  }),
    !1 !== V.uiBackCompat &&
      V.widget("ui.spinner", V.ui.spinner, {
        _enhance: function () {
          this.uiSpinner = this.element
            .attr("autocomplete", "off")
            .wrap(this._uiSpinnerHtml())
            .parent()
            .append(this._buttonHtml());
        },
        _uiSpinnerHtml: function () {
          return "<span>";
        },
        _buttonHtml: function () {
          return "<a></a><a></a>";
        },
      });
  var ct;
  V.ui.spinner;
  V.widget("ui.tabs", {
    version: "1.13.2",
    delay: 300,
    options: {
      active: null,
      classes: {
        "ui-tabs": "ui-corner-all",
        "ui-tabs-nav": "ui-corner-all",
        "ui-tabs-panel": "ui-corner-bottom",
        "ui-tabs-tab": "ui-corner-top",
      },
      collapsible: !1,
      event: "click",
      heightStyle: "content",
      hide: null,
      show: null,
      activate: null,
      beforeActivate: null,
      beforeLoad: null,
      load: null,
    },
    _isLocal:
      ((ct = /#.*$/),
      function (t) {
        var e = t.href.replace(ct, ""),
          i = location.href.replace(ct, "");
        try {
          e = decodeURIComponent(e);
        } catch (t) {}
        try {
          i = decodeURIComponent(i);
        } catch (t) {}
        return 1 < t.hash.length && e === i;
      }),
    _create: function () {
      var e = this,
        t = this.options;
      (this.running = !1),
        this._addClass("ui-tabs", "ui-widget ui-widget-content"),
        this._toggleClass("ui-tabs-collapsible", null, t.collapsible),
        this._processTabs(),
        (t.active = this._initialActive()),
        Array.isArray(t.disabled) &&
          (t.disabled = V.uniqueSort(
            t.disabled.concat(
              V.map(this.tabs.filter(".ui-state-disabled"), function (t) {
                return e.tabs.index(t);
              })
            )
          ).sort()),
        !1 !== this.options.active && this.anchors.length
          ? (this.active = this._findActive(t.active))
          : (this.active = V()),
        this._refresh(),
        this.active.length && this.load(t.active);
    },
    _initialActive: function () {
      var i = this.options.active,
        t = this.options.collapsible,
        s = location.hash.substring(1);
      return (
        null === i &&
          (s &&
            this.tabs.each(function (t, e) {
              if (V(e).attr("aria-controls") === s) return (i = t), !1;
            }),
          (null !==
            (i =
              null === i
                ? this.tabs.index(this.tabs.filter(".ui-tabs-active"))
                : i) &&
            -1 !== i) ||
            (i = !!this.tabs.length && 0)),
        !1 !== i &&
          -1 === (i = this.tabs.index(this.tabs.eq(i))) &&
          (i = !t && 0),
        (i = !t && !1 === i && this.anchors.length ? 0 : i)
      );
    },
    _getCreateEventData: function () {
      return {
        tab: this.active,
        panel: this.active.length ? this._getPanelForTab(this.active) : V(),
      };
    },
    _tabKeydown: function (t) {
      var e = V(V.ui.safeActiveElement(this.document[0])).closest("li"),
        i = this.tabs.index(e),
        s = !0;
      if (!this._handlePageNav(t)) {
        switch (t.keyCode) {
          case V.ui.keyCode.RIGHT:
          case V.ui.keyCode.DOWN:
            i++;
            break;
          case V.ui.keyCode.UP:
          case V.ui.keyCode.LEFT:
            (s = !1), i--;
            break;
          case V.ui.keyCode.END:
            i = this.anchors.length - 1;
            break;
          case V.ui.keyCode.HOME:
            i = 0;
            break;
          case V.ui.keyCode.SPACE:
            return (
              t.preventDefault(),
              clearTimeout(this.activating),
              void this._activate(i)
            );
          case V.ui.keyCode.ENTER:
            return (
              t.preventDefault(),
              clearTimeout(this.activating),
              void this._activate(i !== this.options.active && i)
            );
          default:
            return;
        }
        t.preventDefault(),
          clearTimeout(this.activating),
          (i = this._focusNextTab(i, s)),
          t.ctrlKey ||
            t.metaKey ||
            (e.attr("aria-selected", "false"),
            this.tabs.eq(i).attr("aria-selected", "true"),
            (this.activating = this._delay(function () {
              this.option("active", i);
            }, this.delay)));
      }
    },
    _panelKeydown: function (t) {
      this._handlePageNav(t) ||
        (t.ctrlKey &&
          t.keyCode === V.ui.keyCode.UP &&
          (t.preventDefault(), this.active.trigger("focus")));
    },
    _handlePageNav: function (t) {
      return t.altKey && t.keyCode === V.ui.keyCode.PAGE_UP
        ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0)
        : t.altKey && t.keyCode === V.ui.keyCode.PAGE_DOWN
        ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0)
        : void 0;
    },
    _findNextTab: function (t, e) {
      var i = this.tabs.length - 1;
      for (
        ;
        -1 !==
        V.inArray((t = (t = i < t ? 0 : t) < 0 ? i : t), this.options.disabled);

      )
        t = e ? t + 1 : t - 1;
      return t;
    },
    _focusNextTab: function (t, e) {
      return (t = this._findNextTab(t, e)), this.tabs.eq(t).trigger("focus"), t;
    },
    _setOption: function (t, e) {
      "active" !== t
        ? (this._super(t, e),
          "collapsible" === t &&
            (this._toggleClass("ui-tabs-collapsible", null, e),
            e || !1 !== this.options.active || this._activate(0)),
          "event" === t && this._setupEvents(e),
          "heightStyle" === t && this._setupHeightStyle(e))
        : this._activate(e);
    },
    _sanitizeSelector: function (t) {
      return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "";
    },
    refresh: function () {
      var t = this.options,
        e = this.tablist.children(":has(a[href])");
      (t.disabled = V.map(e.filter(".ui-state-disabled"), function (t) {
        return e.index(t);
      })),
        this._processTabs(),
        !1 !== t.active && this.anchors.length
          ? this.active.length && !V.contains(this.tablist[0], this.active[0])
            ? this.tabs.length === t.disabled.length
              ? ((t.active = !1), (this.active = V()))
              : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1))
            : (t.active = this.tabs.index(this.active))
          : ((t.active = !1), (this.active = V())),
        this._refresh();
    },
    _refresh: function () {
      this._setOptionDisabled(this.options.disabled),
        this._setupEvents(this.options.event),
        this._setupHeightStyle(this.options.heightStyle),
        this.tabs
          .not(this.active)
          .attr({
            "aria-selected": "false",
            "aria-expanded": "false",
            tabIndex: -1,
          }),
        this.panels
          .not(this._getPanelForTab(this.active))
          .hide()
          .attr({ "aria-hidden": "true" }),
        this.active.length
          ? (this.active.attr({
              "aria-selected": "true",
              "aria-expanded": "true",
              tabIndex: 0,
            }),
            this._addClass(this.active, "ui-tabs-active", "ui-state-active"),
            this._getPanelForTab(this.active)
              .show()
              .attr({ "aria-hidden": "false" }))
          : this.tabs.eq(0).attr("tabIndex", 0);
    },
    _processTabs: function () {
      var l = this,
        t = this.tabs,
        e = this.anchors,
        i = this.panels;
      (this.tablist = this._getList().attr("role", "tablist")),
        this._addClass(
          this.tablist,
          "ui-tabs-nav",
          "ui-helper-reset ui-helper-clearfix ui-widget-header"
        ),
        this.tablist
          .on("mousedown" + this.eventNamespace, "> li", function (t) {
            V(this).is(".ui-state-disabled") && t.preventDefault();
          })
          .on("focus" + this.eventNamespace, ".ui-tabs-anchor", function () {
            V(this).closest("li").is(".ui-state-disabled") && this.blur();
          }),
        (this.tabs = this.tablist
          .find("> li:has(a[href])")
          .attr({ role: "tab", tabIndex: -1 })),
        this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"),
        (this.anchors = this.tabs
          .map(function () {
            return V("a", this)[0];
          })
          .attr({ tabIndex: -1 })),
        this._addClass(this.anchors, "ui-tabs-anchor"),
        (this.panels = V()),
        this.anchors.each(function (t, e) {
          var i,
            s,
            n,
            o = V(e).uniqueId().attr("id"),
            a = V(e).closest("li"),
            r = a.attr("aria-controls");
          l._isLocal(e)
            ? ((n = (i = e.hash).substring(1)),
              (s = l.element.find(l._sanitizeSelector(i))))
            : ((n = a.attr("aria-controls") || V({}).uniqueId()[0].id),
              (s = l.element.find((i = "#" + n))).length ||
                (s = l._createPanel(n)).insertAfter(
                  l.panels[t - 1] || l.tablist
                ),
              s.attr("aria-live", "polite")),
            s.length && (l.panels = l.panels.add(s)),
            r && a.data("ui-tabs-aria-controls", r),
            a.attr({ "aria-controls": n, "aria-labelledby": o }),
            s.attr("aria-labelledby", o);
        }),
        this.panels.attr("role", "tabpanel"),
        this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"),
        t &&
          (this._off(t.not(this.tabs)),
          this._off(e.not(this.anchors)),
          this._off(i.not(this.panels)));
    },
    _getList: function () {
      return this.tablist || this.element.find("ol, ul").eq(0);
    },
    _createPanel: function (t) {
      return V("<div>").attr("id", t).data("ui-tabs-destroy", !0);
    },
    _setOptionDisabled: function (t) {
      var e, i;
      for (
        Array.isArray(t) &&
          (t.length ? t.length === this.anchors.length && (t = !0) : (t = !1)),
          i = 0;
        (e = this.tabs[i]);
        i++
      )
        (e = V(e)),
          !0 === t || -1 !== V.inArray(i, t)
            ? (e.attr("aria-disabled", "true"),
              this._addClass(e, null, "ui-state-disabled"))
            : (e.removeAttr("aria-disabled"),
              this._removeClass(e, null, "ui-state-disabled"));
      (this.options.disabled = t),
        this._toggleClass(
          this.widget(),
          this.widgetFullName + "-disabled",
          null,
          !0 === t
        );
    },
    _setupEvents: function (t) {
      var i = {};
      t &&
        V.each(t.split(" "), function (t, e) {
          i[e] = "_eventHandler";
        }),
        this._off(this.anchors.add(this.tabs).add(this.panels)),
        this._on(!0, this.anchors, {
          click: function (t) {
            t.preventDefault();
          },
        }),
        this._on(this.anchors, i),
        this._on(this.tabs, { keydown: "_tabKeydown" }),
        this._on(this.panels, { keydown: "_panelKeydown" }),
        this._focusable(this.tabs),
        this._hoverable(this.tabs);
    },
    _setupHeightStyle: function (t) {
      var i,
        e = this.element.parent();
      "fill" === t
        ? ((i = e.height()),
          (i -= this.element.outerHeight() - this.element.height()),
          this.element.siblings(":visible").each(function () {
            var t = V(this),
              e = t.css("position");
            "absolute" !== e && "fixed" !== e && (i -= t.outerHeight(!0));
          }),
          this.element
            .children()
            .not(this.panels)
            .each(function () {
              i -= V(this).outerHeight(!0);
            }),
          this.panels
            .each(function () {
              V(this).height(
                Math.max(0, i - V(this).innerHeight() + V(this).height())
              );
            })
            .css("overflow", "auto"))
        : "auto" === t &&
          ((i = 0),
          this.panels
            .each(function () {
              i = Math.max(i, V(this).height("").height());
            })
            .height(i));
    },
    _eventHandler: function (t) {
      var e = this.options,
        i = this.active,
        s = V(t.currentTarget).closest("li"),
        n = s[0] === i[0],
        o = n && e.collapsible,
        a = o ? V() : this._getPanelForTab(s),
        r = i.length ? this._getPanelForTab(i) : V(),
        i = { oldTab: i, oldPanel: r, newTab: o ? V() : s, newPanel: a };
      t.preventDefault(),
        s.hasClass("ui-state-disabled") ||
          s.hasClass("ui-tabs-loading") ||
          this.running ||
          (n && !e.collapsible) ||
          !1 === this._trigger("beforeActivate", t, i) ||
          ((e.active = !o && this.tabs.index(s)),
          (this.active = n ? V() : s),
          this.xhr && this.xhr.abort(),
          r.length ||
            a.length ||
            V.error("jQuery UI Tabs: Mismatching fragment identifier."),
          a.length && this.load(this.tabs.index(s), t),
          this._toggle(t, i));
    },
    _toggle: function (t, e) {
      var i = this,
        s = e.newPanel,
        n = e.oldPanel;
      function o() {
        (i.running = !1), i._trigger("activate", t, e);
      }
      function a() {
        i._addClass(
          e.newTab.closest("li"),
          "ui-tabs-active",
          "ui-state-active"
        ),
          s.length && i.options.show
            ? i._show(s, i.options.show, o)
            : (s.show(), o());
      }
      (this.running = !0),
        n.length && this.options.hide
          ? this._hide(n, this.options.hide, function () {
              i._removeClass(
                e.oldTab.closest("li"),
                "ui-tabs-active",
                "ui-state-active"
              ),
                a();
            })
          : (this._removeClass(
              e.oldTab.closest("li"),
              "ui-tabs-active",
              "ui-state-active"
            ),
            n.hide(),
            a()),
        n.attr("aria-hidden", "true"),
        e.oldTab.attr({ "aria-selected": "false", "aria-expanded": "false" }),
        s.length && n.length
          ? e.oldTab.attr("tabIndex", -1)
          : s.length &&
            this.tabs
              .filter(function () {
                return 0 === V(this).attr("tabIndex");
              })
              .attr("tabIndex", -1),
        s.attr("aria-hidden", "false"),
        e.newTab.attr({
          "aria-selected": "true",
          "aria-expanded": "true",
          tabIndex: 0,
        });
    },
    _activate: function (t) {
      var t = this._findActive(t);
      t[0] !== this.active[0] &&
        ((t = (t = !t.length ? this.active : t).find(".ui-tabs-anchor")[0]),
        this._eventHandler({
          target: t,
          currentTarget: t,
          preventDefault: V.noop,
        }));
    },
    _findActive: function (t) {
      return !1 === t ? V() : this.tabs.eq(t);
    },
    _getIndex: function (t) {
      return (t =
        "string" == typeof t
          ? this.anchors.index(
              this.anchors.filter("[href$='" + V.escapeSelector(t) + "']")
            )
          : t);
    },
    _destroy: function () {
      this.xhr && this.xhr.abort(),
        this.tablist.removeAttr("role").off(this.eventNamespace),
        this.anchors.removeAttr("role tabIndex").removeUniqueId(),
        this.tabs.add(this.panels).each(function () {
          V.data(this, "ui-tabs-destroy")
            ? V(this).remove()
            : V(this).removeAttr(
                "role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded"
              );
        }),
        this.tabs.each(function () {
          var t = V(this),
            e = t.data("ui-tabs-aria-controls");
          e
            ? t.attr("aria-controls", e).removeData("ui-tabs-aria-controls")
            : t.removeAttr("aria-controls");
        }),
        this.panels.show(),
        "content" !== this.options.heightStyle && this.panels.css("height", "");
    },
    enable: function (i) {
      var t = this.options.disabled;
      !1 !== t &&
        ((t =
          void 0 !== i &&
          ((i = this._getIndex(i)),
          Array.isArray(t)
            ? V.map(t, function (t) {
                return t !== i ? t : null;
              })
            : V.map(this.tabs, function (t, e) {
                return e !== i ? e : null;
              }))),
        this._setOptionDisabled(t));
    },
    disable: function (t) {
      var e = this.options.disabled;
      if (!0 !== e) {
        if (void 0 === t) e = !0;
        else {
          if (((t = this._getIndex(t)), -1 !== V.inArray(t, e))) return;
          e = Array.isArray(e) ? V.merge([t], e).sort() : [t];
        }
        this._setOptionDisabled(e);
      }
    },
    load: function (t, s) {
      t = this._getIndex(t);
      function n(t, e) {
        "abort" === e && o.panels.stop(!1, !0),
          o._removeClass(i, "ui-tabs-loading"),
          a.removeAttr("aria-busy"),
          t === o.xhr && delete o.xhr;
      }
      var o = this,
        i = this.tabs.eq(t),
        t = i.find(".ui-tabs-anchor"),
        a = this._getPanelForTab(i),
        r = { tab: i, panel: a };
      this._isLocal(t[0]) ||
        ((this.xhr = V.ajax(this._ajaxSettings(t, s, r))),
        this.xhr &&
          "canceled" !== this.xhr.statusText &&
          (this._addClass(i, "ui-tabs-loading"),
          a.attr("aria-busy", "true"),
          this.xhr
            .done(function (t, e, i) {
              setTimeout(function () {
                a.html(t), o._trigger("load", s, r), n(i, e);
              }, 1);
            })
            .fail(function (t, e) {
              setTimeout(function () {
                n(t, e);
              }, 1);
            })));
    },
    _ajaxSettings: function (t, i, s) {
      var n = this;
      return {
        url: t.attr("href").replace(/#.*$/, ""),
        beforeSend: function (t, e) {
          return n._trigger(
            "beforeLoad",
            i,
            V.extend({ jqXHR: t, ajaxSettings: e }, s)
          );
        },
      };
    },
    _getPanelForTab: function (t) {
      t = V(t).attr("aria-controls");
      return this.element.find(this._sanitizeSelector("#" + t));
    },
  }),
    !1 !== V.uiBackCompat &&
      V.widget("ui.tabs", V.ui.tabs, {
        _processTabs: function () {
          this._superApply(arguments), this._addClass(this.tabs, "ui-tab");
        },
      });
  V.ui.tabs;
  V.widget("ui.tooltip", {
    version: "1.13.2",
    options: {
      classes: { "ui-tooltip": "ui-corner-all ui-widget-shadow" },
      content: function () {
        var t = V(this).attr("title");
        return V("<a>").text(t).html();
      },
      hide: !0,
      items: "[title]:not([disabled])",
      position: {
        my: "left top+15",
        at: "left bottom",
        collision: "flipfit flip",
      },
      show: !0,
      track: !1,
      close: null,
      open: null,
    },
    _addDescribedBy: function (t, e) {
      var i = (t.attr("aria-describedby") || "").split(/\s+/);
      i.push(e),
        t
          .data("ui-tooltip-id", e)
          .attr("aria-describedby", String.prototype.trim.call(i.join(" ")));
    },
    _removeDescribedBy: function (t) {
      var e = t.data("ui-tooltip-id"),
        i = (t.attr("aria-describedby") || "").split(/\s+/),
        e = V.inArray(e, i);
      -1 !== e && i.splice(e, 1),
        t.removeData("ui-tooltip-id"),
        (i = String.prototype.trim.call(i.join(" ")))
          ? t.attr("aria-describedby", i)
          : t.removeAttr("aria-describedby");
    },
    _create: function () {
      this._on({ mouseover: "open", focusin: "open" }),
        (this.tooltips = {}),
        (this.parents = {}),
        (this.liveRegion = V("<div>")
          .attr({
            role: "log",
            "aria-live": "assertive",
            "aria-relevant": "additions",
          })
          .appendTo(this.document[0].body)),
        this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"),
        (this.disabledTitles = V([]));
    },
    _setOption: function (t, e) {
      var i = this;
      this._super(t, e),
        "content" === t &&
          V.each(this.tooltips, function (t, e) {
            i._updateContent(e.element);
          });
    },
    _setOptionDisabled: function (t) {
      this[t ? "_disable" : "_enable"]();
    },
    _disable: function () {
      var s = this;
      V.each(this.tooltips, function (t, e) {
        var i = V.Event("blur");
        (i.target = i.currentTarget = e.element[0]), s.close(i, !0);
      }),
        (this.disabledTitles = this.disabledTitles.add(
          this.element
            .find(this.options.items)
            .addBack()
            .filter(function () {
              var t = V(this);
              if (t.is("[title]"))
                return t
                  .data("ui-tooltip-title", t.attr("title"))
                  .removeAttr("title");
            })
        ));
    },
    _enable: function () {
      this.disabledTitles.each(function () {
        var t = V(this);
        t.data("ui-tooltip-title") &&
          t.attr("title", t.data("ui-tooltip-title"));
      }),
        (this.disabledTitles = V([]));
    },
    open: function (t) {
      var i = this,
        e = V(t ? t.target : this.element).closest(this.options.items);
      e.length &&
        !e.data("ui-tooltip-id") &&
        (e.attr("title") && e.data("ui-tooltip-title", e.attr("title")),
        e.data("ui-tooltip-open", !0),
        t &&
          "mouseover" === t.type &&
          e.parents().each(function () {
            var t,
              e = V(this);
            e.data("ui-tooltip-open") &&
              (((t = V.Event("blur")).target = t.currentTarget = this),
              i.close(t, !0)),
              e.attr("title") &&
                (e.uniqueId(),
                (i.parents[this.id] = {
                  element: this,
                  title: e.attr("title"),
                }),
                e.attr("title", ""));
          }),
        this._registerCloseHandlers(t, e),
        this._updateContent(e, t));
    },
    _updateContent: function (e, i) {
      var t = this.options.content,
        s = this,
        n = i ? i.type : null;
      if ("string" == typeof t || t.nodeType || t.jquery)
        return this._open(i, e, t);
      (t = t.call(e[0], function (t) {
        s._delay(function () {
          e.data("ui-tooltip-open") && (i && (i.type = n), this._open(i, e, t));
        });
      })) && this._open(i, e, t);
    },
    _open: function (t, e, i) {
      var s,
        n,
        o,
        a = V.extend({}, this.options.position);
      function r(t) {
        (a.of = t), n.is(":hidden") || n.position(a);
      }
      i &&
        ((s = this._find(e))
          ? s.tooltip.find(".ui-tooltip-content").html(i)
          : (e.is("[title]") &&
              (t && "mouseover" === t.type
                ? e.attr("title", "")
                : e.removeAttr("title")),
            (s = this._tooltip(e)),
            (n = s.tooltip),
            this._addDescribedBy(e, n.attr("id")),
            n.find(".ui-tooltip-content").html(i),
            this.liveRegion.children().hide(),
            (i = V("<div>").html(n.find(".ui-tooltip-content").html()))
              .removeAttr("name")
              .find("[name]")
              .removeAttr("name"),
            i.removeAttr("id").find("[id]").removeAttr("id"),
            i.appendTo(this.liveRegion),
            this.options.track && t && /^mouse/.test(t.type)
              ? (this._on(this.document, { mousemove: r }), r(t))
              : n.position(V.extend({ of: e }, this.options.position)),
            n.hide(),
            this._show(n, this.options.show),
            this.options.track &&
              this.options.show &&
              this.options.show.delay &&
              (o = this.delayedShow =
                setInterval(function () {
                  n.is(":visible") && (r(a.of), clearInterval(o));
                }, 13)),
            this._trigger("open", t, { tooltip: n })));
    },
    _registerCloseHandlers: function (t, e) {
      var i = {
        keyup: function (t) {
          t.keyCode === V.ui.keyCode.ESCAPE &&
            (((t = V.Event(t)).currentTarget = e[0]), this.close(t, !0));
        },
      };
      e[0] !== this.element[0] &&
        (i.remove = function () {
          var t = this._find(e);
          t && this._removeTooltip(t.tooltip);
        }),
        (t && "mouseover" !== t.type) || (i.mouseleave = "close"),
        (t && "focusin" !== t.type) || (i.focusout = "close"),
        this._on(!0, e, i);
    },
    close: function (t) {
      var e,
        i = this,
        s = V(t ? t.currentTarget : this.element),
        n = this._find(s);
      n
        ? ((e = n.tooltip),
          n.closing ||
            (clearInterval(this.delayedShow),
            s.data("ui-tooltip-title") &&
              !s.attr("title") &&
              s.attr("title", s.data("ui-tooltip-title")),
            this._removeDescribedBy(s),
            (n.hiding = !0),
            e.stop(!0),
            this._hide(e, this.options.hide, function () {
              i._removeTooltip(V(this));
            }),
            s.removeData("ui-tooltip-open"),
            this._off(s, "mouseleave focusout keyup"),
            s[0] !== this.element[0] && this._off(s, "remove"),
            this._off(this.document, "mousemove"),
            t &&
              "mouseleave" === t.type &&
              V.each(this.parents, function (t, e) {
                V(e.element).attr("title", e.title), delete i.parents[t];
              }),
            (n.closing = !0),
            this._trigger("close", t, { tooltip: e }),
            n.hiding || (n.closing = !1)))
        : s.removeData("ui-tooltip-open");
    },
    _tooltip: function (t) {
      var e = V("<div>").attr("role", "tooltip"),
        i = V("<div>").appendTo(e),
        s = e.uniqueId().attr("id");
      return (
        this._addClass(i, "ui-tooltip-content"),
        this._addClass(e, "ui-tooltip", "ui-widget ui-widget-content"),
        e.appendTo(this._appendTo(t)),
        (this.tooltips[s] = { element: t, tooltip: e })
      );
    },
    _find: function (t) {
      t = t.data("ui-tooltip-id");
      return t ? this.tooltips[t] : null;
    },
    _removeTooltip: function (t) {
      clearInterval(this.delayedShow),
        t.remove(),
        delete this.tooltips[t.attr("id")];
    },
    _appendTo: function (t) {
      t = t.closest(".ui-front, dialog");
      return (t = !t.length ? this.document[0].body : t);
    },
    _destroy: function () {
      var s = this;
      V.each(this.tooltips, function (t, e) {
        var i = V.Event("blur"),
          e = e.element;
        (i.target = i.currentTarget = e[0]),
          s.close(i, !0),
          V("#" + t).remove(),
          e.data("ui-tooltip-title") &&
            (e.attr("title") || e.attr("title", e.data("ui-tooltip-title")),
            e.removeData("ui-tooltip-title"));
      }),
        this.liveRegion.remove();
    },
  }),
    !1 !== V.uiBackCompat &&
      V.widget("ui.tooltip", V.ui.tooltip, {
        options: { tooltipClass: null },
        _tooltip: function () {
          var t = this._superApply(arguments);
          return (
            this.options.tooltipClass &&
              t.tooltip.addClass(this.options.tooltipClass),
            t
          );
        },
      });
  V.ui.tooltip;
});

/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!(function (e, t) {
  "function" == typeof define && define.amd
    ? define("ev-emitter/ev-emitter", t)
    : "object" == typeof module && module.exports
    ? (module.exports = t())
    : (e.EvEmitter = t());
})("undefined" != typeof window ? window : this, function () {
  function e() {}
  var t = e.prototype;
  return (
    (t.on = function (e, t) {
      if (e && t) {
        var i = (this._events = this._events || {}),
          n = (i[e] = i[e] || []);
        return n.indexOf(t) == -1 && n.push(t), this;
      }
    }),
    (t.once = function (e, t) {
      if (e && t) {
        this.on(e, t);
        var i = (this._onceEvents = this._onceEvents || {}),
          n = (i[e] = i[e] || {});
        return (n[t] = !0), this;
      }
    }),
    (t.off = function (e, t) {
      var i = this._events && this._events[e];
      if (i && i.length) {
        var n = i.indexOf(t);
        return n != -1 && i.splice(n, 1), this;
      }
    }),
    (t.emitEvent = function (e, t) {
      var i = this._events && this._events[e];
      if (i && i.length) {
        (i = i.slice(0)), (t = t || []);
        for (
          var n = this._onceEvents && this._onceEvents[e], o = 0;
          o < i.length;
          o++
        ) {
          var r = i[o],
            s = n && n[r];
          s && (this.off(e, r), delete n[r]), r.apply(this, t);
        }
        return this;
      }
    }),
    (t.allOff = function () {
      delete this._events, delete this._onceEvents;
    }),
    e
  );
}),
  (function (e, t) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["ev-emitter/ev-emitter"], function (i) {
          return t(e, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = t(e, require("ev-emitter")))
      : (e.imagesLoaded = t(e, e.EvEmitter));
  })("undefined" != typeof window ? window : this, function (e, t) {
    function i(e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    }
    function n(e) {
      if (Array.isArray(e)) return e;
      var t = "object" == typeof e && "number" == typeof e.length;
      return t ? d.call(e) : [e];
    }
    function o(e, t, r) {
      if (!(this instanceof o)) return new o(e, t, r);
      var s = e;
      return (
        "string" == typeof e && (s = document.querySelectorAll(e)),
        s
          ? ((this.elements = n(s)),
            (this.options = i({}, this.options)),
            "function" == typeof t ? (r = t) : i(this.options, t),
            r && this.on("always", r),
            this.getImages(),
            h && (this.jqDeferred = new h.Deferred()),
            void setTimeout(this.check.bind(this)))
          : void a.error("Bad element for imagesLoaded " + (s || e))
      );
    }
    function r(e) {
      this.img = e;
    }
    function s(e, t) {
      (this.url = e), (this.element = t), (this.img = new Image());
    }
    var h = e.jQuery,
      a = e.console,
      d = Array.prototype.slice;
    (o.prototype = Object.create(t.prototype)),
      (o.prototype.options = {}),
      (o.prototype.getImages = function () {
        (this.images = []), this.elements.forEach(this.addElementImages, this);
      }),
      (o.prototype.addElementImages = function (e) {
        "IMG" == e.nodeName && this.addImage(e),
          this.options.background === !0 && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && u[t]) {
          for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
            var o = i[n];
            this.addImage(o);
          }
          if ("string" == typeof this.options.background) {
            var r = e.querySelectorAll(this.options.background);
            for (n = 0; n < r.length; n++) {
              var s = r[n];
              this.addElementBackgroundImages(s);
            }
          }
        }
      });
    var u = { 1: !0, 9: !0, 11: !0 };
    return (
      (o.prototype.addElementBackgroundImages = function (e) {
        var t = getComputedStyle(e);
        if (t)
          for (
            var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage);
            null !== n;

          ) {
            var o = n && n[2];
            o && this.addBackground(o, e), (n = i.exec(t.backgroundImage));
          }
      }),
      (o.prototype.addImage = function (e) {
        var t = new r(e);
        this.images.push(t);
      }),
      (o.prototype.addBackground = function (e, t) {
        var i = new s(e, t);
        this.images.push(i);
      }),
      (o.prototype.check = function () {
        function e(e, i, n) {
          setTimeout(function () {
            t.progress(e, i, n);
          });
        }
        var t = this;
        return (
          (this.progressedCount = 0),
          (this.hasAnyBroken = !1),
          this.images.length
            ? void this.images.forEach(function (t) {
                t.once("progress", e), t.check();
              })
            : void this.complete()
        );
      }),
      (o.prototype.progress = function (e, t, i) {
        this.progressedCount++,
          (this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded),
          this.emitEvent("progress", [this, e, t]),
          this.jqDeferred &&
            this.jqDeferred.notify &&
            this.jqDeferred.notify(this, e),
          this.progressedCount == this.images.length && this.complete(),
          this.options.debug && a && a.log("progress: " + i, e, t);
      }),
      (o.prototype.complete = function () {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (
          ((this.isComplete = !0),
          this.emitEvent(e, [this]),
          this.emitEvent("always", [this]),
          this.jqDeferred)
        ) {
          var t = this.hasAnyBroken ? "reject" : "resolve";
          this.jqDeferred[t](this);
        }
      }),
      (r.prototype = Object.create(t.prototype)),
      (r.prototype.check = function () {
        var e = this.getIsImageComplete();
        return e
          ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
          : ((this.proxyImage = new Image()),
            this.proxyImage.addEventListener("load", this),
            this.proxyImage.addEventListener("error", this),
            this.img.addEventListener("load", this),
            this.img.addEventListener("error", this),
            void (this.proxyImage.src = this.img.src));
      }),
      (r.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth;
      }),
      (r.prototype.confirm = function (e, t) {
        (this.isLoaded = e), this.emitEvent("progress", [this, this.img, t]);
      }),
      (r.prototype.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e);
      }),
      (r.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents();
      }),
      (r.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents();
      }),
      (r.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this),
          this.proxyImage.removeEventListener("error", this),
          this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (s.prototype = Object.create(r.prototype)),
      (s.prototype.check = function () {
        this.img.addEventListener("load", this),
          this.img.addEventListener("error", this),
          (this.img.src = this.url);
        var e = this.getIsImageComplete();
        e &&
          (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
          this.unbindEvents());
      }),
      (s.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (s.prototype.confirm = function (e, t) {
        (this.isLoaded = e),
          this.emitEvent("progress", [this, this.element, t]);
      }),
      (o.makeJQueryPlugin = function (t) {
        (t = t || e.jQuery),
          t &&
            ((h = t),
            (h.fn.imagesLoaded = function (e, t) {
              var i = new o(this, e, t);
              return i.jqDeferred.promise(h(this));
            }));
      }),
      o.makeJQueryPlugin(),
      o
    );
  });

/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */

!(function (t, e) {
  "function" == typeof define && define.amd
    ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
        return e(t, i);
      })
    : "object" == typeof module && module.exports
    ? (module.exports = e(t, require("jquery")))
    : (t.jQueryBridget = e(t, t.jQuery));
})(window, function (t, e) {
  "use strict";
  function i(i, s, a) {
    function u(t, e, o) {
      var n,
        s = "$()." + i + '("' + e + '")';
      return (
        t.each(function (t, u) {
          var h = a.data(u, i);
          if (!h)
            return void r(
              i + " not initialized. Cannot call methods, i.e. " + s
            );
          var d = h[e];
          if (!d || "_" == e.charAt(0))
            return void r(s + " is not a valid method");
          var l = d.apply(h, o);
          n = void 0 === n ? l : n;
        }),
        void 0 !== n ? n : t
      );
    }
    function h(t, e) {
      t.each(function (t, o) {
        var n = a.data(o, i);
        n ? (n.option(e), n._init()) : ((n = new s(o, e)), a.data(o, i, n));
      });
    }
    (a = a || e || t.jQuery),
      a &&
        (s.prototype.option ||
          (s.prototype.option = function (t) {
            a.isPlainObject(t) &&
              (this.options = a.extend(!0, this.options, t));
          }),
        (a.fn[i] = function (t) {
          if ("string" == typeof t) {
            var e = n.call(arguments, 1);
            return u(this, t, e);
          }
          return h(this, t), this;
        }),
        o(a));
  }
  function o(t) {
    !t || (t && t.bridget) || (t.bridget = i);
  }
  var n = Array.prototype.slice,
    s = t.console,
    r =
      "undefined" == typeof s
        ? function () {}
        : function (t) {
            s.error(t);
          };
  return o(e || t.jQuery), i;
}),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("ev-emitter/ev-emitter", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.EvEmitter = e());
  })("undefined" != typeof window ? window : this, function () {
    function t() {}
    var e = t.prototype;
    return (
      (e.on = function (t, e) {
        if (t && e) {
          var i = (this._events = this._events || {}),
            o = (i[t] = i[t] || []);
          return o.indexOf(e) == -1 && o.push(e), this;
        }
      }),
      (e.once = function (t, e) {
        if (t && e) {
          this.on(t, e);
          var i = (this._onceEvents = this._onceEvents || {}),
            o = (i[t] = i[t] || {});
          return (o[e] = !0), this;
        }
      }),
      (e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var o = i.indexOf(e);
          return o != -1 && i.splice(o, 1), this;
        }
      }),
      (e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          (i = i.slice(0)), (e = e || []);
          for (
            var o = this._onceEvents && this._onceEvents[t], n = 0;
            n < i.length;
            n++
          ) {
            var s = i[n],
              r = o && o[s];
            r && (this.off(t, s), delete o[s]), s.apply(this, e);
          }
          return this;
        }
      }),
      (e.allOff = function () {
        delete this._events, delete this._onceEvents;
      }),
      t
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("get-size/get-size", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.getSize = e());
  })(window, function () {
    "use strict";
    function t(t) {
      var e = parseFloat(t),
        i = t.indexOf("%") == -1 && !isNaN(e);
      return i && e;
    }
    function e() {}
    function i() {
      for (
        var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0,
          },
          e = 0;
        e < h;
        e++
      ) {
        var i = u[e];
        t[i] = 0;
      }
      return t;
    }
    function o(t) {
      var e = getComputedStyle(t);
      return (
        e ||
          a(
            "Style returned " +
              e +
              ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"
          ),
        e
      );
    }
    function n() {
      if (!d) {
        d = !0;
        var e = document.createElement("div");
        (e.style.width = "200px"),
          (e.style.padding = "1px 2px 3px 4px"),
          (e.style.borderStyle = "solid"),
          (e.style.borderWidth = "1px 2px 3px 4px"),
          (e.style.boxSizing = "border-box");
        var i = document.body || document.documentElement;
        i.appendChild(e);
        var n = o(e);
        (r = 200 == Math.round(t(n.width))),
          (s.isBoxSizeOuter = r),
          i.removeChild(e);
      }
    }
    function s(e) {
      if (
        (n(),
        "string" == typeof e && (e = document.querySelector(e)),
        e && "object" == typeof e && e.nodeType)
      ) {
        var s = o(e);
        if ("none" == s.display) return i();
        var a = {};
        (a.width = e.offsetWidth), (a.height = e.offsetHeight);
        for (
          var d = (a.isBorderBox = "border-box" == s.boxSizing), l = 0;
          l < h;
          l++
        ) {
          var f = u[l],
            c = s[f],
            m = parseFloat(c);
          a[f] = isNaN(m) ? 0 : m;
        }
        var p = a.paddingLeft + a.paddingRight,
          y = a.paddingTop + a.paddingBottom,
          g = a.marginLeft + a.marginRight,
          v = a.marginTop + a.marginBottom,
          _ = a.borderLeftWidth + a.borderRightWidth,
          z = a.borderTopWidth + a.borderBottomWidth,
          I = d && r,
          x = t(s.width);
        x !== !1 && (a.width = x + (I ? 0 : p + _));
        var S = t(s.height);
        return (
          S !== !1 && (a.height = S + (I ? 0 : y + z)),
          (a.innerWidth = a.width - (p + _)),
          (a.innerHeight = a.height - (y + z)),
          (a.outerWidth = a.width + g),
          (a.outerHeight = a.height + v),
          a
        );
      }
    }
    var r,
      a =
        "undefined" == typeof console
          ? e
          : function (t) {
              console.error(t);
            },
      u = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth",
      ],
      h = u.length,
      d = !1;
    return s;
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("desandro-matches-selector/matches-selector", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.matchesSelector = e());
  })(window, function () {
    "use strict";
    var t = (function () {
      var t = window.Element.prototype;
      if (t.matches) return "matches";
      if (t.matchesSelector) return "matchesSelector";
      for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
        var o = e[i],
          n = o + "MatchesSelector";
        if (t[n]) return n;
      }
    })();
    return function (e, i) {
      return e[t](i);
    };
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "fizzy-ui-utils/utils",
          ["desandro-matches-selector/matches-selector"],
          function (i) {
            return e(t, i);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("desandro-matches-selector")))
      : (t.fizzyUIUtils = e(t, t.matchesSelector));
  })(window, function (t, e) {
    var i = {};
    (i.extend = function (t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }),
      (i.modulo = function (t, e) {
        return ((t % e) + e) % e;
      });
    var o = Array.prototype.slice;
    (i.makeArray = function (t) {
      if (Array.isArray(t)) return t;
      if (null === t || void 0 === t) return [];
      var e = "object" == typeof t && "number" == typeof t.length;
      return e ? o.call(t) : [t];
    }),
      (i.removeFrom = function (t, e) {
        var i = t.indexOf(e);
        i != -1 && t.splice(i, 1);
      }),
      (i.getParent = function (t, i) {
        for (; t.parentNode && t != document.body; )
          if (((t = t.parentNode), e(t, i))) return t;
      }),
      (i.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t;
      }),
      (i.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (i.filterFindElements = function (t, o) {
        t = i.makeArray(t);
        var n = [];
        return (
          t.forEach(function (t) {
            if (t instanceof HTMLElement) {
              if (!o) return void n.push(t);
              e(t, o) && n.push(t);
              for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++)
                n.push(i[s]);
            }
          }),
          n
        );
      }),
      (i.debounceMethod = function (t, e, i) {
        i = i || 100;
        var o = t.prototype[e],
          n = e + "Timeout";
        t.prototype[e] = function () {
          var t = this[n];
          clearTimeout(t);
          var e = arguments,
            s = this;
          this[n] = setTimeout(function () {
            o.apply(s, e), delete s[n];
          }, i);
        };
      }),
      (i.docReady = function (t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e
          ? setTimeout(t)
          : document.addEventListener("DOMContentLoaded", t);
      }),
      (i.toDashed = function (t) {
        return t
          .replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i;
          })
          .toLowerCase();
      });
    var n = t.console;
    return (
      (i.htmlInit = function (e, o) {
        i.docReady(function () {
          var s = i.toDashed(o),
            r = "data-" + s,
            a = document.querySelectorAll("[" + r + "]"),
            u = document.querySelectorAll(".js-" + s),
            h = i.makeArray(a).concat(i.makeArray(u)),
            d = r + "-options",
            l = t.jQuery;
          h.forEach(function (t) {
            var i,
              s = t.getAttribute(r) || t.getAttribute(d);
            try {
              i = s && JSON.parse(s);
            } catch (a) {
              return void (
                n &&
                n.error("Error parsing " + r + " on " + t.className + ": " + a)
              );
            }
            var u = new e(t, i);
            l && l.data(t, o, u);
          });
        });
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "outlayer/item",
          ["ev-emitter/ev-emitter", "get-size/get-size"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("ev-emitter"), require("get-size")))
      : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
  })(window, function (t, e) {
    "use strict";
    function i(t) {
      for (var e in t) return !1;
      return (e = null), !0;
    }
    function o(t, e) {
      t &&
        ((this.element = t),
        (this.layout = e),
        (this.position = { x: 0, y: 0 }),
        this._create());
    }
    function n(t) {
      return t.replace(/([A-Z])/g, function (t) {
        return "-" + t.toLowerCase();
      });
    }
    var s = document.documentElement.style,
      r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
      a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
      u = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend",
      }[r],
      h = {
        transform: a,
        transition: r,
        transitionDuration: r + "Duration",
        transitionProperty: r + "Property",
        transitionDelay: r + "Delay",
      },
      d = (o.prototype = Object.create(t.prototype));
    (d.constructor = o),
      (d._create = function () {
        (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
          this.css({ position: "absolute" });
      }),
      (d.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (d.getSize = function () {
        this.size = e(this.element);
      }),
      (d.css = function (t) {
        var e = this.element.style;
        for (var i in t) {
          var o = h[i] || i;
          e[o] = t[i];
        }
      }),
      (d.getPosition = function () {
        var t = getComputedStyle(this.element),
          e = this.layout._getOption("originLeft"),
          i = this.layout._getOption("originTop"),
          o = t[e ? "left" : "right"],
          n = t[i ? "top" : "bottom"],
          s = parseFloat(o),
          r = parseFloat(n),
          a = this.layout.size;
        o.indexOf("%") != -1 && (s = (s / 100) * a.width),
          n.indexOf("%") != -1 && (r = (r / 100) * a.height),
          (s = isNaN(s) ? 0 : s),
          (r = isNaN(r) ? 0 : r),
          (s -= e ? a.paddingLeft : a.paddingRight),
          (r -= i ? a.paddingTop : a.paddingBottom),
          (this.position.x = s),
          (this.position.y = r);
      }),
      (d.layoutPosition = function () {
        var t = this.layout.size,
          e = {},
          i = this.layout._getOption("originLeft"),
          o = this.layout._getOption("originTop"),
          n = i ? "paddingLeft" : "paddingRight",
          s = i ? "left" : "right",
          r = i ? "right" : "left",
          a = this.position.x + t[n];
        (e[s] = this.getXValue(a)), (e[r] = "");
        var u = o ? "paddingTop" : "paddingBottom",
          h = o ? "top" : "bottom",
          d = o ? "bottom" : "top",
          l = this.position.y + t[u];
        (e[h] = this.getYValue(l)),
          (e[d] = ""),
          this.css(e),
          this.emitEvent("layout", [this]);
      }),
      (d.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e
          ? (t / this.layout.size.width) * 100 + "%"
          : t + "px";
      }),
      (d.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e
          ? (t / this.layout.size.height) * 100 + "%"
          : t + "px";
      }),
      (d._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x,
          o = this.position.y,
          n = t == this.position.x && e == this.position.y;
        if ((this.setPosition(t, e), n && !this.isTransitioning))
          return void this.layoutPosition();
        var s = t - i,
          r = e - o,
          a = {};
        (a.transform = this.getTranslate(s, r)),
          this.transition({
            to: a,
            onTransitionEnd: { transform: this.layoutPosition },
            isCleaning: !0,
          });
      }),
      (d.getTranslate = function (t, e) {
        var i = this.layout._getOption("originLeft"),
          o = this.layout._getOption("originTop");
        return (
          (t = i ? t : -t),
          (e = o ? e : -e),
          "translate3d(" + t + "px, " + e + "px, 0)"
        );
      }),
      (d.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition();
      }),
      (d.moveTo = d._transitionTo),
      (d.setPosition = function (t, e) {
        (this.position.x = parseFloat(t)), (this.position.y = parseFloat(e));
      }),
      (d._nonTransition = function (t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this);
      }),
      (d.transition = function (t) {
        if (!parseFloat(this.layout.options.transitionDuration))
          return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to)
          (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
          this.css(t.from);
          var o = this.element.offsetHeight;
          o = null;
        }
        this.enableTransition(t.to),
          this.css(t.to),
          (this.isTransitioning = !0);
      });
    var l = "opacity," + n(a);
    (d.enableTransition = function () {
      if (!this.isTransitioning) {
        var t = this.layout.options.transitionDuration;
        (t = "number" == typeof t ? t + "ms" : t),
          this.css({
            transitionProperty: l,
            transitionDuration: t,
            transitionDelay: this.staggerDelay || 0,
          }),
          this.element.addEventListener(u, this, !1);
      }
    }),
      (d.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t);
      }),
      (d.onotransitionend = function (t) {
        this.ontransitionend(t);
      });
    var f = { "-webkit-transform": "transform" };
    (d.ontransitionend = function (t) {
      if (t.target === this.element) {
        var e = this._transn,
          o = f[t.propertyName] || t.propertyName;
        if (
          (delete e.ingProperties[o],
          i(e.ingProperties) && this.disableTransition(),
          o in e.clean &&
            ((this.element.style[t.propertyName] = ""), delete e.clean[o]),
          o in e.onEnd)
        ) {
          var n = e.onEnd[o];
          n.call(this), delete e.onEnd[o];
        }
        this.emitEvent("transitionEnd", [this]);
      }
    }),
      (d.disableTransition = function () {
        this.removeTransitionStyles(),
          this.element.removeEventListener(u, this, !1),
          (this.isTransitioning = !1);
      }),
      (d._removeStyles = function (t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e);
      });
    var c = {
      transitionProperty: "",
      transitionDuration: "",
      transitionDelay: "",
    };
    return (
      (d.removeTransitionStyles = function () {
        this.css(c);
      }),
      (d.stagger = function (t) {
        (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
      }),
      (d.removeElem = function () {
        this.element.parentNode.removeChild(this.element),
          this.css({ display: "" }),
          this.emitEvent("remove", [this]);
      }),
      (d.remove = function () {
        return r && parseFloat(this.layout.options.transitionDuration)
          ? (this.once("transitionEnd", function () {
              this.removeElem();
            }),
            void this.hide())
          : void this.removeElem();
      }),
      (d.reveal = function () {
        delete this.isHidden, this.css({ display: "" });
        var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty("visibleStyle");
        (e[i] = this.onRevealTransitionEnd),
          this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (d.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal");
      }),
      (d.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i;
      }),
      (d.hide = function () {
        (this.isHidden = !0), this.css({ display: "" });
        var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        (e[i] = this.onHideTransitionEnd),
          this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (d.onHideTransitionEnd = function () {
        this.isHidden &&
          (this.css({ display: "none" }), this.emitEvent("hide"));
      }),
      (d.destroy = function () {
        this.css({
          position: "",
          left: "",
          right: "",
          top: "",
          bottom: "",
          transition: "",
          transform: "",
        });
      }),
      o
    );
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(
          "outlayer/outlayer",
          [
            "ev-emitter/ev-emitter",
            "get-size/get-size",
            "fizzy-ui-utils/utils",
            "./item",
          ],
          function (i, o, n, s) {
            return e(t, i, o, n, s);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("ev-emitter"),
          require("get-size"),
          require("fizzy-ui-utils"),
          require("./item")
        ))
      : (t.Outlayer = e(
          t,
          t.EvEmitter,
          t.getSize,
          t.fizzyUIUtils,
          t.Outlayer.Item
        ));
  })(window, function (t, e, i, o, n) {
    "use strict";
    function s(t, e) {
      var i = o.getQueryElement(t);
      if (!i)
        return void (
          u &&
          u.error(
            "Bad element for " + this.constructor.namespace + ": " + (i || t)
          )
        );
      (this.element = i),
        h && (this.$element = h(this.element)),
        (this.options = o.extend({}, this.constructor.defaults)),
        this.option(e);
      var n = ++l;
      (this.element.outlayerGUID = n), (f[n] = this), this._create();
      var s = this._getOption("initLayout");
      s && this.layout();
    }
    function r(t) {
      function e() {
        t.apply(this, arguments);
      }
      return (
        (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        e
      );
    }
    function a(t) {
      if ("number" == typeof t) return t;
      var e = t.match(/(^\d*\.?\d*)(\w*)/),
        i = e && e[1],
        o = e && e[2];
      if (!i.length) return 0;
      i = parseFloat(i);
      var n = m[o] || 1;
      return i * n;
    }
    var u = t.console,
      h = t.jQuery,
      d = function () {},
      l = 0,
      f = {};
    (s.namespace = "outlayer"),
      (s.Item = n),
      (s.defaults = {
        containerStyle: { position: "relative" },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
        visibleStyle: { opacity: 1, transform: "scale(1)" },
      });
    var c = s.prototype;
    o.extend(c, e.prototype),
      (c.option = function (t) {
        o.extend(this.options, t);
      }),
      (c._getOption = function (t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e]
          ? this.options[e]
          : this.options[t];
      }),
      (s.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer",
      }),
      (c._create = function () {
        this.reloadItems(),
          (this.stamps = []),
          this.stamp(this.options.stamp),
          o.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize();
      }),
      (c.reloadItems = function () {
        this.items = this._itemize(this.element.children);
      }),
      (c._itemize = function (t) {
        for (
          var e = this._filterFindItemElements(t),
            i = this.constructor.Item,
            o = [],
            n = 0;
          n < e.length;
          n++
        ) {
          var s = e[n],
            r = new i(s, this);
          o.push(r);
        }
        return o;
      }),
      (c._filterFindItemElements = function (t) {
        return o.filterFindElements(t, this.options.itemSelector);
      }),
      (c.getItemElements = function () {
        return this.items.map(function (t) {
          return t.element;
        });
      }),
      (c.layout = function () {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), (this._isLayoutInited = !0);
      }),
      (c._init = c.layout),
      (c._resetLayout = function () {
        this.getSize();
      }),
      (c.getSize = function () {
        this.size = i(this.element);
      }),
      (c._getMeasurement = function (t, e) {
        var o,
          n = this.options[t];
        n
          ? ("string" == typeof n
              ? (o = this.element.querySelector(n))
              : n instanceof HTMLElement && (o = n),
            (this[t] = o ? i(o)[e] : n))
          : (this[t] = 0);
      }),
      (c.layoutItems = function (t, e) {
        (t = this._getItemsForLayout(t)),
          this._layoutItems(t, e),
          this._postLayout();
      }),
      (c._getItemsForLayout = function (t) {
        return t.filter(function (t) {
          return !t.isIgnored;
        });
      }),
      (c._layoutItems = function (t, e) {
        if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
          var i = [];
          t.forEach(function (t) {
            var o = this._getItemLayoutPosition(t);
            (o.item = t), (o.isInstant = e || t.isLayoutInstant), i.push(o);
          }, this),
            this._processLayoutQueue(i);
        }
      }),
      (c._getItemLayoutPosition = function () {
        return { x: 0, y: 0 };
      }),
      (c._processLayoutQueue = function (t) {
        this.updateStagger(),
          t.forEach(function (t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e);
          }, this);
      }),
      (c.updateStagger = function () {
        var t = this.options.stagger;
        return null === t || void 0 === t
          ? void (this.stagger = 0)
          : ((this.stagger = a(t)), this.stagger);
      }),
      (c._positionItem = function (t, e, i, o, n) {
        o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i));
      }),
      (c._postLayout = function () {
        this.resizeContainer();
      }),
      (c.resizeContainer = function () {
        var t = this._getOption("resizeContainer");
        if (t) {
          var e = this._getContainerSize();
          e &&
            (this._setContainerMeasure(e.width, !0),
            this._setContainerMeasure(e.height, !1));
        }
      }),
      (c._getContainerSize = d),
      (c._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
          var i = this.size;
          i.isBorderBox &&
            (t += e
              ? i.paddingLeft +
                i.paddingRight +
                i.borderLeftWidth +
                i.borderRightWidth
              : i.paddingBottom +
                i.paddingTop +
                i.borderTopWidth +
                i.borderBottomWidth),
            (t = Math.max(t, 0)),
            (this.element.style[e ? "width" : "height"] = t + "px");
        }
      }),
      (c._emitCompleteOnItems = function (t, e) {
        function i() {
          n.dispatchEvent(t + "Complete", null, [e]);
        }
        function o() {
          r++, r == s && i();
        }
        var n = this,
          s = e.length;
        if (!e || !s) return void i();
        var r = 0;
        e.forEach(function (e) {
          e.once(t, o);
        });
      }),
      (c.dispatchEvent = function (t, e, i) {
        var o = e ? [e].concat(i) : i;
        if ((this.emitEvent(t, o), h))
          if (((this.$element = this.$element || h(this.element)), e)) {
            var n = h.Event(e);
            (n.type = t), this.$element.trigger(n, i);
          } else this.$element.trigger(t, i);
      }),
      (c.ignore = function (t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0);
      }),
      (c.unignore = function (t) {
        var e = this.getItem(t);
        e && delete e.isIgnored;
      }),
      (c.stamp = function (t) {
        (t = this._find(t)),
          t &&
            ((this.stamps = this.stamps.concat(t)),
            t.forEach(this.ignore, this));
      }),
      (c.unstamp = function (t) {
        (t = this._find(t)),
          t &&
            t.forEach(function (t) {
              o.removeFrom(this.stamps, t), this.unignore(t);
            }, this);
      }),
      (c._find = function (t) {
        if (t)
          return (
            "string" == typeof t && (t = this.element.querySelectorAll(t)),
            (t = o.makeArray(t))
          );
      }),
      (c._manageStamps = function () {
        this.stamps &&
          this.stamps.length &&
          (this._getBoundingRect(),
          this.stamps.forEach(this._manageStamp, this));
      }),
      (c._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(),
          e = this.size;
        this._boundingRect = {
          left: t.left + e.paddingLeft + e.borderLeftWidth,
          top: t.top + e.paddingTop + e.borderTopWidth,
          right: t.right - (e.paddingRight + e.borderRightWidth),
          bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
        };
      }),
      (c._manageStamp = d),
      (c._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(),
          o = this._boundingRect,
          n = i(t),
          s = {
            left: e.left - o.left - n.marginLeft,
            top: e.top - o.top - n.marginTop,
            right: o.right - e.right - n.marginRight,
            bottom: o.bottom - e.bottom - n.marginBottom,
          };
        return s;
      }),
      (c.handleEvent = o.handleEvent),
      (c.bindResize = function () {
        t.addEventListener("resize", this), (this.isResizeBound = !0);
      }),
      (c.unbindResize = function () {
        t.removeEventListener("resize", this), (this.isResizeBound = !1);
      }),
      (c.onresize = function () {
        this.resize();
      }),
      o.debounceMethod(s, "onresize", 100),
      (c.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
      }),
      (c.needsResizeLayout = function () {
        var t = i(this.element),
          e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth;
      }),
      (c.addItems = function (t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e;
      }),
      (c.appended = function (t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e));
      }),
      (c.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          var i = this.items.slice(0);
          (this.items = e.concat(i)),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(e, !0),
            this.reveal(e),
            this.layoutItems(i);
        }
      }),
      (c.reveal = function (t) {
        if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e), t.reveal();
          });
        }
      }),
      (c.hide = function (t) {
        if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e), t.hide();
          });
        }
      }),
      (c.revealItemElements = function (t) {
        var e = this.getItems(t);
        this.reveal(e);
      }),
      (c.hideItemElements = function (t) {
        var e = this.getItems(t);
        this.hide(e);
      }),
      (c.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
          var i = this.items[e];
          if (i.element == t) return i;
        }
      }),
      (c.getItems = function (t) {
        t = o.makeArray(t);
        var e = [];
        return (
          t.forEach(function (t) {
            var i = this.getItem(t);
            i && e.push(i);
          }, this),
          e
        );
      }),
      (c.remove = function (t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e),
          e &&
            e.length &&
            e.forEach(function (t) {
              t.remove(), o.removeFrom(this.items, t);
            }, this);
      }),
      (c.destroy = function () {
        var t = this.element.style;
        (t.height = ""),
          (t.position = ""),
          (t.width = ""),
          this.items.forEach(function (t) {
            t.destroy();
          }),
          this.unbindResize();
        var e = this.element.outlayerGUID;
        delete f[e],
          delete this.element.outlayerGUID,
          h && h.removeData(this.element, this.constructor.namespace);
      }),
      (s.data = function (t) {
        t = o.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && f[e];
      }),
      (s.create = function (t, e) {
        var i = r(s);
        return (
          (i.defaults = o.extend({}, s.defaults)),
          o.extend(i.defaults, e),
          (i.compatOptions = o.extend({}, s.compatOptions)),
          (i.namespace = t),
          (i.data = s.data),
          (i.Item = r(n)),
          o.htmlInit(i, t),
          h && h.bridget && h.bridget(t, i),
          i
        );
      });
    var m = { ms: 1, s: 1e3 };
    return (s.Item = n), s;
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/item", ["outlayer/outlayer"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer")))
      : ((t.Isotope = t.Isotope || {}), (t.Isotope.Item = e(t.Outlayer)));
  })(window, function (t) {
    "use strict";
    function e() {
      t.Item.apply(this, arguments);
    }
    var i = (e.prototype = Object.create(t.Item.prototype)),
      o = i._create;
    (i._create = function () {
      (this.id = this.layout.itemGUID++), o.call(this), (this.sortData = {});
    }),
      (i.updateSortData = function () {
        if (!this.isIgnored) {
          (this.sortData.id = this.id),
            (this.sortData["original-order"] = this.id),
            (this.sortData.random = Math.random());
          var t = this.layout.options.getSortData,
            e = this.layout._sorters;
          for (var i in t) {
            var o = e[i];
            this.sortData[i] = o(this.element, this);
          }
        }
      });
    var n = i.destroy;
    return (
      (i.destroy = function () {
        n.apply(this, arguments), this.css({ display: "" });
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "isotope-layout/js/layout-mode",
          ["get-size/get-size", "outlayer/outlayer"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("get-size"), require("outlayer")))
      : ((t.Isotope = t.Isotope || {}),
        (t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)));
  })(window, function (t, e) {
    "use strict";
    function i(t) {
      (this.isotope = t),
        t &&
          ((this.options = t.options[this.namespace]),
          (this.element = t.element),
          (this.items = t.filteredItems),
          (this.size = t.size));
    }
    var o = i.prototype,
      n = [
        "_resetLayout",
        "_getItemLayoutPosition",
        "_manageStamp",
        "_getContainerSize",
        "_getElementOffset",
        "needsResizeLayout",
        "_getOption",
      ];
    return (
      n.forEach(function (t) {
        o[t] = function () {
          return e.prototype[t].apply(this.isotope, arguments);
        };
      }),
      (o.needsVerticalResizeLayout = function () {
        var e = t(this.isotope.element),
          i = this.isotope.size && e;
        return i && e.innerHeight != this.isotope.size.innerHeight;
      }),
      (o._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments);
      }),
      (o.getColumnWidth = function () {
        this.getSegmentSize("column", "Width");
      }),
      (o.getRowHeight = function () {
        this.getSegmentSize("row", "Height");
      }),
      (o.getSegmentSize = function (t, e) {
        var i = t + e,
          o = "outer" + e;
        if ((this._getMeasurement(i, o), !this[i])) {
          var n = this.getFirstItemSize();
          this[i] = (n && n[o]) || this.isotope.size["inner" + e];
        }
      }),
      (o.getFirstItemSize = function () {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element);
      }),
      (o.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments);
      }),
      (o.getSize = function () {
        this.isotope.getSize(), (this.size = this.isotope.size);
      }),
      (i.modes = {}),
      (i.create = function (t, e) {
        function n() {
          i.apply(this, arguments);
        }
        return (
          (n.prototype = Object.create(o)),
          (n.prototype.constructor = n),
          e && (n.options = e),
          (n.prototype.namespace = t),
          (i.modes[t] = n),
          n
        );
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "masonry-layout/masonry",
          ["outlayer/outlayer", "get-size/get-size"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer"), require("get-size")))
      : (t.Masonry = e(t.Outlayer, t.getSize));
  })(window, function (t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var o = i.prototype;
    return (
      (o._resetLayout = function () {
        this.getSize(),
          this._getMeasurement("columnWidth", "outerWidth"),
          this._getMeasurement("gutter", "outerWidth"),
          this.measureColumns(),
          (this.colYs = []);
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        (this.maxY = 0), (this.horizontalColIndex = 0);
      }),
      (o.measureColumns = function () {
        if ((this.getContainerWidth(), !this.columnWidth)) {
          var t = this.items[0],
            i = t && t.element;
          this.columnWidth = (i && e(i).outerWidth) || this.containerWidth;
        }
        var o = (this.columnWidth += this.gutter),
          n = this.containerWidth + this.gutter,
          s = n / o,
          r = o - (n % o),
          a = r && r < 1 ? "round" : "floor";
        (s = Math[a](s)), (this.cols = Math.max(s, 1));
      }),
      (o.getContainerWidth = function () {
        var t = this._getOption("fitWidth"),
          i = t ? this.element.parentNode : this.element,
          o = e(i);
        this.containerWidth = o && o.innerWidth;
      }),
      (o._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
          i = e && e < 1 ? "round" : "ceil",
          o = Math[i](t.size.outerWidth / this.columnWidth);
        o = Math.min(o, this.cols);
        for (
          var n = this.options.horizontalOrder
              ? "_getHorizontalColPosition"
              : "_getTopColPosition",
            s = this[n](o, t),
            r = { x: this.columnWidth * s.col, y: s.y },
            a = s.y + t.size.outerHeight,
            u = o + s.col,
            h = s.col;
          h < u;
          h++
        )
          this.colYs[h] = a;
        return r;
      }),
      (o._getTopColPosition = function (t) {
        var e = this._getTopColGroup(t),
          i = Math.min.apply(Math, e);
        return { col: e.indexOf(i), y: i };
      }),
      (o._getTopColGroup = function (t) {
        if (t < 2) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++)
          e[o] = this._getColGroupY(o, t);
        return e;
      }),
      (o._getColGroupY = function (t, e) {
        if (e < 2) return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i);
      }),
      (o._getHorizontalColPosition = function (t, e) {
        var i = this.horizontalColIndex % this.cols,
          o = t > 1 && i + t > this.cols;
        i = o ? 0 : i;
        var n = e.size.outerWidth && e.size.outerHeight;
        return (
          (this.horizontalColIndex = n ? i + t : this.horizontalColIndex),
          { col: i, y: this._getColGroupY(i, t) }
        );
      }),
      (o._manageStamp = function (t) {
        var i = e(t),
          o = this._getElementOffset(t),
          n = this._getOption("originLeft"),
          s = n ? o.left : o.right,
          r = s + i.outerWidth,
          a = Math.floor(s / this.columnWidth);
        a = Math.max(0, a);
        var u = Math.floor(r / this.columnWidth);
        (u -= r % this.columnWidth ? 0 : 1), (u = Math.min(this.cols - 1, u));
        for (
          var h = this._getOption("originTop"),
            d = (h ? o.top : o.bottom) + i.outerHeight,
            l = a;
          l <= u;
          l++
        )
          this.colYs[l] = Math.max(d, this.colYs[l]);
      }),
      (o._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = { height: this.maxY };
        return (
          this._getOption("fitWidth") &&
            (t.width = this._getContainerFitWidth()),
          t
        );
      }),
      (o._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
        return (this.cols - t) * this.columnWidth - this.gutter;
      }),
      (o.needsResizeLayout = function () {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth;
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "isotope-layout/js/layout-modes/masonry",
          ["../layout-mode", "masonry-layout/masonry"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          require("../layout-mode"),
          require("masonry-layout")
        ))
      : e(t.Isotope.LayoutMode, t.Masonry);
  })(window, function (t, e) {
    "use strict";
    var i = t.create("masonry"),
      o = i.prototype,
      n = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
    for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
    var r = o.measureColumns;
    o.measureColumns = function () {
      (this.items = this.isotope.filteredItems), r.call(this);
    };
    var a = o._getOption;
    return (
      (o._getOption = function (t) {
        return "fitWidth" == t
          ? void 0 !== this.options.isFitWidth
            ? this.options.isFitWidth
            : this.options.fitWidth
          : a.apply(this.isotope, arguments);
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e)
      : "object" == typeof exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
  })(window, function (t) {
    "use strict";
    var e = t.create("fitRows"),
      i = e.prototype;
    return (
      (i._resetLayout = function () {
        (this.x = 0),
          (this.y = 0),
          (this.maxY = 0),
          this._getMeasurement("gutter", "outerWidth");
      }),
      (i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter,
          i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && ((this.x = 0), (this.y = this.maxY));
        var o = { x: this.x, y: this.y };
        return (
          (this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight)),
          (this.x += e),
          o
        );
      }),
      (i._getContainerSize = function () {
        return { height: this.maxY };
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
  })(window, function (t) {
    "use strict";
    var e = t.create("vertical", { horizontalAlignment: 0 }),
      i = e.prototype;
    return (
      (i._resetLayout = function () {
        this.y = 0;
      }),
      (i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e =
            (this.isotope.size.innerWidth - t.size.outerWidth) *
            this.options.horizontalAlignment,
          i = this.y;
        return (this.y += t.size.outerHeight), { x: e, y: i };
      }),
      (i._getContainerSize = function () {
        return { height: this.y };
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          [
            "outlayer/outlayer",
            "get-size/get-size",
            "desandro-matches-selector/matches-selector",
            "fizzy-ui-utils/utils",
            "isotope-layout/js/item",
            "isotope-layout/js/layout-mode",
            "isotope-layout/js/layout-modes/masonry",
            "isotope-layout/js/layout-modes/fit-rows",
            "isotope-layout/js/layout-modes/vertical",
          ],
          function (i, o, n, s, r, a) {
            return e(t, i, o, n, s, r, a);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("outlayer"),
          require("get-size"),
          require("desandro-matches-selector"),
          require("fizzy-ui-utils"),
          require("isotope-layout/js/item"),
          require("isotope-layout/js/layout-mode"),
          require("isotope-layout/js/layout-modes/masonry"),
          require("isotope-layout/js/layout-modes/fit-rows"),
          require("isotope-layout/js/layout-modes/vertical")
        ))
      : (t.Isotope = e(
          t,
          t.Outlayer,
          t.getSize,
          t.matchesSelector,
          t.fizzyUIUtils,
          t.Isotope.Item,
          t.Isotope.LayoutMode
        ));
  })(window, function (t, e, i, o, n, s, r) {
    function a(t, e) {
      return function (i, o) {
        for (var n = 0; n < t.length; n++) {
          var s = t[n],
            r = i.sortData[s],
            a = o.sortData[s];
          if (r > a || r < a) {
            var u = void 0 !== e[s] ? e[s] : e,
              h = u ? 1 : -1;
            return (r > a ? 1 : -1) * h;
          }
        }
        return 0;
      };
    }
    var u = t.jQuery,
      h = String.prototype.trim
        ? function (t) {
            return t.trim();
          }
        : function (t) {
            return t.replace(/^\s+|\s+$/g, "");
          },
      d = e.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0,
      });
    (d.Item = s), (d.LayoutMode = r);
    var l = d.prototype;
    (l._create = function () {
      (this.itemGUID = 0),
        (this._sorters = {}),
        this._getSorters(),
        e.prototype._create.call(this),
        (this.modes = {}),
        (this.filteredItems = this.items),
        (this.sortHistory = ["original-order"]);
      for (var t in r.modes) this._initLayoutMode(t);
    }),
      (l.reloadItems = function () {
        (this.itemGUID = 0), e.prototype.reloadItems.call(this);
      }),
      (l._itemize = function () {
        for (
          var t = e.prototype._itemize.apply(this, arguments), i = 0;
          i < t.length;
          i++
        ) {
          var o = t[i];
          o.id = this.itemGUID++;
        }
        return this._updateItemsSortData(t), t;
      }),
      (l._initLayoutMode = function (t) {
        var e = r.modes[t],
          i = this.options[t] || {};
        (this.options[t] = e.options ? n.extend(e.options, i) : i),
          (this.modes[t] = new e(this));
      }),
      (l.layout = function () {
        return !this._isLayoutInited && this._getOption("initLayout")
          ? void this.arrange()
          : void this._layout();
      }),
      (l._layout = function () {
        var t = this._getIsInstant();
        this._resetLayout(),
          this._manageStamps(),
          this.layoutItems(this.filteredItems, t),
          (this._isLayoutInited = !0);
      }),
      (l.arrange = function (t) {
        this.option(t), this._getIsInstant();
        var e = this._filter(this.items);
        (this.filteredItems = e.matches),
          this._bindArrangeComplete(),
          this._isInstant
            ? this._noTransition(this._hideReveal, [e])
            : this._hideReveal(e),
          this._sort(),
          this._layout();
      }),
      (l._init = l.arrange),
      (l._hideReveal = function (t) {
        this.reveal(t.needReveal), this.hide(t.needHide);
      }),
      (l._getIsInstant = function () {
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        return (this._isInstant = e), e;
      }),
      (l._bindArrangeComplete = function () {
        function t() {
          e &&
            i &&
            o &&
            n.dispatchEvent("arrangeComplete", null, [n.filteredItems]);
        }
        var e,
          i,
          o,
          n = this;
        this.once("layoutComplete", function () {
          (e = !0), t();
        }),
          this.once("hideComplete", function () {
            (i = !0), t();
          }),
          this.once("revealComplete", function () {
            (o = !0), t();
          });
      }),
      (l._filter = function (t) {
        var e = this.options.filter;
        e = e || "*";
        for (
          var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0;
          r < t.length;
          r++
        ) {
          var a = t[r];
          if (!a.isIgnored) {
            var u = s(a);
            u && i.push(a),
              u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a);
          }
        }
        return { matches: i, needReveal: o, needHide: n };
      }),
      (l._getFilterTest = function (t) {
        return u && this.options.isJQueryFiltering
          ? function (e) {
              return u(e.element).is(t);
            }
          : "function" == typeof t
          ? function (e) {
              return t(e.element);
            }
          : function (e) {
              return o(e.element, t);
            };
      }),
      (l.updateSortData = function (t) {
        var e;
        t ? ((t = n.makeArray(t)), (e = this.getItems(t))) : (e = this.items),
          this._getSorters(),
          this._updateItemsSortData(e);
      }),
      (l._getSorters = function () {
        var t = this.options.getSortData;
        for (var e in t) {
          var i = t[e];
          this._sorters[e] = f(i);
        }
      }),
      (l._updateItemsSortData = function (t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) {
          var o = t[i];
          o.updateSortData();
        }
      });
    var f = (function () {
      function t(t) {
        if ("string" != typeof t) return t;
        var i = h(t).split(" "),
          o = i[0],
          n = o.match(/^\[(.+)\]$/),
          s = n && n[1],
          r = e(s, o),
          a = d.sortDataParsers[i[1]];
        return (t = a
          ? function (t) {
              return t && a(r(t));
            }
          : function (t) {
              return t && r(t);
            });
      }
      function e(t, e) {
        return t
          ? function (e) {
              return e.getAttribute(t);
            }
          : function (t) {
              var i = t.querySelector(e);
              return i && i.textContent;
            };
      }
      return t;
    })();
    (d.sortDataParsers = {
      parseInt: function (t) {
        return parseInt(t, 10);
      },
      parseFloat: function (t) {
        return parseFloat(t);
      },
    }),
      (l._sort = function () {
        if (this.options.sortBy) {
          var t = n.makeArray(this.options.sortBy);
          this._getIsSameSortBy(t) ||
            (this.sortHistory = t.concat(this.sortHistory));
          var e = a(this.sortHistory, this.options.sortAscending);
          this.filteredItems.sort(e);
        }
      }),
      (l._getIsSameSortBy = function (t) {
        for (var e = 0; e < t.length; e++)
          if (t[e] != this.sortHistory[e]) return !1;
        return !0;
      }),
      (l._mode = function () {
        var t = this.options.layoutMode,
          e = this.modes[t];
        if (!e) throw new Error("No layout mode: " + t);
        return (e.options = this.options[t]), e;
      }),
      (l._resetLayout = function () {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout();
      }),
      (l._getItemLayoutPosition = function (t) {
        return this._mode()._getItemLayoutPosition(t);
      }),
      (l._manageStamp = function (t) {
        this._mode()._manageStamp(t);
      }),
      (l._getContainerSize = function () {
        return this._mode()._getContainerSize();
      }),
      (l.needsResizeLayout = function () {
        return this._mode().needsResizeLayout();
      }),
      (l.appended = function (t) {
        var e = this.addItems(t);
        if (e.length) {
          var i = this._filterRevealAdded(e);
          this.filteredItems = this.filteredItems.concat(i);
        }
      }),
      (l.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          this._resetLayout(), this._manageStamps();
          var i = this._filterRevealAdded(e);
          this.layoutItems(this.filteredItems),
            (this.filteredItems = i.concat(this.filteredItems)),
            (this.items = e.concat(this.items));
        }
      }),
      (l._filterRevealAdded = function (t) {
        var e = this._filter(t);
        return (
          this.hide(e.needHide),
          this.reveal(e.matches),
          this.layoutItems(e.matches, !0),
          e.matches
        );
      }),
      (l.insert = function (t) {
        var e = this.addItems(t);
        if (e.length) {
          var i,
            o,
            n = e.length;
          for (i = 0; i < n; i++)
            (o = e[i]), this.element.appendChild(o.element);
          var s = this._filter(e).matches;
          for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
          for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
          this.reveal(s);
        }
      });
    var c = l.remove;
    return (
      (l.remove = function (t) {
        t = n.makeArray(t);
        var e = this.getItems(t);
        c.call(this, t);
        for (var i = e && e.length, o = 0; i && o < i; o++) {
          var s = e[o];
          n.removeFrom(this.filteredItems, s);
        }
      }),
      (l.shuffle = function () {
        for (var t = 0; t < this.items.length; t++) {
          var e = this.items[t];
          e.sortData.random = Math.random();
        }
        (this.options.sortBy = "random"), this._sort(), this._layout();
      }),
      (l._noTransition = function (t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var o = t.apply(this, e);
        return (this.options.transitionDuration = i), o;
      }),
      (l.getFilteredItemElements = function () {
        return this.filteredItems.map(function (t) {
          return t.element;
        });
      }),
      d
    );
  });

/* Slinky js */
!(function (e) {
  var t = {};
  function n(i) {
    if (t[i]) return t[i].exports;
    var r = (t[i] = { i: i, l: !1, exports: {} });
    return e[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, i) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (
        (n.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          n.d(
            i,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return i;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 0));
})([
  function (e, t, n) {
    n(1), (e.exports = n(2));
  },
  function (e, t) {
    function n(e, t) {
      var n = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          n.push.apply(n, Object.getOwnPropertySymbols(e)),
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
        n
      );
    }
    function i(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function s(e, t, n) {
      return t && r(e.prototype, t), n && r(e, n), e;
    }
    /*
     * Slinky
     * Rather sweet menus
     * @author Ali Zahid <ali.zahid@live.com>
     * @license MIT
     */ var a = (function () {
      function e(t) {
        var r =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.settings = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? n(r, !0).forEach(function (t) {
                    i(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : n(r).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    );
                  });
            }
            return e;
          })({}, this.options, {}, r)),
          this._init(t);
      }
      return (
        s(e, [
          {
            key: "options",
            get: function () {
              return {
                resize: !0,
                speed: 300,
                theme: "slinky-theme-default",
                title: !1,
              };
            },
          },
        ]),
        s(e, [
          {
            key: "_init",
            value: function (e) {
              (this.menu = jQuery(e)),
                (this.base = this.menu.children().first());
              var t = this.menu,
                n = this.settings;
              t.addClass("slinky-menu").addClass(n.theme),
                this._transition(n.speed),
                jQuery("a + ul", t).prev().addClass("next"),
                jQuery("li > a", t).wrapInner("<span>");
              var i = jQuery("<li>").addClass("header");
              jQuery("li > ul", t).prepend(i);
              var r = jQuery("<a>").prop("href", "#").addClass("back");
              jQuery(".header", t).prepend(r),
                n.title &&
                  jQuery("li > ul", t).each(function (e, t) {
                    var n = jQuery(t).parent().find("a").first().text();
                    if (n) {
                      var i = jQuery("<header>").addClass("title").text(n);
                      jQuery("> .header", t).append(i);
                    }
                  }),
                this._addListeners(),
                this._jumpToInitial();
            },
          },
          {
            key: "_addListeners",
            value: function () {
              var e = this,
                t = this.menu,
                n = this.settings;
              jQuery("a", t).on("click", function (i) {
                if (e._clicked + n.speed > Date.now()) return !1;
                e._clicked = Date.now();
                var r = jQuery(i.currentTarget);
                (0 === r.attr("href").indexOf("#") ||
                  r.hasClass("next") ||
                  r.hasClass("back")) &&
                  i.preventDefault(),
                  r.hasClass("next")
                    ? (t.find(".active").removeClass("active"),
                      r.next().show().addClass("active"),
                      e._move(1),
                      n.resize && e._resize(r.next()))
                    : r.hasClass("back") &&
                      (e._move(-1, function () {
                        t.find(".active").removeClass("active"),
                          r
                            .parent()
                            .parent()
                            .hide()
                            .parentsUntil(t, "ul")
                            .first()
                            .addClass("active");
                      }),
                      n.resize &&
                        e._resize(r.parent().parent().parentsUntil(t, "ul")));
              });
            },
          },
          {
            key: "_jumpToInitial",
            value: function () {
              var e = this.menu,
                t = this.settings,
                n = e.find(".active");
              n.length > 0 && (n.removeClass("active"), this.jump(n, !1)),
                setTimeout(function () {
                  return e.height(e.outerHeight());
                }, t.speed);
            },
          },
          {
            key: "_move",
            value: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0,
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : function () {};
              if (0 !== e) {
                var n = this.settings,
                  i = this.base,
                  r = Math.round(parseInt(i.get(0).style.left)) || 0;
                i.css("left", "".concat(r - 100 * e, "%")),
                  "function" == typeof t && setTimeout(t, n.speed);
              }
            },
          },
          {
            key: "_resize",
            value: function (e) {
              this.menu.height(e.outerHeight());
            },
          },
          {
            key: "_transition",
            value: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 300,
                t = this.menu,
                n = this.base;
              t.css("transition-duration", "".concat(e, "ms")),
                n.css("transition-duration", "".concat(e, "ms"));
            },
          },
          {
            key: "jump",
            value: function (e) {
              var t =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1];
              if (e) {
                var n = this.menu,
                  i = this.settings,
                  r = jQuery(e),
                  s = n.find(".active"),
                  a = 0;
                s.length > 0 && (a = s.parentsUntil(n, "ul").length),
                  n.find("ul").removeClass("active").hide();
                var o = r.parentsUntil(n, "ul");
                o.show(),
                  r.show().addClass("active"),
                  t || this._transition(0),
                  this._move(o.length - a),
                  i.resize && this._resize(r),
                  t || this._transition(i.speed);
              }
            },
          },
          {
            key: "home",
            value: function () {
              var e =
                  !(arguments.length > 0 && void 0 !== arguments[0]) ||
                  arguments[0],
                t = this.base,
                n = this.menu,
                i = this.settings;
              e || this._transition(0);
              var r = n.find(".active"),
                s = r.parentsUntil(n, "ul");
              this._move(-s.length, function () {
                r.removeClass("active").hide(), s.not(t).hide();
              }),
                i.resize && this._resize(t),
                !1 === e && this._transition(i.speed);
            },
          },
          {
            key: "destroy",
            value: function () {
              var e = this,
                t = this.base,
                n = this.menu;
              jQuery(".header", n).remove(),
                jQuery("a", n).removeClass("next").off("click"),
                n.css({ height: "", "transition-duration": "" }),
                t.css({ left: "", "transition-duration": "" }),
                jQuery("li > a > span", n).contents().unwrap(),
                n.find(".active").removeClass("active"),
                n
                  .attr("class")
                  .split(" ")
                  .forEach(function (e) {
                    0 === e.indexOf("slinky") && n.removeClass(e);
                  });
              ["settings", "menu", "base"].forEach(function (t) {
                return delete e[t];
              });
            },
          },
        ]),
        e
      );
    })();
    jQuery.fn.slinky = function (e) {
      return new a(this, e);
    };
  },
  function (e, t, n) {},
]);

/*
 Slick Slider
 Version: 1.8.1
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues
 */
/* global window, document, define, jQuery, setInterval, clearInterval */
!(function (i) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], i)
    : "undefined" != typeof exports
    ? (module.exports = i(require("jquery")))
    : i(jQuery);
})(function (i) {
  "use strict";
  var e = window.Slick || {};
  ((e = (function () {
    var e = 0;
    return function (t, o) {
      var s,
        n = this;
      (n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: i(t),
        appendDots: i(t),
        arrows: !0,
        asNavFor: null,
        prevArrow:
          '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow:
          '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function (e, t) {
          return i('<button type="button" />').text(t + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: 0.35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3,
      }),
        (n.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          scrolling: !1,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          swiping: !1,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1,
        }),
        i.extend(n, n.initials),
        (n.activeBreakpoint = null),
        (n.animType = null),
        (n.animProp = null),
        (n.breakpoints = []),
        (n.breakpointSettings = []),
        (n.cssTransitions = !1),
        (n.focussed = !1),
        (n.interrupted = !1),
        (n.hidden = "hidden"),
        (n.paused = !0),
        (n.positionProp = null),
        (n.respondTo = null),
        (n.rowCount = 1),
        (n.shouldClick = !0),
        (n.$slider = i(t)),
        (n.$slidesCache = null),
        (n.transformType = null),
        (n.transitionType = null),
        (n.visibilityChange = "visibilitychange"),
        (n.windowWidth = 0),
        (n.windowTimer = null),
        (s = i(t).data("slick") || {}),
        (n.options = i.extend({}, n.defaults, o, s)),
        (n.currentSlide = n.options.initialSlide),
        (n.originalSettings = n.options),
        void 0 !== document.mozHidden
          ? ((n.hidden = "mozHidden"),
            (n.visibilityChange = "mozvisibilitychange"))
          : void 0 !== document.webkitHidden &&
            ((n.hidden = "webkitHidden"),
            (n.visibilityChange = "webkitvisibilitychange")),
        (n.autoPlay = i.proxy(n.autoPlay, n)),
        (n.autoPlayClear = i.proxy(n.autoPlayClear, n)),
        (n.autoPlayIterator = i.proxy(n.autoPlayIterator, n)),
        (n.changeSlide = i.proxy(n.changeSlide, n)),
        (n.clickHandler = i.proxy(n.clickHandler, n)),
        (n.selectHandler = i.proxy(n.selectHandler, n)),
        (n.setPosition = i.proxy(n.setPosition, n)),
        (n.swipeHandler = i.proxy(n.swipeHandler, n)),
        (n.dragHandler = i.proxy(n.dragHandler, n)),
        (n.keyHandler = i.proxy(n.keyHandler, n)),
        (n.instanceUid = e++),
        (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
        n.registerBreakpoints(),
        n.init(!0);
    };
  })()).prototype.activateADA = function () {
    this.$slideTrack
      .find(".slick-active")
      .attr({ "aria-hidden": "false" })
      .find("a, input, button, select")
      .attr({ tabindex: "0" });
  }),
    (e.prototype.addSlide = e.prototype.slickAdd =
      function (e, t, o) {
        var s = this;
        if ("boolean" == typeof t) (o = t), (t = null);
        else if (t < 0 || t >= s.slideCount) return !1;
        s.unload(),
          "number" == typeof t
            ? 0 === t && 0 === s.$slides.length
              ? i(e).appendTo(s.$slideTrack)
              : o
              ? i(e).insertBefore(s.$slides.eq(t))
              : i(e).insertAfter(s.$slides.eq(t))
            : !0 === o
            ? i(e).prependTo(s.$slideTrack)
            : i(e).appendTo(s.$slideTrack),
          (s.$slides = s.$slideTrack.children(this.options.slide)),
          s.$slideTrack.children(this.options.slide).detach(),
          s.$slideTrack.append(s.$slides),
          s.$slides.each(function (e, t) {
            i(t).attr("data-slick-index", e);
          }),
          (s.$slidesCache = s.$slides),
          s.reinit();
      }),
    (e.prototype.animateHeight = function () {
      var i = this;
      if (
        1 === i.options.slidesToShow &&
        !0 === i.options.adaptiveHeight &&
        !1 === i.options.vertical
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.animate({ height: e }, i.options.speed);
      }
    }),
    (e.prototype.animateSlide = function (e, t) {
      var o = {},
        s = this;
      s.animateHeight(),
        !0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
        !1 === s.transformsEnabled
          ? !1 === s.options.vertical
            ? s.$slideTrack.animate(
                { left: e },
                s.options.speed,
                s.options.easing,
                t
              )
            : s.$slideTrack.animate(
                { top: e },
                s.options.speed,
                s.options.easing,
                t
              )
          : !1 === s.cssTransitions
          ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
            i({ animStart: s.currentLeft }).animate(
              { animStart: e },
              {
                duration: s.options.speed,
                easing: s.options.easing,
                step: function (i) {
                  (i = Math.ceil(i)),
                    !1 === s.options.vertical
                      ? ((o[s.animType] = "translate(" + i + "px, 0px)"),
                        s.$slideTrack.css(o))
                      : ((o[s.animType] = "translate(0px," + i + "px)"),
                        s.$slideTrack.css(o));
                },
                complete: function () {
                  t && t.call();
                },
              }
            ))
          : (s.applyTransition(),
            (e = Math.ceil(e)),
            !1 === s.options.vertical
              ? (o[s.animType] = "translate3d(" + e + "px, 0px, 0px)")
              : (o[s.animType] = "translate3d(0px," + e + "px, 0px)"),
            s.$slideTrack.css(o),
            t &&
              setTimeout(function () {
                s.disableTransition(), t.call();
              }, s.options.speed));
    }),
    (e.prototype.getNavTarget = function () {
      var e = this,
        t = e.options.asNavFor;
      return t && null !== t && (t = i(t).not(e.$slider)), t;
    }),
    (e.prototype.asNavFor = function (e) {
      var t = this.getNavTarget();
      null !== t &&
        "object" == typeof t &&
        t.each(function () {
          var t = i(this).slick("getSlick");
          t.unslicked || t.slideHandler(e, !0);
        });
    }),
    (e.prototype.applyTransition = function (i) {
      var e = this,
        t = {};
      !1 === e.options.fade
        ? (t[e.transitionType] =
            e.transformType + " " + e.options.speed + "ms " + e.options.cssEase)
        : (t[e.transitionType] =
            "opacity " + e.options.speed + "ms " + e.options.cssEase),
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.autoPlay = function () {
      var i = this;
      i.autoPlayClear(),
        i.slideCount > i.options.slidesToShow &&
          (i.autoPlayTimer = setInterval(
            i.autoPlayIterator,
            i.options.autoplaySpeed
          ));
    }),
    (e.prototype.autoPlayClear = function () {
      var i = this;
      i.autoPlayTimer && clearInterval(i.autoPlayTimer);
    }),
    (e.prototype.autoPlayIterator = function () {
      var i = this,
        e = i.currentSlide + i.options.slidesToScroll;
      i.paused ||
        i.interrupted ||
        i.focussed ||
        (!1 === i.options.infinite &&
          (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1
            ? (i.direction = 0)
            : 0 === i.direction &&
              ((e = i.currentSlide - i.options.slidesToScroll),
              i.currentSlide - 1 == 0 && (i.direction = 1))),
        i.slideHandler(e));
    }),
    (e.prototype.buildArrows = function () {
      var e = this;
      !0 === e.options.arrows &&
        ((e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow")),
        (e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow")),
        e.slideCount > e.options.slidesToShow
          ? (e.$prevArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            e.$nextArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            e.htmlExpr.test(e.options.prevArrow) &&
              e.$prevArrow.prependTo(e.options.appendArrows),
            e.htmlExpr.test(e.options.nextArrow) &&
              e.$nextArrow.appendTo(e.options.appendArrows),
            !0 !== e.options.infinite &&
              e.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"))
          : e.$prevArrow
              .add(e.$nextArrow)
              .addClass("slick-hidden")
              .attr({ "aria-disabled": "true", tabindex: "-1" }));
    }),
    (e.prototype.buildDots = function () {
      var e,
        t,
        o = this;
      if (!0 === o.options.dots) {
        for (
          o.$slider.addClass("slick-dotted"),
            t = i("<ul />").addClass(o.options.dotsClass),
            e = 0;
          e <= o.getDotCount();
          e += 1
        )
          t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
        (o.$dots = t.appendTo(o.options.appendDots)),
          o.$dots.find("li").first().addClass("slick-active");
      }
    }),
    (e.prototype.buildOut = function () {
      var e = this;
      (e.$slides = e.$slider
        .children(e.options.slide + ":not(.slick-cloned)")
        .addClass("slick-slide")),
        (e.slideCount = e.$slides.length),
        e.$slides.each(function (e, t) {
          i(t)
            .attr("data-slick-index", e)
            .data("originalStyling", i(t).attr("style") || "");
        }),
        e.$slider.addClass("slick-slider"),
        (e.$slideTrack =
          0 === e.slideCount
            ? i('<div class="slick-track"/>').appendTo(e.$slider)
            : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
        (e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
        e.$slideTrack.css("opacity", 0),
        (!0 !== e.options.centerMode && !0 !== e.options.swipeToSlide) ||
          (e.options.slidesToScroll = 1),
        i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses(
          "number" == typeof e.currentSlide ? e.currentSlide : 0
        ),
        !0 === e.options.draggable && e.$list.addClass("draggable");
    }),
    (e.prototype.buildRows = function () {
      var i,
        e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      if (
        ((o = document.createDocumentFragment()),
        (n = l.$slider.children()),
        l.options.rows > 1)
      ) {
        for (
          r = l.options.slidesPerRow * l.options.rows,
            s = Math.ceil(n.length / r),
            i = 0;
          i < s;
          i++
        ) {
          var d = document.createElement("div");
          for (e = 0; e < l.options.rows; e++) {
            var a = document.createElement("div");
            for (t = 0; t < l.options.slidesPerRow; t++) {
              var c = i * r + (e * l.options.slidesPerRow + t);
              n.get(c) && a.appendChild(n.get(c));
            }
            d.appendChild(a);
          }
          o.appendChild(d);
        }
        l.$slider.empty().append(o),
          l.$slider
            .children()
            .children()
            .children()
            .css({
              width: 100 / l.options.slidesPerRow + "%",
              display: "inline-block",
            });
      }
    }),
    (e.prototype.checkResponsive = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = !1,
        d = r.$slider.width(),
        a = window.innerWidth || i(window).width();
      if (
        ("window" === r.respondTo
          ? (n = a)
          : "slider" === r.respondTo
          ? (n = d)
          : "min" === r.respondTo && (n = Math.min(a, d)),
        r.options.responsive &&
          r.options.responsive.length &&
          null !== r.options.responsive)
      ) {
        s = null;
        for (o in r.breakpoints)
          r.breakpoints.hasOwnProperty(o) &&
            (!1 === r.originalSettings.mobileFirst
              ? n < r.breakpoints[o] && (s = r.breakpoints[o])
              : n > r.breakpoints[o] && (s = r.breakpoints[o]));
        null !== s
          ? null !== r.activeBreakpoint
            ? (s !== r.activeBreakpoint || t) &&
              ((r.activeBreakpoint = s),
              "unslick" === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s]
                  )),
                  !0 === e && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
            : ((r.activeBreakpoint = s),
              "unslick" === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s]
                  )),
                  !0 === e && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
          : null !== r.activeBreakpoint &&
            ((r.activeBreakpoint = null),
            (r.options = r.originalSettings),
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e),
            (l = s)),
          e || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
      }
    }),
    (e.prototype.changeSlide = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = i(e.currentTarget);
      switch (
        (l.is("a") && e.preventDefault(),
        l.is("li") || (l = l.closest("li")),
        (n = r.slideCount % r.options.slidesToScroll != 0),
        (o = n
          ? 0
          : (r.slideCount - r.currentSlide) % r.options.slidesToScroll),
        e.data.message)
      ) {
        case "previous":
          (s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o),
            r.slideCount > r.options.slidesToShow &&
              r.slideHandler(r.currentSlide - s, !1, t);
          break;
        case "next":
          (s = 0 === o ? r.options.slidesToScroll : o),
            r.slideCount > r.options.slidesToShow &&
              r.slideHandler(r.currentSlide + s, !1, t);
          break;
        case "index":
          var d =
            0 === e.data.index
              ? 0
              : e.data.index || l.index() * r.options.slidesToScroll;
          r.slideHandler(r.checkNavigable(d), !1, t),
            l.children().trigger("focus");
          break;
        default:
          return;
      }
    }),
    (e.prototype.checkNavigable = function (i) {
      var e, t;
      if (((e = this.getNavigableIndexes()), (t = 0), i > e[e.length - 1]))
        i = e[e.length - 1];
      else
        for (var o in e) {
          if (i < e[o]) {
            i = t;
            break;
          }
          t = e[o];
        }
      return i;
    }),
    (e.prototype.cleanUpEvents = function () {
      var e = this;
      e.options.dots &&
        null !== e.$dots &&
        (i("li", e.$dots)
          .off("click.slick", e.changeSlide)
          .off("mouseenter.slick", i.proxy(e.interrupt, e, !0))
          .off("mouseleave.slick", i.proxy(e.interrupt, e, !1)),
        !0 === e.options.accessibility &&
          e.$dots.off("keydown.slick", e.keyHandler)),
        e.$slider.off("focus.slick blur.slick"),
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
          e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
          !0 === e.options.accessibility &&
            (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
            e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
        e.$list.off("click.slick", e.clickHandler),
        i(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        !0 === e.options.accessibility &&
          e.$list.off("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().off("click.slick", e.selectHandler),
        i(window).off(
          "orientationchange.slick.slick-" + e.instanceUid,
          e.orientationChange
        ),
        i(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
        i("[draggable!=true]", e.$slideTrack).off(
          "dragstart",
          e.preventDefault
        ),
        i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
    }),
    (e.prototype.cleanUpSlideEvents = function () {
      var e = this;
      e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.cleanUpRows = function () {
      var i,
        e = this;
      e.options.rows > 1 &&
        ((i = e.$slides.children().children()).removeAttr("style"),
        e.$slider.empty().append(i));
    }),
    (e.prototype.clickHandler = function (i) {
      !1 === this.shouldClick &&
        (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
    }),
    (e.prototype.destroy = function (e) {
      var t = this;
      t.autoPlayClear(),
        (t.touchObject = {}),
        t.cleanUpEvents(),
        i(".slick-cloned", t.$slider).detach(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow &&
          t.$prevArrow.length &&
          (t.$prevArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
        t.$nextArrow &&
          t.$nextArrow.length &&
          (t.$nextArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
        t.$slides &&
          (t.$slides
            .removeClass(
              "slick-slide slick-active slick-center slick-visible slick-current"
            )
            .removeAttr("aria-hidden")
            .removeAttr("data-slick-index")
            .each(function () {
              i(this).attr("style", i(this).data("originalStyling"));
            }),
          t.$slideTrack.children(this.options.slide).detach(),
          t.$slideTrack.detach(),
          t.$list.detach(),
          t.$slider.append(t.$slides)),
        t.cleanUpRows(),
        t.$slider.removeClass("slick-slider"),
        t.$slider.removeClass("slick-initialized"),
        t.$slider.removeClass("slick-dotted"),
        (t.unslicked = !0),
        e || t.$slider.trigger("destroy", [t]);
    }),
    (e.prototype.disableTransition = function (i) {
      var e = this,
        t = {};
      (t[e.transitionType] = ""),
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.fadeSlide = function (i, e) {
      var t = this;
      !1 === t.cssTransitions
        ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }),
          t.$slides
            .eq(i)
            .animate({ opacity: 1 }, t.options.speed, t.options.easing, e))
        : (t.applyTransition(i),
          t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }),
          e &&
            setTimeout(function () {
              t.disableTransition(i), e.call();
            }, t.options.speed));
    }),
    (e.prototype.fadeSlideOut = function (i) {
      var e = this;
      !1 === e.cssTransitions
        ? e.$slides
            .eq(i)
            .animate(
              { opacity: 0, zIndex: e.options.zIndex - 2 },
              e.options.speed,
              e.options.easing
            )
        : (e.applyTransition(i),
          e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
    }),
    (e.prototype.filterSlides = e.prototype.slickFilter =
      function (i) {
        var e = this;
        null !== i &&
          ((e.$slidesCache = e.$slides),
          e.unload(),
          e.$slideTrack.children(this.options.slide).detach(),
          e.$slidesCache.filter(i).appendTo(e.$slideTrack),
          e.reinit());
      }),
    (e.prototype.focusHandler = function () {
      var e = this;
      e.$slider
        .off("focus.slick blur.slick")
        .on("focus.slick blur.slick", "*", function (t) {
          t.stopImmediatePropagation();
          var o = i(this);
          setTimeout(function () {
            e.options.pauseOnFocus &&
              ((e.focussed = o.is(":focus")), e.autoPlay());
          }, 0);
        });
    }),
    (e.prototype.getCurrent = e.prototype.slickCurrentSlide =
      function () {
        return this.currentSlide;
      }),
    (e.prototype.getDotCount = function () {
      var i = this,
        e = 0,
        t = 0,
        o = 0;
      if (!0 === i.options.infinite)
        if (i.slideCount <= i.options.slidesToShow) ++o;
        else
          for (; e < i.slideCount; )
            ++o,
              (e = t + i.options.slidesToScroll),
              (t +=
                i.options.slidesToScroll <= i.options.slidesToShow
                  ? i.options.slidesToScroll
                  : i.options.slidesToShow);
      else if (!0 === i.options.centerMode) o = i.slideCount;
      else if (i.options.asNavFor)
        for (; e < i.slideCount; )
          ++o,
            (e = t + i.options.slidesToScroll),
            (t +=
              i.options.slidesToScroll <= i.options.slidesToShow
                ? i.options.slidesToScroll
                : i.options.slidesToShow);
      else
        o =
          1 +
          Math.ceil(
            (i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll
          );
      return o - 1;
    }),
    (e.prototype.getLeft = function (i) {
      var e,
        t,
        o,
        s,
        n = this,
        r = 0;
      return (
        (n.slideOffset = 0),
        (t = n.$slides.first().outerHeight(!0)),
        !0 === n.options.infinite
          ? (n.slideCount > n.options.slidesToShow &&
              ((n.slideOffset = n.slideWidth * n.options.slidesToShow * -1),
              (s = -1),
              !0 === n.options.vertical &&
                !0 === n.options.centerMode &&
                (2 === n.options.slidesToShow
                  ? (s = -1.5)
                  : 1 === n.options.slidesToShow && (s = -2)),
              (r = t * n.options.slidesToShow * s)),
            n.slideCount % n.options.slidesToScroll != 0 &&
              i + n.options.slidesToScroll > n.slideCount &&
              n.slideCount > n.options.slidesToShow &&
              (i > n.slideCount
                ? ((n.slideOffset =
                    (n.options.slidesToShow - (i - n.slideCount)) *
                    n.slideWidth *
                    -1),
                  (r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1))
                : ((n.slideOffset =
                    (n.slideCount % n.options.slidesToScroll) *
                    n.slideWidth *
                    -1),
                  (r = (n.slideCount % n.options.slidesToScroll) * t * -1))))
          : i + n.options.slidesToShow > n.slideCount &&
            ((n.slideOffset =
              (i + n.options.slidesToShow - n.slideCount) * n.slideWidth),
            (r = (i + n.options.slidesToShow - n.slideCount) * t)),
        n.slideCount <= n.options.slidesToShow &&
          ((n.slideOffset = 0), (r = 0)),
        !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow
          ? (n.slideOffset =
              (n.slideWidth * Math.floor(n.options.slidesToShow)) / 2 -
              (n.slideWidth * n.slideCount) / 2)
          : !0 === n.options.centerMode && !0 === n.options.infinite
          ? (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2) -
              n.slideWidth)
          : !0 === n.options.centerMode &&
            ((n.slideOffset = 0),
            (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2))),
        (e =
          !1 === n.options.vertical
            ? i * n.slideWidth * -1 + n.slideOffset
            : i * t * -1 + r),
        !0 === n.options.variableWidth &&
          ((o =
            n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite
              ? n.$slideTrack.children(".slick-slide").eq(i)
              : n.$slideTrack
                  .children(".slick-slide")
                  .eq(i + n.options.slidesToShow)),
          (e =
            !0 === n.options.rtl
              ? o[0]
                ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
                : 0
              : o[0]
              ? -1 * o[0].offsetLeft
              : 0),
          !0 === n.options.centerMode &&
            ((o =
              n.slideCount <= n.options.slidesToShow ||
              !1 === n.options.infinite
                ? n.$slideTrack.children(".slick-slide").eq(i)
                : n.$slideTrack
                    .children(".slick-slide")
                    .eq(i + n.options.slidesToShow + 1)),
            (e =
              !0 === n.options.rtl
                ? o[0]
                  ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
                  : 0
                : o[0]
                ? -1 * o[0].offsetLeft
                : 0),
            (e += (n.$list.width() - o.outerWidth()) / 2))),
        e
      );
    }),
    (e.prototype.getOption = e.prototype.slickGetOption =
      function (i) {
        return this.options[i];
      }),
    (e.prototype.getNavigableIndexes = function () {
      var i,
        e = this,
        t = 0,
        o = 0,
        s = [];
      for (
        !1 === e.options.infinite
          ? (i = e.slideCount)
          : ((t = -1 * e.options.slidesToScroll),
            (o = -1 * e.options.slidesToScroll),
            (i = 2 * e.slideCount));
        t < i;

      )
        s.push(t),
          (t = o + e.options.slidesToScroll),
          (o +=
            e.options.slidesToScroll <= e.options.slidesToShow
              ? e.options.slidesToScroll
              : e.options.slidesToShow);
      return s;
    }),
    (e.prototype.getSlick = function () {
      return this;
    }),
    (e.prototype.getSlideCount = function () {
      var e,
        t,
        o = this;
      return (
        (t =
          !0 === o.options.centerMode
            ? o.slideWidth * Math.floor(o.options.slidesToShow / 2)
            : 0),
        !0 === o.options.swipeToSlide
          ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
              if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft)
                return (e = n), !1;
            }),
            Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1)
          : o.options.slidesToScroll
      );
    }),
    (e.prototype.goTo = e.prototype.slickGoTo =
      function (i, e) {
        this.changeSlide({ data: { message: "index", index: parseInt(i) } }, e);
      }),
    (e.prototype.init = function (e) {
      var t = this;
      i(t.$slider).hasClass("slick-initialized") ||
        (i(t.$slider).addClass("slick-initialized"),
        t.buildRows(),
        t.buildOut(),
        t.setProps(),
        t.startLoad(),
        t.loadSlider(),
        t.initializeEvents(),
        t.updateArrows(),
        t.updateDots(),
        t.checkResponsive(!0),
        t.focusHandler()),
        e && t.$slider.trigger("init", [t]),
        !0 === t.options.accessibility && t.initADA(),
        t.options.autoplay && ((t.paused = !1), t.autoPlay());
    }),
    (e.prototype.initADA = function () {
      var e = this,
        t = Math.ceil(e.slideCount / e.options.slidesToShow),
        o = e.getNavigableIndexes().filter(function (i) {
          return i >= 0 && i < e.slideCount;
        });
      e.$slides
        .add(e.$slideTrack.find(".slick-cloned"))
        .attr({ "aria-hidden": "true", tabindex: "-1" })
        .find("a, input, button, select")
        .attr({ tabindex: "-1" }),
        null !== e.$dots &&
          (e.$slides
            .not(e.$slideTrack.find(".slick-cloned"))
            .each(function (t) {
              var s = o.indexOf(t);
              i(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + t,
                tabindex: -1,
              }),
                -1 !== s &&
                  i(this).attr({
                    "aria-describedby":
                      "slick-slide-control" + e.instanceUid + s,
                  });
            }),
          e.$dots
            .attr("role", "tablist")
            .find("li")
            .each(function (s) {
              var n = o[s];
              i(this).attr({ role: "presentation" }),
                i(this)
                  .find("button")
                  .first()
                  .attr({
                    role: "tab",
                    id: "slick-slide-control" + e.instanceUid + s,
                    "aria-controls": "slick-slide" + e.instanceUid + n,
                    "aria-label": s + 1 + " of " + t,
                    "aria-selected": null,
                    tabindex: "-1",
                  });
            })
            .eq(e.currentSlide)
            .find("button")
            .attr({ "aria-selected": "true", tabindex: "0" })
            .end());
      for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++)
        e.$slides.eq(s).attr("tabindex", 0);
      e.activateADA();
    }),
    (e.prototype.initArrowEvents = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow
          .off("click.slick")
          .on("click.slick", { message: "previous" }, i.changeSlide),
        i.$nextArrow
          .off("click.slick")
          .on("click.slick", { message: "next" }, i.changeSlide),
        !0 === i.options.accessibility &&
          (i.$prevArrow.on("keydown.slick", i.keyHandler),
          i.$nextArrow.on("keydown.slick", i.keyHandler)));
    }),
    (e.prototype.initDotEvents = function () {
      var e = this;
      !0 === e.options.dots &&
        (i("li", e.$dots).on(
          "click.slick",
          { message: "index" },
          e.changeSlide
        ),
        !0 === e.options.accessibility &&
          e.$dots.on("keydown.slick", e.keyHandler)),
        !0 === e.options.dots &&
          !0 === e.options.pauseOnDotsHover &&
          i("li", e.$dots)
            .on("mouseenter.slick", i.proxy(e.interrupt, e, !0))
            .on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.initSlideEvents = function () {
      var e = this;
      e.options.pauseOnHover &&
        (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
    }),
    (e.prototype.initializeEvents = function () {
      var e = this;
      e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on(
          "touchstart.slick mousedown.slick",
          { action: "start" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchmove.slick mousemove.slick",
          { action: "move" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchend.slick mouseup.slick",
          { action: "end" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchcancel.slick mouseleave.slick",
          { action: "end" },
          e.swipeHandler
        ),
        e.$list.on("click.slick", e.clickHandler),
        i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
        !0 === e.options.accessibility &&
          e.$list.on("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        i(window).on(
          "orientationchange.slick.slick-" + e.instanceUid,
          i.proxy(e.orientationChange, e)
        ),
        i(window).on(
          "resize.slick.slick-" + e.instanceUid,
          i.proxy(e.resize, e)
        ),
        i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
        i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
        i(e.setPosition);
    }),
    (e.prototype.initUI = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.show(), i.$nextArrow.show()),
        !0 === i.options.dots &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.show();
    }),
    (e.prototype.keyHandler = function (i) {
      var e = this;
      i.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
        (37 === i.keyCode && !0 === e.options.accessibility
          ? e.changeSlide({
              data: { message: !0 === e.options.rtl ? "next" : "previous" },
            })
          : 39 === i.keyCode &&
            !0 === e.options.accessibility &&
            e.changeSlide({
              data: { message: !0 === e.options.rtl ? "previous" : "next" },
            }));
    }),
    (e.prototype.lazyLoad = function () {
      function e(e) {
        i("img[data-lazy]", e).each(function () {
          var e = i(this),
            t = i(this).attr("data-lazy"),
            o = i(this).attr("data-srcset"),
            s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
            r = document.createElement("img");
          (r.onload = function () {
            e.animate({ opacity: 0 }, 100, function () {
              o && (e.attr("srcset", o), s && e.attr("sizes", s)),
                e.attr("src", t).animate({ opacity: 1 }, 200, function () {
                  e.removeAttr("data-lazy data-srcset data-sizes").removeClass(
                    "slick-loading"
                  );
                }),
                n.$slider.trigger("lazyLoaded", [n, e, t]);
            });
          }),
            (r.onerror = function () {
              e
                .removeAttr("data-lazy")
                .removeClass("slick-loading")
                .addClass("slick-lazyload-error"),
                n.$slider.trigger("lazyLoadError", [n, e, t]);
            }),
            (r.src = t);
        });
      }
      var t,
        o,
        s,
        n = this;
      if (
        (!0 === n.options.centerMode
          ? !0 === n.options.infinite
            ? (s =
                (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) +
                n.options.slidesToShow +
                2)
            : ((o = Math.max(
                0,
                n.currentSlide - (n.options.slidesToShow / 2 + 1)
              )),
              (s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide))
          : ((o = n.options.infinite
              ? n.options.slidesToShow + n.currentSlide
              : n.currentSlide),
            (s = Math.ceil(o + n.options.slidesToShow)),
            !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)),
        (t = n.$slider.find(".slick-slide").slice(o, s)),
        "anticipated" === n.options.lazyLoad)
      )
        for (
          var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0;
          a < n.options.slidesToScroll;
          a++
        )
          r < 0 && (r = n.slideCount - 1),
            (t = (t = t.add(d.eq(r))).add(d.eq(l))),
            r--,
            l++;
      e(t),
        n.slideCount <= n.options.slidesToShow
          ? e(n.$slider.find(".slick-slide"))
          : n.currentSlide >= n.slideCount - n.options.slidesToShow
          ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow))
          : 0 === n.currentSlide &&
            e(
              n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow)
            );
    }),
    (e.prototype.loadSlider = function () {
      var i = this;
      i.setPosition(),
        i.$slideTrack.css({ opacity: 1 }),
        i.$slider.removeClass("slick-loading"),
        i.initUI(),
        "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
    }),
    (e.prototype.next = e.prototype.slickNext =
      function () {
        this.changeSlide({ data: { message: "next" } });
      }),
    (e.prototype.orientationChange = function () {
      var i = this;
      i.checkResponsive(), i.setPosition();
    }),
    (e.prototype.pause = e.prototype.slickPause =
      function () {
        var i = this;
        i.autoPlayClear(), (i.paused = !0);
      }),
    (e.prototype.play = e.prototype.slickPlay =
      function () {
        var i = this;
        i.autoPlay(),
          (i.options.autoplay = !0),
          (i.paused = !1),
          (i.focussed = !1),
          (i.interrupted = !1);
      }),
    (e.prototype.postSlide = function (e) {
      var t = this;
      t.unslicked ||
        (t.$slider.trigger("afterChange", [t, e]),
        (t.animating = !1),
        t.slideCount > t.options.slidesToShow && t.setPosition(),
        (t.swipeLeft = null),
        t.options.autoplay && t.autoPlay(),
        !0 === t.options.accessibility &&
          (t.initADA(),
          t.options.focusOnChange &&
            i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
    }),
    (e.prototype.prev = e.prototype.slickPrev =
      function () {
        this.changeSlide({ data: { message: "previous" } });
      }),
    (e.prototype.preventDefault = function (i) {
      i.preventDefault();
    }),
    (e.prototype.progressiveLazyLoad = function (e) {
      e = e || 1;
      var t,
        o,
        s,
        n,
        r,
        l = this,
        d = i("img[data-lazy]", l.$slider);
      d.length
        ? ((t = d.first()),
          (o = t.attr("data-lazy")),
          (s = t.attr("data-srcset")),
          (n = t.attr("data-sizes") || l.$slider.attr("data-sizes")),
          ((r = document.createElement("img")).onload = function () {
            s && (t.attr("srcset", s), n && t.attr("sizes", n)),
              t
                .attr("src", o)
                .removeAttr("data-lazy data-srcset data-sizes")
                .removeClass("slick-loading"),
              !0 === l.options.adaptiveHeight && l.setPosition(),
              l.$slider.trigger("lazyLoaded", [l, t, o]),
              l.progressiveLazyLoad();
          }),
          (r.onerror = function () {
            e < 3
              ? setTimeout(function () {
                  l.progressiveLazyLoad(e + 1);
                }, 500)
              : (t
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                l.$slider.trigger("lazyLoadError", [l, t, o]),
                l.progressiveLazyLoad());
          }),
          (r.src = o))
        : l.$slider.trigger("allImagesLoaded", [l]);
    }),
    (e.prototype.refresh = function (e) {
      var t,
        o,
        s = this;
      (o = s.slideCount - s.options.slidesToShow),
        !s.options.infinite && s.currentSlide > o && (s.currentSlide = o),
        s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
        (t = s.currentSlide),
        s.destroy(!0),
        i.extend(s, s.initials, { currentSlide: t }),
        s.init(),
        e || s.changeSlide({ data: { message: "index", index: t } }, !1);
    }),
    (e.prototype.registerBreakpoints = function () {
      var e,
        t,
        o,
        s = this,
        n = s.options.responsive || null;
      if ("array" === i.type(n) && n.length) {
        s.respondTo = s.options.respondTo || "window";
        for (e in n)
          if (((o = s.breakpoints.length - 1), n.hasOwnProperty(e))) {
            for (t = n[e].breakpoint; o >= 0; )
              s.breakpoints[o] &&
                s.breakpoints[o] === t &&
                s.breakpoints.splice(o, 1),
                o--;
            s.breakpoints.push(t), (s.breakpointSettings[t] = n[e].settings);
          }
        s.breakpoints.sort(function (i, e) {
          return s.options.mobileFirst ? i - e : e - i;
        });
      }
    }),
    (e.prototype.reinit = function () {
      var e = this;
      (e.$slides = e.$slideTrack
        .children(e.options.slide)
        .addClass("slick-slide")),
        (e.slideCount = e.$slides.length),
        e.currentSlide >= e.slideCount &&
          0 !== e.currentSlide &&
          (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        e.setSlideClasses(
          "number" == typeof e.currentSlide ? e.currentSlide : 0
        ),
        e.setPosition(),
        e.focusHandler(),
        (e.paused = !e.options.autoplay),
        e.autoPlay(),
        e.$slider.trigger("reInit", [e]);
    }),
    (e.prototype.resize = function () {
      var e = this;
      i(window).width() !== e.windowWidth &&
        (clearTimeout(e.windowDelay),
        (e.windowDelay = window.setTimeout(function () {
          (e.windowWidth = i(window).width()),
            e.checkResponsive(),
            e.unslicked || e.setPosition();
        }, 50)));
    }),
    (e.prototype.removeSlide = e.prototype.slickRemove =
      function (i, e, t) {
        var o = this;
        if (
          ((i =
            "boolean" == typeof i
              ? !0 === (e = i)
                ? 0
                : o.slideCount - 1
              : !0 === e
              ? --i
              : i),
          o.slideCount < 1 || i < 0 || i > o.slideCount - 1)
        )
          return !1;
        o.unload(),
          !0 === t
            ? o.$slideTrack.children().remove()
            : o.$slideTrack.children(this.options.slide).eq(i).remove(),
          (o.$slides = o.$slideTrack.children(this.options.slide)),
          o.$slideTrack.children(this.options.slide).detach(),
          o.$slideTrack.append(o.$slides),
          (o.$slidesCache = o.$slides),
          o.reinit();
      }),
    (e.prototype.setCSS = function (i) {
      var e,
        t,
        o = this,
        s = {};
      !0 === o.options.rtl && (i = -i),
        (e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
        (t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
        (s[o.positionProp] = i),
        !1 === o.transformsEnabled
          ? o.$slideTrack.css(s)
          : ((s = {}),
            !1 === o.cssTransitions
              ? ((s[o.animType] = "translate(" + e + ", " + t + ")"),
                o.$slideTrack.css(s))
              : ((s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)"),
                o.$slideTrack.css(s)));
    }),
    (e.prototype.setDimensions = function () {
      var i = this;
      !1 === i.options.vertical
        ? !0 === i.options.centerMode &&
          i.$list.css({ padding: "0px " + i.options.centerPadding })
        : (i.$list.height(
            i.$slides.first().outerHeight(!0) * i.options.slidesToShow
          ),
          !0 === i.options.centerMode &&
            i.$list.css({ padding: i.options.centerPadding + " 0px" })),
        (i.listWidth = i.$list.width()),
        (i.listHeight = i.$list.height()),
        !1 === i.options.vertical && !1 === i.options.variableWidth
          ? ((i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow)),
            i.$slideTrack.width(
              Math.ceil(
                i.slideWidth * i.$slideTrack.children(".slick-slide").length
              )
            ))
          : !0 === i.options.variableWidth
          ? i.$slideTrack.width(5e3 * i.slideCount)
          : ((i.slideWidth = Math.ceil(i.listWidth)),
            i.$slideTrack.height(
              Math.ceil(
                i.$slides.first().outerHeight(!0) *
                  i.$slideTrack.children(".slick-slide").length
              )
            ));
      var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
      !1 === i.options.variableWidth &&
        i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
    }),
    (e.prototype.setFade = function () {
      var e,
        t = this;
      t.$slides.each(function (o, s) {
        (e = t.slideWidth * o * -1),
          !0 === t.options.rtl
            ? i(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              })
            : i(s).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              });
      }),
        t.$slides
          .eq(t.currentSlide)
          .css({ zIndex: t.options.zIndex - 1, opacity: 1 });
    }),
    (e.prototype.setHeight = function () {
      var i = this;
      if (
        1 === i.options.slidesToShow &&
        !0 === i.options.adaptiveHeight &&
        !1 === i.options.vertical
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.css("height", e);
      }
    }),
    (e.prototype.setOption = e.prototype.slickSetOption =
      function () {
        var e,
          t,
          o,
          s,
          n,
          r = this,
          l = !1;
        if (
          ("object" === i.type(arguments[0])
            ? ((o = arguments[0]), (l = arguments[1]), (n = "multiple"))
            : "string" === i.type(arguments[0]) &&
              ((o = arguments[0]),
              (s = arguments[1]),
              (l = arguments[2]),
              "responsive" === arguments[0] && "array" === i.type(arguments[1])
                ? (n = "responsive")
                : void 0 !== arguments[1] && (n = "single")),
          "single" === n)
        )
          r.options[o] = s;
        else if ("multiple" === n)
          i.each(o, function (i, e) {
            r.options[i] = e;
          });
        else if ("responsive" === n)
          for (t in s)
            if ("array" !== i.type(r.options.responsive))
              r.options.responsive = [s[t]];
            else {
              for (e = r.options.responsive.length - 1; e >= 0; )
                r.options.responsive[e].breakpoint === s[t].breakpoint &&
                  r.options.responsive.splice(e, 1),
                  e--;
              r.options.responsive.push(s[t]);
            }
        l && (r.unload(), r.reinit());
      }),
    (e.prototype.setPosition = function () {
      var i = this;
      i.setDimensions(),
        i.setHeight(),
        !1 === i.options.fade
          ? i.setCSS(i.getLeft(i.currentSlide))
          : i.setFade(),
        i.$slider.trigger("setPosition", [i]);
    }),
    (e.prototype.setProps = function () {
      var i = this,
        e = document.body.style;
      (i.positionProp = !0 === i.options.vertical ? "top" : "left"),
        "top" === i.positionProp
          ? i.$slider.addClass("slick-vertical")
          : i.$slider.removeClass("slick-vertical"),
        (void 0 === e.WebkitTransition &&
          void 0 === e.MozTransition &&
          void 0 === e.msTransition) ||
          (!0 === i.options.useCSS && (i.cssTransitions = !0)),
        i.options.fade &&
          ("number" == typeof i.options.zIndex
            ? i.options.zIndex < 3 && (i.options.zIndex = 3)
            : (i.options.zIndex = i.defaults.zIndex)),
        void 0 !== e.OTransform &&
          ((i.animType = "OTransform"),
          (i.transformType = "-o-transform"),
          (i.transitionType = "OTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.MozTransform &&
          ((i.animType = "MozTransform"),
          (i.transformType = "-moz-transform"),
          (i.transitionType = "MozTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.MozPerspective &&
            (i.animType = !1)),
        void 0 !== e.webkitTransform &&
          ((i.animType = "webkitTransform"),
          (i.transformType = "-webkit-transform"),
          (i.transitionType = "webkitTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.msTransform &&
          ((i.animType = "msTransform"),
          (i.transformType = "-ms-transform"),
          (i.transitionType = "msTransition"),
          void 0 === e.msTransform && (i.animType = !1)),
        void 0 !== e.transform &&
          !1 !== i.animType &&
          ((i.animType = "transform"),
          (i.transformType = "transform"),
          (i.transitionType = "transition")),
        (i.transformsEnabled =
          i.options.useTransform && null !== i.animType && !1 !== i.animType);
    }),
    (e.prototype.setSlideClasses = function (i) {
      var e,
        t,
        o,
        s,
        n = this;
      if (
        ((t = n.$slider
          .find(".slick-slide")
          .removeClass("slick-active slick-center slick-current")
          .attr("aria-hidden", "true")),
        n.$slides.eq(i).addClass("slick-current"),
        !0 === n.options.centerMode)
      ) {
        var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
        (e = Math.floor(n.options.slidesToShow / 2)),
          !0 === n.options.infinite &&
            (i >= e && i <= n.slideCount - 1 - e
              ? n.$slides
                  .slice(i - e + r, i + e + 1)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : ((o = n.options.slidesToShow + i),
                t
                  .slice(o - e + 1 + r, o + e + 2)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")),
            0 === i
              ? t
                  .eq(t.length - 1 - n.options.slidesToShow)
                  .addClass("slick-center")
              : i === n.slideCount - 1 &&
                t.eq(n.options.slidesToShow).addClass("slick-center")),
          n.$slides.eq(i).addClass("slick-center");
      } else
        i >= 0 && i <= n.slideCount - n.options.slidesToShow
          ? n.$slides
              .slice(i, i + n.options.slidesToShow)
              .addClass("slick-active")
              .attr("aria-hidden", "false")
          : t.length <= n.options.slidesToShow
          ? t.addClass("slick-active").attr("aria-hidden", "false")
          : ((s = n.slideCount % n.options.slidesToShow),
            (o = !0 === n.options.infinite ? n.options.slidesToShow + i : i),
            n.options.slidesToShow == n.options.slidesToScroll &&
            n.slideCount - i < n.options.slidesToShow
              ? t
                  .slice(o - (n.options.slidesToShow - s), o + s)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : t
                  .slice(o, o + n.options.slidesToShow)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false"));
      ("ondemand" !== n.options.lazyLoad &&
        "anticipated" !== n.options.lazyLoad) ||
        n.lazyLoad();
    }),
    (e.prototype.setupInfinite = function () {
      var e,
        t,
        o,
        s = this;
      if (
        (!0 === s.options.fade && (s.options.centerMode = !1),
        !0 === s.options.infinite &&
          !1 === s.options.fade &&
          ((t = null), s.slideCount > s.options.slidesToShow))
      ) {
        for (
          o =
            !0 === s.options.centerMode
              ? s.options.slidesToShow + 1
              : s.options.slidesToShow,
            e = s.slideCount;
          e > s.slideCount - o;
          e -= 1
        )
          (t = e - 1),
            i(s.$slides[t])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", t - s.slideCount)
              .prependTo(s.$slideTrack)
              .addClass("slick-cloned");
        for (e = 0; e < o + s.slideCount; e += 1)
          (t = e),
            i(s.$slides[t])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", t + s.slideCount)
              .appendTo(s.$slideTrack)
              .addClass("slick-cloned");
        s.$slideTrack
          .find(".slick-cloned")
          .find("[id]")
          .each(function () {
            i(this).attr("id", "");
          });
      }
    }),
    (e.prototype.interrupt = function (i) {
      var e = this;
      i || e.autoPlay(), (e.interrupted = i);
    }),
    (e.prototype.selectHandler = function (e) {
      var t = this,
        o = i(e.target).is(".slick-slide")
          ? i(e.target)
          : i(e.target).parents(".slick-slide"),
        s = parseInt(o.attr("data-slick-index"));
      s || (s = 0),
        t.slideCount <= t.options.slidesToShow
          ? t.slideHandler(s, !1, !0)
          : t.slideHandler(s);
    }),
    (e.prototype.slideHandler = function (i, e, t) {
      var o,
        s,
        n,
        r,
        l,
        d = null,
        a = this;
      if (
        ((e = e || !1),
        !(
          (!0 === a.animating && !0 === a.options.waitForAnimate) ||
          (!0 === a.options.fade && a.currentSlide === i)
        ))
      )
        if (
          (!1 === e && a.asNavFor(i),
          (o = i),
          (d = a.getLeft(o)),
          (r = a.getLeft(a.currentSlide)),
          (a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft),
          !1 === a.options.infinite &&
            !1 === a.options.centerMode &&
            (i < 0 || i > a.getDotCount() * a.options.slidesToScroll))
        )
          !1 === a.options.fade &&
            ((o = a.currentSlide),
            !0 !== t
              ? a.animateSlide(r, function () {
                  a.postSlide(o);
                })
              : a.postSlide(o));
        else if (
          !1 === a.options.infinite &&
          !0 === a.options.centerMode &&
          (i < 0 || i > a.slideCount - a.options.slidesToScroll)
        )
          !1 === a.options.fade &&
            ((o = a.currentSlide),
            !0 !== t
              ? a.animateSlide(r, function () {
                  a.postSlide(o);
                })
              : a.postSlide(o));
        else {
          if (
            (a.options.autoplay && clearInterval(a.autoPlayTimer),
            (s =
              o < 0
                ? a.slideCount % a.options.slidesToScroll != 0
                  ? a.slideCount - (a.slideCount % a.options.slidesToScroll)
                  : a.slideCount + o
                : o >= a.slideCount
                ? a.slideCount % a.options.slidesToScroll != 0
                  ? 0
                  : o - a.slideCount
                : o),
            (a.animating = !0),
            a.$slider.trigger("beforeChange", [a, a.currentSlide, s]),
            (n = a.currentSlide),
            (a.currentSlide = s),
            a.setSlideClasses(a.currentSlide),
            a.options.asNavFor &&
              (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <=
                l.options.slidesToShow &&
              l.setSlideClasses(a.currentSlide),
            a.updateDots(),
            a.updateArrows(),
            !0 === a.options.fade)
          )
            return (
              !0 !== t
                ? (a.fadeSlideOut(n),
                  a.fadeSlide(s, function () {
                    a.postSlide(s);
                  }))
                : a.postSlide(s),
              void a.animateHeight()
            );
          !0 !== t
            ? a.animateSlide(d, function () {
                a.postSlide(s);
              })
            : a.postSlide(s);
        }
    }),
    (e.prototype.startLoad = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.hide(), i.$nextArrow.hide()),
        !0 === i.options.dots &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.hide(),
        i.$slider.addClass("slick-loading");
    }),
    (e.prototype.swipeDirection = function () {
      var i,
        e,
        t,
        o,
        s = this;
      return (
        (i = s.touchObject.startX - s.touchObject.curX),
        (e = s.touchObject.startY - s.touchObject.curY),
        (t = Math.atan2(e, i)),
        (o = Math.round((180 * t) / Math.PI)) < 0 && (o = 360 - Math.abs(o)),
        o <= 45 && o >= 0
          ? !1 === s.options.rtl
            ? "left"
            : "right"
          : o <= 360 && o >= 315
          ? !1 === s.options.rtl
            ? "left"
            : "right"
          : o >= 135 && o <= 225
          ? !1 === s.options.rtl
            ? "right"
            : "left"
          : !0 === s.options.verticalSwiping
          ? o >= 35 && o <= 135
            ? "down"
            : "up"
          : "vertical"
      );
    }),
    (e.prototype.swipeEnd = function (i) {
      var e,
        t,
        o = this;
      if (((o.dragging = !1), (o.swiping = !1), o.scrolling))
        return (o.scrolling = !1), !1;
      if (
        ((o.interrupted = !1),
        (o.shouldClick = !(o.touchObject.swipeLength > 10)),
        void 0 === o.touchObject.curX)
      )
        return !1;
      if (
        (!0 === o.touchObject.edgeHit &&
          o.$slider.trigger("edge", [o, o.swipeDirection()]),
        o.touchObject.swipeLength >= o.touchObject.minSwipe)
      ) {
        switch ((t = o.swipeDirection())) {
          case "left":
          case "down":
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide + o.getSlideCount())
              : o.currentSlide + o.getSlideCount()),
              (o.currentDirection = 0);
            break;
          case "right":
          case "up":
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide - o.getSlideCount())
              : o.currentSlide - o.getSlideCount()),
              (o.currentDirection = 1);
        }
        "vertical" != t &&
          (o.slideHandler(e),
          (o.touchObject = {}),
          o.$slider.trigger("swipe", [o, t]));
      } else
        o.touchObject.startX !== o.touchObject.curX &&
          (o.slideHandler(o.currentSlide), (o.touchObject = {}));
    }),
    (e.prototype.swipeHandler = function (i) {
      var e = this;
      if (
        !(
          !1 === e.options.swipe ||
          ("ontouchend" in document && !1 === e.options.swipe) ||
          (!1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))
        )
      )
        switch (
          ((e.touchObject.fingerCount =
            i.originalEvent && void 0 !== i.originalEvent.touches
              ? i.originalEvent.touches.length
              : 1),
          (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
          !0 === e.options.verticalSwiping &&
            (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
          i.data.action)
        ) {
          case "start":
            e.swipeStart(i);
            break;
          case "move":
            e.swipeMove(i);
            break;
          case "end":
            e.swipeEnd(i);
        }
    }),
    (e.prototype.swipeMove = function (i) {
      var e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      return (
        (n = void 0 !== i.originalEvent ? i.originalEvent.touches : null),
        !(!l.dragging || l.scrolling || (n && 1 !== n.length)) &&
          ((e = l.getLeft(l.currentSlide)),
          (l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX),
          (l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY),
          (l.touchObject.swipeLength = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))
          )),
          (r = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))
          )),
          !l.options.verticalSwiping && !l.swiping && r > 4
            ? ((l.scrolling = !0), !1)
            : (!0 === l.options.verticalSwiping &&
                (l.touchObject.swipeLength = r),
              (t = l.swipeDirection()),
              void 0 !== i.originalEvent &&
                l.touchObject.swipeLength > 4 &&
                ((l.swiping = !0), i.preventDefault()),
              (s =
                (!1 === l.options.rtl ? 1 : -1) *
                (l.touchObject.curX > l.touchObject.startX ? 1 : -1)),
              !0 === l.options.verticalSwiping &&
                (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
              (o = l.touchObject.swipeLength),
              (l.touchObject.edgeHit = !1),
              !1 === l.options.infinite &&
                ((0 === l.currentSlide && "right" === t) ||
                  (l.currentSlide >= l.getDotCount() && "left" === t)) &&
                ((o = l.touchObject.swipeLength * l.options.edgeFriction),
                (l.touchObject.edgeHit = !0)),
              !1 === l.options.vertical
                ? (l.swipeLeft = e + o * s)
                : (l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s),
              !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s),
              !0 !== l.options.fade &&
                !1 !== l.options.touchMove &&
                (!0 === l.animating
                  ? ((l.swipeLeft = null), !1)
                  : void l.setCSS(l.swipeLeft))))
      );
    }),
    (e.prototype.swipeStart = function (i) {
      var e,
        t = this;
      if (
        ((t.interrupted = !0),
        1 !== t.touchObject.fingerCount ||
          t.slideCount <= t.options.slidesToShow)
      )
        return (t.touchObject = {}), !1;
      void 0 !== i.originalEvent &&
        void 0 !== i.originalEvent.touches &&
        (e = i.originalEvent.touches[0]),
        (t.touchObject.startX = t.touchObject.curX =
          void 0 !== e ? e.pageX : i.clientX),
        (t.touchObject.startY = t.touchObject.curY =
          void 0 !== e ? e.pageY : i.clientY),
        (t.dragging = !0);
    }),
    (e.prototype.unfilterSlides = e.prototype.slickUnfilter =
      function () {
        var i = this;
        null !== i.$slidesCache &&
          (i.unload(),
          i.$slideTrack.children(this.options.slide).detach(),
          i.$slidesCache.appendTo(i.$slideTrack),
          i.reinit());
      }),
    (e.prototype.unload = function () {
      var e = this;
      i(".slick-cloned", e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow &&
          e.htmlExpr.test(e.options.prevArrow) &&
          e.$prevArrow.remove(),
        e.$nextArrow &&
          e.htmlExpr.test(e.options.nextArrow) &&
          e.$nextArrow.remove(),
        e.$slides
          .removeClass("slick-slide slick-active slick-visible slick-current")
          .attr("aria-hidden", "true")
          .css("width", "");
    }),
    (e.prototype.unslick = function (i) {
      var e = this;
      e.$slider.trigger("unslick", [e, i]), e.destroy();
    }),
    (e.prototype.updateArrows = function () {
      var i = this;
      Math.floor(i.options.slidesToShow / 2),
        !0 === i.options.arrows &&
          i.slideCount > i.options.slidesToShow &&
          !i.options.infinite &&
          (i.$prevArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          i.$nextArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          0 === i.currentSlide
            ? (i.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$nextArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : i.currentSlide >= i.slideCount - i.options.slidesToShow &&
              !1 === i.options.centerMode
            ? (i.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : i.currentSlide >= i.slideCount - 1 &&
              !0 === i.options.centerMode &&
              (i.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false")));
    }),
    (e.prototype.updateDots = function () {
      var i = this;
      null !== i.$dots &&
        (i.$dots.find("li").removeClass("slick-active").end(),
        i.$dots
          .find("li")
          .eq(Math.floor(i.currentSlide / i.options.slidesToScroll))
          .addClass("slick-active"));
    }),
    (e.prototype.visibility = function () {
      var i = this;
      i.options.autoplay &&
        (document[i.hidden] ? (i.interrupted = !0) : (i.interrupted = !1));
    }),
    (i.fn.slick = function () {
      var i,
        t,
        o = this,
        s = arguments[0],
        n = Array.prototype.slice.call(arguments, 1),
        r = o.length;
      for (i = 0; i < r; i++)
        if (
          ("object" == typeof s || void 0 === s
            ? (o[i].slick = new e(o[i], s))
            : (t = o[i].slick[s].apply(o[i].slick, n)),
          void 0 !== t)
        )
          return t;
      return o;
    });
});

/**
 * sticky-sidebar - A JavaScript plugin for making smart and high performance.
 * @version v3.3.1
 * @link https://github.com/abouolia/sticky-sidebar
 * @author Ahmed Bouhuolia
 * @license The MIT License (MIT)
 **/
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : (t.StickySidebar = e());
})(this, function () {
  "use strict";
  "undefined" != typeof window
    ? window
    : "undefined" != typeof global
    ? global
    : "undefined" != typeof self && self;
  function t(t) {
    return t &&
      t.__esModule &&
      Object.prototype.hasOwnProperty.call(t, "default")
      ? t.default
      : t;
  }
  function e(t, e) {
    return t((e = { exports: {} }), e.exports), e.exports;
  }
  var i = e(function (t, e) {
    (function (t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l,
        n,
        e = (function () {
          function n(t, e) {
            for (var i = 0; i < e.length; i++) {
              var n = e[i];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          return function (t, e, i) {
            return e && n(t.prototype, e), i && n(t, i), t;
          };
        })(),
        i =
          ((l = ".stickySidebar"),
          (n = {
            topSpacing: 0,
            bottomSpacing: 0,
            containerSelector: !1,
            innerWrapperSelector: ".inner-wrapper-sticky",
            stickyClass: "is-affixed",
            resizeSensor: !0,
            minWidth: !1,
          }),
          (function () {
            function c(t) {
              var e = this,
                i =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              if (
                ((function (t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, c),
                (this.options = c.extend(n, i)),
                (this.sidebar =
                  "string" == typeof t ? document.querySelector(t) : t),
                void 0 === this.sidebar)
              )
                throw new Error("There is no specific sidebar element.");
              (this.sidebarInner = !1),
                (this.container = this.sidebar.parentElement),
                (this.affixedType = "STATIC"),
                (this.direction = "down"),
                (this.support = { transform: !1, transform3d: !1 }),
                (this._initialized = !1),
                (this._reStyle = !1),
                (this._breakpoint = !1),
                (this.dimensions = {
                  translateY: 0,
                  maxTranslateY: 0,
                  topSpacing: 0,
                  lastTopSpacing: 0,
                  bottomSpacing: 0,
                  lastBottomSpacing: 0,
                  sidebarHeight: 0,
                  sidebarWidth: 0,
                  containerTop: 0,
                  containerHeight: 0,
                  viewportHeight: 0,
                  viewportTop: 0,
                  lastViewportTop: 0,
                }),
                ["handleEvent"].forEach(function (t) {
                  e[t] = e[t].bind(e);
                }),
                this.initialize();
            }
            return (
              e(
                c,
                [
                  {
                    key: "initialize",
                    value: function () {
                      var i = this;
                      if (
                        (this._setSupportFeatures(),
                        this.options.innerWrapperSelector &&
                          ((this.sidebarInner = this.sidebar.querySelector(
                            this.options.innerWrapperSelector
                          )),
                          null === this.sidebarInner &&
                            (this.sidebarInner = !1)),
                        !this.sidebarInner)
                      ) {
                        var t = document.createElement("div");
                        for (
                          t.setAttribute("class", "inner-wrapper-sticky"),
                            this.sidebar.appendChild(t);
                          this.sidebar.firstChild != t;

                        )
                          t.appendChild(this.sidebar.firstChild);
                        this.sidebarInner = this.sidebar.querySelector(
                          ".inner-wrapper-sticky"
                        );
                      }
                      if (this.options.containerSelector) {
                        var e = document.querySelectorAll(
                          this.options.containerSelector
                        );
                        if (
                          ((e = Array.prototype.slice.call(e)).forEach(
                            function (t, e) {
                              t.contains(i.sidebar) && (i.container = t);
                            }
                          ),
                          !e.length)
                        )
                          throw new Error(
                            "The container does not contains on the sidebar."
                          );
                      }
                      "function" != typeof this.options.topSpacing &&
                        (this.options.topSpacing =
                          parseInt(this.options.topSpacing) || 0),
                        "function" != typeof this.options.bottomSpacing &&
                          (this.options.bottomSpacing =
                            parseInt(this.options.bottomSpacing) || 0),
                        this._widthBreakpoint(),
                        this.calcDimensions(),
                        this.stickyPosition(),
                        this.bindEvents(),
                        (this._initialized = !0);
                    },
                  },
                  {
                    key: "bindEvents",
                    value: function () {
                      window.addEventListener("resize", this, {
                        passive: !0,
                        capture: !1,
                      }),
                        window.addEventListener("scroll", this, {
                          passive: !0,
                          capture: !1,
                        }),
                        this.sidebar.addEventListener("update" + l, this),
                        this.options.resizeSensor &&
                          "undefined" != typeof ResizeSensor &&
                          (new ResizeSensor(
                            this.sidebarInner,
                            this.handleEvent
                          ),
                          new ResizeSensor(this.container, this.handleEvent));
                    },
                  },
                  {
                    key: "handleEvent",
                    value: function (t) {
                      this.updateSticky(t);
                    },
                  },
                  {
                    key: "calcDimensions",
                    value: function () {
                      if (!this._breakpoint) {
                        var t = this.dimensions;
                        (t.containerTop = c.offsetRelative(this.container).top),
                          (t.containerHeight = this.container.clientHeight),
                          (t.containerBottom =
                            t.containerTop + t.containerHeight),
                          (t.sidebarHeight = this.sidebarInner.offsetHeight),
                          (t.sidebarWidth = this.sidebarInner.offsetWidth),
                          (t.viewportHeight = window.innerHeight),
                          (t.maxTranslateY =
                            t.containerHeight - t.sidebarHeight),
                          this._calcDimensionsWithScroll();
                      }
                    },
                  },
                  {
                    key: "_calcDimensionsWithScroll",
                    value: function () {
                      var t = this.dimensions;
                      (t.sidebarLeft = c.offsetRelative(this.sidebar).left),
                        (t.viewportTop =
                          document.documentElement.scrollTop ||
                          document.body.scrollTop),
                        (t.viewportBottom = t.viewportTop + t.viewportHeight),
                        (t.viewportLeft =
                          document.documentElement.scrollLeft ||
                          document.body.scrollLeft),
                        (t.topSpacing = this.options.topSpacing),
                        (t.bottomSpacing = this.options.bottomSpacing),
                        "function" == typeof t.topSpacing &&
                          (t.topSpacing =
                            parseInt(t.topSpacing(this.sidebar)) || 0),
                        "function" == typeof t.bottomSpacing &&
                          (t.bottomSpacing =
                            parseInt(t.bottomSpacing(this.sidebar)) || 0),
                        "VIEWPORT-TOP" === this.affixedType
                          ? t.topSpacing < t.lastTopSpacing &&
                            ((t.translateY += t.lastTopSpacing - t.topSpacing),
                            (this._reStyle = !0))
                          : "VIEWPORT-BOTTOM" === this.affixedType &&
                            t.bottomSpacing < t.lastBottomSpacing &&
                            ((t.translateY +=
                              t.lastBottomSpacing - t.bottomSpacing),
                            (this._reStyle = !0)),
                        (t.lastTopSpacing = t.topSpacing),
                        (t.lastBottomSpacing = t.bottomSpacing);
                    },
                  },
                  {
                    key: "isSidebarFitsViewport",
                    value: function () {
                      var t = this.dimensions,
                        e =
                          "down" === this.scrollDirection
                            ? t.lastBottomSpacing
                            : t.lastTopSpacing;
                      return (
                        this.dimensions.sidebarHeight + e <
                        this.dimensions.viewportHeight
                      );
                    },
                  },
                  {
                    key: "observeScrollDir",
                    value: function () {
                      var t = this.dimensions;
                      if (t.lastViewportTop !== t.viewportTop) {
                        var e = "down" === this.direction ? Math.min : Math.max;
                        t.viewportTop === e(t.viewportTop, t.lastViewportTop) &&
                          (this.direction =
                            "down" === this.direction ? "up" : "down");
                      }
                    },
                  },
                  {
                    key: "getAffixType",
                    value: function () {
                      this._calcDimensionsWithScroll();
                      var t = this.dimensions,
                        e = t.viewportTop + t.topSpacing,
                        i = this.affixedType;
                      return (
                        e <= t.containerTop ||
                        t.containerHeight <= t.sidebarHeight
                          ? ((t.translateY = 0), (i = "STATIC"))
                          : (i =
                              "up" === this.direction
                                ? this._getAffixTypeScrollingUp()
                                : this._getAffixTypeScrollingDown()),
                        (t.translateY = Math.max(0, t.translateY)),
                        (t.translateY = Math.min(
                          t.containerHeight,
                          t.translateY
                        )),
                        (t.translateY = Math.round(t.translateY)),
                        (t.lastViewportTop = t.viewportTop),
                        i
                      );
                    },
                  },
                  {
                    key: "_getAffixTypeScrollingDown",
                    value: function () {
                      var t = this.dimensions,
                        e = t.sidebarHeight + t.containerTop,
                        i = t.viewportTop + t.topSpacing,
                        n = t.viewportBottom - t.bottomSpacing,
                        o = this.affixedType;
                      return (
                        this.isSidebarFitsViewport()
                          ? t.sidebarHeight + i >= t.containerBottom
                            ? ((t.translateY = t.containerBottom - e),
                              (o = "CONTAINER-BOTTOM"))
                            : i >= t.containerTop &&
                              ((t.translateY = i - t.containerTop),
                              (o = "VIEWPORT-TOP"))
                          : t.containerBottom <= n
                          ? ((t.translateY = t.containerBottom - e),
                            (o = "CONTAINER-BOTTOM"))
                          : e + t.translateY <= n
                          ? ((t.translateY = n - e), (o = "VIEWPORT-BOTTOM"))
                          : t.containerTop + t.translateY <= i &&
                            0 !== t.translateY &&
                            t.maxTranslateY !== t.translateY &&
                            (o = "VIEWPORT-UNBOTTOM"),
                        o
                      );
                    },
                  },
                  {
                    key: "_getAffixTypeScrollingUp",
                    value: function () {
                      var t = this.dimensions,
                        e = t.sidebarHeight + t.containerTop,
                        i = t.viewportTop + t.topSpacing,
                        n = t.viewportBottom - t.bottomSpacing,
                        o = this.affixedType;
                      return (
                        i <= t.translateY + t.containerTop
                          ? ((t.translateY = i - t.containerTop),
                            (o = "VIEWPORT-TOP"))
                          : t.containerBottom <= n
                          ? ((t.translateY = t.containerBottom - e),
                            (o = "CONTAINER-BOTTOM"))
                          : this.isSidebarFitsViewport() ||
                            (t.containerTop <= i &&
                              0 !== t.translateY &&
                              t.maxTranslateY !== t.translateY &&
                              (o = "VIEWPORT-UNBOTTOM")),
                        o
                      );
                    },
                  },
                  {
                    key: "_getStyle",
                    value: function (t) {
                      if (void 0 !== t) {
                        var e = { inner: {}, outer: {} },
                          i = this.dimensions;
                        switch (t) {
                          case "VIEWPORT-TOP":
                            e.inner = {
                              position: "fixed",
                              top: i.topSpacing,
                              left: i.sidebarLeft - i.viewportLeft,
                              width: i.sidebarWidth,
                            };
                            break;
                          case "VIEWPORT-BOTTOM":
                            e.inner = {
                              position: "fixed",
                              top: "auto",
                              left: i.sidebarLeft,
                              bottom: i.bottomSpacing,
                              width: i.sidebarWidth,
                            };
                            break;
                          case "CONTAINER-BOTTOM":
                          case "VIEWPORT-UNBOTTOM":
                            var n = this._getTranslate(0, i.translateY + "px");
                            e.inner = n
                              ? { transform: n }
                              : {
                                  position: "absolute",
                                  top: i.translateY,
                                  width: i.sidebarWidth,
                                };
                        }
                        switch (t) {
                          case "VIEWPORT-TOP":
                          case "VIEWPORT-BOTTOM":
                          case "VIEWPORT-UNBOTTOM":
                          case "CONTAINER-BOTTOM":
                            e.outer = {
                              height: i.sidebarHeight,
                              position: "relative",
                            };
                        }
                        return (
                          (e.outer = c.extend(
                            { height: "", position: "" },
                            e.outer
                          )),
                          (e.inner = c.extend(
                            {
                              position: "relative",
                              top: "",
                              left: "",
                              bottom: "",
                              width: "",
                              transform: "",
                            },
                            e.inner
                          )),
                          e
                        );
                      }
                    },
                  },
                  {
                    key: "stickyPosition",
                    value: function (t) {
                      if (!this._breakpoint) {
                        (t = this._reStyle || t || !1),
                          this.options.topSpacing,
                          this.options.bottomSpacing;
                        var e = this.getAffixType(),
                          i = this._getStyle(e);
                        if ((this.affixedType != e || t) && e) {
                          var n =
                            "affix." +
                            e.toLowerCase().replace("viewport-", "") +
                            l;
                          for (var o in (c.eventTrigger(this.sidebar, n),
                          "STATIC" === e
                            ? c.removeClass(
                                this.sidebar,
                                this.options.stickyClass
                              )
                            : c.addClass(
                                this.sidebar,
                                this.options.stickyClass
                              ),
                          i.outer)) {
                            var s = "number" == typeof i.outer[o] ? "px" : "";
                            this.sidebar.style[o] = i.outer[o] + s;
                          }
                          for (var r in i.inner) {
                            var a = "number" == typeof i.inner[r] ? "px" : "";
                            this.sidebarInner.style[r] = i.inner[r] + a;
                          }
                          var p =
                            "affixed." +
                            e.toLowerCase().replace("viewport-", "") +
                            l;
                          c.eventTrigger(this.sidebar, p);
                        } else
                          this._initialized &&
                            (this.sidebarInner.style.left = i.inner.left);
                        this.affixedType = e;
                      }
                    },
                  },
                  {
                    key: "_widthBreakpoint",
                    value: function () {
                      window.innerWidth <= this.options.minWidth
                        ? ((this._breakpoint = !0),
                          (this.affixedType = "STATIC"),
                          this.sidebar.removeAttribute("style"),
                          c.removeClass(this.sidebar, this.options.stickyClass),
                          this.sidebarInner.removeAttribute("style"))
                        : (this._breakpoint = !1);
                    },
                  },
                  {
                    key: "updateSticky",
                    value: function () {
                      var t,
                        e = this,
                        i =
                          0 < arguments.length && void 0 !== arguments[0]
                            ? arguments[0]
                            : {};
                      this._running ||
                        ((this._running = !0),
                        (t = i.type),
                        requestAnimationFrame(function () {
                          switch (t) {
                            case "scroll":
                              e._calcDimensionsWithScroll(),
                                e.observeScrollDir(),
                                e.stickyPosition();
                              break;
                            case "resize":
                            default:
                              e._widthBreakpoint(),
                                e.calcDimensions(),
                                e.stickyPosition(!0);
                          }
                          e._running = !1;
                        }));
                    },
                  },
                  {
                    key: "_setSupportFeatures",
                    value: function () {
                      var t = this.support;
                      (t.transform = c.supportTransform()),
                        (t.transform3d = c.supportTransform(!0));
                    },
                  },
                  {
                    key: "_getTranslate",
                    value: function () {
                      var t =
                          0 < arguments.length && void 0 !== arguments[0]
                            ? arguments[0]
                            : 0,
                        e =
                          1 < arguments.length && void 0 !== arguments[1]
                            ? arguments[1]
                            : 0,
                        i =
                          2 < arguments.length && void 0 !== arguments[2]
                            ? arguments[2]
                            : 0;
                      return this.support.transform3d
                        ? "translate3d(" + t + ", " + e + ", " + i + ")"
                        : !!this.support.translate &&
                            "translate(" + t + ", " + e + ")";
                    },
                  },
                  {
                    key: "destroy",
                    value: function () {
                      window.removeEventListener("resize", this, {
                        capture: !1,
                      }),
                        window.removeEventListener("scroll", this, {
                          capture: !1,
                        }),
                        this.sidebar.classList.remove(this.options.stickyClass),
                        (this.sidebar.style.minHeight = ""),
                        this.sidebar.removeEventListener("update" + l, this);
                      var t = { inner: {}, outer: {} };
                      for (var e in ((t.inner = {
                        position: "",
                        top: "",
                        left: "",
                        bottom: "",
                        width: "",
                        transform: "",
                      }),
                      (t.outer = { height: "", position: "" }),
                      t.outer))
                        this.sidebar.style[e] = t.outer[e];
                      for (var i in t.inner)
                        this.sidebarInner.style[i] = t.inner[i];
                      this.options.resizeSensor &&
                        "undefined" != typeof ResizeSensor &&
                        (ResizeSensor.detach(
                          this.sidebarInner,
                          this.handleEvent
                        ),
                        ResizeSensor.detach(this.container, this.handleEvent));
                    },
                  },
                ],
                [
                  {
                    key: "supportTransform",
                    value: function (t) {
                      var i = !1,
                        e = t ? "perspective" : "transform",
                        n = e.charAt(0).toUpperCase() + e.slice(1),
                        o = document.createElement("support").style;
                      return (
                        (
                          e +
                          " " +
                          ["Webkit", "Moz", "O", "ms"].join(n + " ") +
                          n
                        )
                          .split(" ")
                          .forEach(function (t, e) {
                            if (void 0 !== o[t]) return (i = t), !1;
                          }),
                        i
                      );
                    },
                  },
                  {
                    key: "eventTrigger",
                    value: function (t, e, i) {
                      try {
                        var n = new CustomEvent(e, { detail: i });
                      } catch (t) {
                        (n =
                          document.createEvent("CustomEvent")).initCustomEvent(
                          e,
                          !0,
                          !0,
                          i
                        );
                      }
                      t.dispatchEvent(n);
                    },
                  },
                  {
                    key: "extend",
                    value: function (t, e) {
                      var i = {};
                      for (var n in t)
                        void 0 !== e[n] ? (i[n] = e[n]) : (i[n] = t[n]);
                      return i;
                    },
                  },
                  {
                    key: "offsetRelative",
                    value: function (t) {
                      var e = { left: 0, top: 0 };
                      do {
                        var i = t.offsetTop,
                          n = t.offsetLeft;
                        isNaN(i) || (e.top += i),
                          isNaN(n) || (e.left += n),
                          (t =
                            "BODY" === t.tagName
                              ? t.parentElement
                              : t.offsetParent);
                      } while (t);
                      return e;
                    },
                  },
                  {
                    key: "addClass",
                    value: function (t, e) {
                      c.hasClass(t, e) ||
                        (t.classList
                          ? t.classList.add(e)
                          : (t.className += " " + e));
                    },
                  },
                  {
                    key: "removeClass",
                    value: function (t, e) {
                      c.hasClass(t, e) &&
                        (t.classList
                          ? t.classList.remove(e)
                          : (t.className = t.className.replace(
                              new RegExp(
                                "(^|\\b)" + e.split(" ").join("|") + "(\\b|$)",
                                "gi"
                              ),
                              " "
                            )));
                    },
                  },
                  {
                    key: "hasClass",
                    value: function (t, e) {
                      return t.classList
                        ? t.classList.contains(e)
                        : new RegExp("(^| )" + e + "( |$)", "gi").test(
                            t.className
                          );
                    },
                  },
                  {
                    key: "defaults",
                    get: function () {
                      return n;
                    },
                  },
                ]
              ),
              c
            );
          })());
      (t.default = i), (window.StickySidebar = i);
    })(e);
  });
  return (
    t(i),
    t(
      e(function (t, e) {
        (function (t) {
          var e,
            s = (e = t) && e.__esModule ? e : { default: e };
          !(function () {
            if ("undefined" != typeof window) {
              var n = window.$ || window.jQuery || window.Zepto,
                o = "stickySidebar";
              if (n) {
                (n.fn.stickySidebar = function (i) {
                  return this.each(function () {
                    var t = n(this),
                      e = n(this).data(o);
                    if (
                      (e ||
                        ((e = new s.default(this, "object" == typeof i && i)),
                        t.data(o, e)),
                      "string" == typeof i)
                    ) {
                      if (
                        void 0 === e[i] &&
                        -1 === ["destroy", "updateSticky"].indexOf(i)
                      )
                        throw new Error('No method named "' + i + '"');
                      e[i]();
                    }
                  });
                }),
                  (n.fn.stickySidebar.Constructor = s.default);
                var t = n.fn.stickySidebar;
                n.fn.stickySidebar.noConflict = function () {
                  return (n.fn.stickySidebar = t), this;
                };
              }
            }
          })();
        })(i);
      })
    )
  );
});

/*!
 * Customized version of iScroll.js 0.0.2
 * It fixes bugs affecting its integration with fullpage.js
 */
/*! iScroll v5.2.0 ~ (c) 2008-2016 Matteo Spinelli ~ http://cubiq.org/license */
!(function (t, i, e) {
  function s(e, s) {
    (this.wrapper = "string" == typeof e ? i.querySelector(e) : e),
      (this.scroller = this.wrapper.children[0]),
      (this.scrollerStyle = this.scroller.style),
      (this.options = {
        resizeScrollbars: !0,
        mouseWheelSpeed: 20,
        snapThreshold: 0.334,
        disablePointer: !h.hasPointer,
        disableTouch: h.hasPointer || !h.hasTouch,
        disableMouse: h.hasPointer || h.hasTouch,
        startX: 0,
        startY: 0,
        scrollY: !0,
        directionLockThreshold: 5,
        momentum: !0,
        bounce: !0,
        bounceTime: 600,
        bounceEasing: "",
        preventDefault: !0,
        preventDefaultException: {
          tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|LABEL)$/,
        },
        HWCompositing: !0,
        useTransition: !0,
        useTransform: !0,
        bindToWrapper: "undefined" == typeof t.onmousedown,
      });
    for (var o in s) this.options[o] = s[o];
    (this.translateZ =
      this.options.HWCompositing && h.hasPerspective ? " translateZ(0)" : ""),
      (this.options.useTransition =
        h.hasTransition && this.options.useTransition),
      (this.options.useTransform = h.hasTransform && this.options.useTransform),
      (this.options.eventPassthrough =
        this.options.eventPassthrough === !0
          ? "vertical"
          : this.options.eventPassthrough),
      (this.options.preventDefault =
        !this.options.eventPassthrough && this.options.preventDefault),
      (this.options.scrollY =
        "vertical" != this.options.eventPassthrough && this.options.scrollY),
      (this.options.scrollX =
        "horizontal" != this.options.eventPassthrough && this.options.scrollX),
      (this.options.freeScroll =
        this.options.freeScroll && !this.options.eventPassthrough),
      (this.options.directionLockThreshold = this.options.eventPassthrough
        ? 0
        : this.options.directionLockThreshold),
      (this.options.bounceEasing =
        "string" == typeof this.options.bounceEasing
          ? h.ease[this.options.bounceEasing] || h.ease.circular
          : this.options.bounceEasing),
      (this.options.resizePolling =
        void 0 === this.options.resizePolling
          ? 60
          : this.options.resizePolling),
      this.options.tap === !0 && (this.options.tap = "tap"),
      this.options.useTransition ||
        this.options.useTransform ||
        /relative|absolute/i.test(this.scrollerStyle.position) ||
        (this.scrollerStyle.position = "relative"),
      "scale" == this.options.shrinkScrollbars &&
        (this.options.useTransition = !1),
      (this.options.invertWheelDirection = this.options.invertWheelDirection
        ? -1
        : 1),
      (this.x = 0),
      (this.y = 0),
      (this.directionX = 0),
      (this.directionY = 0),
      (this._events = {}),
      this._init(),
      this.refresh(),
      this.scrollTo(this.options.startX, this.options.startY),
      this.enable();
  }
  function o(t, e, s) {
    var o = i.createElement("div"),
      n = i.createElement("div");
    return (
      s === !0 &&
        ((o.style.cssText = "position:absolute;z-index:9999"),
        (n.style.cssText =
          "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px")),
      (n.className = "iScrollIndicator"),
      "h" == t
        ? (s === !0 &&
            ((o.style.cssText += ";height:7px;left:2px;right:2px;bottom:0"),
            (n.style.height = "100%")),
          (o.className = "iScrollHorizontalScrollbar"))
        : (s === !0 &&
            ((o.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px"),
            (n.style.width = "100%")),
          (o.className = "iScrollVerticalScrollbar")),
      (o.style.cssText += ";overflow:hidden"),
      e || (o.style.pointerEvents = "none"),
      o.appendChild(n),
      o
    );
  }
  function n(e, s) {
    (this.wrapper = "string" == typeof s.el ? i.querySelector(s.el) : s.el),
      (this.wrapperStyle = this.wrapper.style),
      (this.indicator = this.wrapper.children[0]),
      (this.indicatorStyle = this.indicator.style),
      (this.scroller = e),
      (this.options = {
        listenX: !0,
        listenY: !0,
        interactive: !1,
        resize: !0,
        defaultScrollbars: !1,
        shrink: !1,
        fade: !1,
        speedRatioX: 0,
        speedRatioY: 0,
      });
    for (var o in s) this.options[o] = s[o];
    if (
      ((this.sizeRatioX = 1),
      (this.sizeRatioY = 1),
      (this.maxPosX = 0),
      (this.maxPosY = 0),
      this.options.interactive &&
        (this.options.disableTouch ||
          (h.addEvent(this.indicator, "touchstart", this),
          h.addEvent(t, "touchend", this)),
        this.options.disablePointer ||
          (h.addEvent(
            this.indicator,
            h.prefixPointerEvent("pointerdown"),
            this
          ),
          h.addEvent(t, h.prefixPointerEvent("pointerup"), this)),
        this.options.disableMouse ||
          (h.addEvent(this.indicator, "mousedown", this),
          h.addEvent(t, "mouseup", this))),
      this.options.fade)
    ) {
      this.wrapperStyle[h.style.transform] = this.scroller.translateZ;
      var n = h.style.transitionDuration;
      if (!n) return;
      this.wrapperStyle[n] = h.isBadAndroid ? "0.0001ms" : "0ms";
      var a = this;
      h.isBadAndroid &&
        r(function () {
          "0.0001ms" === a.wrapperStyle[n] && (a.wrapperStyle[n] = "0s");
        }),
        (this.wrapperStyle.opacity = "0");
    }
  }
  var r =
      t.requestAnimationFrame ||
      t.webkitRequestAnimationFrame ||
      t.mozRequestAnimationFrame ||
      t.oRequestAnimationFrame ||
      t.msRequestAnimationFrame ||
      function (i) {
        t.setTimeout(i, 1e3 / 60);
      },
    h = (function () {
      function s(t) {
        return (
          r !== !1 &&
          ("" === r ? t : r + t.charAt(0).toUpperCase() + t.substr(1))
        );
      }
      var o = {},
        n = i.createElement("div").style,
        r = (function () {
          for (
            var t,
              i = ["t", "webkitT", "MozT", "msT", "OT"],
              e = 0,
              s = i.length;
            e < s;
            e++
          )
            if (((t = i[e] + "ransform"), t in n))
              return i[e].substr(0, i[e].length - 1);
          return !1;
        })();
      (o.getTime =
        Date.now ||
        function () {
          return new Date().getTime();
        }),
        (o.extend = function (t, i) {
          for (var e in i) t[e] = i[e];
        }),
        (o.addEvent = function (t, i, e, s) {
          t.addEventListener(i, e, !!s);
        }),
        (o.removeEvent = function (t, i, e, s) {
          t.removeEventListener(i, e, !!s);
        }),
        (o.prefixPointerEvent = function (i) {
          return t.MSPointerEvent
            ? "MSPointer" + i.charAt(7).toUpperCase() + i.substr(8)
            : i;
        }),
        (o.momentum = function (t, i, s, o, n, r) {
          var h,
            a,
            l = t - i,
            c = e.abs(l) / s;
          return (
            (r = void 0 === r ? 6e-4 : r),
            (h = t + ((c * c) / (2 * r)) * (l < 0 ? -1 : 1)),
            (a = c / r),
            h < o
              ? ((h = n ? o - (n / 2.5) * (c / 8) : o),
                (l = e.abs(h - t)),
                (a = l / c))
              : h > 0 &&
                ((h = n ? (n / 2.5) * (c / 8) : 0),
                (l = e.abs(t) + h),
                (a = l / c)),
            { destination: e.round(h), duration: a }
          );
        });
      var h = s("transform");
      return (
        o.extend(o, {
          hasTransform: h !== !1,
          hasPerspective: s("perspective") in n,
          hasTouch: "ontouchstart" in t,
          hasPointer: !(!t.PointerEvent && !t.MSPointerEvent),
          hasTransition: s("transition") in n,
        }),
        (o.isBadAndroid = (function () {
          var i = t.navigator.appVersion;
          if (/Android/.test(i) && !/Chrome\/\d/.test(i)) {
            var e = i.match(/Safari\/(\d+.\d)/);
            return (
              !(e && "object" == typeof e && e.length >= 2) ||
              parseFloat(e[1]) < 535.19
            );
          }
          return !1;
        })()),
        o.extend((o.style = {}), {
          transform: h,
          transitionTimingFunction: s("transitionTimingFunction"),
          transitionDuration: s("transitionDuration"),
          transitionDelay: s("transitionDelay"),
          transformOrigin: s("transformOrigin"),
        }),
        (o.hasClass = function (t, i) {
          var e = new RegExp("(^|\\s)" + i + "(\\s|$)");
          return e.test(t.className);
        }),
        (o.addClass = function (t, i) {
          if (!o.hasClass(t, i)) {
            var e = t.className.split(" ");
            e.push(i), (t.className = e.join(" "));
          }
        }),
        (o.removeClass = function (t, i) {
          if (o.hasClass(t, i)) {
            var e = new RegExp("(^|\\s)" + i + "(\\s|$)", "g");
            t.className = t.className.replace(e, " ");
          }
        }),
        (o.offset = function (t) {
          for (var i = -t.offsetLeft, e = -t.offsetTop; (t = t.offsetParent); )
            (i -= t.offsetLeft), (e -= t.offsetTop);
          return { left: i, top: e };
        }),
        (o.preventDefaultException = function (t, i) {
          for (var e in i) if (i[e].test(t[e])) return !0;
          return !1;
        }),
        o.extend((o.eventType = {}), {
          touchstart: 1,
          touchmove: 1,
          touchend: 1,
          mousedown: 2,
          mousemove: 2,
          mouseup: 2,
          pointerdown: 3,
          pointermove: 3,
          pointerup: 3,
          MSPointerDown: 3,
          MSPointerMove: 3,
          MSPointerUp: 3,
        }),
        o.extend((o.ease = {}), {
          quadratic: {
            style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            fn: function (t) {
              return t * (2 - t);
            },
          },
          circular: {
            style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
            fn: function (t) {
              return e.sqrt(1 - --t * t);
            },
          },
          back: {
            style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            fn: function (t) {
              var i = 4;
              return (t -= 1) * t * ((i + 1) * t + i) + 1;
            },
          },
          bounce: {
            style: "",
            fn: function (t) {
              return (t /= 1) < 1 / 2.75
                ? 7.5625 * t * t
                : t < 2 / 2.75
                ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                : t < 2.5 / 2.75
                ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
            },
          },
          elastic: {
            style: "",
            fn: function (t) {
              var i = 0.22,
                s = 0.4;
              return 0 === t
                ? 0
                : 1 == t
                ? 1
                : s *
                    e.pow(2, -10 * t) *
                    e.sin(((t - i / 4) * (2 * e.PI)) / i) +
                  1;
            },
          },
        }),
        (o.tap = function (t, e) {
          var s = i.createEvent("Event");
          s.initEvent(e, !0, !0),
            (s.pageX = t.pageX),
            (s.pageY = t.pageY),
            t.target.dispatchEvent(s);
        }),
        (o.click = function (e) {
          var s,
            o = e.target;
          /(SELECT|INPUT|TEXTAREA)/i.test(o.tagName) ||
            ((s = i.createEvent(t.MouseEvent ? "MouseEvents" : "Event")),
            s.initEvent("click", !0, !0),
            (s.view = e.view || t),
            (s.detail = 1),
            (s.screenX = o.screenX || 0),
            (s.screenY = o.screenY || 0),
            (s.clientX = o.clientX || 0),
            (s.clientY = o.clientY || 0),
            (s.ctrlKey = !!e.ctrlKey),
            (s.altKey = !!e.altKey),
            (s.shiftKey = !!e.shiftKey),
            (s.metaKey = !!e.metaKey),
            (s.button = 0),
            (s.relatedTarget = null),
            (s._constructed = !0),
            o.dispatchEvent(s));
        }),
        o
      );
    })();
  (s.prototype = {
    version: "5.2.0",
    _init: function () {
      this._initEvents(),
        (this.options.scrollbars || this.options.indicators) &&
          this._initIndicators(),
        this.options.mouseWheel && this._initWheel(),
        this.options.snap && this._initSnap(),
        this.options.keyBindings && this._initKeys();
    },
    destroy: function () {
      this._initEvents(!0),
        clearTimeout(this.resizeTimeout),
        (this.resizeTimeout = null),
        this._execEvent("destroy");
    },
    _transitionEnd: function (t) {
      t.target == this.scroller &&
        this.isInTransition &&
        (this._transitionTime(),
        this.resetPosition(this.options.bounceTime) ||
          ((this.isInTransition = !1), this._execEvent("scrollEnd")));
    },
    _start: function (t) {
      if (1 != h.eventType[t.type]) {
        var i;
        if (
          ((i = t.which ? t.button : t.button < 2 ? 0 : 4 == t.button ? 1 : 2),
          0 !== i)
        )
          return;
      }
      if (
        this.enabled &&
        (!this.initiated || h.eventType[t.type] === this.initiated)
      ) {
        !this.options.preventDefault ||
          h.isBadAndroid ||
          h.preventDefaultException(
            t.target,
            this.options.preventDefaultException
          ) ||
          t.preventDefault();
        var s,
          o = t.touches ? t.touches[0] : t;
        (this.initiated = h.eventType[t.type]),
          (this.moved = !1),
          (this.distX = 0),
          (this.distY = 0),
          (this.directionX = 0),
          (this.directionY = 0),
          (this.directionLocked = 0),
          (this.startTime = h.getTime()),
          this.options.useTransition && this.isInTransition
            ? (this._transitionTime(),
              (this.isInTransition = !1),
              (s = this.getComputedPosition()),
              this._translate(e.round(s.x), e.round(s.y)),
              this._execEvent("scrollEnd"))
            : !this.options.useTransition &&
              this.isAnimating &&
              ((this.isAnimating = !1), this._execEvent("scrollEnd")),
          (this.startX = this.x),
          (this.startY = this.y),
          (this.absStartX = this.x),
          (this.absStartY = this.y),
          (this.pointX = o.pageX),
          (this.pointY = o.pageY),
          this._execEvent("beforeScrollStart");
      }
    },
    _move: function (t) {
      if (this.enabled && h.eventType[t.type] === this.initiated) {
        this.options.preventDefault && t.preventDefault();
        var i,
          s,
          o,
          n,
          r = t.touches ? t.touches[0] : t,
          a = r.pageX - this.pointX,
          l = r.pageY - this.pointY,
          c = h.getTime();
        if (
          ((this.pointX = r.pageX),
          (this.pointY = r.pageY),
          (this.distX += a),
          (this.distY += l),
          (o = e.abs(this.distX)),
          (n = e.abs(this.distY)),
          !(c - this.endTime > 300 && o < 10 && n < 10))
        ) {
          if (
            (this.directionLocked ||
              this.options.freeScroll ||
              (o > n + this.options.directionLockThreshold
                ? (this.directionLocked = "h")
                : n >= o + this.options.directionLockThreshold
                ? (this.directionLocked = "v")
                : (this.directionLocked = "n")),
            "h" == this.directionLocked)
          ) {
            if ("vertical" == this.options.eventPassthrough) t.preventDefault();
            else if ("horizontal" == this.options.eventPassthrough)
              return void (this.initiated = !1);
            l = 0;
          } else if ("v" == this.directionLocked) {
            if ("horizontal" == this.options.eventPassthrough)
              t.preventDefault();
            else if ("vertical" == this.options.eventPassthrough)
              return void (this.initiated = !1);
            a = 0;
          }
          (a = this.hasHorizontalScroll ? a : 0),
            (l = this.hasVerticalScroll ? l : 0),
            (i = this.x + a),
            (s = this.y + l),
            (i > 0 || i < this.maxScrollX) &&
              (i = this.options.bounce
                ? this.x + a / 3
                : i > 0
                ? 0
                : this.maxScrollX),
            (s > 0 || s < this.maxScrollY) &&
              (s = this.options.bounce
                ? this.y + l / 3
                : s > 0
                ? 0
                : this.maxScrollY),
            (this.directionX = a > 0 ? -1 : a < 0 ? 1 : 0),
            (this.directionY = l > 0 ? -1 : l < 0 ? 1 : 0),
            this.moved || this._execEvent("scrollStart"),
            (this.moved = !0),
            this._translate(i, s),
            c - this.startTime > 300 &&
              ((this.startTime = c),
              (this.startX = this.x),
              (this.startY = this.y));
        }
      }
    },
    _end: function (t) {
      if (this.enabled && h.eventType[t.type] === this.initiated) {
        this.options.preventDefault &&
          !h.preventDefaultException(
            t.target,
            this.options.preventDefaultException
          ) &&
          t.preventDefault();
        var i,
          s,
          o =
            (t.changedTouches ? t.changedTouches[0] : t,
            h.getTime() - this.startTime),
          n = e.round(this.x),
          r = e.round(this.y),
          a = e.abs(n - this.startX),
          l = e.abs(r - this.startY),
          c = 0,
          p = "";
        if (
          ((this.isInTransition = 0),
          (this.initiated = 0),
          (this.endTime = h.getTime()),
          !this.resetPosition(this.options.bounceTime))
        ) {
          if ((this.scrollTo(n, r), !this.moved))
            return (
              this.options.tap && h.tap(t, this.options.tap),
              this.options.click && h.click(t),
              void this._execEvent("scrollCancel")
            );
          if (this._events.flick && o < 200 && a < 100 && l < 100)
            return void this._execEvent("flick");
          if (
            (this.options.momentum &&
              o < 300 &&
              ((i = this.hasHorizontalScroll
                ? h.momentum(
                    this.x,
                    this.startX,
                    o,
                    this.maxScrollX,
                    this.options.bounce ? this.wrapperWidth : 0,
                    this.options.deceleration
                  )
                : { destination: n, duration: 0 }),
              (s = this.hasVerticalScroll
                ? h.momentum(
                    this.y,
                    this.startY,
                    o,
                    this.maxScrollY,
                    this.options.bounce ? this.wrapperHeight : 0,
                    this.options.deceleration
                  )
                : { destination: r, duration: 0 }),
              (n = i.destination),
              (r = s.destination),
              (c = e.max(i.duration, s.duration)),
              (this.isInTransition = 1)),
            this.options.snap)
          ) {
            var d = this._nearestSnap(n, r);
            (this.currentPage = d),
              (c =
                this.options.snapSpeed ||
                e.max(
                  e.max(e.min(e.abs(n - d.x), 1e3), e.min(e.abs(r - d.y), 1e3)),
                  300
                )),
              (n = d.x),
              (r = d.y),
              (this.directionX = 0),
              (this.directionY = 0),
              (p = this.options.bounceEasing);
          }
          return n != this.x || r != this.y
            ? ((n > 0 || n < this.maxScrollX || r > 0 || r < this.maxScrollY) &&
                (p = h.ease.quadratic),
              void this.scrollTo(n, r, c, p))
            : void this._execEvent("scrollEnd");
        }
      }
    },
    _resize: function () {
      var t = this;
      clearTimeout(this.resizeTimeout),
        (this.resizeTimeout = setTimeout(function () {
          t.refresh();
        }, this.options.resizePolling));
    },
    resetPosition: function (t) {
      var i = this.x,
        e = this.y;
      return (
        (t = t || 0),
        !this.hasHorizontalScroll || this.x > 0
          ? (i = 0)
          : this.x < this.maxScrollX && (i = this.maxScrollX),
        !this.hasVerticalScroll || this.y > 0
          ? (e = 0)
          : this.y < this.maxScrollY && (e = this.maxScrollY),
        (i != this.x || e != this.y) &&
          (this.scrollTo(i, e, t, this.options.bounceEasing), !0)
      );
    },
    disable: function () {
      this.enabled = !1;
    },
    enable: function () {
      this.enabled = !0;
    },
    refresh: function () {
      this.wrapper.offsetHeight;
      (this.wrapperWidth = this.wrapper.clientWidth),
        (this.wrapperHeight = this.wrapper.clientHeight),
        (this.scrollerWidth = this.scroller.offsetWidth),
        (this.scrollerHeight = this.scroller.offsetHeight),
        (this.maxScrollX = this.wrapperWidth - this.scrollerWidth),
        (this.maxScrollY = this.wrapperHeight - this.scrollerHeight),
        (this.hasHorizontalScroll =
          this.options.scrollX && this.maxScrollX < 0),
        (this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0),
        this.hasHorizontalScroll ||
          ((this.maxScrollX = 0), (this.scrollerWidth = this.wrapperWidth)),
        this.hasVerticalScroll ||
          ((this.maxScrollY = 0), (this.scrollerHeight = this.wrapperHeight)),
        (this.endTime = 0),
        (this.directionX = 0),
        (this.directionY = 0),
        (this.wrapperOffset = h.offset(this.wrapper)),
        this._execEvent("refresh"),
        this.resetPosition();
    },
    on: function (t, i) {
      this._events[t] || (this._events[t] = []), this._events[t].push(i);
    },
    off: function (t, i) {
      if (this._events[t]) {
        var e = this._events[t].indexOf(i);
        e > -1 && this._events[t].splice(e, 1);
      }
    },
    _execEvent: function (t) {
      if (this._events[t]) {
        var i = 0,
          e = this._events[t].length;
        if (e)
          for (; i < e; i++)
            this._events[t][i].apply(this, [].slice.call(arguments, 1));
      }
    },
    scrollBy: function (t, i, e, s) {
      (t = this.x + t),
        (i = this.y + i),
        (e = e || 0),
        this.scrollTo(t, i, e, s);
    },
    scrollTo: function (t, i, e, s) {
      (s = s || h.ease.circular),
        (this.isInTransition = this.options.useTransition && e > 0);
      var o = this.options.useTransition && s.style;
      !e || o
        ? (o &&
            (this._transitionTimingFunction(s.style), this._transitionTime(e)),
          this._translate(t, i))
        : this._animate(t, i, e, s.fn);
    },
    scrollToElement: function (t, i, s, o, n) {
      if ((t = t.nodeType ? t : this.scroller.querySelector(t))) {
        var r = h.offset(t);
        (r.left -= this.wrapperOffset.left),
          (r.top -= this.wrapperOffset.top),
          s === !0 &&
            (s = e.round(t.offsetWidth / 2 - this.wrapper.offsetWidth / 2)),
          o === !0 &&
            (o = e.round(t.offsetHeight / 2 - this.wrapper.offsetHeight / 2)),
          (r.left -= s || 0),
          (r.top -= o || 0),
          (r.left =
            r.left > 0
              ? 0
              : r.left < this.maxScrollX
              ? this.maxScrollX
              : r.left),
          (r.top =
            r.top > 0 ? 0 : r.top < this.maxScrollY ? this.maxScrollY : r.top),
          (i =
            void 0 === i || null === i || "auto" === i
              ? e.max(e.abs(this.x - r.left), e.abs(this.y - r.top))
              : i),
          this.scrollTo(r.left, r.top, i, n);
      }
    },
    _transitionTime: function (t) {
      if (this.options.useTransition) {
        t = t || 0;
        var i = h.style.transitionDuration;
        if (i) {
          if (((this.scrollerStyle[i] = t + "ms"), !t && h.isBadAndroid)) {
            this.scrollerStyle[i] = "0.0001ms";
            var e = this;
            r(function () {
              "0.0001ms" === e.scrollerStyle[i] && (e.scrollerStyle[i] = "0s");
            });
          }
          if (this.indicators)
            for (var s = this.indicators.length; s--; )
              this.indicators[s].transitionTime(t);
        }
      }
    },
    _transitionTimingFunction: function (t) {
      if (
        ((this.scrollerStyle[h.style.transitionTimingFunction] = t),
        this.indicators)
      )
        for (var i = this.indicators.length; i--; )
          this.indicators[i].transitionTimingFunction(t);
    },
    _translate: function (t, i) {
      if (
        (this.options.useTransform
          ? (this.scrollerStyle[h.style.transform] =
              "translate(" + t + "px," + i + "px)" + this.translateZ)
          : ((t = e.round(t)),
            (i = e.round(i)),
            (this.scrollerStyle.left = t + "px"),
            (this.scrollerStyle.top = i + "px")),
        (this.x = t),
        (this.y = i),
        this.indicators)
      )
        for (var s = this.indicators.length; s--; )
          this.indicators[s].updatePosition();
    },
    _initEvents: function (i) {
      var e = i ? h.removeEvent : h.addEvent,
        s = this.options.bindToWrapper ? this.wrapper : t;
      e(t, "orientationchange", this),
        e(t, "resize", this),
        this.options.click && e(this.wrapper, "click", this, !0),
        this.options.disableMouse ||
          (e(this.wrapper, "mousedown", this),
          e(s, "mousemove", this),
          e(s, "mousecancel", this),
          e(s, "mouseup", this)),
        h.hasPointer &&
          !this.options.disablePointer &&
          (e(this.wrapper, h.prefixPointerEvent("pointerdown"), this),
          e(s, h.prefixPointerEvent("pointermove"), this),
          e(s, h.prefixPointerEvent("pointercancel"), this),
          e(s, h.prefixPointerEvent("pointerup"), this)),
        h.hasTouch &&
          !this.options.disableTouch &&
          (e(this.wrapper, "touchstart", this),
          e(s, "touchmove", this),
          e(s, "touchcancel", this),
          e(s, "touchend", this)),
        e(this.scroller, "transitionend", this),
        e(this.scroller, "webkitTransitionEnd", this),
        e(this.scroller, "oTransitionEnd", this),
        e(this.scroller, "MSTransitionEnd", this);
    },
    getComputedPosition: function () {
      var i,
        e,
        s = t.getComputedStyle(this.scroller, null);
      return (
        this.options.useTransform
          ? ((s = s[h.style.transform].split(")")[0].split(", ")),
            (i = +(s[12] || s[4])),
            (e = +(s[13] || s[5])))
          : ((i = +s.left.replace(/[^-\d.]/g, "")),
            (e = +s.top.replace(/[^-\d.]/g, ""))),
        { x: i, y: e }
      );
    },
    _initIndicators: function () {
      function t(t) {
        if (h.indicators)
          for (var i = h.indicators.length; i--; ) t.call(h.indicators[i]);
      }
      var i,
        e = this.options.interactiveScrollbars,
        s = "string" != typeof this.options.scrollbars,
        r = [],
        h = this;
      (this.indicators = []),
        this.options.scrollbars &&
          (this.options.scrollY &&
            ((i = {
              el: o("v", e, this.options.scrollbars),
              interactive: e,
              defaultScrollbars: !0,
              customStyle: s,
              resize: this.options.resizeScrollbars,
              shrink: this.options.shrinkScrollbars,
              fade: this.options.fadeScrollbars,
              listenX: !1,
            }),
            this.wrapper.appendChild(i.el),
            r.push(i)),
          this.options.scrollX &&
            ((i = {
              el: o("h", e, this.options.scrollbars),
              interactive: e,
              defaultScrollbars: !0,
              customStyle: s,
              resize: this.options.resizeScrollbars,
              shrink: this.options.shrinkScrollbars,
              fade: this.options.fadeScrollbars,
              listenY: !1,
            }),
            this.wrapper.appendChild(i.el),
            r.push(i))),
        this.options.indicators && (r = r.concat(this.options.indicators));
      for (var a = r.length; a--; ) this.indicators.push(new n(this, r[a]));
      this.options.fadeScrollbars &&
        (this.on("scrollEnd", function () {
          t(function () {
            this.fade();
          });
        }),
        this.on("scrollCancel", function () {
          t(function () {
            this.fade();
          });
        }),
        this.on("scrollStart", function () {
          t(function () {
            this.fade(1);
          });
        }),
        this.on("beforeScrollStart", function () {
          t(function () {
            this.fade(1, !0);
          });
        })),
        this.on("refresh", function () {
          t(function () {
            this.refresh();
          });
        }),
        this.on("destroy", function () {
          t(function () {
            this.destroy();
          }),
            delete this.indicators;
        });
    },
    _initWheel: function () {
      h.addEvent(this.wrapper, "wheel", this),
        h.addEvent(this.wrapper, "mousewheel", this),
        h.addEvent(this.wrapper, "DOMMouseScroll", this),
        this.on("destroy", function () {
          clearTimeout(this.wheelTimeout),
            (this.wheelTimeout = null),
            h.removeEvent(this.wrapper, "wheel", this),
            h.removeEvent(this.wrapper, "mousewheel", this),
            h.removeEvent(this.wrapper, "DOMMouseScroll", this);
        });
    },
    _wheel: function (t) {
      if (this.enabled) {
        var i,
          s,
          o,
          n,
          r = this;
        if (
          (void 0 === this.wheelTimeout && r._execEvent("scrollStart"),
          clearTimeout(this.wheelTimeout),
          (this.wheelTimeout = setTimeout(function () {
            r.options.snap || r._execEvent("scrollEnd"),
              (r.wheelTimeout = void 0);
          }, 400)),
          "deltaX" in t)
        )
          1 === t.deltaMode
            ? ((i = -t.deltaX * this.options.mouseWheelSpeed),
              (s = -t.deltaY * this.options.mouseWheelSpeed))
            : ((i = -t.deltaX), (s = -t.deltaY));
        else if ("wheelDeltaX" in t)
          (i = (t.wheelDeltaX / 120) * this.options.mouseWheelSpeed),
            (s = (t.wheelDeltaY / 120) * this.options.mouseWheelSpeed);
        else if ("wheelDelta" in t)
          i = s = (t.wheelDelta / 120) * this.options.mouseWheelSpeed;
        else {
          if (!("detail" in t)) return;
          i = s = (-t.detail / 3) * this.options.mouseWheelSpeed;
        }
        if (
          ((i *= this.options.invertWheelDirection),
          (s *= this.options.invertWheelDirection),
          this.hasVerticalScroll || ((i = s), (s = 0)),
          this.options.snap)
        )
          return (
            (o = this.currentPage.pageX),
            (n = this.currentPage.pageY),
            i > 0 ? o-- : i < 0 && o++,
            s > 0 ? n-- : s < 0 && n++,
            void this.goToPage(o, n)
          );
        (o = this.x + e.round(this.hasHorizontalScroll ? i : 0)),
          (n = this.y + e.round(this.hasVerticalScroll ? s : 0)),
          (this.directionX = i > 0 ? -1 : i < 0 ? 1 : 0),
          (this.directionY = s > 0 ? -1 : s < 0 ? 1 : 0),
          o > 0 ? (o = 0) : o < this.maxScrollX && (o = this.maxScrollX),
          n > 0 ? (n = 0) : n < this.maxScrollY && (n = this.maxScrollY),
          this.scrollTo(o, n, 0);
      }
    },
    _initSnap: function () {
      (this.currentPage = {}),
        "string" == typeof this.options.snap &&
          (this.options.snap = this.scroller.querySelectorAll(
            this.options.snap
          )),
        this.on("refresh", function () {
          var t,
            i,
            s,
            o,
            n,
            r,
            h = 0,
            a = 0,
            l = 0,
            c = this.options.snapStepX || this.wrapperWidth,
            p = this.options.snapStepY || this.wrapperHeight;
          if (
            ((this.pages = []),
            this.wrapperWidth &&
              this.wrapperHeight &&
              this.scrollerWidth &&
              this.scrollerHeight)
          ) {
            if (this.options.snap === !0)
              for (
                s = e.round(c / 2), o = e.round(p / 2);
                l > -this.scrollerWidth;

              ) {
                for (
                  this.pages[h] = [], t = 0, n = 0;
                  n > -this.scrollerHeight;

                )
                  (this.pages[h][t] = {
                    x: e.max(l, this.maxScrollX),
                    y: e.max(n, this.maxScrollY),
                    width: c,
                    height: p,
                    cx: l - s,
                    cy: n - o,
                  }),
                    (n -= p),
                    t++;
                (l -= c), h++;
              }
            else
              for (r = this.options.snap, t = r.length, i = -1; h < t; h++)
                (0 === h || r[h].offsetLeft <= r[h - 1].offsetLeft) &&
                  ((a = 0), i++),
                  this.pages[a] || (this.pages[a] = []),
                  (l = e.max(-r[h].offsetLeft, this.maxScrollX)),
                  (n = e.max(-r[h].offsetTop, this.maxScrollY)),
                  (s = l - e.round(r[h].offsetWidth / 2)),
                  (o = n - e.round(r[h].offsetHeight / 2)),
                  (this.pages[a][i] = {
                    x: l,
                    y: n,
                    width: r[h].offsetWidth,
                    height: r[h].offsetHeight,
                    cx: s,
                    cy: o,
                  }),
                  l > this.maxScrollX && a++;
            this.goToPage(
              this.currentPage.pageX || 0,
              this.currentPage.pageY || 0,
              0
            ),
              this.options.snapThreshold % 1 === 0
                ? ((this.snapThresholdX = this.options.snapThreshold),
                  (this.snapThresholdY = this.options.snapThreshold))
                : ((this.snapThresholdX = e.round(
                    this.pages[this.currentPage.pageX][this.currentPage.pageY]
                      .width * this.options.snapThreshold
                  )),
                  (this.snapThresholdY = e.round(
                    this.pages[this.currentPage.pageX][this.currentPage.pageY]
                      .height * this.options.snapThreshold
                  )));
          }
        }),
        this.on("flick", function () {
          var t =
            this.options.snapSpeed ||
            e.max(
              e.max(
                e.min(e.abs(this.x - this.startX), 1e3),
                e.min(e.abs(this.y - this.startY), 1e3)
              ),
              300
            );
          this.goToPage(
            this.currentPage.pageX + this.directionX,
            this.currentPage.pageY + this.directionY,
            t
          );
        });
    },
    _nearestSnap: function (t, i) {
      if (!this.pages.length) return { x: 0, y: 0, pageX: 0, pageY: 0 };
      var s = 0,
        o = this.pages.length,
        n = 0;
      if (
        e.abs(t - this.absStartX) < this.snapThresholdX &&
        e.abs(i - this.absStartY) < this.snapThresholdY
      )
        return this.currentPage;
      for (
        t > 0 ? (t = 0) : t < this.maxScrollX && (t = this.maxScrollX),
          i > 0 ? (i = 0) : i < this.maxScrollY && (i = this.maxScrollY);
        s < o;
        s++
      )
        if (t >= this.pages[s][0].cx) {
          t = this.pages[s][0].x;
          break;
        }
      for (o = this.pages[s].length; n < o; n++)
        if (i >= this.pages[0][n].cy) {
          i = this.pages[0][n].y;
          break;
        }
      return (
        s == this.currentPage.pageX &&
          ((s += this.directionX),
          s < 0
            ? (s = 0)
            : s >= this.pages.length && (s = this.pages.length - 1),
          (t = this.pages[s][0].x)),
        n == this.currentPage.pageY &&
          ((n += this.directionY),
          n < 0
            ? (n = 0)
            : n >= this.pages[0].length && (n = this.pages[0].length - 1),
          (i = this.pages[0][n].y)),
        { x: t, y: i, pageX: s, pageY: n }
      );
    },
    goToPage: function (t, i, s, o) {
      (o = o || this.options.bounceEasing),
        t >= this.pages.length ? (t = this.pages.length - 1) : t < 0 && (t = 0),
        i >= this.pages[t].length
          ? (i = this.pages[t].length - 1)
          : i < 0 && (i = 0);
      var n = this.pages[t][i].x,
        r = this.pages[t][i].y;
      (s =
        void 0 === s
          ? this.options.snapSpeed ||
            e.max(
              e.max(
                e.min(e.abs(n - this.x), 1e3),
                e.min(e.abs(r - this.y), 1e3)
              ),
              300
            )
          : s),
        (this.currentPage = { x: n, y: r, pageX: t, pageY: i }),
        this.scrollTo(n, r, s, o);
    },
    next: function (t, i) {
      var e = this.currentPage.pageX,
        s = this.currentPage.pageY;
      e++,
        e >= this.pages.length && this.hasVerticalScroll && ((e = 0), s++),
        this.goToPage(e, s, t, i);
    },
    prev: function (t, i) {
      var e = this.currentPage.pageX,
        s = this.currentPage.pageY;
      e--,
        e < 0 && this.hasVerticalScroll && ((e = 0), s--),
        this.goToPage(e, s, t, i);
    },
    _initKeys: function (i) {
      var e,
        s = {
          pageUp: 33,
          pageDown: 34,
          end: 35,
          home: 36,
          left: 37,
          up: 38,
          right: 39,
          down: 40,
        };
      if ("object" == typeof this.options.keyBindings)
        for (e in this.options.keyBindings)
          "string" == typeof this.options.keyBindings[e] &&
            (this.options.keyBindings[e] = this.options.keyBindings[e]
              .toUpperCase()
              .charCodeAt(0));
      else this.options.keyBindings = {};
      for (e in s)
        this.options.keyBindings[e] = this.options.keyBindings[e] || s[e];
      h.addEvent(t, "keydown", this),
        this.on("destroy", function () {
          h.removeEvent(t, "keydown", this);
        });
    },
    _key: function (t) {
      if (this.enabled) {
        var i,
          s = this.options.snap,
          o = s ? this.currentPage.pageX : this.x,
          n = s ? this.currentPage.pageY : this.y,
          r = h.getTime(),
          a = this.keyTime || 0,
          l = 0.25;
        switch (
          (this.options.useTransition &&
            this.isInTransition &&
            ((i = this.getComputedPosition()),
            this._translate(e.round(i.x), e.round(i.y)),
            (this.isInTransition = !1)),
          (this.keyAcceleration =
            r - a < 200 ? e.min(this.keyAcceleration + l, 50) : 0),
          t.keyCode)
        ) {
          case this.options.keyBindings.pageUp:
            this.hasHorizontalScroll && !this.hasVerticalScroll
              ? (o += s ? 1 : this.wrapperWidth)
              : (n += s ? 1 : this.wrapperHeight);
            break;
          case this.options.keyBindings.pageDown:
            this.hasHorizontalScroll && !this.hasVerticalScroll
              ? (o -= s ? 1 : this.wrapperWidth)
              : (n -= s ? 1 : this.wrapperHeight);
            break;
          case this.options.keyBindings.end:
            (o = s ? this.pages.length - 1 : this.maxScrollX),
              (n = s ? this.pages[0].length - 1 : this.maxScrollY);
            break;
          case this.options.keyBindings.home:
            (o = 0), (n = 0);
            break;
          case this.options.keyBindings.left:
            o += s ? -1 : (5 + this.keyAcceleration) >> 0;
            break;
          case this.options.keyBindings.up:
            n += s ? 1 : (5 + this.keyAcceleration) >> 0;
            break;
          case this.options.keyBindings.right:
            o -= s ? -1 : (5 + this.keyAcceleration) >> 0;
            break;
          case this.options.keyBindings.down:
            n -= s ? 1 : (5 + this.keyAcceleration) >> 0;
            break;
          default:
            return;
        }
        if (s) return void this.goToPage(o, n);
        o > 0
          ? ((o = 0), (this.keyAcceleration = 0))
          : o < this.maxScrollX &&
            ((o = this.maxScrollX), (this.keyAcceleration = 0)),
          n > 0
            ? ((n = 0), (this.keyAcceleration = 0))
            : n < this.maxScrollY &&
              ((n = this.maxScrollY), (this.keyAcceleration = 0)),
          this.scrollTo(o, n, 0),
          (this.keyTime = r);
      }
    },
    _animate: function (t, i, e, s) {
      function o() {
        var d,
          u,
          f,
          m = h.getTime();
        return m >= p
          ? ((n.isAnimating = !1),
            n._translate(t, i),
            void (
              n.resetPosition(n.options.bounceTime) || n._execEvent("scrollEnd")
            ))
          : ((m = (m - c) / e),
            (f = s(m)),
            (d = (t - a) * f + a),
            (u = (i - l) * f + l),
            n._translate(d, u),
            void (n.isAnimating && r(o)));
      }
      var n = this,
        a = this.x,
        l = this.y,
        c = h.getTime(),
        p = c + e;
      (this.isAnimating = !0), o();
    },
    handleEvent: function (t) {
      switch (t.type) {
        case "touchstart":
        case "pointerdown":
        case "MSPointerDown":
        case "mousedown":
          this._start(t);
          break;
        case "touchmove":
        case "pointermove":
        case "MSPointerMove":
        case "mousemove":
          this._move(t);
          break;
        case "touchend":
        case "pointerup":
        case "MSPointerUp":
        case "mouseup":
        case "touchcancel":
        case "pointercancel":
        case "MSPointerCancel":
        case "mousecancel":
          this._end(t);
          break;
        case "orientationchange":
        case "resize":
          this._resize();
          break;
        case "transitionend":
        case "webkitTransitionEnd":
        case "oTransitionEnd":
        case "MSTransitionEnd":
          this._transitionEnd(t);
          break;
        case "wheel":
        case "DOMMouseScroll":
        case "mousewheel":
          this._wheel(t);
          break;
        case "keydown":
          this._key(t);
          break;
        case "click":
          this.enabled &&
            !t._constructed &&
            (t.preventDefault(), t.stopPropagation());
      }
    },
  }),
    (n.prototype = {
      handleEvent: function (t) {
        switch (t.type) {
          case "touchstart":
          case "pointerdown":
          case "MSPointerDown":
          case "mousedown":
            this._start(t);
            break;
          case "touchmove":
          case "pointermove":
          case "MSPointerMove":
          case "mousemove":
            this._move(t);
            break;
          case "touchend":
          case "pointerup":
          case "MSPointerUp":
          case "mouseup":
          case "touchcancel":
          case "pointercancel":
          case "MSPointerCancel":
          case "mousecancel":
            this._end(t);
        }
      },
      destroy: function () {
        this.options.fadeScrollbars &&
          (clearTimeout(this.fadeTimeout), (this.fadeTimeout = null)),
          this.options.interactive &&
            (h.removeEvent(this.indicator, "touchstart", this),
            h.removeEvent(
              this.indicator,
              h.prefixPointerEvent("pointerdown"),
              this
            ),
            h.removeEvent(this.indicator, "mousedown", this),
            h.removeEvent(t, "touchmove", this),
            h.removeEvent(t, h.prefixPointerEvent("pointermove"), this),
            h.removeEvent(t, "mousemove", this),
            h.removeEvent(t, "touchend", this),
            h.removeEvent(t, h.prefixPointerEvent("pointerup"), this),
            h.removeEvent(t, "mouseup", this)),
          this.options.defaultScrollbars &&
            this.wrapper.parentNode.removeChild(this.wrapper);
      },
      _start: function (i) {
        var e = i.touches ? i.touches[0] : i;
        i.preventDefault(),
          i.stopPropagation(),
          this.transitionTime(),
          (this.initiated = !0),
          (this.moved = !1),
          (this.lastPointX = e.pageX),
          (this.lastPointY = e.pageY),
          (this.startTime = h.getTime()),
          this.options.disableTouch || h.addEvent(t, "touchmove", this),
          this.options.disablePointer ||
            h.addEvent(t, h.prefixPointerEvent("pointermove"), this),
          this.options.disableMouse || h.addEvent(t, "mousemove", this),
          this.scroller._execEvent("beforeScrollStart");
      },
      _move: function (t) {
        var i,
          e,
          s,
          o,
          n = t.touches ? t.touches[0] : t;
        h.getTime();
        this.moved || this.scroller._execEvent("scrollStart"),
          (this.moved = !0),
          (i = n.pageX - this.lastPointX),
          (this.lastPointX = n.pageX),
          (e = n.pageY - this.lastPointY),
          (this.lastPointY = n.pageY),
          (s = this.x + i),
          (o = this.y + e),
          this._pos(s, o),
          t.preventDefault(),
          t.stopPropagation();
      },
      _end: function (i) {
        if (this.initiated) {
          if (
            ((this.initiated = !1),
            i.preventDefault(),
            i.stopPropagation(),
            h.removeEvent(t, "touchmove", this),
            h.removeEvent(t, h.prefixPointerEvent("pointermove"), this),
            h.removeEvent(t, "mousemove", this),
            this.scroller.options.snap)
          ) {
            var s = this.scroller._nearestSnap(
                this.scroller.x,
                this.scroller.y
              ),
              o =
                this.options.snapSpeed ||
                e.max(
                  e.max(
                    e.min(e.abs(this.scroller.x - s.x), 1e3),
                    e.min(e.abs(this.scroller.y - s.y), 1e3)
                  ),
                  300
                );
            (this.scroller.x == s.x && this.scroller.y == s.y) ||
              ((this.scroller.directionX = 0),
              (this.scroller.directionY = 0),
              (this.scroller.currentPage = s),
              this.scroller.scrollTo(
                s.x,
                s.y,
                o,
                this.scroller.options.bounceEasing
              ));
          }
          this.moved && this.scroller._execEvent("scrollEnd");
        }
      },
      transitionTime: function (t) {
        t = t || 0;
        var i = h.style.transitionDuration;
        if (i && ((this.indicatorStyle[i] = t + "ms"), !t && h.isBadAndroid)) {
          this.indicatorStyle[i] = "0.0001ms";
          var e = this;
          r(function () {
            "0.0001ms" === e.indicatorStyle[i] && (e.indicatorStyle[i] = "0s");
          });
        }
      },
      transitionTimingFunction: function (t) {
        this.indicatorStyle[h.style.transitionTimingFunction] = t;
      },
      refresh: function () {
        this.transitionTime(),
          this.options.listenX && !this.options.listenY
            ? (this.indicatorStyle.display = this.scroller.hasHorizontalScroll
                ? "block"
                : "none")
            : this.options.listenY && !this.options.listenX
            ? (this.indicatorStyle.display = this.scroller.hasVerticalScroll
                ? "block"
                : "none")
            : (this.indicatorStyle.display =
                this.scroller.hasHorizontalScroll ||
                this.scroller.hasVerticalScroll
                  ? "block"
                  : "none"),
          this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll
            ? (h.addClass(this.wrapper, "iScrollBothScrollbars"),
              h.removeClass(this.wrapper, "iScrollLoneScrollbar"),
              this.options.defaultScrollbars &&
                this.options.customStyle &&
                (this.options.listenX
                  ? (this.wrapper.style.right = "8px")
                  : (this.wrapper.style.bottom = "8px")))
            : (h.removeClass(this.wrapper, "iScrollBothScrollbars"),
              h.addClass(this.wrapper, "iScrollLoneScrollbar"),
              this.options.defaultScrollbars &&
                this.options.customStyle &&
                (this.options.listenX
                  ? (this.wrapper.style.right = "2px")
                  : (this.wrapper.style.bottom = "2px")));
        this.wrapper.offsetHeight;
        this.options.listenX &&
          ((this.wrapperWidth = this.wrapper.clientWidth),
          this.options.resize
            ? ((this.indicatorWidth = e.max(
                e.round(
                  (this.wrapperWidth * this.wrapperWidth) /
                    (this.scroller.scrollerWidth || this.wrapperWidth || 1)
                ),
                8
              )),
              (this.indicatorStyle.width = this.indicatorWidth + "px"))
            : (this.indicatorWidth = this.indicator.clientWidth),
          (this.maxPosX = this.wrapperWidth - this.indicatorWidth),
          "clip" == this.options.shrink
            ? ((this.minBoundaryX = -this.indicatorWidth + 8),
              (this.maxBoundaryX = this.wrapperWidth - 8))
            : ((this.minBoundaryX = 0), (this.maxBoundaryX = this.maxPosX)),
          (this.sizeRatioX =
            this.options.speedRatioX ||
            (this.scroller.maxScrollX &&
              this.maxPosX / this.scroller.maxScrollX))),
          this.options.listenY &&
            ((this.wrapperHeight = this.wrapper.clientHeight),
            this.options.resize
              ? ((this.indicatorHeight = e.max(
                  e.round(
                    (this.wrapperHeight * this.wrapperHeight) /
                      (this.scroller.scrollerHeight || this.wrapperHeight || 1)
                  ),
                  8
                )),
                (this.indicatorStyle.height = this.indicatorHeight + "px"))
              : (this.indicatorHeight = this.indicator.clientHeight),
            (this.maxPosY = this.wrapperHeight - this.indicatorHeight),
            "clip" == this.options.shrink
              ? ((this.minBoundaryY = -this.indicatorHeight + 8),
                (this.maxBoundaryY = this.wrapperHeight - 8))
              : ((this.minBoundaryY = 0), (this.maxBoundaryY = this.maxPosY)),
            (this.maxPosY = this.wrapperHeight - this.indicatorHeight),
            (this.sizeRatioY =
              this.options.speedRatioY ||
              (this.scroller.maxScrollY &&
                this.maxPosY / this.scroller.maxScrollY))),
          this.updatePosition();
      },
      updatePosition: function () {
        var t =
            (this.options.listenX &&
              e.round(this.sizeRatioX * this.scroller.x)) ||
            0,
          i =
            (this.options.listenY &&
              e.round(this.sizeRatioY * this.scroller.y)) ||
            0;
        this.options.ignoreBoundaries ||
          (t < this.minBoundaryX
            ? ("scale" == this.options.shrink &&
                ((this.width = e.max(this.indicatorWidth + t, 8)),
                (this.indicatorStyle.width = this.width + "px")),
              (t = this.minBoundaryX))
            : t > this.maxBoundaryX
            ? "scale" == this.options.shrink
              ? ((this.width = e.max(
                  this.indicatorWidth - (t - this.maxPosX),
                  8
                )),
                (this.indicatorStyle.width = this.width + "px"),
                (t = this.maxPosX + this.indicatorWidth - this.width))
              : (t = this.maxBoundaryX)
            : "scale" == this.options.shrink &&
              this.width != this.indicatorWidth &&
              ((this.width = this.indicatorWidth),
              (this.indicatorStyle.width = this.width + "px")),
          i < this.minBoundaryY
            ? ("scale" == this.options.shrink &&
                ((this.height = e.max(this.indicatorHeight + 3 * i, 8)),
                (this.indicatorStyle.height = this.height + "px")),
              (i = this.minBoundaryY))
            : i > this.maxBoundaryY
            ? "scale" == this.options.shrink
              ? ((this.height = e.max(
                  this.indicatorHeight - 3 * (i - this.maxPosY),
                  8
                )),
                (this.indicatorStyle.height = this.height + "px"),
                (i = this.maxPosY + this.indicatorHeight - this.height))
              : (i = this.maxBoundaryY)
            : "scale" == this.options.shrink &&
              this.height != this.indicatorHeight &&
              ((this.height = this.indicatorHeight),
              (this.indicatorStyle.height = this.height + "px"))),
          (this.x = t),
          (this.y = i),
          this.scroller.options.useTransform
            ? (this.indicatorStyle[h.style.transform] =
                "translate(" + t + "px," + i + "px)" + this.scroller.translateZ)
            : ((this.indicatorStyle.left = t + "px"),
              (this.indicatorStyle.top = i + "px"));
      },
      _pos: function (t, i) {
        t < 0 ? (t = 0) : t > this.maxPosX && (t = this.maxPosX),
          i < 0 ? (i = 0) : i > this.maxPosY && (i = this.maxPosY),
          (t = this.options.listenX
            ? e.round(t / this.sizeRatioX)
            : this.scroller.x),
          (i = this.options.listenY
            ? e.round(i / this.sizeRatioY)
            : this.scroller.y),
          this.scroller.scrollTo(t, i);
      },
      fade: function (t, i) {
        if (!i || this.visible) {
          clearTimeout(this.fadeTimeout), (this.fadeTimeout = null);
          var e = t ? 250 : 500,
            s = t ? 0 : 300;
          (t = t ? "1" : "0"),
            (this.wrapperStyle[h.style.transitionDuration] = e + "ms"),
            (this.fadeTimeout = setTimeout(
              function (t) {
                (this.wrapperStyle.opacity = t), (this.visible = +t);
              }.bind(this, t),
              s
            ));
        }
      },
    }),
    (s.utils = h),
    "undefined" != typeof module && module.exports
      ? (module.exports = s)
      : "function" == typeof define && define.amd
      ? define(function () {
          return s;
        })
      : (t.IScroll = s);
})(window, document, Math) /*!

/* fullPage ScrollOverflow
 * https://github.com/alvarotrigo/fullPage.js
 * @license MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */,
  (function (t, i) {
    var e = "active",
      s = "." + e,
      o = "fp-section",
      n = "." + o,
      r = n + s,
      h = "fp-slide",
      a = "." + h,
      l = a + s,
      c = "fp-slides",
      p = "." + c,
      d = "fp-scrollable",
      u = "." + d;
    "undefined" != typeof IScroll &&
      ((IScroll.prototype.wheelOn = function () {
        this.wrapper.addEventListener("wheel", this),
          this.wrapper.addEventListener("mousewheel", this),
          this.wrapper.addEventListener("DOMMouseScroll", this);
      }),
      (IScroll.prototype.wheelOff = function () {
        this.wrapper.removeEventListener("wheel", this),
          this.wrapper.removeEventListener("mousewheel", this),
          this.wrapper.removeEventListener("DOMMouseScroll", this);
      })),
      (t.iscrollHandler = {
        refreshId: null,
        iScrollInstances: [],
        toggleWheel: function (t) {
          var e = i(r).find(u);
          e.each(function () {
            var e = i(this).data("iscrollInstance");
            "undefined" != typeof e && e && (t ? e.wheelOn() : e.wheelOff());
          });
        },
        onLeave: function () {
          iscrollHandler.toggleWheel(!1);
        },
        beforeLeave: function () {
          iscrollHandler.onLeave();
        },
        afterLoad: function () {
          iscrollHandler.toggleWheel(!0);
        },
        create: function (t, e, s) {
          var o = t.find(u);
          o.height(e),
            o.each(function () {
              var t = i(this),
                e = t.data("iscrollInstance");
              e &&
                i.each(iscrollHandler.iScrollInstances, function () {
                  i(this).destroy();
                }),
                (e = new IScroll(t.get(0), s)),
                e.on("scrollEnd", function () {
                  (this.fp_isAtTop = this.y > -30),
                    (this.fp_isAtEnd = this.y - this.maxScrollY < 30);
                }),
                iscrollHandler.iScrollInstances.push(e),
                e.wheelOff(),
                t.data("iscrollInstance", e);
            });
        },
        isScrolled: function (t, i) {
          var e = i.data("iscrollInstance");
          return (
            !e ||
            ("top" === t
              ? e.y >= 0 && !i.scrollTop()
              : "bottom" === t
              ? 0 - e.y + i.scrollTop() + 1 + i.innerHeight() >=
                i[0].scrollHeight
              : void 0)
          );
        },
        scrollable: function (t) {
          return t.find(p).length ? t.find(l).find(u) : t.find(u);
        },
        scrollHeight: function (t) {
          return t.find(u).children().first().get(0).scrollHeight;
        },
        remove: function (t) {
          var i = t.find(u);
          if (i.length) {
            var e = i.data("iscrollInstance");
            e && e.destroy(), i.data("iscrollInstance", null);
          }
          t.find(u).children().first().children().first().unwrap().unwrap();
        },
        update: function (t, e) {
          clearTimeout(iscrollHandler.refreshId),
            (iscrollHandler.refreshId = setTimeout(function () {
              i.each(iscrollHandler.iScrollInstances, function () {
                i(this).get(0).refresh();
              });
            }, 150)),
            t
              .find(u)
              .css("height", e + "px")
              .parent()
              .css("height", e + "px");
        },
        wrapContent: function () {
          return '<div class="' + d + '"><div class="fp-scroller"></div></div>';
        },
      });
  })(window, jQuery),
  (function (t, i, e) {
    $.fn.fp_scrolloverflow = (function () {
      function e() {
        function e() {
          $("body").hasClass(g) ? n() : o(s),
            $.fn.fullpage.shared.afterRenderActions();
        }
        function s(i) {
          if (!i.hasClass("fp-noscroll")) {
            i.css("overflow", "hidden");
            var e,
              s = r.options.scrollOverflowHandler,
              o = s.wrapContent(),
              n = i.closest(a),
              h = s.scrollable(i);
            h.length
              ? (e = s.scrollHeight(i))
              : ((e = i.get(0).scrollHeight),
                r.options.verticalCentered &&
                  (e = i.find(v).get(0).scrollHeight));
            var l =
              $(t).height() -
              parseInt(n.css("padding-bottom")) -
              parseInt(n.css("padding-top"));
            e > l
              ? h.length
                ? s.update(i, l)
                : (r.options.verticalCentered
                    ? i.find(v).wrapInner(o)
                    : i.wrapInner(o),
                  s.create(i, l, r.iscrollOptions))
              : s.remove(i),
              i.css("overflow", "");
          }
        }
        function o(t) {
          $(a).each(function () {
            var i = $(this).find(p);
            i.length
              ? i.each(function () {
                  t($(this));
                })
              : t($(this));
          });
        }
        function n() {
          var t = r.options.scrollOverflowHandler;
          o(function (i) {
            i.closest(a).hasClass(y) && t.remove(i);
          });
        }
        var r = this;
        (r.options = null),
          (r.init = function (s, o) {
            return (
              (r.options = s),
              (r.iscrollOptions = o),
              "complete" === i.readyState && e(),
              $(t).on("load", e),
              r
            );
          }),
          (r.createScrollBarForAll = e);
      }
      var s = "fp-scrollable",
        o = "." + s,
        n = "active",
        r = "." + n,
        h = "fp-section",
        a = "." + h,
        l = a + r,
        c = "fp-slide",
        p = "." + c,
        d = p + r,
        u = "fp-slides",
        f = "." + u,
        m = "fp-tableCell",
        v = "." + m,
        g = "fp-responsive",
        y = "fp-auto-height-responsive";
      (IScroll.prototype.wheelOn = function () {
        this.wrapper.addEventListener("wheel", this),
          this.wrapper.addEventListener("mousewheel", this),
          this.wrapper.addEventListener("DOMMouseScroll", this);
      }),
        (IScroll.prototype.wheelOff = function () {
          this.wrapper.removeEventListener("wheel", this),
            this.wrapper.removeEventListener("mousewheel", this),
            this.wrapper.removeEventListener("DOMMouseScroll", this);
        });
      var S = {
        refreshId: null,
        iScrollInstances: [],
        iscrollOptions: {
          scrollbars: !0,
          mouseWheel: !0,
          hideScrollbars: !1,
          fadeScrollbars: !1,
          disableMouse: !0,
          interactiveScrollbars: !0,
        },
        init: function (i) {
          var s =
            "ontouchstart" in t ||
            navigator.msMaxTouchPoints > 0 ||
            navigator.maxTouchPoints;
          return (
            (S.iscrollOptions.click = s),
            (S.iscrollOptions = $.extend(
              S.iscrollOptions,
              i.scrollOverflowOptions
            )),
            new e().init(i, S.iscrollOptions)
          );
        },
        toggleWheel: function (t) {
          var i = $(l).find(o);
          i.each(function () {
            var i = $(this).data("iscrollInstance");
            "undefined" != typeof i && i && (t ? i.wheelOn() : i.wheelOff());
          });
        },
        onLeave: function () {
          S.toggleWheel(!1);
        },
        beforeLeave: function () {
          S.onLeave();
        },
        afterLoad: function () {
          S.toggleWheel(!0);
        },
        create: function (t, i, e) {
          var s = t.find(o);
          s.height(i),
            s.each(function () {
              var t = $(this),
                i = t.data("iscrollInstance");
              i &&
                $.each(S.iScrollInstances, function () {
                  $(this).destroy();
                }),
                (i = new IScroll(t.get(0), e)),
                S.iScrollInstances.push(i),
                i.wheelOff(),
                t.data("iscrollInstance", i);
            });
        },
        isScrolled: function (t, i) {
          var e = i.data("iscrollInstance");
          return (
            !e ||
            ("top" === t
              ? e.y >= 0 && !i.scrollTop()
              : "bottom" === t
              ? 0 - e.y + i.scrollTop() + 1 + i.innerHeight() >=
                i[0].scrollHeight
              : void 0)
          );
        },
        scrollable: function (t) {
          return t.find(f).length ? t.find(d).find(o) : t.find(o);
        },
        scrollHeight: function (t) {
          return t.find(o).children().first().get(0).scrollHeight;
        },
        remove: function (t) {
          var i = t.find(o);
          if (i.length) {
            var e = i.data("iscrollInstance");
            e.destroy(), i.data("iscrollInstance", null);
          }
          t.find(o).children().first().children().first().unwrap().unwrap();
        },
        update: function (t, i) {
          clearTimeout(S.refreshId),
            (S.refreshId = setTimeout(function () {
              $.each(S.iScrollInstances, function () {
                $(this).get(0).refresh();
              });
            }, 150)),
            t
              .find(o)
              .css("height", i + "px")
              .parent()
              .css("height", i + "px");
        },
        wrapContent: function () {
          return '<div class="' + s + '"><div class="fp-scroller"></div></div>';
        },
      };
      return { iscrollHandler: S };
    })();
  })(window, jQuery);

/*!
 * fullPage 2.9.5
 * https://github.com/alvarotrigo/fullPage.js
 * @license MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
!(function (e, n) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], function (o) {
        return n(o, e, e.document, e.Math);
      })
    : "object" == typeof exports && exports
    ? (module.exports = n(require("jquery"), e, e.document, e.Math))
    : n(jQuery, e, e.document, e.Math);
})("undefined" != typeof window ? window : this, function (e, n, o, t, i) {
  "use strict";
  var a = "fullpage-wrapper",
    l = "." + a,
    r = "fp-responsive",
    s = "fp-notransition",
    c = "fp-destroyed",
    d = "fp-enabled",
    f = "fp-viewing",
    u = "active",
    h = "." + u,
    p = "fp-completely",
    v = "." + p,
    g = ".section",
    m = "fp-section",
    w = "." + m,
    S = w + h,
    y = w + ":first",
    x = w + ":last",
    b = "fp-tableCell",
    C = "." + b,
    T = "fp-auto-height",
    k = "fp-normal-scroll",
    L = "fp-nav",
    A = "#" + L,
    O = "fp-tooltip",
    I = "." + O,
    E = "fp-show-active",
    M = ".slide",
    B = "fp-slide",
    R = "." + B,
    z = R + h,
    H = "fp-slides",
    P = "." + H,
    D = "fp-slidesContainer",
    q = "." + D,
    F = "fp-table",
    V = "fp-slidesNav",
    j = "." + V,
    Y = j + " a",
    N = "fp-controlArrow",
    U = "." + N,
    X = "fp-prev",
    W = "." + X,
    K = N + " " + X,
    _ = U + W,
    Q = "fp-next",
    G = "." + Q,
    J = N + " " + Q,
    Z = U + G,
    $ = e(n),
    ee = e(o);
  e.fn.fullpage = function (N) {
    function W(n, o) {
      n || Jn(0), oo("autoScrolling", n, o);
      var t = e(S);
      N.autoScrolling && !N.scrollBar
        ? (ao.css({ overflow: "hidden", height: "100%" }),
          Q(Bo.recordHistory, "internal"),
          go.css({ "-ms-touch-action": "none", "touch-action": "none" }),
          t.length && Jn(t.position().top))
        : (ao.css({ overflow: "visible", height: "initial" }),
          Q(!1, "internal"),
          go.css({ "-ms-touch-action": "", "touch-action": "" }),
          t.length && ao.scrollTop(t.position().top));
    }
    function Q(e, n) {
      oo("recordHistory", e, n);
    }
    function G(e, n) {
      oo("scrollingSpeed", e, n);
    }
    function ne(e, n) {
      oo("fitToSection", e, n);
    }
    function oe(e) {
      N.lockAnchors = e;
    }
    function te(e) {
      e ? (Nn(), Un()) : (Yn(), Xn());
    }
    function ie(n, o) {
      "undefined" != typeof o
        ? ((o = o.replace(/ /g, "").split(",")),
          e.each(o, function (e, o) {
            $n(n, o, "m");
          }))
        : ($n(n, "all", "m"), n ? (te(!0), Wn()) : (te(!1), Kn()));
    }
    function ae(n, o) {
      "undefined" != typeof o
        ? ((o = o.replace(/ /g, "").split(",")),
          e.each(o, function (e, o) {
            $n(n, o, "k");
          }))
        : ($n(n, "all", "k"), (N.keyboardScrolling = n));
    }
    function le() {
      var n = e(S).prev(w);
      n.length || (!N.loopTop && !N.continuousVertical) || (n = e(w).last()),
        n.length && Ne(n, null, !0);
    }
    function re() {
      var n = e(S).next(w);
      n.length ||
        (!N.loopBottom && !N.continuousVertical) ||
        (n = e(w).first()),
        n.length && Ne(n, null, !1);
    }
    function se(e, n) {
      G(0, "internal"), ce(e, n), G(Bo.scrollingSpeed, "internal");
    }
    function ce(e, n) {
      var o = Bn(e);
      "undefined" != typeof n ? zn(e, n) : o.length > 0 && Ne(o);
    }
    function de(e) {
      Ve("right", e);
    }
    function fe(e) {
      Ve("left", e);
    }
    function ue(n) {
      if (!go.hasClass(c)) {
        (wo = !0),
          (mo = $.height()),
          e(w).each(function () {
            var n = e(this).find(P),
              o = e(this).find(R);
            N.verticalCentered &&
              e(this)
                .find(C)
                .css("height", En(e(this)) + "px"),
              e(this).css("height", mo + "px"),
              o.length > 1 && gn(n, n.find(z));
          }),
          N.scrollOverflow && Co.createScrollBarForAll();
        var o = e(S),
          t = o.index(w);
        t && se(t + 1),
          (wo = !1),
          e.isFunction(N.afterResize) && n && N.afterResize.call(go),
          e.isFunction(N.afterReBuild) && !n && N.afterReBuild.call(go);
      }
    }
    function he(n) {
      var o = lo.hasClass(r);
      n
        ? o ||
          (W(!1, "internal"),
          ne(!1, "internal"),
          e(A).hide(),
          lo.addClass(r),
          e.isFunction(N.afterResponsive) && N.afterResponsive.call(go, n))
        : o &&
          (W(Bo.autoScrolling, "internal"),
          ne(Bo.autoScrolling, "internal"),
          e(A).show(),
          lo.removeClass(r),
          e.isFunction(N.afterResponsive) && N.afterResponsive.call(go, n));
    }
    function pe() {
      N.css3 && (N.css3 = jn()),
        (N.scrollBar = N.scrollBar || N.hybrid),
        ge(),
        me(),
        ie(!0),
        W(N.autoScrolling, "internal"),
        xn(),
        Vn(),
        "complete" === o.readyState && nn(),
        $.on("load", nn);
    }
    function ve() {
      $.on("scroll", Ie).on("hashchange", on).blur(fn).resize(yn),
        ee
          .keydown(an)
          .keyup(rn)
          .on("click touchstart", A + " a", un)
          .on("click touchstart", Y, hn)
          .on("click", I, ln),
        e(w).on("click touchstart", U, dn),
        N.normalScrollElements &&
          (ee.on("mouseenter touchstart", N.normalScrollElements, function () {
            ie(!1);
          }),
          ee.on("mouseleave touchend", N.normalScrollElements, function () {
            ie(!0);
          }));
    }
    function ge() {
      var n = go.find(N.sectionSelector);
      N.anchors.length ||
        (N.anchors = n
          .filter("[data-anchor]")
          .map(function () {
            return e(this).data("anchor").toString();
          })
          .get()),
        N.navigationTooltips.length ||
          (N.navigationTooltips = n
            .filter("[data-tooltip]")
            .map(function () {
              return e(this).data("tooltip").toString();
            })
            .get());
    }
    function me() {
      go.css({ height: "100%", position: "relative" }),
        go.addClass(a),
        e("html").addClass(d),
        (mo = $.height()),
        go.removeClass(c),
        xe(),
        e(w).each(function (n) {
          var o = e(this),
            t = o.find(R),
            i = t.length;
          Se(o, n), ye(o, n), i > 0 ? we(o, t, i) : N.verticalCentered && In(o);
        }),
        N.fixedElements && N.css3 && e(N.fixedElements).appendTo(lo),
        N.navigation && Ce(),
        Te(),
        N.scrollOverflow ? (Co = N.scrollOverflowHandler.init(N)) : Ae();
    }
    function we(n, o, t) {
      var i = 100 * t,
        a = 100 / t;
      o.wrapAll('<div class="' + D + '" />'),
        o.parent().wrap('<div class="' + H + '" />'),
        n.find(q).css("width", i + "%"),
        t > 1 && (N.controlArrows && be(n), N.slidesNavigation && Pn(n, t)),
        o.each(function (n) {
          e(this).css("width", a + "%"), N.verticalCentered && In(e(this));
        });
      var l = n.find(z);
      l.length &&
      (0 !== e(S).index(w) || (0 === e(S).index(w) && 0 !== l.index()))
        ? Gn(l, "internal")
        : o.eq(0).addClass(u);
    }
    function Se(n, o) {
      o || 0 !== e(S).length || n.addClass(u),
        (uo = e(S)),
        n.css("height", mo + "px"),
        N.paddingTop && n.css("padding-top", N.paddingTop),
        N.paddingBottom && n.css("padding-bottom", N.paddingBottom),
        "undefined" != typeof N.sectionsColor[o] &&
          n.css("background-color", N.sectionsColor[o]),
        "undefined" != typeof N.anchors[o] &&
          n.attr("data-anchor", N.anchors[o]);
    }
    function ye(n, o) {
      "undefined" != typeof N.anchors[o] &&
        n.hasClass(u) &&
        Ln(N.anchors[o], o),
        N.menu &&
          N.css3 &&
          e(N.menu).closest(l).length &&
          e(N.menu).appendTo(lo);
    }
    function xe() {
      go.find(N.sectionSelector).addClass(m),
        go.find(N.slideSelector).addClass(B);
    }
    function be(e) {
      e
        .find(P)
        .after('<div class="' + K + '"></div><div class="' + J + '"></div>'),
        "#fff" != N.controlArrowColor &&
          (e
            .find(Z)
            .css(
              "border-color",
              "transparent transparent transparent " + N.controlArrowColor
            ),
          e
            .find(_)
            .css(
              "border-color",
              "transparent " + N.controlArrowColor + " transparent transparent"
            )),
        N.loopHorizontal || e.find(_).hide();
    }
    function Ce() {
      lo.append('<div id="' + L + '"><ul></ul></div>');
      var n = e(A);
      n.addClass(function () {
        return N.showActiveTooltip
          ? E + " " + N.navigationPosition
          : N.navigationPosition;
      });
      for (var o = 0; o < e(w).length; o++) {
        var t = "";
        N.anchors.length && (t = N.anchors[o]);
        var i = '<li><a href="#' + t + '"><span></span></a>',
          a = N.navigationTooltips[o];
        "undefined" != typeof a &&
          "" !== a &&
          (i +=
            '<div class="' +
            O +
            " " +
            N.navigationPosition +
            '">' +
            a +
            "</div>"),
          (i += "</li>"),
          n.find("ul").append(i);
      }
      e(A).css("margin-top", "-" + e(A).height() / 2 + "px"),
        e(A).find("li").eq(e(S).index(w)).find("a").addClass(u);
    }
    function Te() {
      go.find('iframe[src*="youtube.com/embed/"]').each(function () {
        ke(e(this), "enablejsapi=1");
      });
    }
    function ke(e, n) {
      var o = e.attr("src");
      e.attr("src", o + Le(o) + n);
    }
    function Le(e) {
      return /\?/.test(e) ? "&" : "?";
    }
    function Ae() {
      var n = e(S);
      n.addClass(p),
        Ge(n),
        Je(n),
        N.scrollOverflow && N.scrollOverflowHandler.afterLoad(),
        Oe() &&
          e.isFunction(N.afterLoad) &&
          N.afterLoad.call(n, n.data("anchor"), n.index(w) + 1),
        e.isFunction(N.afterRender) && N.afterRender.call(go);
    }
    function Oe() {
      var e = Bn(tn().section);
      return !e.length || (e.length && e.index() === uo.index());
    }
    function Ie() {
      var n;
      if (!N.autoScrolling || N.scrollBar) {
        var t = $.scrollTop(),
          i = Be(t),
          a = 0,
          l = t + $.height() / 2,
          r = lo.height() - $.height() === t,
          s = o.querySelectorAll(w);
        if (r) a = s.length - 1;
        else if (t)
          for (var c = 0; c < s.length; ++c) {
            var d = s[c];
            d.offsetTop <= l && (a = c);
          }
        else a = 0;
        if (
          (Me(i) &&
            (e(S).hasClass(p) || e(S).addClass(p).siblings().removeClass(p)),
          (n = e(s).eq(a)),
          !n.hasClass(u))
        ) {
          Ro = !0;
          var f,
            h,
            v = e(S),
            g = v.index(w) + 1,
            m = An(n),
            y = n.data("anchor"),
            x = n.index(w) + 1,
            b = n.find(z);
          b.length && ((h = b.data("anchor")), (f = b.index())),
            yo &&
              (n.addClass(u).siblings().removeClass(u),
              e.isFunction(N.onLeave) && N.onLeave.call(v, g, x, m),
              e.isFunction(N.afterLoad) && N.afterLoad.call(n, y, x),
              $e(v),
              Ge(n),
              Je(n),
              Ln(y, x - 1),
              N.anchors.length && (so = y),
              Dn(f, h, y, x)),
            clearTimeout(Ao),
            (Ao = setTimeout(function () {
              Ro = !1;
            }, 100));
        }
        N.fitToSection &&
          (clearTimeout(Oo),
          (Oo = setTimeout(function () {
            N.fitToSection && e(S).outerHeight() <= mo && Ee();
          }, N.fitToSectionDelay)));
      }
    }
    function Ee() {
      yo && ((wo = !0), Ne(e(S)), (wo = !1));
    }
    function Me(n) {
      var o = e(S).position().top,
        t = o + $.height();
      return "up" == n ? t >= $.scrollTop() + $.height() : o <= $.scrollTop();
    }
    function Be(e) {
      var n = e > zo ? "down" : "up";
      return (zo = e), (Vo = e), n;
    }
    function Re(n) {
      if (bo.m[n]) {
        var o = "down" === n ? re : le;
        if (N.scrollOverflow) {
          var t = N.scrollOverflowHandler.scrollable(e(S)),
            i = "down" === n ? "bottom" : "top";
          if (t.length > 0) {
            if (!N.scrollOverflowHandler.isScrolled(i, t)) return !0;
            o();
          } else o();
        } else o();
      }
    }
    function ze(e) {
      var n = e.originalEvent;
      N.autoScrolling && Pe(n) && e.preventDefault();
    }
    function He(n) {
      var o = n.originalEvent,
        i = e(o.target).closest(w);
      if (Pe(o)) {
        N.autoScrolling && n.preventDefault();
        var a = Qn(o);
        (Do = a.y),
          (qo = a.x),
          i.find(P).length && t.abs(Po - qo) > t.abs(Ho - Do)
            ? !ho &&
              t.abs(Po - qo) > ($.outerWidth() / 100) * N.touchSensitivity &&
              (Po > qo ? bo.m.right && de(i) : bo.m.left && fe(i))
            : N.autoScrolling &&
              yo &&
              t.abs(Ho - Do) > ($.height() / 100) * N.touchSensitivity &&
              (Ho > Do ? Re("down") : Do > Ho && Re("up"));
      }
    }
    function Pe(e) {
      return "undefined" == typeof e.pointerType || "mouse" != e.pointerType;
    }
    function De(e) {
      var n = e.originalEvent;
      if ((N.fitToSection && ao.stop(), Pe(n))) {
        var o = Qn(n);
        (Ho = o.y), (Po = o.x);
      }
    }
    function qe(e, n) {
      for (
        var o = 0, i = e.slice(t.max(e.length - n, 1)), a = 0;
        a < i.length;
        a++
      )
        o += i[a];
      return t.ceil(o / n);
    }
    function Fe(o) {
      var i = new Date().getTime(),
        a = e(v).hasClass(k);
      if (N.autoScrolling && !fo && !a) {
        o = o || n.event;
        var l = o.wheelDelta || -o.deltaY || -o.detail,
          r = t.max(-1, t.min(1, l)),
          s =
            "undefined" != typeof o.wheelDeltaX ||
            "undefined" != typeof o.deltaX,
          c =
            t.abs(o.wheelDeltaX) < t.abs(o.wheelDelta) ||
            t.abs(o.deltaX) < t.abs(o.deltaY) ||
            !s;
        xo.length > 149 && xo.shift(),
          xo.push(t.abs(l)),
          N.scrollBar &&
            (o.preventDefault ? o.preventDefault() : (o.returnValue = !1));
        var d = i - Fo;
        if (((Fo = i), d > 200 && (xo = []), yo)) {
          var f = qe(xo, 10),
            u = qe(xo, 70),
            h = f >= u;
          h && c && Re(r < 0 ? "down" : "up");
        }
        return !1;
      }
      N.fitToSection && ao.stop();
    }
    function Ve(n, o) {
      var t = "undefined" == typeof o ? e(S) : o,
        i = t.find(P),
        a = i.find(R).length;
      if (!(!i.length || ho || a < 2)) {
        var l = i.find(z),
          r = null;
        if (((r = "left" === n ? l.prev(R) : l.next(R)), !r.length)) {
          if (!N.loopHorizontal) return;
          r = "left" === n ? l.siblings(":last") : l.siblings(":first");
        }
        (ho = !0), gn(i, r, n);
      }
    }
    function je() {
      e(z).each(function () {
        Gn(e(this), "internal");
      });
    }
    function Ye(e) {
      var n = e.position(),
        o = n.top,
        t = n.top > Vo,
        i = o - mo + e.outerHeight(),
        a = N.bigSectionsDestination;
      return (
        e.outerHeight() > mo
          ? ((t || a) && "bottom" !== a) || (o = i)
          : (t || (wo && e.is(":last-child"))) && (o = i),
        (Vo = o),
        o
      );
    }
    function Ne(n, o, t) {
      if ("undefined" != typeof n) {
        var i,
          a,
          l = Ye(n),
          r = {
            element: n,
            callback: o,
            isMovementUp: t,
            dtop: l,
            yMovement: An(n),
            anchorLink: n.data("anchor"),
            sectionIndex: n.index(w),
            activeSlide: n.find(z),
            activeSection: e(S),
            leavingSection: e(S).index(w) + 1,
            localIsResizing: wo,
          };
        (r.activeSection.is(n) && !wo) ||
          (N.scrollBar && $.scrollTop() === r.dtop && !n.hasClass(T)) ||
          (r.activeSlide.length &&
            ((i = r.activeSlide.data("anchor")), (a = r.activeSlide.index())),
          (e.isFunction(N.onLeave) &&
            !r.localIsResizing &&
            N.onLeave.call(
              r.activeSection,
              r.leavingSection,
              r.sectionIndex + 1,
              r.yMovement
            ) === !1) ||
            (N.autoScrolling &&
              N.continuousVertical &&
              "undefined" != typeof r.isMovementUp &&
              ((!r.isMovementUp && "up" == r.yMovement) ||
                (r.isMovementUp && "down" == r.yMovement)) &&
              (r = We(r)),
            r.localIsResizing || $e(r.activeSection),
            N.scrollOverflow && N.scrollOverflowHandler.beforeLeave(),
            n.addClass(u).siblings().removeClass(u),
            Ge(n),
            N.scrollOverflow && N.scrollOverflowHandler.onLeave(),
            (yo = !1),
            Dn(a, i, r.anchorLink, r.sectionIndex),
            Ue(r),
            (so = r.anchorLink),
            Ln(r.anchorLink, r.sectionIndex)));
      }
    }
    function Ue(n) {
      if (N.css3 && N.autoScrolling && !N.scrollBar) {
        var o = "translate3d(0px, -" + t.round(n.dtop) + "px, 0px)";
        Mn(o, !0),
          N.scrollingSpeed
            ? (clearTimeout(ko),
              (ko = setTimeout(function () {
                _e(n);
              }, N.scrollingSpeed)))
            : _e(n);
      } else {
        var i = Xe(n);
        e(i.element)
          .animate(i.options, N.scrollingSpeed, N.easing)
          .promise()
          .done(function () {
            N.scrollBar
              ? setTimeout(function () {
                  _e(n);
                }, 30)
              : _e(n);
          });
      }
    }
    function Xe(e) {
      var n = {};
      return (
        N.autoScrolling && !N.scrollBar
          ? ((n.options = { top: -e.dtop }), (n.element = l))
          : ((n.options = { scrollTop: e.dtop }), (n.element = "html, body")),
        n
      );
    }
    function We(n) {
      return (
        n.isMovementUp
          ? e(S).before(n.activeSection.nextAll(w))
          : e(S).after(n.activeSection.prevAll(w).get().reverse()),
        Jn(e(S).position().top),
        je(),
        (n.wrapAroundElements = n.activeSection),
        (n.dtop = n.element.position().top),
        (n.yMovement = An(n.element)),
        (n.leavingSection = n.activeSection.index(w) + 1),
        (n.sectionIndex = n.element.index(w)),
        n
      );
    }
    function Ke(n) {
      n.wrapAroundElements &&
        n.wrapAroundElements.length &&
        (n.isMovementUp
          ? e(y).before(n.wrapAroundElements)
          : e(x).after(n.wrapAroundElements),
        Jn(e(S).position().top),
        je());
    }
    function _e(n) {
      Ke(n),
        e.isFunction(N.afterLoad) &&
          !n.localIsResizing &&
          N.afterLoad.call(n.element, n.anchorLink, n.sectionIndex + 1),
        N.scrollOverflow && N.scrollOverflowHandler.afterLoad(),
        n.localIsResizing || Je(n.element),
        n.element.addClass(p).siblings().removeClass(p),
        (yo = !0),
        e.isFunction(n.callback) && n.callback.call(this);
    }
    function Qe(e, n) {
      e.attr(n, e.data(n)).removeAttr("data-" + n);
    }
    function Ge(n) {
      if (N.lazyLoading) {
        var o,
          t = en(n);
        t.find(
          "img[data-src], img[data-srcset], source[data-src], video[data-src], audio[data-src], iframe[data-src]"
        ).each(function () {
          if (
            ((o = e(this)),
            e.each(["src", "srcset"], function (e, n) {
              var t = o.attr("data-" + n);
              "undefined" != typeof t && t && Qe(o, n);
            }),
            o.is("source"))
          ) {
            var n = o.closest("video").length ? "video" : "audio";
            o.closest(n).get(0).load();
          }
        });
      }
    }
    function Je(n) {
      var o = en(n);
      o.find("video, audio").each(function () {
        var n = e(this).get(0);
        n.hasAttribute("data-autoplay") &&
          "function" == typeof n.play &&
          n.play();
      }),
        o.find('iframe[src*="youtube.com/embed/"]').each(function () {
          var n = e(this).get(0);
          n.hasAttribute("data-autoplay") && Ze(n),
            (n.onload = function () {
              n.hasAttribute("data-autoplay") && Ze(n);
            });
        });
    }
    function Ze(e) {
      e.contentWindow.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        "*"
      );
    }
    function $e(n) {
      var o = en(n);
      o.find("video, audio").each(function () {
        var n = e(this).get(0);
        n.hasAttribute("data-keepplaying") ||
          "function" != typeof n.pause ||
          n.pause();
      }),
        o.find('iframe[src*="youtube.com/embed/"]').each(function () {
          var n = e(this).get(0);
          /youtube\.com\/embed\//.test(e(this).attr("src")) &&
            !n.hasAttribute("data-keepplaying") &&
            e(this)
              .get(0)
              .contentWindow.postMessage(
                '{"event":"command","func":"pauseVideo","args":""}',
                "*"
              );
        });
    }
    function en(n) {
      var o = n.find(z);
      return o.length && (n = e(o)), n;
    }
    function nn() {
      var e = tn(),
        n = e.section,
        o = e.slide;
      n && (N.animateAnchor ? zn(n, o) : se(n, o));
    }
    function on() {
      if (!Ro && !N.lockAnchors) {
        var e = tn(),
          n = e.section,
          o = e.slide,
          t = "undefined" == typeof so,
          i = "undefined" == typeof so && "undefined" == typeof o && !ho;
        n.length &&
          ((n && n !== so && !t) || i || (!ho && co != o)) &&
          zn(n, o);
      }
    }
    function tn() {
      var e = n.location.hash,
        o = e.replace("#", "").split("/"),
        t = e.indexOf("#/") > -1;
      return {
        section: t ? "/" + o[1] : decodeURIComponent(o[0]),
        slide: t ? decodeURIComponent(o[2]) : decodeURIComponent(o[1]),
      };
    }
    function an(n) {
      clearTimeout(Io);
      var o = e(":focus");
      if (
        !o.is("textarea") &&
        !o.is("input") &&
        !o.is("select") &&
        "true" !== o.attr("contentEditable") &&
        "" !== o.attr("contentEditable") &&
        N.keyboardScrolling &&
        N.autoScrolling
      ) {
        var t = n.which,
          i = [40, 38, 32, 33, 34];
        e.inArray(t, i) > -1 && n.preventDefault(),
          (fo = n.ctrlKey),
          (Io = setTimeout(function () {
            pn(n);
          }, 150));
      }
    }
    function ln() {
      e(this).prev().trigger("click");
    }
    function rn(e) {
      So && (fo = e.ctrlKey);
    }
    function sn(e) {
      2 == e.which && ((jo = e.pageY), go.on("mousemove", vn));
    }
    function cn(e) {
      2 == e.which && go.off("mousemove");
    }
    function dn() {
      var n = e(this).closest(w);
      e(this).hasClass(X) ? bo.m.left && fe(n) : bo.m.right && de(n);
    }
    function fn() {
      (So = !1), (fo = !1);
    }
    function un(n) {
      n.preventDefault();
      var o = e(this).parent().index();
      Ne(e(w).eq(o));
    }
    function hn(n) {
      n.preventDefault();
      var o = e(this).closest(w).find(P),
        t = o.find(R).eq(e(this).closest("li").index());
      gn(o, t);
    }
    function pn(n) {
      var o = n.shiftKey;
      if (yo || !([37, 39].indexOf(n.which) < 0))
        switch (n.which) {
          case 38:
          case 33:
            bo.k.up && le();
            break;
          case 32:
            if (o && bo.k.up) {
              le();
              break;
            }
          case 40:
          case 34:
            bo.k.down && re();
            break;
          case 36:
            bo.k.up && ce(1);
            break;
          case 35:
            bo.k.down && ce(e(w).length);
            break;
          case 37:
            bo.k.left && fe();
            break;
          case 39:
            bo.k.right && de();
            break;
          default:
            return;
        }
    }
    function vn(e) {
      yo &&
        (e.pageY < jo && bo.m.up ? le() : e.pageY > jo && bo.m.down && re()),
        (jo = e.pageY);
    }
    function gn(n, o, t) {
      var i = n.closest(w),
        a = {
          slides: n,
          destiny: o,
          direction: t,
          destinyPos: o.position(),
          slideIndex: o.index(),
          section: i,
          sectionIndex: i.index(w),
          anchorLink: i.data("anchor"),
          slidesNav: i.find(j),
          slideAnchor: Fn(o),
          prevSlide: i.find(z),
          prevSlideIndex: i.find(z).index(),
          localIsResizing: wo,
        };
      return (
        (a.xMovement = On(a.prevSlideIndex, a.slideIndex)),
        a.localIsResizing || (yo = !1),
        N.onSlideLeave &&
        !a.localIsResizing &&
        "none" !== a.xMovement &&
        e.isFunction(N.onSlideLeave) &&
        N.onSlideLeave.call(
          a.prevSlide,
          a.anchorLink,
          a.sectionIndex + 1,
          a.prevSlideIndex,
          a.direction,
          a.slideIndex
        ) === !1
          ? void (ho = !1)
          : (o.addClass(u).siblings().removeClass(u),
            a.localIsResizing || ($e(a.prevSlide), Ge(o)),
            !N.loopHorizontal &&
              N.controlArrows &&
              (i.find(_).toggle(0 !== a.slideIndex),
              i.find(Z).toggle(!o.is(":last-child"))),
            i.hasClass(u) &&
              !a.localIsResizing &&
              Dn(a.slideIndex, a.slideAnchor, a.anchorLink, a.sectionIndex),
            void wn(n, a, !0))
      );
    }
    function mn(n) {
      Sn(n.slidesNav, n.slideIndex),
        n.localIsResizing ||
          (e.isFunction(N.afterSlideLoad) &&
            N.afterSlideLoad.call(
              n.destiny,
              n.anchorLink,
              n.sectionIndex + 1,
              n.slideAnchor,
              n.slideIndex
            ),
          (yo = !0),
          Je(n.destiny)),
        (ho = !1);
    }
    function wn(e, n, o) {
      var i = n.destinyPos;
      if (N.css3) {
        var a = "translate3d(-" + t.round(i.left) + "px, 0px, 0px)";
        bn(e.find(q)).css(Zn(a)),
          (Lo = setTimeout(
            function () {
              o && mn(n);
            },
            N.scrollingSpeed,
            N.easing
          ));
      } else
        e.animate(
          { scrollLeft: t.round(i.left) },
          N.scrollingSpeed,
          N.easing,
          function () {
            o && mn(n);
          }
        );
    }
    function Sn(e, n) {
      e.find(h).removeClass(u), e.find("li").eq(n).find("a").addClass(u);
    }
    function yn() {
      if ((xn(), po)) {
        var n = e(o.activeElement);
        if (!n.is("textarea") && !n.is("input") && !n.is("select")) {
          var i = $.height();
          t.abs(i - Yo) > (20 * t.max(Yo, i)) / 100 && (ue(!0), (Yo = i));
        }
      } else
        clearTimeout(To),
          (To = setTimeout(function () {
            ue(!0);
          }, 350));
    }
    function xn() {
      var e = N.responsive || N.responsiveWidth,
        n = N.responsiveHeight,
        o = e && $.outerWidth() < e,
        t = n && $.height() < n;
      e && n ? he(o || t) : e ? he(o) : n && he(t);
    }
    function bn(e) {
      var n = "all " + N.scrollingSpeed + "ms " + N.easingcss3;
      return (
        e.removeClass(s), e.css({ "-webkit-transition": n, transition: n })
      );
    }
    function Cn(e) {
      return e.addClass(s);
    }
    function Tn(n, o) {
      N.navigation &&
        (e(A).find(h).removeClass(u),
        n
          ? e(A)
              .find('a[href="#' + n + '"]')
              .addClass(u)
          : e(A).find("li").eq(o).find("a").addClass(u));
    }
    function kn(n) {
      N.menu &&
        (e(N.menu).find(h).removeClass(u),
        e(N.menu)
          .find('[data-menuanchor="' + n + '"]')
          .addClass(u));
    }
    function Ln(e, n) {
      kn(e), Tn(e, n);
    }
    function An(n) {
      var o = e(S).index(w),
        t = n.index(w);
      return o == t ? "none" : o > t ? "up" : "down";
    }
    function On(e, n) {
      return e == n ? "none" : e > n ? "left" : "right";
    }
    function In(e) {
      e.hasClass(F) ||
        e
          .addClass(F)
          .wrapInner(
            '<div class="' + b + '" style="height:' + En(e) + 'px;" />'
          );
    }
    function En(e) {
      var n = mo;
      if (N.paddingTop || N.paddingBottom) {
        var o = e;
        o.hasClass(m) || (o = e.closest(w));
        var t =
          parseInt(o.css("padding-top")) + parseInt(o.css("padding-bottom"));
        n = mo - t;
      }
      return n;
    }
    function Mn(e, n) {
      n ? bn(go) : Cn(go),
        go.css(Zn(e)),
        setTimeout(function () {
          go.removeClass(s);
        }, 10);
    }
    function Bn(n) {
      if (!n) return [];
      var o = go.find(w + '[data-anchor="' + n + '"]');
      return o.length || (o = e(w).eq(n - 1)), o;
    }
    function Rn(e, n) {
      var o = n.find(P),
        t = o.find(R + '[data-anchor="' + e + '"]');
      return t.length || (t = o.find(R).eq(e)), t;
    }
    function zn(e, n) {
      var o = Bn(e);
      o.length &&
        ("undefined" == typeof n && (n = 0),
        e === so || o.hasClass(u)
          ? Hn(o, n)
          : Ne(o, function () {
              Hn(o, n);
            }));
    }
    function Hn(e, n) {
      if ("undefined" != typeof n) {
        var o = e.find(P),
          t = Rn(n, e);
        t.length && gn(o, t);
      }
    }
    function Pn(e, n) {
      e.append('<div class="' + V + '"><ul></ul></div>');
      var o = e.find(j);
      o.addClass(N.slidesNavPosition);
      for (var t = 0; t < n; t++)
        o.find("ul").append('<li><a href="#"><span></span></a></li>');
      o.css("margin-left", "-" + o.width() / 2 + "px"),
        o.find("li").first().find("a").addClass(u);
    }
    function Dn(e, n, o, t) {
      var i = "";
      N.anchors.length &&
        !N.lockAnchors &&
        (e
          ? ("undefined" != typeof o && (i = o),
            "undefined" == typeof n && (n = e),
            (co = n),
            qn(i + "/" + n))
          : "undefined" != typeof e
          ? ((co = n), qn(o))
          : qn(o)),
        Vn();
    }
    function qn(e) {
      if (N.recordHistory) location.hash = e;
      else if (po || vo) n.history.replaceState(i, i, "#" + e);
      else {
        var o = n.location.href.split("#")[0];
        n.location.replace(o + "#" + e);
      }
    }
    function Fn(e) {
      var n = e.data("anchor"),
        o = e.index();
      return "undefined" == typeof n && (n = o), n;
    }
    function Vn() {
      var n = e(S),
        o = n.find(z),
        t = Fn(n),
        i = Fn(o),
        a = String(t);
      o.length && (a = a + "-" + i), (a = a.replace("/", "-").replace("#", ""));
      var l = new RegExp("\\b\\s?" + f + "-[^\\s]+\\b", "g");
      (lo[0].className = lo[0].className.replace(l, "")),
        lo.addClass(f + "-" + a);
    }
    function jn() {
      var e,
        t = o.createElement("p"),
        a = {
          webkitTransform: "-webkit-transform",
          OTransform: "-o-transform",
          msTransform: "-ms-transform",
          MozTransform: "-moz-transform",
          transform: "transform",
        };
      o.body.insertBefore(t, null);
      for (var l in a)
        t.style[l] !== i &&
          ((t.style[l] = "translate3d(1px,1px,1px)"),
          (e = n.getComputedStyle(t).getPropertyValue(a[l])));
      return o.body.removeChild(t), e !== i && e.length > 0 && "none" !== e;
    }
    function Yn() {
      o.addEventListener
        ? (o.removeEventListener("mousewheel", Fe, !1),
          o.removeEventListener("wheel", Fe, !1),
          o.removeEventListener("MozMousePixelScroll", Fe, !1))
        : o.detachEvent("onmousewheel", Fe);
    }
    function Nn() {
      var e,
        t = "";
      n.addEventListener
        ? (e = "addEventListener")
        : ((e = "attachEvent"), (t = "on"));
      var a =
        "onwheel" in o.createElement("div")
          ? "wheel"
          : o.onmousewheel !== i
          ? "mousewheel"
          : "DOMMouseScroll";
      "DOMMouseScroll" == a
        ? o[e](t + "MozMousePixelScroll", Fe, !1)
        : o[e](t + a, Fe, !1);
    }
    function Un() {
      go.on("mousedown", sn).on("mouseup", cn);
    }
    function Xn() {
      go.off("mousedown", sn).off("mouseup", cn);
    }
    function Wn() {
      (po || vo) &&
        (N.autoScrolling && lo.off(Mo.touchmove).on(Mo.touchmove, ze),
        e(l)
          .off(Mo.touchstart)
          .on(Mo.touchstart, De)
          .off(Mo.touchmove)
          .on(Mo.touchmove, He));
    }
    function Kn() {
      (po || vo) &&
        (N.autoScrolling && lo.off(Mo.touchmove),
        e(l).off(Mo.touchstart).off(Mo.touchmove));
    }
    function _n() {
      var e;
      return (e = n.PointerEvent
        ? { down: "pointerdown", move: "pointermove" }
        : { down: "MSPointerDown", move: "MSPointerMove" });
    }
    function Qn(e) {
      var n = [];
      return (
        (n.y =
          "undefined" != typeof e.pageY && (e.pageY || e.pageX)
            ? e.pageY
            : e.touches[0].pageY),
        (n.x =
          "undefined" != typeof e.pageX && (e.pageY || e.pageX)
            ? e.pageX
            : e.touches[0].pageX),
        vo &&
          Pe(e) &&
          N.scrollBar &&
          ((n.y = e.touches[0].pageY), (n.x = e.touches[0].pageX)),
        n
      );
    }
    function Gn(e, n) {
      G(0, "internal"),
        "undefined" != typeof n && (wo = !0),
        gn(e.closest(P), e),
        "undefined" != typeof n && (wo = !1),
        G(Bo.scrollingSpeed, "internal");
    }
    function Jn(e) {
      var n = t.round(e);
      if (N.css3 && N.autoScrolling && !N.scrollBar) {
        var o = "translate3d(0px, -" + n + "px, 0px)";
        Mn(o, !1);
      } else
        N.autoScrolling && !N.scrollBar ? go.css("top", -n) : ao.scrollTop(n);
    }
    function Zn(e) {
      return {
        "-webkit-transform": e,
        "-moz-transform": e,
        "-ms-transform": e,
        transform: e,
      };
    }
    function $n(n, o, t) {
      "all" !== o
        ? (bo[t][o] = n)
        : e.each(Object.keys(bo[t]), function (e, o) {
            bo[t][o] = n;
          });
    }
    function eo(n) {
      W(!1, "internal"),
        ie(!1),
        ae(!1),
        go.addClass(c),
        clearTimeout(Lo),
        clearTimeout(ko),
        clearTimeout(To),
        clearTimeout(Ao),
        clearTimeout(Oo),
        $.off("scroll", Ie).off("hashchange", on).off("resize", yn),
        ee
          .off("click touchstart", A + " a")
          .off("mouseenter", A + " li")
          .off("mouseleave", A + " li")
          .off("click touchstart", Y)
          .off("mouseover", N.normalScrollElements)
          .off("mouseout", N.normalScrollElements),
        e(w).off("click touchstart", U),
        clearTimeout(Lo),
        clearTimeout(ko),
        n && no();
    }
    function no() {
      Jn(0),
        go
          .find(
            "img[data-src], source[data-src], audio[data-src], iframe[data-src]"
          )
          .each(function () {
            Qe(e(this), "src");
          }),
        go.find("img[data-srcset]").each(function () {
          Qe(e(this), "srcset");
        }),
        e(A + ", " + j + ", " + U).remove(),
        e(w).css({ height: "", "background-color": "", padding: "" }),
        e(R).css({ width: "" }),
        go.css({
          height: "",
          position: "",
          "-ms-touch-action": "",
          "touch-action": "",
        }),
        ao.css({ overflow: "", height: "" }),
        e("html").removeClass(d),
        lo.removeClass(r),
        e.each(lo.get(0).className.split(/\s+/), function (e, n) {
          0 === n.indexOf(f) && lo.removeClass(n);
        }),
        e(w + ", " + R).each(function () {
          N.scrollOverflowHandler && N.scrollOverflowHandler.remove(e(this)),
            e(this).removeClass(F + " " + u);
        }),
        Cn(go),
        go.find(C + ", " + q + ", " + P).each(function () {
          e(this).replaceWith(this.childNodes);
        }),
        go.css({ "-webkit-transition": "none", transition: "none" }),
        ao.scrollTop(0);
      var n = [m, B, D];
      e.each(n, function (n, o) {
        e("." + o).removeClass(o);
      });
    }
    function oo(e, n, o) {
      (N[e] = n), "internal" !== o && (Bo[e] = n);
    }
    function to() {
      var n = [
        "fadingEffect",
        "continuousHorizontal",
        "scrollHorizontally",
        "interlockedSlides",
        "resetSliders",
        "responsiveSlides",
        "offsetSections",
        "dragAndMove",
        "scrollOverflowReset",
        "parallax",
      ];
      return e("html").hasClass(d)
        ? void io(
            "error",
            "Fullpage.js can only be initialized once and you are doing it multiple times!"
          )
        : (N.continuousVertical &&
            (N.loopTop || N.loopBottom) &&
            ((N.continuousVertical = !1),
            io(
              "warn",
              "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled"
            )),
          N.scrollBar &&
            N.scrollOverflow &&
            io(
              "warn",
              "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"
            ),
          !N.continuousVertical ||
            (!N.scrollBar && N.autoScrolling) ||
            ((N.continuousVertical = !1),
            io(
              "warn",
              "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled"
            )),
          N.scrollOverflow &&
            !N.scrollOverflowHandler &&
            ((N.scrollOverflow = !1),
            io(
              "error",
              "The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js."
            )),
          e.each(n, function (e, n) {
            N[n] &&
              io(
                "warn",
                "fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: " +
                  n
              );
          }),
          void e.each(N.anchors, function (n, o) {
            var t = ee.find("[name]").filter(function () {
                return (
                  e(this).attr("name") &&
                  e(this).attr("name").toLowerCase() == o.toLowerCase()
                );
              }),
              i = ee.find("[id]").filter(function () {
                return (
                  e(this).attr("id") &&
                  e(this).attr("id").toLowerCase() == o.toLowerCase()
                );
              });
            (i.length || t.length) &&
              (io(
                "error",
                "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."
              ),
              i.length &&
                io(
                  "error",
                  '"' +
                    o +
                    '" is is being used by another element `id` property'
                ),
              t.length &&
                io(
                  "error",
                  '"' +
                    o +
                    '" is is being used by another element `name` property'
                ));
          }));
    }
    function io(e, n) {
      console && console[e] && console[e]("fullPage: " + n);
    }
    if (e("html").hasClass(d)) return void to();
    var ao = e("html, body"),
      lo = e("body"),
      ro = e.fn.fullpage;
    N = e.extend(
      {
        menu: !1,
        anchors: [],
        lockAnchors: !1,
        navigation: !1,
        navigationPosition: "right",
        navigationTooltips: [],
        showActiveTooltip: !1,
        slidesNavigation: !1,
        slidesNavPosition: "bottom",
        scrollBar: !1,
        hybrid: !1,
        css3: !0,
        scrollingSpeed: 700,
        autoScrolling: !0,
        fitToSection: !0,
        fitToSectionDelay: 1e3,
        easing: "easeInOutCubic",
        easingcss3: "ease",
        loopBottom: !1,
        loopTop: !1,
        loopHorizontal: !0,
        continuousVertical: !1,
        continuousHorizontal: !1,
        scrollHorizontally: !1,
        interlockedSlides: !1,
        dragAndMove: !1,
        offsetSections: !1,
        resetSliders: !1,
        fadingEffect: !1,
        normalScrollElements: null,
        scrollOverflow: !1,
        scrollOverflowReset: !1,
        scrollOverflowHandler: e.fn.fp_scrolloverflow
          ? e.fn.fp_scrolloverflow.iscrollHandler
          : null,
        scrollOverflowOptions: null,
        touchSensitivity: 5,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,
        keyboardScrolling: !0,
        animateAnchor: !0,
        recordHistory: !0,
        controlArrows: !0,
        controlArrowColor: "#fff",
        verticalCentered: !0,
        sectionsColor: [],
        paddingTop: 0,
        paddingBottom: 0,
        fixedElements: null,
        responsive: 0,
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: !1,
        parallax: !1,
        parallaxOptions: {
          type: "reveal",
          percentage: 62,
          property: "translate",
        },
        sectionSelector: g,
        slideSelector: M,
        afterLoad: null,
        onLeave: null,
        afterRender: null,
        afterResize: null,
        afterReBuild: null,
        afterSlideLoad: null,
        onSlideLeave: null,
        afterResponsive: null,
        lazyLoading: !0,
      },
      N
    );
    var so,
      co,
      fo,
      uo,
      ho = !1,
      po = navigator.userAgent.match(
        /(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/
      ),
      vo =
        "ontouchstart" in n ||
        navigator.msMaxTouchPoints > 0 ||
        navigator.maxTouchPoints,
      go = e(this),
      mo = $.height(),
      wo = !1,
      So = !0,
      yo = !0,
      xo = [],
      bo = {};
    (bo.m = { up: !0, down: !0, left: !0, right: !0 }),
      (bo.k = e.extend(!0, {}, bo.m));
    var Co,
      To,
      ko,
      Lo,
      Ao,
      Oo,
      Io,
      Eo = _n(),
      Mo = {
        touchmove: "ontouchmove" in n ? "touchmove" : Eo.move,
        touchstart: "ontouchstart" in n ? "touchstart" : Eo.down,
      },
      Bo = e.extend(!0, {}, N);
    to(),
      e.extend(e.easing, {
        easeInOutCubic: function (e, n, o, t, i) {
          return (n /= i / 2) < 1
            ? (t / 2) * n * n * n + o
            : (t / 2) * ((n -= 2) * n * n + 2) + o;
        },
      }),
      e(this).length &&
        ((ro.version = "2.9.5"),
        (ro.setAutoScrolling = W),
        (ro.setRecordHistory = Q),
        (ro.setScrollingSpeed = G),
        (ro.setFitToSection = ne),
        (ro.setLockAnchors = oe),
        (ro.setMouseWheelScrolling = te),
        (ro.setAllowScrolling = ie),
        (ro.setKeyboardScrolling = ae),
        (ro.moveSectionUp = le),
        (ro.moveSectionDown = re),
        (ro.silentMoveTo = se),
        (ro.moveTo = ce),
        (ro.moveSlideRight = de),
        (ro.moveSlideLeft = fe),
        (ro.fitToSection = Ee),
        (ro.reBuild = ue),
        (ro.setResponsive = he),
        (ro.destroy = eo),
        (ro.shared = { afterRenderActions: Ae }),
        pe(),
        ve());
    var Ro = !1,
      zo = 0,
      Ho = 0,
      Po = 0,
      Do = 0,
      qo = 0,
      Fo = new Date().getTime(),
      Vo = 0,
      jo = 0,
      Yo = mo;
  };
});

/*! WOW wow.js - v1.3.0 - 2016-10-04
 * https://wowjs.uk
 * Copyright (c) 2016 Thomas Grainger; Licensed MIT */ !(function (a, b) {
  if ("function" == typeof define && define.amd)
    define(["module", "exports"], b);
  else if ("undefined" != typeof exports) b(module, exports);
  else {
    var c = { exports: {} };
    b(c, c.exports), (a.WOW = c.exports);
  }
})(this, function (a, b) {
  "use strict";
  function c(a, b) {
    if (!(a instanceof b))
      throw new TypeError("Cannot call a class as a function");
  }
  function d(a, b) {
    return b.indexOf(a) >= 0;
  }
  function e(a, b) {
    for (var c in b)
      if (null == a[c]) {
        var d = b[c];
        a[c] = d;
      }
    return a;
  }
  function f(a) {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      a
    );
  }
  function g(a) {
    var b =
        arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1],
      c = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2],
      d =
        arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3],
      e = void 0;
    return (
      null != document.createEvent
        ? ((e = document.createEvent("CustomEvent")),
          e.initCustomEvent(a, b, c, d))
        : null != document.createEventObject
        ? ((e = document.createEventObject()), (e.eventType = a))
        : (e.eventName = a),
      e
    );
  }
  function h(a, b) {
    null != a.dispatchEvent
      ? a.dispatchEvent(b)
      : b in (null != a)
      ? a[b]()
      : "on" + b in (null != a) && a["on" + b]();
  }
  function i(a, b, c) {
    null != a.addEventListener
      ? a.addEventListener(b, c, !1)
      : null != a.attachEvent
      ? a.attachEvent("on" + b, c)
      : (a[b] = c);
  }
  function j(a, b, c) {
    null != a.removeEventListener
      ? a.removeEventListener(b, c, !1)
      : null != a.detachEvent
      ? a.detachEvent("on" + b, c)
      : delete a[b];
  }
  function k() {
    return "innerHeight" in window
      ? window.innerHeight
      : document.documentElement.clientHeight;
  }
  Object.defineProperty(b, "__esModule", { value: !0 });
  var l,
    m,
    n = (function () {
      function a(a, b) {
        for (var c = 0; c < b.length; c++) {
          var d = b[c];
          (d.enumerable = d.enumerable || !1),
            (d.configurable = !0),
            "value" in d && (d.writable = !0),
            Object.defineProperty(a, d.key, d);
        }
      }
      return function (b, c, d) {
        return c && a(b.prototype, c), d && a(b, d), b;
      };
    })(),
    o =
      window.WeakMap ||
      window.MozWeakMap ||
      (function () {
        function a() {
          c(this, a), (this.keys = []), (this.values = []);
        }
        return (
          n(a, [
            {
              key: "get",
              value: function (a) {
                for (var b = 0; b < this.keys.length; b++) {
                  var c = this.keys[b];
                  if (c === a) return this.values[b];
                }
              },
            },
            {
              key: "set",
              value: function (a, b) {
                for (var c = 0; c < this.keys.length; c++) {
                  var d = this.keys[c];
                  if (d === a) return (this.values[c] = b), this;
                }
                return this.keys.push(a), this.values.push(b), this;
              },
            },
          ]),
          a
        );
      })(),
    p =
      window.MutationObserver ||
      window.WebkitMutationObserver ||
      window.MozMutationObserver ||
      ((m = l =
        (function () {
          function a() {
            c(this, a),
              "undefined" != typeof console &&
                null !== console &&
                (console.warn(
                  "MutationObserver is not supported by your browser."
                ),
                console.warn(
                  "WOW.js cannot detect dom mutations, please call .sync() after loading new content."
                ));
          }
          return n(a, [{ key: "observe", value: function () {} }]), a;
        })()),
      (l.notSupported = !0),
      m),
    q =
      window.getComputedStyle ||
      function (a) {
        var b = /(\-([a-z]){1})/g;
        return {
          getPropertyValue: function (c) {
            "float" === c && (c = "styleFloat"),
              b.test(c) &&
                c.replace(b, function (a, b) {
                  return b.toUpperCase();
                });
            var d = a.currentStyle;
            return (null != d ? d[c] : void 0) || null;
          },
        };
      },
    r = (function () {
      function a() {
        var b =
          arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
        c(this, a),
          (this.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null,
            resetAnimation: !0,
          }),
          (this.animate = (function () {
            return "requestAnimationFrame" in window
              ? function (a) {
                  return window.requestAnimationFrame(a);
                }
              : function (a) {
                  return a();
                };
          })()),
          (this.vendors = ["moz", "webkit"]),
          (this.start = this.start.bind(this)),
          (this.resetAnimation = this.resetAnimation.bind(this)),
          (this.scrollHandler = this.scrollHandler.bind(this)),
          (this.scrollCallback = this.scrollCallback.bind(this)),
          (this.scrolled = !0),
          (this.config = e(b, this.defaults)),
          null != b.scrollContainer &&
            (this.config.scrollContainer = document.querySelector(
              b.scrollContainer
            )),
          (this.animationNameCache = new o()),
          (this.wowEvent = g(this.config.boxClass));
      }
      return (
        n(a, [
          {
            key: "init",
            value: function () {
              (this.element = window.document.documentElement),
                d(document.readyState, ["interactive", "complete"])
                  ? this.start()
                  : i(document, "DOMContentLoaded", this.start),
                (this.finished = []);
            },
          },
          {
            key: "start",
            value: function () {
              var a = this;
              if (
                ((this.stopped = !1),
                (this.boxes = [].slice.call(
                  this.element.querySelectorAll("." + this.config.boxClass)
                )),
                (this.all = this.boxes.slice(0)),
                this.boxes.length)
              )
                if (this.disabled()) this.resetStyle();
                else
                  for (var b = 0; b < this.boxes.length; b++) {
                    var c = this.boxes[b];
                    this.applyStyle(c, !0);
                  }
              if (
                (this.disabled() ||
                  (i(
                    this.config.scrollContainer || window,
                    "scroll",
                    this.scrollHandler
                  ),
                  i(window, "resize", this.scrollHandler),
                  (this.interval = setInterval(this.scrollCallback, 50))),
                this.config.live)
              ) {
                var d = new p(function (b) {
                  for (var c = 0; c < b.length; c++)
                    for (var d = b[c], e = 0; e < d.addedNodes.length; e++) {
                      var f = d.addedNodes[e];
                      a.doSync(f);
                    }
                });
                d.observe(document.body, { childList: !0, subtree: !0 });
              }
            },
          },
          {
            key: "stop",
            value: function () {
              (this.stopped = !0),
                j(
                  this.config.scrollContainer || window,
                  "scroll",
                  this.scrollHandler
                ),
                j(window, "resize", this.scrollHandler),
                null != this.interval && clearInterval(this.interval);
            },
          },
          {
            key: "sync",
            value: function () {
              p.notSupported && this.doSync(this.element);
            },
          },
          {
            key: "doSync",
            value: function (a) {
              if (
                (("undefined" != typeof a && null !== a) || (a = this.element),
                1 === a.nodeType)
              ) {
                a = a.parentNode || a;
                for (
                  var b = a.querySelectorAll("." + this.config.boxClass), c = 0;
                  c < b.length;
                  c++
                ) {
                  var e = b[c];
                  d(e, this.all) ||
                    (this.boxes.push(e),
                    this.all.push(e),
                    this.stopped || this.disabled()
                      ? this.resetStyle()
                      : this.applyStyle(e, !0),
                    (this.scrolled = !0));
                }
              }
            },
          },
          {
            key: "show",
            value: function (a) {
              return (
                this.applyStyle(a),
                (a.className = a.className + " " + this.config.animateClass),
                null != this.config.callback && this.config.callback(a),
                h(a, this.wowEvent),
                this.config.resetAnimation &&
                  (i(a, "animationend", this.resetAnimation),
                  i(a, "oanimationend", this.resetAnimation),
                  i(a, "webkitAnimationEnd", this.resetAnimation),
                  i(a, "MSAnimationEnd", this.resetAnimation)),
                a
              );
            },
          },
          {
            key: "applyStyle",
            value: function (a, b) {
              var c = this,
                d = a.getAttribute("data-wow-duration"),
                e = a.getAttribute("data-wow-delay"),
                f = a.getAttribute("data-wow-iteration");
              return this.animate(function () {
                return c.customStyle(a, b, d, e, f);
              });
            },
          },
          {
            key: "resetStyle",
            value: function () {
              for (var a = 0; a < this.boxes.length; a++) {
                var b = this.boxes[a];
                b.style.visibility = "visible";
              }
            },
          },
          {
            key: "resetAnimation",
            value: function (a) {
              if (a.type.toLowerCase().indexOf("animationend") >= 0) {
                var b = a.target || a.srcElement;
                b.className = b.className
                  .replace(this.config.animateClass, "")
                  .trim();
              }
            },
          },
          {
            key: "customStyle",
            value: function (a, b, c, d, e) {
              return (
                b && this.cacheAnimationName(a),
                (a.style.visibility = b ? "hidden" : "visible"),
                c && this.vendorSet(a.style, { animationDuration: c }),
                d && this.vendorSet(a.style, { animationDelay: d }),
                e && this.vendorSet(a.style, { animationIterationCount: e }),
                this.vendorSet(a.style, {
                  animationName: b ? "none" : this.cachedAnimationName(a),
                }),
                a
              );
            },
          },
          {
            key: "vendorSet",
            value: function (a, b) {
              for (var c in b)
                if (b.hasOwnProperty(c)) {
                  var d = b[c];
                  a["" + c] = d;
                  for (var e = 0; e < this.vendors.length; e++) {
                    var f = this.vendors[e];
                    a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = d;
                  }
                }
            },
          },
          {
            key: "vendorCSS",
            value: function (a, b) {
              for (
                var c = q(a), d = c.getPropertyCSSValue(b), e = 0;
                e < this.vendors.length;
                e++
              ) {
                var f = this.vendors[e];
                d = d || c.getPropertyCSSValue("-" + f + "-" + b);
              }
              return d;
            },
          },
          {
            key: "animationName",
            value: function (a) {
              var b = void 0;
              try {
                b = this.vendorCSS(a, "animation-name").cssText;
              } catch (c) {
                b = q(a).getPropertyValue("animation-name");
              }
              return "none" === b ? "" : b;
            },
          },
          {
            key: "cacheAnimationName",
            value: function (a) {
              return this.animationNameCache.set(a, this.animationName(a));
            },
          },
          {
            key: "cachedAnimationName",
            value: function (a) {
              return this.animationNameCache.get(a);
            },
          },
          {
            key: "scrollHandler",
            value: function () {
              this.scrolled = !0;
            },
          },
          {
            key: "scrollCallback",
            value: function () {
              if (this.scrolled) {
                this.scrolled = !1;
                for (var a = [], b = 0; b < this.boxes.length; b++) {
                  var c = this.boxes[b];
                  if (c) {
                    if (this.isVisible(c)) {
                      this.show(c);
                      continue;
                    }
                    a.push(c);
                  }
                }
                (this.boxes = a),
                  this.boxes.length || this.config.live || this.stop();
              }
            },
          },
          {
            key: "offsetTop",
            value: function (a) {
              for (; void 0 === a.offsetTop; ) a = a.parentNode;
              for (var b = a.offsetTop; a.offsetParent; )
                (a = a.offsetParent), (b += a.offsetTop);
              return b;
            },
          },
          {
            key: "isVisible",
            value: function (a) {
              var b = a.getAttribute("data-wow-offset") || this.config.offset,
                c =
                  (this.config.scrollContainer &&
                    this.config.scrollContainer.scrollTop) ||
                  window.pageYOffset,
                d = c + Math.min(this.element.clientHeight, k()) - b,
                e = this.offsetTop(a),
                f = e + a.clientHeight;
              return d >= e && f >= c;
            },
          },
          {
            key: "disabled",
            value: function () {
              return !this.config.mobile && f(navigator.userAgent);
            },
          },
        ]),
        a
      );
    })();
  (b["default"] = r), (a.exports = b["default"]);
});
