import argparse     #for executing the command line python programs 
import json        #to give direct output by removibg the key value pair
from openai import OpenAI  #to use ai chatbot using API keys
import os   
from dotenv import load_dotenv  #to load the api key from .env


def Argument():
    parser = argparse.ArgumentParser()
    parser.add_argument('--input', '-i',help='Enter input')    #defining the arguparser function getting input from user using argparser
    args = vars(parser.parse_args())
    return args

user_input= Argument()['input'] #gets the input by using argparser
load_dotenv()  #unload the API keys from .env

client = OpenAI(                            #from 17 to 35 it is for to generate ai answer
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

prompt = ( f"You are an IoT technician,You need to answer if the question is only Related to Iot and if not,say it is out of scope question {user_input}")
result=structured_generator(prompt)
output=result.choices[0].message.content

dict_=dict()
dict_={"output":output}
final_out=json.dumps(dict_)    #to remove the key value pair
print(final_out)