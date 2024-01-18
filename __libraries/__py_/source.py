import argparse
import json
from openai import OpenAI
import os
from dotenv import load_dotenv



def Argument():
    parser = argparse.ArgumentParser()
    parser.add_argument('--input', '-i',help='Enter input')
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


prompt = ( f"You are an IoT technician,you can answer the question which is of network of connections also,you can answer the question on ECE,
          You need to answer if the question is only Related to Iot and network and if not,say it is out of scope question {user_input}")
result=structured_generator(prompt)
output=result.choices[0].message.content

dict_=dict()
dict_={"output":output}
print(dict_)