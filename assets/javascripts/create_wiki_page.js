$(document).ready(function($) {
    if($(".wiki-page").length > 0) {
        var newLink = $("<a href=\"#\">New</a>");
        $($("#content .contextual")[0]).prepend(newLink);
        $(newLink).click(function() {
            var parent = $(this).parent();
            var form = $("<form></form>");
            form.append("<input type=\"text\">");
            $(form).submit(function(e) {
                e.preventDefault();
                var name = $($(form).children()[0]).val();
                var splitPath = window.location.pathname.split("/", 5);
                var wikiPath = "/" + splitPath[1] + "/" + splitPath[2] + "/"
                        + splitPath[3];
                var parentName = splitPath[4];
                var newPathname = "/" + name + "?parent=" + parentName;
                window.location.assign(wikiPath + newPathname);
                return false;
            });

            $(this).replaceWith(form);
            form.children("input").focus();
            return false;
        });
    }
});
