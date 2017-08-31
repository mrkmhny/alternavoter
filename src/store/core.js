/*
This file contains the main functionality related to modifying the polls
*/

// TODO: Do I really need to comment this eslint thing each time?  Maybe export each one

// Adds a new poll to database
export function addPoll () {
  console.log('addPoll fired')
}

// Grabs the needed polls from the DB and adds them to the state
const getPolls = () => { // eslint-disable-line no-unused-vars
  this.$http.get('https://irv-app.firebaseio.com/').then((data) => {
    console.log(data)
  })
}
