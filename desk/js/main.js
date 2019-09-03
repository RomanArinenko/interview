$(document).ready(function() {

    $('.aside .logo').click(function() {
        swal({
            text:"Message!",
            title:'Information',
            closeOnEsc: true,
            closeOnClickOutside: true,
            className: "sweet_info_pop",
            button: {
                text: "close",
                value: true,
                visible: true,
                className: "close_sweet_pop",
                closeModal: true
            }
        });
    });

    // $('.aside .logo').click(function() {
    //     swal({
    //         title:'Check out',
    //         content: $('<span><strong>Bob Brown</strong><p>Checked out & Saved!</p></span>')[0],
    //         closeOnEsc: true,
    //         closeOnClickOutside: true,
    //         className: "sweet_checkout_pop",
    //         button: {
    //             text: "close",
    //             value: true,
    //             visible: true,
    //             className: "close_sweet_pop",
    //             closeModal: true
    //         }
    //     });
    // });

    // $('.aside .logo').click(function() {
    //     swal({
    //         text:"Saved!",
    //         closeOnEsc: true,
    //         closeOnClickOutside: true,
    //         className: "sweet_saved_pop",
    //         button: {
    //             text: "close",
    //             value: true,
    //             visible: true,
    //             className: "close_sweet_pop",
    //             closeModal: true
    //         }
    //     });
    // });

    // $('.aside .logo').click(function() {
    //     swal({
    //         text:"Checked!",
    //         closeOnEsc: true,
    //         closeOnClickOutside: true,
    //         className: "sweet_checked_pop",
    //         button: {
    //             text: "close",
    //             value: true,
    //             visible: true,
    //             className: "close_sweet_pop",
    //             closeModal: true
    //         }
    //     });
    // });
    
    // $('.aside .logo').click(function() {
    //     swal({
    //         text:"Saved & Checked In!",
    //         closeOnEsc: true,
    //         closeOnClickOutside: true,
    //         className: "sweet_savedANDchecked_pop",
    //         button: {
    //             text: "close",
    //             value: true,
    //             visible: true,
    //             className: "close_sweet_pop",
    //             closeModal: true
    //         }
    //     });
    // });

    // $('.aside .logo').click(function() {
    //     swal({
    //         title:'Congratulations!',
    //         text:"You were successfuly chacked in",
    //         closeOnEsc: true,
    //         closeOnClickOutside: true,
    //         className: "sweet_congr_pop",
    //         button: {
    //             text: "close",
    //             value: true,
    //             visible: true,
    //             className: "close_sweet_pop",
    //             closeModal: true
    //         }
    //     });
    // });

    // $('.aside .logo').click(function() {
    //     swal({
    //         title:'Error!',
    //         text:"We didn’t found you in our system",
    //         closeOnEsc: true,
    //         closeOnClickOutside: true,
    //         className: "sweet_error_pop",
    //         button: {
    //             text: "close",
    //             value: true,
    //             visible: true,
    //             className: "close_sweet_pop",
    //             closeModal: true
    //         }
    //     });
    // });


    // $('.aside .logo').click(function() {
    //     swal({
    //         title:'Are you sure?',
    //         text:"Do you realy want to print and check in all 14 tags?",
    //         closeOnEsc: true,
    //         closeOnClickOutside: true,
    //         className: "sweet_sure_pop",
    //         buttons: ["Cancel", "Yes, print it"]
    //     });
    // });

    $('input.gf_coupon_code[type=text]').keydown(function(event){
        if(event.keyCode == 13){
            $('input.gf_coupon_code + input[type="button"]').click();
        }
    });

    // clear_search_field button /////////////////////////////////////
    $('.clear_search_field').click(function() {
        $('.search_field input').val('');
    });
    // END clear_search_field button /////////////////////////////////
    
    // We listen to the resize event
    
    // window.addEventListener('scroll', () => {
    //     // We execute the same script as before
    //     let vh = window.innerHeight * 0.01;
    //     document.documentElement.style.setProperty('--vh', `${vh}px`);
    // });

    var scrollOptions = {
        cursorcolor: "#e4e4e4",
        cursorwidth: "8px",
        cursorborder: "none",
        cursorborderradius: "5px",
        background: "none",
        autohidemode: false,
        railpadding: {top: 10, left: 0, bottom: 10, right: 0},
        cursorminheight: 30,
        cursordragontouch: true,
        touchbehavior:true,
        preventmultitouchscrolling: false,
        horizrailenabled: false,
        hwacceleration: true,
        sensitiverail: true,
        railoffset: { top: 0, left: -6},
        smoothscroll: true
    }
    var scrollOptions2 = {
        cursorcolor: "#e4e4e4",
        cursorwidth: "3px",
        cursorborder: "none",
        cursorborderradius: "2px",
        cursordragontouch: true,
        //  railpadding: {top: 10, left: 0, bottom: 10, right: 0},
        touchbehavior:true,
        preventmultitouchscrolling: false,
        background: "none",
        autohidemode: false,
        cursorminheight: 8,
        horizrailenabled: false,
        hwacceleration: true,
        sensitiverail: true,
        railoffset: { top: 0, left: -2},
        smoothscroll: true
    }
    var scrollOptionsFilterBlock = {
        cursorcolor: "#828282",
        cursorwidth: "8px",
        cursorborder: "none",
        cursorborderradius: "5px",
        background: "none",
        autohidemode: false,
        //  railpadding: {top: 10, left: 0, bottom: 10, right: 0},
        cursorminheight: 30,
        cursordragontouch: true,
        touchbehavior:true,
        preventmultitouchscrolling: false,
        horizrailenabled: false,
        hwacceleration: true,
        sensitiverail: true,
        railoffset: { top: 0, left: -6},
        smoothscroll: true
    }
    $('.right_sl_slider').owlCarousel({
        loop:true,
        margin:40,
        nav:true,
        dots:true,
        center: true,
        items:1,
        responsive : {
            0 : {
                items:1,
            },
            480 : {
                items:1,
            },
            768 : {
                items:1,
            },
            992 : {
                margin:15,
                items:1,
            },
            1200 : {
                margin:40,
                items:1,
            }
        },
        onTranslated: function(event) {
            $('.active .right_sl_item').addClass('ISeeActive');
            if($('.active .right_sl_item').hasClass('no_print')) {
                $('.right_sl .go').addClass('no_print');
            } else {
                $('.right_sl .go.no_print').removeClass('no_print');
            }
        }
    });

// printer choose dropdown ////////////////////////////////////////////////////////

    $('.right_sl_settings').click(function() {
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.right_sl_set_wr').removeClass('active');
            $('.select_drop span').removeClass('active');
            $('.select_drop ul').slideUp(600);
            $('.select_printer .select_drop ul').getNiceScroll().remove();
        } else {
            $(this).addClass('active');
            $('.right_sl_set_wr').addClass('active');
        }
    });

    var rightSlSelect = $('.right_sl_set_wr .select_printer select');
    var activeOption = rightSlSelect.val();
    var nameOfselect = rightSlSelect.find('option:selected').text();
    var selLi = [];
    selLi.push(rightSlSelect.html().replace(/<(\/?)option/g,'<$1li'));
    $('.select_printer').append(
     '<div class="select_drop"><span>' + 
     nameOfselect + '</span><ul>' + selLi.join(" ") + 
     '</ul></div>'
    );
    var activeSelectLi = '.select_drop li[value="' + activeOption + '"]';
    $(activeSelectLi).addClass('active');

    $('.select_drop span').on('click', function() {
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.select_drop ul').slideUp(600);
            $('.select_printer .select_drop ul').getNiceScroll().remove();
        } else {
            $(this).addClass('active');
            $('.select_drop ul').slideDown(600);
            
            if($(window).width() <= 767) {
                window.clearTimeout(window.MyTimeout1);
                MyTimeout1 = window.setTimeout(
                function(){
                    $('.select_printer .select_drop ul').niceScroll(scrollOptions2);
                    $('.select_printer .select_drop ul').getNiceScroll().remove();
                    $('.select_printer .select_drop ul').niceScroll(scrollOptions2);
                },600);
            } else {
                window.clearTimeout(window.MyTimeout1);
                MyTimeout1 = window.setTimeout(
                function(){
                    $('.select_printer .select_drop ul').niceScroll(scrollOptions);
                    $('.select_printer .select_drop ul').getNiceScroll().remove();
                    $('.select_printer .select_drop ul').niceScroll(scrollOptions);
                },600);
            }
        }
    });

    $('body').on('click tap', '.select_drop ul li', function () {
        $('.select_printer select').val($.escapeSelector($(this).attr('value')));
        $('.select_printer .select_drop span').text($(this).text());
        $('.select_drop ul').slideUp(600);
        $('.select_drop span').removeClass('active');
    });
// font size choose dropdown //////////////////////////////////////////////////////////////

    var FzSetSelect = $('.font_size_wr select');
    var activeFzOption = FzSetSelect.val();
    var nameOfFzSelect = FzSetSelect.find('option:selected').text();
    var selFzLi = [];
    selFzLi.push(FzSetSelect.html().replace(/<(\/?)option/g,'<$1li'));
    $('.font_size_wr').append(
     '<div class="fz_drop"><em class="fz_bigger"></em><em class="fz_smaller"></em><span>' + 
     nameOfFzSelect + '</span><ul>' + selFzLi.join(" ") + 
     '</ul></div>'
    );
    var activeSelectFzLi = '.fz_drop li[value="' + activeFzOption + '"]';
    $(activeSelectFzLi).addClass('active');

    $('.fz_drop span').on('click', function() {
        if($('.fz_drop').hasClass('active')) {
            $('.fz_drop').removeClass('active');
            $('.fz_drop ul').slideUp(600);
        } else {
            $('.fz_drop').addClass('active');
            $('.fz_drop ul').slideDown(600);
            window.clearTimeout(window.MyTimeout2);
                MyTimeout2 = window.setTimeout(
                function(){
                    $('.fz_drop ul').niceScroll( ($(window).width() <= 767) ? scrollOptions2 : scrollOptions);
                },   
            600);
         }
    });

    $('body').on('click tap', '.fz_drop ul li', function () {
        $('.font_size_wr select').val($.escapeSelector($(this).attr('value')));
        $('.fz_drop span').text($(this).text());
        $('.fz_drop ul').slideUp(600);
        $('.fz_drop').removeClass('active');
    });
        
    $('.fz_smaller').on('click', function() {
        if($('.font_size_wr select option:selected').prev().val() !== undefined) {
            $('.print_set .fz_drop span').text($('.font_size_wr select option:selected').prev().text());
            $('.font_size_wr select').val($('.font_size_wr select option:selected').prev().val());
            $('.fz_drop li.active').removeClass('active');
            $('.fz_drop li[value="' + $('.font_size_wr select').val() + '"]').addClass('active');
        }
    });
    $('.fz_bigger').on('click', function() {
        if($('.font_size_wr select option:selected').next().val() !== undefined) {
            $('.print_set .fz_drop span').text($('.font_size_wr select option:selected').next().text());
            $('.font_size_wr select').val($('.font_size_wr select option:selected').next().val());
            $('.fz_drop li.active').removeClass('active');
            $('.fz_drop li[value="' + $('.font_size_wr select').val() + '"]').addClass('active');
        }
    });
// font options //////////////////////////////////////////////////////////////////////////////////////////////////
    $('.print_set i').on('click', function(i) {
        clickedFontOption = (i.target);
        if($(clickedFontOption).hasClass('bold_i')) {$(clickedFontOption).toggleClass('active')};
        if($(clickedFontOption).hasClass('coursive_i')) {$(clickedFontOption).toggleClass('active')};
        if($(clickedFontOption).hasClass('left_to_right_i') || $(clickedFontOption).hasClass('right_to_left_i')) {
            $('.left_to_right_i.active').removeClass('active');
            $('.right_to_left_i.active').removeClass('active');
            $(clickedFontOption).toggleClass('active')
        };
        if($(clickedFontOption).hasClass('text_align_left_i') || 
            $(clickedFontOption).hasClass('text_align_center_i') ||
            $(clickedFontOption).hasClass('text_align_right_i') ) {
            $('.text_align_left_i.active').removeClass('active');
            $('.text_align_center_i.active').removeClass('active');
            $('.text_align_right_i.active').removeClass('active');
            $(clickedFontOption).toggleClass('active')
        };
    });

// show/hide right_sl block /////////////////////////////////////////////////////////////
    $('.right_sl_closer, .mobile_badge_closer').click(function() {
        $('.main_screen').addClass('fullsized');
        $('.aside').removeClass('pushed_to_left');
        //$('.right_sl_closer').css({'z-index':'0'});
        $('.right_slider_control.active').removeClass('active');
        $('.search_list_wr > ul').getNiceScroll().remove();
        $('.new_attendee_wr .gform_body').getNiceScroll().remove();
        $('.select_printer .select_drop ul').getNiceScroll().remove();
        if($(window).width() <= 767) {
            window.clearTimeout(window.MyTimeout4);
                MyTimeout4 = window.setTimeout(
                function(){
                   $('.search_list_wr > ul').niceScroll(scrollOptions2);
                   $('.right_sl_wr').fadeOut();
                }, 
            600);
            $('.right_sl_wr').fadeOut(600);
        } else {
            window.clearTimeout(window.MyTimeout4);
                MyTimeout4 = window.setTimeout(
                function(){
                   $('.search_list_wr > ul').niceScroll(scrollOptions);
                   $('.new_attendee_wr .gform_body').niceScroll(scrollOptions);
                   $('.right_sl_wr').fadeOut();
                }, 
            600);
        }
    });
    $('.right_slider_control').click(function() {
        if($(this).hasClass('active')) {

            $(this).removeClass('active');
            $('.main_screen').addClass('fullsized');
            $('.aside').removeClass('pushed_to_left');

            $('.search_list_wr > ul').getNiceScroll().remove();
            $('.new_attendee_wr .gform_body').getNiceScroll().remove();
                
            $('.new_attendee_wr .gform_body').css({'overflow':'hidden'});
            $('.search_list_wr > ul').css({'overflow':'hidden'}); //чтобы не было бесючего эфекта при сдвиге бэйджа

            if($(window).width() <= 767) {
                window.clearTimeout(window.MyTimeout5);
                    MyTimeout5 = window.setTimeout(
                    function(){
                        if($('.search_list_wr').css('display') === 'block') {
                            $('.search_list_wr > ul').niceScroll(scrollOptions2);
                        }
                        if($('.new_attendee_wr').css('display') === 'block') {
                            $('.new_attendee_wr .gform_body').niceScroll(scrollOptions2);
                        }
                        $('.right_sl_wr').fadeOut();
                    }, 
                600);
            } else {
                
                $('.filter_block > ul').getNiceScroll().remove();
                $('.dark > div').css('overflow', 'hidden');
                $('.total_results').removeClass('dark');
                $('.filter_block').slideUp(600);
                $('.total_results').slideDown(600);
                $('.main_screen').css('z-index', 4);

                if($('.search_list_wr').css('display') === 'block' || $('.questions_popup').css('display') === 'block') {
                    $('.search_field .filter').fadeIn(600);
                    if($('.filter').hasClass('active')) {
                        $('.search_list_wr > ul').css({'height': (
                        $(window).outerHeight() - 
                        $('.total_results').outerHeight() - 
                        $('.search_header').outerHeight()) + 'px'});
                        $('.filter.active').removeClass('active');
                    }
                }

                window.clearTimeout(window.MyTimeout5);
                    MyTimeout5 = window.setTimeout(
                    function(){
                        if($('.search_list_wr').css('display') === 'block' || $('.questions_popup').css('display') === 'block') {
                            $('.search_list_wr > ul').niceScroll(scrollOptions);
                        }
                        if($('.new_attendee_wr').css('display') === 'block') {
                            $('.new_attendee_wr .gform_body').niceScroll(scrollOptions);
                        }
                        $('.right_sl_wr').fadeOut();
                    }, 
                600);
            }
        } else {
            $(this).addClass('active');

            $('.filter_block > ul').getNiceScroll().remove();
            $('.filter_block').slideUp(600);
            $('.total_results').slideDown(600);

            $('.right_sl_wr').fadeIn();
            $('.main_screen').removeClass('fullsized');
            $('.aside').addClass('pushed_to_left');

            $('.new_attendee_wr .gform_body').getNiceScroll().remove();
            $('.search_list_wr > ul').getNiceScroll().remove();
            $('.new_attendee_wr .gform_body').css({'overflow':'hidden'});
            $('.search_list_wr > ul').css({'overflow':'hidden'});

            if($(window).width() <= 767) {
                window.clearTimeout(window.MyTimeout6);
                    MyTimeout6 = window.setTimeout(
                    function(){
                        if($('.search_list_wr').css('display') == 'block') {$('.search_list_wr > ul').niceScroll(scrollOptions2)};
                        if($('.new_attendee_wr').css('display') == 'block') {$('.new_attendee_wr form').niceScroll(scrollOptions2)};
                    }, 
                600);
            } else {
                $('.dark > div').css('overflow', 'hidden');
                $('.total_results').removeClass('dark');

                if($('.search_list_wr').css('display') == 'block' || $('.questions_popup').css('display') === 'block') {
                    $('.search_field .filter').fadeIn(600);
                    if($('.filter').hasClass('active')) {
                        $('.search_list_wr > ul').css({'height': (
                        $(window).outerHeight() -  
                        $('.total_results').outerHeight() - 
                        $('.search_header').outerHeight()) + 'px'});
                        $('.filter.active').removeClass('active');
                    }
                };

                window.clearTimeout(window.MyTimeout6);
                    MyTimeout6 = window.setTimeout(
                    function(){
                        if($('.search_list_wr').css('display') == 'block' || $('.questions_popup').css('display') === 'block') {
                            $('.search_list_wr > ul').niceScroll(scrollOptions);
                        };
                        if($('.new_attendee_wr').css('display') == 'block') {$('.new_attendee_wr .gform_body').niceScroll(scrollOptions)};
                        $('.main_screen').css('z-index', 1);
                        $('.right_sl .owl-carousel .owl-dots').css('top', $('.right_sl_item_inner').height() - 30 + 'px');
                        $('.right_sl .owl-carousel .owl-nav').css('top', ($('.right_sl_item_inner').height() / 2) - 29 + 'px');
                    }, 
                600);
            }
            $('.right_sl_slider').trigger('refresh.owl.carousel');
        }
        if($('.questions_popup').css('display') === 'block') {
            $('.questions_popup').fadeOut(600);
            $('.ask_que').removeClass('active');
            $('.search_list_wr > ul').css('height','');
            $('.search_list_wr').fadeIn(600);
            $('.total_results').fadeIn(600);
            $('.search_list_wr').removeClass('disabled_filter');
            window.clearTimeout(window.MyTimeout7);
                MyTimeout7 = window.setTimeout(
                function(){
                    $('.search_list_wr > ul').niceScroll( ($(window).width() <= 767) ? scrollOptions2 : scrollOptions);
                },   
            600);
        }
        

    });
    $('.search_field input').click(function() {
        $('.search_field .filter').fadeIn(600);
        $('.new_attendee_wr').fadeOut(600);
        $('.search_list_wr').fadeIn(600);
        if($('.filter_block').css('display') !== "block") {
            $('.total_results').slideDown(600);
        }
        $('.search_list_wr').removeClass('disabled_filter');
        $('.scan_qr_pop').slideUp(600);
        $('.search_header .scan_qr').removeClass('active');
        $('.search_list_wr > ul').getNiceScroll().remove();
        $('.search_list_wr > ul').css('height','');
        $('.new_attendee_wr .gform_body').getNiceScroll().remove();
        window.clearTimeout(window.MyTimeout7h_k);
            MyTimeout7h_k = window.setTimeout(
            function(){
                $('.search_list_wr > ul').niceScroll( ($(window).width() <= 767) ? scrollOptions2 : scrollOptions);
            },   
        600);
    });
    $('.mobile_close_badge_i').click(function() {
        $('.main_screen').addClass('fullsized');
        $('.aside').removeClass('pushed_to_left');
        $('.right_slider_control.active').removeClass('active');
        window.clearTimeout(window.MyTimeout4);
            MyTimeout4 = window.setTimeout(
            function(){
               $('.right_sl_wr').fadeOut();
            }, 
        600);
        $('.right_sl_wr').fadeOut(600);
        $('.mobile_close_badge_i').fadeOut(300);
    });
// show/hide new attendee block /////////////////////////////////////////////////////////////
    $('.reg_new').click(function() {
        $('.search_field .filter').fadeOut(600);
        $('.filter_block').slideUp(600);
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.new_attendee_wr > div > form').getNiceScroll().remove();
            $('.new_attendee_wr .gform_body').getNiceScroll().remove();
            $('.new_attendee_wr').fadeOut(0);
            $('.search_list_wr').fadeIn(600);
            $('.search_header').fadeIn(600);
            $('.total_results').slideDown(600);
            $('.search_list_wr').removeClass('disabled_filter');
            
            if($(window).width() <= 767) {
                $('.mobile_header').fadeIn(600);
                window.clearTimeout(window.MyTimeout27);
                MyTimeout27 = window.setTimeout(
                function(){$('.search_list_wr > ul').niceScroll(scrollOptions2)}, 600);
            } else {
                window.clearTimeout(window.MyTimeout27);
                MyTimeout27 = window.setTimeout(
                function(){$('.search_list_wr > ul').niceScroll(scrollOptions)}, 600);
            }
        } else {
            $(this).addClass('active');
            $('.search_list_wr').fadeOut(0);
            $('.settings_popup').fadeOut(600);
            $('.questions_popup').fadeOut(600);
            $('.filter_block').slideUp(600);
            $('.scan_qr_pop').slideUp(600);
            $('.search_header .scan_qr').removeClass('active');
            $('.search_list_wr').addClass('disabled_filter');
            $('.filter.active').removeClass('active');
            $('.ask_que.active').removeClass('active');
            $('.to_settings.active').removeClass('active');
            $('.new_attendee_wr > div > form').getNiceScroll().remove();
            $('.new_attendee_wr .gform_body').getNiceScroll().remove();
            $('.search_list_wr > ul').getNiceScroll().remove();
            $('.questions').getNiceScroll().remove();
            $('.settings_popup > ul').getNiceScroll().remove();
            $('.active_cam_desk.active').removeClass('active');
            $('.available_cameras_list ul').getNiceScroll().remove();
            $('.available_cameras_list ul').slideUp(600);
            $('.total_results').slideUp(600);
            $('.new_attendee_wr').fadeIn(600);
            if($(window).width() <= 767) {
                window.clearTimeout(window.MyTimeout8);
                    MyTimeout8 = window.setTimeout(
                    function(){
                       $('.new_attendee_wr > div > form').niceScroll(scrollOptions2);
                    }, 
                600);
                $('.mobile_header').fadeOut(0);
                $('.search_header').fadeOut(0);
                $('.total_results').fadeOut(0);
            } else {
                window.clearTimeout(window.MyTimeout8);
                    MyTimeout8 = window.setTimeout(
                    function(){
                       $('.new_attendee_wr .gform_body').niceScroll(scrollOptions);
                    }, 
                600);
            }
        }        
    });
// close attendee block on mobile button /////////////////////////////////////
    $('.attendee_back_btn').click(function() {
        $('.new_attendee_wr').fadeOut(0);
        $('.search_list_wr').fadeIn(600);
        $('.search_header').fadeIn(600);
        $('.mobile_header').fadeIn(600);
        $('.total_results').slideDown(600);
        $('.search_list_wr').removeClass('disabled_filter');
        $('.reg_new.active').removeClass('active');
        $('.new_attendee_wr > div > form').getNiceScroll().remove();
        window.clearTimeout(window.MyTimeout27);
            MyTimeout27 = window.setTimeout(
            function(){
                $('.search_list_wr > ul').niceScroll(scrollOptions2);
            }, 
        600);
    });

// focused inputs & label positions /////////////////////////////////////////////////////
    $('body').on('click', function(e) {
        var clickTarget = $(e.target);
        var checkAttr = $(e.target).attr('type');
        var correctSelector = clickTarget.find('input[type="text"]');
        if(
            (clickTarget.is('li input[type="text"]')) ||
            ( (clickTarget.parents('li.gfield').length == 1) && (clickTarget.find('input[type="text"]')) ) || 
            (clickTarget.is('.gfield') && clickTarget.find('input[type="text"]').length == 1) ||
            (checkAttr == 'text')
        ) {} else {
            $('.focused_input').removeClass('focused_input');
        }
        // checking values from inutes after input blur 
        $('li.gfield').each( function() {
            var iputGfieldVal2 = $(this).find('input[type="text"]').val();
            if (iputGfieldVal2 !== "" && iputGfieldVal2 !== undefined) {
                $(this).addClass('present_value');
            } else {
                $(this).removeClass('present_value');
            }
        });
    });

    $('.new_attendee_wr input[type="text"]').on('focus', function() {
        $('.new_attendee_wr .focused_input').removeClass('focused_input');
        $(this).parents('.gfield').addClass('focused_input');
    });

    // checking values from inutes after loading page
    $('li.gfield').each( function() {
        if($(this).find('input').attr('type') == 'text') {
            $(this).addClass('withTextInput');
        }
        var iputGfieldVal = $(this).find('input[type="text"]').val();
        if (iputGfieldVal !== "") {
            $(this).addClass('present_value');
        }
    });
//  /////////////////////////////////////////////
    $('li.gfield').each( function() {
        if($(this).find('input').attr('type') == 'checkbox' || $(this).find('input').attr('type') == 'radio') {
            $(this).find('label').addClass('check_rad_label');
            $(this).addClass('withCheckRad col-lm-12');
        }
    });


    // select_popup //////////////////////////////////////////////////
    // $('.ginput_container_select').each( function() {
    //     $(this).append(
    //         '<span>' + $(this).find('select option:selected').text() + '</span>'
    //     );
    //     $(this).parent().find('label').addClass('label_for_selectbox');
    //     $(this).parent().addClass('withSelectBox');
    // });


    $('.ginput_container_select').each( function() {
        var el = $(this);
        var df = $('<span></span>');

        el.append(df);
        el.parent().find('label').addClass('label_for_selectbox');
        el.parent().addClass('withSelectBox');


        var sel = el.find('select');
        var popup = rSelectLink(sel, null, null, df);

        el.parent('li').click(function(){
            if($(window).width() > 767) {
                if (!popup.next().length) {$('body').append(popup)}
                    popup.fadeIn(1000);
                    $('.select_popup span + div').niceScroll(scrollOptions);
                }
        })
    });

    // $('.withSelectBox').click(function() {
    //     if($(window).width() > 767) {
    //         // markedSelect = $(this).find('select');
    //         // var activeOption = $(this).find('select').val();
    //         // var nameOfselect = $(this).find('label').text();
    //         // var selVal = [];
    //         // var selText = [];
    //         // var selLi = [];
    //         // $(this).find('option').each( function() {
    //         //  selLi.push(this.outerHTML.replace(/<(\/?)option/g,'<$1li'));
    //         // });
    //         // $('body').append(
    //         //  '<div class="select_popup_wr"><div class="select_popup"><span>' + 
    //         //  nameOfselect + '</span><div><ul>' + selLi.join(" ") + 
    //         //  '</ul></div><em>Close</em></div><div class="select_pop_closer"></div></div>'
    //         // );
    //         // var activeSelectLi = '.select_popup li[value="' + activeOption + '"]';
    //         // $(activeSelectLi).addClass('active');
    //         // $('.select_popup_wr').fadeIn(1000);
    //         // $('.select_popup span + div').niceScroll( ($(window).width() <= 767) ? scrollOptions2 : scrollOptions);
    //     }
    // });
    // $('body').on('click', '.select_popup ul li', function () {
    //     $(markedSelect).val($.escapeSelector($(this).attr('value')));
    //     $(markedSelect).parent().find('span').text($(this).text());
    //     $('.select_popup_wr').fadeOut(600);
    //     window.clearTimeout(window.MyTimeout9);
    //     MyTimeout9 = window.setTimeout(
    //         function(){
    //             $('.select_popup_wr').remove();
    //         }, 
    //     600);
    // });
    // $('body').on('click tap', '.select_pop_closer', function () {
    //     $('.select_popup_wr').fadeOut(600);
    //     window.clearTimeout(window.MyTimeout10);
    //     MyTimeout10 = window.setTimeout(
    //         function(){
    //             $('.select_popup_wr').remove();
    //         }, 
    //     600);
    // });
    // $('body').on('click tap', '.select_popup em', function () {
    //     $('.select_popup_wr').fadeOut(600);
    //     window.clearTimeout(window.MyTimeout11);
    //     MyTimeout11 = window.setTimeout(
    //         function(){
    //             $('.select_popup_wr').remove();
    //         }, 
    //     600);
    // });
    // END select_popup //////////////////////////////////////////////////


    // // multiSelect_popup /////////////////////////////////////////

    $('.ginput_container_multiselect').each( function() {
        var el = $(this);
        el.parent().find('label').addClass('label_for_selectbox');
        el.parent().addClass('withMultiSelectBox');
        var df = $('<span></span>');
        el.append(df);
        var sel = el.find('select');
        var popup = rMultiSelectLink(sel, null, null, df);
        el.parent('li').click(function(){
            $('.simple_keyboard_wr').hide(600);
            $('.simple-keyboard.hg-theme-default').hide(600);
            $('.spaceForKeyboard').removeClass('spaceForKeyboard');
            if (!popup.next().length) { $('body').append(popup);}
            popup.fadeIn(1000);
            popup.find('span + div').niceScroll(scrollOptions);
        })
    });


    // $('.ginput_container_multiselect').each( function() {
    //     $(this).append('<span class="default">Please select</span>');
    //     $(this).parent().find('label').addClass('label_for_selectbox');
    //     $(this).parent().addClass('withMultiSelectBox');
    // });
    // $('.withMultiSelectBox').click(function() {
    //     //if($(window).width() > 767) {
    //         markedSelect = $(this).find('select');
    //         var activeOption = $(this).find('select').val();
    //         var nameOfselect = $(this).find('label').text();
    //         var selVal = [];
    //         var selText = [];
    //         var selLi = [];
    //         $(this).find('option').each( function() {
    //          selLi.push(this.outerHTML.replace(/<(\/?)option/g,'<$1li'));
    //         });
    //         $('body').append(
    //          '<div class="multiSelect_popup_wr"><div class="multiSelect_popup"><span>' + 
    //          nameOfselect + '</span><div><ul>' + selLi.join(" ") + 
    //          '</ul></div><em>Close</em></div><div class="multiSelect_pop_closer"></div></div>'
    //         );
    //         var activeSelectLi = '.multiSelect_popup li[value="' + activeOption + '"]';
    //         $(activeSelectLi).addClass('active');
    //         $('.multiSelect_popup_wr').fadeIn(1000);
    //         $('.multiSelect_popup span + div').niceScroll( ($(window).width() <= 767) ? scrollOptions2 : scrollOptions);
    //     //}
    // });
    // $('body').on('click', '.multiSelect_popup ul li', function () {
    //     var clLIprop = $.escapeSelector($(this).attr('value'));
    //     if($(this).hasClass('active')) {
    //         $(this).removeClass('active');
    //         $(markedSelect).find('option[value="' + clLIprop + '"]').prop("selected", false);
    //         $(markedSelect).parent().find('span[value="' + clLIprop + '"]').remove();
    //         if($(markedSelect).val() == '') {
    //             $(markedSelect).parent().find('span.default').fadeIn();
    //         }
    //     } else {
    //         $(this).addClass('active');
    //         $(markedSelect).find('option[value="' + clLIprop + '"]').prop("selected", true);
    //         $(markedSelect).parent().append('<span value="' + escapeHTML($(this).attr('value')) + '">' + $(this).text() + '</span>');
    //         $(markedSelect).parent().find('span.default').fadeOut();
    //     }
    // });
    // $('body').on('click tap', '.multiSelect_pop_closer', function () {
    //     $('.multiSelect_popup_wr').fadeOut(600);
    //     window.clearTimeout(window.MyTimeout10);
    //     MyTimeout10 = window.setTimeout(
    //         function(){
    //             $('.multiSelect_popup_wr').remove();
    //         }, 
    //     600);
    // });
    // $('body').on('click tap', '.multiSelect_popup em', function () {
    //     $('.multiSelect_popup_wr').fadeOut(600);
    //     window.clearTimeout(window.MyTimeout11);
    //     MyTimeout11 = window.setTimeout(
    //         function(){
    //             $('.multiSelect_popup_wr').remove();
    //         }, 
    //     600);
    // });
    // // END multiSelect_popup /////////////////////////////////////////






    

// print filters results dropdown ///////////////////////////////////////////////////////////////
    $('.print_results_in_filters em').click(function() {
        if($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active');
            $('.print_results_in_filters div').slideUp(500);
            return false;
        } else {
            $(this).parent().addClass('active');
            $('.print_results_in_filters div').slideDown(500);

            $('body').click(function setCloserClick(e) {
                if(!$(e.target).hasClass('print_results_in_filters') && !$(e.target).parents().hasClass('print_results_in_filters')) {
                    $('.print_results_in_filters.active').removeClass('active');
                    $('.print_results_in_filters div').slideUp(500);
                    $('body').off('click', setCloserClick);
                }
            });
        }
    });
    $('.print_results_in_filters div span').click(function() {
        if($(this).parent().parent().hasClass('active')) {
            $(this).parent().parent().removeClass('active');
            $('.print_results_in_filters div').slideUp(500);
        }
    });
// show & hide filter block /////////////////////////////////////////////
    $('.filter').click(function() {
        if(!$('.search_list_wr').hasClass('disabled_filter')) {
            if($(this).hasClass('active')) {
                $(this).removeClass('active');
                $('.filter_block').slideUp(600);
                $('.dark > div').css('overflow', 'hidden');
                $('.total_results').removeClass('dark');
                $('.search_list_wr > ul').css({'height': ''});
                $('.new_attendee_wr .gform_body').css({'height': ''});
                $('.filter_block > ul').getNiceScroll().remove();
                if($(window).width() > 767) {
                    window.clearTimeout(window.MyTimeout12);
                        MyTimeout12 = window.setTimeout(
                        function(){
                           $('.search_list_wr > ul').getNiceScroll().resize();
                        }, 
                    600);
                }
            } else {
                $(this).addClass('active');
                if($(window).width() <= 767) {
                    $('.search_header .search_field').addClass('mobile_filter_active');
                    $('.filter.active').fadeOut(300);
                    $('.close_mobile_filter').fadeIn(300);
                    $('.aside').addClass('hidden');
                    $('.search_list_wr > ul').getNiceScroll().remove();
                    $('.filter_block > ul').getNiceScroll().remove();
                    window.clearTimeout(window.MyTimeout13);
                        MyTimeout13 = window.setTimeout(
                        function(){
                           $('.filter_block > ul').niceScroll(scrollOptions2);
                        }, 
                    600);
                } else {
                    window.clearTimeout(window.MyTimeout13);
                        MyTimeout13 = window.setTimeout(
                        function(){
                            $('.filter_block > ul').niceScroll(scrollOptionsFilterBlock);
                            $('.search_list_wr > ul').css({'height': ($('.aside').outerHeight() - 
                            $('.total_results').outerHeight() - 
                            $('.filter_block').outerHeight() - 
                            $('.search_header').outerHeight()) + 'px'});
                            $('.desktop .search_list_wr > ul').getNiceScroll().resize();
                            $('.dark > div').css('overflow', 'visible');
                        }, 
                    600);
                }
                $('.filter_block').slideDown(600);
                $('.total_results').addClass('dark');
            }
        }
    });
    // hide aside on click filter now button////////////////////////////////////////
    $('.filter_now').click(function() {
        $('.aside').addClass('hidden');
        $('.main_screen').addClass('search_results').css({'bottom':'0'});
        $('.main_screen.search_results .search_list_wr > ul').css({'height':'calc((var(--vh, 1vh) * 100) - 180px)'});
        $('.filter_block').slideUp(300);
        $('.total_results').removeClass('dark');
        $('.search_field').removeClass('mobile_filter_active');
        $('.close_mobile_filter').hide();
        $('.search_field .filter').show();
        $('.filter_block > ul').getNiceScroll().remove();
        window.clearTimeout(window.MyTimeout15);
            MyTimeout15 = window.setTimeout(
            function(){
                $('.mobile .search_list_wr > ul').niceScroll(scrollOptions2);
                $('.mobile .search_list_wr > ul').getNiceScroll().remove();
                $('.mobile .search_list_wr > ul').niceScroll(scrollOptions2);
            }, 
        600);
    });
    $('.close_mobile_filter').click(function() {
        $(this).fadeOut(300);
        $('.filter.active').removeClass('active').fadeIn(300);
        $('.search_header .search_field').removeClass('mobile_filter_active');
        $('.filter_block').slideUp(300);
        $('.search_list_wr > ul').css({'height': ''});
        $('.new_attendee_wr .gform_body').css({'height': 'auto'});
        $('.aside').removeClass('hidden');
        $('.total_results').removeClass('dark');
        $('.filter_block > ul').getNiceScroll().remove();
        window.clearTimeout(window.MyTimeout16);
            MyTimeout16 = window.setTimeout(
            function(){
                $('.mobile .search_list_wr > ul').niceScroll(scrollOptions2);
            }, 
        600);
    });
    // close search results button//////////////////////////////////////////
    $('.close_search_results').click(function() {
        $('.filter.active').removeClass('active').fadeIn(300);
        $('.aside').removeClass('hidden');
        $('.main_screen').removeClass('search_results');
        $('.search_list_wr > ul').css({'height':''});
        $('.main_screen').css({'bottom':''});
    });

// options of rotating video /////////////////////////////////////////////////////////////////////////
    var rotationX = 0;
    var rotationY = 0;
    var rotation3d = 0;
    var rotXPropCss = 'rotateX(0deg)';
    var rotYPropCss = 'rotateY(0deg)';
    var rot3dPropCss = 'rotate(0deg)';
    $('body').on('click tap', '.rotation_ui li', function(e){
        var target = e.target;
        var targetParent = $(target).parent();
        
        if (targetParent.hasClass('hor')) {
            rotationX = rotationX + 1;
            rotXProp = rotationX*180;
            rotXPropCss = 'rotateX(' + rotXProp + 'deg)';
        }
        if (targetParent.hasClass('ver')) {
            rotationY = rotationY + 1;
            rotYProp = rotationY*180;
            rotYPropCss = 'rotateY(' + rotYProp + 'deg)';
        }
        if (targetParent.hasClass('rr')) {
            rotation3d = rotation3d + 1;
            rot3dProp = rotation3d*90;
            rot3dPropCss = 'rotate(' + rot3dProp + 'deg)';
        }
        if (targetParent.hasClass('rl')) {
            rotation3d = rotation3d - 1;
            rot3dProp = rotation3d*90;
            rot3dPropCss = 'rotate(' + rot3dProp + 'deg)';
        }
        $('.scan_qr_pop > img').css({"transform" : rotXPropCss + rotYPropCss + rot3dPropCss});
    });
// show / hide scan qr popup ///////////////////////////////////////////////////////////
    $('.search_header .scan_qr').click(function() {
        $(this).addClass('active');
        $('.new_attendee_wr .gform_body').getNiceScroll().remove();
        $('.search_list_wr > ul').getNiceScroll().remove();
        $('.scan_qr_pop').fadeIn(600);
    });
    $('.close_scan_qr_pop').click(function() {
        $('.available_cameras_list ul').getNiceScroll().remove();
        $('.available_cameras_list ul').slideUp(600);
        $('.scan_qr_pop').fadeOut(600);
        $('.search_header .scan_qr').removeClass('active');
        if($('.search_list_wr').css('display') === 'block') {
            $('.search_list_wr > ul').niceScroll(scrollOptions);
        }
        if($('.new_attendee_wr').css('display') === 'block') {
            $('.new_attendee_wr .gform_body').niceScroll(scrollOptions);
        }
    });

    $('.active_cam_desk, .mob_choose_camera').click(function() {
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.available_cameras_list ul').getNiceScroll().remove();
            $('.available_cameras_list ul').slideUp(600);
        } else {
            $(this).addClass('active');
            $('.available_cameras_list ul').slideDown(600);
            window.clearTimeout(window.MyTimeout46_hh);
                MyTimeout46_hh = window.setTimeout(
                function(){
                    $('.available_cameras_list ul').niceScroll( ($(window).width() <= 767) ? scrollOptions2 : scrollOptions);
                },   
            600);
        }
    });

    
    $('.active_cam_desk').text($('.available_cameras_list ul li.active').text())

    $('.available_cameras_list ul li').click(function() {
        $('.available_cameras_list ul li.active').removeClass('active');
        $(this).addClass('active');
        if($(window).width() > 767) {
            $('.active_cam_desk').text($(this).text()).removeClass('active');
            $('.available_cameras_list ul').getNiceScroll().remove();
            $('.available_cameras_list ul').slideUp(600);
        }
    });

// settings screen & popups inside settings screen ////////////////////////////////////////
    $('.to_settings').click(function() {
        if($(this).hasClass('active')) {
            $('.settings_popup > ul').getNiceScroll().remove();
            $('.settings_popup').fadeOut(600).removeClass('shown');
            $('.to_settings.active').removeClass('active');
            $('.search_list_wr').fadeIn(600);
            $('.total_results').fadeIn(600);
            $('.search_list_wr').removeClass('disabled_filter');
            if($(window).width() <= 767) {
                $('.search_header').fadeIn(600);
                $('.mobile_header').fadeIn(600);
                window.clearTimeout(window.MyTimeout46);
                MyTimeout46 = window.setTimeout(
                function(){$('.search_list_wr > ul').niceScroll(scrollOptions2)},600);
            } else {
                window.clearTimeout(window.MyTimeout46);
                MyTimeout46 = window.setTimeout(
                function(){$('.search_list_wr > ul').niceScroll(scrollOptions)},600);
            }
        } else {
            $(this).addClass('active');
            $('.search_list_wr > ul').getNiceScroll().remove();
            $('.new_attendee_wr > div > form').getNiceScroll().remove();
            $('.new_attendee_wr .gform_body').getNiceScroll().remove();
            $('.questions').getNiceScroll().remove();
            $('.settings_popup').fadeIn(600).addClass('shown');
            if($(window).width() <= 767) {
                $('.ask_que.active').removeClass('active');
                $('.reg_new.active').removeClass('active');
                $('.questions_popup').fadeOut(600);
                $('.new_attendee_wr').fadeOut(600);
                window.clearTimeout(window.MyTimeout13);
                MyTimeout13 = window.setTimeout(
                function(){$('.settings_popup > ul').niceScroll(scrollOptions2)},600);
            } 
            // else {
            //     window.clearTimeout(window.MyTimeout13);
            //     MyTimeout13 = window.setTimeout(
            //     function(){$('.settings_popup > ul').niceScroll(scrollOptions)},600);
            // }
        }
    });

    $('.setting_closer_btn').click(function() {
        $('.settings_popup').removeClass('shown').fadeOut(600);
        $('.to_settings.active').removeClass('active');
        if($(window).width() > 767) {
            if($('.search_list_wr').css('display') == 'block') {$('.search_list_wr > ul').niceScroll(scrollOptions)};
            if($('.questions_popup').css('display') == 'block') {$('.questions').niceScroll(scrollOptions)};
            if($('.new_attendee_wr').css('display') == 'block') {$('.new_attendee_wr .gform_body').niceScroll(scrollOptions)};
        }
    });
    $('.settings_popup_closer').click(function() {
        $('.settings_popup').removeClass('shown').fadeOut(600);
        $('.to_settings.active').removeClass('active');
        if($(window).width() > 767) {
            if($('.search_list_wr').css('display') == 'block') {$('.search_list_wr > ul').niceScroll(scrollOptions)};
            if($('.questions_popup').css('display') == 'block') {$('.questions').niceScroll(scrollOptions)};
            if($('.new_attendee_wr').css('display') == 'block') {$('.new_attendee_wr .gform_body').niceScroll(scrollOptions)};
        }
    });

    // close settings on mobile button /////////////////////////////////////
    $('.settings_popup_back_btn').click(function() {
        $('.settings_popup > ul').getNiceScroll().remove();
        $('.settings_popup').fadeOut(600).removeClass('shown');
        $('.to_settings.active').removeClass('active');
        $('.search_list_wr').fadeIn(600);
        $('.total_results').fadeIn(600);
        $('.search_list_wr').removeClass('disabled_filter');
        if($(window).width() <= 767) {
            $('.search_header').fadeIn(600);
            $('.mobile_header').fadeIn(600);
            window.clearTimeout(window.MyTimeout45);
            MyTimeout45 = window.setTimeout(
            function(){$('.search_list_wr > ul').niceScroll(scrollOptions2)},600);
        } else {
            window.clearTimeout(window.MyTimeout45);
            MyTimeout45 = window.setTimeout(
            function(){$('.search_list_wr > ul').niceScroll(scrollOptions)},600);
        }
    });


    $('.active_user .log_out').click(function() {
        $('.log_out_popup').fadeIn(600);
        $('.log_out_popup_closer').fadeIn(600);
        $('.active_user').addClass('active');
    });
    $('.log_out_popup_closer').click(function() {
        $('.log_out_popup').fadeOut(600);
        $('.log_out_popup_closer').fadeOut(600);
        $('.active_user').removeClass('active');
    });
    $('.no_log_out').click(function() {
        $('.log_out_popup').fadeOut(600);
        $('.log_out_popup_closer').fadeOut(600);
        $('.active_user').removeClass('active');
    });
    $('.yes_log_out').click(function() {
        $('.log_out_popup').fadeOut(600);
        $('.log_out_popup_closer').fadeOut(600);
        $('.active_user').removeClass('active');
    });


    $('.local_server').click(function() {
        $('.local_server_popup').fadeIn(600);
        $('.local_server_popup_closer').fadeIn(600);
        $('.local_server').addClass('active');
    });
    $('.local_server_popup_closer').click(function() {
        $('.local_server_popup').fadeOut(600);
        $('.local_server_popup_closer').fadeOut(600);
        $('.local_server').removeClass('active');
    });
    $('.close_local_server_popup').click(function() {
        $('.local_server_popup').fadeOut(600);
        $('.local_server_popup_closer').fadeOut(600);
        $('.local_server').removeClass('active');
    });


    $('.check_form').click(function() {
        $('.settings_popup > ul').getNiceScroll().remove();
        $('.select_form_popup').fadeIn(600);
        $('.select_form_popup_closer').fadeIn(600);
        $('.check_form').addClass('active');
        window.clearTimeout(window.MyTimeout17);
            MyTimeout17 = window.setTimeout(
            function(){
                $('.select_form_popup ul').niceScroll( ($(window).width() <= 767) ? scrollOptions2 : scrollOptions);
            },   
        200);
    });
    $('.select_form_popup_closer').click(function() {
        $('.select_form_popup').fadeOut(600);
        $('.select_form_popup_closer').fadeOut(600);
        $('.check_form').removeClass('active');
        $('.select_form_popup ul').getNiceScroll().remove();
        if($(window).width() <= 767) {
            $('.settings_popup > ul').niceScroll(scrollOptions2);
        }
    });
    $('.close_select_form_popup').click(function() {
        $('.select_form_popup').fadeOut(600);
        $('.select_form_popup_closer').fadeOut(600);
        $('.check_form').removeClass('active');
        $('.select_form_popup ul').getNiceScroll().remove();
        if($(window).width() <= 767) {
            $('.settings_popup > ul').niceScroll(scrollOptions2);
        }
    });


    $('.session').click(function() {
        $('.settings_popup > ul').getNiceScroll().remove();
        $('.select_session_popup').fadeIn(600);
        $('.select_session_popup_closer').fadeIn(600);
        $('.session').addClass('active');
        window.clearTimeout(window.MyTimeout19);
            MyTimeout17 = window.setTimeout(
            function(){
                $('.select_session_popup ul').niceScroll( ($(window).width() <= 767) ? scrollOptions2 : scrollOptions);
            },   
        200);
        
    });
    $('.select_session_popup_closer').click(function() {
        $('.select_session_popup').fadeOut(600);
        $('.select_session_popup_closer').fadeOut(600);
        $('.session').removeClass('active');
        $('.select_session_popup ul').getNiceScroll().remove();
        if($(window).width() <= 767) {
            $('.settings_popup > ul').niceScroll(scrollOptions2);
        }
    });
    $('.close_select_session_popup').click(function() {
        $('.select_session_popup').fadeOut(600);
        $('.select_session_popup_closer').fadeOut(600);
        $('.session').removeClass('active');
        $('.select_session_popup ul').getNiceScroll().remove();
        if($(window).width() <= 767) {
            $('.settings_popup > ul').niceScroll(scrollOptions2);
        }
    });
// questions screen ////////////////////////////////////////////////////////
    
    $('.ask_que').click(function() {

        if($(this).hasClass('active')) {
           
            $(this).removeClass('active');
            $('.questions').getNiceScroll().remove();
            $('.questions_popup').fadeOut(600);
            $('.ask_que.active').removeClass('active');

            $('.search_list_wr').fadeIn(600);
            $('.search_header').fadeIn(600);
            $('.total_results').fadeIn(600);
            $('.search_list_wr').removeClass('disabled_filter');
            
            if($(window).width() <= 767) {
                $('.mobile_header').fadeIn(600);
                window.clearTimeout(window.MyTimeout28);
                MyTimeout28 = window.setTimeout(
                function(){$('.search_list_wr > ul').niceScroll(scrollOptions2)}, 600);
            }
        } else {
            $(this).addClass('active');
            $('.settings_popup').fadeOut(600);
            $('.new_attendee_wr').fadeOut(600);
            $('.scan_qr_pop').slideUp(600);
            $('.reg_new.active').removeClass('active');
            $('.to_settings.active').removeClass('active');
            $('.search_header .scan_qr').removeClass('active');
            $('.search_list_wr > ul').getNiceScroll().remove();
            $('.new_attendee_wr > div > form').getNiceScroll().remove();
            $('.new_attendee_wr .gform_body').getNiceScroll().remove();
            $('.settings_popup > ul').getNiceScroll().remove();

            $('.questions_popup').fadeIn(600);
            if($(window).width() <= 767) {
                window.clearTimeout(window.MyTimeout21);
                    MyTimeout21 = window.setTimeout(
                    function(){
                        $('.questions').niceScroll(scrollOptions2);
                        $('.questions').getNiceScroll().remove();
                        $('.questions').niceScroll(scrollOptions2);
                    }, 
                600);
            } else {
                window.clearTimeout(window.MyTimeout21);
                    MyTimeout21 = window.setTimeout(
                    function(){
                        $('.questions').niceScroll(scrollOptions);
                    }, 
                400);
            }
        }
    });
// close questions block on mobile button /////////////////////////////////////
    $('.return_on_mobile').click(function() {
        $('.questions').getNiceScroll().remove();
        $('.questions_popup').fadeOut(600);
        $('.ask_que.active').removeClass('active');
        $('.search_list_wr').fadeIn(600);
        $('.search_header').fadeIn(600);
        $('.mobile_header').fadeIn(600);
        $('.total_results').fadeIn(600);
        $('.search_list_wr').removeClass('disabled_filter');
        window.clearTimeout(window.MyTimeout28);
            MyTimeout28 = window.setTimeout(
            function(){
                $('.search_list_wr > ul').niceScroll(scrollOptions2);
            }, 
        600);
    });
// show / hide camera scan popup ///////////////////////////////////////////////////////////
    $('.search_header .camera_scan').click(function() {
        $(this).addClass('active');
        $('.camera_scan_pop').fadeIn(600);
    });
    $('.close_camera_scan_pop').click(function() {
        $('.camera_scan_pop').fadeOut(600);
        $('.search_header .camera_scan').removeClass('active');
    });
// little help with adaptation /////////////////////////////////////////////////////////
    if($(window).width() < 1199) {
        $('.right_slider_control').removeClass('active');
        $('.main_screen').addClass('fullsized');
        window.clearTimeout(window.MyTimeout22);
            MyTimeout22 = window.setTimeout(
            function(){
                $('.desktop .search_list_wr > ul').getNiceScroll().resize();
            }, 
        600);
    }
// user_info_popup /////////////////////////////////////////////////////
    $('.search_list_wr > ul > li').click(function() {
        if($(window).width() < 768) {
            if($(this).hasClass('opened')) {
                $('.full_info').slideUp(600);
                $('.search_list_wr > ul').getNiceScroll().resize();
                var activeLiPos = $('.search_list_wr > ul .opened').position().top;
                var search_list_wr_Scroll = $('.search_list_wr > ul').scrollTop();
                $('.search_list_wr > ul').animate({scrollTop: search_list_wr_Scroll + activeLiPos}, 600);
                $('.search_list_wr > ul .opened').removeClass('opened');
                window.clearTimeout(window.MyTimeout23);
                    MyTimeout23 = window.setTimeout(
                    function(){
                        $('.search_list_wr > ul').getNiceScroll().resize();
                    }, 
                700);
                return false;
            } else {
                $(this).find('.full_info').slideDown(600);
                $(this).addClass('opened');
                window.clearTimeout(window.MyTimeout23);
                    MyTimeout23 = window.setTimeout(
                    function(){
                        $('.search_list_wr > ul').getNiceScroll().resize();
                    }, 
                700);
                var activeLiPos = $(this).position().top;
                var search_list_wr_Scroll = $('.search_list_wr > ul').scrollTop();
                $('.search_list_wr > ul').animate({
                    scrollTop: search_list_wr_Scroll + activeLiPos}, 600
                );
            }
            
        }
    });

    $('.close_full_info').click(function() {
        $(this).parent().slideUp(600);
        $('.search_list_wr > ul').getNiceScroll().resize();

        var activeLiPos = $('.search_list_wr > ul .opened').position().top;
        var search_list_wr_Scroll = $('.search_list_wr > ul').scrollTop();
        $('.search_list_wr > ul').animate({scrollTop: search_list_wr_Scroll + activeLiPos}, 600);
        $('.search_list_wr > ul .opened').removeClass('opened');
        return false;
    });
    
// scrollable alfabet ///////////////////////////////////////////
    $('.search_list_wr > ul').on('scroll', function() {
        $('.one_letter span').addClass('pushForScroll');
        window.clearTimeout(window.MyTimeout24);
            MyTimeout24 = window.setTimeout(
            function(){
                $('.one_letter span').removeClass('pushForScroll');
            }, 
        500);
    });
// sort of list elements in search block //////////////////////////////////////////////////

    $('.search_list_wr > ul').niceScroll( ($(window).width() <= 767) ? scrollOptions2 : scrollOptions);

    
    

    // var mylist = $('.search_list_wr > ul');
    // var listitems = mylist.children('li').get();
    // listitems.sort(function(a, b) {
    //    var compA = $(a).text().toUpperCase();
    //    var compB = $(b).text().toUpperCase();
    //    return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
    // })
    // $.each(listitems, function(idx, itm) { mylist.append(itm); });



    $('.search_list_wr li .name').each(function() {
        var myText = $(this).text();
        var abbr = [];
        abbr = myText.split(' ');
        var newAbbr = abbr[0].split('',1) + abbr[1].split('',1);
        $(this).parent().find('.first_letters span').text(newAbbr)
    });

    var a = '';

    $('.search_list_wr > ul > li').each(function() {
        var b = $(this).find('.first_letters span').text().split('',1);
        if(b > a) {
            $(this).before('<li class="one_letter"><span>' + b + '</span></li>');
        }
        a = b;
    });

// badge preview button //////////////////////////////////////////////////////////
    $('.badge_link').click(function() {
        $('.main_screen').removeClass('fullsized');
        $('.aside').addClass('pushed_to_left');
        $('.right_sl_wr').fadeIn();
        $('.search_list_wr > ul').getNiceScroll().remove();
        $('.right_sl_item img').height();
        $('.right_sl .owl-carousel .owl-dots').css('top', $('.right_sl_item_inner').height() - 30 + 'px');
        $('.right_sl .owl-carousel .owl-nav').css('top', ($('.right_sl_item_inner').height() / 2) - 29 + 'px');
        return false;
    });



    // var isChrome = !!window.chrome && !!window.chrome.webstore;
    // if(isChrome == true) {$('body').addClass('chrome')}


// dots in new attendee button //////////////////////////////////////////////////
    $('.dots').click(function() {
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.attendee_header_buttons').fadeOut();
            $('.attendee_header_buttons_closer').remove();
        } else {
            $(this).addClass('active');
            $('.attendee_header_buttons').fadeIn();
            $('.new_attendee_wr').append('<div class="attendee_header_buttons_closer" style="cursor: pointer"></div>');
        }
    });
    $('body').on('click', '.attendee_header_buttons_closer',function(e) {
        $('.attendee_header_buttons_closer').remove();
        $('.attendee_header_buttons').fadeOut();
        $('.dots').removeClass('active');
        //return false;
    });

// kill nicescroll on mobile version and back him to life on desktop ///////////////////////////////////

    //$(window).on('load', function() {
        if($(window).width() <= 767) {
            $('.main_screen').addClass('fullsized');
            $('body').removeClass('desktop');
            $('body').addClass('mobile');
        } else {
            $('body').addClass('desktop');
            $('body').removeClass('mobile');
            $('.search_list_wr > ul').niceScroll(scrollOptions);
        }
    //});

   
// hide aside block on docused input ////////////////////////////////
// if(!($('.filter_block').css('display') == 'block')) {
//     $('.aside').removeClass('hidden');
// }
    $('.question_field input[type="text"]').on('focus', function(inp) {
        if($(window).width() <= 767) {
            $('.aside').addClass('hidden');
            $('.questions_popup').css({'bottom':'0'});
            $('.questions').css({'height':'calc((var(--vh, 1vh) * 100) - 226px)'});
        }
       
    });
    $('.question_field input[type="text"]').on('blur', function() {
        if($(window).width() <= 767) {
            $('.aside').removeClass('hidden');
            $('.questions_popup').css({'bottom':'62px'});
            $('.questions').css({'height':'calc((var(--vh, 1vh) * 100) - 288px)'});
        }
        
    });
    $('.new_attendee_wr > div > form input[type="text"]').on('focus', function() {
        $('.aside').addClass('hidden');
        $('.new_attendee_wr').css({'height':'calc(var(--vh, 1vh) * 100)'});
        $('.new_attendee_wr > div > form').css({'height':'calc((var(--vh, 1vh) * 100) - 155px)'});
        $('.main_screen').css({'bottom':'0'});
        window.clearTimeout(window.MyTimeout25);
            MyTimeout25 = window.setTimeout(
            function(){
                $('.new_attendee_wr > div > form').getNiceScroll().resize();
            }, 
        300);
    });
    $('.new_attendee_wr > div > form input[type="text"]').on('blur', function() {
        if($(window).width() <= 767) {
            $('.aside').removeClass('hidden');
            $('.new_attendee_wr').css({'height':'calc((var(--vh, 1vh) * 100) - 62px)'});
            $('.new_attendee_wr > div > form').css({'height':'calc((var(--vh, 1vh) * 100) - 217px)'});
            $('.main_screen').css({'bottom':'62px'});
            window.clearTimeout(window.MyTimeout25);
                MyTimeout25 = window.setTimeout(
                function(){
                    $('.new_attendee_wr > div > form').getNiceScroll().resize();
                }, 
            300);
        }
    });
    $('input.search_field_input').on('focus', function(inp) {
        if($(window).width() <=767) {
            $('.aside').addClass('hidden');
            $('.main_screen').css({'bottom':'0'});
            $('.search_list_wr > ul').css({'height':'calc((var(--vh, 1vh) * 100) - 164px)'});
            if($(window).width() <= 767) {
                window.clearTimeout(window.MyTimeout25_1);
                    MyTimeout25_1 = window.setTimeout(
                    function(){
                        $('.search_list_wr > ul').niceScroll(scrollOptions2);
                        $('.search_list_wr > ul').getNiceScroll().resize();
                    }, 
                600);
            } else {
                window.clearTimeout(window.MyTimeout25_1);
                    MyTimeout25_1 = window.setTimeout(
                    function(){
                        $('.search_list_wr > ul').niceScroll(scrollOptions);
                        $('.search_list_wr > ul').getNiceScroll().resize();
                    }, 
                600);
            }
            
            
        }
    });
    $('input.search_field_input').on('blur', function() {
        if($(window).width() <= 767) {         
            $('.aside').removeClass('hidden');   
            $('.main_screen').css({'bottom':'62px'});
            $('.search_list_wr > ul').css({'height':'calc((var(--vh, 1vh) * 100) - 226px)'});
        }
    });



// show camera scan popup on mobile /////////////////////////////////////
    $('.mobile_header .scan_i').click(function() {
        $('.scan_qr_pop').fadeIn(600);
        $('.search_list_wr > ul').getNiceScroll().remove();
        // closing mobile filter block
        $('.close_mobile_filter').fadeOut(300);
        $('.filter.active').removeClass('active').fadeIn(300);
        $('.search_header .search_field').removeClass('mobile_filter_active');
        $('.filter_block').slideUp(300);
        $('.search_list_wr > ul').css({'height': ''});
        $('.new_attendee_wr .gform_body').css({'height': 'auto'});
        $('.aside').removeClass('hidden');
        $('.total_results').removeClass('dark');
        $('.filter_block > ul').getNiceScroll().remove();
    });
    $('.scan_qr_pop .available_cameras_list a').click(function() {
        $('.select_camera_for_scan_i.active').removeClass('active');
        $('.available_cameras_list.active').removeClass('active');
        $('.scan_qr_pop .available_cameras_list ul').getNiceScroll().remove();
        $('.scan_qr_pop').fadeOut(600);
        $('.camera_scan_pop').fadeIn(600);
        
    });
    $('.camera_scan_pop_back_btn').click(function() {
        $('.camera_scan_pop').fadeOut(600);
        $('.scan_qr_pop .available_cameras_list ul').getNiceScroll().remove();
        $('.search_list_wr > ul').niceScroll(scrollOptions2);
    });
// attendee header buttons popups ////////////////////////////////////////////////
    $('.attendee_header_buttons .attendee_info').click(function() {
        $('.new_att_inform_pop').fadeIn(600);
        $('.new_att_inform_pop_closer').fadeIn(600);
    });
    $('.new_att_inform_pop_closer').click(function() {
        $('.new_att_inform_pop').fadeOut(600);
        $('.new_att_inform_pop_closer').fadeOut(600);
    });
    $('.close_new_att_inform_pop').click(function() {
        $('.new_att_inform_pop').fadeOut(600);
        $('.new_att_inform_pop_closer').fadeOut(600);
    });

    $('.attendee_header_buttons .attendee_arr_right').click(function() {
        $('.new_att_checkOut_pop').fadeIn(600);
        $('.new_att_checkOut_pop_closer').fadeIn(600);
    });
    $('.new_att_checkOut_pop_closer').click(function() {
        $('.new_att_checkOut_pop').fadeOut(600);
        $('.new_att_checkOut_pop_closer').fadeOut(600);
    });
    $('.close_new_att_checkOut_pop').click(function() {
        $('.new_att_checkOut_pop').fadeOut(600);
        $('.new_att_checkOut_pop_closer').fadeOut(600);
    });



    $('.attendee_saved_pop span').click(function() {
        $('.attendee_saved_pop').fadeOut(600);
        $('.attendee_saved_pop_closer').fadeOut(600);
    });
    $('.attendee_saved_pop_closer').click(function() {
        $('.attendee_saved_pop').fadeOut(600);
        $('.attendee_saved_pop_closer').fadeOut(600);
    });

    $('.attendee_checked_pop span').click(function() {
        $('.attendee_checked_pop').fadeOut(600);
        $('.attendee_checked_pop_closer').fadeOut(600);
    });
    $('.attendee_checked_pop_closer').click(function() {
        $('.attendee_checked_pop').fadeOut(600);
        $('.attendee_checked_pop_closer').fadeOut(600);
    });

    $('.attendee_savedAndchecked_pop span').click(function() {
        $('.attendee_savedAndchecked_pop').fadeOut(600);
        $('.attendee_savedAndchecked_pop_closer').fadeOut(600);
    });
    $('.attendee_savedAndchecked_pop').click(function() {
        $('.attendee_savedAndchecked_pop').fadeOut(600);
        $('.attendee_savedAndchecked_pop_closer').fadeOut(600);
    });
// scan qr popup closing in mobile  ///////////////////////////////

    $('.close_scan_qr_pop_i').click(function() {
        $('.select_camera_for_scan_i.active').removeClass('active');
        $('.available_cameras_list.active').removeClass('active');
        $('.scan_qr_pop .available_cameras_list ul').getNiceScroll().remove();
        $('.scan_qr_pop').fadeOut(600);
        $('.search_list_wr > ul').niceScroll(scrollOptions2);
    });
// choose camera in scan qr block ///////////////////////////////////////
    $('.select_camera_for_scan_i').click(function() {
        if($(this).hasClass('active')) {
            $('.select_camera_for_scan_i.active').removeClass('active');
            $('.available_cameras_list.active').removeClass('active');
            $('.scan_qr_pop .available_cameras_list ul').getNiceScroll().remove();
        } else {
            $(this).addClass('active');
            $('.available_cameras_list').addClass('active');
            $('.scan_qr_pop .available_cameras_list ul').niceScroll(scrollOptions2);
        }
    });

// error & congratulations popups closers /////////////////////////////////////
    $('.close_error_popup').click(function() {
        $('.error_popup').fadeOut(600);
    });
    $('.close_congr_popup').click(function() {
        $('.congr_popup').fadeOut(600);
    });

// ебучие селекты на мобильной версии /////////////////////////////////////////////////
    //не работает из-за класса mobile

    //$('.mobile li.gfield input[type="text"]').on('touchstart', function(){this.focus()});
    $('.mobile li.gfield').on('click', function (e) {
        if ($(this).find('select').length == 1) {
        } else if($(this).find('input[type="text"]').length == 1) {

            $('.focused_input').removeClass('focused_input');
            var activeEl = $(this);
            var activeInput = $(this).find('input[type="text"]');             
            activeInput.parent().parent().addClass('focused_input');

            // прокрутка блока filter_block чтобы инпуты были видны
            if($(this).parents().hasClass('filter_block')) {
                var activeElOffset = activeEl.position().top;
                var filter_blockUlOffset = $('.filter_block ul').scrollTop();
                $('.filter_block ul').animate({scrollTop: filter_blockUlOffset + activeElOffset},300);
            }

            // прокрутка блока new_attendee_wr чтобы инпуты были видны
            if($(this).parents().hasClass('new_attendee_wr')) {
                var activeElOffset = activeEl.position().top;
                var gform_fieldsUlOffset = $('.new_attendee_wr > div > form').scrollTop();
                $('.new_attendee_wr > div > form').animate({scrollTop: gform_fieldsUlOffset + activeElOffset - 178},300);
            }
            
            // проверка значения у инпутов после клика по li.gfield
            $('li.gfield').each( function() {
                var iputGfieldVal2 = $(this).find('input[type="text"]').val();
                if (iputGfieldVal2 !== "" && iputGfieldVal2 !== undefined) {
                    $(this).addClass('present_value');
                } else {
                    $(this).removeClass('present_value');
                }
            });
            $('.aside').addClass('hidden');
            //return false;
        }
    });
    
// timer photo //////////////////////////////////////////////////////////////////////
    $('.timer').click(function() {
        var time = $('.timer').text(),
        int;
        int = setInterval(function() {
        if (time > 0) {
            time--; // вычитаем 1
            $('.timer').text(time);
        } else {
            clearInterval(int);
        }
        }, 1000);

    });


// code for put dots in relative of picture in badge-block //////////////////////
    $(window).on('load resize', function() {
            $('.right_sl_item img').height();
            $('.right_sl .owl-carousel .owl-dots').css('top', $('.right_sl_item img').height() - 30 + 'px');
            $('.right_sl .owl-carousel .owl-nav').css('top', ($('.right_sl_item img').height() / 2) - 29 + 'px');
        if($(window).width() > 991) {
            $('.print_set_wr').css('right', ($('.right_sl .right_sl_slider').width() / 2) + ($('.right_sl_item img').width() / 2) + 'px');
        } else {
            $('.print_set_wr').css('right', '');
        }
        if($(window).width() > 767 && $('.filter_block').css('display') === 'block') {
            $('.search_list_wr > ul').css({'height': ($(window).outerHeight() - $('.filter_block').outerHeight() - $('.total_results').outerHeight() - $('.search_header').outerHeight()) + 'px'});
        }
    });

// font options show/hide ///////////////////////////////////////////////////////////////////////////////////////

    

    $('.right_sl_item img').click(function() {
        $('.print_set_wr').addClass('active');
        window.clearTimeout(window.MyTimeout3);
            MyTimeout3 = window.setTimeout(
            function(){
                $('.print_set_wr').css({'overflow' : 'initial'});
            }, 
        500);
    });

    $('body').click(function(tr) {
        var clTrgt = (tr.target);
        if($(clTrgt).hasClass('print_set_wr') || 
            $(clTrgt).parents().hasClass('print_set_wr') ||
            $(clTrgt).parents().hasClass('right_sl_item')){

        } else {
            window.clearTimeout(window.MyTimeout3);
            $('.fz_drop').removeClass('active');
            $('.print_set .fz_drop ul').slideUp(300);
            $('.print_set_wr').css({'overflow' : 'hidden'});
            $('.print_set_wr').removeClass('active');
        }
    });

    // var IHbeforeKB = $(window).innerHeight();
    // $('.right_sl_item_inner input').click(function() {
    //     if($(window).width() <= 767) {
            
            
            
    //         window.clearTimeout(window.MyTimeout55_1);
    //             MyTimeout55_1 = window.setTimeout(
    //             function(){
    //                 var IHafterKB = $(window).innerHeight();
    //                 $('.print_set_wr').css('top', IHbeforeKB - IHafterKB - 56 + 'px');
    //                 console.log(IHbeforeKB + 'before');
    //                 console.log(IHafterKB + 'after');
    //             }, 
    //         2000);
    //     }
    // });
var IHbeforeKB = $(window).outerHeight();
var timerId;
var vh = $(window).outerHeight() * 0.01;
        $('.right_sl_item_inner input').on('focus', function() {
            console.log('input:focused in badge');
            if($(window).width() <= 1024) {
                $('.right_sl .right_sl_slider').css('height', $('.right_sl .right_sl_slider').height() + 'px');
                $('.right_sl_item img').css({'width': $('.right_sl_item img').width() +'px','height': $('.right_sl_item img').height() +'px'})
                $('.right_sl .owl-carousel .owl-dots,.right_sl .owl-carousel .owl-nav,.right_sl .go').fadeOut(500);
            }
            $('.print_set_wr').addClass('active');
            window.clearTimeout(window.MyTimeout3_353);
                MyTimeout3_353 = window.setTimeout(
                function(){
                    
                    $('.print_set_wr').css({'overflow' : 'initial'});
                    if($(window).width() <= 1024) {
                        $('html').css('--vh', vh + 'px');
                        $('.right_sl .right_sl_slider').css('transform', 'translateY(-' + (($('.right_sl .right_sl_slider').outerHeight() / 2) + ($('.right_sl_item_inner input').offset().top - 126)) + 'px)');
                    }
                }, 
            500);
            timerId = setInterval(function() {
                $(window).scrollTop(0);
            }, 1);
        });
        $('.right_sl_item_inner input').on('blur', function() {
            $('.right_sl .right_sl_slider').css('transform', '')
            setTimeout(function() {
                clearInterval(timerId);
            }, 100);
            if($(window).width() <= 1024) {
                $('.print_set_wr').css('top', '');
                window.clearTimeout(window.MyTimeout3_3578);
                MyTimeout3_3578 = window.setTimeout(
                function(){
                    $('.right_sl_item img').css({'width': '','height': ''});
                    $('.right_sl .right_sl_slider').css('height','');
                    $('.right_sl .owl-carousel .owl-dots,.right_sl .owl-carousel .owl-nav,.right_sl .go').fadeIn(500);
                },500);
            }
        });


        $(document.body).on("touchmove", function(event) {
            event.preventDefault();
        });

        var w = $(window).width();
        $(window).on('resize', function() {
            if ($(window).width() != w) {
                if($(window).width() <= 767) {
                    $('.main_screen').addClass('fullsized');
                    $('.right_slider_control').removeClass('active');
                    $('.aside').removeClass('pushed_to_left');
                    if($('.new_attendee_wr').css('display') === 'block') {
                        $('.search_header').fadeOut();
                        $('.total_results').fadeOut();
                        $('.mobile_header').fadeOut();
                        $('.new_attendee_wr .gform_body').getNiceScroll().remove();
                        $('.new_attendee_wr .gform_body').removeAttr('style');
                        $('.new_attendee_wr > div > form').niceScroll(scrollOptions2);
                    }
                    if($('.search_list_wr').css('display') === 'block') {
                        $('.search_list_wr > ul').getNiceScroll().remove();
                        $('.search_list_wr > ul').niceScroll(scrollOptions2);
                        $('.mobile_header').fadeIn(600);
                    }
                } else {
                    if($('.new_attendee_wr').css('display') === 'block') {
                        $('.search_header').fadeIn();
                        $('.new_attendee_wr > div > form').getNiceScroll().remove();
                        $('.new_attendee_wr > div > form').removeAttr('style');
                        $('.new_attendee_wr .gform_body').niceScroll(scrollOptions);
                    }
                    if($('.search_list_wr').css('display') === 'block' && $('.filter_block').css('display') === 'block') {
                        $('.search_list_wr > ul').css({'height': ($('.aside').outerHeight() - 
                        $('.filter_block').outerHeight() - 
                        $('.search_header').outerHeight()) + 'px'});
                        $('.search_list_wr > ul').getNiceScroll().resize();
                    }
                    $('.right_slider_control.active').removeClass('active');
                    $('.right_sl_wr').css('display', 'none');
                    $('.main_screen').addClass('fullsized');
                }
                w = $(window).width();
            }
        });

        $('.question_filter .resolved_questions').click(function() {
            if(!$(this).hasClass('active')) {
                $('.all_questions.active').removeClass('active');
                $(this).addClass('active');
                $('li.positive,li.negative,li.waiting').fadeOut(300);
                window.clearTimeout(window.MyTimeout3_4785);
                MyTimeout3_4785 = window.setTimeout(
                function(){
                    $('.questions').getNiceScroll().resize();
                },350);
            }
        });
        $('.question_filter .all_questions').click(function() {
            if(!$(this).hasClass('active')) {
                $('.resolved_questions.active').removeClass('active');
                $(this).addClass('active');
                $('li.positive,li.negative,li.waiting').fadeIn(300);
                window.clearTimeout(window.MyTimeout3_4785d);
                MyTimeout3_4785d = window.setTimeout(
                function(){
                    $('.questions').getNiceScroll().resize();
                },350);
            }
        });

    $('.client_info_back').click(function() {
        $('.client_info').fadeOut(600);
    });

    $('.timer').click(function() {
        var time = $('.timer').text(),
        int;
        int = setInterval(function() { 
        if (time > 0) {
            time--; 
            $('.timer').text(time);
        } else {
            clearInterval(int);
        }
        }, 1000);
    });

    $('.grid_btn_to_action').click(function() {
        $('.grid_animation_logo').addClass('go_baby_go');
        $(this).fadeOut(300);
        $('.band_link_overlay span').fadeOut(300);
    });





    // start_sign_pop_animation();





start_sign_pop_animation();


$('.main_login_pop_inner button').click(function() {
    stop_sign_pop_animation();
    $('.main_login_pop').fadeOut(600);
    return false;
});


if (is_touch_device()) {
    var elem = document.getElementsByTagName('body');
    elem[0].classList.add("touchscreen");
}

}); // end of document.ready //




// var hasTouch;
// window.addEventListener('touchstart', function setHasTouch () {
//     hasTouch = true;
//     $('body').addClass('touchscreen');
//     // window.removeEventListener('touchstart', setHasTouch);
// }, false);

function is_touch_device() {
 return (('ontouchstart' in window)
      || (navigator.MaxTouchPoints > 0)
      || (navigator.msMaxTouchPoints > 0));
}

 $(window).on('load resize', function() {
    var vh = $(window).outerHeight() * 0.01;
    $('html').css('--vh', vh + 'px')
});

function escapeHTML(str){
    var entityMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': '&quot;',
        "'": '&#39;',
        "/": '&#x2F;'
    };
    var re = new RegExp(Object.keys(entityMap).join("|"),"gi");
    return str.replace(re, function(matched){
        return entityMap[matched];
    });
}
var triangleInterval = [];
var lineInterval = [];
function start_sign_pop_animation() {
    var triangles = ['.trngl1','.trngl2','.trngl3','.trngl4','.trngl5','.trngl6','.trngl7',
        '.trngl8','.trngl9','.trngl10','.trngl11','.trngl12','.trngl13','.ellipse1','.ellipse2',
        '.ellipse3','.ellipse4','.ellipse5','.ellipse6','.ellipse7','.ellipse8','.ellipse9','.ellipse10',
        '.ellipse11','.ellipse12','.square1','.square2','.square3','.square4','.square5','.square6','.square7',
        '.square8'
    ];
    var lines = ['.line1','.line2','.line3','.line4','.line5','.line6','.line7','.line8','.line9','.line10',
        '.line11','.line12','.line13','.line14','.line15','.line16','.line17','.line18','.line19','.line20',
        '.line21','.line22','.line23','.line24','.line25','.line26','.line27','.line28','.line29','.line30',
        '.line31','.line32'
    ];
    function makeNewPosition(){
        var h = $(window).height() - 50;
        var w = $(window).width() - 50;
        var nh = Math.floor(Math.random() * h);
        var nw = Math.floor(Math.random() * w);
        var r = Math.floor(Math.random() * 720);
        return [nh,nw,r];    
    };
    function animateDivOnce(triangleEl){
        var newq = makeNewPosition();
        $(triangleEl).css({ transform: 'translate(' + newq[1] + 'px,' + newq[0] + 'px) rotate(' + newq[2] + 'deg)'});
        triangleTimeout = window.setTimeout(
        function(){
            $(triangleEl).css({'transition-duration': '100s', 'transition-timing-function': 'linear'});
             var newq = makeNewPosition();
            $(triangleEl).css({ transform: 'translate(' + newq[1] + 'px,' + newq[0] + 'px) rotate(' + newq[2] + 'deg)'});
        },50);
    };
    function animateLineOnce(lineEl){
        var newq = makeNewPosition();
        $(lineEl).css({ transform: 'translate(' + newq[1] + 'px,' + newq[0] + 'px)'});
        lineTimeout = window.setTimeout(
        function(){
            $(lineEl).css({'transition-duration': '100s', 'transition-timing-function': 'linear'});
            var newq = makeNewPosition();
            $(lineEl).css({ transform: 'translate(' + newq[1] + 'px,' + newq[0] + 'px)'});
        },50);
    };
    function animateDiv(triangleEl){
        triangleInterval.push(setInterval(
        function(){
            var newq = makeNewPosition();
            $(triangleEl).css({ transform: 'translate(' + newq[1] + 'px,' + newq[0] + 'px) rotate(' + newq[2] + 'deg)' })
        },100000));
    };
    function animateLine(lineEl){
        lineInterval.push(setInterval(
        function(){
            var newq = makeNewPosition();
            $(lineEl).css({ transform: 'translate(' + newq[1] + 'px,' + newq[0] + 'px)' })
        },100000));
    };
    triangles.forEach(animateDivOnce);
    lines.forEach(animateLineOnce);

    triangles.forEach(animateDiv);
    lines.forEach(animateLine);
}

function stop_sign_pop_animation() {
    triangleInterval.forEach(clearInterval);
    lineInterval.forEach(clearInterval);
}
