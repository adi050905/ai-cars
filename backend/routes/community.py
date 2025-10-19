from fastapi import APIRouter, HTTPException, Request
from pydantic import BaseModel
from typing import List

router = APIRouter()

class ForumPost(BaseModel):
    title: str
    content: str
    author_id: str
    tags: List[str] = []

@router.get("/forums")
async def get_forum_posts(request: Request, skip: int = 0, limit: int = 20):
    """Get community forum posts"""
    try:
        db = request.app.mongodb
        posts = await db.forum_posts.find().sort("created_at", -1).skip(skip).limit(limit).to_list(limit)
        
        for post in posts:
            post["_id"] = str(post["_id"])
        
        return {"posts": posts, "count": len(posts)}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/leaderboard")
async def get_leaderboard(request: Request):
    """Get gamification leaderboard"""
    try:
        db = request.app.mongodb
        users = await db.users.find().sort("points", -1).limit(100).to_list(100)
        
        leaderboard = []
        for idx, user in enumerate(users, 1):
            leaderboard.append({
                "rank": idx,
                "name": user.get("full_name", "Anonymous"),
                "points": user.get("points", 0),
                "badges": user.get("badges", []),
                "level": user.get("points", 0) // 1000 + 1
            })
        
        return {"leaderboard": leaderboard}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
