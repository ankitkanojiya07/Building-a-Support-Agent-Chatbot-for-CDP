# CDP Support Agent Chatbot

A modern, interactive chatbot designed to answer "how-to" questions related to four major Customer Data Platforms (CDPs): Segment, mParticle, Lytics, and Zeotap.

![Screenshot 2025-02-28 205709](https://github.com/user-attachments/assets/49d32a98-480f-48bd-bc00-89d78fdf1c91)
![Screenshot 2025-02-28 205735](https://github.com/user-attachments/assets/415d1656-a17b-45d2-8796-f49c8e930a30)
![Screenshot 2025-02-28 205756](https://github.com/user-attachments/assets/65327f88-bef9-4839-a624-d9204cc58acc)


## Features



- **Platform-Specific Support**: Get detailed guidance for Segment, mParticle, Lytics, and Zeotap
- **How-To Questions**: Receive step-by-step instructions for common CDP tasks
- **Cross-Platform Comparisons**: Compare features and approaches across different CDPs
- **Markdown Support**: Responses include formatted text, lists, and links for better readability
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ankitkanojiya07/Building-a-Support-Agent-Chatbot-for-CDP
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

1. **Select a CDP**: Choose a specific CDP to focus on, or select "All CDPs" for comparison questions
2. **Ask How-To Questions**: Type your question in the input field and press Enter or click the Send button
3. **View Responses**: The chatbot will provide detailed, step-by-step instructions with links to official documentation

### Example Questions

- "How do I set up a new source in Segment?"
- "How can I create a user profile in mParticle?"
- "How do I build an audience segment in Lytics?"
- "How can I integrate my data with Zeotap?"
- "How does Segment's audience creation compare to Lytics'?"

## Technologies Used

- **React**: Frontend library for building user interfaces
- **TypeScript**: Static typing for better code quality and developer experience
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Vite**: Next-generation frontend tooling for faster development
- **React Markdown**: Renders Markdown content as React components

## Future Enhancements

- **Backend Integration**: Connect to a real backend service that indexes and searches CDP documentation
- **Vector Database**: Implement semantic search capabilities for more accurate responses
- **User Authentication**: Add user accounts and conversation history
- **More CDPs**: Expand support to additional Customer Data Platforms
- **Voice Input**: Add speech-to-text capabilities for voice queries

## Acknowledgments

- [Segment Documentation](https://segment.com/docs/?ref=nav)
- [mParticle Documentation](https://docs.mparticle.com/)
- [Lytics Documentation](https://docs.lytics.com/)
- [Zeotap Documentation](https://docs.zeotap.com/home/en-us/)
