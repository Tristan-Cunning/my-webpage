# CSS Basics

- Padding --> Border --> Margin (in-->out)

Css rules:

selector {
    property: value;
    property: value;
    property: value;
}

CSS cheat sheet in bookmarks

- CSS link: '<link rel="stylesheet" href="styles.css">'
- Selectors (precedency rules)
    - Tag: e.g. 'body {...}' ,'nav {...}'
    - Attributes: e.g. '[type=text] {...}'
    - Class: e.g. '
    - ID
    - '!important' - Do not use

    - Grouping

- Avoid overqualification
    - Redundant rules add more work for the machine while accomplishing the same as a simpler approach

- Descendant selector
    - Specifying: p .profile-text {...} - every "profile-text" class element that is nested in a 'p' is affected
    - Universal selector '* {...}'
- Google fonts is where you can get fonts

- Paul Irish reset
    - Use one css rule to affect the whole page; stripping all the css off of it. (Margin, padding...)

# Text Styling and Alignment

- text-decoration: 'type';
- font-weight: 'type';
- font-style: 'type;
- text-align: 'direction (left, center, right, justify)';
- margin: x1 x2 x3 x4; top right bottom left

# Lists
- Using PI reset can mess up how they are aligned on a page. Placing a css rule on them can restore padding making it look better.
- list-style-type: 'type(disk, square...etc.)';
- devdoc.io for reference.
- 

## Styles
- list-style-type: 'disc,

# Display modes (3F)
- 'block' elements
- 'inline' elements
- 'inline block' elements
- 'flex' elements
- 