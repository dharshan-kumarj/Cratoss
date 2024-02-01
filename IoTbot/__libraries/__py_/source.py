import argparse
import json
from openai import OpenAI
import os
from dotenv import load_dotenv



def Argument():
    parser = argparse.ArgumentParser()
    parser.add_argument('--input', '-i',help='Enter input as a string')
    args = vars(parser.parse_args())
    return args

user_input= Argument()['input']


load_dotenv()

client = OpenAI(
    api_key=os.getenv("OPEN_API_KEY")
)


def structured_generator(prompt):
    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": prompt
            },
        ],
        model="gpt-3.5-turbo"
    )
    return chat_completion


iot_prompt =  """
IoT Chatbot: Help me control and monitor your IoT devices.

User: [User's input related to IoT]

IoT Chatbot: [Generate the AI response based on the user input and IoT context]
"""
combined_prompt = iot_prompt + f"\nUser: {user_input}\n"
result=structured_generator(combined_prompt)
output=result.choices[0].message.content

dict_=dict()
dict_={"output":output}
print(json.dumps(dict_))