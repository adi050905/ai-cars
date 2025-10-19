from fastapi import APIRouter, HTTPException, Request
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

router = APIRouter()

class ListingCreate(BaseModel):
    car_id: str
    seller_id: str
    asking_price: float
    description: str
    images: List[str]

@router.get("/listings")
async def get_marketplace_listings(request: Request, category: str = "all"):
    """Get marketplace listings"""
    try:
        db = request.app.mongodb
        query = {} if category == "all" else {"category": category}
        
        listings = await db.marketplace.find(query).limit(50).to_list(50)
        
        for listing in listings:
            listing["_id"] = str(listing["_id"])
        
        return {"listings": listings, "count": len(listings)}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/listings")
async def create_listing(listing: ListingCreate, request: Request):
    """Create new marketplace listing"""
    try:
        db = request.app.mongodb
        
        listing_doc = {
            **listing.dict(),
            "created_at": datetime.utcnow(),
            "status": "active",
            "views": 0,
            "favorites": 0
        }
        
        result = await db.marketplace.insert_one(listing_doc)
        
        return {"listing_id": str(result.inserted_id), "status": "created"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
