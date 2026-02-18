import { createContext, useContext, useState, type ReactNode } from 'react';

interface GameContextType {
    audioEnabled: boolean;
    setAudioEnabled: (enabled: boolean) => void;
    isMuseumMode: boolean;
    setIsMuseumMode: (enabled: boolean) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export function GameProvider({ children }: { children: ReactNode }) {
    const [audioEnabled, setAudioEnabled] = useState(false);
    const [isMuseumMode, setIsMuseumMode] = useState(false);

    return (
        <GameContext.Provider value={{ audioEnabled, setAudioEnabled, isMuseumMode, setIsMuseumMode }}>
            {children}
        </GameContext.Provider>
    );
}

export function useGame() {
    const context = useContext(GameContext);
    if (context === undefined) {
        throw new Error('useGame must be used within a GameProvider');
    }
    return context;
}
