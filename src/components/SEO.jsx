import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, keywords }) => {
  const location = useLocation();
  const baseUrl = 'https://tavoskriptas.lt';
  const canonicalUrl = `${baseUrl}${location.pathname}`;

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {title && <meta name="title" content={title} />}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={canonicalUrl} />
      
      {/* Twitter */}
      {title && <meta property="twitter:title" content={title} />}
      {description && <meta property="twitter:description" content={description} />}
      <meta property="twitter:url" content={canonicalUrl} />
    </Helmet>
  );
};

export default SEO;

