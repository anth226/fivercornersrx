export interface stepTypes {
    step_no: number;
    step_text: string;
    current_step: boolean
}

export const completeAccountSteps: stepTypes[] = [{
    step_no: 1,
    step_text: 'Complete your profile',
    current_step: true
},
{
    step_no: 2,
    step_text: 'Complete Health Questionnaire',
    current_step: false
},
{
    step_no: 3,
    step_text: 'Treatment',
    current_step: false
}
]

export const billingSteps: stepTypes[] = [{
    step_no: 1,
    step_text: 'Shipping Information',
    current_step: true
},
{
    step_no: 2,
    step_text: 'Billing Information',
    current_step: false
},
{
    step_no: 3,
    step_text: 'Payment Information',
    current_step: false
}
]