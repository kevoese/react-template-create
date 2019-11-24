const funcComp = name => `import React from 'react';

const ${name} = () => {
    return (
        <div>
            
        </div>
    )
}

export default ${name};
`;

const classComp = (name) => `import React, { Component } from 'react';

class ${name} extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default ${name};
`;

const testFile = name => `import React from 'react';
import { shallow } from 'enzyme';
import ${name} from './index';

describe('${name} Component', () => {
  it('Should render without errors', () => {
    const component = shallow(<${name} />);
    expect(component).toMatchSnapshot();
  });
});
`;

const reactFile = (type, name) => {
 if (type === 'class') {
     return classComp(name);
 }
 return funcComp(name);
}

module.exports = {
    reactFile,
    testFile,
}