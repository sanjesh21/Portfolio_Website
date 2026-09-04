import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/Sanjesh_Shakya_Resume.pdf'], // Block crawlers from indexing your resume
    },
  };
}