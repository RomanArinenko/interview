
$(document).ready(function() {
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

// menu mouseover /////////////////////////////////////////////////////////
    $('.menu').on('mouseover', function() {
        $('.min').addClass('menu_mouseover');
    });
    $('.menu').on('mouseleave', function() {
        $('.min').removeClass('menu_mouseover');
    });
// END menu mouseover /////////////////////////////////////////////////////

// mobile menu /////////////////////////////////////////////
    $('.mobile_menu_burger').click(function() {
        $('.aside').addClass('active');
        $('.mobile_aside_closer').fadeIn(650);
    });
    $('.mobile_aside_closer,.mobile_menu_close').click(function() {
        $('.aside').removeClass('active');
        $('.mobile_aside_closer').fadeOut(650);
    });
// END mobile menu /////////////////////////////////////////////

// scrolling of inputs to vieport /////////////////////////////////
    // works not good for all inputs. maybe should select a few inputs and use this code only for selected inputs
    // $('input[type="text"],textarea,input[type="password"]').on('click tap focus', function() {
    //     var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    //     if(!iOS) {
    //         var el = this;
    //         window.setTimeout(
    //         function(){
    //             el.scrollIntoView({behavior: 'smooth',block: 'end'});
    //         },300);
    //     }
    // });
// END scrolling of inputs to vieport /////////////////////////////////

// Sweet alerts ///////////////////////////////////////////////////////
    $('.delete_one_attendee p strong').click(function() {
        swal({
            title:'Are you sure?',
            text:"If you delete this attendee now, you will never be able to recover.",
            closeOnEsc: true,
            closeOnClickOutside: true,
            className: "sweet_sure_pop",
            buttons: ["Do not delete", "Delete permantently"]
        });
    });

    $('.attendee_block_header .print_one_attendee i, .attendees_inner .tablenav-pages .fast_actions .fast_print').click(function() {
        swal({
            title:'Include note?',
            text:"Would yoy like to print attendee information including notes?",
            closeOnEsc: true,
            closeOnClickOutside: true,
            className: "sweet_sure_pop",
            buttons: ["Print without notes", "Yes"]
        });
    });
// END Sweet alerts ///////////////////////////////////////////////////

// menu dropdown /////////////////////////////////////////////////////////
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
// END menu dropdown /////////////////////////////////////////////////////

// min menu //////////////////////////////////////////////////
    $('.copyright i').click(function() {
        $('.aside').toggleClass('min');
        $('.menu_drop.active ul').slideUp(500);
        $('.menu_drop.active').removeClass('active');
        $('.menu_drop ul').slideUp(500);
    });
// END min menu //////////////////////////////////////////////

// search_block button //////////////////////////////////////////////
	$('.search_block button').click(function() {
		if($('.search_block input').val() === '') {
			$('.search_block input').focus();
			return false;
		} else {
			$('.search_block input').val('');
			$('.search_block input').focus();
		}
	});
// END search_block button //////////////////////////////////////////

// search select ////////////////////////////////////////////
    $('.search_block select').each(function() {
        var selLi = [];
        $(this).find('option').each( function() {selLi.push(this.outerHTML.replace(/<(\/?)option/g,'<$1li'))});
        $(this).before('<div class="select_imitation"><span class="closer_click_start">' + $(this).find('option:selected').text() + '</span><div class="closer_click_elem"><ul>'+ selLi.join(" ") + '</ul></div></div>');
        fzValue = $(this).val();
        $('.select_imitation ul li[value="' + fzValue + '"]').addClass('active');
    });

    $('.search_block').on('click','.select_imitation ul li', function() {
        $(this).parents('.select_imitation').find('li.active').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.select_imitation').next('select').val($(this).attr('value'));
        $(this).parents('.select_imitation').find('span').text($(this).text()).removeClass('active');
        $(this).parents('.select_imitation').find('.closer_click_elem').slideUp(600);
    });
// END search select ////////////////////////////////////////

// account in top right bar ////////////////////////////////////// 
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
// END account in top right bar //////////////////////////////////


// section_description show_more ////////////////////////////////
    $('.section_description .show_more, .tool_description .show_more').click(function() {
        $('.section_description, .tool_description').addClass('active');
    });
    $('.section_description .show_less, .tool_description .show_less').click(function() {
        $('.section_description.active, .tool_description.active').removeClass('active');
    });
// END section_description show_more ////////////////////////////

// closer_click_elem ////////////////////////////////////////////
    var closer_click_elem;
    $(document).on('click','.closer_click_start', function() {
        closer_click_elem = $(this).parent().find('.closer_click_elem');
        if(closer_click_elem.css('display') === 'none') {
            closer_click_elem.slideDown(600);
            $(this).addClass('active');
            $('body').on('click.hhh', function(e) {
                if(!$(e.target).hasClass('closer_click_elem') && !$(e.target).parents().hasClass('closer_click_elem')) {
                    $('.closer_click_elem,.closer_click_start').removeClass('active');
                    $('.closer_click_elem').slideUp(600);
                    $('body').off('click.hhh');
                }
            });
        } else {
            $('.closer_click_elem,.closer_click_start').removeClass('active');
            $('.closer_click_elem').slideUp(600);
        }
    });
// END closer_click_elem ////////////////////////////////////////

// add new message popup selects (possible will changes much) /////
    $('.input_selection_block .ui-dialog select').each(function() {
        var selLi = [];
        $(this).find('option').each( function() {selLi.push(this.outerHTML.replace(/<(\/?)option/g,'<$1li'))});
        $(this).before('<div class="select_imitation"><span class="closer_click_start">' + $(this).find('option:selected').text() + '</span><div class="closer_click_elem"><ul>'+ selLi.join(" ") + '</ul></div></div>');
        fzValue = $(this).val();
        $('.select_imitation ul li[value="' + fzValue + '"]').addClass('active');
    });

    $('.input_selection_block').on('click','.ui-dialog .select_imitation ul li', function() {
        $(this).parents('.select_imitation').find('li.active').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.select_imitation').next('select').val($(this).attr('value'));
        $(this).parents('.select_imitation').find('span').text($(this).text()).removeClass('active');
        $(this).parents('.select_imitation').find('.closer_click_elem').slideUp(600);
    });
// END add new message popup selects (possible will changes much) /////

// add_msg_checkin_btn //////////////////////////////////////
    $('.add_msg_checkin_btn').click(function() {
        $('.add_msg_pop').fadeIn(600);
    });

    $('.add_msg_pop_close, .add_msg_pop_closer').click(function() {
        $('.add_msg_pop').fadeOut(600);
    });
// END add_msg_checkin_btn //////////////////////////////////

// edit_img ////////////////////////////////////////////////
    $('.edit_img').click(function() {
        $('.change_logo_pop').fadeIn(600);
    });
// END edit_img ////////////////////////////////////////////

// change_logo_pop_closer //////////////////////////////////////
    $('.change_logo_pop_closer, .change_logo_pop_close').click(function() {
        $('.change_logo_pop').fadeOut(600);
    });
// END change_logo_pop_closer //////////////////////////////////


// image uploader for design_logo /////////////////////////////
    function uploadProgressHandler(event) {
        var percent = (event.loaded / event.total) * 100;
        var progress = Math.round(percent);
        $('.percentage span').html('Uploading' + '<strong>' + progress + '%' + '</strong>');
        $('.percentage em').css("width", progress + "%");
    }

    function loadHandler(event) {
        // $('.drag_drop_field').fadeIn(300);
        $('.change_logo_pop_inner .percentage').fadeOut(300);
        $('.change_logo_pop_inner .percentage em').css("width", "0%");
        $('.change_logo_pop_inner').append('<img class="dragged_image" src="img/jesus.jpg">');
        $('.dragged_image').croppie({
            viewport: {
                width: 200,
                height: 200,
                type: 'circle'
                // type: 'square'
            },
            boundary: { },
            orientationControls: {
                enabled: true,
                leftClass: 'turn_to_left',
                rightClass: 'turn_to_right'
            },
            resizeControls: {
                width: false,
                height: false
            },
            customClass: 'customClass',
            showZoomer: true,
            enableZoom: true,
            enableResize: false,
            mouseWheelZoom: true,
            enableExif: false,
            enforceBoundary: true,
            enableOrientation: true,
            enableKeyMovement: true
        });
        $('.croppie-container').append('<button class="rotate_left" data-deg="-90">'
            + '</button><button class="rotate_right" data-deg="90"></button><span class="croppie_save">Save</span>'
            + '<span class="delete_added_img"></span>'
        );
    }

    $('.rotate_left, .rotate_right').on('click', function () {
        $('.dragged_image').croppie('rotate', parseInt($(this).data('deg')));
    });

    function errorHandler(event) {
        $('.drag_drop_field').fadeIn(300);
        $('.change_logo_pop_inner .percentage').fadeOut(300);
    }

    function abortHandler(event) {
        $('.drag_drop_field').fadeIn(300);
        $('.change_logo_pop_inner .percentage').fadeOut(300);
    }

    $("#drag_drop_field").change(function(event) {
        $('.drag_drop_field').fadeOut(300);
        $('.change_logo_pop_inner .percentage').fadeIn(300);
        event.preventDefault();
        var file = $("#drag_drop_field")[0].files[0];
        var formData = new FormData();
        formData.append("file1", file);

        $.ajax({url: 'http://xtag-int.com/panel_in',
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
// END image uploader for design_logo /////////////////////////

// $('.testt').click(function() {
//     $(this).croppie({
//         url: 'demo/demo-1.jpg',
//         viewport: {
//             width: 200,
//             height: 200,
//             type: 'square'
//         },
//         boundary: { },
//         orientationControls: {
//             enabled: true,
//             leftClass: '',
//             rightClass: ''
//         },
//         resizeControls: {
//             width: true,
//             height: true
//         },
//         customClass: '',
//         showZoomer: true,
//         enableZoom: true,
//         enableResize: false,
//         mouseWheelZoom: true,
//         enableExif: false,
//         enforceBoundary: true,
//         enableOrientation: false,
//         enableKeyMovement: true
//     })
// });

$('.check-column input[type="checkbox"]').change(function() {
    (this.checked) ? $(this).parents('tr').addClass('choosen') : $(this).parents('tr').removeClass('choosen')
});


$('.column-is_starred img, .star img').click(function() {
    if($(this).attr('src') == 'img/star_1.svg') {
        $(this).attr('src','img/star_0.svg');
    } else {
        $(this).attr('src','img/star_1.svg');
    }
});


// $('.fast_mark_as_read').click(function() {
//     $('#bulk-action-selector-top').val('mark_read');
//     $('#doaction').click();
// });
// $('.fast_mark_as_unread').click(function() {
//     $('#bulk-action-selector-top').val('mark_unread');
//     $('#doaction').click();
// });
// $('.fast_add_star').click(function() {
//     $('#bulk-action-selector-top').val('add_star');
//     $('#doaction').click();
// });
// $('.fast_remove_star').click(function() {
//     $('#bulk-action-selector-top').val('remove_star');
//     $('#doaction').click();
// });




// attendee panel search block ////////////////////////////////////////////////////////////
$('#entry_search_container select').each(function() {
    var selLi = [];
    $(this).find('option').each( function() {selLi.push(this.outerHTML.replace(/<(\/?)option/g,'<$1li'))});
    $(this).before('<div class="select_imitation"><span class="closer_click_start">' + $(this).find('option:selected').text() + '</span><div class="closer_click_elem"><ul>'+ selLi.join(" ") + '</ul></div></div>');
    fzValue = $(this).val();
    $('.select_imitation ul li[value="' + fzValue + '"]').addClass('active');
});

$('#entry_search_container').on('click','.select_imitation ul li', function() {
    $(this).parents('.select_imitation').find('li.active').removeClass('active');
    $(this).addClass('active');
    $(this).parents('.select_imitation').next('select').val($(this).attr('value'));
    $(this).parents('.select_imitation').find('span').text($(this).text()).removeClass('active');
    $(this).parents('.select_imitation').find('.closer_click_elem').slideUp(600);
});
// END attendee panel search block ////////////////////////////////////////////////////////////

// attendee panel event_selection block ////////////////////////////////////////////////////////////
$('.event_selection select').each(function() {
    var selLi = [];
    $(this).find('option').each( function() {selLi.push(this.outerHTML.replace(/<(\/?)option/g,'<$1li'))});
    $(this).before('<div class="select_imitation"><span class="closer_click_start">' + $(this).find('option:selected').text() + '</span><div class="closer_click_elem"><ul>'+ selLi.join(" ") + '</ul></div></div>');
    fzValue = $(this).val();
    $('.select_imitation ul li[value="' + fzValue + '"]').addClass('active');
});

$('.event_selection').on('click','.select_imitation ul li', function() {
    $(this).parents('.select_imitation').find('li.active').removeClass('active');
    $(this).addClass('active');
    $(this).parents('.select_imitation').next('select').val($(this).attr('value'));
    $(this).parents('.select_imitation').find('span').text($(this).text()).removeClass('active');
    $(this).parents('.select_imitation').find('.closer_click_elem').slideUp(600);
});
// END attendee panel event_selection block ////////////////////////////////////////////////////////////


// attendee panel page_selection block ////////////////////////////////////////////////////////////
$('.page_selection select').each(function() {
    var selLi = [];
    $(this).find('option').each( function() {selLi.push(this.outerHTML.replace(/<(\/?)option/g,'<$1li').replace(/\((\d+)\)/, '<span>$1</span>'))});
    $(this).before('<div class="select_imitation"><span class="closer_click_start">' + $(this).find('option:selected').text().replace(/\((\d+)\)/, '<span>$1</span>') + '</span><div class="closer_click_elem"><ul>'+ selLi.join(" ") + '</ul></div></div>');
    fzValue = $(this).val();
    $('.select_imitation ul li[value="' + fzValue + '"]').addClass('active');
});

$('.page_selection').on('click','.select_imitation ul li', function() {
    $(this).parents('.select_imitation').find('li.active').removeClass('active');
    $(this).addClass('active');
    $(this).parents('.select_imitation').next('select').val($(this).attr('value'));
    $(this).parents('.select_imitation').find('span.closer_click_start').html($(this).html()).removeClass('active');
    $(this).parents('.select_imitation').find('.closer_click_elem').slideUp(600);
});
// END attendee panel page_selection block ////////////////////////////////////////////////////////////




// table_settings_pop ////////////////////////////////////////////////////////////

$('.attendees_inner table .manage-column.column-column_selector a').click(function() {
    $('.table_settings_pop').fadeIn(600);
});

$('.table_settings_pop_closer, .table_settings_pop_close, .table_settings_pop_inner .table_settings_buttons .cancel').click(function() {
    $('.table_settings_pop').fadeOut(600);
});
// END table_settings_pop ////////////////////////////////////////////////////////////

// table_settings_pop ////////////////////////////////////////////////////////////

$('.fast_actions .fast_resend_notifications, .notification_one_attendee i').click(function() {
    $('.resend_notif_pop').fadeIn(600);
});

$('.resend_notif_pop_closer, .resend_notif_pop_close, .resend_btn').click(function() {
    $('.resend_notif_pop').fadeOut(600);
});
// END table_settings_pop ////////////////////////////////////////////////////////////

// menu active ////////////////////////////////////////////////////////////
$('.menu li li a').click(function() {
    $('.menu li li a.active').removeClass('active');
    $(this).addClass('active');
});
// END menu active ////////////////////////////////////////////////////////////

// actions selectbox ////////////////////////////////////////////////////////////
$('.actions_inner > ul li select').each(function() {
    var selLi = [];
    $(this).find('option').each( function() {selLi.push(this.outerHTML.replace(/<(\/?)option/g,'<$1li').replace(/\((\d+)\)/, '<span>$1</span>'))});
    $(this).before('<div class="select_imitation"><span class="closer_click_start">' + $(this).find('option:selected').text().replace(/\((\d+)\)/, '<span>$1</span>') + '</span><div class="closer_click_elem"><ul>'+ selLi.join(" ") + '</ul></div></div>');
    fzValue = $(this).val();
    $('.select_imitation ul li[value="' + fzValue + '"]').addClass('active');
});

$('.actions_inner > ul li').on('click','.select_imitation ul li', function() {
    $(this).parents('.select_imitation').find('li.active').removeClass('active');
    $(this).addClass('active');
    $(this).parents('.select_imitation').next('select').val($(this).attr('value'));
    $(this).parents('.select_imitation').find('span.closer_click_start').html($(this).html()).removeClass('active');
    $(this).parents('.select_imitation').find('.closer_click_elem').slideUp(600);
});
// END actions selectbox ////////////////////////////////////////////////////////////

// add note selectbox ////////////////////////////////////////////////////////////
$('.note_wr select').each(function() {
    var selLi = [];
    $(this).find('option').each( function() {selLi.push(this.outerHTML.replace(/<(\/?)option/g,'<$1li').replace(/\((\d+)\)/, '<span>$1</span>'))});
    $(this).before('<div class="select_imitation"><span class="closer_click_start">' + $(this).find('option:selected').text().replace(/\((\d+)\)/, '<span>$1</span>') + '</span><div class="closer_click_elem"><ul>'+ selLi.join(" ") + '</ul></div></div>');
    fzValue = $(this).val();
    $('.select_imitation ul li[value="' + fzValue + '"]').addClass('active');
});

$('.note_wr').on('click','.select_imitation ul li', function() {
    $(this).parents('.select_imitation').find('li.active').removeClass('active');
    $(this).addClass('active');
    $(this).parents('.select_imitation').next('select').val($(this).attr('value'));
    $(this).parents('.select_imitation').find('span.closer_click_start').html($(this).html()).removeClass('active');
    $(this).parents('.select_imitation').find('.closer_click_elem').slideUp(600);
});
// END add note selectbox ////////////////////////////////////////////////////////////

// select choose edite date on one attendee page ////////////////////////////////////////
$('.attInfo_header .tablenav-pages select').each(function() {
    var selLi = [];
    $(this).find('option').each( function() {selLi.push(this.outerHTML.replace(/<(\/?)option/g,'<$1li'))});
    $(this).before('<div class="select_imitation"><span class="closer_click_start">' + $(this).find('option:selected').text() + '</span><div class="closer_click_elem"><ul>'+ selLi.join(" ") + '</ul></div></div>');
    fzValue = $(this).val();
    $('.select_imitation ul li[value="' + fzValue + '"]').addClass('active');
});

$('.attInfo_header .tablenav-pages').on('click','.select_imitation ul li', function() {
    $(this).parents('.select_imitation').find('li.active').removeClass('active');
    $(this).addClass('active');
    $(this).parents('.select_imitation').next('select').val($(this).attr('value'));
    $(this).parents('.select_imitation').find('span').text($(this).text()).removeClass('active');
    $(this).parents('.select_imitation').find('.closer_click_elem').slideUp(600);
});
// END select choose edite date on one attendee page ////////////////////////////////////

// select choose edite date on one attendee page ////////////////////////////////////////
$('.attInfo .note select').each(function() {
    var selLi = [];
    $(this).find('option').each( function() {selLi.push(this.outerHTML.replace(/<(\/?)option/g,'<$1li'))});
    $(this).before('<div class="select_imitation"><span class="closer_click_start">' + $(this).find('option:selected').text() + '</span><div class="closer_click_elem"><ul>'+ selLi.join(" ") + '</ul></div></div>');
    fzValue = $(this).val();
    $('.select_imitation ul li[value="' + fzValue + '"]').addClass('active');
});

$('.attInfo .note').on('click','.select_imitation ul li', function() {
    $(this).parents('.select_imitation').find('li.active').removeClass('active');
    $(this).addClass('active');
    $(this).parents('.select_imitation').next('select').val($(this).attr('value'));
    $(this).parents('.select_imitation').find('span').text($(this).text()).removeClass('active');
    $(this).parents('.select_imitation').find('.closer_click_elem').slideUp(600);
});
// END select choose edite date on one attendee page ////////////////////////////////////

// one attendee note textare //////////////////////////////////////////////
$('body').on('click keypress tap', function(e) {
    if ($('.note_wr textarea').val() !== "") {
        $('.note_wr textarea').addClass('present_value');
        $('.note_wr .add_note').addClass('active');
    } else {
        $('.note_wr textarea').removeClass('present_value');
        $('.note_wr .add_note').removeClass('active');
    }
});
// END one attendee note textare //////////////////////////////////////////////


$('.delete_one_attendee i').click(function() {
    $('.attendee_block_inner').addClass('deleted');
});

$('.delete_one_attendee p em').click(function() {
    $('.attendee_block_inner.deleted').removeClass('deleted');
});

$('.show_one_attendee_details').click(function() {
    $('.one_attendee_details').toggleClass('closed');
});



// .one_attendee_tab_connections ///////////////////////////////////////////////
$('.one_attendee_tab_status_history > ul > li').click(function() {
    if($(this).hasClass('opened')) {
        $(this).removeClass('opened');
        $(this).find('ul').slideUp(350);
    } else {
        $(this).addClass('opened');
        $(this).find('ul').slideDown(350);
    }
});
// END .one_attendee_tab_connections ///////////////////////////////////////////////

// search bar for users and for sponsors ///////////////////////////////////////////
$('.one_attendee_tab_connections_inner .search_bar input').focus(function() {
    $(this).parent().parent().find('ul').addClass('search_result');
    $(this).parent().find('.clear_search_bar').fadeIn(350);
});
$('.one_attendee_tab_connections_inner .search_bar input').blur(function() {
    $(this).parent().parent().find('ul').removeClass('search_result');
    if($(this).val() === '') {$(this).parent().find('.clear_search_bar').fadeOut(350)}
});
// END search bar for users and for sponsors ///////////////////////////////////////////

// tabs one attendee /////////////////////////////////////////////////////////////////
$('.attendee_block_inner .tabs li').on('click', function() {
    if(!$(this).hasClass('active')) {
        $('.attendee_block_inner .tabs li.active').removeClass('active');
        $(this).addClass('active');
        $('.attendee_block_inner .tab_content.active').removeClass('active').hide();
        $('.attendee_block_inner .tab_content[data-tab="' + $(this).attr('data-tab') + '"]').show().addClass('active');
    }
});
// END tabs one attendee /////////////////////////////////////////////////////////////////


// clear_search_bar ////////////////////////////////////////////////////////////
$('.clear_search_bar').click(function() {
    $(this).parent().find('input').val('');
    $(this).fadeOut(350);
});
// END clear_search_bar ////////////////////////////////////////////////////////////


// one attendee editable list selects ////////////////////////////////////////////////////////////
$('.for_edit select').each(function() {
    var selLi = [];
    $(this).find('option').each( function() {selLi.push(this.outerHTML.replace(/<(\/?)option/g,'<$1li'))});
    $(this).before('<div class="select_imitation"><span class="closer_click_start">' + $(this).find('option:selected').text() + '</span><div class="closer_click_elem"><ul>'+ selLi.join(" ") + '</ul></div></div>');
    fzValue = $(this).val();
    $('.select_imitation ul li[value="' + fzValue + '"]').addClass('active');
});

$('.for_edit').on('click','.select_imitation ul li', function() {
    $(this).parents('.select_imitation').find('li.active').removeClass('active');
    $(this).addClass('active');
    $(this).parents('.select_imitation').next('select').val($(this).attr('value'));
    $(this).parents('.select_imitation').find('span').text($(this).text()).removeClass('active');
    $(this).parents('.select_imitation').find('.closer_click_elem').slideUp(600);
});
// END one attendee editable list selects ////////////////////////////////////////////////////////////



// edit_one_attendee btn /////////////////////////////////////////////////////////////////
$('.edit_one_attendee').click(function() {
    $('.attendee_block_inner').removeClass('deleted').addClass('edited_now');
});

$('.save_cancel em, .save_cancel span').click(function() {
    $('.attendee_block_inner').removeClass('edited_now');
});
// END edit_one_attendee btn /////////////////////////////////////////////////////////////////

// hide_show_empty_fields ///////////////////////////////////////////////////////////////////
$('.hide_show_empty_fields').click(function() {
    if($('.one_attendee_tab_info_inner ul li.empty').css('display') === 'none') {
        $(this).removeClass('active').text('Hide empty fields');
        $('.one_attendee_tab_info_inner ul li.empty').slideDown(350);
    } else {
        $(this).addClass('active').text('Show empty fields');
        $('.one_attendee_tab_info_inner ul li.empty').slideUp(350);
    }
});
// END hide_show_empty_fields ///////////////////////////////////////////////////////////////////


// conditional logic selects ////////////////////////////////////////////////////////////
$('.conditional_logic_field select').each(function() {
    var selLi = [];
    $(this).find('option').each( function() {selLi.push(this.outerHTML.replace(/<(\/?)option/g,'<$1li'))});
    $(this).before('<div class="select_imitation"><span class="closer_click_start">' + $(this).find('option:selected').text() + '</span><div class="closer_click_elem"><ul>'+ selLi.join(" ") + '</ul></div></div>');
    fzValue = $(this).val();
    $('.select_imitation ul li[value="' + fzValue + '"]').addClass('active');
});

$('.conditional_logic_field').on('click','.select_imitation ul li', function() {
    $(this).parents('.select_imitation').find('li.active').removeClass('active');
    $(this).addClass('active');
    $(this).parents('.select_imitation').next('select').val($(this).attr('value'));
    $(this).parents('.select_imitation').find('span').text($(this).text()).removeClass('active');
    $(this).parents('.select_imitation').find('.closer_click_elem').slideUp(600);
});
// END conditional logic selects ////////////////////////////////////////////////////////////

$.fn.datepicker.Constructor.prototype.old_buildDatepickersContainer=$.fn.datepicker.Constructor.prototype._buildDatepickersContainer
$.fn.datepicker.Constructor.prototype._buildDatepickersContainer =  function(){this.$el.parent().append('<div class="datepickers-container monkey" id="datepickers-container"></div>'); this.old_buildDatepickersContainer();$(".datepickers-container:last").remove()}

$('#rrr').datepicker({
    timepicker: true,
    language: {
        days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        months: ['January','February','March','April','May','June', 'July','August','September','October','November','December'],
        monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        today: 'Today',
        clear: 'Clear',
        dateFormat: 'mm/dd/yyyy',
        timeFormat: 'hh:ii aa',
        firstDay: 0
    },
    multipleDatesSeparator: "    To    ",
    maxHours: 12,
    multipleDates: true,
    range: true,
    clearButton: true
});



// upload csv file ////////////////////////////////////////////////////////////////

function uploadProgressHandler(event) {
    var percent = (event.loaded / event.total) * 100;
    var progress = Math.round(percent);
    // $('.percentage span').html('Uploading' + '<strong>' + progress + '%' + '</strong>');
    $('.upload_csv .percentage p span').css("width", progress + "%");
}

function loadHandler(event) {
    // $('.drag_drop_field').fadeIn(300);
    $('.import_block .upload_csv .percentage').fadeOut(300);
    $('.drag_and_drop').fadeIn(300);
    $('.upload_csv .percentage p span').css("width", "0%");
    $('.tab_select_fields').addClass('active finished');
    $('.tab_content.upload_csv').removeClass('active');
    $('.tab_content.select_fields').addClass('active');
}

function errorHandler(event) {
    $('.drag_and_drop').fadeIn(300);
    $('.import_block .upload_csv .percentage').fadeOut(300);
}

function abortHandler(event) {
    $('.drag_drop_field').fadeIn(300);
    $('.import_block .upload_csv .percentage').fadeOut(300);
}

$("#upload_csv").change(function(event) {
    $('.upload_csv .drag_and_drop').fadeOut(300);
    $('.import_block .upload_csv .percentage').fadeIn(300);
    event.preventDefault();
    var file = $("#upload_csv")[0].files[0];
    var formData = new FormData();
    formData.append("file1", file);

    $.ajax({url: 'http://xtag-int.com/panel_in',
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

// END upload csv file ////////////////////////////////////////////////////////////////


// Merge to existing attendee by selector ////////////////////////////////////////////////////////////
$('.imported_fields p select').each(function() {
    var selLi = [];
    $(this).find('option').each( function() {selLi.push(this.outerHTML.replace(/<(\/?)option/g,'<$1li'))});
    $(this).before('<div class="select_imitation"><span class="closer_click_start">' + $(this).find('option:selected').text() + '</span><div class="closer_click_elem"><ul>'+ selLi.join(" ") + '</ul></div></div>');
    fzValue = $(this).val();
    $('.select_imitation ul li[value="' + fzValue + '"]').addClass('active');
});

$('.imported_fields p').on('click','.select_imitation ul li', function() {
    $(this).parents('.select_imitation').find('li.active').removeClass('active');
    $(this).addClass('active');
    $(this).parents('.select_imitation').next('select').val($(this).attr('value'));
    $(this).parents('.select_imitation').find('span').text($(this).text()).removeClass('active');
    $(this).parents('.select_imitation').find('.closer_click_elem').slideUp(600);
});
// END Merge to existing attendee by selector ////////////////////////////////////////////////////////////


// select box for new imported field ////////////////////////////////////////////////////////////
$('.existing_fields .new p select').each(function() {
    var selLi = [];
    $(this).find('option').each( function() {selLi.push(this.outerHTML.replace(/<(\/?)option/g,'<$1li'))});
    $(this).before('<div class="select_imitation"><span class="closer_click_start">' + $(this).find('option:selected').text() + '</span><div class="closer_click_elem"><ul>'+ selLi.join(" ") + '</ul></div></div>');
    fzValue = $(this).val();
    $('.select_imitation ul li[value="' + fzValue + '"]').addClass('active');
});

$('.existing_fields .new').on('click','.select_imitation ul li', function() {
    $(this).parents('.select_imitation').find('li.active').removeClass('active');
    $(this).addClass('active');
    $(this).parents('.select_imitation').next('select').val($(this).attr('value'));
    $(this).parents('.select_imitation').find('span').text($(this).text()).removeClass('active');
    $(this).parents('.select_imitation').find('.closer_click_elem').slideUp(600);
});
// END select box for new imported field ////////////////////////////////////////////////////////////


// select box for send_to_selected_field ////////////////////////////////////////////////////////////
$('.send_to_selected_field select').each(function() {
    var selLi = [];
    $(this).find('option').each( function() {selLi.push(this.outerHTML.replace(/<(\/?)option/g,'<$1li'))});
    $(this).before('<div class="select_imitation"><span class="closer_click_start">' + $(this).find('option:selected').text() + '</span><div class="closer_click_elem"><ul>'+ selLi.join(" ") + '</ul></div></div>');
    fzValue = $(this).val();
    $('.select_imitation ul li[value="' + fzValue + '"]').addClass('active');
});

$('.send_to_selected_field').on('click','.select_imitation ul li', function() {
    $(this).parents('.select_imitation').find('li.active').removeClass('active');
    $(this).addClass('active');
    $(this).parents('.select_imitation').next('select').val($(this).attr('value'));
    $(this).parents('.select_imitation').find('span').text($(this).text()).removeClass('active');
    $(this).parents('.select_imitation').find('.closer_click_elem').slideUp(600);
});
// END select box for send_to_selected_field ////////////////////////////////////////////////////////////


// select box for send_to_config_field ////////////////////////////////////////////////////////////
$('.send_to_config_field select').each(function() {
    var selLi = [];
    $(this).find('option').each( function() {selLi.push(this.outerHTML.replace(/<(\/?)option/g,'<$1li'))});
    $(this).before('<div class="select_imitation"><span class="closer_click_start">' + $(this).find('option:selected').text() + '</span><div class="closer_click_elem"><ul>'+ selLi.join(" ") + '</ul></div></div>');
    fzValue = $(this).val();
    $('.select_imitation ul li[value="' + fzValue + '"]').addClass('active');
});

$('.send_to_config_field').on('click','.select_imitation ul li', function() {
    $(this).parents('.select_imitation').find('li.active').removeClass('active');
    $(this).addClass('active');
    $(this).parents('.select_imitation').next('select').val($(this).attr('value'));
    $(this).parents('.select_imitation').find('span').text($(this).text()).removeClass('active');
    $(this).parents('.select_imitation').find('.closer_click_elem').slideUp(600);
});
// END select box for send_to_config_field ////////////////////////////////////////////////////////////

// select box for enabled_conditional_logic ////////////////////////////////////////////////////////////
$('.enabled_conditional_logic select').each(function() {
    var selLi = [];
    $(this).find('option').each( function() {selLi.push(this.outerHTML.replace(/<(\/?)option/g,'<$1li'))});
    $(this).before('<div class="select_imitation"><span class="closer_click_start">' + $(this).find('option:selected').text() + '</span><div class="closer_click_elem"><ul>'+ selLi.join(" ") + '</ul></div></div>');
    fzValue = $(this).val();
    $('.select_imitation ul li[value="' + fzValue + '"]').addClass('active');
});

$('.enabled_conditional_logic').on('click','.select_imitation ul li', function() {
    $(this).parents('.select_imitation').find('li.active').removeClass('active');
    $(this).addClass('active');
    $(this).parents('.select_imitation').next('select').val($(this).attr('value'));
    $(this).parents('.select_imitation').find('span').text($(this).text()).removeClass('active');
    $(this).parents('.select_imitation').find('.closer_click_elem').slideUp(600);
});
// END select box for enabled_conditional_logic ////////////////////////////////////////////////////////////




}); // end document ready

$(window).on('load resize', function() {
	$('.menu').css('height', $(window).height() - $('.event_widjet').outerHeight() + 'px');
});

var hasTouch;
window.addEventListener('touchstart', function setHasTouch () {
    hasTouch = true;
    $('body').addClass('touchscreen');
    window.removeEventListener('touchstart', setHasTouch);
}, false);

 $(window).on('load resize', function() {
    var vh = $(window).outerHeight() * 0.01;
    $('html').css('--vh', vh + 'px')
});





// function eee() {
//     tr = 0.08;
//     pp = 99.99;
//     ap = 29.99;
//     bank_acc = 380;
//     a = 0;
//     st = 250;
//     while(a < st) {
//         a = a + pp;
//         if (a < st) {
//             a + ap;
//         }
//     }
//     function tax_amount(a) {a * tr};
//     a = a + tax_amount(a);
//     if(a < bank_acc) {
//         alert('congratulations!');
//     } else {
//         alert('You have no money!');
//     }
// }
// eee();