import { CustomErr } from "../classes/IError";

export async function fetchEvents() {
    const response = await fetch('http://localhost:3000/events');

    if (!response.ok) {
      const error = new CustomErr('An error occurred while fetching the events');
      error.code = response.status;
      error.info = await response.json();
      return error;
    }

    const { events } = await response.json();

    return events;
  }