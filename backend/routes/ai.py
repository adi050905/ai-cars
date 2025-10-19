from fastapi import APIRouter, HTTPException, Request
from pydantic import BaseModel
from typing import List, Optional, Dict
import os
from datetime import datetime

router = APIRouter()

# Predefined car data
CARS_DATA = {
    "tesla": {
        "name": "Tesla Model S Plaid",
        "price": "$89,990",
        "specs": "1,020 HP, 0-60 in 1.99s, 396 mi range",
        "features": "Autopilot, Tri-Motor AWD, Premium Interior"
    },
    "porsche": {
        "name": "Porsche Taycan Turbo S",
        "price": "$185,000",
        "specs": "750 HP, 0-60 in 2.6s, Luxury Performance",
        "features": "Adaptive Air Suspension, Premium Audio, Sport Chrono"
    },
    "hyundai": {
        "name": "Hyundai IONIQ 5 N",
        "price": "$66,000",
        "specs": "641 HP, Track Mode, Hot Hatch",
        "features": "Fast Charging, Spacious Interior, Tech Package"
    },
    "audi": {
        "name": "Audi e-tron GT",
        "price": "$145,900",
        "specs": "522 HP, Quattro AWD, Gran Turismo",
        "features": "Virtual Cockpit, Matrix LED, Premium Leather"
    },
    "mercedes": {
        "name": "Mercedes EQS 580",
        "price": "$125,950",
        "specs": "516 HP, MBUX Hyperscreen, Ultimate Luxury",
        "features": "Massage Seats, Burmester Audio, Air Suspension"
    },
    "lucid": {
        "name": "Lucid Air Sapphire",
        "price": "$249,000",
        "specs": "1,234 HP, 0-60 in 1.89s, Tri-Motor Beast",
        "features": "Dream Drive Pro, Glass Canopy, Luxury Interior"
    },
    "bmw": {
        "name": "BMW iX M60",
        "price": "$108,900",
        "specs": "619 HP, xDrive AWD, Performance SUV",
        "features": "Curved Display, Harman Kardon, Panoramic Roof"
    },
    "rivian": {
        "name": "Rivian R1T",
        "price": "$73,000",
        "specs": "835 HP, Quad Motor, Adventure Truck",
        "features": "Gear Tunnel, Off-Road Package, Camp Kitchen"
    },
    "kia": {
        "name": "Kia EV6 GT",
        "price": "$61,600",
        "specs": "576 HP, 0-60 in 3.4s, Sporty Crossover",
        "features": "GT Mode, AWD, Ultra-Fast Charging"
    },
    "ford": {
        "name": "Ford Mustang Mach-E GT",
        "price": "$59,900",
        "specs": "480 HP, Electric Muscle",
        "features": "Mustang Legacy, SYNC 4A, Hands-Free Driving"
    }
}

# Predefined chat options and responses
CHAT_OPTIONS = {
    "browse_all_cars": {
        "label": "🚗 Browse All Cars",
        "response": """Here are all 10 premium EVs in our collection:

1. **Tesla Model S Plaid** - $89,990 (1,020 HP, 0-60 in 1.99s)
2. **Porsche Taycan Turbo S** - $185,000 (750 HP, Luxury Performance)
3. **Hyundai IONIQ 5 N** - $66,000 (641 HP, Track Mode)
4. **Audi e-tron GT** - $145,900 (522 HP, Quattro AWD)
5. **Mercedes EQS 580** - $125,950 (516 HP, Ultimate Luxury)
6. **Lucid Air Sapphire** - $249,000 (1,234 HP, Fastest 0-60!)
7. **BMW iX M60** - $108,900 (619 HP, Performance SUV)
8. **Rivian R1T** - $73,000 (835 HP, Adventure Truck)
9. **Kia EV6 GT** - $61,600 (576 HP, Sporty Crossover)
10. **Ford Mustang Mach-E GT** - $59,900 (480 HP, Electric Muscle)

Select another option to explore more!"""
    },
    "budget_under_70k": {
        "label": "💰 Budget Under $70k",
        "response": """Here are our best value premium EVs:

🏆 **Ford Mustang Mach-E GT** - $59,900
   • 480 HP Electric Muscle Car
   • SYNC 4A with Hands-Free Driving
   • 270 miles range

🏆 **Kia EV6 GT** - $61,600
   • 576 HP, 0-60 in 3.4s
   • Ultra-Fast 800V Charging
   • Dual-motor AWD

🏆 **Hyundai IONIQ 5 N** - $66,000
   • 641 HP with Track Mode
   • Spacious Interior & Fast Charging
   • 5-year warranty

All three deliver supercar performance at an affordable price!"""
    },
    "budget_70k_to_100k": {
        "label": "💵 $70k - $100k Range",
        "response": """Premium EVs in the $70k-$100k sweet spot:

🌟 **Rivian R1T** - $73,000
   • 835 HP Quad Motor Adventure Truck
   • Off-Road Package & Gear Tunnel
   • Perfect for outdoor lifestyle

🌟 **Tesla Model S Plaid** - $89,990
   • 1,020 HP, 0-60 in 1.99s
   • 396 miles range
   • Autopilot & Full Self-Driving capable

Both offer exceptional value in the premium EV segment!"""
    },
    "luxury_over_100k": {
        "label": "✨ Luxury Over $100k",
        "response": """Experience ultimate luxury with these premium EVs:

💎 **BMW iX M60** - $108,900
   • 619 HP xDrive Performance SUV
   • Curved Display & Panoramic Roof

💎 **Mercedes EQS 580** - $125,950
   • 516 HP with MBUX Hyperscreen
   • Massage Seats & Burmester Audio

💎 **Audi e-tron GT** - $145,900
   • 522 HP Quattro AWD Gran Turismo
   • Virtual Cockpit & Matrix LED

💎 **Porsche Taycan Turbo S** - $185,000
   • 750 HP Pure Luxury Performance
   • Adaptive Air Suspension & Premium Audio

💎 **Lucid Air Sapphire** - $249,000
   • 1,234 HP Tri-Motor Beast
   • Dream Drive Pro & Glass Canopy

The pinnacle of electric luxury awaits!"""
    },
    "performance_fast": {
        "label": "⚡ Fastest Performance",
        "response": """🏎️ **Lightning-Fast Acceleration:**

🥇 **Lucid Air Sapphire** - 0-60 in 1.89s ⚡
   • 1,234 HP Tri-Motor | $249,000
   • Fastest production EV in the world!

🥈 **Tesla Model S Plaid** - 0-60 in 1.99s ⚡
   • 1,020 HP Tri-Motor | $89,990
   • Best performance-to-price ratio

🥉 **Porsche Taycan Turbo S** - 0-60 in 2.6s
   • 750 HP Luxury Performance | $185,000

🏁 **Kia EV6 GT** - 0-60 in 3.4s
   • 576 HP, Most affordable speed | $61,600

Pure electric adrenaline!"""
    },
    "family_suv": {
        "label": "👨‍👩‍👧‍👦 Family SUVs",
        "response": """Perfect family-friendly electric SUVs:

🚙 **BMW iX M60** - $108,900
   • Spacious 5-passenger luxury SUV
   • 619 HP xDrive AWD
   • Curved Display, Panoramic Roof
   • Perfect blend of luxury & practicality

🚙 **Kia EV6 GT** - $61,600
   • 5-passenger sporty crossover
   • 576 HP with plenty of cargo space
   • Ultra-fast charging for family trips
   • Best value family SUV

Both offer safety, space, and exhilarating performance!"""
    },
    "adventure_offroad": {
        "label": "🏔️ Adventure & Off-Road",
        "response": """Built for adventure and outdoor lifestyle:

� **Rivian R1T** - $73,000
   • 835 HP Quad Motor Electric Truck
   • Gear Tunnel for outdoor equipment
   • Off-Road Package with adjustable suspension
   • Camp Kitchen option
   • 11,000 lb towing capacity
   • Water fording up to 3 feet

Perfect for camping, skiing, biking, and all outdoor adventures! The Rivian is purpose-built for those who refuse to compromise between electric efficiency and rugged capability.

Ready to explore the wilderness in silence?"""
    },
    "tech_features": {
        "label": "🔧 Technology & Features",
        "response": """🎯 **Cutting-Edge Tech Features:**

**Autonomous Driving:**
• Tesla Model S Plaid - Autopilot & Full Self-Driving
• Lucid Air Sapphire - Dream Drive Pro
• Mercedes EQS 580 - Drive Pilot

**Interior Tech:**
• Mercedes EQS 580 - MBUX Hyperscreen (56")
• BMW iX M60 - Curved Dual Display
• Audi e-tron GT - Virtual Cockpit Plus
• Ford Mach-E GT - SYNC 4A with 15.5" screen

**Premium Audio:**
• Mercedes EQS 580 - Burmester 3D Sound
• BMW iX M60 - Harman Kardon Surround
• Porsche Taycan - Burmester High-End

**Comfort Features:**
• Mercedes EQS 580 - Executive massage seats
• Porsche Taycan - Adaptive Air Suspension
• Lucid Air - Glass Canopy Roof

Technology that enhances every drive!"""
    },
    "charging_range": {
        "label": "🔋 Range & Charging",
        "response": """⚡ **Range & Charging Information:**

**Longest Range:**
• Tesla Model S Plaid - 396 miles
• Mercedes EQS 580 - 350+ miles
• BMW iX M60 - 324 miles

**Fastest Charging:**
• Kia EV6 GT - 800V, 10-80% in 18 min
• Hyundai IONIQ 5 N - 800V, ultra-fast
• Porsche Taycan - 270kW fast charging

**Home Charging:**
All vehicles support Level 2 home charging (8-12 hours for full charge)

**Public Charging Networks:**
• Tesla - Supercharger network (exclusive)
• Others - Electrify America, EVgo, ChargePoint

**Charging Cost:**
Approximately $15-25 for full charge at home (vs $60-80 for gas equivalent)

Range anxiety? Not anymore!"""
    },
    "compare_brands": {
        "label": "⚖️ Compare Brands",
        "response": """📊 **Brand Comparison Guide:**

**Tesla** - Innovation Leader
✅ Best charging network
✅ Autopilot technology
✅ Over-the-air updates
✅ Best range-to-price ratio

**Porsche** - Performance Luxury
✅ Track-ready performance
✅ Premium build quality
✅ Heritage & prestige
✅ Exceptional handling

**Lucid** - Ultimate Luxury
✅ Most powerful EVs
✅ Longest range options
✅ Spacious luxury interiors
✅ Cutting-edge efficiency

**German Luxury** (BMW, Audi, Mercedes)
✅ Traditional luxury feel
✅ Advanced tech integration
✅ Established dealer networks
✅ Comprehensive warranties

**Korean Value** (Kia, Hyundai)
✅ Best price-to-performance
✅ 5-10 year warranties
✅ Fast 800V charging
✅ Modern design

Which brand philosophy matches your needs?"""
    },
    "financing_options": {
        "label": "💳 Financing & Deals",
        "response": """💰 **Financing & Special Offers:**

**Purchase Options:**
• Traditional Auto Loan (2.9% - 5.9% APR)
• Manufacturer Financing (0% APR available)
• Credit Union Financing (typically lower rates)

**Lease Options:**
• 24/36/48 month terms available
• Low down payment options
• Mileage: 10k, 12k, or 15k miles/year

**Federal Tax Credit:**
• Up to $7,500 federal tax credit on eligible EVs
• Income and MSRP limits apply
• Ask about current eligibility

**State Incentives:**
• Additional state rebates (varies by state)
• HOV lane access
• Reduced registration fees

**Trade-In:**
• We accept all trade-ins
• Instant online valuation
• Top dollar guaranteed

**Current Promotions:**
• 0% APR for 72 months (select models)
• $5,000 bonus cash (limited time)
• Free home charging installation

Let's find the perfect payment plan for you!"""
    },
    "warranty_service": {
        "label": "🛡️ Warranty & Service",
        "response": """🛡️ **Warranty & Service Information:**

**Battery Warranties:**
• Tesla - 8 years / 150k miles
• Lucid - 8 years / 100k miles
• Rivian - 8 years / 175k miles
• Kia/Hyundai - 10 years / 100k miles
• Others - 8 years / 100k miles

**Vehicle Warranties:**
• Kia/Hyundai - 5 years / 60k miles bumper-to-bumper
• Tesla - 4 years / 50k miles
• BMW - 4 years / 50k miles + 3yr maintenance
• Mercedes - 4 years / 50k miles
• Others - Similar coverage

**Service Advantages:**
• Fewer moving parts = less maintenance
• No oil changes needed
• Regenerative braking = longer brake life
• Lower cost of ownership vs gas

**Mobile Service:**
• Tesla - Mobile service available
• Rivian - Mobile service fleet
• Others - Expanding mobile options

**Service Centers:**
All brands have growing EV service networks. We'll help you find the nearest location!

**Maintenance Cost:**
Expect 40-50% lower maintenance costs compared to gas vehicles!"""
    },
    "environmental_impact": {
        "label": "🌱 Environmental Impact",
        "response": """🌱 **Environmental Benefits of EVs:**

**Zero Direct Emissions:**
• No tailpipe emissions
• Cleaner air quality
• Reduced urban pollution

**Lower Carbon Footprint:**
• 60% lower lifetime emissions vs gas cars
• Cleaner as grid gets greener
• Renewable charging options available

**Energy Efficiency:**
• EVs convert 77% energy to movement
• Gas cars only convert 12-30%
• Lower energy consumption per mile

**Sustainable Manufacturing:**
• Recycled materials in interiors
• Renewable energy in factories
• Battery recycling programs

**Financial Savings:**
• $800-1,200/year fuel savings
• Lower maintenance costs
• Tax incentives & rebates

**Our Commitment:**
All vehicles in our collection represent the future of sustainable transportation without compromising performance or luxury.

Drive electric, breathe easier!"""
    },
    "test_drive_book": {
        "label": "📅 Book Test Drive",
        "response": """🚗 **Book Your Test Drive Today!**

**How It Works:**
1️⃣ Choose your preferred vehicle(s)
2️⃣ Select date & time (weekdays 9AM-7PM, weekends 10AM-6PM)
3️⃣ Pick your location (showroom or mobile delivery)
4️⃣ We'll confirm via email/text

**What to Bring:**
✅ Valid driver's license
✅ Proof of insurance
✅ Open mind for the future of driving!

**Test Drive Experience:**
• 45-60 minute extended drive
• Highway & city driving
• Feature demonstrations
• No pressure, no obligations
• Expert guidance available

**Available Locations:**
📍 Downtown Showroom - 123 Electric Ave
📍 Suburban Center - 456 EV Parkway
📍 Mobile Service - We come to you!

**Special Offers:**
🎁 Test drive 3 cars, get $100 gift card
🎁 Weekend test drive events with refreshments

**Ready to experience the future?**
Visit our showroom or call (555) EV-DRIVE to schedule!"""
    },
    "contact_support": {
        "label": "📞 Contact & Support",
        "response": """� **Get In Touch With Us:**

**Sales Inquiries:**
📧 Email: sales@futurecars.com
📱 Phone: (555) 387-4837 [EV-DRIVE]
💬 Text: (555) EV-TEXT
⏰ Hours: Mon-Sat 9AM-8PM, Sun 10AM-6PM

**Service & Support:**
📧 Email: support@futurecars.com
📱 Phone: (555) 387-4733 [EV-SERV]
⏰ 24/7 Emergency Roadside Assistance

**Visit Our Showrooms:**
� **Downtown Location**
   123 Electric Avenue, Suite 100
   Open 7 days a week

� **Suburban Center**
   456 EV Parkway
   Open Mon-Sat, 10AM-7PM

**Social Media:**
🔵 Facebook: @FutureCarsEV
🔵 Instagram: @FutureCarsOfficial
🔵 Twitter: @FutureCarsEV
🎥 YouTube: FutureCars Channel

**Live Chat:**
💬 Available on our website 9AM-9PM daily

**Newsletter:**
📬 Subscribe for exclusive deals & EV news

We're here to help you go electric!"""
    },
    "help_menu": {
        "label": "❓ Help & FAQ",
        "response": """❓ **Quick Help Menu:**

**🚗 Shopping Help:**
• Browse All Cars - See full collection
• Budget Options - Find by price range
• Compare Brands - Brand comparison guide

**⚡ Learn About EVs:**
• Range & Charging - Charging info
• Technology Features - Tech specs
• Environmental Impact - Green benefits
• Warranty & Service - Coverage details

**💰 Financial:**
• Financing Options - Loans & leases
• Trade-In Value - Get instant quote

**📅 Next Steps:**
• Book Test Drive - Schedule now
• Contact Support - Speak with expert

**Common Questions:**
❓ "How long does charging take?" - 18 min to 12 hours depending on method
❓ "What's the real-world range?" - 270-396 miles depending on model
❓ "Are EVs expensive to maintain?" - No, 40-50% cheaper than gas cars
❓ "Can I charge at home?" - Yes, with Level 2 home charger
❓ "What incentives are available?" - Up to $7,500 federal + state credits

Select any option above to learn more!"""
    }
}

class ChatMessage(BaseModel):
    message: str
    context: Optional[List[Dict]] = []

class SearchQuery(BaseModel):
    query: str
    filters: Optional[Dict] = {}

class RecommendationRequest(BaseModel):
    user_id: str
    preferences: Optional[Dict] = {}
    budget: Optional[float] = None

@router.get("/chat/options")
async def get_chat_options():
    """
    Get available chat options for the user
    """
    options = []
    for key, value in CHAT_OPTIONS.items():
        options.append({
            "id": key,
            "label": value["label"]
        })
    return {"options": options}

@router.post("/chat")
async def ai_chat(message: ChatMessage, request: Request):
    """
    Simple option-based chatbot - user selects from predefined options
    """
    try:
        user_message = message.message.lower().strip()
        
        # Check if message matches any predefined option
        matched_option = None
        
        # Direct match by option ID
        if user_message in CHAT_OPTIONS:
            matched_option = user_message
        else:
            # Fuzzy matching - check if user message contains keywords
            keyword_mapping = {
                "show_all_cars": ["all cars", "show all", "list cars", "view all", "all vehicles"],
                "budget_friendly": ["budget", "cheap", "affordable", "under", "70000", "70k", "inexpensive"],
                "fastest_cars": ["fast", "speed", "quick", "fastest", "acceleration", "0-60", "performance"],
                "luxury_cars": ["luxury", "premium", "expensive", "high-end", "luxurious"],
                "suv_truck": ["suv", "truck", "family", "spacious", "big", "large"],
                "compare_tesla_lucid": ["compare", "tesla", "lucid", "vs", "versus", "difference"],
                "schedule_test_drive": ["test drive", "schedule", "book", "appointment", "try", "test"],
                "help": ["help", "info", "information", "what can you do", "options", "menu"]
            }
            
            for option_id, keywords in keyword_mapping.items():
                for keyword in keywords:
                    if keyword in user_message:
                        matched_option = option_id
                        break
                if matched_option:
                    break
        
        # If matched, return the predefined response
        if matched_option and matched_option in CHAT_OPTIONS:
            return {
                "response": CHAT_OPTIONS[matched_option]["response"],
                "timestamp": datetime.utcnow().isoformat(),
                "options": [{"id": k, "label": v["label"]} for k, v in CHAT_OPTIONS.items()]
            }
        
        # Default response if no match found
        return {
            "response": CHAT_OPTIONS["help"]["response"],
            "timestamp": datetime.utcnow().isoformat(),
            "options": [{"id": k, "label": v["label"]} for k, v in CHAT_OPTIONS.items()]
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Chat Error: {str(e)}")

@router.post("/search")
async def natural_language_search(query: SearchQuery, request: Request):
    """
    Natural language search - converts user query to database search
    """
    try:
        # Use AI to parse natural language query
        prompt = f"""Convert this natural language car search query into structured filters:
        Query: "{query.query}"
        
        Return a JSON object with these possible fields:
        - price_min, price_max (numbers)
        - fuel_type (array: "electric", "hybrid", "gasoline", "diesel")
        - body_type (array: "sedan", "suv", "truck", "coupe", "hatchback")
        - features (array of strings)
        - year_min, year_max (numbers)
        - safety_rating_min (number 1-5)
        - eco_score_min (number 1-10)
        
        Example input: "Show me electric SUVs under 50000 with autopilot"
        Example output: {{"price_max": 50000, "fuel_type": ["electric"], "body_type": ["suv"], "features": ["autopilot"]}}
        """
        
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a query parser. Return only valid JSON."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.3
        )
        
        import json
        parsed_filters = json.loads(response.choices[0].message.content)
        
        # Merge with existing filters
        combined_filters = {**parsed_filters, **query.filters}
        
        # Search database
        db = request.app.mongodb
        search_criteria = {}
        
        if "price_min" in combined_filters:
            search_criteria["price"] = {"$gte": combined_filters["price_min"]}
        if "price_max" in combined_filters:
            search_criteria.setdefault("price", {})["$lte"] = combined_filters["price_max"]
        if "fuel_type" in combined_filters:
            search_criteria["fuel_type"] = {"$in": combined_filters["fuel_type"]}
        if "body_type" in combined_filters:
            search_criteria["body_type"] = {"$in": combined_filters["body_type"]}
        
        cars = await db.cars.find(search_criteria).limit(20).to_list(20)
        
        # Convert ObjectId to string
        for car in cars:
            car["_id"] = str(car["_id"])
        
        return {
            "query": query.query,
            "parsed_filters": parsed_filters,
            "results": cars,
            "count": len(cars)
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Search Error: {str(e)}")

@router.post("/recommendations")
async def ai_recommendations(req: RecommendationRequest, request: Request):
    """
    AI-powered personalized car recommendations
    """
    try:
        db = request.app.mongodb
        
        # Get user history and preferences
        user = await db.users.find_one({"user_id": req.user_id})
        
        # Build recommendation prompt
        prompt = f"""Based on this user profile, recommend 5 perfect cars:
        Budget: ${req.budget or 'Not specified'}
        Preferences: {req.preferences}
        Past Views: {user.get('viewed_cars', [])[:10] if user else []}
        Saved Cars: {user.get('saved_cars', []) if user else []}
        
        Provide recommendations with reasoning."""
        
        # Use AI for intelligent matching
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[
                {
                    "role": "system",
                    "content": "You are a car recommendation expert. Consider budget, lifestyle, needs, and preferences."
                },
                {"role": "user", "content": prompt}
            ],
            temperature=0.7
        )
        
        # Fetch actual cars from database
        recommended_cars = await db.cars.find().limit(5).to_list(5)
        
        for car in recommended_cars:
            car["_id"] = str(car["_id"])
        
        return {
            "recommendations": recommended_cars,
            "reasoning": response.choices[0].message.content,
            "personalized": True
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Recommendation Error: {str(e)}")

@router.post("/price-prediction")
async def predict_price(car_id: str, request: Request):
    """
    ML-based price prediction and market analysis
    """
    try:
        db = request.app.mongodb
        car = await db.cars.find_one({"_id": car_id})
        
        if not car:
            raise HTTPException(status_code=404, detail="Car not found")
        
        # Simplified prediction (in production, use trained ML model)
        current_price = car.get("price", 0)
        year = car.get("year", 2023)
        mileage = car.get("mileage", 0)
        
        # Depreciation calculation
        age = 2024 - year
        depreciation_rate = 0.15  # 15% per year
        predicted_value = current_price * ((1 - depreciation_rate) ** age)
        
        # Mileage impact
        if mileage > 100000:
            predicted_value *= 0.85
        
        return {
            "car_id": car_id,
            "current_price": current_price,
            "predicted_price_1yr": predicted_value * 0.85,
            "predicted_price_3yr": predicted_value * 0.65,
            "predicted_price_5yr": predicted_value * 0.50,
            "depreciation_rate": depreciation_rate,
            "market_trend": "stable",
            "confidence": 0.85
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Prediction Error: {str(e)}")

@router.post("/generate-content")
async def generate_content(topic: str):
    """
    AI-generated blog posts, comparisons, and insights
    """
    try:
        prompt = f"Write an engaging, informative article about: {topic}"
        
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[
                {
                    "role": "system",
                    "content": "You are an automotive journalist. Write engaging, accurate content."
                },
                {"role": "user", "content": prompt}
            ],
            temperature=0.8,
            max_tokens=1000
        )
        
        content = response.choices[0].message.content
        
        return {
            "topic": topic,
            "content": content,
            "generated_at": datetime.utcnow().isoformat()
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Content Generation Error: {str(e)}")
