class IssueFilter extends React.Component{
    render(){
        return(
            <div>placeholder for issue filter</div>
        );
    }
}

class IssueTable extends React.Component{
    render(){
        return(
            <div>placeholder for issue table</div>
        );
    }
}

class IssueAdd extends React.Component{
    render(){
        return(
            <div>placeholder for issue add</div>
        );
    }
}

class IssueList extends React.Component {
    render() {
      return (
        <div>
          <h1>Issue Tracker</h1>
          <IssueFilter />
          <hr />
          <IssueTable />
          <hr />
          <IssueAdd />
        </div>
      );
    }
}

class HelloWorld extends React.Component{
    render(){
        const continents = ['Africa', 'America', 'Asia', 'Australia', 'Europe'];
        const helloContinents = Array.from(continents, c=>`Hello ${c}!`);
        const message = helloContinents.join(' ');

        return(
            <div title="Outer div">
                <h1>{message}</h1>
            </div>
        );
    }
}
//const element = <HelloWorld />;
const contentNode = document.getElementById('contents');
//ReactDOM.render(element, document.getElementById('contents'));
ReactDOM.render(<IssueList />, contentNode);    // Render the component inside the content Node
