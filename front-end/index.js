const bootcamperList = document.querySelector('.bootcamper-list');

async function increaseBootcampersScore(bootcamperId) {
  // make PUT request with correct ID
  await fetch(`http://localhost:8000/${bootcamperId}`, {
    method: 'PUT',
  });

  // reload the page (this is to force the list of bootcampers to refresh and show the updated scores)
  location.reload();
}

async function getBootcampers() {
  // get data from API
  const response = await fetch('http://localhost:8000');
  const bootcampers = await response.json();

  // loop over this data and display it on the page
  bootcampers.forEach((bootcamper) => {
    // create li
    const listItem = document.createElement('li');
    listItem.textContent = `${bootcamper.name}: ${bootcamper.score}`;

    // create a button to increase bootcamper's score
    const button = document.createElement('button');
    button.textContent = '➕';
    // set the button to update the score for the given bootcamper
    button.addEventListener('click', function() {
      increaseBootcampersScore(bootcamper.id);
    });

    // add button to the list item
    listItem.appendChild(button);

    // add the new list item to our existing list of bootcampers
    bootcamperList.appendChild(listItem);
  });

  console.log(bootcampers);
}

// retrieve the data from the API on page load
getBootcampers();
