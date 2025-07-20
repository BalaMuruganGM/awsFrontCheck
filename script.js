fetch('http://16.171.226.168:5300/get')
.then(response => response.json())
.then(result => {
    const data = result.data; // ✅ Use 'data' not 'result'
    const table = document.querySelector('.one');
    data.forEach(element => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.age}</td>
        `;
        table.appendChild(tr);
    });
})
.catch(error => {
    console.log("Fetch error:", error);
});
