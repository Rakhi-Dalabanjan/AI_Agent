import { PageHead } from '../components/PageHead';
import { ContactContent } from './content/ContactContent';

export default function ContactPage() {
  return (
    <>
      <PageHead
        title="Contact Us | IAMKRATU.AI"
        description="Get in touch with IAMKRATU.AI for AI automation, setup, and website development solutions."
      />
      <ContactContent />
    </>
  );
}
