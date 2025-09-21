<img width="1920" height="912" alt="image" src="https://github.com/user-attachments/assets/b1ac44bc-fa2d-4954-8b36-b4fe29beed13" /># FemmeForward AI

FemmeForward AI is a chatbot designed to be a supportive resource hub for women in technology. It provides information on events, scholarships, mentorship opportunities, and community forums.

# FemmeForward AI

FemmeForward AI is a chatbot designed to be a supportive resource hub for women in technology. It provides information on events, scholarships, mentorship opportunities, and community forums.

**Deployment Link** [https://femmeforwardai.netlify.app/]

---

!(<img width="1920" height="912" alt="image" src="https://github.com/user-attachments/assets/ff6eefb3-1ad6-44c5-abc0-63be676bbef4" />
) <!-- It's a good idea to replace this with an actual screenshot of your app -->

## ✨ Features

- **🤖 AI Assistant:** A friendly chatbot named Athena, tailored to assist women in tech.
- **📚 Resource Hub:** Get instant information on conferences, scholarships, mentorship programs, and online communities.
- **💡 Conversation Starters:** Suggestion chips to easily kickstart a conversation.
- **✨ Sleek UI:** A clean, responsive, and aesthetically pleasing chat interface built with Tailwind CSS.
- **🔒 Secure:** Your API key is stored locally in your browser's session storage and is not sent to any server.

## 🛠️ Tech Stack

- **Frontend:** [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com/)
- **AI:** [Google Gemini API](https://ai.google.dev/) (`@google/genai`)

## 🚀 Getting Started

To run this project locally, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- A package manager like [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A Google Gemini API key. You can get one from [Google AI Studio](https://aistudio.google.com/app/apikey).

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/femmeforward-ai.git
    cd femmeforward-ai
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal) to view the app in your browser.

4. **Enter your API Key:**
    When you first launch the application, it will prompt you to enter your Google Gemini API key. The key is stored in your browser's session storage for the duration of your session.


## ☁️ Deployment

This project is designed to be run locally or can be deployed to any static site hosting service (like Vercel, Netlify, or GitHub Pages).

**Note:** Since the application requires each user to enter their own API key, it is best suited for personal use or demonstrations rather than a multi-user public deployment.

## 📂 Project Structure

```
/
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable React components
│   ├── services/         # API service for Gemini
│   ├── App.tsx           # Main application component
│   ├── index.tsx         # React entry point
│   ├── constants.ts      # Static data (prompts, suggestions)
│   └── types.ts          # TypeScript type definitions
├── index.html            # Main HTML file
├── README.md             # You are here!
└── ...                   # Other config files
```

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.


