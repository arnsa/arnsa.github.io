$("#todos").on("click", ".fa-pencil", function(event) {
    $(this).parent().attr('contentEditable', true);

    var range = document.createRange();
    var sel = window.getSelection();
    range.setStart($(this).parent()[0], 3);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);

    event.stopPropagation();
})

$("#todos").on("keypress", "li", function(event) {
    if(event.which === 13)
        $(this).attr('contentEditable', false);
});

$("#todos").on("focusout", "li", function(event) {
    $(this).attr('contentEditable', false);
});

$("#todos").on("click", ".fa-trash", function() {
    $(this).parent().fadeOut(function() {
        $(this).remove();
    });
    event.stopPropagation();
});

$("#todos").on("click", "li", function() {
    $(this).toggleClass("done");
    event.stopPropagation();
});

$("input[type='text']").on("keypress", function(event) {
    if(event.which === 13) {
        $("#todos").append("<li><i class=\"fa fa-trash\"></i><i class=\"fa fa-pencil\"></i> " + $(this).val() + "</li>");
        $(this).val("");
    }
})

$("h1 i").on("click", function() {
    $("input[type=text]").fadeToggle("slow");
});
