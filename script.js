// Function to send message and display it
function sendMessage() {
    const userMessage = document.getElementById("user-input").value;

    if (userMessage.trim() === "") return; // Prevent sending empty messages

    // Display the user's message
    displayMessage(userMessage, "user");

    // Clear input field
    document.getElementById("user-input").value = "";

    // Simulate bot's response (you can connect this to your backend later)
    setTimeout(() => {
        const botResponse = "Hello, I'm Blitz! How can I assist you today?"; // Static response for now
        displayMessage(botResponse, "bot");
    }, 1000); // Simulate a slight delay for bot response
}

// Function to display a message
function displayMessage(message, sender) {
    const chatBox = document.getElementById("chat-box");

    const messageElement = document.createElement("div");
    messageElement.classList.add("message");

    if (sender === "user") {
        messageElement.classList.add("user-message");
    } else if (sender === "bot") {
        messageElement.classList.add("bot-message");
    }

    messageElement.textContent = message;
    chatBox.appendChild(messageElement);

    // Scroll to the bottom of the chat window
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Auto-focus the input field when the page loads
window.onload = () => {
    document.getElementById("user-input").focus();
};
