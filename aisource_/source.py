from openai import OpenAI
import os
from dotenv import load_dotenv

# Load environment variables from the .env file
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
while (True):
    print("\n\n AiIoT bot:Enter the question to b asked to me\n")
    user_in= input(" \nUser:")   
    prompt = ( f"You are an IoT technician,you can answer the question which is of network of connections also.You need to answer if the question is only Related to Iot and network and if not,say it is out of scope question {user_in}")
    result=structured_generator(prompt)
    print(result.choices[0].message.content)
