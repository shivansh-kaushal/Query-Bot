											Documentations

Title: ChatBot impersonating 3 different personas built using flask and OpenAI

Desciption:
This project uses the OpenAI chat model API to communicate with humans. This project uses zero-shot prompting. The model has been explained to work like a particular personality based on the nature of the question asked. The simple interface shows a message "Select who you want to chat with", which selects one of the traits and the model behaves in that particular way. The model gets the whole history of the previous chat and so it can maintain the context upto a point. You can also clear the history by clicking at the "New chat" button which clears the previous history and a new file stores the new chat history. You can also check the history of the chats in the files names history followed by the number of the file. 

Usage:
This project can be directly used in command line interface(CLI) with the following command:
python3 app.py

This project uses a python environment. All the required libraries and packages required for the project are mentioned and can be directly installed with the 'Requirements.txt' file.

Models:
This project is based on the OpenAI chat model :'gpt-3.5-turbo', which is an instruction tuned LLM. The model can be very easily changed and experimented with based on the use-case

Project output expectation:
This project follows a behaviour which is realted to the 3 sets as discussed already. You can ask any question and you will recieve a satisfactory response with accurate classification among the three categories. You can only enter 4000 character due to the token limitation of the model and cannot change the context that is already set. Any invalid question which are not related to the entities in interest will be flagged as an invalid question. Some minute details like greetings and common question has been set to be answered by the HR category.

Here are some examples of the conversation with the model-

Query: 'Hi'
Query_bot: 'Hello! How can I assist you today?'

Query: 'I have been trying to make my company to a new level but I am not able to do it. My company sell courses of data science and they sales are very less. what should I do?'
Query_bot: 'Thank you for reaching out. It's great that you're looking to take your company to the next level. Selling courses in the field of data science can be a lucrative business, but it requires a strategic approach. Here are a few steps you can take to improve your sales: 1. Understand your target audience: Identify who your ideal customers are and what their needs and pain points are. This will help you tailor your courses and marketing efforts to better resonate with them. 2. Enhance your course offerin.............'

Query: 'I am trying to code but it is very tough for me. What should I do?'
Query_bot: 'As a highly trained and professional developer, I understand that coding can be challenging, especially for beginners. Here are some steps you can take to make the learning process easier: 1. Start with the basics: Ensure you have a solid understanding of fundamental programming concepts such as variables, data types, loops, and conditionals. There are numerous online tutorials, courses, and books available that can help you grasp these concepts.....................'

These are just examples to see what you can expect from the project.
