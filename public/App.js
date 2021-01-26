const issues = [{
  id: 1,
  status: 'New',
  owner: 'Ravan',
  effort: 5,
  created: new Date(),
  due: undefined,
  title: 'Error in console when clicking Add'
}, {
  id: 2,
  status: 'Assigned',
  owner: 'Eddie',
  effort: 14,
  created: new Date('2018-08-16'),
  due: new Date('2018-08-30'),
  title: 'Missing bottom border on panel'
}];

class IssueFilter extends React.Component {
  render() {
    return React.createElement("div", null, "This is a placeholder for the issue filter.");
  }

}

class IssueRow extends React.Component {
  render() {
    const issue = this.props.issue;
    return React.createElement("tr", null, React.createElement("td", null, issue.id), React.createElement("td", null, issue.status), React.createElement("td", null, issue.owner), React.createElement("td", null, issue.created.toDateString()), React.createElement("td", null, issue.effort), React.createElement("td", null, issue.due ? issue.due.toDateString() : ''), React.createElement("td", null, issue.title));
  }

}

class IssueTable extends React.Component {
  render() {
    const issueRows = issues.map(issue => React.createElement(IssueRow, {
      key: issue.id,
      issue: issue
    }));
    return React.createElement("table", {
      className: "bordered-table"
    }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "ID"), React.createElement("th", null, "Status"), React.createElement("th", null, "Owner"), React.createElement("th", null, "Created"), React.createElement("th", null, "Effort"), React.createElement("th", null, "Due Date"), React.createElement("th", null, "Title"))), React.createElement("tbody", null, issueRows));
  }

}

class IssueAdd extends React.Component {
  render() {
    return React.createElement("div", null, "This is a placeholder for a form to add an issue.");
  }

}

class IssueList extends React.Component {
  render() {
    return React.createElement(React.Fragment, null, React.createElement("h1", null, "Issue Tracker"), React.createElement(IssueFilter, null), React.createElement("hr", null), React.createElement(IssueTable, null), React.createElement("hr", null), React.createElement(IssueAdd, null));
  }

}

const element = React.createElement(IssueList, null);
ReactDOM.render(element, document.getElementById('contents'));