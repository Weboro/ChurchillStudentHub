import { PiCourtBasketballBold, PiGenderIntersexBold } from "react-icons/pi";
import { RiExchangeDollarFill, RiRefund2Fill } from "react-icons/ri";
import { TbCreditCardRefund } from "react-icons/tb";

export const navItems = [
  {
    // title: "Home",
    // slug: "/",
    // link: "/",
    // Catagories: [],
  },
  {
    title: "How to guide",
    slug: "how-to-guide",
    link: "/how-to-guide",
    Catagories: [
      {
        menuTitle:
          "How to install Office 365 Apps in Personal laptop using student Account?",
        slug: "how-to-install-Office-365-apps-in-personal-laptop-using-student-account",
        link: "",
        CatagoriesItem: {
          title:
            "How to install Office 365 Apps in Personal laptop using student Account?",
          image: "/assets/office-365-apps.jpg",
          description: `<ol>        <li><strong>Access Office 365:</strong>            <ul>                <li>Open your web browser and go to <a href="https://www.office.com" target="_blank">office.com</a>.</li>                <li>Click on "Sign In" and enter your student email address and password.</li>            </ul>        </li>        <li><strong>Navigate to Install:</strong>            <ul>                <li>Once logged in, click on the "Install Office" button on the top right corner of the page.</li>                <li>Select "Office 365 apps" from the dropdown menu.</li>            </ul>        </li>        <li><strong>Download the Installer:</strong>            <ul>                <li>The download will begin automatically. Once it's finished, open the installer file.</li>            </ul>        </li>        <li><strong>Run the Installer:</strong>            <ul>                <li>Follow the on-screen instructions to complete the installation process.</li>                <li>This process includes accepting the license agreement and selecting the install location.</li>            </ul>        </li>        <li><strong>Activate Office:</strong>            <ul>                <li>After the installation is complete, open any Office app (e.g., Word or Excel).</li>                <li>Sign in with your student email address and password to activate your Office 365 subscription.</li>            </ul>        </li>    </ol>`,
        },
      },
      {
        menuTitle:
          "How to install Office 365 Apps in macbook using student Account?",
        slug: "how-to-install-Office-365-apps-in-macbook-using-student-account",
        link: "",
        CatagoriesItem: {
          title:
            "How to install Office 365 Apps in macbook using student Account?",
          image: "/assets/office-365-apps.jpg",
          description: `<ol><li><strong>Access Office 365:</strong><ul><li>Open your web browser and go to <a href="https://www.office.com" target="_blank">office.com</a>.</li><li>Click on "Sign In" and enter your student email address and password.</li></ul></li><li><strong>Navigate to Install:</strong><ul><li>Once logged in, click on the "Install Office" button on the top right corner of the page.</li><li>Select "Office 365 apps" from the dropdown menu.</li></ul></li><li><strong>Download the Installer:</strong><ul><li>The download will begin automatically. Once it's finished, open the installer package file (usually found in the Downloads folder).</li></ul></li><li><strong>Run the Installer:</strong><ul><li>Follow the on-screen instructions to complete the installation process.</li><li>You may need to enter your Mac's administrator password to allow the installation.</li></ul></li><li><strong>Activate Office:</strong><ul><li>After the installation is complete, open any Office app (e.g., Word or Excel).</li><li>Sign in with your student email address and password to activate your Office 365 subscription.</li></ul></li></ol>`,
        },
      },
      {
        menuTitle: "How to Create USI (Unique Student Identifier) ID ?",
        slug: "how-to-create-USI-ID",
        link: "",
        CatagoriesItem: {
          title: "How to Create USI (Unique Student Identifier) ID ?",
          image: "/assets/usi.png",
          description: `<ol><li><strong>Access the USI Website:</strong><ul><li>Open your web browser and go to<a href="https://www.usi.gov.au" target="_blank">usi.gov.au</a>.</li></ul></li><li><strong>Start the USI Creation Process:</strong><ul><li>Click on "Create a USI" at the top of the page.</li><li>Read and agree to the terms and conditions, then click on "Next".</li></ul></li><li><strong>Verify Your Identity:</strong><ul><li>Select the type of identification you will use (e.g., driver's license, passport, etc.).</li><li>Enter your personal details exactly as they appear on your chosen identification document.</li></ul></li><li><strong>Provide Contact Details:</strong><ul><li>Enter your contact information, including your email address and phone number.</li><li>You will need to verify your email address through a verification code sent to your email.</li></ul></li><li><strong>Complete the Application:</strong><ul><li>Review all the information you have entered to ensure it is correct.</li><li>Submit your application. You will receive your USI instantly upon successful completion.</li></ul></li><li><strong>Record Your USI:</strong><ul><li>Make sure to write down or save your USI for future use. You will need it for your studies and training.</li></ul></li></ol>`,
        },
      },
      {
        menuTitle: "How to Login to Canvas and Basic functions?",
        slug: "how-to-login-to-canvas-and-basic-functions",
        link: "",
        CatagoriesItem: {
          title: "How to Login to Canvas and Basic functions?",
          image: "/assets/canvas.png",
          description: `<ol><li><strong>Access Canvas:</strong><ul><li>Open your web browser and go to your institution's Canvas login page (e.g., <a href=https://canvas.yourinstitution.edu target=_blank>canvas.yourinstitution.edu</a>).<li>Alternatively, go to <a href=https://canvas.instructure.com target=_blank>canvas.instructure.com</a> and log in with your credentials.</ul><li><strong>Login to Canvas:</strong><ul><li>Enter your student email address and password.<li>Click on "Log In"</ul><li><strong>Navigate the Dashboard:</strong><ul><li>After logging in, you will see the Dashboard, which shows an overview of your courses.<li>Click on a course to enter its home page.</ul><li><strong>Basic Functions:</strong><ul><li><strong>View Course Content:</strong><ul><li>Use the left-hand sidebar to navigate to different sections such as "Modules," "Assignments," "Grades," and "Discussions."</ul><li><strong>Submit Assignments:</strong><ul><li>Go to the "Assignments" section, click on the assignment you want to submit, and follow the instructions for submission.</ul><li><strong>Participate in Discussions:</strong><ul><li>Click on "Discussions" to view and participate in course discussions.</ul><li><strong>Check Grades:</strong><ul><li>Click on "Grades" to view your grades for assignments and quizzes.</ul><li><strong>Access Announcements:</strong><ul><li>Click on "Announcements" to read important messages from your instructor.</ul></ul></ol>`,
        },
      },
    ],
  },
  {
    title: "Policies",
    link: "",
    slug: "policies",
    Catagories: [
      {
        icon: <RiExchangeDollarFill />,
        menuTitle: "Academic Integrity Policy and Procedure",
        subTitle: "Access your timetable, results, trimester invoices.",
        slug: "academic-integrity-policy-and-procedure",
        link: "",
        CatagoriesItem: {
          title: "Academic Integrity Policy and Procedure",
          image: "/assets/HeroImage-2.webp",
          description:
            "Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct ",
        },
      },
      {
        icon: <RiExchangeDollarFill />,
        menuTitle: "Course Progression and Graduation Policy",
        subTitle: "Access your timetable, results, trimester invoices.",
        slug: "course-progression-and-graduation-policy",
        link: "",
        CatagoriesItem: {
          title: "Course Progression and Graduation Policy",
          image: "/assets/HeroImage-2.webp",
          description:
            "Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct ",
        },
      },
      {
        icon: <RiExchangeDollarFill />,
        menuTitle: "Advanced Standing Policy and Procedure",
        subTitle: "Access your timetable, results, trimester invoices.",
        slug: "advanced-standing-policy-and-procedure",
        link: "",
        CatagoriesItem: {
          title: "Advanced Standing Policy and Procedure",
          image: "/assets/HeroImage-2.webp",
          description:
            "Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct ",
        },
      },
      {
        icon: <RiExchangeDollarFill />,
        menuTitle: "Assessment Moderation Policy",
        subTitle: "Access your timetable, results, trimester invoices.",
        slug: "assessment-moderation-policy",
        link: "",
        CatagoriesItem: {
          title: "Assessment Moderation Policy",
          image: "/assets/HeroImage-2.webp",
          description:
            "Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct ",
        },
      },
      {
        icon: <RiExchangeDollarFill />,
        menuTitle: "Refund Policy",
        subTitle: "Access your timetable, results, trimester invoices.",
        slug: "refund-policy",
        link: "",
        CatagoriesItem: {
          title: "Refund Policy",
          image: "/assets/HeroImage-2.webp",
          description: `<div class="policy-page"> <h1>Academic Integrity Policy and Procedure</h1> <h2>Churchill Institute of Higher Education</h2> <p><strong>Academic Board Approved Document</strong></p> <div class="table-of-contents"> <h3>Table of Contents</h3> <ul> <li>Version Control</li> <li>Preamble</li> <li>Scope</li> <li>Policy Statement</li> <li>Preventative Measure</li> <li>Elements of Academic Integrity</li> <li>Identifying and Detecting Academic Misconduct</li> <li>Whistleblowers - Breach and Protection</li> <li>Level of Academic Misconduct</li> <li>Penalties</li> <li>Misconduct in Examinations</li> <li>Appeals</li> </ul> </div> <h2>Version Control</h2> <table> <tr> <td><strong>Version</strong></td> <td>v2.3</td> </tr> <tr> <td><strong>Date effective</strong></td> <td>30 September 2020</td> </tr> <tr> <td><strong>Review</strong></td> <td> The Academic Board will review this Policy every three years in accordance with the Institute's Policy Approval Schedule. </td> </tr> <tr> <td><strong>Approving body</strong></td> <td>Academic Board</td> </tr> <tr> <td><strong>Approval date</strong></td> <td>30 September 2020</td> </tr> <tr> <td><strong>Approval meeting</strong></td> <td>30 September 2020</td> </tr> <tr> <td><strong>Policy Owner</strong></td> <td>Dean</td> </tr> <tr> <td><strong>Policy Contact</strong></td> <td>Dean</td> </tr> <tr> <td><strong>Related Documents</strong></td> <td> Academic Freedom and Scholarly Activity Policy, Dictionary of Terms, Ethics Clearance Policy, Intellectual Property Policy, Records Management Policy, Student Code of Conduct, Student Grievance Management Policy </td> </tr> <tr> <td><strong>Related Register</strong></td> <td>Academic Misconduct Register</td> </tr> <tr> <td><strong>Related Legislation</strong></td> <td> Education Services for Overseas Students Act (ESOS Act), Higher Education Standards Framework (HES Framework), National Code of Practice for Providers of Education and Training to Overseas Students (National Code), Ombudsman Act 1973, Public Interest Disclosures Act 1994, Privacy Act 1988, Higher Education Standards Framework (Threshold Standards) 2015 (Cth) </td> </tr> <tr> <td><strong>Benchmarking Institutes</strong></td> <td> Australian Institute of Higher Education, King's Own Institute, Macquarie University, Southern Cross University, University of Newcastle, Western Sydney University </td> </tr> </table> <h2>Preamble</h2> <h3>1. Purpose</h3> <p> The purpose of this Policy is to clearly state the Churchill Institute of Higher Education's (‘the Institute') Policy on academic integrity which applies to its students. This Policy document must be read in conjunction with the Student Code of Conduct. </p> <h3>2. Background</h3> <p> Academic integrity and honesty are fundamental principles of any educational institute devoted to the pursuit of excellence in teaching and learning. The Institute is committed to maintaining the highest academic standards and will: </p> <ul> <li> Instill in students the importance of independent thought, carrying out their own research and knowing how to acknowledge the work of others; </li> <li> Require and expect students to undertake their academic work honestly and to conduct themselves in a manner which is and consistent with the principles of academic integrity; </li> <li> Use a range of approaches to raise awareness by students about the critical importance of academic integrity and to educate students to practice academic honesty in the creation, development, and application of their work; </li> <li> Act in a consistent and equitable manner to access and manage any academic misconduct by students. </li> </ul> <h3>3. Definitions</h3> <p>For definitions, refer to the Dictionary of Terms.</p> <h2>Scope</h2> <p> This Policy applies to all students enrolled in the Institute in relation to the creation, development, and application of all academic assessments. </p> <h2>Policy Statement</h2> <p> The Institute will ensure that academic integrity is managed by fair, timely and transparent procedures, based on clearly defined, consistent and equitable criteria. Failure to maintain academic integrity will be dealt with seriously and appropriate action taken. </p> <h2>Preventative Measure</h2> <p> The Institute adopts preventative strategies that mitigate the risk of academic misconduct which applies equally to all students and staff of the Institute. Academic Integrity is promoted at orientation and within the classroom by: </p> <ul> <li> Conducting 'Academic Integrity Workshops' - the Librarian and Learning Support Manager will conduct such workshops at least 6 times during each teaching term; </li> <li>Role modelling academic integrity to students;</li> <li> Clearly communicating assessment/examination requirements to students; </li> <li> Encouraging students to make every effort to avoid academic misconduct by taking responsibility for understanding what constitutes academic misconduct and assessment/examination requirements through attendance of the workshop involved. </li> </ul> <h2>Elements of Academic Integrity</h2> <p> Academic misconduct/misdemeanour at the Institute is inclusive but not limited to the following, students must not intend to deceive under any assessment tasks. </p> <h3>5.1 Cheating in Examination</h3> <p>In attempting any examination, the student(s) must not:</p> <ul> <li> Read, copy from, or otherwise using another student's work during an exam or knowingly allow another student to do so; </li> <li> Acquire, attempt, possess, or distribute examination materials or information without any pre-approval; </li> <li> Accept assistance from any person/source who is not an examination supervisor whilst in the examination room; </li> <li> Consult with another source outside the examination room during the examination process; </li> <li> Impersonate another source or procure impersonation in attempting the examination. </li> </ul> <h3>5.2 Plagiarism</h3> <p> Plagiarism occurs when the student(s) present their thoughts, ideas, or work of another source without proper acknowledgement of the author or the source. Students must not: </p> <ul> <li> Partly or significantly copy ideas, concepts, text, data, and information from another source and present it as his or her own work; </li> <li> Construct content which is drawn from any source without attribution of the source; </li> <li> Summarise another person's work without acknowledgement of the source; </li> <li> Submit substantially the same final version of any material as another student. </li> </ul> <p> Therefore, in presenting a written assignment, the students should make it clear when a direct quotation is used, and in the case of using resources to build an argument, an acknowledgement of the resources should be made by using the appropriate method of referencing. </p> <h3>5.3 Collusion</h3> <p> In the event of assessment, in which individually assessable work is required to be submitted, the formulation of ideas must be the independent work of each student. Therefore, the student must not: </p> <ul> <li> Undertake unauthorised collaboration in which students work together to produce an identical assessment, either in part or in whole; </li> <li> Encourage or assist another person to commit collusion by allowing the person to copy their work for completing an assessment. </li> </ul> <h3>5.4 Recycling assignment</h3> <p> The Institute expects students not to submit an assessment that is an identical or a substantially similar assessment for another or previously submitted unit. The Institute understands that academic work within a discipline could be interrelated and expects students, when transcribing content for use in similar topics, to enhance and refine the content of an assignment as they progress through their degree. It is not acceptable to resubmit the exact copy of work previously submitted without enhancing or refining the concepts contained in the assignment. </p> <h3>5.5 Contract Cheating</h3> <p>Students must not:</p> <ul> <li> Contract a third party for a fee or another benefit (e.g., free of cost) to complete part or all the assessment on behalf of the student; </li> <li> Submit part or all the assessment as his or her own when it was completed by a third party. </li> </ul> <h3>5.6 Misrepresentation or Fabrication of Data</h3> <p>Students must not:</p> <ul> <li> Fabricate or falsify data and then present it as legitimate data in an assessment. </li> </ul> <h2>Identifying and Detecting Academic Misconduct</h2> <p>Academic misconduct may be identified by:</p> <ul> <li>Plagiarism detection software;</li> <li> Unit Coordinator/Marker/Tutor or Examination invigilator/Marker; </li> <li>Report from another student.</li> </ul> <h2>Whistleblowers - Breach and Protection</h2> <p> Where a breach of academic integrity is reported, the person reporting the breach (whistleblower) will be protected from any backlash and treated with sensitivity and respect. The whistleblower will be expected to act honestly and make the report in good faith. If the report is found to be made with malicious intent, appropriate action may be taken against the whistleblower. The Institute will ensure that the whistleblower's identity is kept confidential unless disclosure is required by law or necessary to ensure a fair process. Whistleblowers can report breaches through the designated channels provided by the Institute. </p> <h2>Level of Academic Misconduct</h2> <p> The level of academic misconduct will be classified as either minor or major depending on the severity and frequency of the misconduct. </p> <h3>8.1 Minor Misconduct</h3> <p>Minor misconduct includes, but is not limited to:</p> <ul> <li>Unintentional failure to acknowledge sources;</li> <li>First-time offense;</li> <li>Small portion of work affected.</li> </ul> <p> Minor misconduct may result in penalties such as a warning, reduced marks, or requirement to resubmit the work with proper acknowledgment. </p> <h3>8.2 Major Misconduct</h3> <p>Major misconduct includes, but is not limited to:</p> <ul> <li>Intentional plagiarism;</li> <li>Repeated offenses;</li> <li>Large portion of work affected;</li> <li>Cheating in examinations;</li> <li>Contract cheating;</li> <li>Fabrication or falsification of data.</li> </ul> <p> Major misconduct may result in more severe penalties such as failing the unit, suspension, or expulsion from the Institute. </p> <h2>Penalties</h2> <p> The penalties for academic misconduct will be applied based on the level of misconduct and may include: </p> <ul> <li>Warning;</li> <li>Reduced marks;</li> <li>Requirement to resubmit work;</li> <li>Failing the unit;</li> <li>Suspension from the Institute;</li> <li>Expulsion from the Institute.</li> </ul> <p> Penalties will be determined by the Academic Integrity Committee in consultation with the relevant academic staff. </p> <h2>Misconduct in Examinations</h2> <p> Specific procedures are in place to address misconduct in examinations, including the confiscation of unauthorized materials, removal from the examination room, and further investigation by the Academic Integrity Committee. </p> <h2>Appeals</h2> <p> Students have the right to appeal decisions related to academic misconduct. Appeals must be submitted in writing to the Academic Integrity Committee within a specified time frame, typically within 10 working days of the decision. The appeal process will be fair and transparent, providing the student with an opportunity to present their case. </p> </div>`,
        },
      },
      {
        icon: <RiExchangeDollarFill />,
        menuTitle: "Conduct of CodeStudent",
        subTitle: "Access your timetable, results, trimester invoices.",
        slug: "conduct-of-codeStudent",
        link: "",
        CatagoriesItem: {
          title: "Conduct of CodeStudent",
          image: "/assets/HeroImage-2.webp",
          description:
            "Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct ",
        },
      },
      {
        icon: <RiExchangeDollarFill />,
        menuTitle: "Student Grievance Management Policy",
        subTitle: "Access your timetable, results, trimester invoices.",
        slug: "student-grievance-management-policy",
        link: "",
        CatagoriesItem: {
          title: "Student Grievance Management Policy",
          image: "/assets/HeroImage-2.webp",
          description:
            "Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct ",
        },
      },
      {
        icon: <RiExchangeDollarFill />,
        menuTitle: "Student Consultation Policy",
        subTitle: "Access your timetable, results, trimester invoices.",
        slug: "student-consultation-policy",
        link: "",
        CatagoriesItem: {
          title: "Student Consultation Policy",
          image: "/assets/HeroImage-2.webp",
          description:
            "Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct ",
        },
      },
      {
        icon: <RiExchangeDollarFill />,
        menuTitle: "Critical Incident and Emergency Management Policy",
        subTitle: "Access your timetable, results, trimester invoices.",
        slug: "critical-incident-and-emergency-management-policy",
        link: "",
        CatagoriesItem: {
          title: "Critical Incident and Emergency Management Policy",
          image: "/assets/HeroImage-2.webp",
          description:
            "Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct ",
        },
      },
      {
        icon: <RiExchangeDollarFill />,
        menuTitle: "Deferral Suspension and Cancellation Policy and Procedure",
        subTitle: "Access your timetable, results, trimester invoices.",
        slug: "deferral-suspension-and-cancellation-policy-and-procedure",
        link: "",
        CatagoriesItem: {
          title: "Deferral Suspension and Cancellation Policy and Procedure",
          image: "/assets/HeroImage-2.webp",
          description:
            "Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct ",
        },
      },
      {
        icon: <RiExchangeDollarFill />,
        menuTitle: "International Student Transfer Policy and Procedure",
        subTitle: "Access your timetable, results, trimester invoices.",
        slug: "international-student-transfer-policy-and-procedure",
        link: "",
        CatagoriesItem: {
          title: "International Student Transfer Policy and Procedure",
          image: "/assets/HeroImage-2.webp",
          description:
            "Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct ",
        },
      },
      {
        icon: <RiExchangeDollarFill />,
        menuTitle: "Course Discontinuation and Teach Out Policy",
        subTitle: "Access your timetable, results, trimester invoices.",
        slug: "course-discontinuation-and-teach-out-policy",
        link: "",
        CatagoriesItem: {
          title: "Course Discontinuation and Teach Out Policy",
          image: "/assets/HeroImage-2.webp",
          description:
            "Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct ",
        },
      },
      {
        icon: <RiExchangeDollarFill />,
        menuTitle: "New Student Orientation Policy",
        subTitle: "Access your timetable, results, trimester invoices.",
        slug: "new-student-orientation-policy",
        link: "",
        CatagoriesItem: {
          title: "New Student Orientation Policy",
          image: "/assets/HeroImage-2.webp",
          description:
            "Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct ",
        },
      },
      {
        icon: <RiExchangeDollarFill />,
        menuTitle: "Policy Assessment",
        subTitle: "Access your timetable, results, trimester invoices.",
        slug: "policy-assessment",
        link: "",
        CatagoriesItem: {
          title: "Policy Assessment",
          image: "/assets/HeroImage-2.webp",
          description:
            "Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct ",
        },
      },
    ],
  },
  {
    title: "Request Form",
    link: "",
    slug: "request-form",
    Catagories: [
      {
        icon: "fi fi-rr-refund-alt",
        menuTitle: "Refund Request",
        subTitle: "Request a refund for fees paid.",
        slug: "refund-request",
        link: "https://zfrmz.com.au/RXpN4XUu8RZhAhUoWzI3",
        image: "/assets/HeroImage-2.webp",
      },
      {
        icon: "fi fi-rr-fingerprint",
        menuTitle: "Absence Approve",
        subTitle: "Approve or report absence.",
        slug: "absence-approve",
        link: "https://zfrmz.com.au/HpBjIJRs3cplcqIb4Ny1",
        image: "/assets/HeroImage-2.webp",
      },
      {
        icon: "fi fi-rr-expense",
        menuTitle: "Student Payment Schedule",
        subTitle: "View and manage payment schedules.",
        slug: "student-payment-schedule",
        link: "https://zfrmz.com.au/CaS3QBzTw3l18bsh3jPG",
        image: "/assets/HeroImage-2.webp",
      },
      {
        icon: "fi fi-rr-convert-shapes",
        menuTitle: "Change Of Course",
        subTitle: "Request a change of course.",
        slug: "change-of-course",
        link: "https://zfrmz.com.au/X9AZvkNqzDFBpBES0ivh",
        image: "/assets/HeroImage-2.webp",
      },
      {
        icon: "fi fi-rr-time-quarter-past",
        menuTitle: "Deferral",
        subTitle: "Request a deferral for studies.",
        slug: "deferral",
        link: "https://zfrmz.com.au/h2AYLoMcDAZLXZ7OoUle",
        image: "/assets/HeroImage-2.webp",
      },
      {
        icon: "fi fi-rr-venus-mars",
        menuTitle: "Sexual Harrasment Report",
        subTitle: "Report incidents of sexual harassment.",
        slug: "sexual-harrasment-report",
        link: "https://zfrmz.com.au/Vj5JjMTkc8KLrYOdkEpq",
        image: "/assets/HeroImage-2.webp",
      },
      {
        icon: "fi fi-rr-credit-card-buyer",
        menuTitle: "Application For Credit",
        subTitle: "Apply for credit or financial aid.",
        slug: "application-for-credit",
        link: "https://zfrmz.com.au/Yv1WJqg1kclkGVXSRyKU",
        image: "/assets/HeroImage-2.webp",
      },
    ],
  },
];
