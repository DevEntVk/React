const element=React.createElement('h1',{id:"head",className:"header",style:{backgroundColor:"Blue",color:"white"}},"Hello Universe");
const element1=React.createElement('h2',{id:"head1",className:"header1",style:{backgroundColor:"black",color:"white"}},"hello Cosmos");
const div=React.createElement('div',{id:"first",className:"Hello"},[element,element1]);

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(div);
