export interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  bio: string;
  image: string;
}

export const team: TeamMember[] = [
  {
    name: "Fridah Kendi",
    role: "Founder & Lead Counsellor",
    specialty: "Marriage & Family Therapy, Clinical Counselling",
    bio: "With over 5 years of experience, Fridah is passionate about helping individuals and families navigate life's challenges with compassion.",
    image: "/images/team_fridah_kendi.png",
  },
  {
    name: "Amina Wanjiku",
    role: "Clinical Psychologist",
    specialty: "Trauma Counselling, Addiction Recovery",
    bio: "Amina brings deep expertise in trauma-informed care and addiction counselling, creating safe spaces for lasting healing and recovery.",
    image: "/images/team_amina.png",
  },
  {
    name: "Dr. James Ochieng",
    role: "Corporate Wellness Trainer",
    specialty: "Corporate Training, Stress Management",
    bio: "Dr. Ochieng specialises in workplace wellness programmes, equipping organisations with tools for stress management and team cohesion.",
    image: "/images/team_james.png",
  },
];
