### Smooth Scroll

html
<!--link -->
<a href="#services">services</a>
<!-- element -->
<section id="services"></section>

css
html {
    scroll-behaviour: smooth;
}

.section {
    /* navbar height */
    scoll-margin-top: 4rem;
}

### Alternative Approach Page Links Component 

- in components create PageLinks.ts
- import pageLinks
- return the entire List and replace current setup in Navbar, Footer
- "gotcha"
  - the more "moving parts" you will have the harder it's going to manage
  - my personal preference, if possible just use Data