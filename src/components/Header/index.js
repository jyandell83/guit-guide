import React from 'react';



const Header = ({root, scale}) =>  {
    return(
        <div>
            <h1 className="margin-top-small primary-header">
                The Guit Guide
            </h1>
            <h2 className="margin-top-small">
                {root} - {scale}
            </h2>
        </div>
    )
}

export default Header;