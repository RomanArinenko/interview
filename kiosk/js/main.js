
$(document).ready(function() {


   
    // $('.logo_block figure img').click(function() {
    //     swal({
    //         title:"Congratulations!",
    //         text:"You were successfuly checked in",
    //         closeOnEsc: true,
    //         closeOnClickOutside: true,
    //         className: "sweet_congr_pop",
    //         button: false
    //     });
    // });

    // $('.logo_block figure img').click(function() {
    //     swal({
    //         title:"Error!",
    //         text:"We didn’t found you in our system",
    //         closeOnEsc: true,
    //         closeOnClickOutside: true,
    //         className: "sweet_error_pop",
    //         button: false
    //     });
    // });

    $('.logo_block figure img').click(function() {
        swal({
            title:'Are you sure?',
            text:"Do you realy want to print and check in all 14 tags?",
            closeOnEsc: true,
            closeOnClickOutside: true,
            className: "sweet_sure_pop",
            buttons: ["Cancel", "Yes, print it"]
        });
    });


    var scrollOptions = {
        cursorcolor: "#e4e4e4",
        cursorwidth: "8px",
        cursorborder: "none",
        cursorborderradius: "5px",
        background: "none",
        cursorminheight: 30,
        horizrailenabled: false,
        hwacceleration: true,
        sensitiverail: true,
        railoffset: { top: 0, left: -14},
        smoothscroll: true
    }

    var scrollOptionsForm = {
        cursorcolor: "#e4e4e4",
        cursorwidth: "8px",
        cursorborder: "none",
        cursorborderradius: "5px",
        background: "none",
        cursorminheight: 30,
        horizrailenabled: false,
        hwacceleration: true,
        sensitiverail: true,
        railoffset: { top: 0, left: 4},
        smoothscroll: true
    }

    //railpadding: { top: 15, right: 0, left: 0, bottom: 15 }, ломает прокрутку в сеттингс

//////////////////////////////////////////////////////////////////////////////////////////////
// checking how much blocks on page
    $(window).on('load DOMSubtreeModified', function() {
        if ($('div').is('.searching_main_block')) {} else {$('.enter_code').addClass('enter_code_v2')};
        if ($('div').is('.enter_code')) {} else {$('.searching_main_block').addClass('searching_main_block_v2')};
        if ($('div').is('.register')) {} else {$('.content_inner').addClass('cont_inner_v2')};
        if ($('div').is('.scan_qr')) {} else {$('.right_col_wr').addClass('right_col_wr_v2')};
        // if ($('div').is('.scan_qr' && '.enter_code' && '.searching_main_block')) {} else {$('.register').addClass('register_v2');$('.content_inner').addClass('hidden')};

        if ($('.enter_code, .searching_main_block').length == 0) {
            $('.scan_qr').addClass('scan_qr_v2');
            $('.right_col_wr').remove();
        } else if ($('.enter_code, .searching_main_block').length == 1) {
            $('.scan_qr').addClass('scan_qr_v3');
        }
    });
//////////////////////////////////////////////////////////////////////////////////////////////
//main blocks showing
    $('.scan_qr.notActive').click(function() {
        $(this).removeClass('notActive');
        $('.logo_block').addClass('hidden');
        $('.right_col_wr').addClass('hidden');
        $('.register').addClass('hidden');
        $('.content_wr').addClass('full_sized');
        $('.scan_qr').addClass('full_sized');
        window.clearTimeout(window.show_scan_qr_pop);
            show_scan_qr_pop = window.setTimeout(
            function(){
                $('.scan_qr_pop.active').fadeIn(600);
                $('.camera_scar_qr.active').fadeIn(600);
            }, 
        1500);
    });

    $('.enter_code.notActive').click(function() {
        $(this).removeClass('notActive');
        $('.logo_block').addClass('hidden');
        $('.scan_qr').addClass('hidden');
        $('.searching_main_block').addClass('hidden');
        $('.register').addClass('hidden');
        $('.content_wr').addClass('full_sized');
        $('.right_col_wr').addClass('full_sized');
        $('.enter_code').addClass('full_sized');
        $('.enter_code_inner').delay(1500).fadeIn(500);
    });

    $('.searching_main_block.notActive').click(function() {
        $(this).removeClass('notActive');
        $('.logo_block').addClass('hidden');
        $('.scan_qr').addClass('hidden');
        $('.enter_code').addClass('hidden');
        $('.register').addClass('hidden');
        $('.content_wr').addClass('full_sized');
        $('.right_col_wr').addClass('full_sized');
        $('.searching_main_block').addClass('full_sized');
        $('.search_popuper').delay(1500).fadeIn(500);
    });
    
    $('.register.notActive').click(function() {
        $(this).removeClass('notActive');
        $('.logo_block').addClass('hidden');
        $('.content_inner').addClass('hidden');
        $('.content_wr').addClass('full_sized');
        $('.register').addClass('full_sized');
        $('.register_gform_wrapper').delay(1500).fadeIn(500);
        window.clearTimeout(window.scrollInRegBlockTimeout);
            scrollInRegBlockTimeout = window.setTimeout(
            function(){
               $('.register_gform_wrapper .gform_wrapper > form .gform_body').niceScroll(scrollOptionsForm);
            }, 
        2000);
    });
//////////////////////////////////////////////////////////////////////////////////////////////
// back-button
    $('.back').click(function() {
        var main_screen_item = $('.main_screen_item').length;
        if (main_screen_item == 1) {
            $('.first_screen').fadeIn(600);
        } else {            
            $('.register_gform_wrapper').fadeOut(500);
            $('.enter_code_inner').fadeOut(500);
            $('.search_popuper').fadeOut(500);
            $('.simple_keyboard_wr').hide(300);
            $('.simple-keyboard.hg-theme-default').hide(300);
            $('.simple_keyboard_wr.activeForSearch').removeClass('activeForSearch');
            $('.search_results > div').getNiceScroll().remove();
            $('.register_gform_wrapper .gform_wrapper > form .gform_body').getNiceScroll().remove();
            $('.scan_qr_pop.active').fadeOut(500);
            $('.camera_scar_qr.active').fadeOut(500);

            // $('.search_inner').removeClass('spaceForResults');
            // $('.search_results').removeClass('active');
            // $('.spaceForKeyboard').removeClass('spaceForKeyboard')

            // $('.full_sized').each(function() {
            //     $(this).removeClass('full_sized');
            //     $(this).addClass('notActive');
            // });
            $('.full_sized').addClass('notActive').removeClass('full_sized')

            // $('.hidden').each(function() {
            //     $(this).removeClass('hidden');
            // });
            $('.hidden').removeClass('hidden');
        }
    });
    $('.scan_qr_pop.active').click(function() {return false;});
    $('.camera_scar_qr.active').click(function() {return false;});
//////////////////////////////////////////////////////////////////////////////////////////////
    //first screen animation
    $('.first_screen .go').click(function() {
        var main_screen_item = $('.main_screen_item').length;
        if (main_screen_item == 1) {
            $('.main_screen_item').click();
            $('.first_screen').delay(1500).fadeOut(600);
        } else {
            $('.first_screen').fadeOut(600);
        }
    });

//////////////////////////////////////////////////////////////////////////////////////////////
//search results popup
    $('.search_inner form input').click(function() {
        $('.search_inner').addClass('spaceForResults');
        $('.search_results').addClass('active');
        window.clearTimeout(window.redrawtimeouthandler);
        var redrawtimeouthandler = window.setTimeout(
            function(){
                $('.search_results > div').niceScroll(scrollOptions);
            }, 
        1000);
    });

//////////////////////////////////////////////////////////////////////////////////////////////
// badges popup
    var printerForBadges;
    $('.badges_printers .printer_info').click(function() {
        printerForBadges = $(this).find('em');
        $('.choose_printer').addClass('active');
        $('.badges_printers').append('<div class="choose_printer_closer"></div>');
        $('.choose_printer_closer').css({'filter' : 'alpha(opacity=50)'}).fadeIn();
        $('.badges_printers .choose_printer div').niceScroll(scrollOptions);
    });
    $('body').on('click', '.choose_printer li', function(){
        $(printerForBadges).text($(this).text());
        $('.choose_printer.active').removeClass('active');
        $('.choose_printer_closer').remove();
        $('.badges_printers .choose_printer div').getNiceScroll().remove();
    });
    $('body').on('click', '.choose_printer_closer', function(){
        $('.choose_printer.active').removeClass('active');
        $('.choose_printer_closer').remove();
        $('.badges_printers .choose_printer div').getNiceScroll().remove();
    });
//////////////////////////////////////////////////////////////////////////////////////////////
// settings tabs
    $('.setting_menu li a').click(function() {
        if (!$(this).parent().hasClass('active')) {
            $('.setting_menu ul li').removeClass('active');
            $('.simple-keyboard.hg-theme-default').hide(600);
            $('.simple_keyboard_wr').hide(600);
            $('.simple_keyboard_wr.active').removeClass('active');
            $('.settings_wr, .setting_info, .setting_menu > div').removeClass('spaceForKeyboard');
            $(this).parent().addClass('active');
        }
        
        var data_tab = $(this).data('tab');
        if (!$('div[data-tab_item="' + data_tab + '"]').hasClass('active')) {
            $('.setting_info > div').removeClass('active').fadeOut(600);
            $('div[data-tab_item="' + data_tab + '"]').addClass('active').fadeIn(600);
        }
       
        if($('.burger_sett').hasClass('active')) {
            $('.burger_sett').removeClass('active');
            $('.setting_menu').removeClass('active');
            $('.settings_menu_closer').remove();
        }
        return false;
    });
//////////////////////////////////////////////////////////////////////////////////////////////
// settings showing
    $('.enter_code_inner form .go').click(function() {
        $('.simple-keyboard.hg-theme-default').hide(600);
        $('.simple_keyboard_wr').hide(600);
        $('.settings_wr').fadeIn(600);
        
        window.clearTimeout(window.setting_menu_timeout);
        var setting_menu_timeout = window.setTimeout(
            function(){
                $('.setting_menu > div').niceScroll(scrollOptions);
            }, 
        1000);
        return false; // because we click on <a href="#">
    });
    $('.settings h6 .exit').click(function() {
        $('.setting_menu > div').getNiceScroll().remove();
        $('.simple-keyboard.hg-theme-default').hide(600);
        $('.simple_keyboard_wr').hide(600);
        $('.simple_keyboard_wr.active').removeClass('active');
        $('.settings_wr').fadeOut(600);
        $('.settings_wr, .setting_info, .setting_menu > div').removeClass('spaceForKeyboard');
    });
//////////////////////////////////////////////////////////////////////////////////////////////
// cameras popup
    var cameraForSelfie;
    $('.selfie_camera .list_of_cameras').click(function() {
        cameraForSelfie = $(this).find('span');
        $('.selfie_camera .choose_camera').addClass('active');
        $('.selfie_camera').append('<div class="choose_camera_closer"></div>');
        $('.choose_camera_closer').css({'filter' : 'alpha(opacity=50)'}).fadeIn();
        $('.selfie_camera .choose_camera div').niceScroll(scrollOptions);
    });
    $('body').on('click', '.choose_camera li', function(){
        $(cameraForSelfie).text($(this).text());
        $('.choose_camera.active').removeClass('active');
        $('.choose_camera_closer').remove();
        $('.selfie_camera .choose_camera div').getNiceScroll().remove();
    });
    $('body').on('click', '.choose_camera_closer', function(){
        $('.choose_camera.active').removeClass('active');
        $('.choose_camera_closer').remove();
        $('.selfie_camera .choose_camera div').getNiceScroll().remove();
    });
//////////////////////////////////////////////////////////////////////////////////////////////
    // cameras/scanners popup
    $('.qr_scanner .list_of_cameras').click(function() {
        cameraForSelfie = $(this).find('span');
        $('.qr_scanner .choose_camera').addClass('active');
        $('.qr_scanner').append('<div class="choose_camera_closer"></div>');
        $('.choose_camera_closer').css({'filter' : 'alpha(opacity=50)'}).fadeIn();
        $('.qr_scanner .choose_camera div').niceScroll(scrollOptions);
    });
    $('body').on('click', '.choose_camera li', function(){
        $(cameraForSelfie).text($(this).text());
        $('.choose_camera.active').removeClass('active');
        $('.choose_camera_closer').remove();
    });
    $('body').on('click', '.choose_camera_closer', function(){
        $('.choose_camera.active').removeClass('active');
        $('.choose_camera_closer').remove();
    });
//////////////////////////////////////////////////////////////////////////////////////////////
    // now it not exist in last version, but may be we will need this later again
    // choose lecture popup
    // $('.list_of_fields .lecture_pop').click(function() {
    //     $('.registration_form .choose_lecture_popup').addClass('active');
    //     $('.registration_form').append('<div class="choose_lecture_closer"></div>');
    //     $('.choose_lecture_closer').css({'filter' : 'alpha(opacity=50)'}).fadeIn();
    //     $('.registration_form .choose_lecture_popup div').niceScroll(scrollOptions);
    // });
    // $('body').on('click', '.choose_lecture_popup li', function(){
    //     $('.choose_lecture_popup.active').removeClass('active');
    //     $('.choose_lecture_closer').remove();
    //     $('.registration_form .choose_lecture_popup div').getNiceScroll().remove();
    // });
    // $('body').on('click', '.choose_lecture_closer', function(){
    //     $('.choose_lecture_popup.active').removeClass('active');
    //     $('.choose_lecture_closer').remove();
    //     $('.registration_form .choose_lecture_popup div').getNiceScroll().remove();
    // });
//////////////////////////////////////////////////////////////////////////////////////////////
    var list_of_scrollElements = $('.registration_form .choose_lecture_popup div, .badges_printers .choose_printer div, .selfie_camera .choose_camera div, .qr_scanner .choose_camera div, .setting_menu > div, .search_results > div');
    var list_of_kill_transition_el = $('.logo_block, .content_wr, .content_inner, .scan_qr, .right_col_wr, .enter_code, .searching_main_block, .register');

    $(window).on('resize', function() {
        window.clearTimeout(window.redrawtimeouthandler);
        redrawtimeouthandler = window.setTimeout(
            function(){
                list_of_scrollElements.each(function(){$(this).getNiceScroll().resize()})
            }, 
        1500);


        window.clearTimeout(window.killing_tr);
        list_of_kill_transition_el.addClass('kill_transition');
        killing_tr = window.setTimeout(
            function(){
                list_of_kill_transition_el.removeClass('kill_transition');
            }, 
        50);
    });


//////////////////////////////////////////////////////////////////////////////////////////////

    $('.burger_sett').click(function() {
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.setting_menu').removeClass('active');
            $('.settings_menu_closer').remove();
        } else {
            $(this).addClass('active');
            $('.setting_menu').addClass('active');
            $('.settings').append('<div class="settings_menu_closer"></div>');
            $('.settings_menu_closer').css({'filter' : 'alpha(opacity=50)'}).fadeIn();
        }
    });
    $('body').on('click', '.settings_menu_closer', function(){
        $('.setting_menu.active').removeClass('active');
        $('.burger_sett.active').removeClass('active');
        $('.settings_menu_closer').remove();
    });

//////////////////////////////////////////////////////////////////////////////////////////////
// options of rotating video
    var rotationX = 0;
    var rotationY = 0;
    var rotation3d = 0;
    var rotXPropCss = 'rotateX(0deg)';
    var rotYPropCss = 'rotateY(0deg)';
    var rot3dPropCss = 'rotate(0deg)';
    $('body').on('click', '.list_cam_options ul', function(e){
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
        $('.try_camera .video_from_camera div').css({"transform" : rotXPropCss + rotYPropCss + rot3dPropCss});
    });

//////////////////////////////////////////////////////////////////////////////////////

    $('.enter_code_inner form input').click(function() {
        if($(window).width() > 991) {
            var activeEl = $(this);
            var activeInput = this;
            $(this).parents('form').addClass('spaceForKeyboard');
            var Keyboard = window.SimpleKeyboard.default;
            var myKeyboard = new Keyboard({
                onChange: function(v) {
                $(activeInput).val(v);
                }, onKeyPress: function(button) {}
            });
            $('.simple_keyboard_wr').show(600);
            $('.simple-keyboard.hg-theme-default').show(600);
            var activeElOffset = activeEl.position().top;
            var spaceForKeyboardOffset = $('.enter_code_inner .spaceForKeyboard').scrollTop();
            $('.enter_code_inner .spaceForKeyboard').animate({
                scrollTop: spaceForKeyboardOffset + activeElOffset},
                1000
            );
        }
    });

    $('.search_inner form input').click(function() {
        var activeEl = $(this);
        var activeInput = this;
        $(this).parents('form').addClass('spaceForKeyboard');
        $('.simple_keyboard_wr').addClass('activeForSearch');
        var Keyboard = window.SimpleKeyboard.default;
        var myKeyboard = new Keyboard({
            onChange: function(v) {
            $(activeInput).val(v);
            }, onKeyPress: function(button) {}
        });
        $('.simple_keyboard_wr').fadeIn(600);
        $('.simple-keyboard.hg-theme-default').show(600);
        var activeElOffset = activeEl.position().top;
        var spaceForKeyboardOffset = $('.search_inner .spaceForKeyboard').scrollTop();
        $('.search_inner .spaceForKeyboard').animate({
            scrollTop: spaceForKeyboardOffset + activeElOffset},
            1000
        );
    });

    $('.gform_fields li.gfield').click(function() {
        if($(this).find('input[type="text"]').length == 1) {

            var activeEl = $(this);
            var activeInput = $(this).find('input[type="text"]');

            $(this).parents('form').addClass('spaceForKeyboard');
            var Keyboard = window.SimpleKeyboard.default;
            var myKeyboard = new Keyboard({
                onChange: function(v) {
                    $(activeInput).val(v);
                    // console.log("Input changed", v);
                },
                onKeyPress: function(button) {
                    // console.log("Button pressed", button);
                }
            });
            $('.simple_keyboard_wr').show(600);
            $('.simple-keyboard.hg-theme-default').show(600);
            var activeElOffset = activeEl.position().top;
            var spaceForKeyboardOffset = $('.spaceForKeyboard .gform_body').scrollTop();
            $('.spaceForKeyboard .gform_body').animate({
            scrollTop: spaceForKeyboardOffset + activeElOffset},
            1000
            );
        }
    });

    $('.setting_info .general_info ul li.full_sized_li div input').click( function() {
        var activeInput = this;
        $('.simple_keyboard_wr').addClass('active');
        var Keyboard = window.SimpleKeyboard.default;
        var myKeyboard = new Keyboard({
            onChange: function(v) {
            $(activeInput).val(v);
            }, onKeyPress: function(button) {}
        });
        $('.settings_wr, .setting_info, .general_info').addClass('spaceForKeyboard');
        $('.simple_keyboard_wr').fadeIn(0);
        $('.simple-keyboard.hg-theme-default').show(600);
        $('.setting_info .general_info').animate({
            scrollTop: 2000},
            1000
        );
    });
    

    // hiding virtual keyboard on click on not marked elemets
    $('body').on('click', function(e) {
        var clickTarget = $(e.target);
        var checkAttr = $(e.target).attr('type');
        var correctSelector = clickTarget.find('input[type="text"]');
        if(
            (clickTarget.hasClass('simple-keyboard')) ||
            (clickTarget.parents('.simple-keyboard').length == 1) ||
            (clickTarget.is('li input[type="text"]')) ||
            ( (clickTarget.parents('li.gfield').length == 1) && (clickTarget.find('input[type="text"]')) ) || 
            (clickTarget.is('.gfield') && clickTarget.find('input[type="text"]').length == 1) ||
            (checkAttr == 'text')
        ) {} else {
            $('.simple-keyboard.hg-theme-default').hide(600);
            $('.simple_keyboard_wr').fadeOut(600);
            $('.spaceForKeyboard').removeClass('spaceForKeyboard');
            $('.focused_input').removeClass('focused_input');
        }
        // checking the value of the input after entering 
        $('li.gfield').each( function() {
            var iputGfieldVal2 = $(this).find('input[type="text"]').val();
            if (iputGfieldVal2 !== "" && iputGfieldVal2 !== undefined) {
                $(this).addClass('present_value');
            } else {
                $(this).removeClass('present_value');
            }
        });
    });


    var markedSelect = '';
    $('li.gfield').click(function () {
        if ($(this).find('select').length == 1) {
            // $('.simple_keyboard_wr').hide(600);
            // $('.simple-keyboard.hg-theme-default').hide(600);
            // $('.spaceForKeyboard').removeClass('spaceForKeyboard');
            // markedSelect = $(this).find('select');
            // var activeOption = $(this).find('select').val();

            // var nameOfselect = $(this).find('label').text();
            // var selVal = [];
            // var selText = [];
            // var selLi = [];
            // $(this).find('option').each( function() {selLi.push(this.outerHTML.replace(/<(\/?)option/g,'<$1li'))}); // build <li> from <option>
            
            // $('.register_gform_wrapper').append('<div class="select_popup_wr"><div class="select_popup"><span>' + nameOfselect + '</span><div><ul>' + selLi.join(" ") + '</ul></div><em>Close</em></div><div class="select_pop_closer"></div></div>');
            // var activeSelectLi = '.select_popup li[value="' + activeOption + '"]';
            // $(activeSelectLi).addClass('active');
            // $('.select_popup_wr').fadeIn(1000);
            // $('.select_popup span + div').niceScroll(scrollOptions);
        } else if (
            ($(this).find('.ginput_container_checkbox').length == 1) || 
            ($(this).find('.ginput_container_radio').length == 1)
        ) {
            $('.simple_keyboard_wr').hide(600);
            $('.simple-keyboard.hg-theme-default').hide(600);
            $('.spaceForKeyboard').removeClass('spaceForKeyboard');
        } else {
            $('.focused_input').removeClass('focused_input');
            var activeEl = $(this);
            var activeInput = $(this).find('input[type="text"]');

            $(this).find('input').focus();
            activeInput.parent().parent().addClass('focused_input');

            $(this).parents('form').addClass('spaceForKeyboard');
            var Keyboard = window.SimpleKeyboard.default;
            var myKeyboard = new Keyboard({
                onChange: function(v) {
                $(activeInput).val(v);
                }, onKeyPress: function(button) {}
            });
            $('.simple_keyboard_wr').show(600);
            $('.simple-keyboard.hg-theme-default').show(600);
        }

        // scroll elements to the visible part of the block
        if($(this).parents().hasClass('spaceForKeyboard')) {
            var liHeight = $(this).outerHeight();
            var activeLiPos = $(this).position().top;
            var activeLiOffset = $(this).offset().top;
            var spaceForKeyboardScroll = $('.spaceForKeyboard').scrollTop();
            var spaceForKeyboardOffset = $('.spaceForKeyboard').offset().top;
            if ((activeLiOffset + liHeight) > ($(window).height() - 250) ) {
                $('.spaceForKeyboard').animate({
                    scrollTop: spaceForKeyboardScroll + activeLiPos},
                    1000
                );
            } else if (activeLiOffset < spaceForKeyboardOffset) {
                $('.spaceForKeyboard').animate({
                    scrollTop: spaceForKeyboardScroll + activeLiPos},
                    1000
                );
            }
        }
        
    });


    // $('body').on('click', '.select_popup ul li', function () {
    //     $(markedSelect).val($.escapeSelector($(this).attr('value')));
    //     $(markedSelect).parent().find('span').text($(this).text());
    //     $('.select_popup_wr').fadeOut(600);
    //     window.clearTimeout(window.selectPopTimeout);
    //     selectPopTimeout = window.setTimeout(
    //         function(){
    //             $('.select_popup_wr').remove();
    //         }, 
    //     600);
    // });
    // $('body').on('click', '.select_pop_closer', function () {
    //     $('.select_popup_wr').fadeOut(600);
    //     window.clearTimeout(window.selectPopTimeout);
    //     selectPopTimeout = window.setTimeout(
    //         function(){
    //             $('.select_popup_wr').remove();
    //         }, 
    //     600);
    // });
    // $('body').on('click', '.select_popup em', function () {
    //     $('.select_popup_wr').fadeOut(600);
    //     window.clearTimeout(window.selectPopTimeout);
    //     selectPopTimeout = window.setTimeout(
    //         function(){
    //             $('.select_popup_wr').remove();
    //         }, 
    //     600);
    // });


    // scroll the page to the active field after pressing the keyboard
    $('body').on('click', '.simple-keyboard', function() {
        var liHeight = $('.focused_input').outerHeight();
        var activeLiPos = $('.focused_input').position().top;
        var activeLiOffset = $('.focused_input').offset().top;
        var spaceForKeyboardScroll = $('.spaceForKeyboard').scrollTop();
        var spaceForKeyboardOffset = $('.spaceForKeyboard').offset().top;
        if ((activeLiOffset + liHeight) > ($(window).height() - 250) ) {
            $('.spaceForKeyboard').animate({
                scrollTop: spaceForKeyboardScroll + activeLiPos},
                1000
            );
        } else if (activeLiOffset < spaceForKeyboardOffset) {
            $('.spaceForKeyboard').animate({
                scrollTop: spaceForKeyboardScroll + activeLiPos},
                1000
            );
        }
    });

    $('input[type="text"]').on('keypress',function(){
        var liHeight = $('.focused_input').outerHeight();
        var activeLiPos = $('.focused_input').position().top;
        var activeLiOffset = $('.focused_input').offset().top;
        var spaceForKeyboardScroll = $('.spaceForKeyboard').scrollTop();
        var spaceForKeyboardOffset = $('.spaceForKeyboard').offset().top;
        if ((activeLiOffset + liHeight) > ($(window).height() - 250) ) {
            $('.spaceForKeyboard').animate({
                scrollTop: spaceForKeyboardScroll + activeLiPos},
                1000
            );
        } else if (activeLiOffset < spaceForKeyboardOffset) {
            $('.spaceForKeyboard').animate({
                scrollTop: spaceForKeyboardScroll + activeLiPos},
                1000
            );
        }
    });



    // mark li.gfield with input[type="text"] inside
    $('li.gfield').each( function() {
        if($(this).find('input').attr('type') == 'text') {
            $(this).addClass('withTextInput');
            $(this).find('input[type="text"]').prop('required',true);
        }
        var iputGfieldVal = $(this).find('input[type="text"]').val();
        if (iputGfieldVal !== "") {
            $(this).addClass('present_value');
        }
    });
    // mark <li class="gfield with selectbox inside">
    $('.ginput_container_select').each( function() {
        var el = $(this);
        var df = $('<span></span>');

        el.append(df);
        el.parent().find('label').addClass('label_for_selectbox');
        el.parent().addClass('withSelectBox');


        var sel = el.find('select');
        var popup = rSelectLink(sel, null, null, df);

        el.parent('li').click(function(){
            //more actions, kb init, scroiller init etc
            if (!popup.next().length) { $('body').append(popup);}
            popup.fadeIn(1000);
            $('.select_popup span + div').niceScroll(scrollOptions);
        })
    });

















    // multiSelect_popup /////////////////////////////////////////
    $('.ginput_container_multiselect').each( function() {
        $(this).append('<span class="default">Please select</span>');
        $(this).parent().find('label').addClass('label_for_selectbox');
        $(this).parent().addClass('withMultiSelectBox');
    });
    $('.withMultiSelectBox').click(function() {
        //if($(window).width() > 767) {
            markedSelect = $(this).find('select');
            var activeOption = $(this).find('select').val();
            var nameOfselect = $(this).find('label').text();
            var selVal = [];
            var selText = [];
            var selLi = [];
            $(this).find('option').each( function() {
             selLi.push(this.outerHTML.replace(/<(\/?)option/g,'<$1li'));
            });
            $('body').append(
             '<div class="multiSelect_popup_wr"><div class="multiSelect_popup"><span>' + 
             nameOfselect + '</span><div><ul>' + selLi.join(" ") + 
             '</ul></div><em>Close</em></div><div class="multiSelect_pop_closer"></div></div>'
            );
            var activeSelectLi = '.multiSelect_popup li[value="' + activeOption + '"]';
            $(activeSelectLi).addClass('active');
            $('.multiSelect_popup_wr').fadeIn(1000);
            if($(window).width() <= 767) {
                $('.multiSelect_popup span + div').niceScroll(scrollOptions2);
            } else {
                $('.multiSelect_popup span + div').niceScroll(scrollOptions);
            }
        //}
    });
    $('body').on('click', '.multiSelect_popup ul li', function () {
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(markedSelect).find('option[value="' + $.escapeSelector($(this).attr('value')) + '"]').prop("selected", false);
            $(markedSelect).parent().find('span[value="' + $.escapeSelector($(this).attr('value')) + '"]').remove();
            if($(markedSelect).val() == '') {
                $(markedSelect).parent().find('span.default').fadeIn();
            }
        } else {
            $(this).addClass('active');
            $(markedSelect).find('option[value="' + $.escapeSelector($(this).attr('value')) + '"]').prop("selected", true);
            $(markedSelect).parent().append('<span value="' + escapeHTML($(this).attr('value')) + '">' + $(this).text() + '</span>');
            $(markedSelect).parent().find('span.default').fadeOut();
        }
    });
    $('body').on('click tap', '.multiSelect_pop_closer', function () {
        $('.multiSelect_popup_wr').fadeOut(600);
        window.clearTimeout(window.MyTimeout10);
        MyTimeout10 = window.setTimeout(
            function(){
                $('.multiSelect_popup_wr').remove();
            }, 
        600);
    });
    $('body').on('click tap', '.multiSelect_popup em', function () {
        $('.multiSelect_popup_wr').fadeOut(600);
        window.clearTimeout(window.MyTimeout11);
        MyTimeout11 = window.setTimeout(
            function(){
                $('.multiSelect_popup_wr').remove();
            }, 
        600);
    });
    // // END multiSelect_popup /////////////////////////////////////////






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

    start_sign_pop_animation();

    $('.main_login_pop_inner button').click(function() {
        stop_sign_pop_animation();
        $('.main_login_pop').fadeOut(600);
        return false;
    });

}); // end of document ready


var hasTouch;
window.addEventListener('touchstart', function setHasTouch () {
    hasTouch = true;
    $('body').addClass('touchscreen');
    window.removeEventListener('touchstart', setHasTouch);
}, false);

$(window).on('load resize', function() {
    var vh = $(window).height() * 0.01;
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