// this first line creates a function out of this entire page which will
// be 'callbacked' after everything else has loaded. That's what the $ is signifying
$(() => {

    $('#submit').on('click', () => {
        let name = $('#name')
        let email = $('#email')
        let phone = $('#phone')
        
        let required = [name, email, phone]
    
        for (let i = 0; i < required.length; i++) {
            if (required[i].val() == '') {
                $('#message').addClass("warning").html("Please Fill Out Required Fields");
                required[i].prev().addClass("warning");
            } else {
                required[i].prev().removeClass("warning");
                
            }
          }
          if ($('label.warning').length == 0) {
            
        $('#form').remove()
        $('#pre-form').html("Thanks for your feedback!")
          }
    });


   
});