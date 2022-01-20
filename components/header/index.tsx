import { tw, css } from 'twind/css';
import Button from '@/../components/button';
import { signIn } from 'next-auth/react';

const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(100vh - 6rem);
`;

const Header = () => (
  <header className={tw(headerStyle)}>
    <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
      <h1 className={tw(`font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800`)}>
        WSO2IS-NextJs Sample Application
      </h1>
      <div className={tw(`max-w-xl mx-auto`)}>
        <p className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}>
          WSO2 Identity Server is an API-driven, open-source, cloud-native IAM product.
        </p>
      </div>
      <div className={tw(`mt-10 flex justify-center items-center w-full mx-auto`)}>
        <Button
          onClick={(e) => {
            e.preventDefault()
            signIn("wso2is", { callbackUrl: "/home" })
          }}
          primary>Login with Identity Server</Button>
      </div>
    </div>
  </header>
);

export default Header;
