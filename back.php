<?php
/****************************************************
 * Description: 
 * Author:			黄锦东
 * Email:			deDoyle@163.com
 * Created:			2014-11-12 16:37
 * Last modified:	2014-11-12 16:37
 * Filename:		back.php
 ***************************************************/
$num = rand(1,10000);
$data = array(
    'cmtid'=> $num,
    'result'=> '1'
);
echo json_encode($data);
