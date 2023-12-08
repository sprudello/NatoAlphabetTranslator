document.addEventListener("DOMContentLoaded", () => {
    const normalTextField = document.getElementById("normalText");
    const natoTextField = document.getElementById("natoText");

    const natoAlphabet = {
        'A': 'Alpha',
        'B': 'Bravo',
        'C': 'Charlie',
        'D': 'Delta',
        'E': 'Echo',
        'F': 'Foxtrot',
        'G': 'Golf',
        'H': 'Hotel',
        'I': 'India',
        'J': 'Juliett',
        'K': 'Kilo',
        'L': 'Lima',
        'M': 'Mike',
        'N': 'November',
        'O': 'Oscar',
        'P': 'Papa',
        'Q': 'Quebec',
        'R': 'Romeo',
        'S': 'Sierra',
        'T': 'Tango',
        'U': 'Uniform',
        'V': 'Victor',
        'W': 'Whiskey',
        'X': 'X-ray',
        'Y': 'Yankee',
        'Z': 'Zulu'
    };

    normalTextField.addEventListener("input", (event) =>{
        natoTextField.value = translateFromNormalToNato();
    })

    function translateFromNormalToNato(){
        return normalTextField.value.toUpperCase().split('').map(char => {
            if (char === ' ') {
                //nothing
            } else {
                return natoAlphabet[char] || char;
            }
        }).join(' '); 
    }


});
