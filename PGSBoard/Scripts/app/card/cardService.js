$(document).ready(function () {
    $('.card').on('click', '.card__remove-card-btn', deleteCard);
    $('button').on('click', showForm);
    $('.list').on('click', '.list__remove-list-btn', deleteList);
    $('.board__remove-board-btn').on('click', deleteBoard);

    function showForm(event) {
        event.stopPropagation();
        $(this).prev().removeClass("hidden-form");
    }

    function deleteBoard(event) {
        event.stopPropagation();
        var boardId = +$(this).data("board-id");

        if (confirm("Usuwasz tablicę, jesteś pewien?")) {
            $.ajax({
                method: "DELETE",
                url: "/Board/DeleteBoard",
                data: { boardId: boardId },
                success: onSuccess,
                error: onError
            });
        } else {
            return;
        }

        function onSuccess(data) {
            if (isNaN(data) || data === 0) {
                return;
            }
            alert("Usunięto");
            window.location = "http://localhost:59848/";
        }

        function onError() {
        }
    }

    function deleteList(event) {
        event.stopPropagation();
        var listId = +$(this).closest(".list").data("list-id");

        $.ajax({
            method: "DELETE",
            url: "/Board/DeleteList",
            data: { listId: listId },
            success: onSuccess,
            error: onError
        });

        function onSuccess(data) {
            if (isNaN(data) || data === 0) {
                return;
            }

            $(event.target).closest(".list").remove();
        }

        function onError(data) { }
    }

    function deleteCard(event) {
        var cardId = +$(event.target).data('cardId');

        $.ajax({
            method: "DELETE",
            url: "/Board/DeleteCard",
            success: onSuccess,
            error: onError,
            data: { cardId: cardId }    
        });

        function onSuccess(data) {
            if (isNaN(data) || data === 0) {
                return;
            }

            $(event.target).closest(".card").remove();
        }

        function onError(data) { }
    }
});
