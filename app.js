function fetchRates() {
    const currency = document.getElementById('currency').value;
    const apiKey = 'ad12b405bde4940209b43171';
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currency}`;  

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const rates = data.conversion_rates;
            const ratesDiv = document.getElementById('rates');
            ratesDiv.innerHTML = `<h3>Tingkat Pertukaran untuk ${currency}</h3>`;

            const table = document.createElement('table');
            table.classList.add('table', 'table-striped');
            let html = '<thead class="thead-dark"><tr><th>Mata Uang</th><th>Nilai Tukar</th></tr></thead><tbody>';
            for (const [key, value] of Object.entries(rates)) {
                html += `<tr><td>${key}</td><td>${value}</td></tr>`;
            }
            html += '</tbody>';
            table.innerHTML = html;
            ratesDiv.appendChild(table);
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
            alert('Gagal mengambil nilai tukar');
        });
}