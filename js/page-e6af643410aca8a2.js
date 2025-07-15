(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[974], {
    8020: (e, r, l) => {
        "use strict";
        l.r(r), l.d(r, {default: () => p});
        var t = l(5853), o = l(2115);
        let n = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), a = function () {
            for (var e = arguments.length, r = Array(e), l = 0; l < e; l++) r[l] = arguments[l];
            return r.filter((e, r, l) => !!e && "" !== e.trim() && l.indexOf(e) === r).join(" ").trim()
        };
        var c = {
            xmlns: "http://www.w3.org/2000/svg",
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round"
        };
        let s = (0, o.forwardRef)((e, r) => {
            let {
                color: l = "currentColor",
                size: t = 24,
                strokeWidth: n = 2,
                absoluteStrokeWidth: s,
                className: i = "",
                children: d,
                iconNode: m,
                ...u
            } = e;
            return (0, o.createElement)("svg", {
                ref: r, ...c,
                width: t,
                height: t,
                stroke: l,
                strokeWidth: s ? 24 * Number(n) / Number(t) : n,
                className: a("lucide", i), ...u
            }, [...m.map(e => {
                let [r, l] = e;
                return (0, o.createElement)(r, l)
            }), ...Array.isArray(d) ? d : [d]])
        }), i = ((e, r) => {
            let l = (0, o.forwardRef)((l, t) => {
                let {className: c, ...i} = l;
                return (0, o.createElement)(s, {ref: t, iconNode: r, className: a("lucide-".concat(n(e)), c), ...i})
            });
            return l.displayName = "".concat(e), l
        })("ChevronDown", [["path", {d: "m6 9 6 6 6-6", key: "qrunsl"}]]);

        function d() {
            return (0, t.FD)("header", {
                className: "w-full px-6 py-4 flex items-center justify-between border-b border-purple-800/30",
                children: [(0, t.FD)("div", {
                    className: "flex items-center space-x-8",
                    children: [(0, t.Y)("h1", {
                        className: "text-2xl font-bold text-white",
                        children: "ZAMA Roulette"
                    }), (0, t.FD)("nav", {
                        className: "hidden md:flex items-center space-x-6",
                        children: [(0, t.FD)("div", {
                            className: "flex items-center space-x-1 text-gray-300 hover:text-white cursor-pointer",
                            children: [(0, t.Y)("span", {children: "Games"}), (0, t.Y)(i, {className: "w-4 h-4"})]
                        }), (0, t.FD)("div", {
                            className: "flex items-center space-x-2 text-gray-300 hover:text-white cursor-pointer",
                            children: [(0, t.Y)("span", {children: "Monroll"}), (0, t.Y)("span", {
                                className: "text-orange-500",
                                children: "\uD83D\uDD25"
                            })]
                        }), (0, t.Y)("a", {
                            href: "#",
                            className: "text-gray-300 hover:text-white",
                            children: "Faucet"
                        }), ]
                    })]
                }), (0, t.FD)("div", {
                    className: "flex items-center space-x-4",
                    children: [(0, t.Y)("button", {
                        className: "bg-purple-700 hover:bg-purple-600 px-6 py-2 rounded-lg text-white font-medium transition-colors",
                        children: "Connect Wallet"
                    })]
                })]
            })
        }

        let m = [{address: "0x6...a85", bet: "0.02", win: "0.039"}, {
            address: "0x4...d95",
            bet: "0.5",
            win: "0.65"
        }, {address: "0x9...255", bet: "0.2", win: "0.388"}, {
            address: "0x8...88e",
            bet: "0.02",
            win: "0.039"
        }, {address: "0x0...160", bet: "0.02", win: "0.039"}, {
            address: "0x4...c0c",
            bet: "0.35",
            win: "0.613"
        }, {address: "0x9...255", bet: "0.1", win: "0.194"}, {
            address: "0x6...b9d",
            bet: "0.2",
            win: "0.3"
        }, {address: "0x7...360", bet: "0.5", win: "0.65"}, {address: "0xc...e59", bet: "0.1", win: "0.194"}];

        function u() {
            return (0, t.Y)("div", {
                className: "w-full bg-black/20 border-y border-purple-800/30 py-2 overflow-hidden",
                children: (0, t.Y)("div", {
                    className: "ticker-scrolling flex items-center space-x-8 whitespace-nowrap",
                    children: [...m, ...m].map((e, r) => (0, t.FD)("div", {
                        className: "flex items-center space-x-2 text-sm",
                        children: [(0, t.Y)("span", {
                            className: "text-gray-400",
                            children: e.address
                        }), (0, t.Y)("span", {
                            className: "text-gray-500",
                            children: "|"
                        }), (0, t.Y)("span", {
                            className: "text-white",
                            children: e.bet
                        }), (0, t.Y)("svg", {
                            className: "w-4 h-4 text-green-500",
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            children: (0, t.Y)("path", {
                                fillRule: "evenodd",
                                d: "M10.293 15.707a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L11 13.586V3a1 1 0 1 0-2 0v10.586l-3.293-3.293a1 1 0 0 0-1.414 1.414l4 4z",
                                clipRule: "evenodd"
                            })
                        }), (0, t.Y)("span", {
                            className: "text-green-400 font-medium",
                            children: e.win
                        }), (0, t.Y)("img", {
                            src: "https://ext.same-assets.com/1196508808/1245368982.svg",
                            alt: "MON",
                            className: "w-4 h-4"
                        })]
                    }, r))
                })
            })
        }

        let b = [{number: 0, color: "green"}, {number: 32, color: "red"}, {number: 15, color: "black"}, {
            number: 19,
            color: "red"
        }, {number: 4, color: "black"}, {number: 21, color: "red"}, {number: 2, color: "black"}, {
            number: 25,
            color: "red"
        }, {number: 17, color: "black"}, {number: 34, color: "red"}, {number: 6, color: "black"}, {
            number: 27,
            color: "red"
        }, {number: 13, color: "black"}, {number: 36, color: "red"}, {number: 11, color: "black"}, {
            number: 30,
            color: "red"
        }, {number: 8, color: "black"}, {number: 23, color: "red"}, {number: 10, color: "black"}, {
            number: 5,
            color: "red"
        }, {number: 24, color: "black"}, {number: 16, color: "red"}, {number: 33, color: "black"}, {
            number: 1,
            color: "red"
        }, {number: 20, color: "black"}, {number: 14, color: "red"}, {number: 31, color: "black"}, {
            number: 9,
            color: "red"
        }, {number: 22, color: "black"}, {number: 18, color: "red"}, {number: 29, color: "black"}, {
            number: 7,
            color: "red"
        }, {number: 28, color: "black"}, {number: 12, color: "red"}, {number: 35, color: "black"}, {
            number: 3,
            color: "red"
        }, {number: 26, color: "black"}];

        function h(e) {
            let {
                isGameActive: r = !1,
                onSpinComplete: l
            } = e, [n, a] = (0, o.useState)(!1), [c, s] = (0, o.useState)(0), [i, d] = (0, o.useState)(!1);
            (0, o.useEffect)(() => {
                d(!0)
            }, []), (0, o.useEffect)(() => {
                r && !n && m()
            }, [r]);
            let m = () => {
                if (n || !i) return;
                a(!0);
                let e = c + 360 * (5 + 5 * Math.random()) + 360 * Math.random();
                s(e), setTimeout(() => {
                    a(!1);
                    let r = Math.floor((360 - e % 360) / (360 / b.length)) % b.length, t = b[r].number;
                    null == l || l(t)
                }, 4e3)
            };
            return i ? (0, t.Y)("div", {
                className: "flex flex-col items-center space-y-8", children: (0, t.Y)("div", {
                    className: "relative", children: (0, t.FD)("div", {
                        className: "relative w-80 h-80",
                        children: [(0, t.Y)("div", {
                            className: "w-full h-full rounded-full border-4 border-yellow-400 relative transition-transform duration-4000 ease-out cursor-pointer ".concat(n ? "animate-spin" : ""),
                            style: {transform: "rotate(".concat(c, "deg)")},
                            onClick: m,
                            children: b.map((e, r) => {
                                let l = 360 * r / b.length, o = l * Math.PI / 180, n = 140 * Math.cos(o),
                                    a = 140 * Math.sin(o);
                                return (0, t.Y)("div", {
                                    className: "absolute w-8 h-12 flex items-center justify-center text-white text-sm font-bold transform -translate-x-1/2 -translate-y-1/2 ".concat("red" === e.color ? "roulette-red" : "black" === e.color ? "roulette-black" : "roulette-green"),
                                    style: {
                                        left: "calc(50% + ".concat(n, "px)"),
                                        top: "calc(50% + ".concat(a, "px)"),
                                        transform: "translate(-50%, -50%) rotate(".concat(l + 90, "deg)"),
                                        clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)"
                                    },
                                    children: e.number
                                }, r)
                            })
                        }), (0, t.Y)("div", {
                            className: "absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2",
                            children: (0, t.Y)("div", {className: "w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-yellow-400"})
                        }), (0, t.Y)("div", {
                            className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-yellow-400 rounded-full border-4 border-yellow-500 flex items-center justify-center",
                            children: (0, t.Y)("div", {className: "w-8 h-8 bg-yellow-600 rounded-full"})
                        })]
                    })
                })
            }) : (0, t.Y)("div", {
                className: "flex flex-col items-center space-y-8",
                children: (0, t.Y)("div", {className: "relative w-80 h-80 bg-gray-800 rounded-full animate-pulse"})
            })
        }

        function g(e) {
            let {selectedBets: r, onBetChange: l, disabled: o = !1} = e,
                n = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36], a = e => {
                    if (o) return;
                    let t = e.toString();
                    l(r.includes(t) ? r.filter(e => e !== t) : [...r, t])
                }, c = e => {
                    o || l(r.includes(e) ? r.filter(r => r !== e) : [...r, e])
                }, s = e => 0 === e ? "roulette-green" : n.includes(e) ? "roulette-red" : "roulette-black";
            return (0, t.Y)("div", {
                className: "bg-green-800 p-4 rounded-lg ".concat(o ? "opacity-50 pointer-events-none" : ""),
                children: (0, t.FD)("div", {
                    className: "flex",
                    children: [(0, t.Y)("div", {
                        className: "mr-4",
                        children: (0, t.Y)("button", {
                            onClick: () => a(0),
                            className: "w-12 h-36 roulette-green text-white font-bold text-lg border-2 border-green-600 hover:border-yellow-400 transition-colors ".concat(r.includes("0") ? "ring-2 ring-yellow-400" : ""),
                            disabled: o,
                            children: "0"
                        })
                    }), (0, t.FD)("div", {
                        className: "flex-1",
                        children: [(0, t.Y)("div", {
                            className: "grid grid-cols-12 gap-1 mb-2",
                            children: [[3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36], [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35], [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34]].map((e, l) => e.map((e, l) => (0, t.Y)("button", {
                                onClick: () => a(e),
                                className: "w-12 h-12 ".concat(s(e), " text-white font-bold border border-gray-600 hover:border-yellow-400 transition-colors ").concat(r.includes(e.toString()) ? "ring-2 ring-yellow-400" : ""),
                                disabled: o,
                                children: e
                            }, e)))
                        }), (0, t.FD)("div", {
                            className: "grid grid-cols-6 gap-1",
                            children: [(0, t.Y)("button", {
                                onClick: () => c("1to18"),
                                className: "h-12 bg-gray-700 text-white font-medium border border-gray-600 hover:border-yellow-400 transition-colors ".concat(r.includes("1to18") ? "ring-2 ring-yellow-400" : ""),
                                disabled: o,
                                children: "1 to 18"
                            }), (0, t.Y)("button", {
                                onClick: () => c("even"),
                                className: "h-12 bg-gray-700 text-white font-medium border border-gray-600 hover:border-yellow-400 transition-colors ".concat(r.includes("even") ? "ring-2 ring-yellow-400" : ""),
                                disabled: o,
                                children: "Even"
                            }), (0, t.Y)("button", {
                                onClick: () => c("red"),
                                className: "h-12 roulette-red text-white font-medium border border-gray-600 hover:border-yellow-400 transition-colors ".concat(r.includes("red") ? "ring-2 ring-yellow-400" : ""),
                                disabled: o,
                                children: "Red"
                            }), (0, t.Y)("button", {
                                onClick: () => c("black"),
                                className: "h-12 roulette-black text-white font-medium border border-gray-600 hover:border-yellow-400 transition-colors ".concat(r.includes("black") ? "ring-2 ring-yellow-400" : ""),
                                disabled: o,
                                children: "Black"
                            }), (0, t.Y)("button", {
                                onClick: () => c("odd"),
                                className: "h-12 bg-gray-700 text-white font-medium border border-gray-600 hover:border-yellow-400 transition-colors ".concat(r.includes("odd") ? "ring-2 ring-yellow-400" : ""),
                                disabled: o,
                                children: "Odd"
                            }), (0, t.Y)("button", {
                                onClick: () => c("19to36"),
                                className: "h-12 bg-gray-700 text-white font-medium border border-gray-600 hover:border-yellow-400 transition-colors ".concat(r.includes("19to36") ? "ring-2 ring-yellow-400" : ""),
                                disabled: o,
                                children: "19 to 36"
                            })]
                        })]
                    })]
                })
            })
        }

        function x(e) {
            let {
                selectedBets: r = [],
                onPlay: l,
                isGameActive: n = !1,
                gameResult: a = null
            } = e, [c, s] = (0, o.useState)("0.02"), [i, d] = (0, o.useState)("0 MON"), [m, u] = (0, o.useState)("");
            (0, o.useEffect)(() => {
                if (0 === r.length) return void u("");
                let e = parseFloat(c) || 0, l = 0;
                r.forEach(r => {
                    r.match(/^\d+$/) ? l += 35 * e : "red" === r || "black" === r || "even" === r || "odd" === r ? l += +e : ("1to18" === r || "19to36" === r) && (l += +e)
                }), u("".concat(l.toFixed(2), " MON"))
            }, [r, c]);
            let b = e => {
                let r = parseFloat(c) || 0;
                s(100 === e ? "100" : (r * e).toFixed(2))
            };
            return (0, t.FD)("div", {
                className: "space-y-6",
                children: [(0, t.Y)("button", {
                    className: "w-full bg-yellow-600 hover:bg-yellow-500 text-black font-medium py-3 px-4 rounded-lg transition-colors",
                    children: "Connect wallet"
                }), (0, t.FD)("div", {
                    children: [(0, t.Y)("label", {
                        className: "block text-white text-sm font-medium mb-2",
                        children: "Amount"
                    }), (0, t.FD)("div", {
                        className: "relative",
                        children: [(0, t.Y)("input", {
                            type: "number",
                            value: c,
                            onChange: e => s(e.target.value),
                            className: "w-full bg-purple-900/50 border border-purple-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-purple-500",
                            step: "0.01",
                            min: "0"
                        }), (0, t.FD)("div", {
                            className: "absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2",
                            children: [(0, t.Y)("img", {
                                src: "https://ext.same-assets.com/1196508808/216226803.svg",
                                alt: "MON",
                                className: "w-5 h-5"
                            }), [{label: "1/2", multiplier: .5}, {label: "2x", multiplier: 2}, {
                                label: "max",
                                multiplier: 100
                            }].map((e, r) => (0, t.Y)("button", {
                                onClick: () => b(e.multiplier),
                                className: "text-purple-300 hover:text-white text-sm px-2 py-1 rounded transition-colors",
                                children: e.label
                            }, r))]
                        })]
                    })]
                }), (0, t.FD)("div", {
                    children: [(0, t.Y)("label", {
                        className: "block text-white text-sm font-medium mb-2",
                        children: "Payout"
                    }), (0, t.Y)("div", {
                        className: "w-full bg-purple-900/30 border border-purple-700 text-white px-4 py-3 rounded-lg",
                        children: m || "Select your bets to see potential payout"
                    })]
                }), (0, t.Y)("button", {
                    onClick: () => 0 === r.length ? void alert("请先选择投注选项！") : 0 >= parseFloat(c) ? void alert("请输入有效的投注金额！") : void (null == l || l(), console.log("Playing with amount:", c, "on bets:", r)),
                    disabled: n || 0 === r.length,
                    className: "w-full font-medium py-4 px-4 rounded-lg transition-colors text-lg ".concat(n ? "bg-yellow-600 text-black cursor-not-allowed" : 0 === r.length ? "bg-gray-700 text-gray-400 cursor-not-allowed" : "bg-gray-600 hover:bg-gray-500 text-white"),
                    children: n ? "Spinning..." : "Play"
                }), null !== a && (0, t.FD)("div", {
                    className: "bg-yellow-500 text-black p-4 rounded-lg text-center font-bold",
                    children: ["Result: ", a]
                }), (0, t.FD)("div", {
                    className: "bg-black/40 rounded-lg p-4",
                    children: [(0, t.FD)("div", {
                        className: "flex items-center space-x-2 text-yellow-400",
                        children: [(0, t.Y)("span", {children: "⭐"}), (0, t.Y)("span", {
                            className: "text-white",
                            children: "Your Winnings:"
                        })]
                    }), (0, t.Y)("div", {className: "text-xl font-bold text-white mt-1", children: i})]
                }), (0, t.FD)("div", {
                    children: [(0, t.Y)("h3", {
                        className: "text-white text-lg font-medium mb-3",
                        children: "Your Recent Games"
                    }), (0, t.Y)("div", {
                        className: "bg-black/40 rounded-lg p-6 text-center text-gray-400",
                        children: "No game history yet. Play your first game!"
                    })]
                })]
            })
        }

        function p() {
            let [e, r] = (0, o.useState)([]), [l, n] = (0, o.useState)(!1), [a, c] = (0, o.useState)(null);
            return (0, t.FD)("div", {
                className: "min-h-screen monarch-gradient",
                children: [(0, t.Y)(d, {}), (0, t.Y)(u, {}), (0, t.FD)("main", {
                    className: "container mx-auto px-6 py-8",
                    children: [(0, t.FD)("div", {
                        className: "flex items-center justify-between mb-8",
                        children: [(0, t.Y)("h1", {
                            className: "text-3xl font-bold text-white",
                            children: "M0narch Roulette"
                        }), (0, t.Y)("button", {
                            className: "bg-purple-700 hover:bg-purple-600 px-4 py-2 rounded-lg text-white text-sm transition-colors",
                            children: "\uD83D\uDCD6 Game Rules"
                        })]
                    }), (0, t.FD)("div", {
                        className: "grid grid-cols-1 xl:grid-cols-3 gap-8",
                        children: [(0, t.FD)("div", {
                            className: "xl:col-span-2 space-y-8",
                            children: [(0, t.Y)(h, {
                                isGameActive: l, onSpinComplete: e => {
                                    c(e), n(!1), console.log("游戏结果:", e), setTimeout(() => {
                                        r([]), c(null)
                                    }, 3e3)
                                }
                            }), (0, t.Y)(g, {
                                selectedBets: e, onBetChange: e => {
                                    r(e)
                                }, disabled: l
                            })]
                        }), (0, t.Y)("div", {
                            className: "xl:col-span-1",
                            children: (0, t.Y)(x, {
                                selectedBets: e, onPlay: () => {
                                    n(!0), c(null), console.log("游戏开始！投注:", e)
                                }, isGameActive: l, gameResult: a
                            })
                        })]
                    })]
                }), (0, t.Y)("footer", {
                    className: "mt-16 border-t border-purple-800/30 py-6",
                    children: (0, t.Y)("div", {
                        className: "container mx-auto px-6 text-center text-gray-400 text-sm",
                        children: "\xa9 2025 MonadM0narch. All rights reserved. Built with ❤️ for the Monad community"
                    })
                })]
            })
        }
    }, 8972: (e, r, l) => {
        Promise.resolve().then(l.bind(l, 8020))
    }
}, e => {
    var r = r => e(e.s = r);
    e.O(0, [853, 441, 684, 358], () => r(8972)), _N_E = e.O()
}]);