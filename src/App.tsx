import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import Status from './components/Status';

function App() {
    return (
        <div className="bg-light m-4">
            <table className="table w-50 border border-dark table-hover">
                <thead>
                    <tr>
                        <th scope="col">Full Name</th>
                        <th scope="col">Status</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mark Otto</td>
                        <td><Status /></td>
                        <td>mark@mdo.com</td>
                    </tr>
                    <tr>
                        <td>Larisa Smith</td>
                        <td><Status /></td>
                        <td>larisa@mdo.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default App;
