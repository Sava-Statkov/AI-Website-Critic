// Get elements
const form = document.getElementById("critic-form");
const urlInput = document.getElementById("website-url");
const promptBox = document.getElementById("prompt-output");
const promptText = document.getElementById("ai-prompt");
const copyBtn = document.getElementById("copy-btn");
const toggleBtn = document.getElementById("toggle-mode-btn");

// Section for critique display
const critiqueOutput = document.createElement("div");
critiqueOutput.id = "critique-output";
critiqueOutput.style.marginTop = "2rem";
critiqueOutput.style.whiteSpace = "pre-wrap";
document.querySelector(".container").appendChild(critiqueOutput);

// Form submit behavior
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const url = urlInput.value.trim();

  if (!url) return;

  // Show loading text
  critiqueOutput.innerText = "⏳ Analyzing website, please wait...";

  try {
    const response = await fetch("http://127.0.0.1:5000/api/critic", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });

    const data = await response.json();

    if (data.critique) {
      critiqueOutput.innerHTML = `<strong>What the AI thinks about this website:</strong><br><br>${data.critique}`;
    } else if (data.error) {
      critiqueOutput.innerText = `❌ Error: ${data.error}`;
    }
  } catch (error) {
    critiqueOutput.innerText = `❌ Network error: ${error.message}`;
  }
});


// Copy button behavior
copyBtn.addEventListener("click", () => {
  promptText.select();
  document.execCommand("copy");
  copyBtn.innerText = "Copied!";
  setTimeout(() => (copyBtn.innerText = "Copy Prompt"), 2000);
});

// Toggle light/dark mode behavior
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    toggleBtn.innerHTML = "Light Mode";
  } else {
    toggleBtn.innerHTML = "Dark Mode";
  }
});
