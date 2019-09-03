$(document).ready(function() {
// mobile event_popup swipes //////////////////////////////////////////////
    $('.events_popup_close, .events_popup_inner li:nth-child(1)').on('swipeup', function() {
        if(!$('.events_popup').hasClass('active')) {
            $('.events_popup').addClass('active');
            $('.events_popup_inner li:nth-child(1) h6 + span, .events_popup_inner li:nth-child(1) em').slideDown(600);
        }
    });
    $('.events_popup_close').on('swipedown', function() {
        if($('.events_popup').hasClass('active')) {
            $('.events_popup').removeClass('active');
            $('.events_popup_inner li:nth-child(1) h6 + span, .events_popup_inner li:nth-child(1) em').slideUp(600);
        }
    });
    $('.events_popup_inner li:nth-child(1)').on('tap', function() {
        if(!$('.events_popup').hasClass('active')) {
            $('.events_popup').addClass('active');
            $('.events_popup_inner li:nth-child(1) h6 + span, .events_popup_inner li:nth-child(1) em').slideDown(600);
        }
    });
    $('.events_popup_close').on('tap', function() {
        if($('.events_popup').hasClass('active')) {
            $('.events_popup').removeClass('active');
            $('.events_popup_inner li:nth-child(1) h6 + span, .events_popup_inner li:nth-child(1) em').slideUp(600);
        } else {
            $('.events_popup').addClass('active');
            $('.events_popup_inner li:nth-child(1) h6 + span, .events_popup_inner li:nth-child(1) em').slideDown(600);
        }
    });
    $('.events_popup_inner em').css('display','none');
// END mobile event_popup swipes //////////////////////////////////////////

// notifications in header ////////////////////////////////////////////////
    $('.user_tools .bell, .aside_bell').click(function() {
        $('.notifications_popup, .notifications_popup_closer').addClass('active');
    });
    
    $('.notifications_popup_close, .notifications_popup_closer').click(function() {
        $('.notifications_popup, .notifications_popup_closer').removeClass('active');
        $('.notifications_popup input[type="checkbox"]').prop('checked',false);
    });
// END notifications in header ////////////////////////////////////////////

// menu  //////////////////////////////////////////////////////////
	$('.menu_drop').click(function() {
        if(!$('.aside').hasClass('min') && $(window).width() > 767) {
            if($(this).hasClass('active')) {
                if(!$(this).parents().hasClass('menu_drop')) {
                    $('.menu_drop.active ul').slideUp(500);
                    $('.menu_drop.active').removeClass('active');
                }
                $(this).removeClass('active');
                $(this).children('ul').slideUp(500);
            } else {
                if(!$(this).parents().hasClass('menu_drop')) {
                    $('.menu_drop.active ul').slideUp(500);
                    $('.menu_drop.active').removeClass('active');
                }
                $(this).addClass('active');
                $(this).children('ul').slideDown(500);
            }
            return false;
        } else if($(window).width() < 767) {
            $('.menu_drop').removeClass('active');
            $(this).addClass('active');
            $('.mobile_menu_close').fadeOut(250);
            $('.mobile_menu_back').fadeIn(350);
            return false;
        }
	});
    $('.copyright i').click(function() {
        $('.aside').toggleClass('min');
        $('.menu_drop.active ul').slideUp(500);
        $('.menu_drop.active').removeClass('active');
        $('.menu_drop ul').slideUp(500);
    });
    $('.mobile_menu_back').click(function() {
        $(this).fadeOut(250);
        $('.mobile_menu_close').fadeIn(350);
        $('.menu_drop').removeClass('active');
    });
    $('.burger').click(function() {
        $('.aside').addClass('active');
    });
    $('.mobile_menu_close').click(function() {
        $('.aside').removeClass('active');
    });
// END menu dropdown //////////////////////////////////////////////////////

// mobile log_out button //////////////////////////////////////////////////
    $('.aside_logout').click(function() {
        $(this).addClass('active');
        $('body').on('click.LogoutClick', function() {
            $('.aside_logout').removeClass('active');
            $('body').off('click.LogoutClick');
        });
        return false;
    });
// END mobile log_out button //////////////////////////////////////////////

// conference name block //////////////////////////////////////////////////
    $('.conference_name').click(function() {
        if($(window).width() > 767) {
            $('.events_popup').fadeIn(600);
        }
    });
    $('.events_popup_close').click(function() {
        if($(window).width() > 767) {
            $('.events_popup').fadeOut(600);
        }
    });
// END conference name block //////////////////////////////////////////////

// pointer to menu on hover to word ///////////////////////////////////////
    $('.item.congratulations > div p span').on('mouseover', function() {
        if($('.aside').hasClass('min') && $(window).width() > 767) {
            var top = $(this).offset().top;
            var left = $(this).offset().left;
            $('.content .pointer').fadeIn(350);
            $('.content .pointer em').css({top: top + 'px', left: left + 'px'});
        }
    });
    $('.content .pointer em').on('mouseleave', function() {$('.content .pointer').fadeOut(350);});
// END pointer to menu on hover to word ///////////////////////////////////

// section description ////////////////////////////////////////////////////
    var closer_click_elem;
    $(document).on('click','.closer_click_start', function() {
        closer_click_elem = $(this).parent().find('.closer_click_elem');
        if(closer_click_elem.css('display') === 'none') {
            closer_click_elem.slideDown(600);
            $(this).addClass('active');
            $('body').on('click.someName', function(e) {
                if(!$(e.target).hasClass('closer_click_elem') && !$(e.target).parents().hasClass('closer_click_elem')) {
                    $('.closer_click_elem,.closer_click_start').removeClass('active');
                    $('.closer_click_elem').slideUp(600);
                    $('body').off('click.someName');
                }
            });
        } else {
            $('.closer_click_elem,.closer_click_start').removeClass('active');
            $('.closer_click_elem').slideUp(600);
        }
    });
// ENDsection description /////////////////////////////////////////////////

// account in top right bar /////////////////////////////////////////////// 
    $('.accnt').click(function() {
        if($('.accnt_pop').css('display') === 'block') {
            $('.accnt_pop').removeClass('active');
            window.clearTimeout(window.MyTimeout1);
            MyTimeout1 = window.setTimeout(
            function(){
                $('.accnt_pop').hide();
            },550);
        } else {
            $('.accnt_pop').show();
            window.clearTimeout(window.MyTimeout1);
            MyTimeout1 = window.setTimeout(
            function(){
                $('.accnt_pop').addClass('active');
            },10);
            $('body').click(function setCloserClick(e) {
                if(!$(e.target).hasClass('accnt_pop') && !$(e.target).parents().hasClass('accnt_pop')) {
                    $('.accnt_pop').removeClass('active');
                    window.clearTimeout(window.MyTimeout1);
                    MyTimeout1 = window.setTimeout(
                    function(){
                        $('.accnt_pop').hide();
                    },550);
                    $('body').off('click', setCloserClick);
                }
            });
            return false;
        }
    });
// END account in top right bar ///////////////////////////////////////////

// search open button /////////////////////////////////////////////////////
    $('li.search > i').click(function() {
        $(this).addClass('hidden');
        $('.main_carousel .owl-dots').addClass('hidden');
        $('li.search div').addClass('active');
        window.setTimeout(function(){$('li.search div').css('overflow', 'visible')},500);
        $('body').on('click.someNames', function(e) {
            if(!$(e.target).hasClass('search') && !$(e.target).parents().hasClass('search')) {
                $('li.search div').removeClass('active').css('overflow','');
                $('.closer_click_elem').slideUp(600);
                $('body').off('click.someNames');
                $('.main_carousel .owl-dots').removeClass('hidden');
                window.setTimeout(function(){$('li.search > i').removeClass('hidden')},510);
            }
        });
    });
// END search open button /////////////////////////////////////////////////

// search_cleaner button //////////////////////////////////////////////////
    $('.search_cleaner').on('tap mousedown', function() {
        $('li.search input').val('');
    });
// END search_cleaner button //////////////////////////////////////////////

// search select //////////////////////////////////////////////////////////
    $('.search select').each(function() {
        var selLi = [];
        $(this).find('option').each( function() {selLi.push(this.outerHTML.replace(/<(\/?)option/g,'<$1li'))});
        $(this).before('<div class="select_imitation"><span class="closer_click_start">' + $(this).find('option:selected').text() + '</span><div class="closer_click_elem"><ul>'+ selLi.join(" ") + '</ul></div></div>');
        fzValue = $(this).val();
        $('.select_imitation ul li[value="' + fzValue + '"]').addClass('active');
    });

    $('.search').on('click','.select_imitation ul li', function() {
        $(this).parents('.select_imitation').find('li.active').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.select_imitation').next('select').val($(this).attr('value'));
        $(this).parents('.select_imitation').find('span').text($(this).text()).removeClass('active');
        $(this).parents('.select_imitation').find('.closer_click_elem').slideUp(600);
    });
// END search select //////////////////////////////////////////////////////

// menu mouseover /////////////////////////////////////////////////////////
    $('.menu').on('mouseover', function() {
        $('.min').addClass('menu_mouseover');
    });
    $('.menu').on('mouseleave', function() {
        $('.min').removeClass('menu_mouseover');
    });
// END menu mouseover /////////////////////////////////////////////////////

// main carousel & changing width & scrollignoring for 1 second ///////////
    var owl = $('.main_carousel');
    owl.owlCarousel({
        loop:false,
        margin:40,
        nav:false,
        dots:true,
        smartSpeed: 1000,
        mouseDrag: false,
        touchDrag: false,
        animateOut: 'animated bounceOutUp',
        animateIn: 'animated bounceInUp',
        dotData: true,
        dotsData: true,
        center: true,
        items:1
    });
    owl.on('resize.owl.carousel', function() {
        owl.data('owl.carousel').refresh();
    });

    var scrollIgnore;
    owl.on('mousewheel', '.owl-stage', function (e) {
        if($(e.target).parents('#chart_map_div').length) {
            console.log('map scroll');
            e.preventDefault();
            return;
        }
    	if(scrollIgnore) {return}
        if($(window).width() > 767) {
        	scrollIgnore = true;
        	window.setTimeout(function(){scrollIgnore = false},1000);
    	    if (e.deltaY>0) {
                $(".owl-item").removeClass(['animated','owl-animated-out','owl-animated-in','bounceOutUp','bounceInDown','bounceOutDown','bounceInUp'])
                    .css('left','');
                owl.data('owl.carousel').options.animateIn="animated bounceInDown";
                owl.data('owl.carousel').options.animateOut="animated bounceOutDown";
                owl.data('owl.carousel').refresh();
                // owl.data('owl.carousel').reinit({animateIn:"animated bounceInDown",animateOut:"animated bounceOutDown"});
    	    	owl.trigger('prev.owl');
    	    } else {
                $(".owl-item").removeClass(['animated','owl-animated-out','owl-animated-in','bounceOutUp','bounceInDown','bounceOutDown','bounceInUp'])
                    .css('left','');
                owl.data('owl.carousel').options.animateOut="animated bounceOutUp";
                owl.data('owl.carousel').options.animateIn="animated bounceInUp";
                owl.data('owl.carousel').refresh();
                // owl.data('owl.carousel').reinit({animateIn:"animated bounceInUp",animateOut:"animated bounceOutUp"})
    	        owl.trigger('next.owl');
    	    }
    	    e.preventDefault();
        }
	});
    
    $('.owl-item .item').on('swipeup', function(ee) {
        if($(this).parent().hasClass('active')) {
            if(($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight)) {
                $(".owl-item").removeClass(['animated','owl-animated-out','owl-animated-in','bounceOutUp','bounceInDown','bounceOutDown','bounceInUp'])
                .css('left','');
                owl.data('owl.carousel').options.animateOut="animated bounceOutUp";
                owl.data('owl.carousel').options.animateIn="animated bounceInUp";
                owl.data('owl.carousel').refresh();
                $('.owl-item.active .item').off('touchmove.forSlider');
                owl.trigger('next.owl');
                window.setTimeout(function(){$('.owl-item.active').prev().find('.item').scrollTop(0)},500);
                ee.preventDefault();
            }
        }
    });
    $('.owl-item .item').on('swipedown', function(ee) {
        if($(this).parent().hasClass('active')) {
            if($(this).scrollTop() == 0) {
                $(".owl-item").removeClass(['animated','owl-animated-out','owl-animated-in','bounceOutUp','bounceInDown','bounceOutDown','bounceInUp'])
                .css('left','');
                owl.data('owl.carousel').options.animateIn="animated bounceInDown";
                owl.data('owl.carousel').options.animateOut="animated bounceOutDown";
                owl.data('owl.carousel').refresh();
                $('.owl-item.active .item').off('touchmove.forSlider');
                owl.trigger('prev.owl');
                ee.preventDefault();
            }
        }
    });

    $('.main_carousel .owl-dots').on('swipeleft',function() {owl.trigger('next.owl');});
    $('.main_carousel .owl-dots').on('swiperight',function() {owl.trigger('prev.owl');});

    // $('.owl-item .item').on('scroll', function(ee) {
    //     if ($(window).width() <= 767) {
    //         if($(this).parent().hasClass('active') && ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight)) {
    //             // $('.owl-item .item').on('swipedown', function(ee) {
    //             //     if($(this).parent().hasClass('active') && ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight)) {

    //                     owl.data('owl.carousel').options.animateOut="animated bounceOutUp";
    //                     owl.data('owl.carousel').options.animateIn="animated bounceInUp";
    //                     owl.data('owl.carousel').refresh();
    //                     owl.trigger('next.owl');
    //                     window.setTimeout(function(){$('.owl-item.active').prev().find('.item').scrollTop(0)},500);
    //                     ee.preventDefault();
    //             //     }
    //             // })
    //         } else if($(this).parent().hasClass('active') && $(this).scrollTop() == 0) {
    //             // $('.owl-item .item').on('swipeup', function(ee) {
    //             //     if($(this).parent().hasClass('active') && $(this).scrollTop() == 0) {

    //                     owl.data('owl.carousel').options.animateIn="animated bounceInDown";
    //                     owl.data('owl.carousel').options.animateOut="animated bounceOutDown";
    //                     owl.data('owl.carousel').refresh();
    //                     owl.trigger('prev.owl');
    //                     ee.preventDefault();
    //             //     }
    //             // })
    //         }
    //     }
    // });
// END main carousel & changing width & scrollignoring for 1 second ///////

// top_bounce_canvas_elem /////////////////////////////////////////////////
    var lineChart = new Chart($('.top_bounce_canvas_elem'), {
        type: 'line',
        data: {
            labels: ["", "13:00", "15:00", "17:00", "19:00", "21:00", ""],
            datasets: [{
                display: true,
                position: 'top',
                label: '',
                data: [123, 2995, 230, 1300, 600, 3000, ''],
                pointBackgroundColor: ['#0680ef','#0680ef','#0680ef','#0680ef','#0680ef','#0680ef','#0680ef'],
                pointRadius: 0,
                pointHoverRadius: 0,
                borderWidth: 0,
                lineTension: 0.2,
                steppedLine: false,
                borderColor: '#ffffff',
                backgroundColor: 'transparent'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 10,
                    bottom: 10
                }
            },
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    display: false,
                    gridLines: {
                        tickMarkLength: 0,
                        drawBorder: false,
                        display: false  
                    }
                }],
                xAxes: [{
                    gridLines: {
                        tickMarkLength: 0,
                        drawBorder: false,
                        display: false  
                    },
                    ticks: {
                      fontColor: "#fff", // this here
                      padding: 15
                    }
                }]
            },
            tooltips: {
                enabled: false,
                custom:  function(tooltipModel) {
                    var tooltipEl = document.getElementById('chartjs-tooltip');
                    if (!tooltipEl) {
                        tooltipEl = document.createElement('div');
                        tooltipEl.id = 'chartjs-tooltip';
                        tooltipEl.innerHTML = '<div class="top_bounce_tooltip"></div>';
                        //document.body.appendChild(tooltipEl);
                        $('.top_bounce_canvas_inner').append(tooltipEl);
                    }
                    if (tooltipModel.opacity === 0) {
                        tooltipEl.style.opacity = 0;
                        return;
                    }
                    tooltipEl.classList.remove('above', 'below', 'no-transform');
                    if (tooltipModel.yAlign) {
                        tooltipEl.classList.add(tooltipModel.yAlign);
                    } else {
                        tooltipEl.classList.add('no-transform');
                    }
                    function getBody(bodyItem) {
                        return bodyItem.lines;
                    }
                    // Set Text
                    if (tooltipModel.body) {
                        var titleLines = tooltipModel.title || [];
                        var bodyLines = tooltipModel.body.map(getBody);
                        var innerHtml = '';
                        bodyLines.forEach(function(body, i) {
                            innerHtml += '<strong>' + body + '</strong>';
                        });
                        titleLines.forEach(function(title) {
                            innerHtml += '<span>17 JUL 2019</span><span>' + title + '</span>';
                        });
                        var tableRoot = tooltipEl.querySelector('div');
                        tableRoot.innerHTML = innerHtml;
                    }
                    // `this` will be the overall tooltip
                    var position = this._chart.canvas.getBoundingClientRect();

                    // Display, position, and set styles for font
                    tooltipEl.style.opacity = 1;
                    tooltipEl.style.position = 'absolute';
                    
                    var tooltipWidth = $(tooltipEl).width();
                    var tooltipHeight = $(tooltipEl).height();
                    var tooltipRight = $(tooltipEl).parent().width() - (tooltipModel.caretX + tooltipWidth);
                    var tooltipBottom = $(tooltipEl).parent().height() - (tooltipModel.caretY + tooltipHeight);

                    if(tooltipBottom <= 0 && tooltipRight <= 0) {
                        tooltipEl.style.top = tooltipModel.caretY - tooltipHeight - 15 + 'px';
                        tooltipEl.style.left = tooltipModel.caretX - tooltipWidth - 20 + 'px';
                        $(tooltipEl).removeAttr('class');
                        window.clearTimeout(window.MyTimeout1);
                        MyTimeout1 = window.setTimeout(
                        function(){
                            $(tooltipEl).addClass('toolTbottom_right');
                        },10);
                    } else if (tooltipBottom <= 0) {
                        tooltipEl.style.top = tooltipModel.caretY - tooltipHeight - 15 + 'px';
                        tooltipEl.style.left = tooltipModel.caretX + 'px';
                        $(tooltipEl).removeAttr('class');
                        window.clearTimeout(window.MyTimeout1);
                        MyTimeout1 = window.setTimeout(
                        function(){
                            $(tooltipEl).addClass('toolTbottom_left');
                        },10);
                    } else if (tooltipRight <= 0) {
                        tooltipEl.style.top = tooltipModel.caretY + 'px';
                        tooltipEl.style.left = tooltipModel.caretX - tooltipWidth - 10 + 'px';
                        $(tooltipEl).removeAttr('class');
                        window.clearTimeout(window.MyTimeout1);
                        MyTimeout1 = window.setTimeout(
                        function(){
                            $(tooltipEl).addClass('toolTtop_right');
                        },10);
                    } else {
                        tooltipEl.style.top = tooltipModel.caretY + 'px';
                        tooltipEl.style.left = tooltipModel.caretX + 'px';
                        $(tooltipEl).removeAttr('class');
                        window.clearTimeout(window.MyTimeout1);
                        MyTimeout1 = window.setTimeout(
                        function(){
                            $(tooltipEl).addClass('toolTtop_left');
                        },10);
                    }
                    tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
                    tooltipEl.style.pointerEvents = 'none';
                },
                mode: 'nearest',
                position: 'average',
                intersect: false,
                backgroundColor: 'rgba(0,0,0,0.9)',
                titleFontStyle: 'bold',
                titleSpacing: 5,
                titleMarginBottom: 10,
                titleFontSize: 20,
                titleFontColor: '#FFFFFF',
                titleAlign: 'left',
                bodySpacing: 2,
                bodyFontColor: '#fff',
                bodyAlign: 'left',
                footerFontStyle: 'bold',
                footerSpacing: 2,
                footerMarginTop: 6,
                footerFontColor: '#fff',
                footerAlign: 'left',
                yPadding: 7,
                xPadding: 5,
                caretPadding: 3,
                caretSize: 5,
                cornerRadius: 10,
                multiKeyBackground: '#fff',
                displayColors: true,
                borderColor: 'rgba(0,0,0,0)',
                borderWidth: 0
            }
        }
    });
// END top_bounce_canvas_elem /////////////////////////////////////////////

// analytics_income canvas element ////////////////////////////////////////
    var dm = $('.analytics_comple_reg_canvas_elem')[0].getContext("2d");
    var gradientFill = dm.createLinearGradient(0, 0, 0, 100);
    gradientFill.addColorStop(1, "rgba(255, 255, 255, 0)");
    gradientFill.addColorStop(0.3, "rgba(255, 255, 255, 0.3)");
    gradientFill.addColorStop(0, "rgba(255, 255, 255, 0.3)");
    var DateMoney = new Chart($('.analytics_income_canvas_elem'), {
        type: 'line',
        data: {
            labels: ["", "Dec 25", "", "Dec 27", "", "Dec 29", ""],
            datasets: [{
                display: true,
                position: 'top',
                label: "",
                data: [600, 930, 820, 820, 820, 600, 380, 500],
                pointBackgroundColor: ['#2cdd73','#2cdd73','#2cdd73','#2cdd73','#2cdd73','#2cdd73','#2cdd73'],
                pointRadius: 0,
                pointHoverRadius: 0,
                borderWidth: 0,
                lineTension: 0.2,
                steppedLine: false,
                borderColor: '#ffffff',
                backgroundColor: gradientFill,
                borderDash: [5, 5],
                labels: {
                    boxWidth: 1200,
                    fontColor: '#ffffff'
                }
            }
            // ,{
            //     display: true,
            //     position: 'top',
            //     label: "",
            //     data: [711, 711, 273, 698, 698, 500, 300, 250],
            //     pointBackgroundColor: ['#2cdd73','#2cdd73','#2cdd73','#2cdd73','#2cdd73','#2cdd73','#2cdd73'],
            //     pointRadius: 6,
            //     pointHoverRadius: 8,
            //     borderWidth: 3,
            //     lineTension: 0.2,
            //     steppedLine: false,
            //     borderColor: '#ffffff',
            //     backgroundColor: 'transparent',
            //     labels: {
            //         boxWidth: 1200,
            //         fontColor: '#fff'
            //     }
            // }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 10,
                    bottom: 10
                }
            },
            scales: {
                yAxes: [{
                    display: false,
                    gridLines: {
                        display: false,
                        stepSize: .5,
                        color: "#248eef",
                        zeroLineColor: "#248eef",
                        drawBorder: false
                    },
                    ticks: {
                      fontColor: "#fff",
                    }
                }],
                xAxes: [{
                    gridLines: {
                        drawBorder: false,
                        display: false  
                    },
                    ticks: {
                      fontColor: "#fff",
                    }
                }]
            },
            tooltips: {
                enabled: false,
                custom:  function(tooltipModel) {
                    var tooltipEl = document.getElementById('analytics_income');
                    if (!tooltipEl) {
                        tooltipEl = document.createElement('div');
                        tooltipEl.id = 'analytics_income';
                        tooltipEl.innerHTML = '<div></div>';
                        //document.body.appendChild(tooltipEl);
                        $('.analytics_income_canvas_elem').parent().append(tooltipEl);
                    }
                    if (tooltipModel.opacity === 0) {
                        tooltipEl.style.opacity = 0;
                        return;
                    }
                    tooltipEl.classList.remove('above', 'below', 'no-transform');
                    if (tooltipModel.yAlign) {
                        tooltipEl.classList.add(tooltipModel.yAlign);
                    } else {
                        tooltipEl.classList.add('no-transform');
                    }
                    function getBody(bodyItem) {
                        return bodyItem.lines;
                    }
                    // Set Text
                    if (tooltipModel.body) {
                        var titleLines = tooltipModel.title || [];
                        var bodyLines = tooltipModel.body.map(getBody);
                        var innerHtml = '';
                        bodyLines.forEach(function(body, i) {
                            innerHtml += '<span class="date">Friday, Dec 28</span><small>Income this point</small><strong><p>$' + body + '</strong><em>+64%</em></p>';
                        });
                        // titleLines.forEach(function(title) {
                        //     // <span>Friday, Dec 28</span>
                        //     innerHtml += '<span>' + title + '</span>';
                        // });
                        var tableRoot = tooltipEl.querySelector('div');
                        tableRoot.innerHTML = innerHtml;
                    }
                    // `this` will be the overall tooltip
                    var position = this._chart.canvas.getBoundingClientRect();

                    // Display, position, and set styles for font
                    tooltipEl.style.opacity = 1;
                    tooltipEl.style.position = 'absolute';
                    
                    var tooltipWidth = $(tooltipEl).width();
                    var tooltipHeight = $(tooltipEl).height();
                    var tooltipRight = $(tooltipEl).parent().width() - (tooltipModel.caretX + tooltipWidth);
                    var tooltipBottom = $(tooltipEl).parent().height() - (tooltipModel.caretY + tooltipHeight);

                    if(tooltipBottom <= 0 && tooltipRight <= 0) {
                        tooltipEl.style.top = tooltipModel.caretY - tooltipHeight - 15 + 'px';
                        tooltipEl.style.left = tooltipModel.caretX - tooltipWidth - 20 + 'px';
                        $(tooltipEl).removeAttr('class');
                        window.clearTimeout(window.MyTimeout1);
                        MyTimeout1 = window.setTimeout(
                        function(){
                            $(tooltipEl).addClass('toolTbottom_right');
                        },10);
                        //$(tooltipEl).removeAttr('class').addClass('toolTbottom_right');
                    } else if (tooltipBottom <= 0) {
                        tooltipEl.style.top = tooltipModel.caretY - tooltipHeight - 15 + 'px';
                        tooltipEl.style.left = tooltipModel.caretX + 'px';
                        $(tooltipEl).removeAttr('class');
                        window.clearTimeout(window.MyTimeout1);
                        MyTimeout1 = window.setTimeout(
                        function(){
                            $(tooltipEl).addClass('toolTbottom_left');
                        },10);
                        //$(tooltipEl).removeAttr('class').addClass('toolTbottom_left');

                    } else if (tooltipRight <= 0) {
                        tooltipEl.style.top = tooltipModel.caretY + 'px';
                        tooltipEl.style.left = tooltipModel.caretX - tooltipWidth - 10 + 'px';
                        $(tooltipEl).removeAttr('class');
                        window.clearTimeout(window.MyTimeout1);
                        MyTimeout1 = window.setTimeout(
                        function(){
                            $(tooltipEl).addClass('toolTtop_right');
                        },10);
                        //$(tooltipEl).removeAttr('class').addClass('toolTtop_right');
                    } else {
                        tooltipEl.style.top = tooltipModel.caretY + 'px';
                        tooltipEl.style.left = tooltipModel.caretX + 'px';
                        $(tooltipEl).removeAttr('class');
                        window.clearTimeout(window.MyTimeout1);
                        MyTimeout1 = window.setTimeout(
                        function(){
                            $(tooltipEl).addClass('toolTtop_left');
                        },10);
                        //$(tooltipEl).removeAttr('class').addClass('toolTtop_left');
                    }

                    tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
                    tooltipEl.style.pointerEvents = 'none';
                },
                mode: 'nearest',
                position: 'average',
                intersect: false,
                backgroundColor: 'rgba(0,0,0,0.9)',
                titleFontStyle: 'bold',
                titleSpacing: 5,
                titleMarginBottom: 10,
                titleFontSize: 20,
                titleFontColor: '#FFFFFF',
                titleAlign: 'left',
                bodySpacing: 2,
                bodyFontColor: '#fff',
                bodyAlign: 'left',
                footerFontStyle: 'bold',
                footerSpacing: 2,
                footerMarginTop: 6,
                footerFontColor: '#fff',
                footerAlign: 'left',
                yPadding: 7,
                xPadding: 5,
                caretPadding: 3,
                caretSize: 5,
                cornerRadius: 10,
                multiKeyBackground: '#fff',
                displayColors: true,
                borderColor: 'rgba(0,0,0,0)',
                borderWidth: 0
            }
        }
    });
//end analytics_income canvas element /////////////////////////////////////

// analytics_registrations canvas element /////////////////////////////////
    var dp = $('.analytics_comple_reg_canvas_elem')[0].getContext("2d");
    var gradientFill = dp.createLinearGradient(0, 0, 0, 100);
    gradientFill.addColorStop(1, "rgba(255, 255, 255, 0)");
    gradientFill.addColorStop(0.3, "rgba(255, 255, 255, 0.3)");
    gradientFill.addColorStop(0, "rgba(255, 255, 255, 0.3)");
    var DatePeop = new Chart($('.analytics_registrations_canvas_elem'), {
        type: 'line',
        data: {
            labels: ["", "Dec 25", "", "Dec 27", "", "Dec 29", ""],
            datasets: [{
                display: true,
                position: 'top',
                label: "",
                data: [656, 1020, 745, 835, 536, 448, 1080, 30],
                pointBackgroundColor: ['#ff3e63','#ff3e63','#ff3e63','#ff3e63','#ff3e63','#ff3e63','#ff3e63'],
                pointRadius: 0,
                pointHoverRadius: 0,
                borderWidth: 0,
                lineTension: 0.2,
                steppedLine: false,
                borderColor: '#ffffff',
                backgroundColor: gradientFill,
                borderDash: [5, 5],
                labels: {
                    boxWidth: 1200,
                    fontColor: '#ffffff'
                }
            },{
                display: true,
                position: 'top',
                label: "",
                data: [802, 320, 1002, 1180, 900, 700, 500, 250],
                pointBackgroundColor: ['#ff3e63','#ff3e63','#ff3e63','#ff3e63','#ff3e63','#ff3e63','#ff3e63'],
                pointRadius: 0,
                pointHoverRadius: 0,
                borderWidth: 0,
                lineTension: 0.2,
                steppedLine: false,
                borderColor: '#ffffff',
                backgroundColor: 'transparent',
                labels: {
                    boxWidth: 1200,
                    fontColor: '#ffffff'
                }
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 10,
                    bottom: 10
                }
            },
            scales: {
                yAxes: [{
                    display: false,
                    gridLines: {
                        display: false,
                        stepSize: .5,
                        color: "#248eef",
                        zeroLineColor: "#248eef",
                        drawBorder: false
                    },
                    ticks: {
                      fontColor: "#fff",
                    }
                }],
                xAxes: [{
                    gridLines: {
                        display: false,
                        drawBorder: false,
                        display: false  
                    },
                    ticks: {
                      fontColor: "#fff",
                    }
                }]
            },
            tooltips: {
                enabled: false,
                custom:  function(tooltipModel) {
                    var tooltipEl = document.getElementById('analytics_registrations');
                    if (!tooltipEl) {
                        tooltipEl = document.createElement('div');
                        tooltipEl.id = 'analytics_registrations';
                        tooltipEl.innerHTML = '<div></div>';
                        //document.body.appendChild(tooltipEl);
                        $('.analytics_registrations_canvas_elem').parent().append(tooltipEl);
                    }
                    if (tooltipModel.opacity === 0) {
                        tooltipEl.style.opacity = 0;
                        return;
                    }
                    tooltipEl.classList.remove('above', 'below', 'no-transform');
                    if (tooltipModel.yAlign) {
                        tooltipEl.classList.add(tooltipModel.yAlign);
                    } else {
                        tooltipEl.classList.add('no-transform');
                    }
                    function getBody(bodyItem) {
                        return bodyItem.lines;
                    }
                    // Set Text
                    if (tooltipModel.body) {
                        var titleLines = tooltipModel.title || [];
                        var bodyLines = tooltipModel.body.map(getBody);
                        var innerHtml = '';
                        bodyLines.forEach(function(body, i) {
                            innerHtml += '<span class="date">Friday, Dec 28</span><small>Income this point</small><strong><p>$' + body + '</strong><em>+64%</em></p>';
                        });
                        var tableRoot = tooltipEl.querySelector('div');
                        tableRoot.innerHTML = innerHtml;
                    }
                    // `this` will be the overall tooltip
                    var position = this._chart.canvas.getBoundingClientRect();

                    // Display, position, and set styles for font
                    tooltipEl.style.opacity = 1;
                    tooltipEl.style.position = 'absolute';
                    var tooltipWidth = $(tooltipEl).width();
                    var tooltipHeight = $(tooltipEl).height();
                    var tooltipRight = $(tooltipEl).parent().width() - (tooltipModel.caretX + tooltipWidth);
                    var tooltipBottom = $(tooltipEl).parent().height() - (tooltipModel.caretY + tooltipHeight);
                    if(tooltipBottom <= 0 && tooltipRight <= 0) {
                        tooltipEl.style.top = tooltipModel.caretY - tooltipHeight - 15 + 'px';
                        tooltipEl.style.left = tooltipModel.caretX - tooltipWidth - 20 + 'px';
                        $(tooltipEl).removeAttr('class');
                        window.clearTimeout(window.MyTimeout1);
                        MyTimeout1 = window.setTimeout(
                        function(){
                            $(tooltipEl).addClass('toolTbottom_right');
                        },10);
                    } else if (tooltipBottom <= 0) {
                        tooltipEl.style.top = tooltipModel.caretY - tooltipHeight - 15 + 'px';
                        tooltipEl.style.left = tooltipModel.caretX + 'px';
                        $(tooltipEl).removeAttr('class');
                        window.clearTimeout(window.MyTimeout1);
                        MyTimeout1 = window.setTimeout(
                        function(){
                            $(tooltipEl).addClass('toolTbottom_left');
                        },10);
                    } else if (tooltipRight <= 0) {
                        tooltipEl.style.top = tooltipModel.caretY + 'px';
                        tooltipEl.style.left = tooltipModel.caretX - tooltipWidth - 10 + 'px';
                        $(tooltipEl).removeAttr('class');
                        window.clearTimeout(window.MyTimeout1);
                        MyTimeout1 = window.setTimeout(
                        function(){
                            $(tooltipEl).addClass('toolTtop_right');
                        },10);
                    } else {
                        tooltipEl.style.top = tooltipModel.caretY + 'px';
                        tooltipEl.style.left = tooltipModel.caretX + 'px';
                        $(tooltipEl).removeAttr('class');
                        window.clearTimeout(window.MyTimeout1);
                        MyTimeout1 = window.setTimeout(
                        function(){
                            $(tooltipEl).addClass('toolTtop_left');
                        },10);
                    }
                    tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
                    tooltipEl.style.pointerEvents = 'none';
                },
                mode: 'nearest',
                position: 'average',
                intersect: false,
                backgroundColor: 'rgba(0,0,0,0.9)',
                titleFontStyle: 'bold',
                titleSpacing: 5,
                titleMarginBottom: 10,
                titleFontSize: 20,
                titleFontColor: '#FFFFFF',
                titleAlign: 'left',
                bodySpacing: 2,
                bodyFontColor: '#fff',
                bodyAlign: 'left',
                footerFontStyle: 'bold',
                footerSpacing: 2,
                footerMarginTop: 6,
                footerFontColor: '#fff',
                footerAlign: 'left',
                yPadding: 7,
                xPadding: 5,
                caretPadding: 3,
                caretSize: 5,
                cornerRadius: 10,
                multiKeyBackground: '#fff',
                displayColors: true,
                borderColor: 'rgba(0,0,0,0)',
                borderWidth: 0
            }
        }
    });
// end analytics_registrations canvas element /////////////////////////////

// analytics_comple_reg canvas element ////////////////////////////////////
    var ctx = $('.analytics_comple_reg_canvas_elem')[0].getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 0, 0, 100);
    gradientFill.addColorStop(1, "rgba(255, 255, 255, 0)");
    gradientFill.addColorStop(0.3, "rgba(255, 255, 255, 0.3)");
    gradientFill.addColorStop(0, "rgba(255, 255, 255, 0.3)");

    var CompleReg = new Chart($('.analytics_comple_reg_canvas_elem'), {
        type: 'line',
        data: {
            labels: ["", "Dec 25", "", "Dec 27", "", "Dec 29", ""],
            datasets: [{
                display: true,
                position: 'top',
                label: "",
                data: [600, 930, 820, 820, 820, 600, 380, 500],
                pointBackgroundColor: ['#2cdd73','#2cdd73','#2cdd73','#2cdd73','#2cdd73','#2cdd73','#2cdd73'],
                pointRadius: 0,
                pointHoverRadius: 0,
                borderWidth: 0,
                backgroundColor: gradientFill,
                lineTension: 0.2,
                steppedLine: false,
                borderColor: '#ffffff',
                borderDash: [5, 5],
                labels: {
                    boxWidth: 1200,
                    fontColor: '#ffffff'
                }
            }
            // ,{
            //     display: true,
            //     position: 'top',
            //     label: "",
            //     data: [711, 711, 273, 698, 698, 500, 300, 250],
            //     pointBackgroundColor: ['#2cdd73','#2cdd73','#2cdd73','#2cdd73','#2cdd73','#2cdd73','#2cdd73'],
            //     pointRadius: 6,
            //     pointHoverRadius: 8,
            //     borderWidth: 3,
            //     lineTension: 0.2,
            //     steppedLine: false,
            //     borderColor: '#ffffff',
            //     backgroundColor: 'transparent',
            //     labels: {
            //         boxWidth: 1200,
            //         fontColor: '#ffffff'
            //     }
            // }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 10,
                    bottom: 10
                }
            },
            scales: {
                yAxes: [{
                    display: false,
                    gridLines: {
                        display: false,
                        stepSize: .5,
                        color: "#248eef",
                        zeroLineColor: "#248eef",
                        drawBorder: false
                    },
                    ticks: {
                      fontColor: "#fff",
                    }
                }],
                xAxes: [{
                    gridLines: {
                        drawBorder: false,
                        display: false  
                    },
                    ticks: {
                        fontColor: "#fff",
                    }
                }]
            },
            tooltips: {
                enabled: false,
                custom:  function(tooltipModel) {
                    var tooltipEl = document.getElementById('analytics_comple_reg');
                    if (!tooltipEl) {
                        tooltipEl = document.createElement('div');
                        tooltipEl.id = 'analytics_comple_reg';
                        tooltipEl.innerHTML = '<div></div>';
                        $('.analytics_comple_reg_canvas_elem').parent().append(tooltipEl);
                    }
                    if (tooltipModel.opacity === 0) {
                        tooltipEl.style.opacity = 0;
                        return;
                    }
                    tooltipEl.classList.remove('above', 'below', 'no-transform');
                    if (tooltipModel.yAlign) {
                        tooltipEl.classList.add(tooltipModel.yAlign);
                    } else {
                        tooltipEl.classList.add('no-transform');
                    }
                    function getBody(bodyItem) {
                        return bodyItem.lines;
                    }
                    // Set Text
                    if (tooltipModel.body) {
                        var titleLines = tooltipModel.title || [];
                        var bodyLines = tooltipModel.body.map(getBody);
                        var innerHtml = '';
                        bodyLines.forEach(function(body, i) {
                            innerHtml += '<span class="date">Friday, Dec 28</span><small>Income this point</small><strong><p>$' + body + '</strong><em>+64%</em></p>';
                        });
                        var tableRoot = tooltipEl.querySelector('div');
                        tableRoot.innerHTML = innerHtml;
                    }
                    // `this` will be the overall tooltip
                    var position = this._chart.canvas.getBoundingClientRect();

                    // Display, position, and set styles for font
                    tooltipEl.style.opacity = 1;
                    tooltipEl.style.position = 'absolute';
                    var tooltipWidth = $(tooltipEl).width();
                    var tooltipHeight = $(tooltipEl).height();
                    var tooltipRight = $(tooltipEl).parent().width() - (tooltipModel.caretX + tooltipWidth);
                    var tooltipBottom = $(tooltipEl).parent().height() - (tooltipModel.caretY + tooltipHeight);
                    if(tooltipBottom <= 0 && tooltipRight <= 0) {
                        tooltipEl.style.top = tooltipModel.caretY - tooltipHeight - 15 + 'px';
                        tooltipEl.style.left = tooltipModel.caretX - tooltipWidth - 20 + 'px';
                        $(tooltipEl).removeAttr('class');
                        window.clearTimeout(window.MyTimeout1);
                        MyTimeout1 = window.setTimeout(
                        function(){
                            $(tooltipEl).addClass('toolTbottom_right');
                        },10);
                    } else if (tooltipBottom <= 0) {
                        tooltipEl.style.top = tooltipModel.caretY - tooltipHeight - 15 + 'px';
                        tooltipEl.style.left = tooltipModel.caretX + 'px';
                        $(tooltipEl).removeAttr('class');
                        window.clearTimeout(window.MyTimeout1);
                        MyTimeout1 = window.setTimeout(
                        function(){
                            $(tooltipEl).addClass('toolTbottom_left');
                        },10);
                    } else if (tooltipRight <= 0) {
                        tooltipEl.style.top = tooltipModel.caretY + 'px';
                        tooltipEl.style.left = tooltipModel.caretX - tooltipWidth - 10 + 'px';
                        $(tooltipEl).removeAttr('class');
                        window.clearTimeout(window.MyTimeout1);
                        MyTimeout1 = window.setTimeout(
                        function(){
                            $(tooltipEl).addClass('toolTtop_right');
                        },10);
                    } else {
                        tooltipEl.style.top = tooltipModel.caretY + 'px';
                        tooltipEl.style.left = tooltipModel.caretX + 'px';
                        $(tooltipEl).removeAttr('class');
                        window.clearTimeout(window.MyTimeout1);
                        MyTimeout1 = window.setTimeout(
                        function(){
                            $(tooltipEl).addClass('toolTtop_left');
                        },10);
                    }
                    tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
                    tooltipEl.style.pointerEvents = 'none';
                },
                mode: 'nearest',
                position: 'average',
                intersect: false,
                backgroundColor: 'rgba(0,0,0,0.9)',
                titleFontStyle: 'bold',
                titleSpacing: 5,
                titleMarginBottom: 10,
                titleFontSize: 20,
                titleFontColor: '#FFFFFF',
                titleAlign: 'left',
                bodySpacing: 2,
                bodyFontColor: '#fff',
                bodyAlign: 'left',
                footerFontStyle: 'bold',
                footerSpacing: 2,
                footerMarginTop: 6,
                footerFontColor: '#fff',
                footerAlign: 'left',
                yPadding: 7,
                xPadding: 5,
                caretPadding: 3,
                caretSize: 5,
                cornerRadius: 10,
                multiKeyBackground: '#fff',
                displayColors: true,
                borderColor: 'rgba(0,0,0,0)',
                borderWidth: 0
            }
        }
    });
// end analytics_comple_reg canvas element ////////////////////////////////

// visitors canvas element ////////////////////////////////////////////////
    var vs = $('.analytics_comple_reg_canvas_elem')[0].getContext("2d");
    var gradientFill = vs.createLinearGradient(0, 0, 0, 100);
    gradientFill.addColorStop(1, "rgba(255, 255, 255, 0)");
    gradientFill.addColorStop(0.3, "rgba(255, 255, 255, 0.3)");
    gradientFill.addColorStop(0, "rgba(255, 255, 255, 0.3)");
    var visitors = new Chart($('.visitors_canvas_elem'), {
        type: 'line',
        data: {
            labels: ["", "Dec 25", "", "Dec 27", "", "Dec 29", ""],
            datasets: [{
                display: true,
                position: 'top',
                label: "",
                data: [600, 930, 820, 820, 820, 600, 380, 500],
                pointRadius: 0,
                pointHoverRadius: 0,
                borderWidth: 0,
                lineTension: 0.3,
                steppedLine: false,
                borderColor: '#fff',
                backgroundColor: gradientFill,
                // borderDash: [5, 5],
                labels: {
                    boxWidth: 1200,
                    fontColor: '#ffffff'
                }
            }
            // ,{
            //     display: true,
            //     position: 'top',
            //     label: "",
            //     data: [711, 711, 273, 698, 698, 500, 300, 250],
            //     pointRadius: 0,
            //     pointHoverRadius: 0,
            //     borderWidth: 0,
            //     lineTension: 0.3,
            //     steppedLine: false,
            //     borderColor: '#0680EF',
            //     backgroundColor: 'transparent',
            //     labels: {
            //         boxWidth: 1200,
            //         fontColor: '#ffffff'
            //     }
            // }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    display: false,
                    gridLines: {
                        display: false,
                        stepSize: .5,
                        drawBorder: false
                    },
                    ticks: {
                      fontColor: "#fff",
                    }
                }],
                xAxes: [{
                    gridLines: {
                        drawBorder: false,
                        display: false  
                    },
                    ticks: {
                      fontColor: "#fff",
                    }
                }]
            },
            tooltips: {
                enabled: false,
                custom:  function(tooltipModel) {
                    var tooltipEl = document.getElementById('visitors');
                    if (!tooltipEl) {
                        tooltipEl = document.createElement('div');
                        tooltipEl.id = 'visitors';
                        tooltipEl.innerHTML = '<div></div>';
                        $('.visitors_canvas_elem ').parent().append(tooltipEl);
                    }
                    if (tooltipModel.opacity === 0) {
                        tooltipEl.style.opacity = 0;
                        return;
                    }
                    tooltipEl.classList.remove('above', 'below', 'no-transform');
                    if (tooltipModel.yAlign) {
                        tooltipEl.classList.add(tooltipModel.yAlign);
                    } else {
                        tooltipEl.classList.add('no-transform');
                    }
                    function getBody(bodyItem) {
                        return bodyItem.lines;
                    }
                    // Set Text
                    if (tooltipModel.body) {
                        var titleLines = tooltipModel.title || [];
                        var bodyLines = tooltipModel.body.map(getBody);
                        var innerHtml = '';
                        bodyLines.forEach(function(body, i) {
                            innerHtml += '<span class="date">Friday, Dec 28</span><small>Income this point</small><strong><p>$' + body + '</strong><em>+64%</em></p>';
                        });
                        var tableRoot = tooltipEl.querySelector('div');
                        tableRoot.innerHTML = innerHtml;
                    }
                    // `this` will be the overall tooltip
                    var position = this._chart.canvas.getBoundingClientRect();

                    // Display, position, and set styles for font
                    tooltipEl.style.opacity = 1;
                    tooltipEl.style.position = 'absolute';
                    var tooltipWidth = $(tooltipEl).width();
                    var tooltipHeight = $(tooltipEl).height();
                    var tooltipRight = $(tooltipEl).parent().width() - (tooltipModel.caretX + tooltipWidth);
                    var tooltipBottom = $(tooltipEl).parent().height() - (tooltipModel.caretY + tooltipHeight);
                    if(tooltipBottom <= 0 && tooltipRight <= 0) {
                        tooltipEl.style.top = tooltipModel.caretY - tooltipHeight - 15 + 'px';
                        tooltipEl.style.left = tooltipModel.caretX - tooltipWidth - 20 + 'px';
                        $(tooltipEl).removeAttr('class');
                        window.clearTimeout(window.MyTimeout1);
                        MyTimeout1 = window.setTimeout(
                        function(){
                            $(tooltipEl).addClass('toolTbottom_right');
                        },10);
                    } else if (tooltipBottom <= 0) {
                        tooltipEl.style.top = tooltipModel.caretY - tooltipHeight - 15 + 'px';
                        tooltipEl.style.left = tooltipModel.caretX + 'px';
                        $(tooltipEl).removeAttr('class');
                        window.clearTimeout(window.MyTimeout1);
                        MyTimeout1 = window.setTimeout(
                        function(){
                            $(tooltipEl).addClass('toolTbottom_left');
                        },10);
                    } else if (tooltipRight <= 0) {
                        tooltipEl.style.top = tooltipModel.caretY + 'px';
                        tooltipEl.style.left = tooltipModel.caretX - tooltipWidth - 10 + 'px';
                        $(tooltipEl).removeAttr('class');
                        window.clearTimeout(window.MyTimeout1);
                        MyTimeout1 = window.setTimeout(
                        function(){
                            $(tooltipEl).addClass('toolTtop_right');
                        },10);
                    } else {
                        tooltipEl.style.top = tooltipModel.caretY + 'px';
                        tooltipEl.style.left = tooltipModel.caretX + 'px';
                        $(tooltipEl).removeAttr('class');
                        window.clearTimeout(window.MyTimeout1);
                        MyTimeout1 = window.setTimeout(
                        function(){
                            $(tooltipEl).addClass('toolTtop_left');
                        },10);
                    }
                    tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
                    tooltipEl.style.pointerEvents = 'none';
                },
                mode: 'nearest',
                position: 'average',
                intersect: false,
                backgroundColor: 'rgba(0,0,0,0.9)',
                titleFontStyle: 'bold',
                titleSpacing: 5,
                titleMarginBottom: 10,
                titleFontSize: 20,
                titleFontColor: '#FFFFFF',
                titleAlign: 'left',
                bodySpacing: 2,
                bodyFontColor: '#fff',
                bodyAlign: 'left',
                footerFontStyle: 'bold',
                footerSpacing: 2,
                footerMarginTop: 6,
                footerFontColor: '#fff',
                footerAlign: 'left',
                yPadding: 7,
                xPadding: 5,
                caretPadding: 3,
                caretSize: 5,
                cornerRadius: 10,
                multiKeyBackground: '#fff',
                displayColors: true,
                borderColor: 'rgba(0,0,0,0)',
                borderWidth: 0
            }
        }
    });
// END visitors canvas element ////////////////////////////////////////////

// visitors_registrations canvas element //////////////////////////////////
    var vr = $('.analytics_comple_reg_canvas_elem')[0].getContext("2d");
    var gradientFill = vr.createLinearGradient(0, 0, 0, 100);
    gradientFill.addColorStop(1, "rgba(255, 255, 255, 0)");
    gradientFill.addColorStop(0.3, "rgba(255, 255, 255, 0.3)");
    gradientFill.addColorStop(0, "rgba(255, 255, 255, 0.3)");
    var visitors_registrations = new Chart($('.visitors_registrations_canvas_elem'), {
        type: 'line',
        data: {
            labels: ["", "Dec 25", "", "Dec 27", "", "Dec 29", ""],
            datasets: [{
                display: true,
                position: 'top',
                label: "",
                data: [600, 930, 820, 820, 820, 600, 380],
                pointRadius: 0,
                pointHoverRadius: 0,
                borderWidth: 0,
                lineTension: 0.3,
                steppedLine: false,
                borderColor: '#fff',
                backgroundColor: gradientFill,
                // borderDash: [5, 5],
                labels: {
                    boxWidth: 1200,
                    fontColor: '#ffffff'
                }
            }
            // ,{
            //     display: true,
            //     position: 'top',
            //     label: "",
            //     data: [711, 711, 273, 698, 698, 500, 300, 250],
            //     lineTension: 0.3,
            //     steppedLine: false,
            //     borderColor: '#0680EF',
            //     backgroundColor: 'transparent',
            //     labels: {
            //         boxWidth: 1200,
            //         fontColor: '#ffffff'
            //     }
            // }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    display: false,
                    gridLines: {
                        display: false,
                        stepSize: .5,
                        drawBorder: false
                    },
                    ticks: {
                      fontColor: "#fff",
                    }
                }],
                xAxes: [{
                    gridLines: {
                        drawBorder: false,
                        display: false  
                    },
                    ticks: {
                      fontColor: "#fff",
                    }
                }]
            },
            tooltips: {
                enabled: false,
                custom:  function(tooltipModel) {
                    var tooltipEl = document.getElementById('visitors_registrations');
                    if (!tooltipEl) {
                        tooltipEl = document.createElement('div');
                        tooltipEl.id = 'visitors_registrations';
                        tooltipEl.innerHTML = '<div></div>';
                        //document.body.appendChild(tooltipEl);
                        $('.visitors_registrations_canvas_elem').parent().append(tooltipEl);
                    }
                    if (tooltipModel.opacity === 0) {
                        tooltipEl.style.opacity = 0;
                        return;
                    }
                    tooltipEl.classList.remove('above', 'below', 'no-transform');
                    if (tooltipModel.yAlign) {
                        tooltipEl.classList.add(tooltipModel.yAlign);
                    } else {
                        tooltipEl.classList.add('no-transform');
                    }
                    function getBody(bodyItem) {
                        return bodyItem.lines;
                    }
                    // Set Text
                    if (tooltipModel.body) {
                        var titleLines = tooltipModel.title || [];
                        var bodyLines = tooltipModel.body.map(getBody);
                        var innerHtml = '';
                        bodyLines.forEach(function(body, i) {
                            innerHtml += '<span class="date">Friday, Dec 28</span><small>Income this point</small><strong><p>$' + body + '</strong><em>+64%</em></p>';
                        });
                        // titleLines.forEach(function(title) {
                        //     // <span>Friday, Dec 28</span>
                        //     innerHtml += '<span>' + title + '</span>';
                        // });
                        var tableRoot = tooltipEl.querySelector('div');
                        tableRoot.innerHTML = innerHtml;
                    }
                    // `this` will be the overall tooltip
                    var position = this._chart.canvas.getBoundingClientRect();

                    // Display, position, and set styles for font
                    tooltipEl.style.opacity = 1;
                    tooltipEl.style.position = 'absolute';
                    
                    var tooltipWidth = $(tooltipEl).width();
                    var tooltipHeight = $(tooltipEl).height();
                    var tooltipRight = $(tooltipEl).parent().width() - (tooltipModel.caretX + tooltipWidth);
                    var tooltipBottom = $(tooltipEl).parent().height() - (tooltipModel.caretY + tooltipHeight);

                    if(tooltipBottom <= 0 && tooltipRight <= 0) {
                        tooltipEl.style.top = tooltipModel.caretY - tooltipHeight - 15 + 'px';
                        tooltipEl.style.left = tooltipModel.caretX - tooltipWidth - 20 + 'px';
                        $(tooltipEl).removeAttr('class');
                        window.clearTimeout(window.MyTimeout1);
                        MyTimeout1 = window.setTimeout(
                        function(){
                            $(tooltipEl).addClass('toolTbottom_right');
                        },10);
                        //$(tooltipEl).removeAttr('class').addClass('toolTbottom_right');
                    } else if (tooltipBottom <= 0) {
                        tooltipEl.style.top = tooltipModel.caretY - tooltipHeight - 15 + 'px';
                        tooltipEl.style.left = tooltipModel.caretX + 'px';
                        $(tooltipEl).removeAttr('class');
                        window.clearTimeout(window.MyTimeout1);
                        MyTimeout1 = window.setTimeout(
                        function(){
                            $(tooltipEl).addClass('toolTbottom_left');
                        },10);
                        //$(tooltipEl).removeAttr('class').addClass('toolTbottom_left');

                    } else if (tooltipRight <= 0) {
                        tooltipEl.style.top = tooltipModel.caretY + 'px';
                        tooltipEl.style.left = tooltipModel.caretX - tooltipWidth - 10 + 'px';
                        $(tooltipEl).removeAttr('class');
                        window.clearTimeout(window.MyTimeout1);
                        MyTimeout1 = window.setTimeout(
                        function(){
                            $(tooltipEl).addClass('toolTtop_right');
                        },10);
                        //$(tooltipEl).removeAttr('class').addClass('toolTtop_right');
                    } else {
                        tooltipEl.style.top = tooltipModel.caretY + 'px';
                        tooltipEl.style.left = tooltipModel.caretX + 'px';
                        $(tooltipEl).removeAttr('class');
                        window.clearTimeout(window.MyTimeout1);
                        MyTimeout1 = window.setTimeout(
                        function(){
                            $(tooltipEl).addClass('toolTtop_left');
                        },10);
                        //$(tooltipEl).removeAttr('class').addClass('toolTtop_left');
                    }

                    tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
                    tooltipEl.style.pointerEvents = 'none';
                },
                mode: 'nearest',
                position: 'average',
                intersect: false,
                backgroundColor: 'rgba(0,0,0,0.9)',
                titleFontStyle: 'bold',
                titleSpacing: 5,
                titleMarginBottom: 10,
                titleFontSize: 20,
                titleFontColor: '#FFFFFF',
                titleAlign: 'left',
                bodySpacing: 2,
                bodyFontColor: '#fff',
                bodyAlign: 'left',
                footerFontStyle: 'bold',
                footerSpacing: 2,
                footerMarginTop: 6,
                footerFontColor: '#fff',
                footerAlign: 'left',
                yPadding: 7,
                xPadding: 5,
                caretPadding: 3,
                caretSize: 5,
                cornerRadius: 10,
                multiKeyBackground: '#fff',
                displayColors: true,
                borderColor: 'rgba(0,0,0,0)',
                borderWidth: 0
            }
        }
    });
//end visitors_registrations canvas element ///////////////////////////////

// app_activity canvas element ////////////////////////////////////////////
    var ap = $('.analytics_comple_reg_canvas_elem')[0].getContext("2d");
    var gradientFill = ap.createLinearGradient(0, 0, 0, 100);
    gradientFill.addColorStop(1, "rgba(255, 255, 255, 0)");
    gradientFill.addColorStop(0.3, "rgba(255, 255, 255, 0.3)");
    gradientFill.addColorStop(0, "rgba(255, 255, 255, 0.3)");
    var app_activity = new Chart($('.app_activity_canvas_elem'), {
        type: 'line',
        data: {
            labels: ["", "Dec 25", "", "Dec 27", "", "Dec 29", ""],
            datasets: [
            // {
            //     display: true,
            //     position: 'top',
            //     label: "",
            //     data: [600, 930, 820, 820, 820, 600, 380, 500],
            //     lineTension: 0.3,
            //     steppedLine: false,
            //     borderColor: '#29AAE1',
            //     backgroundColor: 'transparent',
            //     borderDash: [5, 5],
            //     labels: {
            //         boxWidth: 1200,
            //         fontColor: '#ffffff'
            //     }
            // },
            {
                display: true,
                position: 'top',
                label: "",
                data: [711, 711, 273, 698, 698, 500, 300, 250],
                pointRadius: 0,
                pointHoverRadius: 0,
                borderWidth: 0,
                lineTension: 0.3,
                steppedLine: false,
                borderColor: '#fff',
                backgroundColor: gradientFill,
                labels: {
                    boxWidth: 1200,
                    fontColor: '#ffffff'
                }
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    display: false,
                    gridLines: {
                        display: false,
                        stepSize: .5,
                        drawBorder: false
                    },
                    ticks: {
                      fontColor: "#fff",
                    }
                }],
                xAxes: [{
                    gridLines: {
                        drawBorder: false,
                        display: false  
                    },
                    ticks: {
                      fontColor: "#fff",
                    }
                }]
            },
            tooltips: {
                enabled: false,
                custom:  function(tooltipModel) {
                    var tooltipEl = document.getElementById('app_activity');
                    if (!tooltipEl) {
                        tooltipEl = document.createElement('div');
                        tooltipEl.id = 'app_activity';
                        tooltipEl.innerHTML = '<div></div>';
                        $('.app_activity_canvas_elem').parent().append(tooltipEl);
                    }
                    if (tooltipModel.opacity === 0) {
                        tooltipEl.style.opacity = 0;
                        return;
                    }
                    tooltipEl.classList.remove('above', 'below', 'no-transform');
                    if (tooltipModel.yAlign) {
                        tooltipEl.classList.add(tooltipModel.yAlign);
                    } else {
                        tooltipEl.classList.add('no-transform');
                    }
                    function getBody(bodyItem) {
                        return bodyItem.lines;
                    }
                    // Set Text
                    if (tooltipModel.body) {
                        var titleLines = tooltipModel.title || [];
                        var bodyLines = tooltipModel.body.map(getBody);
                        var innerHtml = '';
                        bodyLines.forEach(function(body, i) {
                            innerHtml += '<span class="date">Friday, Dec 28</span><small>Income this point</small><strong><p>$' + body + '</strong><em>+64%</em></p>';
                        });
                        var tableRoot = tooltipEl.querySelector('div');
                        tableRoot.innerHTML = innerHtml;
                    }
                    // `this` will be the overall tooltip
                    var position = this._chart.canvas.getBoundingClientRect();
                    // Display, position, and set styles for font
                    tooltipEl.style.opacity = 1;
                    tooltipEl.style.position = 'absolute';
                    var tooltipWidth = $(tooltipEl).width();
                    var tooltipHeight = $(tooltipEl).height();
                    var tooltipRight = $(tooltipEl).parent().width() - (tooltipModel.caretX + tooltipWidth);
                    var tooltipBottom = $(tooltipEl).parent().height() - (tooltipModel.caretY + tooltipHeight);
                    if(tooltipBottom <= 0 && tooltipRight <= 0) {
                        tooltipEl.style.top = tooltipModel.caretY - tooltipHeight - 15 + 'px';
                        tooltipEl.style.left = tooltipModel.caretX - tooltipWidth - 20 + 'px';
                        $(tooltipEl).removeAttr('class');
                        window.clearTimeout(window.MyTimeout1);
                        MyTimeout1 = window.setTimeout(
                        function(){
                            $(tooltipEl).addClass('toolTbottom_right');
                        },10);
                    } else if (tooltipBottom <= 0) {
                        tooltipEl.style.top = tooltipModel.caretY - tooltipHeight - 15 + 'px';
                        tooltipEl.style.left = tooltipModel.caretX + 'px';
                        $(tooltipEl).removeAttr('class');
                        window.clearTimeout(window.MyTimeout1);
                        MyTimeout1 = window.setTimeout(
                        function(){
                            $(tooltipEl).addClass('toolTbottom_left');
                        },10);
                    } else if (tooltipRight <= 0) {
                        tooltipEl.style.top = tooltipModel.caretY + 'px';
                        tooltipEl.style.left = tooltipModel.caretX - tooltipWidth - 10 + 'px';
                        $(tooltipEl).removeAttr('class');
                        window.clearTimeout(window.MyTimeout1);
                        MyTimeout1 = window.setTimeout(
                        function(){
                            $(tooltipEl).addClass('toolTtop_right');
                        },10);
                    } else {
                        tooltipEl.style.top = tooltipModel.caretY + 'px';
                        tooltipEl.style.left = tooltipModel.caretX + 'px';
                        $(tooltipEl).removeAttr('class');
                        window.clearTimeout(window.MyTimeout1);
                        MyTimeout1 = window.setTimeout(
                        function(){
                            $(tooltipEl).addClass('toolTtop_left');
                        },10);
                    }
                    tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
                    tooltipEl.style.pointerEvents = 'none';
                },
                mode: 'nearest',
                position: 'average',
                intersect: false,
                backgroundColor: 'rgba(0,0,0,0.9)',
                titleFontStyle: 'bold',
                titleSpacing: 5,
                titleMarginBottom: 10,
                titleFontSize: 20,
                titleFontColor: '#FFFFFF',
                titleAlign: 'left',
                bodySpacing: 2,
                bodyFontColor: '#fff',
                bodyAlign: 'left',
                footerFontStyle: 'bold',
                footerSpacing: 2,
                footerMarginTop: 6,
                footerFontColor: '#fff',
                footerAlign: 'left',
                yPadding: 7,
                xPadding: 5,
                caretPadding: 3,
                caretSize: 5,
                cornerRadius: 10,
                multiKeyBackground: '#fff',
                displayColors: true,
                borderColor: 'rgba(0,0,0,0)',
                borderWidth: 0
            }
        }
    });
//end app_activity canvas element /////////////////////////////////////////

// close_badge_editor ////////////////////////////////////////////////////
    $('.close_badge_editor').click(function() {
        $('.badge_editor_pop').fadeOut(600);
    });
// END close_badge_editor ////////////////////////////////////////////////
// badge editor select imitation /////////////////////////////////////////
    $('.sidebar_tools div select').each(function() {
        var selLi = [];
        $(this).find('option').each( function() {selLi.push(this.outerHTML.replace(/<(\/?)option/g,'<$1li'))});
        $(this).before('<div class="select_imitation"><span class="closer_click_start">' + $(this).find('option:selected').text() + '</span><div class="closer_click_elem"><ul>'+ selLi.join(" ") + '</ul></div></div>');
        fzValue = $(this).val();
        $('.select_imitation ul li[value="' + fzValue + '"]').addClass('active');
    });

    $('.badge_editor_pop').on('click','.sidebar_tools .select_imitation ul li', function() {
        $(this).parents('.select_imitation').find('li.active').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.select_imitation').next('select').val($(this).attr('value'));
        $(this).parents('.select_imitation').find('span').text($(this).text()).removeClass('active');
        $(this).parents('.select_imitation').find('.closer_click_elem').slideUp(600);
    });
// END badge editor select imitation /////////////////////////////////////

// copies_tool ///////////////////////////////////////////////////////////
    $('.copies_tool .less').click(function() {
        if($('.copies_tool input').val() > 0) {
            $('.copies_tool input').val(parseInt($('.copies_tool input').val()) - 1);
        }
    });
    $('.copies_tool .more').click(function() {
        $('.copies_tool input').val(parseInt($('.copies_tool input').val()) + 1);
    });
// END copies_tool ///////////////////////////////////////////////////////

// attendeeID_tool_inner /////////////////////////////////////////////////
    $('.attendeeID_tool_inner .less').click(function() {
        if($('.attendeeID_tool_inner input').val() > 0) {
            $('.attendeeID_tool_inner input').val(parseInt($('.attendeeID_tool_inner input').val()) - 1);
        }
    });

    $('.attendeeID_tool_inner .more').click(function() {
        $('.attendeeID_tool_inner input').val(parseInt($('.attendeeID_tool_inner input').val()) + 1);
    });
// END attendeeID_tool_inner /////////////////////////////////////////////

// font_tool select //////////////////////////////////////////////////////
    var selLi = [];
    $('.font_tool select').find('option').each( function() {selLi.push(this.outerHTML.replace(/<(\/?)option/g,'<$1li'))});
    $('.font_list_dropdown').append('<div class="font_tool_ul_wr"><ul class="font_tool_ul">'+ selLi.join(" ") + '</ul></div>');
    $('.font_tool_inner span em').text($('.font_tool select option:selected').text());
    fzValue = $('.font_tool select').val();
    $('.font_tool ul li[value="' + fzValue + '"]').addClass('active');

    $('body').on('click', '.font_tool ul li', function() {
        $('.font_tool select').val($(this).attr('value'));
        $('.font_tool ul li.active').removeClass('active');
        $(this).addClass('active');
        $('.font_tool_inner span em').text($(this).text());
        $('.font_list_dropdown').slideUp(600).removeClass('active');
        $('.font_tool_inner > span').removeClass('active');
    });
// END font_tool select //////////////////////////////////////////////////
// font_size_tool select /////////////////////////////////////////////////
    var selLi = [];
    $('.font_size_tool select').find('option').each( function() {selLi.push(this.outerHTML.replace(/<(\/?)option/g,'<$1li'))});
    $('.font_size_tool_inner').append('<ul class="font_size_tool_ul closer_click_elem">'+ selLi.join(" ") + '</ul>');
    fzValue = $('.font_size_tool select').val();
    $('.font_size_tool ul li[value="' + fzValue + '"]').addClass('active');

    $('body').on('click', '.font_size_tool ul li', function() {
        $('.font_size_tool input').val($(this).text());
        $('.font_size_tool select').val($(this).attr('value'));
        $('.font_size_tool ul').slideUp(600);
        $('.font_size_selector').removeClass('active');
        $('.font_size_tool ul li.active').removeClass('active');
        $(this).addClass('active');
    });
    $('.font_size_tool .less').click(function() {
        if($('.font_size_tool input').val() != '6 pt') {
            $('.font_size_tool input').val(parseInt($('.font_size_tool input').val()) - 1 + ' pt');
            $('.font_size_tool select').val(parseInt($('.font_size_tool input').val()));
        }
    });
    $('.font_size_tool .more').click(function() {
        if($('.font_size_tool input').val() != '72 pt') {
            $('.font_size_tool input').val(parseInt($('.font_size_tool input').val()) + 1 + ' pt');
            $('.font_size_tool select').val(parseInt($('.font_size_tool input').val()));
        }
    });
// ENDfont_size_tool select //////////////////////////////////////////////

// style_tool ////////////////////////////////////////////////////////////
    $('.top_bar_tools .style_tool i.color').spectrum({
        color: "#D1D627",
        preferredFormat: "hex",
        showInput: true,
        showInitial: true,
        allowEmpty: true,
        showAlpha: true,
        appendTo: ".top_bar_tools .style_tool .color_picker",
        showPalette: true,
        togglePaletteOnly: true,
        showSelectionPalette: true,
        clickoutFiresChange: true,
        selectionPalette: ["red", "green", "blue"],
        palette: [
            ["#000","#444","#666","#999","#ccc","#eee","#f3f3f3","#fff","#0ff","#00f","#90f"],
            ["#f00","#f90","#ff0","#0f0","#0ff","#00f","#90f","#f0f","#0ff","#00f","#90f"],
            ["#f00","#f90","#ff0","#0f0","#0ff","#00f","#90f","#f0f","#0ff","#00f","#90f"],
            ["#f00","#f90","#ff0","#0f0","#0ff","#00f","#90f","#f0f","#0ff","#00f","#90f"],
            ["#f4cccc","#fce5cd","#fff2cc","#d9ead3","#d0e0e3","#cfe2f3","#d9d2e9","#ead1dc","#0ff","#00f","#90f"],
            ["#ea9999","#f9cb9c","#ffe599","#b6d7a8","#a2c4c9","#9fc5e8","#b4a7d6","#d5a6bd","#0ff","#00f","#90f"],
            ["#e06666","#f6b26b","#ffd966","#93c47d","#76a5af","#6fa8dc","#8e7cc3","#c27ba0","#0ff","#00f","#90f"],
            ["#c00","#e69138","#f1c232","#6aa84f","#45818e","#3d85c6","#674ea7","#a64d79","#0ff","#00f","#90f"],
            ["#900","#b45f06","#bf9000","#38761d","#134f5c","#0b5394","#351c75","#741b47","#0ff","#00f","#90f"],
            ["#600","#783f04","#7f6000","#274e13","#0c343d","#073763","#20124d","#4c1130","#0ff","#00f","#90f"]
        ],
        beforeShow: function(color){
            console.log('hhhhhh')
            $('.color_picker').fadeIn(600);
        },
        change: function(color) {
            console.log('change')
            if(color) {
                $('.top_bar_tools .style_tool i.color').css('background-color',  color.toHexString());
                $('.top_bar_tools .style_tool i.color').spectrum('hide');
            }
        },
        hide: function() {
            console.log('hide')
            $('.color_picker').fadeOut(600);
        }
    });

    $('.picker_color').click(function() {
        if(!$(this).hasClass('active')) {
            $(this).addClass('active');
            $('.swatches.active').removeClass('active');
            $('.sp-palette-container').fadeOut(600);
            $('.sp-picker-container').fadeIn(600);
        }
        return false;
    });
    $('.swatches').click(function() {
        if(!$(this).hasClass('active')) {
            $(this).addClass('active');
            $('.picker_color.active').removeClass('active');
            $('.sp-palette-container').fadeIn(600);
            $('.sp-picker-container').fadeOut(600);
        }
        return false;
    });
// END style_tool ////////////////////////////////////////////////////////

// kerning_tool //////////////////////////////////////////////////////////
    $('.kerning_tool input[type="range"]').rangeslider({
        polyfill : false,
        onInit : function() {
            this.output = $('.rangeslider__handle').html('<div class="range-output">' + this.$element.val() + '</div>');
        },
        onSlide : function( position, value ) {
            $('.range-output').html( value );
        }
    });
// END kerning_tool //////////////////////////////////////////////////////

// text mask /////////////////////////////////////////////////////////////
    var selLi = [];
    $('.font_mask_tool select option').each( function() {selLi.push(this.outerHTML.replace(/<(\/?)option/g,'<$1li'))});
    $('.font_mask_tool_inner').append('<div class="closer_click_elem"><ul>'+ selLi.join(" ") + '</ul></div>');
    fzValue = $(this).val();
    $('.select_imitation ul li[value="' + fzValue + '"]').addClass('active');

    $('.badge_editor_pop').on('click','.font_mask_tool_inner ul li', function() {
        $(this).parents('.closer_click_elem').slideUp(600);
        $(this).parents('.font_mask_tool').find('.closer_click_start.active').removeClass('active');
    });
// END text mask /////////////////////////////////////////////////////////

// target audience popup /////////////////////////////////////////////////
    $('.badge_editor_pop .ui-dialog select').each(function() {
        var selLi = [];
        $(this).find('option').each( function() {selLi.push(this.outerHTML.replace(/<(\/?)option/g,'<$1li'))});
        $(this).before('<div class="select_imitation"><span class="closer_click_start">' + $(this).find('option:selected').text() + '</span><div class="closer_click_elem"><ul>'+ selLi.join(" ") + '</ul></div></div>');
        fzValue = $(this).val();
        $('.select_imitation ul li[value="' + fzValue + '"]').addClass('active');
    });

    $('.badge_editor_pop').on('click','.ui-dialog .select_imitation ul li', function() {
        $(this).parents('.select_imitation').find('li.active').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.select_imitation').next('select').val($(this).attr('value'));
        $(this).parents('.select_imitation').find('span').text($(this).text()).removeClass('active');
        $(this).parents('.select_imitation').find('.closer_click_elem').slideUp(600);
    });

    $('.target_audience_tool').click(function() {
        $('.badge_editor').append('<div class="target_aud_pop_closer"></div>');
        $('.target_aud_pop_closer').fadeIn(600);
        $('.badge_editor_pop .ui-dialog').fadeIn(600);
    });

    $('.badge_editor_pop').on('click','.ui-dialog-titlebar-close', function() {
        $('.target_aud_pop_closer').remove();
        $('.badge_editor_pop .ui-dialog').fadeOut(600);
    });
    $('.badge_editor_pop').on('click', '.target_aud_pop_closer', function() {
        $('.target_aud_pop_closer').remove();
        $('.badge_editor_pop .ui-dialog').fadeOut(600);
    });

    $('.badge_editor_pop').on('click','.custom_add_condition', function() {
        $('.ui-dialog .gform-field-filter i.gform-add').click();
    });
// END target audience popup /////////////////////////////////////////////

// Uload files to server /////////////////////////////////////////////////
    // $('.upload_pop_inner').upload({
    //     action: "http://xtag-int.com/",
    //     label: 'Перетащите файл в блок загрузки, или выберите его',
    //     postKey: 'imgNewMaslo',
    //     maxQueue: 1,
    //     maxSize: 10485760,
    //     multiple: false
    // });

    $('.upload_background_tool').click(function() {
        $('.badge_editor').append('<div class="upload_pop_closer"></div>');
        $('.upload_pop_closer').fadeIn(600);
        $('.upload_pop').fadeIn(600);
    });

    $('.upload_pop_close').click(function() {
        $('.upload_pop_closer').remove();
        $('.upload_pop').fadeOut(600);
    });
    $('.badge_editor_pop').on('click', '.upload_pop_closer', function() {
        $('.upload_pop_closer').remove();
        $('.upload_pop').fadeOut(600);
    });
    function uploadProgressHandler(event) {
        //$("#loaded_n_total").html("Uploaded "+event.loaded+" bytes of "+event.total);
        var percent = (event.loaded / event.total) * 100;
        var progress = Math.round(percent);
        // $("#uploadProgressBar").html(progress + " percent na ang progress");
        // $("#uploadProgressBar").css("width", progress + "%");
        // $("#status").html(progress +"% uploaded... please wait");
        $('.percentage span').html('Uploading' + '<strong>' + progress + '%' + '</strong>');
        $('.percentage em').css("width", progress + "%");
    }

    function loadHandler(event) {
        $('.upload_pop_inner input, .upload_pop_inner label').fadeIn(300);
        $('.percentage').fadeOut(300);
        $('.percentage em').css("width", "0%");
    }

    function errorHandler(event) {
        $('.upload_pop_inner input, .upload_pop_inner label').fadeIn(300);
        $('.percentage').fadeOut(300);
    }

    function abortHandler(event) {
        $('.upload_pop_inner input, .upload_pop_inner label').fadeIn(300);
        $('.percentage').fadeOut(300);
    }

    $("#uploadFile").change(function(event) {
        $('.upload_pop_inner input, .upload_pop_inner label').slideUp(300);
        $('.percentage').fadeIn(300);
        event.preventDefault();
        var file = $("#uploadFile")[0].files[0];
        var formData = new FormData();
        formData.append("file1", file);

        $.ajax({url: 'http://xtag-int.com/',
            method: 'POST',
            type: 'POST',
            data: formData,
            contentType: false,
            processData: false,
            xhr: function() {
                var xhr = new window.XMLHttpRequest();
                xhr.upload.addEventListener("progress",
                    uploadProgressHandler,
                    false
                );
               xhr.addEventListener("load", loadHandler, false);
               xhr.addEventListener("error", errorHandler, false);
               xhr.addEventListener("abort", abortHandler, false);

                return xhr;
            }
        });
    });
// END Uload files to server /////////////////////////////////////////////

// QR block resize n drag ////////////////////////////////////////////////
    $('.qr_block').resizable().draggable().rotatable();
// END QR block resize n drag ////////////////////////////////////////////

// show n hide text mask in top bar for badge editor /////////////////////
    $('.badge_view_inner img').click(function() {
        if($('.font_mask_tool').hasClass('active')) {
            $('.font_mask_tool').css('overflow', 'hidden').removeClass('active');
        } else {
            $('.font_mask_tool').addClass('active');
            window.setTimeout(function(){$('.font_mask_tool').css('overflow', 'visible')},350);
        }
    });
// END show n hide text mask in top bar for badge editor /////////////////

// Code for hiding left n right tool bars in badge editor ////////////////
    $(window).on('resize', function() {
        if ($(window).width() < 1199) {
            $('.sidebar_tools,.drag_bar_tools').removeClass('active');
        } else {
            $('.sidebar_tools,.drag_bar_tools').addClass('active');
        }
    });

    if ($(window).width() < 1199) {
        $('.sidebar_tools,.drag_bar_tools').removeClass('active');
    }
// END Code for hiding left n right tool bars in badge editor ////////////



});

// check on touchscreen ///////////////////////////////////////////////////
    var hasTouch;
    window.addEventListener('touchstart', function setHasTouch () {
        hasTouch = true;
        $('body').addClass('touchscreen');
        window.removeEventListener('touchstart', setHasTouch);
    }, false);
// END check on touchscreen ///////////////////////////////////////////////

// custom vh points ///////////////////////////////////////////////////////
    $(window).on('load resize', function() {
        var vh = $(window).outerHeight() * 0.01;
        $('html').css('--vh', vh + 'px')
    });
// END custom vh points ///////////////////////////////////////////////////
