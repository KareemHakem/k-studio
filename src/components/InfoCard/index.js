import React, { useEffect } from 'react';

import './style.css';

export default function InfoCard({ handleNavigationToPhotos }) {
  useEffect(() => {
    const leftInfo = document.querySelectorAll('.info-left-side-container');
    const rightInfo = document.querySelectorAll('.info-right-side-container');

    const CheckBoxes = () => {
      const triggerBottom = (window.innerHeight / 30) * 24;
      leftInfo.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
          box.classList.add('show-info');
        } else {
          box.classList.remove('show-info');
        }
      });

      rightInfo.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
          box.classList.add('show-info');
        } else {
          box.classList.remove('show-info');
        }
      });
    };
    window.addEventListener('scroll', CheckBoxes);
  }, []);

  return (
    <div className="ifo-part">
      <h1 className="info-head-text">
        Developer is an organism that turns coffee into code 😁
      </h1>
      <div className="ifo-part-container-sides">
        <div className="info-left-side-container">
          <h1>ABOUT ME</h1>
          <p>- I have 4 months of Experience</p>
          <p>- I have Good Knowledge in JavaScript</p>
          <p>- I have Experience in Next.js</p>
          <p>- I Experience With CSS Frameworks (Material UI & Semantic UI)</p>
          <p>- I Experience With animation library (lottieFiles)</p>
          <p>- I have Basic Knowledge in Vue.js, But I can Learn it ;)</p>
          <p>- I have base Knowledge in TypeScript </p>
        </div>
        <div className="line-break"></div>
        <div className="info-right-side-container">
          <h1>ALSO ABOUT ME</h1>
          <p>
            I am Kareem Mohamed, a self-taught developer, I love coding because
            I think programming is fun :)
          </p>
          <p>I'm 24 years old My English level is average or below average</p>
          <p>
            I'm self-learning and I get a sum certificate from( udemy,
            Coursera,solo learn) and use youtube tutorials :)
          </p>
          <p>
            I Have a serious passion for UI effects, animations, and creating
            intuitive, dynamic user experiences.
          </p>
          <p>
            I Love To Be a Front-End Developer And I Want To Learning Mobile App
            Development
          </p>
        </div>
      </div>
    </div>
  );
}
