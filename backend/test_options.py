import requests
import json

print("🧪 Testing Option-Based Chatbot\n")

# Test 1: Get available options
print("=" * 70)
print("Test 1: Fetching available chat options")
print("=" * 70)

try:
    response = requests.get('http://localhost:8000/api/ai/chat/options')
    if response.status_code == 200:
        data = response.json()
        print("\n✅ Available Options:")
        for i, option in enumerate(data['options'], 1):
            print(f"  {i}. {option['label']} (id: {option['id']})")
    else:
        print(f"❌ Error: {response.text}")
except Exception as e:
    print(f"❌ Error: {str(e)}")

print("\n\n")

# Test 2: Select "Show All Cars" option
print("=" * 70)
print("Test 2: Selecting 'Show All Cars' option")
print("=" * 70)

try:
    response = requests.post(
        'http://localhost:8000/api/ai/chat',
        json={
            'message': 'show_all_cars',
            'context': []
        }
    )
    
    if response.status_code == 200:
        data = response.json()
        print("\n📝 Bot Response:")
        print("-" * 70)
        print(data.get('response', 'No response'))
        print("-" * 70)
        print("\n✅ Test Passed!")
    else:
        print(f"❌ Error: {response.text}")
except Exception as e:
    print(f"❌ Error: {str(e)}")

print("\n\n")

# Test 3: Select "Budget Friendly" option
print("=" * 70)
print("Test 3: Selecting 'Budget Friendly' option")
print("=" * 70)

try:
    response = requests.post(
        'http://localhost:8000/api/ai/chat',
        json={
            'message': 'budget_friendly',
            'context': []
        }
    )
    
    if response.status_code == 200:
        data = response.json()
        print("\n📝 Bot Response:")
        print("-" * 70)
        print(data.get('response', 'No response'))
        print("-" * 70)
        print("\n✅ Test Passed!")
    else:
        print(f"❌ Error: {response.text}")
except Exception as e:
    print(f"❌ Error: {str(e)}")

print("\n\n🎉 All tests complete!")
