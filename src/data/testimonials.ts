export interface Testimonial {
  name: string;
  location: string;
  quote: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Jane Kirimi",
    location: "Meru",
    quote:
      "Having interacted with the service providers, I received timely consultancy and professionalism from Mindful Wema Solutions Limited.",
    avatar: "/images/TestimonialsImg.png",
  },
  {
    name: "John Mwangi",
    location: "Nakuru",
    quote:
      "I found the sessions at Mindful Wema Solutions incredibly insightful. Their tailored approach helped me overcome personal challenges with confidence.",
    avatar: "/images/TestimonialsImg.png",
  },
  {
    name: "Grace Achieng'",
    location: "Nairobi",
    quote:
      "The counseling sessions were life-changing for me. The experts at Mindful Wema Solutions provided practical tools that helped me navigate through a difficult phase.",
    avatar: "/images/TestimonialsImg.png",
  },
];
