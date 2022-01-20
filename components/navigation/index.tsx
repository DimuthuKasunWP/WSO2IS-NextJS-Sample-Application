import { tw } from 'twind';
import Button from '@/../components/button';


const Navigation = () => {
 
  return (
    <nav className={tw(`bg-white`)}>
      <div className={tw(`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)}>
        <div className={tw(`flex items-center justify-between h-24`)}>
          <div>
            <div>
              <img src="/identity-server.png" alt="logo" width={200} height={100} />
            </div>
          </div>
          <div className={tw(` md:block`)}>
            <div className={tw(`ml-4 flex items-center md:ml-6`)}>
              <a href="https://wso2.com/identity-server/" target="_blank">
                <Button primary>WSO2 Identity Server</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
