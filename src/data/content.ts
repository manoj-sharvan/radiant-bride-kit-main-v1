export const services = [
  {
    title: "Bridal Makeup",
    desc: "Traditional South Indian bridal look with long-lasting finish for your big day.",
    price: "₹5,000 – ₹8,000",
    icon: "💄",
  },
  {
    title: "HD & Airbrush Makeup",
    desc: "Flawless camera-ready finish using premium HD and airbrush techniques.",
    price: "₹6,000 – ₹10,000",
    icon: "✨",
  },
  {
    title: "Reception Makeup",
    desc: "Glamorous evening look with bold eyes and elegant contouring.",
    price: "₹3,000 – ₹5,000",
    icon: "🌹",
  },
  {
    title: "Engagement Makeup",
    desc: "Soft, romantic glam perfect for your engagement ceremony.",
    price: "₹2,500 – ₹4,000",
    icon: "💍",
  },
  {
    title: "Hairstyling",
    desc: "Traditional braids, modern updos, and floral styling.",
    price: "₹1,500 – ₹2,500",
    icon: "💇",
  },
  {
    title: "Saree Draping",
    desc: "Expert traditional and contemporary saree draping styles.",
    price: "₹1,000 – ₹1,500",
    icon: "🥻",
  },
  {
    title: "Mehendi Application",
    desc: "Intricate bridal mehendi designs by skilled artists.",
    price: "₹2,000 – ₹3,500",
    icon: "🎨",
  },
] as const;

export const packages = [
  {
    name: "Engagement",
    price: "₹4,500",
    tag: "Starter",
    highlight: false,
    features: ["Soft glam makeup", "Basic hairstyling", "Saree draping", "1 venue", "Touch-up kit"],
  },
  {
    name: "Classic Bridal",
    price: "₹8,500",
    tag: "Most loved",
    highlight: true,
    features: [
      "HD bridal makeup",
      "Traditional hairstyling",
      "Saree draping",
      "Floral hair styling",
      "Premium products",
      "Trial session",
    ],
  },
  {
    name: "Royal Bridal",
    price: "₹14,500",
    tag: "Premium",
    highlight: false,
    features: [
      "Airbrush HD makeup",
      "Designer hair updo",
      "Saree + jewellery setting",
      "Mehendi consultation",
      "Reception look",
      "Trial + touch-up",
    ],
  },
  {
    name: "Complete Wedding",
    price: "₹22,000",
    tag: "Full ceremony",
    highlight: false,
    features: [
      "Engagement look",
      "Bridal day look",
      "Reception look",
      "Hairstyling all events",
      "Bridesmaid coordination",
      "Travel included*",
    ],
  },
] as const;

export const testimonials = [
  {
    name: "Priya R.",
    role: "Bride 2024",
    rating: 5,
    text: "Her makeup lasted 12+ hours without a single touch-up. Absolutely flawless and so kind throughout the entire day.",
  },
  {
    name: "Anjali S.",
    role: "Bride 2024",
    rating: 5,
    text: "Best bridal makeup artist in Tiruvannamalai. Highly recommend to every bride looking for that perfect royal look.",
  },
  {
    name: "Deepa K.",
    role: "Bride 2024",
    rating: 5,
    text: "The hairstyling and saree draping were impeccable. Divya is a true professional and made me feel like a queen.",
  },
  {
    name: "Lakshmi V.",
    role: "Bride 2023",
    rating: 5,
    text: "The HD makeup looked stunning in every photograph. Very professional and convenient.",
  },
  {
    name: "Meera N.",
    role: "Reception look",
    rating: 5,
    text: "Beautiful airbrush finish that photographed beautifully. Worth every rupee for the quality and care.",
  },
  {
    name: "Sangeetha M.",
    role: "Bride 2024",
    rating: 5,
    text: "From trial to wedding day, every detail was perfect. My family kept saying I looked like a movie heroine!",
  },
] as const;

export const faqs = [
  {
    q: "How far in advance should I book?",
    a: "We recommend booking 3–6 months in advance for peak wedding season (Nov–Feb). For other dates, 1–2 months is usually sufficient.",
  },
  {
    q: "What products do you use?",
    a: "Only premium international brands — MAC, Huda Beauty, Charlotte Tilbury, Bobbi Brown, NARS, and professional HD/airbrush systems.",
  },
  {
    q: "Do you provide a trial session?",
    a: "Yes, trial sessions are included in our Classic and Royal Bridal packages. Standalone trials can also be booked separately.",
  },
  {
    q: "How long does bridal makeup take?",
    a: "Typically 2–2.5 hours for the bridal look including hair, draping, and floral styling.",
  },
  {
    q: "Will the makeup last all day?",
    a: "Absolutely. Our HD and airbrush techniques are designed to last 12+ hours through tears, hugs, and South Indian heat.",
  },
  {
    q: "Do you do bridesmaids and family makeup?",
    a: "Yes, we offer family and bridesmaid packages. Please mention the number of people while enquiring.",
  },
  {
    q: "What is the booking process?",
    a: "Reach out via WhatsApp or call. We'll discuss your date, venue, and package, then a small advance secures your booking.",
  },
] as const;
