function y(){}const D=t=>t;function w(t,n){for(const e in n)t[e]=n[e];return t}function E(t){return t()}function F(){return Object.create(null)}function j(t){t.forEach(E)}function v(t){return typeof t=="function"}function M(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function S(t){return Object.keys(t).length===0}function m(t,...n){if(t==null){for(const o of n)o(void 0);return y}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function A(t){let n;return m(t,e=>n=e)(),n}function B(t,n,e){t.$$.on_destroy.push(m(n,e))}function G(t,n,e,o){if(t){const s=x(t,n,e,o);return t[0](s)}}function x(t,n,e,o){return t[1]&&o?w(e.ctx.slice(),t[1](o(n))):e.ctx}function H(t,n,e,o){if(t[2]&&o){const s=t[2](o(e));if(n.dirty===void 0)return s;if(typeof s=="object"){const l=[],_=Math.max(n.dirty.length,s.length);for(let u=0;u<_;u+=1)l[u]=n.dirty[u]|s[u];return l}return n.dirty|s}return n.dirty}function I(t,n,e,o,s,l){if(s){const _=x(n,e,o,l);t.p(_,s)}}function J(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}function K(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function P(t,n){const e={};n=new Set(n);for(const o in t)!n.has(o)&&o[0]!=="$"&&(e[o]=t[o]);return e}function U(t,n,e){return t.set(e),n}function L(t){return t&&v(t.destroy)?t.destroy:y}let f;function d(t){f=t}function i(){if(!f)throw new Error("Function called outside component initialization");return f}function N(t){i().$$.on_mount.push(t)}function Q(t){i().$$.after_update.push(t)}function R(t){i().$$.on_destroy.push(t)}function T(t,n){return i().$$.context.set(t,n),n}function V(t){return i().$$.context.get(t)}function W(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(o=>o.call(this,n))}const a=[],g=[];let c=[];const p=[],k=Promise.resolve();let b=!1;function C(){b||(b=!0,k.then(q))}function X(){return C(),k}function O(t){c.push(t)}function Y(t){p.push(t)}const h=new Set;let r=0;function q(){if(r!==0)return;const t=f;do{try{for(;r<a.length;){const n=a[r];r++,d(n),z(n.$$)}}catch(n){throw a.length=0,r=0,n}for(d(null),a.length=0,r=0;g.length;)g.pop()();for(let n=0;n<c.length;n+=1){const e=c[n];h.has(e)||(h.add(e),e())}c.length=0}while(a.length);for(;p.length;)p.pop()();b=!1,h.clear(),d(t)}function z(t){if(t.fragment!==null){t.update(),j(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function Z(t){const n=[],e=[];c.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),c=n}export{m as A,D as B,F as C,q as D,S as E,Z as F,f as G,d as H,E as I,a as J,C as K,Q as a,g as b,G as c,H as d,B as e,R as f,J as g,A as h,T as i,V as j,P as k,w as l,K as m,y as n,N as o,L as p,W as q,j as r,M as s,X as t,I as u,v,O as w,U as x,Y as y,i as z};
