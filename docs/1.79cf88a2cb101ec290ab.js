(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"Mr+X":function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return s});var i=n("CcnG"),o=(n("SMsm"),n("Fzqc"),n("Wf4p"),i.Pa({encapsulation:2,styles:[".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1,1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],data:{}}));function s(t){return i.kb(2,[i.ab(null,0)],null,null)}},Xj89:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i=function(){function t(t){void 0===t&&(t={}),this.humanize(t)}return t.prototype.humanize=function(t){void 0===t&&(t={}),this.type=t.e||void 0,this.eventTime=t.E||void 0,this.market=t.s||void 0,this.id=t.t||void 0,this.price=t.p?parseFloat(t.p):void 0,this.quantity=t.q?parseFloat(t.q):void 0,this.buyerOrder=t.b||void 0,this.sellerOrder=t.a||void 0,this.tradeTime=t.T||void 0,this.buyerAndMaker=t.m||void 0},t}()},mVsa:function(t,e,n){"use strict";var i=n("CcnG"),o=n("4c35"),s=n("K9Ia"),r=n("pugT"),a=n("F/XL"),u=n("mrSG"),c=1,h={},p=function(t){function e(e,n){var i=t.call(this,e,n)||this;return i.scheduler=e,i.work=n,i}return u.b(e,t),e.prototype.requestAsyncId=function(e,n,i){return void 0===i&&(i=0),null!==i&&i>0?t.prototype.requestAsyncId.call(this,e,n,i):(e.actions.push(this),e.scheduled||(e.scheduled=(o=e.flush.bind(e,null),s=c++,h[s]=o,Promise.resolve().then(function(){return function(t){var e=h[t];e&&e()}(s)}),s)));var o,s},e.prototype.recycleAsyncId=function(e,n,i){if(void 0===i&&(i=0),null!==i&&i>0||null===i&&this.delay>0)return t.prototype.recycleAsyncId.call(this,e,n,i);0===e.actions.length&&(delete h[n],e.scheduled=void 0)},e}(n("h9Dq").a),l=new(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return u.b(e,t),e.prototype.flush=function(t){this.active=!0,this.scheduled=void 0;var e,n=this.actions,i=-1,o=n.length;t=t||n.shift();do{if(e=t.execute(t.state,t.delay))break}while(++i<o&&(t=n.shift()));if(this.active=!1,e){for(;++i<o&&(t=n.shift());)t.unsubscribe();throw e}},e}(n("CS9Q").a))(p),f=n("p0ib"),m=(n("ihYY"),n("lLAP")),d=n("Wf4p"),_=n("n6gG"),b=n("YSh2"),y=n("t9fZ"),v=n("ny24"),g=n("VnD/"),M=n("15JJ"),O=n("p0Sj"),w=n("T1DM"),k=n("FFOo"),C=n("60iU"),P=function(){function t(t,e){this.delay=t,this.scheduler=e}return t.prototype.call=function(t,e){return e.subscribe(new S(t,this.delay,this.scheduler))},t}(),S=function(t){function e(e,n,i){var o=t.call(this,e)||this;return o.delay=n,o.scheduler=i,o.queue=[],o.active=!1,o.errored=!1,o}return u.b(e,t),e.dispatch=function(t){for(var e=t.source,n=e.queue,i=t.scheduler,o=t.destination;n.length>0&&n[0].time-i.now()<=0;)n.shift().notification.observe(o);if(n.length>0){var s=Math.max(0,n[0].time-i.now());this.schedule(t,s)}else this.unsubscribe(),e.active=!1},e.prototype._schedule=function(t){this.active=!0,this.add(t.schedule(e.dispatch,this.delay,{source:this,destination:this.destination,scheduler:t}))},e.prototype.scheduleNotification=function(t){if(!0!==this.errored){var e=this.scheduler,n=new I(e.now()+this.delay,t);this.queue.push(n),!1===this.active&&this._schedule(e)}},e.prototype._next=function(t){this.scheduleNotification(C.a.createNext(t))},e.prototype._error=function(t){this.errored=!0,this.queue=[],this.destination.error(t)},e.prototype._complete=function(){this.scheduleNotification(C.a.createComplete())},e}(k.a),I=function(t,e){this.time=t,this.notification=e},x=n("eDkP");n.d(e,"b",function(){return R}),n.d(e,"e",function(){return B}),n.d(e,"c",function(){return A}),n.d(e,"a",function(){return T}),n.d(e,"d",function(){return j}),n.d(e,"f",function(){return D}),n.d(e,"h",function(){return E}),n.d(e,"g",function(){return Y});var E=new i.q("MAT_MENU_PANEL"),j=function(t){function e(e,n,i,o){var r=t.call(this)||this;return r._elementRef=e,r._focusMonitor=i,r._parentMenu=o,r._hovered=new s.a,r._highlighted=!1,r._triggersSubmenu=!1,i&&i.monitor(r._getHostElement(),!1),o&&o.addItem&&o.addItem(r),r._document=n,r}return Object(u.b)(e,t),e.prototype.focus=function(t){void 0===t&&(t="program"),this._focusMonitor?this._focusMonitor.focusVia(this._getHostElement(),t):this._getHostElement().focus()},e.prototype.ngOnDestroy=function(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._getHostElement()),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete()},e.prototype._getTabIndex=function(){return this.disabled?"-1":"0"},e.prototype._getHostElement=function(){return this._elementRef.nativeElement},e.prototype._checkDisabled=function(t){this.disabled&&(t.preventDefault(),t.stopPropagation())},e.prototype._handleMouseEnter=function(){this._hovered.next(this)},e.prototype.getLabel=function(){var t=this._elementRef.nativeElement,e=this._document?this._document.TEXT_NODE:3,n="";if(t.childNodes)for(var i=t.childNodes.length,o=0;o<i;o++)t.childNodes[o].nodeType===e&&(n+=t.childNodes[o].textContent);return n.trim()},e}(Object(d.B)(Object(d.C)(function(){}))),T=new i.q("mat-menu-default-options",{providedIn:"root",factory:function(){return{overlapTrigger:!0,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"}}}),A=function(){function t(t,e,n){this._elementRef=t,this._ngZone=e,this._defaultOptions=n,this._xPosition=this._defaultOptions.xPosition,this._yPosition=this._defaultOptions.yPosition,this._items=[],this._itemChanges=new s.a,this._tabSubscription=r.a.EMPTY,this._classList={},this._panelAnimationState="void",this._animationDone=new s.a,this.backdropClass=this._defaultOptions.backdropClass,this._overlapTrigger=this._defaultOptions.overlapTrigger,this._hasBackdrop=this._defaultOptions.hasBackdrop,this.closed=new i.n,this.close=this.closed}return Object.defineProperty(t.prototype,"xPosition",{get:function(){return this._xPosition},set:function(t){"before"!==t&&"after"!==t&&function(){throw Error('x-position value must be either \'before\' or after\'.\n      Example: <mat-menu x-position="before" #menu="matMenu"></mat-menu>')}(),this._xPosition=t,this.setPositionClasses()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"yPosition",{get:function(){return this._yPosition},set:function(t){"above"!==t&&"below"!==t&&function(){throw Error('y-position value must be either \'above\' or below\'.\n      Example: <mat-menu y-position="above" #menu="matMenu"></mat-menu>')}(),this._yPosition=t,this.setPositionClasses()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"overlapTrigger",{get:function(){return this._overlapTrigger},set:function(t){this._overlapTrigger=Object(_.c)(t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"hasBackdrop",{get:function(){return this._hasBackdrop},set:function(t){this._hasBackdrop=Object(_.c)(t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"panelClass",{set:function(t){t&&t.length&&(this._classList=t.split(" ").reduce(function(t,e){return t[e]=!0,t},{}),this._elementRef.nativeElement.className="")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"classList",{get:function(){return this.panelClass},set:function(t){this.panelClass=t},enumerable:!0,configurable:!0}),t.prototype.ngOnInit=function(){this.setPositionClasses()},t.prototype.ngAfterContentInit=function(){var t=this;this._keyManager=new m.d(this._items).withWrap().withTypeAhead(),this._tabSubscription=this._keyManager.tabOut.subscribe(function(){return t.closed.emit("tab")})},t.prototype.ngOnDestroy=function(){this._tabSubscription.unsubscribe(),this.closed.complete()},t.prototype._hovered=function(){return this._itemChanges.pipe(Object(O.a)(this._items),Object(M.a)(function(t){return f.a.apply(void 0,t.map(function(t){return t._hovered}))}))},t.prototype._handleKeydown=function(t){var e=t.keyCode;switch(e){case b.e:this.closed.emit("keydown"),t.stopPropagation();break;case b.g:this.parentMenu&&"ltr"===this.direction&&this.closed.emit("keydown");break;case b.i:this.parentMenu&&"rtl"===this.direction&&this.closed.emit("keydown");break;default:e!==b.l&&e!==b.b||this._keyManager.setFocusOrigin("keyboard"),this._keyManager.onKeydown(t)}},t.prototype.focusFirstItem=function(t){var e=this;void 0===t&&(t="program"),this.lazyContent?this._ngZone.onStable.asObservable().pipe(Object(y.a)(1)).subscribe(function(){return e._keyManager.setFocusOrigin(t).setFirstItemActive()}):this._keyManager.setFocusOrigin(t).setFirstItemActive()},t.prototype.resetActiveItem=function(){this._keyManager.setActiveItem(-1)},t.prototype.setElevation=function(t){var e="mat-elevation-z"+(2+t),n=Object.keys(this._classList).find(function(t){return t.startsWith("mat-elevation-z")});n&&n!==this._previousElevation||(this._previousElevation&&(this._classList[this._previousElevation]=!1),this._classList[e]=!0,this._previousElevation=e)},t.prototype.addItem=function(t){-1===this._items.indexOf(t)&&(this._items.push(t),this._itemChanges.next(this._items))},t.prototype.removeItem=function(t){var e=this._items.indexOf(t);this._items.indexOf(t)>-1&&(this._items.splice(e,1),this._itemChanges.next(this._items))},t.prototype.setPositionClasses=function(t,e){void 0===t&&(t=this.xPosition),void 0===e&&(e=this.yPosition);var n=this._classList;n["mat-menu-before"]="before"===t,n["mat-menu-after"]="after"===t,n["mat-menu-above"]="above"===e,n["mat-menu-below"]="below"===e},t.prototype._startAnimation=function(){this._panelAnimationState="enter"},t.prototype._resetAnimation=function(){this._panelAnimationState="void"},t.prototype._onAnimationDone=function(t){this._animationDone.next(t),this._isAnimating=!1,"enter"===t.toState&&0===this._keyManager.activeItemIndex&&(t.element.scrollTop=0)},t}(),R=new i.q("mat-menu-scroll-strategy");function Y(t){return function(){return t.scrollStrategies.reposition()}}var D=function(){function t(t,e,n,o,s,a,u,c){this._overlay=t,this._element=e,this._viewContainerRef=n,this._scrollStrategy=o,this._parentMenu=s,this._menuItemInstance=a,this._dir=u,this._focusMonitor=c,this._overlayRef=null,this._menuOpen=!1,this._closeSubscription=r.a.EMPTY,this._hoverSubscription=r.a.EMPTY,this._openedByMouse=!1,this.menuOpened=new i.n,this.onMenuOpen=this.menuOpened,this.menuClosed=new i.n,this.onMenuClose=this.menuClosed,a&&(a._triggersSubmenu=this.triggersSubmenu())}return Object.defineProperty(t.prototype,"_deprecatedMatMenuTriggerFor",{get:function(){return this.menu},set:function(t){this.menu=t},enumerable:!0,configurable:!0}),t.prototype.ngAfterContentInit=function(){var t=this;this._checkMenu(),this.menu.close.subscribe(function(e){t._destroyMenu(),"click"!==e&&"tab"!==e||!t._parentMenu||t._parentMenu.closed.emit(e)}),this._handleHover()},t.prototype.ngOnDestroy=function(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null),this._cleanUpSubscriptions()},Object.defineProperty(t.prototype,"menuOpen",{get:function(){return this._menuOpen},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"dir",{get:function(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"},enumerable:!0,configurable:!0}),t.prototype.triggersSubmenu=function(){return!(!this._menuItemInstance||!this._parentMenu)},t.prototype.toggleMenu=function(){return this._menuOpen?this.closeMenu():this.openMenu()},t.prototype.openMenu=function(){var t=this;if(!this._menuOpen){var e=this._createOverlay();this._setPosition(e.getConfig().positionStrategy),e.attach(this._portal),this.menu.lazyContent&&this.menu.lazyContent.attach(this.menuData),this._closeSubscription=this._menuClosingActions().subscribe(function(){return t.closeMenu()}),this._initMenu(),this.menu instanceof A&&this.menu._startAnimation()}},t.prototype.closeMenu=function(){this.menu.close.emit()},t.prototype.focus=function(t){void 0===t&&(t="program"),this._focusMonitor?this._focusMonitor.focusVia(this._element.nativeElement,t):this._element.nativeElement.focus()},t.prototype._destroyMenu=function(){var t=this;if(this._overlayRef&&this.menuOpen){var e=this.menu;this._closeSubscription.unsubscribe(),this._overlayRef.detach(),e instanceof A?(e._resetAnimation(),e.lazyContent?e._animationDone.pipe(Object(g.a)(function(t){return"void"===t.toState}),Object(y.a)(1),Object(v.a)(e.lazyContent._attached)).subscribe(function(){return e.lazyContent.detach()},void 0,function(){t._resetMenu()}):this._resetMenu()):(this._resetMenu(),e.lazyContent&&e.lazyContent.detach())}},t.prototype._initMenu=function(){this.menu.parentMenu=this.triggersSubmenu()?this._parentMenu:void 0,this.menu.direction=this.dir,this._setMenuElevation(),this._setIsMenuOpen(!0),this.menu.focusFirstItem(this._openedByMouse?"mouse":"program")},t.prototype._setMenuElevation=function(){if(this.menu.setElevation){for(var t=0,e=this.menu.parentMenu;e;)t++,e=e.parentMenu;this.menu.setElevation(t)}},t.prototype._resetMenu=function(){this._setIsMenuOpen(!1),this._openedByMouse?this.triggersSubmenu()||this.focus("mouse"):this.focus(),this._openedByMouse=!1},t.prototype._setIsMenuOpen=function(t){this._menuOpen=t,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this.triggersSubmenu()&&(this._menuItemInstance._highlighted=t)},t.prototype._checkMenu=function(){this.menu||function(){throw Error('mat-menu-trigger: must pass in an mat-menu instance.\n\n    Example:\n      <mat-menu #menu="matMenu"></mat-menu>\n      <button [matMenuTriggerFor]="menu"></button>')}()},t.prototype._createOverlay=function(){if(!this._overlayRef){this._portal=new o.h(this.menu.templateRef,this._viewContainerRef);var t=this._getOverlayConfig();this._subscribeToPositions(t.positionStrategy),this._overlayRef=this._overlay.create(t)}return this._overlayRef},t.prototype._getOverlayConfig=function(){return new x.d({positionStrategy:this._overlay.position().flexibleConnectedTo(this._element).withTransformOriginOn(".mat-menu-panel"),hasBackdrop:null==this.menu.hasBackdrop?!this.triggersSubmenu():this.menu.hasBackdrop,backdropClass:this.menu.backdropClass||"cdk-overlay-transparent-backdrop",scrollStrategy:this._scrollStrategy(),direction:this._dir})},t.prototype._subscribeToPositions=function(t){var e=this;this.menu.setPositionClasses&&t.positionChanges.subscribe(function(t){e.menu.setPositionClasses("start"===t.connectionPair.overlayX?"after":"before","top"===t.connectionPair.overlayY?"below":"above")})},t.prototype._setPosition=function(t){var e="before"===this.menu.xPosition?["end","start"]:["start","end"],n=e[0],i=e[1],o="above"===this.menu.yPosition?["bottom","top"]:["top","bottom"],s=o[0],r=o[1],a=[s,r],u=a[0],c=a[1],h=[n,i],p=h[0],l=h[1],f=0;this.triggersSubmenu()?(l=n="before"===this.menu.xPosition?"start":"end",i=p="end"===n?"start":"end",f="bottom"===s?8:-8):this.menu.overlapTrigger||(u="top"===s?"bottom":"top",c="top"===r?"bottom":"top"),t.withPositions([{originX:n,originY:u,overlayX:p,overlayY:s,offsetY:f},{originX:i,originY:u,overlayX:l,overlayY:s,offsetY:f},{originX:n,originY:c,overlayX:p,overlayY:r,offsetY:-f},{originX:i,originY:c,overlayX:l,overlayY:r,offsetY:-f}])},t.prototype._cleanUpSubscriptions=function(){this._closeSubscription.unsubscribe(),this._hoverSubscription.unsubscribe()},t.prototype._menuClosingActions=function(){var t=this,e=this._overlayRef.backdropClick(),n=this._overlayRef.detachments(),i=this._parentMenu?this._parentMenu.closed:Object(a.a)(),o=this._parentMenu?this._parentMenu._hovered().pipe(Object(g.a)(function(e){return e!==t._menuItemInstance}),Object(g.a)(function(){return t._menuOpen})):Object(a.a)();return Object(f.a)(e,i,o,n)},t.prototype._handleMousedown=function(t){Object(m.h)(t)||(this._openedByMouse=!0,this.triggersSubmenu()&&t.preventDefault())},t.prototype._handleKeydown=function(t){var e=t.keyCode;this.triggersSubmenu()&&(e===b.i&&"ltr"===this.dir||e===b.g&&"rtl"===this.dir)&&this.openMenu()},t.prototype._handleClick=function(t){this.triggersSubmenu()?(t.stopPropagation(),this.openMenu()):this.toggleMenu()},t.prototype._handleHover=function(){var t=this;this.triggersSubmenu()&&(this._hoverSubscription=this._parentMenu._hovered().pipe(Object(g.a)(function(e){return e===t._menuItemInstance&&!e.disabled}),function(t,e){void 0===e&&(e=w.a);var n=0 instanceof Date&&!isNaN(0)?0-e.now():Math.abs(0);return function(t){return t.lift(new P(n,e))}}(0,l)).subscribe(function(){t._openedByMouse=!0,t.menu instanceof A&&t.menu._isAnimating?t.menu._animationDone.pipe(Object(y.a)(1),Object(v.a)(t._parentMenu._hovered())).subscribe(function(){return t.openMenu()}):t.openMenu()}))},t}(),B=function(){}}}]);