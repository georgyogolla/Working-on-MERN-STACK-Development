const contentNode = document.getElementById('contents');
class IssueFilter extends React.Component{
    render(){
    return(
        <div>This is a placeholder for the Issue Filter.</div>
    )
    }

};
 class IssueTable extends React.Component{
     render(){
         return(
             <div>This is a placehoder for the Issue Table</div>
         )
     }
 };
 class IssueAdd extends React.Component{
     render(){
     return(
         <div>This is a placeholder for the Issue Add entry form.</div>
     )
     }
 };

class IssueList extends React.Component {
    render() {
      return (
          <div>
        <h1>Issue Tracker</h1>,
        <IssueFilter />
        <hr />
        <IssueTable />
        <hr />
        <IssueAdd />
        </div>
      );
    }
  } 
  ReactDOM.render(<IssueList />, contentNode);