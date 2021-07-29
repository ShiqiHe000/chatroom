// query dom
const button = document.getElementById("send");
const message = document.getElementById("message");
const output = document.getElementById("output");
const name = document.getElementById("name");
const feedBack = document.getElementById("feedback");

// make connection
const socket = io("http://localhost:5000");

// emit events
button.addEventListener("click", () => {
    socket.emit("chat", {
        message: message.value,
        name: name.value,
    });
    ``;
});

message.addEventListener("change", () => {
    socket.emit("typing", name.value);
});

// listen for events
socket.on("chat", (data) => {
    output.innerHTML += `<p><b>${data.name}: </b> ${data.message}</p>`;
    feedback.innerHTML = '';
});

socket.on('typing', (data) => {
    feedBack.innerHTML = `<em>${data} is typing...</em>`
})