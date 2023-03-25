//type: Checks | Texts

export enum QuestionTypes {
    CHECKS = "CHECKS",
    TEXTBOX = "TEXTBOX",
    CHECKSANDTEXTBOX = "CHECKSANDTEXTBOX",
}

export interface questionType {
    type: QuestionTypes | null,
    question: string,
    description: string,
    options: string[]
}

export const questions: questionType[] = [
    {
        type: null,
        question: "",
        description: "",
        options: []
    },
    {
        type: QuestionTypes.CHECKS,
        question: "Are you seeking treatment for improved sexual activity?",
        description: "",
        options: [
            "Yes", "No"
        ]
    },
    {
        type: QuestionTypes.CHECKS,
        question: "Have you had your vitals tested by a medical practitioner in the past 3 years? This includes weight, blood pressure, and heart rate.",
        description: "",
        options: [
            "Yes", "No"
        ]
    },
    {
        type: QuestionTypes.CHECKS,
        question: "What is your blood pressure on an average day (even when taking medication)?",
        description: "",
        options: [
            "Normal ( less than 120 systolic and less than 80 diastolic)", "Elevated ( 120 to 129 systolic and less than 80 diastolic",
            "High (130-160 systolic and between 80-100 diastolic)",
            "Uncontrolled (above 160 systolic OR higher than 100 diastolic",
            "Controlled with medicine"
        ]
    },
    {
        type: QuestionTypes.TEXTBOX,
        question: "List medication allergies ",
        description: "You can move to next question if you do not have any.",
        options: [],
    },
    {
        type: QuestionTypes.TEXTBOX,
        question: "List all prescription medications which you take. ",
        description: "Disclaimer: It is very important that you list the name of each medication so your physician can make sure there will not be any drug interactions).",
        options: [],
    },
    {
        type: QuestionTypes.CHECKS,
        question: "Are you currently taking any medications for erectile dysfunction or pulmonary hypertension?",
        description: "Example: tadalafil, Cialis, sildenafil, Viagra, Revatio, Levitra etc.",
        options: [
            "Yes", "No"
        ]
    },
    {
        type: QuestionTypes.TEXTBOX,
        question: "Please list all other medical problems",
        description: "You can move to next question if you do not have any.",
        options: [],
    },
    {
        type: QuestionTypes.CHECKS,
        question: "Have you ever had a heart attack? Cardiac surgery?",
        description: "",
        options: [
            "Yes", "No"
        ]
    },
    {
        type: QuestionTypes.CHECKS,
        question: "Do you have any heart/cardiac conditions? Arrhythmias?",
        description: "",
        options: [
            "Yes", "No"
        ]
    },
    {
        type: QuestionTypes.CHECKS,
        question: "Do you use nitrates or any of the following medications listed below?",
        description: "",
        options: [
            "Nitroglycerin in any form – as a spray, tablet, patch or ointment. Deponit, Minitran, Nitrek, Nitro-Bid, Nircot, Nitrodisc, Niro-Dur, Nitrograd, Nitroglyn, Nitrol, Nitrolingua, Nitrolingual, NitroMist, Nitrong, Nitronol, -Nitro-Par, Nitroquick, Nitrostat, Nitrotab, Nitro-Time, Transdermal-Nitro, Medicine containing nitrates", "Isosorbide Mononitrate or Isosorbide Dinitrate (Dilatrate, Dilatrate-SR, Imdur, Ismo, Isordil, Monoket, Sorbitrate", "Adempas (Riociquat), which is used to treat pulmonary", "None Apply"
        ]
    },
    {
        type: QuestionTypes.CHECKS,
        question: "Are you currently using any of the following recreational drugs?",
        description: "",
        options: [
            "Poppers or Rush", "Amyl Nitrate or Butyl Nitrate", "High (130-160 systolic and between 80-100 diastolic)", "Cocaine", "None Apply"
        ]
    },
    {
        type: QuestionTypes.CHECKS,
        question: "Select any of the following medical issues that apply",
        description: "",
        options: [
            "I have been told that I am not healthy enough to have sex.", "Within the last year I have experienced chest pain AND/OR significant shortness of breath while undergoing exercise.", "I am unable to walk 1 mile on a flat surface within 20 minutes.", "I have been diagnosed with low blood pressure", "None Apply"
        ]
    },
    {
        type: QuestionTypes.CHECKS,
        question: "Over the past 6 months, how do you rate your confidence that you could keep an erection?",
        description: "",
        options: [
            "No Confidence", "Fair", "Very Confident"
        ]
    },
    {
        type: QuestionTypes.CHECKS,
        question: "Over the past 6 months, when you had erections with sexual stimulation, how often were your erections hard enough for penetration (entering your partner)?",
        description: "",
        options: [
            "Not at all", "Rarely", "Often"
        ]
    },
    {
        type: QuestionTypes.CHECKS,
        question: "Over the past 6 months, during sexual intercourse, how difficult was it to maintain your erection to completion of intercourse?",
        description: "",
        options: [
            "Not difficult", "Moderately difficult", "Very difficult"
        ]
    },
    {
        type: QuestionTypes.CHECKS,
        question: "Over the past 6 months, when you attempted sexual intercourse, how often was it satisfactory for you?",
        description: "",
        options: [
            "Never", "Sometimes", "Rarely"
        ]
    },
    {
        type: QuestionTypes.CHECKSANDTEXTBOX,
        question: "Is there anything else you would like to tell the doctor?",
        description: "",
        options: [
            "No", "Yes"
        ]
    }
]