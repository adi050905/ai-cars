from fastapi import FastAPI, HTTPException, Depends, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from contextlib import asynccontextmanager
import os
from dotenv import load_dotenv
from motor.motor_asyncio import AsyncIOMotorClient
from routes import cars, auth, ai, marketplace, blockchain, community, ev

load_dotenv()

# Database connection
@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    app.mongodb_client = AsyncIOMotorClient(os.getenv("MONGODB_URI"))
    app.mongodb = app.mongodb_client[os.getenv("MONGODB_DB_NAME")]
    print("✅ Connected to MongoDB")
    yield
    # Shutdown
    app.mongodb_client.close()
    print("⛔ Closed MongoDB connection")

app = FastAPI(
    title="FutureCars AI Platform API",
    description="Ultra-advanced automotive platform with AI, AR/VR, and blockchain",
    version="1.0.0",
    lifespan=lifespan
)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:3001"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Security
security = HTTPBearer()

# Include routers
app.include_router(auth.router, prefix="/api/auth", tags=["Authentication"])
app.include_router(cars.router, prefix="/api/cars", tags=["Cars"])
app.include_router(ai.router, prefix="/api/ai", tags=["AI Features"])
app.include_router(marketplace.router, prefix="/api/marketplace", tags=["Marketplace"])
app.include_router(blockchain.router, prefix="/api/blockchain", tags=["Blockchain"])
app.include_router(community.router, prefix="/api/community", tags=["Community"])
app.include_router(ev.router, prefix="/api/ev", tags=["Electric Vehicles"])

@app.get("/")
async def root():
    return {
        "message": "FutureCars AI Platform API",
        "version": "1.0.0",
        "status": "operational",
        "features": [
            "AI-Powered Recommendations",
            "Natural Language Search",
            "AR/VR Integration",
            "Blockchain Verification",
            "Predictive Analytics",
            "Community Features",
            "EV Solutions"
        ]
    }

@app.get("/api/health")
async def health_check():
    return {
        "status": "healthy",
        "database": "connected",
        "ai": "ready",
        "blockchain": "synced"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)
