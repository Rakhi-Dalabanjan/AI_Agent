import { PageHead } from '../components/PageHead';
import { SolutionsContent } from './content/SolutionsContent';
import { useSolutionsEffects } from '../hooks/useSolutionsEffects';
import '../styles/solutions-page.css';

export default function SolutionsPage() {
  useSolutionsEffects();

  return (
    <>
      <PageHead title="AI Solutions | Enterprise AI Strategy & Automation" />
      <SolutionsContent />
    </>
  );
}
