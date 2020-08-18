const STATES = [
    'AL',
    'AK',
    'AR',
    'AZ',
    'CA',
    'CO',
    'CT',
    'DC',
    'DE',
    'FL',
    'GA',
    'HI',
    'IA',
    'ID',
    'IL',
    'IN',
    'KS',
    'KY',
    'LA',
    'MA',
    'MD',
    'ME',
    'MI',
    'MN',
    'MO',
    'MS',
    'MT',
    'NC',
    'NE',
    'NH',
    'NM',
    'NV',
    'NY',
    'ND',
    'OH',
    'OK',
    'OR',
    'PA',
    'RI',
    'SC',
    'SD',
    'TN',
    'TX',
    'UT',
    'VT',
    'WA',
    'WI',
    'WV',
    'WY'
];

// make dropdown with all states
// function generateStatesForm() {
const statesFormTop =`
    <label for="states">States (hold Ctrl to select multiple states)</label>
    <select name="states" id="states" multiple>
    `;    

let statesPulldown = [statesFormTop];
// populate the pulldown list with all 50 states!
for (let i=0; i<STATES.length; i++){
    statesPulldown.push(`
    <option value = "${STATES[i]}">${STATES[i]}</option>`);
}
statesPulldown.push(`</select>`);
console.log(statesPulldown);
// }

export default {
    STATES,
    statesPulldown
};