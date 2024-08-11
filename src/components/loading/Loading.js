import React, { useState } from 'react'
import './loading.css';
import { FadeLoader } from 'react-spinners';

const Loading = () => {
    const [loading, setLoading ] = useState(true);

    setTimeout(() => {
        setLoading(loading => !loading);
    }, 1200);

    if (loading) {
        return (
            <div className="loading-overlay">
                <FadeLoader color="#3edb30" size={60}/>
            </div>
          );
    }

  
}

export default Loading

