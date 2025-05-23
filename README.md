# Telkomsel Chatbot Botium Tests

This project contains automated tests for the Telkomsel chatbot on the contact us page (`https://www.telkomsel.com/support/contact-us`) using [Botium](https://www.botium.ai/) and WebdriverIO.

## Project Structure

- `botium.json`: Botium configuration file, including WebdriverIO settings and element selectors.
- `spec/convo/telkomsel_chat.convo.txt`: Botium conversation file containing the test flow, including handling the cookie consent, opening the chat, entering user details, and the main conversation.
- `snippets/open_bot.js`: A WebdriverIO script used within the Botium flow for more complex interactions like handling the cookie consent modal with a loop.

## Setup

1. Ensure you have Node.js and npm installed.
2. Install Botium CLI globally:
   ```bash
   npm install -g botium-cli
   ```
3. Install project dependencies:
   ```bash
   npm install
   ```

## Running Tests

1. Make sure you have a Selenium Standalone Server or ChromeDriver running on `localhost:4444`.
2. Run the Botium tests using the Botium CLI:
   ```bash
   botium-cli run --config botium.json --convos spec/convo
   ```

## Adding More Test Cases

To add more test cases, you can either:

- Add new conversation blocks within the `spec/convo/telkomsel_chat.convo.txt` file.
- Create new `.convo.txt` files in the `spec/convo` directory.

Each conversation block or `.convo.txt` file represents a separate test case. 