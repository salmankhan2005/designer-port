"use client"

import { useEffect, useRef } from "react"

interface SoundManagerProps {
  enabled?: boolean
}

export default function SoundManager({ enabled = true }: SoundManagerProps) {
  const audioContextRef = useRef<AudioContext | null>(null)

  useEffect(() => {
    if (enabled && typeof window !== "undefined") {
      // Initialize Web Audio API
      try {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
      } catch (error) {
        console.warn("Web Audio API not supported:", error)
      }
    }

    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close()
      }
    }
  }, [enabled])

  const playWaveSound = () => {
    if (!enabled || !audioContextRef.current) return

    try {
      const audioContext = audioContextRef.current
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()

      // Create a pleasant "hi" sound
      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)

      // Configure the sound
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime) // Start frequency
      oscillator.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 0.1) // Sweep down
      oscillator.frequency.exponentialRampToValueAtTime(900, audioContext.currentTime + 0.2) // Sweep up

      // Volume envelope
      gainNode.gain.setValueAtTime(0, audioContext.currentTime)
      gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.05)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3)

      // Play the sound
      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + 0.3)
    } catch (error) {
      console.warn("Error playing wave sound:", error)
    }
  }

  const playNotificationSound = () => {
    if (!enabled || !audioContextRef.current) return

    try {
      const audioContext = audioContextRef.current
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)

      // Gentle notification sound
      oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime) // C5
      oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1) // E5

      gainNode.gain.setValueAtTime(0, audioContext.currentTime)
      gainNode.gain.linearRampToValueAtTime(0.05, audioContext.currentTime + 0.05)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2)

      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + 0.2)
    } catch (error) {
      console.warn("Error playing notification sound:", error)
    }
  }

  const playTypingSound = () => {
    if (!enabled || !audioContextRef.current) return

    try {
      const audioContext = audioContextRef.current
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)

      // Subtle typing sound
      oscillator.frequency.setValueAtTime(200 + Math.random() * 100, audioContext.currentTime)
      oscillator.type = "square"

      gainNode.gain.setValueAtTime(0, audioContext.currentTime)
      gainNode.gain.linearRampToValueAtTime(0.02, audioContext.currentTime + 0.01)
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.05)

      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + 0.05)
    } catch (error) {
      console.warn("Error playing typing sound:", error)
    }
  }

  // Expose methods globally for use in other components
  useEffect(() => {
    if (typeof window !== "undefined") {
      ;(window as any).chatbotSounds = {
        playWaveSound,
        playNotificationSound,
        playTypingSound,
      }
    }
  }, [enabled])

  return null
} 