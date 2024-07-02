var kt_isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return kt_isMobile.Android()||kt_isMobile.BlackBerry()||kt_isMobile.iOS()||kt_isMobile.Opera()||kt_isMobile.Windows()}};kt_isMobile.any()||function(t,e,i,a){function n(e,i){this.element=e,this.options=t.extend({},s,i),this._defaults=s,this._name=o,this.init()}var o="ktstellar",s={scrollProperty:"scroll",positionProperty:"position",horizontalScrolling:!0,verticalScrolling:!0,horizontalOffset:0,verticalOffset:0,responsive:!1,parallaxBackgrounds:!0,parallaxElements:!0,hideDistantElements:!0,hideElement:function(t){t.hide()},showElement:function(t){t.show()}},r={scroll:{getLeft:function(t){return t.scrollLeft()},setLeft:function(t,e){t.scrollLeft(e)},getTop:function(t){return t.scrollTop()},setTop:function(t,e){t.scrollTop(e)}},position:{getLeft:function(t){return-1*parseInt(t.css("left"),10)},getTop:function(t){return-1*parseInt(t.css("top"),10)}},margin:{getLeft:function(t){return-1*parseInt(t.css("margin-left"),10)},getTop:function(t){return-1*parseInt(t.css("margin-top"),10)}},transform:{getLeft:function(t){var e=getComputedStyle(t[0])[d];return"none"!==e?-1*parseInt(e.match(/(-?[0-9]+)/g)[4],10):0},getTop:function(t){var e=getComputedStyle(t[0])[d];return"none"!==e?-1*parseInt(e.match(/(-?[0-9]+)/g)[5],10):0}}},l={position:{setLeft:function(t,e){t.css("left",e)},setTop:function(t,e){t.css("top",e)}},transform:{setPosition:function(t,e,i,a,n){t[0].style[d]="translate3d("+(e-i)+"px, "+(a-n)+"px, 0)"}}},c,d=function(){var e=/^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,i=t("script")[0].style,a="",n;for(n in i)if(e.test(n)){a=n.match(e)[0];break}return"WebkitOpacity"in i&&(a="Webkit"),"KhtmlOpacity"in i&&(a="Khtml"),function(t){return a+(a.length>0?t.charAt(0).toUpperCase()+t.slice(1):t)}}()("transform"),h=t("<div />",{style:"background:#fff"}).css("background-position-x")!==a,f=h?function(t,e,i){t.css({"background-position-x":e,"background-position-y":i})}:function(t,e,i){t.css("background-position",e+" "+i)},p=h?function(t){return"50%"==t.css("background-position-y")?($ypos=t.height()/2,[t.css("background-position-x"),$ypos]):[t.css("background-position-x"),t.css("background-position-y")]}:function(t){return t.css("background-position").split(" ")},u=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(t){setTimeout(t,1e3/60)};n.prototype={init:function(){this.options.name=o+"_"+Math.floor(1e9*Math.random()),this._defineElements(),this._defineGetters(),this._defineSetters(),this._handleWindowLoadAndResize(),this._detectViewport(),this.refresh({firstLoad:!0}),"scroll"===this.options.scrollProperty?this._handleScrollEvent():this._startAnimationLoop()},_defineElements:function(){this.element===i.body&&(this.element=e),this.$scrollElement=t(this.element),this.$element=this.element===e?t("body"):this.$scrollElement,this.$viewportElement=this.options.viewportElement!==a?t(this.options.viewportElement):this.$scrollElement[0]===e||"scroll"===this.options.scrollProperty?this.$scrollElement:this.$scrollElement.parent()},_defineGetters:function(){var t=this,e=r[t.options.scrollProperty];this._getScrollLeft=function(){return e.getLeft(t.$scrollElement)},this._getScrollTop=function(){return e.getTop(t.$scrollElement)}},_defineSetters:function(){var e=this,i=r[e.options.scrollProperty],a=l[e.options.positionProperty],n=i.setLeft,o=i.setTop;this._setScrollLeft="function"==typeof n?function(t){n(e.$scrollElement,t)}:t.noop,this._setScrollTop="function"==typeof o?function(t){o(e.$scrollElement,t)}:t.noop,this._setPosition=a.setPosition||function(t,i,n,o,s){e.options.horizontalScrolling&&a.setLeft(t,i,n),e.options.verticalScrolling&&a.setTop(t,o,s)}},_handleWindowLoadAndResize:function(){var i=this,a=t(e);i.options.responsive&&a.bind("load."+this.name,function(){i.refresh()}),a.bind("resize."+this.name,function(){i._detectViewport(),i.options.responsive&&i.refresh()})},refresh:function(i){var a=this,n=a._getScrollLeft(),o=a._getScrollTop();i&&i.firstLoad||this._reset(),this._setScrollLeft(0),this._setScrollTop(0),this._setOffsets(),this._findBackgrounds(),i&&i.firstLoad&&/WebKit/.test(navigator.userAgent)&&t(e).load(function(){var t=a._getScrollLeft(),e=a._getScrollTop();a._setScrollLeft(t+1),a._setScrollTop(e+1),a._setScrollLeft(t),a._setScrollTop(e)}),this._setScrollLeft(n),this._setScrollTop(o)},_detectViewport:function(){var t=this.$viewportElement.offset(),e=null!==t&&t!==a;this.viewportWidth=this.$viewportElement.width(),this.viewportHeight=this.$viewportElement.height(),this.viewportOffsetTop=e?t.top:0,this.viewportOffsetLeft=e?t.left:0},_findBackgrounds:function(){var e=this,i=this._getScrollLeft(),n=this._getScrollTop(),o;this.backgrounds=[],this.options.parallaxBackgrounds&&(o=this.$element.find("[data-ktstellar-background-ratio]"),this.$element.data("ktstellar-background-ratio")&&(o=o.add(this.$element)),o.each(function(){var o=t(this),s=p(o),r,l,c,d,h,u,g,m,k,b=0,v=0,y=0,w=0;if(o.data("ktstellar-backgroundIsActive")){if(o.data("ktstellar-backgroundIsActive")!==this)return}else o.data("ktstellar-backgroundIsActive",this);o.data("ktstellar-backgroundStartingLeft")?f(o,o.data("ktstellar-backgroundStartingLeft"),o.data("ktstellar-backgroundStartingTop")):(o.data("ktstellar-backgroundStartingLeft",s[0]),o.data("ktstellar-backgroundStartingTop",s[1])),h="auto"===o.css("margin-left")?0:parseInt(o.css("margin-left"),10),u="auto"===o.css("margin-top")?0:parseInt(o.css("margin-top"),10),g=o.offset().left-h-i,m=o.offset().top-u-n,o.parents().each(function(){var e=t(this);return!0===e.data("ktstellar-offset-parent")?(b=y,v=w,k=e,!1):(y+=e.position().left,void(w+=e.position().top))}),r=o.data("ktstellar-horizontal-offset")!==a?o.data("ktstellar-horizontal-offset"):k!==a&&k.data("ktstellar-horizontal-offset")!==a?k.data("ktstellar-horizontal-offset"):e.horizontalOffset,l=o.data("ktstellar-vertical-offset")!==a?o.data("ktstellar-vertical-offset"):k!==a&&k.data("ktstellar-vertical-offset")!==a?k.data("ktstellar-vertical-offset"):e.verticalOffset,e.backgrounds.push({$element:o,$offsetParent:k,isFixed:"fixed"===o.css("background-attachment"),horizontalOffset:r,verticalOffset:l,startingValueLeft:s[0],startingValueTop:s[1],startingBackgroundPositionLeft:isNaN(parseInt(s[0],10))?0:parseInt(s[0],10),startingBackgroundPositionTop:isNaN(parseInt(s[1],10))?0:parseInt(s[1],10),startingPositionLeft:o.position().left,startingPositionTop:o.position().top,startingOffsetLeft:g,startingOffsetTop:m,parentOffsetLeft:b,parentOffsetTop:v,ktstellarRatio:o.data("ktstellar-background-ratio")===a?1:o.data("ktstellar-background-ratio")})}))},_reset:function(){var t,e,i,a;for(a=this.backgrounds.length-1;a>=0;a--)(i=this.backgrounds[a]).$element.data("ktstellar-backgroundStartingLeft",null).data("ktstellar-backgroundStartingTop",null),f(i.$element,i.startingValueLeft,i.startingValueTop)},destroy:function(){this._reset(),this.$scrollElement.unbind("resize."+this.name).unbind("scroll."+this.name),this._animationLoop=t.noop,t(e).unbind("load."+this.name).unbind("resize."+this.name)},_setOffsets:function(){var i=this,a=t(e);a.unbind("resize.horizontal-"+this.name).unbind("resize.vertical-"+this.name),"function"==typeof this.options.horizontalOffset?(this.horizontalOffset=this.options.horizontalOffset(),a.bind("resize.horizontal-"+this.name,function(){i.horizontalOffset=i.options.horizontalOffset()})):this.horizontalOffset=this.options.horizontalOffset,"function"==typeof this.options.verticalOffset?(this.verticalOffset=this.options.verticalOffset(),a.bind("resize.vertical-"+this.name,function(){i.verticalOffset=i.options.verticalOffset()})):this.verticalOffset=this.options.verticalOffset},_repositionElements:function(){var t=this._getScrollLeft(),e=this._getScrollTop(),i,a,n,o,s,r,l,c=!0,d=!0,h,p,u,g,m;if(this.currentScrollLeft!==t||this.currentScrollTop!==e||this.currentWidth!==this.viewportWidth||this.currentHeight!==this.viewportHeight)for(this.currentScrollLeft=t,this.currentScrollTop=e,this.currentWidth=this.viewportWidth,this.currentHeight=this.viewportHeight,m=this.backgrounds.length-1;m>=0;m--)o=(s=this.backgrounds[m]).isFixed?0:1,r=this.options.horizontalScrolling?(t+s.horizontalOffset-this.viewportOffsetLeft-s.startingOffsetLeft+s.parentOffsetLeft-s.startingBackgroundPositionLeft)*(o-s.ktstellarRatio)+"px":s.startingValueLeft,l=this.options.verticalScrolling?(e+s.verticalOffset-this.viewportOffsetTop-s.startingOffsetTop+s.parentOffsetTop-s.startingBackgroundPositionTop)*(o-s.ktstellarRatio)+"px":s.startingValueTop,f(s.$element,r,l)},_handleScrollEvent:function(){var t=this,e=!1,i=function(){t._repositionElements(),e=!1},a=function(){e||(u(i),e=!0)};this.$scrollElement.bind("scroll."+this.name,a),a()},_startAnimationLoop:function(){var t=this;this._animationLoop=function(){u(t._animationLoop),t._repositionElements()},this._animationLoop()}},t.fn[o]=function(e){var i=arguments;return e===a||"object"==typeof e?this.each(function(){t.data(this,"plugin_"+o)||t.data(this,"plugin_"+o,new n(this,e))}):"string"==typeof e&&"_"!==e[0]&&"init"!==e?this.each(function(){var a=t.data(this,"plugin_"+o);a instanceof n&&"function"==typeof a[e]&&a[e].apply(a,Array.prototype.slice.call(i,1)),"destroy"===e&&t.data(this,"plugin_"+o,null)}):void 0},t[o]=function(i){var a=t(e);return a.ktstellar.apply(a,Array.prototype.slice.call(arguments,0))},t[o].scrollProperty=r,t[o].positionProperty=l,e.Ktstellar=n}(jQuery,this,document),jQuery(document).ready(function(t){function e(e,i){return/(png|jpg|jpeg|gif|tiff|bmp)$/.test(t(i).attr("href").toLowerCase().split("?")[0].split("#")[0])}function i(){t('a[href]:not(".kt-no-lightbox")').filter(e).attr("data-rel","lightbox")}function a(e){var i=e.data("slider-speed"),a=e.data("slider-fade"),n=e.data("slider-anim-speed"),o=e.data("slider-arrows"),s=e.data("slider-auto"),r=e.data("slider-type"),l=!1;if(t("body.rtl").length>=1&&(l=!0),"carousel"==r){var c=e.data("slides-to-show");null==c&&(c=1),e.slick({slidesToScroll:1,slidesToShow:c,centerMode:!0,variableWidth:!0,arrows:o,speed:n,autoplay:s,autoplaySpeed:i,fade:a,pauseOnHover:!1,rtl:l,dots:!1})}else if("content-carousel"==r){var d=e.data("slider-xxl"),h=e.data("slider-xl"),f=e.data("slider-md"),p=e.data("slider-sm"),u=e.data("slider-xs"),g=e.data("slider-ss"),m;if(1!==e.data("slider-scroll"))var k=d,b=h,v=f,y=p,w=u,_=g;else var k=1,b=1,v=1,y=1,w=1,_=1;e.slick({slidesToScroll:k,slidesToShow:d,arrows:o,speed:n,autoplay:s,autoplaySpeed:i,fade:a,pauseOnHover:!1,dots:!1,rtl:l,responsive:[{breakpoint:1499,settings:{slidesToShow:h,slidesToScroll:b}},{breakpoint:1199,settings:{slidesToShow:f,slidesToScroll:v}},{breakpoint:991,settings:{slidesToShow:p,slidesToScroll:y}},{breakpoint:767,settings:{slidesToShow:u,slidesToScroll:w}},{breakpoint:543,settings:{slidesToShow:g,slidesToScroll:_}}]})}else if("thumb"==r){var S=e.data("slider-thumbid"),x=e.data("slider-thumbs-showing"),T=e.attr("id");e.slick({slidesToScroll:1,slidesToShow:1,arrows:o,speed:n,autoplay:s,autoplaySpeed:i,fade:a,pauseOnHover:!1,adaptiveHeight:!0,dots:!1,rtl:l,asNavFor:S}),t(S).slick({slidesToShow:x,slidesToScroll:1,asNavFor:"#"+T,dots:!1,rtl:l,centerMode:!1,focusOnSelect:!0})}else e.slick({slidesToShow:1,slidesToScroll:1,arrows:o,speed:n,autoplay:s,autoplaySpeed:i,fade:a,pauseOnHover:!1,rtl:l,adaptiveHeight:!0,dots:!1})}function n(){var e=t("#kad-vertical-menu"),i=t(window).height(),a=t("body").hasClass("admin-bar")?32:0,n=t(".kad-scrollable-area").outerHeight(),o=i-a,s=t(window).scrollTop(),r=t(".nav-main .sf-vertical ul").outerHeight();n>o?o+s>=n?(e.css("position","fixed"),e.css("bottom","0"),e.css("top","auto"),e.css("height","auto")):(e.css("position","absolute"),e.css("bottom","auto"),e.css("top","auto"),e.css("height","auto")):(e.css("position","fixed"),e.css("bottom",""),e.css("top",""),e.css("height",""))}function o(){var e=t(window).height(),i=t("body").hasClass("admin-bar")?32:0,a=t(".kad-scrollable-area").outerHeight(),n=e-i;if(a>n)var o=a;else var o=n;t(".kad-relative-vertical-content .sf-vertical > li > ul").each(function(){var e,i;t(this).outerHeight()+t(this).parent("li").offset().top>o?(t(this).css("top","auto"),t(this).css("bottom","0")):(t(this).css("top",""),t(this).css("bottom",""))})}function s(){var e=t(window).width();t("#topbar .sf-menu-normal > li > ul").each(function(){var i,a;t(this).outerWidth()+t(this).parent("li").offset().left>e?t(this).addClass("kt-subright"):t(this).removeClass("kt-subright")})}function r(){var e=t(window).width();t(".kad-header-menu-outer .sf-menu-normal > li > ul").each(function(){var i,a;t(this).outerWidth()+t(this).parent("li").offset().left>e?t(this).addClass("kt-subright"):t(this).removeClass("kt-subright")}),t(".kad-header-menu-outer .sf-menu-normal > li.kt-lgmenu > ul").each(function(){var i,a;t(this).outerWidth()/2+t(this).parent("li").offset().left>e?t(this).addClass("kt-subright"):t(this).removeClass("kt-subright")})}function l(){var e=t(window).width();t(".nav-second .sf-menu-normal > li > ul").each(function(){var i,a;t(this).outerWidth()+t(this).parent("li").offset().left>e?t(this).addClass("kt-subright"):t(this).removeClass("kt-subright")}),t(".nav-second .sf-menu-normal > li.kt-lgmenu > ul").each(function(){var i,a;t(this).outerWidth()/2+t(this).parent("li").offset().left>e?t(this).addClass("kt-subright"):t(this).removeClass("kt-subright")})}function c(){var e=0;t(window).width()<992?e=t("#kad-mobile-banner").height():t(".kt-header-position-above").length?e=t(".kt-header-position-above").height():t(".second-navclass").length&&(e=t(".second-navclass").height()),t(".titleclass").css("padding-top",e+"px")}function d(e){var i=t(".kt-header-position-above").attr("data-shrink"),a=t(".kt-header-position-above").attr("data-shrink-height"),n=t(".kt-header-position-above").attr("data-start-height"),o=t(".kt-header-position-above").attr("data-reappear"),s=t(window),r=t("body").hasClass("admin-bar")?32:0,l=0;if("header"==e){var c=t(".kad-header-menu-outer");l=t("#topbar").height()}else if("header_top"==e)var c=t(".kad-header-topbar-primary-outer");else if("header_all"==e)var c=t(".kt-header-position-above");else if("topbar"==e){var c=t(".topbarclass");i=0}else if("secondary"==e){var c=t(".second-navclass");i=0}set_height=function(){var e=s.scrollTop(),i=n;e-=l,(e/=2)<0&&(e=0),n-e>a?(i=n-e,c.removeClass("kt-item-shrunk")):(i=a,c.addClass("kt-item-shrunk")),t(".kad-header-height").each(function(){t(this).css({height:i+"px"})})},1==i?(c.ktsticky({topSpacing:r,zIndex:1e3}),s.scroll(set_height)):c.ktsticky({topSpacing:r,zIndex:1e3})}function h(){var e=t("#kad-mobile-banner").height(),i=t("body").hasClass("admin-bar")?32:0,a=t("#kad-mobile-banner").attr("data-mobile-header-sticky");t(window).width()<600&&t("body").hasClass("admin-bar")?i=0:t(window).width()<782&&t("body").hasClass("admin-bar")&&(i=46),1==a&&(t("#kad-mobile-banner").ktsticky({topSpacing:i,zIndex:1e3}),t(window).on("debouncedresize",function(e){kt_isMobile.any()||(t("#kad-mobile-banner").unstick(),t("#kad-mobile-banner").ktsticky({topSpacing:i,zIndex:1e3}))}))}function f(){t(".kt-custom-row-full-stretch").each(function(){var e=t("#inner-wrap").width()-t(this).parents("#content").width();t(this).css({"margin-left":"-"+e/2+"px"}),t(this).css({"margin-right":"-"+e/2+"px"}),t(this).css({width:+t("#inner-wrap").width()+"px"}),t(this).css({visibility:"visible"}),t(this).css({opacity:"1"})}),t(".kt-custom-row-full").each(function(){var e=t("#inner-wrap").width()-t(this).parents("#content").width();t(this).css({"padding-left":e/2+"px"}),t(this).css({"padding-right":e/2+"px"}),t(this).css({"margin-left":"-"+e/2+"px"}),t(this).css({"margin-right":"-"+e/2+"px"}),t(this).css({visibility:"visible"}),t(this).css({opacity:"1"})})}var p,u,u,g,m,k;(kt_isMobile.any()||t("[data-toggle=tooltip]").tooltip(),0==("function"==typeof t().sticky)&&(t.fn.sticky=function(e){t(this).ktsticky(e)}),t("[data-toggle=popover]").popover(),t(".kt-tabs a").click(function(e){e.preventDefault(),t(this).tab("show")}),t(".widget ul ul.children").each(function(){t(this).parent("li").append('<span class="kt-toggle-sub"></span>'),t(this).parent("li").find(".count").length&&t(this).parent("li").addClass("kt-toggle-has-count"),(t(this).parent("li").hasClass("current-cat")||t(this).parent("li").hasClass("current-cat-parent"))&&t(this).parent("li").addClass("kt-drop-toggle")}),t(".kt-toggle-sub").click(function(e){e.preventDefault(),t(this).parent("li").hasClass("kt-drop-toggle")?t(this).parent("li").removeClass("kt-drop-toggle"):t(this).parent("li").addClass("kt-drop-toggle")}),t(document).mouseup(function(e){var i=t("#kad-menu-search-popup");i.is(e.target)||0!==i.has(e.target).length||t("#kad-menu-search-popup.in").collapse("hide")}),t("#kad-menu-search-popup").on("shown.bs.collapse",function(){t(".kt-search-container .search-query").focus()}),t(".kt_typed_element").each(function(){var e=t(this).data("first-sentence"),i=t(this).data("second-sentence"),a=t(this).data("third-sentence"),n=t(this).data("fourth-sentence"),o=t(this).data("loop"),s=t(this).data("speed"),r=t(this).data("start-delay"),l=t(this).data("back-delay"),c=t(this).data("sentence-count");if(null==r&&(r=500),null==l&&(l=500),"1"==c)var d={strings:[e],typeSpeed:s,startDelay:r,backDelay:l,loop:o};else if("3"==c)var d={strings:[e,i,a],typeSpeed:s,startDelay:r,backDelay:l,loop:o};else if("4"==c)var d={strings:[e,i,a,n],typeSpeed:s,startDelay:r,backDelay:l,loop:o};else var d={strings:[e,i],typeSpeed:s,startDelay:r,backDelay:l,loop:o};t(this).appear(function(){t(this).typed(d)},{accX:0,accY:-25})}),t(".kt-m-hover").bind("touchend",function(e){t(this).toggleClass("kt-mobile-hover"),t(this).toggleClass("kt-mhover-inactive")}),t(".collapse-next").click(function(e){var i=t(this).siblings(".sf-dropdown-menu");i.hasClass("in")?(i.collapse("toggle"),t(this).removeClass("toggle-active")):(i.collapse("toggle"),t(this).addClass("toggle-active"))}),t("body").hasClass("kt-turnoff-lightbox")||i(),t.extend(!0,t.magnificPopup.defaults,{tClose:"",tLoading:'<div class="kt-ajax-overlay"><div class="kt-ajax-bubbling"><span id="kt-ajax-bubbling_1"></span><span id="kt-ajax-bubbling_2"></span><span id="kt-ajax-bubbling_3"></span></div></div>',gallery:{tPrev:"",tNext:"",tCounter:light_of},mainClass:"mfp-zoom-in",removalDelay:400,image:{markup:'<div class="mfp-figure mfp-with-anim"><div class="mfp-close"></div><div class="mfp-img"></div><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></div>',tError:light_error,titleSrc:function(t){return t.el.find("img").attr("alt")}}}),t("body").hasClass("kt-turnoff-lightbox")||(t('a[data-rel^="lightbox"]:not(".kt-no-lightbox")').magnificPopup({type:"image"}),t(".kad-light-gallery").each(function(){t(this).find('a[data-rel^="lightbox"]:not(".kt-no-lightbox")').magnificPopup({type:"image",gallery:{enabled:!0},image:{titleSrc:function(t){return t.el.find("img").attr("data-caption")?t.el.find("img").attr("data-caption"):t.el.find("img").attr("alt")}},removalDelay:500,callbacks:{beforeOpen:function(){this.st.image.markup=this.st.image.markup.replace("mfp-figure","mfp-figure mfp-with-anim")}}})}),t(".product-grid-light-gallery").each(function(){t(this).find('a[data-rel^="lightbox"]:not(".kt-no-lightbox")').magnificPopup({type:"image",gallery:{enabled:!0},image:{titleSrc:function(t){return t.el.parents(".product_item").attr("data-post-title")}},removalDelay:500,callbacks:{beforeOpen:function(){this.st.image.markup=this.st.image.markup.replace("mfp-figure","mfp-figure mfp-with-anim")}}})}),t(".product-light-gallery").each(function(){t(this).magnificPopup({delegate:"a",type:"image",gallery:{enabled:!0},image:{titleSrc:function(t){return t.el.parents(".product_item").attr("data-post-title")}}})}),t(".product-light-gallery-open").on("click",function(e){e.preventDefault();var i="."+t(this).data("gallery-id"),a=t(i).find(".slick-current").data("slick-index");t(i).magnificPopup("open",a)}),t("#content .gallery").each(function(){t(this).find('a[data-rel^="lightbox"]:not(".kt-no-lightbox")').magnificPopup({type:"image",gallery:{enabled:!0},image:{titleSrc:function(t){return t.el.find("img").attr("alt")}},removalDelay:500,callbacks:{beforeOpen:function(){this.st.image.markup=this.st.image.markup.replace("mfp-figure","mfp-figure mfp-with-anim")}}})}),t(".wp-block-gallery").each(function(){t(this).find('a[data-rel^="lightbox"]:not(".kt-no-lightbox")').magnificPopup({type:"image",gallery:{enabled:!0},image:{titleSrc:function(t){return t.el.parents(".blocks-gallery-item").find("figcaption").length?t.el.parents(".blocks-gallery-item").find("figcaption").html():t.el.find("img").attr("alt")}},removalDelay:500,callbacks:{beforeOpen:function(){this.st.image.markup=this.st.image.markup.replace("mfp-figure","mfp-figure mfp-with-anim")}}})}),t(".kb-gallery-magnific-init").each(function(){var e=t(this).attr("data-lightbox-caption"),i=t(this).attr("data-image-filter");t(this).find("li.ericadesigns-blocks-gallery-item a.kb-gallery-item-link").magnificPopup({type:"image",mainClass:"mfp-kt-blocks kb-gal-light-filter-"+i,gallery:{enabled:!0},image:{titleSrc:function(t){if("true"==e&&t.el.find("figcaption").length)return t.el.find("figcaption").html()}}}),t(this).find(".kt-blocks-carousel .kb-slide-item:not(.slick-cloned) a.kb-gallery-item-link").magnificPopup({type:"image",mainClass:"mfp-kt-blocks kb-gal-light-filter-"+i,gallery:{enabled:!0},image:{titleSrc:function(t){if("true"==e&&t.el.find("figcaption").length)return t.el.find("figcaption").html()}}})}),t(".ktvideolight").magnificPopup({type:"iframe"})),t(".kt-pop-modal").magnificPopup({type:"inline",callbacks:{open:function(){setTimeout(function(){t(".mfp-inline-holder input")[0].focus()},100)}}}),t(".kt-sldr-pop-modal").on("click",function(e){e.preventDefault();var i=t(this).data("pop-sldr-direction"),a=t(this).data("pop-sldr-class"),n=t(this).data("mfp-src");t.magnificPopup.open({items:{type:"inline",src:n},removalDelay:200,mainClass:function(t){return a+" sldr-align-"+i+" mfp-slide"},callbacks:{beforeOpen:function(){t("body").addClass("mag-pop-sldr-open-"+i),t("body").addClass(a)},beforeClose:function(){t("body").removeClass("mag-pop-sldr-open-"+i),t("body").removeClass(a)}},closeBtnInside:!1,closeMarkup:'<div class="sldr-close-container kad-mobile-header-height"><button class="sldr-close"><span></span><span></span><span></span></button></div>'})}),t(".no-lightbox").magnificPopup({disableOn:function(){return!1}}),t(".kt-no-lightbox").magnificPopup({disableOn:function(){return!1}}),t(".kad-ericadesigns-parallax").each(function(){var e=t(this).css("background-position-y"),i=t(this).css("background-position-x"),a=t(this);t(".kad-ericadesigns-parallax").appear(function(){t(window).scroll(function(){var n="calc("+e+" - "+t(window).scrollTop()/5+"px)",o=i+" "+n;a.css({backgroundPosition:o})})},{accX:0,accY:-25},"easeInCubic")}),t(".kt-slickslider").each(function(){var e=t(this),i=e.data("slider-initdelay");null==i||"0"==i?a(e):setTimeout(function(){a(e)},i)}),t("#kad-vertical-menu").length&&(t(this).waitForImages(n()),t(window).scroll(n)),t("#kad-vertical-menu").length&&(t(this).waitForImages(o()),t(window).on("debouncedresize",function(t){o()})),t("#topbar .sf-menu-normal").length&&(s(),t(window).on("debouncedresize",function(t){s()})),t(".kad-header-menu-outer .sf-menu-normal").length&&(r(),t(window).on("debouncedresize",function(t){r()})),t(".nav-second .sf-menu-normal").length&&(l(),t(window).on("debouncedresize",function(t){l()})),t("body.trans-header").length&&(c(),t(window).on("debouncedresize",function(t){c()})),t(".titleclass").length&&(t(".titleclass .entry-title").each(function(){var e=t(this).data("max-size"),i=t(this).data("min-size");t(this).kt_fitText(1.4,{minFontSize:i,maxFontSize:e,maxWidth:1110,minWidth:400})}),t(".titleclass .subtitle").length&&t(".titleclass .subtitle").each(function(){var e=t(this).data("max-size"),i=t(this).data("min-size");t(this).kt_fitText(1.5,{minFontSize:i,maxFontSize:e,maxWidth:1110,minWidth:400})})),t(".kt-header-position-above").length)&&("none"!=(u=t(".kt-header-position-above").attr("data-sticky"))&&d(u));if((t(".kt-header-position-left").length||t(".kt-header-position-right").length)&&t(".second-navclass").length&&"second"==(u=t(".second-navclass").attr("data-sticky"))){var b=t("body").hasClass("admin-bar")?32:0;t(".second-navclass").ktsticky({topSpacing:b,zIndex:1e3}),t(window).on("debouncedresize",function(e){t(".second-navclass").unstick(),t(".second-navclass").ktsticky({topSpacing:b,zIndex:1e3})})}(1==t("#kad-banner").attr("data-menu-stick")&&t("#nav-main").ktsticky({topSpacing:b}),h(),t("ul.sf-menu.sf-menu-normal").ktsuperfish({delay:300,animation:{top:"100%",opacity:"show"},animationOut:{top:"120%",opacity:"hide"},cssArrows:!1,speed:"fast"}),t("ul.sf-menu.sf-vertical").ktsuperfish({delay:300,animation:{left:"100%",opacity:"show"},animationOut:{left:"105%",opacity:"hide"},cssArrows:!1,speed:"fast"}),kt_isMobile.any()&&t("ul.sf-menu li.sf-dropdown > a").on("tap",function(t){t.preventDefault()}),f(),t(window).on("debouncedresize",function(t){f()}),t(window).on("panelsStretchRows",f),t(window).width()>790?(t(".kt-animate-fade-in-up").each(function(){t(this).appear(function(){t(this).animate({opacity:1,top:0},900,"swing")},{accX:0,accY:-25},"easeInCubic")}),t(".kt-animate-fade-in-down").each(function(){t(this).appear(function(){t(this).animate({opacity:1,top:0},900,"swing")},{accX:0,accY:-25},"easeInCubic")}),t(".kt-animate-fade-in-left").each(function(){t(this).appear(function(){t(this).animate({opacity:1,left:0},900,"swing")},{accX:-25,accY:0},"easeInCubic")}),t(".kt-animate-fade-in-right").each(function(){t(this).appear(function(){t(this).animate({opacity:1,right:0},900,"swing")},{accX:-25,accY:0},"easeInCubic")}),t(".kt-animate-fade-in").each(function(){t(this).appear(function(){t(this).animate({opacity:1},900,"swing")})})):(t(".kt-animate-fade-in-up").each(function(){t(this).animate({opacity:1,top:0})}),t(".kt-animate-fade-in-down").each(function(){t(this).animate({opacity:1,top:0})}),t(".kt-animate-fade-in-left").each(function(){t(this).animate({opacity:1,left:0})}),t(".kt-animate-fade-in-right").each(function(){t(this).animate({opacity:1,right:0})}),t(".kt-animate-fade-in").each(function(){t(this).animate({opacity:1})})),t(".blog_carousel").length)&&("1"==t(".blog_carousel").data("match-height")&&t(".blog_carousel .blog_item").matchHeight());t(".kt-home-iconmenu-container").length&&("1"==t(".kt-home-iconmenu-container").data("equal-height")&&t(".kt-home-iconmenu-container .home-icon-item").matchHeight());if(t(".init-masonry-intrinsic").each(function(){var e=t(this),i=t(this).data("masonry-selector"),a=!0,n;t("body.rtl").length&&(a=!1),e.masonry({itemSelector:i,isOriginLeft:a}),e.find(".kt_item_fade_in").each(function(e){t(this).delay(75*e).animate({opacity:1},175)})}),t(".init-masonry").each(function(){var e=t(this),i=t(this).data("masonry-style"),a=t(this).data("masonry-selector"),n=!0;t("body.rtl").length&&(n=!1),e.waitForImages(function(){var o,o;"matchheight"==i?(t(".init-masonry "+a).matchHeight(),(o=e.find(".kt_item_fade_in")).each(function(e){t(this).delay(75*e).animate({opacity:1},175)})):(e.masonry({itemSelector:a,isOriginLeft:n}),(o=e.find(".kt_item_fade_in")).each(function(e){t(this).delay(75*e).animate({opacity:1},175)}))})}),t(".woocommerce-tabs .panel .reinit-masonry").length){var v=t(".reinit-masonry"),y=t(".reinit-masonry").data("masonry-selector");function w(){v.isotopeb({masonry:{columnWidth:iso_selector},transitionDuration:"0s"})}t(".woocommerce-tabs ul.tabs li a").click(function(){setTimeout(w,50)})}if(t(".panel-body .reinit-masonry").length){var v=t(".reinit-masonry"),y=t(".reinit-masonry").data("masonry-selector");t(".panel-group").on("shown.bs.collapse",function(t){v.masonry({itemSelector:y,isOriginLeft:mas_rtl})})}t(".tab-pane .reinit-masonry").length&&t(".tab-pane .reinit-masonry").each(function(){var e=t(this),i=t(this).data("masonry-selector");t(".kt-sc-tabs").on("shown.bs.tab",function(t){e.masonry({itemSelector:i,isOriginLeft:mas_rtl})})}),t(".tab-pane .kt-slickslider").length&&t(".tab-pane .kt-slickslider").each(function(){var e=t(this);t(".kt-sc-tabs").on("shown.bs.tab",function(t){e.slick("refresh")})}),t(".panel-body .kt-slickslider").length&&t(".panel-body .kt-slickslider").each(function(){var e=t(this);t(".panel-group").on("shown.bs.collapse",function(t){e.slick("refresh")})})}),kt_isMobile.any()||jQuery(document).ready(function(t){jQuery(window).ktstellar({responsive:!1,horizontalScrolling:!1,verticalOffset:150,parallaxElements:!1}),jQuery(window).on("debouncedresize",function(t){jQuery(window).ktstellar("refresh")})}),jQuery(window).load(function(){jQuery("body").animate({opacity:1})}),jQuery(document).ready(function(t){function e(){var e=!1,i=t('<div id="topcontrol"><div class="to_the_top"><div class="kt-icon-chevron-up"></div></div></div>').css({position:"fixed",bottom:2,right:0,opacity:0,cursor:"pointer"}).on("click",function(){return i.css({opacity:0}),t("body, html").animate({scrollTop:0},1200),!1}).appendTo("body");t(window).bind("scroll resize",function(t){var a=jQuery(window).scrollTop();a>=200&&!e?(i.animate({opacity:1},500),e=!0):a<200&&e&&(i.animate({opacity:0},200),e=!1)})}e()});