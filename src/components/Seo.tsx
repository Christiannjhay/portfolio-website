import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title: string;
  url: string;
  imageUrl: string;
}

const Seo = ({ title, url, imageUrl }: SeoProps) => {

  const fullTitle = `${title} | Christian Sugarol`; 
  const description = "Hi I'm Christian, Full-Spectrum Development for Modern Digital Solutions";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Christian Sugarol" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
};

Seo.defaultProps = {
  imageUrl: 'https://www.christiansugarol.site/images/SocialMediaSharer.png', 
};

export default Seo;