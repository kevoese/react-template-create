const styleImport = (name, ext) => `import './${name}.${ext}'
`;

const funcComp = (name, { status, ext }) => `import React from 'react';
${status ? styleImport(name, ext) : ''}
const ${name} = () => {
    return (
        <div ${status ? `className="${name.toLowerCase()}"` : ''} >
            
        </div>
    )
}

export default ${name};
`;

const classComp = (
  name,
  { status, ext }
) => `import React, { Component } from 'react';
${status ? styleImport(name, ext) : ''}
class ${name} extends Component {
    state = {

    };

    render() {
        return (
            <div ${status ? `className="${name.toLowerCase()}"` : ''} >
                
            </div>
        )
    }
}

export default ${name};
`;

const testFile = name => `import React from 'react';
import { shallow, mount } from 'enzyme';
import ${name} from './index';

describe('${name} Component', () => {
  it('renders and matches the snapshot', () => {
    const component = shallow(<${name} />);
    expect(component).toMatchSnapshot();
  });
  
  // FURTHER TEST GOES HERE..

});
`;

const styleFile = name => `.${name.toLowerCase()} {
    
}
`;

const reactFile = (type, name, style) => {
  if (type === 'class') {
    return classComp(name, style);
  }
  return funcComp(name, style);
};

module.exports = {
  reactFile,
  testFile,
  styleFile,
};
