import React from 'react';
import { useParams } from 'react-router';

const Purchase = () => {
    const { toyId } = useParams();
    return (
        <div>
            hello from purchase
        </div>
    );
};

export default Purchase;