#### Lower State / Push the state down

- By changing the component's state or props. When the component's state or props change,
  React will re-render the component to reflect these changes

- When the parent element re-renders, even if the component's state or props have not changed
  every time we update the count we trigger re-render, the list which is a child also re-renders
  when the list re-renders also the person re-renders