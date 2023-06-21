# Article Summarizer
This repository contains an article summarizer application that utilizes OpenAI's GPT model through the Rapid API. It is built using Redux Toolkit Query and incorporates additional functionalities such as browser history storage and copy to clipboard.

![image](https://github.com/Valentina-Peralta/Article-Summarizer/assets/125395224/0b93d1b4-3878-4ae7-a130-a2b5d6f7b012)


## How it Works
The Article Summarizer application aims to provide concise summaries of web articles by leveraging the power of OpenAI's GPT model. The process is straightforward:

- Copy the URL of an article that you want to summarize and paste it into the designated input field.
- The application sends a request to the Rapid API, which connects to the OpenAI GPT model.
- The GPT model processes the article content and generates a summary.
- The summary is displayed on the application interface, providing you with a condensed version of the article's main points.
- You can also utilize the "Copy to Clipboard" functionality to easily save or share the summarized content.
- Additionally, the application incorporates browser history storage, allowing you to access and revisit previously summarized articles.

## Technologies used
- React
- Redux Toolkit Query, for managing API requests and catching data
- Rapid API: serves as the intermediary between the application and the OpenAI GPT model

## Getting started
To get started with the Article Summarizer application, follow these steps:

- Clone this repository to your local machine.
- Install the necessary dependencies by running npm install or yarn install in the project directory.
- Obtain an API key from Rapid API by signing up for an account and subscribing to the OpenAI GPT API.
- Replace the placeholder API key in the application's code with your actual API key.
- Start the application by running npm start or yarn start in the project directory.

##  This app was developed based on a tutorial by JavaScript Mastery. Please make sure to check out the JavaScript Mastery Youtube channel for more educational resources and tutorials on web development.
