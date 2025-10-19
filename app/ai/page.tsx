'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  SparklesIcon,
  PaperAirplaneIcon,
  UserCircleIcon,
  ChatBubbleLeftRightIcon,
  LightBulbIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  ClockIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline'

export default function AIAssistantPage() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        "Hi! I'm your AI car shopping assistant. I can help you find the perfect vehicle, answer questions about features, compare models, and provide personalized recommendations. What would you like to know?",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const quickQuestions = [
    "What's the best EV under $50,000?",
    'Compare Tesla Model 3 vs BMW i4',
    'How does blockchain verification work?',
    'Show me SUVs with 300+ mile range',
    'What are the tax incentives for EVs?',
    'Help me schedule a test drive',
  ]

  const aiFeatures = [
    {
      icon: SparklesIcon,
      title: 'Smart Recommendations',
      description: 'AI analyzes your preferences, budget, and lifestyle to suggest perfect matches',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Natural Conversations',
      description: 'Ask questions in plain language and get instant, accurate answers',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: ChartBarIcon,
      title: 'Market Insights',
      description: 'Real-time pricing analysis, value predictions, and market trends',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: LightBulbIcon,
      title: 'Expert Knowledge',
      description: 'Trained on millions of car specs, reviews, and industry data',
      color: 'from-green-500 to-emerald-500',
    },
  ]

  const stats = [
    { label: 'Questions Answered', value: '2.5M+', icon: ChatBubbleLeftRightIcon },
    { label: 'Accuracy Rate', value: '98.7%', icon: CheckCircleIcon },
    { label: 'Avg Response Time', value: '<2 sec', icon: ClockIcon },
    { label: 'User Satisfaction', value: '4.9/5', icon: SparklesIcon },
  ]

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage = {
      role: 'user',
      content: inputMessage,
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const question = userMessage.content.toLowerCase()
      let response = ''

      // Match question to appropriate response
      if (
        (question.includes('best') && question.includes('50')) ||
        question.includes('under $50')
      ) {
        response =
          "Based on your $50,000 budget, I'd recommend:\n\n1. **Tesla Model 3 Long Range** ($47,740) - 358 mile range, autopilot, supercharger network\n2. **Hyundai Ioniq 6** ($45,500) - 361 mile range, sleek design, fast charging\n3. **Chevrolet Blazer EV** ($48,800) - 320 miles, spacious SUV, Apple CarPlay\n\nWould you like detailed comparisons or to schedule test drives?"
      } else if (
        (question.includes('tesla') && question.includes('bmw')) ||
        (question.includes('model 3') && question.includes('i4'))
      ) {
        response =
          '**Tesla Model 3 vs BMW i4 Comparison:**\n\n**Tesla Model 3:**\n• Price: $40,240 - $54,990\n• Range: 272-358 miles\n• 0-60 mph: 3.1-5.8 seconds\n• Supercharger network access\n• Minimalist interior\n\n**BMW i4:**\n• Price: $56,395 - $68,695\n• Range: 270-301 miles\n• 0-60 mph: 3.9-5.5 seconds\n• Traditional luxury feel\n• Premium materials\n\n**Winner depends on priorities:** Tesla for tech & value, BMW for luxury & driving dynamics. Which matters more to you?'
      } else if (question.includes('blockchain') || question.includes('verification')) {
        response =
          '**How Blockchain Vehicle Verification Works:**\n\n1. **Immutable Records** - Every service, accident, and ownership change is recorded on the blockchain and cannot be altered\n\n2. **Decentralized Storage** - Data is stored across 1,000+ nodes, making fraud virtually impossible\n\n3. **Instant Verification** - Enter any VIN to see complete history in under 3 seconds\n\n4. **Smart Contracts** - Automated verification during purchases ensures authenticity\n\n**Benefits:** 100% fraud prevention, complete transparency, instant trust. Want to verify a specific vehicle?'
      } else if (
        question.includes('suv') &&
        (question.includes('300') || question.includes('range'))
      ) {
        response =
          '**Electric SUVs with 300+ Mile Range:**\n\n1. **Tesla Model X** - 348 miles, $98,490\n   - Falcon wing doors, 7 seats, 0-60 in 3.8s\n\n2. **BMW iX xDrive50** - 324 miles, $87,250\n   - Luxury interior, 516 HP, advanced tech\n\n3. **Rivian R1S** - 316 miles, $78,000\n   - Off-road capable, tank turn, adventure gear\n\n4. **Mercedes EQS SUV** - 305 miles, $104,400\n   - Ultimate luxury, MBUX system, spacious\n\nWhich features matter most: luxury, performance, or practicality?'
      } else if (
        question.includes('tax') ||
        question.includes('incentive') ||
        question.includes('credit')
      ) {
        response =
          "**EV Tax Incentives & Credits:**\n\n**Federal:**\n• Up to $7,500 tax credit for new EVs\n• $4,000 for used EVs (under $25K)\n• Requires final assembly in North America\n\n**State Examples:**\n• California: $2,000-$7,500 additional\n• New York: $2,000 rebate\n• Colorado: $5,000 credit\n• New Jersey: $4,000 rebate\n\n**Example:** Buy a Tesla Model 3 in CA = $7,500 (federal) + $2,000 (state) = **$9,500 total savings**!\n\nWhat's your state? I'll calculate your exact savings."
      } else if (
        question.includes('test drive') ||
        question.includes('schedule') ||
        question.includes('appointment')
      ) {
        response =
          "**Schedule Your Test Drive:**\n\nI can help you book test drives! To get started, I need:\n\n1. **Which models?** (e.g., Tesla Model Y, BMW i4)\n2. **Your location?** (city or zip code)\n3. **Preferred dates?** (weekday/weekend, morning/afternoon)\n4. **Any specific features** you want to test?\n\nI'll check dealer availability and can schedule multiple test drives in one day if you'd like to compare vehicles back-to-back!"
      } else if (
        question.includes('hello') ||
        question.includes('hi') ||
        question.includes('hey')
      ) {
        response =
          "Hello! 👋 I'm your AI car shopping assistant. I can help you with:\n\n• Finding the perfect EV for your budget\n• Comparing different models\n• Explaining features and technology\n• Calculating tax incentives\n• Scheduling test drives\n• Answering any car-related questions\n\nWhat would you like to know today?"
      } else if (
        question.includes('price') ||
        question.includes('cost') ||
        question.includes('afford')
      ) {
        response =
          "I'd be happy to help with pricing! To give you the best recommendations:\n\n• **What's your budget range?** (e.g., under $40K, $50-70K)\n• **New or used?**\n• **Any must-have features?** (range, size, brand)\n• **Location?** (for local incentives)\n\nOnce I know these details, I can show you exactly what you can afford, including all incentives and financing options!"
      } else if (
        question.includes('range') ||
        question.includes('miles') ||
        question.includes('battery')
      ) {
        response =
          '**EV Range Guide:**\n\n**Long Range Champions (350+ miles):**\n• Mercedes EQS: 453 miles\n• BMW iX xDrive50: 380 miles\n• Tesla Model S: 405 miles\n\n**Mid Range (250-350 miles):**\n• Tesla Model 3/Y: 272-330 miles\n• Ford Mustang Mach-E: 312 miles\n• Hyundai Ioniq 6: 361 miles\n\n**Real-world factors:** Weather (-20% in winter), speed (highway uses more), and driving style affect range.\n\nWhat daily driving distance do you need?'
      } else {
        // Default response for any other question
        response = `Great question! Based on "${userMessage.content}", here's what I can tell you:\n\nI have access to information about all major EV models, pricing, features, and comparisons. I can help you:\n\n• Find vehicles matching your criteria\n• Compare specific models in detail\n• Explain technology and features\n• Calculate total costs with incentives\n• Schedule test drives near you\n\nCould you provide more details about what you're looking for? For example:\n- Your budget range?\n- Preferred vehicle type (sedan, SUV, truck)?\n- Must-have features?\n- Daily driving needs?`
      }

      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: response,
          timestamp: new Date(),
        },
      ])
      setIsTyping(false)
    }, 1500)
  }

  const handleQuickQuestion = (question: string) => {
    setInputMessage(question)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-blue-900 dark:to-purple-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-6 py-2 rounded-full mb-6">
              <SparklesIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                Powered by Advanced AI
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Your Personal
              <span className="gradient-text"> AI Assistant</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Get instant answers, personalized recommendations, and expert guidance on your car
              shopping journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
                <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chat Interface */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-morphism rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <SparklesIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">AI Assistant</h3>
                    <p className="text-sm text-white/80 flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      Online & Ready to Help
                    </p>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="h-[500px] overflow-y-auto p-6 space-y-4 bg-white dark:bg-gray-900">
                <AnimatePresence>
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
                    >
                      <div
                        className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                          message.role === 'assistant'
                            ? 'bg-gradient-to-br from-blue-500 to-purple-500'
                            : 'bg-gradient-to-br from-green-500 to-emerald-500'
                        }`}
                      >
                        {message.role === 'assistant' ? (
                          <SparklesIcon className="w-5 h-5 text-white" />
                        ) : (
                          <UserCircleIcon className="w-5 h-5 text-white" />
                        )}
                      </div>
                      <div
                        className={`flex-1 max-w-[80%] ${
                          message.role === 'user' ? 'text-right' : ''
                        }`}
                      >
                        <div
                          className={`inline-block px-4 py-3 rounded-2xl ${
                            message.role === 'assistant'
                              ? 'bg-gray-100 dark:bg-gray-800 text-left'
                              : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                          }`}
                        >
                          <p className="text-sm leading-relaxed">{message.content}</p>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {message.timestamp.toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex gap-3"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                      <SparklesIcon className="w-5 h-5 text-white" />
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-2xl">
                      <div className="flex gap-1">
                        <span
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: '0ms' }}
                        />
                        <span
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: '150ms' }}
                        />
                        <span
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: '300ms' }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick Questions */}
              <div className="p-4 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(question)}
                      className="text-xs px-3 py-2 rounded-full glass-morphism hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input */}
              <div className="p-6 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={e => setInputMessage(e.target.value)}
                    onKeyPress={e => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Ask me anything about cars..."
                    className="flex-1 px-6 py-4 rounded-full glass-morphism border-2 border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim()}
                    className="btn-primary w-14 h-14 rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <PaperAirplaneIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">AI-Powered Features</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Advanced technology to make your car shopping easier
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-morphism rounded-2xl p-8 hover:shadow-2xl transition-all group"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Simple steps to get personalized car recommendations
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: '1',
                title: 'Ask Your Question',
                description:
                  'Type any question about cars, features, prices, or comparisons in natural language',
              },
              {
                step: '2',
                title: 'AI Analyzes',
                description:
                  'Our AI processes your query using millions of data points and real-time market information',
              },
              {
                step: '3',
                title: 'Get Instant Answer',
                description:
                  'Receive accurate, personalized recommendations with explanations and next steps',
              },
              {
                step: '4',
                title: 'Take Action',
                description:
                  'Schedule test drives, compare models, or save favorites - all through the conversation',
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 mb-8"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  {item.step}
                </div>
                <div className="flex-1 glass-morphism rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SparklesIcon className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">Ready to Find Your Perfect Car?</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Start chatting with our AI assistant now and discover vehicles that match your
              lifestyle
            </p>
            <button
              onClick={() => window.scrollTo({ top: 400, behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all hover:scale-105"
            >
              Start Conversation
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
