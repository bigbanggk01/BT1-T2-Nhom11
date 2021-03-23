$(document).ready(function(){
    $("#login_button").mouseup(function(){
        $('#login_button').hide();
        $('#login_form').show();
    })
    $("#close_button").mouseup(function () {
        $('#login_form').hide();
        $('#login_button').show();
        $('#username').val("");
        $('#password').val("");
    })
    $("#login_click").mouseup(function(){
        var user = $('#username').val();
        var pass = $('#password').val();
        
        if(user=="" || pass==""){
            alert('Not enough information.');
        }
        else {
            if(validate(user,pass)==true){
                if(pass.length < 8 ){
                    alert('Your password < 8 characters');
                }
                else{
                    $.post("BT1-T2-Nhom11.php", {
                        user:user,
                        pass:pass
                    },function(data,status){
                        if(data =='login successfully !')
                        {
                            alert(data);
                        }
                        else alert('Invalid username & password.');
                    });
                }   
            }
            else alert('Your username or password have special characters.');
        };
    });

});

function validate(user, pass){
    if(/[^_a-zA-Z0-9\-]/.test(user) || /[^_a-zA-Z0-9\-]/.test(pass)) return false;
    return true;     
}



