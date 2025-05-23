const socket = io("http://localhost:3333");

function onLoad() {
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get("name");
  const avatar = urlParams.get("avatar");
  const email = urlParams.get("email");

  console.log(name, avatar, email);

  socket.emit("start", {
    email,
    name,
    avatar,
  });
}

onLoad();
