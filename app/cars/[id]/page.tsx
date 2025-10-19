'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeftIcon, HeartIcon, ShareIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'

// Complete car database matching the explore page (10 Premium EVs)
const carsDatabase = [
  // Tesla Model S Plaid
  {
    _id: '1',
    make: 'Tesla',
    model: 'Model S Plaid',
    year: 2024,
    price: 89990,
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1200&h=800&fit=crop',
    type: 'Electric',
    description:
      'The Tesla Model S Plaid is the quickest production car ever made. With its tri-motor setup delivering over 1,000 horsepower, it accelerates from 0-60 mph in under 2 seconds.',
    specs: {
      range: '396 miles',
      acceleration: '0-60 in 1.99s',
      topSpeed: '200 mph',
      horsepower: '1,020 HP',
      drivetrain: 'Tri-Motor AWD',
      battery: '100 kWh',
      charging: '250 kW Supercharger',
      seating: '5 Adults',
    },
    features: [
      'Autopilot Advanced Safety',
      'Full Self-Driving Capability',
      '17" Cinematic Display',
      'Tri-Zone Climate Control',
      'Premium Audio - 22 Speakers',
      'Glass Roof',
      'Power Liftgate',
      'Wireless Phone Charging',
    ],
    colors: [
      {
        name: 'Midnight Blue',
        hex: '#1e3a8a',
        image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200',
      },
      {
        name: 'Pearl White',
        hex: '#f8fafc',
        image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1200',
      },
      {
        name: 'Deep Black',
        hex: '#0f172a',
        image: 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?w=1200',
      },
      {
        name: 'Red Multi-Coat',
        hex: '#dc2626',
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200',
      },
      {
        name: 'Silver Metallic',
        hex: '#94a3b8',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200',
      },
    ],
  },
  {
    _id: '2',
    make: 'Porsche',
    model: 'Taycan Turbo S',
    year: 2024,
    price: 185000,
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=1200&h=800&fit=crop',
    type: 'Electric',
    description:
      "The most affordable performance electric sedan. Track-ready with dual motor AWD, advanced aerodynamics, and Tesla's latest Autopilot technology.",
    specs: {
      range: '315 miles',
      acceleration: '0-60 in 3.1s',
      topSpeed: '162 mph',
      horsepower: '450 HP',
      drivetrain: 'Dual Motor AWD',
      battery: '82 kWh',
      charging: '250 kW Supercharger',
      seating: '5 Adults',
    },
    features: [
      'Enhanced Autopilot',
      'Track Mode',
      '15" Touchscreen Display',
      'Premium Interior',
      'Heated Seats Front/Rear',
      'Glass Roof',
      'Wireless Charging',
      'Sentry Mode',
    ],
    colors: [
      {
        name: 'Pearl White',
        hex: '#f8fafc',
        image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1200',
      },
      {
        name: 'Midnight Silver',
        hex: '#64748b',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200',
      },
      {
        name: 'Deep Blue',
        hex: '#1e40af',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200',
      },
      {
        name: 'Red Multi-Coat',
        hex: '#dc2626',
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200',
      },
      {
        name: 'Solid Black',
        hex: '#0f172a',
        image: 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?w=1200',
      },
    ],
  },
  {
    _id: '3',
    make: 'Hyundai',
    model: 'IONIQ 5 N',
    year: 2024,
    price: 66000,
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200&h=800&fit=crop',
    type: 'Electric',
    description:
      'The Tesla Model X Plaid features iconic Falcon Wing doors, seating for up to 7 adults, and tri-motor all-wheel drive for incredible performance and utility.',
    specs: {
      range: '333 miles',
      acceleration: '0-60 in 2.5s',
      topSpeed: '163 mph',
      horsepower: '1,020 HP',
      drivetrain: 'Tri-Motor AWD',
      battery: '100 kWh',
      charging: '250 kW Supercharger',
      seating: '7 Adults',
    },
    features: [
      'Falcon Wing Doors',
      'Full Self-Driving Capability',
      '17" Cinematic Display',
      'Tri-Zone Climate Control',
      'HEPA Air Filtration',
      'Third Row Seating',
      '5,000 lbs Towing Capacity',
      'Panoramic Windshield',
    ],
    colors: [
      {
        name: 'Pearl White',
        hex: '#f8fafc',
        image: 'https://images.unsplash.com/photo-1620891549027-942fdc95d3f5?w=1200',
      },
      {
        name: 'Midnight Blue',
        hex: '#1e3a8a',
        image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200',
      },
      {
        name: 'Deep Black',
        hex: '#0f172a',
        image: 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?w=1200',
      },
      {
        name: 'Red Multi-Coat',
        hex: '#dc2626',
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200',
      },
      {
        name: 'Silver Metallic',
        hex: '#94a3b8',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200',
      },
    ],
  },
  {
    _id: '4',
    make: 'Audi',
    model: 'e-tron GT',
    year: 2024,
    price: 145900,
    image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=1200&h=800&fit=crop',
    type: 'Electric',
    description:
      "Tesla's best-selling electric SUV. The Model Y combines practicality with performance, offering spacious cargo room, seating for 7, and impressive range.",
    specs: {
      range: '330 miles',
      acceleration: '0-60 in 4.8s',
      topSpeed: '135 mph',
      horsepower: '384 HP',
      drivetrain: 'Dual Motor AWD',
      battery: '75 kWh',
      charging: '250 kW Supercharger',
      seating: '5-7 Adults',
    },
    features: [
      'Enhanced Autopilot',
      'Panoramic Glass Roof',
      '15" Touchscreen Display',
      'Power Liftgate',
      'Heated Seats (All Rows)',
      'Third Row Seating Option',
      '3,500 lbs Towing',
      'HEPA Filtration',
    ],
    colors: [
      {
        name: 'Pearl White',
        hex: '#f8fafc',
        image: 'https://images.unsplash.com/photo-1617654112368-307921291f42?w=1200',
      },
      {
        name: 'Midnight Silver',
        hex: '#64748b',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200',
      },
      {
        name: 'Deep Blue',
        hex: '#1e40af',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200',
      },
      {
        name: 'Red Multi-Coat',
        hex: '#dc2626',
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200',
      },
      {
        name: 'Solid Black',
        hex: '#0f172a',
        image: 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?w=1200',
      },
    ],
  },
  {
    _id: '5',
    make: 'Mercedes-Benz',
    model: 'EQS 580',
    year: 2024,
    price: 125950,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&h=800&fit=crop',
    type: 'Electric',
    description:
      "Porsche's flagship electric performance sedan. Combining legendary sports car handling with cutting-edge electric technology for an unmatched driving experience.",
    specs: {
      range: '227 miles',
      acceleration: '0-60 in 2.6s',
      topSpeed: '161 mph',
      horsepower: '750 HP (overboost)',
      drivetrain: 'Dual Motor AWD',
      battery: '93.4 kWh',
      charging: '270 kW DC Fast',
      seating: '4 Adults',
    },
    features: [
      'Sport Chrono Package',
      'Porsche Active Suspension',
      'Curved 16.8" Display',
      'Burmester Sound System',
      'Adaptive Air Suspension',
      'Rear-Axle Steering',
      'Carbon Fiber Interior',
      'Launch Control',
    ],
    colors: [
      {
        name: 'Frozen Blue',
        hex: '#3b82f6',
        image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=1200',
      },
      {
        name: 'Carrara White',
        hex: '#f8fafc',
        image: 'https://images.unsplash.com/photo-1611821064430-077a0579d293?w=1200',
      },
      {
        name: 'Jet Black',
        hex: '#0f172a',
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200',
      },
      {
        name: 'Guards Red',
        hex: '#dc2626',
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200',
      },
      {
        name: 'Gentian Blue',
        hex: '#1e40af',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200',
      },
    ],
  },
  {
    _id: '6',
    make: 'Lucid',
    model: 'Air Sapphire',
    year: 2024,
    price: 249000,
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1200&h=800&fit=crop',
    type: 'Electric',
    description:
      'The Porsche Taycan 4S delivers pure Porsche DNA in an electric package. Dual-motor all-wheel drive, precise handling, and unmistakable design make it a true sports sedan.',
    specs: {
      range: '227 miles',
      acceleration: '0-60 in 3.8s',
      topSpeed: '155 mph',
      horsepower: '522 HP',
      drivetrain: 'Dual Motor AWD',
      battery: '79.2 kWh',
      charging: '270 kW DC Fast',
      seating: '4 Adults',
    },
    features: [
      'Sport Chrono Package',
      'Porsche Active Suspension',
      'Curved 16.8" Display',
      'Bose Sound System',
      'Adaptive Cruise Control',
      'Lane Keep Assist',
      'Porsche Connect',
      'Sport Exhaust Sound',
    ],
    colors: [
      {
        name: 'Carrara White',
        hex: '#f8fafc',
        image: 'https://images.unsplash.com/photo-1611821064430-077a0579d293?w=1200',
      },
      {
        name: 'Frozen Blue',
        hex: '#3b82f6',
        image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=1200',
      },
      {
        name: 'Jet Black',
        hex: '#0f172a',
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200',
      },
      {
        name: 'Guards Red',
        hex: '#dc2626',
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200',
      },
      {
        name: 'Gentian Blue',
        hex: '#1e40af',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200',
      },
    ],
  },
  {
    _id: '7',
    make: 'BMW',
    model: 'iX M60',
    year: 2024,
    price: 108900,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&h=800&fit=crop',
    type: 'Electric',
    description:
      'The pinnacle of electric luxury. Mercedes-Benz EQS 580 features the revolutionary MBUX Hyperscreen and industry-leading range with unparalleled comfort.',
    specs: {
      range: '350 miles',
      acceleration: '0-60 in 4.1s',
      topSpeed: '130 mph',
      horsepower: '516 HP',
      drivetrain: '4MATIC AWD',
      battery: '107.8 kWh',
      charging: '200 kW DC Fast',
      seating: '5 Adults',
    },
    features: [
      'MBUX Hyperscreen (56")',
      'Executive Rear Seats',
      'Burmester 4D Surround Sound',
      'AIRMATIC Air Suspension',
      'Active Ambient Lighting',
      'Rear-Axle Steering',
      'Massage Seats',
      'HEPA Air Filtration',
    ],
    colors: [
      {
        name: 'Obsidian Black',
        hex: '#0f172a',
        image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200',
      },
      {
        name: 'Polar White',
        hex: '#f8fafc',
        image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1200',
      },
      {
        name: 'Spectral Blue',
        hex: '#3b82f6',
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200',
      },
      {
        name: 'Patagonia Red',
        hex: '#dc2626',
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200',
      },
      {
        name: 'Selenite Grey',
        hex: '#64748b',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200',
      },
    ],
  },
  {
    _id: '8',
    make: 'Rivian',
    model: 'R1T',
    year: 2024,
    price: 73000,
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200&h=800&fit=crop',
    type: 'Electric',
    description:
      "Mercedes-Benz EQE 350 brings sophisticated luxury to the electric sedan segment. With the innovative MBUX system and refined comfort, it's the perfect executive vehicle.",
    specs: {
      range: '305 miles',
      acceleration: '0-60 in 6.0s',
      topSpeed: '130 mph',
      horsepower: '288 HP',
      drivetrain: 'Rear-Wheel Drive',
      battery: '90.6 kWh',
      charging: '170 kW DC Fast',
      seating: '5 Adults',
    },
    features: [
      'MBUX Hyperscreen',
      'AIRMATIC Air Suspension',
      'Burmester Surround Sound',
      'Active Ambient Lighting',
      'Rear-Axle Steering',
      'Massage Function Seats',
      'Augmented Reality Navigation',
      'Wireless Charging',
    ],
    colors: [
      {
        name: 'Polar White',
        hex: '#f8fafc',
        image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1200',
      },
      {
        name: 'Obsidian Black',
        hex: '#0f172a',
        image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200',
      },
      {
        name: 'Spectral Blue',
        hex: '#3b82f6',
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200',
      },
      {
        name: 'Selenite Grey',
        hex: '#64748b',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200',
      },
      {
        name: 'Patagonia Red',
        hex: '#dc2626',
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200',
      },
    ],
  },
  {
    _id: '9',
    make: 'Kia',
    model: 'EV6 GT',
    year: 2024,
    price: 61600,
    image: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=1200&h=800&fit=crop',
    type: 'Electric',
    description:
      'The Mercedes EQS SUV combines the luxury and technology of the EQS sedan with spacious SUV versatility. It seats up to 7 passengers in ultimate comfort.',
    specs: {
      range: '305 miles',
      acceleration: '0-60 in 4.5s',
      topSpeed: '130 mph',
      horsepower: '536 HP',
      drivetrain: '4MATIC AWD',
      battery: '108.4 kWh',
      charging: '200 kW DC Fast',
      seating: '5-7 Adults',
    },
    features: [
      'MBUX Hyperscreen (56")',
      'Third Row Seating',
      'Burmester 4D Sound',
      'E-ACTIVE BODY CONTROL',
      'Off-Road Engineering Package',
      'HEPA Air Filtration',
      'Panoramic Sliding Sunroof',
      '7,700 lbs Towing',
    ],
    colors: [
      {
        name: 'Spectral Blue',
        hex: '#3b82f6',
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200',
      },
      {
        name: 'Obsidian Black',
        hex: '#0f172a',
        image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200',
      },
      {
        name: 'Polar White',
        hex: '#f8fafc',
        image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1200',
      },
      {
        name: 'Selenite Grey',
        hex: '#64748b',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200',
      },
      {
        name: 'Mojave Silver',
        hex: '#94a3b8',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200',
      },
    ],
  },
  {
    _id: '10',
    make: 'Ford',
    model: 'Mustang Mach-E GT',
    year: 2024,
    price: 59900,
    image: 'https://images.unsplash.com/photo-1612825173281-9a193378527e?w=1200&h=800&fit=crop',
    type: 'Electric',
    description:
      "BMW's most powerful electric SUV. The iX M60 combines M Sport performance with cutting-edge technology and luxurious comfort for the ultimate driving machine.",
    specs: {
      range: '288 miles',
      acceleration: '0-60 in 3.6s',
      topSpeed: '155 mph',
      horsepower: '619 HP',
      drivetrain: 'xDrive AWD',
      battery: '111.5 kWh',
      charging: '195 kW DC Fast',
      seating: '5 Adults',
    },
    features: [
      'M Sport Package',
      'Curved Display (14.9" + 12.3")',
      'Bowers & Wilkins Sound',
      'Adaptive Air Suspension',
      'Iconic Glow Kidney Grille',
      'Panoramic Sky Lounge Roof',
      'Heated/Ventilated Seats',
      'Laser Headlights',
    ],
    colors: [
      {
        name: 'Mineral White',
        hex: '#f8fafc',
        image: 'https://images.unsplash.com/photo-1617886903355-9354bb57751f?w=1200',
      },
      {
        name: 'Phytonic Blue',
        hex: '#1e40af',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200',
      },
      {
        name: 'Black Sapphire',
        hex: '#0f172a',
        image: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=1200',
      },
      {
        name: 'Storm Bay',
        hex: '#64748b',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200',
      },
      {
        name: 'Space Grey',
        hex: '#475569',
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200',
      },
    ],
  },
  {
    _id: '11',
    make: 'BMW',
    model: 'i4 M50',
    year: 2024,
    price: 65900,
    image: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1617886903355-9354bb57751f?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&h=800&fit=crop',
    ],
    type: 'Electric',
    description:
      'The BMW i4 M50 is the first electric M Performance vehicle. Combining iconic BMW gran coupe styling with exhilarating electric performance.',
    specs: {
      range: '271 miles',
      acceleration: '0-60 in 3.7s',
      topSpeed: '140 mph',
      horsepower: '536 HP',
      drivetrain: 'xDrive AWD',
      battery: '83.9 kWh',
      charging: '205 kW DC Fast',
      seating: '5 Adults',
    },
    features: [
      'M Sport Brakes',
      'Curved Display (14.9" + 12.3")',
      'Harman Kardon Sound',
      'Adaptive M Suspension',
      'M Sport Steering Wheel',
      'Parking Assistant Plus',
      'Extended Leather Merino',
      'Heated Front Seats',
    ],
    colors: [
      {
        name: 'Black Sapphire',
        hex: '#0f172a',
        image: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=1200',
      },
      {
        name: 'Mineral White',
        hex: '#f8fafc',
        image: 'https://images.unsplash.com/photo-1617886903355-9354bb57751f?w=1200',
      },
      {
        name: 'Phytonic Blue',
        hex: '#1e40af',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200',
      },
      {
        name: 'Space Grey',
        hex: '#475569',
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200',
      },
      {
        name: 'Storm Bay',
        hex: '#64748b',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200',
      },
    ],
  },
  {
    _id: '12',
    make: 'BMW',
    model: 'i7 xDrive60',
    year: 2024,
    price: 119300,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1617886903355-9354bb57751f?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=1200&h=800&fit=crop',
    ],
    type: 'Electric',
    description:
      "BMW i7 xDrive60 redefines luxury electric mobility. With the revolutionary Executive Lounge seating and BMW Theatre Screen, it's a first-class experience on wheels.",
    specs: {
      range: '318 miles',
      acceleration: '0-60 in 4.5s',
      topSpeed: '130 mph',
      horsepower: '536 HP',
      drivetrain: 'xDrive AWD',
      battery: '101.7 kWh',
      charging: '195 kW DC Fast',
      seating: '5 Adults',
    },
    features: [
      'Executive Lounge Seating',
      'BMW Theatre Screen (31.3")',
      'Bowers & Wilkins Diamond',
      'Executive Drive Pro',
      'Panoramic Sky Lounge',
      'Massage Seats (All)',
      'Active Comfort Doors',
      'Ambient Air Package',
    ],
    colors: [
      {
        name: 'Space Grey',
        hex: '#475569',
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200',
      },
      {
        name: 'Mineral White',
        hex: '#f8fafc',
        image: 'https://images.unsplash.com/photo-1617886903355-9354bb57751f?w=1200',
      },
      {
        name: 'Black Sapphire',
        hex: '#0f172a',
        image: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=1200',
      },
      {
        name: 'Storm Bay',
        hex: '#64748b',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200',
      },
      {
        name: 'Phytonic Blue',
        hex: '#1e40af',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200',
      },
    ],
  },
  {
    _id: '13',
    make: 'Audi',
    model: 'e-tron GT',
    year: 2024,
    price: 99900,
    image: 'https://images.unsplash.com/photo-1610768764270-790fbec18178?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1610768764270-790fbec18178?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1200&h=800&fit=crop',
    ],
    type: 'Electric',
    description:
      "Audi's electric grand tourer. The e-tron GT blends stunning design with quattro all-wheel drive performance and advanced electric technology.",
    specs: {
      range: '238 miles',
      acceleration: '0-60 in 3.9s',
      topSpeed: '152 mph',
      horsepower: '522 HP',
      drivetrain: 'Quattro AWD',
      battery: '93.4 kWh',
      charging: '270 kW DC Fast',
      seating: '4 Adults',
    },
    features: [
      'Quattro All-Wheel Drive',
      'Adaptive Air Suspension',
      'Matrix LED Headlights',
      'Bang & Olufsen 3D Sound',
      'Virtual Cockpit Plus',
      'Dynamic All-Wheel Steering',
      'Sport Seats Plus',
      'Carbon Fiber Accents',
    ],
    colors: [
      {
        name: 'Tactical Green',
        hex: '#16a34a',
        image: 'https://images.unsplash.com/photo-1610768764270-790fbec18178?w=1200',
      },
      {
        name: 'Florett Silver',
        hex: '#94a3b8',
        image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=1200',
      },
      {
        name: 'Mythos Black',
        hex: '#0f172a',
        image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1200',
      },
      {
        name: 'Kemora Grey',
        hex: '#64748b',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200',
      },
      {
        name: 'Suzuka Grey',
        hex: '#475569',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200',
      },
    ],
  },
  {
    _id: '14',
    make: 'Audi',
    model: 'Q4 e-tron',
    year: 2024,
    price: 49800,
    image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1610768764270-790fbec18178?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1200&h=800&fit=crop',
    ],
    type: 'Electric',
    description:
      "Audi Q4 e-tron brings electric mobility to the compact SUV segment. With Quattro all-wheel drive and premium Audi quality, it's the perfect daily driver.",
    specs: {
      range: '265 miles',
      acceleration: '0-60 in 5.8s',
      topSpeed: '112 mph',
      horsepower: '295 HP',
      drivetrain: 'Quattro AWD',
      battery: '82 kWh',
      charging: '135 kW DC Fast',
      seating: '5 Adults',
    },
    features: [
      'Quattro All-Wheel Drive',
      'Virtual Cockpit Plus',
      'MMI Navigation Plus',
      'Matrix LED Headlights',
      'Power Tailgate',
      'Heated Front Seats',
      'Smartphone Interface',
      'Progressive Steering',
    ],
    colors: [
      {
        name: 'Florett Silver',
        hex: '#94a3b8',
        image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=1200',
      },
      {
        name: 'Tactical Green',
        hex: '#16a34a',
        image: 'https://images.unsplash.com/photo-1610768764270-790fbec18178?w=1200',
      },
      {
        name: 'Mythos Black',
        hex: '#0f172a',
        image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1200',
      },
      {
        name: 'Kemora Grey',
        hex: '#64748b',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200',
      },
      {
        name: 'Glacier White',
        hex: '#f8fafc',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200',
      },
    ],
  },
  {
    _id: '15',
    make: 'Audi',
    model: 'e-tron S',
    year: 2024,
    price: 84800,
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1610768764270-790fbec18178?w=1200&h=800&fit=crop',
    ],
    type: 'Electric',
    description:
      'The Audi e-tron S features a tri-motor setup for incredible performance. With advanced air suspension and quattro AWD, it delivers both comfort and exhilaration.',
    specs: {
      range: '222 miles',
      acceleration: '0-60 in 4.3s',
      topSpeed: '130 mph',
      horsepower: '496 HP',
      drivetrain: 'Tri-Motor Quattro',
      battery: '95 kWh',
      charging: '150 kW DC Fast',
      seating: '5 Adults',
    },
    features: [
      'Electric Quattro Tri-Motor',
      'Adaptive Air Suspension',
      'Virtual Cockpit Plus',
      'Matrix LED Headlights',
      'Bang & Olufsen 3D Sound',
      'Panoramic Sunroof',
      'S Sport Seats',
      '4,000 lbs Towing',
    ],
    colors: [
      {
        name: 'Mythos Black',
        hex: '#0f172a',
        image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1200',
      },
      {
        name: 'Florett Silver',
        hex: '#94a3b8',
        image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=1200',
      },
      {
        name: 'Tactical Green',
        hex: '#16a34a',
        image: 'https://images.unsplash.com/photo-1610768764270-790fbec18178?w=1200',
      },
      {
        name: 'Glacier White',
        hex: '#f8fafc',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200',
      },
      {
        name: 'Kemora Grey',
        hex: '#64748b',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200',
      },
    ],
  },
  {
    _id: '16',
    make: 'Lucid',
    model: 'Air Dream Edition',
    year: 2024,
    price: 169000,
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200&h=800&fit=crop',
    ],
    type: 'Electric',
    description:
      "The world's longest-range production electric vehicle. Lucid Air Dream Edition delivers over 500 miles of range with 1,111 horsepower in a stunning luxury package.",
    specs: {
      range: '520 miles',
      acceleration: '0-60 in 2.5s',
      topSpeed: '168 mph',
      horsepower: '1,111 HP',
      drivetrain: 'Dual Motor AWD',
      battery: '118 kWh',
      charging: '300 kW DC Fast',
      seating: '5 Adults',
    },
    features: [
      'Glass Cockpit 5K Display',
      'DreamDrive Pro ADAS',
      'Surreal Sound - 21 Speakers',
      'Executive Rear Seating',
      'Nappa Leather Interior',
      'Panoramic Glass Canopy',
      'Augmented Reality Display',
      '20-Way Power Seats',
    ],
    colors: [
      {
        name: 'Zenith Red',
        hex: '#dc2626',
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200',
      },
      {
        name: 'Stellar White',
        hex: '#f8fafc',
        image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1200',
      },
      {
        name: 'Cosmos Silver',
        hex: '#94a3b8',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200',
      },
      {
        name: 'Infinite Black',
        hex: '#0f172a',
        image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200',
      },
      {
        name: 'Quantum Grey',
        hex: '#64748b',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200',
      },
    ],
  },
  {
    _id: '17',
    make: 'Lucid',
    model: 'Air Touring',
    year: 2024,
    price: 95000,
    image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200&h=800&fit=crop',
    ],
    type: 'Electric',
    description:
      "Lucid Air Touring offers remarkable range and performance at a more accessible price point. With 425 miles of range and 620 horsepower, it's an engineering marvel.",
    specs: {
      range: '425 miles',
      acceleration: '0-60 in 3.2s',
      topSpeed: '155 mph',
      horsepower: '620 HP',
      drivetrain: 'Dual Motor AWD',
      battery: '92 kWh',
      charging: '300 kW DC Fast',
      seating: '5 Adults',
    },
    features: [
      'Glass Cockpit Display',
      'DreamDrive ADAS',
      'Surreal Sound System',
      'Premium Nappa Leather',
      'Panoramic Glass Canopy',
      'Wireless Phone Charging',
      'Multi-Zone Climate',
      'Power Trunk',
    ],
    colors: [
      {
        name: 'Cosmos Silver',
        hex: '#94a3b8',
        image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200',
      },
      {
        name: 'Stellar White',
        hex: '#f8fafc',
        image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1200',
      },
      {
        name: 'Infinite Black',
        hex: '#0f172a',
        image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200',
      },
      {
        name: 'Zenith Red',
        hex: '#dc2626',
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200',
      },
      {
        name: 'Quantum Grey',
        hex: '#64748b',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200',
      },
    ],
  },
  {
    _id: '18',
    make: 'Rivian',
    model: 'R1T',
    year: 2024,
    price: 73000,
    image: 'https://images.unsplash.com/photo-1619976215249-5c47c5c629e4?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1619976215249-5c47c5c629e4?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200&h=800&fit=crop',
    ],
    type: 'Electric',
    description:
      "The world's first electric adventure truck. Rivian R1T combines quad-motor performance with serious off-road capability and innovative storage solutions.",
    specs: {
      range: '314 miles',
      acceleration: '0-60 in 3.0s',
      topSpeed: '125 mph',
      horsepower: '835 HP',
      drivetrain: 'Quad Motor AWD',
      battery: '135 kWh',
      charging: '220 kW DC Fast',
      seating: '5 Adults',
    },
    features: [
      'Quad Motor System',
      'Gear Tunnel Storage',
      'Tank Turn Mode',
      'Underbody Armor',
      'Camp Kitchen Option',
      'Air Suspension',
      '11,000 lbs Towing',
      'Adventure Gear Shop',
    ],
    colors: [
      {
        name: 'Launch Green',
        hex: '#16a34a',
        image: 'https://images.unsplash.com/photo-1619976215249-5c47c5c629e4?w=1200',
      },
      {
        name: 'Glacier White',
        hex: '#f8fafc',
        image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200',
      },
      {
        name: 'Limestone',
        hex: '#cbd5e1',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200',
      },
      {
        name: 'El Cap Granite',
        hex: '#64748b',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200',
      },
      {
        name: 'Midnight',
        hex: '#0f172a',
        image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200',
      },
    ],
  },
  {
    _id: '19',
    make: 'Rivian',
    model: 'R1S',
    year: 2024,
    price: 78000,
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1619976215249-5c47c5c629e4?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200&h=800&fit=crop',
    ],
    type: 'Electric',
    description:
      'Rivian R1S is the ultimate electric adventure SUV. With seating for 7, quad-motor performance, and serious off-road capability, it redefines the family SUV.',
    specs: {
      range: '321 miles',
      acceleration: '0-60 in 3.0s',
      topSpeed: '125 mph',
      horsepower: '835 HP',
      drivetrain: 'Quad Motor AWD',
      battery: '135 kWh',
      charging: '220 kW DC Fast',
      seating: '7 Adults',
    },
    features: [
      'Quad Motor System',
      'Third Row Seating',
      'Gear Tunnel Storage',
      'Tank Turn Mode',
      'Air Suspension',
      'Underbody Armor',
      '7,700 lbs Towing',
      'Camp Kitchen Option',
    ],
    colors: [
      {
        name: 'Glacier White',
        hex: '#f8fafc',
        image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200',
      },
      {
        name: 'Launch Green',
        hex: '#16a34a',
        image: 'https://images.unsplash.com/photo-1619976215249-5c47c5c629e4?w=1200',
      },
      {
        name: 'Midnight',
        hex: '#0f172a',
        image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200',
      },
      {
        name: 'Limestone',
        hex: '#cbd5e1',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200',
      },
      {
        name: 'El Cap Granite',
        hex: '#64748b',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200',
      },
    ],
  },
  {
    _id: '20',
    make: 'Ford',
    model: 'Mustang Mach-E GT',
    year: 2024,
    price: 63995,
    image: 'https://images.unsplash.com/photo-1612825173281-9a193378527e?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1612825173281-9a193378527e?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200&h=800&fit=crop',
    ],
    type: 'Electric',
    description:
      "Ford Mustang Mach-E GT brings legendary Mustang performance to the electric age. With dual motors and track-inspired handling, it's a true performance SUV.",
    specs: {
      range: '270 miles',
      acceleration: '0-60 in 3.5s',
      topSpeed: '124 mph',
      horsepower: '480 HP',
      drivetrain: 'Dual Motor AWD',
      battery: '91 kWh',
      charging: '150 kW DC Fast',
      seating: '5 Adults',
    },
    features: [
      'MagneRide Suspension',
      'GT Performance Edition',
      '15.5" SYNC 4A Touchscreen',
      'B&O Unleashed Sound',
      'Hands-Free Driving',
      'Panoramic Fixed-Glass Roof',
      'Heated/Cooled Seats',
      '360-Degree Camera',
    ],
    colors: [
      {
        name: 'Rapid Red',
        hex: '#dc2626',
        image: 'https://images.unsplash.com/photo-1612825173281-9a193378527e?w=1200',
      },
      {
        name: 'Grabber Blue',
        hex: '#3b82f6',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200',
      },
      {
        name: 'Shadow Black',
        hex: '#0f172a',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200',
      },
      {
        name: 'Iconic Silver',
        hex: '#94a3b8',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200',
      },
      {
        name: 'Carbonized Gray',
        hex: '#475569',
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200',
      },
    ],
  },
  {
    _id: '21',
    make: 'Ford',
    model: 'F-150 Lightning',
    year: 2024,
    price: 55974,
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1612825173281-9a193378527e?w=1200&h=800&fit=crop',
    ],
    type: 'Electric',
    description:
      "Ford F-150 Lightning revolutionizes America's best-selling truck. With incredible torque, 10,000 lbs towing, and Pro Power Onboard, it's the ultimate work truck.",
    specs: {
      range: '320 miles',
      acceleration: '0-60 in 4.0s',
      topSpeed: '110 mph',
      horsepower: '563 HP',
      drivetrain: 'Dual Motor AWD',
      battery: '131 kWh',
      charging: '155 kW DC Fast',
      seating: '5 Adults',
    },
    features: [
      'Pro Power Onboard (9.6kW)',
      '10,000 lbs Towing',
      'Mega Power Frunk',
      'Hands-Free Driving',
      '15.5" SYNC 4A',
      'Onboard Scales',
      'Zone Lighting',
      'Intelligent Backup Power',
    ],
    colors: [
      {
        name: 'Antimatter Blue',
        hex: '#1e40af',
        image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200',
      },
      {
        name: 'Oxford White',
        hex: '#f8fafc',
        image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200',
      },
      {
        name: 'Rapid Red',
        hex: '#dc2626',
        image: 'https://images.unsplash.com/photo-1612825173281-9a193378527e?w=1200',
      },
      {
        name: 'Agate Black',
        hex: '#0f172a',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200',
      },
      {
        name: 'Iconic Silver',
        hex: '#94a3b8',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200',
      },
    ],
  },
  {
    _id: '22',
    make: 'Hyundai',
    model: 'IONIQ 5 N',
    year: 2024,
    price: 66000,
    image: 'https://images.unsplash.com/photo-1617886903355-9354bb57751f?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1617886903355-9354bb57751f?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&h=800&fit=crop',
    ],
    type: 'Electric',
    description:
      'Hyundai IONIQ 5 N is the high-performance version with N Performance tuning. With 641 horsepower and track-ready features, it delivers electric excitement.',
    specs: {
      range: '221 miles',
      acceleration: '0-60 in 3.0s',
      topSpeed: '162 mph',
      horsepower: '641 HP',
      drivetrain: 'Dual Motor AWD',
      battery: '84 kWh',
      charging: '350 kW DC Fast',
      seating: '5 Adults',
    },
    features: [
      'N Performance Package',
      'N Grin Boost',
      'Electronic Limited Slip',
      'Launch Control',
      'N Sound+ Synthesizer',
      'Track-Optimized Suspension',
      'Regenerative Paddles',
      'Dual 12.3" Displays',
    ],
    colors: [
      {
        name: 'Performance Blue',
        hex: '#3b82f6',
        image: 'https://images.unsplash.com/photo-1617886903355-9354bb57751f?w=1200',
      },
      {
        name: 'Cyber Grey',
        hex: '#64748b',
        image: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=1200',
      },
      {
        name: 'Phantom Black',
        hex: '#0f172a',
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200',
      },
      {
        name: 'Atlas White',
        hex: '#f8fafc',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200',
      },
      {
        name: 'Digital Teal',
        hex: '#14b8a6',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200',
      },
    ],
  },
  {
    _id: '23',
    make: 'Hyundai',
    model: 'IONIQ 6 SE',
    year: 2024,
    price: 45500,
    image: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1617886903355-9354bb57751f?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&h=800&fit=crop',
    ],
    type: 'Electric',
    description:
      'Hyundai IONIQ 6 is a streamlined electric sedan with exceptional aerodynamics and 361-mile range, perfect for long-distance electric driving.',
    specs: {
      range: '361 miles',
      acceleration: '0-60 in 5.1s',
      topSpeed: '115 mph',
      horsepower: '320 HP',
      drivetrain: 'Dual Motor AWD',
      battery: '77.4 kWh',
      charging: '350 kW DC Fast',
      seating: '5 Adults',
    },
    features: [
      'Streamlined Design (0.21 Cd)',
      'Vehicle-to-Load (V2L)',
      'Dual 12.3" Displays',
      'Highway Driving Assist 2',
      'Remote Smart Parking',
      'Relaxation Comfort Seats',
      'Bose Premium Sound',
      'Ambient Lighting (64 Colors)',
    ],
    colors: [
      {
        name: 'Cyber Grey',
        hex: '#64748b',
        image: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=1200',
      },
      {
        name: 'Atlas White',
        hex: '#f8fafc',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200',
      },
      {
        name: 'Digital Teal',
        hex: '#14b8a6',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200',
      },
      {
        name: 'Phantom Black',
        hex: '#0f172a',
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200',
      },
      {
        name: 'Performance Blue',
        hex: '#3b82f6',
        image: 'https://images.unsplash.com/photo-1617886903355-9354bb57751f?w=1200',
      },
    ],
  },
  {
    _id: '24',
    make: 'Kia',
    model: 'EV6 GT',
    year: 2024,
    price: 61600,
    image: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1617886903355-9354bb57751f?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200&h=800&fit=crop',
    ],
    type: 'Electric',
    description:
      'Kia EV6 GT is a high-performance electric crossover with 576 horsepower and ultra-fast charging that challenges sports cars.',
    specs: {
      range: '206 miles',
      acceleration: '0-60 in 3.4s',
      topSpeed: '162 mph',
      horsepower: '576 HP',
      drivetrain: 'Dual Motor AWD',
      battery: '77.4 kWh',
      charging: '350 kW DC Fast',
      seating: '5 Adults',
    },
    features: [
      'GT Performance Package',
      'Electronic Limited Slip',
      'Launch Control',
      'GT-Specific Suspension',
      'Curved Panoramic Display',
      'Meridian Premium Sound',
      'Augmented Reality HUD',
      'Vehicle-to-Load (V2L)',
    ],
    colors: [
      {
        name: 'GT Blue',
        hex: '#3b82f6',
        image: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=1200',
      },
      {
        name: 'Snow White Pearl',
        hex: '#f8fafc',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200',
      },
      {
        name: 'Midnight Black',
        hex: '#0f172a',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200',
      },
      {
        name: 'Glacier',
        hex: '#cbd5e1',
        image: 'https://images.unsplash.com/photo-1617886903355-9354bb57751f?w=1200',
      },
      {
        name: 'Urban Yellow',
        hex: '#eab308',
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200',
      },
    ],
  },
  {
    _id: '25',
    make: 'Kia',
    model: 'EV9 GT-Line',
    year: 2024,
    price: 73900,
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1617886903355-9354bb57751f?w=1200&h=800&fit=crop',
    ],
    type: 'Electric',
    description:
      'Kia EV9 is a full-size electric SUV with three rows of seating, combining sustainability with luxury for the whole family.',
    specs: {
      range: '304 miles',
      acceleration: '0-60 in 4.5s',
      topSpeed: '124 mph',
      horsepower: '379 HP',
      drivetrain: 'Dual Motor AWD',
      battery: '99.8 kWh',
      charging: '350 kW DC Fast',
      seating: '6-7 Adults',
    },
    features: [
      'Three Row Seating',
      'Relaxation Seats',
      'Curved Panoramic Display',
      'Highway Driving Assist 2',
      'Remote Smart Parking',
      'Meridian Premium Audio',
      '5,000 lbs Towing',
      'Vehicle-to-Load (V2L)',
    ],
    colors: [
      {
        name: 'Moonscape',
        hex: '#64748b',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200',
      },
      {
        name: 'Snow White Pearl',
        hex: '#f8fafc',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200',
      },
      {
        name: 'Aurora Black',
        hex: '#0f172a',
        image: 'https://images.unsplash.com/photo-1617886903355-9354bb57751f?w=1200',
      },
      {
        name: 'GT Blue',
        hex: '#3b82f6',
        image: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=1200',
      },
      {
        name: 'Jungle Green',
        hex: '#16a34a',
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200',
      },
    ],
  },
  {
    _id: '26',
    make: 'Genesis',
    model: 'Electrified GV70',
    year: 2024,
    price: 65850,
    image: 'https://images.unsplash.com/photo-1617886903355-9354bb57751f?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1617886903355-9354bb57751f?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=1200&h=800&fit=crop',
    ],
    type: 'Electric',
    description:
      'Genesis Electrified GV70 brings Korean luxury to the electric SUV segment with exceptional quality and stunning design.',
    specs: {
      range: '236 miles',
      acceleration: '0-60 in 4.5s',
      topSpeed: '149 mph',
      horsepower: '429 HP',
      drivetrain: 'Dual Motor AWD',
      battery: '77.4 kWh',
      charging: '350 kW DC Fast',
      seating: '5 Adults',
    },
    features: [
      'Crest Grille with LEDs',
      '14.5" Infotainment Display',
      'Bang & Olufsen Sound',
      'Electronic Suspension',
      'Highway Driving Assist 2',
      'Smart Park Assist',
      'Nappa Leather Interior',
      'Augmented Reality Navigation',
    ],
    colors: [
      {
        name: 'Uyuni White',
        hex: '#f8fafc',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200',
      },
      {
        name: 'Mauna Red',
        hex: '#dc2626',
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200',
      },
      {
        name: 'Adriatic Blue',
        hex: '#3b82f6',
        image: 'https://images.unsplash.com/photo-1617886903355-9354bb57751f?w=1200',
      },
      {
        name: 'Savile Silver',
        hex: '#94a3b8',
        image: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=1200',
      },
      {
        name: 'Ceres Blue',
        hex: '#1e40af',
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200',
      },
    ],
  },
  {
    _id: '27',
    make: 'Genesis',
    model: 'GV60 Performance',
    year: 2024,
    price: 67890,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1617886903355-9354bb57751f?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=1200&h=800&fit=crop',
    ],
    type: 'Electric',
    description:
      'Genesis GV60 Performance is a dedicated electric crossover with Boost Mode and Crystal Sphere shifter, both innovative and powerful.',
    specs: {
      range: '235 miles',
      acceleration: '0-60 in 3.7s',
      topSpeed: '146 mph',
      horsepower: '429 HP',
      drivetrain: 'Dual Motor AWD',
      battery: '77.4 kWh',
      charging: '350 kW DC Fast',
      seating: '5 Adults',
    },
    features: [
      'Boost Mode (483 HP)',
      'Crystal Sphere Shifter',
      'Dual 12.3" Displays',
      'Bang & Olufsen Sound',
      'Face Connect Entry',
      'Nappa Leather Interior',
      'Vehicle-to-Load (V2L)',
      'Smart Park Assist',
    ],
    colors: [
      {
        name: 'Ceres Blue',
        hex: '#1e40af',
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200',
      },
      {
        name: 'Uyuni White',
        hex: '#f8fafc',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200',
      },
      {
        name: 'Adriatic Blue',
        hex: '#3b82f6',
        image: 'https://images.unsplash.com/photo-1617886903355-9354bb57751f?w=1200',
      },
      {
        name: 'Midnight Black',
        hex: '#0f172a',
        image: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=1200',
      },
      {
        name: 'Savile Silver',
        hex: '#94a3b8',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200',
      },
    ],
  },
  {
    _id: '28',
    make: 'Polestar',
    model: '2 Long Range',
    year: 2024,
    price: 49900,
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200&h=800&fit=crop',
    ],
    type: 'Electric',
    description:
      'Polestar 2 Long Range delivers Scandinavian design and performance with Google built-in and sustainable materials.',
    specs: {
      range: '320 miles',
      acceleration: '0-60 in 4.3s',
      topSpeed: '127 mph',
      horsepower: '408 HP',
      drivetrain: 'Dual Motor AWD',
      battery: '82 kWh',
      charging: '205 kW DC Fast',
      seating: '5 Adults',
    },
    features: [
      'Google Built-In',
      '11.2" Touchscreen',
      'Harman Kardon Audio',
      'Pilot Assist',
      'Performance Pack',
      'Pixel LED Headlights',
      'Sustainable Materials',
      'Panoramic Glass Roof',
    ],
    colors: [
      {
        name: 'Midnight',
        hex: '#0f172a',
        image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200',
      },
      {
        name: 'Snow',
        hex: '#f8fafc',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200',
      },
      {
        name: 'Thunder',
        hex: '#64748b',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200',
      },
      {
        name: 'Magnesium',
        hex: '#94a3b8',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200',
      },
      {
        name: 'Moon',
        hex: '#cbd5e1',
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200',
      },
    ],
  },
  {
    _id: '29',
    make: 'Polestar',
    model: '3 Long Range',
    year: 2024,
    price: 73400,
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop',
    ],
    type: 'Electric',
    description:
      'Polestar 3 is a luxury electric performance SUV with lidar technology and Scandinavian refinement that sets new standards.',
    specs: {
      range: '315 miles',
      acceleration: '0-60 in 4.8s',
      topSpeed: '130 mph',
      horsepower: '489 HP',
      drivetrain: 'Dual Motor AWD',
      battery: '111 kWh',
      charging: '250 kW DC Fast',
      seating: '5 Adults',
    },
    features: [
      'Lidar Technology',
      '14.5" Center Display',
      'Bowers & Wilkins Audio',
      'DualMotor AWD',
      'Active Dampers',
      'Google Built-In',
      'Sustainable Interior',
      '5,070 lbs Towing',
    ],
    colors: [
      {
        name: 'Thunder',
        hex: '#64748b',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200',
      },
      {
        name: 'Midnight',
        hex: '#0f172a',
        image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200',
      },
      {
        name: 'Snow',
        hex: '#f8fafc',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200',
      },
      {
        name: 'Magnesium',
        hex: '#94a3b8',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200',
      },
      {
        name: 'Storm',
        hex: '#475569',
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200',
      },
    ],
  },
  {
    _id: '30',
    make: 'Chevrolet',
    model: 'Blazer EV RS',
    year: 2024,
    price: 56715,
    image: 'https://images.unsplash.com/photo-1612825173281-9a193378527e?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1612825173281-9a193378527e?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200&h=800&fit=crop',
    ],
    type: 'Electric',
    description:
      'Chevrolet Blazer EV RS brings bold American styling to the electric SUV market with impressive performance and spacious interior.',
    specs: {
      range: '293 miles',
      acceleration: '0-60 in 4.0s',
      topSpeed: '115 mph',
      horsepower: '557 HP',
      drivetrain: 'Dual Motor AWD',
      battery: '102 kWh',
      charging: '190 kW DC Fast',
      seating: '5 Adults',
    },
    features: [
      'Wide Open Watts Mode',
      '17.7" Infotainment Display',
      'Super Cruise Hands-Free',
      'Bose Premium Audio',
      'Adaptive Cruise Control',
      'Panoramic Fixed Glass Roof',
      'Power Liftgate',
      '1,500 lbs Towing',
    ],
    colors: [
      {
        name: 'Radiant Red',
        hex: '#dc2626',
        image: 'https://images.unsplash.com/photo-1612825173281-9a193378527e?w=1200',
      },
      {
        name: 'Riptide Blue',
        hex: '#3b82f6',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200',
      },
      {
        name: 'Black',
        hex: '#0f172a',
        image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200',
      },
      {
        name: 'Summit White',
        hex: '#f8fafc',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200',
      },
      {
        name: 'Sterling Grey',
        hex: '#64748b',
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200',
      },
    ],
  },
]

export default function CarDetailPage({ params }: { params: { id: string } }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [carDetails, setCarDetails] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [showTestDriveModal, setShowTestDriveModal] = useState(false)
  const [showCartModal, setShowCartModal] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    message: '',
  })

  useEffect(() => {
    // Find car by ID
    const car = carsDatabase.find(c => c._id === params.id)
    if (car) {
      setCarDetails(car)
    }
    setLoading(false)

    // Check if car is already saved
    const savedCars = JSON.parse(localStorage.getItem('savedCars') || '[]')
    setIsSaved(savedCars.some((saved: any) => saved.id === params.id))
  }, [params.id])

  const toggleSave = () => {
    const savedCars = JSON.parse(localStorage.getItem('savedCars') || '[]')

    if (isSaved) {
      // Remove from saved
      const filtered = savedCars.filter((saved: any) => saved.id !== params.id)
      localStorage.setItem('savedCars', JSON.stringify(filtered))
      setIsSaved(false)
      alert('Removed from saved cars!')
    } else {
      // Add to saved
      const newSave = {
        id: carDetails._id,
        name: `${carDetails.make} ${carDetails.model}`,
        brand: carDetails.make,
        price: carDetails.price,
        image: carDetails.image,
        savedDate: new Date().toISOString().split('T')[0],
      }
      savedCars.push(newSave)
      localStorage.setItem('savedCars', JSON.stringify(savedCars))
      setIsSaved(true)
      alert('Added to saved cars!')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 pt-20 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (!carDetails) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 pt-20">
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Car Not Found</h1>
          <p className="text-gray-400 mb-8">The vehicle you're looking for doesn't exist.</p>
          <Link
            href="/cars"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Back to All Cars
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          href="/cars"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6"
        >
          <ArrowLeftIcon className="w-5 h-5 mr-2" />
          Back to All Cars
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            {/* Main Image */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-800 shadow-2xl">
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                src={carDetails.image}
                alt={`${carDetails.make} ${carDetails.model}`}
                className="w-full h-full object-cover"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  onClick={toggleSave}
                  className={`p-3 backdrop-blur-md rounded-full transition-all ${
                    isSaved ? 'bg-red-500/90 hover:bg-red-600' : 'bg-white/20 hover:bg-white/30'
                  }`}
                >
                  <HeartIcon
                    className={`w-6 h-6 ${isSaved ? 'fill-white text-white' : 'text-white'}`}
                  />
                </button>
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: `${carDetails.make} ${carDetails.model}`,
                        text: `Check out this ${carDetails.make} ${carDetails.model}!`,
                        url: window.location.href,
                      })
                    } else {
                      alert('Link copied to clipboard!')
                      navigator.clipboard.writeText(window.location.href)
                    }
                  }}
                  className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors"
                >
                  <ShareIcon className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Details Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {carDetails.type}
                </span>
                <span className="text-gray-400">{carDetails.year}</span>
              </div>
              <h1 className="text-5xl font-bold text-white mb-2">
                {carDetails.make} {carDetails.model}
              </h1>
              <p className="text-gray-300 text-lg">{carDetails.description}</p>
            </div>

            <div className="flex items-baseline gap-4">
              <span className="text-5xl font-bold text-blue-400">
                ${carDetails.price.toLocaleString()}
              </span>
              <span className="text-gray-400">MSRP</span>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => setShowTestDriveModal(true)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                Schedule Test Drive
              </button>
              <button
                onClick={() => setShowCartModal(true)}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingCartIcon className="w-6 h-6" />
                Reserve Now
              </button>
            </div>

            {/* Specifications */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h3 className="text-white font-bold text-xl mb-4">Technical Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(carDetails.specs).map(([key, value]) => (
                  <div key={key} className="border-b border-white/10 pb-3">
                    <p className="text-gray-400 text-sm capitalize mb-1">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </p>
                    <p className="text-white font-semibold">{String(value)}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h3 className="text-white font-bold text-xl mb-4">Premium Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {carDetails.features.map((feature: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Financing */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
              <h3 className="font-bold text-xl mb-2">Flexible Financing Available</h3>
              <p className="mb-4">
                Starting at ${Math.round(carDetails.price / 72)}/month for 72 months with approved
                credit
              </p>
              <button
                onClick={() =>
                  alert(
                    `Financing Calculator\n\n${carDetails.make} ${
                      carDetails.model
                    }\nPrice: $${carDetails.price.toLocaleString()}\n\nEstimated Monthly Payment Options:\n• 36 months: $${Math.round(
                      carDetails.price / 36
                    )}/mo\n• 60 months: $${Math.round(
                      carDetails.price / 60
                    )}/mo\n• 72 months: $${Math.round(
                      carDetails.price / 72
                    )}/mo\n\n*Rates subject to credit approval`
                  )
                }
                className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Calculate Payment
              </button>
            </div>
          </motion.div>
        </div>

        {/* Test Drive Modal */}
        {showTestDriveModal && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 max-w-md w-full border border-white/20 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Schedule Test Drive</h2>
                <button
                  onClick={() => setShowTestDriveModal(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="mb-6">
                <p className="text-gray-300 mb-2">
                  {carDetails.make} {carDetails.model}
                </p>
                <p className="text-blue-400 font-semibold text-lg">
                  ${carDetails.price.toLocaleString()}
                </p>
              </div>

              <form
                onSubmit={e => {
                  e.preventDefault()
                  alert(
                    `Test Drive Scheduled!\n\nVehicle: ${carDetails.make} ${carDetails.model}\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPreferred Date: ${formData.preferredDate}\n\nA representative will contact you within 24 hours to confirm.`
                  )
                  setShowTestDriveModal(false)
                  setFormData({ name: '', email: '', phone: '', preferredDate: '', message: '' })
                }}
                className="space-y-4"
              >
                <div>
                  <label className="text-white text-sm font-medium mb-1 block">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="text-white text-sm font-medium mb-1 block">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="text-white text-sm font-medium mb-1 block">Phone *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="text-white text-sm font-medium mb-1 block">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={e => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="text-white text-sm font-medium mb-1 block">
                    Message (Optional)
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    rows={3}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Any specific questions or preferences?"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowTestDriveModal(false)}
                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg font-semibold transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
                  >
                    Schedule Test Drive
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}

        {/* Reserve Now (Cart) Modal */}
        {showCartModal && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 max-w-md w-full border border-white/20 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Reserve Vehicle</h2>
                <button
                  onClick={() => setShowCartModal(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="mb-6 bg-white/5 p-4 rounded-lg border border-white/10">
                <p className="text-gray-300 mb-1">
                  {carDetails.make} {carDetails.model}
                </p>
                <p className="text-blue-400 font-bold text-2xl mb-2">
                  ${carDetails.price.toLocaleString()}
                </p>
                <div className="text-sm text-gray-400">
                  <p>• {carDetails.specs.horsepower}</p>
                  <p>• {carDetails.specs.range}</p>
                  <p>• {carDetails.specs.acceleration}</p>
                </div>
              </div>

              <form
                onSubmit={e => {
                  e.preventDefault()
                  alert(
                    `Reservation Confirmed!\n\nVehicle: ${carDetails.make} ${
                      carDetails.model
                    }\nPrice: $${carDetails.price.toLocaleString()}\n\nName: ${
                      formData.name
                    }\nEmail: ${formData.email}\nPhone: ${
                      formData.phone
                    }\n\nA $1,000 refundable deposit will be required to complete your reservation.\n\nOur team will contact you within 24 hours with next steps.`
                  )
                  setShowCartModal(false)
                  setFormData({ name: '', email: '', phone: '', preferredDate: '', message: '' })
                }}
                className="space-y-4"
              >
                <div>
                  <label className="text-white text-sm font-medium mb-1 block">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="text-white text-sm font-medium mb-1 block">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="text-white text-sm font-medium mb-1 block">Phone *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <p className="text-green-300 text-sm">
                    ✓ Reservation requires $1,000 refundable deposit
                    <br />
                    ✓ Lock in current pricing
                    <br />✓ Priority delivery scheduling
                  </p>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowCartModal(false)}
                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg font-semibold transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors"
                  >
                    Reserve Now
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  )
}
