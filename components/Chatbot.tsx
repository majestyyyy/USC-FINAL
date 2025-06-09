"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your USC Manila assistant. How can I help you today?\n\nI can assist you with:\n• USC services and events\n• University information\n• Enrollment and admission\n• Student concerns\n• Academic policies\n\nFeel free to ask me anything!",
      isUser: false,
      timestamp: new Date(),
    },
  ])
  const [inputText, setInputText] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async () => {
    if (!inputText.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputText("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: inputText }),
      })

      const data = await response.json()

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response || "Sorry, I encountered an error. Please try again.",
        isUser: false,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm having trouble connecting right now. Please try again later or contact our USC office directly at:\n\n📧 usc@ue.edu.ph\n📞 (02) 8123-4567\n📍 Room 201, Student Center",
        isUser: false,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const formatMessage = (text: string) => {
    return text.split("\n").map((line, index) => {
      if (line.trim() === "") {
        return <br key={index} />
      }

      // Handle bullet points
      if (line.startsWith("•")) {
        return (
          <div key={index} className="ml-3 mb-1 flex items-start">
            <span className="text-red-500 mr-2 mt-1">•</span>
            <span>{line.substring(1).trim()}</span>
          </div>
        )
      }

      // Handle numbered lists
      if (/^\d+\./.test(line.trim())) {
        return (
          <div key={index} className="ml-3 mb-1">
            <span className="text-red-600 font-semibold">{line.match(/^\d+\./)?.[0]}</span>
            <span className="ml-1">{line.replace(/^\d+\./, "").trim()}</span>
          </div>
        )
      }

      // Handle section headers (ALL CAPS or contains emojis)
      if (
        (line.trim() === line.trim().toUpperCase() && line.trim().length > 3) ||
        /[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]/u.test(line)
      ) {
        return (
          <div key={index} className="font-semibold text-red-700 mt-3 mb-2 text-sm">
            {line}
          </div>
        )
      }

      // Handle contact info lines with emojis
      if (line.includes("📧") || line.includes("📞") || line.includes("📍")) {
        return (
          <div key={index} className="mb-1 text-sm">
            {line}
          </div>
        )
      }

      // Regular text
      return (
        <div key={index} className="mb-1">
          {line}
        </div>
      )
    })
  }

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-16 h-16 gradient-red text-white rounded-full shadow-xl transition-all duration-300 flex items-center justify-center z-50 animate-pulse-red ${isOpen ? "hidden" : "block"}`}
        aria-label="Open chat"
      >
        <MessageCircle className="h-7 w-7" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border-2 border-red-100 z-50 flex flex-col animate-fade-in-up">
          {/* Header */}
          <div className="gradient-red text-white p-5 rounded-t-2xl flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">USC Assistant</h3>
                <p className="text-sm opacity-90">Always here to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-red-200 transition-colors p-1 rounded-full hover:bg-white/10"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-red-50/30 to-white">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? "justify-end" : "justify-start"} message-enter`}
              >
                <div className={`flex items-start space-x-2 max-w-[85%]`}>
                  {!message.isUser && (
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot className="h-4 w-4 text-red-600" />
                    </div>
                  )}
                  <div
                    className={`px-4 py-3 rounded-2xl text-sm shadow-md ${
                      message.isUser
                        ? "gradient-red text-white rounded-br-md"
                        : "bg-white text-gray-800 border border-red-100 rounded-bl-md"
                    }`}
                  >
                    {message.isUser ? (
                      <div>{message.text}</div>
                    ) : (
                      <div className="whitespace-pre-wrap leading-relaxed">{formatMessage(message.text)}</div>
                    )}
                  </div>
                  {message.isUser && (
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <User className="h-4 w-4 text-white" />
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start message-enter">
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <Bot className="h-4 w-4 text-red-600" />
                  </div>
                  <div className="bg-white text-gray-800 px-4 py-3 rounded-2xl rounded-bl-md text-sm border border-red-100 shadow-md">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-red-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-red-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-red-100 bg-white rounded-b-2xl">
            <div className="flex space-x-3">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about USC or UE..."
                className="flex-1 border-2 border-red-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200"
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !inputText.trim()}
                className="bg-red-600 hover:bg-red-700 disabled:bg-gray-300 text-white p-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg disabled:cursor-not-allowed"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
