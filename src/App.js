import DocumentMeta from 'react-document-meta';
import Header from './Header';
import ContactInformation from './ContactInformation';
import Navbar from './Navbar'
import GeneralExperience from './GeneralExperience';
import ContactMeAnimation from './ContactMeAnimation';
import CareerAndEducation from './CareerAndEducation';
import HobbiesAndAchievements from './HobbiesAndAchievements.js';
import { useScrollPercentage } from 'react-scroll-percentage';

import contentMultipleLanguages from './contentMultipleLanguages';
import { useState } from 'react';



function App() {
  
  const meta = {
    title: 'Pedro Chaparro',
    description: 'Pedro Chaparro\'s personal website',
    meta: {
        charset: 'utf-8',
        name: {
            keywords: 'react,meta,document,html,tags',
            viewport: 'width=device-width, initial-scale=1',
            
        }
    }
  }  
  
  const [scrollRef, scrollPercentage] = useScrollPercentage({
    /* Optional options */
    threshold: 0
  });
  
  const [content, setContent] = useState(contentMultipleLanguages.English);
  
  
  return (
    <div ref={scrollRef} className="h-auto bg-black">
      <DocumentMeta {...meta} />
      <Header scrollPercentage={scrollPercentage} content={content} setContent={setContent} />
      <Navbar content={content}/>
      <GeneralExperience scrollPercentage={scrollPercentage} content={content}/>
      <CareerAndEducation scrollPercentage={scrollPercentage} content={content}/>
      <HobbiesAndAchievements scrollPercentage={scrollPercentage} content={content}/>
      <ContactMeAnimation content={content}/>
      <ContactInformation content={content}/>
      {/* <Canvas></Canvas>
      <Canvas></Canvas>
      <Canvas></Canvas>
      <Canvas></Canvas>
      <Footer> -> Versão do website, repo do github / source code, "Made with Love", */}
    </div>
  );
}
export default App;