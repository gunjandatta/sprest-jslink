"use strict";

/**
 * JSLink: Form Customization
 */
var GDForm = (function () {
    /**
     * Methods
     */

    // Method to set the default value
    function setDefaultValue(ctx, field) {
        // Default the value
        ctx.CurrentFieldValue = "Gunjan";

        // Render the field
        return $REST.Helper.JSLink.renderField(ctx, field);
    }

    /**
     * Initialization
     */
    function init() {
        var jsLink = new $REST.JSLink();

        // Set the template
        jsLink.Templates = {
            Fields: [
                {
                    Name: "Title",
                    EditForm: setDefaultValue,
                    NewForm: setDefaultValue
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
document.write("<script type='text/javascript'>(function() { GDForm.init(); })();</script>");