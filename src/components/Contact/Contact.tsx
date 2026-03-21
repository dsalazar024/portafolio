import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contacto</h2>
        <p>¿Listo para comenzar tu proyecto? </p>
      </header>
      <div className="contacts">
        <div>
          <a href="mailto:dylan.salazar029@gmail.com">
            <img src={emailIcon} alt="Email" />
          </a>
          <a href="mailto:dylan.salazar029@gmail.com">
            dylan.salazar029@gmail.com
          </a>
        </div>
        <div>
          <a href="tel:+50241846367">
            <img src={phoneIcon} alt="Phone No" />
          </a>
          <a href="tel:+50241846367">(+502) 4184-6367</a>
        </div>
      </div>
      <Form></Form>
    </Container>
  );
}
