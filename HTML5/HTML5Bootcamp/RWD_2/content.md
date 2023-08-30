# Set the viewport

<meta name="viewport" content="width=device-width, initial-scale=1">

Using the meta viewport value width=device-width, instructs the page to match the screen's width in device independent pixels.

Adding the initial-scale=1 instructs the browsers to establish a 1:1 relationship between css pixels and device independent pixels regardless of device orientation

# Size content to the viewport

An image has fixed dimensions and if it is larger than the viewport will cause a scrollbar.
A common way to deal with this problem is to give all images a max-width of 100%.

img {
    max-width:100%;
    display:block;
}

By using percentages for the widths, the columns always remain a certain percentage 
of the container. This means that the columns become narrower,rather than creating a scrollbar

Modern css techniques such as Flexbox, Grid Layout, and Multicol make the creation of these flexible grids much easier.

# Use CSS media queries for responsiveness

Sometimes you will need to make more extensive changes to your layout to support a certain screen size than the technique shown above will allow.