const socket = new WebSocket('ws://127.0.0.1:4000');

socket.onmessage = ({ data }) => {
  console.log(data);
};

const click = document.getElementById('click');

click.addEventListener('click', () => {
  socket.send('hi from client');
});
