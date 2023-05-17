var password = prompt("Please enter the password:");
if (!password) {
  // Display an error message
  alert("Password is required to access the protected page");
  return;
}
else {
  // Check the password here
  if (password === 'secret') {
    // Redirect the user to the protected page
    window.location.replace("mak.html");
    return;
  } else {
    // Display an error message
    alert("Invalid password. Please try again." + password);
    return;
  }
}
