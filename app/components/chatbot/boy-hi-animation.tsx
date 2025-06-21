"use client"

import { useEffect, useState, useCallback } from "react"

interface DesignerAnimationProps {
  enableSound?: boolean
  onWave?: () => void
}

export default function DesignerAnimation({ enableSound = true, onWave }: DesignerAnimationProps) {
  const [isWaving, setIsWaving] = useState(false)
  const [isDrawing, setIsDrawing] = useState(false)

  const playWaveSound = useCallback(() => {
    if (!enableSound) return

    try {
      // Use Web Audio API for a pleasant wave sound
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)

      // Create a cheerful "hi" sound
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime)
      oscillator.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 0.1)
      oscillator.frequency.exponentialRampToValueAtTime(1000, audioContext.currentTime + 0.2)

      // Volume envelope for a gentle sound
      gainNode.gain.setValueAtTime(0, audioContext.currentTime)
      gainNode.gain.linearRampToValueAtTime(0.08, audioContext.currentTime + 0.05)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.25)

      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + 0.25)

      // Clean up
      setTimeout(() => {
        audioContext.close()
      }, 300)
    } catch (error) {
      console.warn("Audio not supported or blocked:", error)
    }
  }, [enableSound])

  const triggerWave = useCallback(() => {
    setIsWaving(true)
    setIsDrawing(true)
    playWaveSound()
    onWave?.()

    setTimeout(() => {
      setIsWaving(false)
      setIsDrawing(false)
    }, 1000)
  }, [playWaveSound, onWave])

  useEffect(() => {
    // Initial wave after 1 second
    const initialTimer = setTimeout(() => {
      triggerWave()
    }, 1000)

    // Then wave every 5 seconds
    const interval = setInterval(() => {
      triggerWave()
    }, 5000)

    return () => {
      clearTimeout(initialTimer)
      clearInterval(interval)
    }
  }, [triggerWave])

  return (
    <div className="relative w-10 h-10 flex items-center justify-center">
      {/* Designer Character */}
      <div className="relative">
        {/* Head */}
        <div className="w-6 h-6 bg-gradient-to-b from-slate-100 to-slate-200 rounded-full relative border border-slate-300/30 shadow-sm">
          {/* Hair - Creative messy style */}
          <div className="absolute -top-0.5 left-0.5 right-0.5 h-2 bg-gradient-to-b from-slate-700 to-slate-600 rounded-t-full">
            {/* Creative hair spikes */}
            <div className="absolute -top-0.5 left-1 w-0.5 h-1 bg-slate-700 rounded-full transform rotate-12"></div>
            <div className="absolute -top-0.5 right-1 w-0.5 h-1 bg-slate-700 rounded-full transform -rotate-12"></div>
          </div>

          {/* Eyes - Creative and expressive */}
          <div className="absolute top-1.5 left-1 w-0.5 h-0.5 bg-slate-800 rounded-full"></div>
          <div className="absolute top-1.5 right-1 w-0.5 h-0.5 bg-slate-800 rounded-full"></div>

          {/* Blinking animation */}
          {isWaving && (
            <>
              <div className="absolute top-1.5 left-1 w-0.5 h-0.5 bg-slate-800 rounded-full animate-pulse"></div>
              <div className="absolute top-1.5 right-1 w-0.5 h-0.5 bg-slate-800 rounded-full animate-pulse"></div>
            </>
          )}

          {/* Nose */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-0.5 h-0.5 bg-slate-400 rounded-full"></div>

          {/* Mouth - changes when waving */}
          <div
            className={`absolute top-2.5 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
              isWaving
                ? "w-2 h-1 border-2 border-slate-800 rounded-full" // Big smile when waving
                : "w-1.5 h-0.5 border-b border-slate-800 rounded-full" // Normal smile
            }`}
          ></div>

          {/* Creative accessories */}
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gradient-to-r from-white to-gray-300 rounded-full"></div>
        </div>

        {/* Body - Designer shirt */}
        <div className="w-4 h-3 bg-gradient-to-b from-white to-gray-300 rounded-b-md mx-auto -mt-0.5 border-x border-b border-gray-400/30 shadow-sm">
          {/* Design tool pocket */}
          <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-black/20 rounded-sm"></div>
        </div>

        {/* Left Arm - Holding design tool */}
        <div className="absolute top-4 -left-1 w-1 h-2 bg-slate-100 rounded-full border border-slate-300/30">
          {/* Design tool (pencil/pen) */}
          <div className="absolute -bottom-1 -left-0.5 w-1.5 h-2 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full transform rotate-45">
            <div className="absolute -bottom-0.5 -left-0.5 w-0.5 h-0.5 bg-yellow-200 rounded-full"></div>
          </div>
        </div>

        {/* Right Arm (Waving) */}
        <div
          className={`absolute top-3.5 -right-1 w-1 h-2 bg-slate-100 rounded-full border border-slate-300/30 origin-top transition-all duration-300 ${
            isWaving ? "rotate-45 -translate-y-0.5 scale-110" : "rotate-12"
          }`}
        >
          {/* Hand */}
          <div
            className={`absolute -bottom-0.5 -left-0.5 w-1.5 h-1.5 bg-slate-100 rounded-full border border-slate-300/30 transition-all duration-300 ${
              isWaving ? "scale-125" : ""
            }`}
          ></div>
        </div>

        {/* Creative Speech Bubble */}
        {isWaving && (
          <div className="absolute -top-8 -left-1 bg-white text-slate-800 px-2 py-1 rounded-lg text-xs font-medium animate-bounce shadow-lg border border-gray-200">
            <div className="flex items-center gap-1">
              Hi! ✨{enableSound && <div className="w-1 h-1 bg-white rounded-full animate-pulse"></div>}
            </div>
            <div className="absolute bottom-0 left-2 transform translate-y-1/2 rotate-45 w-1 h-1 bg-white border-r border-b border-gray-200"></div>
          </div>
        )}

        {/* Creative sound waves animation */}
        {isWaving && enableSound && (
          <div className="absolute -top-2 -right-2">
            <div className="relative">
              <div className="absolute w-3 h-3 border border-white/60 rounded-full animate-ping"></div>
              <div
                className="absolute w-4 h-4 border border-gray-300/40 rounded-full animate-ping"
                style={{ animationDelay: "0.1s" }}
              ></div>
              <div
                className="absolute w-5 h-5 border border-white/20 rounded-full animate-ping"
                style={{ animationDelay: "0.2s" }}
              ></div>
            </div>
          </div>
        )}

        {/* Floating design elements */}
        {isDrawing && (
          <>
            <div className="absolute -top-3 -left-2 w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
            <div className="absolute -top-2 -right-3 w-1 h-1 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
            <div className="absolute -bottom-1 -left-3 w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.3s" }}></div>
          </>
        )}
      </div>
    </div>
  )
} 