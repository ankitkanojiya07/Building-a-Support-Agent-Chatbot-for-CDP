import { Message } from '../types';

// Generate a unique ID for messages
export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

// Create a new message object
export const createMessage = (role: 'user' | 'assistant', content: string): Message => {
  return {
    id: generateId(),
    role,
    content,
    timestamp: new Date()
  };
};

// Detect which CDP the question is about
export const detectCDP = (question: string): string => {
  const lowerQuestion = question.toLowerCase();
  
  if (lowerQuestion.includes('segment')) {
    return 'segment';
  } else if (lowerQuestion.includes('mparticle') || lowerQuestion.includes('m particle')) {
    return 'mparticle';
  } else if (lowerQuestion.includes('lytics')) {
    return 'lytics';
  } else if (lowerQuestion.includes('zeotap')) {
    return 'zeotap';
  } else if (lowerQuestion.includes('compare') || lowerQuestion.includes('difference') || lowerQuestion.includes('versus') || lowerQuestion.includes('vs')) {
    return 'all';
  }
  
  return 'unknown';
};

// Check if the question is a how-to question
export const isHowToQuestion = (question: string): boolean => {
  const lowerQuestion = question.toLowerCase();
  return (
    lowerQuestion.includes('how to') || 
    lowerQuestion.includes('how do i') || 
    lowerQuestion.includes('how can i') || 
    lowerQuestion.includes('steps to') || 
    lowerQuestion.includes('guide for') ||
    lowerQuestion.includes('instructions for')
  );
};

// Mock API response for demonstration purposes
export const getMockResponse = (question: string): string => {
  const cdp = detectCDP(question);
  const isHowTo = isHowToQuestion(question);
  
  if (!isHowTo) {
    return "I'm specifically designed to answer 'how-to' questions about Customer Data Platforms (CDPs). Could you please rephrase your question to ask how to perform a specific task in Segment, mParticle, Lytics, or Zeotap?";
  }
  
  if (cdp === 'unknown') {
    return "I can help with how-to questions for Segment, mParticle, Lytics, and Zeotap. Could you please specify which CDP you're asking about?";
  }
  
  // Mock responses based on detected CDP and common questions
  if (question.toLowerCase().includes('set up a new source') && cdp === 'segment') {
    return `
## How to set up a new source in Segment

To set up a new source in Segment, follow these steps:

1. Log in to your Segment workspace
2. Navigate to Sources in the left sidebar
3. Click "Add Source" button
4. Browse or search for the source type you want to add
5. Click on the source and follow the on-screen instructions
6. Configure the source settings as needed
7. Save your configuration

For more detailed information, you can refer to the [Segment documentation](https://segment.com/docs/connections/sources/).
    `;
  }
  
  if (question.toLowerCase().includes('create a user profile') && cdp === 'mparticle') {
    return `
## How to create a user profile in mParticle

To create a user profile in mParticle:

1. Log in to your mParticle dashboard
2. Navigate to the "Users" section
3. Click "Create User Profile"
4. Enter the required user information
5. Add any custom attributes as needed
6. Set user identifiers (email, customer ID, etc.)
7. Save the profile

For more details, check the [mParticle documentation](https://docs.mparticle.com/guides/platform-guide/users/).
    `;
  }
  
  if (question.toLowerCase().includes('build an audience segment') && cdp === 'lytics') {
    return `
## How to build an audience segment in Lytics

To build an audience segment in Lytics:

1. Log in to your Lytics account
2. Navigate to "Audiences" in the main menu
3. Click "Create New Audience"
4. Define your audience criteria using the segment builder
5. Add filters based on user behaviors, attributes, or events
6. Preview your audience to check the size and composition
7. Name and save your audience segment

For more information, visit the [Lytics documentation](https://docs.lytics.com/product/audiences/).
    `;
  }
  
  if (question.toLowerCase().includes('integrate') && cdp === 'zeotap') {
    return `
## How to integrate your data with Zeotap

To integrate your data with Zeotap:

1. Log in to your Zeotap account
2. Go to "Integrations" in the main navigation
3. Select "Add New Integration"
4. Choose the data source type you want to integrate
5. Configure the connection settings
6. Set up data mapping between your source and Zeotap
7. Test the integration
8. Activate the integration

For detailed instructions, refer to the [Zeotap documentation](https://docs.zeotap.com/home/en-us/).
    `;
  }
  
  if (cdp === 'all' && (question.toLowerCase().includes('compare') || question.toLowerCase().includes('difference'))) {
    return `
## Comparison of CDP Audience Creation Processes

### Segment
- Uses a visual interface for building audiences
- Supports real-time and batch audience creation
- Offers pre-built templates for common audience types
- Allows for complex behavioral targeting

### mParticle
- Provides a rule-based audience builder
- Supports real-time audience updates
- Offers advanced filtering options
- Includes lookalike audience capabilities

### Lytics
- Uses machine learning for predictive audiences
- Offers behavior-based segmentation
- Includes content affinity modeling
- Provides audience insights and recommendations

### Zeotap
- Focuses on identity resolution for audience creation
- Offers third-party data enrichment
- Provides cross-device audience targeting
- Includes privacy compliance features

Each platform has its strengths, with Segment focusing on integration flexibility, mParticle on data quality, Lytics on predictive capabilities, and Zeotap on identity resolution.
    `;
  }
  
  // Generic response if no specific match is found
  return `I can help you with how to ${question.toLowerCase().includes('how to') ? question.split('how to')[1].trim() : 'perform this task'} in ${cdp !== 'unknown' ? cdp : 'the CDP of your choice'}. Please check the official documentation for detailed instructions.`;
};