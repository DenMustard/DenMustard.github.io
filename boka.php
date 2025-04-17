 <?php
//--------------------------Set these paramaters--------------------------
// Subject of email sent to you.
$subject = 'Bokning Tankeställaren';
// Your email address. This is where the form information will be sent.
$emailadd = 'anders.ullholm@gmail.com';
// From email address. This is who the form information will be sent from.
$email_from = $_POST['email'];
// Where to redirect after form is processed.
$url = 'javascript://history.go(-1)';
// Makes all fields required. If set to '1' no field can not be empty. If set to '0' any or all fields can be empty.
$req = '0';
// --------------------------Do not edit below this line--------------------------
$text = "Results from Contact form:\n\n";
$space = ' ';
$line = '
';
foreach ($_POST as $key => $value)
{
if ($req == '1')
{
if ($value == '')
{echo "$key is empty";die;}
}
$j = strlen($key);
if ($j >= 22)
{echo "Name of form element $key cannot be longer than 22 characters";die;}
$j = 22 - $j;
for ($i = 1; $i <= $j; $i++)
{$space .= ' ';}
$value = str_replace('\n', "$line", $value);
$conc = "{$key}:$space{$value}$line";
$text .= $conc;
$space = ' ';
}
// if the 'Gotcha' field is empty 
if(isset($_POST['gotcha']) && $_POST['gotcha'] == ''){
     // then send the form to your email
mail($emailadd, $subject, $text, 'From: '.$email_from.'');
echo '<META HTTP-EQUIV=Refresh CONTENT="0; URL='.$url.'">';
}
?>
