/*
* @Author: Administrator
* @Date:   2017-05-30 13:24:01
* @Last Modified by:   Administrator
* @Last Modified time: 2017-06-01 13:08:21
*/

'use strict';

$(function(){
	// $("img.lazy").lazyload({effect: "fadeIn"});
    
    //自动
    let boxa=document.querySelectorAll('.boximg img');
    console.log(boxa)
    let index=0;
    let t = setInterval(move,5000);
    function move(){
        index++;
        if(index==boxa.length){
            index=0;
        }
        for(let i=0;i<boxa.length;i++){
            boxa[i].style.opacity='0';
            boxa[i].style.transform='scale(1)'
        }
        boxa[index].style.opacity='0.2';
        boxa[index].style.transform='scale(1.3)'
    }

	    $('#dowebok').fullpage({
	    	sectionsColor:['','#FAFAFA','','#fff',''],
	    	loopHorizontal:true,   //横向slide幻灯片是否循环滚动
            // continuousVertical: true,   //是否循环滚动
            anchors:['page1','page2','page3','page4','page5','page6'],
            'navigation':true,
            'navigationPosition':'right',
            'navigationColor':'#fff',
            navigationTooltips:['page1','page2','page3','page4','page5','page6'],
             //showActiveTooltip是否显示当前页面的tooltip信息，默认为false
             // showActiveTooltip:true,
            //slidesNavigation   是否显示横向幻灯片的导航，默认为false
            // slidesNavigation:true,
            //slidesNavPosition横向导航的位置，默认为bottom，可以设置为top或bottom
            // slidesNavPosition:'top',
            //左右滑块的箭头的背景颜色
            controlArrowColor:'rgba(0,0,0,0)',
            'resize':true,//字体随窗口缩放而缩放
            // 'loopTop':true,    //滚动到最顶部后是否连续滚动到底部
            // 'loopBottom':true,    
            // 'loopHorizontal':true,
            afterLoad: function(anchorLink, index){
                if(index == 1){
                    $('.nav2top').css({height:0});
                    $('.section1').find('h3').animate({
                        width:'100%'
					}, 1500, 'easeOutExpo');
                    $('.section1').find('h2').animate({
						top: '180',
					}, 1500, 'easeOutExpo');
                    $('.section1').find('.my').animate({
                        width:'350'
                    }, 1500, 'easeOutExpo');
					
                }
                if(index == 2){
                    $('.nav2top').css({height:70})
                    $('.section2').find('h2').fadeIn('400');
                    $('.section2').find('p').animate({
                        left: '0',
                    }, 1000, 'easeOutExpo');
                    $('.section2').find('img').animate({
                        width:'150',
                    }, 1500, 'easeOutExpo');
                    $('.nav2rt li a')[1].style.borderBottom = '3px solid #f40'

                  /*  afterLoad()css({
                        borderBottom:'3px solid #f40',
                    });*/
                }
                if(index == 3){
                    $('.nav2top').css({height:70});
                    $('.section3').find('h2').fadeIn('slow').animate({
						top: '150',
					}, 1500, 'easeOutExpo');
                    $('.section3').find('.s3').animate({
                        height:'190',
                    }, 1500, 'easeOutExpo');
                    $('.nav2rt li a')[2].style.borderBottom = '3px solid #f40'
                }
                if(index == 4){
                    $('.nav2top').css({height:70});
                    $('.section4').find('h2').fadeIn('slow');
                    $('.section4').find('ul').animate({
                        width:'100%',
                    }, 1500, 'easeOutExpo');
                    $('.nav2rt li a')[3].style.borderBottom = '3px solid #f40'
                }
                if(index == 5){
                    $('.nav2top').css({height:70})
                    $('.section5').find('h2').fadeIn('slow');
                    $('.nav2rt li a')[4].style.borderBottom = '3px solid #f40'
                    circle(0,80)
                    circle1(0,82)
                    circle2(0,76)
                    circle3(0,72)
                }
                if(index == 6){
                    $('.nav2top').css({height:70})
                    $('.section7').find('h2').fadeIn('slow');
                    $('.nav2rt li a')[5].style.borderBottom = '3px solid #f40'
                    $('.section7').find('.s7m').animate({
                        height:'430',
                    }, 1500, 'easeOutExpo');
                }
            },
            onLeave: function(index, direction){
                if(index == '1'){
                    $('.section1').find('h2').delay(500).animate({
						top: '-100'
					}, 1500, 'easeOutExpo');
					$('.section1').find('h3').delay(1000).animate({
						width:'0'
					}, 1500, 'easeOutExpo');
                    $('.section1').find('.my').delay(500).animate({
                        width:'120%'
                    }, 1500, 'easeOutExpo');
					$('.section2').find('h2').fadeOut('50');
					$('.section3').find('h2').fadeOut('fast');
					$('.section4').find('h2').fadeOut('fast');
					$('.section5').find('h2').fadeOut('fast');
					$('.section7').find('h2').fadeOut('fast');
                    $('.section3').find('.s3').animate({
                        height:'0'
                    }, 1500, 'easeOutExpo');
                    $('.section4').find('ul').animate({
                        width:'0'
                    }, 1500, 'easeOutExpo');
                    $('.section7').find('.s7m').animate({
                        height:'0'
                    }, 1500, 'easeOutExpo');
                }

                if(index == 2){
                    $('.section2').find('h2').delay(200).fadeOut('slow');
                    $('.section2').find('.p1').delay(500).animate({
                        left: '-1800'
                    }, 1500, 'easeOutExpo');
                    $('.section2').find('.p2').delay(500).animate({
                        left: '1800'
                    }, 1500, 'easeOutExpo');
                    $('.section2').find('img').animate({
                        width:'0',
                    }, 1500, 'easeOutExpo');
                    $('.nav2rt li a')[1].style.borderBottom = ''
                }
                if(index == 3){
                    $('.section3').find('h2').delay(200).fadeOut('slow').animate({
						top: '150'
					}, 1500, 'easeOutExpo');
                    $('.section3').find('.s3').delay(500).animate({
                        height:'0',
                    }, 1500, 'easeOutExpo');
                    $('.nav2rt li a')[2].style.borderBottom = ''
                }
                if(index == 4){
                    $('.section4').find('h2').delay(200).fadeOut('slow');
                    $('.section4').find('ul').delay(500).animate({
                        width:'0',
                    }, 1500, 'easeOutExpo');
                    $('.nav2rt li a')[3].style.borderBottom = ''
                }
                if(index == 5){
                    $('.section5').find('h2').delay(200).fadeOut('slow');
                    $('.nav2rt li a')[4].style.borderBottom = ''
                }
                if(index == 6){
                    $('.section7').find('h2').delay(200).fadeOut('slow');
                    $('.section7').find('.s7m').delay(500).animate({
                        height:'0',  
                    }, 1500, 'easeOutExpo');
                    $('.nav2rt li a')[5].style.borderBottom = ''
                }
            },
	    });
	     setInterval(function(){
	     	$.fn.fullpage.moveSlideRight();
	     },2000);

	});    
