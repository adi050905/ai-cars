from fastapi import APIRouter, HTTPException, Request, Query
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime
from bson import ObjectId

router = APIRouter()

class CarFilter(BaseModel):
    price_min: Optional[float] = None
    price_max: Optional[float] = None
    fuel_type: Optional[List[str]] = None
    body_type: Optional[List[str]] = None
    year_min: Optional[int] = None
    year_max: Optional[int] = None
    make: Optional[str] = None
    model: Optional[str] = None

@router.get("/")
async def get_cars(
    request: Request,
    skip: int = 0,
    limit: int = 20,
    sort_by: str = "created_at",
    order: str = "desc"
):
    """Get all cars with pagination"""
    try:
        db = request.app.mongodb
        sort_order = -1 if order == "desc" else 1
        
        cars = await db.cars.find().sort(sort_by, sort_order).skip(skip).limit(limit).to_list(limit)
        total = await db.cars.count_documents({})
        
        for car in cars:
            car["_id"] = str(car["_id"])
        
        return {
            "cars": cars,
            "total": total,
            "page": skip // limit + 1,
            "pages": (total + limit - 1) // limit
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/{car_id}")
async def get_car(car_id: str, request: Request):
    """Get single car by ID"""
    try:
        db = request.app.mongodb
        car = await db.cars.find_one({"_id": ObjectId(car_id)})
        
        if not car:
            raise HTTPException(status_code=404, detail="Car not found")
        
        car["_id"] = str(car["_id"])
        return car
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/filter")
async def filter_cars(filters: CarFilter, request: Request):
    """Advanced filtering"""
    try:
        db = request.app.mongodb
        query = {}
        
        if filters.price_min or filters.price_max:
            query["price"] = {}
            if filters.price_min:
                query["price"]["$gte"] = filters.price_min
            if filters.price_max:
                query["price"]["$lte"] = filters.price_max
        
        if filters.fuel_type:
            query["fuel_type"] = {"$in": filters.fuel_type}
        
        if filters.body_type:
            query["body_type"] = {"$in": filters.body_type}
        
        if filters.year_min or filters.year_max:
            query["year"] = {}
            if filters.year_min:
                query["year"]["$gte"] = filters.year_min
            if filters.year_max:
                query["year"]["$lte"] = filters.year_max
        
        if filters.make:
            query["make"] = {"$regex": filters.make, "$options": "i"}
        
        cars = await db.cars.find(query).limit(50).to_list(50)
        
        for car in cars:
            car["_id"] = str(car["_id"])
        
        return {
            "cars": cars,
            "count": len(cars),
            "filters_applied": query
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/{car_id}/compare")
async def compare_cars(car_id: str, request: Request, compare_with: List[str] = Query(...)):
    """Compare multiple cars"""
    try:
        db = request.app.mongodb
        car_ids = [ObjectId(car_id)] + [ObjectId(cid) for cid in compare_with]
        
        cars = await db.cars.find({"_id": {"$in": car_ids}}).to_list(len(car_ids))
        
        for car in cars:
            car["_id"] = str(car["_id"])
        
        # AI-powered comparison insights
        comparison = {
            "cars": cars,
            "comparison_matrix": {
                "performance": {},
                "efficiency": {},
                "safety": {},
                "value": {}
            }
        }
        
        return comparison
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
