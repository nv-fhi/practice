$(function () {

    $("#tagDialog").hide();
    var data = [
        { Id: 1, Name: "Ball Handling" },
        { Id: 2, Name: "Passing" },
        { Id: 3, Name: "Shooting" },
        { Id: 4, Name: "Rebounding" },
        { Id: 5, Name: "Transition" },
        { Id: 6, Name: "Defense" },
        { Id: 7, Name: "Team Offense" },
        { Id: 8, Name: "Team Defense" },

    ];

    var viewModel = {
        //data
        tags: ko.observableArray(data),
        tagToAdd: ko.observable(""),
        selectedTag: ko.observable(null),

        // behave 

        addTag: function () {
            this.tags.push({ Name: this.tagToAdd() });
            this.tagToAdd("");
        },

        selectTag: function () {
            console.log("inside selectTag");
            viewModel.selectedTag(this);
        }

    };

    $(document).on("click", ".tag-delete", function () {
        var itemToRemove = ko.dataFor(this);
        viewModel.tags.remove(itemToRemove)
    });

    $(document).on("click", ".tag-edit", function () {
        $("#tagDialog").dialog({
            buttons: {
                Save: function () { $(this).dialog("close"); },
                Cancel: function () { $(this).dialog("close"); }
            }
        });
   
    });

    ko.applyBindings(viewModel);
});