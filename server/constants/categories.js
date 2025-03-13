export const categories = {
  finance: [
    {
      id: "fin-001",
      keywords: ["banking", "investment", "loan", "money", "stocks", "trading"],
      responseTemplate: "For financial matters, consider {variable} options.",
    },
    {
      id: "fin-002",
      keywords: ["credit", "debt", "mortgage", "interest", "insurance"],
      responseTemplate:
        "Managing {variable} effectively is key to financial stability.",
    },
  ],
  healthcare: [
    {
      id: "health-001",
      keywords: ["doctor", "medicine", "hospital", "treatment", "patient"],
      responseTemplate:
        "Healthcare involves {variable} and proper medical guidance.",
    },
    {
      id: "health-002",
      keywords: ["surgery", "nurse", "therapy", "diagnosis", "prescription"],
      responseTemplate: "Proper {variable} ensures better patient care.",
    },
  ],
  technology: [
    {
      id: "tech-001",
      keywords: ["software", "AI", "cloud", "coding", "programming", "tech"],
      responseTemplate: "Tech sector relies on {variable} for innovation.",
    },
    {
      id: "tech-002",
      keywords: ["hardware", "IoT", "5G", "VR", "cybersecurity"],
      responseTemplate:
        "Emerging {variable} trends shape the future of technology.",
    },
  ],
  education: [
    {
      id: "edu-001",
      keywords: ["university", "school", "learning", "students", "course"],
      responseTemplate:
        "Educational institutions provide {variable} opportunities.",
    },
    {
      id: "edu-002",
      keywords: ["teacher", "curriculum", "exam", "textbook", "training"],
      responseTemplate: "A structured {variable} improves knowledge retention.",
    },
  ],
  general: [
    {
      id: "gen-001",
      keywords: [],
      responseTemplate: "General topics require more context for {variable}.",
    },
  ],
};
