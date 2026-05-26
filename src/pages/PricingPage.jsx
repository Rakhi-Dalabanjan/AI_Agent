import { PageHead } from '../components/PageHead';
import { PricingContent } from './content/PricingContent';
import '../styles/pricing-custom.css';

export default function PricingPage() {
  return (
    <>
      <PageHead title="Pricing | IAMKRATU.AI" />
      <PricingContent />
    </>
  );
}
