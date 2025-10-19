'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  CalendarDaysIcon,
  MapPinIcon,
  UserGroupIcon,
  ClockIcon,
  VideoCameraIcon,
  BuildingOffice2Icon,
} from '@heroicons/react/24/outline'

export default function EventsPage() {
  const upcomingEvents = [
    {
      title: 'EV Expo 2025 - Los Angeles',
      date: 'November 15-17, 2025',
      time: '9:00 AM - 6:00 PM PST',
      location: 'LA Convention Center',
      type: 'In-Person',
      attendees: 2847,
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
      description:
        'The biggest electric vehicle showcase in California featuring test drives, expert panels, and networking.',
      tags: ['Electric Vehicles', 'Networking', 'Test Drives'],
    },
    {
      title: 'Virtual Car Buying Workshop',
      date: 'October 25, 2025',
      time: '7:00 PM - 9:00 PM EST',
      location: 'Online (Zoom)',
      type: 'Virtual',
      attendees: 1247,
      image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800',
      description:
        'Learn tips and tricks for buying your first EV, understanding financing options, and avoiding common mistakes.',
      tags: ['Workshop', 'Education', 'Beginners'],
    },
    {
      title: 'AI in Automotive - Tech Talk',
      date: 'November 5, 2025',
      time: '2:00 PM - 4:00 PM PST',
      location: 'San Francisco Tech Hub',
      type: 'Hybrid',
      attendees: 892,
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800',
      description:
        'Explore how AI is transforming car recommendations, predictive maintenance, and autonomous driving.',
      tags: ['AI', 'Technology', 'Innovation'],
    },
    {
      title: 'Community Meetup - New York',
      date: 'October 28, 2025',
      time: '6:00 PM - 9:00 PM EST',
      location: 'Central Park - Bethesda Terrace',
      type: 'In-Person',
      attendees: 567,
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800',
      description:
        'Connect with fellow FutureCars users, share experiences, and enjoy casual networking over drinks.',
      tags: ['Networking', 'Social', 'Community'],
    },
    {
      title: 'Blockchain in Automotive Webinar',
      date: 'November 12, 2025',
      time: '1:00 PM - 2:30 PM EST',
      location: 'Online (YouTube Live)',
      type: 'Virtual',
      attendees: 1893,
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800',
      description:
        'Deep dive into how blockchain technology is revolutionizing vehicle history and ownership verification.',
      tags: ['Blockchain', 'Webinar', 'Technology'],
    },
    {
      title: 'AR/VR Showroom Demo Day',
      date: 'November 8, 2025',
      time: '10:00 AM - 5:00 PM CST',
      location: 'Chicago Innovation Center',
      type: 'In-Person',
      attendees: 423,
      image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800',
      description:
        'Experience the latest in virtual showroom technology with hands-on AR/VR demos and test drives.',
      tags: ['AR/VR', 'Demo', 'Hands-on'],
    },
  ]

  const pastEvents = [
    { name: 'Summer EV Roadshow 2025', attendees: 3456, date: 'August 2025' },
    { name: 'FutureCars Launch Party', attendees: 892, date: 'June 2025' },
    { name: 'Spring Tech Summit', attendees: 2134, date: 'April 2025' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-blue-900 dark:to-purple-900">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <CalendarDaysIcon className="w-20 h-20 mx-auto mb-6 text-blue-600 dark:text-blue-400" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Community
              <span className="gradient-text"> Events</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Join workshops, meetups, and conferences to learn, network, and grow
            </p>
            <button className="btn-primary text-lg">Create an Event</button>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">124</div>
              <div className="text-gray-600 dark:text-gray-400">Upcoming Events</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">45K+</div>
              <div className="text-gray-600 dark:text-gray-400">Total Attendees</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">67</div>
              <div className="text-gray-600 dark:text-gray-400">Cities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">28</div>
              <div className="text-gray-600 dark:text-gray-400">This Month</div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Upcoming Events</h2>
          <div className="max-w-6xl mx-auto space-y-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-morphism rounded-3xl overflow-hidden hover:shadow-2xl transition-all group"
              >
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Image */}
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-4 py-2 rounded-full font-semibold text-sm ${
                          event.type === 'Virtual'
                            ? 'bg-blue-500 text-white'
                            : event.type === 'Hybrid'
                            ? 'bg-purple-500 text-white'
                            : 'bg-green-500 text-white'
                        }`}
                      >
                        {event.type === 'Virtual' && (
                          <VideoCameraIcon className="w-4 h-4 inline mr-1" />
                        )}
                        {event.type === 'In-Person' && (
                          <BuildingOffice2Icon className="w-4 h-4 inline mr-1" />
                        )}
                        {event.type}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-2 p-6">
                    <h3 className="text-3xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{event.description}</p>

                    <div className="grid md:grid-cols-2 gap-3 mb-4">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <CalendarDaysIcon className="w-5 h-5 text-blue-500" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <ClockIcon className="w-5 h-5 text-blue-500" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <MapPinIcon className="w-5 h-5 text-blue-500" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <UserGroupIcon className="w-5 h-5 text-blue-500" />
                        <span>{event.attendees.toLocaleString()} registered</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {event.tags.map(tag => (
                        <span key={tag} className="text-xs px-3 py-1 rounded-full glass-morphism">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button className="btn-primary w-full md:w-auto">Register Now</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Past Events Highlights</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-morphism rounded-2xl p-6 text-center"
              >
                <div className="text-3xl font-bold gradient-text mb-2">
                  {event.attendees.toLocaleString()}
                </div>
                <h3 className="font-bold mb-1">{event.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{event.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto glass-morphism rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold mb-4">Host Your Own Event</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Organize meetups, workshops, or webinars for the FutureCars community
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="btn-primary text-lg">Submit Event Proposal</button>
              <Link href="/community" className="btn-secondary text-lg">
                Back to Community
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
