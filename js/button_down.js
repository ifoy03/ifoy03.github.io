;(function($){var h=$.scrollTo=function(a,b,c){$(window).scrollTo(a,b,c)};h.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};h.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(e,f,g){if(typeof f=='object'){g=f;f=0}if(typeof g=='function')g={onAfter:g};if(e=='max')e=9e9;g=$.extend({},h.defaults,g);f=f||g.duration;g.queue=g.queue&&g.axis.length>1;if(g.queue)f/=2;g.offset=both(g.offset);g.over=both(g.over);return this._scrollable().each(function(){if(e==null)return;var d=this,$elem=$(d),targ=e,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}$.each(g.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=h.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(g.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=g.offset[pos]||0;if(g.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*g.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(g.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&g.queue){if(old!=attr[key])animate(g.onAfterFirst);delete attr[key]}});animate(g.onAfter);function animate(a){$elem.animate(attr,f,g.easing,a&&function(){a.call(this,e,g)})}}).end()};h.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);

jQuery.extend(jQuery.fn, {
	toplinkwidth: function(){
		totalContentWidth = jQuery('#content').outerWidth(); // РЎв‚¬Р С‘РЎР‚Р С‘Р Р…Р В° Р В±Р В»Р С•Р С”Р В° РЎРѓ Р С”Р С•Р Р…РЎвЂљР ВµР Р…РЎвЂљР С•Р С, Р Р†Р С”Р В»РЎР‹РЎвЂЎР В°РЎРЏ padding
		totalTopLinkWidth = jQuery('#top-link').children('a').outerWidth(true); // РЎв‚¬Р С‘РЎР‚Р С‘Р Р…Р В° РЎРѓР В°Р СР С•Р в„– Р С”Р Р…Р С•Р С—Р С”Р С‘ Р Р…Р В°Р Р†Р ВµРЎР‚РЎвЂ¦, Р Р†Р С”Р В»РЎР‹РЎвЂЎР В°РЎРЏ padding Р С‘ margin
		h = 0;
		if(h<0){
			// Р ВµРЎРѓР В»Р С‘ Р С”Р Р…Р С•Р С—Р С”Р В° Р Р…Р Вµ РЎС“Р СР ВµРЎвЂ°Р В°Р ВµРЎвЂљРЎРѓРЎРЏ, РЎРѓР С”РЎР‚РЎвЂ№Р Р†Р В°Р ВµР С Р ВµРЎвЂ
			jQuery(this).hide();
			return false;
		} else {
			if(jQuery(window).scrollTop() >= 1){
				jQuery(this).show();
			}
			jQuery(this).css({'padding-right': h+'px'});
			return true;
		}
	}
});

jQuery(function($){
	var topLink = $('#top-link');
	topLink.css({'padding-top': $(window).height()});
	// РµСЃР»Рё РІР°Рј РЅРµ РЅСѓР¶РЅРѕ, С‡С‚РѕР±С‹ РєРЅРѕРїРєР° РїРѕРґСЃС‚СЂР°РёРІР°Р»Р°СЃСЊ РїРѕРґ С€РёСЂРёРЅСѓ СЌРєСЂР°РЅР° - СѓРґР°Р»РёС‚Рµ СЃР»РµРґСѓСЋС‰РёРµ С‡РµС‚С‹СЂРµ СЃС‚СЂРѕС‡РєРё РІ РєРѕРґРµ
	topLink.toplinkwidth();
	$(window).resize(function(){
		topLink.toplinkwidth();
	});
	$(window).scroll(function() {
		if($(window).scrollTop() >= 1) {
			topLink.fadeIn(300).children('a').html('<span id="topicon"></span>').parent().removeClass('bottom_button').addClass('top_button');
		} else {
			topLink.children('a').html('<span id="backicon"></span>').parent().removeClass('top_button').addClass('bottom_button');
		}
	});
	topLink.click(function(e) {
		if($(this).hasClass('bottom_button')){
			// РїСЂРё РЅР°Р¶Р°С‚РёРё РЅР° РєРЅРѕРїРєСѓ В«Р’РЅРёР·В» РїРµСЂРµС…РѕРґРёРј С‚СѓРґР°, РіРґРµ РїСЂРµРєСЂР°С‚РёР»Рё С‡С‚РµРЅРёРµ
			$("body").scrollTo( pos + 'px', 500 );
		} else{
			// РѕРїСЂРµРґРµР»СЏРµРј Рё Р·Р°РїРѕРјРёРЅР°РµРј РєРѕРѕСЂРґРёРЅР°С‚С‹ С‚РѕРіРѕ РјРµСЃС‚Р° СЃС‚СЂР°РЅРёС†С‹, РѕС‚РєСѓРґР° Р±С‹Р» СЃРѕРІРµСЂС€РµРЅ РїРµСЂРµС…РѕРґ РЅР°РІРµСЂС…
			pos = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
			$("body,html").animate({scrollTop: 0},500);
		}
		return false;
	});
});