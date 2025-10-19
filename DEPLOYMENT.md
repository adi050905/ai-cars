# 🚀 Deployment Guide

## Overview

This guide covers deploying your FutureCars platform to production environments.

## Frontend Deployment (Vercel) - Recommended

### Step 1: Prepare for Deployment

```bash
# Ensure build works locally
npm run build
npm start
```

### Step 2: Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Step 3: Configure Environment Variables

In Vercel Dashboard:

1. Go to Project Settings → Environment Variables
2. Add all variables from `.env.example`:
   - `NEXT_PUBLIC_API_URL`
   - `NEXT_PUBLIC_WS_URL`
   - etc.

### Vercel Configuration (vercel.json)

Already configured in your project with optimal settings.

---

## Backend Deployment Options

### Option A: Railway (Easiest)

1. **Create Railway Account**: https://railway.app

2. **Deploy from GitHub**:

   ```bash
   # Push to GitHub first
   git init
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **In Railway Dashboard**:

   - New Project → Deploy from GitHub
   - Select your repository
   - Railway auto-detects Python
   - Add environment variables
   - Deploy!

4. **Environment Variables**:
   - `MONGODB_URI`
   - `OPENAI_API_KEY`
   - `JWT_SECRET`
   - All from `.env.example`

### Option B: Render

1. **Create Account**: https://render.com

2. **New Web Service**:

   - Connect GitHub repo
   - Build Command: `cd backend && pip install -r requirements.txt`
   - Start Command: `cd backend && uvicorn main:app --host 0.0.0.0 --port $PORT`

3. **Add Environment Variables** in Render dashboard

### Option C: DigitalOcean App Platform

1. **Create Account**: https://www.digitalocean.com

2. **Create App**:

   - Choose GitHub repo
   - Select Python
   - Configure build and run commands

3. **Environment Variables**: Add in App settings

### Option D: AWS (Advanced)

#### Using AWS Elastic Beanstalk

```bash
# Install EB CLI
pip install awsebcli

# Initialize
cd backend
eb init -p python-3.11 futurecars-api

# Create environment
eb create futurecars-production

# Deploy
eb deploy
```

#### Using AWS Lambda + API Gateway

Use Mangum adapter:

```python
# backend/main.py
from mangum import Mangum
handler = Mangum(app)
```

Deploy with AWS SAM or Serverless Framework.

---

## Database Deployment

### MongoDB Atlas (Recommended)

1. **Create Account**: https://www.mongodb.com/cloud/atlas

2. **Create Cluster**:

   - Choose free tier (M0)
   - Select region closest to your backend
   - Create cluster

3. **Setup Access**:

   - Database Access → Add user
   - Network Access → Add IP (0.0.0.0/0 for public access)

4. **Get Connection String**:

   ```
   mongodb+srv://username:password@cluster.mongodb.net/futuristic_cars
   ```

5. **Update Backend**:
   - Add to environment variables
   - Restart backend service

### Self-Hosted MongoDB

**DigitalOcean Droplet**:

```bash
# Create Ubuntu droplet
# SSH into server
ssh root@your-server-ip

# Install MongoDB
wget -qO - https://www.mongodb.org/static/pgp/server-7.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org

# Start MongoDB
sudo systemctl start mongod
sudo systemctl enable mongod

# Configure firewall
sudo ufw allow 27017
```

---

## Full Stack Deployment Architecture

### Production Setup

```
┌─────────────────┐
│   Vercel CDN    │ ← Frontend (Next.js)
│   (Global)      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Railway/Render │ ← Backend (FastAPI)
│  (US/EU)        │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ MongoDB Atlas   │ ← Database
│ (Multi-region)  │
└─────────────────┘
```

### Environment-Specific Configs

**Production (`prod`)**:

- Vercel for frontend
- Railway/Render for backend
- MongoDB Atlas
- CloudFlare CDN
- Production API keys

**Staging (`staging`)**:

- Vercel preview
- Railway staging
- MongoDB staging cluster
- Test API keys

**Development (`dev`)**:

- Local Next.js
- Local FastAPI
- Local MongoDB
- Development keys

---

## CI/CD Pipeline

### GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy-frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}

  deploy-backend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-python@v4
        with:
          python-version: '3.11'
      - run: pip install -r backend/requirements.txt
      - run: pytest backend/tests
      # Deploy to Railway/Render automatically
```

---

## Performance Optimization

### Frontend

1. **Enable CDN**: Vercel includes this
2. **Image Optimization**: Already configured in `next.config.js`
3. **Bundle Analysis**:
   ```bash
   npm install @next/bundle-analyzer
   ANALYZE=true npm run build
   ```

### Backend

1. **Enable Gunicorn** (Production):

   ```bash
   pip install gunicorn
   gunicorn -w 4 -k uvicorn.workers.UvicornWorker main:app
   ```

2. **Add Redis Caching**:

   ```python
   from redis import Redis
   redis_client = Redis(host='localhost', port=6379)
   ```

3. **Database Indexing**:
   ```python
   await db.cars.create_index([("make", 1), ("model", 1)])
   ```

### Global CDN

Add CloudFlare in front of Vercel:

1. Point domain to Vercel
2. Enable CloudFlare proxy
3. Configure caching rules

---

## Domain Setup

### 1. Purchase Domain

- Namecheap, GoDaddy, Google Domains

### 2. Configure DNS

**For Frontend (Vercel)**:

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**For Backend API**:

```
Type: A
Name: api
Value: [Your backend IP]
```

### 3. SSL Certificates

- Vercel: Auto-provisioned
- Railway/Render: Auto-provisioned
- Custom: Use Let's Encrypt

---

## Monitoring & Analytics

### Frontend Monitoring

**Vercel Analytics** (Built-in):

- Speed Insights
- Web Vitals
- Audience data

**Google Analytics**:

```typescript
// app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'
;<GoogleAnalytics gaId="G-XXXXXXXXXX" />
```

### Backend Monitoring

**Sentry** (Error Tracking):

```python
pip install sentry-sdk
import sentry_sdk
sentry_sdk.init(dsn="YOUR_DSN")
```

**Uptime Monitoring**:

- UptimeRobot: https://uptimerobot.com
- Pingdom: https://pingdom.com

### Database Monitoring

**MongoDB Atlas**:

- Built-in performance advisor
- Real-time charts
- Alert system

---

## Security Checklist

- [ ] All secrets in environment variables (never in code)
- [ ] HTTPS enabled (SSL certificates)
- [ ] CORS properly configured
- [ ] Rate limiting enabled
- [ ] MongoDB authentication enabled
- [ ] Firewall rules configured
- [ ] Regular backups scheduled
- [ ] Security headers set
- [ ] DDoS protection (CloudFlare)
- [ ] Regular dependency updates

---

## Backup Strategy

### Automated MongoDB Backups

**MongoDB Atlas**:

- Enable continuous backups
- Set retention policy
- Test restore procedure

**Manual Backup**:

```bash
mongodump --uri="mongodb+srv://..." --out=/backup
```

### Code Backups

- GitHub (version control)
- Vercel (automatic deployments)
- Local git mirrors

---

## Cost Estimates

### Free Tier (Development)

- **Frontend**: Vercel Free ($0)
- **Backend**: Railway Free ($5 credit) or Render Free
- **Database**: MongoDB Atlas M0 ($0)
- **Total**: $0/month

### Production (Small)

- **Frontend**: Vercel Pro ($20/month)
- **Backend**: Railway Hobby ($5-20/month)
- **Database**: MongoDB Atlas M10 ($57/month)
- **Total**: ~$100/month

### Production (Scale)

- **Frontend**: Vercel Enterprise ($Custom)
- **Backend**: AWS/DigitalOcean ($100-500/month)
- **Database**: MongoDB Atlas M30+ ($200-1000/month)
- **CDN**: CloudFlare Pro ($20/month)
- **Total**: $500-2000/month

---

## Post-Deployment

### 1. Test Everything

```bash
# Health check
curl https://api.yourdomain.com/api/health

# Test AI
curl -X POST https://api.yourdomain.com/api/ai/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"Hello"}'
```

### 2. Monitor Performance

- Check Vercel Analytics
- Monitor backend logs
- Set up alerts

### 3. Update DNS

- Point domain to production
- Verify SSL works
- Test from multiple locations

### 4. Launch! 🚀

- Announce on social media
- Share with users
- Gather feedback

---

## Troubleshooting

### Build Failures

**Frontend**:

```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

**Backend**:

```bash
# Check Python version
python --version  # Should be 3.11+

# Reinstall dependencies
pip install -r requirements.txt --upgrade
```

### Database Connection Issues

```python
# Test connection
from motor.motor_asyncio import AsyncIOMotorClient
client = AsyncIOMotorClient("your_uri")
await client.admin.command('ping')
```

### Performance Issues

1. Enable caching
2. Optimize database queries
3. Add CDN
4. Scale backend horizontally

---

## Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **Railway Docs**: https://docs.railway.app
- **MongoDB Docs**: https://www.mongodb.com/docs
- **FastAPI Docs**: https://fastapi.tiangolo.com
- **Next.js Docs**: https://nextjs.org/docs

---

**Your platform is now live! 🎉**

Monitor, iterate, and scale as you grow!
