const express = require('express');
const fetch = require('node-fetch');

const azureTTSKey = "4bf263d4b43b4b648faa6d29ad009906";
const azureRegion = "eastus"



const portfolioData = {
    "name": "Chandan S",
    "contact": {
      "phone": "91-7019558268",
      "email": "chandandandan0101@gmail.com",
      "github": "https://github.com/Chandanschandu",
      "portfolio": "https://portfolio-dtgm.vercel.app",
      "linkedin": "https://www.linkedin.com/in/chandan-s01"
    },
    "summary": "Aspiring GenAI Developer skilled in Python, Django, and modern frontend frameworks. Passionate about building intelligent, scalable applications using LLMs, RAG pipelines, and full-stack technologies. Experienced in fine-tuning transformer models, deploying ML workflows, and integrating AI into real-world solutions.",
    "experience": [
      {
        "role": "Data Engineering Intern",
        "company": "SofTronicLabs (Client:iSOCRATES)",
        "duration": "Apr 2025 – Jul 2025",
        "details": [
          "Built and maintained ETL pipelines using Airbyte and Python, including custom connector setup and automation.",
          "Integrated multiple data sources and ensured data integrity with validation and monitoring."
        ]
      },
      {
        "role": "Full Stack Intern",
        "company": "WeAssist",
        "duration": "Dec 2024 – Mar 2025",
        "details": [
          "Developed and maintained web applications using JavaScript, Vue.js, React.js, Python, Django, Frappe, Figma, HTML5, and CSS3.",
          "Worked with SQL databases and utilized Postman for API testing and integration"
        ]
      },
      {
        "role": "AI Model Trainer",
        "company": "Outlier (Part-Time)",
        "duration": "Nov 2024 – Present",
        "details": [
          "Trained AI models in Python for accuracy and performance",
          "Utilized machine learning frameworks such as PyTorch and TensorFlow for advanced solutions"
        ]
      },
      {
        "role": "Full Stack Intern",
        "company": "Kodnest",
        "duration": "Mar2024 – Sep 2024",
        "details": [
          "Collaborated on full-stack development projects using Django",
          "Created secure REST APIs using Django"
        ]
      },
      {
        "role": "Model Deployments & Hackathons",
        "details": [
          "Fine-tuned a Facebook BART Large CNN model with custom-trained data using the SAMSum dataset. The model is available at: https://huggingface.co/Chandans01/custom-chandan-samsum",
          "Fine-tuned and deployed an insurance intent classification model using DistilBERT, published at: huggingface.co/Chandans01/insurance_intent_model_03",
          "Amdocs GenAI Graduate Hackathon 2024"
        ]
      }
    ],
    "education": [
      {
        "institution": "JSS Science and Technology University (Formerly SJCE)",
        "degree": "Master of Computer Applications",
        "duration": "Feb 2023 – Dec 2024",
        "location": "Mysore, Karnataka",
        "gpa": "8.72/10.0"
      },
      {
        "institution": "YUVARAJ’S COLLEGE, MYSORE",
        "degree": "Bachelor of Computer Applications",
        "duration": "2018 – 2021",
        "location": "Mysore, Karnataka",
        "gpa": "8.7/10.0"
      },
      {
        "institution": "BGS PU College",
        "degree": "PCMC",
        "duration": "2016 – 2018",
        "location": "Mysore, Karnataka",
        "gpa": "80/100"
      }
    ],
    "skills": {
      "Programming Languages": ["Python", "Java", "C++", "C#", "SQL"],
      "Frontend Expertise": ["JavaScript", "Bootstrap", "HTML5", "CSS3"],
      "Database": ["MySQL", "PostgreSQL", "SQLite"],
      "Backend Expertise": ["Django(REST API)", "Fast API", "Flask API"],
      "Frameworks/Libraries": ["Django", "PyTorch", "React", "Vue.js", "Transformers", "Decord", "Pandas", "Scikit-learn", "NumPy"],
      "UI/UX Tools": ["Figma", "Canva2", "draw.io"],
      "DE/Tools": ["Visual Studio", "Jira", "IntelliJ IDEA", "Jupyter Notebook", "Raplet", "GitHub", "Hugging Face", "Postman"],
      "Version Control and Deployement": ["Git and Github", "pytest", "Vercel", "Render", "Python Anywhere", "Netlify"]
    },
    "projects": [
      {
        "title": "Driven Video Summarization with Transformer Model",
        "description": "Designed and implemented a video summarization pipeline that extracts frames from videos, generates descriptions using BLIP2, and refines them into concise summaries with a custom-trained model. Leveraged advanced AI techniques, including vision-language models and transformers, to enable intelligent understanding and summarization of video content.",
        "technologies": ["Python", "Machine Learning", "Artificial Intelligence", "TensorFlow", "PyTorch", "BLIP2 (Salesforce)", "Decord", "XML", "Transformers"]
      },
      {
        "title": "Voice-Activated Assistant with Speech Recognition and Task Automation",
        "description": "Built a voice-controlled assistant using Python that listens to user commands, performs web searches, opens websites and applications, retrieves information, and provides Wikipedia summaries. Incorporated AI-driven speech recognition and natural language understanding using machine learning to enable seamless voice interaction and intelligent automation.",
        "technologies": ["Python", "Machine Learning", "Artificial Intelligence", "TensorFlow", "pyttsx3", "Speech Recognition", "Wikipedia API"]
      },
      {
        "title": "Car Booking Application with Django",
        "description": "Developed a full-stack web application for vehicle bookings, sales, and services with real-time data updates and a user-friendly UI. Implemented user authentication, role-based access, dynamic booking management, and database integration.",
        "technologies": ["Django", "Python", "DRF", "MySQL", "HTML5", "CSS3", "JavaScript", "Bootstrap", "Django Templates", "Git", "Postman"]
      },
      {
        "title": "REST API Development for Inventory Management",
        "description": "Developed secure and scalable REST APIs with CRUD operations, versioning, and pagination for large datasets. Integrated token-based authentication and optimized queries for performance",
        "technologies": ["Django REST Framework", "MySQL", "Postman", "Swagger", "Git"]
      }
    ],
    "certificates": [
      "Python Essentials Certificate from CISCO Skills for All(2024): A course covering advanced Python concepts, including Object-Oriented Programming (OOP) and portfolio development.",
      "SQL Certificate from Infosys Springboard (2024): A certification covering SQL fundamentals, database management, querying techniques, and relational database concepts."
    ],
    "methodologies": [
      "Object-Oriented Programming(OOP)", "Algorithms", "Data Structures", "Machine Learning", "Multithreading", "Web Development", "REST APIs", "Agile Methodlogies", "Software Development Life Cycle (SDLC)"
    ],
    "languages": {
      "English": "Professional",
      "Kannada": "Native"
    },
    "interests": [
      "Open-Source Software", "Cricket", "Teaching", "Vector Art", "Video Editing", "Fitness", "Competitive Gamer: Achieved Conqueror Rank in PUBG Mobile Season 9", "Arcade Racer Addict: Long-time player and fan of the Need for Speed series"
    ]
  };

const app = express();
app.use(express.json());

// Serve static files if needed
app.use(express.static('.'));

// TTS token endpoint
app.get('/api/tts-token', (req, res) => {
  res.json({ key: azureTTSKey, region: azureRegion });
});

// Chat endpoint
app.post('/api/v1/chat', async (req, res) => {
  try {
    const systemPrompt = `You are an AI assistant for a digital avatar of Chandan S. Your ONLY purpose is to answer questions about Chandan S based on the JSON data provided below. You must adhere to the following rules strictly: 1. Answer ONLY from the provided JSON data. Do not use any external knowledge. 2. If the user's question cannot be answered using the data, politely state that you do not have that information. 3. For simple greetings like 'hi' or 'hello', respond with a brief, friendly greeting and gently guide the conversation back to your purpose. 4. Your responses MUST be plain text only. It is forbidden to use any markdown formatting or special characters like '*', '#', or '-'. Here is the data:\n\n${JSON.stringify(portfolioData)}`;

    const response = await fetch("https://api.perplexity.ai/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer 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"
      },
      body: JSON.stringify({
        model: "sonar",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: req.body.query }
        ]
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(response.status).send(errorText);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error proxying request:", error);
    res.status(500).json({ error: "Failed to proxy request" });
  }
});

// Export the Express app for Vercel
module.exports = app;
