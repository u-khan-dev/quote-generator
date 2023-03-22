let quoteButton = document.querySelector('#btn-get-quote');
let outputDiv = document.querySelector('#quote');

quoteButton.addEventListener('click', () => {
    const options = {
        headers: {
            'X-Api-Key': '4pVdGsHrclMqOthoZgw3Lw==7rH4baY0KkzdVbRu'
        }
    };

    fetch('https://api.api-ninjas.com/v1/quotes', options)
        .then(res => { return res.json(); })
        .then(data => {
            let output = '\"' + data[0].quote + '\"\n\n';
            output += '-- ' + data[0].author;
            outputDiv.innerText = output;
        })
        .catch(err => { console.error('Something went wrong', err) });
});