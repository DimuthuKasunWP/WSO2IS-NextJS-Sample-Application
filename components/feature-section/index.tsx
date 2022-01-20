import { tw } from 'twind';
import Check from '@/../constants/svg/check.svg';

const FeatureSection = () => (
  <section className={tw(`bg-white pb-6`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
      <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
        <div className={tw(`mb-16 text-center`)}>
          <p className={tw(`mt-2 text-3xl lg:text-3xl font-bold tracking-tight text-gray-900`)}>
          Powerful capabilities of WSO2 Identity Server
          </p>
        </div>
        <div className={tw(`flex flex-wrap my-12`)}>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Single Sign-On</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Security Assertion Markup Language 2 (SAML2) and OpenID connect support<br/>
              Single logout<br/>
              SSO between on-premise applications and cloud applications<br/>
              Simple service provider and identity provider ecosystem management
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Identity Federation</div>
            </div>
            <p className={tw(`leading-loose text-gray-500 `)}>
              Federated SSO with external identity providers<br/>
              Support for Facebook, Google, Microsoft Windows Live and more<br/>
              User claims and roles transformation
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8`)}>
            <div className="flex items-center mb-6">
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Strong Authentication</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Multi-option and multi-factor authentication support<br/>
              Kerberos and X.509 support<br/>
              2-factor authentication including FIDO, SMS/Email OTP, MePin and more
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Identity Governance and Administration</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              User and group management<br/>
              User self service features (account recovery, self registration, account locking, etc.)<br/>
              Provisioning based on standards such as SCIM and SPML<br/>
              On the fly and rule-based provisioning<br/>
              Workflows to user and role management and approval driven by templates<br/>
              HTML and multi-language email template support
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Entitlement and Access Control</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Fine-grained authorization with eXtensible Access Control Markup Language (XACML) policies<br/>
              API security with delegated access control using OAuth2 and support for SAML2 bearer, JSON Web Token (JWT) assertion and Integrated Windows Authentication with NT LAN Manager (NTLM-IWA) grant types
            </p>
          </div>
          <div className={tw(`w-full md:w-1/2 lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Strategic consulting & Platform Advantage</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Seamlessly integrate with WSO2 API Manager, the #1 open-source APIM solution.<br/>
              Streamline your business objectives and rapidly achieve key results.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection;
