import { Container, ContainerSucces } from "./styles";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";
import validator from "validator";

export function Form() {
  const [validEmail, setValidEmail] = useState(false);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function verifyEmail(email: string) {
    setValidEmail(validator.isEmail(email));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data as any).toString(),
    });

    if (response.ok) {
      setSubmitted(true);
      toast.success("¡Correo enviado con éxito!", {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: "succeeded",
      });
    } else {
      toast.error("Error al enviar el mensaje. Inténtalo de nuevo.", {
        position: toast.POSITION.BOTTOM_LEFT,
        toastId: "error",
      });
    }
    setSubmitting(false);
  }

  if (submitted) {
    return (
      <ContainerSucces>
        <h3>¡Gracias por ponerte en contacto!</h3>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Volver al inicio
        </button>
        <ToastContainer />
      </ContainerSucces>
    );
  }

  return (
    <Container>
      <h2>Enviame un mensaje</h2>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />
        <input
          placeholder="Correo electrónico"
          id="email"
          type="email"
          name="email"
          onChange={(e) => verifyEmail(e.target.value)}
          required
        />
        <textarea
          required
          placeholder="Escribe un mensaje para comenzar."
          id="message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" disabled={submitting || !validEmail || !message}>
          Enviar
        </button>
      </form>
      <ToastContainer />
    </Container>
  );
}
