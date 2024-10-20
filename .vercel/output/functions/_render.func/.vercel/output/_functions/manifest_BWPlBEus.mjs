import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_HSlWf4eV.mjs';
import 'es-module-lexer';
import { d as decodeKey } from './chunks/astro/server_2vNidBdp.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///G:/jessica-portfolio/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.DTIbhfSr.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DrGBh27w.js"},{"type":"external","value":"/_astro/page.DTIbhfSr.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/index.ERRmBQBD.css"},{"type":"inline","content":":root{--cl-orange: 255, 61, 0;--cl-black: 33, 33, 32;--cl-white: 243, 240, 232;--cl-black-90: rgba(var(--cl-black), .9);--cl-black-80: rgba(var(--cl-black), .8);--cl-black-65: rgba(var(--cl-black), .65);--cl-black-50: rgba(var(--cl-black), .5);--cl-black-30: rgba(var(--cl-black), .3);--cl-black-20: rgba(var(--cl-black), .2);--cl-black-15: rgba(var(--cl-black), .15)}.testplace{position:fixed;top:0;left:0;width:100%;height:100vh;z-index:9999;pointer-events:none;user-select:none}.testplace.visible{display:unset}.testplace.hidden{display:none}.testplace-col{background-color:red;opacity:.1;height:100vh}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["G:/jessica-portfolio/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","G:/jessica-portfolio/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","G:/jessica-portfolio/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","G:/jessica-portfolio/node_modules/@astrojs/vercel/dist/image/build-service.js":"chunks/build-service_CEzYIQYR.mjs","\u0000@astrojs-manifest":"manifest_BWPlBEus.mjs","G:/jessica-portfolio/src/module/Home/HomeHero":"_astro/HomeHero.C_q4TN4S.js","G:/jessica-portfolio/src/module/Home/HomeJourney":"_astro/HomeJourney.AmyC-tsn.js","G:/jessica-portfolio/src/module/Home/HomeProject":"_astro/HomeProject.DelYUSQ7.js","G:/jessica-portfolio/src/module/Home/HomeAbout":"_astro/HomeAbout.DIKUKHrz.js","G:/jessica-portfolio/src/components/footer":"_astro/footer.De4p8zbo.js","@/js/main":"_astro/main.DTIVBnC8.js","G:/jessica-portfolio/src/components/theme":"_astro/theme.Dmjl2wJh.js","G:/jessica-portfolio/src/components/gridDebugger":"_astro/gridDebugger.Bx4aVY40.js","@astrojs/react/client.js":"_astro/client.BIGLHmRd.js","/astro/hoisted.js?q=0":"_astro/hoisted.DrGBh27w.js","astro:scripts/page.js":"_astro/page.DTIbhfSr.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/home-hero-1.GNmbFBrs.jpg","/_astro/project-1.Bed-oWgR.jpg","/_astro/project-2.FkSlNJsq.jpg","/_astro/project-4.CT57ktp1.jpg","/_astro/project-3.DsZT2hC6.jpg","/_astro/home-about-1.DrtY9ZDV.jpg","/_astro/index.ERRmBQBD.css","/favicon.svg","/fonts/HelveticaNeueMedium.woff","/fonts/HelveticaNeueMedium.woff2","/fonts/HelveticaNeueRoman.woff","/fonts/HelveticaNeueRoman.woff2","/fonts/index.scss","/_astro/client.BIGLHmRd.js","/_astro/footer.De4p8zbo.js","/_astro/gridDebugger.Bx4aVY40.js","/_astro/hoisted.DrGBh27w.js","/_astro/HomeAbout.DIKUKHrz.js","/_astro/HomeHero.C_q4TN4S.js","/_astro/HomeJourney.AmyC-tsn.js","/_astro/HomeProject.DelYUSQ7.js","/_astro/index.B5gRa0u-.css","/_astro/index.Dajn0SSL.js","/_astro/index.DhYZZe0J.js","/_astro/index.DjKJqAo0.js","/_astro/index.Keh4zhzC.js","/_astro/jsx-runtime.7faW4zRM.js","/_astro/main.DTIVBnC8.js","/_astro/page.DTIbhfSr.js","/_astro/theme.Dmjl2wJh.js","/_astro/page.DTIbhfSr.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"zLYc2jwNCpGJb9SztJjkyeEcM5Jdi2dgoHWmuxKVgfk=","experimentalEnvGetSecretEnabled":false});

export { manifest };
