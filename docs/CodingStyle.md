# Coding Style

Some of the rules to follow when creating a new components are

1. Extension of each component file must be ```.jsx```
2. For each component ```MyComponent.jsx```, a corressponding css file for styles must be present in same location and named ```MyComponent.css```
3. All components must be functional and created and normal javascript functions.
4. A template for functional components must look like
```javascript
  import React from 'react'

  function MyComponent(props) {

    return (
      <React.Fragment>
        Some JSX here
      </React.Fragment>
    )
  }

  export default MyComponent
```
5. For handling events or hooks, only arrow functions should be used
6. When importing, the import statements should be divided into 2 sections using a newline.
  The first section will contain imports from installed libraries or packages.
  The section will contain imports from the src folder.
```javascript
  import React from 'react'
  import { Link } from 'react-router-dom'
  import { Button } from '@material-ui/core'

  import './MyComponent.css'
  import Icon from 'Image.svg'
```
