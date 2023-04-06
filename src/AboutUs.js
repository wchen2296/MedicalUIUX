import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className='container'>
      
      <h2>Dr. Solace Stone, Ph.D.</h2>
      <p>
        Dr. Solace Stone is a licensed therapist with over 15 years of experience in the field. She received her Ph.D. in Clinical Psychology from Hunter College and completed her postdoctoral training at the renowned Center for Mindfulness and Mental Health. Dr. Stone is a board-certified specialist in Cognitive-Behavioral Therapy (CBT) and is also trained in Dialectical Behavior Therapy (DBT) and Mindfulness-Based Stress Reduction (MBSR).
      </p>
      <img src="/SolaceStone.png" alt="Dr. Solace Stone" width="500" height="600" />
      <h2>About Our Practice</h2>
      <p>
        The Inner Garden is a therapy practice dedicated to providing compassionate and effective mental health care to individuals and families. Our mission is to create a safe and nurturing environment where clients can explore their emotions, gain insight, and develop the skills needed to live a fulfilling and meaningful life. Our therapists utilize evidence-based treatments, including CBT, DBT, and MBSR, to address a wide range of mental health issues, such as depression, anxiety, trauma, and relationship difficulties.
      </p>
      <img src="/InnerGarden.png" alt="The Inner Garden Office" width="500" height="600" />
    </div>
  );
};

export default AboutUs;
