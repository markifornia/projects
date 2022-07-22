# Sass Crash Course

Sass refersher crash course credit to [https://www.youtube.com/watch?v=nu5mdN2JIwM](Traversy Media)

This course is dated back to 2020, but most of the base features are mostly the same. 

## What is Sass
- Sass (Syntactically Awesoe Stylesheets)
- CSS Preprocessor / Extension
- Let's you use features that do not exist in CSS
- Sass (scss) files are compiled to regular CSS

## Variables in CSS
- Prefixed with a "$"
- $primary-color: blue
- Easier to read and write than CSS custom properties

```
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
    font: 100% $font-stack;
    color: $primary-color;
}

```

## Nesting

#### Using Sass

```

nav {
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    li {
        display: inline-block;
    }

    a {
        display: block;
        padding: 6px 12px;
        text-decoration: none;
    }
}

```

#### Using Sass

```

nav ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

nav li {
    display: inline-block;
}

nav a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
}

```

## Modules

#### Using Sass

```

// _base.scss
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
    font: 100% $font-stack;
    color: $primary-color;
}

// styles.scss
@use 'base';

.inverse {
    background-color: base.$primary-color;
    color: white;
}

```

#### Using CSS

```

body {
    font: 100% Helvetica, sans-serif;
    color: #333;
}

.inverse {
    background-color: #333;
    color: white;
}

```

## Mixins & Functions

#### Using Sass

@mixin transform($property) {
    -webkit-transform: $property;
    -ms-transform: $property;
    transform: $property;
}

.box {
    @include transform(rotate(30deg));
}

#### Using CSS

.box {
    -webkit-transform: rotate(30deg);
    -ms-transform: rotate(30deg);
    transform: rotate(30deg);
}

## Inheritance

```
/* This CSS will print because %message-shared is extended */

%message-shared {
    border: 1px solid #ccc;
    padding: 10px;
    color: #333;
}

.message {
    @extend %message-shared;
}

.success {
    @extend %message-shared;
    border-color: green;
}

.error {
    @extend %message-shared;
    border-color: red;
}

.warning {
    @extend %message-shared;
    border-color: yellow;
}



```

## Operators

#### Using Sass

```

.container {
    width: 100%;
}

article[role="main"] {
    float: left;
    width: 60px / 960px * 100%;
}

aside[role="complementary"] {
    float: right;
    width: 300px / 960px * 100%;
}

```

#### Using CSS

```

.container {
    width: 100%;
}

article[role="main"] {
    float: left;
    width: 62.5%;
}

aside[role="complementary"] {
    float: right;
    width: 31.25%;
}


```

## Conditionals

#### Using Sass

```

@mixin triangle($size, $color, $direction) {
    height: 0;
    width: 0;

    border-color: transparent;
    border-style: solid;
    border-width: $size / 2;

    @if $direction == up {
        border-bottom-color: $color;
    } @else if $direction == right {
        border-left-color: $color;
    } @else if $direction == down {
        border-top-color: $color;
    } @else if $direction  == left {
        border-right-color: $color;
    } @else {
        @error "Unknown direction #{direction}.";
    }

}

.next {
    @include triangle(5px black, right);
}

```

#### Using CSS

```

.next {
    height: 0;
    width: 0;
    border-color: transparent;
    border-style: solid;
    border-width: 2.5px;
    border-left-color: black;
}

```

#### Installing Sass

```

sudo npm i -g sass

```

#### Running Sass (compile)

```

sass --watch  scss/style.scss css/style.css // --compressed

```