function addnum(arg) {
    
    const input = document.getElementById('input')

    const value = input.value

    const newValue  = value+arg+''

    input.value = newValue
}


function add() {
    const input = document.getElementById('input')

    const value = input.value

    const newValue  = value+'+'

    input.value = newValue
}

function solve(e) {
    if(e.keyCode==13){

        const input = document.getElementById('input')

        let value = input.value

        value = parseOperator(value)


        alert(value)
    }
}

function parseOperator(value) {
    
}