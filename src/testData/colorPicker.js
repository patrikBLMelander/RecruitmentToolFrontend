const colorPicker =
[
    { 
        id: 'color1',
        primary: '#2F4454',
        secondary: '#376E6F',
        third: '#1C3334',
        fourth: '#DA7B93',
        fifth: '#2E151B',
        text: '#c0cad1',
    },
    { 
        id: 'color2',
        primary: '#6b705c',
        secondary: '#ddbea9',
        third: '#cb997e',
        fourth: '#b7b7a4',
        fifth: '#a5a58d',
        text: '#ffe8d6',
    },
    { 
        id: 'color3',
        primary: '#1a111b',
        secondary: '#577b69',
        third: '#235d5c',
        fourth: '#344b6e',
        fifth: '#33335a',
        text: '#c0cad1',
    },
    { 
        id: 'color4',
        primary: '#7f5539',
        secondary: '#9c6644',
        third: '#b08968',
        fourth: '#ddb892',
        fifth: '#e6ccb2',
        text: '#ede0d4',
    },
    { 
        id: 'color5',
        primary: '#a2d2ff',
        secondary: '#cdb4db',
        third: '#ffc8dd',
        fourth: '#ffafcc',
        fifth: '#bde0fe',
        text: '#5c3b6e',
    },
    { 
        id: 'color6',
        primary: '#5d5c61',
        secondary: '#557a95',
        third: '#7395ae',
        fourth: '#97959e',
        fifth: '#b1a2296',
        text: '#d6d5db',
    },
]

const choise= 5

export const chooseColorScheme = (input) =>{

    console.log("inne i metoden")
    choise = input;
}


export default colorPicker[choise];