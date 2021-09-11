import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { SiTwitch } from "react-icons/si";

const Contact = () => {
  return (
    <div>
      <p className="h3">Here's the places you'll find me</p>
      <p>
        <AiFillGithub />
        <a href="https://github.com/succip" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </p>
      <p>
        <AiFillLinkedin />
        <a href="https://www.linkedin.com/in/paolosucci/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </p>
      <p>
        <AiFillTwitterCircle />
        <a href="https://twitter.com/internet_paolo" target="_blank" rel="noreferrer">
          Twitter
        </a>
      </p>
      <p>
        <SiTwitch />
        <a href="https://twitch.com/internet_paolo" target="_blank" rel="noreferrer">
          Twitch
        </a>
      </p>
    </div>
  );
};

export default Contact;
