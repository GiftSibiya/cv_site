import React from "react";
import WritingSquare from "./smallComponents/WritingSquare";

function WrittingService() {
  return (
    <section className="Services-Container">
      <h3 className="Services-Tagline">
        {" "}
        How does our professional CV writing service work?{" "}
      </h3>
      <p className="Services-Paragaph">
        Your brand new, professionally-written PurpleCV is only a few short
        steps away. Here’s what to do:
      </p>
      <div className="Writing-steps">
        <WritingSquare />
        <WritingSquare />
        <WritingSquare />
        <WritingSquare />
      </div>
      <p className="Services-Paragaph">
        Your brand new, professionally-written PurpleCV is only a few short
        steps away. Here’s what to do:
      </p>
      <div className="Services-Footer">
        <h4 className="Services-Footer__paragraph">
          {" "}
          Is my information safe?{" "}
        </h4>
      </div>
      <p className="Services-Paragaph2">
        At PurpleCV we take data protection very seriously. We are fully
        GDPR-compliant and you can rest assured that any information you give us
        is completely secure. Check out our privacy policy for more information.
      </p>
    </section>
  );
}

export default WrittingService;
