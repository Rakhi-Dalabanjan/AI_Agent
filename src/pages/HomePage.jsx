import { PageHead } from '../components/PageHead';
import { HomeContent } from './content/HomeContent';
import { useHomeEffects } from '../hooks/useHomeEffects';
import '../styles/index-page.css';
import '../styles/sticky-scroll.css';

export default function HomePage() {
  useHomeEffects();

  return (
    <>
      <PageHead
        title="AI Automation Platform | Next-Gen AI Agents"
        description="Automate WhatsApp, Telegram, customer support, campaigns, and workflows using one AI-powered platform."
      />
      <HomeContent />
    </>
  );
}
