<?php
// this is the source code for php file part of ANSI art viewer
// demo for jQuery Terminal
header('Content-Type: text/json');
if (isset($_GET['action'])) {
    if ($_GET['action'] == 'ls') {
        system('dir /d /a');
    } elseif ($_GET['action'] == 'dir') {
        system('dir');
        
    }
} else if (isset($_GET['file']) && !preg_match("/\.\./")) {
    if (isset($_GET['raw'])) {
        echo file_get_contents($_GET['file']);
    } else if (preg_match("/^[a-z0-9\-\._]+$/i", $_GET['file'])) {
        system(sprintf("dir", $_GET['file']));
    }
} else if (isset($_GET['file']) && preg_match("/^[a-z0-9\-\._]+$/i", $_GET['file'])) {
    system(sprintf("dir", $_GET['file']));
} else {
    echo file_get_contents(__FILE__);
}
?>