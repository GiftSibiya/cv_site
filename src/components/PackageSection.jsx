/// DEPENDENCY IMPORT ///

import React from "react";
import PackageSquare from "./smallComponents/PackageSquare";

///--///

function PackageSection() {
  return (
    <section className="Package-Container">
      <h3 className="Package-Tagline">
        Take the next step in your career with one of our packages below
      </h3>
      <p className="Package-Paragraph">
        A strong CV is a must-have for any job application process. It’s your
        opportunity to show future employers that you’re the best candidate for
        the job. Standing out from the rest of the crowd is vital – and our CV
        writing service will help you do just that.
      </p>
      <div className="Package-Options">
        <PackageSquare />
        <PackageSquare />
        <PackageSquare />
        <PackageSquare />
        <PackageSquare />
        <PackageSquare />
        <PackageSquare />
        <PackageSquare />
      </div>
      <p className="Package-Paragraph">
        A strong CV is a must-have for any job application process. It’s your
        opportunity to show future employers that you’re the best candidate for
        the job. Standing out from the rest of the crowd is vital – and our CV
        writing service will help you do just that.
      </p>
      <p className="Package-Paragraph">
        <p className="Package-Paragraph">
          Call us on 0800 228 9003 or 0203 504 3111 or chat now with one of our
          friendly CV Consultants, who'll work with you to find the CV that
          could land your perfect job.
        </p>
        <p className="Package-Paragraph">
          * Conditions apply, see Terms & Conditions
        </p>
        <p className="Package-Paragraph2">
          A tailor-made PurpleCV will set you head and shoulders above the
          competition. Our professional writers will craft your CV to showcase
          your skills, qualities, knowledge and abilities in the most relevant
          and impactful way possible.
        </p>
        <p className="Package-Paragraph">
          Whether you’re just taking the first step onto the career ladder,
          embarking on a new phase or changing career completely, our writers
          know how to craft you a CV that packs a real punch.
        </p>
      </p>
    </section>
  );
}

export default PackageSection;
