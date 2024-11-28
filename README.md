Here’s the GitHub-friendly README for your project without a table of contents:

---

# **Transl8r: Real-Time Multilingual Speech Translation System**

Transl8r is a real-time multilingual speech translation application designed to bridge language barriers effortlessly. Built using React.js (frontend) and Flask (backend), it enables seamless translation of spoken language into text across multiple languages, providing an intuitive and powerful tool for global communication.

---

## **Features**

- **Real-Time Translation**: Supports real-time speech-to-text translation in multiple languages.
- **Speech Recognition**: Powered by AssemblyAI for accurate speech-to-text conversion.
- **AI-Powered Translations**: Utilizes OpenAI models for high-quality, context-aware translations.
- **Text-to-Speech**: Converts translated text back into speech for a natural conversational flow.
- **Modern UI**: A responsive, user-friendly interface built with Vite, React.js, and DaisyUI.
- **Customizable Themes**: Offers multiple themes and language-specific options.

---

## **Technologies Used**

### **Frontend**  
- Vite  
- React.js  
- DaisyUI  

### **Backend**  
- Flask  
 

### **APIs**  
- AssemblyAI (Speech Recognition)  
- OpenAI (Language Translation)

---

## **Setup and Installation**

Follow these steps to set up and run Transl8r on your local machine.

### **Prerequisites**
- **Node.js** and **npm** for the frontend.
- **Python 3.7+** for the backend.
- API keys for AssemblyAI and OpenAI.

### **Cloning the Repository**
1. Clone the repository to your local machine:  
   ```bash
   git clone https://github.com/yourusername/Transl8r.git
   ```
2. Navigate to the project directory:  
   ```bash
   cd Transl8r
   ```

### **Frontend Setup**
1. Navigate to the `FRONTEND` directory:  
   ```bash
   cd FRONTEND
   ```
2. Install dependencies:  
   ```bash
   npm install
   ```
3. Start the development server:  
   ```bash
   npm run dev
   ```
   The frontend will be accessible at `http://localhost:5173`.

### **Backend Setup**
1. Navigate to the `BACKEND` directory:  
   ```bash
   cd BACKEND
   ```
2. Install required Python packages:  
   ```bash
   pip install -r requirements.txt
   ```
3. Start the backend server:  
   ```bash
   python main.py
   ```
   The backend will run on `http://localhost:5000`.

### **Environment Variables**
1. Create a `.env` file in the `BACKEND` directory.
2. Add the following keys:  
   ```env
   ASSEMBLYAI_API_KEY=your_assemblyai_key_here
   OPENAI_API_KEY=your_openai_key_here
   ```

---

## **Usage**

### **Starting the Application**
1. Ensure both the frontend and backend servers are running.
2. Open `http://localhost:5173` in your browser to access the application.

### **Using Transl8r**
1. Select the source and target languages from the dropdown menu.
2. Click the **Record** button to start speech recognition.
3. View the real-time transcription and translation on the screen.
4. Listen to the translated text using the **Play** button.

---

## **User Manual**

1. **Language Selection**:  
   Choose source and target languages from the dropdown menus.

2. **Speech Recording**:  
   Use the **Record** button to start recording. Once complete translation button will appear.

3. **Speech Translation**:  
    Use the **Translate** button to convert the recorded speech into translated speech. Once the translated speech is received, it will start playing automatically.

4. **Translation Playback**:  
   Click the **Play** button to hear the translated speech again.

4. **Custom Themes**:  
   Switch between light and dark themes via the settings menu.

---

## **Contributing**

Contributions are welcome! Feel free to fork the repository, make your changes, and submit a pull request. Please ensure that your code follows the project's coding standards.

---

## **License**

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

## **Acknowledgments**

Special thanks to:  
- AssemblyAI for speech-to-text services.  
- OpenAI for language translation and text generation.  
- Vite, React.js, and Flask for providing robust development frameworks.

