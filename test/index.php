<?php
$db = new mysqli('localhost','root','','gov');
	$hall = 1234567890;
	$q = $db->query("SELECT * FROM users WHERE hall_number ='$hall'"); 
	while ($r = $q->fetch_object()) {
		echo $r->sub2;
	}
?>