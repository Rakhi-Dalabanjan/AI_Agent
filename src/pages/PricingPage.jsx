import { PageHead } from '../components/PageHead';
import { PricingContent } from './content/PricingContent';
import '../styles/pricing-custom.css';
import '../styles/preview-modal.css';

export default function PricingPage() {
  return (
    <>
      <PageHead title="Pricing | AgenticAI" />
      <PricingContent />
    </>
  );
}
