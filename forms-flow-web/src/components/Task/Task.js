import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import { Dropdown } from 'react-bootstrap';
import React from 'react'


const { SearchBar } = Search;

const tasks = [
    { taskName: "Task1", formName: "Form 1", taskStatus: "Claimed",submitedBy:"Robert",dueDate:"Set due date" ,actions:"View"},
    { taskName: "Task2", formName: "Form 2", taskStatus: "Approved",submitedBy:"Victor",dueDate:"Set due date" ,actions:"View"},
    { taskName: "Task3", formName: "Form 1", taskStatus: "Rejected",submitedBy:"Berlin",dueDate:"Set due date",actions:"View" },
    { taskName: "Task4", formName: "Form 1", taskStatus: "Claim Now",submitedBy:"Jasper",dueDate:"Set due date" ,actions:"View"},
];
const columns = [{
  dataField: 'taskName',
  text: 'Task Name'
}, {
  dataField: 'formName',
  text: 'Form Name'
}, 
{
    dataField: 'taskStatus',
    text: 'Task Status',
    formatter:buttonFormatter,
  },{
  dataField: 'submitedBy',
  text: 'Submitted By'
},
{
    dataField: 'dueDate',
    text: 'Due Date',
    formatter:linkButton,
  },
  {
    dataField: 'actions',
    text: 'Actions',
    formatter:viewButton,
  }];
  function linkButton()
  {
    return  <button type="button"  className="btn btn-link">Set due date</button>
  }
  function viewButton(cell, row)
  {
    return <button className="btn btn-primary btn-sm">view</button>;
  }
  function buttonFormatter(cell, row){
      if(cell==="Claimed")
      {
        return <button className="btn btn-primary btn-sm">Claimed</button>;
      }
      else if(cell==="Approved")
      {
        return <button className="btn btn-success btn-sm">Approved</button>;
      }
      else if(cell==="Rejected")
      {
        return <button className="btn btn-danger btn-sm">Rejected</button>;
      }
      else if(cell==="Claim Now")
      {
        return <button className="btn btn-outline-primary btn-sm">Claim Now</button>;
      }
      
}
const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      Showing { from } to { to } of { size } Results
    </span>
  );
  
  const options = {
    paginationSize: 4,
    pageStartIndex: 0,
     alwaysShowAllBtns: true, // Always show next and previous button
     withFirstAndLast: false, // Hide the going to First and Last page button
     hideSizePerPage: true, // Hide the sizePerPage dropdown always
    // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
    firstPageText: 'First',
    prePageText: 'Previous',
    nextPageText: 'Next',
    lastPageText: 'Last',
    nextPageTitle: 'First page',
    prePageTitle: 'Pre page',
    firstPageTitle: 'Next page',
    lastPageTitle: 'Last page',
    showTotal: false,
    paginationTotalRenderer: customTotal,
    disablePageTitle: true,
    sizePerPageList: [{
      text: '5', value: 5
    }, {
      text: '10', value: 10
    }, {
      text: 'All', value: tasks.length
    }] // A numeric array is also available. the purpose of above example is custom the text
  };


export default () => (
    <ToolkitProvider
      keyField="id"
      data={ tasks }
      columns={ columns }
      search
    >
      {
        props => (
          
            <div className="container"><br></br><div className="row"><h3 className="col-md-6">Tasks</h3>
            <div className="col-md-6 btn-group">
            {/* <Dropdown> 
                <Dropdown.Toggle id="dropdown-forms">
                    Dropdown Button
                </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>All Forms</Dropdown.Item>
                    </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
            <Dropdown.Toggle  id="dropdown-tasks">
                Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item >All Task</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown> */}
            <SearchBar { ...props.searchProps} />
            {/* <SearchBar { ...props.searchProps.placeholder = 'Search forms'} /> */}
            </div>
            </div>
          <div>
            <BootstrapTable bordered={ false } pagination={ paginationFactory(options)}
              { ...props.baseProps }
            />
            
            <br />
          </div>
          </div>
        )
      }
    </ToolkitProvider>
    
);