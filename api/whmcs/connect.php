<?php


/*var_dump($_POST);
$username = $_POST['username'];
$password = $_POST['password'];*/

/**
 * WHMCS Sample Local API Call
 *
 * @package    WHMCS
 * @author     WHMCS Limited <development@whmcs.com>
 * @copyright  Copyright (c) WHMCS Limited 2005-2016
 * @license    http://www.whmcs.com/license/ WHMCS Eula
 * @version    $Id$
 * @link       http://www.whmcs.com/
 */



function product(){
    $command = 'GetProducts';
    $postData = array(
        'gid' => '1',
    );
    $adminUsername = 'TheMaximeSan';

    $results = localAPI($command, $postData, $adminUsername);

    return $results['products'];
}








/*$command = 'ValidateLogin';
$postData = array(
    'email' => $username,
    'password2' => $password,
);

$results = localAPI($command, $postData);
var_dump($results);
print_r($results);

if ($results['result'] == "success"){

    $_SESSION['user-id'] = $results['userid'];
    $_SESSION['user-email'] = $username;
    $_SESSION['user-passhash'] = $results['passwordhash'];


}

var_dump($_SESSION);*/