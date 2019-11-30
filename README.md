# React-template-create
A CLI tool for easy react app development.

# Description
Creating a component file and writng the same boilerplate code can be tedious. This package lets you create boiler code and files in your react project.

## Setup 
```
 npm install -g react-template-create
```

### Config file (optional)
By default it creates components folder in the src folder. But to customize  the behaviour create a template.config.js file

### Default config
```
 module.exports = {
    root : 'src',
    component: 'components',
    pages: 'views',
    reactCompType: 'class',
    styleExt: 'css',
    testExt: 'spec.js',
    reactExt: 'jsx',
    autoCreateTest: false,
    autoCreateStyle: false,
}
```
name | function 
----- | ----- 
root | All files are created in the src folder by default. changing this option would change the folder name.
component | All components are created in the [root]/component folder by default. changing this option would change the folder name. 
pages | Routes or pages are created in the [root]/views folder by default. changing this option would change the folder name.
reactCompType | Class components are created by default if the -f flag is not passed in the terminal. changing it to 'func', creates functional components if -c flag is not passed
styleExt | Styles are created with the .css extension by default. changing this option would change the extension.
testExt | Test files are created with the .spec.js extension by default. changing this option would change the extension.
reactExt | Styles are created with the .jsx extension by default. changing this option would change the extension.
autoCreateTest | By default it doesn't create any test file. Making this option true create a sample test file using enzyme and snapshot testing. To overide this function in the command line you can pass the -no-test or -no-t flag. Otherwise leave the option as false and pass the -t or -test flags to manually create test files on every command.
autoCreateStyle | By default it doesn't create any style file. Making this option true create style files. To overide this function in the command line you can pass the -no-style or -no-s flag. Otherwise leave the option as false and pass the -s or -style flags to manually create style files on every command 


### Options
name | function | short-hand
----- | ----- |------
-comp |creates files in components folder depending on the name in your config file for 'component'| N/A
-pages | creates files in views folder depending on the name in your config file for 'pages' | N/A
-func | generates a functional based comp | -f
-class | generates a class based component comp | -c
-style | includes a style file | -s
-test | includes a test file | -t
-no-style | doesn't include a style file if the autoCreateStyle option is set to true in your config | -no-s
-no-test | doesn't include a test file if the autoCreateTest opiton is set to true in your config | -no-t


### To begin just type in your terminal of your working directory
! First argument should be the name of the component not a flag

r-create <name> <type> <and any other flags ...>
For example
```
r-create navbar -comp
```
The above creates a src/components/Navbar folder with boiler plate code in the index.js file below
```
import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Navbar;
```

Example 2
```
r-create Home -page -func -style -test
```
or 
```
r-create Home -page -f -s -t
```

Generates the following
- src/views/Home/index.js with content
    ```
    import React from 'react';
    import './Home.scss'

    const Home = () => {
        return (
            <div>
                
            </div>
        )
    }

    export default Home;
    ```

-   src/views/Home/index.spec.js with content
    ```
    import React from 'react';
    import { shallow, mount } from 'enzyme';
    import Home from './index';

    describe('Home Component', () => {
    
    it('renders and matches the snapshot', () => {
        const component = shallow(<Home />);
        expect(component).toMatchSnapshot();
    });
    
    // FURTHER TEST GOES HERE..
    
    });

    ```

-   src/views/Home/Home.css file

 
