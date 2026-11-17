# Sainath L. — React Portfolio

## Run locally
1. Install Node.js (18+ recommended).
2. Open this folder in VS Code.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL printed by Vite.

## Build for deployment
Run `npm run build`. The production site is generated in `dist/`.

## Included
- Responsive, dark single-page portfolio
- Animated hero and sections (Framer Motion)
- Expandable career timeline
- Click-to-open project case studies
- Interactive skills categories
- Portfolio assistant demo with curated answers based on the supplied resume
- Download-resume link (PDF included in `public/` when supplied)

## About the assistant
The assistant is currently a front-end demo with predefined responses. It does not call an AI model or send data to a server. To make it a real AI assistant, connect a backend endpoint and keep any model API key on the server—not in React/browser code.

## Personal details
The phone number, email, LinkedIn URL, roles, dates and achievement metrics are populated from the uploaded resume. Please verify contact details and metrics before publishing.
