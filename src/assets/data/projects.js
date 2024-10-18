import { v4 as uuidv4 } from 'uuid';
import Mas from '../images/mas.png';
import Wm from '../images/wm.png';
import Pb from '../images/pb.png';
import cs from '../images/cs.png';
import ss from '../images/ss.png';
import SG from '../images/SG.png';

const projects = [
  {
    id: uuidv4(),
    name: 'secondGear.com',
    desc: `
      <ul>
        <li>secondGear.com is a Car selling platform created using Spring Boot, Spring MVC, Hibernate, Thymeleaf.</li>
        <li>Our platform offers a seamless experience for both users and administrators.</li>
        <li>Users can browse through a comprehensive list of cars, make purchases, and enjoy a smooth, user-friendly interface.</li>
        <li>Administrators have the ability to manage car listings efficiently, with features to add, edit, or delete car details.</li>
        <li>Additionally, we have implemented secure login systems for both users and admins, ensuring a safe and personalized experience.</li>
        <li>Discover the ease of buying and selling cars with SecondGear.com!</li>
      </ul>
    `,
    img: SG,
    techStack: ['Spring Boot,', 'Spring MVC,', 'Hibernate,', 'Thymeleaf'],
    github: 'https://github.com/Niranjan-bit/carProject'
  },
  {
    id: uuidv4(),
    name: 'Chamber of Secrets',
    desc: `
      <ul>
        <li>ChatRooms is a dynamic and interactive chat application built using Node.js and Socket.io.</li>
        <li>It allows users to create and join chat rooms effortlessly, fostering real-time communication and collaboration.</li>
        <li>Whether you’re looking to connect with friends, family, or colleagues, ChatRooms provides a seamless and engaging platform for all your chatting needs.</li>
        <li>Enjoy features like instant messaging, room-specific chats, and user-friendly interfaces designed to enhance your communication experience.</li>
      </ul>
    `,
    img: cs,
    techStack: ['Node.js,', 'Socket.io,', 'Express'],
    github: 'https://github.com/niranjan-bit/chamber-of-secrets'
  },
  {
    id: uuidv4(),
    name: 'Sunstar - Business Portfolio Website',
    desc: `
      <ul>
        <li>Explore the innovative portfolio of SunStar Solar System, a project meticulously crafted using React.</li>
        <li>This dynamic platform showcases our commitment to sustainable energy solutions through a user-friendly interface and seamless navigation.</li>
        <li>Built with modern web technologies, including React, Node.js, and Express, our portfolio highlights a range of solar products and services designed to meet diverse energy needs.</li>
        <li>Dive into our projects, learn about our advanced solar technologies, and see how SunStar Solar System is leading the way in renewable energy.</li>
      </ul>
    `,
    img: ss,
    techStack: ['React.js,', 'JavaScript,', 'HTML,', 'CSS'],
    github: 'https://github.com/niranjan-bit/sunstar'
  },
  {
    id: uuidv4(),
    name: 'CineScope',
    desc: `
      <ul>
        <li>A website which can give you information about every movie/show you search.</li>
        <li>Dive into the world of movies and web shows with CineScope.</li>
        <li>Discover detailed descriptions, genres, runtimes, directors, writers, and cast information for your favorite films and series.</li>
        <li>Whether you are a casual viewer or a dedicated cinephile, CineScope is your go-to hub for all things cinematic.</li>
      </ul>
    `,
    img: Mas,
    techStack: ['React.js,', 'Node.js,', 'Express,', 'MongoDB'],
    github: 'https://github.com/niranjan-bit/cinescope'
  },
  {
    id: uuidv4(),
    name: 'Profile/Resume Builder',
    desc: `
      <ul>
        <li>An online profile/resume builder where you have to fill your information in input boxes and then it will generate your resume.</li>
      </ul>
    `,
    img: Pb,
    techStack: ['JavaScript,', 'HTML,', 'CSS,', 'Material-UI'],
    github: 'https://github.com/Niranjan-bit/Profile-Builder'
  },
  {
    id: uuidv4(),
    name: 'Walking Man Animation',
    desc: `
      <ul>
        <li>UI animation created for fun purpose, which walks on screen from one side to another.</li>
      </ul>
    `,
    img: Wm,
    techStack: ['HTML,', 'CSS,', 'JavaScript'],
    github: 'https://github.com/Niranjan-bit/Walking-Man-Animation'
  },
];

export default projects;
