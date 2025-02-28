export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
}

export type CDP = 'segment' | 'mparticle' | 'lytics' | 'zeotap' | 'all';

export interface CDPInfo {
  name: string;
  description: string;
  docsUrl: string;
  logo: string;
}

export const CDPs: Record<CDP, CDPInfo> = {
  segment: {
    name: 'Segment',
    description: 'A customer data platform that helps you collect, clean, and control your customer data.',
    docsUrl: 'https://segment.com/docs/?ref=nav',
    logo: 'https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80'
  },
  mparticle: {
    name: 'mParticle',
    description: 'A customer data platform that helps you integrate all of your data and orchestrate it across channels.',
    docsUrl: 'https://docs.mparticle.com/',
    logo: 'https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80'
  },
  lytics: {
    name: 'Lytics',
    description: 'A customer data platform that helps you create personalized experiences with machine learning.',
    docsUrl: 'https://docs.lytics.com/',
    logo: 'https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80'
  },
  zeotap: {
    name: 'Zeotap',
    description: 'A customer intelligence platform that helps you unify, enhance and activate your customer data.',
    docsUrl: 'https://docs.zeotap.com/home/en-us/',
    logo: 'https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80'
  },
  all: {
    name: 'All CDPs',
    description: 'Compare features across all supported Customer Data Platforms.',
    docsUrl: '',
    logo: 'https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80'
  }
};