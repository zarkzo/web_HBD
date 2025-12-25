(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [332],
  {
    3757: (e, a, t) => {
      "use strict";
      t.r(a),
        t.d(a, {
          default: () => u,
        });
      var n = t(7876),
        o = t(7328),
        s = t.n(o),
        i = t(9099),
        c = t(4232),
        r = t(5733),
        l = t.n(r),
        d = t(8328),
        m = t.n(d);
      function u() {
        let [e, a] = (0, c.useState)(!1),
          [t, o] = (0, c.useState)(!0),
          [r, d] = (0, c.useState)(new Date()),
          [u, _] = (0, c.useState)(!1),
          [p, h] = (0, c.useState)("card"),
          [x, g] = (0, c.useState)({
            card: !1,
            notepad: !1,
            music: !1,
            photo: !1,
            cake: !1,
          }),
          [v, k] = (0, c.useState)(!1),
          [j, N] = (0, c.useState)(!1),
          [y, H] = (0, c.useState)(!1),
          [b, C] = (0, c.useState)(!1),
          [w, T] = (0, c.useState)(!1),
          [f, S] = (0, c.useState)(!1),
          [D, M] = (0, c.useState)(!1),
          [B, P] = (0, c.useState)(!0),
          [I, E] = (0, c.useState)(!1),
          [F, z] = (0, c.useState)(0),
          [A, L] = (0, c.useState)(!1),
          [W, q] = (0, c.useState)(!1),
          [V, G] = (0, c.useState)("/gallery/video1.mp4"),
          [R, U] = (0, c.useState)(0),
          X = [
            {
              type: "image",
              src: "/gallery/gambar1.jpg",
              caption: "Semoga",
              fallback: "\uD83C\uDF88",
            },
            {
              type: "image",
              src: "/gallery/gambar2.jpg",
              caption: "Bahagia",
              fallback: "\uD83D\uDE0A",
            },
            {
              type: "image",
              src: "/gallery/gambar3.jpg",
              caption: "Selalu",
              fallback: "\uD83C\uDF81",
            },
            {
              type: "video",
              src: "/gallery/video1.mp4",
              caption: "Video Ucapan",
              fallback: "\uD83C\uDFAC",
            },
          ],
          [O, Y] = (0, c.useState)(0),
          [K, Q] = (0, c.useState)(0),
          [J, Z] = (0, c.useState)(0),
          [$, ee] = (0, c.useState)(80),
          ea = (0, c.useRef)(null);
        (0, c.useEffect)(() => {
          L("video" === X[F].type),
            "video" === X[F].type
              ? setTimeout(() => {
                  q(!0);
                }, 500)
              : q(!1);
        }, [F]);
        let [et, en] = (0, c.useState)({
            card: {
              x: 100,
              y: 50,
            },
            notepad: {
              x: 350,
              y: 250,
            },
            music: {
              x: 150,
              y: 150,
            },
            photo: {
              x: 250,
              y: 200,
            },
            cake: {
              x: 200,
              y: 100,
            },
          }),
          eo = (0, i.useRouter)(),
          es = "string" == typeof eo.query.untuk ? eo.query.untuk : "Piscel",
          ei = "string" == typeof eo.query.dari ? eo.query.dari : "Juni",
          ec =
            "string" == typeof eo.query.pesan
              ? eo.query.pesan
              : "Dear MY BESTIE💕Seseorang yang dapat kuceritakan isi hatiku. Yang dapat memahamiku seperti tiada duanya. Yang dapat membuatku tertawa tanpa batas, HAPPY BIRTHDAY TO MY BESTIE MY beiib OWA!!!🥳🦧💐 semoga sehat selalu, berkah usiamu, selalu bahagia dan membuat bahagia orang-orang disekitarmu🥰🫂\n Semoga semakin lebih baik lagi di setiap harinya, dan selalu mendampingiku till Jannah😚😇 \n Kamu adalah cewe GILA yang paling GILA tapi kamu lucu dan santai yang pernah kutemui meskipun hadiahku hanya ucapan dan pelukan. Pokoknya, aku hanya ingin mengatakan selamat ulang tahun, PSYCEL ZAHQINDI GEA KENCANA💃🧚🏻‍♂️ jangan biarkan siapa pun merusak hari besarmu sayang, kamu sangat besar 23+1➡️2️⃣4️⃣🥳😱🤩!";
        "string" == typeof eo.query.umur && eo.query.umur,
          (0, c.useEffect)(() => {
            {
              let e = setInterval(() => d(new Date()), 1e3),
                t = () => {
                  var e, a;
                  let t =
                      (null ===
                        (e = document.querySelector(
                          ".".concat(l().container)
                        )) || void 0 === e
                        ? void 0
                        : e.clientWidth) || 800,
                    n =
                      (null ===
                        (a = document.querySelector(
                          ".".concat(l().container)
                        )) || void 0 === a
                        ? void 0
                        : a.clientHeight) || 600,
                    o = Math.max(0, (t - 600) / 2),
                    s = Math.max(0, (n - 0.8 * n) / 4),
                    i = Math.max(0, (t - 320) / 2),
                    c = Math.max(0, (n - 250) / 2),
                    r = Math.max(0, (t - 400) / 2),
                    d = Math.max(0, (n - 300) / 2);
                  en({
                    card: {
                      x: o,
                      y: s,
                    },
                    notepad: {
                      x: o + 50,
                      y: s + 50,
                    },
                    music: {
                      x: i,
                      y: c,
                    },
                    photo: {
                      x: Math.max(0, (t - 480) / 2),
                      y: Math.max(0, (n - 400) / 2 - 20),
                    },
                    cake: {
                      x: r,
                      y: d,
                    },
                  });
                };
              t(), window.addEventListener("resize", t);
              let n = setTimeout(() => {
                o(!1), setTimeout(() => a(!0), 500);
              }, 2e3);
              return () => {
                clearInterval(e),
                  clearTimeout(n),
                  window.removeEventListener("resize", t);
              };
            }
          }, []);
        let er = () => {
            if (W)
              q(!1),
                setTimeout(() => {
                  let e = 0 === F ? X.length - 1 : F - 1;
                  z(e), L("video" === X[e].type);
                }, 300);
            else {
              let e = 0 === F ? X.length - 1 : F - 1;
              z(e), L("video" === X[e].type);
            }
          },
          el = () => {
            if (W)
              q(!1),
                setTimeout(() => {
                  let e = F === X.length - 1 ? 0 : F + 1;
                  z(e), L("video" === X[e].type);
                }, 300);
            else {
              let e = F === X.length - 1 ? 0 : F + 1;
              z(e), L("video" === X[e].type);
            }
          },
          ed = (e) => {
            var t, n, o, s, i, c, r, d;
            if ("present" === e) {
              a(!0),
                g({
                  ...x,
                  card: !1,
                }),
                h("card");
              let e =
                  (null ===
                    (t = document.querySelector(".".concat(l().container))) ||
                  void 0 === t
                    ? void 0
                    : t.clientWidth) || 800,
                o =
                  (null ===
                    (n = document.querySelector(".".concat(l().container))) ||
                  void 0 === n
                    ? void 0
                    : n.clientHeight) || 600,
                s = Math.max(0, (e - 600) / 2),
                i = Math.max(0, (o - 0.8 * o) / 4);
              en({
                ...et,
                card: {
                  x: s,
                  y: i,
                },
              });
            } else if ("cake" === e) {
              C(!0),
                g({
                  ...x,
                  cake: !1,
                }),
                h("cake");
              let e =
                  (null ===
                    (o = document.querySelector(".".concat(l().container))) ||
                  void 0 === o
                    ? void 0
                    : o.clientWidth) || 800,
                a =
                  (null ===
                    (s = document.querySelector(".".concat(l().container))) ||
                  void 0 === s
                    ? void 0
                    : s.clientHeight) || 600,
                t = Math.max(0, (e - 400) / 2),
                n = Math.max(0, (a - 300) / 2);
              en({
                ...et,
                cake: {
                  x: t,
                  y: n,
                },
              });
            } else if ("music" === e) {
              N(!0),
                g({
                  ...x,
                  music: !1,
                }),
                h("music");
              let e =
                  (null ===
                    (i = document.querySelector(".".concat(l().container))) ||
                  void 0 === i
                    ? void 0
                    : i.clientWidth) || 800,
                a =
                  (null ===
                    (c = document.querySelector(".".concat(l().container))) ||
                  void 0 === c
                    ? void 0
                    : c.clientHeight) || 600,
                t = Math.max(0, (e - 320) / 2),
                n = Math.max(0, (a - 250) / 2);
              en({
                ...et,
                music: {
                  x: t,
                  y: n,
                },
              });
            } else if ("photo" === e) {
              H(!0),
                g({
                  ...x,
                  photo: !1,
                }),
                h("photo"),
                L("video" === X[F].type);
              let e =
                  (null ===
                    (r = document.querySelector(".".concat(l().container))) ||
                  void 0 === r
                    ? void 0
                    : r.clientWidth) || 800,
                a =
                  (null ===
                    (d = document.querySelector(".".concat(l().container))) ||
                  void 0 === d
                    ? void 0
                    : d.clientHeight) || 600,
                t = Math.max(0, (e - 480) / 2),
                n = Math.max(0, (a - 400) / 2 - 20);
              en({
                ...et,
                photo: {
                  x: t,
                  y: n,
                },
              }),
                "video" === X[F].type &&
                  setTimeout(() => {
                    let e = document.querySelector(".".concat(l().slideVideo));
                    e &&
                      (e.load(),
                      console.log("Video dimuat ulang saat gallery dibuka"));
                  }, 500);
            }
          },
          em = (e, t) => {
            "minimize" === e
              ? g({
                  ...x,
                  [t]: !0,
                })
              : "close" === e &&
                ("card" === t
                  ? a(!1)
                  : "notepad" === t
                  ? k(!1)
                  : "music" === t
                  ? (N(!1), T(!1))
                  : "photo" === t
                  ? H(!1)
                  : "cake" === t && C(!1));
          },
          eu = (e) => {
            "party" === e
              ? document.body.classList.toggle("party-mode")
              : "cake" === e &&
                (g({
                  ...x,
                  card: !x.card,
                }),
                x.card && h("card"));
          },
          e_ = (e, a) => {
            e.preventDefault(), h(a);
            let t = e.clientX,
              n = e.clientY,
              o = et[a].x,
              s = et[a].y,
              i = document.querySelector(".".concat(l().desktop)),
              c = (null == i ? void 0 : i.clientWidth) || 800,
              r = (null == i ? void 0 : i.clientHeight) || 600,
              d =
                "card" === a
                  ? 600
                  : "notepad" === a
                  ? 400
                  : "music" === a
                  ? 320
                  : "photo" === a
                  ? 450
                  : 350,
              m = (e) => {
                let i = Math.max(0, Math.min(c - d / 2, o + (e.clientX - t))),
                  l = Math.max(0, Math.min(r - 100, s + (e.clientY - n)));
                en({
                  ...et,
                  [a]: {
                    x: i,
                    y: l,
                  },
                });
              },
              u = () => {
                document.removeEventListener("mousemove", m),
                  document.removeEventListener("mouseup", u);
              };
            document.addEventListener("mousemove", m),
              document.addEventListener("mouseup", u);
          },
          ep = () => {
            ea.current &&
              (w
                ? ea.current.pause()
                : ea.current.play().catch((e) => {
                    console.log(
                      "Pengguna harus berinteraksi dengan halaman terlebih dahulu untuk memainkan audio",
                      e
                    );
                  }),
              T(!w));
          },
          eh = () => {
            ea.current &&
              (Z(ea.current.currentTime), Q(ea.current.duration || 0));
          };
        (0, c.useEffect)(() => {
          ea.current && (ea.current.volume = $ / 100);
        }, [$, j]),
          (0, c.useEffect)(() => {
            let e = ea.current;
            return (
              e && e.addEventListener("timeupdate", eh),
              () => {
                e && e.removeEventListener("timeupdate", eh);
              }
            );
          }, []);
        let ex = (e) => {
            if (isNaN(e)) return "00:00";
            let a = Math.floor(e / 60),
              t = Math.floor(e % 60);
            return ""
              .concat(a.toString().padStart(2, "0"), ":")
              .concat(t.toString().padStart(2, "0"));
          },
          eg = (e) => {
            if (!ea.current || !K) return;
            let a = e.currentTarget.getBoundingClientRect(),
              t = e.clientX - a.left,
              n = (t / a.width) * K;
            (ea.current.currentTime = n), Z(n);
          };
        return (
          (0, c.useEffect)(() => {
            let e = (e) => {
              "Escape" === e.key && W && q(!1);
            };
            return (
              window.addEventListener("keydown", e),
              () => {
                window.removeEventListener("keydown", e);
              }
            );
          }, [W]),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsxs)(s(), {
                children: [
                  (0, n.jsx)("title", {
                    children: "Selamat Ulang Tahun ".concat(es, "!"),
                  }),
                  (0, n.jsx)("meta", {
                    name: "description",
                    content: "Kartu ucapan retro 90an untuk ".concat(es),
                  }),
                  (0, n.jsx)("meta", {
                    name: "viewport",
                    content:
                      "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover",
                  }),
                  (0, n.jsx)("link", {
                    rel: "icon",
                    href: "/favicon.ico",
                  }),
                ],
              }),
              (0, n.jsxs)("main", {
                className: l().main,
                children: [
                  (0, n.jsx)("audio", {
                    ref: ea,
                    style: {
                      display: "none",
                    },
                    src: "/audio/birthday-song.mp3",
                    onLoadedMetadata: (e) => Q(e.currentTarget.duration),
                  }),
                  t &&
                    (0, n.jsxs)("div", {
                      className: l().loading,
                      children: [
                        (0, n.jsx)("div", {
                          className: l().loadingText,
                          children: "LOADING...",
                        }),
                        (0, n.jsx)("div", {
                          className: l().progressBar,
                          children: (0, n.jsx)("div", {
                            className: l().progress,
                          }),
                        }),
                        (0, n.jsx)("div", {
                          className: l().loadingSubtext,
                          children: "WINDOWS 95",
                        }),
                      ],
                    }),
                  f &&
                    (0, n.jsxs)("div", {
                      className: m().shutdown,
                      children: [
                        (0, n.jsx)("div", {
                          className: m().progressBar,
                          children: (0, n.jsx)("div", {
                            className: m().progress,
                          }),
                        }),
                        D &&
                          (0, n.jsx)("div", {
                            className: m().loveMessage,
                            children: "Happy Birthday",
                          }),
                      ],
                    }),
                  !t &&
                    !f &&
                    (0, n.jsxs)("div", {
                      className: l().container,
                      children: [
                        (0, n.jsxs)("div", {
                          className: l().desktop,
                          children: [
                            (0, n.jsxs)("div", {
                              className: l().icons,
                              children: [
                                (0, n.jsxs)("div", {
                                  className: l().icon,
                                  onClick: () => ed("present"),
                                  children: [
                                    (0, n.jsx)("div", {
                                      className: l().iconImage,
                                      children: "\uD83C\uDF81",
                                    }),
                                    (0, n.jsx)("div", {
                                      className: l().iconText,
                                      children: "Present.exe",
                                    }),
                                  ],
                                }),
                                (0, n.jsxs)("div", {
                                  className: l().icon,
                                  onClick: () => ed("music"),
                                  children: [
                                    (0, n.jsx)("div", {
                                      className: l().iconImage,
                                      children: "\uD83C\uDFB5",
                                    }),
                                    (0, n.jsx)("div", {
                                      className: l().iconText,
                                      children: "Music.mp3",
                                    }),
                                  ],
                                }),
                                (0, n.jsxs)("div", {
                                  className: l().icon,
                                  onClick: () => ed("cake"),
                                  children: [
                                    (0, n.jsx)("div", {
                                      className: l().iconImage,
                                      children: "\uD83C\uDF82",
                                    }),
                                    (0, n.jsx)("div", {
                                      className: l().iconText,
                                      children: "Cake.exe",
                                    }),
                                  ],
                                }),
                                (0, n.jsxs)("div", {
                                  className: l().icon,
                                  onClick: () => ed("photo"),
                                  children: [
                                    (0, n.jsx)("div", {
                                      className: l().iconImage,
                                      children: "\uD83D\uDCF7",
                                    }),
                                    (0, n.jsx)("div", {
                                      className: l().iconText,
                                      children: "Gallery.jpg",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            u &&
                              (0, n.jsxs)("div", {
                                className: l().startMenu,
                                children: [
                                  (0, n.jsxs)("div", {
                                    className: l().startMenuHeader,
                                    children: [
                                      (0, n.jsx)("span", {
                                        className: l().startMenuLogo,
                                        children: "W",
                                      }),
                                      (0, n.jsx)("span", {
                                        children: "Windows 95",
                                      }),
                                    ],
                                  }),
                                  (0, n.jsxs)("div", {
                                    className: l().startMenuItems,
                                    children: [
                                      (0, n.jsxs)("div", {
                                        className: l().startMenuItem,
                                        onClick: () => {
                                          _(!1),
                                            a(!0),
                                            g({
                                              ...x,
                                              card: !1,
                                            }),
                                            h("card");
                                        },
                                        children: [
                                          (0, n.jsx)("span", {
                                            children: "\uD83C\uDF81",
                                          }),
                                          " Kartu Ucapan",
                                        ],
                                      }),
                                      (0, n.jsxs)("div", {
                                        className: l().startMenuItem,
                                        onClick: () => {
                                          _(!1),
                                            C(!0),
                                            g({
                                              ...x,
                                              cake: !1,
                                            }),
                                            h("cake");
                                        },
                                        children: [
                                          (0, n.jsx)("span", {
                                            children: "\uD83C\uDF82",
                                          }),
                                          " Kue Ulang Tahun",
                                        ],
                                      }),
                                      (0, n.jsxs)("div", {
                                        className: l().startMenuItem,
                                        onClick: () => {
                                          _(!1),
                                            k(!0),
                                            g({
                                              ...x,
                                              notepad: !1,
                                            }),
                                            h("notepad");
                                        },
                                        children: [
                                          (0, n.jsx)("span", {
                                            children: "\uD83D\uDCDD",
                                          }),
                                          " Notepad",
                                        ],
                                      }),
                                      (0, n.jsxs)("div", {
                                        className: l().startMenuItem,
                                        onClick: () => {
                                          _(!1), window.location.reload();
                                        },
                                        children: [
                                          (0, n.jsx)("span", {
                                            children: "\uD83D\uDD04",
                                          }),
                                          " Restart",
                                        ],
                                      }),
                                      (0, n.jsx)("div", {
                                        className: l().startMenuSeparator,
                                      }),
                                      (0, n.jsxs)("div", {
                                        className: l().startMenuItem,
                                        onClick: () => {
                                          _(!1),
                                            alert("😎 Editan zarkzo (faris)😎");
                                        },
                                        children: [
                                          (0, n.jsx)("span", {
                                            children: "⭐",
                                          }),
                                          " Tentang",
                                        ],
                                      }),
                                      (0, n.jsx)("div", {
                                        className: l().startMenuSeparator,
                                      }),
                                      (0, n.jsxs)("div", {
                                        className: l().startMenuItem,
                                        onClick: () => {
                                          ea.current && ea.current.pause(),
                                            T(!1),
                                            _(!1),
                                            S(!0),
                                            setTimeout(() => {
                                              M(!0),
                                                setTimeout(() => {
                                                  window.location.reload();
                                                }, 5e3);
                                            }, 1500);
                                        },
                                        children: [
                                          (0, n.jsx)("span", {
                                            children: "⚡",
                                          }),
                                          " Shutdown",
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            b &&
                              !x.cake &&
                              (0, n.jsxs)("div", {
                                className: ""
                                  .concat(l().cakeWindow, " ")
                                  .concat("cake" === p ? l().activeWindow : ""),
                                style: {
                                  top: "".concat(et.cake.y, "px"),
                                  left: "".concat(et.cake.x, "px"),
                                },
                                onClick: () => h("cake"),
                                children: [
                                  (0, n.jsxs)("div", {
                                    className: l().cardHeader,
                                    onMouseDown: (e) => e_(e, "cake"),
                                    children: [
                                      (0, n.jsx)("div", {
                                        className: l().cardTitle,
                                        children: "CAKE.EXE",
                                      }),
                                      (0, n.jsxs)("div", {
                                        className: l().cardControls,
                                        children: [
                                          (0, n.jsx)("span", {
                                            className: l().minimize,
                                            onClick: (e) => {
                                              e.stopPropagation(),
                                                em("minimize", "cake");
                                            },
                                            children: "_",
                                          }),
                                          (0, n.jsx)("span", {
                                            className: l().maximize,
                                            onClick: (e) => {
                                              e.stopPropagation(),
                                                em("maximize", "cake");
                                            },
                                            children: "□",
                                          }),
                                          (0, n.jsx)("span", {
                                            className: l().close,
                                            onClick: (e) => {
                                              e.stopPropagation(),
                                                em("close", "cake");
                                            },
                                            children: "✕",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, n.jsxs)("div", {
                                    className: l().cardToolbar,
                                    children: [
                                      (0, n.jsx)("span", {
                                        children: "File",
                                      }),
                                      (0, n.jsx)("span", {
                                        children: "Edit",
                                      }),
                                      (0, n.jsx)("span", {
                                        children: "View",
                                      }),
                                      (0, n.jsx)("span", {
                                        children: "Help",
                                      }),
                                    ],
                                  }),
                                  (0, n.jsxs)("div", {
                                    className: l().cakeContent,
                                    children: [
                                      (0, n.jsx)("div", {
                                        className: l().cakeTitle,
                                        children: B
                                          ? "AYO TIUP DULU!"
                                          : "YEAY!",
                                      }),
                                      (0, n.jsxs)("div", {
                                        className: l().cakeImage,
                                        children: [
                                          B &&
                                            (0, n.jsx)("div", {
                                              className: l().candleFlame,
                                            }),
                                          I &&
                                            (0, n.jsx)("div", {
                                              className: ""
                                                .concat(l().blowEffect, " ")
                                                .concat(l().active),
                                            }),
                                        ],
                                      }),
                                      (0, n.jsx)("div", {
                                        className: l().cakeMessage,
                                        children: B
                                          ? (0, n.jsx)("p", {
                                              children:
                                                "jangan lupa berdoa duluuu...",
                                            })
                                          : (0, n.jsxs)("p", {
                                              children: [
                                                "Happy Birthday!!✨",
                                                (0, n.jsx)("br", {}),
                                                "NEXT BUKA GALLERY NYA YAA!",
                                              ],
                                            }),
                                      }),
                                      (0, n.jsx)("div", {
                                        className: l().cakeButtons,
                                        children: B
                                          ? (0, n.jsxs)("button", {
                                              className: l().blowButton,
                                              onClick: () => {
                                                E(!0),
                                                  setTimeout(() => {
                                                    P(!1), E(!1);
                                                  }, 1e3);
                                              },
                                              children: [
                                                (0, n.jsx)("span", {
                                                  children: "\uD83C\uDF2C️",
                                                }),
                                                " Tiup Lilin",
                                              ],
                                            })
                                          : (0, n.jsxs)("button", {
                                              className: l().relightButton,
                                              onClick: (e) => {
                                                e.stopPropagation(),
                                                  em("close", "cake");
                                              },
                                              children: [
                                                (0, n.jsx)("span", {
                                                  children: "❌",
                                                }),
                                                " Close",
                                              ],
                                            }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            e &&
                              !x.card &&
                              (0, n.jsxs)("div", {
                                className: ""
                                  .concat(l().birthdayCard, " ")
                                  .concat("card" === p ? l().activeWindow : ""),
                                style: {
                                  top: "".concat(et.card.y, "px"),
                                  left: "".concat(et.card.x, "px"),
                                },
                                onClick: () => h("card"),
                                children: [
                                  (0, n.jsxs)("div", {
                                    className: l().cardHeader,
                                    onMouseDown: (e) => e_(e, "card"),
                                    children: [
                                      (0, n.jsx)("div", {
                                        className: l().cardTitle,
                                        children: "HAPPY_BIRTHDAY.TXT",
                                      }),
                                      (0, n.jsxs)("div", {
                                        className: l().cardControls,
                                        children: [
                                          (0, n.jsx)("span", {
                                            className: l().minimize,
                                            onClick: (e) => {
                                              e.stopPropagation(),
                                                em("minimize", "card");
                                            },
                                            children: "_",
                                          }),
                                          (0, n.jsx)("span", {
                                            className: l().maximize,
                                            onClick: (e) => {
                                              e.stopPropagation(),
                                                em("maximize", "card");
                                            },
                                            children: "□",
                                          }),
                                          (0, n.jsx)("span", {
                                            className: l().close,
                                            onClick: (e) => {
                                              e.stopPropagation(),
                                                em("close", "card");
                                            },
                                            children: "✕",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, n.jsxs)("div", {
                                    className: l().cardToolbar,
                                    children: [
                                      (0, n.jsx)("span", {
                                        children: "File",
                                      }),
                                      (0, n.jsx)("span", {
                                        children: "Edit",
                                      }),
                                      (0, n.jsx)("span", {
                                        children: "View",
                                      }),
                                      (0, n.jsx)("span", {
                                        children: "Help",
                                      }),
                                    ],
                                  }),
                                  (0, n.jsxs)("div", {
                                    className: l().cardContent,
                                    children: [
                                      (0, n.jsxs)("div", {
                                        className: l().birthdayTitle,
                                        children: [
                                          (0, n.jsxs)("div", {
                                            className: l().retroBanner,
                                            children: [
                                              (0, n.jsx)("span", {
                                                children: "❤️",
                                              }),
                                              " HAPPY BIRTHDAY ",
                                              (0, n.jsx)("span", {
                                                children: "❤️",
                                              }),
                                            ],
                                          }),
                                          (0, n.jsx)("h1", {
                                            className: l().birthdayHeading,
                                            children:
                                              "SELAMAT ULANG TAHUN KE-24",
                                          }),
                                        ],
                                      }),
                                      (0, n.jsxs)("div", {
                                        className: l().messageBox,
                                        children: [
                                          (0, n.jsx)("div", {
                                            className: l().messageBoxHeader,
                                            children: (0, n.jsx)("span", {
                                              children: "MESSAGE.TXT",
                                            }),
                                          }),
                                          (0, n.jsxs)("div", {
                                            className: l().messageBoxContent,
                                            children: [
                                              (0, n.jsx)("p", {
                                                children: ec,
                                              }),
                                              (0, n.jsxs)("div", {
                                                className: l().retroNote,
                                                children: [
                                                  (0, n.jsx)("p", {
                                                    children:
                                                      "╔═══════════════════════════════════════╗",
                                                  }),
                                                  (0, n.jsx)("p", {
                                                    children:
                                                      "║  next, play lagu sama tiup lilin duluuu!  ║",
                                                  }),
                                                  (0, n.jsx)("p", {
                                                    children:
                                                      "╚═══════════════════════════════════════╝",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, n.jsx)("div", {
                                            className: l().messageBoxSender,
                                            children: (0, n.jsxs)("p", {
                                              children: ["Dari: ", ei],
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, n.jsxs)("div", {
                                        className: l().pixelArt,
                                        children: [
                                          (0, n.jsx)("div", {
                                            className: l().cake,
                                          }),
                                          (0, n.jsx)("div", {
                                            className: l().balloon1,
                                          }),
                                          (0, n.jsx)("div", {
                                            className: l().balloon2,
                                          }),
                                          (0, n.jsx)("div", {
                                            className: l().gift,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            j &&
                              !x.music &&
                              (0, n.jsxs)("div", {
                                className: ""
                                  .concat(l().musicPlayer, " ")
                                  .concat(
                                    "music" === p ? l().activeWindow : ""
                                  ),
                                style: {
                                  top: "".concat(et.music.y, "px"),
                                  left: "".concat(et.music.x, "px"),
                                },
                                onClick: () => h("music"),
                                children: [
                                  (0, n.jsxs)("div", {
                                    className: l().cardHeader,
                                    onMouseDown: (e) => e_(e, "music"),
                                    children: [
                                      (0, n.jsx)("div", {
                                        className: l().cardTitle,
                                        children: "MUSIC_PLAYER.EXE",
                                      }),
                                      (0, n.jsxs)("div", {
                                        className: l().cardControls,
                                        children: [
                                          (0, n.jsx)("span", {
                                            className: l().minimize,
                                            onClick: (e) => {
                                              e.stopPropagation(),
                                                em("minimize", "music");
                                            },
                                            children: "_",
                                          }),
                                          (0, n.jsx)("span", {
                                            className: l().maximize,
                                            onClick: (e) => {
                                              e.stopPropagation(),
                                                em("maximize", "music");
                                            },
                                            children: "□",
                                          }),
                                          (0, n.jsx)("span", {
                                            className: l().close,
                                            onClick: (e) => {
                                              e.stopPropagation(),
                                                em("close", "music");
                                            },
                                            children: "✕",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, n.jsxs)("div", {
                                    className: l().playerContent,
                                    children: [
                                      (0, n.jsxs)("div", {
                                        className: l().trackInfo,
                                        children: [
                                          (0, n.jsx)("div", {
                                            className: l().trackTitle,
                                            children: "Play ini yaa.mp3",
                                          }),
                                          (0, n.jsx)("div", {
                                            className: l().trackArtist,
                                            children: "Classic Hits",
                                          }),
                                        ],
                                      }),
                                      (0, n.jsxs)("div", {
                                        className: l().playerWrapper,
                                        children: [
                                          (0, n.jsx)("div", {
                                            className: l().playerControls,
                                            children: (0, n.jsx)("button", {
                                              className: l().playerButton,
                                              onClick: (e) => {
                                                e.stopPropagation(), ep();
                                              },
                                              children: w ? "⏸️" : "▶️",
                                            }),
                                          }),
                                          (0, n.jsxs)("div", {
                                            className: l().timeInfo,
                                            children: [
                                              (0, n.jsx)("span", {
                                                children: ex(J),
                                              }),
                                              (0, n.jsx)("span", {
                                                children: ex(K),
                                              }),
                                            ],
                                          }),
                                          (0, n.jsx)("div", {
                                            className: l().progressBar,
                                            onClick: (e) => {
                                              e.stopPropagation(), eg(e);
                                            },
                                            children: (0, n.jsx)("div", {
                                              className: l().progress,
                                              style: {
                                                width:
                                                  K > 0
                                                    ? "".concat(
                                                        (J / K) * 100,
                                                        "%"
                                                      )
                                                    : "0%",
                                              },
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, n.jsxs)("div", {
                                        className: l().volumeControl,
                                        children: [
                                          (0, n.jsx)("span", {
                                            children: "\uD83D\uDD0A",
                                          }),
                                          (0, n.jsx)("input", {
                                            type: "range",
                                            min: "0",
                                            max: "100",
                                            value: $,
                                            onChange: (e) => {
                                              let a = parseInt(e.target.value);
                                              ee(a),
                                                ea.current &&
                                                  (ea.current.volume = a / 100);
                                            },
                                            onClick: (e) => e.stopPropagation(),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            y &&
                              !x.photo &&
                              (0, n.jsxs)("div", {
                                className: ""
                                  .concat(l().photoViewer, " ")
                                  .concat(
                                    "photo" === p ? l().activeWindow : ""
                                  ),
                                style: {
                                  top: "".concat(et.photo.y, "px"),
                                  left: "".concat(et.photo.x, "px"),
                                  width: "480px",
                                  height: "auto",
                                },
                                onClick: () => h("photo"),
                                children: [
                                  (0, n.jsxs)("div", {
                                    className: l().cardHeader,
                                    onMouseDown: (e) => e_(e, "photo"),
                                    children: [
                                      (0, n.jsx)("div", {
                                        className: l().cardTitle,
                                        children: "GALLERY VIEWER",
                                      }),
                                      (0, n.jsxs)("div", {
                                        className: l().cardControls,
                                        children: [
                                          (0, n.jsx)("span", {
                                            className: l().minimize,
                                            onClick: (e) => {
                                              e.stopPropagation(),
                                                em("minimize", "photo");
                                            },
                                            children: "_",
                                          }),
                                          (0, n.jsx)("span", {
                                            className: l().maximize,
                                            onClick: (e) => {
                                              e.stopPropagation(),
                                                em("maximize", "photo");
                                            },
                                            children: "□",
                                          }),
                                          (0, n.jsx)("span", {
                                            className: l().close,
                                            onClick: (e) => {
                                              e.stopPropagation(),
                                                em("close", "photo");
                                            },
                                            children: "✕",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, n.jsxs)("div", {
                                    className: l().photoContent,
                                    children: [
                                      (0, n.jsx)("div", {
                                        className: l().photo,
                                        children: (0, n.jsxs)("div", {
                                          className: l().gallerySlideshow,
                                          style: {
                                            paddingTop: "25px",
                                          },
                                          children: [
                                            (0, n.jsxs)("div", {
                                              className: l().slideCounter,
                                              children: [F + 1, "/", X.length],
                                            }),
                                            A
                                              ? (0, n.jsxs)(
                                                  "div",
                                                  {
                                                    className: ""
                                                      .concat(
                                                        l().videoContainer,
                                                        " "
                                                      )
                                                      .concat(
                                                        W ? l().fullscreen : ""
                                                      ),
                                                    children: [
                                                      (0, n.jsx)("button", {
                                                        className:
                                                          l()
                                                            .closeFullscreenBtn,
                                                        onClick: (e) => {
                                                          e.stopPropagation(),
                                                            q(!W);
                                                        },
                                                        children: "Tutup [X]",
                                                      }),
                                                      W &&
                                                        (0, n.jsx)("div", {
                                                          className:
                                                            l().keyboardHint,
                                                          children:
                                                            "Tekan ESC atau klik tombol Tutup untuk keluar dari mode fullscreen",
                                                        }),
                                                      (0, n.jsx)("div", {
                                                        className:
                                                          l().videoFallback,
                                                        style: {
                                                          fontSize: "24px",
                                                          color: "white",
                                                          display: "flex",
                                                          flexDirection:
                                                            "column",
                                                          justifyContent:
                                                            "center",
                                                          alignItems: "center",
                                                          height: "100%",
                                                          backgroundColor:
                                                            "black",
                                                          padding: "0",
                                                          textAlign: "center",
                                                        },
                                                        children: (0, n.jsx)(
                                                          "iframe",
                                                          {
                                                            src: "/gallery/video1.mp4",
                                                            style: {
                                                              width: "100%",
                                                              height: "100%",
                                                              border: "none",
                                                              backgroundColor:
                                                                "#000",
                                                            },
                                                            allow:
                                                              "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                                            allowFullScreen: !0,
                                                          }
                                                        ),
                                                      }),
                                                    ],
                                                  },
                                                  "video-container"
                                                )
                                              : (0, n.jsxs)(
                                                  "div",
                                                  {
                                                    className: l().polaroid,
                                                    children: [
                                                      (0, n.jsx)("div", {
                                                        className:
                                                          l().slideImage,
                                                        style: {
                                                          backgroundImage:
                                                            "url('".concat(
                                                              X[F].src,
                                                              "')"
                                                            ),
                                                          backgroundSize:
                                                            "cover",
                                                          backgroundPosition:
                                                            "center",
                                                        },
                                                        onError: (e) => {
                                                          let a = e.target;
                                                          (a.style.backgroundImage =
                                                            "none"),
                                                            (a.innerText =
                                                              X[F].fallback),
                                                            (a.style.fontSize =
                                                              "80px"),
                                                            (a.style.display =
                                                              "flex"),
                                                            (a.style.justifyContent =
                                                              "center"),
                                                            (a.style.alignItems =
                                                              "center");
                                                        },
                                                      }),
                                                      (0, n.jsx)("p", {
                                                        children: X[F].caption,
                                                      }),
                                                    ],
                                                  },
                                                  "polaroid-".concat(F)
                                                ),
                                          ],
                                        }),
                                      }),
                                      (0, n.jsxs)("div", {
                                        className: l().photoToolbar,
                                        children: [
                                          (0, n.jsx)("button", {
                                            className: l().photoButton,
                                            onClick: (e) => {
                                              e.stopPropagation(), er();
                                            },
                                            children: "< Sebelumnya",
                                          }),
                                          (0, n.jsx)("button", {
                                            className: l().photoButton,
                                            onClick: (e) => {
                                              e.stopPropagation(), el();
                                            },
                                            children: "Berikutnya >",
                                          }),
                                          F === X.length - 1 &&
                                            (0, n.jsxs)(n.Fragment, {
                                              children: [
                                                (0, n.jsx)("button", {
                                                  className: l().photoButton,
                                                  onClick: (e) => {
                                                    e.stopPropagation(),
                                                      z(0),
                                                      L(!1),
                                                      q(!1);
                                                  },
                                                  children: "Lihat Foto",
                                                }),
                                                (0, n.jsx)("button", {
                                                  className: l().photoButton,
                                                  onClick: (e) => {
                                                    e.stopPropagation();
                                                    let a =
                                                      document.querySelector(
                                                        "iframe"
                                                      );
                                                    a &&
                                                      (a.src =
                                                        "/gallery/video1.mp4?t=" +
                                                        new Date().getTime() +
                                                        "&autoplay=1");
                                                  },
                                                  children: "Play Video",
                                                }),
                                              ],
                                            }),
                                          F < X.length - 1 &&
                                            (0, n.jsx)("button", {
                                              className: l().photoButton,
                                              onClick: (e) => {
                                                e.stopPropagation(),
                                                  z(X.length - 1),
                                                  L(!0),
                                                  setTimeout(() => {
                                                    let e =
                                                      document.querySelector(
                                                        ".".concat(
                                                          l().slideVideo
                                                        )
                                                      );
                                                    e &&
                                                      (e.load(),
                                                      e.play().catch((e) => {
                                                        console.error(
                                                          "Gagal memutar video:",
                                                          e
                                                        );
                                                      }));
                                                  }, 300);
                                              },
                                              children: "Lihat Video",
                                            }),
                                          (0, n.jsx)("button", {
                                            className: l().photoButton,
                                            onClick: (e) => {
                                              e.stopPropagation(),
                                                alert(
                                                  "Gausah aneh-aneh dah cel -_-"
                                                );
                                            },
                                            children: "Cetak",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            v &&
                              !x.notepad &&
                              (0, n.jsxs)("div", {
                                className: ""
                                  .concat(l().notepad, " ")
                                  .concat(
                                    "notepad" === p ? l().activeWindow : ""
                                  ),
                                style: {
                                  top: "".concat(et.notepad.y, "px"),
                                  left: "".concat(et.notepad.x, "px"),
                                },
                                onClick: () => h("notepad"),
                                children: [
                                  (0, n.jsxs)("div", {
                                    className: l().cardHeader,
                                    onMouseDown: (e) => e_(e, "notepad"),
                                    children: [
                                      (0, n.jsx)("div", {
                                        className: l().cardTitle,
                                        children: "NOTEPAD.EXE",
                                      }),
                                      (0, n.jsxs)("div", {
                                        className: l().cardControls,
                                        children: [
                                          (0, n.jsx)("span", {
                                            className: l().minimize,
                                            onClick: (e) => {
                                              e.stopPropagation(),
                                                em("minimize", "notepad");
                                            },
                                            children: "_",
                                          }),
                                          (0, n.jsx)("span", {
                                            className: l().maximize,
                                            onClick: (e) => {
                                              e.stopPropagation(),
                                                em("maximize", "notepad");
                                            },
                                            children: "□",
                                          }),
                                          (0, n.jsx)("span", {
                                            className: l().close,
                                            onClick: (e) => {
                                              e.stopPropagation(),
                                                em("close", "notepad");
                                            },
                                            children: "✕",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, n.jsxs)("div", {
                                    className: l().cardToolbar,
                                    children: [
                                      (0, n.jsx)("span", {
                                        children: "File",
                                      }),
                                      (0, n.jsx)("span", {
                                        children: "Edit",
                                      }),
                                      (0, n.jsx)("span", {
                                        children: "Format",
                                      }),
                                      (0, n.jsx)("span", {
                                        children: "View",
                                      }),
                                      (0, n.jsx)("span", {
                                        children: "Help",
                                      }),
                                    ],
                                  }),
                                  (0, n.jsx)("div", {
                                    className: l().notepadContent,
                                    children: (0, n.jsx)("textarea", {
                                      className: l().notepadTextarea,
                                      defaultValue:
                                        "Resolusi Tahun Baru:\n\n1. Bersyukur setiap hari\n2. Lebih banyak tersenyum\n3. Mencapai target-target baru\n4. Lebih sering berkumpul dengan keluarga\n5. Menjaga kesehatan dengan baik\n\nSemoga tahun ini menjadi tahun yang penuh berkah!",
                                    }),
                                  }),
                                ],
                              }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className: l().taskbar,
                          children: [
                            (0, n.jsxs)("div", {
                              className: ""
                                .concat(l().startButton, " ")
                                .concat(u ? l().startActive : ""),
                              onClick: () => {
                                _(!u);
                              },
                              children: [
                                (0, n.jsx)("span", {
                                  className: l().windowsIcon,
                                  children: "W",
                                }),
                                (0, n.jsx)("span", {
                                  children: "Start",
                                }),
                              ],
                            }),
                            (0, n.jsxs)("div", {
                              className: l().taskbarPrograms,
                              children: [
                                e &&
                                  (0, n.jsx)("div", {
                                    className: ""
                                      .concat(l().program, " ")
                                      .concat(
                                        x.card || "card" !== p
                                          ? ""
                                          : l().activeProgram
                                      ),
                                    onClick: () => {
                                      g({
                                        ...x,
                                        card: !x.card,
                                      }),
                                        x.card && h("card");
                                    },
                                    children: "\uD83C\uDF82 Kartu Ucapan",
                                  }),
                                b &&
                                  (0, n.jsx)("div", {
                                    className: ""
                                      .concat(l().program, " ")
                                      .concat(
                                        x.cake || "cake" !== p
                                          ? ""
                                          : l().activeProgram
                                      ),
                                    onClick: () => {
                                      g({
                                        ...x,
                                        cake: !x.cake,
                                      }),
                                        x.cake && h("cake");
                                    },
                                    children: "\uD83C\uDF82 Kue Ulang Tahun",
                                  }),
                                v &&
                                  (0, n.jsx)("div", {
                                    className: ""
                                      .concat(l().program, " ")
                                      .concat(
                                        x.notepad || "notepad" !== p
                                          ? ""
                                          : l().activeProgram
                                      ),
                                    onClick: () => {
                                      g({
                                        ...x,
                                        notepad: !x.notepad,
                                      }),
                                        x.notepad && h("notepad");
                                    },
                                    children: "\uD83D\uDCDD Notepad",
                                  }),
                                j &&
                                  (0, n.jsx)("div", {
                                    className: ""
                                      .concat(l().program, " ")
                                      .concat(
                                        x.music || "music" !== p
                                          ? ""
                                          : l().activeProgram
                                      ),
                                    onClick: () => {
                                      g({
                                        ...x,
                                        music: !x.music,
                                      }),
                                        x.music && h("music");
                                    },
                                    children: "\uD83C\uDFB5 Music Player",
                                  }),
                                y &&
                                  (0, n.jsx)("div", {
                                    className: ""
                                      .concat(l().program, " ")
                                      .concat(
                                        x.photo || "photo" !== p
                                          ? ""
                                          : l().activeProgram
                                      ),
                                    onClick: () => {
                                      g({
                                        ...x,
                                        photo: !x.photo,
                                      }),
                                        x.photo && h("photo");
                                    },
                                    children: "\uD83D\uDCF7 Gallery Viewer",
                                  }),
                                (0, n.jsx)("div", {
                                  className: l().program,
                                  onClick: () => eu("party"),
                                  children: "\uD83C\uDF89 Party.exe",
                                }),
                              ],
                            }),
                            (0, n.jsxs)("div", {
                              className: l().taskbarTime,
                              children: [
                                (0, n.jsx)("div", {
                                  className: l().digitalClock,
                                  children: r.toLocaleTimeString("id-ID", {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                    second: "2-digit",
                                    hour12: !1,
                                  }),
                                }),
                                (0, n.jsx)("div", {
                                  className: l().digitalDate,
                                  children: r.toLocaleDateString("id-ID", {
                                    day: "2-digit",
                                    month: "short",
                                    year: "numeric",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
            ],
          })
        );
      }
    },
    5733: (e) => {
      e.exports = {
        main: "Home_main__wWQ_P",
        container: "Home_container__sNFgY",
        windowsBar: "Home_windowsBar__LuDzu",
        windowsLogo: "Home_windowsLogo___Fhf7",
        windowsTitle: "Home_windowsTitle__ejArl",
        windowsControls: "Home_windowsControls__3_byT",
        minimize: "Home_minimize__Vr_51",
        maximize: "Home_maximize__5XH0j",
        close: "Home_close__KQBmI",
        desktop: "Home_desktop__GSFve",
        icons: "Home_icons__xUGN0",
        icon: "Home_icon__BrBWr",
        iconImage: "Home_iconImage__TzgAa",
        iconText: "Home_iconText__CaFmA",
        birthdayCard: "Home_birthdayCard__OSPvN",
        openWindow: "Home_openWindow__6xDmF",
        cardHeader: "Home_cardHeader__Lc64P",
        cardTitle: "Home_cardTitle__TIISp",
        cardControls: "Home_cardControls__I5dqf",
        cardToolbar: "Home_cardToolbar__BkG0D",
        cardContent: "Home_cardContent__wBy2R",
        birthdayTitle: "Home_birthdayTitle__TjrTb",
        retroBanner: "Home_retroBanner__giQNe",
        blinkText: "Home_blinkText__mwQ3x",
        marqueeEffect: "Home_marqueeEffect__xyvwa",
        bounce: "Home_bounce__YHvMT",
        pulse: "Home_pulse__AcFHl",
        birthdayHeading: "Home_birthdayHeading__x9ldb",
        rainbow: "Home_rainbow___hFHh",
        messageBox: "Home_messageBox__Jmq2A",
        messageBoxHeader: "Home_messageBoxHeader__62mDT",
        messageBoxContent: "Home_messageBoxContent__5NzSi",
        messageBoxSender: "Home_messageBoxSender__jZJNZ",
        retroNote: "Home_retroNote__gKGnd",
        blink: "Home_blink__pP6qm",
        pixelArt: "Home_pixelArt__Lk57d",
        cake: "Home_cake__uhhpD",
        balloon1: "Home_balloon1__2xl_f",
        balloon2: "Home_balloon2__kANv7",
        float: "Home_float__lGaOm",
        gift: "Home_gift__7TDer",
        spin: "Home_spin__c0aFo",
        taskbar: "Home_taskbar__KI6T3",
        startButton: "Home_startButton__jAOgs",
        windowsIcon: "Home_windowsIcon__MWCOp",
        taskbarPrograms: "Home_taskbarPrograms__rMXSY",
        program: "Home_program__7uPn3",
        taskbarTime: "Home_taskbarTime__tgOZ9",
        digitalClock: "Home_digitalClock__PhQI6",
        digitalDate: "Home_digitalDate__3kr90",
        loading: "Home_loading__UQr5H",
        loadingText: "Home_loadingText__4G_bv",
        progressBar: "Home_progressBar__vXksx",
        progress: "Home_progress__8Gtz7",
        loadingSubtext: "Home_loadingSubtext__QK17s",
        musicPlayer: "Home_musicPlayer__fGCua",
        photoViewer: "Home_photoViewer__gbJQ7",
        notepad: "Home_notepad__BGcrT",
        cakeWindow: "Home_cakeWindow__xsyX5",
        playerContent: "Home_playerContent__JzKHU",
        trackTitle: "Home_trackTitle__DzJfe",
        trackArtist: "Home_trackArtist__J1Lyt",
        timeInfo: "Home_timeInfo__fn6ja",
        playerButton: "Home_playerButton__WE5cQ",
        photoContent: "Home_photoContent__rdaOi",
        photoButton: "Home_photoButton__e4FMO",
        polaroid: "Home_polaroid__CDgFW",
        slideImage: "Home_slideImage__51XrH",
        cakeTitle: "Home_cakeTitle__zUxJ4",
        cakeImage: "Home_cakeImage__y279N",
        cakeMessage: "Home_cakeMessage__RvTRu",
        blowButton: "Home_blowButton___KF4d",
        relightButton: "Home_relightButton__LYVN5",
        trackInfo: "Home_trackInfo___EkJP",
        playerControls: "Home_playerControls__ts5QW",
        volumeControl: "Home_volumeControl__5YZrX",
        playerWrapper: "Home_playerWrapper__uSV1n",
        activeWindow: "Home_activeWindow__rMzRn",
        startMenu: "Home_startMenu__hzBn1",
        slideUp: "Home_slideUp__9CwTT",
        startMenuHeader: "Home_startMenuHeader__X4nT3",
        startMenuLogo: "Home_startMenuLogo__OA1tf",
        startMenuItems: "Home_startMenuItems__7ORNE",
        startMenuItem: "Home_startMenuItem__yfmD9",
        startMenuSeparator: "Home_startMenuSeparator__NNmM2",
        startActive: "Home_startActive__aRf6J",
        activeProgram: "Home_activeProgram__5nz0d",
        photo: "Home_photo__xhr5U",
        gallerySlideshow: "Home_gallerySlideshow__Cf0Pu",
        slideCounter: "Home_slideCounter__q1JUF",
        slideFromRight: "Home_slideFromRight__gDaTu",
        videoFallback: "Home_videoFallback__Tuibw",
        videoContainer: "Home_videoContainer__NTrt2",
        videoAppear: "Home_videoAppear__ePDOK",
        fullscreen: "Home_fullscreen__1_gM9",
        slideVideo: "Home_slideVideo__d_yDr",
        closeFullscreenBtn: "Home_closeFullscreenBtn__RtqWk",
        photoToolbar: "Home_photoToolbar__4adhx",
        keyboardHint: "Home_keyboardHint__K_VbL",
        fadeInOut: "Home_fadeInOut__yAPOh",
        scanline: "Home_scanline__XxgLz",
        notepadContent: "Home_notepadContent__k_MVb",
        notepadTextarea: "Home_notepadTextarea___L6eT",
        partyBackground: "Home_partyBackground__gt9um",
        shutdown: "Home_shutdown__7VNGK",
        loveMessage: "Home_loveMessage__OBR4_",
        heartbeat: "Home_heartbeat__mSUSZ",
        cakeContent: "Home_cakeContent__nR1w4",
        candleFlame: "Home_candleFlame__szGEn",
        flicker: "Home_flicker__opwX8",
        blowEffect: "Home_blowEffect__maScS",
        active: "Home_active__ohMJ_",
        blow: "Home_blow__nF_dh",
        cakeButtons: "Home_cakeButtons__3H8ad",
        pixelNumber: "Home_pixelNumber__s15mE",
        pixelNumberInner: "Home_pixelNumberInner__PsGSX",
        pixelPulse: "Home_pixelPulse__Bz0ZQ",
        pixelGlitch: "Home_pixelGlitch__lwVfa",
        glitch: "Home_glitch__xOFzj",
        slideFromLeft: "Home_slideFromLeft__Bx9cx",
      };
    },
    6760: (e, a, t) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return t(3757);
        },
      ]);
    },
    8328: (e) => {
      e.exports = {
        shutdown: "Shutdown_shutdown__1YLcF",
        loveMessage: "Shutdown_loveMessage__EQ5Hd",
        heartbeat: "Shutdown_heartbeat__eyH98",
        rainbow: "Shutdown_rainbow__C2quv",
        float: "Shutdown_float__b7r7b",
        progressBar: "Shutdown_progressBar__7e4Q1",
        progress: "Shutdown_progress__pGMnz",
        loading: "Shutdown_loading__elmFT",
      };
    },
    9099: (e, a, t) => {
      e.exports = t(8253);
    },
  },
  (e) => {
    var a = (a) => e((e.s = a));
    e.O(0, [636, 593, 792], () => a(6760)), (_N_E = e.O());
  },
]);

