import { useHistory } from 'react-router-dom';

import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    fetch(
      'https://react-getting-started-48dec-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(() => {
      history.replace('/');
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;

//fetch to send http requests fetch('string to whitch want to send a req', obj {

//})
// firebase requires to add .json
// most APIs are build for storing that need a POST req
// GET is defoult
// Also we should to send DATA that we, Body field: data should be in JSON.stringify(values converted to JSON),
// useHistory - history obj that exposes some methods that allowes us to manipulate browser history to navigate a way

