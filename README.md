# AI Website Critic 

A fun AI-powered website reviewer.
Enter a URL and get a sarcastic, but surprisingly insightful critique instantly.

---

##  Description

**AI Website Critic** is a web application that combines a responsive frontend with a Python Flask backend.  
It sends user-provided website URLs to OpenAI's GPT-3.5 model, which then generates a playful and witty review.  

**Main Mechanisms:**
- **Frontend (HTML, CSS, JavaScript):** Handles URL submission, shows loading states, toggles between light and dark mode, and displays results.
- **Backend (Flask Python API):** Processes the URL, crafts a prompt, communicates with OpenAI, and sends the AI's critique back.
- **OpenAI API Integration:** Securely accesses GPT models using environment variables.
- **Environment Variables (.env):** Protects the OpenAI API key from exposure.

---

##  Features

- Instant and funny website reviews
- Light/Dark mode toggle
- Smooth transitions and user experience
- Sarcastic AI prompt customization
- Easy "Copy Prompt" button

---

## Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **Python 3.11**
- **Flask (Backend)**
- **OpenAI Chat API**
- **dotenv (.env file security)**
