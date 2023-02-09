import AgendaView from './agenda-view';
import TableView from './table-view';

function HomeScreen(props) {
  return (<div>We have 2 options:
    <div>Agenda view: <AgendaView /></div>
    <div>Table view: <TableView /></div>
  </div>);
}

export default HomeScreen;