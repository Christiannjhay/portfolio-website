import cjmovies1 from "../assets/images/CjMovies/cjmovies1.png";
import cjmovies2 from "../assets/images/CjMovies/cjmovies2.png";
import cjmovies3 from "../assets/images/CjMovies/cjmovies3.png";
import cjmovies4 from "../assets/images/CjMovies/cjmovies4.png";
import sen1 from "../assets/images/Sentinels/sen1.png";
import sen2 from "../assets/images/Sentinels/sen2.png";
import sen3 from "../assets/images/Sentinels/sen3.png";
import infosoft1 from "../assets/images/infosoft/infosoft1.png";
import infosoft2 from "../assets/images/infosoft/infosoft2.png";
import acms1 from "../assets/images/Acms/acms1.png";
import acms2 from "../assets/images/Acms/acms2.png";
import acms3 from "../assets/images/Acms/acms3.png";
import acms4 from "../assets/images/Acms/acms4.png";
import bogsy1 from "../assets/images/bogsy/bogsy1.png";
import bogsy2 from "../assets/images/bogsy/bogsy2.png";
import bogsy3 from "../assets/images/bogsy/bogsy3.png";
import gecko1 from "../assets/images/gecko/gecko_video.mp4"
import gecko2 from "../assets/images/gecko/gecko1.png"

const Project = [
  {
    id: 1,
    title: "CJ Movies",
    type: "website",
    year: "2024",
    image: [cjmovies1, cjmovies2, cjmovies3, cjmovies4],
    solution: "I developed the CJ Movies website as a personal project using React for the frontend and Node.js for the backend, ensuring a dynamic and responsive user experience. I utilized Supabase as the PostgreSQL database solution for efficient management of user data and movie collections. To enhance the user experience, I implemented Redis for session storage during login, ensuring quick and secure access to user accounts. The site features a seamless login system that enables users to bookmark their favorite films and create personalized collections. I applied SEO and accessibility best practices to improve discoverability and usability. Deployed on Vercel, the platform guarantees reliable performance and fast access, allowing users to effortlessly stream their favorite movies.",
    description:
      "CJ Movies is a dynamic movie website where you can stream your favorite films and easily bookmark your top picks for future viewing. Users can create personalized collections of their favorite movies with a seamless login system. The platform is deployed on Vercel, ensuring fast and reliable access. Explore the site at https://www.movies.cejs.site/.",
    technology: ["React", "Node.js", "Redis", "Supabase"],
  },
  {
    id: 2,
    title: "Shopify Sentinels",
    type: "website",
    year: "2024",
    image: [sen1, sen2, sen3],
    solution: "I successfully recreated dynamic components from the original website, sentinels.gg, using Shopify. This project involved transforming challenging sections of the site into functional components tailored for an e-commerce environment. I focused on maintaining the visual integrity and interactivity of the original design while leveraging Shopify's capabilities to enhance user experience. The result is a robust and visually appealing online store, accessible at shop.sentinels.cejs.site, that showcases the brand's identity and provides a seamless shopping experience for customers.",
    description:
      "Recreated dynamic components from https://sentinels.gg/ in shopify, here's the link of my website https://shop.sentinels.cejs.site/",
    technology: ["Shopify", "Html", "Css", "Javascript", "Liquid"],
  },
  {
    id: 3,
    title: "Infosoft DTR Website",
    type: "website",
    year: "2024",
    image: [infosoft1, infosoft2],
    solution: "I successfully recreated the DTR (Daily Time Record) website for interns, focusing on improving mobile responsiveness to ensure optimal usability across various devices. During the development process, I identified and resolved a critical issue that allowed users to clock out after their initial clock-in date, thereby enhancing the integrity of the timekeeping system. To further improve functionality, I implemented a feature that enables interns to input their tasks during clock-in or clock-out, significantly enhancing user experience by allowing for better task tracking and accountability.",
    description:
      "Recreated the DTR website for interns, improving mobile responsiveness and resolving a critical issue that allowed users to clock out after the day of clocking in. Additionally, I added a feature for interns to input tasks during clock in or out, enhancing overall functionality and user experience.",
    technology: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    id: 4,
    title: "Automated Crowd Monitoring System",
    type: "Mobile App",
    year: "2022",
    image: [acms1, acms2, acms3, acms4],
    solution: "I collaborated with a team as a front-end developer, focusing on designing the application and implementing the QR code functionality. I also integrated the front-end with the backend API, ensuring seamless communication between the two components.",
    description:
      "The Automated Crowd Monitoring System is a project initiated by the SAMAHAN Department of Systems Development headed by Cyril Olanolan. It aims to log the movement of the crowd during events as a precaution for the COVID-19 virus. The software is currently deployed as a mobile application.",
    technology: ["React Native", "Css", "NodeJs"],
  },
  {
    id: 5,
    title: "Gecko Twitter Inappropriate Language Detector Extension",
    type: "Chrome Extension",
    year: "2023",
    image: [gecko2],
    video: [gecko1],
    solution: "I developed the Inappropriate Language Detector Chrome Extension, which integrates seamlessly with the Twitter website to capture user-generated content for analysis. The backend was built using Python and Flask, utilizing the Perspective API by Google and Jigsaw for real-time toxicity scoring. To enhance the accuracy of the analysis, I incorporated various libraries, including NumPy, and implemented fixes to ensure that medical terms were not misclassified as sexually explicit. Additionally, I dockerized the backend to ensure compatibility with the necessary Python libraries, optimizing resource utilization for efficient processing and reliable performance.",
    description: "The Inappropriate Language Detector Chrome Extension is a capstone project designed to enhance online content moderation using the Perspective API by Google and Jigsaw. This extension integrates seamlessly with the Chrome browser to provide real-time analysis and feedback on user-generated content, assigning toxicity scores to detect and flag potentially offensive language. Focused on user experience, it aims to promote responsible communication and foster a safer online environment through accurate and reliable content moderation.",
    technology: ["Python", "ReactJS", "Firebase", "Docker"],
  },
  {
    id: 6,
    title: "Bogsy Video Store",
    type: "Acumatica ERP",
    year: "2024",
    image: [bogsy1, bogsy2, bogsy3],
    solution: "I created the Bogsy Video Store Management System (BVS) for Bogsy's video store in Buhangin, Davao City. This comprehensive video rental management solution streamlines operations by effectively managing customer data, video inventory, and rental transactions. Key features include easy customer record management, efficient video categorization, automated overdue fee calculations, and real-time tracking of rentals.",
    description:
      "The BVS Management System is a video rental management solution developed for Bogsy's video store in Buhangin, Davao City. This system streamlines operations by efficiently managing customer data, video inventory, and rental transactions. It features easy customer record management, video categorization, automated overdue fee calculation, and real-time tracking of video rentals. Built on the Acumatica ERP platform, it provides a user-friendly interface and generates detailed reports on inventory and customer rentals, optimizing the store's overall management.",
    technology: ["C#", "MySQL", "Acumatica"],
  },
];

export default Project;
