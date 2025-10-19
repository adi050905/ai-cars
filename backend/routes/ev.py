from fastapi import APIRouter, HTTPException, Request
from pydantic import BaseModel
from typing import List, Dict

router = APIRouter()

class RouteCalculation(BaseModel):
    start: Dict[str, float]  # {lat, lng}
    destination: Dict[str, float]
    vehicle_range: float

@router.get("/charging-stations")
async def get_charging_stations(lat: float, lng: float, radius: float = 50):
    """Find nearby EV charging stations"""
    try:
        # Mock data - in production, integrate with real charging station APIs
        stations = [
            {
                "id": 1,
                "name": "SuperCharge Station Alpha",
                "location": {"lat": lat + 0.01, "lng": lng + 0.01},
                "type": "DC Fast Charging",
                "power": "350 kW",
                "available_ports": 4,
                "total_ports": 8,
                "pricing": "$0.35/kWh",
                "amenities": ["WiFi", "Restroom", "Cafe"]
            },
            {
                "id": 2,
                "name": "City Center EV Hub",
                "location": {"lat": lat - 0.02, "lng": lng + 0.03},
                "type": "Level 2",
                "power": "11 kW",
                "available_ports": 12,
                "total_ports": 20,
                "pricing": "$0.15/kWh",
                "amenities": ["WiFi", "Shopping"]
            }
        ]
        
        return {"stations": stations, "count": len(stations)}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/route-planner")
async def plan_ev_route(route: RouteCalculation):
    """Plan EV route with charging stops"""
    try:
        # Simplified route planning
        distance = 250  # km (mock calculation)
        charging_stops = []
        
        if distance > route.vehicle_range:
            stops_needed = int(distance / route.vehicle_range) + 1
            for i in range(stops_needed):
                charging_stops.append({
                    "stop_number": i + 1,
                    "station_id": i + 1,
                    "estimated_charge_time": 25,  # minutes
                    "charge_amount": 80  # percentage
                })
        
        return {
            "total_distance": distance,
            "estimated_time": 180,  # minutes
            "charging_stops": charging_stops,
            "total_charging_time": len(charging_stops) * 25,
            "energy_cost": 12.50  # USD
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/carbon-calculator/{car_id}")
async def calculate_carbon_footprint(car_id: str, annual_miles: float = 12000):
    """Calculate environmental impact"""
    try:
        # Mock calculation - in production, use real data
        carbon_data = {
            "car_id": car_id,
            "annual_miles": annual_miles,
            "co2_emissions": 2.5,  # tons per year
            "fuel_type": "Electric",
            "vs_gasoline_savings": 4.5,  # tons CO2 saved
            "trees_equivalent": 107,  # trees needed to offset
            "eco_score": 9.2,  # out of 10
            "cost_savings": 1200  # USD per year
        }
        
        return carbon_data
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
