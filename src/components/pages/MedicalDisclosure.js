import React, { useEffect, useRef, useState } from 'react';
import './medical.css';
import { Bars } from 'react-loader-spinner';
import data from '../data.json';

const MedicalDisclosure = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const chatHistoryRef = useRef(null); // Ref for chat history container

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const delayToShowWelcome = 500; // Delay in milliseconds

    // Show the welcome message after the delay
    const welcomeTimer = setTimeout(() => {
      setChatHistory((prevHistory) => [
        ...prevHistory,
        {
          text:
            "Hello! Welcome to our Placement chat web application.",
          isUser: false,
        },
      ]);
    }, delayToShowWelcome);

    return () => {
      clearTimeout(welcomeTimer);
    };
  }, []); // Empty dependency array to run the effect only once

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  useEffect(() => {
    chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
  }, [chatHistory]);

  const handleSubmit = () => {
    if (userInput.trim() !== '') {
      setIsLoading(true);

      // Process the user's input and generate a system response based on backward chaining logic
      setTimeout(() => {
        const systemResponse = generateSystemResponse(userInput.toLowerCase()); // Replace with your logic
        console.log('User Input:', userInput);
        console.log('System Response:', systemResponse);

        // Add both the user's message and system response to the chat history
        setChatHistory((prevHistory) => [
          ...prevHistory,
          { text: userInput, isUser: true },
          { text: systemResponse, isUser: false },
        ]);

        setIsLoading(false);
        setUserInput(''); // Clear the user input
      }, 1000);
    }
  };

  // Simulated function to generate system responses based on user input
  const generateSystemResponse = (userInput) => {
    const userTokens = userInput.toLowerCase().split(/\s+/);

    let exactMatch = null;
    let secondBestMatch = null;
    let exactMatchTokens = 0;
    let secondBestMatchTokens = 0;

    for (const patternAndResponse of data) {
      const { patterns, responses } = patternAndResponse;

      if (
        !Array.isArray(patterns) ||
        patterns.length === 0 ||
        !Array.isArray(responses) ||
        responses.length === 0
      ) {
        console.error('Invalid pattern-response pair:', patternAndResponse);
        continue;
      }

      for (const pattern of patterns) {
        const patternTokens = pattern.toLowerCase().split(/\s+/);

        const matchedTokens = patternTokens.filter((token) =>
          userTokens.includes(token)
        );

        if (
          matchedTokens.length > exactMatchTokens &&
          matchedTokens.length === patternTokens.length
        ) {
          exactMatch = patternAndResponse;
          exactMatchTokens = matchedTokens.length;
        } else if (matchedTokens.length > secondBestMatchTokens) {
          secondBestMatch = patternAndResponse;
          secondBestMatchTokens = matchedTokens.length;
        }
      }
    }

    if (exactMatch) {
      return exactMatch.responses[0]; // Exact match found
    } else if (secondBestMatch) {
      return secondBestMatch.responses[0]; // Second best match found
    } else {
      console.error('No matching pattern found for input:', userInput);
      return "I'm sorry, I couldn't understand your input. Please provide more details.";
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent the form submission
      handleSubmit(); // Manually trigger the button click event
    }
  };

  return (
    <div className="chat-interface">
      <div className="chat-history" ref={chatHistoryRef}>
        {chatHistory.map((message, index) => (
          <div
            key={index}
            className={message.isUser ? 'user-message  ' : 'system-message '}
          >
            {message.text.split('\n\n').map((line, lineIndex) => (
              <p key={lineIndex} className="">
                {line}
              </p>
            ))}
          </div>
        ))}
      </div>
      <div className="input-container  col-md-12">
        <input
          type="text"
          id="userInput"
          placeholder="Type your message..."
          value={userInput}
          onChange={handleUserInput}
          onKeyDown={handleKeyPress}
          // Handle "Enter" key press
        />
        <button className='me-2' onClick={isLoading ? null : handleSubmit} disabled={isLoading}>
          {isLoading ? (
            <Bars
              height="30"
              width="40"
              color="#4fa94d"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          ) : (
            'Send'
          )}
        </button>
      </div>
    </div>
  );
};

export default MedicalDisclosure;
