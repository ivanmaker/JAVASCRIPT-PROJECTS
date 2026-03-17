function displayCharacter(role){
    let characterRole = role.getAttribute("data-character-role");
    alert(`Someone who is ${role.innerHTML}, might be a ${characterRole}!`);
}