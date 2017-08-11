/*
* @Author: Administrator
* @Date:   2017-05-30 13:24:01
* @Last Modified by:   Administrator
* @Last Modified time: 2017-06-01 18:15:01
*/

'use strict';

$(function(){

//     let canvas=document.querySelectorAll('canvas');
// let ctx = canvas[0].getContext('2d');
// let ctx1 = canvas[1].getContext('2d');
// let ctx2 = canvas[2].getContext('2d');
// let ctx3 = canvas[3].getContext('2d');

//画圆 显示百分比  进度
// let ctx = document.querySelector('canvas').getContext('2d'); //绘 2D 图
// canvas1.
// circle(0,85)
/*
function circle(n,num){
    let t;
    ctx.font = 'bold 30px 宋体';
    ctx.lineWidth = 10;         //线宽
//    ctx.lineCap='round';        // round 圆形线帽  端点
    ctx.strokeStyle = '#2C3E50';
    ctx.setLineDash([4,2]);    //设置虚线，参数为数组，第一个值为实现宽度，第二个值为空白的宽度
    ctx.lineDashOffset = 10;    //虚线起始偏移量
    // ctx.shadowColor = 'red';    //阴影颜色
    // ctx.shadowBlur = 5;         //阴影的模糊级数
    t = setInterval(keyform,10);
    function keyform(){
        n++;
        if(n == num){
            clearInterval(t);
        }
        ctx.clearRect(0,0,300,300);  //清空画布
        ctx.beginPath();
        let anglue = (n * 360 / 100-90) * Math.PI / 180; // 从0开始
        ctx.arc(100,90,80,-Math.PI/2,anglue,false);
//            （圆心 x 坐标,Y坐标，半径，起始角-以弧度计，结束角-以弧度计，true逆时针/false顺时针）
        ctx.stroke();
        ctx.fillText(`${n}%`,80,100);//填充文本
        ctx.closePath();
    }    
}


function circle1(n,num){
    let t1;
    ctx1.font = 'bold 30px 宋体';
    ctx1.lineWidth = 10;         //线宽
    ctx1.strokeStyle = '#2C3E50';
    ctx1.setLineDash([4,2]);  
    ctx1.lineDashOffset = 10;    //虚线起始偏移量
    t1 = setInterval(keyform,10);
    function keyform(){
        n++;
        if(n == num){
            clearInterval(t1);
        }
        ctx1.clearRect(0,0,300,300);  //清空画布
        ctx1.beginPath();
        let anglue = (n * 360 / 100-90) * Math.PI / 180; // 从0开始
        ctx1.arc(100,90,80,-Math.PI/2,anglue,false);
        ctx1.stroke();
        ctx1.fillText(`${n}%`,80,100);//填充文本
        ctx1.closePath();
    }
}

function circle2(n,num){
    let t1;
    ctx2.font = 'bold 30px 宋体';
    ctx2.lineWidth = 10;         //线宽
    ctx2.strokeStyle = '#2C3E50';
    ctx2.setLineDash([4,2]);  
    ctx2.lineDashOffset = 10;    //虚线起始偏移量
    t1 = setInterval(keyform,10);
    function keyform(){
        n++;
        if(n == num){
            clearInterval(t1);
        }
        ctx2.clearRect(0,0,300,300);  //清空画布
        ctx2.beginPath();
        let anglue = (n * 360 / 100-90) * Math.PI / 180; // 从0开始
        ctx2.arc(100,90,80,-Math.PI/2,anglue,false);
        ctx2.stroke();
        ctx2.fillText(`${n}%`,80,100);//填充文本
        ctx2.closePath();
    }
}

function circle3(n,num){
    let t1;
    ctx3.font = 'bold 30px 宋体';
    ctx3.lineWidth = 10;         //线宽
    ctx3.strokeStyle = '#2C3E50';
    ctx3.setLineDash([4,2]);  
    ctx3.lineDashOffset = 10;    //虚线起始偏移量
    t1 = setInterval(keyform,10);
    function keyform(){
        n++;
        if(n == num){
            clearInterval(t1);
        }
        ctx3.clearRect(0,0,300,300);  //清空画布
        ctx3.beginPath();
        let anglue = (n * 360 / 100-90) * Math.PI / 180; // 从0开始
        ctx3.arc(100,90,80,-Math.PI/2,anglue,false);
        ctx3.stroke();
        ctx3.fillText(`${n}%`,80,100);//填充文本
        ctx3.closePath();
    }
}
*/


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
