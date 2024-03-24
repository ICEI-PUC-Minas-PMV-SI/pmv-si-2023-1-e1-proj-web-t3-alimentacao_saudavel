
import jwt_decode from 'jwt-decode';
function handleCredentialResponse(response) {
  var decoded = jwt_decode(response);console.log(decoded);
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
