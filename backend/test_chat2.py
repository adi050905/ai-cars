import requests
import json
import time

# Wait a moment for server to be ready
time.sleep(2)

print("🧪 Testing AI Chatbot - Non-Car Question Guard\n")

# Test 1: Non-car question
print("=" * 70)
print("Test 1: Asking about President of India (should be rejected)")
print("=" * 70)

try:
    response = requests.post(
        'http://localhost:8000/api/ai/chat',
        json={
            'message': 'Who is the president of India?',
            'context': []
        },
        timeout=30
    )
    
    if response.status_code == 200:
        data = response.json()
        print("\n📝 AI Response:")
        print("-" * 70)
        print(data.get('response', 'No response'))
        print("-" * 70)
    else:
        print(f"❌ Error: {response.text}")
        
except Exception as e:
    print(f"❌ Error: {str(e)}")

print("\n\n")

# Test 2: Car question
print("=" * 70)
print("Test 2: Asking about cars (should answer normally)")
print("=" * 70)

try:
    response = requests.post(
        'http://localhost:8000/api/ai/chat',
        json={
            'message': 'What is the cheapest car you have?',
            'context': []
        },
        timeout=30
    )
    
    if response.status_code == 200:
        data = response.json()
        print("\n📝 AI Response:")
        print("-" * 70)
        print(data.get('response', 'No response'))
        print("-" * 70)
        print("\n🎉 Test Complete!")
    else:
        print(f"❌ Error: {response.text}")
        
except Exception as e:
    print(f"❌ Error: {str(e)}")
