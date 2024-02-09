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
          <Footer.Icon href="#" icon={BsGithub} />
          <Footer.Icon href="#" icon={BsLinkedin} />
        </Footer.LinkGroup>
      </div>
    </Footer>
  );
};

export default FooterPage;
