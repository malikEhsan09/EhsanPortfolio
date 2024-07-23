import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Snackbar } from "@mui/material";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer; /* Set cursor to pointer on hover */
`;

const SuccessMessage = styled.div`
  background-color: #8cc76e; /* Light green color */
  color: white;
  padding: 12px;
  border-radius: 8px;
  margin-top: 20px;
  text-align: center;
`;

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSdBeY7ocVGKrVze9QBiUuHWfrJjNWrCNM1Ruq7kK9vEbCZ6JQ/formResponse";

    try {
      const response = await fetch(formUrl, {
        method: "POST",
        body: formData,
      });

      setSuccess(true);
      setOpen(true);
      form.current.reset();

      // Hide success message after 2 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 2000);

      if (!response.ok) {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error(error);
      setSuccess(true);
      setOpen(true);

      // Hide success message after 2 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput
            placeholder="Your Email"
            name="entry.1024095751" // Email entry ID
          />
          <ContactInput
            placeholder="Your Name"
            name="entry.100071687" // Name entry ID
          />
          <ContactInput
            placeholder="Subject"
            name="entry.1914147076" // Subject entry ID
          />
          <ContactInputMessage
            placeholder="Message"
            rows="4"
            name="entry.1928827885" // Message entry ID
          />
          <ContactButton type="submit" value="Send" />
        </ContactForm>
        {success && <SuccessMessage>Email sent successfully!</SuccessMessage>}
        <Snackbar
          open={open && !success}
          autoHideDuration={2000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </Wrapper>
    </Container>
  );
};

export default Contact;
