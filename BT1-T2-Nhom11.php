<?php   
    $user = $_POST['user'];
    $pass = $_POST['pass'];

    if($user == 'nhom11' && $pass == 'webthatdongian'){
        echo ('login successfully !');
    }
    else {
        echo('Invalid username & password.');
    }
?>