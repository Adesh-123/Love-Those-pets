import Container from "../../components/shared/Container/Container";
import "./About.css";

function About(props) {
  return (
    <div className="about">
      <div className="about-banner">
        <h1 className="who-we-are">Who We Are.</h1>
      </div>

      <div className="about-us">
        <p>
        The Dog Spot is a complete CRUD application utilizing the MERN stack focused on pet adoption centers nationwide to use as a forward-facing inventory application. The project is a contribution by four of us, Aayush Patel, Aaryan, Adesh, and Shivank. This application has user authorization and authentication implemented to store the adoption status of listed animals across users. We team up with local shelter organizations promoting their adoptable dogs and through programs with animal placement organizations. We are currently trying to reach out to more shelters throughout India. Our facility responds to calls from the public to help keep animals in need of rescue safe. We have successfully maintained a strong presence in the animal World while proudly gaining over one million supporters. 
        </p>
      </div>

      <Container />
    </div>
  );
}

export default About;
