import { Footer } from "flowbite-react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
const FooterPage = () => {
  return (
    <Footer container>
      <div className="max-w-7xl mx-auto flex justify-between w-full">
        <Footer.Copyright
          href="#"
          by="Task Master"
          year={new Date().getFullYear()}
        />
        <Footer.LinkGroup className="flex gap-4">
          <Footer.Icon
            href="https://github.com/pieash9"
            target="_blank"
            icon={BsGithub}
          />
          <Footer.Icon
            href="https://www.linkedin.com/in/pieash9/"
            target="_blank"
            icon={BsLinkedin}
          />
        </Footer.LinkGroup>
      </div>
    </Footer>
  );
};

export default FooterPage;
