

function rSelectLinkDropDown(wrapper, leftUlShown) {

    if (!leftUlShown) {
        leftUlShown = false;
    }
    var originalSelect = wrapper.find("select");
    var ulSelect = wrapper.find("ul");
    if (!ulSelect.length) {
        wrapper.append('<div class="select_drop"><span></span><ul></ul></div>');
        ulSelect = wrapper.find("ul");
    }

    var selLi = [];
    originalSelect.find('option').each( function() {
        selLi.push(this.outerHTML.replace(/<(\/?)option/g,'<$1li'));
    });
    ulSelect.html(selLi.join(" "));
    var whereToShowValue = wrapper.find('div span:first');


    if (!leftUlShown) {
        whereToShowValue.click(function () {
            if ($(this).hasClass('active')) {

                ulSelect.slideUp(600);
                //!! $('.choose_printer .select_drop ul').getNiceScroll().remove();
            } else {
                ulSelect.slideDown(600);
            }
        })
    }

    //events handlers
    // from select to poppup & view
    originalSelect.off("change.selectlink");
    originalSelect.on("change.selectlink", function(e){
        ulSelect.find('li').removeClass('active');
        whereToShowValue.empty();
        var selected = originalSelect.find('option:selected');
        if (selected.length>0) {
            var v = selected.val();
            var t = selected.text();
            ulSelect.find('li[value="' + jQuery.escapeSelector(v) + '"]').addClass('active');
            whereToShowValue.text(t);
        }else{
            whereToShowValue.append('<span>'+ulSelect.find('option:first').text()+'</span>');
        }

    });
    originalSelect.change();

    // from dropdown to select & view
    ulSelect.off("click.selectlinkdrop tap.selectlinkdrop");
    ulSelect.on("click.selectlinkdrop tap.selectlinkdrop", "li", function(ev){
        var el = jQuery(this);
        el.addClass('active');
        var v = el.attr('value') || el.text();
        originalSelect.val(v).change();
        if (!leftUlShown) {
            ulSelect.slideUp(600);
        }
    });

    return ulSelect;
}


function rSelectLink(originalSelect, ulSelect, wrapper, whereToShowValue) {

    if (!ulSelect) {
        wrapper = jQuery('<div class="select_popup_wr"><div class="select_popup popup"><span><span class="popup_title"></span></span><div><ul></ul></div><em>Close</em></div><div class="select_pop_closer"></div></div>');
        ulSelect = wrapper.find("ul");
    }
    //ulSelect.find('li').remove();

    var nameOfselect = jQuery("label[for='"+originalSelect[0].id+"']").text() || 'Select';
    ulSelect.parents('.popup').find('span.popup_title').html(nameOfselect);

    var selLi = [];
    originalSelect.find('option').each( function() {
        selLi.push(this.outerHTML.replace(/<(\/?)option/g,'<$1li'));
    });
    ulSelect.html(selLi.join(" "));


    window.setTimeout( function() {
        // Event handlers
        // from select to poppup & view
        originalSelect.off("change.selectlink");
        originalSelect.on("change.selectlink", function (e) {
            ulSelect.find('li').removeClass('active');
            whereToShowValue.empty();
            var selected = originalSelect.find('option:selected');
            if (selected.length > 0) {
                var v = selected.val();
                var t = selected.text();
                ulSelect.find('li[value="' + jQuery.escapeSelector(v) + '"]').addClass('active');
                whereToShowValue.text(t);
            } else {
                whereToShowValue.append('<span>' + originalSelect.find('option:first').text() + '</span>');
            }

        });
        originalSelect.change();


        // from popup to select & view
        ulSelect.off("click.selectlink tap.selectlink");
        ulSelect.on("click.selectlink tap.selectlink", "li", function (ev) {
            var el = jQuery(this);
            el.addClass('active');
            originalSelect.find('option[value="' + el.attr('value') + '"]').prop("selected", true);
            originalSelect.change();
            rHidePopup(wrapper);
        });

    }, 1000);

    //closers
    var closer = wrapper.find('.select_pop_closer, .select_popup em');
    closer.on('click tap', function () { rHidePopup(wrapper) });

    return wrapper;

}


function rMultiSelectLink(originalMultiSelect, ulMultiSelect, wrapper, whereToShowValue) {

    // if popup not created - build it
    if (!ulMultiSelect) {
        wrapper = jQuery('<div class="multiSelect_popup_wr"><div class="multiSelect_popup popup"><span><span class="popup_title"></span></span><div><ul></ul></div><em>Close</em></div><div class="multiSelect_pop_closer"></div></div>');
        ulMultiSelect = wrapper.find("ul");
    }
    //ulMultiSelect.find('li').remove();

    // placing name of select
    var nameOfselect = jQuery("label[for='"+originalMultiSelect[0].id+"']").text() || 'Select multiple';
    ulMultiSelect.parents('.popup').find('span.popup_title').html(nameOfselect);

    // fill options
    var selLi = [];
    originalMultiSelect.find('option').each( function() {
        selLi.push(this.outerHTML.replace(/<(\/?)option/g,'<$1li'));
    });
    ulMultiSelect.html(selLi.join(" "));

    //jQuery('.multiSelect_popup_wr').fadeIn(1000);

    // Event handlers
    // from select to poppup & view
    originalMultiSelect.off("change.selectlink");
    originalMultiSelect.on("change.selectlink", function(e){
        ulMultiSelect.find('li').removeClass('active');
        whereToShowValue.empty();
        var selected = originalMultiSelect.find('option:selected');
        if (selected.length>0) {
            selected.each(function () {
                var v = jQuery(this).val();
                var t = jQuery(this).text();
                ulMultiSelect.find('li[value="' + jQuery.escapeSelector(v) + '"]').addClass('active');

                whereToShowValue.append('<span value="' + escapeHTML(v) + '">' + escapeHTML(t) + '</span>');
            })
        }else{
            whereToShowValue.append('<span>Please select</span>');
        }

    });
    originalMultiSelect.change();


    // from popup to select & view
    ulMultiSelect.off("click.multiselectlink tap.multiselectlink");
    ulMultiSelect.on("click.multiselectlink tap.multiselectlink", "li", function(ev){
        var el = jQuery(this);
        if(el.hasClass('active')) {
            el.removeClass('active');
            originalMultiSelect.find('option[value="' + jQuery.escapeSelector(el.attr('value')) + '"]').prop("selected", false);
            whereToShowValue.find('span[value="' + jQuery.escapeSelector(el.attr('value')) + '"]').remove();
            if(originalMultiSelect.val() == '') {
                whereToShowValue.html('<span>Please select</span>');
            }
        } else {
            el.addClass('active');
            originalMultiSelect.find('option[value="' + $(this).attr('value') + '"]').prop("selected", true);
            //whereToShowValue.append('<span value="' + $(this).attr('value') + '">' + $(this).text() + '</span>');
        }
        originalMultiSelect.change();
    });

    //closers
    var closer = wrapper.find('.multiSelect_pop_closer, .multiSelect_popup em');
    closer.on('click tap', function () {rHidePopup(wrapper); });

    return wrapper;


}

function rHidePopup(wrapper) {
    if (wrapper.data('closing')) {
        return;
    }
    wrapper.data('closing', true);
    wrapper.fadeOut(600);
    window.setTimeout(
        function(){
            wrapper.detach();
            wrapper.data('closing', false);
        },
        600);
}

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

