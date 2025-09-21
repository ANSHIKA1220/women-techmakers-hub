import { Role } from './types';

export const KNOWLEDGE_BASE = [
    {
        keywords: ['event', 'conference', 'meetup', 'webinar', 'workshop'],
        response: "There are many great events for women in tech! I recommend checking out sites like the Grace Hopper Celebration, Women Who Code, and Tech Up for Women. Searching for 'women in tech conferences' on your favorite search engine is also a great way to find local and virtual events!"
    },
    {
        keywords: ['scholarship', 'funding', 'financial aid', 'grant'],
        response: "Absolutely! Many organizations offer scholarships to support women in tech. Look into programs from the Society of Women Engineers (SWE), Google's Women Techmakers Scholarship Program, and the AnitaB.org foundation. These can be great resources for funding your education or career development."
    },
    {
        keywords: ['mentor', 'mentorship', 'guide', 'coach'],
        response: "Finding a mentor is a fantastic step! Platforms like Rewriting the Code, Merit, and local 'Women in Tech' meetup groups are excellent places to connect with experienced professionals who can offer guidance and support."
    },
    {
        keywords: ['forum', 'community', 'discussion', 'safe space'],
        response: "Connecting with a community is so important. I recommend the 'r/womenintech' subreddit, the Elpha community, and various private groups on Facebook or LinkedIn. They provide safe spaces for discussion and support."
    },
    {
        keywords: ['news', 'article', 'blog', 'resource'],
        response: "Staying updated is key! Following publications like 'Women in Technology International (WITI)' and blogs from major tech companies focused on diversity and inclusion are great ways to get the latest news and articles."
    },
];

export const SUGGESTION_CHIPS = [
    "Upcoming tech conferences",
    "Scholarships for coding bootcamps",
    "Find a mentor in AI/ML",
    "Good forums for women in tech",
];

export const WELCOME_MESSAGE = {
    role: Role.MODEL,
    text: "Hello! I'm Athena, your AI guide to resources for women in tech. How can I help you today? You can ask me about events, scholarships, mentorship, or news."
};