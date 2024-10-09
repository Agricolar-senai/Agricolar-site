(function($) {
    $(".contactform").on("submit", function(event) {
        event.preventDefault(); // Previne o comportamento padrão do formulário
        $(".output_message").text("Sending..."); // Mensagem inicial enquanto envia

        var form = $(this);
        $.ajax({
            url: form.attr("action"),
            method: form.attr("method"),
            data: form.serialize(),
            success: function(result) {
                $(".form-inputs").css("display", "none");
                $(".box p").css("display", "none");
                $(".contactform").find(".output_message").removeClass("error").addClass("success");

                if (result === "success") {
                    $(".output_message").text("Message Sent!");
                } else {
                    $(".tabs-container").css("height", "440px");
                    $(".contactform").find(".output_message").removeClass("success").addClass("error");
                    $(".output_message").text("Error Sending!");
                }
            },
            error: function() {
                $(".tabs-container").css("height", "440px");
                $(".contactform").find(".output_message").removeClass("success").addClass("error");
                $(".output_message").text("Error Sending!");
            }
        });

        return false; 
    });
})(jQuery);
