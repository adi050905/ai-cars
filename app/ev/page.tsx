'use client'

import { useState } from 'react'
import {
  BoltIcon,
  MapPinIcon,
  BanknotesIcon,
  SparklesIcon,
  ChartBarIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline'
import { formatNumber } from '@/utils/formatNumber'

export default function EVSolutionsPage() {
  const [batterySize, setBatterySize] = useState(75)
  const [currentCharge, setCurrentCharge] = useState(20)
  const [targetCharge, setTargetCharge] = useState(80)
  const [chargingPower, setChargingPower] = useState(150)
  const [milesPerYear, setMilesPerYear] = useState(12000)

  const energyNeeded = (batterySize * (targetCharge - currentCharge)) / 100
  const chargingTime = (energyNeeded / chargingPower) * 60
  const chargingCost = energyNeeded * 0.13

  const gasCost = (milesPerYear / 25) * 3.5
  const evCost = (milesPerYear / 3) * 0.13
  const annualSavings = gasCost - evCost
  const fiveYearSavings = annualSavings * 5

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(168,85,247,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(6,182,212,0.15),transparent_50%)]"></div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-heading font-black gradient-text-electric mb-4">
            EV Solutions
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Power your journey with our comprehensive EV charging solutions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="floating-card">
            <BoltIcon className="w-12 h-12 text-electric-400 mx-auto mb-4" />
            <div className="text-4xl font-bold gradient-text-electric mb-2">600K+</div>
            <div className="text-slate-300">Charging Stations</div>
          </div>
          <div className="floating-card">
            <MapPinIcon className="w-12 h-12 text-electric-400 mx-auto mb-4" />
            <div className="text-4xl font-bold gradient-text-electric mb-2">180+</div>
            <div className="text-slate-300">Countries</div>
          </div>
          <div className="floating-card">
            <SparklesIcon className="w-12 h-12 text-electric-400 mx-auto mb-4" />
            <div className="text-4xl font-bold gradient-text-electric mb-2">95%</div>
            <div className="text-slate-300">Uptime</div>
          </div>
          <div className="floating-card">
            <ChartBarIcon className="w-12 h-12 text-electric-400 mx-auto mb-4" />
            <div className="text-4xl font-bold gradient-text-electric mb-2">24/7</div>
            <div className="text-slate-300">Support</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="glass-morphism-hover neon-border p-8 rounded-2xl">
            <h2 className="text-3xl font-heading font-bold gradient-text mb-6">
              <BoltIcon className="w-8 h-8 inline-block mr-2 text-electric-400" />
              Charging Time Calculator
            </h2>
            <p className="text-slate-300 mb-6">Calculate how long it takes to charge your EV</p>
            <div className="space-y-6">
              <div>
                <label className="block text-slate-300 mb-2 font-medium">
                  Battery Size:{' '}
                  <span className="text-electric-400 font-bold">{batterySize} kWh</span>
                </label>
                <input
                  type="range"
                  min="40"
                  max="150"
                  step="5"
                  value={batterySize}
                  onChange={e => setBatterySize(Number(e.target.value))}
                  className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-electric-500"
                />
              </div>
              <div>
                <label className="block text-slate-300 mb-2 font-medium">
                  Current Charge:{' '}
                  <span className="text-electric-400 font-bold">{currentCharge}%</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value={currentCharge}
                  onChange={e => setCurrentCharge(Number(e.target.value))}
                  className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-electric-500"
                />
              </div>
              <div>
                <label className="block text-slate-300 mb-2 font-medium">
                  Target Charge:{' '}
                  <span className="text-electric-400 font-bold">{targetCharge}%</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value={targetCharge}
                  onChange={e => setTargetCharge(Number(e.target.value))}
                  className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-electric-500"
                />
              </div>
              <div>
                <label className="block text-slate-300 mb-2 font-medium">
                  Charging Power:{' '}
                  <span className="text-electric-400 font-bold">{chargingPower} kW</span>
                </label>
                <input
                  type="range"
                  min="7"
                  max="350"
                  step="1"
                  value={chargingPower}
                  onChange={e => setChargingPower(Number(e.target.value))}
                  className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-electric-500"
                />
              </div>
              <div className="glass-morphism neon-border rounded-xl p-6 mt-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-slate-400 text-sm uppercase tracking-wide mb-1">Time</p>
                    <p className="text-3xl font-bold gradient-text-electric">
                      {chargingTime.toFixed(0)}
                      <span className="text-lg">min</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm uppercase tracking-wide mb-1">Energy</p>
                    <p className="text-3xl font-bold gradient-text-electric">
                      {energyNeeded.toFixed(1)}
                      <span className="text-lg">kWh</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm uppercase tracking-wide mb-1">Cost</p>
                    <p className="text-3xl font-bold gradient-text-electric">
                      ${chargingCost.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-morphism-hover neon-border p-8 rounded-2xl">
            <h2 className="text-3xl font-heading font-bold gradient-text mb-6">
              <BanknotesIcon className="w-8 h-8 inline-block mr-2 text-electric-400" />
              EV Savings Calculator
            </h2>
            <p className="text-slate-300 mb-6">
              See how much you can save by switching to an electric vehicle.
            </p>
            <div className="space-y-6">
              <div>
                <label className="block text-slate-300 mb-2 font-medium">
                  Miles Per Year:{' '}
                  <span className="text-electric-400 font-bold">{formatNumber(milesPerYear)}</span>
                </label>
                <input
                  type="range"
                  min="5000"
                  max="30000"
                  step="1000"
                  value={milesPerYear}
                  onChange={e => setMilesPerYear(Number(e.target.value))}
                  className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-electric-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="glass-morphism border-l-4 border-red-500 rounded-lg p-4">
                  <p className="text-slate-400 text-sm uppercase tracking-wide">Gas Annual Cost</p>
                  <p className="text-2xl font-bold text-red-400">${gasCost.toFixed(0)}</p>
                </div>
                <div className="glass-morphism border-l-4 border-green-500 rounded-lg p-4">
                  <p className="text-slate-400 text-sm uppercase tracking-wide">EV Annual Cost</p>
                  <p className="text-2xl font-bold text-green-400">${evCost.toFixed(0)}</p>
                </div>
              </div>
              <div className="glass-morphism neon-border rounded-xl p-6 mt-6">
                <p className="text-slate-400 text-sm uppercase tracking-wide mb-2 text-center">
                  Annual Savings
                </p>
                <p className="text-5xl md:text-6xl font-bold gradient-text-electric text-center">
                  ${annualSavings.toFixed(0)}
                </p>
                <p className="text-slate-300 text-center mt-3 flex items-center justify-center">
                  <SparklesIcon className="w-4 h-4 mr-2 text-electric-400" />
                  5-Year Savings:{' '}
                  <span className="font-bold text-electric-400 ml-2">
                    ${fiveYearSavings.toFixed(0)}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-8 text-center">
            <BoltIcon className="w-8 h-8 inline-block mr-2 text-electric-400" />
            Find Charging Stations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a
              href="https://www.tesla.com/findus"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-morphism-hover rounded-xl p-6 card-hover group"
            >
              <h3 className="text-xl font-bold text-white group-hover:gradient-text-electric mb-2 transition-all">
                Tesla Supercharger
              </h3>
              <p className="text-slate-300 flex items-center mb-1">
                <BoltIcon className="w-4 h-4 mr-2 text-electric-400" />
                50,000+ Stations
              </p>
              <p className="text-slate-400 text-sm flex items-center">
                <SparklesIcon className="w-4 h-4 mr-2 text-electric-400" />
                Up to 250 kW
              </p>
            </a>
            <a
              href="https://www.chargepoint.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-morphism-hover rounded-xl p-6 card-hover group"
            >
              <h3 className="text-xl font-bold text-white group-hover:gradient-text-electric mb-2 transition-all">
                ChargePoint
              </h3>
              <p className="text-slate-300 flex items-center mb-1">
                <BoltIcon className="w-4 h-4 mr-2 text-electric-400" />
                200,000+ Stations
              </p>
              <p className="text-slate-400 text-sm flex items-center">
                <SparklesIcon className="w-4 h-4 mr-2 text-electric-400" />
                Up to 350 kW
              </p>
            </a>
            <a
              href="https://www.electrifyamerica.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-morphism-hover rounded-xl p-6 card-hover group"
            >
              <h3 className="text-xl font-bold text-white group-hover:gradient-text-electric mb-2 transition-all">
                Electrify America
              </h3>
              <p className="text-slate-300 flex items-center mb-1">
                <BoltIcon className="w-4 h-4 mr-2 text-electric-400" />
                3,500+ Stations
              </p>
              <p className="text-slate-400 text-sm flex items-center">
                <SparklesIcon className="w-4 h-4 mr-2 text-electric-400" />
                Up to 350 kW
              </p>
            </a>
            <a
              href="https://www.evgo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-morphism-hover rounded-xl p-6 card-hover group"
            >
              <h3 className="text-xl font-bold text-white group-hover:gradient-text-electric mb-2 transition-all">
                EVgo
              </h3>
              <p className="text-slate-300 flex items-center mb-1">
                <BoltIcon className="w-4 h-4 mr-2 text-electric-400" />
                2,700+ Stations
              </p>
              <p className="text-slate-400 text-sm flex items-center">
                <SparklesIcon className="w-4 h-4 mr-2 text-electric-400" />
                Up to 350 kW
              </p>
            </a>
            <a
              href="https://www.bp.com/pulse"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-morphism-hover rounded-xl p-6 card-hover group"
            >
              <h3 className="text-xl font-bold text-white group-hover:gradient-text-electric mb-2 transition-all">
                BP Pulse
              </h3>
              <p className="text-slate-300 flex items-center mb-1">
                <BoltIcon className="w-4 h-4 mr-2 text-electric-400" />
                20,000+ Stations
              </p>
              <p className="text-slate-400 text-sm flex items-center">
                <SparklesIcon className="w-4 h-4 mr-2 text-electric-400" />
                Up to 150 kW
              </p>
            </a>
            <a
              href="https://www.shell.com/recharge"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-morphism-hover rounded-xl p-6 card-hover group"
            >
              <h3 className="text-xl font-bold text-white group-hover:gradient-text-electric mb-2 transition-all">
                Shell Recharge
              </h3>
              <p className="text-slate-300 flex items-center mb-1">
                <BoltIcon className="w-4 h-4 mr-2 text-electric-400" />
                100,000+ Stations
              </p>
              <p className="text-slate-400 text-sm flex items-center">
                <SparklesIcon className="w-4 h-4 mr-2 text-electric-400" />
                Up to 175 kW
              </p>
            </a>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-8 text-center">
            <SparklesIcon className="w-8 h-8 inline-block mr-2 text-electric-400" />
            Incentives & Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="https://www.irs.gov/credits-deductions/credits-for-new-clean-vehicles-purchased-in-2023-or-after"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-morphism-hover rounded-xl p-6 card-hover group text-center"
            >
              <div className="flex justify-center mb-2">
                <ArrowTopRightOnSquareIcon className="w-5 h-5 text-electric-400 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:gradient-text-electric mb-2 transition-all">
                Federal EV Tax Credit
              </h3>
              <p className="text-2xl font-bold gradient-text-electric mb-1">Up to $7,500</p>
              <p className="text-slate-400 text-sm flex items-center justify-center">
                <SparklesIcon className="w-3 h-3 mr-1 text-electric-400" />
                IRS Credits
              </p>
            </a>
            <a
              href="https://www.fueleconomy.gov/feg/evtech.shtml"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-morphism-hover rounded-xl p-6 card-hover group text-center"
            >
              <div className="flex justify-center mb-2">
                <ArrowTopRightOnSquareIcon className="w-5 h-5 text-electric-400 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:gradient-text-electric mb-2 transition-all">
                FuelEconomy.gov
              </h3>
              <p className="text-2xl font-bold gradient-text-electric mb-1">Free Resources</p>
              <p className="text-slate-400 text-sm flex items-center justify-center">
                <SparklesIcon className="w-3 h-3 mr-1 text-electric-400" />
                Official Data
              </p>
            </a>
            <a
              href="https://www.energy.gov/energysaver/electric-vehicles"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-morphism-hover rounded-xl p-6 card-hover group text-center"
            >
              <div className="flex justify-center mb-2">
                <ArrowTopRightOnSquareIcon className="w-5 h-5 text-electric-400 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:gradient-text-electric mb-2 transition-all">
                Energy.gov EVs
              </h3>
              <p className="text-2xl font-bold gradient-text-electric mb-1">Free Guide</p>
              <p className="text-slate-400 text-sm flex items-center justify-center">
                <SparklesIcon className="w-3 h-3 mr-1 text-electric-400" />
                Buying Guide
              </p>
            </a>
            <a
              href="https://www.energy.gov/eere/electricvehicles/electric-vehicle-charging-incentives-state"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-morphism-hover rounded-xl p-6 card-hover group text-center"
            >
              <div className="flex justify-center mb-2">
                <ArrowTopRightOnSquareIcon className="w-5 h-5 text-electric-400 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:gradient-text-electric mb-2 transition-all">
                State Incentives
              </h3>
              <p className="text-2xl font-bold gradient-text-electric mb-1">Varies by State</p>
              <p className="text-slate-400 text-sm flex items-center justify-center">
                <SparklesIcon className="w-3 h-3 mr-1 text-electric-400" />
                Local Benefits
              </p>
            </a>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-8 text-center">
            <ChartBarIcon className="w-8 h-8 inline-block mr-2 text-electric-400" />
            Explore EV Manufacturers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <a
              href="https://www.tesla.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-morphism-hover rounded-xl p-6 card-hover group text-center"
            >
              <h3 className="text-lg font-bold text-white group-hover:gradient-text-electric mb-2 transition-all">
                Tesla
              </h3>
              <ArrowTopRightOnSquareIcon className="w-5 h-5 text-electric-400 mx-auto group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.ford.com/electric/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-morphism-hover rounded-xl p-6 card-hover group text-center"
            >
              <h3 className="text-lg font-bold text-white group-hover:gradient-text-electric mb-2 transition-all">
                Ford Electric
              </h3>
              <ArrowTopRightOnSquareIcon className="w-5 h-5 text-electric-400 mx-auto group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://rivian.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-morphism-hover rounded-xl p-6 card-hover group text-center"
            >
              <h3 className="text-lg font-bold text-white group-hover:gradient-text-electric mb-2 transition-all">
                Rivian
              </h3>
              <ArrowTopRightOnSquareIcon className="w-5 h-5 text-electric-400 mx-auto group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.lucidmotors.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-morphism-hover rounded-xl p-6 card-hover group text-center"
            >
              <h3 className="text-lg font-bold text-white group-hover:gradient-text-electric mb-2 transition-all">
                Lucid Motors
              </h3>
              <ArrowTopRightOnSquareIcon className="w-5 h-5 text-electric-400 mx-auto group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.bmwusa.com/electric.html"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-morphism-hover rounded-xl p-6 card-hover group text-center"
            >
              <h3 className="text-lg font-bold text-white group-hover:gradient-text-electric mb-2 transition-all">
                BMW
              </h3>
              <ArrowTopRightOnSquareIcon className="w-5 h-5 text-electric-400 mx-auto group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.mbusa.com/en/electric"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-morphism-hover rounded-xl p-6 card-hover group text-center"
            >
              <h3 className="text-lg font-bold text-white group-hover:gradient-text-electric mb-2 transition-all">
                Mercedes EQ
              </h3>
              <ArrowTopRightOnSquareIcon className="w-5 h-5 text-electric-400 mx-auto group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.audiusa.com/us/web/en/models/e-tron.html"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-morphism-hover rounded-xl p-6 card-hover group text-center"
            >
              <h3 className="text-lg font-bold text-white group-hover:gradient-text-electric mb-2 transition-all">
                Audi e-tron
              </h3>
              <ArrowTopRightOnSquareIcon className="w-5 h-5 text-electric-400 mx-auto group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.porsche.com/usa/models/taycan/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-morphism-hover rounded-xl p-6 card-hover group text-center"
            >
              <h3 className="text-lg font-bold text-white group-hover:gradient-text-electric mb-2 transition-all">
                Porsche Taycan
              </h3>
              <ArrowTopRightOnSquareIcon className="w-5 h-5 text-electric-400 mx-auto group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        <div className="glass-morphism neon-border rounded-2xl p-12 text-center overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-electric-600/20 to-primary-600/20"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-heading font-bold gradient-text mb-4">
              Join the EV Revolution
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Get exclusive access to our charging network and premium features
            </p>
            <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 hover:scale-105 transition-all shadow-lg hover:shadow-electric-500/50">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
