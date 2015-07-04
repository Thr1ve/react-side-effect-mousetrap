var createSideEffect require('react-side-effect');

var _keyMap = {};

var Keybindings = createSideEffect(function handleChange(propsList) {

  var keyMap = {};

  propsList.forEach(function (props) {
    //add object assign polyfill to make this standalone
    Object.assign(keyMap, props.keyMap);
  });

  for (var key in keyMap) {
    Mousetrap.bind(key, keyMap[key]);
    _keyMap[key] = keyMap[key];
  }
},{
  componentWillUnmount() {
    for (var key in _keyMap){
      Mousetrap.unbind(key);
    }
  }
});

module.exports = Keybindings;
