Grid Areas are super cool!

Map out the area you are wanting to make with grid, then draw boxes around each layer of the grid, row and column.

Then just use grid-template-areas: and you can fill in each section as a boxes of your grid. Then assign those names
to the html elements they belong to

For Example, this grid will give us a 3x3 layout, top left being tiger, bottom right being content:

```
display: grid;
grid-template-areas:
  "tiger header header"
  "tiger dog content"
  "polarbear dog content";
```

```
.tiger {
  grid-area: tiger;
}

h1 {
  grid-area: header;
}

.dog {
  grid-area: dog;
}

.polarbear {
  grid-area: polarbear;
}

.content {
  grid-area: content;
}
```
