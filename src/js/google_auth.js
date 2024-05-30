
async function handleCredentialResponse(response) {
  var tokenParts = response.credential.split('.');
  var payload = tokenParts[1];
  var decodedPayload = JSON.parse(atob(payload));
  localStorage.setItem('decodedPayload', JSON.stringify(decodedPayload));
  await loginGoogle(decodedPayload);
}
window.onload = function () {
  google.accounts.id.initialize({
    client_id: "620866819132-imacrtavej2igdj3acu5l78ksgig5es0.apps.googleusercontent.com",
    callback: handleCredentialResponse
  });
  google.accounts.id.renderButton(
    document.getElementById("google-signin-button"),
    { 
      theme: 'filled_black',
      size: 'small',
      type: 'standard',
      shape: 'pill',
      text: '${button.text}',
      logo_alignment: 'left'
  }
  );
  google.accounts.id.prompt();
}
