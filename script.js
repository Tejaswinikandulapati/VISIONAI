// =========================
// VisionAI Chat Assistant
// =========================

function openChat() {

    const modal =
    document.getElementById("chatModal");

    if(modal){
        modal.style.display = "flex";
    }

}

function closeChat() {

    const modal =
    document.getElementById("chatModal");

    if(modal){
        modal.style.display = "none";
    }

}

function sendMessage() {

    const input =
    document.getElementById("messageInput");

    const chatBody =
    document.getElementById("chatBody");

    if(!input || !chatBody) return;

    const text =
    input.value.trim();

    if(text === "") return;

    // User Message

    chatBody.innerHTML += `
    <div class="message">
        <div class="bubble">
            👤 ${text}
        </div>
    </div>
    `;

    let reply =
    "I'm VisionAI. Ask me about software careers, interviews, projects and skills.";

    const msg =
    text.toLowerCase();

    if(msg.includes("software engineer")){

        reply =
        "Software Engineer Roadmap: Programming → DSA → DBMS → OOPs → Projects → Interviews";

    }

    else if(msg.includes("frontend")){

        reply =
        "Frontend Developer Roadmap: HTML → CSS → JavaScript → React → Projects";

    }

    else if(msg.includes("backend")){

        reply =
        "Backend Developer Roadmap: Node.js → Express → SQL → APIs → Deployment";

    }

    else if(msg.includes("full stack")){

        reply =
        "Full Stack Roadmap: HTML → CSS → JavaScript → React → Node.js → Database";

    }

    else if(msg.includes("ai")){

        reply =
        "AI Engineer Roadmap: Python → Machine Learning → Deep Learning → Generative AI";

    }

    else if(msg.includes("data analyst")){

        reply =
        "Data Analyst Roadmap: Excel → SQL → Power BI → Python";

    }

    else if(msg.includes("cloud")){

        reply =
        "Cloud Engineer Roadmap: Linux → AWS → Docker → Kubernetes";

    }

    else if(msg.includes("cyber")){

        reply =
        "Cyber Security Roadmap: Networking → Linux → Security → Ethical Hacking";

    }

    else if(msg.includes("resume")){

        reply =
        "Build an ATS-friendly resume with Skills, Projects, Certifications and Achievements.";

    }

    else if(msg.includes("interview")){

        reply =
        "Practice HR questions, technical concepts, aptitude and project explanations.";

    }

    else if(msg.includes("project")){

        reply =
        "Project Ideas: AI Chatbot, Resume Analyzer, Portfolio Website, Job Portal, E-commerce App.";

    }

    else if(msg.includes("hello") || msg.includes("hi")){

        reply =
        "Hello 👋 Welcome to VisionAI. How can I help you today?";
    }

    // AI Reply

    setTimeout(() => {

        chatBody.innerHTML += `
        <div class="message">
            <div class="bubble">
                🤖 ${reply}
            </div>
        </div>
        `;

        chatBody.scrollTop =
        chatBody.scrollHeight;

    },500);

    input.value = "";

}

// =========================
// ENTER KEY SUPPORT
// =========================

document.addEventListener(
"DOMContentLoaded",
function(){

const input =
document.getElementById(
"messageInput"
);

if(input){

input.addEventListener(
"keypress",
function(e){

if(e.key === "Enter"){

sendMessage();

}

});

}

});

// =========================
// LOADED MESSAGE
// =========================

console.log(
"🚀 VisionAI Loaded Successfully"
);