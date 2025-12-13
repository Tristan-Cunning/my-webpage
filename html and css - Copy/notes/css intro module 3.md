# 3F: Display modes- block, inline, inline-block, and flex
- Block element
    - Contains the info inside. Takes uo the whole area.
        - e.g. div, header
    - display: inline; makes them go  into the same row. Box width becomes unnecesary as it takes only room needed.


- Inline element
    - is the info inside
        - e.g. strong, 

- Inline-Block element
    - 

- Flexbox
    - Flex creates a container that lets you organize the other elements in it according to main and cross axis.
        - justify-content = main axis
        - align-items = cross axis
    - Rows/columns
    - Doesn't care about space between elements


# 3G: CSS Units

- Absolute
    - Things that always have the same size
    - 'px'

- Relative
    - 'em' Re;ative to font-size of parent element
    - 'rem' Relative to font-size of the root element. 2rem would be 2*html (better way)
    - 'vw' Relative to 1% of width of viewport
    - 'vh'Relative to 1% of the height of the viewport
    - '%' Relative to the parent element
- 'calc()' - works with different units
    - e.g. calc(2rem - 5px)


# 3H: Box Model

- Element
- Padding
- Border
- Margin

- Background color (completely includes the border)

- margin: top right bottom left --> margin: 0 0 0 0;
- margin: top (left-right) bottom --> margin: 0 0 0;
- margin: (top-bottom) (left-right) --> margin: 0 0;
- margin: all --> margin: 0;


# 3J: Background Images

## Background
- e.g. 'background-image: url (.....);'
- e.g. 'background-size: cover;'
- e.g. 'background-positition: center center'
- e.g. 'background-repeat: no-repeat;'
- e.g. 'background--attachment: fixed;'

## Parralax- two axes on the page. One scrolls while whte other stays stationary
- Will be using to place a background image that is visible on the page in the white areas
- 


# 3K Styling the form

# process
- Class the sections form is in
- Center it using flex display with center justification
- Manipulate the width margin and padding 
- Send button can use box shadow to stand out
- cursor: pointer; makes hovering button turn mouse icon to a pointer
- 