import { PageHead } from '../components/PageHead';
import { ResourcesContent } from './content/ResourcesContent';
import '../styles/resources-page.css';
export default function ResourcesPage() {
  return (
    <>
      <PageHead title="Resources | IAMKRATU.AI" />
      <ResourcesContent />
    </>
  );
}
