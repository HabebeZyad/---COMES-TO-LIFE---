import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-black text-[#B8941F] flex items-center justify-center p-6">
                    <div className="text-center max-w-md">
                        <div className="text-6xl mb-4">𓂀</div>
                        <h1 className="text-2xl font-cinzel mb-4">Something went wrong</h1>
                        <p className="text-stone-400 mb-6">
                            The application encountered an error. Please refresh the page.
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-6 py-3 bg-[#8B6F1A] hover:bg-[#7A5F15] text-black font-cinzel font-bold rounded-full transition-all duration-300"
                        >
                            Reload Page
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
