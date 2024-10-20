import { c as createComponent, r as renderTemplate, a as renderComponent, b as addAttribute, e as renderHead, f as renderSlot, g as createAstro, F as Fragment, u as unescapeHTML } from '../chunks/astro/server_2vNidBdp.mjs';
import 'kleur/colors';
/* empty css                                 */
import { jsxs, jsx } from 'react/jsx-runtime';
import { useEffect, useRef } from 'react';
import 'split-type';
import { $ as $$Image } from '../chunks/_astro_assets_3hCpIGhc.mjs';
import { useGSAP } from '@gsap/react';
export { renderers } from '../renderers.mjs';

function Header({ listMenu, ...props }) {
  return /* @__PURE__ */ jsxs("header", { className: "header", children: [
    /* @__PURE__ */ jsxs("div", { className: "container grid", children: [
      /* @__PURE__ */ jsx("a", { href: ".", className: "header-logo", children: /* @__PURE__ */ jsx("div", { className: "header-logo-txt txt-up txt-med", children: "phgg ng" }) }),
      /* @__PURE__ */ jsx("div", { className: "header-label txt-up txt-med", children: "PORTFOLIO 2024" }),
      /* @__PURE__ */ jsx("div", { className: "header-menu", children: listMenu.map((item, idx) => /* @__PURE__ */ jsx("a", { href: item.link, className: "header-menu-item txt-up txt-med", children: item.name }, idx)) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "line line-bot" })
  ] });
}

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const ListMenu = [
    {
      name: "projects",
      link: "/projects"
    },
    {
      name: "about",
      link: "/about"
    },
    {
      name: "contact",
      link: "/contact"
    }
  ];
  return renderTemplate`${renderComponent($$result, "HeaderComponent", Header, { "listMenu": ListMenu })}`;
}, "G:/jessica-portfolio/src/components/header/header.astro", void 0);

const Footer = ({ Email, Social, ...props }) => {
  useEffect(() => {
  }, []);
  return /* @__PURE__ */ jsx("footer", { className: "footer", children: /* @__PURE__ */ jsxs("div", { className: "container grid", children: [
    /* @__PURE__ */ jsxs("div", { className: "footer-preamble", children: [
      /* @__PURE__ */ jsx("div", { className: "footer-label", children: "(CONTACT)" }),
      /* @__PURE__ */ jsx("div", { className: "footer-desc", children: "I'm here to listen, collaborate, and craft design solutions that resonate." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "footer-mail-wrapper", children: /* @__PURE__ */ jsxs("a", { href: Email, className: "footer-mail h2", children: [
      /* @__PURE__ */ jsx("span", { className: "footer-mail-txt", children: Email }),
      /* @__PURE__ */ jsxs("span", { className: "footer-mail-txt-sm txt txt-18", children: [
        /* @__PURE__ */ jsx("span", { children: "(CLICK TO COPY " }),
        "🌞",
        /* @__PURE__ */ jsx("span", { children: ")" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "footer-social txt-18", children: [
      /* @__PURE__ */ jsx("div", { className: "footer-social-label", children: "(SOCIALS)" }),
      /* @__PURE__ */ jsx("div", { className: "footer-social-list", children: Social.map((item, idx) => /* @__PURE__ */ jsx("a", { href: item.link, className: "footer-social-item txt-up", children: item.name }, idx)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "footer-ft", children: [
      /* @__PURE__ */ jsx("div", { className: "footer-ft-copy txt txt-18 txt-up", children: "©2024 phgg ng" }),
      /* @__PURE__ */ jsxs("div", { className: "footer-ft-recap txt txt-18 txt-up", children: [
        /* @__PURE__ */ jsx("span", { children: "Designed & developed with love from VIETNAM" }),
        " 🥰"
      ] }),
      /* @__PURE__ */ jsx("div", { className: "line line-top" })
    ] })
  ] }) });
};

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Data = {
    Email: "anhphuongnguyen101098@gmail.com",
    Social: [
      {
        name: "LinkedIn",
        link: "asdasdasd"
      },
      {
        name: "Facebook",
        link: "asdasdasd"
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "FooterComponent", Footer, { ...Data, "client:visible": { rootMargin: "100% 0px 100% 0px" }, "client:component-hydration": "visible", "client:component-path": "G:/jessica-portfolio/src/components/footer", "client:component-export": "default" })}`;
}, "G:/jessica-portfolio/src/components/footer/footer.astro", void 0);

const $$Theme = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ThemeComponent", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "G:/jessica-portfolio/src/components/theme", "client:component-export": "default" })}`;
}, "G:/jessica-portfolio/src/components/theme/theme.astro", void 0);

const $$GridDebugger = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "GridDebuggerComponent", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "G:/jessica-portfolio/src/components/gridDebugger", "client:component-export": "default" })}`;
}, "G:/jessica-portfolio/src/components/gridDebugger/gridDebugger.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body>  ${renderComponent($$result, "Theme", $$Theme, {})} ${renderComponent($$result, "Header", $$Header, {})} <main class="main on-load"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} ${renderComponent($$result, "GridDebugger", $$GridDebugger, {})} ${renderComponent($$result, "MainScript", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "@/js/main", "client:component-export": "default" })} </body></html>`;
}, "G:/jessica-portfolio/src/layouts/Layout.astro", void 0);

const HomeHero = ({ HeroImage, ...props }) => {
  return /* @__PURE__ */ jsx("section", { className: "home-hero", "data-theme": "light", children: /* @__PURE__ */ jsxs("div", { className: "container grid", children: [
    /* @__PURE__ */ jsxs("div", { className: "home-hero-top", children: [
      /* @__PURE__ */ jsx("div", { className: "home-hero-label txt-24 txt-up ", children: "(UX/UI DESIGNER)" }),
      /* @__PURE__ */ jsx("div", { className: "home-hero-desc", children: "I explore product with curiosity, ready to create from nothing" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "home-hero-img-wrapper", children: /* @__PURE__ */ jsx("div", { className: "home-hero-img", children: HeroImage }) }),
    /* @__PURE__ */ jsxs("div", { className: "home-hero-title h0", children: [
      "Building from ",
      /* @__PURE__ */ jsx("span", { className: "txt-orange", children: "the ground up" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "home-hero-scroll txt txt-16 txt-up", children: "scroll down" })
  ] }) });
};

const HeroImage = new Proxy({"src":"/_astro/home-hero-1.GNmbFBrs.jpg","width":950,"height":1338,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "G:/jessica-portfolio/src/assets/home-hero-1.jpg";
							}
							
							return target[name];
						}
					});

const $$HomeHero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "HomeHeroComponent", HomeHero, { "client:load": true, "client:component-hydration": "load", "client:component-path": "G:/jessica-portfolio/src/module/Home/HomeHero", "client:component-export": "default" }, { "HeroImage": ($$result2) => renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": HeroImage, "alt": "", "slot": "HeroImage", "class": "img img-fill" })}` })}`;
}, "G:/jessica-portfolio/src/module/Home/HomeHero/HomeHero.astro", void 0);

function HomeJourney({ ...props }) {
  const content = "For me, transitioning to UX/UI was a necessary career shift that I chose to pursue. With two years of experience—though not extensive—it marks the beginning and the progress I've made on this journey.Below are some selected works I've had the opportunity to create over the past two years alongside my beloved colleagues and teammates.";
  const container = useRef();
  useGSAP(() => {
  }, {
    scope: container
  });
  return /* @__PURE__ */ jsx("section", { className: "home-journey", "data-theme": "dark", ref: container, children: /* @__PURE__ */ jsxs("div", { className: "container grid", children: [
    /* @__PURE__ */ jsx("div", { className: "home-journey-line-wrapper" }),
    /* @__PURE__ */ jsx("div", { className: "home-journey-label txt-24 txt-up", children: "(JOURNEY)" }),
    /* @__PURE__ */ jsx("div", { className: "home-journey-content txt-44", children: /* @__PURE__ */ jsx("div", { className: "home-journey-content-inner", children: content }) })
  ] }) });
}

const $$HomeJourney = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "HomeJourneyComponent", HomeJourney, { "client:visible": { rootMargin: "100% 0px 100% 0px" }, "client:component-hydration": "visible", "client:component-path": "G:/jessica-portfolio/src/module/Home/HomeJourney", "client:component-export": "default" })}`;
}, "G:/jessica-portfolio/src/module/Home/HomeJourney/HomeJourney.astro", void 0);

const HomeProject = ({ Project, ...props }) => {
  return /* @__PURE__ */ jsx("section", { className: "home-project", "data-theme": "light", children: /* @__PURE__ */ jsxs("div", { className: "container grid", children: [
    /* @__PURE__ */ jsxs("div", { className: "home-project-heading", children: [
      /* @__PURE__ */ jsx("h1", { className: "home-project-title", children: "Selected projects" }),
      /* @__PURE__ */ jsxs("div", { className: "home-project-count-wrapper", children: [
        /* @__PURE__ */ jsxs("div", { className: "home-project-count", children: [
          Project.length,
          " project"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "home-project-year", children: "(2023-2024)" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "home-project-list", children: Project.map((proj, idx) => /* @__PURE__ */ jsx(ProjectItem, { No: idx, ...proj }, idx)) }),
    /* @__PURE__ */ jsx("div", { className: "line home-project-line" })
  ] }) });
};
const ProjectItem = ({ ...props }) => {
  const { No, name, scope, describe, thumbnail, link } = props;
  return /* @__PURE__ */ jsxs("a", { href: link, className: "project-item", children: [
    /* @__PURE__ */ jsx("div", { className: "project-item-thumb", children: /* @__PURE__ */ jsx("div", { className: "project-item-thumb-inner", children: /* @__PURE__ */ jsx("img", { src: thumbnail.src, alt: thumbnail.alt, width: thumbnail.width, height: thumbnail.height, loading: "lazy", className: "img img-fill" }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "project-item-heading", children: [
      /* @__PURE__ */ jsx("div", { className: "project-item-name txt txt-32", children: name }),
      /* @__PURE__ */ jsxs("div", { className: "project-item-scope", children: [
        "(",
        scope,
        ")"
      ] }),
      /* @__PURE__ */ jsx("div", { className: "project-item-no", children: (No + 1).toString().padStart(2, "0") })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "project-item-desc", children: describe })
  ] });
};

const ProjectImg1 = new Proxy({"src":"/_astro/project-1.Bed-oWgR.jpg","width":1780,"height":1078,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "G:/jessica-portfolio/src/assets/project-1.jpg";
							}
							
							return target[name];
						}
					});

const ProjectImg2 = new Proxy({"src":"/_astro/project-2.FkSlNJsq.jpg","width":1780,"height":1078,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "G:/jessica-portfolio/src/assets/project-2.jpg";
							}
							
							return target[name];
						}
					});

const ProjectImg3 = new Proxy({"src":"/_astro/project-3.DsZT2hC6.jpg","width":1780,"height":1078,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "G:/jessica-portfolio/src/assets/project-3.jpg";
							}
							
							return target[name];
						}
					});

const ProjectImg4 = new Proxy({"src":"/_astro/project-4.CT57ktp1.jpg","width":1780,"height":1078,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "G:/jessica-portfolio/src/assets/project-4.jpg";
							}
							
							return target[name];
						}
					});

const $$HomeProject = createComponent(($$result, $$props, $$slots) => {
  const AllProjects = [
    {
      name: "YBL.AI",
      scope: "AI Copilot, UX/UI designer",
      describe: "YBL.AI is an enterprise-grade AI Copilot designed to assist with a wide range of daily tasks. I participated in the project and developed design from its early stages.",
      thumbnail: ProjectImg1,
      link: "abc"
    },
    {
      name: "Expense Management",
      scope: "UX case study, leader",
      describe: "Expense management was one of the key topics in a series of innovation solution projects for ZaloPay during the UX Foundation course. I took on the role of team leader and developed the solutions following the design thinking process.",
      thumbnail: ProjectImg2,
      link: "abc"
    },
    {
      name: "Dekanta",
      scope: "Website, UI designer",
      describe: "This is a website project I participated in as a UI designer, where I was responsible for redesigning the website for a Japanese client in the Japanese liquor industry.",
      thumbnail: ProjectImg3,
      link: "abc"
    },
    {
      name: "CashX",
      scope: "Website, UI designer",
      describe: "This project involved redesigning an investment website for a U.S. client, where I served as the UI designer. I developed the UI following the Art Director's guidance and collaborated with the team to execute the design.",
      thumbnail: ProjectImg4,
      link: "abc"
    }
  ];
  return renderTemplate`${renderComponent($$result, "HomeProjectComponent", HomeProject, { "Project": AllProjects, "client:visible": { rootMargin: "100% 0px 100% 0px" }, "client:component-hydration": "visible", "client:component-path": "G:/jessica-portfolio/src/module/Home/HomeProject", "client:component-export": "default" })}`;
}, "G:/jessica-portfolio/src/module/Home/HomeProject/HomeProject.astro", void 0);

const HomeAbout = ({ ...props }) => {
  useEffect(() => {
  }, []);
  return /* @__PURE__ */ jsx("section", { className: "home-about", "data-theme": "light", children: /* @__PURE__ */ jsxs("div", { className: "container grid", children: [
    /* @__PURE__ */ jsx("h1", { className: "home-about-title", children: props.Title }),
    /* @__PURE__ */ jsxs("div", { className: "home-about-preamble", children: [
      /* @__PURE__ */ jsxs("div", { className: "home-about-preamble-label", children: [
        "(",
        props.PreambleLabel,
        ")"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "home-about-preamble-content", children: [
        /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("strong", { children: "In 2022, I discovered UX/UI and was captivated by how designers create user-centered experiences. From that moment, I knew this was the path I wanted to follow." }) }),
        /* @__PURE__ */ jsx("p", { children: "Over the past two years, I've worked at two agency companies, contributing to real-world projects across websites, web apps, and mobile apps. As a UX/UI designer, I handled various tasks to bring designs to life for clients, including creating user flows, conducting research, wireframing, and developing UI concepts." }),
        /* @__PURE__ */ jsx("p", { children: "Off work, I learn and read new things, love cooking and relax at home." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "home-about-experience", children: [
      /* @__PURE__ */ jsxs("div", { className: "home-about-experience-label", children: [
        "(",
        props.ExpLabel,
        ")"
      ] }),
      /* @__PURE__ */ jsx("div", { className: "home-about-experience-list", children: props.ExpList.map((item, idx) => /* @__PURE__ */ jsxs("div", { className: "home-about-experience-item", children: [
        /* @__PURE__ */ jsxs("div", { className: "home-about-experience-item-name_role txt-med", children: [
          /* @__PURE__ */ jsx("div", { className: "home-about-experience-item-name", children: item.name }),
          /* @__PURE__ */ jsx("div", { className: "home-about-experience-item-role", children: item.role })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "home-about-experience-item-location_milestone txt txt-18", children: [
          /* @__PURE__ */ jsx("div", { className: "home-about-experience-item-location", children: item.location }),
          /* @__PURE__ */ jsx("div", { className: "home-about-experience-item-milestone", children: item.milestone })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "line line-bot" }),
        idx === 0 && /* @__PURE__ */ jsx("div", { className: "line line-top" })
      ] }, item.name)) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "home-about-avatar", children: /* @__PURE__ */ jsxs("div", { className: "home-about-avatar-sticky", children: [
      /* @__PURE__ */ jsx("div", { className: "home-about-avatar-inner", children: props.Avatar }),
      /* @__PURE__ */ jsxs("a", { href: ".", target: "__blank", className: "home-about-resume txt-med", children: [
        /* @__PURE__ */ jsx("div", { className: "txt", children: "MY RESUME" }),
        /* @__PURE__ */ jsxs("div", { className: "ic ic-24", children: [
          /* @__PURE__ */ jsx("div", { className: "ic-inner", children: props.ArrUpRight }),
          /* @__PURE__ */ jsx("div", { className: "ic-inner", children: props.ArrUpRight })
        ] })
      ] })
    ] }) })
  ] }) });
};

const ImgAvatar = new Proxy({"src":"/_astro/home-about-1.DrtY9ZDV.jpg","width":1000,"height":946,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "G:/jessica-portfolio/src/assets/home-about-1.jpg";
							}
							
							return target[name];
						}
					});

const ArrUpRight = "<svg width=\"100% \" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M19.6339 5.36612C20.122 5.85427 20.122 6.64573 19.6339 7.13388L7.13388 19.6339C6.64573 20.122 5.85427 20.122 5.36612 19.6339C4.87796 19.1457 4.87796 18.3543 5.36612 17.8661L17.8661 5.36612C18.3543 4.87796 19.1457 4.87796 19.6339 5.36612Z\" fill=\"currentColor\"/>\r\n    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5 6.25C5 5.55964 5.55964 5 6.25 5H18.75C19.4404 5 20 5.55964 20 6.25V18.75C20 19.4404 19.4404 20 18.75 20C18.0596 20 17.5 19.4404 17.5 18.75V7.5H6.25C5.55964 7.5 5 6.94036 5 6.25Z\" fill=\"currentColor\"/>\r\n</svg>\r\n";

const $$HomeAbout = createComponent(($$result, $$props, $$slots) => {
  const Title = "A little bit about me";
  const PreambleLabel = "WELL,...";
  const ExpLabel = "EXPERIENCE";
  const ExpList = [
    {
      name: "Bearplus Studio",
      role: "UX/UI designer",
      location: "Ho Chi Minh, VN",
      milestone: "Mar, 2023 - Sep, 2024"
    },
    {
      name: "Capi Agency",
      role: "UX/UI designer",
      location: "Ha Noi, VN",
      milestone: "Aug, 2022 - Jan, 2023"
    }
  ];
  return renderTemplate`${renderComponent($$result, "HomeAboutComponent", HomeAbout, { "Title": Title, "PreambleLabel": PreambleLabel, "ExpLabel": ExpLabel, "ExpList": ExpList, "client:visible": { rootMargin: "100% 0px 100% 0px" }, "client:component-hydration": "visible", "client:component-path": "G:/jessica-portfolio/src/module/Home/HomeAbout", "client:component-export": "default" }, { "ArrUpRight": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "ArrUpRight" }, { "default": ($$result3) => renderTemplate`${unescapeHTML(ArrUpRight)}` })}`, "Avatar": ($$result2) => renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": ImgAvatar, "alt": "", "class": "img img-fill", "slot": "Avatar" })}` })}`;
}, "G:/jessica-portfolio/src/module/Home/HomeAbout/HomeAbout.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HomeHero", $$HomeHero, {})} ${renderComponent($$result2, "HomeJourney", $$HomeJourney, {})} ${renderComponent($$result2, "HomeProject", $$HomeProject, {})} ${renderComponent($$result2, "HomeAbout", $$HomeAbout, {})} ` })}`;
}, "G:/jessica-portfolio/src/pages/index.astro", void 0);

const $$file = "G:/jessica-portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
