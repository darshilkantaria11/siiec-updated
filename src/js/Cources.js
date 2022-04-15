import React from 'react'
import "./css/Cources.css";
import mybanner from "./image/mybanner.jpg";
import srmlogo from "./image/srmlogo.png";
import abt from "./image/abt.png";
import whyMinor from "./image/whyMinor.png";
import Objectives from "./image/Objectives.png";
import minorsRules from "./image/minorsRules.png";
import Eligibility from "./image/Eligibility.png";
import Footer from "./Footer";
export const Cources = () => {
  return (
      <>
    <div>
        <div className="mainCources">
            <div className="cBanner">
                <img id="myBanner"src={mybanner} alt="" />
                <img id="csrmlogo"src={srmlogo} alt="" />
            </div>
            <div className="aboutCource">
                <img src={abt} alt="" />
                <p>SRM Innovation and Design Centre (SIDC)transforms our day-to-day lives through a multitude of innovative technologies and products. The SIDC minor is intended to expose students from other disciplines to the unlimited opportunities for innovation in this exciting field, and to the methodologies and tools used by SIDC engineers for the exploration and design of new technologies and products. The program is expected to accommodate students of diverse backgrounds.</p>
                <ul>
                    <li>An <u><strong>academic major</strong></u> is the academic discipline to which an undergraduate student formally commits. A student who successfully completes all courses required for the major qualifies for an undergraduate degree</li>
                    <li><u><strong>Academic minor</strong></u> is an academic discipline outside of the student's academic major in which he or she takes a small number of classes.</li>
                    <li>An academic major or major field refers to a student's primary focus within their degree program while a minor or minor field refers to his or her secondary focus.</li>
                    <li><u><strong>Minors are optional.</strong></u> You may complete multiple minors or none at all.</li>
                    <li>Some students will prepare for their intended career with their major, while pursuing personal interests with a minor, for example, majoring in SIDC while minoring in a foreign language or performing arts or Economics or Management Studies. Other students may pursue a minor to provide specific specialization and thus make themselves more attractive to employers</li>
                </ul>
            </div>
            <div className="whyMinor">
                <img src={whyMinor} alt="" />
                <ul>
                    <li>Adding depth to your studies</li>
                    <li>Adding breadth to your studies</li>
                    <li>An area of passion</li>
                    <li>An alternative to double majoring</li>
                </ul>
            </div>
            <div className="objOfProgram">
                <img src={Objectives} alt="" />
                <ol>
                    <li>To impart to students basic fundamental and applied knowledge in the SIDC discipline.</li>
                    <li>To convey an understanding of the continuously increasing contributions of SIDC to society.</li>
                    <li>To obtain a working knowledge of core SIDC principles.</li>
                    <li>To understand the current state-of-the-art within the SIDC discipline, and to bridge between their major discipline of study and that of SIDC.</li>
                </ol>
            </div>
            <div className="minRule">
                <img src={minorsRules} alt="" />
                <ol>
                    <li>Pursuing a major/minor program is a highly individual decision, and should be based on a student's educational and career goals.</li>
                    <li>Minors must be completed simultaneously with a major degree program. You cannot earn a minor after you have already earned your bachelor’s degree(s).</li>
                    <li>You need at least one active major in order to pursue a minor.</li>
                    <li>Also be aware that since the minor must be completed with a major, any outstanding minor requirements will prevent the awarding of the degree for your major. If you ultimately decide to graduate without the minor, the minor must be removed from your records before your degree can be processed.</li>
                    <li>The Certification for Minor will NOT be issued until the Major degree is successfully completed, even though all requirements for the Minor have been satisfied.</li>
                    <li>All requirements for the Minor must be completed within a maximum of ONE semester of the completion of the Major degree but NOT LATER THAN the maximum duration of study of the Major degree permitted by UGC i.e., not more than N+2 years where ‘N’ is the normal duration of study as per regulations.</li>
                    <li>If a student drops from a Minor or is NOT able to fulfil all the requirements for the certification of Minor, within the maximum period of study permitted by UGC, the student will NOT be issued the Certification. Nevertheless, the transcripts for the completed courses will be issued.</li>
                    <li>Register for a Minor any time after 3rd Semester of B.Tech</li>
                    <li>The number of seats for minor in SIDC is limited and subject to availability and academic performance.</li>
                    <li>The Certification for Minor will NOT be issued until the Major degree is successfully completed, even though all requirements for the Minor have been satisfied.</li>
                    <li>The offering Department scrutinises the credentials of registered students and announces the list of selected students who fulfil the minimum eligibility criteria for admission into a Minor Certificate programme.</li>
                    <li>The selected students enrol into the Minor Certificate programme by paying a one-time programme fee of Rs. 75,000/- that includes the tuition fee, examination fee and fee for transcript and certificate.</li>
                    <li>The student is permitted to register for a maximum of 2 courses per semester, over and above the maximum credits permitted (26 credits) for a Major degree of study.</li>
                    <li>A minor requires 18-20 credits to be acquired from the courses offered by the Dept. of SIDC</li>
                </ol>
            </div>
            <div className="eligc">
                <img src={Eligibility} alt="" />
                <p><strong>A student will be permitted to pursue a Minor, if and only if, he / she fulfils the following criteria:</strong></p>
                <ol type='i'>
                    <li>Must have secured a minimum of 7.0 CGPA* at the time of admission to a Minor</li>
                    <li>There must NOT be any standing arrears / Backlogs.</li>
                    <li>Must be in the active rolls of the department without any break of study or disciplinary action pending against the student</li>
                    <li>Must have NO outstanding fee dues</li>
                </ol>
                <p><strong>* CGPA cut off is subject to change based on the demand and competition.</strong></p>
            </div>
            <div>
                
            </div>
        </div>
    </div>
    <Footer/>
    </>
  );
}

export default Cources;
