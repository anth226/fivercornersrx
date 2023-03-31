import React from 'react';
import Footer from '../../Components/Footer/Footer';
import MainNavbar from '../../Components/Navbar/MainNavbar';
import Spacer from '../../Components/Spacer/Spacer';
import styles from "./consenttotelehealth.module.scss"

const ConsentToTeleHealth = () => {

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (<div className={styles.pageContainer}>
        <div className={styles.contentContainer}>
            <MainNavbar updateSidebar={() => { }} navType="light" />
            <h1 className={styles.pageHead}>CONSENT TO TELEHEALTH BY FIVECORNERSRX LLC:
            </h1>
            <strong>
                BY SELECTING THE “AGREE” OPTION FOR THIS CONSENT TO TELEHEALTH, YOU CONSENT TO RECEIVING HEALTHCARE SERVICES THROUGH TELEHEALTH TECHNOLOGY. YOU ACKNOWLEDGE THAT YOU ARE ELECTRONICALLY SIGNING THIS CONSENT AND HAVE REVIEWED, COMPREHENDED, AND ACCEPTED THE RISKS AND BENEFITS OF TELEHEALTH SERVICES AS DESCRIBED BELOW AND WISH TO OBTAIN SUCH SERVICES.
            </strong>
            <Spacer />
            <p>
                All capitalized terms mentioned in this Consent to Telehealth and not explicitly defined herein shall have the meanings set forth in the Terms and Conditions. For clarity, the terms “FiveCornersRx”, “we”, “us”, or “our” refer to FiveCornersRx and the terms “you” and “yours” refer to the person utilizing the Service.
            </p>
            <h3>What is Telehealth? </h3>
            <p className="primaryText">
                Telehealth refers to the provision of healthcare services using electronic communication, telecommunications, information technology, or other comparable methods between a healthcare professional and a patient who are not physically located in the same place. This is a convenient way for you to receive healthcare services from your provider in various locations, including your own home.
            </p>
            <h3>Telehealth Usage: </h3>
            <p>
                Telehealth is utilized for providing clinical health care services, including diagnosis, treatment, and follow-up care; health education; and public health administration. Telehealth may be utilized for various purposes, such as:
            </p>
            <ul>
                <li>
                    Telehealth is utilized for providing clinical health care services, including diagnosis, treatment, and follow-up care; health education; and public health administration. Telehealth may be utilized for various purposes, such as:
                </li>
                <li>
                    Storing and forwarding diagnostic images, sound and video files to a healthcare professional; and
                </li>
                <li>
                    Communicating through audio or video conferencing and/or data communications between you and a healthcare provider.
                </li>
            </ul>
            <h3>
                Privacy Protection:
            </h3>
            <p>
                The FiveCornersRx Service will implement network and software security protocols to safeguard the privacy and security of health information and data. These protocols will be employed in all technologies and electronic systems used to provide telehealth services. Furthermore, measures will be taken to protect your protected health information and data to ensure its integrity against corruption, whether intentional or unintentional. Your interactions with your healthcare provider are confidential, and they will not be recorded.
            </p>
            <h3>
                Benefits of Telemedicine:
            </h3>
            <ul>
                <li>
                    Telehealth provides a more convenient and efficient way to access medical care and treatment, as you don't have to physically visit a clinic or hospital to see your healthcare provider.
                </li>
                <li>
                    Managing your interactions with your healthcare provider is easier and more efficient
                </li>
                <li>
                    You can avoid the risk of exposure to illnesses by not coming into contact with other sick people in a clinic or hospital.
                </li>
            </ul>

            <h3>
                Potential Risks of Telehealth:
            </h3>
            <ul>
                <li>
                    Telehealth may feel different and make it challenging for you to communicate with and provide adequate information to your healthcare provider, as it is outside the typical healthcare setting.
                </li>
                <li>
                    Your healthcare provider may not be able to diagnose or treat you due to the need for physical tests and a close physical examination, which cannot be conducted remotely.
                </li>
                <li>
                    Missed signs and symptoms that require emergency medical treatment or further medical testing may occur due to the inability to physically examine you, and your healthcare provider may not be able to provide medical treatment for your specific condition through telehealth, necessitating alternative care.
                </li>
                <li>
                    Technological failures may cause disruptions in your tele-visit with your healthcare provider or delays in your evaluation and treatment.
                </li>
                <li>
                    Technological failures may cause diagnostic images or specimens to be distorted as a result of electronic transmission issues, unauthorized access to your information, or loss of information due to technology failures. People nearby may also overhear confidential information if you are not in a private location during your tele-visit.
                </li>
                <li>
                    Your healthcare provider's treatment options may be limited by regulatory requirements, particularly related to certain prescriptions, in some jurisdictions.
                </li>
                <li>
                    You acknowledge and understand the risks and benefits associated with telehealth, which is the medical care and treatment provided to you through the platform of FiveCornersRx by healthcare "Providers."
                </li>
                <li>
                    You acknowledge that there may be potential risks and benefits to telehealth and that FiveCornersRx will not be held responsible for any loss of information due to technological failures.
                </li>
                <li>
                    You understand that telehealth may offer potential benefits, but there are no guarantees that your condition will be cured or improved and, in some instances, may even worsen.
                </li>
                <p>
                    By clicking "AGREE," you acknowledge that you have read and understood the terms and conditions of live video telehealth visits with a healthcare provider from FiveCornersRx, and consent to participate in this service under these conditions.
                </p>
                <li>
                    This special Consent to Telehealth has been read carefully by me, and I understand the potential risks and benefits of using telehealth for medical care and treatment provided to me through FiveCornersRx's platform by "Providers."
                </li>
                <li>
                    I acknowledge that I am aware of the possible risks and benefits of telehealth and will not hold FiveCornersRx responsible for any information lost due to technological failures
                </li>
                <li>
                    I acknowledge that while telehealth may offer potential benefits, such benefits cannot be guaranteed. My condition may not be cured or improved, and in some cases, it may worsen.
                </li>
                <li>
                    I acknowledge that my health care Provider may determine, in their sole discretion, that my condition is not suitable for treatment using telehealth, and may recommend that I seek medical care and treatment in-person or from an alternative source.
                </li>
                <li>
                    I acknowledge that the same confidentiality and privacy protections that apply to my other health care services also apply to telehealth services.
                </li>
                <li>
                    I acknowledge that my healthcare information may be shared with other individuals in accordance with FiveCornersRx's Privacy Policy and regulations or laws in the state or territory where I am located.
                </li>
                <li>
                    I acknowledge that I have access to all of my health and wellness information related to telehealth services in accordance with applicable laws and regulations.
                </li>
                <li>
                    I acknowledge that I can withdraw or withhold this consent at any time by emailing FiveCornersRx at support@FiveCornersRx.com with such instruction. Otherwise, this consent will be considered renewed upon each new telehealth consultation with my health care Provider.
                </li>
                <li>
                    I authorize and agree that my health care Provider may share information regarding the telemedicine exam with other individuals for treatment, payment, and health care operations purposes.
                </li>
                <li>
                    I authorize and agree that my health care Provider may release information regarding the telehealth exam to FiveCornersRx and its affiliates.
                </li>
                <li>
                    <ul className={styles.discList}>
                        <li>
                            When a valid court order is issued for medical records.
                        </li>
                        <li>
                            Reporting suspected abuse, neglect, or domestic violence.
                        </li>
                        <li>
                            Preventing or reducing a serious threat to anyone's health or safety.
                        </li>
                    </ul>
                </li>
            </ul>
            <h3>FiveCornersRx Asynchronous Telehealth Informed Consent</h3>
            <p>
                The reason why you are seeing this form is that you have chosen to participate in asynchronous telehealth consultations with a healthcare provider from FiveCornersRx.
            </p>
            <p>
                By selecting the "Agree" option, you recognize that you have perused and comprehended the conditions specified below. Additionally, you comprehend the advantages and risks associated with asynchronous telehealth. You hereby provide your informed consent to take part in asynchronous telehealth services based on these terms and conditions by agreeing to them.
            </p>
            <h5>What is Asynchronous Telehealth? </h5>
            <p>
                Asynchronous Telehealth is a type of telehealth service that allows you to interact with your healthcare provider in real-time through audio or video technology, such as live phone calls or videoconferencing. It enables healthcare providers to diagnose and consult with patients in real-time when face-to-face contact or live communication is not possible or necessary.
            </p>
            <h5>How Does FiveCornersRx Offer Asynchronous Telehealth? </h5>
            <p>
                FiveCornersRx provides Asynchronous Telehealth services through its platform, which utilizes secure, encrypted video conferencing technology to enable real-time interactions between patients and healthcare providers.
            </p>
            <p>
                The Advantages of Asynchronous Telehealth
            </p>
            <ul>
                <li>
                    Asynchronous Telehealth allows you and your healthcare provider to communicate in real-time, providing you with prompt medical advice and diagnosis.
                </li>
                <li>
                    It removes the need for in-person visits, saving you time and reducing your travel costs.
                </li>
                <li>
                    You can attend appointments from wherever you are, as long as you have a stable internet connection.
                </li>
            </ul>

            <p>
                By clicking "AGREE," you acknowledge that you have read, understood, and agreed to the terms and conditions of FiveCornersRx's Asynchronous Telehealth service. You also give your informed consent to participate in this service under these conditions.
            </p>

            <ul>
                <li>
                    You acknowledge that your healthcare Provider reserves the right to determine whether your condition is suitable for telehealth treatment and may suggest alternative sources of medical care or treatment.
                </li>
                <li>
                    You acknowledge that telehealth services are subject to the same privacy and confidentiality protections as other healthcare services.
                </li>
                <li>
                    You acknowledge that your healthcare information may be shared with others in accordance with FiveCornersRx's Privacy Policy and the laws and regulations of the state or territory in which you are located.
                </li>
                <li>
                    You acknowledge that you have access to all health and wellness information related to the telehealth services, as required by applicable laws and regulations.
                </li>
                <li>
                    You acknowledge that you may withdraw or withhold your consent at any time by emailing FiveCornersRx at support@FiveCornersRx.com, but if you do not withdraw your consent, it will be considered renewed for each new telehealth consultation with your healthcare Provider.
                </li>
                <li>
                    You authorize your healthcare Provider to share information related to the telemedicine exam with others for the purposes of treatment, payment, and healthcare operations.
                </li>
                <li>
                    You authorize your healthcare Provider to disclose information related to the telehealth exam to FiveCornersRx and its affiliates.
                </li>
                <li>
                    You acknowledge and agree that your healthcare information may be shared in the following circumstances
                    <ul className={styles.discList}>
                        <li>
                            When a valid court order is issued for medical records.
                        </li>
                        <li>
                            When there is suspected abuse, neglect, or domestic violence that needs to be reported.
                        </li>
                        <li>
                            When there is a need to prevent or reduce a serious threat to anyone's health or safety.
                        </li>
                    </ul>
                </li>
            </ul>
            <p>
                Possible risks should be considered before consenting to the use of Asynchronous Telehealth. These risks include:
            </p>
            <ul>
                <li>
                    The possibility of delayed visits due to technological deficiencies, disruptions, or failures that may necessitate rescheduling the visit with the healthcare provider.
                </li>
                <li>
                    The possibility of security protocols failure, which may result in the breach of personal health information privacy.
                </li>
                <li>
                    The inability of healthcare providers to fully assess a patient's condition without access to their complete medical history.
                </li>
                <li>
                    The likelihood of negative outcomes such as drug interactions and allergic reactions, increasing as healthcare providers do not have access to a patient's complete medical records.
                </li>
                <li>
                    Asynchronous telehealth services are not emergency services, and personal data is not monitored at all times. In case of a medical emergency, patients should immediately call 911.
                </li>
            </ul>
            <p>
                The healthcare provider has sole discretion over the care received by the patient, with no guarantee of diagnosis, treatment, or prescription.
                <br />
                Legislative restrictions in some states may make Asynchronous Telehealth unavailable.
                <br />
                By accepting the Asynchronous Telehealth Consent, patients acknowledge and agree to the following terms:
            </p>
            <ul>
                <li>
                    They have read and understood the risks and benefits of using telehealth services through FiveCornersRx's platform.
                </li>
                <li>
                    The same privacy rights apply during asynchronous telehealth consultations as they would during an in-person visit.
                </li>
                <li>
                    Asynchronous telehealth may involve the electronic transmission of personal health information to healthcare providers located in other areas, including out of state.
                </li>
                <li>
                    While anticipated benefits from asynchronous telehealth can be expected, no results can be guaranteed or assured.
                </li>
                <li>
                    All information submitted to FiveCornersRx via text message or entered by the healthcare provider in the FiveCornersRx platform will become part of the patient's medical record.
                </li>
                <li>
                    Patients can withdraw or withhold their consent at any time by emailing FiveCornersRx.
                </li>
                <li>
                    This consent is not a condition of purchase.
                </li>
                <li>
                    Patients' healthcare information may be shared in accordance with the FiveCornersRx Privacy Policy and the regulations or laws of the state or territory where they are located.
                </li>
                <li>
                    Patients agree and understand that their healthcare information may be shared in specific circumstances, such as when a valid court order is issued for medical records or reporting suspected abuse, neglect, or domestic violence.
                </li>
            </ul>
            <h3>Call/Email/Text Messaging Consent:</h3>
            <p>
                I grant my explicit permission to FiveCornersRx or its healthcare providers to contact me through calling, emailing, or texting (via SMS and/or MMS) concerning Personal Data (defined in the FiveCornersRx Privacy Policy), appointments, or related matters in connection with my telehealth sessions, utilizing the contact information that I have furnished. I compreh  end and consent that any calls or messages to me may be made using an auto-dialer or pre-recorded or synthetic voice, even if my number is listed on a do-not-call registry, and that my regular phone carrier charges may apply. This Informed Consent for Asynchronous Telehealth applies for the entirety of my treatment with FiveCornersRx.
            </p>
        </div>
        <Footer />
    </div>);
}

export default ConsentToTeleHealth;