(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    require(['jquery'], factory);
  } else {
    // Browser globals
    root.amdWeb = factory(root.jQuery);
  }
}(typeof self !== 'undefined' ? self : this, function ($) {
  $(document).ready(function() {


    function fontAwesomeIcons(state){
      if (!state.id) { return state.text; }

      var template = $("<span class='fa-icon fa-" + state.element.value + "'></span><span>"+ state.text + "</span>");
      return template;
    }


    var initIconSelection = function(){
      var element = $(".datagridwidget-body tr:not(.datagridwidget-empty-row) select.select-widget");

      element.select2({
        width: "100%",
        templateResult: fontAwesomeIcons,
        templateSelection: fontAwesomeIcons
      });

      // Never use inline validation
      $(".z3cformInlineValidation").removeClass("z3cformInlineValidation");
    };


    if ($("#service-edit-form").length === 1){
      // in Plone 5 select2 comes with plone
      if ($.fn.select2) {
        initIconSelection();
      } else {
        var base_plugin_url = portal_url + "/++resource++servicenavigation/select2-4.0.0/dist";
        var select2_plugin = base_plugin_url + "/js/select2.min.js";

        $.getScript(select2_plugin, function(){
          $("head").append(
            $('<link rel="stylesheet" type="text/css" />').attr(
              "href", base_plugin_url + "/css/select2.min.css") );
          initIconSelection();
        });
      }
    }


    $( ".select-widget, .datagridwidget-row" ).change(function() {
      initIconSelection();
    });
    $( ".insert-row" ).click(function() {
      initIconSelection();
    });


  });
}));
