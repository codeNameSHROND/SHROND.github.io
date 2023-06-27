<?php
$email = (isset($_POST['email'])) ? $_POST['email']  : null;
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>SHROND - CONTACT</title>

  <link href="../fontawesome-free-6.4.0-web/css/fontawesome.css" rel="stylesheet" />
  <link href="../fontawesome-free-6.4.0-web/css/brands.css" rel="stylesheet" />
  <link href="../fontawesome-free-6.4.0-web/css/solid.css" rel="stylesheet" />

  <link rel="icon" type="image/png" href="../images/favicon.png" />
  <link rel="icon" type="image/x-icon" href="../images/favicon.ico" />

  <link rel="stylesheet" href="../css/style.css" />
</head>

<body>
  <div class="loading-animation">
    <div class="loader"></div>
  </div>

  <header>
    <h1 class="logo">SHR<i class="fa-solid fa-code"></i>ND</h1>

    <div class="nav normal-nav">
      <ul>
        <li>
          <a href="#home">Chat box</a>
        </li>
        <li>
          <a href="#home">Facebook</a>
        </li>
        <li>
          <a href="#about">Messenger</a>
        </li>
        <li>
          <a href="#services">Gmail</a>
        </li>
        <li>
          <a href="#contact">Twitter</a>
        </li>
      </ul>
    </div>
  </header>
  <main>
    <section id="home" class="home">
      <form id="signUp" class="form" autocomplete="off">
        <span class="chat-shrond-text">Chat me here
        </span>
        <h2>Sign Up</h2>
        <div class="input-field">
          <i class="fa-regular fa-envelope"></i>
          <input type="email" value="<?php echo $email; ?>" placeholder="Enter your email" autocomplete="off" />
        </div>
        <div class="input-field">
          <i class="fa-solid fa-lock"></i>
          <input type="password" class="password" placeholder="Account password" autocomplete="off" />
          <div class="eye">
            <i class="fa-solid fa-eye" onclick="showHidePassword('show', 'signUp');"></i>
            <i class="fa-solid fa-eye-low-vision" onclick="showHidePassword('hide','signUp');"></i>
          </div>
        </div>
        <div class="input-field">
          <i class="fa-solid fa-key"></i>
          <input type="password" class="password" placeholder="Confirm password" autocomplete="off" />
        </div>
        <button class="submit-btn">Create Account</button>
        <p>
          Already have an account?
          <a onclick="formControl('signIn');">Sign In</a>
        </p>
        <p>
          <a href="https://www.termsandconditionsgenerator.com/live.php?token=BduVIvO0SIYlCXI7PU1dFlx78MtggyxN" class="termsConditions" target="_blank" rel="noopener noreferrer">Terms & Conditions</a>
        </p>
      </form>

      <form id="signIn" class="form" autocomplete="on">
        <span class="chat-shrond-text">Chat me here!
        </span>
        <h2>Sign In</h2>
        <div class="input-field">
          <i class="fa-regular fa-envelope"></i>
          <input type="email" value="<?php echo $email; ?>" placeholder="Enter your email" autocomplete="email" />
        </div>
        <div class="input-field">
          <i class="fa-solid fa-key"></i>
          <input type="password" class="password" placeholder="Enter your password" autocomplete="current-password" />
          <div class="eye">
            <i class="fa-solid fa-eye" onclick="showHidePassword('show', 'signIn')"></i>
            <i class="fa-solid fa-eye-low-vision" onclick="showHidePassword('hide', 'signIn')"></i>
          </div>
        </div>
        <a href="">Forgot password</a>
        <button class="submit-btn">Log In</button>
        <p>
          Don't have an account?
          <a onclick="formControl('signUp');">Sign Up</a>
        </p>
        <p>
          <a href="https://www.termsandconditionsgenerator.com/live.php?token=BduVIvO0SIYlCXI7PU1dFlx78MtggyxN" class="termsConditions" target="_blank" rel="noopener noreferrer">Terms & Conditions</a>
        </p>
      </form>
    </section>
  </main>
  <footer></footer>

  <script src="../javascript/code.jquery.com_jquery-3.7.0.min.js"></script>
  <script src="../javascript/chatBox.js"></script>
</body>

</html>