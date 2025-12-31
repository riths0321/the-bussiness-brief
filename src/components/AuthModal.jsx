import React, { useState } from 'react';
import SignUpModal from '../components/SignUpModal';
import SignInModal from '../components/SignInModal';


const AuthModal = ({ isOpen, onClose }) => {
    const [activeModal, setActiveModal] = useState('signin');

    if (!isOpen) return null;

    return (
        <>
            <SignInModal
                isOpen={activeModal === 'signin'}
                onClose={onClose}
                onSwitchToSignUp={() => setActiveModal('signup')}
            />

            <SignUpModal
                isOpen={activeModal === 'signup'}
                onClose={onClose}
                onSwitchToSignIn={() => setActiveModal('signin')}
            />
        </>
    );
};


export default AuthModal;
