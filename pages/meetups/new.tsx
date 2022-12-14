import Head from "next/head";
import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { MeetupFormData } from "../../types/meetup";

const newMeetupPage = () => {
  const router = useRouter();

  const addMeetuphandler = async (formData: MeetupFormData) => {
    console.log(formData);

    const resp = await fetch('/api/meetups/add', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await resp.json();
    console.log(data);

    router.push('/');
  }

  return (
    <>
      <Head>
        <title>Add a new meetup</title>
        <meta name="description" content="Add your own meetups and create amazing networking opportunities" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetuphandler} />
    </>
  );
}

export default newMeetupPage;