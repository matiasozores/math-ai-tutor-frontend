# AI Math Tutor Frontend

Frontend application for an AI-powered math tutoring system that helps students check their math solutions.

## Features

- Enter math problems and step-by-step solutions
- Receive AI feedback on correct and incorrect steps
- View explanations of mistakes
- See the correct solution
- Responsive design for all devices

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- TailwindCSS
- Fetch API

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables (optional):
Create a `.env.local` file in the root directory:
```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
frontend/
├── src/
│   ├── app/
│   │   └── page.tsx          # Main page component
│   ├── components/
│   │   ├── ProblemForm.tsx   # Input form component
│   │   └── ResultsPanel.tsx   # Results display component
│   └── lib/
│       └── api.ts            # API service functions
├── public/
├── tailwind.config.js
└── package.json
```

## API Integration

The frontend connects to a backend API at `/solve` endpoint:

```typescript
POST /solve
{
  "problem": "string",
  "student_solution": "string"
}
```

Response:
```typescript
{
  "analysis": [
    {
      "step": "string",
      "status": "correct | incorrect",
      "explanation": "string"
    }
  ],
  "correct_solution": "string"
}
```

## Build for Production

```bash
npm run build
npm start
```
