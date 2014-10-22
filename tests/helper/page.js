var Page = {
    title : 'a title',
    description : 'Some kind of description description',
    textArea : $('div#textArea'),
    addButton : $('button#addTextButton'),

    init : function() {
        console.log("page created");
    }
};

Page.init();