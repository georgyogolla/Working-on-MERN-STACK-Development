const contentNode = document.getElementById("contents");

const IssueRow = props => (
  <tr>
    <td>{props.issue.id}</td>
    <td>{props.issue.status}</td>
    <td>{props.issue.owner}</td>
    <td>{props.issue.created.toDateString()}</td>
    <td>{props.issue.effort}</td>
    <td>
      {props.issue.completionDate
        ? props.issue.completionDate.toDateString()
        : ""}
    </td>
    <td>{props.issue.title}</td>
  </tr>
);

// IssueRow.propTypes = {
// 	issue_id: React.propTypes.number.isRequired,
// 	issue_title: React.propTypes.string
// };
class IssueFilter extends React.Component {
  render() {
    return <div>This is a placeholder for the Issue Filter.</div>;
  }
}

function IssueTable(props) {
  const issueRows = props.issues.map(issue => (
    <IssueRow key={issue.id} issue={issue} />
  ));
  return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Status</th>
          <th>Owner</th>
          <th>Created</th>
          <th>Effort</th>
          <th>Completion Date</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>{issueRows}</tbody>
    </table>
  );
}

class IssueAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    var form = document.forms.issueAdd;
    this.props.createIssue({
      owner: form.owner.value,
      title: form.title.value,
      status: "New",
      created: new Date()
    });
    // clear the form for the next input
    form.owner.value = "";
    form.title.value = "";
  }
  render() {
    return (
      <div>
        <form name="issueAdd" onSubmit={this.handleSubmit}>
          <input type="text" name="owner" placeholder="Owner" />
          <input type="text" name="title" placeholder="Title" />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

const issues = [
  {
    id: 1,
    status: "Open",
    owner: "Ravan",
    created: new Date("2016-08-15"),
    effort: 5,
    completionDate: undefined,
    title: "Error in console when clicking Add"
  },
  {
    id: 2,
    status: "Assigned",
    owner: "Eddie",
    created: new Date("2016-08-16"),
    effort: 14,
    completionDate: new Date("2016-08-30"),
    title: "Missing bottom border on panel"
  }
];

class IssueList extends React.Component {
  constructor() {
    super();
    this.state = { issues: [] };
    // setTimeout(this.createTestIssue.bind(this), 2000);
    this.createIssue = this.createIssue.bind(this);
    //setTimeout(this.createTestIssue, 2000);
  }

  createIssue(newIssue) {
    const newIssues = this.state.issues.slice();
    newIssue.id = this.state.issues.length + 1;
    newIssues.push(newIssue);
    this.setState({ issues: newIssues });
  }
  // createTestIssue() {
  //   this.createIssue({
  //     status: "New",
  //     owner: "pieta",
  //     created: new Date(),
  //     title: "Completion date should be optional"
  //   });
  // }
  componentDidMount() {
    this.loadData();
  }
  loadData() {
    setTimeout(() => this.setState({ issues: issues }), 2000);
  }
  render() {
    return (
      <div>
        <h1>Issue Tracker</h1>
        <IssueFilter />
        <hr />
        <IssueTable issues={this.state.issues} />
        <hr />
        <IssueAdd createIssue={this.createIssue} />
      </div>
    );
  }
}
ReactDOM.render(<IssueList />, contentNode);
//REST - Representational State Transfer . an architectural pattern for application programming interfaces (APIs)
//URI(Endpoint)  - Uniform Resource Identifier..Resources are accessed based on *URI*
/*To access and manipulate the resources, you use HTTP methods. While resources were
  nouns, the HTTP methods are verbs that operate on them. They map to CRUD (Create,
  Read, Update, Delete) operations on the resource. Tables 5-1 shows commonly used
  mapping of CRUD operations to HTTP methods and resources*/
