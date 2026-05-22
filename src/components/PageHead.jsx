import { Helmet } from 'react-helmet-async';

export function PageHead({ title, description }) {
  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
    </Helmet>
  );
}
