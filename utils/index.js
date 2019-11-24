    /*
  -c : class-component
  -f : func-component
  -no-s: doesn't includes styles
  -no-t: doesn't includes tests
  -s: include style
  -t: include test
  
  e.g r-create navbar -page -f -no-s -no-t
  */
  

const capitalize = name => {
    if (typeof name !== 'string') return '';
    return name.charAt(0).toUpperCase() + name.slice(1);
  };
  
  const getInfo = (opt, config) => {
    let struct = {
      style: config.autoCreateTest,
      test: config.autoCreateStyle,
      folderType: 'component',
      compType: config.reactCompType,
      name: capitalize(opt[0]),
    };
  
    function updateStruct(obj) {
      struct = { ...struct, ...obj };
    }
  
    opt.forEach(flag => {
      if (flag === '-f') {
        updateStruct({ compType: 'func' });
      }
      if (flag === '-c') {
        updateStruct({ compType: 'class' });
      }
      if (flag === '-no-s' || flag === '-no-style') {
        updateStruct({ style: false });
      }
      if (flag === '-no-t' || flag === '-no-test') {
        updateStruct({ test: false });
      }
      if (flag === '-s' || flag === '-style') {
        updateStruct({ style: true });
      }
      if (flag === '-t' || flag === '-test') {
        updateStruct({ test: true });
      }
      if (flag === '-page') {
        updateStruct({ folderType: 'pages' });
      }
      if (flag === '-comp') {
        updateStruct({ folderType: 'component' });
      }
    });
  
    return {
      path: `${config.root}/${config[struct.folderType]}/${struct.name}`,
      ...struct,
    };
  }
  
  module.exports = getInfo;