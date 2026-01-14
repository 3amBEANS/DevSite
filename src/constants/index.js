export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      position: 'Marketing Director at GreenLeaf',
      img: 'assets/review1.png',
      review:
        'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Mark Rogers',
      position: 'Founder of TechGear Shop',
      img: 'assets/review2.png',
      review:
        'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Project Manager at UrbanTech ',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'CEO of BrightStar Enterprises',
      img: 'assets/review4.png',
      review:
        'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'EggsByTheDozen - AI Parasite Detector',
      desc: 'Co-developed a website with a team of 5 fellow undergraduates that utilized a feature extraction algorithm leveraging OpenCV and a novel parameter optimization algorithm to detect parasite eggs in goat fecal matter for goat farmers that greatly reduced the cost and time for the detection of parasites.',
      subdesc:
        'Helped develop an algorithm that would extract elliptical contours that yielded 18.3% average percent error in egg count.',
      href: 'https://github.com/3amBEANS/EggsByTheDozen',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/project-logo1.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/openCV.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
    {
      title: 'Vigilant - Gun Detection App',
      desc: 'Developed a gun-detecting app that employed TensorFlow and a Spring Boot back end along with Google Firebase to detect the presence of firearms on external cameras.',
      subdesc:
        'Employed Flutter and Dart for the front-end, enhancing the user experience with simplified and aesthetically pleasing UI that improved the user experience.',
      href: 'https://github.com/ggordi/congress-app-2021',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'Tensorflow',
          path: '/assets/tensorflow.png',
        },
        {
          id: 2,
          name: 'Spring Boot',
          path: 'assets/springboot.png',
        },
        {
          id: 3,
          name: 'Dart',
          path: '/assets/dartLogo.png',
        },
        {
          id: 4,
          name: 'Flutter',
          path: '/assets/flutter.png',
        },
      ],
    },
    {
      title: 'HandCounter - Personal ML Project',
      desc: 'Co-developed a program that utilized OpenCV and employed Bayesian optimization techniques to detect the number of raised hands in a picture that yielded around an 80% accuracy rate.',
      subdesc:
        'Imported the Hands model from MediaPipe which combines different models to locate sub-features that make up the hand including locating the wrist and each individual finger.',
      href: 'https://www.youtube.com/watch?v=8Xhr4TtbFLM',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/project-logo3.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/openCV.png',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/react.svg',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/googleColab.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/nodeJS.png',
        },
      ],
    },
    {
      title: 'ByteSmith - Bitwise Calculator',
      desc: 'Won Second Best Hack Overall at the Hack the Map hackathon, creating a bitwise calculator utilizing node.js and svelte.',
      subdesc:
        'The user can input any form of valid bitwise operations (i.e. (~3 + 4 << 2) & (1 ^ 5)) and the site will evaluate each expression in the correct order, and show the user each step in binary, hexadecimal, and decimal.',
      href: 'https://byte-smith.vercel.app/',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/project-logo4.png',
      logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/svelte.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/nodeJS.png',
        },
      ],
    },
    
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [7, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 1, 0] : isTablet ? [7, 1, 0] : [9, 1, 0],
      ringPosition: isSmall ? [-5, 0, 0] : isMobile ? [-10, 6, 0] : isTablet ? [-16, 0, 0] : [-22, 0, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Forge',
      pos: 'Part-time SWE',
      duration: '2025 - Present',
      title: "Maintained a multi-service integration connecting React frontend with Firebase Cloud Functions backend, coordinating API calls to SendGrid (transactional emails), Airtable (candidate data), and Slack (team notifications) to automate the intern matching workflow.",
      icon: '/assets/forge.png',
      animation: 'salute',
    },
    {
      id: 2,
      name: 'Lumistry',
      pos: 'SWE Intern',
      duration: '2025 - 2025',
      title: "Deployed 10+ UI bug fixes written in TypeScript across a React Native pharmaceutical platform, addressing usability and layout issues that enabled the team to deliver quality-of-life improvements 15% faster and elevate end-user satisfaction.",
      icon: '/assets/lumistry.png',
      animation: 'victory',
    },
    {
      id: 3,
      name: 'StreamHorseTV',
      pos: 'Digital Media Intern',
      duration: '2024 - 2025',
      title: "Initiated and launched a full-stack web application using Django to aggregate and analyze impression, engagement, and view count data for 300+ creators across Instagram, Facebook, and YouTube APIs.",
      icon: '/assets/streamhorseTransparent.png',
      animation: 'clapping',
    },
    {
      id: 4,
      name: 'Starlight Vintage Studios',
      pos: 'Junior Programmer',
      duration: '2023 - 2023',
      title: "Developed user interfaces in Unity, including a statistics tracker that boosted game replayability by 30%. Collaborated with teams to test the game on Epic Games and Steam, reported performance bugs, and assisted in resolving cross-platform issues for Meta Quest and PC.",
      icon: '/assets/starlightVintage.png',
      animation: 'clapping',
    },
  ];