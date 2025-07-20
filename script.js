fetch('http://16.171.226.168:5300/get')
  .then(response => response.json())
  .then(result => {
    let dataArray = result.data; // Correct key here
    const table = document.querySelector('.one');

    dataArray.forEach(element => {
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
    console.log(error);
  });
