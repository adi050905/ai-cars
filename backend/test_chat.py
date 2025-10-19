import requests
import json
import time

# Wait a moment for server to be ready
time.sleep(2)

try:
    print("🧪 Testing AI Chatbot API with Gemini 2.0 Flash...\n")
    
    response = requests.post(
        'http://localhost:8000/api/ai/chat',
        json={
            'message': 'What is the fastest car you have?',
            'context': []
        },
        timeout=30
    )
    
    print(f"✅ Status Code: {response.status_code}\n")
    
    if response.status_code == 200:
        data = response.json()
        print("📝 AI Response:")
        print("-" * 60)
        print(data.get('response', 'No response'))
        print("-" * 60)
        print(f"\n⏰ Timestamp: {data.get('timestamp', 'N/A')}")
        print("\n🎉 Gemini API is working perfectly!")
    else:
        print(f"❌ Error: {response.text}")
        
except requests.exceptions.ConnectionError:
    print("❌ Cannot connect to backend. Make sure it's running on port 8000")
except Exception as e:
    print(f"❌ Error: {str(e)}")
