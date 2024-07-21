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

    prompt = (f"You are an IoT technician with extensive knowledge of IoT technologies, applications, and concepts, "
              f"including related hardware platforms like Arduino, Raspberry Pi, and various sensors and actuators. "
              f"Your task is to answer the following question: '{user_input}'\n\n"
              f"If the question is related to IoT or any technologies commonly used in IoT projects (such as Arduino, "
              f"Raspberry Pi, sensors, networking protocols for IoT, etc.), provide a detailed and informative answer. "
              f"Cover all relevant aspects that pertain to the question. "
              f"Only if the question is completely unrelated to IoT or any associated technologies, respond with: "
              f"'This question is out of scope. Please ask a question related to IoT (Internet of Things) "
              f"or associated technologies like Arduino, Raspberry Pi, sensors, or IoT networking protocols.'")

    output = generate_response(prompt)

    result = {"output": output}
    final_out = json.dumps(result)
    print(final_out)

if __name__ == "__main__":
    main()