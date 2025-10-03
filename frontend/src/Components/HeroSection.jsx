import React from 'react'
import Section1 from '../Sections/Section1'
import Section2 from '../Sections/Section2'
import Section3 from '../Sections/Section3'
import Section4 from '../Sections/Section4'
import Section5 from '../Sections/Section5'

const HeroSection = () => {
  return (
    <div>
      {/* Section 1.0 Main area*/}
        <Section1/>
        {/* Section 2.0 Featured Destination*/}
        <Section2/>
        {/*Section 3.0 Exclusive offers*/}
        <Section3/>
        {/*Section 4.0 Review Section */}
        <Section4/>
        {/* Section 5.0 Subscription Section*/}
        <Section5/>
    </div>
  )
}

export default HeroSection