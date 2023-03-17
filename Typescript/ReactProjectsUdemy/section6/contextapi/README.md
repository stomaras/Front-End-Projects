Challenge

- create three components and nest them in such way :

- Navbar.tsx

  - NavLinks.tsx (nested in Navbar)
    - UserContainer.tsx (nested in NavLinks)

- import Navbar.tsx in App.tsx (remove container - CSS)
- in Navbar.tsx setup
  - user state value
    - default value {name:'something'}
  - logout function
    - set user back to null
- pass both of them down to UserContainer.tsx
- display user and button
- on button click set user back to null

- extra challenge
- if user null, in UserContainer display <p>please login</p>
