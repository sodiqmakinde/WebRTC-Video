
# Decacam - WebRTC Video Chat Application

Decacam is a WebRTC-based video chat application that allows users to have video conversations with each other. The application is built using Node.js and React.js and can be used in modern web browsers.

## Preview

![Decacam Preview](https://github.com/sodiqmakinde/WebRTC-Video/blob/main/client/public/Screenshot%202023-04-22%20at%2007.10.57.png?raw=true)

## Installation

To use Decacam, you will need to clone this repository to your local machine. You can do this using the following command in your terminal:

bashCopy code

`git clone https://github.com/sodiqmakinde/WebRTC-Video.git`

Once you have cloned the repository, you will need to install the dependencies. You can do this by navigating to the root directory of the project in your terminal and running the following command:

Copy code

`npm install`

This will install all the necessary dependencies needed to run the application.

## Running the Application

To start the development server, navigate to the root directory of the project in your terminal and run the following command:

sqlCopy code

`npm start` 

This will start the development server on `localhost:3005`.

Next, you will need to navigate to the client directory and run the same command to start the client-side of the application:

bashCopy code

`cd client
npm install
npm start` 

This will start the client-side of the application on `localhost:3000`.

You can now access the application in your web browser by visiting `localhost:3000`.

Alternatively, you can also access the deployed versions of the application. The server is deployed on [https://talentserver.vercel.app](https://talentserver.vercel.app/) and the frontend is deployed on [https://decacam.netlify.app/](https://decacam.netlify.app/). However, there may be an issue with CORS that is currently preventing requests from working properly. This issue can be fixed later.

## Usage

To use Decacam, make sure you have the server running at `localhost:3005`.

1.  Input your name in the name field
2.  Copy your ID and give it to someone that you want to join you
3.  The other person should input your ID into the field labeled "Enter friend's ID" and click on the "Join" button
4.  Once the other person joins, the video chat will start automatically

## Contributing

If you would like to contribute to Decacam, please open a pull request or submit an issue on the GitHub repository.
