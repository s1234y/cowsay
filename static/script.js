function getCowsay() {
    let msg = document.getElementById("message").value.trim();
    let cowType = document.getElementById("cow-type").value;

    if (!msg) return alert("Please enter a message!");

    let chatBox = document.getElementById("chat-output");
    chatBox.innerHTML = '<p>🐄 Thinking...</p>';

    fetch(`/cowsay?message=${encodeURIComponent(msg)}&type=${cowType}`)
        .then(response => response.json())
        .then(data => {
            chatBox.innerHTML = `<pre>${data.message}</pre>`;
            chatBox.classList.add("shake"); // Add shake effect
            setTimeout(() => chatBox.classList.remove("shake"), 500); // Shake for 0.5s
        })
        .catch(error => {
            console.error("Error calling API:", error);
            chatBox.innerHTML = '<p style="color:red;">Error calling API!</p>';
        });
}
