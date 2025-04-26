from flask import Flask, request, jsonify
import openai
import os
from dotenv import load_dotenv
from flask_cors import CORS

load_dotenv()

app = Flask(__name__)
CORS(app)  # Allows frontend JS to access this server

openai.api_key = os.getenv("OPENAI_API_KEY")

@app.route("/api/critic", methods=["POST"])
def generate_critique():
    data = request.get_json()
    url = data.get("url")

    prompt = f"Act like a hilarious, sarcastic website critic. Review the website at {url} — roast it kindly but playfully! Make jokes about its design, user experience, performance, and any improvements it desperately needs."


    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "user", "content": prompt}
            ]
        )
        ai_output = response["choices"][0]["message"]["content"]
        return jsonify({"critique": ai_output})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
