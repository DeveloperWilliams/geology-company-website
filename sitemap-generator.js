import Sitemap from 'react-router-sitemap';
import router from './src/App.js'; 

function generateSitemap() {
  return (
    new Sitemap(router)
      .build('https://www.geotruthconsult.org') // Replace with your website URL
      .save('./public/sitemap.xml') // Save to the public directory
  );
}

generateSitemap();
