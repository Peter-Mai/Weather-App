//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){

  fetch('https://api.gameofthronesquotes.xyz/v1/random')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('h2').innerText = `Character : ${data.character.name}`
        document.querySelector('h3').innerText = data.sentence;
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}