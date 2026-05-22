import { PageHead } from '../components/PageHead';
import { ContactContent } from './content/ContactContent';

export default function ContactPage() {
  return (
    <>
      <PageHead
        title="Contact Us | AgenticAI"
        description="Get in touch with AgenticAI for AI automation, setup, and website development solutions."
      />
      <ContactContent />
    </>
  );
}
