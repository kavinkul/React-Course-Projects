import Modal from '../components/Modal';
import Button from '../components/Button';
import { useState } from 'react';

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = (
        <div>
            <Button onClick={handleClose} primary>
                I Accept
            </Button>
        </div>
    );

    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar}>
            <p>Here is an important agreement for you to accept.</p>
        </Modal>
    );

    return (
        <div>
            <Button onClick={handleClick} primary>
                Open Modal
            </Button>
            {showModal && modal}
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                lacinia dignissim felis, suscipit semper neque imperdiet et.
                Vestibulum venenatis vitae neque sed congue. Quisque a vulputate
                metus. Aenean lacinia, orci sit amet molestie feugiat, est
                mauris tempus tortor, at varius libero quam in elit. Etiam eget
                ipsum quis ligula malesuada iaculis in in sem. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Pellentesque consectetur
                pellentesque tempus.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                lacinia dignissim felis, suscipit semper neque imperdiet et.
                Vestibulum venenatis vitae neque sed congue. Quisque a vulputate
                metus. Aenean lacinia, orci sit amet molestie feugiat, est
                mauris tempus tortor, at varius libero quam in elit. Etiam eget
                ipsum quis ligula malesuada iaculis in in sem. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Pellentesque consectetur
                pellentesque tempus.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                lacinia dignissim felis, suscipit semper neque imperdiet et.
                Vestibulum venenatis vitae neque sed congue. Quisque a vulputate
                metus. Aenean lacinia, orci sit amet molestie feugiat, est
                mauris tempus tortor, at varius libero quam in elit. Etiam eget
                ipsum quis ligula malesuada iaculis in in sem. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Pellentesque consectetur
                pellentesque tempus.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                lacinia dignissim felis, suscipit semper neque imperdiet et.
                Vestibulum venenatis vitae neque sed congue. Quisque a vulputate
                metus. Aenean lacinia, orci sit amet molestie feugiat, est
                mauris tempus tortor, at varius libero quam in elit. Etiam eget
                ipsum quis ligula malesuada iaculis in in sem. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Pellentesque consectetur
                pellentesque tempus.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                lacinia dignissim felis, suscipit semper neque imperdiet et.
                Vestibulum venenatis vitae neque sed congue. Quisque a vulputate
                metus. Aenean lacinia, orci sit amet molestie feugiat, est
                mauris tempus tortor, at varius libero quam in elit. Etiam eget
                ipsum quis ligula malesuada iaculis in in sem. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Pellentesque consectetur
                pellentesque tempus.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                lacinia dignissim felis, suscipit semper neque imperdiet et.
                Vestibulum venenatis vitae neque sed congue. Quisque a vulputate
                metus. Aenean lacinia, orci sit amet molestie feugiat, est
                mauris tempus tortor, at varius libero quam in elit. Etiam eget
                ipsum quis ligula malesuada iaculis in in sem. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Pellentesque consectetur
                pellentesque tempus.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                lacinia dignissim felis, suscipit semper neque imperdiet et.
                Vestibulum venenatis vitae neque sed congue. Quisque a vulputate
                metus. Aenean lacinia, orci sit amet molestie feugiat, est
                mauris tempus tortor, at varius libero quam in elit. Etiam eget
                ipsum quis ligula malesuada iaculis in in sem. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Pellentesque consectetur
                pellentesque tempus.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                lacinia dignissim felis, suscipit semper neque imperdiet et.
                Vestibulum venenatis vitae neque sed congue. Quisque a vulputate
                metus. Aenean lacinia, orci sit amet molestie feugiat, est
                mauris tempus tortor, at varius libero quam in elit. Etiam eget
                ipsum quis ligula malesuada iaculis in in sem. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Pellentesque consectetur
                pellentesque tempus.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                lacinia dignissim felis, suscipit semper neque imperdiet et.
                Vestibulum venenatis vitae neque sed congue. Quisque a vulputate
                metus. Aenean lacinia, orci sit amet molestie feugiat, est
                mauris tempus tortor, at varius libero quam in elit. Etiam eget
                ipsum quis ligula malesuada iaculis in in sem. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Pellentesque consectetur
                pellentesque tempus.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                lacinia dignissim felis, suscipit semper neque imperdiet et.
                Vestibulum venenatis vitae neque sed congue. Quisque a vulputate
                metus. Aenean lacinia, orci sit amet molestie feugiat, est
                mauris tempus tortor, at varius libero quam in elit. Etiam eget
                ipsum quis ligula malesuada iaculis in in sem. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Pellentesque consectetur
                pellentesque tempus.
            </p>
        </div>
    );
}

export default ModalPage;
