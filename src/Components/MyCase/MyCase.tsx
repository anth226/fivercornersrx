import React from 'react'
import styles from "./mycase.module.scss"
import SidenafilMedicine from "../../assets/images/sidenafil.svg"
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import CircleIcon from "../../assets/icons/circle.svg"
import { motion } from "framer-motion";

const MyCase = () => {

    const questions = [{
        question: "Are you seeking treatment for improved sexual activity?",
        answer: "No"
    },
    {
        question: "Have you had your vitals tested by a medical practitioner in the past 3 years? This includes weight, blood pressure, and heart rate.",
        answer: "No"
    },
    {
        question: "What is your blood pressure on an average day (even when taking medication)?",
        answer: "No"
    },
    {
        question: "List medication allergies ",
        answer: "No"
    },
    {
        question: "List all prescription medications which you take. ",
        answer: "None"
    },
    {
        question: "List medicatioAre you currently taking any medications for erectile dysfunction or pulmonary hypertension?",
        answer: "No"
    },
    {
        question: "Please list all other medical problems",
        answer: "None"
    },
    {
        question: "Have you ever had a heart attack? Cardiac surgery?",
        answer: "No"
    },
    {
        question: "Do you have any heart/cardiac conditions? Arrhythmias?",
        answer: "No"
    },
    {
        question: "Do you use nitrates or any of the following medications listed below?",
        answer: "No"
    },
    {
        question: "Are you currently using any of the following recreational drugs?",
        answer: "No"
    },
    {
        question: "Select any of the following medical issues that apply",
        answer: "No"
    },
    {
        question: "Over the past 6 months, during sexual intercourse, how difficult was it to maintain your erection to completion of intercourse?",
        answer: "No"
    },
    {
        question: "Over the past 6 months, how do you rate your confidence that you could keep an erection?",
        answer: "No"
    },
    {
        question: "Is there anything else you would like to tell the doctor?",
        answer: "No"
    }
    ]

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
        >
            <div>
                <DashboardHeader heading='My Case' details='View your assessment result.' />
                <div className={styles.myCaseContentContainer}>
                    <div className={styles.imgUploadContainer}>
                        <p className={styles.headText}>Submit file for physician to review</p>
                        <div className={styles.imageUploadSection}>
                            <p className={styles.headText}>Drags and drop file here</p>
                            <button className={styles.actionBtn}>Upload File</button>
                        </div>
                    </div>
                    <div className={styles.quessionareContainer}>
                        {
                            questions.map(item => (
                                <div className={styles.questionContainer}>
                                    <p className={styles.question}>{item.question}</p>
                                    <div className={styles.answer}>
                                        <img src={CircleIcon} alt="selected_icon" />
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>

            </div>
        </motion.main>
    );
}

export default MyCase;