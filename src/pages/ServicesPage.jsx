import { PageHead } from '../components/PageHead';
import { ServicesContent } from './content/ServicesContent';
import { useServicesEffects } from '../hooks/useServicesEffects';
export default function ServicesPage() {
  useServicesEffects();

  return (
    <>
      <PageHead title="AI Agent Services | Intelligent Enterprise Automation" />
      <ServicesContent />
    </>
  );
}
