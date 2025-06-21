"use client"

import { useState, useEffect, useCallback } from "react"
import { useChat } from "ai/react"
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar"
import { Send, User, X, Minimize2, Sparkles, Bot, Volume2, VolumeX } from "lucide-react"
import DesignerAnimation from "./boy-hi-animation"
import SoundManager from "./sound-manager"

// Types
interface StandaloneChatbotProps {
  position?: "bottom-right" | "bottom-left" | "bottom-center"
  apiEndpoint?: string
  welcomeMessage?: string
  botName?: string
  primaryColor?: string
  enableSound?: boolean
  className?: string
}

// Constants
const SUGGESTED_QUESTIONS = [
  "Tell me about your design background",
  "What are your creative skills?",
  "Show me your portfolio projects",
  "How can I contact you?",
]

const POSITION_CLASSES = {
  "bottom-right": "bottom-6 right-6",
  "bottom-left": "bottom-6 left-6",
  "bottom-center": "bottom-6 left-1/2 transform -translate-x-1/2",
}

// Sound Effects Component
const SoundEffects = ({ soundEnabled }: { soundEnabled: boolean }) => {
  const playNotificationSound = useCallback(() => {
    if (!soundEnabled) return

    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)

      oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime)
      oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1)

      gainNode.gain.setValueAtTime(0, audioContext.currentTime)
      gainNode.gain.linearRampToValueAtTime(0.05, audioContext.currentTime + 0.05)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2)

      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + 0.2)

      setTimeout(() => audioContext.close(), 250)
    } catch (error) {
      console.warn("Audio not supported:", error)
    }
  }, [soundEnabled])

  const playTypingSound = useCallback(() => {
    if (!soundEnabled) return

    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)

      oscillator.frequency.setValueAtTime(200 + Math.random() * 100, audioContext.currentTime)
      oscillator.type = "square"

      gainNode.gain.setValueAtTime(0, audioContext.currentTime)
      gainNode.gain.linearRampToValueAtTime(0.02, audioContext.currentTime + 0.01)
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.05)

      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + 0.05)

      setTimeout(() => audioContext.close(), 100)
    } catch (error) {
      console.warn("Audio not supported:", error)
    }
  }, [soundEnabled])

  return { playNotificationSound, playTypingSound }
}

// Chat Header Component
const ChatHeader = ({ 
  botName, 
  soundEnabled, 
  setSoundEnabled, 
  setIsMinimized, 
  isMinimized, 
  setIsOpen 
}: { 
  botName: string
  soundEnabled: boolean
  setSoundEnabled: (enabled: boolean) => void
  setIsMinimized: (minimized: boolean) => void
  isMinimized: boolean
  setIsOpen: (open: boolean) => void
}) => (
  <CardHeader className="border-b border-white/20 p-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
    <div className="flex items-center justify-between">
      <CardTitle className="text-white flex items-center gap-3 text-base font-semibold">
        <div className="relative">
          <Avatar className="w-12 h-12 border-2 border-white/30">
            <AvatarImage src="/projects/profile/Dhanin George.jpg" alt="Dhanin George" style={{ objectPosition: '15% 50%' }} />
            <AvatarFallback>DG</AvatarFallback>
          </Avatar>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-pulse"></div>
        </div>
        <div>
          <div className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-bold animate-pulse">
            {botName}
          </div>
          <div className="text-xs text-gray-300/70 font-normal flex items-center gap-1">
            Online now
            {soundEnabled && <div className="w-1 h-1 bg-white rounded-full animate-pulse"></div>}
          </div>
        </div>
      </CardTitle>
      <div className="flex gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="w-8 h-8 text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200"
          onClick={() => setSoundEnabled(!soundEnabled)}
          title={soundEnabled ? "Disable sound" : "Enable sound"}
        >
          {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="w-8 h-8 text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200"
          onClick={() => setIsMinimized(!isMinimized)}
        >
          <Minimize2 className="w-4 h-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="w-8 h-8 text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200"
          onClick={() => setIsOpen(false)}
        >
          <X className="w-4 h-4" />
        </Button>
      </div>
    </div>
  </CardHeader>
)

// Message Component
const Message = ({ message, index }: { message: any, index: number }) => (
  <div
    key={message.id}
    className={`flex gap-3 animate-fade-in ${message.role === "user" ? "justify-end" : "justify-start"}`}
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <div className={`flex gap-3 max-w-[85%] ${message.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
      <Avatar className="w-8 h-8 flex-shrink-0">
        <AvatarImage
          src={message.role === "user" ? "/user-avatar.png" : "/projects/profile/Dhanin George.jpg"}
          alt={message.role}
          style={message.role !== 'user' ? { objectPosition: '15% 50%' } : {}}
        />
        <AvatarFallback>
          {message.role === "user" ? "U" : "D"}
        </AvatarFallback>
      </Avatar>

      <div
        className={`rounded-2xl p-3 text-sm shadow-lg transform hover:scale-[1.02] transition-all duration-200 ${
          message.role === "user"
            ? "bg-gradient-to-r from-white to-gray-300 text-black"
            : "bg-slate-800/80 text-slate-100 border border-white/20"
        }`}
      >
        <div className="whitespace-pre-wrap">{message.content}</div>
      </div>
    </div>
  </div>
)

// Loading Animation Component
const LoadingAnimation = ({ soundEnabled }: { soundEnabled: boolean }) => (
  <div className="flex gap-3 justify-start animate-fade-in">
    <Avatar className="w-8 h-8">
      <AvatarImage src="/projects/profile/Dhanin George.jpg" alt="Dhanin George" style={{ objectPosition: '15% 50%' }}/>
      <AvatarFallback className="bg-gradient-to-r from-white to-gray-300 text-black p-0">
        DG
      </AvatarFallback>
    </Avatar>
    <div className="bg-slate-800/80 text-slate-100 border border-white/20 rounded-2xl p-3 text-sm shadow-lg">
      <div className="flex gap-1">
        <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
      </div>
    </div>
  </div>
)

// Error State Component
const ErrorState = () => (
  <div className="flex gap-3 justify-start animate-fade-in">
    <Avatar className="w-8 h-8">
      <AvatarFallback className="bg-white">
        <Bot className="w-4 h-4" />
      </AvatarFallback>
    </Avatar>
    <div className="bg-white/20 border border-white/30 text-white rounded-2xl p-3 shadow-lg">
      <div className="text-sm">Sorry, I&apos;m having trouble connecting. Please try again!</div>
    </div>
  </div>
)

// Suggested Questions Component
const SuggestedQuestions = ({ 
  questions, 
  handleInputChange, 
  playNotificationSound 
}: { 
  questions: string[]
  handleInputChange: (e: any) => void
  playNotificationSound: () => void
}) => (
  <div className="p-4 border-t border-white/20 bg-slate-800/30">
    <div className="flex items-center gap-2 mb-3">
      <Sparkles className="w-4 h-4 text-white" />
      <p className="text-gray-300/80 text-sm font-medium">Quick questions:</p>
    </div>
    <div className="flex flex-wrap gap-2">
      {questions.map((question, index) => (
        <Button
          key={index}
          variant="outline"
          size="sm"
          className="text-xs h-7 border-white/30 text-gray-300/80 hover:bg-white/10 hover:border-white/50 transition-all duration-200 transform hover:scale-105"
          onClick={() => {
            handleInputChange({ target: { value: question } } as any)
            playNotificationSound()
          }}
        >
          {question}
        </Button>
      ))}
    </div>
  </div>
)

// Input Form Component
const InputForm = ({ 
  input, 
  handleInputChange, 
  handleSubmit, 
  isLoading, 
  soundEnabled 
}: { 
  input: string
  handleInputChange: (e: any) => void
  handleSubmit: (e: any) => void
  isLoading: boolean
  soundEnabled: boolean
}) => (
  <div className="p-4 border-t border-white/20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
    <form
      onSubmit={(e) => {
        handleSubmit(e)
      }}
      className="flex gap-3"
    >
      <div className="flex-1 relative">
        <Input
          value={input}
          onChange={handleInputChange}
          placeholder="Ask me anything..."
          className="bg-slate-800/50 border-white/30 text-white placeholder:text-slate-400 h-10 pr-12 focus:border-white/60 focus:ring-white/20 transition-all duration-200"
          disabled={isLoading}
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          {soundEnabled && <div className="w-1 h-1 bg-yellow-400 rounded-full animate-pulse"></div>}
        </div>
      </div>
      <Button
        type="submit"
        disabled={isLoading || !input.trim()}
        className="h-10 w-10 p-0 bg-gradient-to-r from-white to-gray-300 hover:from-gray-200 hover:to-gray-400 disabled:opacity-50 transform hover:scale-110 transition-all duration-200 shadow-lg"
        size="icon"
      >
        <Send className="w-4 h-4" />
      </Button>
    </form>
  </div>
)

// Main Chatbot Component
export default function StandaloneChatbot({
  position = "bottom-left",
  apiEndpoint = "/api/chat",
  welcomeMessage = "Hi! I'm Dhanin George's AI assistant. Ask me anything about my design background, creative skills, and portfolio projects!",
  botName = "Dhanin's Assistant",
  primaryColor = "red",
  enableSound = true,
  className = "",
}: StandaloneChatbotProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [showWelcome, setShowWelcome] = useState(true)
  const [soundEnabled, setSoundEnabled] = useState(enableSound)

  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: apiEndpoint,
    initialMessages: [
      {
        id: "welcome",
        role: "assistant",
        content: welcomeMessage,
      },
    ],
  })

  const { playNotificationSound, playTypingSound } = SoundEffects({ soundEnabled })

  // Play notification sound when new messages arrive
  useEffect(() => {
    if (messages.length > 1 && messages[messages.length - 1].role === "assistant") {
      playNotificationSound()
    }
  }, [messages, playNotificationSound])

  // Play typing sound effect during loading
  useEffect(() => {
    let typingInterval: NodeJS.Timeout

    if (isLoading && soundEnabled) {
      typingInterval = setInterval(() => {
        playTypingSound()
      }, 200)
    }

    return () => {
      if (typingInterval) {
        clearInterval(typingInterval)
      }
    }
  }, [isLoading, soundEnabled, playTypingSound])

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setShowWelcome(false), 4000)
      return () => clearTimeout(timer)
    } else {
      setShowWelcome(true)
    }
  }, [isOpen])

  if (!isOpen) {
    return (
      <>
        <SoundManager enabled={soundEnabled} />
        <div className={`fixed ${POSITION_CLASSES[position]} z-50 ${className}`}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-300 rounded-full animate-ping opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-300 rounded-full animate-pulse opacity-30"></div>

            <Button
              onClick={() => {
                setIsOpen(true)
                playNotificationSound()
              }}
              className="relative w-16 h-16 rounded-full bg-gradient-to-r from-white to-gray-300 hover:from-gray-200 hover:to-gray-400 shadow-2xl transform hover:scale-110 transition-all duration-300 border-2 border-white/30 p-0"
              size="icon"
            >
              <Avatar className="w-full h-full">
                <AvatarImage src="/projects/profile/Dhanin George.jpg" alt="Dhanin George" style={{ objectPosition: '15% 50%' }} />
                <AvatarFallback>DG</AvatarFallback>
              </Avatar>
            </Button>
          </div>

          {showWelcome && (
            <div className="absolute bottom-20 left-0 bg-slate-800/95 text-white px-3 py-2 rounded-lg shadow-xl border border-white/30 backdrop-blur-sm animate-bounce">
              <div className="text-sm font-medium">👋 Ask me anything!</div>
              <div className="absolute bottom-0 left-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-slate-800 border-r border-b border-white/30"></div>
            </div>
          )}
        </div>
      </>
    )
  }

  return (
    <>
      <SoundManager enabled={soundEnabled} />
      <div className={`fixed ${POSITION_CLASSES[position]} z-50 w-[85%] max-w-[350px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] ${className}`}>
        <Card className={`w-full h-full flex flex-col ${isMinimized ? 'h-16' : 'h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px]'} transition-all duration-300 ease-in-out bg-slate-900/95 border-white/20 backdrop-blur-xl shadow-2xl animate-slide-up`}>
          <ChatHeader
            botName={botName}
            soundEnabled={soundEnabled}
            setSoundEnabled={setSoundEnabled}
            setIsMinimized={setIsMinimized}
            isMinimized={isMinimized}
            setIsOpen={setIsOpen}
          />

          {!isMinimized && (
            <CardContent className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-gradient-to-b from-slate-900/95 to-slate-800/95">
              <div className="h-48 sm:h-52 md:h-56 lg:h-60 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-gradient-to-b from-slate-900/50 to-slate-800/50 custom-scrollbar">
                {messages.map((message, index) => (
                  <Message key={message.id} message={message} index={index} />
                ))}

                {isLoading && <LoadingAnimation soundEnabled={soundEnabled} />}
                {error && <ErrorState />}
              </div>

              {messages.length <= 1 && (
                <SuggestedQuestions
                  questions={SUGGESTED_QUESTIONS}
                  handleInputChange={handleInputChange}
                  playNotificationSound={playNotificationSound}
                />
              )}

              <InputForm
                input={input}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                isLoading={isLoading}
                soundEnabled={soundEnabled}
              />
            </CardContent>
          )}
        </Card>
      </div>
    </>
  )
} 