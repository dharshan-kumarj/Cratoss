import argparse
import json
import os
from dotenv import load_dotenv
import google.generativeai as genai

def parse_arguments():
    parser = argparse.ArgumentParser()
    parser.add_argument('--input', '-i', help='Enter input')
    args = parser.parse_args()
    return args

def configure_genai():
    load_dotenv()
    genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

def generate_response(prompt):
    model = genai.GenerativeModel('gemini-pro')
    response = model.generate_content(prompt)
    return response.text

def main():
    args = parse_arguments()
    user_input = args.input

    configure_genai()

    prompt = (f"You are an IoT technician. Answer the following question if it's related to IoT. "
              f"If it's not related to IoT, state that it's out of scope: {user_input}")

    output = generate_response(prompt)

    result = {"output": output}
    final_out = json.dumps(result)
    print(final_out)

if __name__ == "__main__":
    main()