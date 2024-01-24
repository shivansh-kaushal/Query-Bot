
# Query-Bot

Desciption:
This project uses the OpenAI chat model API to communicate with humans. There are 3 personalites which the model can behave like and the context is set according to those traits only and the result of the model is then received and displayed on the web page. 

The mode uses zero-shot prompting for getting the responses. Any query which may not fall under the context of the question that can be asked by these 3 traits may result in a "Invalid Query" message. 

You can choose any 3 personalities and only then will you be able to send the query or the model takes in "HR" as the default trait. There is a "New Chat" option that deletes the previous conversations between the user and the chatbot. You can get a streaming output from the model just like you get in ChatGPT.


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`OPENAI_API_KEY`


## Installation

Install the required packages and libraries with the help of following command

```bash
  pip install -r requirements.txt

```
    
You need to get to the path of the folder where you have saved this project. You can get there with the following command:

```bash
    cd folder_name/Query_Bot/chatbot_api
```
## Screenshots

https://drive.google.com/file/d/1X_zGh-UfKxZHOvG3t1N3GCEXR0BNBJGF/view?usp=drive_link
