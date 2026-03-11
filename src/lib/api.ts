export interface SolveRequest {
  problem: string;
  student_solution: string;
}

export interface StepAnalysis {
  step: string;
  status: 'correct' | 'incorrect';
  explanation: string;
}

export interface SolveResponse {
  analysis: StepAnalysis[];
  correct_solution: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://math-ai-tutor-backend.onrender.com';

export async function solveMathProblem(request: SolveRequest): Promise<SolveResponse> {
  const response = await fetch(`${API_BASE_URL}/api/solve`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  
  // Normalizar el status del backend al formato del frontend
  const normalizedData = {
    ...data,
    analysis: data.analysis.map((step: any) => ({
      ...step,
      status: step.status === 'correcto' ? 'correct' : 'incorrect'
    }))
  };

  return normalizedData;
}
