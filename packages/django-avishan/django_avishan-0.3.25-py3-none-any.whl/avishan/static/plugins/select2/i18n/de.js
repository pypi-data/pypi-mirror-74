/*! Select2 4.0.0 | https://github.com/select2/select2/blob/master/LICENSE.md */

(function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd;return e.define("select2/i18n/de",[],function(){return{inputTooLong:function(e){var t=e.input.length-e.maximum;return"Bitte "+t+" Zeichen weniger eingeben"},inputTooShort:function(e){var t=e.minimum-e.input.length;return"Bitte "+t+" Zeichen mehr eingeben"},loadingMore:function(){return"Lade mehr Ergebnisse…"},maximumSelected:function(e){var t="Sie können nur "+e.maximum+" Eintr";return e.maximum===1?t+="ag":t+="äge",t+=" auswählen",t},noResults:function(){return"Keine Übereinstimmungen gefunden"},searching:function(){return"Suche…"}}}),{define:e.define,require:e.require}})();