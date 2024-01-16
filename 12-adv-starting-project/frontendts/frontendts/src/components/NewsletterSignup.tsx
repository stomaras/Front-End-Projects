import { useEffect } from 'react';
import classes from './NewsletterSignup.module.css';
import { useFetcher } from 'react-router-dom';



function NewsletterSignup() {

    // Fetcher should basically be used whenever you wanna trigger an action, or also a loader
    // without actually navigating to the page to which the loader belongs or the action belongs
    const fetcher = useFetcher();
    const {data, state} = fetcher;

    useEffect(() => {
        if(state === 'idle' && data && data.message){
            window.alert('signup successfull')
        }
    },[data,state])

  return (
    <fetcher.Form action='/newsletter' method="post" className={classes.newsletter}>
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;