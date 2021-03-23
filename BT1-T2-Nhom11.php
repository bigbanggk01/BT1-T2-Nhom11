<?php
/*    README:
*     github full project link: https://github.com/bigbanggk01/BT1-T2-Nhom11
*     error 1: Not enough information.   Username và password không được chứa khoảng trắng
*     error 2: Invalid username & password. Username và mật khẩu không hợp lệ khi người dùng nhập sai NhomX và webthatdongian
*     error 3: Your password < 8 characters. Password ít hơn 8 ký tự
*     error 4: Your username or password have special characters. chứa ký tự đặc biệt trừ - và _ 
*       *trường hợp - và _ sẽ rơi vào error2.
*/    

    $user = $_POST['user'];
    $pass = $_POST['pass'];

    if($user == 'nhom11' && $pass == 'webthatdongian'){
        echo ('login successfully !');
    }
    else {
        echo('Invalid username & password.');
    }
?>