import { StepAnalysis, SolveResponse } from '@/lib/api';

interface ResultsPanelProps {
  results: SolveResponse | null;
  error: string | null;
}

export default function ResultsPanel({ results, error }: ResultsPanelProps) {
  if (error) {
    return (
      <div className="bg-gray-800 rounded-2xl shadow-xl border border-gray-700 overflow-hidden">
        <div className="bg-gradient-to-r from-red-500 to-pink-600 px-6 py-4">
          <h2 className="text-xl font-semibold text-white flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Error
          </h2>
        </div>
        <div className="p-6">
          <div className="bg-red-900/50 border-l-4 border-red-500 rounded-lg p-4">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-red-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-red-300 font-medium">Algo salió mal</p>
                <p className="text-red-400 text-sm mt-1">{error}</p>
                <p className="text-red-500 text-xs mt-2">Por favor intenta nuevamente o verifica tu conexión a internet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!results) {
    return (
      <div className="bg-gray-800 rounded-2xl shadow-xl border border-gray-700 overflow-hidden">
        <div className="bg-gradient-to-r from-gray-600 to-gray-700 px-6 py-4">
          <h2 className="text-xl font-semibold text-white flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Resultados
          </h2>
        </div>
        <div className="p-8 text-center">
          <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-200 mb-2">Listo para Análisis</h3>
          <p className="text-gray-400 max-w-sm mx-auto">
            Envía tu solución matemática para recibir feedback paso a paso de la IA y explicaciones detalladas.
          </p>
          <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Análisis instantáneo</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Potenciado por IA</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 rounded-2xl shadow-xl border border-gray-700 overflow-hidden">
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-4">
        <h2 className="text-xl font-semibold text-white flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Análisis de Solución Completo
        </h2>
      </div>
      
      <div className="p-6 space-y-6">
        {/* Analysis Section */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4 flex items-center">
            <div className="w-8 h-8 bg-indigo-900 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            Análisis Paso a Paso
          </h3>
          
          <div className="space-y-3">
            {results.analysis.map((step: StepAnalysis, index: number) => (
              <div
                key={index}
                className={`relative rounded-xl border-2 p-4 transition-all duration-300 hover:shadow-lg ${
                  step.status === 'correct'
                    ? 'bg-green-900/50 border-green-700 hover:border-green-600'
                    : 'bg-red-900/50 border-red-700 hover:border-red-600'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    {step.status === 'correct' ? (
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    ) : (
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-md">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center mb-2">
                      <span className={`text-sm font-semibold px-2 py-1 rounded-full ${
                        step.status === 'correct'
                          ? 'bg-green-900/70 text-green-300'
                          : 'bg-red-900/70 text-red-300'
                      }`}>
                        Paso {index + 1}
                      </span>
                      <span className={`ml-2 text-xs font-medium ${
                        step.status === 'correct' ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {step.status === 'correct' ? 'CORRECTO' : 'INCORRECTO'}
                      </span>
                    </div>
                    
                    <p className="text-gray-100 font-medium leading-relaxed mb-2">{step.step}</p>
                    
                    {step.explanation && (
                      <div className={`rounded-lg p-3 text-sm ${
                        step.status === 'correct'
                          ? 'bg-green-900/70 text-green-200 border border-green-700'
                          : 'bg-red-900/70 text-red-200 border border-red-700'
                      }`}>
                        <div className="flex items-start">
                          <svg className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <p className="font-medium">{step.explanation}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Correct Solution Section */}
        <div className="border-t pt-6">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center">
            <div className="w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            Solución Correcta
          </h3>
          
          <div className="bg-gradient-to-r from-blue-900/50 to-indigo-900/50 border-2 border-blue-700 rounded-xl p-5">
            <div className="flex items-start">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-gray-100 font-medium leading-relaxed whitespace-pre-wrap">
                  {results.correct_solution}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 gap-4 pt-4">
          <div className="bg-green-900/50 border border-green-700 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-green-400">
              {results.analysis.filter(step => step.status === 'correct').length}
            </div>
            <div className="text-sm text-green-300">Pasos Correctos</div>
          </div>
          <div className="bg-red-900/50 border border-red-700 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-red-400">
              {results.analysis.filter(step => step.status === 'incorrect').length}
            </div>
            <div className="text-sm text-red-300">Pasos Incorrectos</div>
          </div>
        </div>
      </div>
    </div>
  );
}
