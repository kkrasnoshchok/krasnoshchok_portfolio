import React, { FC, ReactNode } from "react";
import {
  SContacts,
  SContactsForm,
  SContactsFormButton,
  SContactsFormContainer,
  SContactsInput,
  SContactsItem,
  SContactsSection,
  SContactsTextArea,
  SContactsTitle,
} from "../styles/scomponent/scontacts";
import {
  FaGithub,
  FaLinkedinIn,
  FaTelegram,
} from "react-icons/fa";
import { SiCodewars } from "react-icons/si";
import { Formik } from "formik";
import { object, string } from "yup";

const Contacts: FC = () => {
  // #region contact icons
  interface contactItem {
    element: ReactNode;
    color: string;
    background: string;
    link: string;
  }

  const contacts: contactItem[] = [
    {
      element: <FaLinkedinIn />,
      background: "rgba(0,119,181,1)",
      color: "rgba(255,255,255,1)",
      link: "https://www.linkedin.com/in/vadym-krasnoshchok-248902200/",
    },
    {
      element: <FaTelegram />,
      background: "rgba(0, 136, 204,1)",
      color: "rgba(255,255,255,1)",
      link: "https://t.me/vadymolehovich",
    },
    // {
    //   element: <FaInstagram />,
    //   background:
    //     "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
    //   color: "rgba(255,255,255,1)",
    //   link: "https://www.instagram.com/vaedym/",
    // },
    // {
    //   element: <FaTwitter />,
    //   background: "rgba(29,161,242, 1)",
    //   color: "rgba(255,255,255,1)",
    //   link: "https://twitter.com/vaedym",
    // },
    // {
    //   element: <FaFacebook />,
    //   background: "rgba(66, 103, 178, 1)",
    //   color: "rgba(255,255,255,1)",
    //   link: "https://www.facebook.com/krasnoshchokVadym",
    // },
    {
      element: <FaGithub />,
      background: "rgba(43,49,55, 1)",
      color: "rgba(250,251,252,1)",
      link: "https://github.com/technoloverbaby",
    },
    {
      element: <SiCodewars />,
      background: "rgba(187,67,44, 1)",
      color: "rgba(250,251,252,1)",
      link: "https://www.codewars.com/users/mydav",
    },
  ];
  // #endregion contact icons

  //   #region formik config
  interface FormikInitialValues {
    name: string;
    email?: string;
    text?: string;
  }
  const initialValues: FormikInitialValues = {
    name: "",
    email: "",
    text: "",
  };

  const validationSchema = object({
    name: string().min(2).max(35).required(),
    email: string().email(),
    text: string().max(255),
  });

  //   #endregion formik config

  return (
    <SContacts id="contacts">
      <SContactsFormContainer>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
            values.name = "";
            values.email = "";
            values.text = "";
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            touched,
            errors,
            values,
          }) => (
            <SContactsForm>
              <SContactsTitle>contact me</SContactsTitle>
              <SContactsInput
                type={"text"}
                value={values.name}
                onChange={handleChange("name")}
                onBlur={handleBlur("name")}
                placeholder={"name"}
                style={{
                  borderColor:
                    touched.name && errors.name
                      ? "rgba(192, 57, 43,1.0)"
                      : "rgba(34, 47, 62, 1)",
                  color:
                    touched.name && errors.name
                      ? "rgba(192, 57, 43,1.0)"
                      : "rgba(34, 47, 62, 1)",
                  boxShadow:
                    touched.name && errors.name
                      ? "5px 5px 0px rgba(192, 57, 43,1.0)"
                      : "5px 5px 0px rgba(34, 47, 62, 1)",
                }}
              />
              <SContactsInput
                type={"text"}
                value={values.email}
                onChange={handleChange("email")}
                onBlur={handleBlur("email")}
                placeholder={"email"}
                style={{
                  borderColor:
                    touched.email && errors.email
                      ? "rgba(192, 57, 43,1.0)"
                      : "rgba(34, 47, 62, 1)",
                  color:
                    touched.email && errors.email
                      ? "rgba(192, 57, 43,1.0)"
                      : "rgba(34, 47, 62, 1)",
                  boxShadow:
                    touched.email && errors.email
                      ? "5px 5px 0px rgba(192, 57, 43,1.0)"
                      : "5px 5px 0px rgba(34, 47, 62, 1)",
                }}
              />
              <SContactsTextArea
                value={values.text}
                onChange={handleChange("text")}
                onBlur={handleBlur("text")}
                placeholder={"message"}
              />
              <SContactsFormButton
                type="submit"
                onClick={() => {
                  handleSubmit();
                }}
              >
                send
              </SContactsFormButton>
            </SContactsForm>
          )}
        </Formik>
      </SContactsFormContainer>
      <SContactsSection>
        {contacts.map((c) => (
          <SContactsItem
            style={{
              background: c.background,
              color: c.color,
            }}
            key={c.link}
            href={c.link}
            target={"_blank"}
          >
            {c.element}
          </SContactsItem>
        ))}
      </SContactsSection>
    </SContacts>
  );
};

export default Contacts;
