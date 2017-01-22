"use strict";

/**
 * JSLink: Field Customization
 */
var GDField = (function () {
    /**
     * Methods
     */

    /**
     * Initialization
     */
    function init() {
        var jsLink = new $REST.JSLink();

        // Set the template
        jsLink.Templates = {
            Fields: [
                {
                    Name: "GroupType",
                    EditForm: (ctx, field) => { $REST.Helper.JSLink.hideField(ctx, field, true); },
                    View: $REST.Helper.JSLink.disableQuickEdit
                }
            ]
        };

        // Register the template
        jsLink.register();
    }

    /**
     * Public Interface
     */
    return {
        init: init
    };
})();

// Write the javascript to initialize the CSR override. This will ensure it's called when MDS is enabled
document.write("<script type='text/javascript'>(function() { GDField.init(); })();</script>");