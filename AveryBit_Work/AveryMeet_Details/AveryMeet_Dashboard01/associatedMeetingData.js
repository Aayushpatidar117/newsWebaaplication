const associatedMeetings = [
  {
    id: 1,
    title: "Marketing Strategy Call",
    date: "May 5, 2025",
    time: "8:52 PM",
    duration: "37 sec",
    summary:
      "Discussed Q2 marketing targets, with emphasis on social media campaigns and outreach strategies.",
    transcript:
      "Europe, you are being kind of in a good place... those little pains either. Okay. Very. Not a curtain.",
    keywords: ["marketing", "social media", "Q2", "strategy"],
    speakers: {
      Speaker1: "89%",
      Speaker2: "11%",
    },
    location: "Zoom",
  },
  {
    id: 2,
    title: "Weekly Engineering Sync",
    date: "May 4, 2025",
    time: "11:00 AM",
    duration: "1 min 20 sec",
    summary:
      "Team reviewed sprint progress, discussed blockers and upcoming deadlines for the new feature release.",
    transcript:
      "Let's move the integration testing to Friday... the API refactor is 60% done. Who’s handling the mobile fix?",
    keywords: ["engineering", "sprint", "blockers", "release"],
    speakers: {
      LeadEngineer: "70%",
      BackendDev: "30%",
    },
    location: "Google Meet",
  },
  {
    id: 3,
    title: "Client Feedback Session",
    date: "May 3, 2025",
    time: "4:30 PM",
    duration: "2 min 5 sec",
    summary:
      "Enterprise client shared thoughts on the onboarding process, with requests for improved support materials.",
    transcript:
      "Onboarding is confusing for new team members. More video tutorials would help. We like the UI though!",
    keywords: ["client", "onboarding", "feedback", "support"],
    speakers: {
      Client: "60%",
      AccountManager: "40%",
    },
    location: "Microsoft Teams",
  },
  {
    id: 4,
    title: "Design Review Call",
    date: "May 2, 2025",
    time: "2:00 PM",
    duration: "1 min 45 sec",
    summary:
      "Design team presented new UI concepts for the dashboard and got feedback from product team.",
    transcript:
      "This layout feels more intuitive. Let’s reduce padding here and add contextual tooltips on hover.",
    keywords: ["design", "UI", "dashboard", "feedback"],
    speakers: {
      UXDesigner: "80%",
      ProductManager: "20%",
    },
    location: "Figma Live Meeting",
  },
  {
    id: 5,
    title: "Support Escalation Briefing",
    date: "May 1, 2025",
    time: "9:15 AM",
    duration: "1 min 10 sec",
    summary:
      "Escalation related to server downtime analyzed, root cause was shared, and preventive actions discussed.",
    transcript:
      "Server load peaked due to batch job. We’ll move it to off-hours. Monitoring alerts will be reconfigured.",
    keywords: ["support", "downtime", "monitoring", "server"],
    speakers: {
      SupportLead: "50%",
      DevOpsEngineer: "50%",
    },
    location: "Slack Huddle",
  },
];

export default associatedMeetings;
