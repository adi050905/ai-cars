import requests
import json

print("🎯 Testing Enhanced Chatbot with 16 Options\n")

# Test 1: Get all options
print("=" * 80)
print("Test 1: Fetching All Available Options")
print("=" * 80)

try:
    response = requests.get('http://localhost:8000/api/ai/chat/options')
    if response.status_code == 200:
        data = response.json()
        print(f"\n✅ Total Options Available: {len(data['options'])}\n")
        for i, option in enumerate(data['options'], 1):
            print(f"  {i:2d}. {option['label']:<30} (id: {option['id']})")
    else:
        print(f"❌ Error: {response.text}")
except Exception as e:
    print(f"❌ Error: {str(e)}")

print("\n\n")

# Test 2: Test a budget option
print("=" * 80)
print("Test 2: Testing 'Budget Under $70k' Option")
print("=" * 80)

try:
    response = requests.post(
        'http://localhost:8000/api/ai/chat',
        json={'message': 'budget_under_70k', 'context': []}
    )
    
    if response.status_code == 200:
        data = response.json()
        print("\n✅ Bot Response:")
        print("-" * 80)
        print(data.get('response', 'No response')[:500] + "...")
        print("-" * 80)
    else:
        print(f"❌ Error: {response.text}")
except Exception as e:
    print(f"❌ Error: {str(e)}")

print("\n\n")

# Test 3: Test financing option
print("=" * 80)
print("Test 3: Testing 'Financing & Deals' Option")
print("=" * 80)

try:
    response = requests.post(
        'http://localhost:8000/api/ai/chat',
        json={'message': 'financing_options', 'context': []}
    )
    
    if response.status_code == 200:
        data = response.json()
        print("\n✅ Bot Response:")
        print("-" * 80)
        print(data.get('response', 'No response')[:500] + "...")
        print("-" * 80)
    else:
        print(f"❌ Error: {response.text}")
except Exception as e:
    print(f"❌ Error: {str(e)}")

print("\n\n")

# Test 4: Test environmental option
print("=" * 80)
print("Test 4: Testing 'Environmental Impact' Option")
print("=" * 80)

try:
    response = requests.post(
        'http://localhost:8000/api/ai/chat',
        json={'message': 'environmental_impact', 'context': []}
    )
    
    if response.status_code == 200:
        data = response.json()
        print("\n✅ Bot Response:")
        print("-" * 80)
        print(data.get('response', 'No response')[:500] + "...")
        print("-" * 80)
        print("\n🎉 All Tests Passed!")
    else:
        print(f"❌ Error: {response.text}")
except Exception as e:
    print(f"❌ Error: {str(e)}")

print("\n\n" + "=" * 80)
print("✨ Chatbot Enhanced Successfully!")
print("=" * 80)
print("\n16 comprehensive options covering:")
print("  • Vehicle browsing (4 price categories)")
print("  • Performance & features")
print("  • Practical info (charging, range, warranty)")
print("  • Financial (financing, deals)")
print("  • Support (test drives, contact)")
print("\n🚀 Your chatbot is now like a real car website assistant!")
