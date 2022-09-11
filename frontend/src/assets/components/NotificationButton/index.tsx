import axios from 'axios';
import { BASE_URL } from '../../../utils/request';
import icon from '../../img/notification-icon.svg'
import './styled.css'

type Props = {
    saleId: number;
}

function handleClick(saleId: number) {
    axios(`${BASE_URL}/sales/${saleId}/notification`).then(Response => {
        console.log("sucesso")
    });
}

function NotificationButton({ saleId }: Props) {
    return (
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
            <img src={icon} alt="Notificar" />
        </div>
    )
}

export default NotificationButton
