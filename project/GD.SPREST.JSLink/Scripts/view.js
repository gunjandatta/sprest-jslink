"use strict";

/**
 * JSLink: View Customization
 */
var GDView = (function () {
    /**
     * Methods
     */

    // Method to add tags above and below the body
    function body(ctx) {
        // Render the default html
        var html =
            "<tbody><tr><td colspan='99'><h2 style='background-color:orange; color:white;'>Above Body</h2></td></tr></tbody>" +
            (RenderBodyTemplate ? RenderBodyTemplate(ctx) : "") +
            "<tbody><tr><td colspan='99'><h2 style='background-color:orange; color:white;'>Below Body</h2></td></tr></tbody>";

        // Return the html
        return html;
    }

    // Method to add tags above and below the footer
    function footer(ctx) {
        // Render the default html
        var html = "<h1 style='background-color:blue; color:white;'>Above Footer</h1>" +
            RenderFooterTemplate(ctx) +
            "<h1 style='background-color:blue; color:white;'>Below Footer</h1>";

        // Return the html
        return html;
    }

    // Method to add tags above and below the group
    function group(ctx) {
        var group = document.createElement("table");

        // Render the default html
        group.innerHTML = RenderGroupTemplate(ctx);

        // Get the row
        var row = group.querySelector("tr");

        // Add the tags
        row.innerHTML =
            "<td><span style='background-color:purple; color:white;'>Before Group</span></td>" +
            row.innerHTML +
            "<td><span style='background-color:purple; color:white;'>After Group</span></td>";

        // Return the html
        return group.innerHTML;
    }

    // Method to add tags above and below the header
    function header(ctx) {
        // Render the default html
        var html =
            "<h1 style='background-color:brown; color:white;'>Above Header</h1>" +
            RenderHeaderTemplate(ctx) +
            "<h1 style='background-color:brown; color:white;'>Below Header</h1>";

        // Return the html
        return html;
    }

    // Method to add tags above and below the item
    function item(ctx) {
        // Render the default html
        var html =
            "<tr><td><h2 style='background-color:green; color:white;'>Above Item</h2></td></tr>" +
            RenderItemTemplate(ctx) +
            "<tr><td><h2 style='background-color:green; color:white;'>Below Item</h2></td></tr>";

        // Return the html
        return html;
    }

    /**
     * Initialization
     */
    function init() {
        var jsLink = new $REST.JSLink();
        jsLink.Templates = {
            BaseViewId: 2,
            Body: body,
            Footer: footer,
            Group: group,
            Header: header,
            Item: item
        };

        // Apply the customization
        SPClientTemplates.TemplateManager.RegisterTemplateOverrides(jsLink.getTemplate());
    }

    /**
     * Public Interface
     */
    return {
        init: init
    };
})();

// Write the javascript to initialize the CSR override. This will ensure it's called when MDS is enabled
document.write("<script type='text/javascript'>(function() { GDView.init(); })();</script>");