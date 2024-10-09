import React from 'react';
import Chat from './components/Chat';
import ButtonRotGrad from './components/ButtonRotGrad';
import { Bot } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center">
            <Bot className="h-8 w-8 text-blue-500 mr-2" />
            <h1 className="text-2xl font-bold text-gray-900">Bolt Chat</h1>
          </div>
          <ButtonRotGrad
            className="rounded-full"
            colorA="#00ff00"
            colorB="#ff00ff"
            backgroundColor="#333"
            fontColor="#fff"
            rotationSpeed={6}
            coneAngle={120}
            glowColor="#00ffff"
            glowIntensity={0.7}
            shadowSpread={15}
            hoverShadowSpread={25}
            lineWidth={3}
            pulseSpeed={1.5}
            hoverScale={1.1}
            transitionSpeed={0.4}
            fontSize="1.1rem"
            fontWeight="bold"
            padding="0.6rem 1.2rem"
          >
            Cool Button
          </ButtonRotGrad>
        </div>
      </header>
      <main className="flex-1 max-w-7xl w-full mx-auto py-6 sm:px-6 lg:px-8">
        <div className="bg-white shadow sm:rounded-lg h-[calc(100vh-10rem)]">
          <Chat />
        </div>
      </main>
    </div>
  );
}

export default App;