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
        // Register the JSLink Template
        $REST.Helper.JSLink.register({
            Templates: {
                Fields: {
                    GroupType: {
                        EditForm: (ctx, field) => { $REST.Helper.JSLink.hideField(ctx, field, true); },
                        View: $REST.Helper.JSLink.disableQuickEdit
                    }
                }
            }
        });
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