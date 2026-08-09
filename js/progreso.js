const TestProgress=(()=>{const prefix="tests_policia_v1_";
function get(theme){try{return JSON.parse(localStorage.getItem(prefix+theme))}catch{return null}}
function set(theme,data){localStorage.setItem(prefix+theme,JSON.stringify(data))}
function clear(theme){localStorage.removeItem(prefix+theme)}
return{get,set,clear}})();
