from flask import Flask, jsonify, request

app = Flask(__name__)

# In-memory storage for users
users = {}

# Endpoint to create a user (POST request)
@app.route('/users', methods=['POST'])
def create_user():
    data = request.get_json()  # Get the JSON data from the request body
    user_id = len(users) + 1  # Simple ID generation (starting from 1)
    user = {
        "id": user_id,
        "name": data['name'],
        "email": data['email']
    }
    users[user_id] = user  # Add the user to the in-memory storage
    return jsonify(user), 201  # Return the user data as JSON with 201 status

# Endpoint to get a user by ID (GET request)
@app.route('/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = users.get(user_id)  # Get the user by ID from the in-memory storage
    if user:
        return jsonify(user)  # Return the user data if found
    else:
        return jsonify({"error": "User not found"}), 404  # Return error if user not found

# Endpoint to get all users (GET request)
@app.route('/users', methods=['GET'])
def get_all_users():
    return jsonify(list(users.values()))  # Return all users in the in-memory storage

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)  # Run the app on all IPs (0.0.0.0) and port 5001