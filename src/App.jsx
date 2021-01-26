class IssueFilter extends React.Component {
    render() {
      return (
        <div>This is a placeholder for the issue filter.</div>
      );
    }
  }

  class IssueRow extends React.Component {
      render() {
        return (
            <td>{this.props.issue_title}</td>
        )
      }

  }
  
  class IssueTable extends React.Component {
    render() {
      return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
                <IssueRow issue_title="Title"/> 
                <IssueRow issue_title="Title"/>
            </tbody>
        </table>
      );
    }
  }
  
  class IssueAdd extends React.Component {
    render() {
      return (
        <div>This is a placeholder for a form to add an issue.</div>
      );
    }
  }
  
  class IssueList extends React.Component {
    render() {
      return (
        <React.Fragment>
          <h1>Issue Tracker</h1>
          <IssueFilter />
          <hr />
          <IssueTable />
          <hr />
          <IssueAdd />
        </React.Fragment>
      );
    }
  }
  
  const element = <IssueList />;
  
  ReactDOM.render(element, document.getElementById('contents'));