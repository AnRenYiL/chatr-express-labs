// Write chatr code here!

//grab all of the messages and display them as text
// fetch('https://chat-battle.herokuapp.com/messages')
// .then(response => response.text())
// .then(text => console.log(text))

// fetch('https://chat-battle.herokuapp.com/messages')
// .then(response => response.json())
// .then(data => console.log(data))

//GET REQUEST
//grab all of the messages and display them as JSON
fetch('/messages')
    .then(response => response.json())
    .then(data => {
        let html = '';
        for (const item of data) {
            html += `<li style="background:${item.flagged?"lightblue":"lightpink"}">${item.body} | posted by: ${item.username} | <button onclick="changeFlag(${item.id},${item.flagged})">${item.flagged?"Unflag it":"Flag it"}</button></li>`;
        }
        document.querySelector("#messages").innerHTML = html;
    })

function changeFlag(id, flagged) {
    event.preventDefault;
    fetch(`/messages/${id}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            flagged: flagged
        })
    }).then(response => location.reload());
}

function filteringByFlag(flagged) {
    event.preventDefault;
    fetch(`/messages?flagged=${flagged}&username=${document.querySelector("#fullname").value}`)
        .then(response => response.json())
        .then(data => {
            let html = '';
            for (const item of data) {
                html += `<li style="background:${item.flagged?"lightblue":"lightpink"}">${item.body} | posted by: ${item.username} | <button onclick="changeFlag(${item.id},${item.flagged})">${item.flagged?"Unflag it":"Flag it"}</button></li>`;
            }
            document.querySelector("#messages").innerHTML = html;
        });
}


// POST REQUEST
// fetch('/messages', {
//     method: 'POST',
//     headers: {
//         'Content-type':'application/json'
//     },
//     body: JSON.stringify({ content: 'here is a test message'})
// }
// )

// fetch('https://chat-battle.herokuapp.com/messages', {
//     //post requests require another parameter to the fetch that's an object with a method and headers
//     method: 'POST',
//     headers: {
//         'Content-type': 'application/json'
//     },
//     //json.stringify converts it to a string before it is sent
//     body: JSON.stringify({
//         content: 'new message test'
//     })
// })


// fetch('https://chat-battle.herokuapp.com/messages', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         body: 'cohort 33'
//     })
// })



// fetch('https://chat-battle.herokuapp.com/messages/3288',{
//     method: 'DELETE'
// });