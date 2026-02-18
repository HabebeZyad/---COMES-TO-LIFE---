import { createContext, useContext, useState, type ReactNode } from 'react';

/**
 * GameState interface defining the global state of the application.
 */
interface GameState {
    audioActive: boolean;
    toggleAudio: () => void;
    museumMode: boolean;
    setMuseumMode: (active: boolean) => void;
}

const GameContext = createContext<GameState | undefined>(undefined);

export function GameProvider({ children }: { children: ReactNode }) {
    const [audioActive, setAudioActive] = useState(false);
    const [museumMode, setMuseumMode] = useState(false);

    const toggleAudio = () => setAudioActive(prev => !prev);

    return (
        <GameContext.Provider value={{
            audioActive,
            toggleAudio,
            museumMode,
            setMuseumMode
        }}>
            {children}
        </GameContext.Provider>
    );
}

/**
 * Custom hook to access the game state.
 */
export function useGame() {
    const context = useContext(GameContext);
    if (!context) {
        throw new Error('useGame must be used within a GameProvider');
    }
    return context;
}
