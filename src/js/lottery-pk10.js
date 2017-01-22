$( "#slider" ).slider({
	range: "min",
	min: 0,
    max: 10000,
	slide: function (event, ui) {
        //$("#amount").val(ui.value);
		var val=ui.value,
			pct=ui.value/100,
			money=parseInt($(".choose .choose-foot .money").html());
			
			money=parseInt(money*pct/100);
		$(".choose .choose-foot .slider-pct").html(pct+"%");
		$(".choose .choose-foot .slider-mun").html(money);
    }
});


function news_content(model,e){
	var main_lists_html="";var classify_childs_html="";
	$(".main .classify .classify-list .classify-list-li").not($(e)).removeClass("on");
	$(e).addClass("on");
	$(".main .classify li").removeClass("on");
	var parent=$(e).closest("li");
	parent.addClass("on");
	if(model=="1-1"){
		main_lists_html='<li class="odd">'
            	+'<div class="l-title"><p>第一名</p></div>'
                +'<div class="l-mun">'
                	
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">1</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">2</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">3</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">4</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">5</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">6</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">7</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">8</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">9</div>'
					+'<div class="mun" onclick="$(this).toggleClass(\'on\')">10</div>'
                +'</div>'
                +'<div class="l-mun2">'
                	+'<div class="mun" onclick="select_all(this)">全</div>'
					+'<div class="mun" onclick="select_big(this)">大</div>'
					+'<div class="mun" onclick="select_small(this)">小</div>'
					+'<div class="mun" onclick="select_odd(this)">奇</div>'
					+'<div class="mun" onclick="select_even(this)">偶</div>'
					+'<div class="mun" onclick="select_clear(this)">清</div>'
                +'</div>'
            +'</li>';
	}else if(model=="1-2"){
		main_lists_html='<div class="l-textarea"><textarea class="textArea" onblur="add_danshi()" onfocus="remove_danshi()">'+danshi+'</textarea></div>';	
	}else if(model=="2-1"){
		main_lists_html='<li class="odd">'
            	+'<div class="l-title"><p>第一名</p></div>'
                +'<div class="l-mun">'
                	
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">1</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">2</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">3</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">4</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">5</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">6</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">7</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">8</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">9</div>'
					+'<div class="mun" onclick="$(this).toggleClass(\'on\')">10</div>'
                +'</div>'
                +'<div class="l-mun2">'
                	+'<div class="mun" onclick="select_all(this)">全</div>'
					+'<div class="mun" onclick="select_big(this)">大</div>'
					+'<div class="mun" onclick="select_small(this)">小</div>'
					+'<div class="mun" onclick="select_odd(this)">奇</div>'
					+'<div class="mun" onclick="select_even(this)">偶</div>'
					+'<div class="mun" onclick="select_clear(this)">清</div>'
                +'</div>'
            +'</li>'
			+'<li class="even">'
            	+'<div class="l-title"><p>第二名</p></div>'
                +'<div class="l-mun">'
                	
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">1</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">2</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">3</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">4</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">5</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">6</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">7</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">8</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">9</div>'
					+'<div class="mun" onclick="$(this).toggleClass(\'on\')">10</div>'
                +'</div>'
                +'<div class="l-mun2">'
                	+'<div class="mun" onclick="select_all(this)">全</div>'
					+'<div class="mun" onclick="select_big(this)">大</div>'
					+'<div class="mun" onclick="select_small(this)">小</div>'
					+'<div class="mun" onclick="select_odd(this)">奇</div>'
					+'<div class="mun" onclick="select_even(this)">偶</div>'
					+'<div class="mun" onclick="select_clear(this)">清</div>'
                +'</div>'
            +'</li>';
	}else if(model=="3-1"){
		main_lists_html='<li class="odd">'
            	+'<div class="l-title"><p>第一名</p></div>'
                +'<div class="l-mun">'
                	
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">1</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">2</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">3</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">4</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">5</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">6</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">7</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">8</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">9</div>'
					+'<div class="mun" onclick="$(this).toggleClass(\'on\')">10</div>'
                +'</div>'
                +'<div class="l-mun2">'
                	+'<div class="mun" onclick="select_all(this)">全</div>'
					+'<div class="mun" onclick="select_big(this)">大</div>'
					+'<div class="mun" onclick="select_small(this)">小</div>'
					+'<div class="mun" onclick="select_odd(this)">奇</div>'
					+'<div class="mun" onclick="select_even(this)">偶</div>'
					+'<div class="mun" onclick="select_clear(this)">清</div>'
                +'</div>'
            +'</li>'
			+'<li class="even">'
            	+'<div class="l-title"><p>第二名</p></div>'
                +'<div class="l-mun">'
                	
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">1</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">2</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">3</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">4</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">5</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">6</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">7</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">8</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">9</div>'
					+'<div class="mun" onclick="$(this).toggleClass(\'on\')">10</div>'
                +'</div>'
                +'<div class="l-mun2">'
                	+'<div class="mun" onclick="select_all(this)">全</div>'
					+'<div class="mun" onclick="select_big(this)">大</div>'
					+'<div class="mun" onclick="select_small(this)">小</div>'
					+'<div class="mun" onclick="select_odd(this)">奇</div>'
					+'<div class="mun" onclick="select_even(this)">偶</div>'
					+'<div class="mun" onclick="select_clear(this)">清</div>'
                +'</div>'
            +'</li>'
			+'<li class="even">'
            	+'<div class="l-title"><p>第三名</p></div>'
                +'<div class="l-mun">'
                	
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">1</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">2</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">3</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">4</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">5</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">6</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">7</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">8</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">9</div>'
					+'<div class="mun" onclick="$(this).toggleClass(\'on\')">10</div>'
                +'</div>'
                +'<div class="l-mun2">'
                	+'<div class="mun" onclick="select_all(this)">全</div>'
					+'<div class="mun" onclick="select_big(this)">大</div>'
					+'<div class="mun" onclick="select_small(this)">小</div>'
					+'<div class="mun" onclick="select_odd(this)">奇</div>'
					+'<div class="mun" onclick="select_even(this)">偶</div>'
					+'<div class="mun" onclick="select_clear(this)">清</div>'
                +'</div>'
            +'</li>';
	}else if(model=="4-1"){
		main_lists_html='<li class="odd">'
            	+'<div class="l-title"><p>第一名</p></div>'
                +'<div class="l-mun">'
                	
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">1</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">2</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">3</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">4</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">5</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">6</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">7</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">8</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">9</div>'
					+'<div class="mun" onclick="$(this).toggleClass(\'on\')">10</div>'
                +'</div>'
                +'<div class="l-mun2">'
                	+'<div class="mun" onclick="select_all(this)">全</div>'
					+'<div class="mun" onclick="select_big(this)">大</div>'
					+'<div class="mun" onclick="select_small(this)">小</div>'
					+'<div class="mun" onclick="select_odd(this)">奇</div>'
					+'<div class="mun" onclick="select_even(this)">偶</div>'
					+'<div class="mun" onclick="select_clear(this)">清</div>'
                +'</div>'
            +'</li>'
			+'<li class="even">'
            	+'<div class="l-title"><p>第二名</p></div>'
                +'<div class="l-mun">'
                	
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">1</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">2</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">3</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">4</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">5</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">6</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">7</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">8</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">9</div>'
					+'<div class="mun" onclick="$(this).toggleClass(\'on\')">10</div>'
                +'</div>'
                +'<div class="l-mun2">'
                	+'<div class="mun" onclick="select_all(this)">全</div>'
					+'<div class="mun" onclick="select_big(this)">大</div>'
					+'<div class="mun" onclick="select_small(this)">小</div>'
					+'<div class="mun" onclick="select_odd(this)">奇</div>'
					+'<div class="mun" onclick="select_even(this)">偶</div>'
					+'<div class="mun" onclick="select_clear(this)">清</div>'
                +'</div>'
            +'</li>'
			+'<li class="even">'
            	+'<div class="l-title"><p>第三名</p></div>'
                +'<div class="l-mun">'
                	
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">1</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">2</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">3</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">4</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">5</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">6</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">7</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">8</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">9</div>'
					+'<div class="mun" onclick="$(this).toggleClass(\'on\')">10</div>'
                +'</div>'
                +'<div class="l-mun2">'
                	+'<div class="mun" onclick="select_all(this)">全</div>'
					+'<div class="mun" onclick="select_big(this)">大</div>'
					+'<div class="mun" onclick="select_small(this)">小</div>'
					+'<div class="mun" onclick="select_odd(this)">奇</div>'
					+'<div class="mun" onclick="select_even(this)">偶</div>'
					+'<div class="mun" onclick="select_clear(this)">清</div>'
                +'</div>'
            +'</li>'
			+'<li class="even">'
            	+'<div class="l-title"><p>第四名</p></div>'
                +'<div class="l-mun">'
                	
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">1</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">2</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">3</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">4</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">5</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">6</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">7</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">8</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">9</div>'
					+'<div class="mun" onclick="$(this).toggleClass(\'on\')">10</div>'
                +'</div>'
                +'<div class="l-mun2">'
                	+'<div class="mun" onclick="select_all(this)">全</div>'
					+'<div class="mun" onclick="select_big(this)">大</div>'
					+'<div class="mun" onclick="select_small(this)">小</div>'
					+'<div class="mun" onclick="select_odd(this)">奇</div>'
					+'<div class="mun" onclick="select_even(this)">偶</div>'
					+'<div class="mun" onclick="select_clear(this)">清</div>'
                +'</div>'
            +'</li>'
			+'<li class="even">'
            	+'<div class="l-title"><p>第五名</p></div>'
                +'<div class="l-mun">'
                	
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">1</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">2</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">3</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">4</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">5</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">6</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">7</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">8</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">9</div>'
					+'<div class="mun" onclick="$(this).toggleClass(\'on\')">10</div>'
                +'</div>'
                +'<div class="l-mun2">'
                	+'<div class="mun" onclick="select_all(this)">全</div>'
					+'<div class="mun" onclick="select_big(this)">大</div>'
					+'<div class="mun" onclick="select_small(this)">小</div>'
					+'<div class="mun" onclick="select_odd(this)">奇</div>'
					+'<div class="mun" onclick="select_even(this)">偶</div>'
					+'<div class="mun" onclick="select_clear(this)">清</div>'
                +'</div>'
            +'</li>'
			+'<li class="even">'
            	+'<div class="l-title"><p>第六名</p></div>'
                +'<div class="l-mun">'
                	
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">1</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">2</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">3</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">4</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">5</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">6</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">7</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">8</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">9</div>'
					+'<div class="mun" onclick="$(this).toggleClass(\'on\')">10</div>'
                +'</div>'
                +'<div class="l-mun2">'
                	+'<div class="mun" onclick="select_all(this)">全</div>'
					+'<div class="mun" onclick="select_big(this)">大</div>'
					+'<div class="mun" onclick="select_small(this)">小</div>'
					+'<div class="mun" onclick="select_odd(this)">奇</div>'
					+'<div class="mun" onclick="select_even(this)">偶</div>'
					+'<div class="mun" onclick="select_clear(this)">清</div>'
                +'</div>'
            +'</li>'
			+'<li class="even">'
            	+'<div class="l-title"><p>第七名</p></div>'
                +'<div class="l-mun">'
                	
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">1</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">2</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">3</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">4</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">5</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">6</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">7</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">8</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">9</div>'
					+'<div class="mun" onclick="$(this).toggleClass(\'on\')">10</div>'
                +'</div>'
                +'<div class="l-mun2">'
                	+'<div class="mun" onclick="select_all(this)">全</div>'
					+'<div class="mun" onclick="select_big(this)">大</div>'
					+'<div class="mun" onclick="select_small(this)">小</div>'
					+'<div class="mun" onclick="select_odd(this)">奇</div>'
					+'<div class="mun" onclick="select_even(this)">偶</div>'
					+'<div class="mun" onclick="select_clear(this)">清</div>'
                +'</div>'
            +'</li>'
			+'<li class="even">'
            	+'<div class="l-title"><p>第八名</p></div>'
                +'<div class="l-mun">'
                	
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">1</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">2</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">3</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">4</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">5</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">6</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">7</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">8</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">9</div>'
					+'<div class="mun" onclick="$(this).toggleClass(\'on\')">10</div>'
                +'</div>'
                +'<div class="l-mun2">'
                	+'<div class="mun" onclick="select_all(this)">全</div>'
					+'<div class="mun" onclick="select_big(this)">大</div>'
					+'<div class="mun" onclick="select_small(this)">小</div>'
					+'<div class="mun" onclick="select_odd(this)">奇</div>'
					+'<div class="mun" onclick="select_even(this)">偶</div>'
					+'<div class="mun" onclick="select_clear(this)">清</div>'
                +'</div>'
            +'</li>'
			+'<li class="even">'
            	+'<div class="l-title"><p>第九名</p></div>'
                +'<div class="l-mun">'
                	
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">1</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">2</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">3</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">4</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">5</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">6</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">7</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">8</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">9</div>'
					+'<div class="mun" onclick="$(this).toggleClass(\'on\')">10</div>'
                +'</div>'
                +'<div class="l-mun2">'
                	+'<div class="mun" onclick="select_all(this)">全</div>'
					+'<div class="mun" onclick="select_big(this)">大</div>'
					+'<div class="mun" onclick="select_small(this)">小</div>'
					+'<div class="mun" onclick="select_odd(this)">奇</div>'
					+'<div class="mun" onclick="select_even(this)">偶</div>'
					+'<div class="mun" onclick="select_clear(this)">清</div>'
                +'</div>'
            +'</li>'
			+'<li class="even">'
            	+'<div class="l-title"><p>第十名</p></div>'
                +'<div class="l-mun">'
                	
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">1</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">2</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">3</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">4</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">5</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">6</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">7</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">8</div>'
                    +'<div class="mun" onclick="$(this).toggleClass(\'on\')">9</div>'
					+'<div class="mun" onclick="$(this).toggleClass(\'on\')">10</div>'
                +'</div>'
                +'<div class="l-mun2">'
                	+'<div class="mun" onclick="select_all(this)">全</div>'
					+'<div class="mun" onclick="select_big(this)">大</div>'
					+'<div class="mun" onclick="select_small(this)">小</div>'
					+'<div class="mun" onclick="select_odd(this)">奇</div>'
					+'<div class="mun" onclick="select_even(this)">偶</div>'
					+'<div class="mun" onclick="select_clear(this)">清</div>'
                +'</div>'
            +'</li>';
	}else if(model=="longhudou"){
		main_lists_html='<div class="longhudou">'
            	+'<div class="longhudou-btn long-btn on" />'
                +'<img class="vs" src="images/lottery/vs.png" />'
                +'<div class="longhudou-btn hu-btn" />'
            +'</div>'
	}else if(model=="daxiao"){
        main_lists_html='<div class="longhudou">'
                +'<div class="longhudou-btn da-btn on" />'
                +'<img class="vs" src="images/lottery/vs.png" />'
                +'<div class="longhudou-btn xiao-btn" />'
            +'</div>'
    }else if(model=="danshuang"){
        main_lists_html='<div class="longhudou">'
                +'<div class="longhudou-btn dan-btn on" />'
                +'<img class="vs" src="images/lottery/vs.png" />'
                +'<div class="longhudou-btn shuang-btn" />'
            +'</div>'
    }
	$(".main .classify .classify-childs").html(classify_childs_html);
	$(".main .lists").html(main_lists_html);
	$(".main .main-content .main-title .title").html($(e).html());
	
}