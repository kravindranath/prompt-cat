export const categories = {
  finance: {
    keywords: ["banking", "investment", "loan", "money", "stocks", "trading"],
    responseTemplate: "For financial matters, consider {variable} options.",
  },
  healthcare: {
    keywords: ["doctor", "medicine", "hospital", "treatment", "patient"],
    responseTemplate:
      "Healthcare involves {variable} and proper medical guidance.",
  },
  technology: {
    keywords: ["software", "AI", "cloud", "coding", "programming", "tech"],
    responseTemplate: "Tech sector relies on {variable} for innovation.",
  },
  education: {
    keywords: ["university", "school", "learning", "students", "course"],
    responseTemplate:
      "Educational institutions provide {variable} opportunities.",
  },
  general: {
    keywords: [],
    responseTemplate: "General topics require more context for {variable}.",
  },
};
