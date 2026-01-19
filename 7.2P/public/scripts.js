const socket = io();

function sendMessage() {
  const msg = document.getElementById('messageInput').value;
  socket.emit('sendMessage', msg);
}

socket.on('newMessage', (msg) => {
  const li = document.createElement('li');
  li.innerText = msg;
  document.getElementById('messages').appendChild(li);
});