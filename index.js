

// with jsx


class Hello extends React.Component {

    render () {

        return <div> Привет , {this.props.toWhat} </div>;

    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Hello toWhat 'Мир'/>);





// without jsx


class Hello extends React.Compoent {

    render () {

        return React.createElement ('div',null,'Привет , ${this.props.toWhat}');

    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(React.createElement(Hello, {toWhat : 'Мир'}, null));



// scratch createElement

const e = React.createElement;

const root = ReactDOM.createRoot(document/getElementById('root'));




    const e = React.createElement;


                          // Отобразить <button> с текстом нравится

          return e (

              'button' ,

              { onClick: () => this.setState ({liked : true}) },

              'Нравится'

          );


          return (

              <button onClick {() => this.setState ({liked: true})}> Нравится </button>

          );
