# 🚀 Quick Start Guide

## Prerequisites Checklist

- [ ] Node.js 18+ installed
- [ ] Python 3.11+ installed
- [ ] MongoDB installed (or Atlas account)
- [ ] Git installed
- [ ] Code editor (VS Code recommended)

## Step-by-Step Setup

### 1️⃣ Install Node.js Dependencies

```powershell
# In project root
npm install
```

This installs all frontend dependencies including:

- Next.js, React, TypeScript
- Tailwind CSS, Framer Motion
- Three.js for 3D graphics
- All UI libraries

### 2️⃣ Setup Python Backend

```powershell
# Navigate to backend
cd backend

# Create virtual environment
python -m venv venv

# Activate it
.\venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

### 3️⃣ Configure Environment Variables

```powershell
# Copy environment template
copy .env.example .env.local
```

**Edit `.env.local`** with your keys:

```env
# Required for AI features
OPENAI_API_KEY=sk-YOUR_KEY_HERE

# Database (local or MongoDB Atlas)
MONGODB_URI=mongodb://localhost:27017/futuristic_cars

# Optional: Blockchain, Payments, etc.
ETHEREUM_RPC_URL=https://mainnet.infura.io/v3/YOUR_ID
STRIPE_SECRET_KEY=sk_test_YOUR_KEY
```

### 4️⃣ Start MongoDB

**Option A: Local MongoDB**

```powershell
# Start MongoDB service
mongod --dbpath C:\data\db
```

**Option B: MongoDB Atlas (Cloud)**

1. Go to https://www.mongodb.com/cloud/atlas
2. Create free cluster
3. Get connection string
4. Add to `.env.local`

### 5️⃣ Run the Application

**Terminal 1: Frontend**

```powershell
npm run dev
```

→ Opens at http://localhost:3000

**Terminal 2: Backend**

```powershell
cd backend
.\venv\Scripts\activate
uvicorn main:app --reload
```

→ Opens at http://localhost:8000

### 6️⃣ Verify Installation

Visit http://localhost:3000 - you should see:

- ✅ Futuristic homepage with animations
- ✅ AI Assistant button (bottom right)
- ✅ Voice Control button (bottom left)
- ✅ Dark/Light mode toggle
- ✅ Interactive UI elements

## 🎯 Testing Features

### Test AI Assistant

1. Click chat icon (bottom right)
2. Try: "Show me electric cars under $50,000"
3. AI responds with recommendations

### Test Voice Control

1. Click microphone icon (bottom left)
2. Say: "Show me electric cars"
3. Navigates automatically

### Test 3D Viewer

1. Click any car card
2. Interactive 3D model loads
3. Rotate, zoom, change colors

## 📝 API Keys You'll Need

### Essential (For Core Features)

- **OpenAI API** - AI chatbot and search
  - Get at: https://platform.openai.com/api-keys
  - Free tier available

### Optional (For Full Features)

- **MongoDB Atlas** - Cloud database

  - Get at: https://www.mongodb.com/cloud/atlas
  - Free forever tier

- **Stripe** - Payments

  - Get at: https://stripe.com
  - Test mode free

- **Infura/Alchemy** - Ethereum blockchain
  - Get at: https://infura.io or https://alchemy.com
  - Free tier available

## 🐛 Troubleshooting

### Port Already in Use

```powershell
# Kill process on port 3000
npx kill-port 3000

# Kill process on port 8000
npx kill-port 8000
```

### Module Not Found

```powershell
# Delete node_modules and reinstall
rm -r node_modules
npm install
```

### Python Errors

```powershell
# Upgrade pip
python -m pip install --upgrade pip

# Reinstall requirements
pip install -r requirements.txt --force-reinstall
```

### MongoDB Connection Failed

- Check MongoDB is running: `mongod --version`
- Verify connection string in `.env.local`
- Try localhost: `mongodb://localhost:27017`

## 🎨 Customization

### Change Theme Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    500: '#YOUR_COLOR',
  }
}
```

### Add New Car Brands

Backend will auto-populate from MongoDB or you can:

```python
# Add to backend/data/cars.json
```

### Modify AI Prompts

Edit `backend/routes/ai.py`:

```python
system_prompt = "Your custom instructions..."
```

## 📚 Next Steps

1. ✅ Install and run locally
2. 📖 Read full README.md
3. 🔑 Add API keys for full features
4. 🎨 Customize branding
5. 📊 Add your car data
6. 🚀 Deploy to production

## 💡 Pro Tips

- Use **VS Code** with extensions:

  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense
  - Python

- Enable **Hot Reload**:

  - Frontend auto-refreshes
  - Backend needs `--reload` flag

- Use **React DevTools** for debugging

- Check **Browser Console** for errors

## 🆘 Get Help

- 📧 Check error messages
- 🔍 Search GitHub issues
- 💬 Read API docs at http://localhost:8000/docs
- 📚 Review component files

---

**Ready to build the future of car shopping! 🚗💨**
