import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from '../components/Button';

function ButtonPage() {
    const handleClick = () => {
        console.log('Click!!');
    };

    return (
        <div>
            <div>
                <Button primary className="mb-5" onClick={handleClick}>
                    <GoBell />
                    Primary
                </Button>
            </div>
            <div>
                <Button secondary>
                    <GoCloudDownload />
                    Secondary
                </Button>
            </div>
            <div>
                <Button success>
                    <GoDatabase />
                    Success
                </Button>
            </div>
            <div>
                <Button warning>Warning</Button>
            </div>
            <div>
                <Button danger>Danger</Button>
            </div>
        </div>
    );
}

export default ButtonPage;
