import { listData } from "../../lib/dummy";
import "./listPage.scss";

function ListPage(){

    const data = listData
    return <div className='listPage'>
        <div className="listContainer">
            <div className="wrapper"></div>
        </div>
        <div className="mapContainer">Map</div>
    </div>
}
export default ListPage;