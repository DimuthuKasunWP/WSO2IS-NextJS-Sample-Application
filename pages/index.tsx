import { NextSeo } from 'next-seo';
import Page from '@/../components/page';
import Header from '@/../components/header';
import FeatureSection from '@/../components/feature-section';

export default function Home() {
  return (
    <Page>
      <NextSeo
        title="WSO2IS-NextJS Sample Application"
        description="A TypeScript/Next.js theme that includes everything you need to build amazing landing page!"
      />
      <Header />
      <main>
        <FeatureSection />
      </main>
    </Page>
  );
}
