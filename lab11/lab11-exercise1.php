<html lang="en">

<head>

	<!-- Latest compiled and minified Bootstrap Core CSS -->
	<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">

	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<title>Exercise 11-1 | Using Cookies</title>
</head>

<body>
	<header>
	</header>


	<?php
	function getLoginForm()
	{
		return "
<form action='' method='post' role='form'>
<div class ='form-group'>
  <label for='username'>Username</label>
  <input type='text' name='username' class='form-control'/>
</div>
<div class ='form-group'>
  <label for='pword'>Password</label>
  <input type='password' name='pword' class='form-control'/>
</div>
<input type='submit' value='Login' class='form-control' />

</form>";
	}
	?>
	<div class="container theme-showcase" role="main">
		<div class="jumbotron">
			<h1>
				<?php
				session_start();
				if ($_SERVER["REQUEST_METHOD"] == "POST") {
					if (validLogin()) {
						$_SESSION['Username'] = $_POST['username'];
					} else {
						echo "login unsuccessful";
					}
					echo "<script language=JavaScript> location.replace(location.href);</script>";
				}
				if (isset($_SESSION['Username'])) {
					echo "Welcome " . $_SESSION['Username'];
				} else {
					echo "No Post detected";
				}
				function validLogin()
				{
					include("config.php");
					// $pdo = new PDO(DBCONNSTRING, DBUSER, DBPASS);
					// //very simple (and insecure) check of valid credentials. 
					// $sql = "SELECT * FROM Credentials WHERE Username=:user and Password=:pass";

					// $statement = $pdo->prepare($sql);
					// $statement->bindValue(':user', $_POST['username']);
					// $statement->bindValue(':pass', $_POST['pword']);
					// $statement->execute();
					$name = $_POST['username']; //post获得用户名表单值
					$password = $_POST['pword']; //post获得用户密码单值
					$sql = "select * from Credentials where username = '$name' and password='$password'"; //检测数据库是否有对应的username和password的sql
					$result = mysqli_query($mysqli, $sql); //执行sql
					$rows = mysqli_num_rows($result); //返回一个数值
					if ($rows > 0) {
						return true;
					}
					return false;
				}

				?>

			</h1>

		</div>
		<?php
		if (!isset($_SESSION['Username'])) {
			echo getLoginForm();
		} else {
			echo "This is some content";
		}

		?>
		<br>
		<a href="logout.php">logout</a>

	</div>
</body>

</html>