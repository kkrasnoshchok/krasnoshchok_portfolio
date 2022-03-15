import React, { FC } from "react";
import { SWelcome, SWelcomeItem } from "../styles/scomponent/swelcome";

const Welcome: FC = () => {
  interface welcomeWord {
    flag: string;
    hello: string;
  }
  const welcomeWords: welcomeWord[] = [
    {
      hello: "Ласкаво просимо",
      flag: "🇺🇦",
    },
    {
      hello: "Welcome",
      flag: "🇺🇸",
    },
    {
      hello: "Herzlichen Willkommen",
      flag: "🇩🇪",
    },
    {
      hello: "ברוך הבא",
      flag: "🇮🇱",
    },
    {
      hello: "Bienvenidos/as",
      flag: "🇪🇸",
    },
    {
      hello: "Benvenuto/a",
      flag: "🇮🇹",
    },
  ];

  return (
    <SWelcome>
      {welcomeWords.map((country, index) => (
        <SWelcomeItem
          key={country.hello}
          animate={{ translateX: [-1000, 0, 0, 1000] }}
          transition={{
            duration: 4,
            delay: 2.5 * index,
            repeat: Infinity,
            repeatDelay: welcomeWords.length + 5,
          }}
          style={{ position: "absolute" }}
        >
          {country.hello}
          <div>{country.flag}</div>
        </SWelcomeItem>
      ))}
    </SWelcome>
  );
};

export default Welcome;
