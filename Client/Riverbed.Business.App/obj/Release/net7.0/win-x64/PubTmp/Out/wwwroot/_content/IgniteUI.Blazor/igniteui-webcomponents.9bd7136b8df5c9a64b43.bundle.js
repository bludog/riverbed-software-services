"use strict";(this.webpackChunkInfragisticsBlazor=this.webpackChunkInfragisticsBlazor||[]).push([[207],{2084:(e,t,a)=>{a.r(t),a.d(t,{DateRangeType:()=>pe,IgcAccordionComponent:()=>W,IgcAvatarComponent:()=>w,IgcBadgeComponent:()=>Q,IgcButtonComponent:()=>ce,IgcCalendarComponent:()=>qe,IgcCardActionsComponent:()=>rt,IgcCardComponent:()=>ft,IgcCardContentComponent:()=>nt,IgcCardHeaderComponent:()=>pt,IgcCardMediaComponent:()=>vt,IgcCheckboxComponent:()=>Mt,IgcChipComponent:()=>qt,IgcCircularGradientComponent:()=>Lt,IgcCircularProgressComponent:()=>Xt,IgcDateTimeInputComponent:()=>ba,IgcDialogComponent:()=>za,IgcDropdownComponent:()=>Ja,IgcDropdownGroupComponent:()=>La,IgcDropdownHeaderComponent:()=>Na,IgcDropdownItemComponent:()=>Ga,IgcExpansionPanelComponent:()=>U,IgcFormComponent:()=>Cr,IgcIconButtonComponent:()=>xr,IgcIconComponent:()=>X,IgcInputComponent:()=>tr,IgcLinearProgressComponent:()=>Er,IgcListComponent:()=>Ur,IgcListHeaderComponent:()=>Fr,IgcListItemComponent:()=>Nr,IgcMaskInputComponent:()=>Wr,IgcNavDrawerComponent:()=>ci,IgcNavDrawerHeaderItemComponent:()=>ei,IgcNavDrawerItemComponent:()=>si,IgcNavbarComponent:()=>vi,IgcRadioComponent:()=>Ci,IgcRadioGroupComponent:()=>Si,IgcRangeSliderComponent:()=>qi,IgcRatingComponent:()=>Fi,IgcRatingSymbolComponent:()=>Vi,IgcRippleComponent:()=>ji,IgcSelectComponent:()=>br,IgcSelectGroupComponent:()=>rr,IgcSelectHeaderComponent:()=>ir,IgcSelectItemComponent:()=>sr,IgcSliderComponent:()=>io,IgcSliderLabelComponent:()=>Ui,IgcSnackbarComponent:()=>ao,IgcSwitchComponent:()=>Xo,IgcTabComponent:()=>yo,IgcTabPanelComponent:()=>ko,IgcTabsComponent:()=>Do,IgcToastComponent:()=>To,IgcTreeComponent:()=>as,IgcTreeItemComponent:()=>Jo,configureTheme:()=>d,defineAllComponents:()=>is,defineComponents:()=>x,registerIcon:()=>F,registerIconFromText:()=>L});var r=a(40182),i=a(45112),o=a(68942),s=a(13113);const n="igc-change-theme";let l;function c(e){return["bootstrap","material","indigo","fluent"].includes(e)}const g=()=>{if(!l){const[e,t]=Object.entries(((e,t=document.body,a="")=>{const r=window.getComputedStyle(t,a),i={};return e.forEach((e=>{const t=r.getPropertyValue(e);t&&(i[(e=>e.replace("--","").replace(/-./g,(e=>e.toUpperCase()[1])))(e)]=t.trim())})),i})(((e=document.styleSheets)=>{const t=[];return Array.from(e).forEach((e=>{try{Array.from(e.cssRules).forEach((e=>{e&&e.style&&Array.from(e.style).forEach((e=>{e.startsWith("--")&&-1==t.indexOf(e)&&t.push(e)}))}))}catch(e){}})),t})(),document.documentElement)).find((([e])=>"igTheme"===e))||[];l=t&&c(t)?t:"bootstrap"}return l},d=e=>{var t;c(e)&&(l=e),t={theme:l},window.dispatchEvent(new CustomEvent(n,{detail:t}))};class h{constructor(e,t){this.__themingEventHandler=()=>{this.adoptStyles(),this.host.requestUpdate()},this.host=e,this.themes=t}hostConnected(){this.adoptStyles(),window.addEventListener(n,this.__themingEventHandler)}hostDisconnected(){window.removeEventListener(n,this.__themingEventHandler)}adoptStyles(){this.theme=g();const e=this.host.constructor,t=window.ShadowRoot&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;let a=r.iv``;const[i]=Object.entries(this.themes).filter((([e])=>e===this.theme));if(i){const[e,t]=i;a=t}t||[...this.host.renderRoot.querySelectorAll("style")].slice(1).forEach((e=>e.remove())),(0,r.ec)(this.host.shadowRoot,[...e.elementStyles,a])}}function p(e){return t=>(t.addInitializer((t=>{const a=((e,t)=>{const a=new h(e,t);return e.addController(a),a})(t,e);"themeAdopted"in t&&t.themeAdopted(a)})),t)}function b(e,t){return(a,r)=>{const{willUpdate:i}=a;t=Object.assign({waitUntilFirstUpdate:!1},t),a.willUpdate=function(a){if(i.call(this,a),a.has(e)){const i=a.get(e),o=this[e];i!==o&&((null==t?void 0:t.waitUntilFirstUpdate)&&!this.hasUpdated||this[r].call(this,i,o))}}}}const v=e=>{class t extends e{constructor(){super(...arguments),this.size="large"}}return function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);o>3&&s&&Object.defineProperty(t,a,s)}([(0,i.Cb)({reflect:!0})],t.prototype,"size",void 0),t},m=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */
:host {
  --size: max(var(--is-large, 1) * 5.5rem, var(--is-medium, 1) * 4rem, var(--is-small, 1) * 2.5rem);
  display: inline-block;
}

[part=base] {
  position: relative;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
  background: hsla(var(--ig-gray-400), var(--ig-gray-a));
  border-radius: 0;
  outline-style: none;
  -ms-flex-negative: 0;
      flex-shrink: 0;
  overflow: hidden;
  font-family: var(--ig-font-family);
  width: var(--size);
  height: var(--size);
}
[part=base] [part=initials] {
  font-size: calc(var(--size) / 2);
  line-height: calc(var(--size) / 2);
}

img {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background-color: inherit;
  -o-object-fit: cover;
     object-fit: cover;
}

[part=initials] {
  text-transform: uppercase;
}

:host([size=large]) {
  --component-size: var(--ig-size, var(--ig-size-large));
}

:host([size=medium]) {
  --component-size: var(--ig-size, var(--ig-size-medium));
}

:host([size=small]) {
  --component-size: var(--ig-size, var(--ig-size-small));
}

:host([shape=rounded]) [part=base] {
  border-radius: 0.5rem;
}

:host([shape=circle]) [part=base] {
  border-radius: calc(var(--size) / 2);
}`,u=r.iv`/* stylelint-disable max-line-length */
:host([shape=square]) [part=base],
:host([shape=rounded]) [part=base] {
  border-radius: 0.25rem;
}`;var f=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};let y=class extends(v(r.oi)){constructor(){super(),this.hasError=!1,this.shape="square",this.size="small"}get classes(){const{size:e,shape:t}=this;return{circle:"circle"===t,rounded:"rounded"===t,square:"square"===t,small:"small"===e,medium:"medium"===e,large:"large"===e}}handleErrorState(){this.hasError=!1}render(){return r.dy`
      <div
        part="base"
        role="img"
        aria-label="avatar"
        aria-roledescription=${this.size+" "+this.shape}
        class=${(0,o.$)(this.classes)}
      >
        ${this.initials?r.dy`<span part="initials">${this.initials}</span>`:r.dy` <slot></slot> `}
        ${this.src&&!this.hasError?r.dy`
              <img
                part="image"
                alt=${(0,s.o)(this.alt)}
                src=${(0,s.o)(this.src)}
                @error="${()=>this.hasError=!0}"
              />
            `:""}
      </div>
    `}};y.tagName="igc-avatar",y.styles=m,f([(0,i.Cb)()],y.prototype,"src",void 0),f([(0,i.SB)()],y.prototype,"hasError",void 0),f([(0,i.Cb)()],y.prototype,"alt",void 0),f([(0,i.Cb)()],y.prototype,"initials",void 0),f([(0,i.Cb)({reflect:!0})],y.prototype,"shape",void 0),f([b("src")],y.prototype,"handleErrorState",null),y=f([p({bootstrap:u})],y);const w=y,k=r.iv`/* stylelint-disable max-line-length */
:host ::slotted(igc-expansion-panel) {
  --lines-clamped: 4;
}
:host ::slotted(igc-expansion-panel[open]) {
  margin: 0.5rem 0;
}
:host ::slotted(igc-expansion-panel:first-of-type) {
  margin-top: 0;
}
:host ::slotted(igc-expansion-panel:last-of-type) {
  margin-bottom: 0;
}`,x=(...e)=>{for(const t of e){const e=t.tagName;e&&!window.customElements.get(e)&&window.customElements.define(e,t)}};function z(e){return class extends e{addEventListener(e,t,a){super.addEventListener(e,t,a)}removeEventListener(e,t,a){super.removeEventListener(e,t,a)}emitEvent(e,t){return this.dispatchEvent(new CustomEvent(e,Object.assign({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t)))}}}const C=r.iv`/* stylelint-disable max-line-length */
:host {
  --lines-clamped: 1;
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
  width: auto;
  overflow: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

[part=header] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  cursor: pointer;
  padding-inline: max(var(--is-large, 1) * 24px * var(--ig-spacing-inline-large, var(--ig-spacing-inline, --ig-spacing)), var(--is-medium, 1) * 24px * var(--ig-spacing-inline-medium, var(--ig-spacing-inline, --ig-spacing)), var(--is-small, 1) * 24px * var(--ig-spacing-inline-small, var(--ig-spacing-inline, --ig-spacing)));
  padding-block: max(var(--is-large, 1) * 16px * var(--ig-spacing-block-large, var(--ig-spacing-block, --ig-spacing)), var(--is-medium, 1) * 16px * var(--ig-spacing-block-medium, var(--ig-spacing-block, --ig-spacing)), var(--is-small, 1) * 16px * var(--ig-spacing-block-small, var(--ig-spacing-block, --ig-spacing)));
}
[part=header]:focus, [part=header]:active {
  outline: transparent;
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
}
[part=header] *:not([part~=indicator]) {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-flex: 1;
      -ms-flex: 1 0 0%;
          flex: 1 0 0%;
  overflow: hidden;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}

[part=title]::slotted(*) {
  font-family: var(--ig-h5-font-family);
  font-size: var(--ig-h5-font-size);
  font-weight: var(--ig-h5-font-weight);
  font-style: var(--ig-h5-font-style);
  line-height: var(--ig-h5-line-height);
  letter-spacing: var(--ig-h5-letter-spacing);
  text-transform: var(--ig-h5-text-transform);
  margin-top: var(--ig-h5-margin-top);
  margin-bottom: var(--ig-h5-margin-bottom);
  display: -webkit-inline-box;
  -webkit-line-clamp: var(--lines-clamped);
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0;
}

[part=subtitle] {
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}
[part=subtitle]::slotted(*) {
  font-family: var(--ig-subtitle-2-font-family);
  font-size: var(--ig-subtitle-2-font-size);
  font-weight: var(--ig-subtitle-2-font-weight);
  font-style: var(--ig-subtitle-2-font-style);
  line-height: var(--ig-subtitle-2-line-height);
  letter-spacing: var(--ig-subtitle-2-letter-spacing);
  text-transform: var(--ig-subtitle-2-text-transform);
  margin-top: var(--ig-subtitle-2-margin-top);
  margin-bottom: var(--ig-subtitle-2-margin-bottom);
  white-space: nowrap;
  -o-text-overflow: ellipsis;
     text-overflow: ellipsis;
  overflow: hidden;
}

:host([open]) [part~=content] {
  font-family: var(--ig-body-2-font-family);
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
  overflow: hidden;
  padding-inline: max(var(--is-large, 1) * 24px * var(--ig-spacing-inline-large, var(--ig-spacing-inline, --ig-spacing)), var(--is-medium, 1) * 24px * var(--ig-spacing-inline-medium, var(--ig-spacing-inline, --ig-spacing)), var(--is-small, 1) * 24px * var(--ig-spacing-inline-small, var(--ig-spacing-inline, --ig-spacing)));
  padding-block: max(var(--is-large, 1) * 16px * var(--ig-spacing-block-large, var(--ig-spacing-block, --ig-spacing)), var(--is-medium, 1) * 16px * var(--ig-spacing-block-medium, var(--ig-spacing-block, --ig-spacing)), var(--is-small, 1) * 16px * var(--ig-spacing-block-small, var(--ig-spacing-block, --ig-spacing)));
}

[part~=indicator] {
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
}

[part~=indicator] igc-icon {
  --size: 1.5rem;
}

:host([indicator-position=start]) [part~=indicator] {
  -webkit-margin-end: max(var(--is-large, 1) * 16px * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * 16px * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * 16px * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
          margin-inline-end: max(var(--is-large, 1) * 16px * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * 16px * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * 16px * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}

:host([indicator-position=end]) [part~=indicator] {
  -webkit-box-ordinal-group: 3;
      -ms-flex-order: 2;
          order: 2;
  -webkit-margin-start: max(var(--is-large, 1) * 16px * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * 16px * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * 16px * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
          margin-inline-start: max(var(--is-large, 1) * 16px * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * 16px * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * 16px * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}

:host([indicator-position=none]) [part~=indicator] {
  display: none;
}

:host([disabled]) {
  pointer-events: none;
}
:host([disabled]) [part=title],
:host([disabled]) [part=subtitle],
:host([disabled]) [part~=indicator] {
  color: var(--disabled-color, hsla(var(--ig-gray-500), var(--ig-gray-a)));
}`,D=r.iv`/* stylelint-disable max-line-length */
[part=title],
[part~=indicator] {
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
}

[part=subtitle] {
  color: hsla(var(--ig-gray-600), var(--ig-gray-a));
}
[part=subtitle]::slotted(*) {
  font-family: var(--ig-body-2-font-family);
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
}

:host([open]) [part~=content] {
  font-family: var(--ig-body-1-font-family);
  font-size: var(--ig-body-1-font-size);
  font-weight: var(--ig-body-1-font-weight);
  font-style: var(--ig-body-1-font-style);
  line-height: var(--ig-body-1-line-height);
  letter-spacing: var(--ig-body-1-letter-spacing);
  text-transform: var(--ig-body-1-text-transform);
  margin-top: var(--ig-body-1-margin-top);
  margin-bottom: var(--ig-body-1-margin-bottom);
}`,I=r.iv`/* stylelint-disable max-line-length */
[part=title]::slotted(*) {
  font-family: var(--ig-subtitle-1-font-family);
  font-size: var(--ig-subtitle-1-font-size);
  font-weight: var(--ig-subtitle-1-font-weight);
  font-style: var(--ig-subtitle-1-font-style);
  line-height: var(--ig-subtitle-1-line-height);
  letter-spacing: var(--ig-subtitle-1-letter-spacing);
  text-transform: var(--ig-subtitle-1-text-transform);
  margin-top: var(--ig-subtitle-1-margin-top);
  margin-bottom: var(--ig-subtitle-1-margin-bottom);
}

[part=subtitle]::slotted(*) {
  font-family: var(--ig-body-2-font-family);
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
}

:host([open]) [part~=content] {
  font-family: var(--ig-caption-font-family);
  font-size: var(--ig-caption-font-size);
  font-weight: var(--ig-caption-font-weight);
  font-style: var(--ig-caption-font-style);
  line-height: var(--ig-caption-line-height);
  letter-spacing: var(--ig-caption-letter-spacing);
  text-transform: var(--ig-caption-text-transform);
  margin-top: var(--ig-caption-margin-top);
  margin-bottom: var(--ig-caption-margin-bottom);
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}

:host([disabled]) [part~=indicator],
:host([disabled]) [part=title],
:host([disabled]) [part=subtitle] {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}`,S=r.iv`/* stylelint-disable max-line-length */
[part~=indicator] {
  color: hsla(var(--ig-gray-600), var(--ig-gray-a));
}

[part=subtitle] {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

:host([open]) [part~=content] {
  font-family: var(--ig-body-1-font-family);
  font-size: var(--ig-body-1-font-size);
  font-weight: var(--ig-body-1-font-weight);
  font-style: var(--ig-body-1-font-style);
  line-height: var(--ig-body-1-line-height);
  letter-spacing: var(--ig-body-1-letter-spacing);
  text-transform: var(--ig-body-1-text-transform);
  margin-top: var(--ig-body-1-margin-top);
  margin-bottom: var(--ig-body-1-margin-bottom);
}

:host([disabled]) [part~=indicator],
:host([disabled]) [part=title],
:host([disabled]) [part=subtitle] {
  color: hsla(var(--ig-gray-300), var(--ig-gray-a));
}`,$=e=>Object.keys(e).filter((t=>e[t])).join(" "),P=(e,t)=>e/t*100,M=(e,t,a)=>Math.max(t,Math.min(e,a));function E(e,t){const{top:a,left:r,bottom:i,right:o}=e.getBoundingClientRect(),{top:s,left:n,bottom:l,right:c}=t.getBoundingClientRect();return{top:Math.round(a-s),left:Math.round(r-n),right:Math.round(o-c),bottom:Math.round(i-l)}}function T(){let e=0;return function(){return e++,e}}function O(e){return"ltr"===getComputedStyle(e).getPropertyValue("direction")}var V=a(77661);const R=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */
svg {
  height: 100%;
  width: 100%;
}

:host {
  --size: max(var(--is-large, 1) * 1.5rem, var(--is-medium, 1) * 1.25rem, var(--is-small, 1) * 1rem);
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  width: var(--size);
  height: var(--size);
  fill: currentcolor;
}

:host([size=small]) {
  --component-size: var(--ig-size, var(--ig-size-small));
}

:host([size=medium]) {
  --component-size: var(--ig-size, var(--ig-size-medium));
}

:host([size=large]) {
  --component-size: var(--ig-size, var(--ig-size-large));
}

:host([mirrored]) {
  -webkit-transform: scaleX(-1);
      -ms-transform: scaleX(-1);
          transform: scaleX(-1);
}`;class A{constructor(){this.iconsRegistry=new Map,this.callbacks=new Set,this.iconsRegistry.set("internal",j)}static instance(){return A._instance||(A._instance=new A),A._instance}subscribe(e){this.callbacks.add(e)}unsubscribe(e){this.callbacks.delete(e)}registerIcon(e,t,a="default"){const r=document.createElement("div");r.innerHTML=t;const i=r.querySelector("svg");if(!i)throw new Error("SVG element not found.");{i.setAttribute("fit",""),i.setAttribute("preserveAspectRatio","xMidYMid meet");const t=i.outerHTML;this.getOrCreateIconCollection(a)[e]=t,this.callbacks.forEach((t=>t(e,a)))}}getIcon(e,t="default"){if(this.iconsRegistry.has(t))return this.iconsRegistry.get(t)[e]}getOrCreateIconCollection(e){let t;return this.iconsRegistry.has(e)?t=this.iconsRegistry.get(e):(t={},this.iconsRegistry.set(e,t)),t}}const F=async(e,t,a="default")=>{const r=await fetch(t);if(!r.ok)throw new Error(`Icon request failed. Status: ${r.status}.`);{const t=await r.text();A.instance().registerIcon(e,t,a)}},L=(e,t,a="default")=>{A.instance().registerIcon(e,t,a)},j={navigate_before:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.61 7.41L14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z"/></svg>',navigate_next:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z"/></svg>',keyboard_arrow_up:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/></svg>',keyboard_arrow_down:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>',keyboard_arrow_right:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>',chip_cancel:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/></svg>',chip_select:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>',star_border:'<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>'};var _=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};class X extends(v(r.oi)){constructor(){super(),this.svg="",this._name="",this._collection="default",this.mirrored=!1,this.iconLoaded=(e,t)=>{this.name===e&&this.collection===t&&this.getIcon()},this.size="medium"}set name(e){this._name!==e&&(this._name=e,this.getIcon())}get name(){return this._name}set collection(e){this._collection!==e&&(this._collection=e,this.getIcon())}get collection(){return this._collection}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","img"),A.instance().subscribe(this.iconLoaded)}disconnectedCallback(){super.disconnectedCallback(),A.instance().unsubscribe(this.iconLoaded)}getIcon(){const e=this._name&&this._collection?A.instance().getIcon(this._name,this._collection):"";this.svg=null!=e?e:""}render(){return r.dy` ${(0,V.c)(this.svg)} `}async registerIcon(e,t,a="default"){await F(e,t,a)}registerIconFromText(e,t,a="default"){L(e,t,a)}}X.tagName="igc-icon",X.styles=R,_([(0,i.SB)()],X.prototype,"svg",void 0),_([(0,i.Cb)(),(e,t)=>{}],X.prototype,"name",null),_([(0,i.Cb)()],X.prototype,"collection",null),_([(0,i.Cb)({type:Boolean,reflect:!0})],X.prototype,"mirrored",void 0),_([(e,t)=>{}],X.prototype,"registerIcon",null),_([(e,t)=>{}],X.prototype,"registerIconFromText",null);var B,N=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};x(X);let Y=B=class extends(z(r.oi)){constructor(){super(...arguments),this.open=!1,this.disabled=!1,this.indicatorPosition="start"}connectedCallback(){super.connectedCallback(),this.panelId=this.getAttribute("id")||`igc-expansion-panel-${B.increment()}`}handleClicked(){this.panelHeader.focus(),this.open?this.closeWithEvent():this.openWithEvent()}handleKeydown(e){if(!this.disabled)switch(e.key.toLowerCase()){case"arrowdown":case"down":e.altKey&&this.openWithEvent();break;case"arrowup":case"up":e.altKey&&this.closeWithEvent();break;case"enter":case" ":this.open?this.closeWithEvent():this.openWithEvent()}}openWithEvent(){if(this.open)return;const e={cancelable:!0,detail:this};this.emitEvent("igcOpening",e)&&(this.open=!0,this.emitEvent("igcOpened",{detail:this}))}closeWithEvent(){if(!this.open)return;const e={cancelable:!0,detail:this};this.emitEvent("igcClosing",e)&&(this.open=!1,this.emitEvent("igcClosed",{detail:this}))}toggle(){this.open=!this.open}hide(){this.open=!1}show(){this.open=!0}indicatorTemplate(){return r.dy`
      <div part="indicator" aria-hidden="true">
        <slot name="indicator">
          <igc-icon
            name=${this.open?"keyboard_arrow_up":"keyboard_arrow_down"}
            collection="internal"
          >
          </igc-icon>
        </slot>
      </div>
    `}headerTemplate(){return r.dy`
      <div
        part="header"
        id="${this.panelId}-header"
        role="button"
        aria-expanded="${this.open}"
        aria-disabled="${this.disabled}"
        aria-controls="${this.panelId}-content"
        tabindex=${this.disabled?"-1":"0"}
        @click=${this.handleClicked}
        @keydown=${this.handleKeydown}
      >
        ${this.indicatorTemplate()}
        <div>
          <slot name="title" part="title"></slot>
          <slot name="subtitle" part="subtitle"></slot>
        </div>
      </div>
    `}contentTemplate(){return r.dy`
      <div
        part="content"
        role="region"
        id="${this.panelId}-content"
        aria-labelledby="${this.panelId}-header"
      >
        <slot ?hidden=${!this.open}></slot>
      </div>
    `}render(){return r.dy` ${this.headerTemplate()} ${this.contentTemplate()}`}};Y.tagName="igc-expansion-panel",Y.styles=C,Y.increment=T(),N([(0,i.Cb)({reflect:!0,type:Boolean})],Y.prototype,"open",void 0),N([(0,i.Cb)({reflect:!0,type:Boolean})],Y.prototype,"disabled",void 0),N([(0,i.Cb)({reflect:!0,attribute:"indicator-position"})],Y.prototype,"indicatorPosition",void 0),N([(0,i.IO)('[part~="header"]',!0)],Y.prototype,"panelHeader",void 0),Y=B=N([p({bootstrap:D,fluent:I,indigo:S})],Y);const U=Y;var H=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};x(U);class W extends r.oi{constructor(){super(),this.singleExpand=!1,this.handleKeydown=e=>{if("igc-expansion-panel"===e.target.tagName.toLowerCase()&&this._enabledPanels.includes(e.target))switch(e.key.toLowerCase()){case"home":this.getPanelHeader(this._enabledPanels.at(0)).focus();break;case"end":this.getPanelHeader(this._enabledPanels.at(-1)).focus();break;case"arrowup":case"up":this.handleUpDownArrow(!0,e);break;case"arrowdown":case"down":this.handleUpDownArrow(!1,e)}},this.addEventListener("keydown",this.handleKeydown,{capture:!0}),this.addEventListener("igcOpening",this.handlePanelOpening)}get _enabledPanels(){return this.panels.filter((e=>!e.disabled))}handlePanelOpening(e){const t=e.target;this.singleExpand&&this.panels.includes(t)&&this._enabledPanels.forEach((e=>{e.open&&e!==t&&this.closePanel(e)}))}handleUpDownArrow(e,t){const a=t.target;if(!t.altKey){const t=this.getNextPanel(a,e?-1:1);if(t===a)return;this.getPanelHeader(t).focus()}if(t.shiftKey&&t.altKey){if(this.singleExpand&&!e)return void this._enabledPanels.forEach((e=>e!==a?this.closePanel(e):this.openPanel(e)));e?this._enabledPanels.forEach((e=>this.closePanel(e))):this._enabledPanels.forEach((e=>this.openPanel(e)))}}getNextPanel(e,t=1){const a=this._enabledPanels.indexOf(e);return this._enabledPanels[a+t]||e}getPanelHeader(e){var t;return null===(t=e.shadowRoot)||void 0===t?void 0:t.querySelector('div[part="header"]')}async closePanel(e){e.open&&e.emitEvent("igcClosing",{cancelable:!0,detail:e})&&(e.open=!1,await e.updateComplete,e.emitEvent("igcClosed",{detail:e}))}async openPanel(e){e.open||e.emitEvent("igcOpening",{cancelable:!0,detail:e})&&(e.open=!0,await e.updateComplete,e.emitEvent("igcOpened",{detail:e}))}hideAll(){this.panels.forEach((e=>e.open=!1))}showAll(){this.panels.forEach((e=>e.open=!0))}render(){return r.dy`<slot></slot>`}}W.tagName="igc-accordion",W.styles=k,H([(0,i.Cb)({attribute:"single-expand",reflect:!0,type:Boolean})],W.prototype,"singleExpand",void 0),H([(0,i.NH)({selector:"igc-expansion-panel"}),(e,t)=>{}],W.prototype,"panels",void 0);const K=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */
:host {
  --size: 0.75rem;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  font-weight: 500;
}

span {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  min-width: var(--size);
  min-height: var(--size);
  max-height: calc(var(--size) * 2);
  line-height: 1;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  overflow: hidden;
  white-space: nowrap;
  font-family: var(--ig-font-family);
  font-size: var(--ig-subtitle-1-font-size);
  font-weight: inherit;
}

:host(:not(:empty)) span {
  padding: 0.25rem 0.5rem;
  min-width: calc(var(--size) * 2);
}

:host([variant=primary]) {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  color: var(--ig-primary-500-contrast);
}

:host([variant=info]) {
  background: hsla(var(--ig-info-500), var(--ig-info-a));
  color: var(--ig-info-500-contrast);
}

:host([variant=success]) {
  background: hsla(var(--ig-success-500), var(--ig-success-a));
  color: var(--ig-success-500-contrast);
}

:host([variant=warning]) {
  background: hsla(var(--ig-warn-500), var(--ig-warn-a));
  color: var(--ig-warn-500-contrast);
}

:host([variant=danger]) {
  background: hsla(var(--ig-error-500), var(--ig-error-a));
  color: var(--ig-error-500-contrast);
}

:host([shape=rounded]),
:host([outlined][shape=rounded]) span {
  border-radius: calc(var(--size) / 2);
}

:host([shape=square]),
:host([outlined][shape=square]) span {
  border-radius: 0;
}

:host([outlined]) span {
  -webkit-box-shadow: inset 0 0 0 0.125rem hsla(var(--ig-gray-50), var(--ig-gray-a));
          box-shadow: inset 0 0 0 0.125rem hsla(var(--ig-gray-50), var(--ig-gray-a));
}`,q=r.iv`/* stylelint-disable max-line-length */
:host {
  --size: 1.125rem;
  --ig-subtitle-1-font-size: 0.75rem;
  font-weight: 700;
}

:host([outlined]) span {
  -webkit-box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-gray-50), var(--ig-gray-a));
          box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-gray-50), var(--ig-gray-a));
}`;var G=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};let Z=class extends r.oi{constructor(){super(...arguments),this.variant="primary",this.outlined=!1,this.shape="rounded"}render(){return r.dy`
      <span part="base" role="img" aria-label="badge">
        <slot></slot>
      </span>
    `}};Z.tagName="igc-badge",Z.styles=K,G([(0,i.Cb)({reflect:!0})],Z.prototype,"variant",void 0),G([(0,i.Cb)({type:Boolean,reflect:!0})],Z.prototype,"outlined",void 0),G([(0,i.Cb)({reflect:!0})],Z.prototype,"shape",void 0),Z=G([p({bootstrap:q})],Z);const Q=Z;function J(e){}var ee=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};let te=class extends(v(z(r.oi))){constructor(){super(...arguments),this.disabled=!1}set ariaLabel(e){const t=this._ariaLabel;this._ariaLabel=e,this.hasAttribute("aria-label")&&this.removeAttribute("aria-label"),this.requestUpdate("ariaLabel",t)}get ariaLabel(){return this._ariaLabel}focus(e){this.nativeElement.focus(e)}blur(){this.nativeElement.blur()}handleFocus(){this.emitEvent("igcFocus")}handleBlur(){this.emitEvent("igcBlur")}get classes(){return{}}renderButton(){return r.dy`
      <button
        part="base"
        aria-label=${(0,s.o)(this.ariaLabel)}
        .disabled=${this.disabled}
        class=${(0,o.$)(this.classes)}
        type=${(0,s.o)(this.type)}
        @focus=${this.handleFocus}
        @blur=${this.handleBlur}
      >
        ${this.renderContent()}
      </button>
    `}renderLinkButton(){return r.dy`
      <a
        part="base"
        role="button"
        href=${(0,s.o)(this.href)}
        target=${(0,s.o)(this.target)}
        download=${(0,s.o)(this.download)}
        rel=${(0,s.o)(this.rel)}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label=${(0,s.o)(this.ariaLabel)}
        class=${(0,o.$)(this.classes)}
        @focus=${!this.disabled&&this.handleFocus}
        @blur=${!this.disabled&&this.handleBlur}
      >
        ${this.renderContent()}
      </a>
    `}render(){return void 0!==this.href?this.renderLinkButton():this.renderButton()}};te.shadowRootOptions={...r.oi.shadowRootOptions,delegatesFocus:!0},ee([(0,i.IO)('[part="base"]',!0)],te.prototype,"nativeElement",void 0),ee([(e,t)=>{},(0,i.Cb)()],te.prototype,"type",void 0),ee([(0,i.Cb)()],te.prototype,"href",void 0),ee([(0,i.Cb)()],te.prototype,"download",void 0),ee([(0,i.Cb)()],te.prototype,"target",void 0),ee([(0,i.Cb)()],te.prototype,"rel",void 0),ee([(0,i.Cb)({type:Boolean,reflect:!0})],te.prototype,"disabled",void 0),ee([(0,i.Cb)({attribute:"aria-label"})],te.prototype,"ariaLabel",null),ee([(e,t)=>{}],te.prototype,"focus",null),ee([(e,t)=>{}],te.prototype,"blur",null),te=ee([J],te);const ae=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */
:host {
  --size: max(var(--is-large, 1) * 2.25rem, var(--is-medium, 1) * 1.875rem, var(--is-small, 1) * 1.5rem);
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  vertical-align: middle;
}
:host ::slotted(span) {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
}

:host([size=small]) {
  --component-size: var(--ig-size, var(--ig-size-small));
}

:host([size=medium]) {
  --component-size: var(--ig-size, var(--ig-size-medium));
}

:host([size=large]) {
  --component-size: var(--ig-size, var(--ig-size-large));
}

[part=base] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
  font-family: var(--ig-button-font-family);
  font-size: var(--ig-button-font-size);
  font-weight: var(--ig-button-font-weight);
  font-style: var(--ig-button-font-style);
  line-height: var(--ig-button-line-height);
  letter-spacing: var(--ig-button-letter-spacing);
  text-transform: var(--ig-button-text-transform);
  margin-top: var(--ig-button-margin-top);
  margin-bottom: var(--ig-button-margin-bottom);
  position: relative;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  border: none;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  outline-style: none;
  -webkit-tap-highlight-color: transparent;
  overflow: hidden;
  white-space: nowrap;
  text-decoration: none;
  z-index: 0;
  height: var(--size);
  padding: 0 max(var(--is-large, 1) * 16px * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * 12px * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * 8px * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}
[part=base]::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  z-index: -1;
  will-change: opacity;
  -webkit-transition: all 0.1s ease-out;
  -o-transition: all 0.1s ease-out;
  transition: all 0.1s ease-out;
}

:host(:not([disabled])) [part=base]:hover {
  cursor: pointer;
}

:host([disabled]) {
  pointer-events: none;
}
:host([disabled]) [part=base] {
  background: hsla(var(--ig-gray-300), var(--ig-gray-a));
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
  -webkit-box-shadow: none;
          box-shadow: none;
}

[name=prefix]::slotted(*) {
  -webkit-margin-end: max(var(--is-large, 1) * 8px * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * 8px * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * 8px * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
          margin-inline-end: max(var(--is-large, 1) * 8px * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * 8px * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * 8px * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}

[name=suffix]::slotted(*) {
  -webkit-margin-start: max(var(--is-large, 1) * 8px * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * 8px * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * 8px * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
          margin-inline-start: max(var(--is-large, 1) * 8px * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * 8px * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * 8px * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}

span[part=prefix],
span[part=suffix] {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

:host(:not([disabled])[variant=outlined]) [part=base], :host(:not([disabled])[variant=flat]) [part=base] {
  color: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  background: transparent;
}
:host(:not([disabled])[variant=outlined]) [part=base]::before, :host(:not([disabled])[variant=flat]) [part=base]::before {
  opacity: 0;
}
:host(:not([disabled])[variant=outlined]) [part=base]:hover::before, :host(:not([disabled])[variant=flat]) [part=base]:hover::before {
  background: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  opacity: 0.12;
}
:host(:not([disabled])[variant=outlined]) [part=base]:focus::before, :host(:not([disabled])[variant=flat]) [part=base]:focus::before, :host(:not([disabled])[variant=outlined]) [part=base]:active::before, :host(:not([disabled])[variant=flat]) [part=base]:active::before {
  background: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  opacity: 0.24;
}

:host([disabled][variant=flat]) [part=base] {
  background: transparent;
}

:host(:not([disabled])[variant=outlined]) [part=base] {
  -webkit-box-shadow: inset 0 0 0 1px hsla(var(--ig-secondary-500), var(--ig-secondary-a));
          box-shadow: inset 0 0 0 1px hsla(var(--ig-secondary-500), var(--ig-secondary-a));
}

:host([disabled][variant=outlined]) [part=base] {
  background: transparent;
  -webkit-box-shadow: inset 0 0 0 1px hsla(var(--ig-gray-300), var(--ig-gray-a));
          box-shadow: inset 0 0 0 1px hsla(var(--ig-gray-300), var(--ig-gray-a));
}

:host(:not([disabled])[variant=fab]) [part=base], :host(:not([disabled])[variant=contained]) [part=base] {
  background: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  color: var(--ig-secondary-500-contrast);
}

:host([variant=fab]) {
  --size: max(var(--is-large, 1) * 3rem, var(--is-medium, 1) * 2.5rem, var(--is-small, 1) * 2rem);
}

:host([variant=fab]) [part=base] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * calc(var(--size) / 2)), calc(var(--size) / 2));
  min-width: var(--size);
  min-height: var(--size);
}`,re=r.iv`/* stylelint-disable max-line-length */
:host {
  --size: max(var(--is-large, 1) * 3rem, var(--is-medium, 1) * 2.375rem, var(--is-small, 1) * 1.9375rem);
}

:host [part=base] {
  -webkit-transition: all 0.15s ease-out;
  -o-transition: all 0.15s ease-out;
  transition: all 0.15s ease-out;
}
:host [part=base]::before {
  -webkit-transition: all 0.15s ease-out;
  -o-transition: all 0.15s ease-out;
  transition: all 0.15s ease-out;
}

:host([disabled][variant=flat]) [part=base] {
  background: transparent;
  color: hsla(var(--ig-primary-100), var(--ig-primary-a));
}

:host([disabled][variant=fab]) [part=base],
:host([disabled][variant=contained]) [part=base] {
  background: hsla(var(--ig-primary-200), var(--ig-primary-a));
  color: var(--ig-primary-600-contrast);
}

:host([disabled][variant=outlined]) [part=base] {
  color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  -webkit-box-shadow: 0 0 0 1px hsla(var(--ig-primary-500), var(--ig-primary-a));
          box-shadow: 0 0 0 1px hsla(var(--ig-primary-500), var(--ig-primary-a));
  opacity: 0.65;
  background: transparent;
}

:host(:not([disabled])[variant=flat]) [part=base] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
  color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}
:host(:not([disabled])[variant=flat]) [part=base]:hover {
  color: hsla(var(--ig-primary-800), var(--ig-primary-a));
}
:host(:not([disabled])[variant=flat]) [part=base]:focus, :host(:not([disabled])[variant=flat]) [part=base]:active {
  color: hsla(var(--ig-primary-600), var(--ig-primary-a));
  -webkit-box-shadow: 0 0 0 0.25rem hsla(var(--ig-primary-200), 0.5);
          box-shadow: 0 0 0 0.25rem hsla(var(--ig-primary-200), 0.5);
}
:host(:not([disabled])[variant=flat]) [part=base]:hover::before {
  background: transparent;
}
:host(:not([disabled])[variant=flat]) [part=base]:focus::before, :host(:not([disabled])[variant=flat]) [part=base]:active::before {
  background: transparent;
  opacity: 1;
}

:host(:not([disabled])[variant=contained]) [part=base] {
  color: var(--ig-primary-600-contrast);
  -webkit-box-shadow: var(--ig-elevation-0);
          box-shadow: var(--ig-elevation-0);
}
:host(:not([disabled])[variant=contained]) [part=base]:hover {
  color: var(--ig-primary-600-contrast);
}
:host(:not([disabled])[variant=contained]) [part=base]:focus, :host(:not([disabled])[variant=contained]) [part=base]:active {
  color: var(--ig-primary-600-contrast);
  -webkit-box-shadow: 0 0 0 0.25rem hsla(var(--ig-primary-200), 0.5);
          box-shadow: 0 0 0 0.25rem hsla(var(--ig-primary-200), 0.5);
}
:host(:not([disabled])[variant=contained]) [part=base]::before {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  opacity: 1;
}
:host(:not([disabled])[variant=contained]) [part=base]:hover::before, :host(:not([disabled])[variant=contained]) [part=base]:focus::before, :host(:not([disabled])[variant=contained]) [part=base]:active::before {
  background: hsla(var(--ig-primary-600), var(--ig-primary-a));
  opacity: 1;
}

:host(:not([disabled])[variant=outlined]) [part=base] {
  color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  -webkit-box-shadow: 0 0 0 1px hsla(var(--ig-primary-500), var(--ig-primary-a));
          box-shadow: 0 0 0 1px hsla(var(--ig-primary-500), var(--ig-primary-a));
  overflow: visible;
}
:host(:not([disabled])[variant=outlined]) [part=base]::after {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
}
:host(:not([disabled])[variant=outlined]) [part=base]:hover {
  background: hsla(var(--ig-primary-600), var(--ig-primary-a));
  color: var(--ig-primary-600-contrast);
}
:host(:not([disabled])[variant=outlined]) [part=base]:hover::before {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  opacity: 1;
}
:host(:not([disabled])[variant=outlined]) [part=base]:focus::before, :host(:not([disabled])[variant=outlined]) [part=base]:active::before {
  background: transparent;
  opacity: 1;
}
:host(:not([disabled])[variant=outlined]) [part=base]:focus::after, :host(:not([disabled])[variant=outlined]) [part=base]:active::after {
  -webkit-box-shadow: 0 0 0 0.25rem hsla(var(--ig-primary-200), 0.5);
          box-shadow: 0 0 0 0.25rem hsla(var(--ig-primary-200), 0.5);
}

:host([variant=fab][size=large]) [part=base] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 1rem), 1rem);
}

:host([variant=fab][size=medium]) [part=base] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.75rem), 0.75rem);
}

:host([variant=fab][size=small]) [part=base] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.5rem), 0.5rem);
}

:host(:not([disabled])[variant=fab]) [part=base] {
  color: var(--ig-primary-600-contrast);
  -webkit-box-shadow: var(--ig-elevation-0);
          box-shadow: var(--ig-elevation-0);
}
:host(:not([disabled])[variant=fab]) [part=base]:hover {
  color: var(--ig-primary-600-contrast);
}
:host(:not([disabled])[variant=fab]) [part=base]:focus, :host(:not([disabled])[variant=fab]) [part=base]:active {
  color: var(--ig-primary-600-contrast);
  -webkit-box-shadow: 0 0 0 0.25rem hsla(var(--ig-primary-200), 0.5);
          box-shadow: 0 0 0 0.25rem hsla(var(--ig-primary-200), 0.5);
}
:host(:not([disabled])[variant=fab]) [part=base]::before {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  opacity: 1;
}
:host(:not([disabled])[variant=fab]) [part=base]:hover::before, :host(:not([disabled])[variant=fab]) [part=base]:focus::before, :host(:not([disabled])[variant=fab]) [part=base]:active::before {
  background: hsla(var(--ig-primary-600), var(--ig-primary-a));
  opacity: 1;
}`,ie=r.iv`/* stylelint-disable max-line-length */
:host {
  --size: max(var(--is-large, 1) * 2.375rem, var(--is-medium, 1) * 2rem, var(--is-small, 1) * 1.5rem);
}

[part=base] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.125rem), 0.125rem);
  padding: 0 max(var(--is-large, 1) * 16px * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * 16px * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * 8px * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}

:host(:not([disabled])[variant=flat]) [part=base] {
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}
:host(:not([disabled])[variant=flat]) [part=base]:hover {
  color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}
:host(:not([disabled])[variant=flat]) [part=base]:active {
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}
:host(:not([disabled])[variant=flat]) [part=base]:hover::before, :host(:not([disabled])[variant=flat]) [part=base]:focus::before, :host(:not([disabled])[variant=flat]) [part=base]:active::before {
  background: transparent;
}

:host(:not([disabled])[variant=outlined]) [part=base] {
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  -webkit-transition: color 0.15s ease-out;
  -o-transition: color 0.15s ease-out;
  transition: color 0.15s ease-out;
  -webkit-box-shadow: 0 0 0 1px hsla(var(--ig-gray-700), var(--ig-gray-a));
          box-shadow: 0 0 0 1px hsla(var(--ig-gray-700), var(--ig-gray-a));
}
:host(:not([disabled])[variant=outlined]) [part=base]:hover::before, :host(:not([disabled])[variant=outlined]) [part=base]:focus:hover::before {
  opacity: 1;
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
}
:host(:not([disabled])[variant=outlined]) [part=base]:focus::before {
  opacity: 1;
  background: transparent;
}
:host(:not([disabled])[variant=outlined]) [part=base]:focus:active::before {
  opacity: 1;
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
}
:host(:not([disabled])[variant=outlined]) [part=base]:hover, :host(:not([disabled])[variant=outlined]) [part=base]:focus, :host(:not([disabled])[variant=outlined]) [part=base]:active {
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}
:host(:not([disabled])[variant=outlined]) [part=base]:active::before, :host(:not([disabled])[variant=outlined]) [part=base]:focus:active::before, :host(:not([disabled])[variant=outlined]) [part=base]:focus-visible:hover:active::before, :host(:not([disabled])[variant=outlined]) [part=base]:focus-visible:active::before {
  opacity: 1;
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
}
:host(:not([disabled])[variant=outlined]) [part=base]:focus-visible:hover::before {
  opacity: 1;
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
}

:host(:not([disabled])[variant=flat]) [part=base]:focus-visible,
:host(:not([disabled])[variant=outlined]) [part=base]:focus-visible {
  position: relative;
}
:host(:not([disabled])[variant=flat]) [part=base]:focus-visible::after,
:host(:not([disabled])[variant=outlined]) [part=base]:focus-visible::after {
  content: "";
  -webkit-box-shadow: 0 0 0 1px hsla(var(--ig-gray-800), var(--ig-gray-a));
          box-shadow: 0 0 0 1px hsla(var(--ig-gray-800), var(--ig-gray-a));
  position: absolute;
  top: 2px;
  left: 2px;
  pointer-events: none;
  width: calc(100% - 4px);
  height: calc(100% - 4px);
}
:host(:not([disabled])[variant=flat]) [part=base]:focus-visible::before,
:host(:not([disabled])[variant=outlined]) [part=base]:focus-visible::before {
  background: transparent;
}

:host(:not([disabled])[variant=contained]) [part=base],
:host(:not([disabled])[variant=fab]) [part=base] {
  color: var(--text-color, var(--ig-primary-600-contrast));
  -webkit-box-shadow: var(--ig-elevation-0);
          box-shadow: var(--ig-elevation-0);
}
:host(:not([disabled])[variant=contained]) [part=base]:hover, :host(:not([disabled])[variant=contained]) [part=base]:focus-visible:hover,
:host(:not([disabled])[variant=fab]) [part=base]:hover,
:host(:not([disabled])[variant=fab]) [part=base]:focus-visible:hover {
  color: var(--text-color, var(--ig-primary-600-contrast));
}
:host(:not([disabled])[variant=contained]) [part=base]:hover::before, :host(:not([disabled])[variant=contained]) [part=base]:focus-visible:hover::before,
:host(:not([disabled])[variant=fab]) [part=base]:hover::before,
:host(:not([disabled])[variant=fab]) [part=base]:focus-visible:hover::before {
  opacity: 1;
  background: var(--hover-background, hsla(var(--ig-primary-600), var(--ig-primary-a)));
}
:host(:not([disabled])[variant=contained]) [part=base]:focus, :host(:not([disabled])[variant=contained]) [part=base]:active,
:host(:not([disabled])[variant=fab]) [part=base]:focus,
:host(:not([disabled])[variant=fab]) [part=base]:active {
  color: var(--text-color, var(--ig-primary-600-contrast));
}
:host(:not([disabled])[variant=contained]) [part=base]::before,
:host(:not([disabled])[variant=fab]) [part=base]::before {
  opacity: 1;
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
}
:host(:not([disabled])[variant=contained]) [part=base]:active::before, :host(:not([disabled])[variant=contained]) [part=base]:focus-visible:active::before,
:host(:not([disabled])[variant=fab]) [part=base]:active::before,
:host(:not([disabled])[variant=fab]) [part=base]:focus-visible:active::before {
  opacity: 1;
  background: var(--active-background, hsla(var(--ig-primary-700), var(--ig-primary-a)));
}
:host(:not([disabled])[variant=contained]) [part=base]:focus-visible,
:host(:not([disabled])[variant=fab]) [part=base]:focus-visible {
  position: relative;
}
:host(:not([disabled])[variant=contained]) [part=base]:focus-visible::after,
:host(:not([disabled])[variant=fab]) [part=base]:focus-visible::after {
  content: "";
  -webkit-box-shadow: 0 0 0 1px var(--ig-primary-600-contrast);
          box-shadow: 0 0 0 1px var(--ig-primary-600-contrast);
  position: absolute;
  top: 3px;
  left: 3px;
  pointer-events: none;
  width: calc(100% - 6px);
  height: calc(100% - 6px);
}
:host(:not([disabled])[variant=contained]) [part=base]:focus-visible::before,
:host(:not([disabled])[variant=fab]) [part=base]:focus-visible::before {
  background: transparent;
}

:host([variant=fab]) [part=base] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.875rem), 0.875rem);
}
:host([variant=fab]) [part=base]::after {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.75rem), 0.75rem);
}

:host([disabled][variant=flat]) [part=base] {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
  background: transparent;
}

:host([disabled][variant=fab]) [part=base],
:host([disabled][variant=contained]) [part=base] {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}
:host([disabled][variant=fab]) [part=base]::before,
:host([disabled][variant=contained]) [part=base]::before {
  opacity: 1;
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
}

:host([disabled][variant=outlined]) [part=base] {
  -webkit-box-shadow: none;
          box-shadow: none;
  color: hsla(var(--ig-gray-500), 8);
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
}`,oe=r.iv`/* stylelint-disable max-line-length */
:host {
  --size: max(var(--is-large, 1) * 2.25rem, var(--is-medium, 1) * 2rem, var(--is-small, 1) * 1.75rem);
}

[part=base] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * calc(var(--size) / 2)), calc(var(--size) / 2));
}
[part=base]::before, [part=base]::after {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * calc(var(--size) / 2)), calc(var(--size) / 2));
}

:host([variant=fab]) {
  --size: max(var(--is-large, 1) * 3rem, var(--is-medium, 1) * 2.625rem, var(--is-small, 1) * 2.25rem);
}

:host(:not([disabled])[variant=flat]) [part=base] {
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
  -webkit-transition: color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
  -o-transition: color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
}
:host(:not([disabled])[variant=flat]) [part=base]:hover, :host(:not([disabled])[variant=flat]) [part=base]:focus, :host(:not([disabled])[variant=flat]) [part=base]:active {
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}
:host(:not([disabled])[variant=flat]) [part=base]:hover::before {
  background: transparent;
}
:host(:not([disabled])[variant=flat]) [part=base]:focus::before, :host(:not([disabled])[variant=flat]) [part=base]:active::before {
  background: transparent;
}
:host(:not([disabled])[variant=flat]) [part=base]:focus, :host(:not([disabled])[variant=flat]) [part=base]:active {
  -webkit-box-shadow: 0 0 0 0.1875rem hsla(var(--ig-gray-300), var(--ig-gray-a));
          box-shadow: 0 0 0 0.1875rem hsla(var(--ig-gray-300), var(--ig-gray-a));
}

:host(:not([disabled])[variant=outlined]) [part=base] {
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
  -webkit-transition: color 0.15s ease-out;
  -o-transition: color 0.15s ease-out;
  transition: color 0.15s ease-out;
  -webkit-box-shadow: inset 0 0 0 2px hsla(var(--ig-gray-500), var(--ig-gray-a));
          box-shadow: inset 0 0 0 2px hsla(var(--ig-gray-500), var(--ig-gray-a));
  overflow: visible;
}
:host(:not([disabled])[variant=outlined]) [part=base]::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  -webkit-transition: -webkit-box-shadow 0.15s ease-out;
  transition: -webkit-box-shadow 0.15s ease-out;
  -o-transition: box-shadow 0.15s ease-out;
  transition: box-shadow 0.15s ease-out;
  transition: box-shadow 0.15s ease-out, -webkit-box-shadow 0.15s ease-out;
}
:host(:not([disabled])[variant=outlined]) [part=base]:hover {
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  background: hsla(var(--ig-gray-50), var(--ig-gray-a));
}
:host(:not([disabled])[variant=outlined]) [part=base]:focus, :host(:not([disabled])[variant=outlined]) [part=base]:active {
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}
:host(:not([disabled])[variant=outlined]) [part=base]:focus::before, :host(:not([disabled])[variant=outlined]) [part=base]:active::before {
  background: transparent;
}
:host(:not([disabled])[variant=outlined]) [part=base]:focus::after, :host(:not([disabled])[variant=outlined]) [part=base]:active::after {
  -webkit-box-shadow: 0 0 0 0.1875rem hsla(var(--ig-gray-300), var(--ig-gray-a));
          box-shadow: 0 0 0 0.1875rem hsla(var(--ig-gray-300), var(--ig-gray-a));
}

:host([disabled][variant=fab]) [part=base],
:host(:not([disabled])[variant=fab]) [part=base],
:host([disabled][variant=contained]) [part=base],
:host(:not([disabled])[variant=contained]) [part=base] {
  -webkit-box-shadow: var(--ig-elevation-0);
          box-shadow: var(--ig-elevation-0);
}
:host([disabled][variant=fab]) [part=base]:hover,
:host(:not([disabled])[variant=fab]) [part=base]:hover,
:host([disabled][variant=contained]) [part=base]:hover,
:host(:not([disabled])[variant=contained]) [part=base]:hover {
  -webkit-box-shadow: var(--ig-elevation-0);
          box-shadow: var(--ig-elevation-0);
}

:host(:not([disabled])[variant=fab]) [part=base],
:host(:not([disabled])[variant=contained]) [part=base] {
  color: var(--ig-primary-600-contrast);
}
:host(:not([disabled])[variant=fab]) [part=base]:hover,
:host(:not([disabled])[variant=contained]) [part=base]:hover {
  color: var(--ig-primary-600-contrast);
}
:host(:not([disabled])[variant=fab]) [part=base]:focus, :host(:not([disabled])[variant=fab]) [part=base]:active,
:host(:not([disabled])[variant=contained]) [part=base]:focus,
:host(:not([disabled])[variant=contained]) [part=base]:active {
  color: var(--ig-primary-600-contrast);
  -webkit-box-shadow: 0 0 0 0.1875rem hsla(var(--ig-primary-200), var(--ig-primary-a));
          box-shadow: 0 0 0 0.1875rem hsla(var(--ig-primary-200), var(--ig-primary-a));
}
:host(:not([disabled])[variant=fab]) [part=base]::before,
:host(:not([disabled])[variant=contained]) [part=base]::before {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  opacity: 1;
}
:host(:not([disabled])[variant=fab]) [part=base]:hover::before, :host(:not([disabled])[variant=fab]) [part=base]:focus::before, :host(:not([disabled])[variant=fab]) [part=base]:active::before,
:host(:not([disabled])[variant=contained]) [part=base]:hover::before,
:host(:not([disabled])[variant=contained]) [part=base]:focus::before,
:host(:not([disabled])[variant=contained]) [part=base]:active::before {
  background: hsla(var(--ig-primary-400), var(--ig-primary-a));
  opacity: 1;
}

:host([disabled][variant=flat]) [part=base],
:host([disabled][variant=outlined]) [part=base] {
  background: transparent;
  -webkit-box-shadow: none;
          box-shadow: none;
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}

:host([disabled][variant=fab]) [part=base],
:host([disabled][variant=contained]) [part=base] {
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}`,se=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */
:host {
  --size: max(var(--is-large, 1) * 2.25rem, var(--is-medium, 1) * 1.875rem, var(--is-small, 1) * 1.5rem);
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  vertical-align: middle;
}
:host ::slotted(span) {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
}

:host([size=small]) {
  --component-size: var(--ig-size, var(--ig-size-small));
}

:host([size=medium]) {
  --component-size: var(--ig-size, var(--ig-size-medium));
}

:host([size=large]) {
  --component-size: var(--ig-size, var(--ig-size-large));
}

[part=base] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
  font-family: var(--ig-button-font-family);
  font-size: var(--ig-button-font-size);
  font-weight: var(--ig-button-font-weight);
  font-style: var(--ig-button-font-style);
  line-height: var(--ig-button-line-height);
  letter-spacing: var(--ig-button-letter-spacing);
  text-transform: var(--ig-button-text-transform);
  margin-top: var(--ig-button-margin-top);
  margin-bottom: var(--ig-button-margin-bottom);
  position: relative;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  border: none;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  outline-style: none;
  -webkit-tap-highlight-color: transparent;
  overflow: hidden;
  white-space: nowrap;
  text-decoration: none;
  z-index: 0;
  height: var(--size);
  padding: 0 max(var(--is-large, 1) * 16px * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * 12px * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * 8px * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}
[part=base]::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  z-index: -1;
  will-change: opacity;
  -webkit-transition: all 0.1s ease-out;
  -o-transition: all 0.1s ease-out;
  transition: all 0.1s ease-out;
}

:host(:not([disabled])) [part=base]:hover {
  cursor: pointer;
}

:host([disabled]) {
  pointer-events: none;
}
:host([disabled]) [part=base] {
  background: hsla(var(--ig-gray-300), var(--ig-gray-a));
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
  -webkit-box-shadow: none;
          box-shadow: none;
}

[name=prefix]::slotted(*) {
  -webkit-margin-end: max(var(--is-large, 1) * 8px * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * 8px * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * 8px * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
          margin-inline-end: max(var(--is-large, 1) * 8px * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * 8px * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * 8px * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}

[name=suffix]::slotted(*) {
  -webkit-margin-start: max(var(--is-large, 1) * 8px * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * 8px * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * 8px * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
          margin-inline-start: max(var(--is-large, 1) * 8px * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * 8px * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * 8px * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}

span[part=prefix],
span[part=suffix] {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

:host(:not([disabled])[variant=outlined]) [part=base], :host(:not([disabled])[variant=flat]) [part=base] {
  color: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  background: transparent;
}
:host(:not([disabled])[variant=outlined]) [part=base]::before, :host(:not([disabled])[variant=flat]) [part=base]::before {
  opacity: 0;
}
:host(:not([disabled])[variant=outlined]) [part=base]:hover::before, :host(:not([disabled])[variant=flat]) [part=base]:hover::before {
  background: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  opacity: 0.12;
}
:host(:not([disabled])[variant=outlined]) [part=base]:focus::before, :host(:not([disabled])[variant=flat]) [part=base]:focus::before, :host(:not([disabled])[variant=outlined]) [part=base]:active::before, :host(:not([disabled])[variant=flat]) [part=base]:active::before {
  background: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  opacity: 0.24;
}

:host([disabled][variant=flat]) [part=base] {
  background: transparent;
}

:host(:not([disabled])[variant=outlined]) [part=base] {
  -webkit-box-shadow: inset 0 0 0 1px hsla(var(--ig-secondary-500), var(--ig-secondary-a));
          box-shadow: inset 0 0 0 1px hsla(var(--ig-secondary-500), var(--ig-secondary-a));
}

:host([disabled][variant=outlined]) [part=base] {
  background: transparent;
  -webkit-box-shadow: inset 0 0 0 1px hsla(var(--ig-gray-300), var(--ig-gray-a));
          box-shadow: inset 0 0 0 1px hsla(var(--ig-gray-300), var(--ig-gray-a));
}

:host(:not([disabled])[variant=contained]) [part=base], :host(:not([disabled])[variant=fab]) [part=base] {
  background: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  color: var(--ig-secondary-500-contrast);
}

:host([variant=fab]) {
  --size: max(var(--is-large, 1) * 3rem, var(--is-medium, 1) * 2.5rem, var(--is-small, 1) * 2rem);
}

:host([variant=fab]) [part=base] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * calc(var(--size) / 2)), calc(var(--size) / 2));
  min-width: var(--size);
  min-height: var(--size);
}

:host(:not([disabled])[variant=fab]) [part=base], :host(:not([disabled])[variant=contained]) [part=base] {
  -webkit-transition: -webkit-box-shadow 0.1s ease-out;
  transition: -webkit-box-shadow 0.1s ease-out;
  -o-transition: box-shadow 0.1s ease-out;
  transition: box-shadow 0.1s ease-out;
  transition: box-shadow 0.1s ease-out, -webkit-box-shadow 0.1s ease-out;
}
:host(:not([disabled])[variant=fab]) [part=base]::before, :host(:not([disabled])[variant=contained]) [part=base]::before {
  opacity: 0;
}
:host(:not([disabled])[variant=fab]) [part=base]:hover, :host(:not([disabled])[variant=contained]) [part=base]:hover {
  -webkit-box-shadow: var(--ig-elevation-4);
          box-shadow: var(--ig-elevation-4);
}
:host(:not([disabled])[variant=fab]) [part=base]:hover::before, :host(:not([disabled])[variant=contained]) [part=base]:hover::before {
  background: #fff;
  opacity: 0.12;
}
:host(:not([disabled])[variant=fab]) [part=base]:focus, :host(:not([disabled])[variant=contained]) [part=base]:focus, :host(:not([disabled])[variant=fab]) [part=base]:active, :host(:not([disabled])[variant=contained]) [part=base]:active {
  -webkit-box-shadow: var(--ig-elevation-8);
          box-shadow: var(--ig-elevation-8);
}
:host(:not([disabled])[variant=fab]) [part=base]:focus::before, :host(:not([disabled])[variant=contained]) [part=base]:focus::before, :host(:not([disabled])[variant=fab]) [part=base]:active::before, :host(:not([disabled])[variant=contained]) [part=base]:active::before {
  background: #fff;
  opacity: 0.24;
}

:host(:not([disabled])[variant=contained]) [part=base] {
  -webkit-box-shadow: var(--ig-elevation-2);
          box-shadow: var(--ig-elevation-2);
}
:host(:not([disabled])[variant=contained]) [part=base]:hover {
  -webkit-box-shadow: var(--ig-elevation-4);
          box-shadow: var(--ig-elevation-4);
}
:host(:not([disabled])[variant=contained]) [part=base]:focus, :host(:not([disabled])[variant=contained]) [part=base]:active {
  -webkit-box-shadow: var(--ig-elevation-8);
          box-shadow: var(--ig-elevation-8);
}

:host(:not([disabled])[variant=fab]) [part=base] {
  -webkit-box-shadow: var(--ig-elevation-6);
          box-shadow: var(--ig-elevation-6);
}
:host(:not([disabled])[variant=fab]) [part=base]:hover, :host(:not([disabled])[variant=fab]) [part=base]:focus, :host(:not([disabled])[variant=fab]) [part=base]:active {
  -webkit-box-shadow: var(--ig-elevation-12);
          box-shadow: var(--ig-elevation-12);
}`;var ne=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};let le=class extends te{constructor(){super(),this.variant="contained",this.size="medium"}get classes(){const{size:e,variant:t}=this;return{flat:"flat"===t,outlined:"outlined"===t,contained:"contained"===t,fab:"fab"===t,small:"small"===e,medium:"medium"===e,large:"large"===e,disabled:this.disabled}}renderContent(){return r.dy`
      <span part="prefix">
        <slot name="prefix"></slot>
      </span>
      <slot></slot>
      <span part="suffix">
        <slot name="suffix"></slot>
      </span>
    `}};le.tagName="igc-button",le.styles=ae,ne([(0,i.Cb)({reflect:!0})],le.prototype,"variant",void 0),le=ne([p({bootstrap:re,indigo:oe,fluent:ie,material:se})],le);const ce=le;var ge=a(85618);const de={selectMonth:"Select month",selectYear:"Select year",selectDate:"Select date",selectRange:"Select range",selectedDate:"Selected date",startDate:"Start",endDate:"End",previousMonth:"Previous month",nextMonth:"Next month",previousYear:"Previous year",nextYear:"Next year",previousYears:"Previous {0} years",nextYears:"Next {0} years",weekLabel:"Wk"};function he(e){}var pe,be;!function(e){e[e.After=0]="After",e[e.Before=1]="Before",e[e.Between=2]="Between",e[e.Specific=3]="Specific",e[e.Weekdays=4]="Weekdays",e[e.Weekends=5]="Weekends"}(pe||(pe={})),function(e){e[e.Second=0]="Second",e[e.Minute=1]="Minute",e[e.Hour=2]="Hour",e[e.Day=3]="Day",e[e.Week=4]="Week",e[e.Month=5]="Month",e[e.Quarter=6]="Quarter",e[e.Year=7]="Year"}(be||(be={}));const ve=(e=0,t,a=1)=>{const r=[],i=void 0===t?e:t;for(let o=void 0===t?0:e;a<0?o>i:o<i;o+=a)r.push(o);return r},me=(e,t)=>{const a=(e=new Date(e.getFullYear(),e.getMonth(),e.getDate())).getTime();if(!t)return!1;for(const r of t){const t=r.dateRange?r.dateRange.map((e=>new Date(e.getFullYear(),e.getMonth(),e.getDate()))):[];switch(r.type){case pe.After:if(a>t[0].getTime())return!0;break;case pe.Before:if(a<t[0].getTime())return!0;break;case pe.Between:{const e=t.map((e=>e.getTime())),r=Math.min(e[0],e[1]),i=Math.max(e[0],e[1]);if(a>=r&&a<=i)return!0;break}case pe.Specific:{const e=t.map((e=>e.getTime()));for(const t of e)if(a===t)return!0;break}case pe.Weekdays:if(e.getDay()%6!=0)return!0;break;case pe.Weekends:if(e.getDay()%6==0)return!0;break;default:return!1}}return!1};var ue;!function(e){e[e.SUNDAY=0]="SUNDAY",e[e.MONDAY=1]="MONDAY",e[e.TUESDAY=2]="TUESDAY",e[e.WEDNESDAY=3]="WEDNESDAY",e[e.THURSDAY=4]="THURSDAY",e[e.FRIDAY=5]="FRIDAY",e[e.SATURDAY=6]="SATURDAY"}(ue||(ue={}));class fe{constructor(e=ue.SUNDAY){this._firstWeekDay=e}get firstWeekDay(){return this._firstWeekDay%7}set firstWeekDay(e){this._firstWeekDay=e}weekdays(){const e=[];for(const t of ve(this.firstWeekDay,this.firstWeekDay+7))e.push(t%7);return e}monthdates(e,t,a=!1){let r=new Date(e,t,1),i=(r.getDay()-this.firstWeekDay)%7;i<0&&(i=7-Math.abs(i)),r=this.timedelta(r,be.Day,-i);const o=[];let s;for(;;)if(s=this.generateICalendarDate(r,e,t),o.push(s),r=this.timedelta(r,be.Day,1),r.getMonth()!==t&&r.getDay()===this.firstWeekDay){if(a&&o.length<=35)for(const a of ve(0,7))s=this.generateICalendarDate(r,e,t),o.push(s),r=this.timedelta(r,be.Day,1);break}return o}monthdatescalendar(e,t,a=!1){const r=this.monthdates(e,t,a),i=[];for(const e of ve(0,r.length,7))i.push(r.slice(e,e+7));return i}timedelta(e,t,a){const r=new Date(e),i=()=>{r.getDate()!==e.getDate()&&r.setDate(0)};switch(t){case be.Year:r.setFullYear(r.getFullYear()+a),i();break;case be.Quarter:r.setMonth(r.getMonth()+3*a),i();break;case be.Month:r.setMonth(r.getMonth()+a),i();break;case be.Week:r.setDate(r.getDate()+7*a);break;case be.Day:r.setDate(r.getDate()+a);break;case be.Hour:r.setTime(r.getTime()+36e5*a);break;case be.Minute:r.setTime(r.getTime()+6e4*a);break;case be.Second:r.setTime(r.getTime()+1e3*a);break;default:throw new Error("Invalid interval specifier")}return r}getNextMonth(e){return this.timedelta(e,be.Month,1)}getPrevMonth(e){return this.timedelta(e,be.Month,-1)}getNextYear(e){return this.timedelta(e,be.Year,1)}getPrevYear(e){return this.timedelta(e,be.Year,-1)}getWeekNumber(e){const t=new Date(e.getFullYear(),0,1).getTime(),a=(new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()-t+1)/864e5;return Math.ceil(a/7)}generateICalendarDate(e,t,a){return{date:e,isCurrentMonth:e.getFullYear()===t&&e.getMonth()===a,isNextMonth:this.isNextMonth(e,t,a),isPrevMonth:this.isPreviousMonth(e,t,a)}}isPreviousMonth(e,t,a){return e.getFullYear()===t?e.getMonth()<a:e.getFullYear()<t}isNextMonth(e,t,a){return e.getFullYear()===t?e.getMonth()>a:e.getFullYear()>t}}const ye={sunday:0,monday:1,tuesday:2,wednesday:3,thursday:4,friday:5,saturday:6},we=864e13,ke=(new Date(we),new Date(-we),e=>e instanceof Date),xe=(e,t,a=!0)=>a?e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate():e.getTime()===t.getTime(),ze=(e,t)=>{e.setDate(t),e.getDate()!==t&&e.setDate(0)},Ce=(e,t)=>ke(e)&&ke(t)?e.getTime()===t.getTime():e===t,De=e=>{const t=(e=>!!ke(e)&&!isNaN(e.getTime()))(a=e)?a:new Date;var a;return new Date(t.getFullYear(),t.getMonth(),t.getDate())},Ie=(e,t)=>{const a=e.getFullYear();return Math.floor(a/t)*t};var Se=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};let $e=class extends r.oi{constructor(){super(...arguments),this.calendarModel=new fe,this.selection="single",this.showWeekNumbers=!1,this.weekStart="sunday",this.activeDate=new Date,this.locale="en"}weekStartChange(){var e;this.calendarModel.firstWeekDay=(e=this.weekStart,ye[e])}selectionChange(){this.value=void 0}};Se([(e,t)=>{},(0,i.Cb)({converter:{fromAttribute:e=>e?new Date(e):void 0,toAttribute:e=>e.toISOString()}})],$e.prototype,"value",void 0),Se([(e,t)=>{},(0,i.Cb)({converter:{fromAttribute:e=>e?e.split(",").map((e=>e.trim())).filter((e=>e)).map((e=>new Date(e))):void 0,toAttribute:e=>e.map((e=>e.toISOString())).join(",")}})],$e.prototype,"values",void 0),Se([(0,i.Cb)()],$e.prototype,"selection",void 0),Se([(0,i.Cb)({type:Boolean,attribute:"show-week-numbers",reflect:!0})],$e.prototype,"showWeekNumbers",void 0),Se([(0,i.Cb)({attribute:"week-start"})],$e.prototype,"weekStart",void 0),Se([(e,t)=>{},(0,i.Cb)({attribute:"active-date",converter:{fromAttribute:e=>e?new Date(e):new Date,toAttribute:e=>e.toISOString()}})],$e.prototype,"activeDate",void 0),Se([(0,i.Cb)()],$e.prototype,"locale",void 0),Se([(0,i.Cb)({attribute:!1})],$e.prototype,"disabledDates",void 0),Se([(0,i.Cb)({attribute:!1})],$e.prototype,"specialDates",void 0),Se([b("weekStart")],$e.prototype,"weekStartChange",null),Se([b("selection",{waitUntilFirstUpdate:!0})],$e.prototype,"selectionChange",null),$e=Se([he,J],$e);const Pe=r.iv`/* stylelint-disable max-line-length */
:host(igc-calendar) {
  border: 0.0625rem solid hsla(var(--ig-gray-300), var(--ig-gray-a));
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
}

:host(igc-calendar[size=large]) igc-days-view::part(date-inner),
:host(igc-calendar[size=large]) igc-months-view::part(month-inner),
:host(igc-calendar[size=large]) igc-years-view::part(year-inner),
:host(igc-calendar[size=medium]) igc-days-view::part(date-inner),
:host(igc-calendar[size=medium]) igc-months-view::part(month-inner),
:host(igc-calendar[size=medium]) igc-years-view::part(year-inner),
:host(igc-calendar[size=small]) igc-days-view::part(date-inner),
:host(igc-calendar[size=small]) igc-months-view::part(month-inner),
:host(igc-calendar[size=small]) igc-years-view::part(year-inner) {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
}

[part~=navigation-button] {
  color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}
[part~=navigation-button]:hover, [part~=navigation-button]:focus {
  color: hsla(var(--ig-primary-600), var(--ig-primary-a));
}

[part~=navigation],
[part~=header] {
  background: hsla(var(--ig-secondary-50), 0.2);
  color: var(--ig-gray-50-contrast);
}

[part=header-title] {
  font-family: var(--ig-subtitle-1-font-family);
  font-size: var(--ig-subtitle-1-font-size);
  font-weight: var(--ig-subtitle-1-font-weight);
  font-style: var(--ig-subtitle-1-font-style);
  line-height: var(--ig-subtitle-1-line-height);
  letter-spacing: var(--ig-subtitle-1-letter-spacing);
  text-transform: var(--ig-subtitle-1-text-transform);
  margin-top: var(--ig-subtitle-1-margin-top);
  margin-bottom: var(--ig-subtitle-1-margin-bottom);
}`,Me=r.iv`/* stylelint-disable max-line-length */
:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

:host(igc-calendar) {
  --size: max(var(--is-large, 1) * 2rem, var(--is-medium, 1) * 1.75rem, var(--is-small, 1) * 1.5rem);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  font-family: var(--ig-font-family);
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
  color: var(--ig-surface-500-contrast);
}
:host(igc-calendar) > * {
  font-family: var(--ig-font-family);
}
:host(igc-calendar) igc-days-view::part(date),
:host(igc-calendar) igc-days-view::part(week-number),
:host(igc-calendar) igc-days-view::part(label),
:host(igc-calendar) igc-days-view::part(days-row) {
  height: var(--size);
}
:host(igc-calendar) igc-days-view::part(week-number-inner),
:host(igc-calendar) igc-days-view::part(date-inner) {
  width: calc(var(--size) - 0.125rem);
  min-width: calc(var(--size) - 0.125rem);
  height: 100%;
}
:host(igc-calendar) igc-days-view::part(label) {
  min-width: var(--size);
  height: var(--size);
}
:host(igc-calendar) igc-days-view::part(date-inner) {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * calc(calc(var(--size) / 2) + 0.125rem)), calc(calc(var(--size) / 2) + 0.125rem));
}
:host(igc-calendar) igc-months-view {
  grid-template-rows: repeat(4, minmax(var(--size), 1fr));
}
:host(igc-calendar) igc-months-view::part(month-inner) {
  height: var(--size);
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * calc(calc(var(--size) / 2) + 0.125rem)), calc(calc(var(--size) / 2) + 0.125rem));
}
:host(igc-calendar) igc-years-view {
  grid-template-rows: repeat(5, minmax(var(--size), 1fr));
}
:host(igc-calendar) igc-years-view::part(year-inner) {
  height: var(--size);
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * calc(calc(var(--size) / 2) + 0.125rem)), calc(calc(var(--size) / 2) + 0.125rem));
}

:host(igc-calendar[size=large]) {
  --component-size: var(--ig-size, var(--ig-size-large));
}

:host(igc-calendar[size=medium]) {
  --component-size: var(--ig-size, var(--ig-size-medium));
}

:host(igc-calendar[size=small]) {
  --component-size: var(--ig-size, var(--ig-size-small));
}

[part=navigation] {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  height: 1.25rem;
  padding: 1.5625rem 1.125rem;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}

[part=months-navigation],
[part=years-navigation],
[part~=navigation-button] {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  background: transparent;
  border: none;
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
  font-size: 1rem;
  padding: 0;
  -webkit-transition: color 150ms ease-in-out;
  -o-transition: color 150ms ease-in-out;
  transition: color 150ms ease-in-out;
}
[part=months-navigation]:hover, [part=months-navigation]:focus,
[part=years-navigation]:hover,
[part=years-navigation]:focus,
[part~=navigation-button]:hover,
[part~=navigation-button]:focus {
  color: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  cursor: pointer;
}
[part=months-navigation]:focus,
[part=years-navigation]:focus,
[part~=navigation-button]:focus {
  outline: none;
}

[part~=navigation-button] {
  -webkit-margin-start: 1.5rem;
          margin-inline-start: 1.5rem;
}
[part~=navigation-button][part~=vertical] {
  -webkit-transform: rotate(90deg);
      -ms-transform: rotate(90deg);
          transform: rotate(90deg);
}

[part=navigation-buttons] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

:host(igc-calendar[header-orientation=vertical]) {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
}
:host(igc-calendar[header-orientation=vertical]) [part=header] {
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  width: 8.75rem;
}
:host(igc-calendar[header-orientation=vertical]) [part=header-date] {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

[part=days-view-container] {
  -webkit-box-flex: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
}

[part=header] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  padding: 1rem;
  background: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  color: var(--ig-secondary-600-contrast);
}

[part=header-date],
[part=header-title] {
  margin: 0;
}

[part=header-date] {
  font-family: var(--ig-h4-font-family);
  font-size: var(--ig-h4-font-size);
  font-weight: var(--ig-h4-font-weight);
  font-style: var(--ig-h4-font-style);
  line-height: var(--ig-h4-line-height);
  letter-spacing: var(--ig-h4-letter-spacing);
  text-transform: var(--ig-h4-text-transform);
  margin-top: var(--ig-h4-margin-top);
  margin-bottom: var(--ig-h4-margin-bottom);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  white-space: pre-wrap;
}

[part=header-title] {
  font-family: var(--ig-overline-font-family);
  font-size: var(--ig-overline-font-size);
  font-weight: var(--ig-overline-font-weight);
  font-style: var(--ig-overline-font-style);
  line-height: var(--ig-overline-line-height);
  letter-spacing: var(--ig-overline-letter-spacing);
  text-transform: var(--ig-overline-text-transform);
  margin-top: var(--ig-overline-margin-top);
  margin-bottom: var(--ig-overline-margin-bottom);
}

.aria-off-screen {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: none;
  clip: rect(0, 0, 0, 0);
  outline: 0;
  pointer-events: none;
  overflow: hidden;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}`,Ee=r.iv`/* stylelint-disable max-line-length */
:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

:host(igc-calendar) {
  --size: max(var(--is-large, 1) * 2rem, var(--is-medium, 1) * 1.75rem, var(--is-small, 1) * 1.5rem);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  font-family: var(--ig-font-family);
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
  color: var(--ig-surface-500-contrast);
}
:host(igc-calendar) > * {
  font-family: var(--ig-font-family);
}
:host(igc-calendar) igc-days-view::part(date),
:host(igc-calendar) igc-days-view::part(week-number),
:host(igc-calendar) igc-days-view::part(label),
:host(igc-calendar) igc-days-view::part(days-row) {
  height: var(--size);
}
:host(igc-calendar) igc-days-view::part(week-number-inner),
:host(igc-calendar) igc-days-view::part(date-inner) {
  width: calc(var(--size) - 0.125rem);
  min-width: calc(var(--size) - 0.125rem);
  height: 100%;
}
:host(igc-calendar) igc-days-view::part(label) {
  min-width: var(--size);
  height: var(--size);
}
:host(igc-calendar) igc-days-view::part(date-inner) {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * calc(calc(var(--size) / 2) + 0.125rem)), calc(calc(var(--size) / 2) + 0.125rem));
}
:host(igc-calendar) igc-months-view {
  grid-template-rows: repeat(4, minmax(var(--size), 1fr));
}
:host(igc-calendar) igc-months-view::part(month-inner) {
  height: var(--size);
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * calc(calc(var(--size) / 2) + 0.125rem)), calc(calc(var(--size) / 2) + 0.125rem));
}
:host(igc-calendar) igc-years-view {
  grid-template-rows: repeat(5, minmax(var(--size), 1fr));
}
:host(igc-calendar) igc-years-view::part(year-inner) {
  height: var(--size);
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * calc(calc(var(--size) / 2) + 0.125rem)), calc(calc(var(--size) / 2) + 0.125rem));
}

:host(igc-calendar[size=large]) {
  --component-size: var(--ig-size, var(--ig-size-large));
}

:host(igc-calendar[size=medium]) {
  --component-size: var(--ig-size, var(--ig-size-medium));
}

:host(igc-calendar[size=small]) {
  --component-size: var(--ig-size, var(--ig-size-small));
}

[part=navigation] {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  height: 1.25rem;
  padding: 1.5625rem 1.125rem;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}

[part=months-navigation],
[part=years-navigation],
[part~=navigation-button] {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  background: transparent;
  border: none;
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
  font-size: 1rem;
  padding: 0;
  -webkit-transition: color 150ms ease-in-out;
  -o-transition: color 150ms ease-in-out;
  transition: color 150ms ease-in-out;
}
[part=months-navigation]:hover, [part=months-navigation]:focus,
[part=years-navigation]:hover,
[part=years-navigation]:focus,
[part~=navigation-button]:hover,
[part~=navigation-button]:focus {
  color: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  cursor: pointer;
}
[part=months-navigation]:focus,
[part=years-navigation]:focus,
[part~=navigation-button]:focus {
  outline: none;
}

[part~=navigation-button] {
  -webkit-margin-start: 1.5rem;
          margin-inline-start: 1.5rem;
}
[part~=navigation-button][part~=vertical] {
  -webkit-transform: rotate(90deg);
      -ms-transform: rotate(90deg);
          transform: rotate(90deg);
}

[part=navigation-buttons] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

:host(igc-calendar[header-orientation=vertical]) {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
}
:host(igc-calendar[header-orientation=vertical]) [part=header] {
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  width: 8.75rem;
}
:host(igc-calendar[header-orientation=vertical]) [part=header-date] {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

[part=days-view-container] {
  -webkit-box-flex: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
}

[part=header] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  padding: 1rem;
  background: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  color: var(--ig-secondary-600-contrast);
}

[part=header-date],
[part=header-title] {
  margin: 0;
}

[part=header-date] {
  font-family: var(--ig-h4-font-family);
  font-size: var(--ig-h4-font-size);
  font-weight: var(--ig-h4-font-weight);
  font-style: var(--ig-h4-font-style);
  line-height: var(--ig-h4-line-height);
  letter-spacing: var(--ig-h4-letter-spacing);
  text-transform: var(--ig-h4-text-transform);
  margin-top: var(--ig-h4-margin-top);
  margin-bottom: var(--ig-h4-margin-bottom);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  white-space: pre-wrap;
}

[part=header-title] {
  font-family: var(--ig-overline-font-family);
  font-size: var(--ig-overline-font-size);
  font-weight: var(--ig-overline-font-weight);
  font-style: var(--ig-overline-font-style);
  line-height: var(--ig-overline-line-height);
  letter-spacing: var(--ig-overline-letter-spacing);
  text-transform: var(--ig-overline-text-transform);
  margin-top: var(--ig-overline-margin-top);
  margin-bottom: var(--ig-overline-margin-bottom);
}

.aria-off-screen {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: none;
  clip: rect(0, 0, 0, 0);
  outline: 0;
  pointer-events: none;
  overflow: hidden;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}

:host(igc-calendar[size=large]) igc-days-view::part(date-inner),
:host(igc-calendar[size=large]) igc-months-view::part(month-inner),
:host(igc-calendar[size=large]) igc-years-view::part(year-inner),
:host(igc-calendar[size=medium]) igc-days-view::part(date-inner),
:host(igc-calendar[size=medium]) igc-months-view::part(month-inner),
:host(igc-calendar[size=medium]) igc-years-view::part(year-inner),
:host(igc-calendar[size=small]) igc-days-view::part(date-inner),
:host(igc-calendar[size=small]) igc-months-view::part(month-inner),
:host(igc-calendar[size=small]) igc-years-view::part(year-inner) {
  border-radius: 0;
}`;function Te(e){}const Oe=r.iv`/* stylelint-disable max-line-length */
:host {
  -webkit-padding-before: 1rem;
          padding-block-start: 1rem;
}

[part~=month-inner],
[part~=year-inner] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
}

[part~=month-inner][part~=selected],
[part~=year-inner][part~=selected] {
  color: var(--ig-primary-600-contrast);
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
}
[part~=month-inner][part~=selected]:focus, [part~=month-inner][part~=selected]:hover,
[part~=year-inner][part~=selected]:focus,
[part~=year-inner][part~=selected]:hover {
  color: var(--ig-primary-600-contrast);
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
}

[part~=month-inner][part~=current],
[part~=year-inner][part~=current] {
  -webkit-box-shadow: none;
          box-shadow: none;
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
}
[part~=month-inner][part~=current]:hover, [part~=month-inner][part~=current]:focus,
[part~=year-inner][part~=current]:hover,
[part~=year-inner][part~=current]:focus {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
}

[part~=month-inner][part~=selected][part~=current],
[part~=year-inner][part~=selected][part~=current] {
  -webkit-box-shadow: none;
          box-shadow: none;
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  color: var(--ig-primary-600-contrast);
}
[part~=month-inner][part~=selected][part~=current]:hover, [part~=month-inner][part~=selected][part~=current]:focus,
[part~=year-inner][part~=selected][part~=current]:hover,
[part~=year-inner][part~=selected][part~=current]:focus {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  color: var(--ig-primary-600-contrast);
}

[part~=months-navigation]:focus, [part~=months-navigation]:hover,
[part~=years-navigation]:focus,
[part~=years-navigation]:hover {
  color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}`,Ve=r.iv`/* stylelint-disable max-line-length */
:host {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  min-width: 18.125rem;
  outline: none;
  padding: 0 0.75rem 1rem 0.75rem;
  overflow: hidden;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  gap: 0.25rem;
}

[part=months-row],
[part=years-row] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

[part~=month],
[part~=year] {
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
}

[part~=month],
[part~=year],
[part~=month-inner],
[part~=year-inner] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

[part~=month-inner],
[part~=year-inner] {
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  cursor: pointer;
  padding: 0 0.75rem;
}
[part~=month-inner]:hover, [part~=month-inner]:focus,
[part~=year-inner]:hover,
[part~=year-inner]:focus {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
}
[part~=month-inner]:hover,
[part~=year-inner]:hover {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
}

[part~=month-inner][part~=selected],
[part~=year-inner][part~=selected] {
  background: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  color: var(--ig-secondary-600-contrast);
}
[part~=month-inner][part~=selected]:hover,
[part~=year-inner][part~=selected]:hover {
  background: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  color: var(--ig-secondary-600-contrast);
}
[part~=month-inner][part~=selected]:focus,
[part~=year-inner][part~=selected]:focus {
  outline: none;
  background: hsla(var(--ig-secondary-700), var(--ig-secondary-a));
  color: var(--ig-secondary-700-contrast);
}

[part~=month-inner][part~=current],
[part~=year-inner][part~=current] {
  -webkit-box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-gray-600), var(--ig-gray-a));
          box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-gray-600), var(--ig-gray-a));
}

[part~=month-inner][part~=selected][part~=current],
[part~=year-inner][part~=selected][part~=current] {
  -webkit-box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-surface-500), var(--ig-surface-a)), 0 0 0 0.0625rem hsla(var(--ig-secondary-500), var(--ig-secondary-a));
          box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-surface-500), var(--ig-surface-a)), 0 0 0 0.0625rem hsla(var(--ig-secondary-500), var(--ig-secondary-a));
}

[part~=month-inner][part~=current],
[part~=year-inner][part~=current] {
  -webkit-box-shadow: none;
          box-shadow: none;
  background: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  color: var(--ig-secondary-600-contrast);
}
[part~=month-inner][part~=current]:hover, [part~=month-inner][part~=current]:focus,
[part~=year-inner][part~=current]:hover,
[part~=year-inner][part~=current]:focus {
  background: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  color: var(--ig-secondary-600-contrast);
}

[part~=month-inner][part~=selected][part~=current],
[part~=year-inner][part~=selected][part~=current] {
  -webkit-box-shadow: none;
          box-shadow: none;
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
  color: var(--ig-gray-200-contrast);
}
[part~=month-inner][part~=selected][part~=current]:hover, [part~=month-inner][part~=selected][part~=current]:focus,
[part~=year-inner][part~=selected][part~=current]:hover,
[part~=year-inner][part~=selected][part~=current]:focus {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
  color: var(--ig-gray-200-contrast);
}`,Re=r.iv`/* stylelint-disable max-line-length */
:host {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  min-width: 18.125rem;
  outline: none;
  padding: 0 0.75rem 1rem 0.75rem;
  overflow: hidden;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  gap: 0.25rem;
}

[part=months-row],
[part=years-row] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

[part~=month],
[part~=year] {
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
}

[part~=month],
[part~=year],
[part~=month-inner],
[part~=year-inner] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

[part~=month-inner],
[part~=year-inner] {
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  cursor: pointer;
  padding: 0 0.75rem;
}
[part~=month-inner]:hover, [part~=month-inner]:focus,
[part~=year-inner]:hover,
[part~=year-inner]:focus {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
}
[part~=month-inner]:hover,
[part~=year-inner]:hover {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
}

[part~=month-inner][part~=selected],
[part~=year-inner][part~=selected] {
  background: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  color: var(--ig-secondary-600-contrast);
}
[part~=month-inner][part~=selected]:hover,
[part~=year-inner][part~=selected]:hover {
  background: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  color: var(--ig-secondary-600-contrast);
}
[part~=month-inner][part~=selected]:focus,
[part~=year-inner][part~=selected]:focus {
  outline: none;
  background: hsla(var(--ig-secondary-700), var(--ig-secondary-a));
  color: var(--ig-secondary-700-contrast);
}

[part~=month-inner][part~=current],
[part~=year-inner][part~=current] {
  -webkit-box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-gray-600), var(--ig-gray-a));
          box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-gray-600), var(--ig-gray-a));
}

[part~=month-inner][part~=selected][part~=current],
[part~=year-inner][part~=selected][part~=current] {
  -webkit-box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-surface-500), var(--ig-surface-a)), 0 0 0 0.0625rem hsla(var(--ig-secondary-500), var(--ig-secondary-a));
          box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-surface-500), var(--ig-surface-a)), 0 0 0 0.0625rem hsla(var(--ig-secondary-500), var(--ig-secondary-a));
}`;var Ae=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};let Fe=class extends(z(r.oi)){constructor(){super(),this.value=new Date,this.yearsPerPage=15,this.setAttribute("role","grid")}datesChange(){this.years=this.generateYears()}focusActiveDate(){this.activeYear.focus()}formattedYear(e){return`${e.getFullYear()}`}generateYears(){const e=Ie(this.value,this.yearsPerPage),t=this.value.getMonth(),a=[],r=this.yearsPerPage/3;for(let i=0;i<r;i++){const r=[];for(let a=0;a<3;a++){const o=e+3*i+a,s=new Date(o,t,1);s.setFullYear(o),r.push(s)}a.push(r)}return a}resolveYearPartName(e){const t=new Date;return{year:!0,selected:e.getFullYear()===this.value.getFullYear(),current:e.getFullYear()===t.getFullYear()}}selectYear(e){const t=new Date(e);ze(t,this.value.getDate()),this.value=t,this.emitEvent("igcChange",{detail:this.value})}yearKeyDown(e,t){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this.selectYear(t))}render(){return r.dy`${this.years.map((e=>r.dy`<div part="years-row" role="row">
        ${e.map((e=>{const t=$(this.resolveYearPartName(e)),a=t.replace("year","year-inner");return r.dy`<span part=${t}>
            <span
              part=${a}
              role="gridcell"
              aria-selected=${e.getFullYear()===this.value.getFullYear()}
              tabindex="${e.getFullYear()===this.value.getFullYear()?0:-1}"
              @click=${()=>this.selectYear(e)}
              @keydown=${t=>this.yearKeyDown(t,e)}
            >
              ${this.formattedYear(e)}
            </span>
          </span>`}))}
      </div>`))}`}};Fe.tagName="igc-years-view",Fe.styles=Re,Ae([(0,i.IO)('[tabindex="0"]')],Fe.prototype,"activeYear",void 0),Ae([(0,i.Cb)({attribute:!1})],Fe.prototype,"value",void 0),Ae([(0,i.Cb)({type:Number,attribute:"years-per-page"})],Fe.prototype,"yearsPerPage",void 0),Ae([b("value"),b("yearsPerPage")],Fe.prototype,"datesChange",null),Fe=Ae([he,Te,p({bootstrap:Oe,fluent:Ve})],Fe);const Le=Fe,je=r.iv`/* stylelint-disable max-line-length */
:host([part=days-view]) {
  overflow: hidden;
  position: relative;
  padding: 0 0 0.25rem 0;
  gap: 0.25rem;
}

:host([part=days-view]) + :host([part=days-view]) {
  -webkit-margin-start: 0.5rem;
          margin-inline-start: 0.5rem;
}

[part~=days-row][part~=first] {
  background: hsla(var(--ig-secondary-50), 0.2);
  border-bottom: 0.0625rem solid hsla(var(--ig-gray-300), var(--ig-gray-a));
}

[part~=label] {
  font-style: italic;
  color: hsla(var(--ig-info-300), var(--ig-info-a));
}

[part~=date-inner] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
}

[part~=date-inner][part~=current] {
  -webkit-box-shadow: none;
          box-shadow: none;
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
  border-color: hsla(var(--ig-gray-200), var(--ig-gray-a));
}
[part~=date-inner][part~=current]:hover {
  -webkit-box-shadow: none;
          box-shadow: none;
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
  border-color: hsla(var(--ig-gray-200), var(--ig-gray-a));
}

[part~=date-inner][part~=selected][part~=single],
[part~=date-inner][part~=selected][part~=weekend][part~=single],
[part~=date-inner][part~=selected][part~=weekend][part~=current][part~=single],
[part~=date-inner][part~=selected][part~=current][part~=single] {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  color: var(--ig-primary-600-contrast);
}
[part~=date-inner][part~=selected][part~=single]:focus, [part~=date-inner][part~=selected][part~=single]:hover,
[part~=date-inner][part~=selected][part~=weekend][part~=single]:focus,
[part~=date-inner][part~=selected][part~=weekend][part~=single]:hover,
[part~=date-inner][part~=selected][part~=weekend][part~=current][part~=single]:focus,
[part~=date-inner][part~=selected][part~=weekend][part~=current][part~=single]:hover,
[part~=date-inner][part~=selected][part~=current][part~=single]:focus,
[part~=date-inner][part~=selected][part~=current][part~=single]:hover {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  color: var(--ig-primary-600-contrast);
}

[part~=date-inner][part~=first][part~=last][part~=selected],
[part~=date-inner][part~=first][part~=selected][part~=range],
[part~=date-inner][part~=first][part~=selected][part~=range][part~=preview],
[part~=date-inner][part~=last][part~=selected][part~=range],
[part~=date-inner][part~=last][part~=selected][part~=range][part~=preview],
[part~=date-inner][part~=selected][part~=range],
[part~=date-inner][part~=selected][part~=range][part~=preview] {
  border-radius: 0 !important;
}

[part~=date-inner][part~=selected][part~=range],
[part~=date-inner][part~=selected][part~=range][part~=weekend],
[part~=date-inner][part~=selected][part~=range][part~=preview],
[part~=date-inner][part~=selected][part~=range][part~=current] {
  background: hsla(var(--ig-primary-200), var(--ig-primary-a));
  border-color: hsla(var(--ig-primary-200), var(--ig-primary-a));
  color: var(--ig-primary-600-contrast);
}
[part~=date-inner][part~=selected][part~=range]:hover, [part~=date-inner][part~=selected][part~=range]:focus,
[part~=date-inner][part~=selected][part~=range][part~=weekend]:hover,
[part~=date-inner][part~=selected][part~=range][part~=weekend]:focus,
[part~=date-inner][part~=selected][part~=range][part~=preview]:hover,
[part~=date-inner][part~=selected][part~=range][part~=preview]:focus,
[part~=date-inner][part~=selected][part~=range][part~=current]:hover,
[part~=date-inner][part~=selected][part~=range][part~=current]:focus {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  color: var(--ig-primary-600-contrast);
}

[part~=date][part~=range],
[part~=date][part~=range][part~=preview] {
  border-top-style: solid;
  border-bottom-style: solid;
  background: hsla(var(--ig-primary-200), var(--ig-primary-a));
  border-top-color: hsla(var(--ig-primary-200), var(--ig-primary-a));
  border-bottom-color: hsla(var(--ig-primary-200), var(--ig-primary-a));
}

[part~=date][part~=first][part~=range],
[part~=date][part~=last][part~=range] {
  background: transparent;
  border-top-color: transparent;
  border-bottom-color: transparent;
}

[part~=date-inner][part~=range][part~=preview],
[part~=date-inner][part~=range] {
  color: var(--ig-primary-600-contrast);
}

[part~=date][part~=first][part~=selected][part~=range]::after,
[part~=date][part~=first][part~=range][part~=preview]::after,
[part~=date][part~=last][part~=selected][part~=range]::after,
[part~=date][part~=last][part~=range][part~=preview]::after {
  background: hsla(var(--ig-primary-200), var(--ig-primary-a));
  border-color: hsla(var(--ig-primary-200), var(--ig-primary-a));
}

[part~=date-inner][part~=current][part~=selected],
[part~=date-inner][part~=current][part~=range][part~=selected],
[part~=date-inner][part~=current][part~=range][part~=preview] {
  border-color: hsla(var(--ig-primary-200), var(--ig-primary-a));
  background: hsla(var(--ig-primary-200), var(--ig-primary-a));
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
  position: relative;
}
[part~=date-inner][part~=current][part~=selected]:hover,
[part~=date-inner][part~=current][part~=range][part~=selected]:hover,
[part~=date-inner][part~=current][part~=range][part~=preview]:hover {
  border-color: hsla(var(--ig-primary-200), var(--ig-primary-a));
  background: hsla(var(--ig-primary-200), var(--ig-primary-a));
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
}
[part~=date-inner][part~=current][part~=selected]::after,
[part~=date-inner][part~=current][part~=range][part~=selected]::after,
[part~=date-inner][part~=current][part~=range][part~=preview]::after {
  content: "";
  position: absolute;
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
  z-index: -1;
}

[part~=date-inner][part~=current][part~=selected] {
  -webkit-box-shadow: none;
          box-shadow: none;
}

[part~=date-inner][part~=current][part~=single]:focus, [part~=date-inner][part~=current][part~=single]:hover {
  -webkit-box-shadow: none;
          box-shadow: none;
}

[part~=date-inner][part~=current][part~=selected][part~=single] {
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}
[part~=date-inner][part~=current][part~=selected][part~=single]:focus, [part~=date-inner][part~=current][part~=selected][part~=single]:hover {
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}

[part~=date-inner][part~=last][part~=range][part~=preview],
[part~=date-inner][part~=first][part~=range][part~=preview],
[part~=date-inner][part~=first][part~=last][part~=selected],
[part~=date-inner][part~=first][part~=selected][part~=range],
[part~=date-inner][part~=last][part~=selected][part~=range],
[part~=date-inner][part~=first][part~=range][part~=pewview],
[part~=date-inner][part~=first][part~=range][part~=current][part~=preview],
[part~=date-inner][part~=last][part~=range][part~=pewview],
[part~=date-inner][part~=last][part~=range][part~=current][part~=preview] {
  border-radius: 0 !important;
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  color: var(--ig-primary-600-contrast);
}
[part~=date-inner][part~=last][part~=range][part~=preview]:hover, [part~=date-inner][part~=last][part~=range][part~=preview]:focus,
[part~=date-inner][part~=first][part~=range][part~=preview]:hover,
[part~=date-inner][part~=first][part~=range][part~=preview]:focus,
[part~=date-inner][part~=first][part~=last][part~=selected]:hover,
[part~=date-inner][part~=first][part~=last][part~=selected]:focus,
[part~=date-inner][part~=first][part~=selected][part~=range]:hover,
[part~=date-inner][part~=first][part~=selected][part~=range]:focus,
[part~=date-inner][part~=last][part~=selected][part~=range]:hover,
[part~=date-inner][part~=last][part~=selected][part~=range]:focus,
[part~=date-inner][part~=first][part~=range][part~=pewview]:hover,
[part~=date-inner][part~=first][part~=range][part~=pewview]:focus,
[part~=date-inner][part~=first][part~=range][part~=current][part~=preview]:hover,
[part~=date-inner][part~=first][part~=range][part~=current][part~=preview]:focus,
[part~=date-inner][part~=last][part~=range][part~=pewview]:hover,
[part~=date-inner][part~=last][part~=range][part~=pewview]:focus,
[part~=date-inner][part~=last][part~=range][part~=current][part~=preview]:hover,
[part~=date-inner][part~=last][part~=range][part~=current][part~=preview]:focus {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  color: var(--ig-primary-600-contrast);
}

[part~=date-inner][part~=first][part~=last][part~=selected][part~=current]:hover, [part~=date-inner][part~=first][part~=last][part~=selected][part~=current]:focus,
[part~=date-inner][part~=last][part~=range][part~=current][part~=preview]:hover,
[part~=date-inner][part~=last][part~=range][part~=current][part~=preview]:focus,
[part~=date-inner][part~=first][part~=range][part~=current][part~=preview]:hover,
[part~=date-inner][part~=first][part~=range][part~=current][part~=preview]:focus {
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
}

[part~=date-inner][part~=first][part~=current][part~=range][part~=preview],
[part~=date-inner][part~=first][part~=current][part~=range][part~=selected],
[part~=date-inner][part~=last][part~=current][part~=range][part~=preview],
[part~=date-inner][part~=last][part~=current][part~=range][part~=selected] {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}

[part~=date-inner][part~=first][part~=selected][part~=current][part~=range],
[part~=date-inner][part~=last][part~=selected][part~=current][part~=range] {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
}
[part~=date-inner][part~=first][part~=selected][part~=current][part~=range]:hover, [part~=date-inner][part~=first][part~=selected][part~=current][part~=range]:focus,
[part~=date-inner][part~=last][part~=selected][part~=current][part~=range]:hover,
[part~=date-inner][part~=last][part~=selected][part~=current][part~=range]:focus {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
}

[part~=date-inner][part~=selected][part~=current][part~=range] {
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
}
[part~=date-inner][part~=selected][part~=current][part~=range]:hover, [part~=date-inner][part~=selected][part~=current][part~=range]:focus {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
}

[part~=week-number-inner] {
  font-style: italic;
  background: transparent;
  border: none;
}
[part~=week-number-inner]::after {
  display: none;
}

[part~=date-inner][part~=special] {
  background: hsla(var(--ig-primary-300), var(--ig-primary-a));
  border-color: hsla(var(--ig-primary-300), var(--ig-primary-a));
  color: var(--ig-primary-600-contrast);
}

[part~=date-inner][part~=special][part~=selected] {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  color: var(--ig-primary-600-contrast);
}`,_e=r.iv`/* stylelint-disable max-line-length */
:host([part=days-view]) {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  min-width: 18.125rem;
  outline: none;
  padding: 0 0.75rem 1rem 0.75rem;
  overflow: hidden;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  gap: 0.375rem;
}

[part~=days-row] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

[part~=date-inner] {
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  z-index: 2;
}
[part~=date-inner]:hover, [part~=date-inner]:focus {
  background: hsla(var(--ig-secondary-100), var(--ig-secondary-a));
  color: var(--ig-secondary-100-contrast);
  border-color: hsla(var(--ig-secondary-100), var(--ig-secondary-a));
}

[part~=date-inner][part~=current][part~=selected] {
  -webkit-box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-surface-500), var(--ig-surface-a)), 0 0 0 0.0625rem hsla(var(--ig-secondary-500), var(--ig-secondary-a));
          box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-surface-500), var(--ig-surface-a)), 0 0 0 0.0625rem hsla(var(--ig-secondary-500), var(--ig-secondary-a));
}

[part~=current][part~=date-inner] {
  -webkit-box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-gray-600), var(--ig-gray-a));
          box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-gray-600), var(--ig-gray-a));
}
[part~=current][part~=date-inner]:hover, [part~=current][part~=date-inner]:focus {
  -webkit-box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-surface-500), var(--ig-surface-a));
          box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-surface-500), var(--ig-surface-a));
}

[part~=date],
[part~=week-number],
[part~=label] {
  font-size: var(--ig-subtitle-1-font-size);
  width: 100%;
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  outline: none;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  border-top: 0.0625rem solid transparent;
  border-bottom: 0.0625rem solid transparent;
}

[part=label-inner] {
  -o-text-overflow: ellipsis;
     text-overflow: ellipsis;
  overflow: hidden;
  min-width: 4ch;
  text-align: center;
}

[part~=date-inner],
[part~=week-number-inner] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  border: 0.0625rem solid transparent;
}
[part~=date-inner]:focus,
[part~=week-number-inner]:focus {
  outline: none;
}

[part~=date][part~=range] {
  background: hsla(var(--ig-secondary-50), var(--ig-secondary-a));
}

[part~=date][part~=range][part~=preview] {
  background: transparent;
  border-top: 0.0625rem dashed hsla(var(--ig-gray-300), var(--ig-gray-a));
  border-bottom: 0.0625rem dashed hsla(var(--ig-gray-300), var(--ig-gray-a));
}

[part~=date][part~=range][part~=preview][part~=first],
[part~=date][part~=range][part~=preview][part~=last] {
  background: transparent;
  border-top-color: transparent;
  border-bottom-color: transparent;
}
[part~=date][part~=range][part~=preview][part~=first]::after,
[part~=date][part~=range][part~=preview][part~=last]::after {
  border-top: 0.0625rem dashed hsla(var(--ig-gray-300), var(--ig-gray-a));
  border-bottom: 0.0625rem dashed hsla(var(--ig-gray-300), var(--ig-gray-a));
  background: transparent;
}

[part~=date][part~=range][part~=first],
[part~=date][part~=range][part~=last] {
  background: transparent;
}
[part~=date][part~=range][part~=first]::after,
[part~=date][part~=range][part~=last]::after {
  content: "";
  position: absolute;
  height: 100%;
  width: calc(50% + 0.0625rem);
  background: hsla(var(--ig-secondary-50), var(--ig-secondary-a));
  border-top: 0.0625rem solid hsla(var(--ig-secondary-50), var(--ig-secondary-a));
  border-bottom: 0.0625rem solid hsla(var(--ig-secondary-50), var(--ig-secondary-a));
  z-index: 1;
}

[part~=date][part~=range][part~=first]::after {
  inset-inline-start: 50%;
}

[part~=date][part~=range][part~=last]::after {
  inset-inline-end: calc(50% - 0.0625rem);
}

[part~=date][part~=range] + [part~=date][part~=range][part~=last]::after {
  inset-inline-end: 50%;
}

[part~=date-inner][part~=inactive],
[part~=date-inner][part~=label],
[part~=date-inner][part~=disabled] {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

[part~=date-inner][part~=weekend]:hover, [part~=date-inner][part~=weekend]:focus,
[part~=date-inner][part~=inactive]:hover,
[part~=date-inner][part~=inactive]:focus {
  color: var(--ig-secondary-100-contrast);
}

[part~=date-inner][part~=selected][part~=range][part~=first],
[part~=date-inner][part~=selected][part~=range][part~=last],
[part~=date-inner][part~=selected][part~=range][part~=weekend][part~=first],
[part~=date-inner][part~=selected][part~=range][part~=weekend][part~=last],
[part~=date-inner][part~=selected][part~=range][part~=inactive][part~=first],
[part~=date-inner][part~=selected][part~=range][part~=inactive][part~=last] {
  color: var(--ig-secondary-700-contrast);
}

[part~=date-inner][part~=selected][part~=range][part~=weekend],
[part~=date-inner][part~=selected][part~=range][part~=inactive],
[part~=date-inner][part~=selected][part~=range] {
  color: var(--ig-secondary-50-contrast);
}
[part~=date-inner][part~=selected][part~=range][part~=weekend]:hover, [part~=date-inner][part~=selected][part~=range][part~=weekend]:focus,
[part~=date-inner][part~=selected][part~=range][part~=inactive]:hover,
[part~=date-inner][part~=selected][part~=range][part~=inactive]:focus,
[part~=date-inner][part~=selected][part~=range]:hover,
[part~=date-inner][part~=selected][part~=range]:focus {
  color: var(--ig-secondary-100-contrast);
  background: hsla(var(--ig-secondary-100), var(--ig-secondary-a));
  border-color: hsla(var(--ig-secondary-100), var(--ig-secondary-a));
}

[part~=date-inner][part~=selected][part~=range][part~=first],
[part~=date-inner][part~=selected][part~=range][part~=last],
[part~=date-inner][part~=selected]:not([part~=range]) {
  background: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  border-color: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
}
[part~=date-inner][part~=selected][part~=range][part~=first]:hover, [part~=date-inner][part~=selected][part~=range][part~=first]:focus,
[part~=date-inner][part~=selected][part~=range][part~=last]:hover,
[part~=date-inner][part~=selected][part~=range][part~=last]:focus,
[part~=date-inner][part~=selected]:not([part~=range]):hover,
[part~=date-inner][part~=selected]:not([part~=range]):focus {
  background: hsla(var(--ig-secondary-700), var(--ig-secondary-a));
  border-color: hsla(var(--ig-secondary-700), var(--ig-secondary-a));
  color: var(--ig-secondary-700-contrast);
}

[part~=date-inner][part~=selected][part~=weekend]:not([part~=range]),
[part~=date-inner][part~=selected][part~=inactive]:not([part~=range]),
[part~=date-inner][part~=selected]:not([part~=range]) {
  color: var(--ig-secondary-700-contrast);
}

[part~=week-number] {
  -webkit-box-ordinal-group: 1;
      -ms-flex-order: 0;
          order: 0;
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
  cursor: default;
}

[part="week-number-inner first"] {
  border-top-left-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
  border-top-right-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
}
[part="week-number-inner first"]::after {
  display: none;
}

[part="week-number-inner last"] {
  border-bottom-left-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
  border-bottom-right-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
}

[part~=week-number-inner] {
  position: relative;
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
  border-inline-end-color: hsla(var(--ig-gray-200), var(--ig-gray-a));
}
[part~=week-number-inner]::after {
  content: "";
  position: absolute;
  bottom: 100%;
  height: calc(0.375rem + (0.0625rem * 2 + 2px));
  width: 100%;
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
  -webkit-border-start: 0.0625rem solid hsla(var(--ig-gray-200), var(--ig-gray-a));
          border-inline-start: 0.0625rem solid hsla(var(--ig-gray-200), var(--ig-gray-a));
  -webkit-border-end: 0.0625rem solid hsla(var(--ig-gray-200), var(--ig-gray-a));
          border-inline-end: 0.0625rem solid hsla(var(--ig-gray-200), var(--ig-gray-a));
}

[part~=date-inner][part~=disabled] {
  pointer-events: none;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  cursor: not-allowed;
}

[part~=date-inner][part~=special][part~=range],
[part~=date-inner][part~=special] {
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
  border-color: hsla(var(--ig-gray-100), var(--ig-gray-a));
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  font-weight: 900;
}
[part~=date-inner][part~=special][part~=range]:hover, [part~=date-inner][part~=special][part~=range]:focus,
[part~=date-inner][part~=special]:hover,
[part~=date-inner][part~=special]:focus {
  background: hsla(var(--ig-secondary-100), var(--ig-secondary-a));
  border-color: hsla(var(--ig-secondary-100), var(--ig-secondary-a));
}

[part~=hidden] {
  visibility: hidden;
}`,Xe=r.iv`/* stylelint-disable max-line-length */
[part~=date-inner]:focus, [part~=date-inner]:hover {
  background: hsla(var(--ig-gray-300), var(--ig-gray-a));
  border-color: hsla(var(--ig-gray-300), var(--ig-gray-a));
}

[part~=date-inner][part~=selected][part~=single]:focus, [part~=date-inner][part~=selected][part~=single]:hover {
  background: hsla(var(--ig-gray-300), var(--ig-gray-a));
  border-color: hsla(var(--ig-gray-500), var(--ig-gray-a));
  color: var(--ig-gray-300-contrast);
}

[part~=current][part~=date-inner][part~=current],
[part~=current][part~=date-inner],
[part~=current][part~=single][part~=date-inner] {
  -webkit-box-shadow: none;
          box-shadow: none;
  position: relative;
  overflow: hidden;
  color: var(--ig-secondary-600-contrast);
}
[part~=current][part~=date-inner][part~=current]::after,
[part~=current][part~=date-inner]::after,
[part~=current][part~=single][part~=date-inner]::after {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 1rem), 1rem);
  content: "";
  position: absolute;
  top: 0.0625rem;
  inset-inline-start: 0.0625rem;
  width: calc(100% - 0.125rem);
  height: calc(100% - 0.125rem);
  background: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  z-index: -1;
}
[part~=current][part~=date-inner][part~=current]:focus, [part~=current][part~=date-inner][part~=current]:hover,
[part~=current][part~=date-inner]:focus,
[part~=current][part~=date-inner]:hover,
[part~=current][part~=single][part~=date-inner]:focus,
[part~=current][part~=single][part~=date-inner]:hover {
  color: var(--ig-secondary-600-contrast);
}
[part~=current][part~=date-inner][part~=current]:focus::after, [part~=current][part~=date-inner][part~=current]:hover::after,
[part~=current][part~=date-inner]:focus::after,
[part~=current][part~=date-inner]:hover::after,
[part~=current][part~=single][part~=date-inner]:focus::after,
[part~=current][part~=single][part~=date-inner]:hover::after {
  background: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
}

[part~=selected][part~=date-inner][part~=single] {
  border-color: hsla(var(--ig-gray-500), var(--ig-gray-a));
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
  color: var(--ig-gray-200-contrast);
  border-radius: 0;
}

[part~=date-inner][part~=selected][part~=current][part~=single] {
  color: var(--ig-secondary-600-contrast);
}

[part~=week-number-inner] {
  border-inline-end-color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}
[part~=week-number-inner]::after {
  border-inline-end-color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

[part="week-number-inner last"],
[part="week-number-inner first"] {
  border-radius: 0;
}

[part~=date-inner][part~=selected][part~=range][part~=first],
[part~=date-inner][part~=selected][part~=range][part~=last],
[part~=date-inner][part~=selected]:not([part~=range]) {
  border-top-color: hsla(var(--ig-gray-500), var(--ig-gray-a));
  border-bottom-color: hsla(var(--ig-gray-500), var(--ig-gray-a));
  border-inline-start-color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}
[part~=date-inner][part~=selected][part~=range][part~=first]:hover, [part~=date-inner][part~=selected][part~=range][part~=first]:focus,
[part~=date-inner][part~=selected][part~=range][part~=last]:hover,
[part~=date-inner][part~=selected][part~=range][part~=last]:focus,
[part~=date-inner][part~=selected]:not([part~=range]):hover,
[part~=date-inner][part~=selected]:not([part~=range]):focus {
  border-color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}
[part~=date-inner][part~=selected][part~=range][part~=first]:hover,
[part~=date-inner][part~=selected][part~=range][part~=last]:hover,
[part~=date-inner][part~=selected]:not([part~=range]):hover {
  background: hsla(var(--ig-gray-300), var(--ig-gray-a));
}
[part~=date-inner][part~=selected][part~=range][part~=first]:focus,
[part~=date-inner][part~=selected][part~=range][part~=last]:focus,
[part~=date-inner][part~=selected]:not([part~=range]):focus {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
}

[part~=date-inner][part~=selected][part~=range][part~=last] {
  border-inline-start-color: transparent;
  -webkit-border-end: 0;
          border-inline-end: 0;
}

[part~=date-inner][part~=selected][part~=range][part~=first] {
  border-inline-end-color: transparent;
  -webkit-border-start: 0;
          border-inline-start: 0;
}

[part~=date-inner][part~=selected][part~=range][part~=weekend]:hover, [part~=date-inner][part~=selected][part~=range][part~=weekend]:focus,
[part~=date-inner][part~=selected][part~=range][part~=inactive]:hover,
[part~=date-inner][part~=selected][part~=range][part~=inactive]:focus {
  color: var(--ig-gray-300-contrast);
  background: hsla(var(--ig-gray-300), var(--ig-gray-a));
  border-color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

[part~=date-inner][part~=last][part~=range] {
  border-color: transparent;
}

[part~=date-inner][part~=selected][part~=range] {
  border-top: 0;
  border-bottom: 0;
  color: var(--ig-gray-200-contrast);
}
[part~=date-inner][part~=selected][part~=range]:hover {
  background: hsla(var(--ig-gray-300), var(--ig-gray-a));
  border-color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}
[part~=date-inner][part~=selected][part~=range]:focus {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
  border-color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

[part~=date-inner][part~=selected][part~=range][part~=preview]:focus {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
  border-color: hsla(var(--ig-gray-200), var(--ig-gray-a));
}

[part~=date][part~=selected][part~=range] {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
  border-top-color: hsla(var(--ig-gray-500), var(--ig-gray-a));
  border-bottom-color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

[part~=date][part~=first][part~=selected][part~=range],
[part~=date][part~=last][part~=selected][part~=range] {
  background: transparent;
  border-color: transparent;
}
[part~=date][part~=first][part~=selected][part~=range]::after,
[part~=date][part~=last][part~=selected][part~=range]::after {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
  border-top-color: hsla(var(--ig-gray-500), var(--ig-gray-a));
  border-bottom-color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}
[part~=date][part~=first][part~=selected][part~=range]::before,
[part~=date][part~=last][part~=selected][part~=range]::before {
  content: "";
  position: absolute;
  top: -0.0625rem;
  width: 50%;
  height: 100%;
  border: 0.0625rem solid hsla(var(--ig-gray-500), var(--ig-gray-a));
  z-index: 3;
  pointer-events: none;
}

[part~=date][part~=first][part~=selected][part~=range]::before {
  border-inline-end-color: transparent;
}

[part~=date][part~=last][part~=selected][part~=range]::before {
  border-inline-start-color: transparent;
}

:host(igc-calendar[size=large]) igc-days-view::part(date first selected range)::before {
  margin: 0;
  inset-inline-start: calc(50% - 1rem);
}
:host(igc-calendar[size=large]) igc-days-view::part(date last selected range)::before {
  inset-inline-end: calc(50% - 1rem);
}

:host(igc-calendar[size=medium]) igc-days-view::part(date first selected range)::before {
  inset-inline-start: calc(50% - 0.875rem);
}
:host(igc-calendar[size=medium]) igc-days-view::part(date last selected range)::before {
  inset-inline-end: calc(50% - 0.875rem);
}

:host(igc-calendar[size=small]) igc-days-view::part(date first selected range)::before {
  inset-inline-start: calc(50% - 0.75rem);
}
:host(igc-calendar[size=small]) igc-days-view::part(date last selected range)::before {
  inset-inline-end: calc(50% - 0.75rem);
}

[part~=date][part~=first][part~=last][part~=selected][part~=range]::before {
  border-color: hsla(var(--ig-gray-200), var(--ig-gray-a));
  border-inline-end-color: transparent;
}

[part~=date-inner][part~=selected][part~=current][part~=range],
[part~=date-inner][part~=first][part~=last][part~=selected][part~=current][part~=range],
[part~=date-inner][part~=first][part~=last][part~=selected][part~=current],
[part~=date-inner][part~=first][part~=selected][part~=current][part~=range],
[part~=date-inner][part~=last][part~=selected][part~=current][part~=range] {
  color: var(--ig-secondary-600-contrast) !important;
}
[part~=date-inner][part~=selected][part~=current][part~=range]:focus, [part~=date-inner][part~=selected][part~=current][part~=range]:hover,
[part~=date-inner][part~=first][part~=last][part~=selected][part~=current][part~=range]:focus,
[part~=date-inner][part~=first][part~=last][part~=selected][part~=current][part~=range]:hover,
[part~=date-inner][part~=first][part~=last][part~=selected][part~=current]:focus,
[part~=date-inner][part~=first][part~=last][part~=selected][part~=current]:hover,
[part~=date-inner][part~=first][part~=selected][part~=current][part~=range]:focus,
[part~=date-inner][part~=first][part~=selected][part~=current][part~=range]:hover,
[part~=date-inner][part~=last][part~=selected][part~=current][part~=range]:focus,
[part~=date-inner][part~=last][part~=selected][part~=current][part~=range]:hover {
  border-color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

[part~=date-inner][part~=first][part~=range][part~=preview],
[part~=date-inner][part~=first][part~=selected][part~=range][part~=preview] {
  border-top-color: hsla(var(--ig-gray-200), var(--ig-gray-a));
  border-bottom-color: hsla(var(--ig-gray-200), var(--ig-gray-a));
  border-inline-start-color: hsla(var(--ig-gray-200), var(--ig-gray-a));
  border-inline-end-color: transparent;
  background: transparent;
}

[part~=date-inner][part~=last][part~=range][part~=preview],
[part~=date-inner][part~=last][part~=selected][part~=range][part~=preview] {
  border-top-color: hsla(var(--ig-gray-200), var(--ig-gray-a));
  border-bottom-color: hsla(var(--ig-gray-200), var(--ig-gray-a));
  border-inline-end-color: hsla(var(--ig-gray-200), var(--ig-gray-a));
  border-inline-start-color: transparent;
  background: transparent;
}

[part~=date][part~=range][part~=preview] {
  border-top-style: solid;
  border-bottom-style: solid;
  border-top-color: hsla(var(--ig-gray-200), var(--ig-gray-a));
  border-bottom-color: hsla(var(--ig-gray-200), var(--ig-gray-a));
}
[part~=date][part~=range][part~=preview]::after {
  border-top-style: solid;
  border-bottom-style: solid;
  border-top-color: hsla(var(--ig-gray-200), var(--ig-gray-a));
  border-bottom-color: hsla(var(--ig-gray-200), var(--ig-gray-a));
  background: transparent;
}

[part~=date][part~=range][part~=preview][part~=first],
[part~=date][part~=range][part~=preview][part~=last] {
  border-top-color: transparent;
  border-bottom-color: transparent;
}
[part~=date][part~=range][part~=preview][part~=first]::after,
[part~=date][part~=range][part~=preview][part~=last]::after {
  border-top-style: solid;
  border-bottom-style: solid;
  border-top-color: hsla(var(--ig-gray-200), var(--ig-gray-a));
  border-bottom-color: hsla(var(--ig-gray-200), var(--ig-gray-a));
}

[part~=date][part~=first][part~=selected][part~=range][part~=preview],
[part~=date][part~=last][part~=selected][part~=range][part~=preview] {
  background: transparent;
}
[part~=date][part~=first][part~=selected][part~=range][part~=preview]::before,
[part~=date][part~=last][part~=selected][part~=range][part~=preview]::before {
  border-block-start-color: hsla(var(--ig-gray-200), var(--ig-gray-a));
  border-block-end-color: hsla(var(--ig-gray-200), var(--ig-gray-a));
}
[part~=date][part~=first][part~=selected][part~=range][part~=preview]::after,
[part~=date][part~=last][part~=selected][part~=range][part~=preview]::after {
  border-style: solid;
  border-top-color: hsla(var(--ig-gray-200), var(--ig-gray-a));
  border-bottom-color: hsla(var(--ig-gray-200), var(--ig-gray-a));
  background: transparent;
}

[part~=date][part~=first][part~=selected][part~=range][part~=preview]::before {
  border-inline-start-color: hsla(var(--ig-gray-200), var(--ig-gray-a));
  border-inline-end-color: transparent;
}
[part~=date][part~=first][part~=selected][part~=range][part~=preview]::after {
  -webkit-border-end: 0;
          border-inline-end: 0;
}

[part~=date][part~=last][part~=selected][part~=range][part~=preview]::before {
  border-inline-end-color: hsla(var(--ig-gray-200), var(--ig-gray-a));
  border-inline-start-color: transparent;
}
[part~=date][part~=last][part~=selected][part~=range][part~=preview]::after {
  -webkit-border-start: 0;
          border-inline-start: 0;
}

[part~=date-inner][part~=first][part~=last][part~=selected] {
  border-color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

[part~=date-inner][part~=first][part~=last][part~=selected],
[part~=date-inner][part~=first][part~=selected],
[part~=date-inner][part~=last][part~=selected] {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a)) !important;
  color: var(--ig-gray-200-contrast) !important;
}
[part~=date-inner][part~=first][part~=last][part~=selected]:focus,
[part~=date-inner][part~=first][part~=selected]:focus,
[part~=date-inner][part~=last][part~=selected]:focus {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a)) !important;
  color: var(--ig-gray-200-contrast) !important;
}

[part~=date-inner][part~=first][part~=last][part~=selected][part~=current] {
  color: var(--ig-secondary-600-contrast) !important;
}

[part~=date-inner][part~=first][part~=selected][part~=current][part~=range][part~=preview]:focus,
[part~=date-inner][part~=last][part~=selected][part~=current][part~=range][part~=preview]:focus {
  border-color: transparent;
}`;var Be=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};let Ne=class extends(z($e)){constructor(){super(),this.hideLeadingDays=!1,this.hideTrailingDays=!1,this.active=!1,this.weekDayFormat="narrow",this.resourceStrings=de,this.setAttribute("role","grid"),this.initFormatters()}formattersChange(){this.initFormatters()}datesChange(){this.dates=this.getCalendarMonth()}focusActiveDate(){this.activeDay.focus()}initFormatters(){this.formatterWeekday=new Intl.DateTimeFormat(this.locale,{weekday:this.weekDayFormat}),this.labelFormatter=new Intl.DateTimeFormat(this.locale,{weekday:"long",year:"numeric",month:"long",day:"numeric"})}generateWeekHeader(){const e=[],t=this.calendarModel.monthdatescalendar(this.activeDate.getFullYear(),this.activeDate.getMonth())[0];for(const a of t)e.push({label:this.formatterWeekday.format(a.date),ariaLabel:a.date.toLocaleString(this.locale,{weekday:"long"})});return e}getCalendarMonth(){return this.calendarModel.monthdatescalendar(this.activeDate.getFullYear(),this.activeDate.getMonth(),!0)}titleCase(e){return e.charAt(0).toUpperCase()+e.slice(1)}getWeekNumber(e){return this.calendarModel.getWeekNumber(e)}formattedDate(e){return`${e.getDate()}`}get isSingleSelection(){return"range"!==this.selection}isLastInRange(e){if(this.isSingleSelection||!this.values||0===this.values.length)return!1;const t=this.values;let a=t[t.length-1];return this.rangePreviewDate&&this.rangePreviewDate>a&&(a=this.rangePreviewDate),Ce(a,e.date)}isFirstInRange(e){if(this.isSingleSelection||!this.values||0===this.values.length)return!1;let t=this.values[0];return this.rangePreviewDate&&this.rangePreviewDate<t&&(t=this.rangePreviewDate),Ce(t,e.date)}isDisabled(e){return!!this.disabledDates&&me(e,this.disabledDates)}isWithinRange(e,t,a){return me(e,[{type:pe.Between,dateRange:[t,a]}])}isRangeDate(e){if("range"!==this.selection||!this.values||0===this.values.length)return!1;const t=this.values,a=t[0];let r;if(1===t.length){if(!this.rangePreviewDate)return!1;r=this.rangePreviewDate}else r=t[t.length-1];return me(e,[{type:pe.Between,dateRange:[a,r]}])}isRangePreview(e){return!!("range"===this.selection&&this.values&&this.values.length>0&&this.rangePreviewDate)&&me(e,[{type:pe.Between,dateRange:[this.values[0],this.rangePreviewDate]}])}isSelected(e){if(this.isDisabled(e.date))return!1;if("single"===this.selection)return!!this.value&&De(this.value).getTime()===e.date.getTime();if(!this.values||0===this.values.length)return!1;if("range"===this.selection&&1===this.values.length)return De(this.values[0]).getTime()===e.date.getTime();if("multiple"===this.selection){const t=De(this.values[0]),a=De(this.values[this.values.length-1]);return!!this.isWithinRange(e.date,t,a)&&!!this.values.find((t=>t.getTime()===e.date.getTime()))}return this.isWithinRange(e.date,this.values[0],this.values[this.values.length-1])}isToday(e){const t=new Date(Date.now()),a=e.date;return a.getFullYear()===t.getFullYear()&&a.getMonth()===t.getMonth()&&a.getDate()===t.getDate()}isWeekend(e){const t=e.date.getDay();return 0===t||6===t}isSpecial(e){return null!==this.specialDates&&me(e.date,this.specialDates)}dateClicked(e,t){e.stopPropagation(),this.selectDay(t),this.changeActiveDate(t)}selectDay(e){this.rangePreviewDate&&this.setRangePreviewDate(void 0),this.selectDate(e.date)&&this.emitEvent("igcChange",{detail:e.date})}selectDate(e){var t;if(this.isDisabled(e))return!1;switch(this.selection){case"single":if((null===(t=this.value)||void 0===t?void 0:t.getTime())===e.getTime())return!1;this.selectSingle(e);break;case"multiple":this.selectMultiple(e);break;case"range":this.selectRange(e)}return!0}generateDateRange(e,t){const a=[];for(e=De(e),t=De(t);e.getTime()<t.getTime();)e=this.calendarModel.timedelta(e,be.Day,1),a.push(e);return a}selectRange(e){var t;let a,r,i=null!==(t=this.values)&&void 0!==t?t:[];if(1!==i.length)i=[e];else{if(i[0].getTime()===e.getTime())return void(this.values=[]);i.push(e),i.sort(((e,t)=>e.valueOf()-t.valueOf())),a=i.shift(),r=i.pop(),i=[a,...this.generateDateRange(a,r)]}i=i.filter((e=>!this.isDisabled(e))),this.values=[...i]}selectSingle(e){this.value=De(e)}selectMultiple(e){var t;let a=null!==(t=this.values)&&void 0!==t?t:[];const r=De(e),i=[];a.every((e=>e.getTime()!==r.getTime()))?i.push(r):a=a.filter((e=>e.getTime()!==r.getTime())),i.length>0&&(a=a.concat(i)),a=a.filter((e=>!this.isDisabled(e))),a.sort(((e,t)=>e.valueOf()-t.valueOf())),this.values=[...a]}changeActiveDate(e){this.activeDate=e.date,this.emitEvent("igcActiveDateChange",{detail:e})}dateKeyDown(e,t){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this.selectDay(t))}changeRangePreview(e){"range"===this.selection&&this.values&&1===this.values.length&&!Ce(this.values[0],e)&&this.setRangePreviewDate(e)}clearRangePreview(){this.rangePreviewDate&&this.setRangePreviewDate(void 0)}setRangePreviewDate(e){this.rangePreviewDate=e,this.emitEvent("igcRangePreviewDateChange",{detail:e})}resolveDayItemPartName(e){const t=e.isNextMonth||e.isPrevMonth,a=this.hideLeadingDays&&e.isPrevMonth||this.hideTrailingDays&&e.isNextMonth,r=this.isDisabled(e.date);return{date:!0,first:this.isFirstInRange(e),last:this.isLastInRange(e),selected:!r&&this.isSelected(e),inactive:t,hidden:a,current:this.isToday(e),weekend:this.isWeekend(e),range:"range"===this.selection&&this.isRangeDate(e.date),special:this.isSpecial(e),disabled:a||r,single:"range"!==this.selection,preview:this.isRangePreview(e.date)}}renderWeekHeaders(){return r.dy`<div role="row" part="days-row first">
      ${this.showWeekNumbers?r.dy`<span role="columnheader" part="label week-number first">
            <span part="week-number-inner first"
              >${this.resourceStrings.weekLabel}</span
            >
          </span>`:""}
      ${this.generateWeekHeader().map((e=>r.dy`<span
          role="columnheader"
          part="label"
          aria-label=${e.ariaLabel}
        >
          <span part="label-inner">${this.titleCase(e.label)}</span>
        </span> `))}
    </div>`}renderDates(){return this.dates.map(((e,t)=>{const a=t===this.dates.length-1;return r.dy`<div role="row" part="days-row">
        ${this.showWeekNumbers?r.dy`<span
              role="rowheader"
              part=${$({"week-number":!0,last:a})}
            >
              <span part=${$({"week-number-inner":!0,last:a})}
                >${this.getWeekNumber(e[0].date)}</span
              >
            </span>`:""}
        ${e.map((e=>this.renderDateItem(e)))}
      </div>`}))}dayLabelFormatter(e){return this.rangePreviewDate&&xe(this.rangePreviewDate,e.date)?this.labelFormatter.formatRange(this.values.at(0),this.rangePreviewDate):this.isFirstInRange(e)||this.isLastInRange(e)?this.labelFormatter.formatRange(this.values.at(0),this.values.at(-1)):this.labelFormatter.format(e.date)}renderDateItem(e){const t=$(this.resolveDayItemPartName(e)),a=t.replace("date","date-inner");return r.dy`<span part=${t}>
      <span
        part=${a}
        role="gridcell"
        aria-label=${this.dayLabelFormatter(e)}
        aria-selected=${this.isSelected(e)}
        aria-disabled=${this.isDisabled(e.date)}
        tabindex=${this.active&&xe(this.activeDate,e.date)?0:-1}
        @click=${t=>this.dateClicked(t,e)}
        @focus=${()=>this.changeRangePreview(e.date)}
        @blur=${()=>this.clearRangePreview()}
        @keydown=${t=>this.dateKeyDown(t,e)}
        @mouseenter=${()=>this.changeRangePreview(e.date)}
        @mouseleave=${()=>this.clearRangePreview()}
        >${this.formattedDate(e.date)}</span
      >
    </span>`}render(){return r.dy`${this.renderWeekHeaders()} ${this.renderDates()}`}};Ne.tagName="igc-days-view",Ne.styles=_e,Be([(0,i.IO)('[tabindex="0"]')],Ne.prototype,"activeDay",void 0),Be([(0,i.Cb)({type:Boolean,attribute:"hide-leading-days"})],Ne.prototype,"hideLeadingDays",void 0),Be([(0,i.Cb)({type:Boolean,attribute:"hide-trailing-days"})],Ne.prototype,"hideTrailingDays",void 0),Be([(0,i.Cb)({type:Boolean})],Ne.prototype,"active",void 0),Be([(0,i.Cb)({attribute:!1})],Ne.prototype,"rangePreviewDate",void 0),Be([(0,i.Cb)({attribute:"week-day-format"})],Ne.prototype,"weekDayFormat",void 0),Be([(0,i.Cb)({attribute:!1})],Ne.prototype,"resourceStrings",void 0),Be([b("weekDayFormat"),b("locale")],Ne.prototype,"formattersChange",null),Be([b("weekStart"),b("activeDate")],Ne.prototype,"datesChange",null),Ne=Be([Te,he,p({bootstrap:je,fluent:Xe})],Ne);const Ye=Ne;var Ue=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};let He=class extends(z(r.oi)){constructor(){super(),this.calendarModel=new fe,this.value=new Date,this.locale="en",this.monthFormat="long",this.setAttribute("role","grid"),this.initMonthFormatter()}formatChange(){this.initMonthFormatter()}focusActiveDate(){this.activeMonth.focus()}initMonthFormatter(){this.monthFormatter=new Intl.DateTimeFormat(this.locale,{month:this.monthFormat})}formattedMonth(e){return this.monthFormatter.format(e)}get months(){let e=new Date(this.value.getFullYear(),0,1);const t=[];for(let a=0;a<4;a++){const a=[];for(let t=0;t<3;t++)a.push(e),e=this.calendarModel.timedelta(e,be.Month,1);t.push(a)}return t}resolveMonthPartName(e){const t=new Date;return{month:!0,selected:e.getMonth()===this.value.getMonth(),current:e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()}}selectMonth(e){const t=new Date(e);ze(t,this.value.getDate()),this.value=t,this.emitEvent("igcChange",{detail:this.value})}monthKeyDown(e,t){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this.selectMonth(t))}render(){return r.dy`${this.months.map((e=>r.dy`<div part="months-row" role="row">
        ${e.map((e=>{const t=$(this.resolveMonthPartName(e)),a=t.replace("month","month-inner");return r.dy`<span part=${t}>
            <span
              part=${a}
              role="gridcell"
              aria-label=${e.toLocaleString(this.locale,{month:"long",year:"numeric"})}
              aria-selected=${e.getMonth()===this.value.getMonth()}
              tabindex="${e.getFullYear()===this.value.getFullYear()&&e.getMonth()===this.value.getMonth()?0:-1}"
              @click=${()=>this.selectMonth(e)}
              @keydown=${t=>this.monthKeyDown(t,e)}
            >
              ${this.formattedMonth(e)}
            </span>
          </span>`}))}
      </div>`))}`}};He.tagName="igc-months-view",He.styles=Re,Ue([(0,i.IO)('[tabindex="0"]')],He.prototype,"activeMonth",void 0),Ue([(0,i.Cb)({attribute:!1})],He.prototype,"value",void 0),Ue([(0,i.Cb)()],He.prototype,"locale",void 0),Ue([(0,i.Cb)({attribute:"month-format"})],He.prototype,"monthFormat",void 0),Ue([b("locale"),b("monthFormat")],He.prototype,"formatChange",null),He=Ue([he,Te,p({bootstrap:Oe,fluent:Ve})],He);var We=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};x(X,Ye,He,Le);let Ke=class extends(v(z($e))){constructor(){super(),this.activeDaysViewIndex=0,this.hideOutsideDays=!1,this.hideHeader=!1,this.headerOrientation="horizontal",this.orientation="horizontal",this.visibleMonths=1,this.activeView="days",this.formatOptions={month:"long",weekday:"narrow"},this.resourceStrings=de,this.handleKeyDown=e=>{const t=e.target.tagName.toLowerCase();if("igc-days-view"===t||"igc-months-view"===t||"igc-years-view"===t)switch(e.key){case"PageDown":e.preventDefault(),e.shiftKey&&"days"===this.activeView?this.nextYear():this.navigateNext(),"days"===this.activeView&&this.focusActiveDate();break;case"PageUp":e.preventDefault(),e.shiftKey&&"days"===this.activeView?this.previousYear():this.navigatePrevious(),"days"===this.activeView&&this.focusActiveDate();break;case"Home":if(e.preventDefault(),"days"===this.activeView){const e=this.daysViews[0].activeDate,t=new Date(e);t.setDate(1),this.activeDate=t,this.activeDaysViewIndex=0}else if("months"===this.activeView){const e=new Date(this.activeDate);e.setMonth(0),this.activeDate=e}else if("years"===this.activeView){const e=Ie(this.activeDate,this.yearPerPage),t=new Date(this.activeDate);t.setDate(1),t.setFullYear(e),ze(t,this.activeDate.getDate()),this.activeDate=t}this.focusActiveDate();break;case"End":if(e.preventDefault(),"days"===this.activeView){const e=this.daysViews.length-1,t=this.daysViews[e].activeDate,a=new Date(t);a.setDate(1),a.setMonth(a.getMonth()+1),a.setDate(0),this.activeDate=a,this.activeDaysViewIndex=e}else if("months"===this.activeView){const e=new Date(this.activeDate);e.setMonth(11),this.activeDate=e}else if("years"===this.activeView){const e=Ie(this.activeDate,this.yearPerPage),t=new Date(this.activeDate);t.setDate(1),t.setFullYear(e+this.yearPerPage-1),ze(t,this.activeDate.getDate()),this.activeDate=t}this.focusActiveDate();break;case"ArrowLeft":if(e.preventDefault(),"days"===this.activeView){const e=this.calendarModel.timedelta(this.activeDate,be.Day,-1);this.visibleMonths>1&&this.daysViews[this.activeDaysViewIndex].activeDate.getMonth()!==e.getMonth()&&(this.activeDaysViewIndex=this.activeDaysViewIndex>0?this.activeDaysViewIndex-1:0),this.activeDate=e}else"months"===this.activeView?this.previousMonth():"years"===this.activeView&&this.previousYear();this.focusActiveDate();break;case"ArrowRight":if(e.preventDefault(),"days"===this.activeView){const e=this.calendarModel.timedelta(this.activeDate,be.Day,1);this.visibleMonths>1&&this.daysViews[this.activeDaysViewIndex].activeDate.getMonth()!==e.getMonth()&&(this.activeDaysViewIndex=this.activeDaysViewIndex===this.visibleMonths-1?this.activeDaysViewIndex:this.activeDaysViewIndex+1),this.activeDate=e}else"months"===this.activeView?this.nextMonth():"years"===this.activeView&&this.nextYear();this.focusActiveDate();break;case"ArrowUp":if(e.preventDefault(),"days"===this.activeView){const e=this.calendarModel.timedelta(this.activeDate,be.Week,-1);this.visibleMonths>1&&this.daysViews[this.activeDaysViewIndex].activeDate.getMonth()!==e.getMonth()&&(this.activeDaysViewIndex=this.activeDaysViewIndex>0?this.activeDaysViewIndex-1:0),this.activeDate=e}else"months"===this.activeView?this.activeDate=this.calendarModel.timedelta(this.activeDate,be.Month,-3):"years"===this.activeView&&(this.activeDate=this.calendarModel.timedelta(this.activeDate,be.Year,-3));this.focusActiveDate();break;case"ArrowDown":if(e.preventDefault(),"days"===this.activeView){const e=this.calendarModel.timedelta(this.activeDate,be.Week,1);this.visibleMonths>1&&this.daysViews[this.activeDaysViewIndex].activeDate.getMonth()!==e.getMonth()&&(this.activeDaysViewIndex=this.activeDaysViewIndex===this.visibleMonths-1?this.activeDaysViewIndex:this.activeDaysViewIndex+1),this.activeDate=e}else"months"===this.activeView?this.activeDate=this.calendarModel.timedelta(this.activeDate,be.Month,3):"years"===this.activeView&&(this.activeDate=this.calendarModel.timedelta(this.activeDate,be.Year,3));this.focusActiveDate()}},this.initFormatters()}formattersChange(){this.initFormatters()}get yearPerPage(){return"small"===this.size?18:15}get previousButtonLabel(){return"days"===this.activeView?this.resourceStrings.previousMonth:"months"===this.activeView?this.resourceStrings.previousYear:"years"===this.activeView?this.resourceStrings.previousYears.replace("{0}",this.yearPerPage.toString()):""}get nextButtonLabel(){return"days"===this.activeView?this.resourceStrings.nextMonth:"months"===this.activeView?this.resourceStrings.nextYear:"years"===this.activeView?this.resourceStrings.nextYears.replace("{0}",this.yearPerPage.toString()):""}monthSelectLabel(e){return e.toLocaleString(this.locale,{month:"long"})+", "+this.resourceStrings.selectMonth}yearSelectLabel(e){return e.getFullYear()+", "+this.resourceStrings.selectYear}async focusActiveDate(){await this.updateComplete,"days"===this.activeView?this.daysViews[this.activeDaysViewIndex].focusActiveDate():"months"===this.activeView?this.monthsView.focusActiveDate():"years"===this.activeView&&this.yearsView.focusActiveDate()}initFormatters(){this.formatterMonth=new Intl.DateTimeFormat(this.locale,{month:this.formatOptions.month}),this.formatterWeekday=new Intl.DateTimeFormat(this.locale,{weekday:"short"}),this.formatterMonthDay=new Intl.DateTimeFormat(this.locale,{month:"short",day:"numeric"})}formattedMonth(e){return this.formatterMonth.format(e)}changeValue(e){e.stopPropagation();const t=e.target;let a;"single"===this.selection?(this.value=t.value,a=this.value):(this.values=t.values,a=this.values),this.emitEvent("igcChange",{detail:a})}changeMonth(e){e.stopPropagation(),this.activeDate=e.target.value,this.activeView="days",this.focusActiveDate()}changeYear(e){e.stopPropagation(),this.activeDate=e.target.value,this.activeView="months",this.focusActiveDate()}switchToMonths(e){this.activateDaysView(e),this.activeView="months"}switchToYears(e){"days"===this.activeView&&this.activateDaysView(e),this.activeView="years"}activateDaysView(e){const t=this.daysViews[e];this.activeDate=t.activeDate,this.activeDaysViewIndex=e}activeDateChanged(e){const t=e.detail,a=Array.from(this.daysViews);this.activeDaysViewIndex=a.indexOf(e.target),this.activeDate=t.date,t.isCurrentMonth||this.focusActiveDate()}rangePreviewDateChange(e){this.rangePreviewDate=e.detail}nextMonth(){this.activeDate=this.calendarModel.getNextMonth(this.activeDate)}previousMonth(){this.activeDate=this.calendarModel.getPrevMonth(this.activeDate)}nextYear(){this.activeDate=this.calendarModel.getNextYear(this.activeDate)}previousYear(){this.activeDate=this.calendarModel.getPrevYear(this.activeDate)}nextYearsPage(){this.activeDate=this.calendarModel.timedelta(this.activeDate,be.Year,this.yearPerPage)}previousYearsPage(){this.activeDate=this.calendarModel.timedelta(this.activeDate,be.Year,-this.yearPerPage)}navigateNext(){"days"===this.activeView?this.nextMonth():"months"===this.activeView?this.nextYear():"years"===this.activeView&&this.nextYearsPage()}navigatePrevious(){"days"===this.activeView?this.previousMonth():"months"===this.activeView?this.previousYear():"years"===this.activeView&&this.previousYearsPage()}renderNavigation(e,t=!0,a=0){let i,o;return e=null!=e?e:this.activeDate,"years"===this.activeView&&(i=Ie(e,this.yearPerPage),o=i+this.yearPerPage-1),r.dy`<div part="navigation">
      <div>
        ${"days"===this.activeView?r.dy`<button
              part="months-navigation"
              aria-label=${this.monthSelectLabel(e)}
              @click=${()=>this.switchToMonths(a)}
            >
              ${this.formattedMonth(e)}
            </button>`:""}
        ${"days"===this.activeView||"months"===this.activeView?r.dy`<span class="aria-off-screen" aria-live="polite">
                ${"days"===this.activeView?e.toLocaleString(this.locale,{month:"long",year:"numeric"}):e.getFullYear()}
              </span>
              <button
                part="years-navigation"
                aria-label=${this.yearSelectLabel(e)}
                @click=${()=>this.switchToYears(a)}
              >
                ${e.getFullYear()}
              </button>`:""}
        ${"years"===this.activeView?r.dy`<span part="years-range" aria-live="polite"
              >${`${i} - ${o}`}</span
            >`:""}
      </div>
      ${t?r.dy`<div part="navigation-buttons">
            <button
              part=${$({"navigation-button":!0,vertical:"vertical"===this.orientation})}
              aria-label=${this.previousButtonLabel}
              @click=${this.navigatePrevious}
            >
              <igc-icon
                aria-hidden="true"
                name="navigate_before"
                collection="internal"
              ></igc-icon>
            </button>
            <button
              part=${$({"navigation-button":!0,vertical:"vertical"===this.orientation})}
              aria-label=${this.nextButtonLabel}
              @click=${this.navigateNext}
            >
              <igc-icon
                aria-hidden="true"
                name="navigate_next"
                collection="internal"
              ></igc-icon>
            </button>
          </div>`:""}
    </div>`}renderHeader(){return this.hideHeader||"multiple"===this.selection?"":r.dy`<div part="header">
      <h5 part="header-title">
        <slot name="title"
          >${"single"===this.selection?this.resourceStrings.selectDate:this.resourceStrings.selectRange}</slot
        >
      </h5>
      <h2 part="header-date">${this.renderHeaderDate()}</h2>
    </div>`}renderHeaderDate(){if("single"===this.selection){const e=this.value;return r.dy`${e?r.dy`${this.formatterWeekday.format(e)},${"vertical"===this.headerOrientation?r.dy`<br />`:" "}${this.formatterMonthDay.format(e)}`:this.resourceStrings.selectedDate}`}const e=this.values;return r.dy`<span
        >${e&&e.length?this.formatterMonthDay.format(e[0]):this.resourceStrings.startDate}</span
      >
      <span> - </span>
      <span
        >${e&&e.length>1?this.formatterMonthDay.format(e[e.length-1]):this.resourceStrings.endDate}</span
      >`}render(){const e=[],t=this.visibleMonths>1?this.visibleMonths:1;for(let a=0;a<t;a++)e.push(this.calendarModel.timedelta(this.activeDate,be.Month,a-this.activeDaysViewIndex));return r.dy`
      ${this.renderHeader()}
      <div
        part="content"
        style=${(0,ge.V)({display:"flex",flexGrow:"1",flexDirection:"days"===this.activeView&&"horizontal"===this.orientation?"row":"column"})}
        @keydown=${this.handleKeyDown}
      >
        ${"days"===this.activeView?e.map(((t,a)=>r.dy`<div part="days-view-container">
                ${this.renderNavigation(t,"horizontal"===this.orientation?a===e.length-1:0===a,a)}
                <igc-days-view
                  part="days-view"
                  .active=${this.activeDaysViewIndex===a}
                  .activeDate=${t}
                  .weekStart=${this.weekStart}
                  .weekDayFormat=${this.formatOptions.weekday}
                  .locale=${this.locale}
                  .selection=${this.selection}
                  .value=${this.value}
                  .values=${this.values}
                  .hideLeadingDays=${this.hideOutsideDays||0!==a}
                  .hideTrailingDays=${this.hideOutsideDays||a!==e.length-1}
                  .showWeekNumbers=${this.showWeekNumbers}
                  .disabledDates=${this.disabledDates}
                  .specialDates=${this.specialDates}
                  .rangePreviewDate=${this.rangePreviewDate}
                  .resourceStrings=${this.resourceStrings}
                  exportparts="days-row, label, date-inner, week-number-inner, week-number, date, first, last, selected, inactive, hidden, current, weekend, range, special, disabled, single, preview"
                  @igcChange=${this.changeValue}
                  @igcActiveDateChange=${this.activeDateChanged}
                  @igcRangePreviewDateChange=${this.rangePreviewDateChange}
                ></igc-days-view>
              </div>`)):""}
        ${"months"===this.activeView?r.dy` ${this.renderNavigation()}
              <igc-months-view
                part="months-view"
                .value=${this.activeDate}
                .locale=${this.locale}
                .monthFormat=${this.formatOptions.month}
                exportparts="month, selected, month-inner, current"
                @igcChange=${this.changeMonth}
              ></igc-months-view>`:""}
        ${"years"===this.activeView?r.dy`${this.renderNavigation()}
              <igc-years-view
                part="years-view"
                .value=${this.activeDate}
                .yearsPerPage=${this.yearPerPage}
                exportparts="year, selected, year-inner, current"
                @igcChange=${this.changeYear}
              ></igc-years-view>`:""}
      </div>
    `}};Ke.styles=Me,Ke.tagName="igc-calendar",We([(0,i.SB)()],Ke.prototype,"rangePreviewDate",void 0),We([(0,i.SB)()],Ke.prototype,"activeDaysViewIndex",void 0),We([(0,i.Kt)("igc-days-view")],Ke.prototype,"daysViews",void 0),We([(0,i.IO)("igc-months-view")],Ke.prototype,"monthsView",void 0),We([(0,i.IO)("igc-years-view")],Ke.prototype,"yearsView",void 0),We([(0,i.Cb)({type:Boolean,attribute:"hide-outside-days"})],Ke.prototype,"hideOutsideDays",void 0),We([(0,i.Cb)({type:Boolean,attribute:"hide-header"})],Ke.prototype,"hideHeader",void 0),We([(0,i.Cb)({attribute:"header-orientation",reflect:!0})],Ke.prototype,"headerOrientation",void 0),We([(0,i.Cb)()],Ke.prototype,"orientation",void 0),We([(0,i.Cb)({type:Number,attribute:"visible-months"})],Ke.prototype,"visibleMonths",void 0),We([(0,i.Cb)({attribute:"active-view"})],Ke.prototype,"activeView",void 0),We([(0,i.Cb)({attribute:!1})],Ke.prototype,"formatOptions",void 0),We([(0,i.Cb)({attribute:!1})],Ke.prototype,"resourceStrings",void 0),We([b("formatOptions"),b("locale")],Ke.prototype,"formattersChange",null),Ke=We([p({bootstrap:Pe,fluent:Ee})],Ke);const qe=Ke,Ge=r.iv`/* stylelint-disable max-line-length */
:host {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
}

:host([elevated]),
:host([elevated]:hover),
:host([elevated]:focus-within) {
  -webkit-box-shadow: var(--ig-elevation-2);
          box-shadow: var(--ig-elevation-2);
}`,Ze=r.iv`/* stylelint-disable max-line-length */
:host {
  border: 0.0625rem solid hsla(var(--ig-gray-100), var(--ig-gray-a));
  border-radius: 0;
}

:host([elevated]:hover)::after,
:host([elevated]:focus-within)::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  -webkit-transition: -webkit-box-shadow 0.1s ease-out;
  transition: -webkit-box-shadow 0.1s ease-out;
  -o-transition: box-shadow 0.1s ease-out;
  transition: box-shadow 0.1s ease-out;
  transition: box-shadow 0.1s ease-out, -webkit-box-shadow 0.1s ease-out;
  -webkit-box-shadow: inset 0 0 0 0.125rem hsla(var(--ig-gray-300), var(--ig-gray-a));
          box-shadow: inset 0 0 0 0.125rem hsla(var(--ig-gray-300), var(--ig-gray-a));
  pointer-events: none;
}`,Qe=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */
:host {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.1875rem), 0.1875rem);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  border: 0.0625rem solid hsla(var(--ig-gray-400), var(--ig-gray-a));
  overflow: hidden;
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
  font-family: var(--ig-font-family);
}

:host([elevated]) {
  border: none;
  -webkit-box-shadow: var(--ig-elevation-4);
          box-shadow: var(--ig-elevation-4);
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  -webkit-transition: -webkit-box-shadow 0.1s ease-out;
  transition: -webkit-box-shadow 0.1s ease-out;
  -o-transition: box-shadow 0.1s ease-out;
  transition: box-shadow 0.1s ease-out;
  transition: box-shadow 0.1s ease-out, -webkit-box-shadow 0.1s ease-out;
}

:host([elevated]:hover),
:host([elevated]:focus-within) {
  -webkit-box-shadow: var(--ig-elevation-6);
          box-shadow: var(--ig-elevation-6);
}`,Je=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */
:host {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-flow: column nowrap;
          flex-flow: column nowrap;
  -webkit-box-align: end;
      -ms-flex-align: end;
          align-items: flex-end;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  padding: 0.5rem;
  -ms-flex-preferred-size: min-content;
      flex-basis: min-content;
}

:host(:not([orientation=vertical])) {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-flow: row wrap;
          flex-flow: row wrap;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
:host(:not([orientation=vertical])) ::slotted(igc-icon-button:not(:first-of-type)),
:host(:not([orientation=vertical])) ::slotted(igc-button:not(:first-of-type)) {
  -webkit-margin-start: 0.5rem;
          margin-inline-start: 0.5rem;
}

::slotted([slot=start]) {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-ordinal-group: 1;
      -ms-flex-order: 0;
          order: 0;
}

::slotted([slot=end]) {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-margin-start: auto;
          margin-inline-start: auto;
  -webkit-box-ordinal-group: 2;
      -ms-flex-order: 1;
          order: 1;
}

::slotted(igc-icon) {
  opacity: 0.6;
}

:host {
  padding: 1rem;
}`,et=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */
:host {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-flow: column nowrap;
          flex-flow: column nowrap;
  -webkit-box-align: end;
      -ms-flex-align: end;
          align-items: flex-end;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  padding: 0.5rem;
  -ms-flex-preferred-size: min-content;
      flex-basis: min-content;
}

:host(:not([orientation=vertical])) {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-flow: row wrap;
          flex-flow: row wrap;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
:host(:not([orientation=vertical])) ::slotted(igc-icon-button:not(:first-of-type)),
:host(:not([orientation=vertical])) ::slotted(igc-button:not(:first-of-type)) {
  -webkit-margin-start: 0.5rem;
          margin-inline-start: 0.5rem;
}

::slotted([slot=start]) {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-ordinal-group: 1;
      -ms-flex-order: 0;
          order: 0;
}

::slotted([slot=end]) {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-margin-start: auto;
          margin-inline-start: auto;
  -webkit-box-ordinal-group: 2;
      -ms-flex-order: 1;
          order: 1;
}

::slotted(igc-icon) {
  opacity: 0.6;
}`;var tt=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};let at=class extends r.oi{constructor(){super(...arguments),this.orientation="horizontal"}render(){return r.dy`
      <slot name="start"></slot>
      <slot></slot>
      <slot name="end"></slot>
    `}};at.tagName="igc-card-actions",at.styles=et,tt([(0,i.Cb)({reflect:!0})],at.prototype,"orientation",void 0),at=tt([p({bootstrap:Je})],at);const rt=at,it=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */
:host {
  display: block;
  width: 100%;
  -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
          flex: 1 1 auto;
  padding: 1rem;
  color: var(--ig-surface-500-contrast);
}

::slotted(*) {
  font-family: var(--ig-body-2-font-family);
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
  opacity: 0.6;
  margin: 0;
}

:host {
  font-family: var(--ig-body-1-font-family);
  font-size: var(--ig-body-1-font-size);
  font-weight: var(--ig-body-1-font-weight);
  font-style: var(--ig-body-1-font-style);
  line-height: var(--ig-body-1-line-height);
  letter-spacing: var(--ig-body-1-letter-spacing);
  text-transform: var(--ig-body-1-text-transform);
  margin-top: var(--ig-body-1-margin-top);
  margin-bottom: var(--ig-body-1-margin-bottom);
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}

::slotted(*) {
  font-family: var(--ig-body-1-font-family);
  font-size: var(--ig-body-1-font-size);
  font-weight: var(--ig-body-1-font-weight);
  font-style: var(--ig-body-1-font-style);
  line-height: var(--ig-body-1-line-height);
  letter-spacing: var(--ig-body-1-letter-spacing);
  text-transform: var(--ig-body-1-text-transform);
  margin-top: var(--ig-body-1-margin-top);
  margin-bottom: var(--ig-body-1-margin-bottom);
  opacity: 1;
}`,ot=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */
:host {
  display: block;
  width: 100%;
  -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
          flex: 1 1 auto;
  padding: 1rem;
  color: var(--ig-surface-500-contrast);
}

::slotted(*) {
  font-family: var(--ig-body-2-font-family);
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
  opacity: 0.6;
  margin: 0;
}`;let st=class extends r.oi{render(){return r.dy` <slot></slot> `}};st.tagName="igc-card-content",st.styles=ot,st=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s}([p({bootstrap:it})],st);const nt=st,lt=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */
:host {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-flow: row wrap;
          flex-flow: row wrap;
  -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
          flex: 1 1 auto;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -ms-flex-line-pack: start;
      align-content: flex-start;
  width: 100%;
  color: var(--ig-surface-500-contrast);
  padding: 1rem;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

::slotted(*) {
  margin: 0;
  font: inherit;
  opacity: inherit;
}

header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-flow: column nowrap;
          flex-flow: column nowrap;
  overflow: hidden;
  -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
          flex: 1 1 auto;
}

::slotted([slot=title]) {
  font-family: var(--ig-h6-font-family);
  font-size: var(--ig-h6-font-size);
  font-weight: var(--ig-h6-font-weight);
  font-style: var(--ig-h6-font-style);
  line-height: var(--ig-h6-line-height);
  letter-spacing: var(--ig-h6-letter-spacing);
  text-transform: var(--ig-h6-text-transform);
  margin-top: var(--ig-h6-margin-top);
  margin-bottom: var(--ig-h6-margin-bottom);
  opacity: 0.87;
}

::slotted([slot=subtitle]) {
  font-family: var(--ig-subtitle-2-font-family);
  font-size: var(--ig-subtitle-2-font-size);
  font-weight: var(--ig-subtitle-2-font-weight);
  font-style: var(--ig-subtitle-2-font-style);
  line-height: var(--ig-subtitle-2-line-height);
  letter-spacing: var(--ig-subtitle-2-letter-spacing);
  text-transform: var(--ig-subtitle-2-text-transform);
  margin-top: var(--ig-subtitle-2-margin-top);
  margin-bottom: var(--ig-subtitle-2-margin-bottom);
  opacity: 0.6;
}

::slotted([slot=thumbnail]) {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-item-align: start;
      align-self: flex-start;
  -webkit-margin-end: 1rem;
          margin-inline-end: 1rem;
}

::slotted([slot=title]) {
  font-family: var(--ig-h5-font-family);
  font-size: var(--ig-h5-font-size);
  font-weight: var(--ig-h5-font-weight);
  font-style: var(--ig-h5-font-style);
  line-height: var(--ig-h5-line-height);
  letter-spacing: var(--ig-h5-letter-spacing);
  text-transform: var(--ig-h5-text-transform);
  margin-top: var(--ig-h5-margin-top);
  margin-bottom: var(--ig-h5-margin-bottom);
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  opacity: 1;
}

::slotted([slot=subtitle]) {
  font-family: var(--ig-body-1-font-family);
  font-size: var(--ig-body-1-font-size);
  font-weight: var(--ig-body-1-font-weight);
  font-style: var(--ig-body-1-font-style);
  line-height: var(--ig-body-1-line-height);
  letter-spacing: var(--ig-body-1-letter-spacing);
  text-transform: var(--ig-body-1-text-transform);
  margin-top: var(--ig-body-1-margin-top);
  margin-bottom: var(--ig-body-1-margin-bottom);
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
  opacity: 1;
}`,ct=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */
:host {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-flow: row wrap;
          flex-flow: row wrap;
  -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
          flex: 1 1 auto;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -ms-flex-line-pack: start;
      align-content: flex-start;
  width: 100%;
  color: var(--ig-surface-500-contrast);
  padding: 1rem;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

::slotted(*) {
  margin: 0;
  font: inherit;
  opacity: inherit;
}

header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-flow: column nowrap;
          flex-flow: column nowrap;
  overflow: hidden;
  -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
          flex: 1 1 auto;
}

::slotted([slot=title]) {
  font-family: var(--ig-h6-font-family);
  font-size: var(--ig-h6-font-size);
  font-weight: var(--ig-h6-font-weight);
  font-style: var(--ig-h6-font-style);
  line-height: var(--ig-h6-line-height);
  letter-spacing: var(--ig-h6-letter-spacing);
  text-transform: var(--ig-h6-text-transform);
  margin-top: var(--ig-h6-margin-top);
  margin-bottom: var(--ig-h6-margin-bottom);
  opacity: 0.87;
}

::slotted([slot=subtitle]) {
  font-family: var(--ig-subtitle-2-font-family);
  font-size: var(--ig-subtitle-2-font-size);
  font-weight: var(--ig-subtitle-2-font-weight);
  font-style: var(--ig-subtitle-2-font-style);
  line-height: var(--ig-subtitle-2-line-height);
  letter-spacing: var(--ig-subtitle-2-letter-spacing);
  text-transform: var(--ig-subtitle-2-text-transform);
  margin-top: var(--ig-subtitle-2-margin-top);
  margin-bottom: var(--ig-subtitle-2-margin-bottom);
  opacity: 0.6;
}

::slotted([slot=thumbnail]) {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-item-align: start;
      align-self: flex-start;
  -webkit-margin-end: 1rem;
          margin-inline-end: 1rem;
}

::slotted([slot=title]) {
  font-family: var(--ig-subtitle-1-font-family);
  font-size: var(--ig-subtitle-1-font-size);
  font-weight: var(--ig-subtitle-1-font-weight);
  font-style: var(--ig-subtitle-1-font-style);
  line-height: var(--ig-subtitle-1-line-height);
  letter-spacing: var(--ig-subtitle-1-letter-spacing);
  text-transform: var(--ig-subtitle-1-text-transform);
  margin-top: var(--ig-subtitle-1-margin-top);
  margin-bottom: var(--ig-subtitle-1-margin-bottom);
}

::slotted([slot=subtitle]) {
  font-family: var(--ig-body-2-font-family);
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
}`,gt=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */
:host {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-flow: row wrap;
          flex-flow: row wrap;
  -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
          flex: 1 1 auto;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -ms-flex-line-pack: start;
      align-content: flex-start;
  width: 100%;
  color: var(--ig-surface-500-contrast);
  padding: 1rem;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

::slotted(*) {
  margin: 0;
  font: inherit;
  opacity: inherit;
}

header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-flow: column nowrap;
          flex-flow: column nowrap;
  overflow: hidden;
  -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
          flex: 1 1 auto;
}

::slotted([slot=title]) {
  font-family: var(--ig-h6-font-family);
  font-size: var(--ig-h6-font-size);
  font-weight: var(--ig-h6-font-weight);
  font-style: var(--ig-h6-font-style);
  line-height: var(--ig-h6-line-height);
  letter-spacing: var(--ig-h6-letter-spacing);
  text-transform: var(--ig-h6-text-transform);
  margin-top: var(--ig-h6-margin-top);
  margin-bottom: var(--ig-h6-margin-bottom);
  opacity: 0.87;
}

::slotted([slot=subtitle]) {
  font-family: var(--ig-subtitle-2-font-family);
  font-size: var(--ig-subtitle-2-font-size);
  font-weight: var(--ig-subtitle-2-font-weight);
  font-style: var(--ig-subtitle-2-font-style);
  line-height: var(--ig-subtitle-2-line-height);
  letter-spacing: var(--ig-subtitle-2-letter-spacing);
  text-transform: var(--ig-subtitle-2-text-transform);
  margin-top: var(--ig-subtitle-2-margin-top);
  margin-bottom: var(--ig-subtitle-2-margin-bottom);
  opacity: 0.6;
}

::slotted([slot=thumbnail]) {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-item-align: start;
      align-self: flex-start;
  -webkit-margin-end: 1rem;
          margin-inline-end: 1rem;
}

::slotted([slot=title]) {
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  opacity: 1;
}

::slotted([slot=subtitle]) {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
  opacity: 1;
}`,dt=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */
:host {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-flow: row wrap;
          flex-flow: row wrap;
  -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
          flex: 1 1 auto;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -ms-flex-line-pack: start;
      align-content: flex-start;
  width: 100%;
  color: var(--ig-surface-500-contrast);
  padding: 1rem;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

::slotted(*) {
  margin: 0;
  font: inherit;
  opacity: inherit;
}

header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-flow: column nowrap;
          flex-flow: column nowrap;
  overflow: hidden;
  -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
          flex: 1 1 auto;
}

::slotted([slot=title]) {
  font-family: var(--ig-h6-font-family);
  font-size: var(--ig-h6-font-size);
  font-weight: var(--ig-h6-font-weight);
  font-style: var(--ig-h6-font-style);
  line-height: var(--ig-h6-line-height);
  letter-spacing: var(--ig-h6-letter-spacing);
  text-transform: var(--ig-h6-text-transform);
  margin-top: var(--ig-h6-margin-top);
  margin-bottom: var(--ig-h6-margin-bottom);
  opacity: 0.87;
}

::slotted([slot=subtitle]) {
  font-family: var(--ig-subtitle-2-font-family);
  font-size: var(--ig-subtitle-2-font-size);
  font-weight: var(--ig-subtitle-2-font-weight);
  font-style: var(--ig-subtitle-2-font-style);
  line-height: var(--ig-subtitle-2-line-height);
  letter-spacing: var(--ig-subtitle-2-letter-spacing);
  text-transform: var(--ig-subtitle-2-text-transform);
  margin-top: var(--ig-subtitle-2-margin-top);
  margin-bottom: var(--ig-subtitle-2-margin-bottom);
  opacity: 0.6;
}

::slotted([slot=thumbnail]) {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-item-align: start;
      align-self: flex-start;
  -webkit-margin-end: 1rem;
          margin-inline-end: 1rem;
}`;let ht=class extends r.oi{render(){return r.dy`
      <section>
        <slot name="thumbnail"></slot>
      </section>
      <section>
        <header part="header">
          <slot part="title" name="title"></slot>
          <slot part="subtitle" name="subtitle"></slot>
        </header>
        <slot></slot>
      </section>
    `}};ht.tagName="igc-card-header",ht.styles=dt,ht=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s}([p({bootstrap:lt,fluent:ct,indigo:gt})],ht);const pt=ht,bt=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */
:host {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  overflow: hidden;
}

::slotted(*) {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}`;class vt extends r.oi{render(){return r.dy` <slot></slot> `}}vt.tagName="igc-card-media",vt.styles=bt;var mt=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};x(rt,nt,pt,vt);let ut=class extends r.oi{constructor(){super(...arguments),this.elevated=!1}render(){return r.dy` <slot></slot> `}};ut.tagName="igc-card",ut.styles=Qe,mt([(0,i.Cb)({type:Boolean,reflect:!0})],ut.prototype,"elevated",void 0),ut=mt([p({bootstrap:Ge,fluent:Ze})],ut);const ft=ut;var yt=a(20961),wt=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};let kt=class extends(z(r.oi)){constructor(){super(...arguments),this.focused=!1,this.disabled=!1,this.checked=!1,this.required=!1,this.invalid=!1,this.labelPosition="after"}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}reportValidity(){return this.input.reportValidity()}checkValidity(){return this.input.checkValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=!this.input.checkValidity()}handleBlur(){this.emitEvent("igcBlur"),this.focused=!1}handleFocus(){this.emitEvent("igcFocus")}handleMouseDown(e){e.preventDefault(),this.input.focus(),this.focused=!1}connectedCallback(){super.connectedCallback(),this.addEventListener("keyup",this.handleKeyUp)}disconnectedCallback(){this.removeEventListener("keyup",this.handleKeyUp)}handleKeyUp(){this.focused||(this.focused=!0)}};wt([(0,i.IO)('input[type="checkbox"]',!0)],kt.prototype,"input",void 0),wt([(0,i.SB)()],kt.prototype,"focused",void 0),wt([(0,i.Cb)()],kt.prototype,"name",void 0),wt([(0,i.Cb)()],kt.prototype,"value",void 0),wt([(0,i.Cb)({type:Boolean,reflect:!0})],kt.prototype,"disabled",void 0),wt([(0,i.Cb)({type:Boolean}),(e,t)=>{}],kt.prototype,"checked",void 0),wt([(0,i.Cb)({type:Boolean,reflect:!0})],kt.prototype,"required",void 0),wt([(0,i.Cb)({type:Boolean,reflect:!0})],kt.prototype,"invalid",void 0),wt([(0,i.Cb)({reflect:!0,attribute:"label-position"})],kt.prototype,"labelPosition",void 0),wt([(0,i.Cb)({reflect:!0,attribute:"aria-labelledby"})],kt.prototype,"ariaLabelledby",void 0),wt([(e,t)=>{}],kt.prototype,"focus",null),wt([(e,t)=>{}],kt.prototype,"blur",null),kt=wt([J],kt);const xt=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */
:host {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  font-family: var(--ig-font-family);
}

input[type=checkbox] {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: none;
  clip: rect(0, 0, 0, 0);
  outline: 0;
  pointer-events: none;
  overflow: hidden;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}

[part~=control] {
  --size: 1.25rem;
  position: relative;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
[part~=control]::after {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.125rem), 0.125rem);
  position: absolute;
  content: "";
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  width: var(--size);
  height: var(--size);
  border: 0.125rem solid hsla(var(--ig-gray-600), var(--ig-gray-a));
  -webkit-transition: all 0.15s ease-in;
  -o-transition: all 0.15s ease-in;
  transition: all 0.15s ease-in;
}

[part~=label] {
  display: inline-block;
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  word-wrap: break-all;
  -webkit-transition: color 0.2s ease-in-out;
  -o-transition: color 0.2s ease-in-out;
  transition: color 0.2s ease-in-out;
}

[part~=indicator] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  stroke-linecap: square;
  stroke-width: 3;
  stroke-dasharray: 24;
  stroke-dashoffset: 24;
  fill: none;
  opacity: 0;
  z-index: 1;
  -webkit-transform: scale(0.45);
      -ms-transform: scale(0.45);
          transform: scale(0.45);
  -webkit-transform-origin: center;
      -ms-transform-origin: center;
          transform-origin: center;
}
[part~=indicator] svg {
  width: 100%;
  height: 100%;
}

label {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  cursor: pointer;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-flow: row nowrap;
          flex-flow: row nowrap;
}
label:hover [part="control checked"] {
  background: hsla(var(--ig-secondary-500), 0.06);
}
label:focus-within [part="control checked"] {
  background: hsla(var(--ig-secondary-500), 0.12);
}

[part="control checked"]::after {
  border-color: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  background: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
}

[part="indicator checked"] {
  -webkit-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
  stroke-dashoffset: 0;
  opacity: 1;
}

:host([indeterminate]) [part~=base]:hover [part~=control] {
  background: hsla(var(--ig-secondary-500), 0.06);
}
:host([indeterminate]) [part~=base]:focus-within [part~=control] {
  background: hsla(var(--ig-secondary-500), 0.12);
}
:host([indeterminate]) [part~=control]::after {
  border-color: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  background: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
}
:host([indeterminate]) [part~=indicator] {
  stroke-dashoffset: 41;
  opacity: 1;
  -webkit-transform: rotate(45deg) scale(0.45) translateX(-0.25rem);
      -ms-transform: rotate(45deg) scale(0.45) translateX(-0.25rem);
          transform: rotate(45deg) scale(0.45) translateX(-0.25rem);
}

:host(:not([disabled])[invalid]) [part~=label] {
  color: hsla(var(--ig-error-500), var(--ig-error-a));
}
:host(:not([disabled])[invalid]) [part~=control]::after {
  border-color: hsla(var(--ig-error-500), var(--ig-error-a));
}
:host(:not([disabled])[invalid]) [part="control checked"]::after {
  background: hsla(var(--ig-error-500), var(--ig-error-a));
}

:host(:not([disabled])[invalid][indeterminate]) [part~=control]::after {
  background: hsla(var(--ig-error-500), var(--ig-error-a));
}

:host([disabled]) {
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  cursor: initial;
  pointer-events: none;
}

:host([disabled][indeterminate]) [part~=control]::after {
  background: hsla(var(--ig-gray-300), var(--ig-gray-a));
}

:host([label-position=after]) [part~=label] {
  -webkit-margin-start: 0.5rem;
          margin-inline-start: 0.5rem;
}

:host([label-position=before]) [part~=label] {
  -webkit-box-ordinal-group: 0;
      -ms-flex-order: -1;
          order: -1;
  -webkit-margin-end: 0.5rem;
          margin-inline-end: 0.5rem;
}`,zt=r.iv`/* stylelint-disable max-line-length */
[part~=control] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
  --size: 1rem;
  width: var(--size);
  height: var(--size);
  min-width: var(--size);
  -webkit-transition: background-color 0.15s ease-in-out;
  -o-transition: background-color 0.15s ease-in-out;
  transition: background-color 0.15s ease-in-out;
}
[part~=control]::after {
  width: inherit;
  height: inherit;
  min-width: inherit;
  border-radius: inherit;
  border: none;
  -webkit-box-shadow: inset 0 0 0 1px hsla(var(--ig-gray-400), var(--ig-gray-a));
          box-shadow: inset 0 0 0 1px hsla(var(--ig-gray-400), var(--ig-gray-a));
  -webkit-transition: none;
  -o-transition: none;
  transition: none;
}

[part~=indicator] {
  stroke-width: 3;
  -webkit-transform: scale(0.7);
      -ms-transform: scale(0.7);
          transform: scale(0.7);
  -webkit-transition: none;
  -o-transition: none;
  transition: none;
  stroke: white;
}

[part~=label] {
  font-family: var(--ig-body-2-font-family);
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
  -webkit-transition: none;
  -o-transition: none;
  transition: none;
}

:host([indeterminate]) [part=indicator] {
  -webkit-transform: rotate(45deg) translateX(-0.075rem) scale(0.7);
      -ms-transform: rotate(45deg) translateX(-0.075rem) scale(0.7);
          transform: rotate(45deg) translateX(-0.075rem) scale(0.7);
}

:host(:focus-within) [part~=control] {
  -webkit-box-shadow: 0 0 0 4px hsla(var(--ig-primary-100), var(--ig-primary-a));
          box-shadow: 0 0 0 4px hsla(var(--ig-primary-100), var(--ig-primary-a));
}
:host(:focus-within) [part~=control]::after {
  -webkit-box-shadow: inset 0 0 0 1px hsla(var(--ig-primary-500), var(--ig-primary-a));
          box-shadow: inset 0 0 0 1px hsla(var(--ig-primary-500), var(--ig-primary-a));
}

[part="control checked"]::after,
:host([indeterminate]) [part~=control]::after {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  -webkit-box-shadow: inset 0 0 0 1px hsla(var(--ig-primary-500), var(--ig-primary-a));
          box-shadow: inset 0 0 0 1px hsla(var(--ig-primary-500), var(--ig-primary-a));
}

:host([invalid]) [part=control]::after {
  -webkit-box-shadow: inset 0 0 0 1px hsla(var(--ig-error-500), var(--ig-error-a));
          box-shadow: inset 0 0 0 1px hsla(var(--ig-error-500), var(--ig-error-a));
}

:host([invalid]) [part="control checked"]::after,
:host([invalid][indeterminate]) [part=control]::after {
  -webkit-box-shadow: inset 0 0 0 1px hsla(var(--ig-error-500), var(--ig-error-a));
          box-shadow: inset 0 0 0 1px hsla(var(--ig-error-500), var(--ig-error-a));
}

:host([invalid]:focus-within) [part=control],
:host([invalid]:focus-within) [part="control checked"],
:host([invalid][indeterminate]:focus-within) [part=control] {
  -webkit-box-shadow: 0 0 0 4px hsla(var(--ig-error-100), var(--ig-error-a));
          box-shadow: 0 0 0 4px hsla(var(--ig-error-100), var(--ig-error-a));
}

:host([disabled]) [part=control]::after,
:host([disabled][invalid]) [part=control]::after {
  -webkit-box-shadow: inset 0 0 0 1px hsla(var(--ig-gray-300), var(--ig-gray-a));
          box-shadow: inset 0 0 0 1px hsla(var(--ig-gray-300), var(--ig-gray-a));
}

:host([disabled]) [part="control checked"]::after,
:host([disabled][invalid]) [part="control checked"]::after {
  background: hsla(var(--ig-primary-200), var(--ig-primary-a));
  -webkit-box-shadow: inset 0 0 0 1px hsla(var(--ig-primary-200), var(--ig-primary-a));
          box-shadow: inset 0 0 0 1px hsla(var(--ig-primary-200), var(--ig-primary-a));
}

:host([disabled][indeterminate]) [part=control]::after,
:host([disabled][invalid][indeterminate]) [part=control]::after {
  background: hsla(var(--ig-primary-200), var(--ig-primary-a));
  -webkit-box-shadow: inset 0 0 0 1px hsla(var(--ig-primary-200), var(--ig-primary-a));
          box-shadow: inset 0 0 0 1px hsla(var(--ig-primary-200), var(--ig-primary-a));
}`,Ct=r.iv`/* stylelint-disable max-line-length */
[part~=control] {
  width: var(--size, 1.25rem);
  height: var(--size, 1.25rem);
  min-width: var(--size, 1.25rem);
}
[part~=control]::after {
  border: none;
  background: transparent;
  -webkit-box-shadow: inset 0 0 0 1px var(--border-color, hsla(var(--ig-gray-900), var(--ig-gray-a)));
          box-shadow: inset 0 0 0 1px var(--border-color, hsla(var(--ig-gray-900), var(--ig-gray-a)));
}

[part~=label] {
  font-family: var(--ig-body-2-font-family);
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
}

[part~=indicator] {
  stroke: hsla(var(--ig-surface-500), var(--ig-surface-a));
  stroke-width: 1.5;
  -webkit-transform: scale(0.8);
      -ms-transform: scale(0.8);
          transform: scale(0.8);
}

:host(:hover) [part~=indicator] {
  opacity: 1;
  stroke: hsla(var(--ig-gray-700), var(--ig-gray-a));
  stroke-dashoffset: 0;
  -webkit-transition: opacity 0.1s ease-out;
  -o-transition: opacity 0.1s ease-out;
  transition: opacity 0.1s ease-out;
}
:host(:hover) [part="indicator checked"] {
  stroke: hsla(var(--ig-surface-500), var(--ig-surface-a));
}

:host(:hover) [part~=control]::after,
:host(:focus-within) [part~=control]::after {
  -webkit-box-shadow: inset 0 0 0 1px var(--hover-color, hsla(var(--ig-gray-800), var(--ig-gray-a)));
          box-shadow: inset 0 0 0 1px var(--hover-color, hsla(var(--ig-gray-800), var(--ig-gray-a)));
}

:host([indeterminate]) [part~=indicator] {
  display: none;
}
:host([indeterminate]) [part~=control]::before {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.125rem), 0.125rem);
  display: block;
  width: inherit;
  height: inherit;
  content: "";
  -webkit-transform: scale(0.5);
      -ms-transform: scale(0.5);
          transform: scale(0.5);
  -webkit-transition-duration: 0.1s;
       -o-transition-duration: 0.1s;
          transition-duration: 0.1s;
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  z-index: 1;
}
:host([indeterminate]) [part~=control]::after {
  -webkit-box-shadow: inset 0 0 0 1px hsla(var(--ig-primary-500), var(--ig-primary-a));
          box-shadow: inset 0 0 0 1px hsla(var(--ig-primary-500), var(--ig-primary-a));
  background: transparent;
}

:host([indeterminate]:hover) [part~=control]::before,
:host([indeterminate]:focus-within) [part~=control]::before {
  background: var(--checked-hover-color, hsla(var(--ig-primary-900), var(--ig-primary-a)));
}
:host([indeterminate]:hover) [part~=control]::after,
:host([indeterminate]:focus-within) [part~=control]::after {
  -webkit-box-shadow: inset 0 0 0 1px var(--checked-hover-color, hsla(var(--ig-primary-900), var(--ig-primary-a)));
          box-shadow: inset 0 0 0 1px var(--checked-hover-color, hsla(var(--ig-primary-900), var(--ig-primary-a)));
  background: transparent;
}

[part="control checked"]::after {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  -webkit-box-shadow: inset 0 0 0 1px hsla(var(--ig-primary-500), var(--ig-primary-a));
          box-shadow: inset 0 0 0 1px hsla(var(--ig-primary-500), var(--ig-primary-a));
}

:host(:hover) [part="control checked"]::after,
:host(:focus-within) [part="control checked"]::after {
  background: var(--checked-hover-color, hsla(var(--ig-primary-900), var(--ig-primary-a)));
  -webkit-box-shadow: inset 0 0 0 1px var(--checked-hover-color, hsla(var(--ig-primary-900), var(--ig-primary-a)));
          box-shadow: inset 0 0 0 1px var(--checked-hover-color, hsla(var(--ig-primary-900), var(--ig-primary-a)));
}

:host(:not([disabled])[invalid]) [part~=label] {
  color: var(--invalid-color, hsla(var(--ig-error-500), var(--ig-error-a)));
}

:host([invalid]) [part~=control]::after {
  -webkit-box-shadow: inset 0 0 0 1px var(--invalid-color, hsla(var(--ig-error-500), var(--ig-error-a)));
          box-shadow: inset 0 0 0 1px var(--invalid-color, hsla(var(--ig-error-500), var(--ig-error-a)));
}

:host([invalid]:hover) [part~=indicator] {
  stroke: var(--invalid-color, hsla(var(--ig-error-500), var(--ig-error-a)));
}

:host([invalid]:hover) [part="indicator checked"] {
  stroke: hsla(var(--ig-surface-500), var(--ig-surface-a));
}

:host([invalid][checked]) [part="control checked"]::after {
  -webkit-box-shadow: inset 0 0 0 1px var(--invalid-color, hsla(var(--ig-error-500), var(--ig-error-a)));
          box-shadow: inset 0 0 0 1px var(--invalid-color, hsla(var(--ig-error-500), var(--ig-error-a)));
  background: var(--invalid-color, hsla(var(--ig-error-500), var(--ig-error-a)));
}

:host(:not([disabled])[invalid][indeterminate]) [part~=control]::before {
  background: var(--invalid-color, hsla(var(--ig-error-500), var(--ig-error-a)));
}
:host(:not([disabled])[invalid][indeterminate]) [part~=control]::after {
  -webkit-box-shadow: inset 0 0 0 1px var(--invalid-color, hsla(var(--ig-error-500), var(--ig-error-a)));
          box-shadow: inset 0 0 0 1px var(--invalid-color, hsla(var(--ig-error-500), var(--ig-error-a)));
  background: transparent;
}

:host([invalid]:hover) [part~=control]::after,
:host([invalid]:focus-within) [part~=control]::after {
  -webkit-box-shadow: inset 0 0 0 1px var(--invalid-hover-color, hsla(var(--ig-error-700), var(--ig-error-a)));
          box-shadow: inset 0 0 0 1px var(--invalid-hover-color, hsla(var(--ig-error-700), var(--ig-error-a)));
}

:host([invalid]:hover) [part="control checked"]::after,
:host([invalid]:focus-within) [part="control checked"]::after {
  background: var(--invalid-hover-color, hsla(var(--ig-error-700), var(--ig-error-a)));
}

:host([invalid][indeterminate]:hover) [part~=control]::before,
:host([invalid][indeterminate]:focus-within) [part~=control]::before {
  background: var(--invalid-hover-color, hsla(var(--ig-error-700), var(--ig-error-a)));
}
:host([invalid][indeterminate]:hover) [part~=control]::after,
:host([invalid][indeterminate]:focus-within) [part~=control]::after {
  -webkit-box-shadow: inset 0 0 0 1px var(--invalid-hover-color, hsla(var(--ig-error-700), var(--ig-error-a)));
          box-shadow: inset 0 0 0 1px var(--invalid-hover-color, hsla(var(--ig-error-700), var(--ig-error-a)));
  background: transparent;
}

:host([disabled]) [part~=label] {
  color: var(--disabled-color, hsla(var(--ig-gray-400), var(--ig-gray-a)));
}

:host([disabled]) [part~=control]::after,
:host([disabled][invalid]) [part~=control]::after {
  -webkit-box-shadow: inset 0 0 0 1px var(--disabled-color, hsla(var(--ig-gray-400), var(--ig-gray-a)));
          box-shadow: inset 0 0 0 1px var(--disabled-color, hsla(var(--ig-gray-400), var(--ig-gray-a)));
}

:host([disabled]) [part="control checked"]::after,
:host([disabled][invalid]) [part="control checked"]::after {
  background: var(--disabled-color, hsla(var(--ig-gray-400), var(--ig-gray-a)));
}

:host([disabled][indeterminate]) [part~=control]::before,
:host([disabled][invalid][indeterminate]) [part~=control]::before {
  background: var(--disabled-color, hsla(var(--ig-gray-400), var(--ig-gray-a)));
}
:host([disabled][indeterminate]) [part~=control]::after,
:host([disabled][invalid][indeterminate]) [part~=control]::after {
  -webkit-box-shadow: inset 0 0 0 1px var(--disabled-color, hsla(var(--ig-gray-400), var(--ig-gray-a)));
          box-shadow: inset 0 0 0 1px var(--disabled-color, hsla(var(--ig-gray-400), var(--ig-gray-a)));
  background: transparent;
}

[part~=focused] {
  position: relative;
}
[part~=focused]::after {
  content: "";
  position: absolute;
  top: -0.125rem;
  left: -0.125rem;
  -webkit-box-shadow: 0 0 0 1px hsla(var(--ig-gray-700), var(--ig-gray-a));
          box-shadow: 0 0 0 1px hsla(var(--ig-gray-700), var(--ig-gray-a));
  width: calc(100% + (0.125rem * 2));
  height: calc(100% + (0.125rem * 2));
}`,Dt=r.iv`/* stylelint-disable max-line-length */
:host {
  font-weight: 600;
}

[part~=control] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.1875rem), 0.1875rem);
  width: var(--size, 1.25rem);
  height: var(--size, 1.25rem);
  min-width: var(--size, 1.25rem);
}
[part~=control]::after {
  border-radius: inherit;
  border-color: var(--border-color, hsla(var(--ig-gray-500), var(--ig-gray-a)));
}

[part~=label] {
  font-family: var(--ig-body-1-font-family);
  font-size: var(--ig-body-1-font-size);
  font-weight: var(--ig-body-1-font-weight);
  font-style: var(--ig-body-1-font-style);
  line-height: var(--ig-body-1-line-height);
  letter-spacing: var(--ig-body-1-letter-spacing);
  text-transform: var(--ig-body-1-text-transform);
  margin-top: var(--ig-body-1-margin-top);
  margin-bottom: var(--ig-body-1-margin-bottom);
}

[part~=indicator] {
  stroke: hsla(var(--ig-surface-500), var(--ig-surface-a));
  -webkit-transform: scale(0.8);
      -ms-transform: scale(0.8);
          transform: scale(0.8);
}

:host([indeterminate]) [part~=indicator] {
  -webkit-transform: rotate(45deg) translateX(-0.125rem) scale(0.8);
      -ms-transform: rotate(45deg) translateX(-0.125rem) scale(0.8);
          transform: rotate(45deg) translateX(-0.125rem) scale(0.8);
}

:host(:not([invalid])) [part="control checked"]::after,
:host(:not([invalid])[indeterminate]) [part~=control]::after {
  background: var(--checked-color, hsla(var(--ig-secondary-500), var(--ig-secondary-a)));
  border-color: var(--checked-color, hsla(var(--ig-secondary-500), var(--ig-secondary-a)));
}

:host(:hover) [part~=control] {
  -webkit-box-shadow: 0 0 0 4px hsla(var(--ig-gray-200), 0.87);
          box-shadow: 0 0 0 4px hsla(var(--ig-gray-200), 0.87);
}

:host(:focus-within) [part~=control] {
  -webkit-box-shadow: 0 0 0 4px hsla(var(--ig-gray-300), 0.87);
          box-shadow: 0 0 0 4px hsla(var(--ig-gray-300), 0.87);
}

:host(:hover) [part="control checked"],
:host([indeterminate]:hover) [part~=control] {
  -webkit-box-shadow: 0 0 0 4px hsla(var(--ig-secondary-100), 0.87);
          box-shadow: 0 0 0 4px hsla(var(--ig-secondary-100), 0.87);
}

:host(:focus-within) [part="control checked"],
:host([indeterminate]:focus-within) [part~=control] {
  -webkit-box-shadow: 0 0 0 4px hsla(var(--ig-secondary-200), 0.87);
          box-shadow: 0 0 0 4px hsla(var(--ig-secondary-200), 0.87);
}

:host(:not([disabled])[invalid]) [part="control checked"],
:host(:not([disabled])[invalid][indeterminate]) [part~=control] {
  -webkit-box-shadow: inset 0 0 0 4px hsla(var(--ig-error-500), var(--ig-error-a));
          box-shadow: inset 0 0 0 4px hsla(var(--ig-error-500), var(--ig-error-a));
  background: hsla(var(--ig-error-500), var(--ig-error-a));
}

:host([invalid]:hover) [part~=control],
:host([invalid]:hover) [part="control checked"],
:host([invalid][indeterminate]:hover) [part~=control] {
  -webkit-box-shadow: 0 0 0 4px hsla(var(--ig-error-100), 0.87);
          box-shadow: 0 0 0 4px hsla(var(--ig-error-100), 0.87);
}

:host([invalid]:focus-within) [part~=control],
:host([invalid]:focus-within) [part="control checked"],
:host([invalid][indeterminate]:focus-within) [part~=control] {
  -webkit-box-shadow: 0 0 0 4px hsla(var(--ig-error-200), 0.87);
          box-shadow: 0 0 0 4px hsla(var(--ig-error-200), 0.87);
}

:host([disabled]) [part~=control]::after,
:host([disabled][invalid]) [part~=control]::after {
  border-color: var(--disabled-color, hsla(var(--ig-gray-300), var(--ig-gray-a)));
}
:host([disabled]) [part="control checked"]::after,
:host([disabled][invalid]) [part="control checked"]::after {
  background: var(--disabled-color, hsla(var(--ig-gray-300), var(--ig-gray-a)));
}
:host([disabled]) [part~=label],
:host([disabled][invalid]) [part~=label] {
  color: var(--disabled-color, hsla(var(--ig-gray-300), var(--ig-gray-a)));
}

:host([disabled][indeterminate]) [part~=control]::after {
  background: var(--disabled-color, hsla(var(--ig-gray-300), var(--ig-gray-a)));
  border-color: var(--disabled-color, hsla(var(--ig-gray-300), var(--ig-gray-a)));
}`,It=r.iv`/* stylelint-disable max-line-length */
label:hover [part=control] {
  background: hsla(var(--ig-gray-600), 0.06);
}
label:focus-within [part=control] {
  background: hsla(var(--ig-gray-600), 0.12);
}

[part~=label] {
  font-family: var(--ig-subtitle-1-font-family);
  font-size: var(--ig-subtitle-1-font-size);
  font-weight: var(--ig-subtitle-1-font-weight);
  font-style: var(--ig-subtitle-1-font-style);
  line-height: var(--ig-subtitle-1-line-height);
  letter-spacing: var(--ig-subtitle-1-letter-spacing);
  text-transform: var(--ig-subtitle-1-text-transform);
  margin-top: var(--ig-subtitle-1-margin-top);
  margin-bottom: var(--ig-subtitle-1-margin-bottom);
}

[part~=indicator] {
  stroke: hsla(var(--ig-surface-500), var(--ig-surface-a));
}

[part~=control] {
  --size: 1.25rem;
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * calc(var(--size))), calc(var(--size)));
  width: calc(var(--size) * 2);
  height: calc(var(--size) * 2);
  min-width: calc(var(--size) * 2);
  -webkit-transition: background 0.15s ease-in;
  -o-transition: background 0.15s ease-in;
  transition: background 0.15s ease-in;
}

:host([invalid]) label:hover [part~=control],
:host([invalid][indeterminate]) label:hover [part~=control] {
  background: hsla(var(--ig-error-500), 0.06);
}
:host([invalid]) label:focus-within [part~=control],
:host([invalid][indeterminate]) label:focus-within [part~=control] {
  background: hsla(var(--ig-error-500), 0.12);
}

:host([disabled]) [part~=label] {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}
:host([disabled]) [part~=control]::after {
  border-color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}
:host([disabled]) [part="control checked"]::after {
  background: hsla(var(--ig-gray-400), var(--ig-gray-a));
}

:host([disabled][indeterminate]) [part~=control]::after {
  background: hsla(var(--ig-secondary-100), var(--ig-secondary-a));
  border-color: transparent;
}`;var St,$t=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};let Pt=St=class extends kt{constructor(){super(...arguments),this.inputId=`checkbox-${St.increment()}`,this.labelId=`checkbox-label-${this.inputId}`,this.indeterminate=!1}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emitEvent("igcChange",{detail:this.checked})}handleChange(){this.invalid=!this.input.checkValidity()}render(){return r.dy`
      <label
        part=${$({base:!0,checked:this.checked,focused:this.focused})}
        for=${this.inputId}
        @pointerdown=${this.handleMouseDown}
      >
        <input
          id=${this.inputId}
          type="checkbox"
          name=${(0,s.o)(this.name)}
          value=${(0,s.o)(this.value)}
          .required=${this.required}
          .disabled=${this.disabled}
          .checked=${(0,yt.a)(this.checked)}
          .indeterminate=${(0,yt.a)(this.indeterminate)}
          aria-checked=${this.indeterminate&&!this.checked?"mixed":this.checked}
          aria-disabled=${this.disabled?"true":"false"}
          aria-labelledby=${this.ariaLabelledby?this.ariaLabelledby:this.labelId}
          @click=${this.handleClick}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />
        <span part=${$({control:!0,checked:this.checked})}>
          <span part=${$({indicator:!0,checked:this.checked})}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M4.1,12.7 9,17.6 20.3,6.3" />
            </svg>
          </span>
        </span>
        <span
          part=${$({label:!0,checked:this.checked})}
          id=${this.labelId}
        >
          <slot></slot>
        </span>
      </label>
    `}};Pt.tagName="igc-checkbox",Pt.styles=xt,Pt.increment=T(),$t([(0,i.Cb)({type:Boolean,reflect:!0})],Pt.prototype,"indeterminate",void 0),$t([b("checked",{waitUntilFirstUpdate:!0}),b("focused",{waitUntilFirstUpdate:!0}),b("indeterminate",{waitUntilFirstUpdate:!0})],Pt.prototype,"handleChange",null),Pt=St=$t([p({material:It,bootstrap:zt,fluent:Ct,indigo:Dt})],Pt);const Mt=Pt;var Et=a(75057),Tt=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};class Ot extends r.oi{constructor(){super(...arguments),this.percentage=0,this.max=100,this.value=0,this.variant="primary",this.animationDuration=500,this.indeterminate=!1,this.hideLabel=!1}indeterminateChange(){this.cancelAnimations(),this.indeterminate||(this.percentage=Math.floor(P(this.value,this.max)))}maxChange(){this.max=Math.max(0,this.max),this.value>this.max?this.value=this.max:this.indeterminate||this.animateLabelTo(this.max,this.value)}valueChange(e){this.value=M(this.value,0,this.max),this.indeterminate||(cancelAnimationFrame(this.tick),this.percentage!==Math.floor(P(this.value,this.max))&&this.animateLabelTo(e,this.value))}slotChanges(){this.requestUpdate()}connectedCallback(){super.connectedCallback(),this.initialMax=Math.max(0,this.max),this.initialValue=M(this.value,0,this.initialMax),this.value=0,this.max=100}firstUpdated(){this.indeterminate||setTimeout((()=>{this.max=this.initialMax,this.value=this.initialValue}),0)}cancelAnimations(){requestAnimationFrame((()=>{var e;null===(e=this.progressIndicator)||void 0===e||e.getAnimations().forEach((e=>{e instanceof CSSTransition&&e.cancel()}))})),cancelAnimationFrame(this.tick)}animateLabelTo(e,t){let a;const r=i=>{a=null!=a?a:i;const o=Math.min((i-a)/(this.animationDuration||1),1);this.percentage=Math.floor(P(o*(t-e)+e,this.max)),o<1?this.tick=requestAnimationFrame(r):cancelAnimationFrame(this.tick)};requestAnimationFrame(r)}renderLabelFormat(){return this.labelFormat.replace(/\{0\}/gm,`${this.value}`).replace(/\{1\}/gm,`${this.max}`)}renderDefaultSlot(){return r.dy`<slot part="label" @slotchange=${this.slotChanges}></slot>
      ${(0,Et.g)(this.indeterminate||this.hideLabel||this.assignedElements.length,(()=>r.Ld),(()=>r.dy`<span part="label value">${this.renderLabelText()}</span>`))}`}renderLabelText(){return this.labelFormat?this.renderLabelFormat():`${this.percentage}%`}}Tt([(0,i.NH)()],Ot.prototype,"assignedElements",void 0),Tt([(0,i.IO)('[part~="fill"]',!0)],Ot.prototype,"progressIndicator",void 0),Tt([(0,i.SB)()],Ot.prototype,"percentage",void 0),Tt([(0,i.Cb)({type:Number})],Ot.prototype,"max",void 0),Tt([(0,i.Cb)({type:Number})],Ot.prototype,"value",void 0),Tt([(0,i.Cb)({reflect:!0})],Ot.prototype,"variant",void 0),Tt([(0,i.Cb)({type:Number,attribute:"animation-duration"})],Ot.prototype,"animationDuration",void 0),Tt([(0,i.Cb)({type:Boolean,reflect:!1})],Ot.prototype,"indeterminate",void 0),Tt([(0,i.Cb)({type:Boolean,attribute:"hide-label",reflect:!1})],Ot.prototype,"hideLabel",void 0),Tt([(0,i.Cb)({attribute:"label-format"})],Ot.prototype,"labelFormat",void 0),Tt([b("indeterminate",{waitUntilFirstUpdate:!0})],Ot.prototype,"indeterminateChange",null),Tt([b("max",{waitUntilFirstUpdate:!0})],Ot.prototype,"maxChange",null),Tt([b("value",{waitUntilFirstUpdate:!0})],Ot.prototype,"valueChange",null);const Vt=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */
@-webkit-keyframes indeterminate-primary {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  20% {
    -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.7017, 0.4958);
            animation-timing-function: cubic-bezier(0.5, 0, 0.7017, 0.4958);
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  59.15% {
    -webkit-animation-timing-function: cubic-bezier(0.3024, 0.3813, 0.55, 0.9563);
            animation-timing-function: cubic-bezier(0.3024, 0.3813, 0.55, 0.9563);
    -webkit-transform: translateX(83.671%);
            transform: translateX(83.671%);
  }
  100% {
    -webkit-transform: translateX(200.611%);
            transform: translateX(200.611%);
  }
}
@keyframes indeterminate-primary {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  20% {
    -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.7017, 0.4958);
            animation-timing-function: cubic-bezier(0.5, 0, 0.7017, 0.4958);
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  59.15% {
    -webkit-animation-timing-function: cubic-bezier(0.3024, 0.3813, 0.55, 0.9563);
            animation-timing-function: cubic-bezier(0.3024, 0.3813, 0.55, 0.9563);
    -webkit-transform: translateX(83.671%);
            transform: translateX(83.671%);
  }
  100% {
    -webkit-transform: translateX(200.611%);
            transform: translateX(200.611%);
  }
}
@-webkit-keyframes indeterminate-primary-scale {
  0% {
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
  36.65% {
    -webkit-animation-timing-function: cubic-bezier(0.3347, 0.124, 0.7858, 1);
            animation-timing-function: cubic-bezier(0.3347, 0.124, 0.7858, 1);
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
  69.15% {
    -webkit-animation-timing-function: cubic-bezier(0.3347, 0.124, 0.7858, 1);
            animation-timing-function: cubic-bezier(0.3347, 0.124, 0.7858, 1);
    -webkit-transform: scaleX(0.6614);
            transform: scaleX(0.6614);
  }
  100% {
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
}
@keyframes indeterminate-primary-scale {
  0% {
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
  36.65% {
    -webkit-animation-timing-function: cubic-bezier(0.3347, 0.124, 0.7858, 1);
            animation-timing-function: cubic-bezier(0.3347, 0.124, 0.7858, 1);
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
  69.15% {
    -webkit-animation-timing-function: cubic-bezier(0.3347, 0.124, 0.7858, 1);
            animation-timing-function: cubic-bezier(0.3347, 0.124, 0.7858, 1);
    -webkit-transform: scaleX(0.6614);
            transform: scaleX(0.6614);
  }
  100% {
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
}
@-webkit-keyframes indeterminate-secondary {
  0% {
    -webkit-animation-timing-function: cubic-bezier(0.15, 0, 0.515, 0.4096);
            animation-timing-function: cubic-bezier(0.15, 0, 0.515, 0.4096);
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  25% {
    -webkit-animation-timing-function: cubic-bezier(0.31, 0.284, 0.8, 0.7337);
            animation-timing-function: cubic-bezier(0.31, 0.284, 0.8, 0.7337);
    -webkit-transform: translateX(37.6519%);
            transform: translateX(37.6519%);
  }
  48.35% {
    -webkit-animation-timing-function: cubic-bezier(0.4, 0.627, 0.6, 0.902);
            animation-timing-function: cubic-bezier(0.4, 0.627, 0.6, 0.902);
    -webkit-transform: translateX(84.3861%);
            transform: translateX(84.3861%);
  }
  100% {
    -webkit-transform: translateX(160.2777%);
            transform: translateX(160.2777%);
  }
}
@keyframes indeterminate-secondary {
  0% {
    -webkit-animation-timing-function: cubic-bezier(0.15, 0, 0.515, 0.4096);
            animation-timing-function: cubic-bezier(0.15, 0, 0.515, 0.4096);
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  25% {
    -webkit-animation-timing-function: cubic-bezier(0.31, 0.284, 0.8, 0.7337);
            animation-timing-function: cubic-bezier(0.31, 0.284, 0.8, 0.7337);
    -webkit-transform: translateX(37.6519%);
            transform: translateX(37.6519%);
  }
  48.35% {
    -webkit-animation-timing-function: cubic-bezier(0.4, 0.627, 0.6, 0.902);
            animation-timing-function: cubic-bezier(0.4, 0.627, 0.6, 0.902);
    -webkit-transform: translateX(84.3861%);
            transform: translateX(84.3861%);
  }
  100% {
    -webkit-transform: translateX(160.2777%);
            transform: translateX(160.2777%);
  }
}
@-webkit-keyframes indeterminate-secondary-scale {
  0% {
    -webkit-animation-timing-function: cubic-bezier(0.15, 0, 0.515, 0.4096);
            animation-timing-function: cubic-bezier(0.15, 0, 0.515, 0.4096);
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
  19.15% {
    -webkit-animation-timing-function: cubic-bezier(0.31, 0.284, 0.8, 0.7337);
            animation-timing-function: cubic-bezier(0.31, 0.284, 0.8, 0.7337);
    -webkit-transform: scaleX(0.4571);
            transform: scaleX(0.4571);
  }
  44.15% {
    -webkit-animation-timing-function: cubic-bezier(0.4, 0.627, 0.6, 0.902);
            animation-timing-function: cubic-bezier(0.4, 0.627, 0.6, 0.902);
    -webkit-transform: scaleX(0.727);
            transform: scaleX(0.727);
  }
  100% {
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
}
@keyframes indeterminate-secondary-scale {
  0% {
    -webkit-animation-timing-function: cubic-bezier(0.15, 0, 0.515, 0.4096);
            animation-timing-function: cubic-bezier(0.15, 0, 0.515, 0.4096);
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
  19.15% {
    -webkit-animation-timing-function: cubic-bezier(0.31, 0.284, 0.8, 0.7337);
            animation-timing-function: cubic-bezier(0.31, 0.284, 0.8, 0.7337);
    -webkit-transform: scaleX(0.4571);
            transform: scaleX(0.4571);
  }
  44.15% {
    -webkit-animation-timing-function: cubic-bezier(0.4, 0.627, 0.6, 0.902);
            animation-timing-function: cubic-bezier(0.4, 0.627, 0.6, 0.902);
    -webkit-transform: scaleX(0.727);
            transform: scaleX(0.727);
  }
  100% {
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
}
@-webkit-keyframes indeterminate-bar-fluent {
  0% {
    -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
    -webkit-transform-origin: left;
            transform-origin: left;
  }
  100% {
    -webkit-transform: translateX(310%);
            transform: translateX(310%);
    -webkit-transform-origin: right;
            transform-origin: right;
  }
}
@keyframes indeterminate-bar-fluent {
  0% {
    -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
    -webkit-transform-origin: left;
            transform-origin: left;
  }
  100% {
    -webkit-transform: translateX(310%);
            transform: translateX(310%);
    -webkit-transform-origin: right;
            transform-origin: right;
  }
}
@-webkit-keyframes indeterminate-bar-fluent-rtl {
  0% {
    -webkit-transform: translateX(-310%);
            transform: translateX(-310%);
    -webkit-transform-origin: right;
            transform-origin: right;
  }
  100% {
    -webkit-transform: translateX(100%);
            transform: translateX(100%);
    -webkit-transform-origin: left;
            transform-origin: left;
  }
}
@keyframes indeterminate-bar-fluent-rtl {
  0% {
    -webkit-transform: translateX(-310%);
            transform: translateX(-310%);
    -webkit-transform-origin: right;
            transform-origin: right;
  }
  100% {
    -webkit-transform: translateX(100%);
            transform: translateX(100%);
    -webkit-transform-origin: left;
            transform-origin: left;
  }
}
@-webkit-keyframes indeterminate-accordion {
  0% {
    stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * 2);
    stroke-dasharray: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * 9 / 10);
  }
  100% {
    stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * 2 / 5);
  }
}
@keyframes indeterminate-accordion {
  0% {
    stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * 2);
    stroke-dasharray: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * 9 / 10);
  }
  100% {
    stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * 2 / 5);
  }
}
@-webkit-keyframes indeterminate-accordion-rtl {
  0% {
    stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * -2);
    stroke-dasharray: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * 9 / 10);
  }
  100% {
    stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * -2 / 5);
  }
}
@keyframes indeterminate-accordion-rtl {
  0% {
    stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * -2);
    stroke-dasharray: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * 9 / 10);
  }
  100% {
    stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * -2 / 5);
  }
}
@-webkit-keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
:host {
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  font-family: var(--ig-font-family);
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}

[part~=label] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  color: inherit;
  font-weight: 600;
}

:host {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  position: relative;
  --stroke-thickness: 2px;
  --diameter: 30px;
}

[part~=label] {
  fill: hsla(var(--ig-gray-900), var(--ig-gray-a));
  position: absolute;
  -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}

[part~=label],
[part~=value] {
  font-size: calc(var(--diameter) / 3 - var(--stroke-thickness));
  line-height: normal;
}

[part="svg indeterminate"] {
  -webkit-transform-origin: 50% 50%;
      -ms-transform-origin: 50% 50%;
          transform-origin: 50% 50%;
  -webkit-animation: 3s linear 0s infinite normal none running rotate-center;
          animation: 3s linear 0s infinite normal none running rotate-center;
}

[part="svg indeterminate"] [part~=fill] {
  stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * 2);
  -webkit-animation: indeterminate-accordion 1.5s cubic-bezier(0, 0.085, 0.68, 0.53) normal infinite;
          animation: indeterminate-accordion 1.5s cubic-bezier(0, 0.085, 0.68, 0.53) normal infinite;
}

[part~=svg] {
  width: calc(var(--diameter) + var(--stroke-thickness));
  height: calc(var(--diameter) + var(--stroke-thickness));
  -webkit-transform: rotate(-90deg);
      -ms-transform: rotate(-90deg);
          transform: rotate(-90deg);
}

[part~=track] {
  stroke: hsla(var(--ig-gray-300), var(--ig-gray-a));
}

[part~=fill] {
  stroke-dasharray: calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416);
  stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) - var(--percentage) * calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416));
  -webkit-transition: stroke-dashoffset var(--duration) linear;
  -o-transition: stroke-dashoffset var(--duration) linear;
  transition: stroke-dashoffset var(--duration) linear;
  --percentage: 0;
  --duration: 500ms;
}

[part~=track],
[part~=fill] {
  width: 100%;
  height: 100%;
  fill: transparent;
  stroke-width: var(--stroke-thickness);
  cx: calc(calc(var(--diameter) + var(--stroke-thickness)) / 2);
  cy: calc(calc(var(--diameter) + var(--stroke-thickness)) / 2);
  r: calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5);
  -webkit-transform-origin: center;
      -ms-transform-origin: center;
          transform-origin: center;
}

[part~=gradient_start],
[part~=gradient_end] {
  stop-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}

:host([variant=danger]) [part~=gradient_start],
:host([variant=danger]) [part~=gradient_end] {
  stop-color: hsla(var(--ig-error-500), var(--ig-error-a));
}

:host([variant=warning]) [part~=gradient_start],
:host([variant=warning]) [part~=gradient_end] {
  stop-color: hsla(var(--ig-warn-500), var(--ig-warn-a));
}

:host([variant=info]) [part~=gradient_start],
:host([variant=info]) [part~=gradient_end] {
  stop-color: hsla(var(--ig-info-500), var(--ig-info-a));
}

:host([variant=success]) [part~=gradient_start],
:host([variant=success]) [part~=gradient_end] {
  stop-color: hsla(var(--ig-success-500), var(--ig-success-a));
}

:host([dir=rtl]) [part="svg indeterminate"] [part~=fill] {
  -webkit-animation-name: indeterminate-accordion-rtl;
          animation-name: indeterminate-accordion-rtl;
}
:host([dir=rtl]) [part~=indeterminate] {
  animation-direction: reverse;
}
:host([dir=rtl]) [part~=indeterminate] [part~=track] {
  animation-direction: reverse;
}
:host([dir=rtl]) [part~=fill] {
  stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) + var(--percentage) * calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416));
}`,Rt=r.iv`/* stylelint-disable max-line-length */
:host {
  --stroke-thickness: 4px;
  --diameter: 28px;
}

[part~=svg][part~=indeterminate] {
  -webkit-animation-duration: 0.75s;
          animation-duration: 0.75s;
}

[part="svg indeterminate"] [part~=fill] {
  stroke-dashoffset: 60% !important;
  -webkit-animation: none;
          animation: none;
}

[part~=track][part~=indeterminate] {
  stroke: transparent;
}`,At=r.iv`/* stylelint-disable max-line-length */
:host {
  --stroke-thickness: 1.5px;
}

[part~=track] {
  stroke: hsla(var(--ig-primary-50), 0.3);
}`;var Ft=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};class Lt extends r.oi{constructor(){super(...arguments),this.offset="0%",this.color="black",this.opacity=1}render(){return r.Ld}}Lt.tagName="igc-circular-gradient",Ft([(0,i.Cb)()],Lt.prototype,"offset",void 0),Ft([(0,i.Cb)()],Lt.prototype,"color",void 0),Ft([(0,i.Cb)({type:Number})],Lt.prototype,"opacity",void 0);var jt=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};x(Lt);let _t=class extends Ot{constructor(){super(...arguments),this.gradientId=Date.now().toString(16)}get stroke(){return{stroke:`url(#${this.gradientId})`,"--percentage":(P(this.value,this.max)/100).toString(),"--duration":this.animationDuration+"ms"}}get svgParts(){return{indeterminate:this.indeterminate}}gradientChange(){this.requestUpdate()}renderSvg(){return r.YP`
      <circle part="track ${$(this.svgParts)}"/>
      <circle style="${(0,ge.V)(this.stroke)}" part="fill"/>

      <defs>
          <linearGradient id=${this.gradientId} gradientTransform="rotate(90)">
          ${(0,Et.g)(this.gradientElements.length,(()=>this.gradientElements.map((e=>r.YP`<stop offset=${e.offset} stop-color=${e.color} stop-opacity=${e.opacity}/>`))),(()=>r.YP`
              <stop offset="0%" part="gradient_start" />
              <stop offset="100%" part="gradient_end" />
          `))}
          </linearGradient>
      </defs>
    `}renderWrapper(){return r.dy`
      <svg
        part="svg ${$(this.svgParts)}"
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax=${this.max}
        aria-valuenow=${this.indeterminate?r.Ld:this.value}
      >
        ${this.renderSvg()}
      </svg>
      <slot name="gradient" @slotchange=${this.gradientChange}></slot>
      ${this.renderDefaultSlot()}
    `}render(){return this.renderWrapper()}};_t.tagName="igc-circular-progress",_t.styles=Vt,jt([(0,i.NH)({slot:"gradient"})],_t.prototype,"gradientElements",void 0),_t=jt([p({bootstrap:Rt,fluent:At})],_t);const Xt=_t,Bt=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */
:host {
  --size: max(var(--is-large, 1) * 2rem, var(--is-medium, 1) * 1.5rem, var(--is-small, 1) * 1.25rem);
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  vertical-align: top;
}

:host([size=small]) {
  --component-size: var(--ig-size, var(--ig-size-small));
}
:host([size=small]) [part=prefix] {
  -webkit-margin-end: 0.1875rem;
          margin-inline-end: 0.1875rem;
}
:host([size=small]) [part=suffix] {
  -webkit-margin-start: 0.1875rem;
          margin-inline-start: 0.1875rem;
}

:host([size=medium]) {
  --component-size: var(--ig-size, var(--ig-size-medium));
}
:host([size=medium]) [part=prefix] {
  -webkit-margin-end: 0.375rem;
          margin-inline-end: 0.375rem;
}
:host([size=medium]) [part=suffix] {
  -webkit-margin-start: 0.375rem;
          margin-inline-start: 0.375rem;
}

:host([size=large]) {
  --component-size: var(--ig-size, var(--ig-size-large));
}
:host([size=large]) [part=prefix] {
  -webkit-margin-end: 0.5rem;
          margin-inline-end: 0.5rem;
}
:host([size=large]) [part=suffix] {
  -webkit-margin-start: 0.5rem;
          margin-inline-start: 0.5rem;
}
:host([size=large]) igc-icon[size=large] {
  --size: 1.25rem;
}

:host button {
  font-family: var(--ig-body-2-font-family);
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 1rem), 1rem);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  font-family: var(--ig-font-family);
  border-style: none;
  -webkit-box-shadow: none;
          box-shadow: none;
  cursor: pointer;
  height: var(--size);
  padding: max(var(--is-large, 1) * 12px * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * 6px * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * 2px * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}
:host button[disabled] {
  pointer-events: none;
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

:host([variant=primary]) button,
:host([selected][variant=primary]) button:not([disabled]) {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  color: var(--ig-primary-500-contrast);
}
:host([variant=primary]) button:hover,
:host([selected][variant=primary]) button:not([disabled]):hover {
  background: hsla(var(--ig-primary-600), var(--ig-primary-a));
  color: var(--ig-primary-600-contrast);
}
:host([variant=primary]) button:focus,
:host([selected][variant=primary]) button:not([disabled]):focus {
  background: hsla(var(--ig-primary-800), var(--ig-primary-a));
  color: var(--ig-primary-800-contrast);
}

:host([variant=info]) button,
:host([selected][variant=info]) button:not([disabled]) {
  background: hsla(var(--ig-info-500), var(--ig-info-a));
  color: var(--ig-info-500-contrast);
}
:host([variant=info]) button:hover,
:host([selected][variant=info]) button:not([disabled]):hover {
  background: hsla(var(--ig-info-600), var(--ig-info-a));
  color: var(--ig-info-600-contrast);
}
:host([variant=info]) button:focus,
:host([selected][variant=info]) button:not([disabled]):focus {
  background: hsla(var(--ig-info-800), var(--ig-info-a));
  color: var(--ig-info-800-contrast);
}

:host([variant=success]) button,
:host([selected][variant=success]) button:not([disabled]) {
  background: hsla(var(--ig-success-500), var(--ig-success-a));
  color: var(--ig-success-500-contrast);
}
:host([variant=success]) button:hover,
:host([selected][variant=success]) button:not([disabled]):hover {
  background: hsla(var(--ig-success-600), var(--ig-success-a));
  color: var(--ig-success-600-contrast);
}
:host([variant=success]) button:focus,
:host([selected][variant=success]) button:not([disabled]):focus {
  background: hsla(var(--ig-success-800), var(--ig-success-a));
  color: var(--ig-success-800-contrast);
}

:host([variant=warning]) button,
:host([selected][variant=warning]) button:not([disabled]) {
  background: hsla(var(--ig-warn-500), var(--ig-warn-a));
  color: var(--ig-warn-500-contrast);
}
:host([variant=warning]) button:hover,
:host([selected][variant=warning]) button:not([disabled]):hover {
  background: hsla(var(--ig-warn-600), var(--ig-warn-a));
  color: var(--ig-warn-600-contrast);
}
:host([variant=warning]) button:focus,
:host([selected][variant=warning]) button:not([disabled]):focus {
  background: hsla(var(--ig-warn-800), var(--ig-warn-a));
  color: var(--ig-warn-800-contrast);
}

:host([variant=danger]) button,
:host([selected][variant=danger]) button:not([disabled]) {
  background: hsla(var(--ig-error-500), var(--ig-error-a));
  color: var(--ig-error-500-contrast);
}
:host([variant=danger]) button:hover,
:host([selected][variant=danger]) button:not([disabled]):hover {
  background: hsla(var(--ig-error-600), var(--ig-error-a));
  color: var(--ig-error-600-contrast);
}
:host([variant=danger]) button:focus,
:host([selected][variant=danger]) button:not([disabled]):focus {
  background: hsla(var(--ig-error-800), var(--ig-error-a));
  color: var(--ig-error-800-contrast);
}

[part=prefix],
[part=suffix] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

::slotted(*) {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

:host([variant=primary]) button[disabled],
:host([variant=info]) button[disabled],
:host([variant=success]) button[disabled],
:host([variant=warning]) button[disabled],
:host([variant=danger]) button[disabled] {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}`,Nt=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */
:host {
  --size: max(var(--is-large, 1) * 2rem, var(--is-medium, 1) * 1.5rem, var(--is-small, 1) * 1.25rem);
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  vertical-align: top;
}

:host([size=small]) {
  --component-size: var(--ig-size, var(--ig-size-small));
}
:host([size=small]) [part=prefix] {
  -webkit-margin-end: 0.1875rem;
          margin-inline-end: 0.1875rem;
}
:host([size=small]) [part=suffix] {
  -webkit-margin-start: 0.1875rem;
          margin-inline-start: 0.1875rem;
}

:host([size=medium]) {
  --component-size: var(--ig-size, var(--ig-size-medium));
}
:host([size=medium]) [part=prefix] {
  -webkit-margin-end: 0.375rem;
          margin-inline-end: 0.375rem;
}
:host([size=medium]) [part=suffix] {
  -webkit-margin-start: 0.375rem;
          margin-inline-start: 0.375rem;
}

:host([size=large]) {
  --component-size: var(--ig-size, var(--ig-size-large));
}
:host([size=large]) [part=prefix] {
  -webkit-margin-end: 0.5rem;
          margin-inline-end: 0.5rem;
}
:host([size=large]) [part=suffix] {
  -webkit-margin-start: 0.5rem;
          margin-inline-start: 0.5rem;
}
:host([size=large]) igc-icon[size=large] {
  --size: 1.25rem;
}

:host button {
  font-family: var(--ig-body-2-font-family);
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 1rem), 1rem);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  font-family: var(--ig-font-family);
  border-style: none;
  -webkit-box-shadow: none;
          box-shadow: none;
  cursor: pointer;
  height: var(--size);
  padding: max(var(--is-large, 1) * 12px * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * 6px * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * 2px * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}
:host button[disabled] {
  pointer-events: none;
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

:host([variant=primary]) button,
:host([selected][variant=primary]) button:not([disabled]) {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  color: var(--ig-primary-500-contrast);
}
:host([variant=primary]) button:hover,
:host([selected][variant=primary]) button:not([disabled]):hover {
  background: hsla(var(--ig-primary-600), var(--ig-primary-a));
  color: var(--ig-primary-600-contrast);
}
:host([variant=primary]) button:focus,
:host([selected][variant=primary]) button:not([disabled]):focus {
  background: hsla(var(--ig-primary-800), var(--ig-primary-a));
  color: var(--ig-primary-800-contrast);
}

:host([variant=info]) button,
:host([selected][variant=info]) button:not([disabled]) {
  background: hsla(var(--ig-info-500), var(--ig-info-a));
  color: var(--ig-info-500-contrast);
}
:host([variant=info]) button:hover,
:host([selected][variant=info]) button:not([disabled]):hover {
  background: hsla(var(--ig-info-600), var(--ig-info-a));
  color: var(--ig-info-600-contrast);
}
:host([variant=info]) button:focus,
:host([selected][variant=info]) button:not([disabled]):focus {
  background: hsla(var(--ig-info-800), var(--ig-info-a));
  color: var(--ig-info-800-contrast);
}

:host([variant=success]) button,
:host([selected][variant=success]) button:not([disabled]) {
  background: hsla(var(--ig-success-500), var(--ig-success-a));
  color: var(--ig-success-500-contrast);
}
:host([variant=success]) button:hover,
:host([selected][variant=success]) button:not([disabled]):hover {
  background: hsla(var(--ig-success-600), var(--ig-success-a));
  color: var(--ig-success-600-contrast);
}
:host([variant=success]) button:focus,
:host([selected][variant=success]) button:not([disabled]):focus {
  background: hsla(var(--ig-success-800), var(--ig-success-a));
  color: var(--ig-success-800-contrast);
}

:host([variant=warning]) button,
:host([selected][variant=warning]) button:not([disabled]) {
  background: hsla(var(--ig-warn-500), var(--ig-warn-a));
  color: var(--ig-warn-500-contrast);
}
:host([variant=warning]) button:hover,
:host([selected][variant=warning]) button:not([disabled]):hover {
  background: hsla(var(--ig-warn-600), var(--ig-warn-a));
  color: var(--ig-warn-600-contrast);
}
:host([variant=warning]) button:focus,
:host([selected][variant=warning]) button:not([disabled]):focus {
  background: hsla(var(--ig-warn-800), var(--ig-warn-a));
  color: var(--ig-warn-800-contrast);
}

:host([variant=danger]) button,
:host([selected][variant=danger]) button:not([disabled]) {
  background: hsla(var(--ig-error-500), var(--ig-error-a));
  color: var(--ig-error-500-contrast);
}
:host([variant=danger]) button:hover,
:host([selected][variant=danger]) button:not([disabled]):hover {
  background: hsla(var(--ig-error-600), var(--ig-error-a));
  color: var(--ig-error-600-contrast);
}
:host([variant=danger]) button:focus,
:host([selected][variant=danger]) button:not([disabled]):focus {
  background: hsla(var(--ig-error-800), var(--ig-error-a));
  color: var(--ig-error-800-contrast);
}

[part=prefix],
[part=suffix] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

::slotted(*) {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

:host([variant=primary]) button[disabled],
:host([variant=info]) button[disabled],
:host([variant=success]) button[disabled],
:host([variant=warning]) button[disabled],
:host([variant=danger]) button[disabled] {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

:host button {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
  color: var(--ig-gray-200-contrast);
}
:host button:hover {
  background: hsla(var(--ig-gray-400), var(--ig-gray-a));
  color: var(--ig-gray-400-contrast);
}
:host button:focus {
  outline: 0.125rem solid hsla(var(--ig-gray-200), var(--ig-gray-a));
  background: hsla(var(--ig-gray-400), var(--ig-gray-a));
  color: var(--ig-gray-400-contrast);
}
:host button[disabled] {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
}

:host([variant=primary]) button,
:host([variant=primary]) button:focus,
:host([variant=primary]) button:hover,
:host([selected][variant=primary]) button:not([disabled]) {
  color: var(--ig-primary-700-contrast);
}

:host([variant=primary]) button:focus {
  outline: 0.125rem solid hsla(var(--ig-primary-200), var(--ig-primary-a));
}

:host([variant=info]) button,
:host([variant=info]) button:focus,
:host([variant=info]) button:hover,
:host([selected][variant=info]) button:not([disabled]) {
  color: var(--ig-info-700-contrast);
}

:host([variant=info]) button:focus {
  outline: 0.125rem solid hsla(var(--ig-info-200), var(--ig-info-a));
}

:host([variant=success]) button,
:host([variant=success]) button:focus,
:host([variant=success]) button:hover,
:host([selected][variant=success]) button:not([disabled]) {
  color: var(--ig-success-700-contrast);
}

:host([variant=success]) button:focus {
  outline: 0.125rem solid hsla(var(--ig-success-200), var(--ig-success-a));
}

:host([variant=warning]) button,
:host([variant=warning]) button:focus,
:host([variant=warning]) button:hover,
:host([selected][variant=warning]) button:not([disabled]) {
  color: var(--ig-warn-700-contrast);
}

:host([variant=warning]) button:focus {
  outline: 0.125rem solid hsla(var(--ig-warn-200), var(--ig-warn-a));
}

:host([variant=danger]) button,
:host([variant=danger]) button:focus,
:host([variant=danger]) button:hover,
:host([selected][variant=danger]) button:not([disabled]) {
  color: var(--ig-error-700-contrast);
}

:host([variant=danger]) button:focus {
  outline: 0.125rem solid hsla(var(--ig-error-200), var(--ig-error-a));
}`,Yt=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */
:host {
  --size: max(var(--is-large, 1) * 2rem, var(--is-medium, 1) * 1.5rem, var(--is-small, 1) * 1.25rem);
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  vertical-align: top;
}

:host([size=small]) {
  --component-size: var(--ig-size, var(--ig-size-small));
}
:host([size=small]) [part=prefix] {
  -webkit-margin-end: 0.1875rem;
          margin-inline-end: 0.1875rem;
}
:host([size=small]) [part=suffix] {
  -webkit-margin-start: 0.1875rem;
          margin-inline-start: 0.1875rem;
}

:host([size=medium]) {
  --component-size: var(--ig-size, var(--ig-size-medium));
}
:host([size=medium]) [part=prefix] {
  -webkit-margin-end: 0.375rem;
          margin-inline-end: 0.375rem;
}
:host([size=medium]) [part=suffix] {
  -webkit-margin-start: 0.375rem;
          margin-inline-start: 0.375rem;
}

:host([size=large]) {
  --component-size: var(--ig-size, var(--ig-size-large));
}
:host([size=large]) [part=prefix] {
  -webkit-margin-end: 0.5rem;
          margin-inline-end: 0.5rem;
}
:host([size=large]) [part=suffix] {
  -webkit-margin-start: 0.5rem;
          margin-inline-start: 0.5rem;
}
:host([size=large]) igc-icon[size=large] {
  --size: 1.25rem;
}

:host button {
  font-family: var(--ig-body-2-font-family);
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 1rem), 1rem);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  font-family: var(--ig-font-family);
  border-style: none;
  -webkit-box-shadow: none;
          box-shadow: none;
  cursor: pointer;
  height: var(--size);
  padding: max(var(--is-large, 1) * 12px * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * 6px * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * 2px * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}
:host button[disabled] {
  pointer-events: none;
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

:host([variant=primary]) button,
:host([selected][variant=primary]) button:not([disabled]) {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  color: var(--ig-primary-500-contrast);
}
:host([variant=primary]) button:hover,
:host([selected][variant=primary]) button:not([disabled]):hover {
  background: hsla(var(--ig-primary-600), var(--ig-primary-a));
  color: var(--ig-primary-600-contrast);
}
:host([variant=primary]) button:focus,
:host([selected][variant=primary]) button:not([disabled]):focus {
  background: hsla(var(--ig-primary-800), var(--ig-primary-a));
  color: var(--ig-primary-800-contrast);
}

:host([variant=info]) button,
:host([selected][variant=info]) button:not([disabled]) {
  background: hsla(var(--ig-info-500), var(--ig-info-a));
  color: var(--ig-info-500-contrast);
}
:host([variant=info]) button:hover,
:host([selected][variant=info]) button:not([disabled]):hover {
  background: hsla(var(--ig-info-600), var(--ig-info-a));
  color: var(--ig-info-600-contrast);
}
:host([variant=info]) button:focus,
:host([selected][variant=info]) button:not([disabled]):focus {
  background: hsla(var(--ig-info-800), var(--ig-info-a));
  color: var(--ig-info-800-contrast);
}

:host([variant=success]) button,
:host([selected][variant=success]) button:not([disabled]) {
  background: hsla(var(--ig-success-500), var(--ig-success-a));
  color: var(--ig-success-500-contrast);
}
:host([variant=success]) button:hover,
:host([selected][variant=success]) button:not([disabled]):hover {
  background: hsla(var(--ig-success-600), var(--ig-success-a));
  color: var(--ig-success-600-contrast);
}
:host([variant=success]) button:focus,
:host([selected][variant=success]) button:not([disabled]):focus {
  background: hsla(var(--ig-success-800), var(--ig-success-a));
  color: var(--ig-success-800-contrast);
}

:host([variant=warning]) button,
:host([selected][variant=warning]) button:not([disabled]) {
  background: hsla(var(--ig-warn-500), var(--ig-warn-a));
  color: var(--ig-warn-500-contrast);
}
:host([variant=warning]) button:hover,
:host([selected][variant=warning]) button:not([disabled]):hover {
  background: hsla(var(--ig-warn-600), var(--ig-warn-a));
  color: var(--ig-warn-600-contrast);
}
:host([variant=warning]) button:focus,
:host([selected][variant=warning]) button:not([disabled]):focus {
  background: hsla(var(--ig-warn-800), var(--ig-warn-a));
  color: var(--ig-warn-800-contrast);
}

:host([variant=danger]) button,
:host([selected][variant=danger]) button:not([disabled]) {
  background: hsla(var(--ig-error-500), var(--ig-error-a));
  color: var(--ig-error-500-contrast);
}
:host([variant=danger]) button:hover,
:host([selected][variant=danger]) button:not([disabled]):hover {
  background: hsla(var(--ig-error-600), var(--ig-error-a));
  color: var(--ig-error-600-contrast);
}
:host([variant=danger]) button:focus,
:host([selected][variant=danger]) button:not([disabled]):focus {
  background: hsla(var(--ig-error-800), var(--ig-error-a));
  color: var(--ig-error-800-contrast);
}

[part=prefix],
[part=suffix] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

::slotted(*) {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

:host([variant=primary]) button[disabled],
:host([variant=info]) button[disabled],
:host([variant=success]) button[disabled],
:host([variant=warning]) button[disabled],
:host([variant=danger]) button[disabled] {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

:host button {
  font-family: var(--ig-subtitle-2-font-family);
  font-size: var(--ig-subtitle-2-font-size);
  font-weight: var(--ig-subtitle-2-font-weight);
  font-style: var(--ig-subtitle-2-font-style);
  line-height: var(--ig-subtitle-2-line-height);
  letter-spacing: var(--ig-subtitle-2-letter-spacing);
  text-transform: var(--ig-subtitle-2-text-transform);
  margin-top: var(--ig-subtitle-2-margin-top);
  margin-bottom: var(--ig-subtitle-2-margin-bottom);
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}
:host button:hover {
  color: var(--ig-gray-200-contrast);
}
:host button:focus {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  color: var(--ig-primary-700-contrast);
}
:host button[disabled] {
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
}

:host([selected]) button:not([disabled]) {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  color: var(--ig-primary-700-contrast);
}
:host([selected]) button:not([disabled]):hover {
  background: hsla(var(--ig-primary-600), var(--ig-primary-a));
}
:host([selected]) button:not([disabled]):focus {
  background: hsla(var(--ig-primary-800), var(--ig-primary-a));
}`,Ut=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */
:host {
  --size: max(var(--is-large, 1) * 2rem, var(--is-medium, 1) * 1.5rem, var(--is-small, 1) * 1.25rem);
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  vertical-align: top;
}

:host([size=small]) {
  --component-size: var(--ig-size, var(--ig-size-small));
}
:host([size=small]) [part=prefix] {
  -webkit-margin-end: 0.1875rem;
          margin-inline-end: 0.1875rem;
}
:host([size=small]) [part=suffix] {
  -webkit-margin-start: 0.1875rem;
          margin-inline-start: 0.1875rem;
}

:host([size=medium]) {
  --component-size: var(--ig-size, var(--ig-size-medium));
}
:host([size=medium]) [part=prefix] {
  -webkit-margin-end: 0.375rem;
          margin-inline-end: 0.375rem;
}
:host([size=medium]) [part=suffix] {
  -webkit-margin-start: 0.375rem;
          margin-inline-start: 0.375rem;
}

:host([size=large]) {
  --component-size: var(--ig-size, var(--ig-size-large));
}
:host([size=large]) [part=prefix] {
  -webkit-margin-end: 0.5rem;
          margin-inline-end: 0.5rem;
}
:host([size=large]) [part=suffix] {
  -webkit-margin-start: 0.5rem;
          margin-inline-start: 0.5rem;
}
:host([size=large]) igc-icon[size=large] {
  --size: 1.25rem;
}

:host button {
  font-family: var(--ig-body-2-font-family);
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 1rem), 1rem);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  font-family: var(--ig-font-family);
  border-style: none;
  -webkit-box-shadow: none;
          box-shadow: none;
  cursor: pointer;
  height: var(--size);
  padding: max(var(--is-large, 1) * 12px * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * 6px * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * 2px * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}
:host button[disabled] {
  pointer-events: none;
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

:host([variant=primary]) button,
:host([selected][variant=primary]) button:not([disabled]) {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  color: var(--ig-primary-500-contrast);
}
:host([variant=primary]) button:hover,
:host([selected][variant=primary]) button:not([disabled]):hover {
  background: hsla(var(--ig-primary-600), var(--ig-primary-a));
  color: var(--ig-primary-600-contrast);
}
:host([variant=primary]) button:focus,
:host([selected][variant=primary]) button:not([disabled]):focus {
  background: hsla(var(--ig-primary-800), var(--ig-primary-a));
  color: var(--ig-primary-800-contrast);
}

:host([variant=info]) button,
:host([selected][variant=info]) button:not([disabled]) {
  background: hsla(var(--ig-info-500), var(--ig-info-a));
  color: var(--ig-info-500-contrast);
}
:host([variant=info]) button:hover,
:host([selected][variant=info]) button:not([disabled]):hover {
  background: hsla(var(--ig-info-600), var(--ig-info-a));
  color: var(--ig-info-600-contrast);
}
:host([variant=info]) button:focus,
:host([selected][variant=info]) button:not([disabled]):focus {
  background: hsla(var(--ig-info-800), var(--ig-info-a));
  color: var(--ig-info-800-contrast);
}

:host([variant=success]) button,
:host([selected][variant=success]) button:not([disabled]) {
  background: hsla(var(--ig-success-500), var(--ig-success-a));
  color: var(--ig-success-500-contrast);
}
:host([variant=success]) button:hover,
:host([selected][variant=success]) button:not([disabled]):hover {
  background: hsla(var(--ig-success-600), var(--ig-success-a));
  color: var(--ig-success-600-contrast);
}
:host([variant=success]) button:focus,
:host([selected][variant=success]) button:not([disabled]):focus {
  background: hsla(var(--ig-success-800), var(--ig-success-a));
  color: var(--ig-success-800-contrast);
}

:host([variant=warning]) button,
:host([selected][variant=warning]) button:not([disabled]) {
  background: hsla(var(--ig-warn-500), var(--ig-warn-a));
  color: var(--ig-warn-500-contrast);
}
:host([variant=warning]) button:hover,
:host([selected][variant=warning]) button:not([disabled]):hover {
  background: hsla(var(--ig-warn-600), var(--ig-warn-a));
  color: var(--ig-warn-600-contrast);
}
:host([variant=warning]) button:focus,
:host([selected][variant=warning]) button:not([disabled]):focus {
  background: hsla(var(--ig-warn-800), var(--ig-warn-a));
  color: var(--ig-warn-800-contrast);
}

:host([variant=danger]) button,
:host([selected][variant=danger]) button:not([disabled]) {
  background: hsla(var(--ig-error-500), var(--ig-error-a));
  color: var(--ig-error-500-contrast);
}
:host([variant=danger]) button:hover,
:host([selected][variant=danger]) button:not([disabled]):hover {
  background: hsla(var(--ig-error-600), var(--ig-error-a));
  color: var(--ig-error-600-contrast);
}
:host([variant=danger]) button:focus,
:host([selected][variant=danger]) button:not([disabled]):focus {
  background: hsla(var(--ig-error-800), var(--ig-error-a));
  color: var(--ig-error-800-contrast);
}

[part=prefix],
[part=suffix] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

::slotted(*) {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

:host([variant=primary]) button[disabled],
:host([variant=info]) button[disabled],
:host([variant=success]) button[disabled],
:host([variant=warning]) button[disabled],
:host([variant=danger]) button[disabled] {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

:host button {
  border: 0.0625rem solid hsla(var(--ig-gray-400), var(--ig-gray-a));
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}
:host button:hover {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
}
:host button:focus {
  outline: 0.1875rem solid hsla(var(--ig-gray-300), var(--ig-gray-a));
}
:host button[disabled] {
  border-color: hsla(var(--ig-gray-200), var(--ig-gray-a));
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

:host([selected]) button:not([disabled]) {
  border-color: transparent;
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  color: var(--ig-primary-700-contrast);
}
:host([selected]) button:not([disabled]):hover {
  background: hsla(var(--ig-primary-600), var(--ig-primary-a));
}
:host([selected]) button:not([disabled]):focus {
  outline: 0.1875rem solid hsla(var(--ig-primary-200), var(--ig-primary-a));
}

:host([variant=primary]) button,
:host([selected][variant=primary]) button:not([disabled]) {
  border-color: transparent;
}
:host([variant=primary]) button:hover,
:host([selected][variant=primary]) button:not([disabled]):hover {
  background: hsla(var(--ig-primary-400), var(--ig-primary-a));
  color: var(--ig-primary-400-contrast);
}
:host([variant=primary]) button:focus,
:host([selected][variant=primary]) button:not([disabled]):focus {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  color: var(--ig-primary-500-contrast);
  outline: 0.1875rem solid hsla(var(--ig-primary-200), var(--ig-primary-a));
}

:host([variant=primary]) button[disabled] {
  background: hsla(var(--ig-primary-200), var(--ig-primary-a));
  color: var(--ig-primary-400-contrast);
}

:host([variant=info]) button,
:host([selected][variant=info]) button:not([disabled]) {
  border-color: transparent;
}
:host([variant=info]) button:hover,
:host([selected][variant=info]) button:not([disabled]):hover {
  background: hsla(var(--ig-info-400), var(--ig-info-a));
  color: var(--ig-info-400-contrast);
}
:host([variant=info]) button:focus,
:host([selected][variant=info]) button:not([disabled]):focus {
  background: hsla(var(--ig-info-500), var(--ig-info-a));
  color: var(--ig-info-500-contrast);
  outline: 0.1875rem solid hsla(var(--ig-info-200), var(--ig-info-a));
}

:host([variant=info]) button[disabled] {
  background: hsla(var(--ig-info-200), var(--ig-info-a));
  color: var(--ig-info-400-contrast);
}

:host([variant=success]) button,
:host([selected][variant=success]) button:not([disabled]) {
  border-color: transparent;
}
:host([variant=success]) button:hover,
:host([selected][variant=success]) button:not([disabled]):hover {
  background: hsla(var(--ig-success-400), var(--ig-success-a));
  color: var(--ig-success-400-contrast);
}
:host([variant=success]) button:focus,
:host([selected][variant=success]) button:not([disabled]):focus {
  background: hsla(var(--ig-success-500), var(--ig-success-a));
  color: var(--ig-success-500-contrast);
  outline: 0.1875rem solid hsla(var(--ig-success-200), var(--ig-success-a));
}

:host([variant=success]) button[disabled] {
  background: hsla(var(--ig-success-200), var(--ig-success-a));
  color: var(--ig-success-800-contrast);
}

:host([variant=warning]) button,
:host([selected][variant=warning]) button:not([disabled]) {
  border-color: transparent;
}
:host([variant=warning]) button:hover,
:host([selected][variant=warning]) button:not([disabled]):hover {
  background: hsla(var(--ig-warn-400), var(--ig-warn-a));
  color: var(--ig-warn-400-contrast);
}
:host([variant=warning]) button:focus,
:host([selected][variant=warning]) button:not([disabled]):focus {
  background: hsla(var(--ig-warn-500), var(--ig-warn-a));
  color: var(--ig-warn-500-contrast);
  outline: 0.1875rem solid hsla(var(--ig-warn-200), var(--ig-warn-a));
}

:host([variant=warning]) button[disabled] {
  background: hsla(var(--ig-warn-200), var(--ig-warn-a));
  color: var(--ig-warn-900-contrast);
}

:host([variant=danger]) button,
:host([selected][variant=danger]) button:not([disabled]) {
  border-color: transparent;
}
:host([variant=danger]) button:hover,
:host([selected][variant=danger]) button:not([disabled]):hover {
  background: hsla(var(--ig-error-400), var(--ig-error-a));
  color: var(--ig-error-400-contrast);
}
:host([variant=danger]) button:focus,
:host([selected][variant=danger]) button:not([disabled]):focus {
  background: hsla(var(--ig-error-500), var(--ig-error-a));
  color: var(--ig-error-500-contrast);
  outline: 0.1875rem solid hsla(var(--ig-error-200), var(--ig-error-a));
}

:host([variant=danger]) button[disabled] {
  background: hsla(var(--ig-error-200), var(--ig-error-a));
  color: var(--ig-error-400-contrast);
}`,Ht=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */
:host {
  --size: max(var(--is-large, 1) * 2rem, var(--is-medium, 1) * 1.5rem, var(--is-small, 1) * 1.25rem);
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  vertical-align: top;
}

:host([size=small]) {
  --component-size: var(--ig-size, var(--ig-size-small));
}
:host([size=small]) [part=prefix] {
  -webkit-margin-end: 0.1875rem;
          margin-inline-end: 0.1875rem;
}
:host([size=small]) [part=suffix] {
  -webkit-margin-start: 0.1875rem;
          margin-inline-start: 0.1875rem;
}

:host([size=medium]) {
  --component-size: var(--ig-size, var(--ig-size-medium));
}
:host([size=medium]) [part=prefix] {
  -webkit-margin-end: 0.375rem;
          margin-inline-end: 0.375rem;
}
:host([size=medium]) [part=suffix] {
  -webkit-margin-start: 0.375rem;
          margin-inline-start: 0.375rem;
}

:host([size=large]) {
  --component-size: var(--ig-size, var(--ig-size-large));
}
:host([size=large]) [part=prefix] {
  -webkit-margin-end: 0.5rem;
          margin-inline-end: 0.5rem;
}
:host([size=large]) [part=suffix] {
  -webkit-margin-start: 0.5rem;
          margin-inline-start: 0.5rem;
}
:host([size=large]) igc-icon[size=large] {
  --size: 1.25rem;
}

:host button {
  font-family: var(--ig-body-2-font-family);
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 1rem), 1rem);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  font-family: var(--ig-font-family);
  border-style: none;
  -webkit-box-shadow: none;
          box-shadow: none;
  cursor: pointer;
  height: var(--size);
  padding: max(var(--is-large, 1) * 12px * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * 6px * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * 2px * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}
:host button[disabled] {
  pointer-events: none;
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

:host([variant=primary]) button,
:host([selected][variant=primary]) button:not([disabled]) {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  color: var(--ig-primary-500-contrast);
}
:host([variant=primary]) button:hover,
:host([selected][variant=primary]) button:not([disabled]):hover {
  background: hsla(var(--ig-primary-600), var(--ig-primary-a));
  color: var(--ig-primary-600-contrast);
}
:host([variant=primary]) button:focus,
:host([selected][variant=primary]) button:not([disabled]):focus {
  background: hsla(var(--ig-primary-800), var(--ig-primary-a));
  color: var(--ig-primary-800-contrast);
}

:host([variant=info]) button,
:host([selected][variant=info]) button:not([disabled]) {
  background: hsla(var(--ig-info-500), var(--ig-info-a));
  color: var(--ig-info-500-contrast);
}
:host([variant=info]) button:hover,
:host([selected][variant=info]) button:not([disabled]):hover {
  background: hsla(var(--ig-info-600), var(--ig-info-a));
  color: var(--ig-info-600-contrast);
}
:host([variant=info]) button:focus,
:host([selected][variant=info]) button:not([disabled]):focus {
  background: hsla(var(--ig-info-800), var(--ig-info-a));
  color: var(--ig-info-800-contrast);
}

:host([variant=success]) button,
:host([selected][variant=success]) button:not([disabled]) {
  background: hsla(var(--ig-success-500), var(--ig-success-a));
  color: var(--ig-success-500-contrast);
}
:host([variant=success]) button:hover,
:host([selected][variant=success]) button:not([disabled]):hover {
  background: hsla(var(--ig-success-600), var(--ig-success-a));
  color: var(--ig-success-600-contrast);
}
:host([variant=success]) button:focus,
:host([selected][variant=success]) button:not([disabled]):focus {
  background: hsla(var(--ig-success-800), var(--ig-success-a));
  color: var(--ig-success-800-contrast);
}

:host([variant=warning]) button,
:host([selected][variant=warning]) button:not([disabled]) {
  background: hsla(var(--ig-warn-500), var(--ig-warn-a));
  color: var(--ig-warn-500-contrast);
}
:host([variant=warning]) button:hover,
:host([selected][variant=warning]) button:not([disabled]):hover {
  background: hsla(var(--ig-warn-600), var(--ig-warn-a));
  color: var(--ig-warn-600-contrast);
}
:host([variant=warning]) button:focus,
:host([selected][variant=warning]) button:not([disabled]):focus {
  background: hsla(var(--ig-warn-800), var(--ig-warn-a));
  color: var(--ig-warn-800-contrast);
}

:host([variant=danger]) button,
:host([selected][variant=danger]) button:not([disabled]) {
  background: hsla(var(--ig-error-500), var(--ig-error-a));
  color: var(--ig-error-500-contrast);
}
:host([variant=danger]) button:hover,
:host([selected][variant=danger]) button:not([disabled]):hover {
  background: hsla(var(--ig-error-600), var(--ig-error-a));
  color: var(--ig-error-600-contrast);
}
:host([variant=danger]) button:focus,
:host([selected][variant=danger]) button:not([disabled]):focus {
  background: hsla(var(--ig-error-800), var(--ig-error-a));
  color: var(--ig-error-800-contrast);
}

[part=prefix],
[part=suffix] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

::slotted(*) {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

:host([variant=primary]) button[disabled],
:host([variant=info]) button[disabled],
:host([variant=success]) button[disabled],
:host([variant=warning]) button[disabled],
:host([variant=danger]) button[disabled] {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

:host button {
  background: hsla(var(--ig-gray-300), var(--ig-gray-a));
  color: var(--ig-gray-300-contrast);
}
:host button:hover {
  background: hsla(var(--ig-gray-400), var(--ig-gray-a));
  color: var(--ig-gray-400-contrast);
}
:host button:focus {
  background: hsla(var(--ig-gray-500), var(--ig-gray-a));
  color: var(--ig-gray-500-contrast);
}
:host button[disabled] {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
}`;var Wt=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};x(X);let Kt=class extends(v(z(r.oi))){constructor(){super(),this.disabled=!1,this.removable=!1,this.selectable=!1,this.selected=!1,this.size="medium"}handleSelect(){this.selectable&&(this.selected=!this.selected,this.emitEvent("igcSelect",{detail:this.selected}))}handleRemove(e){this.emitEvent("igcRemove"),e.stopPropagation()}handleKeyup(e){/\s|enter/i.test(e.key)&&this.handleRemove(e)}render(){return r.dy`
      <button
        part="base"
        .disabled="${this.disabled}"
        aria-selected="${this.selected?"true":"false"}"
        aria-disabled="${this.disabled?"true":"false"}"
        @click=${this.handleSelect}
      >
        <span part="prefix">
          ${this.selectable&&this.selected?r.dy`<slot @slotchange=${this.slotChanges} name="select">
                <igc-icon
                  size=${this.size}
                  name="chip_select"
                  collection="internal"
                ></igc-icon>
              </slot>`:r.Ld}
          <slot name="start"></slot>
          <slot name="prefix"></slot>
        </span>
        <slot></slot>
        <span part="suffix">
          <slot name="end"></slot>
          <slot name="suffix"></slot>
          ${this.removable&&!this.disabled?r.dy`<slot
                @slotchange=${this.slotChanges}
                @click=${this.handleRemove}
                @keyup=${this.handleKeyup}
                name="remove"
              >
                <igc-icon
                  size=${this.size}
                  name="chip_cancel"
                  collection="internal"
                  tabindex="0"
                  role="button"
                  aria-label="remove"
                ></igc-icon>
              </slot>`:r.Ld}
        </span>
      </button>
    `}slotChanges(){this.requestUpdate()}};Kt.tagName="igc-chip",Kt.styles=Bt,Wt([(0,i.Cb)({type:Boolean,reflect:!0})],Kt.prototype,"disabled",void 0),Wt([(0,i.Cb)({type:Boolean,reflect:!0})],Kt.prototype,"removable",void 0),Wt([(0,i.Cb)({type:Boolean,reflect:!0})],Kt.prototype,"selectable",void 0),Wt([(0,i.Cb)({type:Boolean,reflect:!0}),(e,t)=>{}],Kt.prototype,"selected",void 0),Wt([(0,i.Cb)({reflect:!0})],Kt.prototype,"variant",void 0),Kt=Wt([p({material:Ht,bootstrap:Nt,fluent:Yt,indigo:Ut})],Kt);const qt=Kt,Gt=new Set("aACL09#&?"),Zt=new Map([["C",/(?!^$)/u],["&",/[^\p{Separator}]/u],["a",/[\p{Letter}\d\p{Separator}]/u],["A",/[\p{Letter}\d]/u],["?",/[\p{Letter}\p{Separator}]/u],["L",/\p{Letter}/u],["0",/\d/],["9",/[\d\p{Separator}]/u],["#",/[\d\-+]/]]),Qt=new Set("0#LA&");class Jt{constructor(e={format:"CCCCCCCCCC",promptCharacter:"_"}){this.literals=new Map,this.options=e}get literalPositions(){return this.getMaskLiterals(),Array.from(this.literals.keys())}get escapedMask(){return this.getMaskLiterals(),this._escapedMask}get mask(){return this.options.format}set mask(e){this.options.format=e||this.options.format,this.getMaskLiterals()}get prompt(){return this.options.promptCharacter}set prompt(e){this.options.promptCharacter=e?e.substring(0,1):this.options.promptCharacter}getMaskLiterals(){this.literals.clear(),this._escapedMask=this.mask;for(let e=0,t=0;e<this.mask.length;e++,t++){const[a,r]=[this.mask.charAt(e),this.mask.charAt(e+1)];"\\"===a&&Gt.has(r)?(this._escapedMask=this.replaceCharAt(this._escapedMask,t,""),this.literals.set(t,r),e++):Gt.has(a)||this.literals.set(t,a)}}isPromptChar(e){return e===this.prompt}replaceCharAt(e,t,a){return`${e.substring(0,t)}${a}${e.substring(t+1)}`}validate(e,t){const a=Zt.get(t);return!!a&&a.test(e)}getNonLiteralPositions(e=""){const t=this.literalPositions;return Array.from(e).map(((e,a)=>t.includes(a)?-1:a)).filter((e=>e>-1))}getRequiredNonLiteralPositions(e){const t=this.literalPositions;return Array.from(e).map(((e,a)=>Qt.has(e)&&!t.includes(a)?a:-1)).filter((e=>e>-1))}replace(e="",t,a,r){const i=Array.from(t.replace(/[０１２３４５６７８９]/g,(e=>({"１":"1","２":"2","３":"3","４":"4","５":"5","６":"6","７":"7","８":"8","９":"9","０":"0"}[e])))),o=this.literalPositions;r=Math.min(r,e.length);let s=a;for(let t=a;t<r||i.length&&t<e.length;t++){if(o.includes(t)){i[0]===e[t]&&(s=t+1,i.shift());continue}if(i[0]&&!this.validate(i[0],this._escapedMask[t])&&!this.isPromptChar(i[0]))break;let a=this.prompt;i.length&&(s=t+1,a=i.shift()),e=this.replaceCharAt(e,t,a)}return{value:e,end:s}}parse(e=""){return Array.from(e).reduce(((e,t,a)=>`${e}${this.literalPositions.includes(a)||this.isPromptChar(t)?"":t}`),"")}isValidString(e=""){const t=this.getRequiredNonLiteralPositions(this._escapedMask);return!(t.length>this.parse(e).length)&&t.every((t=>{const a=e.charAt(t);return void 0!==a&&this.validate(a,this._escapedMask.charAt(t))&&!this.isPromptChar(a)}))}apply(e=""){const t=this.getNonLiteralPositions(this._escapedMask);let a=new Array(this._escapedMask.length).fill(this.prompt).join("");if(this.literals.forEach(((e,t)=>{a=this.replaceCharAt(a,t,e)})),!e)return a;const r=t.map(((t,a)=>{const r=e.charAt(a);return this.validate(r,this._escapedMask.charAt(t))||this.isPromptChar(r)?r:this.prompt}));r.length>t.length&&r.splice(t.length);let i=0;for(const e of r)a=this.replaceCharAt(a,t[i++],e);return a}}var ea,ta;!function(e){e.Day="day",e.Month="month",e.Year="year",e.Date="date",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.AmPm="amPm",e.Literal="literal"}(ea||(ea={})),function(e){e.Month="month",e.Year="year",e.Date="date",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.AmPm="amPm"}(ta||(ta={}));class aa{static parseValueFromMask(e,t,a){const r={};if(t.forEach((t=>{let i=parseInt(aa.getCleanVal(e,t,a),10);i||(i=t.type===ea.Date||t.type===ea.Month?1:0),r[t.type]=i})),r[ea.Month]-=1,r[ea.Month]<0||11<r[ea.Month])return null;if(r[ea.Year]<50&&(r[ea.Year]+=2e3),r[ea.Date]>aa.daysInMonth(r[ea.Year],r[ea.Month]))return null;if(r[ea.Hours]>23||r[ea.Minutes]>59||r[ea.Seconds]>59)return null;const i=t.find((e=>e.type===ea.AmPm));return i&&(r[ea.Hours]%=12),i&&"pm"===aa.getCleanVal(e,i,a).toLowerCase()&&(r[ea.Hours]+=12),new Date(r[ea.Year]||2e3,r[ea.Month]||0,r[ea.Date]||1,r[ea.Hours]||0,r[ea.Minutes]||0,r[ea.Seconds]||0)}static getDefaultMask(e){e=e||aa.DEFAULT_LOCALE;const t=aa.getDefaultLocaleMask(e);return void 0!==t?(t.forEach((e=>{e.type!==ea.Year&&e.type!==aa.SEPARATOR&&(e.formatType="2-digit")})),aa.getMask(t)):""}static parseDateTimeFormat(e,t=aa.DEFAULT_LOCALE,a=!1){const r=e||aa.getDefaultMask(t),i=[],o=Array.from(r);let s=null,n=0;for(let e=0;e<o.length;e++,n++){const t=aa.determineDatePart(o[e]);if(s){if(s.type===t&&(s.format+=o[e],e<o.length-1))continue;aa.addCurrentPart(s,i,a),n=s.end}s={start:n,end:n+o[e].length,type:t,format:o[e]}}i.filter((e=>e.format.includes(s.format))).length||aa.addCurrentPart(s,i,a);const l=i.filter((e=>e.type===ea.Year))[0];return l&&"yy"!==l.format&&(l.end+=4-l.format.length,l.format="yyyy"),i}static parseIsoDate(e){let t=/^\d{4}/g;if(t.test(e))return new Date(e+""+(-1===e.indexOf("T")?"T00:00:00":""));if(t=/^\d{2}/g,t.test(e)){const t=(new Date).toISOString();let[a,r]=t.split("T");return new Date(`${a}T${e}`)}return null}static isValidDate(e){return!!ke(e)&&!isNaN(e.getTime())}static formatDate(e,t,a,r=!1){const i={};let o,s="";switch(a){case"short":case"long":case"medium":case"full":i.dateStyle=a,i.timeStyle=a;break;case"shortDate":case"longDate":case"mediumDate":case"fullDate":i.dateStyle=a.toLowerCase().split("date")[0];break;case"shortTime":case"longTime":case"mediumTime":case"fullTime":i.timeStyle=a.toLowerCase().split("time")[0];break;default:return this.setDisplayFormatOptions(e,a,t,r)}try{o=new Intl.DateTimeFormat(t,i)}catch{o=new Intl.DateTimeFormat(this.DEFAULT_LOCALE,i)}return s=o.format(e),s}static getPartValue(e,t,a){let r;switch(e.type){case ea.Date:r=a.getDate();break;case ea.Month:r=a.getMonth()+1;break;case ea.Year:r=2===t?this.prependValue(parseInt(a.getFullYear().toString().slice(-2),10),t,"0"):a.getFullYear();break;case ea.Hours:r=-1!==e.format.indexOf("h")?this.prependValue(this.toTwelveHourFormat(a.getHours().toString()),t,"0"):a.getHours();break;case ea.Minutes:r=a.getMinutes();break;case ea.Seconds:r=a.getSeconds();break;case ea.AmPm:r=a.getHours()>=12?"PM":"AM"}return e.type!==ea.AmPm?this.prependValue(r,t,"0"):r}static spinYear(e,t){const a=aa.daysInMonth(t.getFullYear()+e,t.getMonth());return t.getDate()>a&&t.setDate(a),t.setFullYear(t.getFullYear()+e),t}static spinMonth(e,t,a){const r=aa.daysInMonth(t.getFullYear(),t.getMonth()+e);t.getDate()>r&&t.setDate(r);let i=t.getMonth()+e;i>11?i=a?i%11-1:11:i<0&&(i=a?11+i%11+1:0),t.setMonth(i)}static spinDate(e,t,a){const r=aa.daysInMonth(t.getFullYear(),t.getMonth());let i=t.getDate()+e;i>r?i=a?i%r:r:i<1&&(i=a?r+i%r:1),t.setDate(i)}static spinHours(e,t,a){let r=t.getHours()+e;r>23?r=a?r%23-1:23:r<0&&(r=a?23+r%23+1:0),t.setHours(r)}static spinMinutes(e,t,a){let r=t.getMinutes()+e;r>59?r=a?r%59-1:59:r<0&&(r=a?59+r%59+1:0),t.setMinutes(r)}static spinSeconds(e,t,a){let r=t.getSeconds()+e;r>59?r=a?r%59-1:59:r<0&&(r=a?59+r%59+1:0),t.setSeconds(r)}static spinAmPm(e,t,a){switch(a){case"AM":e=new Date(e.setHours(e.getHours()+12));break;case"PM":e=new Date(e.setHours(e.getHours()-12))}return e.getDate()!==t.getDate()?t:e}static greaterThanMaxValue(e,t,a=!0,r=!0){if(a&&r)return e.getTime()>t.getTime();const i=new Date(e.getTime()),o=new Date(t.getTime());return a||(i.setHours(0,0,0,0),o.setHours(0,0,0,0)),r||(i.setFullYear(0,0,0),o.setFullYear(0,0,0)),i.getTime()>o.getTime()}static lessThanMinValue(e,t,a=!0,r=!0){if(a&&r)return e.getTime()<t.getTime();const i=new Date(e.getTime()),o=new Date(t.getTime());return a||(i.setHours(0,0,0,0),o.setHours(0,0,0,0)),r||(i.setFullYear(0,0,0),o.setFullYear(0,0,0)),i.getTime()<o.getTime()}static validateMinMax(e,t,a,r=!0,i=!0){const o={},s=aa.isValidDate(t)?t:aa.parseIsoDate(t),n=aa.isValidDate(a)?a:aa.parseIsoDate(a);return s&&e&&aa.lessThanMinValue(e,s,r,i)&&Object.assign(o,{minValue:!0}),n&&e&&aa.greaterThanMaxValue(e,n,r,i)&&Object.assign(o,{maxValue:!0}),o}static setDisplayFormatOptions(e,t,a,r=!1){var i;const o={},s=this.parseDateTimeFormat(t,a,r),n=new Map([[ea.Date,"day"],[ea.Month,"month"],[ea.Year,"year"],[ea.Hours,"hour"],[ea.Minutes,"minute"],[ea.Seconds,"second"],[ea.AmPm,"dayPeriod"]]),l=new Map([["d","numeric"],["dd","2-digit"],["M","numeric"],["MM","2-digit"],["MMM","short"],["MMMM","long"],["MMMMM","narrow"],["y","numeric"],["yy","2-digit"],["yyy","numeric"],["yyyy","numeric"],["h","numeric"],["hh","2-digit"],["H","numeric"],["HH","2-digit"],["m","numeric"],["mm","2-digit"],["s","numeric"],["ss","2-digit"],["ttt","short"],["tttt","long"],["ttttt","narrow"]]);for(const e of s)if(e.type!==ea.Literal){const t=n.get(e.type),a=l.get(e.format)||l.get(e.format.substring(0,2));t&&a&&(o[t]=a,e.type===ea.Hours&&("h"===e.format.charAt(0)?o.hour12=!0:o.hour12=!1)),e.type===ea.AmPm&&e.format.length<=2&&(o.hour="2-digit",o.hour12=!0)}let c;try{c=new Intl.DateTimeFormat(a,o)}catch{c=new Intl.DateTimeFormat(this.DEFAULT_LOCALE,o)}const g=c.formatToParts(e);let d="";for(const e of s){if(e.type===ea.Literal){d+=e.format;continue}const t=n.get(e.type);d+=(null===(i=g.filter((e=>e.type===t))[0])||void 0===i?void 0:i.value)||""}return d}static getMask(e){const t=[];for(const a of e){switch(a.formatType){case"numeric":a.type===ea.Day?t.push("d"):a.type===ea.Month?t.push("M"):t.push("yyyy");break;case"2-digit":a.type===ea.Day?t.push("dd"):a.type===ea.Month?t.push("MM"):t.push("yy")}a.type===aa.SEPARATOR&&t.push(a.value)}return t.join("")}static addCurrentPart(e,t,a=!1){aa.ensureLeadingZero(e,a),e.end=e.start+e.format.length,t.push(e)}static ensureLeadingZero(e,t=!1){switch(e.type){case ea.Date:case ea.Month:case ea.Hours:case ea.Minutes:case ea.Seconds:1!==e.format.length||t||(e.format=e.format.repeat(2))}}static determineDatePart(e){switch(e){case"d":case"D":return ea.Date;case"M":return ea.Month;case"y":case"Y":return ea.Year;case"h":case"H":return ea.Hours;case"m":return ea.Minutes;case"s":case"S":return ea.Seconds;case"t":case"T":return ea.AmPm;default:return ea.Literal}}static getDefaultLocaleMask(e){const t=[];let a;try{a=new Intl.DateTimeFormat(e)}catch{return}const r=a.formatToParts(new Date);for(const e of r)e.type===aa.SEPARATOR?t.push({type:aa.SEPARATOR,value:e.value}):t.push({type:e.type});const i=a.resolvedOptions();for(const e of t)switch(e.type){case ea.Day:e.formatType=i.day;break;case ea.Month:e.formatType=i.month;break;case ea.Year:e.formatType=i.year}return aa.fillDatePartsPositions(t),t}static fillDatePartsPositions(e){let t=0;for(const a of e)if(a.type===ea.Day||a.type===ea.Month)a.position=[t,t+2],t+=2;else if(a.type===ea.Year)switch(a.formatType){case"numeric":a.position=[t,t+4],t+=4;break;case"2-digit":a.position=[t,t+2],t+=2}else a.type===aa.SEPARATOR&&(a.position=[t,t+1],t++)}static getCleanVal(e,t,a){return aa.trimEmptyPlaceholders(e.substring(t.start,t.end),a)}static trimEmptyPlaceholders(e,t){return e.replace(new RegExp(t||"_","g"),"")}static daysInMonth(e,t){return new Date(e,t+1,0).getDate()}static prependValue(e,t,a){return(a+e.toString()).slice(-t)}static toTwelveHourFormat(e){let t=parseInt(e.replace(new RegExp(this._parser.prompt,"g"),"0"),10);return t>12?t-=12:0===t&&(t=12),t}}aa.DEFAULT_INPUT_FORMAT="MM/dd/yyyy",aa.DEFAULT_TIME_INPUT_FORMAT="hh:mm tt",aa.SEPARATOR="literal",aa.DEFAULT_LOCALE="en",aa._parser=new Jt;const ra=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */
[part~=suffixed] [part=suffix], [part~=prefixed] [part=prefix] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  height: 100%;
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}

:host {
  --size: max(var(--is-large, 1) * 3.5rem, var(--is-medium, 1) * 3rem, var(--is-small, 1) * 2.5rem);
  position: relative;
  display: block;
  font-family: var(--ig-font-family);
  outline-style: none;
}

:host([size=large]) {
  --component-size: var(--ig-size, var(--ig-size-large));
}

:host([size=medium]) {
  --component-size: var(--ig-size, var(--ig-size-medium));
}

:host([size=small]) {
  --component-size: var(--ig-size, var(--ig-size-small));
}

[part=label] {
  display: inline-block;
  white-space: nowrap;
}

[part~=input] {
  width: 100%;
  height: var(--size);
  border: none;
  outline-style: none;
  color: inherit;
  font-family: var(--ig-font-family);
  z-index: 1;
}

[part^=container] {
  position: relative;
  display: grid;
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  height: var(--size);
}

[part=prefix],
[part=suffix] {
  display: none;
  overflow: hidden;
}

:host([required]) [part=label]::after {
  content: "*";
}

[part=helper-text] {
  font-family: var(--ig-caption-font-family);
  font-size: var(--ig-caption-font-size);
  font-weight: var(--ig-caption-font-weight);
  font-style: var(--ig-caption-font-style);
  line-height: var(--ig-caption-line-height);
  letter-spacing: var(--ig-caption-letter-spacing);
  text-transform: var(--ig-caption-text-transform);
  margin-top: var(--ig-caption-margin-top);
  margin-bottom: var(--ig-caption-margin-bottom);
}`,ia=r.iv`/* stylelint-disable max-line-length */
:host([size=large]) {
  --component-size: var(--ig-size, var(--ig-size-large));
}

:host([size=medium]) {
  --component-size: var(--ig-size, var(--ig-size-medium));
}

:host([size=small]) {
  --component-size: var(--ig-size, var(--ig-size-small));
}

:host {
  --size: max(var(--is-large, 1) * 3rem, var(--is-medium, 1) * 2.375rem, var(--is-small, 1) * 1.9375rem);
  --font: max(var(--is-large, 1) * 1.25rem, var(--is-medium, 1) * 1rem, var(--is-small, 1) * 0.875rem);
  --input-font: max(var(--is-large, 1) * 1.25rem, var(--is-medium, 1) * 1rem, var(--is-small, 1) * 1rem);
}
:host::after {
  background: none;
}
:host [part~=container] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
  border-style: none;
  grid-template-columns: auto 1fr auto;
  background: var(--input-background, #fff);
  height: var(--size);
}
:host [part~=container]::after {
  display: none;
}
:host [part~=input] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
  height: var(--size);
  font-size: var(--input-font);
  padding-inline: max(var(--is-large, 1) * 16px * var(--ig-spacing-inline-large, var(--ig-spacing-inline, --ig-spacing)), var(--is-medium, 1) * 12px * var(--ig-spacing-inline-medium, var(--ig-spacing-inline, --ig-spacing)), var(--is-small, 1) * 8px * var(--ig-spacing-inline-small, var(--ig-spacing-inline, --ig-spacing)));
  padding-block: max(var(--is-large, 1) * 8px * var(--ig-spacing-block-large, var(--ig-spacing-block, --ig-spacing)), var(--is-medium, 1) * 6px * var(--ig-spacing-block-medium, var(--ig-spacing-block, --ig-spacing)), var(--is-small, 1) * 4px * var(--ig-spacing-block-small, var(--ig-spacing-block, --ig-spacing)));
  background: inherit;
  -webkit-box-shadow: 0 0 0 0 transparent;
          box-shadow: 0 0 0 0 transparent;
  z-index: 1;
  border: 1px solid hsla(var(--ig-gray-400), var(--ig-gray-a));
  -webkit-transition: border 0.15s ease-out, -webkit-box-shadow 0.15s ease-out;
  transition: border 0.15s ease-out, -webkit-box-shadow 0.15s ease-out;
  -o-transition: box-shadow 0.15s ease-out, border 0.15s ease-out;
  transition: box-shadow 0.15s ease-out, border 0.15s ease-out;
  transition: box-shadow 0.15s ease-out, border 0.15s ease-out, -webkit-box-shadow 0.15s ease-out;
  grid-area: 1/2;
}
:host [part*="input prefixed"] {
  border-start-start-radius: 0;
  border-end-start-radius: 0;
}
:host [part*="input suffixed"] {
  border-start-end-radius: 0;
  border-end-end-radius: 0;
}
:host [part*="input prefixed suffixed"] {
  border-radius: 0;
}
:host label {
  line-height: 1.5rem;
  margin-bottom: 0.25rem;
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}
:host label:empty {
  display: none;
}
:host [part=prefix],
:host [part=suffix] {
  position: relative;
  border-radius: none;
  min-width: auto;
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
  background: hsla(var(--ig-gray-300), var(--ig-gray-a));
  -webkit-transition: border 0.15s ease-out, -webkit-box-shadow 0.15s ease-out;
  transition: border 0.15s ease-out, -webkit-box-shadow 0.15s ease-out;
  -o-transition: box-shadow 0.15s ease-out, border 0.15s ease-out;
  transition: box-shadow 0.15s ease-out, border 0.15s ease-out;
  transition: box-shadow 0.15s ease-out, border 0.15s ease-out, -webkit-box-shadow 0.15s ease-out;
  font-size: var(--font);
  padding-inline: max(var(--is-large, 1) * 16px * var(--ig-spacing-inline-large, var(--ig-spacing-inline, --ig-spacing)), var(--is-medium, 1) * 12px * var(--ig-spacing-inline-medium, var(--ig-spacing-inline, --ig-spacing)), var(--is-small, 1) * 8px * var(--ig-spacing-inline-small, var(--ig-spacing-inline, --ig-spacing)));
  padding-block: max(var(--is-large, 1) * 8px * var(--ig-spacing-block-large, var(--ig-spacing-block, --ig-spacing)), var(--is-medium, 1) * 6px * var(--ig-spacing-block-medium, var(--ig-spacing-block, --ig-spacing)), var(--is-small, 1) * 4px * var(--ig-spacing-block-small, var(--ig-spacing-block, --ig-spacing)));
}
:host [part=prefix]:focus-within,
:host [part=suffix]:focus-within {
  -webkit-box-shadow: 0 0 0 0.25rem hsla(var(--ig-gray-300), 0.38);
          box-shadow: 0 0 0 0.25rem hsla(var(--ig-gray-300), 0.38);
}
:host [part=prefix] {
  grid-area: 1/1;
  border-style: solid;
  border-color: hsla(var(--ig-gray-400), var(--ig-gray-a));
  border-inline-start-width: 1px;
  border-inline-end-width: 0;
  border-block-start-width: 1px;
  border-block-end-width: 1px;
  border-start-start-radius: 0.25rem;
  border-end-start-radius: 0.25rem;
}
:host [part=suffix] {
  grid-area: 1/3;
  border-style: solid;
  border-color: hsla(var(--ig-gray-400), var(--ig-gray-a));
  border-inline-start-width: 0;
  border-inline-end-width: 1px;
  border-block-start-width: 1px;
  border-block-end-width: 1px;
  border-start-end-radius: 0.25rem;
  border-end-end-radius: 0.25rem;
}
:host [part=helper-text] {
  font-family: var(--ig-body-2-font-family);
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
  margin-top: 0.25rem;
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}

:host(:focus-within) [part~=input] {
  -webkit-box-shadow: 0 0 0 0.25rem hsla(var(--ig-primary-500), 0.38);
          box-shadow: 0 0 0 0.25rem hsla(var(--ig-primary-500), 0.38);
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}

:host([invalid]:focus-within) [part~=input] {
  -webkit-box-shadow: 0 0 0 0.25rem hsla(var(--ig-error-500), 0.38);
          box-shadow: 0 0 0 0.25rem hsla(var(--ig-error-500), 0.38);
  border-color: hsla(var(--ig-error-500), var(--ig-error-a));
}

:host([disabled]) [part=prefix],
:host([disabled]) [part=suffix],
:host([disabled]) [part~=container],
:host([readonly]) [part=prefix],
:host([readonly]) [part=suffix],
:host([readonly]) [part~=container] {
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}
:host([disabled]) [part~=input],
:host([readonly]) [part~=input] {
  border-color: hsla(var(--ig-gray-300), var(--ig-gray-a));
}

:host([readonly]) [part=prefix],
:host([readonly]) [part=suffix],
:host([readonly]) [part~=container] {
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
}

:host(:focus-within[readonly]) [part~=input] {
  -webkit-box-shadow: 0 0 0 0.25rem hsla(var(--ig-gray-400), 0.38);
          box-shadow: 0 0 0 0.25rem hsla(var(--ig-gray-400), 0.38);
  border-color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}`,oa=r.iv`/* stylelint-disable max-line-length */
:host([size=large]) {
  --component-size: var(--ig-size, var(--ig-size-large));
}

:host([size=medium]) {
  --component-size: var(--ig-size, var(--ig-size-medium));
}

:host([size=small]) {
  --component-size: var(--ig-size, var(--ig-size-small));
}

:host {
  --size: max(var(--is-large, 1) * 3rem, var(--is-medium, 1) * 2.5rem, var(--is-small, 1) * 2rem);
}
:host [part=prefix],
:host [part=suffix] {
  padding: 0 0.625rem;
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
  font-size: 0.875rem;
}
:host [part=prefix] {
  grid-area: 1/1;
}
:host [part=suffix] {
  grid-area: 1/3;
}
:host [part=label] {
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}
:host [part^=container] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 2px), 2px);
  border: 0.0625rem solid hsla(var(--ig-gray-500), var(--ig-gray-a));
  -webkit-transition: none;
  -o-transition: none;
  transition: none;
  background: var(--container-background, hsla(var(--ig-surface-500), var(--ig-surface-a)));
  cursor: text;
  grid-template-columns: auto 1fr auto;
  overflow: hidden;
  height: var(--size);
}
:host [part^=container]::after {
  background: transparent;
  -webkit-transform: none;
      -ms-transform: none;
          transform: none;
  height: initial;
}
:host [part~=input] {
  height: calc(var(--size) - 0.125rem);
  background: initial;
  font-size: 0.875rem;
  padding: 0.5rem;
  max-height: 100%;
  border: none;
  grid-area: 1/2;
}
:host [part=helper-text] {
  padding: 0;
  margin-top: 0.5rem;
  color: hsla(var(--ig-gray-600), var(--ig-gray-a));
}

:host(:not([invalid]):hover) [part^=container] {
  border-color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}

:host(:focus-within) [part^=container] {
  border-width: 0.125rem;
}
:host(:focus-within) [part~=input] {
  height: calc(var(--size) - 0.25rem);
}
:host(:focus-within) [part=prefix] {
  -webkit-margin-start: -0.0625rem;
          margin-inline-start: -0.0625rem;
}
:host(:focus-within) [part=suffix] {
  -webkit-margin-end: -0.0625rem;
          margin-inline-end: -0.0625rem;
}

:host(:not([invalid]):focus-within) [part^=container],
:host(:not([invalid]):focus-within:hover) [part^=container] {
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}

:host([required]) [part=label]::after,
:host([outlined][required]) [part=label]::after {
  color: hsla(var(--ig-error-500), var(--ig-error-a));
}

:host([invalid]) [part^=container],
:host([outlined][invalid]) [part^=container] {
  border-color: hsla(var(--ig-error-500), var(--ig-error-a));
}
:host([invalid]) [part=helper-text],
:host([outlined][invalid]) [part=helper-text] {
  color: hsla(var(--ig-error-500), var(--ig-error-a));
}

:host([disabled]) {
  pointer-events: none;
}
:host([disabled]) [part^=container] {
  border-color: hsla(var(--ig-gray-100), var(--ig-gray-a));
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}
:host([disabled]) [part^=container],
:host([disabled]) [part=prefix],
:host([disabled]) [part=suffix] {
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
}
:host([disabled]) [part=prefix],
:host([disabled]) [part=suffix],
:host([disabled]) [part=label],
:host([disabled]) [part=helper-text] {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}`,sa=r.iv`/* stylelint-disable max-line-length */
:host [part=prefix],
:host [part=suffix] {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: hsla(var(--ig-gray-600), var(--ig-gray-a));
}
:host [part=prefix] {
  -webkit-padding-start: 0.5rem;
          padding-inline-start: 0.5rem;
  grid-area: 1/1;
}
:host [part=suffix] {
  -webkit-padding-end: 0.5rem;
          padding-inline-end: 0.5rem;
  grid-area: 1/3;
}
:host [part=label] {
  color: hsla(var(--ig-gray-600), var(--ig-gray-a));
  margin-bottom: 0.25rem;
  font-size: initial;
}
:host [part^=container] {
  background: transparent;
  border-bottom: 1px solid hsla(var(--ig-gray-500), var(--ig-gray-a));
  -webkit-transition: background 0.25s ease-out;
  -o-transition: background 0.25s ease-out;
  transition: background 0.25s ease-out;
  grid-template-columns: auto 1fr auto;
}
:host [part^=container]::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 0.125rem;
  left: 0;
  right: 0;
  bottom: -1px;
  background: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  -webkit-transform: scaleY(0);
      -ms-transform: scaleY(0);
          transform: scaleY(0);
  -webkit-transition: opacity 180ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 180ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 180ms cubic-bezier(0.4, 0, 0.2, 1);
  -o-transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 180ms cubic-bezier(0.4, 0, 0.2, 1);
  -webkit-transform-origin: bottom center;
      -ms-transform-origin: bottom center;
          transform-origin: bottom center;
}
:host [part~=input] {
  font-size: 1rem;
  background: initial;
  padding: 0.5rem;
  border: none;
  grid-area: 1/2;
}
:host [part=helper-text] {
  padding: 0;
  color: hsla(var(--ig-gray-600), var(--ig-gray-a));
}

:host(:hover) [part^=container],
:host([outlined]:hover) [part^=container] {
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
}

:host(:focus-within) [part^=container],
:host([outlined]:focus-within) [part^=container] {
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
}
:host(:focus-within) [part^=container]::after,
:host([outlined]:focus-within) [part^=container]::after {
  -webkit-transform: scaleY(1);
      -ms-transform: scaleY(1);
          transform: scaleY(1);
}
:host(:focus-within) [part=label],
:host([outlined]:focus-within) [part=label] {
  color: var(--label-focus-color, hsla(var(--ig-primary-500), var(--ig-primary-a)));
}

:host([invalid]) [part^=container] {
  border-color: hsla(var(--ig-error-500), var(--ig-error-a));
}
:host([invalid]) [part^=container]::after {
  background: hsla(var(--ig-error-500), var(--ig-error-a));
}
:host([invalid]) [part=label],
:host([invalid]) [part^=helper-text] {
  color: hsla(var(--ig-error-500), var(--ig-error-a));
}

:host([disabled]) {
  pointer-events: none;
}
:host([disabled]) [part^=container] {
  border-color: hsla(var(--ig-gray-300), var(--ig-gray-a));
  color: hsla(var(--ig-gray-300), var(--ig-gray-a));
}
:host([disabled]) [part=prefix],
:host([disabled]) [part=suffix],
:host([disabled]) [part=label],
:host([disabled]) [part=helper-text] {
  color: hsla(var(--ig-gray-300), var(--ig-gray-a));
}`,na=r.iv`/* stylelint-disable max-line-length */
:host([size=large]) input:-moz-placeholder-shown + [part=notch] [part=label] {
  transform: translateY(-26px);
  font-size: 0.75rem;
}
:host([size=large]) input:-ms-input-placeholder + [part=notch] [part=label] {
  -ms-transform: translateY(-26px);
      transform: translateY(-26px);
  font-size: 0.75rem;
}
:host([size=large]:focus-within) [part=label], :host([size=large]) input:placeholder-shown + [part=notch] [part=label],
:host([size=large]) [part~=filled] + [part=notch] [part=label] {
  -webkit-transform: translateY(-26px);
      -ms-transform: translateY(-26px);
          transform: translateY(-26px);
  font-size: 0.75rem;
}

:host([size=medium]) input:-moz-placeholder-shown + [part=notch] [part=label] {
  transform: translateY(-22px);
  font-size: 0.75rem;
}

:host([size=medium]) input:-ms-input-placeholder + [part=notch] [part=label] {
  -ms-transform: translateY(-22px);
      transform: translateY(-22px);
  font-size: 0.75rem;
}

:host([size=medium]:focus-within) [part=label], :host([size=medium]) input:placeholder-shown + [part=notch] [part=label],
:host([size=medium]) [part~=filled] + [part=notch] [part=label] {
  -webkit-transform: translateY(-22px);
      -ms-transform: translateY(-22px);
          transform: translateY(-22px);
  font-size: 0.75rem;
}

:host([size=small]) input:-moz-placeholder-shown + [part=notch] [part=label] {
  transform: translateY(-18px);
  font-size: 0.75rem;
}

:host([size=small]) input:-ms-input-placeholder + [part=notch] [part=label] {
  -ms-transform: translateY(-18px);
      transform: translateY(-18px);
  font-size: 0.75rem;
}

:host([size=small]:focus-within) [part=label], :host([size=small]) input:placeholder-shown + [part=notch] [part=label],
:host([size=small]) [part~=filled] + [part=notch] [part=label] {
  -webkit-transform: translateY(-18px);
      -ms-transform: translateY(-18px);
          transform: translateY(-18px);
  font-size: 0.75rem;
}

:host input:-moz-placeholder-shown + [part=notch] {
  border-top: 0.0625rem solid transparent;
}

:host input:-ms-input-placeholder + [part=notch] {
  border-top: 0.0625rem solid transparent;
}

:host([disabled]) [part~=filled] + [part=notch], :host([invalid]) [part~=filled] + [part=notch],
:host([invalid]:focus-within) [part~=filled] + [part=notch], :host input:placeholder-shown + [part=notch],
:host [part~=filled] + [part=notch] {
  border-top: 0.0625rem solid transparent;
}

[part~=input] {
  background: transparent;
  padding: 0 0.25rem;
  font-size: 1rem;
  grid-area: 1/2/span 1/span 2;
}

[part=label] {
  color: hsla(var(--ig-gray-600), var(--ig-gray-a));
  /* stylelint-disable */
  -webkit-transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1), font-size 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1), font-size 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
  -o-transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1), font-size 150ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1), font-size 150ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1), font-size 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
  /* stylelint-enable */
  line-height: 1;
  will-change: font-size, color, transform;
}

:host(:focus-within) [part=start] {
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  border-inline-start-width: 0.125rem;
  border-block-start-width: 0.125rem;
  border-block-end-width: 0.125rem;
}
:host(:focus-within) [part=notch] {
  border-width: 0.125rem;
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  border-top: 0.0625rem solid transparent;
}
:host(:focus-within) [part=filler] {
  border-width: 0.125rem;
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}
:host(:focus-within) [part=end] {
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  border-inline-end-width: 0.125rem;
  border-block-start-width: 0.125rem;
  border-block-end-width: 0.125rem;
}
:host(:focus-within) [part=prefix] {
  -webkit-padding-start: 0.25rem;
          padding-inline-start: 0.25rem;
}
:host(:focus-within) [part=suffix] {
  -webkit-padding-end: 0.25rem;
          padding-inline-end: 0.25rem;
}
:host(:focus-within) [part=label] {
  color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}

[part^=container] {
  grid-template-columns: auto auto 1fr auto;
}

[part=start] {
  width: auto;
  min-width: 0.75rem;
  -ms-flex-negative: 0;
      flex-shrink: 0;
  grid-area: 1/1;
  border-style: solid;
  border-color: hsla(var(--ig-gray-600), var(--ig-gray-a));
  border-inline-start-width: 0.0625rem;
  border-inline-end-width: 0;
  border-block-start-width: 0.0625rem;
  border-block-end-width: 0.0625rem;
  border-start-start-radius: 0.25rem;
  border-end-start-radius: 0.25rem;
}
[part=start] > [part=prefix] {
  -webkit-padding-start: 0.3125rem;
          padding-inline-start: 0.3125rem;
  -webkit-padding-end: 0.25rem;
          padding-inline-end: 0.25rem;
}

[part=notch] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  width: auto;
  height: 100%;
  grid-area: 1/2;
  padding: 0 0.25rem;
  border-width: 0.0625rem;
  border-style: solid;
  border-color: hsla(var(--ig-gray-600), var(--ig-gray-a));
  border-left: none;
  border-right: none;
  overflow: visible;
}
[part=notch]:empty {
  display: none;
}

[part=filler] {
  grid-area: 1/3;
  border-width: 0.0625rem;
  border-style: solid;
  border-color: hsla(var(--ig-gray-600), var(--ig-gray-a));
  border-left: none;
  border-right: none;
}

[part=end] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
      -ms-flex-pack: end;
          justify-content: flex-end;
  -webkit-box-flex: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
  height: 100%;
  grid-area: 1/4;
  min-width: 0.75rem;
  border-style: solid;
  border-color: hsla(var(--ig-gray-600), var(--ig-gray-a));
  border-inline-start-width: 0;
  border-inline-end-width: 0.0625rem;
  border-block-start-width: 0.0625rem;
  border-block-end-width: 0.0625rem;
  border-start-end-radius: 0.25rem;
  border-end-end-radius: 0.25rem;
}
[part=end] > [part=suffix] {
  -webkit-padding-start: 0.25rem;
          padding-inline-start: 0.25rem;
  -webkit-padding-end: 0.3125rem;
          padding-inline-end: 0.3125rem;
}

[part=helper-text] {
  font-family: var(--ig-caption-font-family);
  font-size: var(--ig-caption-font-size);
  font-weight: var(--ig-caption-font-weight);
  font-style: var(--ig-caption-font-style);
  line-height: var(--ig-caption-line-height);
  letter-spacing: var(--ig-caption-letter-spacing);
  text-transform: var(--ig-caption-text-transform);
  margin-top: var(--ig-caption-margin-top);
  margin-bottom: var(--ig-caption-margin-bottom);
  padding: 0 0.5rem;
  margin-top: 0.25rem;
  color: hsla(var(--ig-gray-600), var(--ig-gray-a));
}

:host([invalid]) [part=start],
:host([invalid]) [part=notch],
:host([invalid]) [part=filler],
:host([invalid]) [part=end],
:host([invalid]:focus-within) [part=start],
:host([invalid]:focus-within) [part=notch],
:host([invalid]:focus-within) [part=filler],
:host([invalid]:focus-within) [part=end] {
  border-color: hsla(var(--ig-error-500), var(--ig-error-a));
}
:host([invalid]) [part=label],
:host([invalid]) [part=helper-text],
:host([invalid]:focus-within) [part=label],
:host([invalid]:focus-within) [part=helper-text] {
  color: hsla(var(--ig-error-500), var(--ig-error-a));
}
:host([invalid]:focus-within) [part=notch] {
  border-top: 0.0625rem solid transparent;
}

:host([disabled]) {
  pointer-events: none;
}
:host([disabled]) [part~=input],
:host([disabled]) [part=label],
:host([disabled]) [part=prefix],
:host([disabled]) [part=suffix],
:host([disabled]) [part=helper-text] {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}
:host([disabled]) [part=start],
:host([disabled]) [part=filler],
:host([disabled]) [part=notch],
:host([disabled]) [part=end] {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
  border-color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}
:host([disabled]) input::-webkit-input-placeholder {
  color: hsla(var(--ig-gray-300), var(--ig-gray-a));
}
:host([disabled]) input::-moz-placeholder {
  color: hsla(var(--ig-gray-300), var(--ig-gray-a));
}
:host([disabled]) input:-ms-input-placeholder {
  color: hsla(var(--ig-gray-300), var(--ig-gray-a));
}
:host([disabled]) input::-ms-input-placeholder {
  color: hsla(var(--ig-gray-300), var(--ig-gray-a));
}
:host([disabled]) input::placeholder {
  color: hsla(var(--ig-gray-300), var(--ig-gray-a));
}
:host(:not([outlined])) [part=start],
:host(:not([outlined])) [part=end] {
  border-color: transparent;
  border-top-width: 0.0625rem;
}
:host(:not([outlined])) [part=notch],
:host(:not([outlined])) [part=filler] {
  border-top: 1px solid transparent;
  border-bottom: transparent;
  border-bottom-width: 0.0625rem;
}
:host(:not([outlined])) [part=label] {
  inset-inline-start: 0.125rem;
}
:host(:not([outlined])) [part~=container] {
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
  border-bottom: 1px solid hsla(var(--ig-gray-600), var(--ig-gray-a));
  border-start-end-radius: 0.25rem;
  border-start-start-radius: 0.25rem;
  -webkit-transition: border-bottom-width 150ms cubic-bezier(0.4, 0, 0.2, 1);
  -o-transition: border-bottom-width 150ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: border-bottom-width 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
:host(:not([outlined])) [part~=container]::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 0.125rem;
  left: 0;
  right: 0;
  bottom: -1px;
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  -webkit-transform: scaleX(0);
      -ms-transform: scaleX(0);
          transform: scaleX(0);
  -webkit-transition: opacity 180ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 180ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 180ms cubic-bezier(0.4, 0, 0.2, 1);
  -o-transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
:host(:not([outlined])) [part~=labelled] [part~=input] {
  padding-top: 1.25rem;
  padding-bottom: 0.375rem;
}
:host(:not([outlined])) input:-moz-placeholder-shown + [part=notch] [part=label] {
  transform: translateY(-106%);
}
:host(:not([outlined])) input:-ms-input-placeholder + [part=notch] [part=label] {
  -ms-transform: translateY(-106%);
      transform: translateY(-106%);
}
:host(:not([outlined])) input:placeholder-shown + [part=notch] [part=label],
:host(:not([outlined])) [part~=filled] + [part=notch] [part=label] {
  -webkit-transform: translateY(-106%);
      -ms-transform: translateY(-106%);
          transform: translateY(-106%);
}

:host(:not([outlined]):hover) [part~=container] {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
  border-bottom: 1px solid hsla(var(--ig-gray-800), var(--ig-gray-a));
}

:host(:not([outlined]):focus-within) [part~=container] {
  background: var(--focus-background, hsla(var(--ig-gray-300), var(--ig-gray-a)));
  border-bottom: 1px solid hsla(var(--ig-primary-500), var(--ig-primary-a));
}
:host(:not([outlined]):focus-within) [part~=container]::after {
  -webkit-transform: scaleX(1);
      -ms-transform: scaleX(1);
          transform: scaleX(1);
  opacity: 1;
}
:host(:not([outlined]):focus-within) [part=notch] [part=label] {
  -webkit-transform: translateY(-106%);
      -ms-transform: translateY(-106%);
          transform: translateY(-106%);
}

:host(:not([outlined])[invalid]) [part=start],
:host(:not([outlined])[invalid]) [part=notch],
:host(:not([outlined])[invalid]) [part=filler],
:host(:not([outlined])[invalid]) [part=end],
:host(:not([outlined])[invalid]:focus-within) [part=start],
:host(:not([outlined])[invalid]:focus-within) [part=notch],
:host(:not([outlined])[invalid]:focus-within) [part=filler],
:host(:not([outlined])[invalid]:focus-within) [part=end] {
  border-color: transparent;
}
:host(:not([outlined])[invalid]) [part~=container],
:host(:not([outlined])[invalid]:focus-within) [part~=container] {
  border-color: hsla(var(--ig-error-500), var(--ig-error-a));
}
:host(:not([outlined])[invalid]) [part~=container]::after,
:host(:not([outlined])[invalid]:focus-within) [part~=container]::after {
  background: hsla(var(--ig-error-500), var(--ig-error-a));
}

:host(:not([outlined])[disabled]) [part~=input],
:host(:not([outlined])[disabled]) [part=label],
:host(:not([outlined])[disabled]) [part=prefix],
:host(:not([outlined])[disabled]) [part=suffix],
:host(:not([outlined])[disabled]) [part=helper-text] {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}
:host(:not([outlined])[disabled]) [part~=container] {
  border-color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}`;var la,ca=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};let ga=la=class extends(v(z(r.oi))){constructor(){super(),this.inputId=`input-${la.increment()}`,this.dir="auto",this.outlined=!1,this.required=!1,this.disabled=!1,this.readonly=!1,this.size="medium"}connectedCallback(){super.connectedCallback(),this.shadowRoot.addEventListener("slotchange",(()=>this.requestUpdate()))}themeAdopted(e){this.themeController=e}focus(e){this.input.focus(e)}blur(){this.input.blur()}resolvePartNames(e){return{[e]:!0,prefixed:this.prefixes.length>0,suffixed:this.suffixes.length>0,filled:!!this.value}}handleFocus(){this.emitEvent("igcFocus")}handleBlur(){this.emitEvent("igcBlur")}setSelectionRange(e,t,a="none"){this.input.setSelectionRange(e,t,a)}setRangeText(e,t,a,r="preserve"){this.input.setRangeText(e,t,a,r)}renderPrefix(){return r.dy`<div part="prefix">
      <slot name="prefix"></slot>
    </div>`}renderSuffix(){return r.dy`<div part="suffix">
      <slot name="suffix"></slot>
    </div>`}renderLabel(){return this.label?r.dy`<label part="label" for="${this.inputId}"> ${this.label} </label>`:r.Ld}renderMaterial(){return r.dy`
      <div
        part="${$({...this.resolvePartNames("container"),labelled:this.label})}"
      >
        <div part="start">${this.renderPrefix()}</div>
        ${this.renderInput()}
        <div part="notch">${this.renderLabel()}</div>
        <div part="filler"></div>
        <div part="end">${this.renderSuffix()}</div>
      </div>
      <div part="helper-text" .hidden="${0==this.helperText.length}">
        <slot name="helper-text"></slot>
      </div>
    `}renderStandard(){return r.dy`${this.renderLabel()}
      <div part="${$(this.resolvePartNames("container"))}">
        ${this.renderPrefix()} ${this.renderInput()} ${this.renderSuffix()}
      </div>
      <div part="helper-text" .hidden="${0==this.helperText.length}">
        <slot name="helper-text"></slot>
      </div>`}render(){return r.dy`${"material"===this.themeController.theme?this.renderMaterial():this.renderStandard()}`}};ga.shadowRootOptions={...r.oi.shadowRootOptions,delegatesFocus:!0},ga.styles=ra,ga.increment=T(),ca([(e,t)=>{}],ga.prototype,"value",void 0),ca([(0,i.IO)("input",!0)],ga.prototype,"input",void 0),ca([(0,i.NH)({slot:"prefix"})],ga.prototype,"prefixes",void 0),ca([(0,i.NH)({slot:"suffix"})],ga.prototype,"suffixes",void 0),ca([(0,i.NH)({slot:"helper-text"})],ga.prototype,"helperText",void 0),ca([(0,i.Cb)({reflect:!0}),(e,t)=>{}],ga.prototype,"dir",void 0),ca([(0,i.Cb)()],ga.prototype,"name",void 0),ca([(0,i.Cb)({reflect:!0,type:Boolean})],ga.prototype,"outlined",void 0),ca([(0,i.Cb)({reflect:!0,type:Boolean})],ga.prototype,"required",void 0),ca([(0,i.Cb)({reflect:!0,type:Boolean})],ga.prototype,"disabled",void 0),ca([(0,i.Cb)({reflect:!0,type:Boolean})],ga.prototype,"readonly",void 0),ca([(0,i.Cb)({type:String})],ga.prototype,"placeholder",void 0),ca([(0,i.Cb)({type:String})],ga.prototype,"label",void 0),ca([(e,t)=>{}],ga.prototype,"focus",null),ca([(e,t)=>{}],ga.prototype,"blur",null),ga=la=ca([p({bootstrap:ia,material:na,fluent:oa,indigo:sa}),J],ga);var da=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};let ha=class extends ga{constructor(){super(...arguments),this.parser=new Jt,this.selection={start:0,end:0},this.compositionStart=0,this.hasFocus=!1,this.maskedValue="",this._mask="",this.invalid=!1}get inputSelection(){return{start:this.input.selectionStart||0,end:this.input.selectionEnd||0}}get emptyMask(){return this.parser.apply()}connectedCallback(){super.connectedCallback(),this._mask=this._mask||this.parser.mask,this.prompt=this.prompt||this.parser.prompt}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=!this.input.checkValidity()}select(){this.input.select()}handleInput({inputType:e,isComposing:t}){const a=this.input.value,r=this.selection.start;let i=this.selection.end;switch(e){case"deleteContentForward":return this.updateInput("",r,i=r===i?++i:i),this.updateComplete.then((()=>this.input.setSelectionRange(i,i)));case"deleteContentBackward":if(t)return;return this.updateInput("",this.inputSelection.start,i);case"deleteByCut":return this.updateInput("",r,i);case"insertText":return this.updateInput(a.substring(r,this.inputSelection.end),r,i);case"insertFromPaste":return this.updateInput(a.substring(r,this.inputSelection.end),r,this.inputSelection.start);case"insertFromDrop":return this.updateInput(a.substring(this.inputSelection.start,this.inputSelection.end),this.inputSelection.start,this.inputSelection.end)}}handleKeydown(e){e.key&&(this.selection=this.inputSelection)}handleCut(){this.selection=this.inputSelection}handleDragStart(){this.selection=this.inputSelection}handleCompositionStart(){this.compositionStart=this.inputSelection.start}handleCompositionEnd({data:e}){const t=this.compositionStart,a=this.inputSelection.end;this.updateInput(e,t,a)}handleInvalid(){this.invalid=!0}setSelectionRange(e,t,a){super.setSelectionRange(e,t,a),this.selection={start:e,end:t}}};da([(0,i.SB)()],ha.prototype,"hasFocus",void 0),da([(0,i.SB)()],ha.prototype,"maskedValue",void 0),da([(0,i.SB)()],ha.prototype,"_mask",void 0),da([(0,i.Cb)()],ha.prototype,"prompt",void 0),da([(0,i.Cb)({reflect:!0,type:Boolean})],ha.prototype,"invalid",void 0),da([(e,t)=>{}],ha.prototype,"setSelectionRange",null),ha=da([J],ha);var pa=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};class ba extends(z(ha)){constructor(){super(),this._oldValue=null,this._datePartDeltas={date:1,month:1,year:1,hours:1,minutes:1,seconds:1},this.spinLoop=!0,this.locale="en",this.addEventListener("wheel",this.onWheel)}get inputFormat(){return this._inputFormat||this._defaultMask}set inputFormat(e){e&&(this.setMask(e),this._inputFormat=e)}get value(){return this._value}set value(e){this._value=e?aa.isValidDate(e)?e:aa.parseIsoDate(e):null,this.updateMask(),this.validate()}setDefaultMask(){this._inputFormat||(this.updateDefaultMask(),this.setMask(this._defaultMask)),this.value&&this.updateMask()}setDisplayFormat(){this.displayFormat&&this.value&&(this.maskedValue=aa.formatDate(this.value,this.locale,this.displayFormat,!0))}promptChange(){this.prompt?this.parser.prompt=this.prompt:this.prompt=this.parser.prompt}handleInvalidState(){this.updateComplete.then((()=>this.invalid=!this.input.checkValidity()))}validate(){if(!this.value)return null;let e={};return(this.minValue||this.maxValue)&&(e=aa.validateMinMax(this.value,this.minValue,this.maxValue,this.hasTimeParts,this.hasDateParts),Object.keys(e).length>0?this.invalid=!0:this.invalid=!1),e}get hasDateParts(){return(this._inputDateParts||aa.parseDateTimeFormat(this.inputFormat)).some((e=>e.type===ea.Date||e.type===ea.Month||e.type===ea.Year))}get hasTimeParts(){return(this._inputDateParts||aa.parseDateTimeFormat(this.inputFormat)).some((e=>e.type===ea.Hours||e.type===ea.Minutes||e.type===ea.Seconds))}get targetDatePart(){var e;let t;if(this.hasFocus){const a=null===(e=this._inputDateParts.find((e=>e.start<=this.inputSelection.start&&this.inputSelection.start<=e.end&&e.type!==ea.Literal)))||void 0===e?void 0:e.type;a&&(t=a)}else t=this._inputDateParts.some((e=>e.type===ea.Date))?ta.Date:this._inputDateParts.some((e=>e.type===ea.Hours))?ta.Hours:this._inputDateParts[0].type;return t}get datePartDeltas(){return Object.assign({},this._datePartDeltas,this.spinDelta)}connectedCallback(){super.connectedCallback(),this.updateDefaultMask(),this.setMask(this.inputFormat),this.value&&this.updateMask()}reportValidity(){const e=this._value?0===Object.keys(this.validate()).length:this.input.reportValidity();return this.invalid=!e,e}checkValidity(){return this.disabled?this.input.checkValidity():this._value?this.input.checkValidity()&&0===Object.keys(this.validate()).length:!this.required}stepUp(e,t){const a=e||this.targetDatePart;if(!a)return;const r=this.trySpinValue(a,t);this.value=r,this.handleInput()}stepDown(e,t){const a=e||this.targetDatePart;if(!a)return;const r=this.trySpinValue(a,t,!0);this.value=r,this.handleInput()}clear(){this.maskedValue="",this.value=null}updateMask(){if(this.hasFocus)this.maskedValue=this.getMaskedValue();else{if(!this.value||!aa.isValidDate(this.value))return void(this.maskedValue="");const e=this.displayFormat||this.inputFormat;this.displayFormat?this.maskedValue=aa.formatDate(this.value,this.locale,e,!0):this.inputFormat?this.maskedValue=aa.formatDate(this.value,this.locale,e):this.maskedValue=this.value.toLocaleString()}}handleChange(){this.emitEvent("igcChange",{detail:this.value}),this.invalid=!this.checkValidity()}handleInput(){var e;this.emitEvent("igcInput",{detail:null===(e=this.value)||void 0===e?void 0:e.toString()})}handleDragLeave(){this.hasFocus||this.updateMask()}handleDragEnter(){this.hasFocus||(this.maskedValue=this.getMaskedValue())}updateInput(e,t,a){var r;const{value:i,end:o}=this.parser.replace(this.maskedValue,e,t,a);this.maskedValue=i,this.updateValue(),this.requestUpdate(),t!==this.inputFormat.length&&this.emitEvent("igcInput",{detail:null===(r=this.value)||void 0===r?void 0:r.toString()}),this.updateComplete.then((()=>this.input.setSelectionRange(o,o)))}trySpinValue(e,t,a=!1){t||(t=this.datePartDeltas[e]||1);const r=a?-Math.abs(t):Math.abs(t);return this.spinValue(e,r)}spinValue(e,t){if(!this.value||!aa.isValidDate(this.value))return new Date;const a=new Date(this.value.getTime());let r,i;switch(e){case ta.Date:aa.spinDate(t,a,this.spinLoop);break;case ta.Month:aa.spinMonth(t,a,this.spinLoop);break;case ta.Year:aa.spinYear(t,a);break;case ta.Hours:aa.spinHours(t,a,this.spinLoop);break;case ta.Minutes:aa.spinMinutes(t,a,this.spinLoop);break;case ta.Seconds:aa.spinSeconds(t,a,this.spinLoop);break;case ta.AmPm:if(r=this._inputDateParts.find((e=>e.type===ea.AmPm)),void 0!==r)return i=this.maskedValue.substring(r.start,r.end),aa.spinAmPm(a,this.value,i)}return a}onWheel(e){this.hasFocus&&(this.selection=this.inputSelection,e.preventDefault(),e.stopPropagation(),e.deltaY>0?this.stepDown():this.stepUp(),this.updateComplete.then((()=>this.setSelectionRange(this.selection.start,this.selection.end))))}updateDefaultMask(){this._defaultMask=aa.getDefaultMask(this.locale)}setMask(e){var t;const a=null===(t=this._inputDateParts)||void 0===t?void 0:t.map((e=>e.format)).join("");this._inputDateParts=aa.parseDateTimeFormat(e),e=this._inputDateParts.map((e=>e.format)).join(""),this._defaultMask=e;const r=(e||aa.DEFAULT_INPUT_FORMAT).replace(new RegExp(/(?=[^t])[\w]/,"g"),"0");this._mask=-1!==r.indexOf("tt")?r.replace(new RegExp("tt","g"),"LL"):r,this.parser.mask=this._mask,this.parser.prompt=this.prompt,this.placeholder&&a!==this.placeholder||(this.placeholder=e)}parseDate(e){return e?aa.parseValueFromMask(e,this._inputDateParts,this.prompt):null}getMaskedValue(){let e=this.emptyMask;if(aa.isValidDate(this.value)){for(const t of this._inputDateParts){if(t.type===ea.Literal)continue;const a=aa.getPartValue(t,t.format.length,this.value);e=this.parser.replace(e,a,t.start,t.end).value}return e}return""===this.maskedValue?e:this.maskedValue}isComplete(){return-1===this.maskedValue.indexOf(this.prompt)}updateValue(){if(this.isComplete()){const e=this.parseDate(this.maskedValue);aa.isValidDate(e)?this.value=e:this.value=null}else this.value=null}getNewPosition(e,t=0){const a=this._inputDateParts.filter((e=>e.type===ea.Literal));let r=this.selection.start;if(t){do{r++}while(!a.some((e=>e.start===r))&&r<e.length);return r}do{r=r>0?--r:r}while(!a.some((e=>e.end===r))&&r>0);return r}handleFocus(){this.hasFocus=!0,this._oldValue=this.value,this.updateMask(),this.emitEvent("igcFocus")}handleBlur(){if(this.hasFocus=!1,this.isComplete()||this.maskedValue===this.emptyMask)this.updateMask();else{const e=this.parseDate(this.maskedValue);e?this.value=e:(this.value=null,this.maskedValue="")}this._oldValue!==this.value&&this.handleChange(),this.emitEvent("igcBlur")}handleKeydown(e){super.handleKeydown(e);const t=e.key;switch(t){case"ArrowLeft":case"ArrowRight":if(e.ctrlKey){e.preventDefault();const a=e.target.value,r="ArrowRight"===t?1:0,i=this.getNewPosition(a,r);this.setSelectionRange(i,i)}break;case"ArrowUp":case"ArrowDown":e.preventDefault(),"ArrowUp"===t?this.stepUp():this.stepDown(),this.updateComplete.then((()=>this.setSelectionRange(this.selection.start,this.selection.end)));break;case";":e.ctrlKey&&(this.value=new Date)}}renderInput(){return r.dy`<div>
      <input
        type="text"
        part=${$(this.resolvePartNames("input"))}
        name=${(0,s.o)(this.name)}
        .value=${(0,yt.a)(this.maskedValue)}
        .placeholder=${(0,yt.a)(this.placeholder||this.emptyMask)}
        ?readonly=${this.readonly}
        ?disabled=${this.disabled}
        ?required=${this.required}
        @invalid="${this.handleInvalid}"
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @input=${super.handleInput}
        @keydown=${this.handleKeydown}
        @cut=${this.handleCut}
        @compositionstart=${this.handleCompositionStart}
        @compositionend=${this.handleCompositionEnd}
        @dragenter=${this.handleDragEnter}
        @dragleave=${this.handleDragLeave}
        @dragstart=${this.handleDragStart}
      />
    </div>`}}ba.tagName="igc-date-time-input",pa([(0,i.Cb)({attribute:"input-format"})],ba.prototype,"inputFormat",null),pa([(0,i.Cb)({converter:{fromAttribute:e=>e?aa.parseIsoDate(e):null,toAttribute:e=>e.toISOString()}}),(e,t)=>{}],ba.prototype,"value",null),pa([(0,i.Cb)({attribute:"min-value",converter:{fromAttribute:e=>e?aa.parseIsoDate(e):null,toAttribute:e=>e.toISOString()}})],ba.prototype,"minValue",void 0),pa([(0,i.Cb)({attribute:"max-value",converter:{fromAttribute:e=>e?aa.parseIsoDate(e):null,toAttribute:e=>e.toISOString()}})],ba.prototype,"maxValue",void 0),pa([(0,i.Cb)({attribute:"display-format"})],ba.prototype,"displayFormat",void 0),pa([(0,i.Cb)({attribute:!1})],ba.prototype,"spinDelta",void 0),pa([(0,i.Cb)({type:Boolean,attribute:"spin-loop"})],ba.prototype,"spinLoop",void 0),pa([(0,i.Cb)()],ba.prototype,"locale",void 0),pa([b("locale",{waitUntilFirstUpdate:!0})],ba.prototype,"setDefaultMask",null),pa([b("displayFormat",{waitUntilFirstUpdate:!0})],ba.prototype,"setDisplayFormat",null),pa([b("prompt",{waitUntilFirstUpdate:!0})],ba.prototype,"promptChange",null),pa([b("required",{waitUntilFirstUpdate:!0}),b("disabled",{waitUntilFirstUpdate:!0}),b("value",{waitUntilFirstUpdate:!0})],ba.prototype,"handleInvalidState",null),pa([b("maxValue"),b("minValue")],ba.prototype,"validate",null);const va=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */
:host {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 2px), 2px);
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
  color: var(--ig-surface-500-contrast);
  border-style: none;
  padding: unset;
}

[part=base] {
  background: inherit;
  color: inherit;
  border-style: inherit;
  padding: inherit;
  border: inherit;
  border-radius: inherit;
  min-width: inherit;
  -webkit-box-shadow: var(--igc-elevation-24);
          box-shadow: var(--igc-elevation-24);
}

[part=content] {
  max-width: 40ch;
  color: var(--content-color, hsla(var(--ig-gray-700), var(--ig-gray-a)));
  font-family: var(--ig-body-1-font-family);
  font-size: var(--ig-body-1-font-size);
  font-weight: var(--ig-body-1-font-weight);
  font-style: var(--ig-body-1-font-style);
  line-height: var(--ig-body-1-line-height);
  letter-spacing: var(--ig-body-1-letter-spacing);
  text-transform: var(--ig-body-1-text-transform);
  margin-top: var(--ig-body-1-margin-top);
  margin-bottom: var(--ig-body-1-margin-bottom);
  margin: 0;
}

[part=title],
[part=footer] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  font-family: var(--ig-h6-font-family);
  font-size: var(--ig-h6-font-size);
  font-weight: var(--ig-h6-font-weight);
  font-style: var(--ig-h6-font-style);
  line-height: var(--ig-h6-line-height);
  letter-spacing: var(--ig-h6-letter-spacing);
  text-transform: var(--ig-h6-text-transform);
  margin-top: var(--ig-h6-margin-top);
  margin-bottom: var(--ig-h6-margin-bottom);
  margin: 0;
}

[part=footer] {
  -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
  -webkit-box-pack: end;
      -ms-flex-pack: end;
          justify-content: flex-end;
}

::slotted(*) {
  font: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  text-transform: inherit;
  margin: 0;
}

slot[name=title]::slotted(:not(:last-child)),
slot[name=footer]::slotted(:not(:last-child)) {
  -webkit-margin-end: 0.5rem;
          margin-inline-end: 0.5rem;
}

dialog::-webkit-backdrop {
  background: none;
}

dialog::backdrop {
  background: none;
}

[part=backdrop] {
  position: fixed;
  inset: 0;
  background: hsla(var(--ig-gray-500), 0.54);
}`,ma=r.iv`/* stylelint-disable max-line-length */
:host {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 4px), 4px);
}

[part=base] {
  min-width: 18rem;
  border: 1px solid var(--border-color, hsla(var(--ig-gray-300), var(--ig-gray-a)));
  -webkit-box-shadow: none;
          box-shadow: none;
}

[part=title],
[part=footer] {
  font-family: var(--ig-h5-font-family);
  font-size: var(--ig-h5-font-size);
  font-weight: var(--ig-h5-font-weight);
  font-style: var(--ig-h5-font-style);
  line-height: var(--ig-h5-line-height);
  letter-spacing: var(--ig-h5-letter-spacing);
  text-transform: var(--ig-h5-text-transform);
  margin-top: var(--ig-h5-margin-top);
  margin-bottom: var(--ig-h5-margin-bottom);
  margin: 0;
  padding: 1rem;
}

[part=content] {
  padding: 1rem;
}

[part=title] {
  -webkit-border-after: 1px solid var(--border-color, hsla(var(--ig-gray-300), var(--ig-gray-a)));
          border-block-end: 1px solid var(--border-color, hsla(var(--ig-gray-300), var(--ig-gray-a)));
}

[part=footer] {
  -webkit-border-before: 1px solid var(--border-color, hsla(var(--ig-gray-300), var(--ig-gray-a)));
          border-block-start: 1px solid var(--border-color, hsla(var(--ig-gray-300), var(--ig-gray-a)));
}`,ua=r.iv`/* stylelint-disable max-line-length */
[part=title] {
  padding: 1.5rem;
  -webkit-padding-before: 1rem;
          padding-block-start: 1rem;
}

[part=content] {
  padding-inline: 1.5rem;
  -webkit-padding-after: 1.25rem;
          padding-block-end: 1.25rem;
}

[part=footer] {
  padding: 1.5rem;
  -webkit-padding-before: 0;
          padding-block-start: 0;
}

[part=backdrop] {
  background: rgba(255, 255, 255, 0.4);
}`,fa=r.iv`/* stylelint-disable max-line-length */
[part=title] {
  padding: 1rem 1.5rem;
}

[part=content] {
  padding-inline: 1.5rem;
  -webkit-padding-after: 0.5rem;
          padding-block-end: 0.5rem;
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

[part=footer] {
  padding: 0.5rem;
}`,ya=r.iv`/* stylelint-disable max-line-length */
[part=title] {
  padding-inline: 1.5rem;
  -webkit-padding-before: 1rem;
          padding-block-start: 1rem;
}

[part=content] {
  padding: 0.875rem 1.5rem;
}

[part=footer] {
  padding: 0.5rem;
  -webkit-padding-before: 0;
          padding-block-start: 0;
}`;var wa,ka=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};x(ce);let xa=wa=class extends(z(r.oi)){constructor(){super(...arguments),this.titleId=`title-${wa.increment()}`,this.closeOnEscape=!0,this.closeOnOutsideClick=!1,this.hideDefaultAction=!1,this.open=!1,this.formSubmitHandler=e=>{var t;e instanceof SubmitEvent&&e.submitter&&(this.returnValue=(null===(t=e.submitter)||void 0===t?void 0:t.value)||""),e.defaultPrevented||this.hideWithEvent()}}handleOpenState(){this.open?this.dialog.showModal():this.dialog.close()}async firstUpdated(){await this.updateComplete,this.open&&this.dialog.showModal()}show(){this.open||(this.open=!0)}hide(){this.open&&(this.open=!1)}toggle(){this.open?this.hide():this.show()}async hideWithEvent(){this.open&&this.handleClosing()&&(this.open=!1,await this.updateComplete,this.emitEvent("igcClosed"))}handleCancel(e){e.preventDefault(),this.closeOnEscape&&this.hideWithEvent()}handleClick({clientX:e,clientY:t,target:a}){if(this.closeOnOutsideClick&&this.dialog.isSameNode(a)){const{left:a,top:r,right:i,bottom:o}=this.dialog.getBoundingClientRect(),s=(e,t,a)=>e>=t&&e<=a;s(e,a,i)&&s(t,r,o)||this.hideWithEvent()}}handleClosing(){return this.emitEvent("igcClosing",{cancelable:!0})}handleSlotChange(){Array.from(this.querySelectorAll("igc-form, form")).filter((e=>"dialog"===e.getAttribute("method"))).forEach((e=>{const t=/igc-form/i.test(e.tagName)?"igcSubmit":"submit";e.removeEventListener(t,this.formSubmitHandler),e.addEventListener(t,this.formSubmitHandler)}))}render(){const e=this.ariaLabel?this.ariaLabel:void 0,t=e?void 0:this.titleId;return r.dy`
      <div part="backdrop" aria-hidden="true" ?hidden=${!this.open}></div>
      <dialog
        part="base"
        role="dialog"
        @click=${this.handleClick}
        @cancel=${this.handleCancel}
        aria-label=${(0,s.o)(e)}
        aria-labelledby=${(0,s.o)(t)}
      >
        <header part="title" id=${this.titleId}>
          <slot name="title"><span>${this.title}</span></slot>
        </header>
        <section part="content">
          <slot @slotchange=${this.handleSlotChange}></slot>
        </section>
        <footer part="footer">
          <slot name="footer">
            ${this.hideDefaultAction?r.Ld:r.dy`<igc-button variant="flat" @click=${this.hideWithEvent}
                  >OK</igc-button
                >`}
          </slot>
        </footer>
      </dialog>
    `}};xa.tagName="igc-dialog",xa.styles=[va],xa.increment=T(),ka([(0,i.IO)("dialog",!0)],xa.prototype,"dialog",void 0),ka([(0,i.Cb)({type:Boolean,attribute:"close-on-escape"})],xa.prototype,"closeOnEscape",void 0),ka([(0,i.Cb)({type:Boolean,attribute:"close-on-outside-click"})],xa.prototype,"closeOnOutsideClick",void 0),ka([(0,i.Cb)({type:Boolean,attribute:"hide-default-action"})],xa.prototype,"hideDefaultAction",void 0),ka([(0,i.Cb)({type:Boolean,reflect:!0})],xa.prototype,"open",void 0),ka([(0,i.Cb)()],xa.prototype,"title",void 0),ka([(0,i.Cb)({attribute:!1})],xa.prototype,"returnValue",void 0),ka([b("open",{waitUntilFirstUpdate:!0})],xa.prototype,"handleOpenState",null),xa=wa=ka([p({bootstrap:ma,material:ya,fluent:ua,indigo:fa}),e=>e],xa);const za=xa;var Ca=a(72767),Da=a(62170),Ia=a(53816);class Sa extends Ia.Xe{constructor(e){if(super(e),this.shiftOptions={mainAxis:!0},this.part=e,e.type!==Ia.pX.ELEMENT)throw new Error("The `igcToggle` directive must be attached to an element tag.")}updatePosition(e,t,a){var i,o;if(this.floatingElement=this.createFloatingElement(t.open),!e)return a&&(a.rendered=Promise.resolve()),r.Jb;const s=(0,Ca.oo)(e,this.floatingElement,{placement:null!==(i=t.placement)&&void 0!==i?i:"bottom-start",strategy:null!==(o=t.positionStrategy)&&void 0!==o?o:"absolute",middleware:this.createMiddleware(t)}).then((({x:e,y:t})=>{Object.assign(this.floatingElement.style,{left:0,top:0,transform:`translate(${e}px,${t}px)`})}));return a&&(a.rendered=s),r.Jb}createFloatingElement(e=!1){return this.floatingElement||(this.floatingElement=this.part.element),this.floatingElement.style.display=e?"":"none",this.floatingElement}createMiddleware(e){const t=[];if(e.distance&&t.push((0,Da.cv)({mainAxis:e.distance})),e.flip&&t.push((0,Da.RR)()),this.shiftOptions&&t.push((0,Da.uY)(this.shiftOptions)),Object.assign(this.floatingElement.style,{width:""}),e.sameWidth){const e=this.floatingElement;t.push((0,Da.dp)({apply({rects:t}){Object.assign(e.style,{width:`${t.reference.width}px`})}}))}return t}render(e,t,a){return this.updatePosition(e,t,a)}}const $a=(0,Ia.XM)(Sa);class Pa{constructor(e,t){this.initialScrollTop=0,this.initialScrollLeft=0,this._abortController=new AbortController,this.blockScroll=e=>{var t,a,r,i;e.preventDefault(),this.sourceElement&&this.sourceElement===e.target||(this.sourceElement=e.target,this.initialScrollTop=null!==(t=this.sourceElement.scrollTop)&&void 0!==t?t:null===(a=this.sourceElement.firstElementChild)||void 0===a?void 0:a.scrollTop,this.initialScrollLeft=null!==(r=this.sourceElement.scrollLeft)&&void 0!==r?r:null===(i=this.sourceElement.firstElementChild)||void 0===i?void 0:i.scrollLeft),this.sourceElement.scrollTop=this.initialScrollTop,this.sourceElement.scrollLeft=this.initialScrollLeft,this.sourceElement.firstElementChild&&(this.sourceElement.firstElementChild.scrollTop=this.initialScrollTop,this.sourceElement.firstElementChild.scrollLeft=this.initialScrollLeft)},this.documentClicked=e=>{if(!this.host.keepOpenOnOutsideClick){const t=e.composed?e.composedPath():[e.target];if(t.includes(this.host)||t.includes(this.target))return;this.hide()}},this.handleScroll=e=>{switch(this.host.scrollStrategy){case"scroll":break;case"block":this.blockScroll(e);break;case"close":this.hide()}},(this.host=e).addController(this),(null==t?void 0:t.target)&&(this._target=t.target),(null==t?void 0:t.closeCallback)&&(this._hide=t.closeCallback),this.update()}get abortController(){return this._abortController.signal.aborted&&(this._abortController=new AbortController),this._abortController}set target(e){this._target=e,this.update()}get target(){return this._target}hostDisconnected(){this.abortController.abort()}update(){this.toggleDirective=$a(this.target,this.host,this),this.configureListeners()}hide(){this._hide?this._hide():this.host.hide()}addEventListeners(){const e={capture:!0,signal:this.abortController.signal};this.host.keepOpenOnOutsideClick||document.addEventListener("click",this.documentClicked,e),document.addEventListener("scroll",this.handleScroll,e)}configureListeners(){this.host.open?this.addEventListeners():this.abortController.abort()}}const Ma=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */
:host {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-family: var(--ig-font-family);
}

[part=base] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
  overflow-y: auto;
  overflow-x: hidden;
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
  -webkit-box-shadow: var(--ig-elevation-8);
          box-shadow: var(--ig-elevation-8);
  min-width: 7rem;
  padding: 0.5rem 0;
  z-index: 10005;
}

:host([size=small]) {
  --component-size: var(--ig-size, var(--ig-size-small));
}

:host([size=medium]) {
  --component-size: var(--ig-size, var(--ig-size-medium));
}

:host([size=large]) {
  --component-size: var(--ig-size, var(--ig-size-large));
}`,Ea=r.iv`/* stylelint-disable max-line-length */
[part=base] {
  -webkit-box-shadow: none;
          box-shadow: none;
  border: 1px solid var(--border-color, hsla(var(--ig-gray-300), var(--ig-gray-a)));
}`,Ta=r.iv`/* stylelint-disable max-line-length */
[part=base] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.125rem), 0.125rem);
  -webkit-box-shadow: var(--ig-elevation-4);
          box-shadow: var(--ig-elevation-4);
  padding: 0;
}`,Oa=r.iv`/* stylelint-disable max-line-length */
[part=base] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.125rem), 0.125rem);
  -webkit-box-shadow: var(--ig-elevation-3);
          box-shadow: var(--ig-elevation-3);
  padding: 0;
}`,Va=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */
:host {
  pointer-events: auto;
}
:host ::slotted([slot=label]) {
  font-family: var(--ig-overline-font-family);
  font-size: var(--ig-overline-font-size);
  font-weight: var(--ig-overline-font-weight);
  font-style: var(--ig-overline-font-style);
  line-height: var(--ig-overline-line-height);
  letter-spacing: var(--ig-overline-letter-spacing);
  text-transform: var(--ig-overline-text-transform);
  margin-top: var(--ig-overline-margin-top);
  margin-bottom: var(--ig-overline-margin-bottom);
  white-space: nowrap;
  -o-text-overflow: ellipsis;
     text-overflow: ellipsis;
  overflow: hidden;
  display: block;
  white-space: nowrap;
  position: relative;
  color: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  pointer-events: none;
  padding-inline: max(var(--is-large, 1) * 16px * var(--ig-spacing-inline-large, var(--ig-spacing-inline, --ig-spacing)), var(--is-medium, 1) * 8px * var(--ig-spacing-inline-medium, var(--ig-spacing-inline, --ig-spacing)), var(--is-small, 1) * 4px * var(--ig-spacing-inline-small, var(--ig-spacing-inline, --ig-spacing)));
  padding-block: max(var(--is-large, 1) * 8px * var(--ig-spacing-block-large, var(--ig-spacing-block, --ig-spacing)), var(--is-medium, 1) * 4px * var(--ig-spacing-block-medium, var(--ig-spacing-block, --ig-spacing)), var(--is-small, 1) * 2px * var(--ig-spacing-block-small, var(--ig-spacing-block, --ig-spacing)));
}`,Ra=r.iv`/* stylelint-disable max-line-length */
:host ::slotted([slot=label]) {
  padding: max(var(--is-large, 1) * 8px * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * 4px * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * 2px * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}`;var Aa=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};let Fa=class extends r.oi{connectedCallback(){super.connectedCallback(),this.setAttribute("role","group"),this.parent=this.getParent()}getParent(){return this.closest("igc-dropdown")}render(){var e,t;return this.setAttribute("size",null!==(t=null===(e=this.parent)||void 0===e?void 0:e.size)&&void 0!==t?t:"large"),r.dy`
      <label part="label"><slot name="label"></slot></label>
      <slot></slot>
    `}};Fa.tagName="igc-dropdown-group",Fa.styles=Va,Aa([(e,t)=>{},(0,i.NH)({flatten:!0,selector:"igc-dropdown-item"})],Fa.prototype,"items",void 0),Fa=Aa([p({fluent:Ra})],Fa);const La=Fa,ja=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */
:host {
  font-family: var(--ig-overline-font-family);
  font-size: var(--ig-overline-font-size);
  font-weight: var(--ig-overline-font-weight);
  font-style: var(--ig-overline-font-style);
  line-height: var(--ig-overline-line-height);
  letter-spacing: var(--ig-overline-letter-spacing);
  text-transform: var(--ig-overline-text-transform);
  margin-top: var(--ig-overline-margin-top);
  margin-bottom: var(--ig-overline-margin-bottom);
  white-space: nowrap;
  -o-text-overflow: ellipsis;
     text-overflow: ellipsis;
  overflow: hidden;
  display: block;
  white-space: nowrap;
  position: relative;
  color: var(--header-color, hsla(var(--ig-secondary-500), var(--ig-secondary-a)));
  pointer-events: none;
  padding-inline: max(var(--is-large, 1) * 16px * var(--ig-spacing-inline-large, var(--ig-spacing-inline, --ig-spacing)), var(--is-medium, 1) * 8px * var(--ig-spacing-inline-medium, var(--ig-spacing-inline, --ig-spacing)), var(--is-small, 1) * 4px * var(--ig-spacing-inline-small, var(--ig-spacing-inline, --ig-spacing)));
  padding-block: max(var(--is-large, 1) * 8px * var(--ig-spacing-block-large, var(--ig-spacing-block, --ig-spacing)), var(--is-medium, 1) * 4px * var(--ig-spacing-block-medium, var(--ig-spacing-block, --ig-spacing)), var(--is-small, 1) * 2px * var(--ig-spacing-block-small, var(--ig-spacing-block, --ig-spacing)));
}

::slotted(*) {
  font: inherit;
}`,_a=r.iv`/* stylelint-disable max-line-length */
:host {
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}`,Xa=r.iv`/* stylelint-disable max-line-length */
:host {
  padding: max(var(--is-large, 1) * 8px * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * 4px * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * 2px * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}`;let Ba=class extends r.oi{render(){return r.dy`<slot></slot>`}};Ba.tagName="igc-dropdown-header",Ba.styles=ja,Ba=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s}([p({bootstrap:_a,fluent:Xa})],Ba);const Na=Ba,Ya=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */
:host {
  font-family: var(--ig-body-2-font-family);
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  width: 100%;
  white-space: nowrap;
  position: relative;
  cursor: pointer;
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
  outline-style: none;
  padding-inline: max(var(--is-large, 1) * 24px * var(--ig-spacing-inline-large, var(--ig-spacing-inline, --ig-spacing)), var(--is-medium, 1) * 12px * var(--ig-spacing-inline-medium, var(--ig-spacing-inline, --ig-spacing)), var(--is-small, 1) * 6px * var(--ig-spacing-inline-small, var(--ig-spacing-inline, --ig-spacing)));
  padding-block: max(var(--is-large, 1) * 8px * var(--ig-spacing-block-large, var(--ig-spacing-block, --ig-spacing)), var(--is-medium, 1) * 4px * var(--ig-spacing-block-medium, var(--ig-spacing-block, --ig-spacing)), var(--is-small, 1) * 2px * var(--ig-spacing-block-small, var(--ig-spacing-block, --ig-spacing)));
}

:host(:hover),
:host([active]) {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
}

:host([selected]) {
  background: hsla(var(--ig-secondary-100), var(--ig-secondary-a));
  color: var(--ig-secondary-100-contrast);
}

:host([selected]:hover),
:host([selected][active]) {
  background: hsla(var(--ig-secondary-200), var(--ig-secondary-a));
  color: var(--ig-secondary-200-contrast);
}

:host([disabled]) {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
  cursor: default;
  pointer-events: none;
}

::slotted(*) {
  font: inherit;
}

[part=content] {
  white-space: nowrap;
  -o-text-overflow: ellipsis;
     text-overflow: ellipsis;
  overflow: hidden;
  display: block;
  width: 100%;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

[part=prefix],
[part=suffix] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

[name=prefix]::slotted(*) {
  -webkit-margin-end: max(var(--is-large, 1) * 16px * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * 16px * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * 16px * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
          margin-inline-end: max(var(--is-large, 1) * 16px * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * 16px * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * 16px * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}

[name=suffix]::slotted(*) {
  -webkit-margin-start: max(var(--is-large, 1) * 16px * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * 16px * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * 16px * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
          margin-inline-start: max(var(--is-large, 1) * 16px * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * 16px * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * 16px * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}`,Ua=r.iv`/* stylelint-disable max-line-length */
:host {
  color: var(--item-color, hsla(var(--ig-gray-900), var(--ig-gray-a)));
}

:host(:hover),
:host([active]) {
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
  color: var(--hover-item-color, var(--ig-gray-100-contrast));
}

:host([selected]) {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  color: var(--ig-primary-600-contrast);
}

:host([selected]:hover),
:host([selected][active]) {
  background: hsla(var(--ig-primary-600), var(--ig-primary-a));
  color: var(--ig-primary-600-contrast);
}

:host([disabled]) {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}`,Ha=r.iv`/* stylelint-disable max-line-length */
:host {
  padding: max(var(--is-large, 1) * 8px * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * 4px * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * 2px * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}

:host(:hover),
:host([active]) {
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
  color: var(--ig-gray-100-contrast);
}

:host([selected]) {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
  color: var(--selected-item-color, var(--ig-gray-200-contrast));
}

:host([selected]:hover),
:host([selected][active]) {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
  color: var(--selected-item-color, var(--ig-gray-200-contrast));
}

:host([disabled]) {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}`,Wa=r.iv`/* stylelint-disable max-line-length */
:host {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.125rem), 0.125rem);
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}

:host(:hover),
:host([active]) {
  background: hsla(var(--ig-primary-500), 0.15);
}

:host([selected]) {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  color: var(--ig-primary-500-contrast);
}

:host([selected]:hover),
:host([selected][active]) {
  background: hsla(var(--ig-primary-400), var(--ig-primary-a));
  color: var(--ig-primary-400-contrast);
}

:host([disabled]) {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}`;var Ka=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};let qa=class extends r.oi{constructor(){super(...arguments),this.selected=!1,this.active=!1,this.disabled=!1}get value(){var e;return this._value?this._value:null!==(e=this.textContent)&&void 0!==e?e:""}set value(e){const t=this._value;this._value=e,this.requestUpdate("value",t)}selectedChange(){this.selected?this.setAttribute("aria-selected","true"):this.removeAttribute("aria-selected"),this.active=this.selected}disabledChange(){this.disabled?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option")}render(){return r.dy`
      <section part="prefix"><slot name="prefix"></slot></section>
      <section part="content"><slot></slot></section>
      <section part="suffix"><slot name="suffix"></slot></section>
    `}};qa.tagName="igc-dropdown-item",qa.styles=Ya,Ka([(0,i.Cb)({type:String})],qa.prototype,"value",null),Ka([(0,i.Cb)({type:Boolean,reflect:!0})],qa.prototype,"selected",void 0),Ka([(0,i.Cb)({type:Boolean,reflect:!0})],qa.prototype,"active",void 0),Ka([(0,i.Cb)({type:Boolean,reflect:!0})],qa.prototype,"disabled",void 0),Ka([b("selected")],qa.prototype,"selectedChange",null),Ka([b("disabled")],qa.prototype,"disabledChange",null),qa=Ka([p({bootstrap:Ua,fluent:Ha,indigo:Wa})],qa);const Ga=qa;var Za=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};x(La,Na,Ga);let Qa=class extends(v(z(r.oi))){constructor(){super(),this.keyDownHandlers=new Map(Object.entries({Escape:this.onEscapeKey,Enter:this.onEnterKey,ArrowUp:this.onArrowUpKeyDown,ArrowDown:this.onArrowDownKeyDown,ArrowLeft:this.onArrowUpKeyDown,ArrowRight:this.onArrowDownKeyDown,Home:this.onHomeKey,End:this.onEndKey})),this.keepOpenOnSelect=!1,this.open=!1,this.placement="bottom-start",this.positionStrategy="absolute",this.scrollStrategy="scroll",this.flip=!1,this.distance=0,this.keepOpenOnOutsideClick=!1,this.sameWidth=!1,this.handleKeyDown=e=>{var t;const a=e.composedPath();(a.includes(this.target)||a.includes(this.content))&&this.keyDownHandlers.has(e.key)&&(e.preventDefault(),e.stopPropagation(),null===(t=this.keyDownHandlers.get(e.key))||void 0===t||t.call(this))},this.handleTargetClick=async()=>{if(this.open)this._hide();else{if(!this.handleOpening())return;this.show(),await this.updateComplete,this.emitEvent("igcOpened")}},this.toggleController=new Pa(this,{target:this.target,closeCallback:()=>this._hide()})}get allItems(){return[...this.items,...this.groups.flatMap((e=>e.items))]}toggleDirectiveChange(){var e;this.target&&(this.toggleController.target=this.target,this.open?(document.addEventListener("keydown",this.handleKeyDown),this.target.addEventListener("focusout",this.handleFocusout),this.selectedItem=null!==(e=this.allItems.find((e=>e.selected)))&&void 0!==e?e:null):(document.removeEventListener("keydown",this.handleKeyDown),this.target.removeEventListener("focusout",this.handleFocusout)),this.target.setAttribute("aria-expanded",this.open?"true":"false"))}updateOptions(){this.toggleController&&this.toggleController.update()}sizeChange(){this.groups.forEach((e=>e.requestUpdate()))}async firstUpdated(){this.targetNodes.length&&(this.target=this.targetNodes[0],this.target.setAttribute("aria-haspopup","listbox")),await this.updateComplete,this.setInitialSelection()}async getUpdateComplete(){const e=await super.getUpdateComplete();return await this.toggleController.rendered,e}setInitialSelection(){const e=this.allItems.filter((e=>e.selected)).at(-1);this.allItems.forEach((e=>e.selected=!1)),e&&this.selectItem(e,!1)}onHomeKey(){this.navigateTo(this.allItems.filter((e=>!e.disabled)).at(0).value)}onEndKey(){this.navigateTo(this.allItems.filter((e=>!e.disabled)).at(-1).value)}onEscapeKey(){this._hide()}onEnterKey(){this.selectItem(this.activeItem)}handleClick(e){const t=e.composedPath().find((e=>e instanceof Ga));t&&!t.disabled&&this.selectItem(t)}handleOpening(){return this.emitEvent("igcOpening",{cancelable:!0})}handleClosing(){return this.emitEvent("igcClosing",{cancelable:!0})}handleChange(e){const t={detail:e};this.emitEvent("igcChange",t)}handleSlotChange(){this.target&&this.target.setAttribute("aria-expanded",this.open?"true":"false")}handleFocusout(e){e.preventDefault(),e.target.focus()}getItem(e){let t,a=-1;return this.allItems.find(((r,i)=>{r.value===e&&(t=r,a=i)})),{item:t,index:a}}activateItem(e){e&&(this.activeItem&&(this.activeItem.active=!1),this.activeItem=e,this.activeItem.active=!0)}selectItem(e,t=!0){return e?(this.selectedItem&&(this.selectedItem.selected=!1),this.activateItem(e),this.selectedItem=e,this.selectedItem.selected=!0,t&&this.handleChange(this.selectedItem),t&&!this.keepOpenOnSelect&&this._hide(),this.selectedItem):null}navigate(e,t){var a;let r=-1;this.activeItem&&(r=t||(null!==(a=[...this.allItems].indexOf(this.activeItem))&&void 0!==a?a:r));const i=this.getNearestSiblingFocusableItemIndex(r,e);this.navigateItem(i)}navigateItem(e){if(!this.allItems)return null;if(e<0||e>=this.allItems.length)return null;const t=this.allItems[e];return this.activateItem(t),this.scrollToHiddenItem(t),t}scrollToHiddenItem(e){const t=e.getBoundingClientRect(),a=this.content.getBoundingClientRect();a.top>t.top&&(this.content.scrollTop-=a.top-t.top),a.bottom<t.bottom&&(this.content.scrollTop+=t.bottom-a.bottom)}getNearestSiblingFocusableItemIndex(e,t){let a=e;const r=this.allItems;if(!r)return-1;for(;r[a+t]&&r[a+t].disabled;)a+=t;return a+=t,a>-1&&a<r.length?a:-1}navigateNext(){this.navigate(1)}navigatePrev(){this.navigate(-1)}onArrowDownKeyDown(){this.navigateNext()}onArrowUpKeyDown(){this.navigatePrev()}async _hide(e=!0){this.open&&(e&&!this.handleClosing()||(this.open=!1,e&&(await this.updateComplete,this.emitEvent("igcClosed"))))}show(e){this.open&&!e||(e&&(this.target=e),this.open=!0)}hide(){this._hide(!1)}toggle(e){this.open?this.hide():this.show(e)}navigateTo(e){const t="string"==typeof e?this.getItem(e).index:e;return this.navigateItem(t)}select(e){const t="string"==typeof e?this.getItem(e).item:this.allItems[e];return this.selectItem(t,!1)}clearSelection(){this.selectedItem&&(this.selectedItem.selected=!1),this.selectedItem=null}render(){return r.dy`
      <slot
        id="igcDDLTarget"
        name="target"
        @click=${this.handleTargetClick}
        @slotchange=${this.handleSlotChange}
      >
      </slot>
      <div
        part="base"
        style=${(0,ge.V)({position:this.positionStrategy})}
        @click=${this.handleClick}
        ${this.toggleController.toggleDirective}
      >
        <div role="listbox" part="list" aria-labelledby="igcDDLTarget">
          <slot></slot>
        </div>
      </div>
    `}};Qa.tagName="igc-dropdown",Qa.styles=Ma,Za([(0,i.SB)()],Qa.prototype,"activeItem",void 0),Za([(0,i.NH)({slot:"target"})],Qa.prototype,"targetNodes",void 0),Za([(0,i.IO)('[part="base"]')],Qa.prototype,"content",void 0),Za([(0,i.IO)('[part="list"]')],Qa.prototype,"scrollContainer",void 0),Za([(0,i.NH)({flatten:!0,selector:"igc-dropdown-item"})],Qa.prototype,"items",void 0),Za([(0,i.NH)({flatten:!0,selector:"igc-dropdown-group"})],Qa.prototype,"groups",void 0),Za([(0,i.Cb)({type:Boolean,attribute:"keep-open-on-select"})],Qa.prototype,"keepOpenOnSelect",void 0),Za([(0,i.Cb)({type:Boolean})],Qa.prototype,"open",void 0),Za([(0,i.Cb)()],Qa.prototype,"placement",void 0),Za([(0,i.Cb)({attribute:"position-strategy"})],Qa.prototype,"positionStrategy",void 0),Za([(0,i.Cb)({attribute:"scroll-strategy"})],Qa.prototype,"scrollStrategy",void 0),Za([(0,i.Cb)({type:Boolean})],Qa.prototype,"flip",void 0),Za([(0,i.Cb)({type:Number})],Qa.prototype,"distance",void 0),Za([(0,i.Cb)({type:Boolean,attribute:"keep-open-on-outside-click"})],Qa.prototype,"keepOpenOnOutsideClick",void 0),Za([(0,i.Cb)({type:Boolean,attribute:"same-width"})],Qa.prototype,"sameWidth",void 0),Za([b("open")],Qa.prototype,"toggleDirectiveChange",null),Za([b("placement"),b("flip"),b("positionStrategy"),b("closeOnOutsideClick"),b("distance"),b("sameWidth")],Qa.prototype,"updateOptions",null),Za([b("size")],Qa.prototype,"sizeChange",null),Za([(e,t)=>{}],Qa.prototype,"show",null),Za([(e,t)=>{}],Qa.prototype,"toggle",null),Za([(e,t)=>{}],Qa.prototype,"navigateTo",null),Za([(e,t)=>{}],Qa.prototype,"select",null),Qa=Za([p({bootstrap:Ea,fluent:Ta,indigo:Oa}),e=>e],Qa);const Ja=Qa;var er=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};class tr extends ga{constructor(){super(...arguments),this.value="",this.type="text",this.invalid=!1,this.tabIndex=0}reportValidity(){return this.input.reportValidity()}checkValidity(){return this.input.checkValidity()}setRangeText(e,t,a,r="preserve"){super.setRangeText(e,t,a,r),this.value=this.input.value}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=!this.input.checkValidity()}select(){return this.input.select()}stepUp(e){this.input.stepUp(e),this.handleChange()}stepDown(e){this.input.stepDown(e),this.handleChange()}handleInvalid(){this.invalid=!0}handleInput(){this.value=this.input.value,this.emitEvent("igcInput",{detail:this.value})}handleChange(){this.value=this.input.value,this.emitEvent("igcChange",{detail:this.value})}handleValueChange(){this.updateComplete.then((()=>this.invalid=!this.input.checkValidity()))}renderInput(){return r.dy`
      <input
        id="${this.inputId}"
        part="${$(this.resolvePartNames("input"))}"
        name="${(0,s.o)(this.name)}"
        type="${(0,s.o)(this.type)}"
        pattern="${(0,s.o)(this.pattern)}"
        placeholder="${(0,s.o)(this.placeholder)}"
        .value="${(0,yt.a)(this.value)}"
        ?readonly="${this.readonly}"
        ?disabled="${this.disabled}"
        ?required="${this.required}"
        ?autofocus="${this.autofocus}"
        tabindex=${this.tabIndex}
        autocomplete="${(0,s.o)(this.autocomplete)}"
        inputmode="${(0,s.o)(this.inputmode)}"
        min="${(0,s.o)(this.min)}"
        max="${(0,s.o)(this.max)}"
        minlength="${(0,s.o)(this.minlength)}"
        maxlength="${(0,s.o)(this.maxlength)}"
        step="${(0,s.o)(this.step)}"
        aria-invalid="${this.invalid?"true":"false"}"
        @invalid="${this.handleInvalid}"
        @change="${this.handleChange}"
        @input="${this.handleInput}"
        @focus="${this.handleFocus}"
        @blur="${this.handleBlur}"
      />
    `}}tr.tagName="igc-input",er([(0,i.Cb)(),(e,t)=>{}],tr.prototype,"value",void 0),er([(e,t)=>{},(0,i.Cb)({reflect:!0})],tr.prototype,"type",void 0),er([(0,i.Cb)()],tr.prototype,"inputmode",void 0),er([(0,i.Cb)({type:String})],tr.prototype,"pattern",void 0),er([(0,i.Cb)({reflect:!0,type:Boolean})],tr.prototype,"invalid",void 0),er([(0,i.Cb)({type:Number})],tr.prototype,"minlength",void 0),er([(0,i.Cb)({type:Number})],tr.prototype,"maxlength",void 0),er([(0,i.Cb)()],tr.prototype,"min",void 0),er([(0,i.Cb)()],tr.prototype,"max",void 0),er([(0,i.Cb)({type:Number})],tr.prototype,"step",void 0),er([(0,i.Cb)({type:Boolean})],tr.prototype,"autofocus",void 0),er([(0,i.Cb)()],tr.prototype,"autocomplete",void 0),er([(0,i.Cb)({type:Number})],tr.prototype,"tabIndex",void 0),er([(e,t)=>{}],tr.prototype,"setRangeText",null),er([b("value",{waitUntilFirstUpdate:!0})],tr.prototype,"handleValueChange",null);var ar=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};class rr extends La{constructor(){super(),this.disabled=!1,this.observer=new MutationObserver(this.updateControlledItems.bind(this))}disconnectedCallback(){this.observer.disconnect()}getParent(){return this.closest("igc-select")}async firstUpdated(){await this.updateComplete,this.controlledItems=this.activeItems,this.setAttribute("role","presentation"),this.items.forEach((e=>{this.observer.observe(e,{attributes:!0,attributeFilter:["disabled"]})})),this.updateDisabled()}updateControlledItems(e){e.forEach((e=>{const t=e.target;this.disabled||(this.controlledItems=this.activeItems),this.disabled&&!t.disabled&&(t.disabled=!0)}))}updateDisabled(){var e;this.disabled?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled"),null===(e=this.controlledItems)||void 0===e||e.forEach((e=>e.disabled=this.disabled))}}rr.tagName="igc-select-group",ar([(0,i.NH)({flatten:!0,selector:"igc-select-item"})],rr.prototype,"items",void 0),ar([(0,i.NH)({flatten:!0,selector:"igc-select-item:not([disabled])"})],rr.prototype,"activeItems",void 0),ar([(0,i.Cb)({reflect:!0,type:Boolean})],rr.prototype,"disabled",void 0),ar([b("disabled",{waitUntilFirstUpdate:!0})],rr.prototype,"updateDisabled",null);class ir extends Na{}ir.tagName="igc-select-header";var or=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};class sr extends Ga{constructor(){super()}activeChange(){this.tabIndex=this.active?0:-1,this.active&&this.focus()}get textContent(){return this.content.map((e=>{var t;return null===(t=e.textContent)||void 0===t?void 0:t.trim()})).filter((e=>""!==e)).join(" ")}set textContent(e){const t=new Text(e);this.content.forEach((e=>e.remove())),this.appendChild(t)}}sr.tagName="igc-select-item",or([(0,i.vZ)({flatten:!0})],sr.prototype,"content",void 0),or([b("active")],sr.prototype,"activeChange",null);const nr=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */
:host {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-family: var(--ig-font-family);
}

[part=base] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
  overflow-y: auto;
  overflow-x: hidden;
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
  -webkit-box-shadow: var(--ig-elevation-8);
          box-shadow: var(--ig-elevation-8);
  min-width: 7rem;
  padding: 0.5rem 0;
  z-index: 10005;
}

:host([size=small]) {
  --component-size: var(--ig-size, var(--ig-size-small));
}

:host([size=medium]) {
  --component-size: var(--ig-size, var(--ig-size-medium));
}

:host([size=large]) {
  --component-size: var(--ig-size, var(--ig-size-large));
}

:host {
  display: block;
}
:host ::slotted([slot=helper-text]) {
  font-family: var(--ig-caption-font-family);
  font-size: var(--ig-caption-font-size);
  font-weight: var(--ig-caption-font-weight);
  font-style: var(--ig-caption-font-style);
  line-height: var(--ig-caption-line-height);
  letter-spacing: var(--ig-caption-letter-spacing);
  text-transform: var(--ig-caption-text-transform);
  margin-top: var(--ig-caption-margin-top);
  margin-bottom: var(--ig-caption-margin-bottom);
  color: hsla(var(--ig-gray-600), var(--ig-gray-a));
}

[role=combobox] {
  outline-style: none;
}

:host([disabled]) ::slotted([slot=helper-text]) {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}
:host([disabled]) [role=combobox] {
  pointer-events: none;
}

igc-input {
  cursor: pointer;
}

igc-input::part(input) {
  cursor: pointer;
}
igc-input::part(input)::-moz-selection {
  background: transparent;
}
igc-input::part(input)::selection {
  background: transparent;
}

[name=prefix]::slotted(*),
[name=suffix]::slotted(*) {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}`,lr=r.iv`/* stylelint-disable max-line-length */
:host ::slotted([slot=helper-text]) {
  font-family: var(--ig-body-2-font-family);
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}

:host([disabled]) ::slotted([slot=helper-text]) {
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}

:host(:focus-within) igc-input[readonly]:not([disabled])::part(input) {
  -webkit-box-shadow: 0 0 0 0.25rem hsla(var(--ig-primary-500), 0.38);
          box-shadow: 0 0 0 0.25rem hsla(var(--ig-primary-500), 0.38);
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}

:host([invalid]) igc-input[readonly]:not([disabled])::part(input),
:host([invalid]:focus-within) igc-input[readonly]:not([disabled])::part(input) {
  -webkit-box-shadow: 0 0 0 0.25rem hsla(var(--ig-error-500), 0.38);
          box-shadow: 0 0 0 0.25rem hsla(var(--ig-error-500), 0.38);
  border-color: hsla(var(--ig-error-500), var(--ig-error-a));
}

igc-input[readonly]:not([disabled])::part(prefix),
igc-input[readonly]:not([disabled])::part(suffix) {
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
  background: hsla(var(--ig-gray-300), var(--ig-gray-a));
}

igc-input[readonly]:not([disabled])::part(prefix),
igc-input[readonly]:not([disabled])::part(suffix),
igc-input[readonly]:not([disabled])::part(container) {
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
}

igc-input[readonly]:not([disabled])::part(container) {
  background: var(--input-background, #fff);
}

igc-input[readonly]:not([disabled])::part(input) {
  border-color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}

igc-input[disabled] {
  pointer-events: none;
}

igc-input[disabled]::part(prefix),
igc-input[disabled]::part(suffix),
igc-input[disabled]::part(container) {
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}

igc-input[disabled]::part(prefix),
igc-input[disabled]::part(suffix),
igc-input[disabled]::part(input) {
  border-color: hsla(var(--ig-gray-300), var(--ig-gray-a));
}`,cr=r.iv`/* stylelint-disable max-line-length */
:host {
  --size: max(var(--is-large, 1) * 3rem, var(--is-medium, 1) * 2.5rem, var(--is-small, 1) * 2rem);
}

:host(:focus-within) igc-input[readonly]:not([disabled])::part(container) {
  border-width: 0.125rem;
}

:host(:not([invalid]):focus-within) igc-input[readonly]:not([disabled])::part(container) {
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  border-width: 0.125rem;
}
:host(:not([invalid]):focus-within) igc-input[readonly]:not([disabled])::part(prefix) {
  -webkit-margin-start: -0.0625rem;
          margin-inline-start: -0.0625rem;
}
:host(:not([invalid]):focus-within) igc-input[readonly]:not([disabled])::part(suffix) {
  -webkit-margin-end: -0.0625rem;
          margin-inline-end: -0.0625rem;
}
:host(:not([invalid]):focus-within) igc-input[readonly]:not([disabled])::part(input) {
  height: calc(var(--size) - 0.25rem);
}`,gr=r.iv`/* stylelint-disable max-line-length */
:host ::slotted([slot=helper-text]) {
  color: hsla(var(--ig-gray-600), var(--ig-gray-a));
}

:host([disabled]) ::slotted([slot=helper-text]) {
  color: hsla(var(--ig-gray-300), var(--ig-gray-a));
}

:host(:focus-within) igc-input[readonly]:not([disabled])::part(container)::after {
  -webkit-transform: scaleY(1);
      -ms-transform: scaleY(1);
          transform: scaleY(1);
}

:host(:not([invalid]):focus-within) igc-input[readonly]:not([disabled])::part(container) {
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
}
:host(:not([invalid]):focus-within) igc-input[readonly]:not([disabled])::part(label) {
  color: var(--label-focus-color, hsla(var(--ig-primary-500), var(--ig-primary-a)));
}`,dr=r.iv`/* stylelint-disable max-line-length */
:host([outlined]:focus-within) igc-input[readonly]:not([disabled])::part(start) {
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  border-inline-start-width: 0.125rem;
  border-block-start-width: 0.125rem;
  border-block-end-width: 0.125rem;
}
:host([outlined]:focus-within) igc-input[readonly]:not([disabled])::part(notch) {
  border-width: 0.125rem;
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  border-top: 0.0625rem solid transparent;
}
:host([outlined]:focus-within) igc-input[readonly]:not([disabled])::part(filler) {
  border-width: 0.125rem;
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}
:host([outlined]:focus-within) igc-input[readonly]:not([disabled])::part(end) {
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  border-inline-end-width: 0.125rem;
  border-block-start-width: 0.125rem;
  border-block-end-width: 0.125rem;
}
:host([outlined]:focus-within) igc-input[readonly]:not([disabled])::part(label) {
  color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}

:host([outlined][invalid]:focus-within) igc-input[readonly]:not([disabled])::part(start) {
  border-color: hsla(var(--ig-error-500), var(--ig-error-a));
  border-inline-start-width: 0.125rem;
  border-block-start-width: 0.125rem;
  border-block-end-width: 0.125rem;
}
:host([outlined][invalid]:focus-within) igc-input[readonly]:not([disabled])::part(notch) {
  border-width: 0.125rem;
  border-color: hsla(var(--ig-error-500), var(--ig-error-a));
  border-top: 0.0625rem solid transparent;
}
:host([outlined][invalid]:focus-within) igc-input[readonly]:not([disabled])::part(filler) {
  border-width: 0.125rem;
  border-color: hsla(var(--ig-error-500), var(--ig-error-a));
}
:host([outlined][invalid]:focus-within) igc-input[readonly]:not([disabled])::part(end) {
  border-color: hsla(var(--ig-error-500), var(--ig-error-a));
  border-inline-end-width: 0.125rem;
  border-block-start-width: 0.125rem;
  border-block-end-width: 0.125rem;
}
:host([outlined][invalid]:focus-within) igc-input[readonly]:not([disabled])::part(label) {
  color: hsla(var(--ig-error-500), var(--ig-error-a));
}

:host(:not([outlined]):focus-within) igc-input[readonly]:not([disabled])::part(container) {
  background: var(--focus-background, hsla(var(--ig-gray-300), var(--ig-gray-a)));
  border-bottom: hsla(var(--ig-primary-500), var(--ig-primary-a));
}
:host(:not([outlined]):focus-within) igc-input[readonly]:not([disabled])::part(container)::after {
  -webkit-transform: scaleX(1);
      -ms-transform: scaleX(1);
          transform: scaleX(1);
  opacity: 1;
}`;var hr=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};x(X,tr,rr,ir,sr);let pr=class extends(z(Ja)){constructor(){super(),this.searchTerm="",this.lastKeyTime=Date.now(),this.targetKeyHandlers=new Map(Object.entries({" ":this.onTargetEnterKey,Tab:this.onTargetTabKey,Escape:this.onEscapeKey,Enter:this.onTargetEnterKey,ArrowLeft:this.onTargetArrowLeftKeyDown,ArrowRight:this.onTargetArrowRightKeyDown,ArrowUp:this.onTargetArrowUpKeyDown,ArrowDown:this.onTargetArrowDownKeyDown,Home:this.onTargetHomeKey,End:this.onTargetEndKey})),this.disabled=!1,this.required=!1,this.invalid=!1,this.outlined=!1,this.sameWidth=!0,this.dir="auto",this.size="medium",this.addEventListener("igcChange",(()=>{this.open&&this.target.focus()}))}handleFocusout(){}focus(e){this.target.focus(e)}blur(){this.target.blur()}reportValidity(){return this.invalid=this.required&&!this.value,this.invalid&&this.target.focus(),!this.invalid}checkValidity(){return this.reportValidity()}async firstUpdated(){super.firstUpdated(),await this.updateComplete,!this.selectedItem&&this.value&&this.updateSelected(),this.autofocus&&this.target.focus()}updateValue(){var e;this.value=null===(e=this.selectedItem)||void 0===e?void 0:e.value}updateSelected(){var e;if(0!==this.allItems.length&&(null===(e=this.selectedItem)||void 0===e?void 0:e.value)!==this.value){const e=this.allItems.filter((e=>e.value===this.value)),t=this.allItems.indexOf(e.at(-1));if(-1===t)return this.value=void 0,void this.clearSelection();this.select(t)}}validate(){this.updateComplete.then((()=>this.reportValidity()))}selectNext(){var e;const t=[...this.allItems].indexOf(null!==(e=this.selectedItem)&&void 0!==e?e:this.activeItem),a=this.getNearestSiblingFocusableItemIndex(null!=t?t:-1,1);this.selectItem(this.allItems[a],!0)}selectPrev(){var e;const t=[...this.allItems].indexOf(null!==(e=this.selectedItem)&&void 0!==e?e:this.activeItem),a=this.getNearestSiblingFocusableItemIndex(null!=t?t:-1,-1);this.selectItem(this.allItems[a],!0)}selectInteractiveItem(e){const t=this.allItems.filter((e=>!e.disabled)).at(e);t.value!==this.value&&this.selectItem(t,!0)}searchItem(e){if(!/^.$/u.test(e.key))return;const t=Date.now();t-this.lastKeyTime>500&&(this.searchTerm=""),this.searchTerm+=e.key,this.lastKeyTime=t;const a=this.allItems.filter((e=>!e.disabled)).find((e=>{var t;return null===(t=e.textContent)||void 0===t?void 0:t.trim().toLowerCase().startsWith(this.searchTerm.toLowerCase())}));a&&this.value!==a.value&&(this.open?this.activateItem(a):this.selectItem(a))}handleFocus(){this.open||this.emitEvent("igcFocus")}handleBlur(){this.open||this.emitEvent("igcBlur")}onTargetTabKey(){this.target.blur(),this.open&&this.hide()}onTargetEnterKey(){this.open?this.onEnterKey():this.target.click()}onTargetArrowLeftKeyDown(){this.open?this.onArrowUpKeyDown():this.selectPrev()}onTargetArrowRightKeyDown(){this.open?this.onArrowDownKeyDown():this.selectNext()}onTargetArrowUpKeyDown(e){e.altKey?this.toggle():this.open?this.onArrowUpKeyDown():this.selectPrev()}onTargetArrowDownKeyDown(e){e.altKey?this.toggle():this.open?this.onArrowDownKeyDown():this.selectNext()}onTargetHomeKey(){this.open?this.onHomeKey():this.selectInteractiveItem(0)}onTargetEndKey(){this.open?this.onEndKey():this.selectInteractiveItem(-1)}handleTargetKeyDown(e){var t;e.stopPropagation(),this.targetKeyHandlers.has(e.key)?(e.preventDefault(),null===(t=this.targetKeyHandlers.get(e.key))||void 0===t||t.call(this,e)):this.searchItem(e)}get hasPrefixes(){return this.inputPrefix.length>0}get hasSuffixes(){return this.inputSuffix.length>0}render(){var e,t;return r.dy`
      <div
        role="combobox"
        tabindex=${this.disabled?-1:0}
        aria-owns="dropdown"
        aria-describedby="helper-text"
        aria-disabled=${this.disabled}
        @focusin=${this.handleFocus}
        @focusout=${this.handleBlur}
        @keydown=${this.handleTargetKeyDown}
        @click=${this.handleTargetClick}
      >
        <igc-input
          id="input"
          readonly
          exportparts="container: input, input: native-input, label, prefix, suffix"
          value=${(0,s.o)(null===(t=null===(e=this.selectedItem)||void 0===e?void 0:e.textContent)||void 0===t?void 0:t.trim())}
          placeholder=${(0,s.o)(this.placeholder)}
          label=${(0,s.o)(this.label)}
          size=${this.size}
          dir=${this.dir}
          tabindex="-1"
          .disabled="${this.disabled}"
          .required=${this.required}
          .invalid=${this.invalid}
          .outlined=${this.outlined}
          @igcBlur=${e=>e.stopPropagation()}
          @igcFocus=${e=>e.stopPropagation()}
        >
          <span slot=${this.hasPrefixes?"prefix":""}>
            <slot name="prefix"></slot>
          </span>
          <span slot=${this.hasSuffixes?"suffix":""}>
            <slot name="suffix"></slot>
          </span>
          <span slot="suffix" part="toggle-icon" style="display: flex">
            <slot name="toggle-icon">
              <igc-icon
                size=${this.size}
                name=${this.open?"keyboard_arrow_up":"keyboard_arrow_down"}
                collection="internal"
                aria-hidden="true"
              ></igc-icon>
            </slot>
          </span>
        </igc-input>
      </div>
      <div
        id="helper-text"
        part="helper-text"
        ?hidden="${0===this.helperText.length}"
      >
        <slot name="helper-text"></slot>
      </div>
      <div
        part="base"
        style=${(0,ge.V)({position:this.positionStrategy})}
        @click=${this.handleClick}
        ${this.toggleController.toggleDirective}
      >
        <div id="dropdown" role="listbox" part="list" aria-labelledby="input">
          <slot name="header"></slot>
          <slot></slot>
          <slot name="footer"></slot>
        </div>
      </div>
    `}};pr.tagName="igc-select",pr.styles=nr,hr([(0,i.NH)({flatten:!0,selector:"igc-select-item"})],pr.prototype,"items",void 0),hr([(0,i.NH)({flatten:!0,selector:"igc-select-group"})],pr.prototype,"groups",void 0),hr([(0,i.NH)({slot:"helper-text"})],pr.prototype,"helperText",void 0),hr([(0,i.NH)({slot:"suffix"})],pr.prototype,"inputSuffix",void 0),hr([(0,i.NH)({slot:"prefix"})],pr.prototype,"inputPrefix",void 0),hr([(0,i.SB)()],pr.prototype,"selectedItem",void 0),hr([(0,i.IO)('div[role="combobox"]')],pr.prototype,"target",void 0),hr([(0,i.Cb)({reflect:!1,type:String})],pr.prototype,"value",void 0),hr([(0,i.Cb)()],pr.prototype,"name",void 0),hr([(0,i.Cb)({reflect:!0,type:Boolean})],pr.prototype,"disabled",void 0),hr([(0,i.Cb)({reflect:!0,type:Boolean})],pr.prototype,"required",void 0),hr([(0,i.Cb)({reflect:!0,type:Boolean})],pr.prototype,"invalid",void 0),hr([(0,i.Cb)({reflect:!0,type:Boolean})],pr.prototype,"outlined",void 0),hr([(0,i.Cb)({type:Boolean})],pr.prototype,"autofocus",void 0),hr([(0,i.Cb)({type:String})],pr.prototype,"label",void 0),hr([(0,i.Cb)({type:String})],pr.prototype,"placeholder",void 0),hr([(0,i.Cb)({type:Boolean,attribute:"same-width"})],pr.prototype,"sameWidth",void 0),hr([(0,i.Cb)({reflect:!0})],pr.prototype,"dir",void 0),hr([b("selectedItem")],pr.prototype,"updateValue",null),hr([b("value")],pr.prototype,"updateSelected",null),hr([b("value")],pr.prototype,"validate",null),pr=hr([p({bootstrap:lr,material:dr,fluent:cr,indigo:gr}),e=>e],pr);const br=pr,vr=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */
:host {
  --icon-size: max(var(--is-large, 1) * 1.5rem, var(--is-medium, 1) * 1.25rem, var(--is-small, 1) * 1rem);
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  vertical-align: middle;
}

::slotted(:not(igc-ripple)) {
  --icon-size: max(var(--is-large, 1) * 1.5rem, var(--is-medium, 1) * 1.25rem, var(--is-small, 1) * 1rem);
  font-size: var(--icon-size) !important;
  vertical-align: middle;
  pointer-events: none;
}

[part=base] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 50%), 50%);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  border: none;
  outline-style: none;
  background: transparent;
  padding: max(var(--is-large, 1) * 6px * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * 5px * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * 4px * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  -webkit-transition: background 0.15s ease-out, -webkit-box-shadow 0.2s ease-in;
  transition: background 0.15s ease-out, -webkit-box-shadow 0.2s ease-in;
  -o-transition: box-shadow 0.2s ease-in, background 0.15s ease-out;
  transition: box-shadow 0.2s ease-in, background 0.15s ease-out;
  transition: box-shadow 0.2s ease-in, background 0.15s ease-out, -webkit-box-shadow 0.2s ease-in;
  -webkit-transition-delay: 0.05s;
       -o-transition-delay: 0.05s;
          transition-delay: 0.05s;
  font-size: var(--icon-size);
  line-height: 1;
}

:host([size=small]) {
  --component-size: var(--ig-size, var(--ig-size-small));
}

:host([size=medium]) {
  --component-size: var(--ig-size, var(--ig-size-medium));
}

:host([size=large]) {
  --component-size: var(--ig-size, var(--ig-size-large));
}

:host([disabled]) {
  pointer-events: none;
}`,mr=r.iv`/* stylelint-disable max-line-length */
:host {
  --size: max(var(--is-large, 1) * 3rem, var(--is-medium, 1) * 2.375rem, var(--is-small, 1) * 1.9375rem);
}

[part=base] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
  width: var(--size);
  height: var(--size);
  -webkit-transition: color 0.15s ease-out, background 0.15s ease-out, -webkit-box-shadow 0.15s ease-out;
  transition: color 0.15s ease-out, background 0.15s ease-out, -webkit-box-shadow 0.15s ease-out;
  -o-transition: box-shadow 0.15s ease-out, color 0.15s ease-out, background 0.15s ease-out;
  transition: box-shadow 0.15s ease-out, color 0.15s ease-out, background 0.15s ease-out;
  transition: box-shadow 0.15s ease-out, color 0.15s ease-out, background 0.15s ease-out, -webkit-box-shadow 0.15s ease-out;
  color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  padding: max(var(--is-large, 1) * 12px * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * 9px * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * 7.5px * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}
[part=base]:hover {
  color: hsla(var(--ig-primary-800), var(--ig-primary-a));
}
[part=base]:focus, [part=base]:active {
  color: hsla(var(--ig-primary-600), var(--ig-primary-a));
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
  -webkit-box-shadow: none;
          box-shadow: none;
}

:host([variant=contained]) [part=base] {
  color: var(--ig-primary-600-contrast);
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
}
:host([variant=contained]) [part=base]:hover {
  background: hsla(var(--ig-primary-600), var(--ig-primary-a));
}
:host([variant=contained]) [part=base]:focus, :host([variant=contained]) [part=base]:active {
  background: hsla(var(--ig-primary-600), var(--ig-primary-a));
  -webkit-box-shadow: 0 0 0 0.25rem hsla(var(--ig-primary-200), 0.5);
          box-shadow: 0 0 0 0.25rem hsla(var(--ig-primary-200), 0.5);
}

:host([variant=outlined]) [part=base] {
  -webkit-box-shadow: 0 0 0 0.0625rem hsla(var(--ig-primary-500), var(--ig-primary-a));
          box-shadow: 0 0 0 0.0625rem hsla(var(--ig-primary-500), var(--ig-primary-a));
}
:host([variant=outlined]) [part=base]:hover {
  color: var(--ig-primary-600-contrast);
  background: hsla(var(--ig-primary-600), var(--ig-primary-a));
}
:host([variant=outlined]) [part=base]:focus, :host([variant=outlined]) [part=base]:active {
  color: var(--ig-primary-600-contrast);
  background: hsla(var(--ig-primary-600), var(--ig-primary-a));
  -webkit-box-shadow: 0 0 0 0.25rem hsla(var(--ig-primary-200), 0.5);
          box-shadow: 0 0 0 0.25rem hsla(var(--ig-primary-200), 0.5);
}

:host([disabled]) [part=base] {
  color: hsla(var(--ig-primary-100), var(--ig-primary-a));
  background: transparent;
}

:host([disabled][variant=contained]) [part=base] {
  background: hsla(var(--ig-primary-100), var(--ig-primary-a));
  color: hsla(var(--ig-primary-300), var(--ig-primary-a));
}

:host([disabled][variant=outlined]) [part=base] {
  color: hsla(var(--ig-primary-100), var(--ig-primary-a));
  -webkit-box-shadow: 0 0 0 0.0625rem hsla(var(--ig-primary-100), var(--ig-primary-a));
          box-shadow: 0 0 0 0.0625rem hsla(var(--ig-primary-100), var(--ig-primary-a));
}`,ur=r.iv`/* stylelint-disable max-line-length */
:host {
  --size: max(var(--is-large, 1) * 2.375rem, var(--is-medium, 1) * 2rem, var(--is-small, 1) * 1.5rem);
}

[part=base] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.125rem), 0.125rem);
  background: transparent;
  color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  -webkit-transition: color 0.15s ease-out, background 0.15s ease-out;
  -o-transition: color 0.15s ease-out, background 0.15s ease-out;
  transition: color 0.15s ease-out, background 0.15s ease-out;
  -webkit-box-shadow: none;
          box-shadow: none;
  width: var(--size);
  height: var(--size);
  padding: max(var(--is-large, 1) * 7px * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * 6px * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * 4px * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}
[part=base]::after {
  position: absolute;
  content: "";
  pointer-events: none;
  top: 2px;
  left: 2px;
  width: calc(100% - 4px);
  height: calc(100% - 4px);
}
[part=base]:hover {
  color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
}
[part=base]:active {
  color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  background: hsla(var(--ig-gray-300), var(--ig-gray-a));
}
[part=base]:focus-visible::after {
  -webkit-box-shadow: 0 0 0 0.0625rem hsla(var(--ig-gray-500), var(--ig-gray-a));
          box-shadow: 0 0 0 0.0625rem hsla(var(--ig-gray-500), var(--ig-gray-a));
}

:host([variant=contained]) [part=base] {
  color: var(--text-color, var(--ig-primary-600-contrast));
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
}
:host([variant=contained]) [part=base]:hover {
  background: var(--hover-background, hsla(var(--ig-primary-600), var(--ig-primary-a)));
}
:host([variant=contained]) [part=base]:active {
  color: var(--ig-primary-800-contrast);
  background: hsla(var(--ig-primary-800), var(--ig-primary-a));
}
:host([variant=contained]) [part=base]:focus-visible::after {
  -webkit-box-shadow: 0 0 0 0.0625rem var(--ig-primary-600-contrast);
          box-shadow: 0 0 0 0.0625rem var(--ig-primary-600-contrast);
}

:host([variant=outlined]) [part=base] {
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  -webkit-box-shadow: 0 0 0 1px hsla(var(--ig-gray-700), var(--ig-gray-a));
          box-shadow: 0 0 0 1px hsla(var(--ig-gray-700), var(--ig-gray-a));
}
:host([variant=outlined]) [part=base]:focus {
  background: transparent;
}
:host([variant=outlined]) [part=base]:hover, :host([variant=outlined]) [part=base]:focus:hover {
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
}
:host([variant=outlined]) [part=base]:focus:active {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
}

:host([disabled]) [part=base] {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
}

:host([disabled][variant=contained]) [part=base],
:host([disabled][variant=outlined]) [part=base] {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}`,fr=r.iv`/* stylelint-disable max-line-length */
:host {
  --size: max(var(--is-large, 1) * 2.25rem, var(--is-medium, 1) * 2rem, var(--is-small, 1) * 1.75rem);
}

[part=base] {
  -webkit-transition: color 0.15s ease-in-out, background 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
  -o-transition: color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, background 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, background 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, background 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
  width: var(--size);
  height: var(--size);
  padding: max(var(--is-large, 1) * 6px * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * 6px * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * 6px * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}
[part=base]:hover {
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  background: transparent;
}
[part=base]:focus, [part=base]:active {
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  background: transparent;
  -webkit-box-shadow: 0 0 0 0.1875rem hsla(var(--ig-gray-300), var(--ig-gray-a));
          box-shadow: 0 0 0 0.1875rem hsla(var(--ig-gray-300), var(--ig-gray-a));
}

:host([variant=contained]) [part=base] {
  color: var(--ig-primary-600-contrast);
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
}
:host([variant=contained]) [part=base]:hover {
  background: hsla(var(--ig-primary-400), var(--ig-primary-a));
}
:host([variant=contained]) [part=base]:focus, :host([variant=contained]) [part=base]:active {
  background: hsla(var(--ig-primary-400), var(--ig-primary-a));
  -webkit-box-shadow: 0 0 0 0.1875rem hsla(var(--ig-primary-200), var(--ig-primary-a));
          box-shadow: 0 0 0 0.1875rem hsla(var(--ig-primary-200), var(--ig-primary-a));
}

:host([variant=outlined]) [part=base] {
  -webkit-box-shadow: none;
          box-shadow: none;
}
:host([variant=outlined]) [part=base]::after {
  position: absolute;
  content: "";
  -webkit-box-shadow: inset 0 0 0 0.125rem hsla(var(--ig-gray-500), var(--ig-gray-a));
          box-shadow: inset 0 0 0 0.125rem hsla(var(--ig-gray-500), var(--ig-gray-a));
  width: 100%;
  height: 100%;
  border-radius: inherit;
}
:host([variant=outlined]) [part=base]:hover {
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
}
:host([variant=outlined]) [part=base]:focus, :host([variant=outlined]) [part=base]:active {
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  -webkit-box-shadow: 0 0 0 0.1875rem hsla(var(--ig-gray-300), var(--ig-gray-a));
          box-shadow: 0 0 0 0.1875rem hsla(var(--ig-gray-300), var(--ig-gray-a));
}

:host([disabled]) [part=base] {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
  background: transparent;
  -webkit-box-shadow: none;
          box-shadow: none;
}

:host([disabled][variant=contained]) [part=base] {
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}`,yr=r.iv`/* stylelint-disable max-line-length */
:host {
  --size: max(var(--is-large, 1) * 2.25rem, var(--is-medium, 1) * 1.875rem, var(--is-small, 1) * 1.5rem);
}

[part=base] {
  width: var(--size);
  height: var(--size);
  padding: max(var(--is-large, 1) * 6px * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * 6px * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * 6px * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}

:host([variant=contained]) [part=base] {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
}

:host([variant=outlined]) [part=base] {
  -webkit-box-shadow: inset 0 0 0 1px hsla(var(--ig-gray-300), var(--ig-gray-a));
          box-shadow: inset 0 0 0 1px hsla(var(--ig-gray-300), var(--ig-gray-a));
}

:host(:focus-within) [part=base] {
  -webkit-transition: none;
  -o-transition: none;
  transition: none;
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
  -webkit-box-shadow: inset 0 0 0 1px hsla(var(--ig-gray-400), var(--ig-gray-a));
          box-shadow: inset 0 0 0 1px hsla(var(--ig-gray-400), var(--ig-gray-a));
}

:host([variant=contained]:focus-within) [part=base] {
  background: hsla(var(--ig-gray-300), var(--ig-gray-a));
}

:host([disabled]) [part=base] {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

:host([disabled][variant=contained]) [part=base] {
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
}

:host([disabled][variant=outlined]) [part=base] {
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
  -webkit-box-shadow: inset 0 0 0 1px hsla(var(--ig-gray-100), var(--ig-gray-a));
          box-shadow: inset 0 0 0 1px hsla(var(--ig-gray-100), var(--ig-gray-a));
}`;var wr=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};x(X);let kr=class extends te{constructor(){super(...arguments),this.mirrored=!1,this.variant="contained"}renderContent(){return r.dy`
      ${this.name||this.mirrored?r.dy`
            <igc-icon
              part="icon"
              name=${(0,s.o)(this.name)}
              collection=${(0,s.o)(this.collection)}
              .mirrored=${this.mirrored}
              size=${(0,s.o)(this.size)}
              aria-hidden="true"
            ></igc-icon>
            <slot></slot>
          `:r.dy`<slot></slot>`}
    `}async registerIcon(e,t,a="default"){await F(e,t,a)}registerIconFromText(e,t,a="default"){L(e,t,a)}};kr.tagName="igc-icon-button",kr.styles=vr,wr([(e,t)=>{},(0,i.Cb)()],kr.prototype,"name",void 0),wr([(0,i.Cb)()],kr.prototype,"collection",void 0),wr([(0,i.Cb)({type:Boolean})],kr.prototype,"mirrored",void 0),wr([(0,i.Cb)({reflect:!0})],kr.prototype,"variant",void 0),wr([(e,t)=>{}],kr.prototype,"registerIcon",null),wr([(e,t)=>{}],kr.prototype,"registerIconFromText",null),kr=wr([p({bootstrap:mr,material:yr,fluent:ur,indigo:fr})],kr);const xr=kr;var zr=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};class Cr extends(z(r.oi)){constructor(){super(),this._controlsWithChecked=["input","radio","igc-radio","igc-switch","igc-checkbox"],this._controlsWithValue=["input","igc-input","igc-mask-input","textarea","igc-rating","igc-select","igc-date-time-input"],this._controlsThatSubmit=["input","button","igc-button","igc-icon-button"],this.novalidate=!1,this.addEventListener("click",this.handleClick)}submit(){const e=this.getFormData();return!(!this.novalidate&&!this.reportValidity()||(this.emitEvent("igcSubmit",{detail:e}),0))}reset(){this.getFormElements().forEach((e=>{const t=e.tagName.toLowerCase();if("select"===t)for(let t=0;t<e.options.length;t++){const a=e.options[t];a.selected=a.defaultSelected}else"input"===t&&("checkbox"===e.type||"radio"==e.type)||"input"!==t&&this._controlsWithChecked.includes(t)?e.checked=e.hasAttribute("checked"):"igc-input"===t||"igc-rating"===t||"igc-mask-input"===t||"igc-date-time-input"===t?e.value=e.getAttribute("value"):this._controlsWithValue.includes(t)&&(e.value=e.defaultValue)})),this.emitEvent("igcReset")}getFormElements(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("slot"),a=null==t?void 0:t.assignedElements({flatten:!0}),r=[];return null==a||a.forEach((e=>{e.disabled||r.push(e);const t=Array.from(e.getElementsByTagName("*")).filter((e=>!e.disabled));r.push(...t)})),r}getFormData(){const e=new FormData;return this.getFormElements().forEach((t=>{const a=t.tagName.toLowerCase();if("select"===a)for(let a=0;a<t.options.length;a++){const r=t.options[a];r.selected&&e.append(t.name,r.value)}else this._controlsWithChecked.includes(a)&&t.checked?e.append(t.name,t.value||"on"):this._controlsWithValue.includes(a)&&"checkbox"!==t.type&&"radio"!==t.type&&"submit"!==t.type&&e.append(t.name,t.value)})),e}reportValidity(){return!this.getFormElements().some((e=>"function"==typeof e.reportValidity&&!1===e.reportValidity()))}handleClick(e){var t,a;const r=e.target;return this._controlsThatSubmit.includes(r.tagName.toLowerCase())&&"submit"===(null===(t=r.type)||void 0===t?void 0:t.toLowerCase())?this.submit():"reset"===(null===(a=r.type)||void 0===a?void 0:a.toLowerCase())&&this.reset(),!0}render(){return r.dy`<slot></slot>`}}Cr.tagName="igc-form",Cr.styles=r.iv`
    :host {
      display: block;
    }
  `,zr([(0,i.Cb)({type:Boolean,reflect:!0})],Cr.prototype,"novalidate",void 0),zr([(e,t)=>{}],Cr.prototype,"submit",null),zr([(e,t)=>{}],Cr.prototype,"reset",null),zr([(e,t)=>{}],Cr.prototype,"getFormData",null);const Dr=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */
@-webkit-keyframes indeterminate-primary {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  20% {
    -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.7017, 0.4958);
            animation-timing-function: cubic-bezier(0.5, 0, 0.7017, 0.4958);
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  59.15% {
    -webkit-animation-timing-function: cubic-bezier(0.3024, 0.3813, 0.55, 0.9563);
            animation-timing-function: cubic-bezier(0.3024, 0.3813, 0.55, 0.9563);
    -webkit-transform: translateX(83.671%);
            transform: translateX(83.671%);
  }
  100% {
    -webkit-transform: translateX(200.611%);
            transform: translateX(200.611%);
  }
}
@keyframes indeterminate-primary {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  20% {
    -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.7017, 0.4958);
            animation-timing-function: cubic-bezier(0.5, 0, 0.7017, 0.4958);
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  59.15% {
    -webkit-animation-timing-function: cubic-bezier(0.3024, 0.3813, 0.55, 0.9563);
            animation-timing-function: cubic-bezier(0.3024, 0.3813, 0.55, 0.9563);
    -webkit-transform: translateX(83.671%);
            transform: translateX(83.671%);
  }
  100% {
    -webkit-transform: translateX(200.611%);
            transform: translateX(200.611%);
  }
}
@-webkit-keyframes indeterminate-primary-scale {
  0% {
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
  36.65% {
    -webkit-animation-timing-function: cubic-bezier(0.3347, 0.124, 0.7858, 1);
            animation-timing-function: cubic-bezier(0.3347, 0.124, 0.7858, 1);
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
  69.15% {
    -webkit-animation-timing-function: cubic-bezier(0.3347, 0.124, 0.7858, 1);
            animation-timing-function: cubic-bezier(0.3347, 0.124, 0.7858, 1);
    -webkit-transform: scaleX(0.6614);
            transform: scaleX(0.6614);
  }
  100% {
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
}
@keyframes indeterminate-primary-scale {
  0% {
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
  36.65% {
    -webkit-animation-timing-function: cubic-bezier(0.3347, 0.124, 0.7858, 1);
            animation-timing-function: cubic-bezier(0.3347, 0.124, 0.7858, 1);
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
  69.15% {
    -webkit-animation-timing-function: cubic-bezier(0.3347, 0.124, 0.7858, 1);
            animation-timing-function: cubic-bezier(0.3347, 0.124, 0.7858, 1);
    -webkit-transform: scaleX(0.6614);
            transform: scaleX(0.6614);
  }
  100% {
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
}
@-webkit-keyframes indeterminate-secondary {
  0% {
    -webkit-animation-timing-function: cubic-bezier(0.15, 0, 0.515, 0.4096);
            animation-timing-function: cubic-bezier(0.15, 0, 0.515, 0.4096);
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  25% {
    -webkit-animation-timing-function: cubic-bezier(0.31, 0.284, 0.8, 0.7337);
            animation-timing-function: cubic-bezier(0.31, 0.284, 0.8, 0.7337);
    -webkit-transform: translateX(37.6519%);
            transform: translateX(37.6519%);
  }
  48.35% {
    -webkit-animation-timing-function: cubic-bezier(0.4, 0.627, 0.6, 0.902);
            animation-timing-function: cubic-bezier(0.4, 0.627, 0.6, 0.902);
    -webkit-transform: translateX(84.3861%);
            transform: translateX(84.3861%);
  }
  100% {
    -webkit-transform: translateX(160.2777%);
            transform: translateX(160.2777%);
  }
}
@keyframes indeterminate-secondary {
  0% {
    -webkit-animation-timing-function: cubic-bezier(0.15, 0, 0.515, 0.4096);
            animation-timing-function: cubic-bezier(0.15, 0, 0.515, 0.4096);
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  25% {
    -webkit-animation-timing-function: cubic-bezier(0.31, 0.284, 0.8, 0.7337);
            animation-timing-function: cubic-bezier(0.31, 0.284, 0.8, 0.7337);
    -webkit-transform: translateX(37.6519%);
            transform: translateX(37.6519%);
  }
  48.35% {
    -webkit-animation-timing-function: cubic-bezier(0.4, 0.627, 0.6, 0.902);
            animation-timing-function: cubic-bezier(0.4, 0.627, 0.6, 0.902);
    -webkit-transform: translateX(84.3861%);
            transform: translateX(84.3861%);
  }
  100% {
    -webkit-transform: translateX(160.2777%);
            transform: translateX(160.2777%);
  }
}
@-webkit-keyframes indeterminate-secondary-scale {
  0% {
    -webkit-animation-timing-function: cubic-bezier(0.15, 0, 0.515, 0.4096);
            animation-timing-function: cubic-bezier(0.15, 0, 0.515, 0.4096);
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
  19.15% {
    -webkit-animation-timing-function: cubic-bezier(0.31, 0.284, 0.8, 0.7337);
            animation-timing-function: cubic-bezier(0.31, 0.284, 0.8, 0.7337);
    -webkit-transform: scaleX(0.4571);
            transform: scaleX(0.4571);
  }
  44.15% {
    -webkit-animation-timing-function: cubic-bezier(0.4, 0.627, 0.6, 0.902);
            animation-timing-function: cubic-bezier(0.4, 0.627, 0.6, 0.902);
    -webkit-transform: scaleX(0.727);
            transform: scaleX(0.727);
  }
  100% {
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
}
@keyframes indeterminate-secondary-scale {
  0% {
    -webkit-animation-timing-function: cubic-bezier(0.15, 0, 0.515, 0.4096);
            animation-timing-function: cubic-bezier(0.15, 0, 0.515, 0.4096);
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
  19.15% {
    -webkit-animation-timing-function: cubic-bezier(0.31, 0.284, 0.8, 0.7337);
            animation-timing-function: cubic-bezier(0.31, 0.284, 0.8, 0.7337);
    -webkit-transform: scaleX(0.4571);
            transform: scaleX(0.4571);
  }
  44.15% {
    -webkit-animation-timing-function: cubic-bezier(0.4, 0.627, 0.6, 0.902);
            animation-timing-function: cubic-bezier(0.4, 0.627, 0.6, 0.902);
    -webkit-transform: scaleX(0.727);
            transform: scaleX(0.727);
  }
  100% {
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
}
@-webkit-keyframes indeterminate-bar-fluent {
  0% {
    -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
    -webkit-transform-origin: left;
            transform-origin: left;
  }
  100% {
    -webkit-transform: translateX(310%);
            transform: translateX(310%);
    -webkit-transform-origin: right;
            transform-origin: right;
  }
}
@keyframes indeterminate-bar-fluent {
  0% {
    -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
    -webkit-transform-origin: left;
            transform-origin: left;
  }
  100% {
    -webkit-transform: translateX(310%);
            transform: translateX(310%);
    -webkit-transform-origin: right;
            transform-origin: right;
  }
}
@-webkit-keyframes indeterminate-bar-fluent-rtl {
  0% {
    -webkit-transform: translateX(-310%);
            transform: translateX(-310%);
    -webkit-transform-origin: right;
            transform-origin: right;
  }
  100% {
    -webkit-transform: translateX(100%);
            transform: translateX(100%);
    -webkit-transform-origin: left;
            transform-origin: left;
  }
}
@keyframes indeterminate-bar-fluent-rtl {
  0% {
    -webkit-transform: translateX(-310%);
            transform: translateX(-310%);
    -webkit-transform-origin: right;
            transform-origin: right;
  }
  100% {
    -webkit-transform: translateX(100%);
            transform: translateX(100%);
    -webkit-transform-origin: left;
            transform-origin: left;
  }
}
@-webkit-keyframes indeterminate-accordion {
  0% {
    stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * 2);
    stroke-dasharray: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * 9 / 10);
  }
  100% {
    stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * 2 / 5);
  }
}
@keyframes indeterminate-accordion {
  0% {
    stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * 2);
    stroke-dasharray: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * 9 / 10);
  }
  100% {
    stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * 2 / 5);
  }
}
@-webkit-keyframes indeterminate-accordion-rtl {
  0% {
    stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * -2);
    stroke-dasharray: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * 9 / 10);
  }
  100% {
    stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * -2 / 5);
  }
}
@keyframes indeterminate-accordion-rtl {
  0% {
    stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * -2);
    stroke-dasharray: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * 9 / 10);
  }
  100% {
    stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * -2 / 5);
  }
}
@-webkit-keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
:host {
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  font-family: var(--ig-font-family);
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}

[part~=label] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  color: inherit;
  font-weight: 600;
}

:host {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: relative;
  width: 100%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-flex: 1;
      -ms-flex: 1 1 100%;
          flex: 1 1 100%;
  --track-size: 0.25rem;
  --linear-animation-duration: 2000ms;
}

:host([dir=rtl][indeterminate]) [part~=track] {
  -webkit-transform: rotateY(180deg);
          transform: rotateY(180deg);
}

[part~=track] {
  position: relative;
  width: inherit;
  height: var(--track-size);
  background: hsla(var(--ig-gray-300), var(--ig-gray-a));
  overflow: hidden;
  border-radius: 0;
  z-index: 0;
}

[part~=fill] {
  -webkit-transition: width var(--duration) linear, background-color var(--duration) linear;
  -o-transition: width var(--duration) linear, background-color var(--duration) linear;
  transition: width var(--duration) linear, background-color var(--duration) linear;
  position: relative;
  height: inherit;
}

[part~=indeterminate],
[part~="indeterminate secondary"] {
  width: 100% !important;
  height: inherit;
  position: absolute;
  background: transparent;
}
[part~=indeterminate]::after,
[part~="indeterminate secondary"]::after {
  content: "";
  position: absolute;
  top: 0;
  inset-inline-start: 0;
  width: inherit;
  height: inherit;
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
}

[part~=indeterminate]:not([part~=secondary]) {
  -webkit-transform: scale3d(0, 1, 1);
          transform: scale3d(0, 1, 1);
  -webkit-animation: indeterminate-primary var(--linear-animation-duration) infinite linear;
          animation: indeterminate-primary var(--linear-animation-duration) infinite linear;
  left: -145.1666%;
}
[part~=indeterminate]:not([part~=secondary])::after {
  -webkit-animation: indeterminate-primary-scale var(--linear-animation-duration) infinite linear;
          animation: indeterminate-primary-scale var(--linear-animation-duration) infinite linear;
}

[part~=secondary] {
  -webkit-animation: indeterminate-secondary var(--linear-animation-duration) infinite linear;
          animation: indeterminate-secondary var(--linear-animation-duration) infinite linear;
  left: -54.8888%;
}
[part~=secondary]::after {
  -webkit-animation: indeterminate-secondary-scale var(--linear-animation-duration) infinite linear;
          animation: indeterminate-secondary-scale var(--linear-animation-duration) infinite linear;
  width: 100%;
  height: inherit;
}

[part~=value] {
  margin: 0;
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  font-size: 0.875em;
  font-weight: 600;
}

[part~=primary]:not([part~=indeterminate]) {
  background-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}

[part~=primary]::after {
  background-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}

[part~=striped][part~=primary]:not([part~=indeterminate]) {
  width: 100%;
  height: 100%;
  /* stylelint-disable */
  background: hsla(var(--ig-primary-500), var(--ig-primary-a)) -o-repeating-linear-gradient(135deg, hsla(var(--ig-primary-500), var(--ig-primary-a)), hsla(var(--ig-primary-500), var(--ig-primary-a)) 1rem, hsla(var(--ig-gray-50), 0.7) 1rem, hsla(var(--ig-gray-50), 0.7) 2rem);
  background: hsla(var(--ig-primary-500), var(--ig-primary-a)) repeating-linear-gradient(-45deg, hsla(var(--ig-primary-500), var(--ig-primary-a)), hsla(var(--ig-primary-500), var(--ig-primary-a)) 1rem, hsla(var(--ig-gray-50), 0.7) 1rem, hsla(var(--ig-gray-50), 0.7) 2rem);
  /* stylelint-enable */
}

[part~=striped][part~=primary]::after {
  /* stylelint-disable */
  background: hsla(var(--ig-primary-500), var(--ig-primary-a)) -o-repeating-linear-gradient(135deg, hsla(var(--ig-primary-500), var(--ig-primary-a)), hsla(var(--ig-primary-500), var(--ig-primary-a)) 1rem, hsla(var(--ig-gray-50), 0.7) 1rem, hsla(var(--ig-gray-50), 0.7) 2rem);
  background: hsla(var(--ig-primary-500), var(--ig-primary-a)) repeating-linear-gradient(-45deg, hsla(var(--ig-primary-500), var(--ig-primary-a)), hsla(var(--ig-primary-500), var(--ig-primary-a)) 1rem, hsla(var(--ig-gray-50), 0.7) 1rem, hsla(var(--ig-gray-50), 0.7) 2rem);
  /* stylelint-enable */
}

[part~=danger]:not([part~=indeterminate]) {
  background-color: hsla(var(--ig-error-500), var(--ig-error-a));
}

[part~=danger]::after {
  background-color: hsla(var(--ig-error-500), var(--ig-error-a));
}

[part~=striped][part~=danger]:not([part~=indeterminate]) {
  /* stylelint-disable */
  background: hsla(var(--ig-error-500), var(--ig-error-a)) -o-repeating-linear-gradient(135deg, hsla(var(--ig-error-500), var(--ig-error-a)), hsla(var(--ig-error-500), var(--ig-error-a)) 1rem, hsla(var(--ig-gray-50), 0.7) 1rem, hsla(var(--ig-gray-50), 0.7) 2rem);
  background: hsla(var(--ig-error-500), var(--ig-error-a)) repeating-linear-gradient(-45deg, hsla(var(--ig-error-500), var(--ig-error-a)), hsla(var(--ig-error-500), var(--ig-error-a)) 1rem, hsla(var(--ig-gray-50), 0.7) 1rem, hsla(var(--ig-gray-50), 0.7) 2rem);
  /* stylelint-enable */
}

[part~=striped][part~=danger]::after {
  /* stylelint-disable */
  background: hsla(var(--ig-error-500), var(--ig-error-a)) -o-repeating-linear-gradient(135deg, hsla(var(--ig-error-500), var(--ig-error-a)), hsla(var(--ig-error-500), var(--ig-error-a)) 1rem, hsla(var(--ig-gray-50), 0.7) 1rem, hsla(var(--ig-gray-50), 0.7) 2rem);
  background: hsla(var(--ig-error-500), var(--ig-error-a)) repeating-linear-gradient(-45deg, hsla(var(--ig-error-500), var(--ig-error-a)), hsla(var(--ig-error-500), var(--ig-error-a)) 1rem, hsla(var(--ig-gray-50), 0.7) 1rem, hsla(var(--ig-gray-50), 0.7) 2rem);
  /* stylelint-enable */
}

[part~=warning]:not([part~=indeterminate]) {
  background-color: hsla(var(--ig-warn-500), var(--ig-warn-a));
}

[part~=warning]::after {
  background-color: hsla(var(--ig-warn-500), var(--ig-warn-a));
}

[part~=striped][part~=warning]:not([part~=indeterminate]) {
  /* stylelint-disable */
  background: hsla(var(--ig-warn-500), var(--ig-warn-a)) -o-repeating-linear-gradient(135deg, hsla(var(--ig-warn-500), var(--ig-warn-a)), hsla(var(--ig-warn-500), var(--ig-warn-a)) 1rem, hsla(var(--ig-gray-50), 0.7) 1rem, hsla(var(--ig-gray-50), 0.7) 2rem);
  background: hsla(var(--ig-warn-500), var(--ig-warn-a)) repeating-linear-gradient(-45deg, hsla(var(--ig-warn-500), var(--ig-warn-a)), hsla(var(--ig-warn-500), var(--ig-warn-a)) 1rem, hsla(var(--ig-gray-50), 0.7) 1rem, hsla(var(--ig-gray-50), 0.7) 2rem);
  /* stylelint-enable */
}

[part~=striped][part~=warning]::after {
  /* stylelint-disable */
  background: hsla(var(--ig-warn-500), var(--ig-warn-a)) -o-repeating-linear-gradient(135deg, hsla(var(--ig-warn-500), var(--ig-warn-a)), hsla(var(--ig-warn-500), var(--ig-warn-a)) 1rem, hsla(var(--ig-gray-50), 0.7) 1rem, hsla(var(--ig-gray-50), 0.7) 2rem);
  background: hsla(var(--ig-warn-500), var(--ig-warn-a)) repeating-linear-gradient(-45deg, hsla(var(--ig-warn-500), var(--ig-warn-a)), hsla(var(--ig-warn-500), var(--ig-warn-a)) 1rem, hsla(var(--ig-gray-50), 0.7) 1rem, hsla(var(--ig-gray-50), 0.7) 2rem);
  /* stylelint-enable */
}

[part~=info]:not([part~=indeterminate]) {
  background-color: hsla(var(--ig-info-500), var(--ig-info-a));
}

[part~=info]::after {
  background-color: hsla(var(--ig-info-500), var(--ig-info-a));
}

[part~=striped][part~=info]:not([part~=indeterminate]) {
  /* stylelint-disable */
  background: hsla(var(--ig-info-500), var(--ig-info-a)) -o-repeating-linear-gradient(135deg, hsla(var(--ig-info-500), var(--ig-info-a)), hsla(var(--ig-info-500), var(--ig-info-a)) 1rem, hsla(var(--ig-gray-50), 0.7) 1rem, hsla(var(--ig-gray-50), 0.7) 2rem);
  background: hsla(var(--ig-info-500), var(--ig-info-a)) repeating-linear-gradient(-45deg, hsla(var(--ig-info-500), var(--ig-info-a)), hsla(var(--ig-info-500), var(--ig-info-a)) 1rem, hsla(var(--ig-gray-50), 0.7) 1rem, hsla(var(--ig-gray-50), 0.7) 2rem);
  /* stylelint-enable */
}

[part~=striped][part~=info]::after {
  /* stylelint-disable */
  background: hsla(var(--ig-info-500), var(--ig-info-a)) -o-repeating-linear-gradient(135deg, hsla(var(--ig-info-500), var(--ig-info-a)), hsla(var(--ig-info-500), var(--ig-info-a)) 1rem, hsla(var(--ig-gray-50), 0.7) 1rem, hsla(var(--ig-gray-50), 0.7) 2rem);
  background: hsla(var(--ig-info-500), var(--ig-info-a)) repeating-linear-gradient(-45deg, hsla(var(--ig-info-500), var(--ig-info-a)), hsla(var(--ig-info-500), var(--ig-info-a)) 1rem, hsla(var(--ig-gray-50), 0.7) 1rem, hsla(var(--ig-gray-50), 0.7) 2rem);
  /* stylelint-enable */
}

[part~=success]:not([part~=indeterminate]) {
  background-color: hsla(var(--ig-success-500), var(--ig-success-a));
}

[part~=success]::after {
  background-color: hsla(var(--ig-success-500), var(--ig-success-a));
}

[part~=striped][part~=success]:not([part~=indeterminate]) {
  /* stylelint-disable */
  background: hsla(var(--ig-success-500), var(--ig-success-a)) -o-repeating-linear-gradient(135deg, hsla(var(--ig-success-500), var(--ig-success-a)), hsla(var(--ig-success-500), var(--ig-success-a)) 1rem, hsla(var(--ig-gray-50), 0.7) 1rem, hsla(var(--ig-gray-50), 0.7) 2rem);
  background: hsla(var(--ig-success-500), var(--ig-success-a)) repeating-linear-gradient(-45deg, hsla(var(--ig-success-500), var(--ig-success-a)), hsla(var(--ig-success-500), var(--ig-success-a)) 1rem, hsla(var(--ig-gray-50), 0.7) 1rem, hsla(var(--ig-gray-50), 0.7) 2rem);
  /* stylelint-enable */
}

[part~=striped][part~=success]::after {
  /* stylelint-disable */
  background: hsla(var(--ig-success-500), var(--ig-success-a)) -o-repeating-linear-gradient(135deg, hsla(var(--ig-success-500), var(--ig-success-a)), hsla(var(--ig-success-500), var(--ig-success-a)) 1rem, hsla(var(--ig-gray-50), 0.7) 1rem, hsla(var(--ig-gray-50), 0.7) 2rem);
  background: hsla(var(--ig-success-500), var(--ig-success-a)) repeating-linear-gradient(-45deg, hsla(var(--ig-success-500), var(--ig-success-a)), hsla(var(--ig-success-500), var(--ig-success-a)) 1rem, hsla(var(--ig-gray-50), 0.7) 1rem, hsla(var(--ig-gray-50), 0.7) 2rem);
  /* stylelint-enable */
}

:host([label-align=top]) [part~=label],
:host([label-align=top-start]) [part~=label],
:host([label-align=top-end]) [part~=label] {
  -webkit-box-ordinal-group: 0;
      -ms-flex-order: -1;
          order: -1;
}

:host([label-align=top-start]) [part~=label],
:host([label-align=bottom-start]) [part~=label],
:host([label-align=start]) [part~=label] {
  -ms-flex-item-align: start;
      align-self: flex-start;
}

:host([label-align=bottom-end]) [part~=label],
:host([label-align=top-end]) [part~=label],
:host([label-align=end]) [part~=label] {
  -ms-flex-item-align: end;
      align-self: flex-end;
}

:host([label-align=top]) [part~=label],
:host([label-align=bottom]) [part~=label] {
  -ms-flex-item-align: center;
      align-self: center;
}

[part~=hidden] {
  display: none;
}`,Ir=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */
@-webkit-keyframes indeterminate-primary {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  20% {
    -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.7017, 0.4958);
            animation-timing-function: cubic-bezier(0.5, 0, 0.7017, 0.4958);
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  59.15% {
    -webkit-animation-timing-function: cubic-bezier(0.3024, 0.3813, 0.55, 0.9563);
            animation-timing-function: cubic-bezier(0.3024, 0.3813, 0.55, 0.9563);
    -webkit-transform: translateX(83.671%);
            transform: translateX(83.671%);
  }
  100% {
    -webkit-transform: translateX(200.611%);
            transform: translateX(200.611%);
  }
}
@keyframes indeterminate-primary {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  20% {
    -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.7017, 0.4958);
            animation-timing-function: cubic-bezier(0.5, 0, 0.7017, 0.4958);
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  59.15% {
    -webkit-animation-timing-function: cubic-bezier(0.3024, 0.3813, 0.55, 0.9563);
            animation-timing-function: cubic-bezier(0.3024, 0.3813, 0.55, 0.9563);
    -webkit-transform: translateX(83.671%);
            transform: translateX(83.671%);
  }
  100% {
    -webkit-transform: translateX(200.611%);
            transform: translateX(200.611%);
  }
}
@-webkit-keyframes indeterminate-primary-scale {
  0% {
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
  36.65% {
    -webkit-animation-timing-function: cubic-bezier(0.3347, 0.124, 0.7858, 1);
            animation-timing-function: cubic-bezier(0.3347, 0.124, 0.7858, 1);
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
  69.15% {
    -webkit-animation-timing-function: cubic-bezier(0.3347, 0.124, 0.7858, 1);
            animation-timing-function: cubic-bezier(0.3347, 0.124, 0.7858, 1);
    -webkit-transform: scaleX(0.6614);
            transform: scaleX(0.6614);
  }
  100% {
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
}
@keyframes indeterminate-primary-scale {
  0% {
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
  36.65% {
    -webkit-animation-timing-function: cubic-bezier(0.3347, 0.124, 0.7858, 1);
            animation-timing-function: cubic-bezier(0.3347, 0.124, 0.7858, 1);
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
  69.15% {
    -webkit-animation-timing-function: cubic-bezier(0.3347, 0.124, 0.7858, 1);
            animation-timing-function: cubic-bezier(0.3347, 0.124, 0.7858, 1);
    -webkit-transform: scaleX(0.6614);
            transform: scaleX(0.6614);
  }
  100% {
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
}
@-webkit-keyframes indeterminate-secondary {
  0% {
    -webkit-animation-timing-function: cubic-bezier(0.15, 0, 0.515, 0.4096);
            animation-timing-function: cubic-bezier(0.15, 0, 0.515, 0.4096);
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  25% {
    -webkit-animation-timing-function: cubic-bezier(0.31, 0.284, 0.8, 0.7337);
            animation-timing-function: cubic-bezier(0.31, 0.284, 0.8, 0.7337);
    -webkit-transform: translateX(37.6519%);
            transform: translateX(37.6519%);
  }
  48.35% {
    -webkit-animation-timing-function: cubic-bezier(0.4, 0.627, 0.6, 0.902);
            animation-timing-function: cubic-bezier(0.4, 0.627, 0.6, 0.902);
    -webkit-transform: translateX(84.3861%);
            transform: translateX(84.3861%);
  }
  100% {
    -webkit-transform: translateX(160.2777%);
            transform: translateX(160.2777%);
  }
}
@keyframes indeterminate-secondary {
  0% {
    -webkit-animation-timing-function: cubic-bezier(0.15, 0, 0.515, 0.4096);
            animation-timing-function: cubic-bezier(0.15, 0, 0.515, 0.4096);
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  25% {
    -webkit-animation-timing-function: cubic-bezier(0.31, 0.284, 0.8, 0.7337);
            animation-timing-function: cubic-bezier(0.31, 0.284, 0.8, 0.7337);
    -webkit-transform: translateX(37.6519%);
            transform: translateX(37.6519%);
  }
  48.35% {
    -webkit-animation-timing-function: cubic-bezier(0.4, 0.627, 0.6, 0.902);
            animation-timing-function: cubic-bezier(0.4, 0.627, 0.6, 0.902);
    -webkit-transform: translateX(84.3861%);
            transform: translateX(84.3861%);
  }
  100% {
    -webkit-transform: translateX(160.2777%);
            transform: translateX(160.2777%);
  }
}
@-webkit-keyframes indeterminate-secondary-scale {
  0% {
    -webkit-animation-timing-function: cubic-bezier(0.15, 0, 0.515, 0.4096);
            animation-timing-function: cubic-bezier(0.15, 0, 0.515, 0.4096);
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
  19.15% {
    -webkit-animation-timing-function: cubic-bezier(0.31, 0.284, 0.8, 0.7337);
            animation-timing-function: cubic-bezier(0.31, 0.284, 0.8, 0.7337);
    -webkit-transform: scaleX(0.4571);
            transform: scaleX(0.4571);
  }
  44.15% {
    -webkit-animation-timing-function: cubic-bezier(0.4, 0.627, 0.6, 0.902);
            animation-timing-function: cubic-bezier(0.4, 0.627, 0.6, 0.902);
    -webkit-transform: scaleX(0.727);
            transform: scaleX(0.727);
  }
  100% {
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
}
@keyframes indeterminate-secondary-scale {
  0% {
    -webkit-animation-timing-function: cubic-bezier(0.15, 0, 0.515, 0.4096);
            animation-timing-function: cubic-bezier(0.15, 0, 0.515, 0.4096);
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
  19.15% {
    -webkit-animation-timing-function: cubic-bezier(0.31, 0.284, 0.8, 0.7337);
            animation-timing-function: cubic-bezier(0.31, 0.284, 0.8, 0.7337);
    -webkit-transform: scaleX(0.4571);
            transform: scaleX(0.4571);
  }
  44.15% {
    -webkit-animation-timing-function: cubic-bezier(0.4, 0.627, 0.6, 0.902);
            animation-timing-function: cubic-bezier(0.4, 0.627, 0.6, 0.902);
    -webkit-transform: scaleX(0.727);
            transform: scaleX(0.727);
  }
  100% {
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
}
@-webkit-keyframes indeterminate-bar-fluent {
  0% {
    -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
    -webkit-transform-origin: left;
            transform-origin: left;
  }
  100% {
    -webkit-transform: translateX(310%);
            transform: translateX(310%);
    -webkit-transform-origin: right;
            transform-origin: right;
  }
}
@keyframes indeterminate-bar-fluent {
  0% {
    -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
    -webkit-transform-origin: left;
            transform-origin: left;
  }
  100% {
    -webkit-transform: translateX(310%);
            transform: translateX(310%);
    -webkit-transform-origin: right;
            transform-origin: right;
  }
}
@-webkit-keyframes indeterminate-bar-fluent-rtl {
  0% {
    -webkit-transform: translateX(-310%);
            transform: translateX(-310%);
    -webkit-transform-origin: right;
            transform-origin: right;
  }
  100% {
    -webkit-transform: translateX(100%);
            transform: translateX(100%);
    -webkit-transform-origin: left;
            transform-origin: left;
  }
}
@keyframes indeterminate-bar-fluent-rtl {
  0% {
    -webkit-transform: translateX(-310%);
            transform: translateX(-310%);
    -webkit-transform-origin: right;
            transform-origin: right;
  }
  100% {
    -webkit-transform: translateX(100%);
            transform: translateX(100%);
    -webkit-transform-origin: left;
            transform-origin: left;
  }
}
@-webkit-keyframes indeterminate-accordion {
  0% {
    stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * 2);
    stroke-dasharray: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * 9 / 10);
  }
  100% {
    stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * 2 / 5);
  }
}
@keyframes indeterminate-accordion {
  0% {
    stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * 2);
    stroke-dasharray: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * 9 / 10);
  }
  100% {
    stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * 2 / 5);
  }
}
@-webkit-keyframes indeterminate-accordion-rtl {
  0% {
    stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * -2);
    stroke-dasharray: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * 9 / 10);
  }
  100% {
    stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * -2 / 5);
  }
}
@keyframes indeterminate-accordion-rtl {
  0% {
    stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * -2);
    stroke-dasharray: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * 9 / 10);
  }
  100% {
    stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * -2 / 5);
  }
}
@-webkit-keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
:host {
  --track-size: 1rem;
}

[part~=track] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
}

[part~=striped][part~=primary]:not([part~=indeterminate]) {
  /* stylelint-disable */
  background: hsla(var(--ig-primary-500), var(--ig-primary-a)) -o-repeating-linear-gradient(45deg, hsla(var(--ig-primary-500), var(--ig-primary-a)), hsla(var(--ig-primary-500), var(--ig-primary-a)) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.625rem);
  background: hsla(var(--ig-primary-500), var(--ig-primary-a)) repeating-linear-gradient(45deg, hsla(var(--ig-primary-500), var(--ig-primary-a)), hsla(var(--ig-primary-500), var(--ig-primary-a)) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.625rem);
  /* stylelint-enable */
}

[part~=striped][part~=primary]::after {
  /* stylelint-disable */
  background: hsla(var(--ig-primary-500), var(--ig-primary-a)) -o-repeating-linear-gradient(45deg, hsla(var(--ig-primary-500), var(--ig-primary-a)), hsla(var(--ig-primary-500), var(--ig-primary-a)) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.625rem);
  background: hsla(var(--ig-primary-500), var(--ig-primary-a)) repeating-linear-gradient(45deg, hsla(var(--ig-primary-500), var(--ig-primary-a)), hsla(var(--ig-primary-500), var(--ig-primary-a)) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.625rem);
  /* stylelint-enable */
}

[part~=striped][part~=danger]:not([part~=indeterminate]) {
  /* stylelint-disable */
  background: hsla(var(--ig-error-500), var(--ig-error-a)) -o-repeating-linear-gradient(45deg, hsla(var(--ig-error-500), var(--ig-error-a)), hsla(var(--ig-error-500), var(--ig-error-a)) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.625rem);
  background: hsla(var(--ig-error-500), var(--ig-error-a)) repeating-linear-gradient(45deg, hsla(var(--ig-error-500), var(--ig-error-a)), hsla(var(--ig-error-500), var(--ig-error-a)) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.625rem);
  /* stylelint-enable */
}

[part~=striped][part~=danger]::after {
  /* stylelint-disable */
  background: hsla(var(--ig-error-500), var(--ig-error-a)) -o-repeating-linear-gradient(45deg, hsla(var(--ig-error-500), var(--ig-error-a)), hsla(var(--ig-error-500), var(--ig-error-a)) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.625rem);
  background: hsla(var(--ig-error-500), var(--ig-error-a)) repeating-linear-gradient(45deg, hsla(var(--ig-error-500), var(--ig-error-a)), hsla(var(--ig-error-500), var(--ig-error-a)) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.625rem);
  /* stylelint-enable */
}

[part~=striped][part~=warning]:not([part~=indeterminate]) {
  /* stylelint-disable */
  background: hsla(var(--ig-warn-500), var(--ig-warn-a)) -o-repeating-linear-gradient(45deg, hsla(var(--ig-warn-500), var(--ig-warn-a)), hsla(var(--ig-warn-500), var(--ig-warn-a)) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.625rem);
  background: hsla(var(--ig-warn-500), var(--ig-warn-a)) repeating-linear-gradient(45deg, hsla(var(--ig-warn-500), var(--ig-warn-a)), hsla(var(--ig-warn-500), var(--ig-warn-a)) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.625rem);
  /* stylelint-enable */
}

[part~=striped][part~=warning]::after {
  /* stylelint-disable */
  background: hsla(var(--ig-warn-500), var(--ig-warn-a)) -o-repeating-linear-gradient(45deg, hsla(var(--ig-warn-500), var(--ig-warn-a)), hsla(var(--ig-warn-500), var(--ig-warn-a)) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.625rem);
  background: hsla(var(--ig-warn-500), var(--ig-warn-a)) repeating-linear-gradient(45deg, hsla(var(--ig-warn-500), var(--ig-warn-a)), hsla(var(--ig-warn-500), var(--ig-warn-a)) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.625rem);
  /* stylelint-enable */
}

[part~=striped][part~=info]:not([part~=indeterminate]) {
  /* stylelint-disable */
  background: hsla(var(--ig-info-500), var(--ig-info-a)) -o-repeating-linear-gradient(45deg, hsla(var(--ig-info-500), var(--ig-info-a)), hsla(var(--ig-info-500), var(--ig-info-a)) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.625rem);
  background: hsla(var(--ig-info-500), var(--ig-info-a)) repeating-linear-gradient(45deg, hsla(var(--ig-info-500), var(--ig-info-a)), hsla(var(--ig-info-500), var(--ig-info-a)) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.625rem);
  /* stylelint-enable */
}

[part~=striped][part~=info]::after {
  /* stylelint-disable */
  background: hsla(var(--ig-info-500), var(--ig-info-a)) -o-repeating-linear-gradient(45deg, hsla(var(--ig-info-500), var(--ig-info-a)), hsla(var(--ig-info-500), var(--ig-info-a)) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.625rem);
  background: hsla(var(--ig-info-500), var(--ig-info-a)) repeating-linear-gradient(45deg, hsla(var(--ig-info-500), var(--ig-info-a)), hsla(var(--ig-info-500), var(--ig-info-a)) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.625rem);
  /* stylelint-enable */
}

[part~=striped][part~=success]:not([part~=indeterminate]) {
  /* stylelint-disable */
  background: hsla(var(--ig-success-500), var(--ig-success-a)) -o-repeating-linear-gradient(45deg, hsla(var(--ig-success-500), var(--ig-success-a)), hsla(var(--ig-success-500), var(--ig-success-a)) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.625rem);
  background: hsla(var(--ig-success-500), var(--ig-success-a)) repeating-linear-gradient(45deg, hsla(var(--ig-success-500), var(--ig-success-a)), hsla(var(--ig-success-500), var(--ig-success-a)) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.625rem);
  /* stylelint-enable */
}

[part~=striped][part~=success]::after {
  /* stylelint-disable */
  background: hsla(var(--ig-success-500), var(--ig-success-a)) -o-repeating-linear-gradient(45deg, hsla(var(--ig-success-500), var(--ig-success-a)), hsla(var(--ig-success-500), var(--ig-success-a)) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.625rem);
  background: hsla(var(--ig-success-500), var(--ig-success-a)) repeating-linear-gradient(45deg, hsla(var(--ig-success-500), var(--ig-success-a)), hsla(var(--ig-success-500), var(--ig-success-a)) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.625rem);
  /* stylelint-enable */
}`,Sr=r.iv`/* stylelint-disable max-line-length */
:host {
  --track-size: 0.125rem;
  --linear-animation-duration: 3000ms;
}

[part~=track] {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
  margin: 0.5rem 0;
}

[part~=label] {
  font-size: 0.875rem;
  font-weight: 400;
}

[part~=indeterminate]:not([part~=secondary]) {
  width: 33% !important;
  min-width: 33%;
  -webkit-animation-name: indeterminate-bar-fluent;
          animation-name: indeterminate-bar-fluent;
  -webkit-animation-duration: var(--linear-animation-duration);
          animation-duration: var(--linear-animation-duration);
  -webkit-animation-timing-function: ease;
          animation-timing-function: ease;
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  left: auto;
}
[part~=indeterminate]:not([part~=secondary])::after {
  display: none;
}

[part~=secondary] {
  display: none;
}

:host([dir=rtl]) [part~=indeterminate] {
  -webkit-animation-name: indeterminate-bar-fluent-rtl;
          animation-name: indeterminate-bar-fluent-rtl;
}

[part~=primary][part~=indeterminate] {
  background: -webkit-gradient(linear, left top, right top, from(transparent), color-stop(50%, hsla(var(--ig-primary-500), var(--ig-primary-a))), to(transparent));
  background: -o-linear-gradient(left, transparent 0%, hsla(var(--ig-primary-500), var(--ig-primary-a)) 50%, transparent 100%);
  background: linear-gradient(90deg, transparent 0%, hsla(var(--ig-primary-500), var(--ig-primary-a)) 50%, transparent 100%);
}

[part~=danger][part~=indeterminate] {
  background: -webkit-gradient(linear, left top, right top, from(transparent), color-stop(50%, hsla(var(--ig-error-500), var(--ig-error-a))), to(transparent));
  background: -o-linear-gradient(left, transparent 0%, hsla(var(--ig-error-500), var(--ig-error-a)) 50%, transparent 100%);
  background: linear-gradient(90deg, transparent 0%, hsla(var(--ig-error-500), var(--ig-error-a)) 50%, transparent 100%);
}

[part~=warning][part~=indeterminate] {
  background: -webkit-gradient(linear, left top, right top, from(transparent), color-stop(50%, hsla(var(--ig-warn-500), var(--ig-warn-a))), to(transparent));
  background: -o-linear-gradient(left, transparent 0%, hsla(var(--ig-warn-500), var(--ig-warn-a)) 50%, transparent 100%);
  background: linear-gradient(90deg, transparent 0%, hsla(var(--ig-warn-500), var(--ig-warn-a)) 50%, transparent 100%);
}

[part~=info][part~=indeterminate] {
  background: -webkit-gradient(linear, left top, right top, from(transparent), color-stop(50%, hsla(var(--ig-info-500), var(--ig-info-a))), to(transparent));
  background: -o-linear-gradient(left, transparent 0%, hsla(var(--ig-info-500), var(--ig-info-a)) 50%, transparent 100%);
  background: linear-gradient(90deg, transparent 0%, hsla(var(--ig-info-500), var(--ig-info-a)) 50%, transparent 100%);
}

[part~=success][part~=indeterminate] {
  background: -webkit-gradient(linear, left top, right top, from(transparent), color-stop(50%, hsla(var(--ig-success-500), var(--ig-success-a))), to(transparent));
  background: -o-linear-gradient(left, transparent 0%, hsla(var(--ig-success-500), var(--ig-success-a)) 50%, transparent 100%);
  background: linear-gradient(90deg, transparent 0%, hsla(var(--ig-success-500), var(--ig-success-a)) 50%, transparent 100%);
}`,$r=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */
[part~=striped]:not([part~=indeterminate]) {
  /* stylelint-disable */
  background: hsla(var(--ig-secondary-500), var(--ig-secondary-a)) -o-repeating-linear-gradient(45deg, hsla(var(--ig-secondary-500), var(--ig-secondary-a)), hsla(var(--ig-secondary-500), var(--ig-secondary-a)) 0.375rem, hsla(var(--ig-gray-50), 0.7) 0.375rem, hsla(var(--ig-gray-50), 0.7) 0.875rem);
  background: hsla(var(--ig-secondary-500), var(--ig-secondary-a)) repeating-linear-gradient(45deg, hsla(var(--ig-secondary-500), var(--ig-secondary-a)), hsla(var(--ig-secondary-500), var(--ig-secondary-a)) 0.375rem, hsla(var(--ig-gray-50), 0.7) 0.375rem, hsla(var(--ig-gray-50), 0.7) 0.875rem);
  /* stylelint-enable */
}`;var Pr=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};let Mr=class extends Ot{constructor(){super(...arguments),this.striped=!1,this.labelAlign="top-start"}get wrapperParts(){return{fill:!0,striped:this.striped,indeterminate:this.indeterminate,primary:"primary"===this.variant,success:"success"===this.variant,danger:"danger"===this.variant,warning:"warning"===this.variant,info:"info"===this.variant}}get animInfo(){return{width:P(this.value,this.max)+"%","--duration":this.animationDuration+"ms"}}render(){return r.dy`
      <div
        part="track"
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax=${this.max}
        aria-valuenow=${this.indeterminate?r.Ld:this.value}
      >
        <div
          part="${$(this.wrapperParts)}"
          style="${(0,ge.V)(this.animInfo)}"
        ></div>
        <div part="${$(this.wrapperParts)} secondary"></div>
      </div>
      ${this.renderDefaultSlot()}
    `}};Mr.tagName="igc-linear-progress",Mr.styles=Dr,Pr([(0,i.Cb)({type:Boolean,reflect:!0})],Mr.prototype,"striped",void 0),Pr([(0,i.Cb)({attribute:"label-align",reflect:!0})],Mr.prototype,"labelAlign",void 0),Mr=Pr([p({bootstrap:Ir,indigo:$r,fluent:Sr})],Mr);const Er=Mr,Tr=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */
:host {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-flow: column nowrap;
          flex-flow: column nowrap;
  font-family: var(--ig-font-family);
  overflow: hidden auto;
  height: auto;
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
}

:host([size=small]) {
  --component-size: var(--ig-size, var(--ig-size-small));
}

:host([size=medium]) {
  --component-size: var(--ig-size, var(--ig-size-medium));
}

:host([size=large]) {
  --component-size: var(--ig-size, var(--ig-size-large));
}`,Or=r.iv`/* stylelint-disable max-line-length */
:host {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
  background: var(--ig-gray-900-contrast);
  border: 0.0625rem solid hsla(var(--ig-gray-300), var(--ig-gray-a));
}`,Vr=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */
:host {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  color: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  background: inherit;
  padding-inline: max(var(--is-large, 1) * 16px * var(--ig-spacing-inline-large, var(--ig-spacing-inline, --ig-spacing)), var(--is-medium, 1) * 8px * var(--ig-spacing-inline-medium, var(--ig-spacing-inline, --ig-spacing)), var(--is-small, 1) * 4px * var(--ig-spacing-inline-small, var(--ig-spacing-inline, --ig-spacing)));
  padding-block: max(var(--is-large, 1) * 8px * var(--ig-spacing-block-large, var(--ig-spacing-block, --ig-spacing)), var(--is-medium, 1) * 4px * var(--ig-spacing-block-medium, var(--ig-spacing-block, --ig-spacing)), var(--is-small, 1) * 2px * var(--ig-spacing-block-small, var(--ig-spacing-block, --ig-spacing)));
  font-family: var(--ig-overline-font-family);
  font-size: var(--ig-overline-font-size);
  font-weight: var(--ig-overline-font-weight);
  font-style: var(--ig-overline-font-style);
  line-height: var(--ig-overline-line-height);
  letter-spacing: var(--ig-overline-letter-spacing);
  text-transform: var(--ig-overline-text-transform);
  margin-top: var(--ig-overline-margin-top);
  margin-bottom: var(--ig-overline-margin-bottom);
}

::slotted(*) {
  font: inherit;
  margin: inherit;
}`,Rr=r.iv`/* stylelint-disable max-line-length */
:host {
  color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}`;let Ar=class extends r.oi{constructor(){super()}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}render(){return r.dy`<slot></slot>`}};Ar.tagName="igc-list-header",Ar.styles=Vr,Ar=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s}([p({indigo:Rr})],Ar);const Fr=Ar,Lr=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */
:host {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  position: relative;
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
  -webkit-transition: background 0.15s ease-out;
  -o-transition: background 0.15s ease-out;
  transition: background 0.15s ease-out;
  padding-inline: max(var(--is-large, 1) * 16px * var(--ig-spacing-inline-large, var(--ig-spacing-inline, --ig-spacing)), var(--is-medium, 1) * 8px * var(--ig-spacing-inline-medium, var(--ig-spacing-inline, --ig-spacing)), var(--is-small, 1) * 4px * var(--ig-spacing-inline-small, var(--ig-spacing-inline, --ig-spacing)));
  padding-block: max(var(--is-large, 1) * 8px * var(--ig-spacing-block-large, var(--ig-spacing-block, --ig-spacing)), var(--is-medium, 1) * 4px * var(--ig-spacing-block-medium, var(--ig-spacing-block, --ig-spacing)), var(--is-small, 1) * 2px * var(--ig-spacing-block-small, var(--ig-spacing-block, --ig-spacing)));
}

:host(:hover),
:host(:focus-within) {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
}

::slotted(*) {
  margin: 0;
  font: inherit;
  opacity: inherit;
}

[part=content] {
  -webkit-box-flex: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
}

[part=start],
[part=end] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

[name=start]::slotted(*) {
  -webkit-margin-end: max(var(--is-large, 1) * 16px * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * 16px * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * 16px * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
          margin-inline-end: max(var(--is-large, 1) * 16px * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * 16px * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * 16px * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}

[name=end]::slotted(*) {
  -webkit-margin-start: max(var(--is-large, 1) * 16px * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * 16px * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * 16px * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
          margin-inline-start: max(var(--is-large, 1) * 16px * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * 16px * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * 16px * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}

[part=title] {
  font-family: var(--ig-subtitle-1-font-family);
  font-size: var(--ig-subtitle-1-font-size);
  font-weight: var(--ig-subtitle-1-font-weight);
  font-style: var(--ig-subtitle-1-font-style);
  line-height: var(--ig-subtitle-1-line-height);
  letter-spacing: var(--ig-subtitle-1-letter-spacing);
  text-transform: var(--ig-subtitle-1-text-transform);
  margin-top: var(--ig-subtitle-1-margin-top);
  margin-bottom: var(--ig-subtitle-1-margin-bottom);
}

[part=subtitle] {
  font-family: var(--ig-caption-font-family);
  font-size: var(--ig-caption-font-size);
  font-weight: var(--ig-caption-font-weight);
  font-style: var(--ig-caption-font-style);
  line-height: var(--ig-caption-line-height);
  letter-spacing: var(--ig-caption-letter-spacing);
  text-transform: var(--ig-caption-text-transform);
  margin-top: var(--ig-caption-margin-top);
  margin-bottom: var(--ig-caption-margin-bottom);
  opacity: 0.74;
}`,jr=r.iv`/* stylelint-disable max-line-length */
:host {
  background: var(--ig-gray-900-contrast);
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  border-bottom: 0.0625rem solid hsla(var(--ig-gray-200), var(--ig-gray-a));
}

:host(:hover),
:host(:focus-within) {
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
}

:host(:last-of-type) {
  border-bottom: none;
}

[part=title] {
  font-family: var(--ig-body-1-font-family);
  font-size: var(--ig-body-1-font-size);
  font-weight: var(--ig-body-1-font-weight);
  font-style: var(--ig-body-1-font-style);
  line-height: var(--ig-body-1-line-height);
  letter-spacing: var(--ig-body-1-letter-spacing);
  text-transform: var(--ig-body-1-text-transform);
  margin-top: var(--ig-body-1-margin-top);
  margin-bottom: var(--ig-body-1-margin-bottom);
}

[part=subtitle] {
  font-family: var(--ig-subtitle-1-font-family);
  font-size: var(--ig-subtitle-1-font-size);
  font-weight: var(--ig-subtitle-1-font-weight);
  font-style: var(--ig-subtitle-1-font-style);
  line-height: var(--ig-subtitle-1-line-height);
  letter-spacing: var(--ig-subtitle-1-letter-spacing);
  text-transform: var(--ig-subtitle-1-text-transform);
  margin-top: var(--ig-subtitle-1-margin-top);
  margin-bottom: var(--ig-subtitle-1-margin-bottom);
}`,_r=r.iv`/* stylelint-disable max-line-length */
[part=title] {
  font-family: var(--ig-caption-font-family);
  font-size: var(--ig-caption-font-size);
  font-weight: var(--ig-caption-font-weight);
  font-style: var(--ig-caption-font-style);
  line-height: var(--ig-caption-line-height);
  letter-spacing: var(--ig-caption-letter-spacing);
  text-transform: var(--ig-caption-text-transform);
  margin-top: var(--ig-caption-margin-top);
  margin-bottom: var(--ig-caption-margin-bottom);
}

:host {
  border-bottom: 0.0625rem solid hsla(var(--ig-gray-100), var(--ig-gray-a));
}

:host(:hover),
:host(:focus-within) {
  background: var(--item-hover-bg, hsla(var(--ig-gray-200), var(--ig-gray-a)));
}

:host(:last-of-type) {
  border-bottom: none;
}`,Xr=r.iv`/* stylelint-disable max-line-length */
:host {
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}
:host [part=subtitle] {
  font-family: var(--ig-body-2-font-family);
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
}

:host(:hover),
:host(:focus-within) {
  background: var(--item-hover-bg, hsla(var(--ig-gray-50), var(--ig-gray-a)));
}`;let Br=class extends r.oi{constructor(){super()}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}render(){return r.dy`
      <section part="start">
        <slot name="start"></slot>
      </section>
      <section part="content">
        <header part="header">
          <slot part="title" name="title"></slot>
          <slot part="subtitle" name="subtitle"></slot>
        </header>
        <slot></slot>
      </section>
      <section part="end">
        <slot name="end"></slot>
      </section>
    `}};Br.tagName="igc-list-item",Br.styles=Lr,Br=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s}([p({bootstrap:jr,fluent:_r,indigo:Xr})],Br);const Nr=Br;x(Nr,Fr);let Yr=class extends(v(r.oi)){constructor(){super()}connectedCallback(){super.connectedCallback(),this.setAttribute("role","list")}render(){return r.dy`<slot></slot>`}};Yr.tagName="igc-list",Yr.styles=Tr,Yr=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s}([p({bootstrap:Or})],Yr);const Ur=Yr;var Hr=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};class Wr extends ha{constructor(){super(...arguments),this._value="",this.valueMode="raw"}get value(){return this._value&&"raw"!==this.valueMode?this.maskedValue:this._value}set value(e){this._value=null!=e?e:"",this.maskedValue=this.parser.apply(this._value)}get mask(){return this._mask}set mask(e){this._mask=e}promptChange(){this.parser.prompt=this.prompt,this.value&&(this.maskedValue=this.parser.apply(this._value))}maskChange(){this.parser.mask=this.mask,this.value&&(this.maskedValue=this.parser.apply(this._value))}handleInvalidState(){this.updateComplete.then((()=>this.invalid=!this.checkValidity()))}connectedCallback(){super.connectedCallback(),this.mask=this.mask||this.parser.mask,this.prompt=this.prompt||this.parser.prompt}updateInput(e,t,a){const{value:r,end:i}=this.parser.replace(this.maskedValue,e,t,a);this.maskedValue=r,this._value=this.parser.parse(r),this.requestUpdate(),t!==this.mask.length&&this.emitEvent("igcInput",{detail:this.value}),this.updateComplete.then((()=>this.input.setSelectionRange(i,i)))}handleDragEnter(){this.hasFocus||this._value||(this.maskedValue=this.parser.apply())}handleDragLeave(){this.hasFocus||this.updateMaskedValue()}handleFocus(){this.hasFocus=!0,super.handleFocus(),this.readonly||this._value||(this.maskedValue=this.parser.apply(),this.updateComplete.then((()=>this.select())))}handleBlur(){this.hasFocus=!1,this.updateMaskedValue(),super.handleBlur()}handleChange(){this.emitEvent("igcChange",{detail:this.value}),this.invalid=!this.checkValidity()}handleClick(){this.input.selectionStart===this.input.selectionEnd&&this.input.selectionStart===this.maskedValue.length&&this.select()}updateMaskedValue(){this.maskedValue===this.parser.apply()&&(this.maskedValue="")}setRangeText(e,t,a,r="preserve"){this.input.value=this.parser.replace(this.input.value,e,t,a).value,this.maskedValue=this.parser.apply(this.parser.parse(this.input.value)),this._value=this.parser.parse(this.maskedValue)}reportValidity(){const e=this._value?this.parser.isValidString(this.input.value):this.input.reportValidity();return this.invalid=!e,e}checkValidity(){return this.disabled?this.input.checkValidity():this._value?this.input.checkValidity()&&this.parser.isValidString(this.input.value):!this.required}renderInput(){var e;return r.dy`
      <input
        type="text"
        part=${$(this.resolvePartNames("input"))}
        name=${(0,s.o)(this.name)}
        .value=${(0,yt.a)(this.maskedValue)}
        .placeholder=${(0,yt.a)(null!==(e=this.placeholder)&&void 0!==e?e:this.parser.escapedMask)}
        ?readonly=${this.readonly}
        ?disabled=${this.disabled}
        ?required=${this.required}
        @dragenter=${this.handleDragEnter}
        @dragleave=${this.handleDragLeave}
        @dragstart=${this.handleDragStart}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @cut=${this.handleCut}
        @change=${this.handleChange}
        @click=${this.handleClick}
        @compositionstart=${this.handleCompositionStart}
        @compositionend=${this.handleCompositionEnd}
        @input=${this.handleInput}
        aria-invalid="${this.invalid?"true":"false"}"
        @invalid="${this.handleInvalid}"
        @keydown=${this.handleKeydown}
      />
    `}}Wr.tagName="igc-mask-input",Hr([(0,i.Cb)({attribute:"value-mode"})],Wr.prototype,"valueMode",void 0),Hr([(0,i.Cb)(),(e,t)=>{}],Wr.prototype,"value",null),Hr([(0,i.Cb)()],Wr.prototype,"mask",null),Hr([b("prompt")],Wr.prototype,"promptChange",null),Hr([b("_mask")],Wr.prototype,"maskChange",null),Hr([b("required",{waitUntilFirstUpdate:!0}),b("disabled",{waitUntilFirstUpdate:!0}),b("value",{waitUntilFirstUpdate:!0})],Wr.prototype,"handleInvalidState",null);const Kr=r.iv`/* stylelint-disable max-line-length */
:host [part=base] {
  background: var(--background, hsla(var(--ig-gray-700), var(--ig-gray-a)));
  border: none;
  -webkit-box-shadow: none;
          box-shadow: none;
}

:host([position=start]) [part=mini],
:host([position=end]) [part=mini] {
  background: var(--background, hsla(var(--ig-gray-700), var(--ig-gray-a)));
}`,qr=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */
:host {
  -ms-flex-negative: 0;
      flex-shrink: 0;
  font-family: var(--ig-font-family);
}
:host [part=base] {
  position: fixed;
  height: 100%;
  min-height: 100%;
  overflow-x: hidden;
  top: 0;
  bottom: 0;
  inset-inline-start: 0;
  z-index: 999;
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
  border-radius: 0;
  -webkit-transition: all ease-out 0.3s, 0.3s;
  -o-transition: all ease-out 0.3s, 0.3s;
  transition: all ease-out 0.3s, 0.3s;
}
:host [part=main] {
  width: 16rem;
}
:host [part=mini] {
  width: 3.75rem;
}
:host [part=overlay] {
  background: hsla(var(--ig-gray-500), 0.54);
  position: fixed;
  inset: 0;
  z-index: 2;
}

:host([position=start]) [part=mini],
:host([position=end]) [part=mini] {
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
  -webkit-box-shadow: var(--ig-elevation-16);
          box-shadow: var(--ig-elevation-16);
  position: fixed;
  top: 0;
  bottom: 0;
}

:host([position=start]) [part=mini] {
  -webkit-border-end: 1px solid hsla(var(--ig-gray-900), 0.14);
          border-inline-end: 1px solid hsla(var(--ig-gray-900), 0.14);
  inset-inline-start: 0;
}

:host([position=end]) [part=mini] {
  -webkit-border-start: 1px solid hsla(var(--ig-gray-900), 0.14);
          border-inline-start: 1px solid hsla(var(--ig-gray-900), 0.14);
  inset-inline-end: 0;
}

:host([position=top]) [part=main],
:host([position=bottom]) [part=main] {
  width: 100%;
}
:host([position=top]) [part=base],
:host([position=bottom]) [part=base] {
  height: 50vh;
  min-height: initial;
  top: auto;
  width: 100%;
}

:host([position=top]) [part=base] {
  top: 0;
  bottom: auto;
}

:host(:not([open])[position=top]) [part=base],
:host(:not([open])[position=bottom]) [part=base] {
  -webkit-transform: translate3d(0, -60vh, 0);
          transform: translate3d(0, -60vh, 0);
}
:host(:not([open])[position=top]) [part=mini],
:host(:not([open])[position=bottom]) [part=mini] {
  display: none;
}

:host(:not([open])[position=bottom]) [part=base] {
  -webkit-transform: translate3d(0, 60vh, 0);
          transform: translate3d(0, 60vh, 0);
}

:host([open][position=end]) [part=base] {
  -webkit-border-end: none;
          border-inline-end: none;
  -webkit-border-start: 1px solid hsla(var(--ig-gray-900), 0.14);
          border-inline-start: 1px solid hsla(var(--ig-gray-900), 0.14);
  inset-inline-start: auto;
  inset-inline-end: 0;
}

:host([position=relative]) [part=base] {
  position: relative;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  -webkit-box-shadow: none;
          box-shadow: none;
  z-index: initial;
  -webkit-border-end: 1px solid hsla(var(--ig-gray-300), var(--ig-gray-a));
          border-inline-end: 1px solid hsla(var(--ig-gray-300), var(--ig-gray-a));
}
:host([position=relative]) [part=overlay] {
  display: none;
}

:host([open]) [part=mini] {
  display: none;
}

:host([open]:not([position=relative])) [part=base] {
  -webkit-border-end: 1px solid hsla(var(--ig-gray-900), 0.14);
          border-inline-end: 1px solid hsla(var(--ig-gray-900), 0.14);
  -webkit-box-shadow: var(--ig-elevation-16);
          box-shadow: var(--ig-elevation-16);
}

:host(:not([open])) [part=main] {
  display: none;
}
:host(:not([open])) [part=overlay] {
  display: none;
}`,Gr=r.iv`/* stylelint-disable max-line-length */
:host {
  font-family: var(--ig-caption-font-family);
  font-size: var(--ig-caption-font-size);
  font-weight: var(--ig-caption-font-weight);
  font-style: var(--ig-caption-font-style);
  line-height: var(--ig-caption-line-height);
  letter-spacing: var(--ig-caption-letter-spacing);
  text-transform: var(--ig-caption-text-transform);
  margin-top: var(--ig-caption-margin-top);
  margin-bottom: var(--ig-caption-margin-bottom);
}`,Zr=r.iv`/* stylelint-disable max-line-length */
:host {
  color: hsla(var(--ig-gray-50), var(--ig-gray-a));
}`,Qr=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */
:host {
  display: block;
  padding: 1.25rem 1rem;
  white-space: nowrap;
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
  font-family: var(--ig-subtitle-1-font-family);
  font-size: var(--ig-subtitle-1-font-size);
  font-weight: var(--ig-subtitle-1-font-weight);
  font-style: var(--ig-subtitle-1-font-style);
  line-height: var(--ig-subtitle-1-line-height);
  letter-spacing: var(--ig-subtitle-1-letter-spacing);
  text-transform: var(--ig-subtitle-1-text-transform);
  margin-top: var(--ig-subtitle-1-margin-top);
  margin-bottom: var(--ig-subtitle-1-margin-bottom);
}`;let Jr=class extends r.oi{render(){return r.dy`<slot></slot>`}};Jr.tagName="igc-nav-drawer-header-item",Jr.styles=Qr,Jr=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s}([p({fluent:Gr,indigo:Zr})],Jr);const ei=Jr,ti=r.iv`/* stylelint-disable max-line-length */
[part=base] {
  font-family: var(--ig-body-2-font-family);
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
}

:host([active]) [part=icon] {
  color: var(--active-icon-color, hsla(var(--ig-primary-500), var(--ig-primary-a)));
}`,ai=r.iv`/* stylelint-disable max-line-length */
:host [part~=base] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 1.5rem), 1.5rem);
  gap: 1.5rem;
  color: var(--text-color, hsla(var(--ig-gray-300), 0.8));
  padding: 0.25rem;
  margin: 0.9375rem 0.5rem !important;
}
:host [part~=base]:hover, :host [part~=base]:focus-within {
  background: transparent;
  color: var(--hover-text-color, hsla(var(--ig-gray-100), var(--ig-gray-a)));
}
:host [part=content] {
  -webkit-padding-start: 0.5rem;
          padding-inline-start: 0.5rem;
}

:host([active]) [part~=base] {
  background: var(--active-background, hsla(var(--ig-gray-600), 0.8));
  color: hsla(var(--ig-gray-50), var(--ig-gray-a));
}`,ri=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */
[part~=base] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 2rem;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-flow: row nowrap;
          flex-flow: row nowrap;
  position: relative;
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
  max-height: 3rem;
  margin: 0.5rem !important;
  padding: 0.75rem 0.5rem;
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  outline: transparent;
  white-space: nowrap;
  text-decoration: none;
  width: calc(100% - 1rem);
  border: none;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  -webkit-transition: background 0.15s ease-out;
  -o-transition: background 0.15s ease-out;
  transition: background 0.15s ease-out;
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
  font-family: var(--ig-subtitle-2-font-family);
  font-size: var(--ig-subtitle-2-font-size);
  font-weight: var(--ig-subtitle-2-font-weight);
  font-style: var(--ig-subtitle-2-font-style);
  line-height: var(--ig-subtitle-2-line-height);
  letter-spacing: var(--ig-subtitle-2-letter-spacing);
  text-transform: var(--ig-subtitle-2-text-transform);
  margin-top: var(--ig-subtitle-2-margin-top);
  margin-bottom: var(--ig-subtitle-2-margin-bottom);
}
[part~=base] ::slotted(igc-icon) {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font: inherit;
}
[part~=base]:hover, [part~=base]:focus-within {
  background: var(--hover-background, hsla(var(--ig-gray-200), 0.8));
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}

[part=content] {
  white-space: nowrap;
  -o-text-overflow: ellipsis;
     text-overflow: ellipsis;
  overflow: hidden;
}

[part="base mini"] {
  display: block;
}
[part="base mini"] [part=content] {
  display: none;
}
[part="base mini"] ::slotted(igc-icon) {
  width: 100%;
}

:host([disabled]) {
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  cursor: initial;
  pointer-events: none;
}
:host([disabled]) [part~=base] {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}

:host([active]) [part~=base] {
  background: var(--active-background, hsla(var(--ig-primary-500), 0.12));
  color: var(--active-text-color, hsla(var(--ig-primary-500), var(--ig-primary-a)));
}`;var ii=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};let oi=class extends r.oi{constructor(){super(...arguments),this.disabled=!1,this.active=!1}connectedCallback(){var e;super.connectedCallback(),null===(e=this.shadowRoot)||void 0===e||e.addEventListener("slotchange",(e=>{this._textLength=this._text.length}))}resolvePartNames(e){return{[e]:!0,mini:this._textLength<1}}render(){return r.dy`
      <div part="${$(this.resolvePartNames("base"))}">
        <span part="icon" .hidden="${0==this.navdrawerIcon.length}">
          <slot name="icon"></slot>
        </span>
        <span part="content">
          <slot name="content"></slot>
        </span>
      </div>
    `}};oi.tagName="igc-nav-drawer-item",oi.styles=ri,ii([(0,i.Cb)({type:Boolean,reflect:!0})],oi.prototype,"disabled",void 0),ii([(0,i.Cb)({type:Boolean,reflect:!0})],oi.prototype,"active",void 0),ii([(0,i.SB)()],oi.prototype,"_textLength",void 0),ii([(0,i.NH)({slot:"content"})],oi.prototype,"_text",void 0),ii([(0,i.vZ)({slot:"icon",flatten:!0})],oi.prototype,"navdrawerIcon",void 0),oi=ii([p({fluent:ti,indigo:ai})],oi);const si=oi;var ni=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};x(ei,si);let li=class extends r.oi{constructor(){super(...arguments),this.position="start",this.open=!1}show(){this.open||(this.open=!0)}hide(){this.open&&(this.open=!1)}toggle(){this.open?this.hide():this.show()}resolvePartNames(e){const t=document.querySelector('div[slot="mini"]');return{[e]:!0,hidden:!(null!==t&&t.children.length>0)}}render(){return r.dy`
      <div part="overlay" @click=${this.hide}></div>
      <div part="base">
        <div part="main">
          <slot></slot>
        </div>

        <div part="${$(this.resolvePartNames("mini"))}">
          <slot name="mini"></slot>
        </div>
      </div>
    `}};li.tagName="igc-nav-drawer",li.styles=qr,ni([(0,i.Cb)({reflect:!0})],li.prototype,"position",void 0),ni([(0,i.Cb)({type:Boolean,reflect:!0})],li.prototype,"open",void 0),li=ni([p({indigo:Kr})],li);const ci=li,gi=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */
:host {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  min-height: 3.5rem;
  max-height: 8rem;
  padding: 0 1rem;
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  color: var(--ig-primary-600-contrast);
  -webkit-box-shadow: var(--ig-elevation-4);
          box-shadow: var(--ig-elevation-4);
  font-family: var(--ig-font-family);
  z-index: 4;
}

[part=base] {
  display: inherit;
  position: relative;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-flow: row nowrap;
          flex-flow: row nowrap;
  -webkit-box-flex: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  overflow: hidden;
}

[part=middle] {
  display: -webkit-inline-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-user-select: text;
     -moz-user-select: text;
      -ms-user-select: text;
          user-select: text;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

[part=start],
[part=end] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}

[name=start]::slotted(*) {
  -webkit-margin-end: 1rem;
          margin-inline-end: 1rem;
  -webkit-margin-start: 0.0625rem;
          margin-inline-start: 0.0625rem;
}

[name=end]::slotted(*) {
  -webkit-margin-start: 1rem;
          margin-inline-start: 1rem;
  -webkit-margin-end: 0.0625rem;
          margin-inline-end: 0.0625rem;
}

::slotted(igc-avatar[part=base]) {
  max-width: 2rem;
  max-height: 2rem;
  min-height: 0;
  min-width: 0;
}

::slotted(igc-icon) {
  cursor: pointer;
  color: var(--ig-primary-600-contrast);
  width: 2rem;
  height: 2rem;
  font-size: 2rem;
}

::slotted(*) {
  font-family: var(--ig-h6-font-family);
  font-size: var(--ig-h6-font-size);
  font-weight: var(--ig-h6-font-weight);
  font-style: var(--ig-h6-font-style);
  line-height: var(--ig-h6-line-height);
  letter-spacing: var(--ig-h6-letter-spacing);
  text-transform: var(--ig-h6-text-transform);
  margin-top: var(--ig-h6-margin-top);
  margin-bottom: var(--ig-h6-margin-bottom);
  line-height: normal;
  margin: 0;
}`,di=r.iv`/* stylelint-disable max-line-length */
:host {
  padding: 0 0.5rem;
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
  color: var(--ig-surface-500-contrast);
  -webkit-box-shadow: none;
          box-shadow: none;
}

::slotted(igc-icon) {
  color: var(--ig-surface-500-contrast);
}

[part=base] {
  -webkit-padding-start: 0.25rem;
          padding-inline-start: 0.25rem;
  -webkit-padding-end: 0.25rem;
          padding-inline-end: 0.25rem;
}

::slotted(*) {
  font-family: var(--ig-h5-font-family);
  font-size: var(--ig-h5-font-size);
  font-weight: var(--ig-h5-font-weight);
  font-style: var(--ig-h5-font-style);
  line-height: var(--ig-h5-line-height);
  letter-spacing: var(--ig-h5-letter-spacing);
  text-transform: var(--ig-h5-text-transform);
  margin-top: var(--ig-h5-margin-top);
  margin-bottom: var(--ig-h5-margin-bottom);
  line-height: normal;
  margin: 0;
}`,hi=r.iv`/* stylelint-disable max-line-length */
::slotted(*) {
  font-family: var(--ig-subtitle-2-font-family);
  font-size: var(--ig-subtitle-2-font-size);
  font-weight: var(--ig-subtitle-2-font-weight);
  font-style: var(--ig-subtitle-2-font-style);
  line-height: var(--ig-subtitle-2-line-height);
  letter-spacing: var(--ig-subtitle-2-letter-spacing);
  text-transform: var(--ig-subtitle-2-text-transform);
  margin-top: var(--ig-subtitle-2-margin-top);
  margin-bottom: var(--ig-subtitle-2-margin-bottom);
  line-height: normal;
  margin: 0;
}`,pi=r.iv`/* stylelint-disable max-line-length */
:host {
  -webkit-box-shadow: none;
          box-shadow: none;
}`;let bi=class extends r.oi{render(){return r.dy`
      <div part="base">
        <span part="start">
          <slot name="start"></slot>
        </span>
        <span part="middle">
          <slot></slot>
        </span>
        <span part="end">
          <slot name="end"></slot>
        </span>
      </div>
    `}};bi.tagName="igc-navbar",bi.styles=gi,bi=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s}([p({bootstrap:di,fluent:hi,indigo:pi})],bi);const vi=bi,mi=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */
:host {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  font-family: var(--ig-font-family);
}

input[type=radio] {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: none;
  clip: rect(0, 0, 0, 0);
  outline: 0;
  pointer-events: none;
  overflow: hidden;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}

[part~=base] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  cursor: pointer;
  -webkit-transition: color 0.15s ease-in;
  -o-transition: color 0.15s ease-in;
  transition: color 0.15s ease-in;
}
[part~=base]:focus-within [part=control] {
  background: hsla(var(--ig-gray-600), 0.12);
}

[part~=label] {
  font-family: var(--ig-subtitle-1-font-family);
  font-size: var(--ig-subtitle-1-font-size);
  font-weight: var(--ig-subtitle-1-font-weight);
  font-style: var(--ig-subtitle-1-font-style);
  line-height: var(--ig-subtitle-1-line-height);
  letter-spacing: var(--ig-subtitle-1-letter-spacing);
  text-transform: var(--ig-subtitle-1-text-transform);
  margin-top: var(--ig-subtitle-1-margin-top);
  margin-bottom: var(--ig-subtitle-1-margin-bottom);
}

[part~=control] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * var(--size)), var(--size));
  --size: 1.25rem;
  position: relative;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  width: calc(var(--size) * 2);
  height: calc(var(--size) * 2);
  min-width: calc(var(--size) * 2);
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  -webkit-transition: background 0.15s ease-in;
  -o-transition: background 0.15s ease-in;
  transition: background 0.15s ease-in;
}
[part~=control]::before, [part~=control]::after {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * calc(var(--size) / 2)), calc(var(--size) / 2));
  position: absolute;
  content: "";
  width: var(--size);
  height: var(--size);
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transition: all 0.15s ease-in;
  -o-transition: all 0.15s ease-in;
  transition: all 0.15s ease-in;
}
[part~=control]::before {
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  -webkit-transform: translate(-50%, -50%) scale(0.1);
      -ms-transform: translate(-50%, -50%) scale(0.1);
          transform: translate(-50%, -50%) scale(0.1);
  -webkit-transform-origin: center;
      -ms-transform-origin: center;
          transform-origin: center;
  z-index: 1;
}
[part~=control]::after {
  border: calc(var(--size) / 10) solid hsla(var(--ig-gray-600), var(--ig-gray-a));
}

[part="control checked"]::before {
  border-color: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  background: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  -webkit-transform: translate(-50%, -50%) scale(0.5);
      -ms-transform: translate(-50%, -50%) scale(0.5);
          transform: translate(-50%, -50%) scale(0.5);
}
[part="control checked"]::after {
  border-color: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
}

:host(:not([disabled])[invalid]) [part~=label] {
  color: hsla(var(--ig-error-500), var(--ig-error-a));
}
:host(:not([disabled])[invalid]) [part~=control]::after {
  border-color: hsla(var(--ig-error-500), var(--ig-error-a));
}

:host([disabled]) {
  pointer-events: none;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
:host([disabled]) [part~=label] {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}
:host([disabled]) [part~=control]::after {
  border-color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}
:host([disabled]) [part="control checked"]::before {
  background: hsla(var(--ig-gray-400), var(--ig-gray-a));
  border-color: transparent;
}

:host([label-position=after]) [part~=label] {
  -webkit-margin-start: 0.5rem;
          margin-inline-start: 0.5rem;
}

:host([label-position=before]) [part~=label] {
  -webkit-box-ordinal-group: 0;
      -ms-flex-order: -1;
          order: -1;
  -webkit-margin-end: 0.5rem;
          margin-inline-end: 0.5rem;
}`,ui=r.iv`/* stylelint-disable max-line-length */
:host::part(base) {
  -webkit-transition: none;
  -o-transition: none;
  transition: none;
}

:host [part~=control] {
  --size: 1rem;
  width: var(--size);
  height: var(--size);
  min-width: var(--size);
  background: none;
  -webkit-transition: transparent;
  -o-transition: transparent;
  transition: transparent;
}
:host [part~=control]::before, :host [part~=control]::after {
  -webkit-transition: none;
  -o-transition: none;
  transition: none;
}
:host [part~=control]::before {
  -webkit-transform: translate(-50%, -50%) scale(0.375);
      -ms-transform: translate(-50%, -50%) scale(0.375);
          transform: translate(-50%, -50%) scale(0.375);
}
:host [part~=control]::after {
  width: inherit;
  height: inherit;
  min-width: inherit;
  border-color: hsla(var(--ig-gray-400), var(--ig-gray-a));
  border-width: calc(var(--size, 0.625rem) / 10);
}

:host(:focus-within) [part~=control] {
  -webkit-box-shadow: 0 0 0 calc(var(--size, 1rem) / 4) hsla(var(--ig-primary-100), var(--ig-primary-a));
          box-shadow: 0 0 0 calc(var(--size, 1rem) / 4) hsla(var(--ig-primary-100), var(--ig-primary-a));
}
:host(:focus-within) [part~=control]::after {
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}

:host [part="control checked"]::after {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}
:host [part="control checked"]::before {
  background: white;
}

:host(:not([disabled])[invalid]) [part~=control]::after {
  border-color: hsla(var(--ig-error-500), var(--ig-error-a));
}
:host(:not([disabled])[invalid]) [part="control checked"]::after {
  background: hsla(var(--ig-error-500), var(--ig-error-a));
}

:host([invalid]:focus-within) [part~=control] {
  -webkit-box-shadow: 0 0 0 calc(var(--size, 1rem) / 4) hsla(var(--ig-error-100), var(--ig-error-a));
          box-shadow: 0 0 0 calc(var(--size, 1rem) / 4) hsla(var(--ig-error-100), var(--ig-error-a));
}

:host([disabled]) [part=control]::after {
  border-color: hsla(var(--ig-gray-300), var(--ig-gray-a));
}
:host([disabled]) [part="control checked"]::after {
  background: hsla(var(--ig-primary-200), var(--ig-primary-a));
  border-color: hsla(var(--ig-primary-200), var(--ig-primary-a));
}
:host([disabled]) [part="control checked"]::before {
  background: white;
}`,fi=r.iv`/* stylelint-disable max-line-length */
:host [part=base] {
  -webkit-transition-duration: 0.1s;
       -o-transition-duration: 0.1s;
          transition-duration: 0.1s;
}

:host [part~=control] {
  width: var(--size, 1.25rem);
  height: var(--size, 1.25rem);
  min-width: var(--size, 1.25rem);
  background: transparent;
  -webkit-transition: none;
  -o-transition: none;
  transition: none;
}
:host [part~=control]::before, :host [part~=control]::after {
  -webkit-transition-duration: 0.1s;
       -o-transition-duration: 0.1s;
          transition-duration: 0.1s;
}
:host [part~=control]::before {
  -webkit-transform: translate(-50%, -50%) scale(0.5);
      -ms-transform: translate(-50%, -50%) scale(0.5);
          transform: translate(-50%, -50%) scale(0.5);
}
:host [part~=control]::after {
  border: calc(var(--size, 20px) / 20) solid hsla(var(--ig-gray-900), var(--ig-gray-a));
}

:host [part~=label] {
  font-family: var(--ig-body-2-font-family);
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
}

:host(:hover) [part=control]::before,
:host(:focus-within) [part=control]::before {
  background: var(--hover-color, hsla(var(--ig-gray-700), var(--ig-gray-a)));
}
:host(:hover) [part="control checked"]::after,
:host(:focus-within) [part="control checked"]::after {
  border-color: var(--checked-hover-color, hsla(var(--ig-primary-900), var(--ig-primary-a)));
}
:host(:hover) [part="control checked"]::before,
:host(:focus-within) [part="control checked"]::before {
  background: var(--checked-hover-color, hsla(var(--ig-primary-900), var(--ig-primary-a)));
}

:host [part="control checked"]::before {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
}
:host [part="control checked"]::after {
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}

:host(:not([disabled])[invalid]) [part~=label] {
  color: var(--invalid-color, hsla(var(--ig-error-500), var(--ig-error-a)));
}
:host(:not([disabled])[invalid]) [part~=control]::before {
  background: var(--invalid-color, hsla(var(--ig-error-500), var(--ig-error-a)));
}
:host(:not([disabled])[invalid]) [part="control checked"]::after {
  border-color: var(--invalid-color, hsla(var(--ig-error-500), var(--ig-error-a)));
}

:host(:not([disabled])[invalid]:hover) [part=control]::after,
:host(:not([disabled])[invalid]:focus-within) [part=control]::after {
  border-color: var(--invalid-hover-color, hsla(var(--ig-error-700), var(--ig-error-a)));
}
:host(:not([disabled])[invalid]:hover) [part="control checked"]::after,
:host(:not([disabled])[invalid]:focus-within) [part="control checked"]::after {
  border-color: var(--invalid-hover-color, hsla(var(--ig-error-700), var(--ig-error-a)));
}
:host(:not([disabled])[invalid]:hover) [part="control checked"]::before,
:host(:not([disabled])[invalid]:focus-within) [part="control checked"]::before {
  background: var(--invalid-hover-color, hsla(var(--ig-error-700), var(--ig-error-a)));
}

:host([disabled]) [part~=label] {
  color: var(--disabled-color, hsla(var(--ig-gray-400), var(--ig-gray-a)));
}
:host([disabled]) [part~=control]::after {
  border-color: var(--disabled-color, hsla(var(--ig-gray-400), var(--ig-gray-a)));
}
:host([disabled]) [part="control checked"]::before {
  background: var(--disabled-color, hsla(var(--ig-gray-400), var(--ig-gray-a)));
}

[part~=focused] {
  position: relative;
}
[part~=focused]::after {
  content: "";
  position: absolute;
  top: -0.125rem;
  left: -0.125rem;
  -webkit-box-shadow: 0 0 0 1px hsla(var(--ig-gray-700), var(--ig-gray-a));
          box-shadow: 0 0 0 1px hsla(var(--ig-gray-700), var(--ig-gray-a));
  width: calc(100% + (0.125rem * 2));
  height: calc(100% + (0.125rem * 2));
}`,yi=r.iv`/* stylelint-disable max-line-length */
:host {
  font-weight: 600;
}

:host [part~=control] {
  width: var(--size, 1.25rem);
  height: var(--size, 1.25rem);
  min-width: var(--size, 1.25rem);
  -webkit-transition: none;
  -o-transition: none;
  transition: none;
  background: none;
}

:host(:not([invalid])) [part=control]::after {
  border-color: var(--border-color, hsla(var(--ig-gray-600), var(--ig-gray-a)));
}

:host(:hover) [part=control] {
  -webkit-box-shadow: 0 0 0 0.25rem hsla(var(--ig-gray-200), 0.87);
          box-shadow: 0 0 0 0.25rem hsla(var(--ig-gray-200), 0.87);
}

:host(:focus-within) [part=control] {
  -webkit-box-shadow: 0 0 0 0.25rem hsla(var(--ig-gray-300), 0.87);
          box-shadow: 0 0 0 0.25rem hsla(var(--ig-gray-300), 0.87);
}

:host(:not([invalid])) [part="control checked"]::after {
  border-color: var(--checked-color, hsla(var(--ig-secondary-500), var(--ig-secondary-a)));
}

:host(:not([invalid])) [part="control checked"]::before {
  background: var(--checked-color, hsla(var(--ig-secondary-500), var(--ig-secondary-a)));
  border-color: var(--checked-color, hsla(var(--ig-secondary-500), var(--ig-secondary-a)));
}

:host(:hover) [part="control checked"] {
  background: transparent;
  -webkit-box-shadow: 0 0 0 0.25rem hsla(var(--ig-secondary-100), 0.87);
          box-shadow: 0 0 0 0.25rem hsla(var(--ig-secondary-100), 0.87);
}

:host(:focus-within) [part="control checked"] {
  background: transparent;
  -webkit-box-shadow: 0 0 0 0.25rem hsla(var(--ig-secondary-200), 0.87);
          box-shadow: 0 0 0 0.25rem hsla(var(--ig-secondary-200), 0.87);
}

:host(:not([disabled])[invalid]) [part="control checked"]::before {
  background: hsla(var(--ig-error-500), var(--ig-error-a));
}

:host([invalid]:hover) [part~=control] {
  -webkit-box-shadow: 0 0 0 0.25rem hsla(var(--ig-error-100), 0.87);
          box-shadow: 0 0 0 0.25rem hsla(var(--ig-error-100), 0.87);
}

:host([invalid]:focus-within) [part~=control] {
  -webkit-box-shadow: 0 0 0 0.25rem hsla(var(--ig-error-200), 0.87);
          box-shadow: 0 0 0 0.25rem hsla(var(--ig-error-200), 0.87);
}

:host([disabled]) {
  pointer-events: none;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
:host([disabled]) [part=control]::after {
  background: transparent;
}

:host([disabled]) [part=control]::after,
:host([disabled]) [part="control checked"]::after {
  border-color: var(--disabled-color, hsla(var(--ig-gray-300), var(--ig-gray-a)));
}

:host([disabled]) [part="control checked"]::before {
  background: var(--disabled-color, hsla(var(--ig-gray-300), var(--ig-gray-a)));
}

:host([disabled]) [part~=label] {
  color: var(--disabled-color, hsla(var(--ig-gray-300), var(--ig-gray-a)));
}`,wi=r.iv`/* stylelint-disable max-line-length */
[part~=base]:hover [part=control] {
  background: hsla(var(--ig-gray-600), 0.06);
}

[part="base checked"]:hover [part~=control] {
  background: hsla(var(--ig-secondary-500), 0.06);
}
[part="base checked"]:focus-within [part~=control] {
  background: hsla(var(--ig-secondary-500), 0.12);
}

:host(:not([disabled])[invalid]) [part="control checked"]::before {
  background: hsla(var(--ig-error-500), var(--ig-error-a));
}`;var ki,xi=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};let zi=ki=class extends(z(r.oi)){constructor(){super(...arguments),this.inputId=`radio-${ki.increment()}`,this.labelId=`radio-label-${this.inputId}`,this._tabIndex=0,this.focused=!1,this.required=!1,this.checked=!1,this.disabled=!1,this.invalid=!1,this.labelPosition="after"}click(){this.input.click()}connectedCallback(){super.connectedCallback(),this.addEventListener("keyup",this.handleKeyUp)}disconnectedCallback(){this.removeEventListener("keyup",this.handleKeyUp)}handleKeyUp(){this.focused||(this.focused=!0)}focus(e){this.input.focus(e)}blur(){this.input.blur()}reportValidity(){return this.input.reportValidity()}checkValidity(){return this.input.checkValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=!this.input.checkValidity()}handleMouseDown(e){e.preventDefault(),this.input.focus(),this.focused=!1}handleClick(){this.checked=!0}handleBlur(){this.emitEvent("igcBlur"),this.focused=!1}handleFocus(){this.emitEvent("igcFocus")}handleChange(){this.checked?(this.getSiblings().forEach((e=>{e.checked=!1,e._tabIndex=-1})),this.input.focus(),this._tabIndex=0,this.emitEvent("igcChange",{detail:this.checked})):this.required&&(this.required=!1,this.getAllInGroup()[0].required=!0)}getSiblings(){return this.getAllInGroup().filter((e=>e.name===this.name&&e!==this))}getAllInGroup(){const e=this.closest("igc-radio-group");return e?Array.from(e.querySelectorAll("igc-radio")):[]}render(){return r.dy`
      <label
        part="${$({base:!0,checked:this.checked,focused:this.focused})}"
        for="${this.inputId}"
        @pointerdown="${this.handleMouseDown}"
      >
        <input
          id="${this.inputId}"
          type="radio"
          name="${(0,s.o)(this.name)}"
          value="${(0,s.o)(this.value)}"
          .required="${this.required}"
          .disabled="${this.disabled}"
          .checked="${(0,yt.a)(this.checked)}"
          tabindex=${this._tabIndex}
          aria-checked="${this.checked?"true":"false"}"
          aria-disabled="${this.disabled?"true":"false"}"
          aria-labelledby="${this.ariaLabelledby?this.ariaLabelledby:this.labelId}"
          @click="${this.handleClick}"
          @blur="${this.handleBlur}"
          @focus="${this.handleFocus}"
        />
        <span
          part="${$({control:!0,checked:this.checked})}"
        ></span>
        <span
          part="${$({label:!0,checked:this.checked})}"
          id="${this.labelId}"
        >
          <slot></slot>
        </span>
      </label>
    `}};zi.tagName="igc-radio",zi.styles=mi,zi.increment=T(),xi([(0,i.IO)('input[type="radio"]',!0)],zi.prototype,"input",void 0),xi([(0,i.SB)()],zi.prototype,"_tabIndex",void 0),xi([(0,i.SB)()],zi.prototype,"focused",void 0),xi([(0,i.Cb)()],zi.prototype,"name",void 0),xi([(0,i.Cb)()],zi.prototype,"value",void 0),xi([(0,i.Cb)({type:Boolean,reflect:!0})],zi.prototype,"required",void 0),xi([(0,i.Cb)({type:Boolean}),(e,t)=>{}],zi.prototype,"checked",void 0),xi([(0,i.Cb)({type:Boolean,reflect:!0})],zi.prototype,"disabled",void 0),xi([(0,i.Cb)({type:Boolean,reflect:!0})],zi.prototype,"invalid",void 0),xi([(0,i.Cb)({reflect:!0,attribute:"label-position"})],zi.prototype,"labelPosition",void 0),xi([(0,i.Cb)({reflect:!0,attribute:"aria-labelledby"})],zi.prototype,"ariaLabelledby",void 0),xi([(e,t)=>{}],zi.prototype,"focus",null),xi([(e,t)=>{}],zi.prototype,"blur",null),xi([b("checked",{waitUntilFirstUpdate:!0})],zi.prototype,"handleChange",null),zi=ki=xi([p({material:wi,bootstrap:ui,fluent:fi,indigo:yi})],zi);const Ci=zi,Di=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */
:host {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

:host([alignment=vertical]) {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}
:host([alignment=vertical]) ::slotted(igc-radio:not(:first-of-type)) {
  -webkit-margin-before: 0.5rem;
          margin-block-start: 0.5rem;
}

:host([alignment=horizontal]) {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
}
:host([alignment=horizontal]) ::slotted(igc-radio:not(:first-of-type)) {
  -webkit-margin-start: 0.5rem;
          margin-inline-start: 0.5rem;
}`;var Ii=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};x(Ci);class Si extends r.oi{constructor(){super(),this.alignment="vertical",this.handleKeydown=e=>{const{key:t}=e;if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t)){const a=this.radios.find((e=>e.checked));let r=this.radios.indexOf(a);const i=O(this);switch(t){case"ArrowUp":r+=-1;break;case"ArrowLeft":r+=i?-1:1;break;case"ArrowRight":r+=i?1:-1;break;default:r+=1}r<0&&(r=this.radios.length-1),r>this.radios.length-1&&(r=0),this.radios.forEach((e=>e.checked=!1)),this.radios[r].focus(),this.radios[r].checked=!0,e.preventDefault()}},this.addEventListener("keydown",this.handleKeydown),this.addEventListener("igcChange",this.updateRequiredState)}updateRequiredState(){this.radios.some((e=>e.required))&&(this.radios.forEach((e=>e.required=!1)),this.radios.some((e=>e.checked))?this.radios.filter((e=>e.checked))[0].required=!0:this.radios[0].required=!0)}render(){return r.dy`<slot @slotchange=${this.updateRequiredState}></slot>`}}Si.tagName="igc-radio-group",Si.styles=Di,Ii([(0,i.NH)({flatten:!0,selector:"igc-radio:not([disabled])"})],Si.prototype,"radios",void 0),Ii([(0,i.Cb)({reflect:!0})],Si.prototype,"alignment",void 0);var $i=a(1474);const Pi=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */
:host {
  --symbol-full-color: hsla(var(--ig-warn-500), var(--ig-warn-a));
  --symbol-empty-color: hsla(var(--ig-gray-600), var(--ig-gray-a));
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  font-family: var(--ig-font-family);
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  gap: 0.25rem;
}

:host([size=large]) {
  --component-size: var(--ig-size, var(--ig-size-large));
}

:host([size=medium]) {
  --component-size: var(--ig-size, var(--ig-size-medium));
}

:host([size=small]) {
  --component-size: var(--ig-size, var(--ig-size-small));
}

[part=base] {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  gap: 0.25rem;
}

[part~=symbols] {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  padding: 0.125rem;
  gap: 0.125rem;
  inset-inline-start: 0;
}

[part~=value-label] {
  font-family: var(--ig-subtitle-1-font-family);
  font-size: var(--ig-subtitle-1-font-size);
  font-weight: var(--ig-subtitle-1-font-weight);
  font-style: var(--ig-subtitle-1-font-style);
  line-height: var(--ig-subtitle-1-line-height);
  letter-spacing: var(--ig-subtitle-1-letter-spacing);
  text-transform: var(--ig-subtitle-1-text-transform);
  margin-top: var(--ig-subtitle-1-margin-top);
  margin-bottom: var(--ig-subtitle-1-margin-bottom);
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}

[part~=label] {
  font-family: var(--ig-caption-font-family);
  font-size: var(--ig-caption-font-size);
  font-weight: var(--ig-caption-font-weight);
  font-style: var(--ig-caption-font-style);
  line-height: var(--ig-caption-line-height);
  letter-spacing: var(--ig-caption-letter-spacing);
  text-transform: var(--ig-caption-text-transform);
  margin-top: var(--ig-caption-margin-top);
  margin-bottom: var(--ig-caption-margin-bottom);
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
  -webkit-padding-start: 0.25rem;
          padding-inline-start: 0.25rem;
  height: auto;
  width: auto;
  min-height: 0;
  min-width: 0;
  margin: 0;
}

:host(:not([disabled], [readonly])) [part~=symbols] {
  cursor: pointer;
}

:host([disabled]) {
  --symbol-full-color: hsla(var(--ig-warn-200), var(--ig-warn-a));
  --symbol-empty-color: hsla(var(--ig-gray-400), var(--ig-gray-a));
  --symbol-full-filter: grayscale(50%);
  --symbol-empty-filter: grayscale(100%) opacity(50%);
}
:host([disabled]) [part~=value-label],
:host([disabled]) [part~=label] {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}
:host([disabled]) [part~=symbols] {
  cursor: initial;
}`,Mi=r.iv`/* stylelint-disable max-line-length */
[part=base] {
  gap: 0.4375rem;
}

[part~=label] {
  font-family: var(--ig-body-1-font-family);
  font-size: var(--ig-body-1-font-size);
  font-weight: var(--ig-body-1-font-weight);
  font-style: var(--ig-body-1-font-style);
  line-height: var(--ig-body-1-line-height);
  letter-spacing: var(--ig-body-1-letter-spacing);
  text-transform: var(--ig-body-1-text-transform);
  margin-top: var(--ig-body-1-margin-top);
  margin-bottom: var(--ig-body-1-margin-bottom);
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}

[part~=value-label] {
  font-family: var(--ig-body-2-font-family);
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}`,Ei=r.iv`/* stylelint-disable max-line-length */
[part=base],
:host {
  gap: 0.375rem;
}

[part~=label] {
  font-family: var(--ig-subtitle-2-font-family);
  font-size: var(--ig-subtitle-2-font-size);
  font-weight: var(--ig-subtitle-2-font-weight);
  font-style: var(--ig-subtitle-2-font-style);
  line-height: var(--ig-subtitle-2-line-height);
  letter-spacing: var(--ig-subtitle-2-letter-spacing);
  text-transform: var(--ig-subtitle-2-text-transform);
  margin-top: var(--ig-subtitle-2-margin-top);
  margin-bottom: var(--ig-subtitle-2-margin-bottom);
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}

[part~=value-label] {
  font-family: var(--ig-body-2-font-family);
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}

:host([disabled]) [part~=symbols-wrapper] {
  color: hsla(var(--ig-gray-200), var(--ig-gray-a));
}
:host([disabled]) [part~=value-label],
:host([disabled]) [part~=label] {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}
:host([disabled]) [part="symbols-wrapper selected"] {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}`,Ti=r.iv`/* stylelint-disable max-line-length */
:host {
  gap: 0.3125rem;
}

[part=base] {
  gap: 0.5rem;
}

[part~=label] {
  font-family: var(--ig-body-1-font-family);
  font-size: var(--ig-body-1-font-size);
  font-weight: var(--ig-body-1-font-weight);
  font-style: var(--ig-body-1-font-style);
  line-height: var(--ig-body-1-line-height);
  letter-spacing: var(--ig-body-1-letter-spacing);
  text-transform: var(--ig-body-1-text-transform);
  margin-top: var(--ig-body-1-margin-top);
  margin-bottom: var(--ig-body-1-margin-bottom);
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}

[part~=value-label] {
  font-family: var(--ig-body-1-font-family);
  font-size: var(--ig-body-1-font-size);
  font-weight: var(--ig-body-1-font-weight);
  font-style: var(--ig-body-1-font-style);
  line-height: var(--ig-body-1-line-height);
  letter-spacing: var(--ig-body-1-letter-spacing);
  text-transform: var(--ig-body-1-text-transform);
  margin-top: var(--ig-body-1-margin-top);
  margin-bottom: var(--ig-body-1-margin-bottom);
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}`,Oi=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */
:host {
  --symbol-size: max(var(--is-large, 1) * 2.25rem, var(--is-medium, 1) * 1.5rem, var(--is-small, 1) * 1.125rem);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  width: var(--symbol-size);
  height: var(--symbol-size);
}

[part~=symbol] {
  position: absolute;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  color: inherit;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  width: var(--symbol-size);
  height: var(--symbol-size);
  min-width: var(--symbol-size);
  min-height: var(--symbol-size);
  font-size: var(--symbol-size);
  font-family: sans-serif;
  line-height: 100%;
  letter-spacing: 0;
}
[part~=symbol] igc-icon {
  --size: var(--symbol-size);
}

[part="symbol full"] {
  color: var(--symbol-full-color);
}

[part="symbol empty"] {
  color: var(--symbol-empty-color);
}

::slotted(*) {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

::slotted(igc-icon) {
  --size: var(--symbol-size);
}

slot:not([name])::slotted(:not(igc-icon)) {
  -webkit-filter: var(--symbol-full-filter, grayscale(0));
          filter: var(--symbol-full-filter, grayscale(0));
}

[name=empty]::slotted(:not(igc-icon)) {
  -webkit-filter: var(--symbol-empty-filter, grayscale(1));
          filter: var(--symbol-empty-filter, grayscale(1));
}`;class Vi extends r.oi{render(){return r.dy`
      <div part="symbol full">
        <slot> </slot>
      </div>
      <div part="symbol empty">
        <slot name="empty"></slot>
      </div>
    `}}Vi.tagName="igc-rating-symbol",Vi.styles=[Oi];var Ri=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};x(Vi,X);let Ai=class extends(v(z(r.oi))){constructor(){super(),this.ratingSymbols=[],this.hoverValue=-1,this.hoverState=!1,this.max=5,this.step=1,this.value=0,this.disabled=!1,this.hoverPreview=!1,this.readonly=!1,this.single=!1,this.addEventListener("keydown",this.handleKeyDown)}get isInteractive(){return!(this.readonly||this.disabled)}get hasProjectedSymbols(){return this.ratingSymbols.length>0}get valueText(){const e=this.round(this.value);return this.valueFormat?this.valueFormat.replace(/\{0\}/gm,`${e}`).replace(/\{1\}/gm,`${this.max}`):`${e} of ${this.max}`}handleMaxChange(){this.hasProjectedSymbols?this.max=this.ratingSymbols.length:this.max=Math.max(0,this.max),this.max<this.value&&(this.value=this.max)}handleValueChange(){this.value=M(this.value,0,this.max)}handlePrecisionChange(){this.step=this.single?1:M(this.step,.001,1)}handleSelectionChange(){this.single&&(this.step=1,this.value=Math.ceil(this.value))}handleClick({clientX:e}){if(!this.isInteractive)return;const t=this.calcNewValue(e);this.value===t?this.value=0:this.value=t,this.emitEvent("igcChange",{detail:this.value})}handleMouseMove({clientX:e}){if(!this.isInteractive)return;const t=this.calcNewValue(e);this.hoverValue!==t&&(this.hoverValue=t,this.emitEvent("igcHover",{detail:this.hoverValue}))}handleMouseEnter(){this.isInteractive&&(this.hoverState=!0)}handleMouseLeave(){this.isInteractive&&(this.hoverState=!1)}handleKeyDown({key:e}){if(!this.isInteractive)return;let t=this.value;const a=O(this);switch(e){case"ArrowUp":case"ArrowRight":t+=a?this.step:-this.step;break;case"ArrowDown":case"ArrowLeft":t-=a?this.step:-this.step;break;case"Home":t=this.step;break;case"End":t=this.max;break;default:return}this.value=M(t,0,this.max),t===this.value&&this.emitEvent("igcChange",{detail:this.value})}handleSlotChange(e){const t=e.target;this.ratingSymbols=t.assignedElements().filter((e=>e instanceof Vi)),this.hasProjectedSymbols&&(this.max=this.ratingSymbols.length),this.requestUpdate()}calcNewValue(e){const{width:t,left:a,right:r}=this.container.getBoundingClientRect(),i=O(this)?(e-a)/t:(r-e)/t,o=this.round(this.max*i+this.step/2);return M(o,this.step,this.max)}getPrecision(e){const[t,a]=e.toString().split(".");return a?a.length:0}round(e){return e=Math.round(e/this.step)*this.step,Number(e.toFixed(this.getPrecision(this.step)))}clipSymbol(e,t=!0){const a=e+1-(this.hoverState?this.hoverValue:this.value),r=0===a||this.value===e+1?0:1,i=this.single?r:a,o=e=>M(100*e,0,100),s=`inset(0 ${o(t?i:1-i)}% 0 0)`,n=`inset(0 0 0 ${o(t?1-i:i)}%)`;return{backward:t?n:s,forward:t?s:n}}stepUp(e=1){this.value+=this.round(e*this.step)}stepDown(e=1){this.value-=this.round(e*this.step)}*renderSymbols(){const e=O(this);for(let t=0;t<this.max;t++){const{forward:a,backward:i}=this.clipSymbol(t,e);yield r.dy`<igc-rating-symbol exportparts="symbol, full, empty">
        <igc-icon
          collection="internal"
          name="star"
          style=${(0,ge.V)({clipPath:a})}
        ></igc-icon>
        <igc-icon
          collection="internal"
          name="star_border"
          style=${(0,ge.V)({clipPath:i})}
          slot="empty"
        ></igc-icon>
      </igc-rating-symbol>`}}clipProjected(){if(this.hasProjectedSymbols){const e=O(this);this.ratingSymbols.forEach(((t,a)=>{var r,i;const o=null===(r=t.shadowRoot)||void 0===r?void 0:r.querySelector('[part="symbol full"]'),s=null===(i=t.shadowRoot)||void 0===i?void 0:i.querySelector('[part="symbol empty"]'),{forward:n,backward:l}=this.clipSymbol(a,e);o&&(o.style.clipPath=n),s&&(s.style.clipPath=l)}))}}render(){const e=[this.value,this.hoverValue,this.max,this.step,this.single,this.hoverState,this.ratingSymbols];return r.dy`
      <label part="label" id="rating-label" ?hidden=${!this.label}
        >${this.label}</label
      >
      <div
        part="base"
        role="slider"
        tabindex=${(0,s.o)(this.disabled?void 0:0)}
        aria-labelledby="rating-label"
        aria-valuemin="0"
        aria-valuenow=${this.value}
        aria-valuemax=${this.max}
        aria-valuetext=${this.valueText}
      >
        <div
          aria-hidden="true"
          part="symbols"
          @click=${this.handleClick}
          @mouseenter=${this.hoverPreview?this.handleMouseEnter:r.Ld}
          @mouseleave=${this.hoverPreview?this.handleMouseLeave:r.Ld}
          @mousemove=${this.hoverPreview?this.handleMouseMove:r.Ld}
        >
          <slot @slotchange=${this.handleSlotChange}>
            ${(0,$i.l)(e,(()=>(this.clipProjected(),this.renderSymbols())))}
          </slot>
        </div>
        <label part="value-label" ?hidden=${0===this.valueLabel.length}>
          <slot name="value-label"></slot>
        </label>
      </div>
    `}};Ai.tagName="igc-rating",Ai.styles=[Pi],Ri([(0,i.IO)('[part="symbols"]',!0)],Ai.prototype,"container",void 0),Ri([(0,i.vZ)({slot:"value-label",flatten:!0})],Ai.prototype,"valueLabel",void 0),Ri([(0,i.SB)()],Ai.prototype,"hoverValue",void 0),Ri([(0,i.SB)()],Ai.prototype,"hoverState",void 0),Ri([(0,i.Cb)({type:Number})],Ai.prototype,"max",void 0),Ri([(0,i.Cb)({type:Number})],Ai.prototype,"step",void 0),Ri([(0,i.Cb)()],Ai.prototype,"name",void 0),Ri([(0,i.Cb)()],Ai.prototype,"label",void 0),Ri([(0,i.Cb)({attribute:"value-format"})],Ai.prototype,"valueFormat",void 0),Ri([(0,i.Cb)({type:Number})],Ai.prototype,"value",void 0),Ri([(0,i.Cb)({type:Boolean,reflect:!0})],Ai.prototype,"disabled",void 0),Ri([(0,i.Cb)({type:Boolean,reflect:!0,attribute:"hover-preview"})],Ai.prototype,"hoverPreview",void 0),Ri([(0,i.Cb)({type:Boolean,reflect:!0})],Ai.prototype,"readonly",void 0),Ri([(0,i.Cb)({type:Boolean})],Ai.prototype,"single",void 0),Ri([b("max")],Ai.prototype,"handleMaxChange",null),Ri([b("value")],Ai.prototype,"handleValueChange",null),Ri([b("step")],Ai.prototype,"handlePrecisionChange",null),Ri([b("single")],Ai.prototype,"handleSelectionChange",null),Ai=Ri([p({fluent:Ei,bootstrap:Mi,indigo:Ti})],Ai);const Fi=Ai,Li=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

:host {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  contain: content;
  overflow: hidden;
}`;class ji extends r.oi{constructor(){super(),this.handler=({clientX:e,clientY:t})=>{var a;const r=document.createElement("span"),{radius:i,top:o,left:s}=this.getDimensions(e,t),n={position:"absolute",display:"block",pointerEvents:"none",transformOrigin:"center",transform:"translate3d(0, 0, 0) scale(0)",willChange:"opacity, transform",margin:"0 !important",border:"none !important",width:`${i}px`,height:`${i}px`,borderRadius:"50%",top:`${o}px`,left:`${s}px`,background:"var(--color, hsl(var(--ig-gray-800)))"};Object.assign(r.style,n),null===(a=this.shadowRoot)||void 0===a||a.appendChild(r),r.animate([{opacity:.5,transform:"scale(.3)"},{opacity:0,transform:"scale(2)"}],{duration:600,fill:"forwards",easing:"linear"}).finished.then((()=>r.remove()))},this.addEventListener("mousedown",this.handler)}getDimensions(e,t){const{width:a,height:r,left:i,top:o}=this.getBoundingClientRect(),s=Math.max(a,r),n=Math.round(e-i-s/2);return{radius:s,top:Math.round(t-o-s/2),left:n}}render(){return r.dy`<div></div>`}}ji.tagName="igc-ripple",ji.styles=Li;const _i=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */
:host {
  display: block;
}

slot {
  display: none;
}

[part~=base] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: relative;
  -webkit-box-flex: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  height: 3rem;
  -webkit-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
  font-family: var(--ig-font-family);
}

[part=track] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 2rem), 2rem);
  position: relative;
  width: 100%;
  overflow: hidden;
}

[part=fill] {
  position: absolute;
  background: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  border-radius: inherit;
}

[part=inactive] {
  position: absolute;
  width: 100%;
  top: 0.0625rem;
  background: hsla(var(--ig-secondary-500), 0.24);
  -webkit-transition: background 0.2s ease-out;
  -o-transition: background 0.2s ease-out;
  transition: background 0.2s ease-out;
  border-radius: inherit;
}

[part=steps] {
  position: absolute;
  width: 100%;
  height: 0.25rem;
  opacity: 0.85;
  -webkit-transition: opacity 0.2s ease-out;
  -o-transition: opacity 0.2s ease-out;
  transition: opacity 0.2s ease-out;
  top: 50%;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
          transform: translateY(-50%);
  color: white;
}
[part=steps] svg {
  -webkit-clip-path: inset(0 0.1875rem 0 0.1875rem);
          clip-path: inset(0 0.1875rem 0 0.1875rem);
}
[part=steps] line {
  -webkit-transform: translateY(25%);
      -ms-transform: translateY(25%);
          transform: translateY(25%);
  stroke: currentcolor;
  stroke-width: 0.1875rem;
  stroke-linecap: round;
}

[part=ticks] {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: absolute;
  bottom: 0;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}
[part=ticks]:first-child {
  bottom: auto;
  top: 0;
  -webkit-box-align: end;
      -ms-flex-align: end;
          align-items: flex-end;
}
[part=ticks]:first-child [part=tick-label] {
  top: auto;
  bottom: 1.5rem;
}

[part=tick-group]:first-of-type {
  -webkit-margin-start: -0.0625rem;
          margin-inline-start: -0.0625rem;
}
[part=tick-group]:last-of-type {
  -webkit-margin-start: -0.0625rem;
          margin-inline-start: -0.0625rem;
}

[part=tick] {
  background: hsla(var(--ig-gray-500), var(--ig-gray-a));
  height: 0.5rem;
  width: 0.125rem;
}

[part=tick][data-primary=true] {
  height: 1rem;
}

[part=tick-label] {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
  position: absolute;
  top: 1.5rem;
  line-height: 0.7;
  opacity: 1;
  -webkit-transition: opacity 0.2s ease-in-out;
  -o-transition: opacity 0.2s ease-in-out;
  transition: opacity 0.2s ease-in-out;
  font-family: var(--ig-caption-font-family);
  font-size: var(--ig-caption-font-size);
  font-weight: var(--ig-caption-font-weight);
  font-style: var(--ig-caption-font-style);
  line-height: var(--ig-caption-line-height);
  letter-spacing: var(--ig-caption-letter-spacing);
  text-transform: var(--ig-caption-text-transform);
  margin-top: var(--ig-caption-margin-top);
  margin-bottom: var(--ig-caption-margin-bottom);
}

[part=tick-label-inner] {
  -webkit-margin-start: -50%;
          margin-inline-start: -50%;
}

[part=thumbs] {
  position: absolute;
  width: 100%;
  height: 0;
  cursor: default;
  inset-inline-start: 0;
}

[part~=thumb] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.625rem), 0.625rem);
  position: absolute;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  outline-style: none;
  -webkit-transition: border-radius 0.1s ease-out, -webkit-transform 0.1s ease-out;
  transition: border-radius 0.1s ease-out, -webkit-transform 0.1s ease-out;
  -o-transition: transform 0.1s ease-out, border-radius 0.1s ease-out;
  transition: transform 0.1s ease-out, border-radius 0.1s ease-out;
  transition: transform 0.1s ease-out, border-radius 0.1s ease-out, -webkit-transform 0.1s ease-out;
  background: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
}

[part=thumb-label] {
  position: absolute;
  top: calc((1.875rem + 1.25rem) * -1);
  pointer-events: none;
  height: 1.875rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

[part=thumb-label-inner] {
  font-family: var(--ig-caption-font-family);
  font-size: var(--ig-caption-font-size);
  font-weight: var(--ig-caption-font-weight);
  font-style: var(--ig-caption-font-style);
  line-height: var(--ig-caption-line-height);
  letter-spacing: var(--ig-caption-letter-spacing);
  text-transform: var(--ig-caption-text-transform);
  margin-top: var(--ig-caption-margin-top);
  margin-bottom: var(--ig-caption-margin-bottom);
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.125rem), 0.125rem);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  min-width: 2.5rem;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  white-space: nowrap;
  -webkit-margin-start: -50%;
          margin-inline-start: -50%;
  padding: 0 0.125rem;
  color: var(--ig-gray-700-contrast);
  background: hsla(var(--ig-gray-700), var(--ig-gray-a));
}
[part=thumb-label-inner]::after {
  content: "";
  position: absolute;
  top: 85%;
  border-left: 0.625rem solid transparent;
  border-right: 0.625rem solid transparent;
  border-top: 0.625rem solid hsla(var(--ig-gray-700), var(--ig-gray-a));
}

:host(:not([tick-label-rotation="0"])) [part=tick-label-inner] {
  -webkit-writing-mode: vertical-rl;
      -ms-writing-mode: tb-rl;
          writing-mode: vertical-rl;
  -webkit-margin-start: 0;
          margin-inline-start: 0;
  margin-block: -50%;
}

:host([tick-label-rotation="-90"]) [part=tick-label-inner] {
  -webkit-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
          transform: rotate(180deg);
}

:host([disabled]) {
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  pointer-events: none;
  cursor: initial;
}
:host([disabled]) [part=inactive] {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
}
:host([disabled]) [part=fill],
:host([disabled]) [part=tick] {
  background: hsla(var(--ig-gray-400), var(--ig-gray-a));
}
:host([disabled]) [part=tick-label] {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}
:host([disabled]) [part~=thumb] {
  background: hsla(var(--ig-gray-400), var(--ig-gray-a));
}
:host([disabled]) [part~=thumb]:focus::after {
  -webkit-transform: scale(0);
      -ms-transform: scale(0);
          transform: scale(0);
}
:host([disabled]):hover [part=inactive] {
  background: hsla(var(--ig-gray-400), var(--ig-gray-a));
}
:host([disabled]):hover [part~=thumb] {
  border-color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}`,Xi=r.iv`/* stylelint-disable max-line-length */
[part=track],
[part=inactive] {
  height: 0.5rem;
}

[part=fill] {
  display: none;
}

[part=inactive] {
  background: var(--inactive-background, hsla(var(--ig-secondary-500), 0.24));
}

[part~=thumb] {
  width: 1rem;
  height: 1rem;
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  top: calc((1rem - calc(1rem / 2)) * -1);
  -webkit-margin-start: calc((1rem - calc(1rem / 2)) * -1);
          margin-inline-start: calc((1rem - calc(1rem / 2)) * -1);
}
[part~=thumb]:focus {
  border: 0.0625rem solid hsla(var(--ig-surface-500), var(--ig-surface-a));
  -webkit-box-shadow: 0 0 0 0.1875rem hsla(var(--ig-primary-200), var(--ig-primary-a));
          box-shadow: 0 0 0 0.1875rem hsla(var(--ig-primary-200), var(--ig-primary-a));
}`,Bi=r.iv`/* stylelint-disable max-line-length */
:host(:hover) [part=fill] {
  background: var(--fill-hover-background, hsla(var(--ig-primary-500), var(--ig-primary-a)));
}
:host(:hover) [part~=thumb] {
  border-color: var(--thumb-hover-border, hsla(var(--ig-primary-700), var(--ig-primary-a)));
}

[part~=focused]::after {
  position: absolute;
  content: "";
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-box-shadow: 0 0 0 0.0625rem hsla(var(--ig-gray-700), var(--ig-gray-a));
          box-shadow: 0 0 0 0.0625rem hsla(var(--ig-gray-700), var(--ig-gray-a));
  width: calc(1rem + (0.125rem * 2));
  height: calc(1rem + (0.125rem * 2));
}

[part=track],
[part=fill],
[part=inactive] {
  height: 0.25rem;
}

[part=inactive] {
  background: var(--inactive-background, hsla(var(--ig-gray-600), var(--ig-gray-a)));
  top: initial;
}

[part=fill] {
  background: var(--fill-background, hsla(var(--ig-gray-800), var(--ig-gray-a)));
}

[part~=thumb] {
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
  border: 0.125rem solid var(--thumb-border, hsla(var(--ig-gray-700), var(--ig-gray-a)));
  width: 1rem;
  height: 1rem;
  top: calc((1rem - 0.5rem) * -1);
  -webkit-margin-start: calc((1rem - 0.5rem) * -1);
          margin-inline-start: calc((1rem - 0.5rem) * -1);
}

[part=thumb-label-inner] {
  background: var(--fill-hover-background, hsla(var(--ig-primary-500), var(--ig-primary-a)));
}
[part=thumb-label-inner]::after {
  border-top: 0.625rem solid var(--fill-hover-background, hsla(var(--ig-primary-500), var(--ig-primary-a)));
}

:host([disabled]) [part=inactive] {
  background: var(--inactive-disabled-background, hsla(var(--ig-gray-100), var(--ig-gray-a)));
}
:host([disabled]) [part=fill] {
  background: var(--fill-disabled-background, hsla(var(--ig-gray-500), var(--ig-gray-a)));
}
:host([disabled]) [part~=thumb] {
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
  border-color: var(--thumb-disabled-border, hsla(var(--ig-gray-400), var(--ig-gray-a)));
}`,Ni=r.iv`/* stylelint-disable max-line-length */
[part=base]:hover [part=inactive] {
  background: var(--inactive-hover-background, hsla(var(--ig-gray-500), var(--ig-gray-a)));
}
[part=base]:hover [part=fill] {
  background: hsla(var(--ig-primary-400), var(--ig-primary-a));
}

[part=inactive] {
  background: var(--inactive-background, hsla(var(--ig-gray-400), var(--ig-gray-a)));
}

[part=track],
[part=fill],
[part=inactive] {
  height: 0.125rem;
  top: initial;
  border-radius: initial;
}

[part=steps] {
  height: 0.125rem;
}
[part=steps] line {
  -webkit-transform: none;
      -ms-transform: none;
          transform: none;
}

[part~=thumb] {
  width: 0.875rem;
  height: 0.875rem;
  top: calc((0.875rem - 0.4375rem) * -1);
  -webkit-margin-start: calc((0.875rem - 0.4375rem) * -1);
          margin-inline-start: calc((0.875rem - 0.4375rem) * -1);
}
[part~=thumb]:focus {
  -webkit-box-shadow: 0 0 0 0.1875rem hsla(var(--ig-primary-200), var(--ig-primary-a));
          box-shadow: 0 0 0 0.1875rem hsla(var(--ig-primary-200), var(--ig-primary-a));
}
[part~=thumb]::after {
  display: none;
}

:host([disabled]) [part~=thumb],
:host([disabled]) [part=fill],
:host([disabled]) [part=inactive] {
  background: hsla(var(--ig-gray-300), var(--ig-gray-a));
}`,Yi=r.iv`/* stylelint-disable max-line-length */
[part=track] {
  height: 0.375rem;
}

[part=fill] {
  height: 0.375rem;
}

[part=inactive] {
  height: 0.25rem;
  top: 0.0625rem;
}

[part=steps] {
  color: hsla(var(--ig-secondary-200), var(--ig-secondary-a));
}

[part~=thumb] {
  width: 1.25rem;
  height: 1.25rem;
  top: calc((1.25rem - 0.625rem) * -1);
  -webkit-margin-start: calc((1.25rem - 0.625rem) * -1);
          margin-inline-start: calc((1.25rem - 0.625rem) * -1);
}
[part~=thumb]::after {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 1.25rem), 1.25rem);
  position: absolute;
  content: "";
  width: 2.5rem;
  height: 2.5rem;
  background: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  top: calc(50% - 1.25rem);
  inset-inline-start: calc(50% - 1.25rem);
  opacity: 0;
  -webkit-transform: scale(0);
      -ms-transform: scale(0);
          transform: scale(0);
  -webkit-transform-origin: center center;
      -ms-transform-origin: center center;
          transform-origin: center center;
  -webkit-transition: opacity 0.1s ease-out, -webkit-transform 0.1s ease-out;
  transition: opacity 0.1s ease-out, -webkit-transform 0.1s ease-out;
  -o-transition: transform 0.1s ease-out, opacity 0.1s ease-out;
  transition: transform 0.1s ease-out, opacity 0.1s ease-out;
  transition: transform 0.1s ease-out, opacity 0.1s ease-out, -webkit-transform 0.1s ease-out;
  overflow: hidden;
}
[part~=thumb]:hover::after {
  opacity: 0.12;
  -webkit-transform: scale(1);
      -ms-transform: scale(1);
          transform: scale(1);
}
[part~=thumb]:focus::after {
  opacity: 0.18;
  -webkit-transform: scale(1);
      -ms-transform: scale(1);
          transform: scale(1);
}
[part~=thumb]:active::after {
  opacity: 0.24;
}`;class Ui extends r.oi{createRenderRoot(){return this}}Ui.styles=r.iv`
    :host {
      display: none;
    }
  `,Ui.tagName="igc-slider-label";var Hi=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};x(Ui);let Wi=class extends r.oi{constructor(){super(),this._min=0,this._max=100,this._step=1,this.pointerCaptured=!1,this.thumbLabelsVisible=!1,this.disabled=!1,this.discreteTrack=!1,this.hideTooltip=!1,this.primaryTicks=0,this.secondaryTicks=0,this.tickOrientation="end",this.hidePrimaryLabels=!1,this.hideSecondaryLabels=!1,this.locale="en",this.tickLabelRotation=0,this.pointerDown=e=>{var t;this.closestHandle(e).focus(),this.startValue=this.activeValue,this.updateSlider(e.clientX),this.setPointerCapture(e.pointerId),this.pointerCaptured=!0,this.showThumbLabels(),e.preventDefault(),null===(t=this.activeThumb)||void 0===t||t.part.remove("focused")},this.pointerMove=e=>{this.pointerCaptured&&this.updateSlider(e.clientX)},this.lostPointerCapture=()=>{this.pointerCaptured=!1,this.hideThumbLabels(),this.startValue!==this.activeValue&&this.emitChangeEvent(),this.startValue=void 0},this.handleKeydown=e=>{if(this.disabled)return;const{key:t}=e;let a=0;const r=this.activeValue,i=this.step?this.step:1,o=O(this);switch(t){case"ArrowLeft":a+=o?-i:i;break;case"ArrowRight":a+=o?i:-i;break;case"ArrowUp":a=i;break;case"ArrowDown":a=-i;break;case"Home":a=this.actualMin-r;break;case"End":a=this.actualMax-r;break;case"PageUp":a=Math.max((this.actualMax-this.actualMin)/10,i);break;case"PageDown":a=-Math.max((this.actualMax-this.actualMin)/10,i);break;default:return}if(a){const e=this.updateValue(a);this.showThumbLabels(),this.hideThumbLabels(),e&&this.emitChangeEvent()}},this.handleThumbPointerEnter=()=>{this.showThumbLabels()},this.handleThumbPointerLeave=()=>{this.hideThumbLabels()},this.addEventListener("pointerdown",this.pointerDown),this.addEventListener("pointermove",this.pointerMove),this.addEventListener("lostpointercapture",this.lostPointerCapture),this.addEventListener("keydown",this.handleKeydown)}set min(e){if(e<this.max){const t=this._min;this._min=this.labels?0:e,this.requestUpdate("min",t),"number"==typeof this.lowerBound&&this.lowerBound<e&&(this.lowerBound=e)}}get min(){return this._min}set max(e){if(e>this.min){const t=this._max;this._max=this.labels?this.labels.length-1:e,this.requestUpdate("max",t),"number"==typeof this.upperBound&&this.upperBound>e&&(this.upperBound=e)}}get max(){return this._max}set lowerBound(e){const t=this._lowerBound;this._lowerBound="number"==typeof e?this.valueInRange(e,this.min,this.actualMax):e,this.requestUpdate("lowerBound",t)}get lowerBound(){return this._lowerBound}set upperBound(e){const t=this._upperBound;this._upperBound="number"==typeof e?this.valueInRange(e,this.actualMin,this.max):e,this.requestUpdate("upperBound",t)}get upperBound(){return this._upperBound}set step(e){const t=this._step;this._step=this.labels?1:e,this.requestUpdate("step",t)}get step(){return this._step}constraintsChange(){this.normalizeValue()}labelsChange(){this.labels&&(this.min=0,this.max=this.labels.length-1,this.step=1)}connectedCallback(){super.connectedCallback(),this.normalizeValue(),this.addEventListener("keyup",this.handleKeyUp)}disconnectedCallback(){this.removeEventListener("keyup",this.handleKeyUp)}handleKeyUp(){var e;null===(e=this.activeThumb)||void 0===e||e.part.add("focused")}handleSlotChange(){this.labels=this.labelElements&&this.labelElements.length?this.labelElements.map((e=>e.textContent)):void 0}get activeValue(){return 0}normalizeValue(){}getTrackStyle(){return{}}updateValue(e){return!1}renderThumbs(){return r.dy``}emitInputEvent(){}emitChangeEvent(){}get actualMin(){return"number"==typeof this.lowerBound?this.lowerBound:this.min}get actualMax(){return"number"==typeof this.upperBound?this.upperBound:this.max}validateValue(e){return e=this.valueInRange(e,this.actualMin,this.actualMax),this.normalizeByStep(e)}formatValue(e){return this.valueFormat?this.valueFormat.replace("{0}",e.toLocaleString(this.locale,this.valueFormatOptions)):e.toLocaleString(this.locale,this.valueFormatOptions)}normalizeByStep(e){return this.step?e-(e-this.actualMin)%this.step:e}closestHandle(e){return this.thumb}totalTickCount(){const e=this.labels?this.primaryTicks>0?this.labels.length:0:1===this.primaryTicks?2:this.primaryTicks;return e>0?(e-1)*this.secondaryTicks+e:this.secondaryTicks>0?this.secondaryTicks:0}tickValue(e){const t=this.totalTickCount(),a=(t>1?(this.max-this.min)/(t-1):this.max-this.min)*e;return this.min+a}isPrimary(e){return!(this.primaryTicks<=0)&&e%(this.secondaryTicks+1)==0}showThumbLabels(){this.disabled||this.hideTooltip||(this.thumbHoverTimer&&(clearTimeout(this.thumbHoverTimer),this.thumbHoverTimer=null),this.thumbLabelsVisible=!0)}hideThumbLabels(){!this.pointerCaptured&&this.thumbLabelsVisible&&(this.thumbHoverTimer=setTimeout((()=>{this.thumbLabelsVisible=!1}),750))}valueInRange(e,t=0,a=100){return Math.max(Math.min(e,a),t)}valueToFraction(e){return(e-this.min)/(this.max-this.min)}calculateTrackUpdate(e){if(!this.activeThumb)return 0;const t=this.activeThumb.getBoundingClientRect(),a=(t.right-t.left)/2,r=t.left+a,i=this.getBoundingClientRect().width/(this.max-this.min),o=O(this)?e-r:r-e;if(this.step){const e=i*this.step,t=e/2;return Math.abs(o)<t?0:Math.round(o/e)*this.step}return o/i}updateSlider(e){if(this.disabled)return;const t=this.calculateTrackUpdate(e);this.activeThumb&&0!==t&&this.updateValue(t)}renderTicks(){const e=[];for(let t=0,a=this.totalTickCount();t<a;t++){const a=this.isPrimary(t);e.push(r.dy`
        <div part="tick-group">
          <div part="tick" data-primary=${a}>
            ${(a?this.hidePrimaryLabels:this.hideSecondaryLabels)?r.dy``:r.dy`
                  <div part="tick-label">
                    <span part="tick-label-inner">
                      ${this.labels?a?this.labels[Math.round(t/(this.secondaryTicks+1))]:"":this.formatValue(this.tickValue(t))}
                    </span>
                  </div>
                `}
          </div>
        </div>
      `)}return e}renderThumb(e,t,a){const i=100*this.valueToFraction(e)+"%";return r.dy`
      <div
        part="thumb"
        id=${(0,s.o)(a)}
        tabindex=${this.disabled?-1:0}
        style=${(0,ge.V)({insetInlineStart:i})}
        role="slider"
        aria-valuemin=${this.actualMin}
        aria-valuemax=${this.actualMax}
        aria-valuenow=${e}
        aria-valuetext=${(0,s.o)(this.labels?this.labels[e]:this.valueFormat||this.valueFormatOptions?this.formatValue(e):void 0)}
        aria-label=${(0,s.o)(t)}
        aria-disabled=${this.disabled?"true":"false"}
        @pointerenter=${this.handleThumbPointerEnter}
        @pointerleave=${this.handleThumbPointerLeave}
        @focus=${e=>this.activeThumb=e.target}
        @blur=${()=>{var e;return null===(e=this.activeThumb)||void 0===e||e.part.remove("focused"),this.activeThumb=void 0}}
      ></div>
      ${this.hideTooltip?r.dy``:r.dy`
            <div
              part="thumb-label"
              style=${(0,ge.V)({opacity:this.thumbLabelsVisible?"1":"0",insetInlineStart:i})}
            >
              <div part="thumb-label-inner">
                ${this.labels?this.labels[e]:this.formatValue(e)}
              </div>
            </div>
          `}
    `}renderSteps(){if(!this.discreteTrack||!this.step)return r.dy``;const e=100/((this.max-this.min)/this.step)*10/10;return r.dy`
      <div part="steps">
        <svg width="100%" height="100%" style="display: flex">
          <line
            x1="0"
            y1="1"
            x2="100%"
            y2="1"
            stroke="currentColor"
            stroke-dasharray="0, calc(${e*Math.sqrt(2)}%)"
            stroke-linecap="round"
            stroke-width="2px"
          ></line>
        </svg>
      </div>
    `}render(){return r.dy`
      <div part="base">
        ${"mirror"===this.tickOrientation||"start"===this.tickOrientation?r.dy`<div part="ticks">${this.renderTicks()}</div>`:r.dy``}
        <div part="track">
          <div part="inactive"></div>
          <div part="fill" style=${(0,ge.V)(this.getTrackStyle())}></div>
          ${this.renderSteps()}
        </div>
        ${"start"!==this.tickOrientation?r.dy`<div part="ticks">${this.renderTicks()}</div>`:r.dy``}
        <div part="thumbs">${this.renderThumbs()}</div>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};Wi.styles=_i,Hi([(0,i.IO)("[part~='thumb']")],Wi.prototype,"thumb",void 0),Hi([(0,i.NH)({selector:"igc-slider-label"})],Wi.prototype,"labelElements",void 0),Hi([(0,i.SB)()],Wi.prototype,"thumbLabelsVisible",void 0),Hi([(0,i.SB)()],Wi.prototype,"labels",void 0),Hi([(0,i.Cb)({type:Number})],Wi.prototype,"min",null),Hi([(0,i.Cb)({type:Number})],Wi.prototype,"max",null),Hi([(0,i.Cb)({type:Number,attribute:"lower-bound"})],Wi.prototype,"lowerBound",null),Hi([(0,i.Cb)({type:Number,attribute:"upper-bound"})],Wi.prototype,"upperBound",null),Hi([(0,i.Cb)({type:Boolean,reflect:!0})],Wi.prototype,"disabled",void 0),Hi([(0,i.Cb)({type:Boolean,attribute:"discrete-track"})],Wi.prototype,"discreteTrack",void 0),Hi([(0,i.Cb)({type:Boolean,attribute:"hide-tooltip"})],Wi.prototype,"hideTooltip",void 0),Hi([(0,i.Cb)({type:Number})],Wi.prototype,"step",null),Hi([(0,i.Cb)({type:Number,attribute:"primary-ticks"})],Wi.prototype,"primaryTicks",void 0),Hi([(0,i.Cb)({type:Number,attribute:"secondary-ticks"})],Wi.prototype,"secondaryTicks",void 0),Hi([(0,i.Cb)({attribute:"tick-orientation"})],Wi.prototype,"tickOrientation",void 0),Hi([(0,i.Cb)({type:Boolean,attribute:"hide-primary-labels"})],Wi.prototype,"hidePrimaryLabels",void 0),Hi([(0,i.Cb)({type:Boolean,attribute:"hide-secondary-labels"})],Wi.prototype,"hideSecondaryLabels",void 0),Hi([(0,i.Cb)()],Wi.prototype,"locale",void 0),Hi([(0,i.Cb)({attribute:"value-format"})],Wi.prototype,"valueFormat",void 0),Hi([(0,i.Cb)({attribute:!1})],Wi.prototype,"valueFormatOptions",void 0),Hi([(0,i.Cb)({type:Number,reflect:!0,attribute:"tick-label-rotation"}),(e,t)=>{}],Wi.prototype,"tickLabelRotation",void 0),Hi([b("min",{waitUntilFirstUpdate:!0}),b("max",{waitUntilFirstUpdate:!0}),b("lowerBound",{waitUntilFirstUpdate:!0}),b("upperBound",{waitUntilFirstUpdate:!0}),b("step",{waitUntilFirstUpdate:!0})],Wi.prototype,"constraintsChange",null),Hi([b("labels")],Wi.prototype,"labelsChange",null),Wi=Hi([p({material:Yi,bootstrap:Xi,fluent:Bi,indigo:Ni}),J],Wi);var Ki=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};class qi extends(z(Wi)){constructor(){super(...arguments),this._lower=0,this._upper=0}set lower(e){const t=this._lower;this._lower=this.validateValue(e),this.requestUpdate("lower",t)}get lower(){return this._lower}set upper(e){const t=this._upper;this._upper=this.validateValue(e),this.requestUpdate("upper",t)}get upper(){return this._upper}get activeValue(){return this.activeThumb===this.thumbFrom?this.lower:this.upper}normalizeValue(){this._lower=this.validateValue(this._lower),this._upper=this.validateValue(this._upper)}getTrackStyle(){const e=this.valueToFraction(this.upper),t=this.valueToFraction(this.lower);return{width:100*(e-t)+"%",insetInlineStart:100*t+"%"}}closestTo(e,t){return t.reduce(((t,a)=>Math.abs(e-a)<Math.abs(e-t)?a:t))}closestHandle(e){const t=this.thumbFrom.offsetLeft+this.thumbFrom.offsetWidth/2,a=this.thumbTo.offsetLeft+this.thumbTo.offsetWidth/2,r=e.clientX-this.getBoundingClientRect().left,i=this.closestTo(r,[t,a]);return t===a&&a<r?this.thumbTo:t===a&&a>r||i===t?this.thumbFrom:this.thumbTo}updateValue(e){const t=this.activeValue;let a=this.lower,r=this.upper;return this.activeThumb===this.thumbFrom?a+=e:r+=e,a>=r?(this.swapValues(a,r),this.toggleActiveThumb()):this.activeThumb===this.thumbFrom?this.lower=a:this.upper=r,t!==this.activeValue&&(this.emitInputEvent(),!0)}emitInputEvent(){this.emitEvent("igcInput",{detail:{lower:this.lower,upper:this.upper}})}emitChangeEvent(){this.emitEvent("igcChange",{detail:{lower:this.lower,upper:this.upper}})}swapValues(e,t){this.lower=t,this.upper=e}toggleActiveThumb(){(this.activeThumb===this.thumbFrom?this.thumbTo:this.thumbFrom).focus()}handleFocus(e){var t,a;this.activeThumb=e.target;const r=null===(t=this.activeThumb)||void 0===t?void 0:t.id,i=null===(a=this.shadowRoot)||void 0===a?void 0:a.querySelectorAll('div[part="thumb"]');null==i||i.forEach((e=>{var t;if(e.id!==r){const a=parseFloat(this.activeThumb.ariaValueNow),r=parseFloat(e.ariaValueNow),i=Math.min(a,r),o=Math.max(a,r);null===(t=this.activeThumb)||void 0===t||t.setAttribute("aria-valuetext",`${this.formatValue(i)} - ${this.formatValue(o)}`)}}))}renderThumb(e,t,a){const i=100*this.valueToFraction(e)+"%",o="thumbFrom"===a?`min ${this.lower}`:`max ${this.upper}`,n=this.labels?this.labels[e]:this.valueFormat||this.valueFormatOptions?this.formatValue(e):o;return r.dy`
      <div
        part="thumb"
        id=${(0,s.o)(a)}
        tabindex=${this.disabled?-1:0}
        style=${(0,ge.V)({insetInlineStart:i})}
        role="slider"
        aria-valuemin=${this.actualMin}
        aria-valuemax=${this.actualMax}
        aria-valuenow=${e}
        aria-valuetext=${(0,s.o)(n)}
        aria-label=${(0,s.o)(t)}
        aria-disabled=${this.disabled?"true":"false"}
        @pointerenter=${this.handleThumbPointerEnter}
        @pointerleave=${this.handleThumbPointerLeave}
        @focus=${e=>this.handleFocus(e)}
        @blur=${()=>{var e;return null===(e=this.activeThumb)||void 0===e||e.part.remove("focused"),this.activeThumb=void 0}}
      ></div>
      ${this.hideTooltip?r.dy``:r.dy`
            <div
              part="thumb-label"
              style=${(0,ge.V)({opacity:this.thumbLabelsVisible?"1":"0",insetInlineStart:i})}
            >
              <div part="thumb-label-inner">
                ${this.labels?this.labels[e]:this.formatValue(e)}
              </div>
            </div>
          `}
    `}renderThumbs(){return r.dy`${this.renderThumb(this.lower,this.ariaLabelLower,"thumbFrom")}
    ${this.renderThumb(this.upper,this.ariaLabelUpper,"thumbTo")}`}}qi.tagName="igc-range-slider",Ki([(0,i.IO)("#thumbFrom")],qi.prototype,"thumbFrom",void 0),Ki([(0,i.IO)("#thumbTo")],qi.prototype,"thumbTo",void 0),Ki([(0,i.Cb)({type:Number})],qi.prototype,"lower",null),Ki([(0,i.Cb)({type:Number})],qi.prototype,"upper",null),Ki([(0,i.Cb)({attribute:"aria-label-lower"})],qi.prototype,"ariaLabelLower",void 0),Ki([(0,i.Cb)({attribute:"aria-label-upper"})],qi.prototype,"ariaLabelUpper",void 0);const Gi=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */
:host {
  font-family: var(--ig-font-family);
  position: fixed;
  bottom: 0;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
}

[part~=base] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: row nowrap;
      flex-wrap: row nowrap;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  min-height: 3rem;
  padding: 0.4375rem 1.5rem;
  margin: 0.5rem;
  gap: 1.5rem;
  color: var(--ig-gray-900-contrast);
  background: hsla(var(--ig-gray-900), 0.9);
  -webkit-box-shadow: var(--ig-elevation-4);
          box-shadow: var(--ig-elevation-4);
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  -webkit-backdrop-filter: blur(8px);
          backdrop-filter: blur(8px);
}

[part~=message] {
  font-family: var(--ig-body-2-font-family);
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
  display: -webkit-inline-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-box-flex: 1;
      -ms-flex: 1 1 50%;
          flex: 1 1 50%;
}

:host([action-text]) igc-button::part(base) {
  text-transform: uppercase;
  font-weight: 600;
}
:host([action-text]) igc-button::part(base):hover::before {
  background: transparent;
}
:host([action-text]) igc-button::part(base):focus {
  background: transparent;
  outline: none;
  -webkit-box-shadow: none;
          box-shadow: none;
}
:host([action-text]) igc-button::part(base):focus::before {
  background: transparent;
}

:host(:not([open])) [part=base] {
  display: none;
}`,Zi=r.iv`/* stylelint-disable max-line-length */
[part~=base] {
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
  color: var(--ig-surface-500-contrast);
  -webkit-box-shadow: var(--ig-elevation-10);
          box-shadow: var(--ig-elevation-10);
}

igc-button::part(base):hover {
  color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}`,Qi=r.iv`/* stylelint-disable max-line-length */
[part~=base] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.125rem), 0.125rem);
}

[part~=message] {
  font-family: var(--ig-caption-font-family);
  font-size: var(--ig-caption-font-size);
  font-weight: var(--ig-caption-font-weight);
  font-style: var(--ig-caption-font-style);
  line-height: var(--ig-caption-line-height);
  letter-spacing: var(--ig-caption-letter-spacing);
  text-transform: var(--ig-caption-text-transform);
  margin-top: var(--ig-caption-margin-top);
  margin-bottom: var(--ig-caption-margin-bottom);
}

igc-button::part(base),
igc-button::part(base):hover {
  color: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
}

igc-button::part(base):focus-visible::after {
  display: none;
}`,Ji=r.iv`/* stylelint-disable max-line-length */
[part~=base] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.375rem), 0.375rem);
  background: var(--background-color, hsla(var(--ig-gray-700), 0.9));
  color: var(--text-color, var(--ig-gray-700-contrast));
}

igc-button::part(base),
igc-button::part(base):hover {
  color: var(--text-color, var(--ig-gray-700-contrast));
}`;var eo=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};x(ce);let to=class extends(z(r.oi)){constructor(){super(...arguments),this.open=!1,this.displayTime=4e3,this.keepOpen=!1}show(){this.open||(this.open=!0,clearTimeout(this.autoHideTimeout),this.open&&!this.keepOpen&&(this.autoHideTimeout=window.setTimeout((()=>this.hide()),this.displayTime)))}hide(){this.open&&(this.open=!1,clearTimeout(this.autoHideTimeout))}toggle(){this.open?this.hide():this.show()}handleClick(){this.emitEvent("igcAction")}render(){return r.dy`
      <div part="base">
        <span part="message">
          <slot></slot>
        </span>
        ${this.actionText?r.dy`
              <igc-button
                variant="flat"
                part="action"
                size="small"
                @click=${this.handleClick}
              >
                ${(0,s.o)(this.actionText)}
              </igc-button>
            `:r.Ld}
      </div>
    `}};to.tagName="igc-snackbar",to.styles=Gi,eo([(0,i.Cb)({type:Boolean,reflect:!0})],to.prototype,"open",void 0),eo([(0,i.Cb)({type:Number,attribute:"display-time"})],to.prototype,"displayTime",void 0),eo([(0,i.Cb)({type:Boolean,attribute:"keep-open"})],to.prototype,"keepOpen",void 0),eo([(0,i.Cb)({attribute:"action-text"})],to.prototype,"actionText",void 0),to=eo([p({bootstrap:Zi,fluent:Qi,indigo:Ji})],to);const ao=to;var ro=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};class io extends(z(Wi)){constructor(){super(...arguments),this._value=0}set value(e){const t=this._value;this._value=this.validateValue(e),this.requestUpdate("value",t)}get value(){return this._value}set ariaLabel(e){const t=this._ariaLabel;this._ariaLabel=e,this.hasAttribute("aria-label")&&this.removeAttribute("aria-label"),this.requestUpdate("ariaLabel",t)}get ariaLabel(){return this._ariaLabel}get activeValue(){return this.value}normalizeValue(){this._value=this.validateValue(this._value)}getTrackStyle(){return{width:100*this.valueToFraction(this.value)+"%"}}updateValue(e){const t=this.value;return this.value=this.value+e,t!==this.value&&(this.emitInputEvent(),!0)}emitInputEvent(){this.emitEvent("igcInput",{detail:this.value})}emitChangeEvent(){this.emitEvent("igcChange",{detail:this.value})}stepUp(e=1){this.value=this.value+e*this.step}stepDown(e=1){this.value=this.value-e*this.step}renderThumbs(){return r.dy`${this.renderThumb(this.value,this.ariaLabel)}`}}io.tagName="igc-slider",ro([(0,i.Cb)({type:Number})],io.prototype,"value",null),ro([(0,i.Cb)({attribute:"aria-label"})],io.prototype,"ariaLabel",null);const oo=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */
:host {
  display: block;
}

:host([alignment=start]) [part=headers-scroll] ::slotted(igc-tab:last-of-type) {
  -webkit-margin-end: auto;
          margin-inline-end: auto;
}

:host([alignment=end]) [part=headers-scroll] ::slotted(igc-tab:first-of-type) {
  -webkit-margin-start: auto;
          margin-inline-start: auto;
}

:host([alignment=center]) [part=headers-scroll] ::slotted(igc-tab:first-of-type) {
  -webkit-margin-start: auto;
          margin-inline-start: auto;
}
:host([alignment=center]) [part=headers-scroll] ::slotted(igc-tab:last-of-type) {
  -webkit-margin-end: auto;
          margin-inline-end: auto;
}

:host([alignment=justify]) [part=headers-scroll] ::slotted(igc-tab) {
  -ms-flex-preferred-size: 100px;
      flex-basis: 100px;
  -webkit-box-flex: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
  max-width: 100%;
}

[part=headers] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
  min-height: 2.625rem;
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
}

[part=headers-content] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
          flex: 1 1 auto;
  scroll-behavior: smooth;
  overflow: hidden;
}

[part=headers-wrapper] {
  position: relative;
  -webkit-box-flex: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
}

[part=headers-scroll] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
}

[part=selected-indicator] {
  position: absolute;
  inset-inline-start: 0;
  bottom: 0;
  -webkit-transform: translateX(0);
      -ms-transform: translateX(0);
          transform: translateX(0);
  height: 0.125rem;
  min-width: 5.625rem;
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  -webkit-transition: width 0.2s cubic-bezier(0.35, 0, 0.25, 1), -webkit-transform 0.3s cubic-bezier(0.35, 0, 0.25, 1);
  transition: width 0.2s cubic-bezier(0.35, 0, 0.25, 1), -webkit-transform 0.3s cubic-bezier(0.35, 0, 0.25, 1);
  -o-transition: transform 0.3s cubic-bezier(0.35, 0, 0.25, 1), width 0.2s cubic-bezier(0.35, 0, 0.25, 1);
  transition: transform 0.3s cubic-bezier(0.35, 0, 0.25, 1), width 0.2s cubic-bezier(0.35, 0, 0.25, 1);
  transition: transform 0.3s cubic-bezier(0.35, 0, 0.25, 1), width 0.2s cubic-bezier(0.35, 0, 0.25, 1), -webkit-transform 0.3s cubic-bezier(0.35, 0, 0.25, 1);
}

[part=start-scroll-button],
[part=end-scroll-button] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  z-index: 1;
  border: none;
  padding: 0;
  min-width: 3rem;
  width: 3rem;
  cursor: pointer;
  position: relative;
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
}
[part=start-scroll-button]:hover, [part=start-scroll-button]:focus,
[part=end-scroll-button]:hover,
[part=end-scroll-button]:focus {
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
}
[part=start-scroll-button] ::slotted(*),
[part=end-scroll-button] ::slotted(*) {
  -webkit-box-shadow: none;
          box-shadow: none;
}

igc-icon-button::part(base) {
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}
igc-icon-button::part(base):hover, igc-icon-button::part(base):focus-within {
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  background: transparent;
  -webkit-box-shadow: none;
          box-shadow: none;
}

igc-icon-button[disabled]::part(base) {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

:host([dir=rtl]) [part=start-scroll-button],
:host([dir=rtl]) [part=end-scroll-button] {
  -webkit-transform: scaleX(-1);
      -ms-transform: scaleX(-1);
          transform: scaleX(-1);
}`,so=r.iv`/* stylelint-disable max-line-length */
[part=headers] {
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
}

[part=headers-wrapper]::after {
  content: "";
  position: absolute;
  bottom: 0;
  inset-inline-start: 0;
  width: 100%;
  height: 0.0625rem;
  background: hsla(var(--ig-gray-300), var(--ig-gray-a));
  z-index: 0;
}

igc-icon-button::part(base) {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}
igc-icon-button::part(base):hover, igc-icon-button::part(base):focus-within {
  color: hsla(var(--ig-gray-600), var(--ig-gray-a));
}

igc-icon-button[disabled]::part(base) {
  color: hsla(var(--ig-primary-500), 0.5);
}

[part=selected-indicator] {
  display: none;
}`,no=r.iv`/* stylelint-disable max-line-length */
igc-icon-button::part(base) {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}
igc-icon-button::part(base):hover, igc-icon-button::part(base):focus-within {
  color: hsla(var(--ig-gray-600), var(--ig-gray-a));
}

igc-icon-button[disabled]::part(base) {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
  background: inherit;
}`,lo=r.iv`/* stylelint-disable max-line-length */
[part=headers] {
  background: transparent;
}

[part=start-scroll-button],
[part=end-scroll-button] {
  background: transparent;
}
[part=start-scroll-button]:hover, [part=start-scroll-button]:focus,
[part=end-scroll-button]:hover,
[part=end-scroll-button]:focus {
  background: transparent;
}

[part=selected-indicator] {
  background: hsla(var(--ig-primary-400), var(--ig-primary-a));
}`,co={attributes:!0,attributeFilter:["selected"],childList:!0,subtree:!0};function go(e,...t){return!t||t.includes(e.nodeName.toLowerCase())}const ho=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */
:host {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -ms-flex-negative: 0;
      flex-shrink: 0;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  min-width: 5.625rem;
  max-width: 22.5rem;
  word-wrap: break-word;
  padding: 0.75rem 1rem;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  -webkit-transition: all 0.3s cubic-bezier(0.35, 0, 0.25, 1);
  -o-transition: all 0.3s cubic-bezier(0.35, 0, 0.25, 1);
  transition: all 0.3s cubic-bezier(0.35, 0, 0.25, 1);
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}

:host(:hover),
:host(:focus-within) {
  background: var(--hover-background, hsla(var(--ig-gray-200), var(--ig-gray-a)));
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}

:host([selected]) {
  color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}
:host([selected]) ::slotted(igc-icon) {
  color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}

:host([selected]:hover),
:host([selected]:focus-within) {
  color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}

:host([disabled]) {
  pointer-events: none;
  cursor: initial;
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

[part=base] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  outline-style: none;
  gap: 0.5rem;
}

[part=content] {
  font-family: var(--ig-button-font-family);
  font-size: var(--ig-button-font-size);
  font-weight: var(--ig-button-font-weight);
  font-style: var(--ig-button-font-style);
  line-height: var(--ig-button-line-height);
  letter-spacing: var(--ig-button-letter-spacing);
  text-transform: var(--ig-button-text-transform);
  margin-top: var(--ig-button-margin-top);
  margin-bottom: var(--ig-button-margin-bottom);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  text-align: center;
  outline-style: none;
}
[part=content] ::slotted(*) {
  display: -webkit-inline-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
[part=content] ::slotted(igc-icon:not(:only-child)) {
  margin-bottom: 0.5rem;
}

::slotted(igc-icon) {
  --size: 1.5rem;
}`,po=r.iv`/* stylelint-disable max-line-length */
:host {
  background: transparent;
  -webkit-transition: none;
  -o-transition: none;
  transition: none;
  border-start-start-radius: 0.25rem;
  border-start-end-radius: 0.25rem;
  color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}

:host(:hover) {
  background: transparent;
  color: var(--hover-color, hsla(var(--ig-primary-700), var(--ig-primary-a)));
  -webkit-box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-gray-200), var(--ig-gray-a));
          box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-gray-200), var(--ig-gray-a));
}

:host([selected]) {
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
  position: relative;
  -webkit-box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-gray-300), var(--ig-gray-a));
          box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-gray-300), var(--ig-gray-a));
}
:host([selected]) ::slotted(igc-icon) {
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
}
:host([selected])::after {
  content: "";
  position: absolute;
  bottom: 0;
  inset-inline-start: 0;
  width: 100%;
  height: 0.0625rem;
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
  z-index: 1;
}

:host([selected]:hover) {
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
  border-top-color: hsla(var(--ig-gray-300), var(--ig-gray-a));
  border-inline-color: hsla(var(--ig-gray-300), var(--ig-gray-a));
  border-bottom-color: hsla(var(--ig-surface-500), var(--ig-surface-a));
}

:host(:focus-within),
:host([selected]:focus-within) {
  color: var(--hover-color, hsla(var(--ig-primary-700), var(--ig-primary-a)));
  background: transparent;
  -webkit-box-shadow: inset 0 0 0 0.125rem hsla(var(--ig-primary-700), var(--ig-primary-a));
          box-shadow: inset 0 0 0 0.125rem hsla(var(--ig-primary-700), var(--ig-primary-a));
  border-radius: 0.25rem;
  z-index: 1;
}
:host(:focus-within)::after,
:host([selected]:focus-within)::after {
  display: none;
}

:host([selected]:focus-within) {
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
}

:host([disabled]) {
  color: hsla(var(--ig-primary-500), 0.5);
}`,bo=r.iv`/* stylelint-disable max-line-length */
:host {
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}
:host ::slotted(igc-icon) {
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}

:host(:hover),
:host(:focus-within) {
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}

:host([disabled]) {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}
:host([disabled]) ::slotted(igc-icon) {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}`,vo=r.iv`/* stylelint-disable max-line-length */
:host {
  background: transparent;
}

:host(:hover),
:host(:focus-within) {
  background: transparent;
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}

:host([selected]) {
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}
:host([selected]) ::slotted(igc-icon) {
  color: hsla(var(--ig-primary-400), var(--ig-primary-a));
}

:host([selected]:hover),
:host([selected]:focus-within) {
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}`;var mo,uo=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};let fo=mo=class extends r.oi{constructor(){super(...arguments),this.panel="",this.selected=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.id=this.getAttribute("id")||`igc-tab-${mo.increment()}`}focus(e){this.tab.focus(e)}blur(){this.tab.blur()}render(){return r.dy`
      <div
        part="base"
        role="tab"
        aria-disabled=${this.disabled?"true":"false"}
        aria-selected=${this.selected?"true":"false"}
        tabindex=${this.disabled||!this.selected?-1:0}
      >
        <slot name="prefix" part="prefix"></slot>
        <div part="content">
          <slot></slot>
        </div>
        <slot name="suffix" part="suffix"></slot>
      </div>
    `}};fo.tagName="igc-tab",fo.styles=ho,fo.increment=T(),uo([(0,i.IO)('[part="base"]',!0)],fo.prototype,"tab",void 0),uo([(0,i.Cb)({type:String})],fo.prototype,"panel",void 0),uo([(0,i.Cb)({type:Boolean,reflect:!0})],fo.prototype,"selected",void 0),uo([(0,i.Cb)({type:Boolean,reflect:!0})],fo.prototype,"disabled",void 0),fo=mo=uo([p({bootstrap:po,fluent:bo,indigo:vo})],fo);const yo=fo,wo=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */
:host {
  overflow: hidden;
  -webkit-box-flex: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
}`;class ko extends r.oi{connectedCallback(){super.connectedCallback(),this.setAttribute("role","tabpanel"),this.tabIndex=this.hasAttribute("tabindex")?this.tabIndex:0,this.slot=this.slot.length>0?this.slot:"panel",this.id=this.getAttribute("id")||`igc-tab-panel-${ko.increment()}`}render(){return r.dy`<slot></slot>`}}ko.tagName="igc-tab-panel",ko.styles=wo,ko.increment=T();var xo,zo=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};x(yo,ko,xr);let Co=xo=class extends(z(r.oi)){constructor(){super(...arguments),this.showScrollButtons=!1,this.disableStartScrollButton=!0,this.disableEndScrollButton=!1,this.alignment="start",this.activation="auto",this.handleKeyDown=e=>{var t;const{key:a}=e,r=this.enabledTabs,i=O(this);let o=r.indexOf(null===(t=document.activeElement)||void 0===t?void 0:t.closest("igc-tab"));switch(a){case"ArrowLeft":o=i?(r.length+o-1)%r.length:(o+1)%r.length;break;case"ArrowRight":o=i?(o+1)%r.length:(r.length+o-1)%r.length;break;case"Home":o=0;break;case"End":o=r.length-1;break;case"Enter":case" ":this.setSelectedTab(r[o]);break;default:return}r[o].focus({preventScroll:!0}),"auto"===this.activation?(this.setSelectedTab(r[o]),this.emitEvent("igcChange",{detail:this.activeTab})):r[o].scrollIntoView({block:"nearest"}),e.preventDefault()}}get enabledTabs(){return this.tabs.filter((e=>!e.disabled))}get selected(){var e,t;return null!==(t=null===(e=this.activeTab)||void 0===e?void 0:e.panel)&&void 0!==t?t:""}alignIndicator(){const e={visibility:this.activeTab?"visible":"hidden",transitionDuration:"0.3s"};this.activeTab&&Object.assign(e,{width:`${this.activeTab.offsetWidth}px`,transform:`translate(${O(this)?E(this.activeTab,this.wrapper).left:E(this.activeTab,this.wrapper).right}px)`}),Object.assign(this.selectedIndicator.style,e)}async firstUpdated(){var e;this.showScrollButtons=this.container.scrollWidth>this.container.clientWidth,await this.updateComplete,this.syncAttributes(),this.setupObserver(),this.setSelectedTab(null!==(e=this.tabs.filter((e=>e.selected)).at(-1))&&void 0!==e?e:this.enabledTabs.at(0)),this.updateSelectedTab()}disconnectedCallback(){var e,t;null===(e=this.resizeObserver)||void 0===e||e.disconnect(),null===(t=this.mutationObserver)||void 0===t||t.disconnect(),super.disconnectedCallback()}updateButtonsOnResize(){this.showScrollButtons=!1,this.performUpdate(),this.showScrollButtons=this.container.scrollWidth>this.container.clientWidth,this.updateScrollButtons()}updateScrollButtons(){const{scrollLeft:e,offsetWidth:t}=this.container,{scrollWidth:a}=this.wrapper;this.disableEndScrollButton=a<=Math.abs(e)+t,this.disableStartScrollButton=0===e}setupObserver(){this.resizeObserver=new ResizeObserver((()=>{this.updateButtonsOnResize(),this.alignIndicator()})),[this.container,this.wrapper,...this.tabs].forEach((e=>this.resizeObserver.observe(e))),this.mutationObserver=new MutationObserver((async(e,t)=>{var a;t.disconnect();const r=function(e,...t){return e.filter((({type:e,target:a})=>"attributes"===e&&go(a,...t))).map((({target:e})=>e))}(e,"igc-tab"),i=function(e,t,...a){const r={addedNodes:[],removedNodes:[]};return e.filter((({type:e,target:a})=>"childList"===e&&(!t||a.isSameNode(t)))).reduce(((e,t)=>(e.addedNodes=e.addedNodes.concat(Array.from(t.addedNodes).filter((e=>go(e,...a))).map((e=>e))),e.removedNodes=e.removedNodes.concat(Array.from(t.removedNodes).filter((e=>go(e,...a))).map((e=>e))),e)),r),r.addedNodes.length||r.removedNodes.length?r:null}(e,this,"igc-tab");r.length>0&&(this.activeTab=r.find((e=>e.selected))),i&&(i.addedNodes.forEach((e=>{this.resizeObserver.observe(e),e.selected&&(this.activeTab=e)})),i.removedNodes.forEach((e=>{this.resizeObserver.unobserve(e),(e.selected||this.activeTab===e)&&(this.activeTab=void 0)})),this.syncAttributes()),this.updateSelectedTab(),null===(a=this.activeTab)||void 0===a||a.scrollIntoView({block:"nearest"}),this.alignIndicator(),await this.updateComplete,t.observe(this,co)})),this.mutationObserver.observe(this,co)}updateSelectedTab(){this.tabs.forEach((e=>e.selected=e===this.activeTab)),this.panels.forEach((e=>{var t;e.hidden=e.id!==(null===(t=this.activeTab)||void 0===t?void 0:t.panel)}))}syncAttributes(){const e=this.id?`${this.id}-`:"";this.tabs.forEach(((t,a)=>{var r,i,o;t.panel||(t.panel=null!==(i=null===(r=this.panels.at(a))||void 0===r?void 0:r.id)&&void 0!==i?i:`${e}tab-${xo.increment()}`),null===(o=this.panels.find((e=>e.id===t.panel)))||void 0===o||o.setAttribute("aria-labelledby",t.id)}))}setSelectedTab(e){e&&e!==this.activeTab&&(this.activeTab&&(this.activeTab.selected=!1),this.activeTab=e,this.activeTab.selected=!0)}scrollByTabOffset(e){const{scrollLeft:t,offsetWidth:a}=this.container,r=O(this),i="end"===e,o=Math.abs(i?a+t:t);let s=this.tabs.map((e=>({start:r?E(e,this.wrapper).left:Math.abs(E(e,this.wrapper).right),width:e.offsetWidth}))).filter((e=>i?e.start+e.width>o:e.start<o)).at(i?0:-1).width;s*=i?1:-1,this.container.scrollBy({left:r?s:-s})}handleClick(e){const t=e.target.closest("igc-tab");t&&this.contains(t)&&!t.disabled&&(t.focus(),this.setSelectedTab(t),this.emitEvent("igcChange",{detail:this.activeTab}))}handleScroll(){this.updateScrollButtons()}select(e){this.setSelectedTab(this.tabs.find((t=>t.panel===e)))}renderScrollButton(e){const t="start"===e;return this.showScrollButtons?r.dy`<igc-icon-button
          tabindex="-1"
          aria-hidden="true"
          size="large"
          variant="flat"
          collection="internal"
          part="${e}-scroll-button"
          name="navigate_${t?"before":"next"}"
          .disabled=${t?this.disableStartScrollButton:this.disableEndScrollButton}
          @click=${()=>this.scrollByTabOffset(e)}
        ></igc-icon-button>`:r.Ld}render(){return r.dy`
      <div part="headers">
        ${this.renderScrollButton("start")}
        <div part="headers-content" @scroll=${this.handleScroll}>
          <div part="headers-wrapper">
            <div
              part="headers-scroll"
              role="tablist"
              @click=${this.handleClick}
              @keydown=${this.handleKeyDown}
            >
              <slot></slot>
            </div>
            <div part="selected-indicator"></div>
          </div>
        </div>
        ${this.renderScrollButton("end")}
      </div>
      <div part="content">
        <slot name="panel"></slot>
      </div>
    `}};Co.tagName="igc-tabs",Co.styles=oo,Co.increment=T(),zo([(0,i.NH)({selector:"igc-tab"})],Co.prototype,"tabs",void 0),zo([(0,i.NH)({slot:"panel"})],Co.prototype,"panels",void 0),zo([(0,i.IO)('[part="headers-wrapper"]',!0)],Co.prototype,"wrapper",void 0),zo([(0,i.IO)('[part="headers-content"]',!0)],Co.prototype,"container",void 0),zo([(0,i.IO)('[part="selected-indicator"]',!0)],Co.prototype,"selectedIndicator",void 0),zo([(0,i.SB)()],Co.prototype,"showScrollButtons",void 0),zo([(0,i.SB)()],Co.prototype,"disableStartScrollButton",void 0),zo([(0,i.SB)()],Co.prototype,"disableEndScrollButton",void 0),zo([(0,i.SB)()],Co.prototype,"activeTab",void 0),zo([(0,i.Cb)({reflect:!0})],Co.prototype,"alignment",void 0),zo([(0,i.Cb)()],Co.prototype,"activation",void 0),zo([b("alignment",{waitUntilFirstUpdate:!0})],Co.prototype,"alignIndicator",null),zo([(0,i.hO)({passive:!0})],Co.prototype,"handleScroll",null),Co=xo=zo([p({bootstrap:so,fluent:no,indigo:lo}),e=>e],Co);const Do=Co,Io=r.iv`/* stylelint-disable max-line-length */
:host {
  font-family: var(--ig-body-2-font-family);
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 1.625rem), 1.625rem);
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  font-family: var(--ig-font-family);
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 50%;
  -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
          transform: translateX(-50%);
  background: hsla(var(--ig-gray-700), var(--ig-gray-a));
  color: var(--ig-gray-700-contrast);
  padding: 1rem 1.5rem;
  margin: 2.625rem auto;
  min-width: 3.25rem;
  -webkit-backdrop-filter: blur(10px);
          backdrop-filter: blur(10px);
}

:host(:not([open])) {
  display: none;
}`,So=r.iv`/* stylelint-disable max-line-length */
:host {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
  color: var(--ig-surface-500-contrast);
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
  outline: 1px solid hsla(var(--ig-gray-300), var(--ig-gray-a));
  padding: 0.6875rem;
  -webkit-box-shadow: var(--ig-elevation-10);
          box-shadow: var(--ig-elevation-10);
}`,$o=r.iv`/* stylelint-disable max-line-length */
:host {
  color: var(--ig-gray-100-contrast);
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
  padding: 0.5rem 0.75rem;
  border-radius: 0;
}`,Po=r.iv`/* stylelint-disable max-line-length */
:host {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.375rem), 0.375rem);
  color: var(--ig-gray-700-contrast);
  background: hsla(var(--ig-gray-700), var(--ig-gray-a));
  padding: 0.625rem 1rem;
}`;var Mo=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};let Eo=class extends r.oi{constructor(){super(...arguments),this.open=!1,this.displayTime=4e3,this.keepOpen=!1}hide(){this.open&&(this.open=!1)}show(){window.clearTimeout(this.displayTimeout),this.open||(this.open=!0),!1===this.keepOpen&&(this.displayTimeout=setTimeout((()=>{this.open=!1}),this.displayTime))}toggle(){this.open?this.hide():this.show()}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","alert"),this.hasAttribute("aria-live")||this.setAttribute("aria-live","polite")}render(){return r.dy`<slot></slot>`}};Eo.tagName="igc-toast",Eo.styles=[Io],Mo([(0,i.Cb)({type:Boolean,reflect:!0})],Eo.prototype,"open",void 0),Mo([(0,i.Cb)({type:Number,reflect:!1,attribute:"display-time"})],Eo.prototype,"displayTime",void 0),Mo([(0,i.Cb)({type:Boolean,reflect:!0,attribute:"keep-open"})],Eo.prototype,"keepOpen",void 0),Eo=Mo([p({bootstrap:So,fluent:$o,indigo:Po})],Eo);const To=Eo,Oo=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */
:host {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  font-family: var(--ig-font-family);
  --size: 2.25rem;
  --thumb-size: 1.25rem;
  --thumb-offset: -0.0625rem;
}

input[type=checkbox] {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: none;
  clip: rect(0, 0, 0, 0);
  outline: 0;
  pointer-events: none;
  overflow: hidden;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}

label {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-flow: row nowrap;
          flex-flow: row nowrap;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  cursor: pointer;
}
label:hover [part~=thumb]::after {
  background: hsla(var(--ig-gray-600), 0.06);
}
label:focus-within [part~=thumb]::after {
  background: hsla(var(--ig-gray-600), 0.12);
}

[part~=control] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-negative: 0;
      flex-shrink: 0;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

[part~=thumb] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.625rem), 0.625rem);
  position: relative;
  -webkit-animation-name: thumb-off;
          animation-name: thumb-off;
  -webkit-animation-duration: 0.2s;
          animation-duration: 0.2s;
  -webkit-animation-fill-mode: none;
          animation-fill-mode: none;
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

[part~=thumb][part~=checked] {
  -webkit-animation-name: thumb-on;
          animation-name: thumb-on;
  -webkit-animation-duration: 0.2s;
          animation-duration: 0.2s;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
}

[part~=label] {
  font-family: var(--ig-subtitle-1-font-family);
  font-size: var(--ig-subtitle-1-font-size);
  font-weight: var(--ig-subtitle-1-font-weight);
  font-style: var(--ig-subtitle-1-font-style);
  line-height: var(--ig-subtitle-1-line-height);
  letter-spacing: var(--ig-subtitle-1-letter-spacing);
  text-transform: var(--ig-subtitle-1-text-transform);
  margin-top: var(--ig-subtitle-1-margin-top);
  margin-bottom: var(--ig-subtitle-1-margin-bottom);
  display: inline-block;
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  word-wrap: break-all;
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

:host([disabled]) {
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  pointer-events: none;
  cursor: initial;
}
:host([disabled]) [part~=label] {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}

:host(:not([disabled])[invalid]) [part~=label] {
  color: hsla(var(--ig-error-500), var(--ig-error-a));
}
:host(:not([disabled])[invalid]) [part~=thumb] {
  background: hsla(var(--ig-error-500), var(--ig-error-a));
}

:host([label-position=after]) [part~=label] {
  -webkit-margin-start: 0.5rem;
          margin-inline-start: 0.5rem;
}

:host([label-position=before]) [part~=label] {
  -webkit-box-ordinal-group: 0;
      -ms-flex-order: -1;
          order: -1;
  -webkit-margin-end: 0.5rem;
          margin-inline-end: 0.5rem;
}

@-webkit-keyframes thumb-on {
  from {
    -webkit-margin-start: var(--thumb-offset);
            margin-inline-start: var(--thumb-offset);
  }
  to {
    -webkit-margin-start: calc(var(--size) - var(--thumb-size) - var(--thumb-offset));
            margin-inline-start: calc(var(--size) - var(--thumb-size) - var(--thumb-offset));
  }
}

@keyframes thumb-on {
  from {
    -webkit-margin-start: var(--thumb-offset);
            margin-inline-start: var(--thumb-offset);
  }
  to {
    -webkit-margin-start: calc(var(--size) - var(--thumb-size) - var(--thumb-offset));
            margin-inline-start: calc(var(--size) - var(--thumb-size) - var(--thumb-offset));
  }
}
@-webkit-keyframes thumb-off {
  from {
    -webkit-margin-start: calc(var(--size) - var(--thumb-size) - var(--thumb-offset));
            margin-inline-start: calc(var(--size) - var(--thumb-size) - var(--thumb-offset));
  }
  to {
    -webkit-margin-start: var(--thumb-offset);
            margin-inline-start: var(--thumb-offset);
  }
}
@keyframes thumb-off {
  from {
    -webkit-margin-start: calc(var(--size) - var(--thumb-size) - var(--thumb-offset));
            margin-inline-start: calc(var(--size) - var(--thumb-size) - var(--thumb-offset));
  }
  to {
    -webkit-margin-start: var(--thumb-offset);
            margin-inline-start: var(--thumb-offset);
  }
}`,Vo=r.iv`/* stylelint-disable max-line-length */
:host {
  --size: 2rem;
  --thumb-size: 0.625rem;
  --thumb-offset: calc(var(--thumb-size) / 4);
}

[part~=control] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
  width: var(--size);
  height: 1rem;
  -webkit-box-shadow: inset 0 0 0 1px hsla(var(--ig-gray-400), var(--ig-gray-a));
          box-shadow: inset 0 0 0 1px hsla(var(--ig-gray-400), var(--ig-gray-a));
  background: transparent;
  -webkit-transition: background-color 0.15s ease-in-out;
  -o-transition: background-color 0.15s ease-in-out;
  transition: background-color 0.15s ease-in-out;
}
[part~=control]::after {
  content: "";
  position: absolute;
  width: inherit;
  height: inherit;
  border-radius: inherit;
}

[part~=label] {
  -webkit-transition: none;
  -o-transition: none;
  transition: none;
}

:host(:focus-within) [part~=control] {
  -webkit-box-shadow: 0 0 0 4px hsla(var(--ig-primary-100), var(--ig-primary-a));
          box-shadow: 0 0 0 4px hsla(var(--ig-primary-100), var(--ig-primary-a));
}
:host(:focus-within) [part~=control]::after {
  border: 1px solid hsla(var(--ig-primary-200), var(--ig-primary-a));
}
:host(:focus-within) [part~=thumb] {
  background: hsla(var(--ig-primary-200), var(--ig-primary-a));
}

:host(:focus-within) [part~=control][part~=checked] {
  -webkit-box-shadow: 0 0 0 4px hsla(var(--ig-primary-200), var(--ig-primary-a));
          box-shadow: 0 0 0 4px hsla(var(--ig-primary-200), var(--ig-primary-a));
}
:host(:focus-within) [part~=control][part~=checked]::after {
  border: 1px solid hsla(var(--ig-primary-500), var(--ig-primary-a));
}

[part~=control][part~=checked] {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  -webkit-box-shadow: inset 0 0 0 1px hsla(var(--ig-primary-500), var(--ig-primary-a));
          box-shadow: inset 0 0 0 1px hsla(var(--ig-primary-500), var(--ig-primary-a));
}

:host([invalid]) [part~=control],
:host([invalid]) [part~=control][part~=checked] {
  -webkit-box-shadow: inset 0 0 0 1px hsla(var(--ig-error-500), var(--ig-error-a));
          box-shadow: inset 0 0 0 1px hsla(var(--ig-error-500), var(--ig-error-a));
}

:host([invalid]) [part~=control][part~=checked],
:host([invalid]) [part~=thumb] {
  background: hsla(var(--ig-error-500), var(--ig-error-a));
}

:host([invalid]:focus-within) [part~=control] {
  -webkit-box-shadow: 0 0 0 4px hsla(var(--ig-error-100), var(--ig-error-a));
          box-shadow: 0 0 0 4px hsla(var(--ig-error-100), var(--ig-error-a));
  background: transparent;
}
:host([invalid]:focus-within) [part~=control]::after {
  border: 1px solid hsla(var(--ig-error-500), var(--ig-error-a));
}

:host([invalid]:focus-within) [part~=control][part~=checked] {
  -webkit-box-shadow: 0 0 0 4px hsla(var(--ig-error-200), var(--ig-error-a));
          box-shadow: 0 0 0 4px hsla(var(--ig-error-200), var(--ig-error-a));
  background: hsla(var(--ig-error-500), var(--ig-error-a));
}
:host([invalid]:focus-within) [part~=control][part~=checked]::after {
  border: 1px solid hsla(var(--ig-error-500), var(--ig-error-a));
}

:host([disabled]) [part~=control],
:host([disabled][invalid]) [part~=control] {
  -webkit-box-shadow: inset 0 0 0 1px hsla(var(--ig-gray-300), var(--ig-gray-a));
          box-shadow: inset 0 0 0 1px hsla(var(--ig-gray-300), var(--ig-gray-a));
}

:host([disabled]) [part~=control][part~=checked],
:host([disabled][invalid]) [part~=control][part~=checked] {
  background: hsla(var(--ig-primary-200), var(--ig-primary-a));
  -webkit-box-shadow: inset 0 0 0 1px hsla(var(--ig-primary-200), var(--ig-primary-a));
          box-shadow: inset 0 0 0 1px hsla(var(--ig-primary-200), var(--ig-primary-a));
}

[part~=thumb] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.125rem), 0.125rem);
  width: var(--thumb-size);
  height: var(--thumb-size);
  min-width: var(--thumb-size);
  -webkit-margin-start: var(--thumb-offset);
          margin-inline-start: var(--thumb-offset);
  background: hsla(var(--ig-gray-400), var(--ig-gray-a));
}

:host(:focus-within) [part~=thumb][part~=checked],
[part~=thumb][part~=checked] {
  background: white;
  -webkit-margin-start: calc(var(--size) - var(--thumb-size) - var(--thumb-offset));
          margin-inline-start: calc(var(--size) - var(--thumb-size) - var(--thumb-offset));
}

:host([disabled]) [part~=thumb],
:host([disabled][invalid]) [part~=thumb] {
  background: hsla(var(--ig-gray-300), var(--ig-gray-a));
}

:host([disabled]) [part~=thumb][part~=checked],
:host([invalid]) [part~=thumb][part~=checked],
:host([disabled][invalid]) [part~=thumb][part~=checked] {
  background: white;
}`,Ro=r.iv`/* stylelint-disable max-line-length */
:host {
  --size: 2.5rem;
  --thumb-size: 0.75rem;
  --thumb-offset: calc(var(--thumb-size) / 2);
}

[part~=control] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.625rem), 0.625rem);
  width: var(--size);
  height: 1.25rem;
  -webkit-box-shadow: inset 0 0 0 1px hsla(var(--ig-gray-700), var(--ig-gray-a));
          box-shadow: inset 0 0 0 1px hsla(var(--ig-gray-700), var(--ig-gray-a));
  background: transparent;
}

[part~=label] {
  font-family: var(--ig-body-2-font-family);
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
}

:host(:hover) [part~=control] {
  -webkit-box-shadow: inset 0 0 0 1px var(--hover-color, hsla(var(--ig-gray-800), var(--ig-gray-a)));
          box-shadow: inset 0 0 0 1px var(--hover-color, hsla(var(--ig-gray-800), var(--ig-gray-a)));
}

[part~=focused] {
  position: relative;
}
[part~=focused]::after {
  content: "";
  position: absolute;
  top: -0.125rem;
  left: -0.125rem;
  -webkit-box-shadow: 0 0 0 1px hsla(var(--ig-gray-700), var(--ig-gray-a));
          box-shadow: 0 0 0 1px hsla(var(--ig-gray-700), var(--ig-gray-a));
  width: calc(100% + (0.125rem * 2));
  height: calc(100% + (0.125rem * 2));
}

:host(:hover) [part~=thumb] {
  background: var(--hover-color, hsla(var(--ig-gray-800), var(--ig-gray-a)));
}

[part~=control][part~=checked] {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  -webkit-box-shadow: inset 0 0 0 1px hsla(var(--ig-primary-500), var(--ig-primary-a));
          box-shadow: inset 0 0 0 1px hsla(var(--ig-primary-500), var(--ig-primary-a));
}

:host(:hover) [part~=control][part~=checked] {
  background: var(--checked-hover-color, hsla(var(--ig-primary-900), var(--ig-primary-a)));
  -webkit-box-shadow: inset 0 0 0 1px var(--checked-hover-color, hsla(var(--ig-primary-900), var(--ig-primary-a)));
          box-shadow: inset 0 0 0 1px var(--checked-hover-color, hsla(var(--ig-primary-900), var(--ig-primary-a)));
}

:host([invalid]) [part~=control] {
  -webkit-box-shadow: inset 0 0 0 1px var(--invalid-color, hsla(var(--ig-error-500), var(--ig-error-a)));
          box-shadow: inset 0 0 0 1px var(--invalid-color, hsla(var(--ig-error-500), var(--ig-error-a)));
}

:host([invalid]) [part~=control][part~=checked] {
  background: var(--invalid-color, hsla(var(--ig-error-500), var(--ig-error-a)));
  -webkit-box-shadow: inset 0 0 0 1px var(--invalid-color, hsla(var(--ig-error-500), var(--ig-error-a)));
          box-shadow: inset 0 0 0 1px var(--invalid-color, hsla(var(--ig-error-500), var(--ig-error-a)));
}

:host([invalid]:hover) [part~=control] {
  -webkit-box-shadow: inset 0 0 0 1px var(--invalid-hover-color, hsla(var(--ig-error-700), var(--ig-error-a)));
          box-shadow: inset 0 0 0 1px var(--invalid-hover-color, hsla(var(--ig-error-700), var(--ig-error-a)));
}

:host([invalid]:hover) [part~=thumb] {
  background: var(--invalid-hover-color, hsla(var(--ig-error-700), var(--ig-error-a)));
}

:host([invalid]) [part~=thumb][part~=checked],
:host([invalid]:hover) [part~=thumb][part~=checked] {
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
}

:host([invalid]:hover) [part~=control][part~=checked] {
  -webkit-box-shadow: inset 0 0 0 1px var(--invalid-hover-color, hsla(var(--ig-error-700), var(--ig-error-a)));
          box-shadow: inset 0 0 0 1px var(--invalid-hover-color, hsla(var(--ig-error-700), var(--ig-error-a)));
  background: var(--invalid-hover-color, hsla(var(--ig-error-700), var(--ig-error-a)));
}

:host([disabled]) [part~=label] {
  color: var(--disabled-color, hsla(var(--ig-gray-400), var(--ig-gray-a)));
}

:host([disabled]) [part~=control],
:host([disabled][invalid]) [part~=control] {
  -webkit-box-shadow: inset 0 0 0 1px var(--disabled-color, hsla(var(--ig-gray-400), var(--ig-gray-a)));
          box-shadow: inset 0 0 0 1px var(--disabled-color, hsla(var(--ig-gray-400), var(--ig-gray-a)));
}

:host([disabled]) [part~=control][part~=checked],
:host([disabled][invalid]) [part~=control][part~=checked],
:host([disabled]) [part~=thumb],
:host([disabled][invalid]) [part~=thumb] {
  background: var(--disabled-color, hsla(var(--ig-gray-400), var(--ig-gray-a)));
}

[part~=thumb] {
  width: var(--thumb-size);
  height: var(--thumb-size);
  min-width: var(--thumb-size);
  -webkit-margin-start: var(--thumb-offset);
          margin-inline-start: var(--thumb-offset);
  background: var(--thumb-color, hsla(var(--ig-gray-700), var(--ig-gray-a)));
}

[part~=thumb][part~=checked],
:host(:hover) [part~=thumb][part~=checked] {
  background: hsla(var(--ig-gray-50), var(--ig-gray-a));
  -webkit-margin-start: calc(var(--size) - var(--thumb-size) - var(--thumb-offset));
          margin-inline-start: calc(var(--size) - var(--thumb-size) - var(--thumb-offset));
}

:host([disabled]) [part~=thumb][part~=checked],
:host([disabled][invalid]) [part~=thumb][part~=checked] {
  background: var(--disabled-thumb-color, hsla(var(--ig-gray-100), var(--ig-gray-a)));
}`,Ao=r.iv`/* stylelint-disable max-line-length */
:host {
  font-weight: 600;
  --size: 2.125rem;
  --thumb-size: 0.5rem;
  --thumb-offset: calc(var(--thumb-size) / 2);
}

[part~=control] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.5rem), 0.5rem);
  width: var(--size);
  height: 1rem;
  -webkit-box-shadow: inset 0 0 0 2px var(--border-color, hsla(var(--ig-gray-500), var(--ig-gray-a)));
          box-shadow: inset 0 0 0 2px var(--border-color, hsla(var(--ig-gray-500), var(--ig-gray-a)));
  background: transparent;
}
[part~=control]::after {
  content: "";
  position: absolute;
  width: inherit;
  height: inherit;
  border-radius: inherit;
}

:host(:hover) [part~=control] {
  -webkit-box-shadow: 0 0 0 2px hsla(var(--ig-gray-200), 0.87);
          box-shadow: 0 0 0 2px hsla(var(--ig-gray-200), 0.87);
}
:host(:hover) [part~=control]::after {
  border: 2px solid var(--border-color, hsla(var(--ig-gray-500), var(--ig-gray-a)));
}

:host(:focus-within) [part~=control] {
  -webkit-box-shadow: 0 0 0 2px hsla(var(--ig-gray-300), 0.87);
          box-shadow: 0 0 0 2px hsla(var(--ig-gray-300), 0.87);
}
:host(:focus-within) [part~=control]::after {
  border: 2px solid var(--border-color, hsla(var(--ig-gray-500), var(--ig-gray-a)));
}

[part~=control][part~=checked] {
  background: var(--checked-color, hsla(var(--ig-secondary-500), var(--ig-secondary-a)));
  -webkit-box-shadow: inset 0 0 0 2px var(--checked-color, hsla(var(--ig-secondary-500), var(--ig-secondary-a)));
          box-shadow: inset 0 0 0 2px var(--checked-color, hsla(var(--ig-secondary-500), var(--ig-secondary-a)));
}

:host(:hover) [part~=control][part~=checked] {
  -webkit-box-shadow: 0 0 0 2px hsla(var(--ig-secondary-100), 0.87);
          box-shadow: 0 0 0 2px hsla(var(--ig-secondary-100), 0.87);
}
:host(:hover) [part~=control][part~=checked]::after {
  border: 2px solid var(--checked-color, hsla(var(--ig-secondary-500), var(--ig-secondary-a)));
}

:host(:focus-within) [part~=control][part~=checked] {
  -webkit-box-shadow: 0 0 0 2px hsla(var(--ig-secondary-200), 0.87);
          box-shadow: 0 0 0 2px hsla(var(--ig-secondary-200), 0.87);
}
:host(:focus-within) [part~=control][part~=checked]::after {
  border: 2px solid var(--checked-color, hsla(var(--ig-secondary-500), var(--ig-secondary-a)));
}

:host([invalid]) [part~=control],
:host([invalid]) [part~=control][part~=checked] {
  -webkit-box-shadow: inset 0 0 0 2px hsla(var(--ig-error-500), var(--ig-error-a));
          box-shadow: inset 0 0 0 2px hsla(var(--ig-error-500), var(--ig-error-a));
}

:host([invalid]) [part~=control][part~=checked],
:host([invalid]) [part~=thumb] {
  background: hsla(var(--ig-error-500), var(--ig-error-a));
}

:host([invalid]:hover) [part~=control] {
  -webkit-box-shadow: 0 0 0 2px hsla(var(--ig-error-100), 0.87);
          box-shadow: 0 0 0 2px hsla(var(--ig-error-100), 0.87);
}
:host([invalid]:hover) [part~=control]::after {
  border: 2px solid hsla(var(--ig-error-500), var(--ig-error-a));
}

:host([invalid]:focus-within) [part~=control],
:host([invalid]:focus-within) [part~=control][part~=checked] {
  -webkit-box-shadow: 0 0 0 2px hsla(var(--ig-error-200), 0.87);
          box-shadow: 0 0 0 2px hsla(var(--ig-error-200), 0.87);
}
:host([invalid]:focus-within) [part~=control]::after,
:host([invalid]:focus-within) [part~=control][part~=checked]::after {
  border: 2px solid hsla(var(--ig-error-500), var(--ig-error-a));
}

:host([disabled]) [part~=control],
:host([disabled][invalid]) [part~=control] {
  -webkit-box-shadow: inset 0 0 0 2px var(--disabled-color, hsla(var(--ig-gray-300), var(--ig-gray-a)));
          box-shadow: inset 0 0 0 2px var(--disabled-color, hsla(var(--ig-gray-300), var(--ig-gray-a)));
}

:host([disabled]) [part~=control][part~=checked],
:host([disabled][invalid]) [part~=control][part~=checked] {
  background: transparent;
}

[part~=thumb] {
  width: var(--thumb-size);
  height: var(--thumb-size);
  min-width: var(--thumb-size);
  -webkit-animation-name: thumb-off;
          animation-name: thumb-off;
  -webkit-margin-start: var(--thumb-offset);
          margin-inline-start: var(--thumb-offset);
  background: var(--thumb-color, hsla(var(--ig-gray-600), var(--ig-gray-a)));
}

[part~=thumb][part~=checked],
:host([invalid]) [part~=thumb][part~=checked] {
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
  -webkit-animation-name: thumb-on;
          animation-name: thumb-on;
  -webkit-margin-start: calc(var(--size) - var(--thumb-size) - var(--thumb-offset));
          margin-inline-start: calc(var(--size) - var(--thumb-size) - var(--thumb-offset));
}

:host([disabled]) [part~=thumb],
:host([disabled][invalid]) [part~=thumb] {
  background: var(--disabled-color, hsla(var(--ig-gray-300), var(--ig-gray-a)));
}

:host([disabled]) [part~=label] {
  color: var(--disabled-color, hsla(var(--ig-gray-300), var(--ig-gray-a)));
}`,Fo=r.iv`/* stylelint-disable max-line-length */
[part~=control] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.4375rem), 0.4375rem);
  width: var(--size);
  height: 0.875rem;
  background: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

[part~=thumb] {
  width: var(--thumb-size);
  height: var(--thumb-size);
  min-width: var(--thumb-size);
  background: hsla(var(--ig-gray-50), var(--ig-gray-a));
  -webkit-box-shadow: var(--ig-elevation-2);
          box-shadow: var(--ig-elevation-2);
  -webkit-margin-start: var(--thumb-offset);
          margin-inline-start: var(--thumb-offset);
}
[part~=thumb]::after {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * calc(2.5rem / 2)), calc(2.5rem / 2));
  position: absolute;
  content: "";
  top: calc(50% - calc(2.5rem / 2));
  left: calc(50% - calc(2.5rem / 2));
  width: 2.5rem;
  height: 2.5rem;
  overflow: hidden;
}
[part~=thumb]:hover {
  -webkit-box-shadow: var(--ig-elevation-3);
          box-shadow: var(--ig-elevation-3);
}

label:hover [part~=thumb][part~=checked]::after {
  background: hsla(var(--ig-secondary-500), 0.06);
}
label:focus-within [part~=thumb][part~=checked]::after {
  background: hsla(var(--ig-secondary-500), 0.12);
}

:host([invalid]) label:hover [part~=thumb]::after {
  background: hsla(var(--ig-error-500), 0.06);
}
:host([invalid]) label:focus-within [part~=thumb]::after {
  background: hsla(var(--ig-error-500), 0.12);
}

[part~=control][part~=checked] {
  background: hsla(var(--ig-secondary-200), var(--ig-secondary-a));
}

[part~=thumb][part~=checked] {
  background: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  -webkit-margin-start: calc(var(--size) - var(--thumb-size) - var(--thumb-offset));
          margin-inline-start: calc(var(--size) - var(--thumb-size) - var(--thumb-offset));
  -webkit-animation-name: thumb-on;
          animation-name: thumb-on;
  -webkit-animation-duration: 0.2s;
          animation-duration: 0.2s;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
}

:host([disabled]) [part~=thumb] {
  -webkit-box-shadow: var(--ig-elevation-1);
          box-shadow: var(--ig-elevation-1);
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
}
:host([disabled]) [part~=control] {
  background: hsla(var(--ig-gray-300), var(--ig-gray-a));
}
:host([disabled]) [part~=thumb][part~=checked] {
  background: hsla(var(--ig-secondary-100), var(--ig-secondary-a));
}
:host([disabled]) [part~=control][part~=checked] {
  background: hsla(var(--ig-secondary-50), var(--ig-secondary-a));
}

:host(:not([disabled])[invalid]) [part~=control] {
  background: hsla(var(--ig-error-500), 0.5);
}`;var Lo,jo=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};let _o=Lo=class extends kt{constructor(){super(...arguments),this.inputId=`switch-${Lo.increment()}`,this.labelId=`switch-label-${this.inputId}`}handleClick(){this.checked=!this.checked,this.emitEvent("igcChange",{detail:this.checked})}handleChange(){this.invalid=!this.input.checkValidity()}render(){return r.dy`
      <label
        part=${$({base:!0,checked:this.checked})}
        for=${this.inputId}
        @pointerdown=${this.handleMouseDown}
      >
        <input
          id=${this.inputId}
          type="checkbox"
          name=${(0,s.o)(this.name)}
          value=${(0,s.o)(this.value)}
          .required=${this.required}
          .disabled=${this.disabled}
          .checked=${(0,yt.a)(this.checked)}
          aria-checked=${this.checked?"true":"false"}
          aria-disabled=${this.disabled?"true":"false"}
          aria-labelledby=${this.ariaLabelledby?this.ariaLabelledby:this.labelId}
          @click=${this.handleClick}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />
        <span
          part=${$({control:!0,checked:this.checked,focused:this.focused})}
        >
          <span
            part=${$({thumb:!0,checked:this.checked})}
          ></span>
        </span>
        <span
          part=${$({label:!0,checked:this.checked})}
          id=${this.labelId}
        >
          <slot></slot>
        </span>
      </label>
    `}};_o.tagName="igc-switch",_o.styles=Oo,_o.increment=T(),jo([b("checked",{waitUntilFirstUpdate:!0})],_o.prototype,"handleChange",null),_o=Lo=jo([p({material:Fo,bootstrap:Vo,fluent:Ro,indigo:Ao})],_o);const Xo=_o,Bo=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */
:host {
  display: block;
  overflow: auto;
  font-family: var(--ig-font-family);
}

:host([size=small]) {
  --component-size: var(--ig-size, var(--ig-size-small));
}

:host([size=medium]) {
  --component-size: var(--ig-size, var(--ig-size-medium));
}

:host([size=large]) {
  --component-size: var(--ig-size, var(--ig-size-large));
}`,No=new Set(["down","up","left","right","arrowdown","arrowup","arrowleft","arrowright","home","end","space","spacebar"," "]);class Yo{constructor(e,t){this._focusedItem=null,this._lastFocusedItem=null,this._activeItem=null,this._visibleChildren=[],this._invisibleChildren=new Set,this._disabledChildren=new Set,this.tree=e,this.selectionService=t}updateVisChild(){var e;this._visibleChildren=(null===(e=this.tree)||void 0===e?void 0:e.items)?this.tree.items.filter((e=>!(this._invisibleChildren.has(e)||this._disabledChildren.has(e)))):[]}get focusedItem(){return this._focusedItem}focusItem(e,t=!0){var a;this._focusedItem!==e&&(this._lastFocusedItem=this._focusedItem,this._lastFocusedItem&&this._lastFocusedItem.removeAttribute("tabindex"),this._focusedItem=e,null!==this._focusedItem&&t&&(this._focusedItem.tabIndex=0,this._focusedItem.focus({preventScroll:!0}),null===(a=this._focusedItem.wrapper)||void 0===a||a.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})))}get activeItem(){return this._activeItem}setActiveItem(e,t=!0){this._activeItem!==e&&(this._activeItem&&e&&(this._activeItem.active=!1),this._activeItem=e,this._activeItem&&(this._activeItem.active=!0),t&&this._activeItem&&this.tree.emitEvent("igcActiveItem",{detail:this._activeItem}))}get visibleChildren(){return this._visibleChildren}update_disabled_cache(e){e.disabled?this._disabledChildren.add(e):this._disabledChildren.delete(e),this.updateVisChild()}delete_item(e){if(this.activeItem===e&&this.setActiveItem(null),this.focusedItem===e){this.focusItem(null,!1);const e=this.tree.items.find((e=>!e.disabled));e&&(e.tabIndex=0,this.focusItem(e,!1))}}update_visible_cache(e,t,a=!0,r=!0){var i,o;t&&!this._invisibleChildren.has(e)?null===(i=e.getChildren())||void 0===i||i.forEach((e=>{this._invisibleChildren.delete(e),a&&this.update_visible_cache(e,e.expanded,!0,!1)})):null===(o=e.getChildren({flatten:!0}))||void 0===o||o.forEach((e=>this._invisibleChildren.add(e))),r&&this.updateVisChild()}setFocusedAndActiveItem(e,t=!0,a=!0){t&&this.setActiveItem(e),this.focusItem(e,a)}handleKeydown(e){const t=e.key.toLowerCase();this.focusedItem&&(No.has(t)||"*"===t?(e.preventDefault(),this.handleNavigation(e)):"enter"===t&&this.setActiveItem(this.focusedItem))}handleNavigation(e){switch(e.key.toLowerCase()){case"home":this.setFocusedAndActiveItem(this.visibleChildren[0]);break;case"end":this.setFocusedAndActiveItem(this.visibleChildren[this.visibleChildren.length-1]);break;case"arrowleft":case"left":"rtl"===this.tree.dir?this.handleArrowRight():this.handleArrowLeft();break;case"arrowright":case"right":"rtl"===this.tree.dir?this.handleArrowLeft():this.handleArrowRight();break;case"arrowup":case"up":this.handleUpDownArrow(!0,e);break;case"arrowdown":case"down":this.handleUpDownArrow(!1,e);break;case"*":this.handleAsterisk();break;case" ":case"spacebar":case"space":this.handleSpace(e.shiftKey);break;default:return}}handleArrowLeft(){var e,t,a;if((null===(e=this.focusedItem)||void 0===e?void 0:e.expanded)&&(null===(t=this.focusedItem.getChildren())||void 0===t?void 0:t.length))this.setActiveItem(this.focusedItem),this.focusedItem.collapseWithEvent();else{const e=null===(a=this.focusedItem)||void 0===a?void 0:a.parent;e&&!e.disabled&&this.setFocusedAndActiveItem(e)}}handleArrowRight(){var e,t;if((null===(e=this.focusedItem.getChildren())||void 0===e?void 0:e.length)>0)if(null===(t=this.focusedItem)||void 0===t?void 0:t.expanded){const e=this.focusedItem.getChildren().find((e=>!e.disabled));e&&this.setFocusedAndActiveItem(e)}else this.setActiveItem(this.focusedItem),this.focusedItem.expandWithEvent()}handleUpDownArrow(e,t){const a=this.getVisibleItem(this.focusedItem,e?-1:1);a!==this.focusedItem&&(t.ctrlKey?this.setFocusedAndActiveItem(a,!1):this.setFocusedAndActiveItem(a))}handleAsterisk(){var e,t,a;const r=(null===(e=this.focusedItem)||void 0===e?void 0:e.parent)?null===(t=this.focusedItem.parent)||void 0===t?void 0:t.getChildren():null===(a=this.tree.items)||void 0===a?void 0:a.filter((e=>0===e.level));null==r||r.forEach((e=>{e.disabled||e.expanded||!e.hasChildren||e.expandWithEvent()}))}handleSpace(e=!1){"none"!==this.tree.selection?(this.setActiveItem(this.focusedItem),e?this.selectionService.selectMultipleItems(this.focusedItem):this.focusedItem.selected?this.selectionService.deselectItem(this.focusedItem):this.selectionService.selectItem(this.focusedItem)):this.setActiveItem(this.focusedItem)}getVisibleItem(e,t=1){const a=this.visibleChildren.indexOf(e);return this.visibleChildren[a+t]||e}}class Uo{constructor(e){this.itemSelection=new Set,this.indeterminateItems=new Set,this.tree=e}selectMultipleItems(e){if(!this.itemSelection.size)return void this.selectItem(e);const t=this.tree.items.indexOf(this.getSelectedItems()[this.itemSelection.size-1]),a=this.tree.items.indexOf(e),r=this.tree.items.slice(Math.min(a,t),Math.max(a,t)+1).filter((e=>!this.isItemSelected(e))),i=this.getSelectedItems().concat(r);this.emitItemSelectionEvent(i,r,[])}selectItem(e){"none"!==this.tree.selection&&this.emitItemSelectionEvent([...this.getSelectedItems(),e],[e],[])}deselectItem(e){const t=this.getSelectedItems().filter((t=>t!==e));this.emitItemSelectionEvent(t,[],[e])}clearItemsSelection(){const e=this.getSelectedItems(),t=this.getIndeterminateItems();this.itemSelection.clear(),this.indeterminateItems.clear(),e.forEach((e=>e.selected=!1)),t.forEach((e=>e.indeterminate=!1))}isItemSelected(e){return this.itemSelection.has(e)}isItemIndeterminate(e){return this.indeterminateItems.has(e)}ensureStateOnItemDelete(e){this.deselectItemsWithNoEvent([e,...e.getChildren({flatten:!0})],!0)}retriggerItemState(e){e.selected?(this.itemSelection.delete(e),this.selectItemsWithNoEvent([e])):(this.itemSelection.add(e),this.deselectItemsWithNoEvent([e]))}emitItemSelectionEvent(e,t,a){const r=this.getSelectedItems();if(this.areEqualCollections(r,e))return;if("cascade"===this.tree.selection)return void this.emitCascadeItemSelectionEvent(r,t,a);const i={detail:{newSelection:e},cancelable:!0};this.tree.emitEvent("igcSelection",i)&&this.areEqualCollections(e,i.detail.newSelection)&&(this.itemSelection=new Set(e),this.updateItemsState(r))}selectItemsWithNoEvent(e){const t=this.getSelectedItems();this.tree&&"cascade"===this.tree.selection?this.cascadeSelectItemsWithNoEvent(e,t):(e.forEach((e=>this.itemSelection.add(e))),this.updateItemsState(t))}deselectItemsWithNoEvent(e,t=!1){if(this.tree&&"cascade"===this.tree.selection)return void this.cascadeDeselectItemsWithNoEvent(e,t);const a=new Set(e),r=t?this.getSelectedItems().filter((e=>!a.has(e))):this.getSelectedItems();e?e.forEach((e=>this.itemSelection.delete(e))):this.itemSelection.clear(),this.updateItemsState(r)}emitCascadeItemSelectionEvent(e,t,a){const r=this.getIndeterminateItems();this.calculateItemsNewSelectionState(e,t,a);const i={detail:{newSelection:Array.from(this.itemsToBeSelected)},cancelable:!0};this.tree.emitEvent("igcSelection",i)&&this.areEqualCollections(Array.from(this.itemsToBeSelected),i.detail.newSelection)&&(this.itemSelection=new Set(this.itemsToBeSelected),this.indeterminateItems=new Set(this.itemsToBeIndeterminate),this.updateItemsState(e,r))}cascadeSelectItemsWithNoEvent(e,t){const a=this.getIndeterminateItems(),r=[...t,...e],i=new Set(r),o=t.filter((e=>!i.has(e))),s=r.filter((e=>!this.itemSelection.has(e)));this.calculateItemsNewSelectionState(t,s,o),this.itemSelection=new Set(this.itemsToBeSelected),this.indeterminateItems=new Set(this.itemsToBeIndeterminate),this.updateItemsState(t,a)}cascadeDeselectItemsWithNoEvent(e,t=!1){const a=new Set(e),r=t?this.getSelectedItems().filter((e=>!a.has(e))):this.getSelectedItems(),i=t?this.getIndeterminateItems().filter((e=>!a.has(e))):this.getIndeterminateItems();e?(this.calculateItemsNewSelectionState(r,[],e),this.itemSelection=new Set(this.itemsToBeSelected),this.indeterminateItems=new Set(this.itemsToBeIndeterminate)):(this.itemSelection.clear(),this.indeterminateItems.clear()),this.updateItemsState(r,i)}calculateItemsNewSelectionState(e,t,a){this.itemsToBeSelected=new Set(e),this.itemsToBeIndeterminate=new Set(this.getIndeterminateItems()),this.cascadeSelectionState(a,!1),this.cascadeSelectionState(t,!0)}cascadeSelectionState(e,t){if(!e||0===e.length)return;const a=new Set;e.forEach((e=>{this.selectDeselectItem(e,t),(e.getChildren({flatten:!0})||[]).forEach((e=>{this.selectDeselectItem(e,t)})),e&&e.parent&&a.add(e.parent)}));for(const e of a)this.handleParentSelectionState(e)}handleParentSelectionState(e){e&&(this.handleItemSelectionState(e),e.parent&&this.handleParentSelectionState(e.parent))}handleItemSelectionState(e){const t=e&&e.getChildren()?e.getChildren():[];t.length?t.every((e=>this.itemsToBeSelected.has(e)))?this.selectDeselectItem(e,!0):t.some((e=>this.itemsToBeSelected.has(e)||this.itemsToBeIndeterminate.has(e)))?this.selectDeselectItem(e,!1,!0):this.selectDeselectItem(e,!1):this.isItemSelected(e)?this.selectDeselectItem(e,!0):this.selectDeselectItem(e,!1)}updateItemsState(e,t=[]){const a=new Set(e),r=new Set(t);this.getSelectedItems().forEach((e=>{a.has(e)||(e.selected=!0)})),e.forEach((e=>{this.itemSelection.has(e)||(e.selected=!1)})),"cascade"===this.tree.selection&&(this.indeterminateItems.forEach((e=>{r.has(e)||(e.indeterminate=!0)})),t.forEach((e=>{this.indeterminateItems.has(e)||(e.indeterminate=!1)})))}getSelectedItems(){return this.itemSelection.size?Array.from(this.itemSelection):[]}getIndeterminateItems(){return this.indeterminateItems.size?Array.from(this.indeterminateItems):[]}areEqualCollections(e,t){return e.length===t.length&&new Set(e.concat(t)).size===e.length}selectDeselectItem(e,t,a=!1){if(a)return this.itemsToBeIndeterminate.add(e),void this.itemsToBeSelected.delete(e);t?(this.itemsToBeSelected.add(e),this.itemsToBeIndeterminate.delete(e)):(this.itemsToBeSelected.delete(e),this.itemsToBeIndeterminate.delete(e))}}const Ho=r.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */
:host {
  --size: max(var(--is-large, 1) * 3.125rem, var(--is-medium, 1) * 2.5rem, var(--is-small, 1) * 2rem);
  --igc-tree-indentation-size: 24px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  font-family: inherit;
}

:host(:focus-within) {
  outline: none;
}

:host([disabled]) {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
}

[part~=wrapper] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  position: relative;
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
  color: var(--ig-surface-500-contrast);
  height: var(--size);
  padding: 0 max(var(--is-large, 1) * 24px * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * 16px * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * 12px * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}
[part~=wrapper]::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background: transparent;
}
[part~=wrapper]:hover::after {
  background: var(--hover-color, hsla(var(--ig-gray-900), 0.1));
}

[part~=active] {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
  color: var(--ig-gray-200-contrast);
}

[part~=selected] {
  background: hsla(var(--ig-secondary-200), var(--ig-secondary-a));
  color: var(--ig-secondary-200-contrast);
}

[part~=selected][part~=focused][part~=active],
[part~=selected][part~=focused],
[part~=selected][part~=active] {
  background: hsla(var(--ig-secondary-300), var(--ig-secondary-a));
  color: var(--ig-secondary-300-contrast);
}

[part~=focused] {
  -webkit-box-shadow: inset 0 0 0 1px hsla(var(--ig-secondary-500), var(--ig-secondary-a));
          box-shadow: inset 0 0 0 1px hsla(var(--ig-secondary-500), var(--ig-secondary-a));
}

[part~=indicator] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  z-index: 1;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  -webkit-margin-end: 0.25rem;
          margin-inline-end: 0.25rem;
  min-width: 1.5rem;
}
[part~=indicator] igc-icon {
  width: 1.5rem;
  height: 1.5rem;
  font-size: 1.5rem;
}

[part~=label] {
  display: block;
  font-family: var(--ig-body-2-font-family);
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
  margin: 0;
}

[part~=label],
[part~=text] {
  z-index: 1;
  white-space: nowrap;
  -o-text-overflow: ellipsis;
     text-overflow: ellipsis;
  overflow: hidden;
}

[part~=select] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  z-index: 1;
  -webkit-margin-end: 0.25rem;
          margin-inline-end: 0.25rem;
}
[part~=select] igc-checkbox::part(label) {
  display: none;
}

[part~=large] igc-circular-progress {
  --diameter: 1.5rem;
}

[part~=medium] igc-circular-progress {
  --diameter: 1.25rem;
}

[part~=small] igc-circular-progress {
  --diameter: 1.125rem;
}`,Wo=r.iv`/* stylelint-disable max-line-length */
[part~=active] {
  background: var(--active-background, hsla(var(--ig-gray-200), var(--ig-gray-a)));
  color: var(--active-color, var(--ig-gray-200-contrast));
}

[part~=selected] {
  background: var(--selected-background, hsla(var(--ig-primary-500), var(--ig-primary-a)));
  color: var(--selected-color, var(--ig-primary-600-contrast));
}

[part~=selected][part~=focused][part~=active],
[part~=selected][part~=focused],
[part~=selected][part~=active] {
  background: var(--active-selected-background, hsla(var(--ig-primary-600), var(--ig-primary-a)));
  color: var(--active-selected-color, var(--ig-primary-600-contrast));
}

[part~=select] {
  -webkit-margin-end: 0.5rem;
          margin-inline-end: 0.5rem;
}

[part~=focused] {
  -webkit-box-shadow: inset 0 0 0 1px var(--focused-border-color, hsla(var(--ig-primary-200), var(--ig-primary-a)));
          box-shadow: inset 0 0 0 1px var(--focused-border-color, hsla(var(--ig-primary-200), var(--ig-primary-a)));
}`,Ko=r.iv`/* stylelint-disable max-line-length */
[part~=active] {
  background: var(--active-background, hsla(var(--ig-gray-200), var(--ig-gray-a)));
  color: var(--active-color, var(--ig-gray-200-contrast));
}

[part~=selected] {
  background: var(--selected-background, hsla(var(--ig-gray-200), var(--ig-gray-a)));
  color: var(--selected-color, var(--ig-gray-200-contrast));
}

[part~=selected][part~=focused][part~=active],
[part~=selected][part~=focused],
[part~=selected][part~=active] {
  background: var(--active-selected-background, hsla(var(--ig-gray-300), var(--ig-gray-a)));
  color: var(--active-selected-color, var(--ig-gray-300-contrast));
}

[part~=select] {
  -webkit-margin-end: 0.5rem;
          margin-inline-end: 0.5rem;
}

[part~=focused] {
  -webkit-box-shadow: inset 0 0 0 1px var(--focused-border-color, hsla(var(--ig-gray-800), var(--ig-gray-a)));
          box-shadow: inset 0 0 0 1px var(--focused-border-color, hsla(var(--ig-gray-800), var(--ig-gray-a)));
}`,qo=r.iv`/* stylelint-disable max-line-length */
[part~=active] {
  background: var(--active-background, hsla(var(--ig-surface-500), var(--ig-surface-a)));
  color: var(--active-color, hsla(var(--ig-primary-500), var(--ig-primary-a)));
}
[part~=active]:hover {
  color: var(--active-color, hsla(var(--ig-primary-500), var(--ig-primary-a)));
}

[part~=selected] {
  background: var(--selected-background, hsla(var(--ig-primary-500), var(--ig-primary-a)));
  color: var(--selected-color, var(--ig-primary-600-contrast));
}

[part~=selected][part~=focused][part~=active],
[part~=selected][part~=focused],
[part~=selected][part~=active] {
  background: var(--active-selected-background, hsla(var(--ig-primary-400), var(--ig-primary-a)));
  color: var(--active-selected-color, var(--ig-primary-400-contrast));
}

[part~=select] {
  -webkit-margin-end: 0.5rem;
          margin-inline-end: 0.5rem;
}

[part~=focused] {
  -webkit-box-shadow: inset 0 0 0 1px var(--focused-border-color, hsla(var(--ig-primary-300), var(--ig-primary-a)));
          box-shadow: inset 0 0 0 1px var(--focused-border-color, hsla(var(--ig-primary-300), var(--ig-primary-a)));
}`;var Go=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};x(X,Mt,Xt);const Zo={small:.5,medium:2/3,large:1};let Qo=class extends r.oi{constructor(){super(...arguments),this.focusedProgrammatically=!1,this.parent=null,this.init=!1,this.isFocused=!1,this.hasChildren=!1,this.level=0,this.indeterminate=!1,this.label="",this.expanded=!1,this.active=!1,this.disabled=!1,this.selected=!1,this.loading=!1,this.value=void 0}bothChange(){this.hasChildren?this.setAttribute("aria-expanded",this.expanded.toString()):this.removeAttribute("aria-expanded")}expandedChange(e){var t;null===(t=this.navService)||void 0===t||t.update_visible_cache(this,this.expanded),e&&Promise.resolve().then((()=>{var e,t,a,r;(null===(e=this.navService)||void 0===e?void 0:e.focusedItem)===this||this.isFocused||null===(r=null===(a=null===(t=this.navService)||void 0===t?void 0:t.focusedItem)||void 0===a?void 0:a.wrapper)||void 0===r||r.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})}))}activeChange(){var e,t;this.active&&(null===(e=this.navService)||void 0===e?void 0:e.activeItem)===this||!this.active||(this.navService&&this.navService.setActiveItem(this,!1),null===(t=this.tree)||void 0===t||t.expandToItem(this),Promise.resolve().then((()=>{var e;null===(e=this.wrapper)||void 0===e||e.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})})))}disabledChange(){var e;null===(e=this.navService)||void 0===e||e.update_disabled_cache(this)}selectedChange(){var e,t,a,r;this.selected&&!(null===(e=this.selectionService)||void 0===e?void 0:e.isItemSelected(this))&&(null===(t=this.selectionService)||void 0===t||t.selectItemsWithNoEvent([this])),!this.selected&&(null===(a=this.selectionService)||void 0===a?void 0:a.isItemSelected(this))&&(null===(r=this.selectionService)||void 0===r||r.deselectItemsWithNoEvent([this]))}connectedCallback(){var e,t;super.connectedCallback(),this.tree=this.closest("igc-tree"),this.parent="igc-tree-item"===(null===(e=this.parentElement)||void 0===e?void 0:e.tagName.toLowerCase())?this.parentElement:null,this.level=this.parent?this.parent.level+1:0,this.setAttribute("role","treeitem"),this.addEventListener("blur",this.onBlur),this.addEventListener("focus",this.onFocus),this.addEventListener("pointerdown",this.pointerDown),this.activeChange(),this.init?this.selectedChange():null===(t=this.selectionService)||void 0===t||t.retriggerItemState(this),this.init=!1}disconnectedCallback(){var e,t;super.disconnectedCallback(),null===(e=this.selectionService)||void 0===e||e.ensureStateOnItemDelete(this),null===(t=this.navService)||void 0===t||t.delete_item(this)}get selectionService(){var e;return null===(e=this.tree)||void 0===e?void 0:e.selectionService}get navService(){var e;return null===(e=this.tree)||void 0===e?void 0:e.navService}get parts(){return{selected:this.selected,focused:this.isFocused,active:this.active}}get directChildren(){return Array.from(this.children).filter((e=>"igc-tree-item"===e.tagName.toLowerCase()))}get allChildren(){return Array.from(this.querySelectorAll("igc-tree-item"))}get path(){var e;return(null===(e=this.parent)||void 0===e?void 0:e.path)?[...this.parent.path,this]:[this]}pointerDown(e){var t;e.stopPropagation(),this.disabled||(this.tabIndex=0,null===(t=this.navService)||void 0===t||t.setFocusedAndActiveItem(this,!0,!1))}expandIndicatorClick(){this.disabled||(this.expanded?this.collapseWithEvent():this.expandWithEvent())}selectorClick(e){var t,a,r;e.preventDefault(),e.shiftKey?null===(t=this.selectionService)||void 0===t||t.selectMultipleItems(this):this.selected?null===(a=this.selectionService)||void 0===a||a.deselectItem(this):null===(r=this.selectionService)||void 0===r||r.selectItem(this)}onFocus(){var e,t,a;if(!this.disabled){if((null===(e=this.navService)||void 0===e?void 0:e.focusedItem)!==this&&(null===(t=this.navService)||void 0===t||t.focusItem(this,!1),null===(a=this.wrapper)||void 0===a||a.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})),this.tabbableEl&&this.tabbableEl.length)return this.tabbableEl.forEach((e=>{e.tabIndex=0})),this.focusedProgrammatically=!0,void this.tabbableEl[0].focus();this.isFocused=!0}}onBlur(){this.isFocused=!1}onFocusIn(e){var t;null==e||e.stopPropagation(),this.disabled||(this.focusedProgrammatically||null===(t=this.tabbableEl)||void 0===t||t.forEach((e=>{e.tabIndex=0})),this.removeAttribute("tabIndex"),this.isFocused=!0,this.focusedProgrammatically=!1)}onFocusOut(e){var t,a;null==e||e.stopPropagation(),this.isFocused=!1,null===(t=this.tabbableEl)||void 0===t||t.forEach((e=>{e.tabIndex=-1})),(null===(a=this.navService)||void 0===a?void 0:a.focusedItem)===this&&this.setAttribute("tabindex","0")}labelChange(){const e=this.contentList[0],t='a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';this.tabbableEl=[...e.querySelectorAll(t)],e.matches(t)&&this.tabbableEl.splice(0,0,e),this.tabbableEl&&this.tabbableEl.length?(this.setAttribute("role","none"),this.tabbableEl[0].setAttribute("role","treeitem"),this.tabbableEl.forEach((e=>{e.tabIndex=-1}))):this.setAttribute("role","treeitem")}handleChange(){var e;this.hasChildren=!!this.directChildren.length,null===(e=this.navService)||void 0===e||e.update_visible_cache(this,this.expanded,!1)}getChildren(e={flatten:!1}){return e.flatten?this.allChildren:this.directChildren}expandWithEvent(){var e,t,a;if(this.expanded)return;const r={detail:this,cancelable:!0};if(null===(e=this.tree)||void 0===e?void 0:e.emitEvent("igcItemExpanding",r)){if(null===(t=this.tree)||void 0===t?void 0:t.singleBranchExpand){const e=new Set(this.path.splice(0,this.path.length-1));this.tree.items.forEach((t=>{e.has(t)||t.collapseWithEvent()}))}this.expanded=!0,null===(a=this.tree)||void 0===a||a.emitEvent("igcItemExpanded",{detail:this})}}collapseWithEvent(){var e,t;if(!this.expanded)return;const a={detail:this,cancelable:!0};(null===(e=this.tree)||void 0===e?void 0:e.emitEvent("igcItemCollapsing",a))&&(this.expanded=!1,null===(t=this.tree)||void 0===t||t.emitEvent("igcItemCollapsed",{detail:this}))}toggle(){this.expanded=!this.expanded}expand(){this.expanded=!0}collapse(){this.expanded=!1}render(){var e,t,a;const i=this.level*(this.tree?Zo[this.tree.size]:1);return r.dy`
      <div
        id="wrapper"
        part="wrapper ${null===(e=this.tree)||void 0===e?void 0:e.size} ${$(this.parts)}"
      >
        <div
          style="width: calc(${i} * var(--igc-tree-indentation-size))"
          part="indentation"
          aria-hidden="true"
        >
          <slot name="indentation"></slot>
        </div>
        <div part="indicator" aria-hidden="true">
          ${this.loading?r.dy`
                <slot name="loading">
                  <igc-circular-progress indeterminate></igc-circular-progress>
                </slot>
              `:r.dy`
                <slot name="indicator" @click=${this.expandIndicatorClick}>
                  ${this.hasChildren?r.dy`
                        <igc-icon
                          name=${this.expanded?"keyboard_arrow_down":"rtl"===(null===(t=this.tree)||void 0===t?void 0:t.dir)?"navigate_before":"keyboard_arrow_right"}
                          collection="internal"
                        >
                        </igc-icon>
                      `:""}
                </slot>
              `}
        </div>
        ${"none"!==(null===(a=this.tree)||void 0===a?void 0:a.selection)?r.dy`
              <div part="select" aria-hidden="true">
                <igc-checkbox
                  @click=${this.selectorClick}
                  .checked=${this.selected}
                  .indeterminate=${this.indeterminate}
                  .disabled=${this.disabled}
                  tabindex="-1"
                >
                </igc-checkbox>
              </div>
            `:""}
        <div part="label">
          <slot
            name="label"
            @slotchange=${this.labelChange}
            @focusin=${this.onFocusIn}
            @focusout=${this.onFocusOut}
          >
            <span part="text">${this.label}</span>
          </slot>
        </div>
      </div>
      <div role="group">
        <slot @slotchange=${this.handleChange} ?hidden=${!this.expanded}></slot>
      </div>
    `}};Qo.tagName="igc-tree-item",Qo.styles=Ho,Go([(e,t)=>{}],Qo.prototype,"tree",void 0),Go([(e,t)=>{}],Qo.prototype,"init",void 0),Go([(0,i.NH)({slot:"label",flatten:!0})],Qo.prototype,"contentList",void 0),Go([(0,i.IO)("#wrapper"),(e,t)=>{}],Qo.prototype,"wrapper",void 0),Go([(0,i.SB)()],Qo.prototype,"isFocused",void 0),Go([(0,i.SB)(),(e,t)=>{}],Qo.prototype,"hasChildren",void 0),Go([(0,i.SB)()],Qo.prototype,"level",void 0),Go([(0,i.SB)(),(e,t)=>{}],Qo.prototype,"indeterminate",void 0),Go([(0,i.Cb)()],Qo.prototype,"label",void 0),Go([(0,i.Cb)({reflect:!0,type:Boolean})],Qo.prototype,"expanded",void 0),Go([(0,i.Cb)({reflect:!0,type:Boolean})],Qo.prototype,"active",void 0),Go([(0,i.Cb)({reflect:!0,type:Boolean})],Qo.prototype,"disabled",void 0),Go([(0,i.Cb)({reflect:!0,type:Boolean})],Qo.prototype,"selected",void 0),Go([(0,i.Cb)({reflect:!0,type:Boolean})],Qo.prototype,"loading",void 0),Go([(0,i.Cb)({attribute:!0})],Qo.prototype,"value",void 0),Go([b("expanded",{waitUntilFirstUpdate:!0}),b("hasChildren",{waitUntilFirstUpdate:!0})],Qo.prototype,"bothChange",null),Go([b("expanded")],Qo.prototype,"expandedChange",null),Go([b("active",{waitUntilFirstUpdate:!0})],Qo.prototype,"activeChange",null),Go([b("disabled")],Qo.prototype,"disabledChange",null),Go([b("selected",{waitUntilFirstUpdate:!0})],Qo.prototype,"selectedChange",null),Go([(e,t)=>{}],Qo.prototype,"getChildren",null),Qo=Go([p({bootstrap:Wo,fluent:Ko,indigo:qo})],Qo);const Jo=Qo;var es=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};x(Jo);let ts=class extends(v(z(r.oi))){constructor(){super(),this.singleBranchExpand=!1,this.selection="none",this.dir="auto",this.selectionService=new Uo(this),this.navService=new Yo(this,this.selectionService)}onDirChange(){var e;null===(e=this.items)||void 0===e||e.forEach((e=>{e.requestUpdate()}))}onSizeChange(){var e,t,a;null===(e=this.items)||void 0===e||e.forEach((e=>{e.requestUpdate()})),null===(a=null===(t=this.navService.activeItem)||void 0===t?void 0:t.wrapper)||void 0===a||a.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})}selectionModeChange(){var e;this.selectionService.clearItemsSelection(),null===(e=this.items)||void 0===e||e.forEach((e=>{e.requestUpdate()}))}singleBranchExpandChange(){if(this.singleBranchExpand)if(this.navService.activeItem){const e=this.navService.activeItem.path,t=new Set(e.splice(0,e.length-1));this.items.forEach((e=>{t.has(e)||e.collapseWithEvent()}))}else this.items.forEach((e=>e.collapseWithEvent()))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.addEventListener("keydown",this.handleKeydown),this.items.forEach((e=>{e.init=!0}));const e=this.items.find((e=>!e.disabled));e&&(e.tabIndex=0,this.navService.focusItem(e))}get items(){return Array.from(this.querySelectorAll("igc-tree-item"))}handleKeydown(e){this.navService.handleKeydown(e)}expandToItem(e){e&&e.parent&&e.path.forEach((t=>{t===e||t.expanded||(t.expanded=!0)}))}select(e){e||(e="cascade"===this.selection?this.items.filter((e=>0===e.level)):this.items),this.selectionService.selectItemsWithNoEvent(e)}deselect(e){this.selectionService.deselectItemsWithNoEvent(e)}expand(e){(e=e||this.items).forEach((e=>e.expanded=!0))}collapse(e){(e=e||this.items).forEach((e=>e.expanded=!1))}render(){return r.dy`<slot></slot>`}};ts.tagName="igc-tree",ts.styles=Bo,es([(e,t)=>{}],ts.prototype,"selectionService",void 0),es([(e,t)=>{}],ts.prototype,"navService",void 0),es([(0,i.Cb)({attribute:"single-branch-expand",reflect:!0,type:Boolean})],ts.prototype,"singleBranchExpand",void 0),es([(0,i.Cb)({reflect:!0})],ts.prototype,"selection",void 0),es([(0,i.Cb)({reflect:!0})],ts.prototype,"dir",void 0),es([b("dir")],ts.prototype,"onDirChange",null),es([b("size",{waitUntilFirstUpdate:!0})],ts.prototype,"onSizeChange",null),es([b("selection",{waitUntilFirstUpdate:!0})],ts.prototype,"selectionModeChange",null),es([b("singleBranchExpand")],ts.prototype,"singleBranchExpandChange",null),es([(e,t)=>{}],ts.prototype,"items",null),es([(e,t)=>{}],ts.prototype,"select",null),es([(e,t)=>{}],ts.prototype,"deselect",null),es([(e,t)=>{}],ts.prototype,"expand",null),es([(e,t)=>{}],ts.prototype,"collapse",null),ts=es([e=>e],ts);const as=ts,rs=[w,W,Q,ce,xr,qe,rt,nt,pt,vt,ft,Mt,qt,Ja,La,Na,Ga,Xo,U,Cr,X,tr,Fr,Nr,Ur,Wr,ei,si,ci,vi,Ci,Si,Fi,Vi,ji,ts,Jo,io,To,Ui,qi,Do,yo,ko,Xt,Er,Lt,ao,ba],is=()=>{x(...rs)}}}]);